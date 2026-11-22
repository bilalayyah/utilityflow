import type { ArticleLocaleOverride } from '../types';
import { VI_BLOG_PART1 } from './blog-part1';
import { VI_BLOG_PART2 } from './blog-part2';
import { VI_BLOG_PART3 } from './blog-part3';
import { VI_BLOG_PART4 } from './blog-part4';

/**
 * Blog article overrides for Vietnamese — 249 articles, written in Vietnamese and
 * SEO-optimized in Vietnamese. Split into 4 part files by tool range; this file
 * only merges them into the single record the generators consume.
 */
export const VI_ARTICLE_OVERRIDES: Record<string, ArticleLocaleOverride> = {
  ...VI_BLOG_PART1,
  ...VI_BLOG_PART2,
  ...VI_BLOG_PART3,
  ...VI_BLOG_PART4,
};
