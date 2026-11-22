import { TR_TOOL_OVERRIDES } from './tools';
import { TR_CATEGORY_OVERRIDES } from './categories';
import { trStrings } from './ui';
import { trComponentStrings } from './components';
import { TR_ARTICLE_INDEX } from './blog-index';
import type { LocaleData } from '../types';

/**
 * TR locale bundle, loaded on demand by loader.ts (one Vite chunk).
 * Content lives in the per-language data files; this file only assembles
 * them into one LocaleData. The './components' import is provided by the
 * component-strings extraction (src/locales/<code>/components.ts).
 * NOTE (coordinator fix): article overrides come from the GENERATED slim
 * './blog-index' (TR_ARTICLE_INDEX), exactly like HI's bundle — the
 * parent runs scripts/generate-blog-article-index.ts to create it.
 */
const data: LocaleData = {
  code: 'tr',
  toolOverrides: TR_TOOL_OVERRIDES,
  categoryOverrides: TR_CATEGORY_OVERRIDES,
  articleOverrides: TR_ARTICLE_INDEX,
  uiStrings: trStrings,
  componentStrings: trComponentStrings,
};

export default data;
