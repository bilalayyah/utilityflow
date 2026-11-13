import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { SITE_CONFIG } from '../config/site';
import type { BreadcrumbItem } from '../types/tool';

export function TermsOfServicePage() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Terms of Service' },
  ];

  return (
    <>
      <SeoHead
        title="Terms of Service | UtilityFlow"
        description="Review the Terms of Service governing use of UtilityFlow browser utilities, intellectual property, accuracy disclaimers, and liability limits."
        canonicalPath="/terms-of-service/"
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>
        </header>

        <div className="space-y-8 text-base leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using {SITE_CONFIG.name}, you agree to be bound by these Terms of
              Service and our{' '}
              <Link to="/privacy-policy/" className="font-semibold text-indigo-600 hover:underline">
                Privacy Policy
              </Link>
              . If you do not agree with any part of these terms, please discontinue using the
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Permitted Use</h2>
            <p>
              You may use {SITE_CONFIG.name} for personal, educational, and commercial productivity
              tasks. You agree not to automate abusive traffic, attempt to disrupt site delivery,
              reverse-engineer security protections, or use any utility for unlawful activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              3. Accuracy &amp; Informational Disclaimer
            </h2>
            <p>
              While we test every utility carefully, all tools, calculations, conversions, and
              SEO checks are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              basis. Outputs should be independently verified before making financial, legal,
              medical, or production engineering decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Intellectual Property</h2>
            <p>
              The {SITE_CONFIG.name} interface, brand assets, documentation, and source code are
              protected by applicable intellectual property laws. You retain full ownership of any
              text, code, documents, or images you process using our client-side utilities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {SITE_CONFIG.name} and its contributors shall
              not be liable for any indirect, incidental, special, or consequential damages arising
              from your use of, or inability to use, this platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Changes &amp; Contact</h2>
            <p>
              We may update these Terms of Service as new tool batches are released. Questions can
              be directed to our{' '}
              <Link to="/contact/" className="font-semibold text-indigo-600 hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
