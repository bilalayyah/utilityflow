import { Link } from 'react-router-dom';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { SITE_CONFIG } from '../config/site';
import { CATEGORIES } from '../registry/categories';
import type { BreadcrumbItem } from '../types/tool';

export function AboutPage() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ];

  return (
    <>
      <SeoHead
        title="About UtilityFlow – Browser-First Online Tools Platform"
        description="Learn how UtilityFlow builds fast, privacy-first browser utilities across seven categories without accounts, clutter, or unnecessary data uploads."
        canonicalPath="/about/"
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About {SITE_CONFIG.name}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            {SITE_CONFIG.name} is an independent web platform building 85 focused, reliable
            browser utilities for everyday digital work.
          </p>
        </header>

        <div className="space-y-10 text-base leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Why We Built {SITE_CONFIG.name}</h2>
            <p>
              Routine online tasks—counting words, validating JSON, checking character limits,
              computing loan payments, or compressing an image—often force people onto slow sites
              packed with intrusive overlays, confusing downloads, or mandatory sign-ups.
            </p>
            <p className="mt-3">
              Our goal is straightforward: give every utility a clean, dedicated page that loads
              quickly, explains clearly how the tool works, and executes directly inside your
              browser whenever web standards allow.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Core Engineering Principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Client-Side Execution</h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Text, code, math, and local file utilities process inputs in browser memory so
                  your working data is not sent to remote servers.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Transparent API Notices</h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  If a specialized utility requires an external lookup or server call, we disclose it
                  explicitly on that tool&rsquo;s page before you run anything.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Accessible Interfaces</h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Keyboard navigation, readable contrast, clear error feedback, and responsive
                  mobile controls are built into every template.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Modular Rollout</h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Tools are shipped and verified in seven category batches so each utility receives
                  thorough functional testing and documentation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Seven Planned Tool Categories</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}/`}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-indigo-300 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{category.name}</span>
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      Batch {category.batch} · {category.plannedToolCount} tools
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Have Feedback or a Request?</h2>
            <p className="text-sm text-slate-600">
              If you notice a calculation edge case, accessibility issue, or would like to suggest
              a utility for an upcoming batch, reach out through our{' '}
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
