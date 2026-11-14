import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolSearchBar } from '../components/tool/ToolSearchBar';
import { pastelForKey } from '../components/tool/pastel';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, getLocaleInfo, localizeStaticPath } from '../locales/config';
import { getLocalizedCategories } from '../locales/tools';

export function NotFoundPage() {
  const { locale, t } = useLocale();
  const categories = getLocalizedCategories(locale);

  return (
    <>
      <SeoHead
        title={t.notFound.seoTitle}
        description={t.notFound.seoDescription}
        canonicalPath={`${getLocaleInfo(locale).pathPrefix}/404/`}
        noIndex
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-sm font-semibold text-indigo-600 mb-3">{t.notFound.eyebrow}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          {t.notFound.title}
        </h1>
        <p className="mt-3 text-base text-slate-600 max-w-xl leading-relaxed">
          {t.notFound.description}
        </p>

        <div className="mt-8">
          <ToolSearchBar />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={localizeStaticPath('/', locale)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-indigo-700 hover:to-violet-700"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t.notFound.returnHome}
          </Link>
          <Link
            to={localizeStaticPath('/tools/', locale)}
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:border-indigo-300 hover:text-indigo-700 transition-colors"
          >
            {t.notFound.browseDirectory}
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">{t.notFound.browseCategories}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((category) => {
              const palette = pastelForKey(`cat:${category.id}`);
              return (
                <Link
                  key={category.id}
                  to={categoryHref(category.id, locale)}
                  className={`flex items-center gap-2.5 rounded-2xl ${palette.card} px-3.5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${palette.icon}`}
                  >
                    <CategoryIcon name={category.iconName} className="w-4 h-4" />
                  </span>
                  <span>{category.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
