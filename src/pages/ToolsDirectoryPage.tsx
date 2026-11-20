import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { getOgImageForPage } from '../config/ogImages';
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
        ogImage={getOgImageForPage('static', 'tools', locale)}
        structuredData={[collectionSchema, buildBreadcrumbSchema(breadcrumbs)]}
        alternates={toHreflangEntries(getStaticAlternatePaths('/tools/'))}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6E6E73] dark:text-[#94A3B8]">
            Browse
          </p>
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
              {t.nav.allTools}{' '}
              <span className="whitespace-nowrap text-2xl font-semibold text-[#6E6E73] sm:text-3xl dark:text-[#CBD5E1]">
                · {allTools.length} {t.search.tools.toLowerCase()}
              </span>
            </h1>
            <div className="w-full lg:w-96 lg:shrink-0">
              <label htmlFor="tools-page-search" className="sr-only">
                {t.directory.searchPlaceholder}
              </label>
              <input
                id="tools-page-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.directory.searchPlaceholder}
                className="w-full rounded-xl border border-[#E5E5EA] bg-white px-4 py-2.5 text-sm text-[#1D1D1F] shadow-sm placeholder:text-[#86868B] focus:border-[#0E8A66] focus:outline-none focus:ring-2 focus:ring-[#0E8A66]/20"
              />
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#6E6E73] leading-relaxed dark:text-[#CBD5E1]">
            {formatString(t.directory.description, { count: allTools.length })}
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Filter by category"
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <button
            type="button"
            role="tab"
            aria-selected={categoryFilter === 'all'}
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${
              categoryFilter === 'all'
                ? 'bg-[#0E8A66] text-white'
                : 'border border-[#E5E5EA] bg-white text-[#1D1D1F] hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]'
            }`}
          >
            {t.directory.all}
          </button>
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={categoryFilter === category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${
                  categoryFilter === category.id
                    ? 'bg-[#0E8A66] text-white'
                    : 'border border-[#E5E5EA] bg-white text-[#1D1D1F] hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]'
                }`}
              >
                {category.shortName}
              </button>
            );
          })}
        </div>

        <p className="mb-8 text-sm text-[#6E6E73] tabular-nums dark:text-[#CBD5E1]">
          {formatString(t.directory.showing, {
            tools: filteredTools.length,
            categories: visibleCategories.length,
          })}
        </p>

        {filteredTools.length > 0 && (
          <section aria-label="Registered tools" className="mb-12">
            <h2 className="sr-only">{t.directory.availableTools}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )}

        <section aria-label="Category suites" className="mt-8">
          <h2 className="text-xl font-bold text-[#1D1D1F] mb-4 dark:text-[#F1F5F9]">{t.directory.categorySuites}</h2>
          {visibleCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {visibleCategories.map((category) => {
                const liveInCategory = allTools.filter((tool) => tool.categoryId === category.id);
                return (
                  <div
                    key={category.id}
                    className="rounded-2xl border border-[#E5E5EA] bg-white p-6 flex flex-col justify-between shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE3D3] hover:shadow-md dark:border-[#243247] dark:bg-[#131D31] dark:hover:border-[#34D399]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F3EE] text-[#0E8A66] dark:bg-[rgba(16,185,129,.14)] dark:text-[#34D399]">
                            <CategoryIcon name={category.iconName} className="w-5 h-5" />
                          </span>
                          <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">{category.name}</h3>
                        </div>
                        <span className="text-xs font-mono text-[#86868B] tabular-nums">
                          {liveInCategory.length >= category.plannedToolCount
                            ? formatString(t.category.toolsLive, { count: liveInCategory.length })
                            : `${liveInCategory.length}/${category.plannedToolCount}`}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">{category.description}</p>
                      <p className="mt-3 text-xs text-[#86868B]">
                        {formatString(t.directory.plannedToolsInclude, {
                          names: category.sampleToolNames.join(', '),
                        })}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#E5E5EA] dark:border-[#243247]">
                      <Link
                        to={categoryHref(category.id, locale)}
                        className="text-sm font-semibold text-[#0B7A59] hover:underline underline-offset-4 dark:text-[#34D399]"
                      >
                        {formatString(t.directory.visitHub, { name: category.name })}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#E5E5EA] bg-white p-8 text-center text-sm text-[#6E6E73] shadow-sm dark:border-[#243247] dark:bg-[#131D31] dark:text-[#CBD5E1]">
              {t.directory.noMatch}{' '}
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategoryFilter('all');
                }}
                className="font-semibold text-[#0B7A59] hover:underline cursor-pointer dark:text-[#34D399]"
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
