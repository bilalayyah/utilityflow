import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import type { LocaleCode } from '../../locales/config';
import { getBlogArticlesForTool } from '../../registry/blogArticleMeta';
import { blogHref } from '../../locales/config';
import { BlogCard } from './BlogCard';

/**
 * "Related articles" section for a tool page (Batch 2 hook).
 * Shows the tool's published articles in the current locale (its 3
 * articles, when Batch 3 writes them). Renders nothing when the tool
 * has no published articles in this locale (Batch 2: always, since the
 * registry is empty) — so the tool page is unchanged until articles land.
 */
export function ToolRelatedArticles({
  toolId,
  locale,
}: {
  toolId: string;
  locale: LocaleCode;
}) {
  const { t } = useLocale();
  const articles = getBlogArticlesForTool(toolId, locale);
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="related-articles-heading" className="mt-10">
      <h2
        id="related-articles-heading"
        className="text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]"
      >
        {t.blog.relatedArticles}
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} locale={locale} />
        ))}
      </div>
      <p className="mt-6">
        <Link
          to={blogHref(locale)}
          className="font-semibold text-[#0B7A59] hover:underline dark:text-[#34D399]"
        >
          {t.blog.allArticles} →
        </Link>
      </p>
    </section>
  );
}
