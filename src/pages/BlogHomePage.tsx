import { buildCanonicalUrl } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { blogHref, localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import {
  getBlogArticleVersion,
  getPublishedBlogArticles,
} from '../registry/blogArticleMeta';
import type { BreadcrumbItem } from '../types/tool';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogCategoryNav } from '../components/blog/BlogCategoryNav';
import { BlogSearch } from '../components/blog/BlogSearch';

export function BlogHomePage() {
  const { locale, t } = useLocale();

  // Published articles in this locale, newest first. Empty in Batch 2 —
  // every section below guards on length, so the page renders cleanly
  // with zero articles.
  const articles = getPublishedBlogArticles()
    .filter((article) => getBlogArticleVersion(article, locale) !== undefined)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = articles.slice(0, 3);

  const canonicalPath = blogHref(locale);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.blog },
  ];

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t.blog.title,
    url: buildCanonicalUrl(canonicalPath),
    description: t.blog.seoDescription,
  };

  return (
    <>
      <SeoHead
        title={t.blog.seoTitle}
        description={t.blog.seoDescription}
        canonicalPath={canonicalPath}
        ogType="website"
        alternates={toHreflangEntries(getStaticAlternatePaths('/blog/'))}
        structuredData={[blogSchema, buildBreadcrumbSchema(breadcrumbs)]}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
            {t.blog.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
            {t.blog.description}
          </p>
          <div className="mt-6 flex justify-center">
            <BlogSearch variant="hero" />
          </div>
        </header>

        <BlogCategoryNav locale={locale} />

        {featured.length > 0 && (
          <section aria-labelledby="featured-articles-heading" className="mb-12">
            <h2
              id="featured-articles-heading"
              className="text-xl font-bold text-[#1D1D1F] mb-5 dark:text-[#F1F5F9]"
            >
              {t.blog.featured}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((article) => (
                <BlogCard key={article.id} article={article} locale={locale} />
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="latest-articles-heading">
          <h2
            id="latest-articles-heading"
            className="text-xl font-bold text-[#1D1D1F] mb-5 dark:text-[#F1F5F9]"
          >
            {t.blog.latest}{' '}
            <span className="text-base font-semibold text-[#6E6E73] dark:text-[#CBD5E1]">
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
            <div className="rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF] p-6 sm:p-8 shadow-sm text-center dark:border-[#243247] dark:bg-[#131D31]">
              <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">
                {t.blog.noArticlesYet}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6E6E73] max-w-xl mx-auto dark:text-[#CBD5E1]">
                {t.blog.noArticlesYetDescription}
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
