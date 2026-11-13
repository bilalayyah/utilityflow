import { ArrowRight, Search, X } from 'lucide-react';
import { useMemo, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../registry/categories';
import { searchTools } from '../../registry/toolsRegistry';
import { CategoryIcon } from '../common/CategoryIcon';

interface ToolSearchBarProps {
  placeholder?: string;
  onQueryChange?: (value: string) => void;
  showSuggestionsDropdown?: boolean;
  initialQuery?: string;
}

export function ToolSearchBar({
  placeholder = 'Search tools or categories (e.g., word counter, JSON, PDF, calculators)...',
  onQueryChange,
  showSuggestionsDropdown = true,
  initialQuery = '',
}: ToolSearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const trimmed = query.trim().toLowerCase();

  const matchingTools = useMemo(() => {
    if (!trimmed) return [];
    return searchTools(trimmed).slice(0, 6);
  }, [trimmed]);

  const matchingCategories = useMemo(() => {
    if (!trimmed) return [];
    return CATEGORIES.filter((cat) => {
      const text = [
        cat.name,
        cat.description,
        ...cat.sampleToolNames,
        ...cat.seo.keywords,
      ]
        .join(' ')
        .toLowerCase();
      return text.includes(trimmed);
    }).slice(0, 4);
  }, [trimmed]);

  const handleChange = (value: string) => {
    setQuery(value);
    onQueryChange?.(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (matchingTools.length > 0) {
      navigate(`/${matchingTools[0].slug}/`);
      return;
    }
    if (matchingCategories.length > 0) {
      navigate(`/category/${matchingCategories[0].slug}/`);
      return;
    }
    navigate('/tools/');
  };

  const showDropdown =
    showSuggestionsDropdown &&
    focused &&
    trimmed.length > 0;

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} role="search" aria-label="Search utility tools">
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
            placeholder={placeholder}
            aria-label="Search tools or categories"
            className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-28 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 shadow-xs transition-colors focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => handleChange('')}
              aria-label="Clear search"
              className="absolute right-20 p-1.5 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-indigo-700 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
          {matchingTools.length > 0 && (
            <div className="mb-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500">Tools</div>
              {matchingTools.map((tool) => (
                <Link
                  key={tool.id}
                  to={`/${tool.slug}/`}
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
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500">Categories</div>
              {matchingCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}/`}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  <div className="flex items-center gap-2.5">
                    <CategoryIcon name={cat.iconName} className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900">{cat.name}</div>
                      <div className="text-xs text-slate-500">
                        Batch {cat.batch} · {cat.plannedToolCount} planned tools
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
              No matching tools or categories found for &ldquo;{query.trim()}&rdquo;.{' '}
              <Link to="/tools/" className="font-semibold text-indigo-600 hover:underline">
                View full directory
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
