/**
 * Anonymous comments backend for UtilityFlow tool pages.
 *
 * Same API shape as the CompressMyPic comment system so the frontend
 * component is reusable across both sites (only the Worker URL differs):
 *   GET  /api/comments?page=<pathname>   list comments for one page
 *   POST /api/comments {page, name, text} post a comment (no account)
 *   POST /api/comments/delete {page, id, token} admin delete
 *   GET  /api/comments/recent?token=<token> admin list across pages
 *
 * Storage: the existing AI_QUOTA_KV binding (no new KV namespace).
 *   comments:<page>  -> JSON array of StoredComment, newest first
 *   comments:pages   -> JSON array of page paths that have comments
 * Comments post instantly (no approval queue); spam is removed afterwards
 * from /admin/comments with the ADMIN_TOKEN Worker secret.
 * Raw visitor IPs are never stored — rate limiting uses the same hashed
 * visitor key as the AI quota code.
 */
import { getUtcDayKeyAndReset, hashVisitorKey, type QuotaStore } from './rateLimit';
import type { KVNamespaceLike, WorkerEnv } from './types';

export interface StoredComment {
  id: string;
  name: string;
  text: string;
  createdAt: string;
}

export interface CommentWithPage extends StoredComment {
  page: string;
}

const MAX_NAME_LEN = 50;
const MIN_NAME_LEN = 2;
const MAX_TEXT_LEN = 1000;
const MAX_URLS_IN_TEXT = 2;
const MAX_BODY_BYTES = 8192;
const MAX_STORED_PER_PAGE = 500;
const MAX_LISTED_PER_PAGE = 100;
const MAX_PAGES_INDEXED = 500;
const POSTS_PER_WINDOW = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function commentJson(
  body: unknown,
  status: number,
  allowOrigin: string | null
): Response {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
  };
  if (allowOrigin) {
    headers['Access-Control-Allow-Origin'] = allowOrigin;
    headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
    headers['Vary'] = 'Origin';
  }
  return new Response(JSON.stringify(body), { status, headers });
}

function errorBody(code: string, message: string) {
  return { ok: false, error: { code, message } };
}

/** Normalize a site pathname to one comment thread (trailing slash stripped). */
export function normalizeCommentPage(page: unknown): string | null {
  if (typeof page !== 'string') return null;
  const trimmed = page.trim();
  if (!trimmed.startsWith('/') || trimmed.length > 200) return null;
  if (trimmed.includes('..') || trimmed.includes('\\') || trimmed.includes('?')) return null;
  const stripped = trimmed.replace(/\/+$/, '');
  return stripped === '' ? '/' : stripped;
}

function countUrls(text: string): number {
  const matches = text.match(/https?:\/\/|www\./gi);
  return matches ? matches.length : 0;
}

function isStoredComment(value: unknown): value is StoredComment {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.name === 'string' &&
    typeof v.text === 'string' &&
    typeof v.createdAt === 'string'
  );
}

async function readComments(kv: KVNamespaceLike, page: string): Promise<StoredComment[]> {
  const raw = await kv.get(`comments:${page}`);
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isStoredComment).slice(0, MAX_STORED_PER_PAGE);
  } catch {
    return [];
  }
}

async function writeComments(
  kv: KVNamespaceLike,
  page: string,
  comments: StoredComment[]
): Promise<void> {
  await kv.put(`comments:${page}`, JSON.stringify(comments.slice(0, MAX_STORED_PER_PAGE)));
}

async function readPagesIndex(kv: KVNamespaceLike): Promise<string[]> {
  const raw = await kv.get('comments:pages');
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((p): p is string => typeof p === 'string').slice(0, MAX_PAGES_INDEXED);
  } catch {
    return [];
  }
}

async function addPageToIndex(kv: KVNamespaceLike, page: string): Promise<void> {
  const pages = await readPagesIndex(kv);
  if (pages.includes(page)) return;
  pages.push(page);
  await kv.put('comments:pages', JSON.stringify(pages.slice(0, MAX_PAGES_INDEXED)));
}

