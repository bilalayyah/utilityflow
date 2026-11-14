import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { SITE_CONFIG } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getLocalizedCategories } from '../locales/tools';
import { formatString } from '../locales/ui';
import type { BreadcrumbItem } from '../types/tool';

export function AboutPage() {
  const { locale, t } = useLocale();
  const categories = getLocalizedCategories(locale);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.about },
  ];

  return (
    <>
      <SeoHead
        title={t.about.seoTitle}
        description={t.about.seoDescription}
        canonicalPath={localizeStaticPath('/about/', locale)}
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
        alternates={toHreflangEntries(getStaticAlternatePaths('/about/'))}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t.about.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            {t.about.intro}
          </p>
        </header>

        <div className="space-y-10 text-base leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.whyTitle}</h2>
            <p>{t.about.whyP1}</p>
            <p className="mt-3">{t.about.whyP2}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.principlesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.principles.map((principle) => (
                <div key={principle.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{principle.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.categoriesTitle}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={categoryHref(category.id, locale)}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:border-indigo-300 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{category.name}</span>
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      {formatString(t.category.batchLabel, { batch: category.batch })} ·{' '}
                      {formatString(t.category.toolsCount, { count: category.plannedToolCount })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2">{t.about.feedbackTitle}</h2>
            <p className="text-sm text-slate-600">
              {t.about.feedbackBefore}{' '}
              <Link to={localizeStaticPath('/contact/', locale)} className="font-semibold text-indigo-600 hover:underline">
                {t.about.feedbackLink}
              </Link>
              {t.about.feedbackAfter}
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
