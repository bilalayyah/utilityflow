import { ZH_TOOL_OVERRIDES } from './tools';
import { ZH_CATEGORY_OVERRIDES } from './categories';
import { zhStrings } from './ui';
import { zhComponentStrings } from './components';
import { ZH_ARTICLE_INDEX } from './blog-index';
import type { LocaleData } from '../types';

/**
 * ZH locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 */
const data: LocaleData = {
  code: 'zh',
  toolOverrides: ZH_TOOL_OVERRIDES,
  categoryOverrides: ZH_CATEGORY_OVERRIDES,
  articleOverrides: ZH_ARTICLE_INDEX,
  uiStrings: zhStrings,
  componentStrings: zhComponentStrings,
};

export default data;
