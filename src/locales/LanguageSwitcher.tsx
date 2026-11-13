import { Check, ChevronDown, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SUPPORTED_LOCALES, type LocaleCode } from './config';
import { useLocale } from './LocaleContext';

interface LanguageSwitcherProps {
  /** Compact rendering for the mobile drawer (full-width list). */
  variant?: 'dropdown' | 'list';
  onSelect?: () => void;
}

export function LanguageSwitcher({ variant = 'dropdown', onSelect }: LanguageSwitcherProps) {
  const { locale, t, switchLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open ]);

  const handleSelect = (code: LocaleCode) => {
    setOpen(false);
    onSelect?.();
    if (code !== locale) switchLocale(code);
  };

  if (variant === 'list') {
    return (
      <div className="space-y-1">
        <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {t.nav.language}
        </div>
        {SUPPORTED_LOCALES.map((item) => (
          <button
            key={item.code}
            type="button"
            onClick={() => handleSelect(item.code)}
            aria-current={item.code === locale ? 'true' : undefined}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium min-h-[42px] cursor-pointer ${
              item.code === locale
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-400" aria-hidden="true" />
              {item.nativeName}
            </span>
            {item.code === locale && <Check className="w-4 h-4 text-indigo-600" aria-hidden="true" />}
          </button>
        ))}
      </div>
    );
  }

  const current = SUPPORTED_LOCALES.find((item) => item.code === locale) ?? SUPPORTED_LOCALES[0];

  return (
    <div ref={menuRef} className="relative shrink-0">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t.nav.chooseLanguage}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
      >
        <Globe className="w-4 h-4 text-slate-500" aria-hidden="true" />
        <span className="hidden sm:inline">{current.nativeName}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.nav.chooseLanguage}
          className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg z-50"
        >
          {SUPPORTED_LOCALES.map((item) => (
            <button
              key={item.code}
              type="button"
              role="menuitem"
              onClick={() => handleSelect(item.code)}
              aria-current={item.code === locale ? 'true' : undefined}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium cursor-pointer ${
                item.code === locale
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.nativeName}
              {item.code === locale && <Check className="w-4 h-4 text-indigo-600" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
