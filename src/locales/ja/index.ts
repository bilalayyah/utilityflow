import { JA_TOOL_OVERRIDES } from './tools';
import { JA_CATEGORY_OVERRIDES } from './categories';
import { jaStrings } from './ui';
import { jaComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * JA locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'ja',
  toolOverrides: JA_TOOL_OVERRIDES,
  categoryOverrides: JA_CATEGORY_OVERRIDES,
  uiStrings: jaStrings,
  componentStrings: jaComponentStrings,
};

export default data;
