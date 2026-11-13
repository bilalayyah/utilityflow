import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { SITE_CONFIG } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import type { BreadcrumbItem } from '../types/tool';

export function PrivacyPolicyPage() {
  const { locale, t } = useLocale();

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.footer.privacyPolicy },
  ];

  return (
    <>
      <SeoHead
        title={t.privacy.seoTitle}
        description={t.privacy.seoDescription}
        canonicalPath={localizeStaticPath('/privacy-policy/', locale)}
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
        alternates={toHreflangEntries(getStaticAlternatePaths('/privacy-policy/'))}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t.privacy.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">{t.privacy.lastUpdated}</p>
        </header>

        <div className="space-y-8 text-base leading-relaxed text-slate-700">
          {t.privacy.sections.map((section) => (
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
            <h2 className="text-xl font-bold text-slate-900 mb-2">{t.privacy.contactTitle}</h2>
            <p>
              {t.privacy.contactBefore}{' '}
              <Link to={localizeStaticPath('/contact/', locale)} className="font-semibold text-indigo-600 hover:underline">
                {t.privacy.contactLink}
              </Link>{' '}
              {t.privacy.contactMiddle}{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="font-semibold text-indigo-600 hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
