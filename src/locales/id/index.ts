import { ID_TOOL_OVERRIDES } from './tools';
import { ID_CATEGORY_OVERRIDES } from './categories';
import { idStrings } from './ui';
import { idComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * ID locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'id',
  toolOverrides: ID_TOOL_OVERRIDES,
  categoryOverrides: ID_CATEGORY_OVERRIDES,
  uiStrings: idStrings,
  componentStrings: idComponentStrings,
};

export default data;
