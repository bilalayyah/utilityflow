import { ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AdSlot } from '../components/common/AdSlot';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { pastelForKey } from '../components/tool/pastel';
import { buildCanonicalUrl } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../locales/config';
import { getCategoryAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getCategoryByLocalizedSlug, getLocalizedCategories, getLocalizedCategory, getLocalizedTools } from '../locales/tools';
import { formatString } from '../locales/ui';
import type { BreadcrumbItem } from '../types/tool';
import { NotFoundPage } from './NotFoundPage';

export function CategoryPage() {
  const { locale, t } = useLocale();
  const { categorySlug = '' } = useParams<{ categorySlug: string }>();
  const category = getCategoryByLocalizedSlug(categorySlug, locale);

  if (!category) {
    return <NotFoundPage />;
  }

  // Cross-locale slug guard: an English category slug under /es/ redirects
  // to the Spanish category URL (and vice versa).
  const localizedCategory = getLocalizedCategory(category, locale);
  if (!localizedCategory || localizedCategory.slug !== categorySlug) {
    return <Navigate to={categoryHref(category.id, locale)} replace />;
  }

  const tools = getLocalizedTools(locale).filter(
    (tool) => tool.categoryId === category.id
  );
  const canonicalPath = categoryHref(category.id, locale);
  const otherCategories = getLocalizedCategories(locale).filter(
    (item) => item.id !== category.id
  );

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.tools, href: localizeStaticPath('/tools/', locale) },
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
        alternates={toHreflangEntries(getCategoryAlternatePaths(category.id))}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mx-auto max-w-3xl text-center mb-10">
          <div className="flex items-center justify-center gap-2.5 text-xs font-medium text-slate-500 mb-3">
            <CategoryIcon name={category.iconName} className="w-4 h-4 text-indigo-600" />
            <span>{formatString(t.category.batchLabel, { batch: category.batch })}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {tools.length >= category.plannedToolCount
                ? formatString(t.category.toolsLive, { count: tools.length })
                : formatString(t.category.ofToolsLive, {
                    count: tools.length,
                    total: category.plannedToolCount,
                  })}
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
              {formatString(t.category.availableTools, { name: category.name })}
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
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 mb-10 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900">
              {formatString(t.category.scheduledTitle, { batch: category.batch })}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
              {formatString(t.category.scheduledDescription, {
                name: category.name,
                batch: category.batch,
              })}
            </p>

            <div className="mt-5">
              <h3 className="text-xs font-semibold text-slate-700 mb-2">
                {t.category.plannedToolsTitle}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-700">
                {category.sampleToolNames.map((name) => (
                  <li
                    key={name}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm"
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
            {t.category.exploreOther}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCategories.map((item) => {
              const palette = pastelForKey(`cat:${item.id}`);
              return (
                <Link
                  key={item.id}
                  to={categoryHref(item.id, locale)}
                  className={`group flex items-center justify-between gap-3 rounded-2xl ${palette.card} p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${palette.icon}`}
                    >
                      <CategoryIcon name={item.iconName} className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 tabular-nums">
                        {formatString(t.category.batchLabel, { batch: item.batch })} ·{' '}
                        {formatString(t.category.plannedCount, { count: item.plannedToolCount })}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 ${palette.link}`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
