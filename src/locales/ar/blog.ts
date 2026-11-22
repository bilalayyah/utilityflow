import type { ArticleLocaleOverride } from '../types';
import { AR_BLOG_PART1 } from './blog-part1';
import { AR_BLOG_PART2 } from './blog-part2';
import { AR_BLOG_PART3 } from './blog-part3';
import { AR_BLOG_PART4 } from './blog-part4';

/**
 * Blog article overrides for Arabic — 249 articles, written in Arabic and
 * SEO-optimized in Arabic. Split into 4 part files by tool range; this file
 * only merges them into the single record the generators consume.
 */
export const AR_ARTICLE_OVERRIDES: Record<string, ArticleLocaleOverride> = {
  ...AR_BLOG_PART1,
  ...AR_BLOG_PART2,
  ...AR_BLOG_PART3,
  ...AR_BLOG_PART4,
};
