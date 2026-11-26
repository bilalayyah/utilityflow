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

/** Locales whose script needs a Google Fonts Noto family (L-8, Report C):
 * hi (Devanagari), ar (Arabic), bn (Bengali), ur (Nastaliq Urdu). */
const NOTO_SCRIPT_LOCALES: ReadonlySet<LocaleCode> = new Set(['hi', 'ar', 'bn', 'ur']);

/** Noto stylesheet (same families/weights as the old index.html link). */
const NOTO_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap';

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
  // until its chunk arrives — UNLESS the boot gate (src/boot/preloadRoute.ts)
  // already loaded it and stored it (CLS fix, Wed 2026-11-18): then the
  // first render has the data and no fallback ever paints.
  const [localeData, setLocaleData] = useState<LocaleData | null>(() => {
    if (locale === DEFAULT_LOCALE) return EN_LOCALE_DATA;
    const stored = getActiveLocaleData();
    return stored.code === locale ? stored : null;
  });

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
        navigate(
          getLocalizedEquivalentPath(
            `${location.pathname}${location.search}${location.hash}`,
            next,
            data
          )
        );
      },
    }),
    [locale, localeData, location.pathname, location.search, location.hash, navigate]
  );

  useEffect(() => {
    document.documentElement.lang = getLocaleInfo(locale).htmlLang;
    document.documentElement.dir = getLocaleInfo(locale).dir;
  }, [locale]);

  // L-8 (Report C): Noto script fonts load on demand only. The Google
  // Fonts Noto stylesheet used to ship in index.html on every page
  // (including EN, which never needs it). It is now injected — with its
  // preconnects — only when the active locale needs a Noto script font,
  // on direct visits and on client-side language switches alike. Once
  // loaded, the link stays (the font is cached; removing it on
  // switch-away would only force a re-fetch).
  useEffect(() => {
    if (!NOTO_SCRIPT_LOCALES.has(locale)) return;
    if (document.getElementById('utilityflow-noto-fonts')) return;
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);
    const preconnectStatic = document.createElement('link');
    preconnectStatic.rel = 'preconnect';
    preconnectStatic.href = 'https://fonts.gstatic.com';
    preconnectStatic.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectStatic);
    const link = document.createElement('link');
    link.id = 'utilityflow-noto-fonts';
    link.rel = 'stylesheet';
    link.href = NOTO_FONTS_HREF;
    document.head.appendChild(link);
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
