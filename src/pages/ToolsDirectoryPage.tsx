import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdSlot } from '../components/common/AdSlot';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { pastelForKey } from '../components/tool/pastel';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getLocalizedCategories, getLocalizedTools, searchToolsLocalized } from '../locales/tools';
import { formatString } from '../locales/ui';
import type { BreadcrumbItem, CategoryId } from '../types/tool';

export function ToolsDirectoryPage() {
  const { locale, t } = useLocale();
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | 'all'>('all');

  const allTools = getLocalizedTools(locale);
  const categories = getLocalizedCategories(locale);
  const directoryPalette = pastelForKey('directory');
  const filteredTools = useMemo(
    () => searchToolsLocalized(query, locale, categoryFilter),
    [query, categoryFilter, locale]
  );

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories.filter((cat) => {
      if (categoryFilter !== 'all' && cat.id !== categoryFilter) return false;
      if (!q) return true;
      return [cat.name, cat.description, ...cat.sampleToolNames].join(' ').toLowerCase().includes(q);
    });
  }, [query, categoryFilter, categories]);

  const canonicalPath = localizeStaticPath('/tools/', locale);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.allTools },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name:
      locale === 'en'
        ? `${SITE_CONFIG.name} Tools Directory`
        : `${t.directory.title} | ${SITE_CONFIG.name}`,
    url: buildCanonicalUrl(canonicalPath),
    description: t.directory.seoDescription,
  };

  return (
    <>
      <SeoHead
        title={t.directory.seoTitle}
        description={t.directory.seoDescription}
        canonicalPath={canonicalPath}
        keywords={t.directory.seoKeywords}
        structuredData={[collectionSchema, buildBreadcrumbSchema(breadcrumbs)]}
        alternates={toHreflangEntries(getStaticAlternatePaths('/tools/'))}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mx-auto max-w-3xl text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t.directory.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {formatString(t.directory.description, { count: allTools.length })}
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="w-full md:max-w-md">
            <label htmlFor="tools-page-search" className="sr-only">
              {t.directory.searchPlaceholder}
            </label>
            <input
              id="tools-page-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.directory.searchPlaceholder}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          <div className="text-sm text-slate-500 tabular-nums">
            {formatString(t.directory.showing, {
              tools: filteredTools.length,
              categories: visibleCategories.length,
            })}
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Filter by category"
          className="flex items-center gap-2 overflow-x-auto pb-1 mb-8"
        >
          <button
            type="button"
            role="tab"
            aria-selected={categoryFilter === 'all'}
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${
              categoryFilter === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700'
            }`}
          >
            {t.directory.all} ({allTools.length})
          </button>
          {categories.map((category) => {
            const count = allTools.filter((tool) => tool.categoryId === category.id).length;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={categoryFilter === category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${
                  categoryFilter === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700'
                }`}
              >
                {category.shortName} ({count})
              </button>
            );
          })}
        </div>

        {filteredTools.length > 0 && (
          <section aria-label="Registered tools" className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.directory.availableTools}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )}

        <AdSlot slotId="directory-top" format="horizontal" />

        <section aria-label="Category suites" className="mt-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t.directory.categorySuites}</h2>
          {visibleCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {visibleCategories.map((category) => {
                const liveInCategory = allTools.filter((tool) => tool.categoryId === category.id);
                const palette = pastelForKey(`cat:${category.id}`);
                return (
                  <div
                    key={category.id}
                    className={`rounded-2xl ${palette.card} p-6 flex flex-col justify-between shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${palette.icon}`}
                          >
                            <CategoryIcon name={category.iconName} className="w-5 h-5" />
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                        </div>
                        <span className="text-xs font-mono text-slate-500 tabular-nums">
                          {formatString(t.category.batchLabel, { batch: category.batch })} ·{' '}
                          {liveInCategory.length >= category.plannedToolCount
                            ? formatString(t.category.toolsLive, { count: liveInCategory.length })
                            : `${liveInCategory.length}/${category.plannedToolCount}`}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{category.description}</p>
                      <p className="mt-3 text-xs text-slate-500">
                        {formatString(t.directory.plannedToolsInclude, {
                          names: category.sampleToolNames.join(', '),
                        })}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/60">
                      <Link
                        to={categoryHref(category.id, locale)}
                        className={`text-sm font-semibold ${palette.link} hover:underline underline-offset-4`}
                      >
                        {formatString(t.directory.visitHub, { name: category.name })}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={`rounded-2xl ${directoryPalette.card} p-8 text-center text-sm text-slate-600 shadow-sm`}>
              {t.directory.noMatch}{' '}
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategoryFilter('all');
                }}
                className="font-semibold text-indigo-600 hover:underline cursor-pointer"
              >
                {t.directory.clearFilters}
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
