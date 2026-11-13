import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdSlot } from '../components/common/AdSlot';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { CATEGORIES } from '../registry/categories';
import { getAllTools, searchTools } from '../registry/toolsRegistry';
import type { BreadcrumbItem, CategoryId } from '../types/tool';

export function ToolsDirectoryPage() {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | 'all'>('all');

  const allTools = getAllTools();
  const filteredTools = useMemo(
    () => searchTools(query, categoryFilter),
    [query, categoryFilter]
  );

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATEGORIES.filter((cat) => {
      if (categoryFilter !== 'all' && cat.id !== categoryFilter) return false;
      if (!q) return true;
      return [cat.name, cat.description, ...cat.sampleToolNames].join(' ').toLowerCase().includes(q);
    });
  }, [query, categoryFilter]);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'All Tools' },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${SITE_CONFIG.name} Tools Directory`,
    url: buildCanonicalUrl('/tools/'),
    description:
      'Browse all online utility tools and categories on UtilityFlow across text, developer, calculator, social media, PDF, SEO, and image workflows.',
  };

  return (
    <>
      <SeoHead
        title="All Online Utility Tools Directory | UtilityFlow"
        description="Browse and search all browser-based utilities and categories on UtilityFlow, organized for writing, development, calculators, PDFs, SEO, and images."
        canonicalPath="/tools/"
        keywords={['utility tools directory', 'all online tools', 'free browser tools']}
        structuredData={[collectionSchema, buildBreadcrumbSchema(breadcrumbs)]}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="max-w-3xl mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            All Tools Directory
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Browse all {allTools.length} live utilities registered on {SITE_CONFIG.name} or explore
            the seven category hubs across browser and free AI workflows.
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="w-full md:max-w-md">
            <label htmlFor="tools-page-search" className="sr-only">
              Search directory
            </label>
            <input
              id="tools-page-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by tool name, keyword, or category..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          <div className="text-sm text-slate-500 tabular-nums">
            Showing {filteredTools.length} live tools across {visibleCategories.length} categories
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Filter by category"
          className="flex items-center gap-1.5 overflow-x-auto rounded-lg bg-slate-100 p-1 mb-8"
        >
          <button
            type="button"
            role="tab"
            aria-selected={categoryFilter === 'all'}
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({allTools.length})
          </button>
          {CATEGORIES.map((category) => {
            const count = allTools.filter((t) => t.categoryId === category.id).length;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={categoryFilter === category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  categoryFilter === category.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category.shortName} ({count})
              </button>
            );
          })}
        </div>

        {filteredTools.length > 0 && (
          <section aria-label="Registered tools" className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Available Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )}

        <AdSlot slotId="directory-top" format="horizontal" />

        <section aria-label="Category suites" className="mt-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Category Suites</h2>
          {visibleCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {visibleCategories.map((category) => {
                const liveInCategory = allTools.filter((t) => t.categoryId === category.id);
                return (
                  <div
                    key={category.id}
                    className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <CategoryIcon name={category.iconName} className="w-5 h-5 text-indigo-600" />
                          <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                        </div>
                        <span className="text-xs font-mono text-slate-500 tabular-nums">
                          Batch {category.batch} ·{' '}
                          {liveInCategory.length >= category.plannedToolCount
                            ? `${liveInCategory.length} live`
                            : `${liveInCategory.length}/${category.plannedToolCount}`}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{category.description}</p>
                      <p className="mt-3 text-xs text-slate-500">
                        Planned tools include: {category.sampleToolNames.join(', ')}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <Link
                        to={`/category/${category.slug}/`}
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        Visit {category.name} hub
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-600">
              No categories or tools matched your filter.{' '}
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategoryFilter('all');
                }}
                className="font-semibold text-indigo-600 hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
