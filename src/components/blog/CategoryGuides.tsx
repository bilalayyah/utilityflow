import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import type { LocaleCode } from '../../locales/config';
import { blogCategoryHref } from '../../locales/config';
import type { CategoryId } from '../../types/tool';
import { getBlogArticlesForCategory } from '../../registry/blogArticleMeta';
import { BlogCard } from './BlogCard';

/**
 * "Guides in this category" section for a tool category page (Batch 2 hook).
 * Shows the category's published articles in the current locale (when
 * Batch 3 writes them). Renders nothing when the category has no
 * published articles in this locale (Batch 2: always, since the
 * registry is empty) — so the category page is unchanged until articles land.
 */
export function CategoryGuides({
  categoryId,
  locale,
}: {
  categoryId: CategoryId;
  locale: LocaleCode;
}) {
  const { t } = useLocale();
  const articles = getBlogArticlesForCategory(categoryId, locale);
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="category-guides-heading" className="mb-12">
      <h2 id="category-guides-heading" className="text-xl font-bold text-[#1D1D1F] mb-5 dark:text-[#F1F5F9]">
        {t.blog.guidesInCategory}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} locale={locale} />
        ))}
      </div>
      <p className="mt-6">
        <Link
          to={blogCategoryHref(categoryId, locale)}
          className="font-semibold text-[#0B7A59] hover:underline dark:text-[#34D399]"
        >
          {t.blog.allArticles} →
        </Link>
      </p>
    </section>
  );
}
