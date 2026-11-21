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
            className="pointer-events-none absolute left-4 w-5 h-5 text-[#86868B] dark:text-[#94A3B8]"
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
                ? 'w-full rounded-2xl border border-[#D2D2D7] bg-[#FFFFFF] py-4 pl-12 pr-14 text-base text-[#1D1D1F] placeholder:text-[#86868B] shadow-sm transition-colors focus:border-[#0E8A66] focus:outline-none focus:ring-2 focus:ring-[#0E8A66]/20 dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:placeholder:text-[#94A3B8] no-native-clear'
                : 'w-full rounded-xl border border-[#D2D2D7] bg-[#FFFFFF] py-3.5 pl-12 pr-28 text-sm sm:text-base text-[#1D1D1F] placeholder:text-[#86868B] shadow-sm transition-colors focus:border-[#0E8A66] focus:outline-none focus:ring-2 focus:ring-[#0E8A66]/20 dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:placeholder:text-[#94A3B8] no-native-clear'
            }
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label={t.common.clear}
              className={`absolute p-1.5 text-[#86868B] hover:text-[#1D1D1F] rounded-md cursor-pointer dark:text-[#94A3B8] dark:hover:text-[#F1F5F9] ${
                isHero ? 'right-12' : 'right-20'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {isHero ? (
            <kbd className="pointer-events-none absolute right-4 rounded-md border border-[#E5E5EA] bg-[#F5F5F7] px-2 py-0.5 text-xs font-semibold text-[#6E6E73] dark:border-[#243247] dark:bg-[#182239] dark:text-[#CBD5E1]">
              ⌘K
            </kbd>
          ) : (
            <button
              type="submit"
              className="absolute right-2 rounded-full bg-[#0E8A66] px-3.5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#0B7557] whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.common.search}
            </button>
          )}
        </div>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] p-2 shadow-lg dark:border-[#243247] dark:bg-[#131D31]">
          {matches.length > 0 ? (
            matches.map(({ article, version }) => (
              <Link
                key={article.id}
                to={articleHref(version.slug, locale)}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-[#F5F5F7] dark:hover:bg-[#182239]"
              >
                <div className="font-medium text-[#1D1D1F] dark:text-[#F1F5F9]">{version.title}</div>
                <div className="text-xs text-[#6E6E73] line-clamp-1 dark:text-[#CBD5E1]">
                  {version.description}
                </div>
              </Link>
            ))
          ) : (
            <div className="px-3 py-4 text-sm text-[#6E6E73] text-center dark:text-[#CBD5E1]">
              {t.blog.noResults}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
