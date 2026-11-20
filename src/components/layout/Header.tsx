import { Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';
import { LanguageSwitcher } from '../../locales/LanguageSwitcher';
import { useLocale } from '../../locales/LocaleContext';
import { localizeStaticPath, getLocaleInfo } from '../../locales/config';
import { ToolSearchBar } from '../tool/ToolSearchBar';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const { locale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const homePrefix = getLocaleInfo(locale).pathPrefix;
  const categoriesAnchor = `${homePrefix}/#categories`;

  const NAV_ITEMS = [
    { label: t.nav.tools, to: localizeStaticPath('/tools/', locale) },
    { label: t.nav.categories, to: categoriesAnchor, anchor: true },
    { label: t.nav.blog, to: localizeStaticPath('/blog/', locale) },
    { label: t.nav.about, to: localizeStaticPath('/about/', locale) },
    { label: t.nav.contact, to: localizeStaticPath('/contact/', locale) },
  ] as const;

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E5EA] bg-[#FFFFFF]/90 backdrop-blur-md dark:border-[#243247] dark:bg-[#0C1322]/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 max-[379px]:gap-2 sm:gap-8 px-4 max-[379px]:px-3 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link
          to={localizeStaticPath('/', locale)}
          onClick={() => setMobileOpen(false)}
          className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#1D1D1F] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] rounded-md dark:text-[#F1F5F9]"
        >
          <svg
            width="24"
            height="24"
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

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:flex min-w-0 items-center gap-6 lg:gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive =
              !('anchor' in item && item.anchor) &&
              (location.pathname === item.to ||
                location.pathname === item.to.replace(/\/$/, ''));
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] rounded-sm ${
                  isActive
                    ? 'text-[#0B7A59] dark:text-[#34D399]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#CBD5E1] dark:hover:text-[#F1F5F9]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header search (desktop): same live tool search as the homepage */}
        <div className="hidden xl:block min-w-0 flex-1 max-w-xs">
          <ToolSearchBar placeholder={t.nav.searchPlaceholder} />
        </div>

        {/* Zone 3: Language Switcher + Theme Switcher + Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            aria-expanded={searchOpen}
            aria-label={searchOpen ? t.nav.closeSearch : t.nav.searchTools}
            onClick={() => setSearchOpen((prev) => !prev)}
            className="inline-flex xl:hidden items-center justify-center rounded-lg border border-[#E5E5EA] p-2 text-[#6E6E73] hover:bg-[#F5F5F7] hover:text-[#1D1D1F] min-h-[40px] min-w-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] cursor-pointer dark:border-[#243247] dark:text-[#CBD5E1] dark:hover:bg-[#131D31] dark:hover:text-[#F1F5F9]"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Language switcher hidden below 380px (still available in the mobile drawer) — the header row is 379px wide and overflows 320–375px viewports otherwise. */}
          <div className="max-[379px]:hidden shrink-0">
            <LanguageSwitcher />
          </div>

          <ThemeToggle />

          <Link
            to={localizeStaticPath('/tools/', locale)}
            className="hidden xl:inline-flex items-center justify-center rounded-full bg-[#0E8A66] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0B7557] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] focus-visible:ring-offset-2"
          >
            {t.nav.allTools}
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-[#E5E5EA] p-2 text-[#6E6E73] hover:bg-[#F5F5F7] hover:text-[#1D1D1F] min-h-[40px] min-w-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] cursor-pointer dark:border-[#243247] dark:text-[#CBD5E1] dark:hover:bg-[#131D31] dark:hover:text-[#F1F5F9]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search row (expandable) */}
      {searchOpen && (
        <div className="xl:hidden border-t border-[#E5E5EA] bg-[#FFFFFF]/90 px-4 py-3 dark:border-[#243247] dark:bg-[#0C1322]/90">
          <ToolSearchBar placeholder={t.nav.searchPlaceholder} />
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="lg:hidden border-t border-[#E5E5EA] bg-[#FFFFFF] px-4 py-4 space-y-2 dark:border-[#243247] dark:bg-[#0C1322]"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-[#6E6E73] hover:bg-[#F5F5F7] hover:text-[#1D1D1F] min-h-[44px] dark:text-[#CBD5E1] dark:hover:bg-[#131D31] dark:hover:text-[#F1F5F9]"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-[#E5E5EA] dark:border-[#243247]">
            <LanguageSwitcher variant="list" onSelect={() => setMobileOpen(false)} />
          </div>

          <div className="pt-2 border-t border-[#E5E5EA] dark:border-[#243247]">
            <ThemeToggle variant="segmented" onSelect={() => setMobileOpen(false)} />
          </div>
          <div className="pt-2">
            <Link
              to={localizeStaticPath('/tools/', locale)}
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#0E8A66] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0B7557] min-h-[44px]"
            >
              {t.nav.allTools}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
