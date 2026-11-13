import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { useLocale } from '../locales/LocaleContext';
import { localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import type { BreadcrumbItem } from '../types/tool';

export function TermsOfServicePage() {
  const { locale, t } = useLocale();

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.footer.termsOfService },
  ];

  return (
    <>
      <SeoHead
        title={t.terms.seoTitle}
        description={t.terms.seoDescription}
        canonicalPath={localizeStaticPath('/terms-of-service/', locale)}
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
        alternates={toHreflangEntries(getStaticAlternatePaths('/terms-of-service/'))}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t.terms.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">{t.terms.lastUpdated}</p>
        </header>

        <div className="space-y-8 text-base leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">{t.terms.acceptanceTitle}</h2>
            <p>
              {t.terms.acceptanceBefore}{' '}
              <Link to={localizeStaticPath('/privacy-policy/', locale)} className="font-semibold text-indigo-600 hover:underline">
                {t.terms.acceptanceLink}
              </Link>
              {t.terms.acceptanceAfter}
            </p>
          </section>

          {t.terms.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className={index > 0 ? 'mt-3' : undefined}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">{t.terms.changesTitle}</h2>
            <p>
              {t.terms.changesBefore}{' '}
              <Link to={localizeStaticPath('/contact/', locale)} className="font-semibold text-indigo-600 hover:underline">
                {t.terms.changesLink}
              </Link>
              {t.terms.changesAfter}
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
