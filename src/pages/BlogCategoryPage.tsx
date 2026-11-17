import { ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { buildCanonicalUrl } from '../config/site';
import { getOgImageForPage } from '../config/ogImages';
import { useLocale } from '../locales/LocaleContext';
import {
  blogCategoryHref,
  blogHref,
  categoryHref,
  localizeStaticPath,
  SUPPORTED_LOCALES,
} from '../locales/config';
import {
  toHreflangEntries,
  type LocaleAlternatePaths,
} from '../locales/routes';
import { getCategoryByLocalizedSlug, getLocalizedCategory } from '../locales/tools';
import { formatString } from '../locales/ui';
import { getBlogArticlesForCategory } from '../registry/blogArticles';
import type { BreadcrumbItem } from '../types/tool';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogCategoryNav } from '../components/blog/BlogCategoryNav';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { NotFoundPage } from './NotFoundPage';

export function BlogCategoryPage() {
  const { locale, t } = useLocale();
  const { categorySlug = '' } = useParams<{ categorySlug: string }>();
  const category = getCategoryByLocalizedSlug(categorySlug, locale);

  if (!category) {
    return <NotFoundPage />;
  }

  // Cross-locale slug guard: an English category slug under /es/ redirects
  // to the Spanish blog-category URL (and vice versa).
  const localizedCategory = getLocalizedCategory(category, locale);
  if (!localizedCategory || localizedCategory.slug !== categorySlug) {
    return <Navigate to={blogCategoryHref(category.id, locale)} replace />;
  }

  const articles = getBlogArticlesForCategory(category.id, locale);
  const canonicalPath = blogCategoryHref(category.id, locale);

  // Hreflang alternates: the blog category segment is "category" in every
  // locale, only the category slug itself is localized (via blogCategoryHref).
  const alternates: LocaleAlternatePaths = {};
  for (const info of SUPPORTED_LOCALES) {
    alternates[info.code] = blogCategoryHref(category.id, info.code);
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.blog, href: blogHref(locale) },
    { label: category.name },
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: buildCanonicalUrl(canonicalPath),
    description: category.longDescription,
  };

  return (
    <>
      <SeoHead
        title={`${category.name} Guides | UtilityFlow Blog`}
        description={category.longDescription}
        canonicalPath={canonicalPath}
        ogType="website"
        ogImage={getOgImageForPage('category', category.id, locale)}
        structuredData={[collectionSchema, buildBreadcrumbSchema(breadcrumbs)]}
        alternates={toHreflangEntries(alternates)}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {category.name}
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            {category.longDescription}
          </p>
          {category.intro && (
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {category.intro}
            </p>
          )}
          <p className="mt-5">
            <Link
              to={categoryHref(category.id, locale)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline"
            >
              {formatString(t.toolPage.browseAll, { name: category.name })}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </p>
        </header>

        <section aria-labelledby="category-articles-heading" className="mb-12">
          <h2
            id="category-articles-heading"
            className="text-xl font-bold text-slate-900 mb-5"
          >
            {t.blog.guidesInCategory}{' '}
            <span className="text-base font-semibold text-slate-500">
              ({articles.length})
            </span>
          </h2>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article) => (
                <BlogCard key={article.id} article={article} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm text-center">
              <h3 className="text-lg font-bold text-slate-900">
                {t.blog.noArticlesYet}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-xl mx-auto">
                {t.blog.noArticlesYetDescription}
              </p>
            </div>
          )}
        </section>

        <BlogCategoryNav locale={locale} currentCategoryId={category.id} />
      </div>
    </>
  );
}
