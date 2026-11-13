import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { CATEGORIES } from '../../registry/categories';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="32" height="32" rx="7" fill="#2563EB" />
                <rect x="7" y="7" width="8" height="8" rx="1.5" fill="#FFFFFF" />
                <rect x="17" y="7" width="8" height="8" rx="1.5" fill="#93C5FD" />
                <rect x="7" y="17" width="8" height="8" rx="1.5" fill="#93C5FD" />
                <rect x="17" y="17" width="8" height="8" rx="1.5" fill="#FFFFFF" />
              </svg>
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              A fast, browser-first collection of everyday utilities for writers, engineers,
              marketers, and analysts. Built to run locally with minimal overhead.
            </p>
            <p className="text-xs text-slate-500">
              Contact:{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="text-slate-700 hover:text-indigo-600 underline-offset-4 hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Categories</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}/`}
                    className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Platform &amp; AI</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  All Tools Directory
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-writing-assistant/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  AI Writing Assistant
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-text-summarizer/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  AI Text Summarizer
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-tool-finder/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  AI Smart Tool Finder
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy-policy/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service/"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>Browser-side utilities · Deployed on Cloudflare Pages</p>
        </div>
      </div>
    </footer>
  );
}
