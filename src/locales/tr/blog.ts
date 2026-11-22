import type { ArticleLocaleOverride } from '../types';
import { TR_BLOG_PART1 } from './blog-part1';
import { TR_BLOG_PART2 } from './blog-part2';
import { TR_BLOG_PART3 } from './blog-part3';
import { TR_BLOG_PART4 } from './blog-part4';

/**
 * Blog article overrides for Turkish — 249 articles, written in Turkish and
 * SEO-optimized in Turkish. Split into 4 part files by tool range; this file
 * only merges them into the single record the generators consume.
 */
export const TR_ARTICLE_OVERRIDES: Record<string, ArticleLocaleOverride> = {
  ...TR_BLOG_PART1,
  ...TR_BLOG_PART2,
  ...TR_BLOG_PART3,
  ...TR_BLOG_PART4,
};
