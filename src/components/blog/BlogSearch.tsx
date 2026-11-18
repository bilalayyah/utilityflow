import { Search, X } from 'lucide-react';
import { useMemo, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { articleHref } from '../../locales/config';
import {
  getBlogArticleVersion,
  getPublishedBlogArticles,
} from '../../registry/blogArticleMeta';
import type {
  BlogArticleMeta,
  BlogArticleMetaVersion,
} from '../../types/blog';

interface BlogSearchProps {
  placeholder?: string;
  variant?: 'default' | 'hero';
}

interface SearchMatch {
  article: BlogArticleMeta;
  version: BlogArticleMetaVersion;
}

/**
 * Client-side article search (current locale only). Mirrors ToolSearchBar:
 * local query state, capped suggestions in a dropdown, submit navigates to
 * the first result. Search state stays in client state — there is no
 * indexable search URL.
 */
export function BlogSearch({ placeholder, variant = 'default' }: BlogSearchProps) {
  const { locale, t } = useLocale();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const effectivePlaceholder = placeholder ?? t.blog.searchPlaceholder;
  const trimmed = query.trim().toLowerCase();

  const matches = useMemo<SearchMatch[]>(() => {
    if (!trimmed) return [];
    return getPublishedBlogArticles()
      .map((article) => ({
        article,
        version: getBlogArticleVersion(article, locale),
      }))
      .filter(
        (entry): entry is SearchMatch => entry.version !== undefined
      )
      .filter(({ version }) =>
        `${version.title} ${version.description}`
          .toLowerCase()
          .includes(trimmed)
      )
      .slice(0, 6);
  }, [trimmed, locale]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (matches.length > 0) {
      navigate(articleHref(matches[0].version.slug, locale));
    }
  };

  const showDropdown = focused && trimmed.length > 0;
  const isHero = variant === 'hero';

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} role="search" aria-label={t.blog.searchArticles}>
        <div className="relative flex items-center">
          <Search
            className="pointer-events-none absolute left-4 w-5 h-5 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 160)}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={effectivePlaceholder}
            aria-label={t.blog.searchArticles}
            className={
              isHero
                ? 'w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-14 text-base text-slate-900 placeholder:text-slate-400 shadow-md transition-colors focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20'
                : 'w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-28 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 shadow-xs transition-colors focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20'
            }
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label={t.common.clear}
              className={`absolute p-1.5 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer ${
                isHero ? 'right-12' : 'right-20'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {isHero ? (
            <kbd className="pointer-events-none absolute right-4 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-500">
              ⌘K
            </kbd>
          ) : (
            <button
              type="submit"
              className="absolute right-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-indigo-700 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.common.search}
            </button>
          )}
        </div>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
          {matches.length > 0 ? (
            matches.map(({ article, version }) => (
              <Link
                key={article.id}
                to={articleHref(version.slug, locale)}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
              >
                <div className="font-medium text-slate-900">{version.title}</div>
                <div className="text-xs text-slate-500 line-clamp-1">
                  {version.description}
                </div>
              </Link>
            ))
          ) : (
            <div className="px-3 py-4 text-sm text-slate-600 text-center">
              {t.blog.noResults}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
