import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { pastelForKey } from '../components/tool/pastel';
import { PREMIUM_CONFIG, SITE_CONFIG } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import type { BreadcrumbItem } from '../types/tool';

export function PricingPage() {
  const { locale, t } = useLocale();
  const pricingPalette = pastelForKey('pricing');

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: 'Pricing' },
  ];

  return (
    <>
      <SeoHead
        title="Pricing — UtilityFlow"
        description={`UtilityFlow pricing: Free forever, or Lifetime Premium for a one-time payment of ${PREMIUM_CONFIG.priceLabel}. No subscription, no recurring fees.`}
        canonicalPath="/pricing/"
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
        alternates={toHreflangEntries(getStaticAlternatePaths('/pricing/'))}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Pricing
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: November 24, 2026</p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            UtilityFlow is free to use. Lifetime Premium is a single one-time payment — no
            subscription, no recurring fees.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className={`rounded-2xl ${pricingPalette.card} p-6 sm:p-8 shadow-sm`}>
            <h2 className="text-xl font-bold text-slate-900">Free</h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900">$0</p>
            <p className="mt-1 text-sm text-slate-500">Free forever</p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              <li>All standard tools</li>
              <li>Ads shown on the site</li>
              <li>Standard file-size limits apply</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-[#0E8A66] bg-white p-6 sm:p-8 shadow-sm">
            <p className="inline-flex rounded-full bg-[#0E8A66] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Lifetime Access
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-900">Lifetime Premium</h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900">{PREMIUM_CONFIG.priceLabel}</p>
            <p className="mt-1 text-sm text-slate-500">One-time payment · No subscription</p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              <li>Ad-free — no ads anywhere on the site</li>
              <li>Unlimited standard usage</li>
              <li>No daily caps</li>
              <li>No watermarks on exported files</li>
              <li>All current tools, plus future standard tools</li>
            </ul>
            <p className="mt-6 text-sm font-semibold text-slate-900">Secure checkout is coming soon.</p>
          </div>
        </div>

        <div className={`mt-8 space-y-8 text-base leading-relaxed text-slate-700 rounded-2xl ${pricingPalette.card} p-6 sm:p-8 shadow-sm`}>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Refunds</h2>
            <p>
              Lifetime Premium comes with a 14-day refund window. Read the full{' '}
              <Link to="/refund-policy/" className="font-semibold text-indigo-600 hover:underline">
                Refund Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Questions?</h2>
            <p>
              <Link to={localizeStaticPath('/contact/', locale)} className="font-semibold text-indigo-600 hover:underline">
                Contact us
              </Link>{' '}
              or email{' '}
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
