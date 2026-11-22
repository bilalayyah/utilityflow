import type { ArticleLocaleOverride } from '../types';
import { UR_BLOG_PART1 } from './blog-part1';
import { UR_BLOG_PART2 } from './blog-part2';
import { UR_BLOG_PART3 } from './blog-part3';
import { UR_BLOG_PART4 } from './blog-part4';

/**
 * Blog article overrides for Urdu — 249 articles, written in Urdu and
 * SEO-optimized in Urdu. Split into 4 part files by tool range; this file
 * only merges them into the single record the generators consume.
 */
export const UR_ARTICLE_OVERRIDES: Record<string, ArticleLocaleOverride> = {
  ...UR_BLOG_PART1,
  ...UR_BLOG_PART2,
  ...UR_BLOG_PART3,
  ...UR_BLOG_PART4,
};
