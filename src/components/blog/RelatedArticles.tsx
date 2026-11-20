import { useLocale } from '../../locales/LocaleContext';
import type { LocaleCode } from '../../locales/config';
import { getRelatedBlogArticles } from '../../registry/blogArticleMeta';
import type { BlogArticleMeta } from '../../types/blog';
import { BlogCard } from './BlogCard';

interface RelatedArticlesProps {
  article: BlogArticleMeta;
  locale: LocaleCode;
}

export function RelatedArticles({ article, locale }: RelatedArticlesProps) {
  const { t } = useLocale();
  const related = getRelatedBlogArticles(article, locale);

  if (related.length === 0) return null;

  return (
    <section aria-labelledby="related-articles-heading">
      <h2
        id="related-articles-heading"
        className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-5 dark:text-[#F1F5F9]"
      >
        {t.blog.relatedArticles}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((item) => (
          <BlogCard key={item.id} article={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
