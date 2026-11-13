import { ES_TOOL_OVERRIDES } from './tools';
import { ES_CATEGORY_OVERRIDES } from './categories';
import { esStrings } from './ui';
import { esComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * ES locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'es',
  toolOverrides: ES_TOOL_OVERRIDES,
  categoryOverrides: ES_CATEGORY_OVERRIDES,
  uiStrings: esStrings,
  componentStrings: esComponentStrings,
};

export default data;
