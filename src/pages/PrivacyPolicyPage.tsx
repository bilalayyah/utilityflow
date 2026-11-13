import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { SITE_CONFIG } from '../config/site';
import type { BreadcrumbItem } from '../types/tool';

export function PrivacyPolicyPage() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy' },
  ];

  return (
    <>
      <SeoHead
        title="Privacy Policy | UtilityFlow"
        description="Read the UtilityFlow Privacy Policy covering browser-side tool execution, cookies, server logs, and third-party advertising disclosures."
        canonicalPath="/privacy-policy/"
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>
        </header>

        <div className="space-y-8 text-base leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              {SITE_CONFIG.name} is designed around client-side browser processing. This Privacy
              Policy explains what information is processed when you visit our website, how our
              utilities handle inputs, and how cookies or advertising technologies may operate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              2. Tool Inputs, Browser Processing &amp; Free AI Tools
            </h2>
            <p>
              Text, numbers, code snippets, and files entered into our 85 browser-based tools are
              processed locally within your browser session without leaving your device.
            </p>
            <p className="mt-3">
              Our three optional Free AI tools (AI Writing Assistant, AI Text Summarizer, and AI
              Smart Tool Finder) send submitted text through our protected backend to Groq for
              real-time inference. We do not store or log your prompts, and free daily rate limits
              use only a UTC-dated SHA-256 hash so raw visitor IP addresses are never stored.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              3. Hosting Logs &amp; Technical Telemetry
            </h2>
            <p>
              {SITE_CONFIG.name} is hosted on Cloudflare Pages. Like standard web hosting providers,
              our edge network may automatically process standard HTTP request metadata (such as IP
              address, browser user-agent, requested URL, and timestamp) to deliver pages reliably,
              mitigate abuse, and maintain security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              4. Cookies &amp; Third-Party Advertising
            </h2>
            <p>
              We may display advertisements from third-party advertising networks (such as Google
              AdSense) to support free access to our tools. Third-party vendors, including Google,
              may use cookies or web beacons to serve ads based on a user&rsquo;s prior visits to
              this website or other websites.
            </p>
            <p className="mt-3">
              You may opt out of personalized advertising by visiting Google Ads Settings or
              managing cookie preferences directly in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. External Links</h2>
            <p>
              Our documentation or tool pages may link to external websites. We are not responsible
              for the privacy practices or content of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us via our{' '}
              <Link to="/contact/" className="font-semibold text-indigo-600 hover:underline">
                Contact page
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
