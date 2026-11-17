import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { blogCategoryHref, blogHref } from '../../locales/config';
import type { LocaleCode } from '../../locales/config';
import { getLocalizedCategories } from '../../locales/tools';
import { CategoryIcon } from '../common/CategoryIcon';
import { pastelForKey } from '../tool/pastel';

interface BlogCategoryNavProps {
  locale: LocaleCode;
  currentCategoryId?: string;
}

export function BlogCategoryNav({ locale, currentCategoryId }: BlogCategoryNavProps) {
  const { t } = useLocale();
  const categories = getLocalizedCategories(locale);

  return (
    <section aria-labelledby="blog-categories-heading" className="mb-12">
      <h2
        id="blog-categories-heading"
        className="text-xl font-bold text-slate-900 mb-5"
      >
        {t.blog.browseByCategory}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Link
          to={blogHref(locale)}
          aria-current={currentCategoryId === undefined ? 'page' : undefined}
          className={`flex items-center gap-2.5 rounded-2xl px-3.5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
            currentCategoryId === undefined
              ? 'bg-indigo-600 text-white'
              : 'bg-white border border-slate-200 text-slate-800 hover:border-indigo-300 hover:text-indigo-700'
          }`}
        >
          {t.blog.allArticles}
        </Link>
        {categories.map((category) => {
          const palette = pastelForKey(`cat:${category.id}`);
          const isCurrent = category.id === currentCategoryId;
          return (
            <Link
              key={category.id}
              to={blogCategoryHref(category.id, locale)}
              aria-current={isCurrent ? 'page' : undefined}
              className={`flex items-center gap-2.5 rounded-2xl px-3.5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                isCurrent
                  ? 'bg-indigo-600 text-white'
                  : `${palette.card} text-slate-800`
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  isCurrent ? 'bg-white/20 text-white' : palette.icon
                }`}
              >
                <CategoryIcon name={category.iconName} className="w-4 h-4" />
              </span>
              <span className="min-w-0 truncate">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
