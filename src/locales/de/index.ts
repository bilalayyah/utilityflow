import { DE_TOOL_OVERRIDES } from './tools';
import { DE_CATEGORY_OVERRIDES } from './categories';
import { deStrings } from './ui';
import { deComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * DE locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'de',
  toolOverrides: DE_TOOL_OVERRIDES,
  categoryOverrides: DE_CATEGORY_OVERRIDES,
  uiStrings: deStrings,
  componentStrings: deComponentStrings,
};

export default data;