/** Constant-time string comparison so token checks don't leak length/timing. */
function tokensEqual(a: string, b: string): boolean {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function isAdminTokenValid(env: WorkerEnv, token: unknown): boolean {
  const expected = (env.ADMIN_TOKEN || '').trim();
  if (!expected || typeof token !== 'string') return false;
  return tokensEqual(token.trim(), expected);
}

async function readJsonBody(
  request: Request,
  allowOrigin: string | null
): Promise<{ body: unknown } | { response: Response }> {
  let rawText: string;
  try {
    rawText = await request.text();
  } catch {
    return {
      response: commentJson(errorBody('BAD_REQUEST', 'Unable to read request body.'), 400, allowOrigin),
    };
  }
  if (new TextEncoder().encode(rawText).byteLength > MAX_BODY_BYTES) {
    return {
      response: commentJson(
        errorBody('PAYLOAD_TOO_LARGE', 'Request body exceeds maximum allowed size.'),
        413,
        allowOrigin
      ),
    };
  }
  try {
    return { body: JSON.parse(rawText) as unknown };
  } catch {
    return {
      response: commentJson(errorBody('BAD_REQUEST', 'Invalid JSON request body.'), 400, allowOrigin),
    };
  }
}

/**
 * Handle /api/comments* routes. Returns null when the path is not a
 * comments route so the caller can fall through to the AI endpoints.
 */
export async function handleCommentsRequest(
  request: Request,
  env: WorkerEnv,
  store: QuotaStore,
  clientIp: string,
  allowOrigin: string | null
): Promise<Response | null> {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '');

  const isList = request.method === 'GET' && path === '/api/comments';
  const isPost = request.method === 'POST' && path === '/api/comments';
  const isDelete = request.method === 'POST' && path === '/api/comments/delete';
  const isRecent = request.method === 'GET' && path === '/api/comments/recent';
  if (!isList && !isPost && !isDelete && !isRecent) return null;

  const kv = env.AI_QUOTA_KV;
  if (!kv) {
    return commentJson(
      errorBody('SERVICE_UNAVAILABLE', 'Comments are not available right now.'),
      503,
      allowOrigin
    );
  }

  // --- List comments for one page -----------------------------------------
  if (isList) {
    const page = normalizeCommentPage(url.searchParams.get('page'));
    if (!page) {
      return commentJson(errorBody('BAD_REQUEST', 'A valid page path is required.'), 400, allowOrigin);
    }
    const comments = await readComments(kv, page);
    return commentJson(
      { ok: true, comments: comments.slice(0, MAX_LISTED_PER_PAGE) },
      200,
      allowOrigin
    );
  }

  // --- Admin: recent comments across pages --------------------------------
  if (isRecent) {
    if (!(env.ADMIN_TOKEN || '').trim()) {
      return commentJson(
        errorBody('SERVICE_UNAVAILABLE', 'Admin delete is not configured yet.'),
        503,
        allowOrigin
      );
    }
    if (!isAdminTokenValid(env, url.searchParams.get('token'))) {
      return commentJson(errorBody('FORBIDDEN', 'A valid admin token is required.'), 403, allowOrigin);
    }
    const pages = await readPagesIndex(kv);
    const all: CommentWithPage[] = [];
    for (const page of pages.slice(0, 100)) {
      const comments = await readComments(kv, page);
      for (const comment of comments) all.push({ ...comment, page });
    }
    all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    return commentJson({ ok: true, comments: all.slice(0, 50) }, 200, allowOrigin);
  }

  // --- Admin: delete one comment ------------------------------------------
  if (isDelete) {
    const parsed = await readJsonBody(request, allowOrigin);
    if ('response' in parsed) return parsed.response;
    const body = (parsed.body ?? {}) as Record<string, unknown>;
    if (!(env.ADMIN_TOKEN || '').trim()) {
      return commentJson(
        errorBody('SERVICE_UNAVAILABLE', 'Admin delete is not configured yet.'),
        503,
        allowOrigin
      );
    }
    if (!isAdminTokenValid(env, body.token)) {
      return commentJson(errorBody('FORBIDDEN', 'A valid admin token is required.'), 403, allowOrigin);
    }
    const page = normalizeCommentPage(body.page);
    if (!page || typeof body.id !== 'string') {
      return commentJson(errorBody('BAD_REQUEST', 'A valid page and comment id are required.'), 400, allowOrigin);
    }
    const comments = await readComments(kv, page);
    const remaining = comments.filter((c) => c.id !== body.id);
    if (remaining.length === comments.length) {
      return commentJson(errorBody('NOT_FOUND', 'Comment not found.'), 404, allowOrigin);
    }
    await writeComments(kv, page, remaining);
    return commentJson({ ok: true }, 200, allowOrigin);
  }

  // --- Post a comment (no account needed) ----------------------------------
  const parsed = await readJsonBody(request, allowOrigin);
  if ('response' in parsed) return parsed.response;
  const body = (parsed.body ?? {}) as Record<string, unknown>;

  const page = normalizeCommentPage(body.page);
  if (!page) {
    return commentJson(errorBody('BAD_REQUEST', 'A valid page path is required.'), 400, allowOrigin);
  }
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const text = typeof body.text === 'string' ? body.text.trim() : '';
  if (name.length < MIN_NAME_LEN || name.length > MAX_NAME_LEN) {
    return commentJson(
      errorBody('BAD_REQUEST', `Name must be between ${MIN_NAME_LEN} and ${MAX_NAME_LEN} characters.`),
      400,
      allowOrigin
    );
  }
  if (text.length < 1 || text.length > MAX_TEXT_LEN) {
    return commentJson(
      errorBody('BAD_REQUEST', `Comment must be between 1 and ${MAX_TEXT_LEN} characters.`),
      400,
      allowOrigin
    );
  }
  if (countUrls(text) > MAX_URLS_IN_TEXT) {
    return commentJson(
      errorBody('BAD_REQUEST', 'Comments may contain at most 2 links.'),
      400,
      allowOrigin
    );
  }
  // Honeypot: the form carries a hidden "website" field that humans never
  // fill. Bots that fill it are rejected.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return commentJson(errorBody('BAD_REQUEST', 'Comment rejected.'), 400, allowOrigin);
  }

  // Rate limit: 5 comments per 10-minute window per visitor (hashed IP, never stored raw).
  const { dayKey } = getUtcDayKeyAndReset();
  const visitorHash = await hashVisitorKey(clientIp, dayKey);
  const windowBucket = Math.floor(Date.now() / RATE_WINDOW_MS);
  const rateKey = `comments:window:${windowBucket}:${visitorHash}`;
  const postedThisWindow = await store.getCount(rateKey);
  if (postedThisWindow >= POSTS_PER_WINDOW) {
    return commentJson(
      errorBody('RATE_LIMITED', 'You have posted several comments recently. Please wait a while before posting again.'),
      429,
      allowOrigin
    );
  }
  await store.increment(rateKey, Math.ceil(RATE_WINDOW_MS / 1000));

  const comment: StoredComment = {
    id: crypto.randomUUID(),
    name,
    text,
    createdAt: new Date().toISOString(),
  };
  const comments = await readComments(kv, page);
  comments.unshift(comment);
  await writeComments(kv, page, comments);
  await addPageToIndex(kv, page);
  return commentJson({ ok: true, comment }, 201, allowOrigin);
}
