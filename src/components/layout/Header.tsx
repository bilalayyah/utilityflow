import { ChevronDown, Menu, Search, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const aiMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const homePrefix = getLocaleInfo(locale).pathPrefix;
  const categoriesAnchor = `${homePrefix}/#categories`;
  const aiAnchor = `${homePrefix}/#ai-tools`;

  const AI_NAV_ITEMS = [
    {
      label: t.nav.aiWriting.label,
      to: localizeStaticPath('/ai-writing-assistant/', locale),
      desc: t.nav.aiWriting.desc,
    },
    {
      label: t.nav.aiSummarizer.label,
      to: localizeStaticPath('/ai-text-summarizer/', locale),
      desc: t.nav.aiSummarizer.desc,
    },
    {
      label: t.nav.aiFinder.label,
      to: localizeStaticPath('/ai-tool-finder/', locale),
      desc: t.nav.aiFinder.desc,
    },
  ] as const;

  const NAV_ITEMS = [
    { label: t.nav.tools, to: localizeStaticPath('/tools/', locale) },
    { label: t.nav.categories, to: categoriesAnchor, anchor: true },
    { label: t.nav.aiTools, to: aiAnchor, anchor: true, aiDropdown: true },
    { label: t.nav.about, to: localizeStaticPath('/about/', locale) },
    { label: t.nav.contact, to: localizeStaticPath('/contact/', locale) },
  ] as const;

  useEffect(() => {
    setAiMenuOpen(false);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!aiMenuOpen) return;
    const handleOutside = (event: MouseEvent) => {
      if (aiMenuRef.current && !aiMenuRef.current.contains(event.target as Node)) {
        setAiMenuOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAiMenuOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [aiMenuOpen]);

  const isOnAiRoute = AI_NAV_ITEMS.some(
    (ai) =>
      location.pathname === ai.to || location.pathname === ai.to.replace(/\/$/, '')
  );

  return (
    <header className="sticky top-0 z-40 border-b border-indigo-100/70 dark:border-slate-800 bg-gradient-to-r from-violet-200 via-indigo-200 to-sky-200 dark:from-violet-950/70 dark:via-indigo-950/60 dark:to-sky-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
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
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 lg:gap-7">
          {NAV_ITEMS.map((item) => {
            if ('aiDropdown' in item && item.aiDropdown) {
              return (
                <div key={item.to} ref={aiMenuRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={aiMenuOpen}
                    aria-haspopup="menu"
                    onClick={() => setAiMenuOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm cursor-pointer ${
                      isOnAiRoute
                        ? 'text-indigo-600'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        aiMenuOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {aiMenuOpen && (
                    <div
                      role="menu"
                      aria-label={t.nav.freeAiTools}
                      className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg z-50"
                    >
                      {AI_NAV_ITEMS.map((ai) => (
                        <Link
                          key={ai.to}
                          role="menuitem"
                          to={ai.to}
                          onClick={() => setAiMenuOpen(false)}
                          className="block rounded-lg px-3 py-2.5 hover:bg-slate-50 transition-colors"
                        >
                          <div className="text-sm font-semibold text-slate-900">{ai.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{ai.desc}</div>
                        </Link>
                      ))}
                      <div className="mt-1 pt-1 border-t border-slate-100">
                        <Link
                          role="menuitem"
                          to={aiAnchor}
                          onClick={() => setAiMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
                        >
                          {t.nav.viewAiSection}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              !('anchor' in item && item.anchor) &&
              (location.pathname === item.to ||
                location.pathname === item.to.replace(/\/$/, ''));
            return (
              <Link
                key={item.to}
                to={item.to}
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
        <div className="hidden lg:block w-60 xl:w-80 shrink-0">
          <ToolSearchBar placeholder={t.nav.searchPlaceholder} />
        </div>

        {/* Zone 3: Language Switcher + Theme Switcher + Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            aria-expanded={searchOpen}
            aria-label={searchOpen ? t.nav.closeSearch : t.nav.searchTools}
            onClick={() => setSearchOpen((prev) => !prev)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 min-h-[40px] min-w-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          <LanguageSwitcher />

          <ThemeToggle />

          <Link
            to={localizeStaticPath('/tools/', locale)}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:from-indigo-700 hover:to-violet-700 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
          >
            {t.nav.allTools}
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 min-h-[40px] min-w-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search row (expandable) */}
      {searchOpen && (
        <div className="lg:hidden border-t border-indigo-100/70 dark:border-slate-800 bg-gradient-to-r from-violet-200 via-indigo-200 to-sky-200 dark:from-violet-950/70 dark:via-indigo-950/60 dark:to-sky-950/70 px-4 py-3">
          <ToolSearchBar placeholder={t.nav.searchPlaceholder} />
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="md:hidden border-t border-indigo-100/70 dark:border-slate-800 bg-gradient-to-b from-violet-200 via-indigo-200 to-sky-200 dark:from-violet-950/70 dark:via-indigo-950/60 dark:to-sky-950/70 px-4 py-4 space-y-2"
        >
          {NAV_ITEMS.filter((item) => !('aiDropdown' in item && item.aiDropdown)).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 min-h-[44px]"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
              {t.nav.freeAiTools}
            </div>
            {AI_NAV_ITEMS.map((ai) => (
              <Link
                key={ai.to}
                to={ai.to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 min-h-[42px]"
              >
                {ai.label}
              </Link>
            ))}
          </div>

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
