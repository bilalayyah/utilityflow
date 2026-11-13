import { IT_TOOL_OVERRIDES } from './tools';
import { IT_CATEGORY_OVERRIDES } from './categories';
import { itStrings } from './ui';
import { itComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * IT locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'it',
  toolOverrides: IT_TOOL_OVERRIDES,
  categoryOverrides: IT_CATEGORY_OVERRIDES,
  uiStrings: itStrings,
  componentStrings: itComponentStrings,
};

export default data;
