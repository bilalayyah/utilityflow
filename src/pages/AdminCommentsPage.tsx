/**
 * Comments admin — not linked anywhere in the site, not in the sitemap,
 * and noindex so search engines ignore it. Only for Bilal: enter the
 * COMMENTS_ADMIN_TOKEN Worker secret once (saved in localStorage), see
 * the newest comments across all tool pages, and delete spam.
 */
import { useState } from 'react';
import { getAiApiBaseUrl } from '../config/ai';
import { SeoHead } from '../components/seo/SeoHead';

interface AdminComment {
  id: string;
  name: string;
  text: string;
  createdAt: string;
  page: string;
}

const TOKEN_STORAGE_KEY = 'uf-comments-admin-token';

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function AdminCommentsPage() {
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem(TOKEN_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });
  const [comments, setComments] = useState<AdminComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function loadRecent(activeToken: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${getAiApiBaseUrl()}/api/comments/recent?token=${encodeURIComponent(activeToken)}`
      );
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        comments?: AdminComment[];
        error?: { message?: string };
      } | null;
      if (!res.ok || !json?.ok) {
        throw new Error(
          res.status === 503
            ? 'Admin delete is not configured yet — set the ADMIN_TOKEN secret on the Worker first.'
            : json?.error?.message || 'Could not load comments.'
        );
      }
      setComments(Array.isArray(json.comments) ? json.comments : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load comments.');
    } finally {
      setLoading(false);
    }
  }

  function handleTokenSubmit(event: React.FormEvent) {
    event.preventDefault();
    const clean = token.trim();
    if (!clean) return;
    try {
      localStorage.setItem(TOKEN_STORAGE_KEY, clean);
    } catch {
      // Private mode etc. — token still works for this session.
    }
    void loadRecent(clean);
  }

  async function handleDelete(comment: AdminComment) {
    setDeletingId(comment.id);
    try {
      const res = await fetch(`${getAiApiBaseUrl()}/api/comments/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: comment.page, id: comment.id, token: token.trim() }),
      });
      if (!res.ok) throw new Error('Delete failed.');
      setComments((prev) => prev.filter((c) => c.id !== comment.id));
    } catch {
      setError('Could not delete that comment. Please try again.');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <>
      <SeoHead
        title="Comments admin — UtilityFlow"
        description="Moderate comments across UtilityFlow tool pages."
        canonicalPath="/admin/comments"
        noIndex
      />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Comments admin</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Newest comments across all tool pages. Deleting here removes the comment from the site.
        </p>

        <form onSubmit={handleTokenSubmit} className="mt-6 flex gap-2">
          <label htmlFor="admin-token" className="sr-only">
            Admin token
          </label>
          <input
            id="admin-token"
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Admin token (ADMIN_TOKEN)"
            autoComplete="off"
            className="min-w-0 flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            disabled={token.trim().length === 0 || loading}
            className="shrink-0 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Loading…' : 'Load comments'}
          </button>
        </form>

        {error && (
          <p role="alert" className="mt-4 text-sm text-rose-600 dark:text-rose-400">
            {error}
          </p>
        )}

        <div className="mt-6 space-y-4">
          {!loading && comments.length === 0 && !error && (
            <p className="text-sm text-slate-500 dark:text-slate-400">No comments to show yet.</p>
          )}
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-2xl border border-indigo-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {comment.name}
                </span>
                <span className="text-xs text-slate-400">{formatDate(comment.createdAt)}</span>
                <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-xs text-slate-600 dark:text-slate-300">
                  {comment.page}
                </code>
                <button
                  type="button"
                  onClick={() => void handleDelete(comment)}
                  disabled={deletingId === comment.id}
                  className="ml-auto rounded-lg border border-rose-200 dark:border-rose-900 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 disabled:opacity-50"
                >
                  {deletingId === comment.id ? 'Deleting…' : 'Delete'}
                </button>
              </div>
              <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap break-words text-slate-700 dark:text-slate-300">
                {comment.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
