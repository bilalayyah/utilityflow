import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { pastelForKey } from '../components/tool/pastel';
import { PREMIUM_CONFIG, SITE_CONFIG } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import type { BreadcrumbItem } from '../types/tool';

export function RefundPolicyPage() {
  const { locale, t } = useLocale();
  const refundPalette = pastelForKey('refund');

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: 'Refund Policy' },
  ];

  return (
    <>
      <SeoHead
        title="Refund Policy — UtilityFlow"
        description="UtilityFlow refund policy: Lifetime Premium purchases can be refunded within 14 days of purchase. Refunds are processed by Paddle."
        canonicalPath="/refund-policy/"
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
        alternates={toHreflangEntries(getStaticAlternatePaths('/refund-policy/'))}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Refund Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: November 24, 2026</p>
        </header>

        <div className={`space-y-8 text-base leading-relaxed text-slate-700 rounded-2xl ${refundPalette.card} p-6 sm:p-8 shadow-sm`}>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">14-day refund window</h2>
            <p>
              You may request a refund within 14 days of purchase.
            </p>
            <p className="mt-3">
              This applies to Lifetime Premium, a one-time payment of {PREMIUM_CONFIG.priceLabel}{' '}
              for lifetime access. There is no subscription and no recurring charge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">How refunds are processed</h2>
            <p>
              Payments are processed by Paddle, our payment processor. Paddle also processes
              refunds.
            </p>
            <p className="mt-3">
              Once approved, the refund is returned to the original payment method. The time it
              takes to appear depends on your bank or card provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">How to request a refund</h2>
            <p>
              Email{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="font-semibold text-indigo-600 hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>{' '}
              with the email address used for the purchase and your order details.
            </p>
            <p className="mt-3">
              We will confirm your request and pass it to Paddle for processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">No subscription to cancel</h2>
            <p>
              Lifetime Premium is a one-time payment. There is no subscription, so there is
              nothing to cancel.
            </p>
            <p className="mt-3">
              If you have any other question,{' '}
              <Link to={localizeStaticPath('/contact/', locale)} className="font-semibold text-indigo-600 hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
