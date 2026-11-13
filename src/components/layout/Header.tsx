import { ChevronDown, Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE_CONFIG } from '../../config/site';
import { ThemeToggle } from './ThemeToggle';

const AI_NAV_ITEMS = [
  {
    label: 'AI Writing Assistant',
    to: '/ai-writing-assistant/',
    desc: 'Grammar, rewrite, tone & email drafting',
  },
  {
    label: 'AI Text Summarizer',
    to: '/ai-text-summarizer/',
    desc: 'Short, medium & bulleted summaries',
  },
  {
    label: 'AI Smart Tool Finder',
    to: '/ai-tool-finder/',
    desc: 'Find the right tool in plain English',
  },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const aiMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setAiMenuOpen(false);
    setMobileOpen(false);
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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link
          to="/"
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
            <rect width="32" height="32" rx="7" fill="#2563EB" />
            <rect x="7" y="7" width="8" height="8" rx="1.5" fill="#FFFFFF" />
            <rect x="17" y="7" width="8" height="8" rx="1.5" fill="#93C5FD" />
            <rect x="7" y="17" width="8" height="8" rx="1.5" fill="#93C5FD" />
            <rect x="17" y="17" width="8" height="8" rx="1.5" fill="#FFFFFF" />
          </svg>
          <span>{SITE_CONFIG.name}</span>
        </Link>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 lg:gap-7">
          {NAV_LINKS.map((item) => {
            if (item.to === '/#ai-tools') {
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
                      aria-label="Free AI Tools"
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
                          to="/#ai-tools"
                          onClick={() => setAiMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
                        >
                          View AI section on Homepage →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              item.to !== '/#categories' &&
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

        {/* Zone 3: Theme Switcher + Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />

          <Link
            to="/tools/"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-indigo-700 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
          >
            All Tools
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 min-h-[40px] min-w-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2"
        >
          {NAV_LINKS.filter((item) => item.to !== '/#ai-tools').map((item) => (
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
              Free AI Tools
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
            <ThemeToggle variant="segmented" onSelect={() => setMobileOpen(false)} />
          </div>
          <div className="pt-2">
            <Link
              to="/tools/"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 min-h-[44px]"
            >
              All Tools
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
