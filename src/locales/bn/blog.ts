import type { ArticleLocaleOverride } from '../types';
import { BN_BLOG_PART1 } from './blog-part1';
import { BN_BLOG_PART2 } from './blog-part2';
import { BN_BLOG_PART3 } from './blog-part3';
import { BN_BLOG_PART4 } from './blog-part4';

/**
 * Blog article overrides for Bengali — 249 articles, written in Bengali and
 * SEO-optimized in Bengali. Split into 4 part files by tool range; this file
 * only merges them into the single record the generators consume.
 */
export const BN_ARTICLE_OVERRIDES: Record<string, ArticleLocaleOverride> = {
  ...BN_BLOG_PART1,
  ...BN_BLOG_PART2,
  ...BN_BLOG_PART3,
  ...BN_BLOG_PART4,
};
