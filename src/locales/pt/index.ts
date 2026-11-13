import { PT_TOOL_OVERRIDES } from './tools';
import { PT_CATEGORY_OVERRIDES } from './categories';
import { ptStrings } from './ui';
import { ptComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * PT locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'pt',
  toolOverrides: PT_TOOL_OVERRIDES,
  categoryOverrides: PT_CATEGORY_OVERRIDES,
  uiStrings: ptStrings,
  componentStrings: ptComponentStrings,
};

export default data;
