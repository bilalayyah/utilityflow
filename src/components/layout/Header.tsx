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
    <header className="sticky top-0 z-40 border-b border-indigo-100/70 dark:border-slate-800 bg-gradient-to-r from-violet-200 via-indigo-200 to-sky-200 dark:from-violet-950/70 dark:via-indigo-950/60 dark:to-sky-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 max-[379px]:gap-2 sm:gap-8 px-4 max-[379px]:px-3 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link
          to={localizeStaticPath('/', locale)}
          onClick={() => setMobileOpen(false)}
          className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-md"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <defs>
              <linearGradient id="header-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="7" fill="url(#header-logo-gradient)" />
            <rect x="7" y="7" width="8" height="8" rx="1.5" fill="#FFFFFF" />
            <rect x="17" y="7" width="8" height="8" rx="1.5" fill="#93C5FD" />
            <rect x="7" y="17" width="8" height="8" rx="1.5" fill="#93C5FD" />
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
                className={`text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm ${
                  isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-950'
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
            className="inline-flex xl:hidden items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 min-h-[40px] min-w-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
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
            className="hidden xl:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:from-indigo-700 hover:to-violet-700 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
          >
            {t.nav.allTools}
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 min-h-[40px] min-w-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search row (expandable) */}
      {searchOpen && (
        <div className="xl:hidden border-t border-indigo-100/70 dark:border-slate-800 bg-gradient-to-r from-violet-200 via-indigo-200 to-sky-200 dark:from-violet-950/70 dark:via-indigo-950/60 dark:to-sky-950/70 px-4 py-3">
          <ToolSearchBar placeholder={t.nav.searchPlaceholder} />
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="lg:hidden border-t border-indigo-100/70 dark:border-slate-800 bg-gradient-to-b from-violet-200 via-indigo-200 to-sky-200 dark:from-violet-950/70 dark:via-indigo-950/60 dark:to-sky-950/70 px-4 py-4 space-y-2"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 min-h-[44px]"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-slate-100">
            <LanguageSwitcher variant="list" onSelect={() => setMobileOpen(false)} />
          </div>

          <div className="pt-2 border-t border-slate-100">
            <ThemeToggle variant="segmented" onSelect={() => setMobileOpen(false)} />
          </div>
          <div className="pt-2">
            <Link
              to={localizeStaticPath('/tools/', locale)}
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:from-indigo-700 hover:to-violet-700 min-h-[44px]"
            >
              {t.nav.allTools}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
