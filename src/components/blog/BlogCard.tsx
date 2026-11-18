import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { articleHref, blogCategoryHref, localeTag } from '../../locales/config';
import type { LocaleCode } from '../../locales/config';
import { getLocalizedCategory } from '../../locales/tools';
import { formatString } from '../../locales/ui';
import { getBlogArticleVersion } from '../../registry/blogArticleMeta';
import type { BlogArticleMeta } from '../../types/blog';
import { pastelForKey } from '../tool/pastel';

interface BlogCardProps {
  article: BlogArticleMeta;
  locale: LocaleCode;
}

export function BlogCard({ article, locale }: BlogCardProps) {
  const { t } = useLocale();
  const version = getBlogArticleVersion(article, locale);

  // Not published in this locale — nothing to link to.
  if (!version) return null;

  const category = getLocalizedCategory(article.categoryId, locale);
  const palette = pastelForKey(`blog:${article.id}`);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    localeTag(locale),
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <article
      className={`group flex flex-col rounded-2xl ${palette.card} p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md`}
    >
      {category && (
        <Link
          to={blogCategoryHref(category.id, locale)}
          className="mb-2 w-fit rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-semibold text-slate-700 transition-colors hover:text-indigo-700"
        >
          {category.name}
        </Link>
      )}
      <h3 className="text-lg font-bold leading-snug text-slate-900">
        <Link
          to={articleHref(version.slug, locale)}
          className="transition-colors hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm"
        >
          {version.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-700/90 line-clamp-3">
        {version.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
        <time dateTime={article.publishedAt}>{publishedDate}</time>
        <span aria-hidden="true">·</span>
        <span>
          {formatString(t.blog.readingTime, { minutes: version.readingMinutes })}
        </span>
      </div>
    </article>
  );
}
