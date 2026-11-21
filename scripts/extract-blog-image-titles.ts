#!/usr/bin/env node
/**
 * Extract (article id, lang, title) triples for the blog-image generator
 * (scripts/generate-blog-images.py).
 *
 * EN titles come from the generated slim index (src/registry/blogArticleIndex.ts);
 * localized titles come from src/locales/<lang>/blog.ts overrides.
 *
 * Usage:
 *   ./node_modules/.bin/tsx scripts/extract-blog-image-titles.ts \
 *     --only image-compressor-guide:en,word-counter-guide:de,qr-code-generator-guide:es \
 *     --out /tmp/uf-blog-image-jobs.json
 *   ./node_modules/.bin/tsx scripts/extract-blog-image-titles.ts \
 *     --all --out /tmp/uf-blog-image-jobs-all.json
 *
 * --all enumerates every published (id, lang) pair: all 249 EN meta entries
 * plus every override key in each of the 11 locale files (expected 2,988
 * total). Missing titles fail loudly (exit 1) instead of shipping a blank
 * card. Titles longer than 60 chars are warned about (the generator's
 * 3-line auto-fit is sized for <=60 chars).
 */
import { writeFileSync } from 'node:fs';
import { BLOG_ARTICLE_META } from '../src/registry/blogArticleIndex';
import { DE_ARTICLE_OVERRIDES } from '../src/locales/de/blog';
import { ES_ARTICLE_OVERRIDES } from '../src/locales/es/blog';
import { FR_ARTICLE_OVERRIDES } from '../src/locales/fr/blog';
import { ID_ARTICLE_OVERRIDES } from '../src/locales/id/blog';
import { IT_ARTICLE_OVERRIDES } from '../src/locales/it/blog';
import { JA_ARTICLE_OVERRIDES } from '../src/locales/ja/blog';
import { KO_ARTICLE_OVERRIDES } from '../src/locales/ko/blog';
import { PT_ARTICLE_OVERRIDES } from '../src/locales/pt/blog';
import { RU_ARTICLE_OVERRIDES } from '../src/locales/ru/blog';
import { ZH_ARTICLE_OVERRIDES } from '../src/locales/zh/blog';
import { HI_ARTICLE_OVERRIDES } from '../src/locales/hi/blog';
import { TR_ARTICLE_OVERRIDES } from '../src/locales/tr/blog';

const LOCALES = ['en', 'es', 'pt', 'de', 'fr', 'ja', 'id', 'it', 'ru', 'ko', 'zh', 'hi', 'tr'] as const;
type LocaleCode = (typeof LOCALES)[number];

const OVERRIDES: Record<Exclude<LocaleCode, 'en'>, Record<string, { title?: string }>> = {
  es: ES_ARTICLE_OVERRIDES,
  pt: PT_ARTICLE_OVERRIDES,
  de: DE_ARTICLE_OVERRIDES,
  fr: FR_ARTICLE_OVERRIDES,
  ja: JA_ARTICLE_OVERRIDES,
  id: ID_ARTICLE_OVERRIDES,
  it: IT_ARTICLE_OVERRIDES,
  ru: RU_ARTICLE_OVERRIDES,
  ko: KO_ARTICLE_OVERRIDES,
  zh: ZH_ARTICLE_OVERRIDES,
  hi: HI_ARTICLE_OVERRIDES,
  tr: TR_ARTICLE_OVERRIDES,
};

interface Job {
  id: string;
  lang: LocaleCode;
  title: string;
}

function titleFor(id: string, lang: LocaleCode): string | undefined {
  if (lang === 'en') {
    return BLOG_ARTICLE_META.find((m) => m.id === id)?.en.title;
  }
  return OVERRIDES[lang][id]?.title;
}

function parseArgs(): { only?: string; all: boolean; out: string } {
  const argv = process.argv.slice(2);
  let only: string | undefined;
  let all = false;
  let out = '/tmp/uf-blog-image-jobs.json';
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--only') only = argv[++i];
    else if (argv[i] === '--all') all = true;
    else if (argv[i] === '--out') out = argv[++i];
    else throw new Error(`Unknown arg: ${argv[i]}`);
  }
  if (!only && !all) throw new Error('Pass --only <id:lang,...> or --all');
  if (only && all) throw new Error('Pass either --only or --all, not both');
  return { only, all, out };
}

function main(): void {
  const { only, all, out } = parseArgs();
  const jobs: Job[] = [];
  const missing: string[] = [];
  const longTitles: string[] = [];

  const add = (id: string, lang: LocaleCode) => {
    const title = titleFor(id, lang);
    if (!title) {
      missing.push(`${id}:${lang}`);
      return;
    }
    if (title.length > 60) longTitles.push(`${id}:${lang} (${title.length} chars)`);
    jobs.push({ id, lang, title });
  };

  if (only) {
    for (const pair of only.split(',')) {
      const [id, lang] = pair.split(':');
      if (!id || !lang || !(LOCALES as readonly string[]).includes(lang)) {
        throw new Error(`Bad pair (want id:lang with lang in ${LOCALES.join(',')}): ${pair}`);
      }
      add(id, lang as LocaleCode);
    }
  } else if (all) {
    for (const meta of BLOG_ARTICLE_META) add(meta.id, 'en');
    for (const lang of LOCALES) {
      if (lang === 'en') continue;
      for (const id of Object.keys(OVERRIDES[lang])) {
        if (!BLOG_ARTICLE_META.some((m) => m.id === id)) {
          console.warn(`WARN override id not in EN registry, skipped: ${id}:${lang}`);
          continue;
        }
        add(id, lang);
      }
    }
  }

  if (missing.length > 0) {
    console.error(`ERROR ${missing.length} (id, lang) pairs have no title:\n  ${missing.join('\n  ')}`);
    process.exit(1);
  }
  const perLang: Record<string, number> = {};
  for (const j of jobs) perLang[j.lang] = (perLang[j.lang] ?? 0) + 1;
  console.log(`jobs: ${jobs.length}  per-lang: ${JSON.stringify(perLang)}`);
  if (longTitles.length > 0) {
    console.warn(`WARN ${longTitles.length} titles >60 chars (overflow risk):\n  ${longTitles.join('\n  ')}`);
  }
  writeFileSync(out, JSON.stringify(jobs, null, 2) + '\n', 'utf-8');
  console.log(`wrote ${out}`);
}

main();
