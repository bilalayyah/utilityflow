import type { ArticleLocaleOverride } from '../types';
import { HI_BLOG_PART1 } from './blog-part1';
import { HI_BLOG_PART2 } from './blog-part2';
import { HI_BLOG_PART3 } from './blog-part3';
import { HI_BLOG_PART4 } from './blog-part4';

/**
 * Blog article overrides for Hindi — 249 articles, written in Hindi and
 * SEO-optimized in Hindi. Split into 4 part files by tool range; this file
 * only merges them into the single record the generators consume.
 */
export const HI_ARTICLE_OVERRIDES: Record<string, ArticleLocaleOverride> = {
  ...HI_BLOG_PART1,
  ...HI_BLOG_PART2,
  ...HI_BLOG_PART3,
  ...HI_BLOG_PART4,
};
