import { useMemo } from 'react';
import { useLocale } from './LocaleContext';

/**
 * Workbench-component string hooks.
 *
 * Each workbench component keeps its English string table as the source of
 * truth and calls useComponentStrings(componentKey, enStrings) to get the
 * active locale's strings merged over it. Missing keys — or a locale with
 * no entry for the component — fall back to English, so a partially
 * translated locale never breaks a tool. English returns the table as-is
 * (no merge, no lookup).
 *
 * The merge is memoized: the localized table is a stable reference from the
 * loaded locale module, so components whose useMemo deps list the returned
 * object do not recompute every render for non-English locales.
 *
 * `componentKey` must match the key under which the locale's components.ts
 * registers the component (see src/locales/<code>/components.ts).
 */
export function useComponentStrings<T extends Record<string, unknown>>(
  componentKey: string,
  enStrings: T
): T {
  const { locale, localeData } = useLocale();
  const localized =
    locale === 'en' ? undefined : localeData?.componentStrings[componentKey]?.strings;
  return useMemo(() => {
    if (!localized) return enStrings;
    return { ...enStrings, ...localized } as T;
  }, [enStrings, localized]);
}

/** Non-string lookup tables for a component (e.g. IO-format maps). */
const EMPTY_TABLES: Record<string, unknown> = {};

export function useComponentTables(componentKey: string): Record<string, unknown> {
  const { locale, localeData } = useLocale();
  if (locale === 'en' || !localeData) return EMPTY_TABLES;
  return localeData.componentStrings[componentKey]?.tables ?? EMPTY_TABLES;
}
