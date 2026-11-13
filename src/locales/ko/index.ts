import { KO_TOOL_OVERRIDES } from './tools';
import { KO_CATEGORY_OVERRIDES } from './categories';
import { koStrings } from './ui';
import { koComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * KO locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'ko',
  toolOverrides: KO_TOOL_OVERRIDES,
  categoryOverrides: KO_CATEGORY_OVERRIDES,
  uiStrings: koStrings,
  componentStrings: koComponentStrings,
};

export default data;
