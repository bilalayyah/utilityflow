import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { LocaleCode } from './config';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  getLocaleFromPath,
  getLocaleInfo,
  isLocaleCode,
} from './config';
import { EN_LOCALE_DATA, loadLocaleData } from './loader';
import { getLocalizedEquivalentPath } from './routes';
import { getActiveLocaleData, setActiveLocaleData } from './store';
import type { LocaleData } from './types';
import { getUiStrings, type UiStrings } from './ui';

interface LocaleContextValue {
  locale: LocaleCode;
  t: UiStrings;
  /** Loaded data for the active locale; null while it is still loading. */
  localeData: LocaleData | null;
  /** Switch language, preserving the current page, and remember the choice. */
  switchLocale: (locale: LocaleCode) => Promise<void>;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): LocaleCode | null {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocaleCode(stored)) return stored;
  } catch {
    // storage unavailable — fall through to default
  }
  return null;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { locale } = useMemo(
    () => getLocaleFromPath(location.pathname),
    [location.pathname]
  );

  // Loaded data for the active locale. English is built in, so it starts
  // loaded; every other locale starts null and renders the loading fallback
  // until its chunk arrives.
  const [localeData, setLocaleData] = useState<LocaleData | null>(() =>
    locale === DEFAULT_LOCALE ? EN_LOCALE_DATA : null
  );

  // Load the active locale's data whenever the URL locale changes. A
  // cancelled flag guards stale loads (locale changed mid-load): only the
  // latest load may write the store / state.
  useEffect(() => {
    let cancelled = false;
    loadLocaleData(locale).then((data) => {
      if (cancelled) return;
      setActiveLocaleData(data);
      setLocaleData(data);
    });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  // Remembered preference: only when landing on the English homepage, and
  // only when the user previously chose another language explicitly.
  // Never IP-based, never forced on deep links.
  useEffect(() => {
    if (location.pathname !== '/') return;
    const stored = readStoredLocale();
    if (stored && stored !== DEFAULT_LOCALE) {
      navigate(`${getLocaleInfo(stored).pathPrefix}/`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      // While the locale's data is still loading, getUiStrings falls back
      // to the store (English when the store holds another locale) — but
      // children are not rendered until loading finishes, so this only
      // matters for the fallback itself.
      t: getUiStrings(locale, localeData ?? getActiveLocaleData()),
      localeData,
      switchLocale: async (next: LocaleCode) => {
        if (next === locale) return;
        // Load first so the equivalent path can be resolved from the fresh
        // target data; do NOT set the store here — the provider effect sets
        // it after navigation lands on the new locale.
        const data = await loadLocaleData(next);
        try {
          window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
        } catch {
          // storage unavailable — navigation still works
        }
        navigate(getLocalizedEquivalentPath(location.pathname, next, data));
      },
    }),
    [locale, localeData, location.pathname, navigate]
  );

  useEffect(() => {
    document.documentElement.lang = getLocaleInfo(locale).htmlLang;
  }, [locale]);

  // No translated strings are available yet while loading: render a minimal
  // plain-English fallback instead of children.
  if (!localeData || localeData.code !== locale) {
    return (
      <LocaleContext.Provider value={value}>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, sans-serif',
            color: '#475569',
          }}
        >
          Loading…
        </div>
      </LocaleContext.Provider>
    );
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used inside <LocaleProvider>');
  }
  return context;
}
