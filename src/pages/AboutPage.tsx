import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { PASTEL_PALETTES, pastelForKey } from '../components/tool/pastel';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getLocalizedCategories } from '../locales/tools';
import { formatString } from '../locales/ui';
import type { BreadcrumbItem } from '../types/tool';

export function AboutPage() {
  const { locale, t } = useLocale();
  const categories = getLocalizedCategories(locale);
  const aboutPalette = pastelForKey('about');

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.about },
  ];

  // Fix #14 (E-E-A-T): Organization schema — who is behind the site.
  // L-12: founder (Bilal) — the person behind the site, named in the
  // footer ("Crafted with ❤️ by Bilal inspired by Shaheen").
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: buildCanonicalUrl(localizeStaticPath('/', locale)),
    logo: 'https://utilityflow.online/og-image.jpg',
    founder: {
      '@type': 'Person',
      name: 'Bilal',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE_CONFIG.contactEmail,
    },
  };

  // L-7: AboutPage schema (in addition to BreadcrumbList + Organization).
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t.about.seoTitle,
    url: buildCanonicalUrl(localizeStaticPath('/about/', locale)),
    description: t.about.seoDescription,
  };

  return (
    <>
      <SeoHead
        title={t.about.seoTitle}
        description={t.about.seoDescription}
        canonicalPath={localizeStaticPath('/about/', locale)}
        structuredData={[buildBreadcrumbSchema(breadcrumbs), organizationSchema, aboutPageSchema]}
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
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.orgTitle}</h2>
            <p>{t.about.orgP1}</p>
            <p className="mt-3">{t.about.orgP2}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.howTitle}</h2>
            <p>{t.about.howP1}</p>
            <p className="mt-3">{t.about.howP2}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.whoTitle}</h2>
            <p>{t.about.whoP1}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.principlesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.principles.map((principle, index) => (
                <div key={principle.title} className={`rounded-2xl ${PASTEL_PALETTES[index % PASTEL_PALETTES.length].card} p-5 shadow-sm`}>
                  <h3 className="text-base font-semibold text-slate-900">{principle.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.about.categoriesTitle}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {categories.map((category, index) => (
                <li key={category.id}>
                  <Link
                    to={categoryHref(category.id, locale)}
                    className={`flex items-center justify-between rounded-xl ${PASTEL_PALETTES[index % PASTEL_PALETTES.length].card} px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                  >
                    <span className="font-semibold text-slate-900">{category.name}</span>
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      {formatString(t.category.toolsCount, { count: category.plannedToolCount })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={`rounded-2xl ${aboutPalette.card} p-6 shadow-sm`}>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{t.about.feedbackTitle}</h2>
            <p className="text-sm text-slate-600">
              {t.about.feedbackBefore}{' '}
              <Link to={localizeStaticPath('/contact/', locale)} className={`font-semibold ${aboutPalette.link} hover:underline`}>
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
