import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AdSlot } from '../components/common/AdSlot';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { buildCanonicalUrl } from '../config/site';
import { CATEGORIES, getCategoryBySlug } from '../registry/categories';
import { getToolsByCategory } from '../registry/toolsRegistry';
import type { BreadcrumbItem } from '../types/tool';
import { NotFoundPage } from './NotFoundPage';

export function CategoryPage() {
  const { categorySlug = '' } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <NotFoundPage />;
  }

  const tools = getToolsByCategory(category.id);
  const canonicalPath = `/category/${category.slug}/`;
  const otherCategories = CATEGORIES.filter((item) => item.id !== category.id);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools/' },
    { label: category.name },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: buildCanonicalUrl(canonicalPath),
    description: category.seo.description,
  };

  return (
    <>
      <SeoHead
        title={category.seo.title}
        description={category.seo.description}
        canonicalPath={canonicalPath}
        keywords={category.seo.keywords}
        structuredData={[collectionSchema, buildBreadcrumbSchema(breadcrumbs)]}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="max-w-3xl mb-10">
          <div className="flex items-center gap-2.5 text-xs font-medium text-slate-500 mb-3">
            <CategoryIcon name={category.iconName} className="w-4 h-4 text-indigo-600" />
            <span>Batch {category.batch}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {tools.length >= category.plannedToolCount
                ? `${tools.length} tools live`
                : `${tools.length} of ${category.plannedToolCount} tools live`}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {category.name}
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            {category.longDescription}
          </p>
        </header>

        {tools.length > 0 ? (
          <section aria-labelledby="category-tools-heading" className="mb-12">
            <h2 id="category-tools-heading" className="text-xl font-bold text-slate-900 mb-5">
              Available {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        ) : (
          <section
            aria-label="Category rollout status"
            className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 mb-10"
          >
            <h2 className="text-lg font-bold text-slate-900">
              Scheduled for Batch {category.batch} Implementation
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
              This category hub is active and indexed in the {category.name} architecture. Dedicated
              individual tool pages with browser-side functionality will be added here during Batch{' '}
              {category.batch}.
            </p>

            <div className="mt-5">
              <h3 className="text-xs font-semibold text-slate-700 mb-2">
                Planned tools in this category:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-700">
                {category.sampleToolNames.map((name) => (
                  <li
                    key={name}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <AdSlot slotId="category-mid" format="horizontal" />

        <section aria-labelledby="other-categories-heading" className="pt-10 border-t border-slate-200">
          <h2 id="other-categories-heading" className="text-xl font-bold text-slate-900 mb-5">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCategories.map((item) => (
              <Link
                key={item.id}
                to={`/category/${item.slug}/`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <CategoryIcon name={item.iconName} className="w-5 h-5 text-indigo-600 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700 truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 tabular-nums">
                      Batch {item.batch} · {item.plannedToolCount} planned
                    </div>
                  </div>
                </div>
                <ArrowRight
                  className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
