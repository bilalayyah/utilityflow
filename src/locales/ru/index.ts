import { RU_TOOL_OVERRIDES } from './tools';
import { RU_CATEGORY_OVERRIDES } from './categories';
import { ruStrings } from './ui';
import { ruComponentStrings } from './components';
import type { LocaleData } from '../types';

/**
 * RU locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'ru',
  toolOverrides: RU_TOOL_OVERRIDES,
  categoryOverrides: RU_CATEGORY_OVERRIDES,
  uiStrings: ruStrings,
  componentStrings: ruComponentStrings,
};

export default data;
