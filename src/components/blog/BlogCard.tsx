import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { articleHref, blogCategoryHref, localeTag } from '../../locales/config';
import type { LocaleCode } from '../../locales/config';
import { getBlogImageUrl } from '../../config/ogImages';
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
  // Per-article hero image (article-images batch): same URL logic as the
  // article page's og:image — public/blog-images/<id>-<locale>.png.
  const heroImageUrl = getBlogImageUrl(article.id, locale);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl ${palette.card} shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <Link
        to={articleHref(version.slug, locale)}
        tabIndex={-1}
        aria-hidden="true"
        className="block shrink-0 focus-visible:outline-none"
      >
        <img
          src={heroImageUrl}
          alt=""
          loading="lazy"
          className="aspect-[1200/630] w-full object-cover"
        />
      </Link>
      <div className="flex flex-col p-5">
        {category && (
          <Link
            to={blogCategoryHref(category.id, locale)}
            className="mb-2 w-fit rounded-full bg-[#E7F3EE] px-2.5 py-0.5 text-xs font-semibold text-[#0B7A59] transition-colors hover:text-[#0A6B4E] dark:bg-[rgba(16,185,129,.14)] dark:text-[#34D399] dark:hover:text-[#6EE7B7]"
          >
            {category.name}
          </Link>
        )}
        <h3 className="text-lg font-bold leading-snug text-[#1D1D1F] dark:text-[#F1F5F9]">
          <Link
            to={articleHref(version.slug, locale)}
            className="transition-colors hover:text-[#0B7A59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] rounded-sm dark:hover:text-[#34D399]"
          >
            {version.title}
          </Link>
        </h3>
        <p className="mt-1.5 text-xs font-medium text-[#6E6E73] dark:text-[#CBD5E1]">
          By Bilal Asghar
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#6E6E73] line-clamp-3 dark:text-[#CBD5E1]">
          {version.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <time dateTime={article.publishedAt}>{publishedDate}</time>
          <span aria-hidden="true">·</span>
          <span>
            {formatString(t.blog.readingTime, { minutes: version.readingMinutes })}
          </span>
        </div>
      </div>
    </article>
  );
}
