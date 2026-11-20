import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { useLocale } from '../../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../../locales/config';
import { getLocalizedCategories } from '../../locales/tools';
import { requestConsentBanner } from '../../utils/consent';

export function Footer() {
  const { locale, t } = useLocale();
  const currentYear = new Date().getFullYear();
  const categories = getLocalizedCategories(locale);

  return (
    <footer className="border-t border-[#E5E5EA] bg-[#FFFFFF] text-[#6E6E73] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#CBD5E1]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link
              to={localizeStaticPath('/', locale)}
              className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="32" height="32" rx="7" fill="#0E8A66" />
                <rect x="7" y="7" width="8" height="8" rx="1.5" fill="#FFFFFF" />
                <rect x="17" y="7" width="8" height="8" rx="1.5" fill="#FFFFFF" />
                <rect x="7" y="17" width="8" height="8" rx="1.5" fill="#FFFFFF" />
                <rect x="17" y="17" width="8" height="8" rx="1.5" fill="#FFFFFF" />
              </svg>
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#6E6E73] max-w-sm dark:text-[#CBD5E1]">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-[#86868B] dark:text-[#CBD5E1]">
              {t.nav.contact}:{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="text-[#1D1D1F] hover:text-[#0B7A59] underline-offset-4 hover:underline dark:text-[#F1F5F9] dark:hover:text-[#34D399]"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#1D1D1F] mb-3 dark:text-[#F1F5F9]">{t.footer.categories}</h2>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    to={categoryHref(category.id, locale)}
                    className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#1D1D1F] mb-3 dark:text-[#F1F5F9]">{t.footer.explore}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={localizeStaticPath('/tools/', locale)}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.footer.allToolsDirectory}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/blog/', locale)}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/about/', locale)}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/contact/', locale)}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#1D1D1F] mb-3 dark:text-[#F1F5F9]">{t.footer.trustLegal}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={localizeStaticPath('/privacy-policy/', locale)}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  to={localizeStaticPath('/terms-of-service/', locale)}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => requestConsentBanner()}
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.consent.cookieSettings}
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="hover:text-[#0B7A59] transition-colors underline-offset-4 hover:underline dark:hover:text-[#34D399]"
                >
                  {t.footer.xmlSitemap}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E5E5EA] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#86868B] dark:border-[#243247] dark:text-[#CBD5E1]">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {t.footer.rightsReserved}
          </p>
          <p>
            {t.footer.deployedNote.split(/(Bilal|Shaheen)/g).map((part, index) =>
              part === 'Bilal' || part === 'Shaheen' ? (
                <span key={index} className="font-script text-base pr-1">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
