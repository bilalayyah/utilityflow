/**
 * Anonymous comments under every tool page (rendered by ToolPageLayout,
 * so all 83 tools x 11 languages get it from one place).
 *
 * No account needed: the visitor types a name and posts. Comments are
 * stored per page path in the Cloudflare Worker + KV backend
 * (GET/POST /api/comments). One thread per pathname, so each tool and
 * each language has its own comments.
 *
 * The section never breaks the tool page: if the API is unreachable
 * (e.g. the Worker update hasn't deployed yet) the form still renders
 * and failures show a short localized note instead of crashing.
 */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAiApiBaseUrl } from '../../config/ai';
import { useLocale } from '../../locales/LocaleContext';

interface ApiComment {
  id: string;
  name: string;
  text: string;
  createdAt: string;
}

const MAX_TEXT_LEN = 1000;
const NAME_STORAGE_KEY = 'uf-comments-name';

function normalizePage(pathname: string): string {
  const stripped = pathname.replace(/\/+$/, '');
  return stripped === '' ? '/' : stripped;
}

function formatCommentDate(iso: string, locale: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  try {
    return date.toLocaleDateString(locale === 'zh' ? 'zh-CN' : locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

export function CommentsSection() {
  const { locale, t } = useLocale();
  const { pathname } = useLocation();
  const page = normalizePage(pathname);

  const [comments, setComments] = useState<ApiComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [name, setName] = useState(() => {
    try {
      return localStorage.getItem(NAME_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });
  const [text, setText] = useState('');
  const [website, setWebsite] = useState('');
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(false);
    const base = getAiApiBaseUrl();
    fetch(`${base}/api/comments?page=${encodeURIComponent(page)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as { comments?: unknown };
        if (cancelled) return;
        setComments(Array.isArray(json?.comments) ? (json.comments as ApiComment[]) : []);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setLoadError(true);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [page]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanText = text.trim();
    if (cleanName.length < 2 || cleanText.length === 0 || posting) return;
    setPosting(true);
    setPostError(null);
    try {
      const res = await fetch(`${getAiApiBaseUrl()}/api/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, name: cleanName, text: cleanText, website }),
      });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        comment?: ApiComment;
        error?: { message?: string };
      } | null;
      if (!res.ok || !json?.ok || !json.comment) {
        throw new Error(json?.error?.message || 'post failed');
      }
      setComments((prev) => [json.comment as ApiComment, ...prev]);
      setText('');
      try {
        localStorage.setItem(NAME_STORAGE_KEY, cleanName);
      } catch {
        // Private mode etc. — name just won't be remembered.
      }
    } catch {
      setPostError(t.comments.postError);
    } finally {
      setPosting(false);
    }
  }

  const canPost = name.trim().length >= 2 && text.trim().length > 0 && !posting;

  return (
    <section aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="text-2xl font-bold text-[#1D1D1F] dark:text-[#F1F5F9] mb-2">
        {t.comments.title}
      </h2>
      <p className="text-sm text-[#6E6E73] dark:text-[#CBD5E1] mb-5">{t.comments.note}</p>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-[#E5E5EA] dark:border-[#243247] bg-[#F5F5F7] dark:bg-[#131D31] p-4 sm:p-5 shadow-sm space-y-3"
      >
        <div>
          <label htmlFor="comment-name" className="sr-only">
            {t.comments.namePlaceholder}
          </label>
          <input
            id="comment-name"
            type="text"
            value={name}
            maxLength={50}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.comments.namePlaceholder}
            className="w-full rounded-xl border border-[#D2D2D7] dark:border-[#243247] bg-[#FFFFFF] dark:bg-[#0F172A] px-3 py-2.5 text-sm text-[#1D1D1F] dark:text-[#F1F5F9] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0E8A66]"
          />
        </div>
        {/* Honeypot: hidden from humans, bots that fill it get rejected. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="comment-website">Website</label>
          <input
            id="comment-website"
            type="text"
            value={website}
            tabIndex={-1}
            autoComplete="off"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment-text" className="sr-only">
            {t.comments.commentPlaceholder}
          </label>
          <textarea
            id="comment-text"
            value={text}
            maxLength={MAX_TEXT_LEN}
            rows={3}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.comments.commentPlaceholder}
            className="w-full rounded-xl border border-[#D2D2D7] dark:border-[#243247] bg-[#FFFFFF] dark:bg-[#0F172A] px-3 py-2.5 text-sm text-[#1D1D1F] dark:text-[#F1F5F9] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0E8A66] resize-y"
          />
          <div className="mt-1 text-right text-xs text-[#6E6E73] dark:text-[#CBD5E1]">
            {text.length}/{MAX_TEXT_LEN}
          </div>
        </div>
        {postError && (
          <p role="alert" className="text-sm text-rose-600 dark:text-rose-400">
            {postError}
          </p>
        )}
        <button
          type="submit"
          disabled={!canPost}
          className="rounded-full bg-[#0E8A66] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0B7557] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {posting ? t.comments.posting : t.comments.postButton}
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {loading && <p className="text-sm text-[#6E6E73] dark:text-[#CBD5E1]">{t.common.loading}</p>}
        {!loading && loadError && (
          <p className="text-sm text-[#6E6E73] dark:text-[#CBD5E1]">{t.comments.loadError}</p>
        )}
        {!loading && !loadError && comments.length === 0 && (
          <p className="text-sm text-[#6E6E73] dark:text-[#CBD5E1]">{t.comments.empty}</p>
        )}
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="rounded-2xl border border-[#E5E5EA] dark:border-[#243247] bg-[#FFFFFF] dark:bg-[#131D31] p-4 shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0E8A66] text-sm font-bold text-white"
              >
                {comment.name.trim().charAt(0).toUpperCase()}
              </span>
              <span className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F1F5F9]">
                {comment.name}
              </span>
              <span className="text-xs text-[#6E6E73] dark:text-[#CBD5E1]">{formatCommentDate(comment.createdAt, locale)}</span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words text-[#6E6E73] dark:text-[#CBD5E1]">
              {comment.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
