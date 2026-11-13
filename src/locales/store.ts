import { EN_LOCALE_DATA } from './loader';
import type { LocaleData } from './types';

/**
 * Module-level holder for the active locale's data.
 *
 * Only the loader/provider writes it (LocaleContext sets it after loading
 * the active locale). Render-time getters in tools.ts / ui.ts read it as
 * their default `data` argument, so existing callers keep working without
 * passing data explicitly. Defaults to the built-in English data.
 */
let activeLocaleData: LocaleData = EN_LOCALE_DATA;

export function setActiveLocaleData(data: LocaleData): void {
  activeLocaleData = data;
}

export function getActiveLocaleData(): LocaleData {
  return activeLocaleData;
}
