import { FR_TOOL_OVERRIDES } from './tools';
import { FR_CATEGORY_OVERRIDES } from './categories';
import { frStrings } from './ui';
import { frComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * FR locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'fr',
  toolOverrides: FR_TOOL_OVERRIDES,
  categoryOverrides: FR_CATEGORY_OVERRIDES,
  uiStrings: frStrings,
  componentStrings: frComponentStrings,
};

export default data;
