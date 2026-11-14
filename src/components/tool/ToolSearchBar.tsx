import { ArrowRight, Search, X } from 'lucide-react';
import { useMemo, useState, type FormEvent } from 'react';
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

  const isHero = variant === 'hero';

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} role="search" aria-label={t.search.ariaLabel}>
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
            onChange={(e) => handleChange(e.target.value)}
            placeholder={effectivePlaceholder}
            aria-label={t.search.ariaLabel}
            className={
              isHero
                ? 'w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-14 text-base text-slate-900 placeholder:text-slate-400 shadow-md transition-colors focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500'
                : 'w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-28 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 shadow-xs transition-colors focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20'
            }
          />
          {query && (
            <button
              type="button"
              onClick={() => handleChange('')}
              aria-label={t.search.clearSearch}
              className={`absolute p-1.5 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer ${
                isHero ? 'right-12' : 'right-20'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {isHero ? (
            <kbd className="pointer-events-none absolute right-4 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
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
          {matchingTools.length > 0 && (
            <div className="mb-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500">{t.search.tools}</div>
              {matchingTools.map((tool) => (
                <Link
                  key={tool.id}
                  to={toolHref(tool.slug, locale)}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  <div>
                    <div className="font-medium text-slate-900">{tool.name}</div>
                    <div className="text-xs text-slate-500 line-clamp-1">{tool.shortDescription}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}

          {matchingCategories.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500">{t.search.categories}</div>
              {matchingCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={categoryHref(cat.id, locale)}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  <div className="flex items-center gap-2.5">
                    <CategoryIcon name={cat.iconName} className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">{cat.name}</div>
                      <div className="text-xs text-slate-500">
                        {formatString(t.category.batchLabel, { batch: cat.batch })} ·{' '}
                        {formatString(t.category.plannedCount, { count: cat.plannedToolCount })}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}

          {matchingTools.length === 0 && matchingCategories.length === 0 && (
            <div className="px-3 py-4 text-sm text-slate-600 text-center">
              {formatString(t.search.noResults, { query: query.trim() })}{' '}
              <Link to={localizeStaticPath('/tools/', locale)} className="font-semibold text-indigo-600 hover:underline">
                {t.search.viewDirectory}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
