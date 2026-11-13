import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { LocaleCode } from './config';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  getLocaleFromPath,
  getLocaleInfo,
  isLocaleCode,
} from './config';
import { getLocalizedEquivalentPath } from './routes';
import { getUiStrings, type UiStrings } from './ui';

interface LocaleContextValue {
  locale: LocaleCode;
  t: UiStrings;
  /** Switch language, preserving the current page, and remember the choice. */
  switchLocale: (locale: LocaleCode) => void;
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
      t: getUiStrings(locale),
      switchLocale: (next: LocaleCode) => {
        try {
          window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
        } catch {
          // storage unavailable — navigation still works
        }
        navigate(getLocalizedEquivalentPath(location.pathname, next));
      },
    }),
    [locale, location.pathname, navigate]
  );

  useEffect(() => {
    document.documentElement.lang = getLocaleInfo(locale).htmlLang;
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used inside <LocaleProvider>');
  }
  return context;
}
