import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { useLocale } from '../../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../../locales/config';
import { getLocalizedCategories } from '../../locales/tools';

export function Footer() {
  const { locale, t } = useLocale();
  const currentYear = new Date().getFullYear();
  const categories = getLocalizedCategories(locale);

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-3">
            <Link
              to={localizeStaticPath('/', locale)}
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
              {t.footer.tagline}
            </p>
            <p className="text-xs text-slate-500">
              {t.nav.contact}:{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="text-slate-700 hover:text-indigo-600 underline-offset-4 hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">{t.footer.categories}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={categoryHref(category.id, locale)}
                    className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">{t.footer.platformAi}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={localizeStaticPath('/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/tools/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.footer.allToolsDirectory}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/ai-writing-assistant/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.nav.aiWriting.label}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/ai-text-summarizer/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.nav.aiSummarizer.label}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/ai-tool-finder/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.nav.aiFinder.label}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/about/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/contact/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">{t.footer.legal}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={localizeStaticPath('/privacy-policy/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/terms-of-service/', locale)}
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="hover:text-slate-950 transition-colors underline-offset-4 hover:underline"
                >
                  {t.footer.xmlSitemap}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {t.footer.rightsReserved}
          </p>
          <p>{t.footer.deployedNote}</p>
        </div>
      </div>
    </footer>
  );
}
