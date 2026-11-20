import { ArrowRight, Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { categoryHref, localizeStaticPath, toolHref } from '../../locales/config';
import { getLocalizedCategories, searchToolsLocalized } from '../../locales/tools';
import { formatString } from '../../locales/ui';
import { CategoryIcon } from '../common/CategoryIcon';

interface ToolSearchBarProps {
  placeholder?: string;
  onQueryChange?: (value: string) => void;
  showSuggestionsDropdown?: boolean;
  initialQuery?: string;
  variant?: 'default' | 'hero';
}

export function ToolSearchBar({
  placeholder,
  onQueryChange,
  showSuggestionsDropdown = true,
  initialQuery = '',
  variant = 'default',
}: ToolSearchBarProps) {
  const { locale, t } = useLocale();
  const [query, setQuery] = useState(initialQuery);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isHero = variant === 'hero';

  // Phase 9 (P9-3): the hero search shows a ⌘K hint — make it real.
  // Cmd/Ctrl+K focuses the hero search input from anywhere on the page.
  useEffect(() => {
    if (!isHero) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isHero]);

  const effectivePlaceholder = placeholder ?? t.search.placeholder;
  const trimmed = query.trim().toLowerCase();

  const matchingTools = useMemo(() => {
    if (!trimmed) return [];
    return searchToolsLocalized(trimmed, locale, 'all').slice(0, 6);
  }, [trimmed, locale]);

  const matchingCategories = useMemo(() => {
    if (!trimmed) return [];
    return getLocalizedCategories(locale)
      .filter((cat) => {
        const text = [
          cat.name,
          cat.description,
          ...cat.sampleToolNames,
          ...cat.seo.keywords,
        ]
          .join(' ')
          .toLowerCase();
        return text.includes(trimmed);
      })
      .slice(0, 4);
  }, [trimmed, locale]);

  const handleChange = (value: string) => {
    setQuery(value);
    onQueryChange?.(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (matchingTools.length > 0) {
      navigate(toolHref(matchingTools[0].slug, locale));
      return;
    }
    if (matchingCategories.length > 0) {
      navigate(categoryHref(matchingCategories[0].id, locale));
      return;
    }
    navigate(localizeStaticPath('/tools/', locale));
  };

  const showDropdown =
    showSuggestionsDropdown &&
    focused &&
    trimmed.length > 0;

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} role="search" aria-label={t.search.ariaLabel}>
        <div className="relative flex items-center">
          <Search
            className="pointer-events-none absolute left-4 w-5 h-5 text-[#86868B]"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 160)}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={effectivePlaceholder}
            aria-label={t.search.ariaLabel}
            className={
              isHero
                ? 'w-full rounded-2xl border border-[#E5E5EA] bg-white py-4 pl-12 pr-32 text-base text-[#1D1D1F] placeholder:text-[#86868B] shadow-sm transition-colors focus:border-[#0E8A66] focus:outline-none focus:ring-2 focus:ring-[#0E8A66]/20'
                : 'w-full rounded-xl border border-[#E5E5EA] bg-white py-3.5 pl-12 pr-28 text-sm sm:text-base text-[#1D1D1F] placeholder:text-[#86868B] shadow-sm transition-colors focus:border-[#0E8A66] focus:outline-none focus:ring-2 focus:ring-[#0E8A66]/20'
            }
          />
          {query && (
            <button
              type="button"
              onClick={() => handleChange('')}
              aria-label={t.search.clearSearch}
              className={`absolute p-1.5 text-[#86868B] hover:text-[#1D1D1F] rounded-md cursor-pointer ${
                isHero ? 'right-28' : 'right-20'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {isHero ? (
            <button
              type="submit"
              className="absolute right-2 rounded-xl bg-[#0E8A66] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0B7557] sm:px-5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.common.search}
            </button>
          ) : (
            <button
              type="submit"
              className="absolute right-2 rounded-lg bg-[#0E8A66] px-3.5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#0B7557] whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.common.search}
            </button>
          )}
        </div>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl border border-[#E5E5EA] bg-white p-2 shadow-lg dark:border-[#243247] dark:bg-[#131D31]">
          {matchingTools.length > 0 && (
            <div className="mb-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-[#86868B]">{t.search.tools}</div>
              {matchingTools.map((tool) => (
                <Link
                  key={tool.id}
                  to={toolHref(tool.slug, locale)}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-[#F5F5F7] dark:hover:bg-[#182239]"
                >
                  <div>
                    <div className="font-medium text-[#1D1D1F] dark:text-[#F1F5F9]">{tool.name}</div>
                    <div className="text-xs text-[#6E6E73] line-clamp-1 dark:text-[#CBD5E1]">{tool.shortDescription}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#86868B] shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}

          {matchingCategories.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-xs font-semibold text-[#86868B]">{t.search.categories}</div>
              {matchingCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={categoryHref(cat.id, locale)}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-[#F5F5F7] dark:hover:bg-[#182239]"
                >
                  <div className="flex items-center gap-2.5">
                    <CategoryIcon name={cat.iconName} className="w-4 h-4 text-[#0E8A66] shrink-0 dark:text-[#34D399]" />
                    <div>
                      <div className="font-medium text-[#1D1D1F] dark:text-[#F1F5F9]">{cat.name}</div>
                      <div className="text-xs text-[#6E6E73] dark:text-[#CBD5E1]">
                        {formatString(t.category.plannedCount, { count: cat.plannedToolCount })}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#86868B] shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}

          {matchingTools.length === 0 && matchingCategories.length === 0 && (
            <div className="px-3 py-4 text-sm text-[#6E6E73] text-center dark:text-[#CBD5E1]">
              {formatString(t.search.noResults, { query: query.trim() })}{' '}
              <Link to={localizeStaticPath('/tools/', locale)} className="font-semibold text-[#0B7A59] hover:underline dark:text-[#34D399]">
                {t.search.viewDirectory}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
