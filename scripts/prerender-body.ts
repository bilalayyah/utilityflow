// scripts/prerender-body.ts
//
// Audit Fix H-1 (re-audit 2026-11-15): prerendering was head-only — every
// dist/<route>/index.html had the correct <title>/meta/canonical/hreflang/
// JSON-LD but a body of just `<div id="root"></div>` (0 words, no H1), so
// non-JS crawlers saw all 1,111 URLs as empty pages and LCP waited for the
// full JS chain.
//
// This module renders a STATIC <main> for every route from the same source
// data the React pages render from (locale files + registries), and
// scripts/prerender-meta.ts injects it inside <div id="root"> at build
// time. No browser is involved, so it runs on Cloudflare Pages builds.
//
// React mount behaviour (verified locally, see audit-2026-11-15/
// h1-prerender-body.md): src/main.tsx uses createRoot().render(), which
// REPLACES the root container's existing children on mount — the static
// <main> is visible pre-JS (crawlers + first paint) and is gone once the
// app boots, with no duplicate H1/content. The static markup therefore
// mirrors the React page's headings and text but carries NO interactive
// behaviour (no tool workspace, no form, no accordion JS); the workspace
// slot carries the same "loading workspace" text the Suspense fallback
// shows, so the pre/post-mount paint is continuous.
//
// Rules for this file (keep in sync with the React pages):
// - Every string comes from the locale data / registries — never invented.
// - Escape every interpolated string (escapeText in text, escapeAttr in
//   attributes/hrefs). Locale strings are plain text, never HTML.
// - Heading order mirrors the React page: exactly one <h1> per page,
//   sections <h2>, items <h3>.
// - When a React page's content changes, update the matching builder here.

import { PREMIUM_CONFIG, SITE_CONFIG, buildCanonicalUrl } from '../src/config/site';
import {
  articleHref,
  blogCategoryHref,
  blogHref,
  categoryHref,
  localeTag,
  localizeStaticPath,
  toolHref,
} from '../src/locales/config';
import type { LocaleCode } from '../src/locales/config';
import {
  getLocalizedCategories,
  getLocalizedCategory,
  getLocalizedTool,
  getLocalizedTools,
  getToolById,
} from '../src/locales/tools';
import type { FullLocaleData, LocaleData } from '../src/locales/types';
import { formatString } from '../src/locales/ui';
import type { UiStrings } from '../src/locales/ui';
import {
  getBlogArticlesForCategory,
  getBlogArticlesForTool,
  getBlogArticlePrevNext,
  getBlogArticleVersion,
  getPublishedBlogArticles,
  getRelatedBlogArticles,
} from '../src/registry/blogArticles';
import { CATEGORIES } from '../src/registry/categories';
import { getPopularTools, getRelatedTools } from '../src/registry/toolsRegistry';
import type { ToolCategory, ToolDefinition } from '../src/types/tool';
import type { BlogArticle, BlogArticleLocaleVersion } from '../src/types/blog';
import { buildToolNameEntries, linkifyToolNames } from '../src/utils/linkifyToolNames';
import { pastelForKey } from '../src/components/tool/pastel';

// ---------------------------------------------------------------------------
// Escaping (same rules as prerender-meta.ts).
// ---------------------------------------------------------------------------

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------------------------------------------------------------------------
// Shared fragments.
// ---------------------------------------------------------------------------

const H1 = 'text-3xl sm:text-4xl font-bold tracking-tight text-slate-900';
const H2 = 'text-2xl font-bold text-slate-900 mb-4';
const H2_SM = 'text-xl font-bold text-slate-900 mb-4';
const BODY_P = 'mt-3 text-base sm:text-lg leading-relaxed text-slate-600';
const LINK = 'font-semibold text-indigo-600 hover:underline';

/** Breadcrumb trail mirroring src/components/common/Breadcrumbs.tsx. */
function breadcrumbs(
  items: Array<{ label: string; href?: string }>,
  locale: LocaleCode
): string {
  const lis = items
    .map((item, i) => {
      const sep = i > 0 ? '<span aria-hidden="true" class="text-slate-400"> / </span>' : '';
      const inner = item.href
        ? `<a href="${escapeAttr(item.href)}" class="${LINK}">${escapeText(item.label)}</a>`
        : `<span aria-current="page" class="text-slate-700">${escapeText(item.label)}</span>`;
      return `<li class="inline">${sep}${inner}</li>`;
    })
    .join('');
  return `<nav aria-label="Breadcrumb" class="mb-6"><ol class="flex flex-wrap items-center gap-1 text-sm text-slate-600">${lis}</ol></nav>`;
}

/** One tool card: name link + short description (mirrors ToolCard.tsx). */
function toolCard(tool: ToolDefinition, locale: LocaleCode): string {
  return (
    `<div class="rounded-2xl bg-white p-5 shadow-sm">` +
    `<h3 class="text-lg font-bold text-slate-900">` +
    `<a href="${escapeAttr(toolHref(tool.slug, locale))}" class="hover:text-indigo-700">${escapeText(tool.name)}</a>` +
    `</h3>` +
    `<p class="mt-1.5 text-sm leading-relaxed text-slate-600">${escapeText(tool.shortDescription)}</p>` +
    `</div>`
  );
}

function toolCards(tools: ToolDefinition[], locale: LocaleCode): string {
  return (
    `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">` +
    tools.map((tool) => toolCard(tool, locale)).join('') +
    `</div>`
  );
}

/** FAQ list: question as <h3>, answer as <p> (FAQAccordion renders only the first answer open; static shows all).
 * When `linkify` is given (tool pages, M-5; category pages, O-1), answers
 * carry contextual internal links; questions stay plain text. Without it
 * (home page) the answers are plain escaped text as before. */
function faqList(
  items: Array<{ question: string; answer: string }>,
  linkify?: (text: string) => string
): string {
  return items
    .map(
      (faq) =>
        `<div class="rounded-2xl bg-white px-4 py-4 shadow-sm mb-2.5">` +
        `<h3 class="text-base font-semibold text-slate-900">${escapeText(faq.question)}</h3>` +
        `<p class="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-600">${linkify ? linkify(faq.answer) : escapeText(faq.answer)}</p>` +
        `</div>`
    )
    .join('');
}

function openMain(): string {
  return `<main id="main-content" data-prerendered-body="true" class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">`;
}

// ---------------------------------------------------------------------------
// Tool pages — 88 tools x 11 locales (mirrors ToolPageLayout.tsx).
// `tool` must already be localized for `locale`.
// ---------------------------------------------------------------------------

export function renderToolBody(
  tool: ToolDefinition,
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const category = getLocalizedCategory(tool.categoryId, locale, data);
  const howToTitle = formatString(t.toolPage.howToUse, { name: tool.name });
  const modeLabel = tool.requiresExternalApi
    ? t.toolPage.externalApi
    : t.toolPage.runsLocally;
  const related = getRelatedTools(tool, 4).map((item) =>
    getLocalizedTool(item, locale, data)
  );
  // M-5: contextual internal links in guide prose — same linkifier the
  // React page uses (src/utils/linkifyToolNames.ts), so the static HTML
  // crawlers see matches the post-mount React render exactly. The map is
  // built from the localized light records for this locale; the current
  // tool is excluded inside the linkifier (a tool never links to itself).
  // JSON-LD (scripts/prerender-meta.ts) keeps using the raw strings.
  const toolNameEntries = buildToolNameEntries(getLocalizedTools(locale, data), locale);
  const linkifyGuideText = (text: string): string =>
    linkifyToolNames(text, toolNameEntries, { excludeToolId: tool.id });
  const parts: string[] = [];
  parts.push(openMain());
  parts.push('<article>');
  parts.push(
    breadcrumbs(
      [
        { label: t.footer.home, href: localizeStaticPath('/', locale) },
        ...(category
          ? [{ label: category.name, href: categoryHref(category.id, locale) }]
          : []),
        { label: tool.name },
      ],
      locale
    )
  );
  parts.push('<header class="max-w-3xl mb-8">');
  parts.push(
    `<p class="text-xs text-slate-600 mb-3">${category ? escapeText(category.name) : 'Utility'} · ${escapeText(modeLabel)}</p>`
  );
  parts.push(`<h1 class="${H1}">${escapeText(tool.name)}</h1>`);
  parts.push(`<p class="${BODY_P}">${escapeText(tool.intro)}</p>`);
  // L-12: author byline + last-updated line (E-E-A-T).
  parts.push(
    `<p class="mt-3 text-xs text-slate-600">${escapeText(t.toolPage.bylineAuthor)} · ${escapeText(t.toolPage.lastUpdated)}</p>`
  );
  if (tool.requiresExternalApi && tool.apiNotice) {
    parts.push(
      `<p class="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">${escapeText(tool.apiNotice)}</p>`
    );
  }
  parts.push('</header>');

  // Workspace slot: same "loading workspace" text the Suspense fallback
  // shows, in a min-height box so the pre/post-mount paint does not jump.
  parts.push(
    `<section aria-label="${escapeAttr(tool.name)} workspace" class="rounded-2xl bg-white p-4 sm:p-6 shadow-sm">` +
      `<div class="p-12 text-center text-sm text-slate-500 min-h-[480px] flex items-center justify-center">` +
      `${escapeText(formatString(t.toolPage.loadingWorkspace, { name: tool.name }))}` +
      `</div></section>`
  );

  parts.push('<div class="mt-12 space-y-12">');
  if ((tool.instructions ?? []).length > 0) {
    parts.push('<section>');
    parts.push(`<h2 class="${H2}">${escapeText(howToTitle)}</h2>`);
    parts.push('<ol class="space-y-4">');
    for (const [index, step] of (tool.instructions ?? []).entries()) {
      parts.push(
        `<li class="rounded-2xl bg-white p-4 shadow-sm"><p class="font-mono text-sm font-semibold text-indigo-600">${String(index + 1).padStart(2, '0')}.</p>` +
          `<h3 class="text-base font-semibold text-slate-900">${escapeText(step.title)}</h3>` +
          `<p class="mt-1 text-sm leading-relaxed text-slate-600">${linkifyGuideText(step.description)}</p></li>`
      );
    }
    parts.push('</ol></section>');
  }
  if ((tool.examples ?? []).length > 0) {
    parts.push('<section>');
    parts.push(`<h2 class="${H2}">${escapeText(t.toolPage.practicalExamples)}</h2>`);
    for (const example of tool.examples ?? []) {
      parts.push('<div class="rounded-2xl bg-white p-5 shadow-sm mb-4">');
      parts.push(`<h3 class="text-base font-semibold text-slate-900">${escapeText(example.title)}</h3>`);
      parts.push(
        `<p class="mt-3 text-xs font-semibold text-indigo-600">${escapeText(t.toolPage.input)}</p>` +
          `<pre class="mt-1 whitespace-pre-wrap break-words text-xs font-mono rounded-xl bg-slate-50 border border-slate-200 p-3 text-slate-800">${escapeText(example.input)}</pre>`
      );
      parts.push(
        `<p class="mt-3 text-xs font-semibold text-indigo-600">${escapeText(t.toolPage.output)}</p>` +
          `<pre class="mt-1 whitespace-pre-wrap break-words text-xs font-mono rounded-xl bg-slate-50 border border-slate-200 p-3 text-slate-800">${escapeText(example.output)}</pre>`
      );
      if (example.explanation) {
        parts.push(`<p class="mt-3 text-sm text-slate-600">${linkifyGuideText(example.explanation)}</p>`);
      }
      parts.push('</div>');
    }
    parts.push('</section>');
  }
  if ((tool.benefits ?? []).length > 0) {
    parts.push('<section>');
    parts.push(`<h2 class="${H2}">${escapeText(t.toolPage.keyBenefits)}</h2>`);
    parts.push('<ul class="space-y-2.5 text-sm text-slate-700">');
    for (const benefit of tool.benefits ?? []) {
      parts.push(`<li>${linkifyGuideText(benefit)}</li>`);
    }
    parts.push('</ul></section>');
  }
  if ((tool.useCases ?? []).length > 0) {
    parts.push('<section>');
    parts.push(`<h2 class="${H2}">${escapeText(t.toolPage.commonUseCases)}</h2>`);
    parts.push('<ul class="space-y-2 text-sm text-slate-600 list-disc pl-4">');
    for (const useCase of tool.useCases ?? []) {
      parts.push(`<li>${linkifyGuideText(useCase)}</li>`);
    }
    parts.push('</ul></section>');
  }
  if ((tool.faqs ?? []).length > 0) {
    parts.push('<section>');
    parts.push(`<h2 class="${H2}">${escapeText(t.toolPage.faqs)}</h2>`);
    parts.push(faqList(tool.faqs ?? [], linkifyGuideText));
    parts.push('</section>');
  }
  parts.push('</div>');

  // Batch 2: "Related articles" — mirrors ToolRelatedArticles in
  // ToolPageLayout (renders nothing when the tool has no published
  // articles in this locale).
  const toolArticles = getBlogArticlesForTool(tool.id, locale, data);
  if (toolArticles.length > 0) {
    parts.push('<section aria-labelledby="related-articles-heading" class="mt-10">');
    parts.push(
      `<h2 id="related-articles-heading" class="text-2xl font-bold tracking-tight text-slate-900">${escapeText(t.blog.relatedArticles)}</h2>`
    );
    parts.push(blogCards(toolArticles, t, locale, data, 'mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'));
    parts.push(
      `<p class="mt-6"><a href="${escapeAttr(blogHref(locale))}" class="font-semibold text-indigo-700 hover:underline">${escapeText(t.blog.allArticles)} <span class="inline-block rtl:rotate-180" aria-hidden="true">→</span></a></p>`
    );
    parts.push('</section>');
  }

  if (related.length > 0 || category) {
    parts.push('<section class="mt-12 pt-10 border-t border-slate-200">');
    parts.push(`<h2 class="${H2}">${escapeText(t.toolPage.relatedTitle)}</h2>`);
    parts.push(`<p class="mt-1 mb-6 text-sm text-slate-600">${escapeText(t.toolPage.relatedDescription)}</p>`);
    if (related.length > 0) parts.push(toolCards(related, locale));
    if (category) {
      parts.push(
        `<p class="mt-6"><a href="${escapeAttr(categoryHref(category.id, locale))}" class="${LINK}">${escapeText(formatString(t.toolPage.browseAll, { name: category.name }))}</a></p>`
      );
    }
    parts.push('</section>');
  }
  parts.push('</article></main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Home — 11 locales (mirrors HomePage.tsx).
// ---------------------------------------------------------------------------

export function renderHomeBody(
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const allTools = getLocalizedTools(locale, data);
  const categories = getLocalizedCategories(locale, data);
  const popularTools = getPopularTools(8).map((tool) =>
    getLocalizedTool(tool, locale, data)
  );
  const parts: string[] = [];
  parts.push(openMain());
  parts.push('<section class="mx-auto max-w-3xl text-center py-6">');
  parts.push(
    `<p class="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9EADF] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0B7A59] shadow-sm"><span class="h-1.5 w-1.5 rounded-full bg-[#0E8A66]"></span>${escapeText(formatString(t.home.eyebrow, { count: allTools.length }))}</p>`
  );
  parts.push(`<h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08]"><span class="text-[#0E8A66]">${escapeText(t.home.h1Lead)}</span>${escapeText(t.home.h1Rest)}</h1>`);
  parts.push(`<p class="mx-auto mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">${escapeText(formatString(t.home.heroDescription, { count: allTools.length }))}</p>`);
  parts.push('</section>');

  parts.push('<section class="mt-8"><dl class="grid grid-cols-2 lg:grid-cols-4 gap-4">');
  const metrics: Array<[string, string]> = [
    [t.home.metrics.toolCategories, String(CATEGORIES.length)],
    [t.home.metrics.browserUtilities, String(SITE_CONFIG.plannedTotalTools)],
    [t.home.metrics.liveTools, String(allTools.length)],
    [t.home.metrics.accountRequired, t.home.metrics.none],
  ];
  for (const [label, value] of metrics) {
    parts.push(
      `<div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm"><dt class="text-xs text-slate-500">${escapeText(label)}</dt><dd class="mt-1 text-2xl font-bold text-slate-900">${escapeText(value)}</dd></div>`
    );
  }
  parts.push('</dl></section>');


  parts.push('<section class="mt-12">');
  parts.push(`<h2 class="${H2}">${escapeText(t.home.popular.title)}</h2>`);
  parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.popular.description)}</p>`);
  parts.push(toolCards(popularTools, locale));
  parts.push(
    `<p class="mt-6"><a href="${escapeAttr(localizeStaticPath('/tools/', locale))}" class="${LINK}">${escapeText(t.home.popular.viewDirectory)}</a></p>`
  );
  parts.push('</section>');

  parts.push('<section id="categories" class="mt-12">');
  parts.push(`<h2 class="${H2}">${escapeText(t.home.categories.title)}</h2>`);
  parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.categories.description)}</p>`);
  parts.push('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">');
  for (const category of categories) {
    const liveCount = allTools.filter((tool) => tool.categoryId === category.id).length;
    const countLabel =
      liveCount >= category.plannedToolCount
        ? formatString(t.category.toolsLive, { count: liveCount })
        : formatString(t.category.ofToolsLive, { count: liveCount, total: category.plannedToolCount });
    parts.push(
      `<div class="rounded-2xl bg-white p-6 shadow-sm">` +
        `<p class="text-xs font-medium text-slate-600 mb-2">${escapeText(countLabel)}</p>` +
        `<h3 class="text-lg font-bold text-slate-900"><a href="${escapeAttr(categoryHref(category.id, locale))}" class="hover:text-indigo-700">${escapeText(category.name)}</a></h3>` +
        `<p class="mt-2 text-sm leading-relaxed text-slate-700">${escapeText(category.description)}</p>` +
        `<p class="mt-5 pt-4 border-t border-slate-900/10 text-xs text-slate-600">${escapeText(formatString(t.home.categories.includes, { names: category.sampleToolNames.slice(0, 3).join(' · ') }))}</p>` +
        `</div>`
    );
  }
  parts.push('</div></section>');

  parts.push('<section id="directory" class="mt-12">');
  parts.push(`<h2 class="${H2}">${escapeText(t.home.directory.title)}</h2>`);
  parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.directory.description)}</p>`);
  parts.push(toolCards(allTools, locale));
  parts.push('</section>');

  parts.push('<section class="mt-12">');
  parts.push(`<h2 class="${H2}">${escapeText(t.home.why.title)}</h2>`);
  parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.why.description)}</p>`);
  parts.push('<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">');
  for (const item of t.home.why.items) {
    parts.push(
      `<div class="rounded-2xl bg-white p-6 shadow-sm"><h3 class="text-lg font-bold text-slate-900">${escapeText(item.title)}</h3>` +
        `<p class="mt-2 text-sm leading-relaxed text-slate-600">${escapeText(item.description)}</p></div>`
    );
  }
  parts.push('</div></section>');

  // Pricing (EN-only for now — hardcoded English; the 17-language rollout
  // is a follow-up). Mirrors the Pricing section in HomePage.tsx.
  parts.push('<section class="mt-12">');
  parts.push(`<h2 class="${H2}">Pricing</h2>`);
  parts.push('<p class="text-sm sm:text-base text-slate-600 mb-6">Free forever. Upgrade once for lifetime access — no subscription.</p>');
  parts.push('<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">');
  parts.push('<div class="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">');
  parts.push('<h3 class="text-lg font-bold text-slate-900">Free</h3>');
  parts.push('<p class="mt-2 text-3xl font-extrabold text-slate-900">$0</p>');
  parts.push('<p class="mt-1 text-sm text-slate-600">Free forever</p>');
  parts.push('<ul class="mt-5 space-y-2 text-sm leading-relaxed text-slate-600">');
  parts.push('<li>All standard tools</li>');
  parts.push('<li>Ads shown on the site</li>');
  parts.push('<li>Standard file-size limits apply</li>');
  parts.push('</ul></div>');
  parts.push('<div class="rounded-2xl border-2 border-[#0E8A66] bg-white p-6 shadow-sm">');
  parts.push(
    '<p class="inline-flex rounded-full bg-[#0E8A66] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Lifetime Access</p>'
  );
  parts.push('<h3 class="mt-3 text-lg font-bold text-slate-900">Lifetime Premium</h3>');
  parts.push(
    `<p class="mt-2 text-3xl font-extrabold text-slate-900">${escapeText(PREMIUM_CONFIG.priceLabel)}</p>`
  );
  parts.push('<p class="mt-1 text-sm text-slate-600">One-time payment · No subscription</p>');
  parts.push('<ul class="mt-5 space-y-2 text-sm leading-relaxed text-slate-600">');
  parts.push('<li>Ad-free — no ads anywhere</li>');
  parts.push('<li>Unlimited standard usage</li>');
  parts.push('<li>No daily caps</li>');
  parts.push('<li>No watermarks on exported files</li>');
  parts.push('<li>All current tools, plus future standard tools</li>');
  parts.push('</ul>');
  parts.push('<p class="mt-5 text-sm font-semibold text-slate-900">Secure checkout is coming soon.</p>');
  parts.push('</div></div>');
  parts.push(
    '<p class="mt-6 text-center"><a href="/pricing/" class="inline-flex items-center gap-2 rounded-full bg-[#0E8A66] px-5 py-2.5 text-sm font-semibold text-white shadow-sm">See full pricing</a></p>'
  );
  parts.push('</section>');

  if (t.home.faqs.length > 0) {
    parts.push('<section class="mt-12">');
    parts.push(`<h2 class="${H2}">${escapeText(t.home.faq.title)}</h2>`);
    parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.faq.description)}</p>`);
    parts.push(faqList(t.home.faqs));
    parts.push('</section>');
  }
  parts.push(`<p class="mt-12 text-center text-sm text-slate-600">${escapeText(t.home.trustLine)}</p>`);
  parts.push('</main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Tools directory — 11 locales (mirrors ToolsDirectoryPage.tsx).
// ---------------------------------------------------------------------------

export function renderDirectoryBody(
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const allTools = getLocalizedTools(locale, data);
  const categories = getLocalizedCategories(locale, data);
  const parts: string[] = [];
  parts.push(openMain());
  parts.push(
    breadcrumbs([{ label: t.footer.home, href: localizeStaticPath('/', locale) }, { label: t.nav.allTools }], locale)
  );
  parts.push('<header class="mx-auto max-w-3xl text-center mb-8">');
  parts.push(`<h1 class="${H1}">${escapeText(t.directory.title)}</h1>`);
  parts.push(`<p class="${BODY_P}">${escapeText(formatString(t.directory.description, { count: allTools.length }))}</p>`);
  parts.push('</header>');
  parts.push('<section class="mb-12">');
  parts.push(`<h2 class="${H2_SM}">${escapeText(t.directory.availableTools)}</h2>`);
  parts.push(toolCards(allTools, locale));
  parts.push('</section>');
  parts.push('<section>');
  parts.push(`<h2 class="${H2_SM}">${escapeText(t.directory.categorySuites)}</h2>`);
  parts.push('<div class="grid grid-cols-1 md:grid-cols-2 gap-5">');
  for (const category of categories) {
    const liveInCategory = allTools.filter((tool) => tool.categoryId === category.id).length;
    parts.push(
      `<div class="rounded-2xl bg-white p-6 shadow-sm">` +
        `<h3 class="text-lg font-bold text-slate-900"><a href="${escapeAttr(categoryHref(category.id, locale))}" class="hover:text-indigo-700">${escapeText(category.name)}</a></h3>` +
        `<p class="mt-1 text-xs text-slate-500">${escapeText(String(liveInCategory))} / ${escapeText(String(category.plannedToolCount))}</p>` +
        `<p class="mt-2 text-sm leading-relaxed text-slate-600">${escapeText(category.description)}</p>` +
        `<p class="mt-3 text-xs text-slate-500">${escapeText(formatString(t.directory.plannedToolsInclude, { names: category.sampleToolNames.join(', ') }))}</p>` +
        `<p class="mt-5 pt-4 border-t border-white/60"><a href="${escapeAttr(categoryHref(category.id, locale))}" class="${LINK}">${escapeText(formatString(t.directory.visitHub, { name: category.name }))}</a></p>` +
        `</div>`
    );
  }
  parts.push('</div></section></main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Category hubs — 7 categories x 11 locales (mirrors CategoryPage.tsx).
// ---------------------------------------------------------------------------

export function renderCategoryBody(
  category: ToolCategory,
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const tools = getLocalizedTools(locale, data).filter(
    (tool) => tool.categoryId === category.id
  );
  // O-1: same M-5 linkifier the React page uses, so the static HTML
  // crawlers see matches the post-mount React render exactly. The map is
  // built from the localized light records for this locale. No
  // excludeToolId: a category page has no single "current tool".
  // JSON-LD (scripts/prerender-meta.ts categorySeo) keeps using the raw
  // strings — never the linkified output.
  const toolNameEntries = buildToolNameEntries(getLocalizedTools(locale, data), locale);
  const linkifyCategoryFaq = (text: string): string =>
    linkifyToolNames(text, toolNameEntries);
  const otherCategories = getLocalizedCategories(locale, data).filter(
    (item) => item.id !== category.id
  );
  const countLabel =
    tools.length >= category.plannedToolCount
      ? formatString(t.category.toolsLive, { count: tools.length })
      : formatString(t.category.ofToolsLive, { count: tools.length, total: category.plannedToolCount });
  const parts: string[] = [];
  parts.push(openMain());
  parts.push(
    breadcrumbs(
      [
        { label: t.footer.home, href: localizeStaticPath('/', locale) },
        { label: t.nav.tools, href: localizeStaticPath('/tools/', locale) },
        { label: category.name },
      ],
      locale
    )
  );
  parts.push('<header class="mx-auto max-w-3xl text-center mb-10">');
  parts.push(`<p class="text-xs font-medium text-slate-500 mb-3">${escapeText(countLabel)}</p>`);
  parts.push(`<h1 class="${H1}">${escapeText(category.name)}</h1>`);
  parts.push(`<p class="${BODY_P}">${escapeText(category.longDescription)}</p>`);
  // L-15: short intro paragraph (complements longDescription).
  if (category.intro) {
    parts.push(`<p class="${BODY_P}">${escapeText(category.intro)}</p>`);
  }
  parts.push('</header>');
  if (tools.length > 0) {
    parts.push('<section class="mb-12">');
    parts.push(
      `<h2 class="${H2_SM}">${escapeText(formatString(t.category.availableTools, { name: category.name }))}</h2>`
    );
    parts.push(toolCards(tools, locale));
    parts.push('</section>');
  }
  // L-15: short FAQ (3–5 Q&As) about this category.
  if ((category.faqs ?? []).length > 0) {
    parts.push('<section class="mb-12">');
    parts.push(`<h2 class="${H2_SM}">${escapeText(t.toolPage.faqs)}</h2>`);
    parts.push(faqList(category.faqs ?? [], linkifyCategoryFaq));
    parts.push('</section>');
  }
  // Batch 2: "Guides in this category" — mirrors CategoryGuides in
  // CategoryPage (renders nothing when the category has no published
  // articles in this locale).
  const categoryArticles = getBlogArticlesForCategory(category.id, locale, data);
  if (categoryArticles.length > 0) {
    parts.push('<section aria-labelledby="category-guides-heading" class="mb-12">');
    parts.push(
      `<h2 id="category-guides-heading" class="text-xl font-bold text-slate-900 mb-5">${escapeText(t.blog.guidesInCategory)}</h2>`
    );
    parts.push(blogCards(categoryArticles, t, locale, data, 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'));
    parts.push(
      `<p class="mt-6"><a href="${escapeAttr(blogCategoryHref(category.id, locale))}" class="font-semibold text-indigo-700 hover:underline">${escapeText(t.blog.allArticles)} <span class="inline-block rtl:rotate-180" aria-hidden="true">→</span></a></p>`
    );
    parts.push('</section>');
  }
  parts.push('<section class="pt-10 border-t border-slate-200">');
  parts.push(`<h2 class="${H2_SM}">${escapeText(t.category.exploreOther)}</h2>`);
  parts.push('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">');
  for (const item of otherCategories) {
    parts.push(
      `<div class="rounded-2xl bg-white p-4 shadow-sm">` +
        `<h3 class="text-sm font-semibold text-slate-900"><a href="${escapeAttr(categoryHref(item.id, locale))}" class="hover:text-indigo-700">${escapeText(item.name)}</a></h3>` +
        `<p class="text-xs text-slate-500">${escapeText(formatString(t.category.plannedCount, { count: item.plannedToolCount }))}</p>` +
        `</div>`
    );
  }
  parts.push('</div></section></main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Static info pages — about / contact / privacy / terms x 11 locales.
// Mirrors AboutPage / ContactPage / PrivacyPolicyPage / TermsOfServicePage.
// The form itself (contact) cannot be prerendered statically; the page's
// prose, topics and direct-email link are included instead.
// ---------------------------------------------------------------------------

export type StaticPageKey = 'about' | 'contact' | 'privacy' | 'terms' | 'pricing' | 'refund';

export function renderStaticBody(
  key: StaticPageKey,
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const parts: string[] = [];
  const articleOpen =
    '<main id="main-content" data-prerendered-body="true" class="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">';
  if (key === 'about') {
    const categories = getLocalizedCategories(locale, data);
    parts.push(articleOpen);
    parts.push(
      breadcrumbs(
        [{ label: t.footer.home, href: localizeStaticPath('/', locale) }, { label: t.nav.about }],
        locale
      )
    );
    parts.push('<header class="mb-10">');
    parts.push(`<h1 class="${H1}">${escapeText(t.about.title)}</h1>`);
    parts.push(`<p class="mt-3 text-lg leading-relaxed text-slate-600">${escapeText(t.about.intro)}</p>`);
    parts.push('</header><div class="space-y-10 text-base leading-relaxed text-slate-700">');
    const sections: Array<[string, string[]]> = [
      [t.about.whyTitle, [t.about.whyP1, t.about.whyP2]],
      [t.about.orgTitle, [t.about.orgP1, t.about.orgP2]],
      [t.about.howTitle, [t.about.howP1, t.about.howP2]],
      [t.about.whoTitle, [t.about.whoP1]],
    ];
    for (const [title, paras] of sections) {
      parts.push('<section>');
      parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-3">${escapeText(title)}</h2>`);
      for (const p of paras) parts.push(`<p class="mt-3">${escapeText(p)}</p>`);
      parts.push('</section>');
    }
    parts.push('<section>');
    parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-3">${escapeText(t.about.principlesTitle)}</h2>`);
    for (const principle of t.about.principles) {
      parts.push(
        `<div class="rounded-2xl bg-white p-5 shadow-sm mb-4"><h3 class="text-base font-semibold text-slate-900">${escapeText(principle.title)}</h3>` +
          `<p class="mt-1.5 text-sm text-slate-600">${escapeText(principle.description)}</p></div>`
      );
    }
    parts.push('</section>');
    parts.push('<section>');
    parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-3">${escapeText(t.about.categoriesTitle)}</h2>`);
    parts.push('<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">');
    for (const category of categories) {
      parts.push(
        `<li><a href="${escapeAttr(categoryHref(category.id, locale))}" class="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm font-semibold text-slate-900 hover:text-indigo-700">${escapeText(category.name)}<span class="font-mono text-xs text-slate-500">${escapeText(formatString(t.category.toolsCount, { count: category.plannedToolCount }))}</span></a></li>`
      );
    }
    parts.push('</ul></section>');
    parts.push('<section class="rounded-2xl bg-white p-6 shadow-sm">');
    parts.push(`<h2 class="text-lg font-bold text-slate-900 mb-2">${escapeText(t.about.feedbackTitle)}</h2>`);
    parts.push(
      `<p class="text-sm text-slate-600">${escapeText(t.about.feedbackBefore)} <a href="${escapeAttr(localizeStaticPath('/contact/', locale))}" class="${LINK}">${escapeText(t.about.feedbackLink)}</a>${escapeText(t.about.feedbackAfter)}</p>`
    );
    parts.push('</section></div></main>');
    return parts.join('');
  }

  if (key === 'contact') {
    parts.push(articleOpen);
    parts.push(
      breadcrumbs(
        [{ label: t.footer.home, href: localizeStaticPath('/', locale) }, { label: t.nav.contact }],
        locale
      )
    );
    parts.push('<header class="mb-10">');
    parts.push(`<h1 class="${H1}">${escapeText(t.contact.title)}</h1>`);
    parts.push(`<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">${escapeText(t.contact.intro)}</p>`);
    parts.push('</header>');
    parts.push(
      `<p class="text-sm text-slate-600 leading-relaxed">${escapeText(t.contact.directEmailText)} <a href="mailto:${escapeAttr(SITE_CONFIG.contactEmail)}" class="font-mono text-sm font-medium text-indigo-600 hover:underline break-all">${escapeText(SITE_CONFIG.contactEmail)}</a></p>`
    );
    parts.push('<ul class="mt-4 space-y-1 text-sm text-slate-600 list-disc pl-4">');
    for (const topic of t.contact.topics) {
      parts.push(`<li>${escapeText(topic)}</li>`);
    }
    parts.push('</ul>');
    parts.push('<div class="mt-12 space-y-10 text-base leading-relaxed text-slate-700">');
    for (const [title, p1, p2] of [
      [t.contact.aboutTitle, t.contact.aboutP1, t.contact.aboutP2],
      [t.contact.responseTitle, t.contact.responseP1, t.contact.responseP2],
    ] as const) {
      parts.push('<section>');
      parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-3">${escapeText(title)}</h2>`);
      parts.push(`<p>${escapeText(p1)}</p>`);
      parts.push(`<p class="mt-3">${escapeText(p2)}</p>`);
      parts.push('</section>');
    }
    parts.push('</div></main>');
    return parts.join('');
  }

  if (key === 'privacy') {
    parts.push(articleOpen);
    parts.push(
      breadcrumbs(
        [{ label: t.footer.home, href: localizeStaticPath('/', locale) }, { label: t.footer.privacyPolicy }],
        locale
      )
    );
    parts.push('<header class="mb-10">');
    parts.push(`<h1 class="${H1}">${escapeText(t.privacy.title)}</h1>`);
    parts.push(`<p class="mt-2 text-sm text-slate-500">${escapeText(t.privacy.lastUpdated)}</p>`);
    parts.push('</header><div class="space-y-8 text-base leading-relaxed text-slate-700">');
    t.privacy.sections.forEach((section) => {
      parts.push('<section>');
      parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-2">${escapeText(section.title)}</h2>`);
      for (const paragraph of section.paragraphs) {
        parts.push(`<p class="mt-3">${escapeText(paragraph)}</p>`);
      }
      parts.push('</section>');
    });
    parts.push('<section>');
    parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-2">${escapeText(t.privacy.contactTitle)}</h2>`);
    parts.push(
      `<p>${escapeText(t.privacy.contactBefore)} <a href="${escapeAttr(localizeStaticPath('/contact/', locale))}" class="${LINK}">${escapeText(t.privacy.contactLink)}</a> ${escapeText(t.privacy.contactMiddle)} <a href="mailto:${escapeAttr(SITE_CONFIG.contactEmail)}" class="${LINK}">${escapeText(SITE_CONFIG.contactEmail)}</a>.</p>`
    );
    parts.push('</section></div></main>');
    return parts.join('');
  }

  if (key === 'pricing') {
    parts.push(articleOpen);
    parts.push(
      breadcrumbs(
        [{ label: t.footer.home, href: localizeStaticPath('/', locale) }, { label: 'Pricing' }],
        locale
      )
    );
    parts.push('<header class="mb-10">');
    parts.push(`<h1 class="${H1}">Pricing</h1>`);
    parts.push('<p class="mt-2 text-sm text-slate-500">Last updated: November 24, 2026</p>');
    parts.push(
      '<p class="mt-4 text-base leading-relaxed text-slate-700">UtilityFlow is free to use. Lifetime Premium is a single one-time payment — no subscription, no recurring fees.</p>'
    );
    parts.push('</header>');
    parts.push('<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">');
    parts.push('<div class="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">');
    parts.push('<h2 class="text-xl font-bold text-slate-900">Free</h2>');
    parts.push('<p class="mt-2 text-3xl font-extrabold text-slate-900">$0</p>');
    parts.push('<p class="mt-1 text-sm text-slate-500">Free forever</p>');
    parts.push('<ul class="mt-6 space-y-3 text-base leading-relaxed text-slate-700">');
    parts.push('<li>All standard tools</li>');
    parts.push('<li>Ads shown on the site</li>');
    parts.push('<li>Standard file-size limits apply</li>');
    parts.push('</ul></div>');
    parts.push('<div class="rounded-2xl border-2 border-[#0E8A66] bg-white p-6 sm:p-8 shadow-sm">');
    parts.push(
      '<p class="inline-flex rounded-full bg-[#0E8A66] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Lifetime Access</p>'
    );
    parts.push('<h2 class="mt-3 text-xl font-bold text-slate-900">Lifetime Premium</h2>');
    parts.push(
      `<p class="mt-2 text-3xl font-extrabold text-slate-900">${escapeText(PREMIUM_CONFIG.priceLabel)}</p>`
    );
    parts.push('<p class="mt-1 text-sm text-slate-500">One-time payment · No subscription</p>');
    parts.push('<ul class="mt-6 space-y-3 text-base leading-relaxed text-slate-700">');
    parts.push('<li>Ad-free — no ads anywhere on the site</li>');
    parts.push('<li>Unlimited standard usage</li>');
    parts.push('<li>No daily caps</li>');
    parts.push('<li>No watermarks on exported files</li>');
    parts.push('<li>All current tools, plus future standard tools</li>');
    parts.push('</ul>');
    parts.push('<p class="mt-6 text-sm font-semibold text-slate-900">Secure checkout is coming soon.</p>');
    parts.push('</div></div>');
    parts.push(
      '<div class="mt-8 space-y-8 text-base leading-relaxed text-slate-700 rounded-2xl bg-white p-6 sm:p-8 shadow-sm">'
    );
    parts.push('<section>');
    parts.push('<h2 class="text-xl font-bold text-slate-900 mb-2">Refunds</h2>');
    parts.push(
      `<p>Lifetime Premium comes with a 14-day refund window. Read the full <a href="/refund-policy/" class="${LINK}">Refund Policy</a>.</p>`
    );
    parts.push('</section>');
    parts.push('<section>');
    parts.push('<h2 class="text-xl font-bold text-slate-900 mb-2">Questions?</h2>');
    parts.push(
      `<p><a href="${escapeAttr(localizeStaticPath('/contact/', locale))}" class="${LINK}">Contact us</a> or email <a href="mailto:${escapeAttr(SITE_CONFIG.contactEmail)}" class="${LINK}">${escapeText(SITE_CONFIG.contactEmail)}</a>.</p>`
    );
    parts.push('</section></div></main>');
    return parts.join('');
  }

  if (key === 'refund') {
    parts.push(articleOpen);
    parts.push(
      breadcrumbs(
        [{ label: t.footer.home, href: localizeStaticPath('/', locale) }, { label: 'Refund Policy' }],
        locale
      )
    );
    parts.push('<header class="mb-10">');
    parts.push(`<h1 class="${H1}">Refund Policy</h1>`);
    parts.push('<p class="mt-2 text-sm text-slate-500">Last updated: November 24, 2026</p>');
    parts.push('</header><div class="space-y-8 text-base leading-relaxed text-slate-700">');
    parts.push('<section>');
    parts.push('<h2 class="text-xl font-bold text-slate-900 mb-2">14-day refund window</h2>');
    parts.push('<p>You may request a refund within 14 days of purchase.</p>');
    parts.push(
      `<p class="mt-3">This applies to Lifetime Premium, a one-time payment of ${escapeText(PREMIUM_CONFIG.priceLabel)} for lifetime access. There is no subscription and no recurring charge.</p>`
    );
    parts.push('</section>');
    parts.push('<section>');
    parts.push('<h2 class="text-xl font-bold text-slate-900 mb-2">How refunds are processed</h2>');
    parts.push('<p>Payments are processed by Paddle, our payment processor. Paddle also processes refunds.</p>');
    parts.push(
      '<p class="mt-3">Once approved, the refund is returned to the original payment method. The time it takes to appear depends on your bank or card provider.</p>'
    );
    parts.push('</section>');
    parts.push('<section>');
    parts.push('<h2 class="text-xl font-bold text-slate-900 mb-2">How to request a refund</h2>');
    parts.push(
      `<p>Email <a href="mailto:${escapeAttr(SITE_CONFIG.contactEmail)}" class="${LINK}">${escapeText(SITE_CONFIG.contactEmail)}</a> with the email address used for the purchase and your order details.</p>`
    );
    parts.push('<p class="mt-3">We will confirm your request and pass it to Paddle for processing.</p>');
    parts.push('</section>');
    parts.push('<section>');
    parts.push('<h2 class="text-xl font-bold text-slate-900 mb-2">No subscription to cancel</h2>');
    parts.push('<p>Lifetime Premium is a one-time payment. There is no subscription, so there is nothing to cancel.</p>');
    parts.push(
      `<p class="mt-3">If you have any other question, <a href="${escapeAttr(localizeStaticPath('/contact/', locale))}" class="${LINK}">contact us</a>.</p>`
    );
    parts.push('</section></div></main>');
    return parts.join('');
  }

  // terms
  parts.push(articleOpen);
  parts.push(
    breadcrumbs(
      [{ label: t.footer.home, href: localizeStaticPath('/', locale) }, { label: t.footer.termsOfService }],
      locale
    )
  );
  parts.push('<header class="mb-10">');
  parts.push(`<h1 class="${H1}">${escapeText(t.terms.title)}</h1>`);
  parts.push(`<p class="mt-2 text-sm text-slate-500">${escapeText(t.terms.lastUpdated)}</p>`);
  parts.push('</header><div class="space-y-8 text-base leading-relaxed text-slate-700">');
  parts.push('<section>');
  parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-2">${escapeText(t.terms.acceptanceTitle)}</h2>`);
  parts.push(
    `<p>${escapeText(t.terms.acceptanceBefore)} <a href="${escapeAttr(localizeStaticPath('/privacy-policy/', locale))}" class="${LINK}">${escapeText(t.terms.acceptanceLink)}</a>${escapeText(t.terms.acceptanceAfter)}</p>`
  );
  parts.push('</section>');
  for (const section of t.terms.sections) {
    parts.push('<section>');
    parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-2">${escapeText(section.title)}</h2>`);
    for (const paragraph of section.paragraphs) {
      parts.push(`<p class="mt-3">${escapeText(paragraph)}</p>`);
    }
    parts.push('</section>');
  }
  parts.push('<section>');
  parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-2">${escapeText(t.terms.changesTitle)}</h2>`);
  parts.push(
    `<p>${escapeText(t.terms.changesBefore)} <a href="${escapeAttr(localizeStaticPath('/contact/', locale))}" class="${LINK}">${escapeText(t.terms.changesLink)}</a>${escapeText(t.terms.changesAfter)}</p>`
  );
  parts.push('</section></div></main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Blog — home / category / article (mirrors BlogHomePage.tsx,
// BlogCategoryPage.tsx, ArticlePage.tsx). Batch 2: the registry is empty,
// so home/category render their empty states; the article builder is
// exercised by the temporary test article (see blog-project/batch2-report.md)
// and by Batch 3 content.
//
// Rules (same as the rest of this file): every string from locale data /
// registries, never invented; escape every interpolated string EXCEPT the
// article body HTML, which is trusted registry content rendered verbatim
// (mirrors React's dangerouslySetInnerHTML in ArticlePage). Batch 3 bodies
// must not contain an <h1> — the page title is the one <h1> and the
// prerender assertion fails the build if a second one appears.
// ---------------------------------------------------------------------------

/** One blog card: category chip + title link + description + date/reading time (mirrors BlogCard.tsx). */
function blogCard(
  article: BlogArticle,
  version: BlogArticleLocaleVersion,
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const category = getLocalizedCategory(article.categoryId, locale, data);
  const palette = pastelForKey(`blog:${article.id}`);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    localeTag(locale),
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
  return (
    `<article class="group flex flex-col rounded-2xl ${palette.card} p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md">` +
    (category
      ? `<a href="${escapeAttr(blogCategoryHref(category.id, locale))}" class="mb-2 w-fit rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-semibold text-slate-700 transition-colors hover:text-indigo-700">${escapeText(category.name)}</a>`
      : '') +
    `<h3 class="text-lg font-bold leading-snug text-slate-900"><a href="${escapeAttr(articleHref(version.slug, locale))}" class="transition-colors hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm">${escapeText(version.title)}</a></h3>` +
    `<p class="mt-2 text-sm leading-relaxed text-slate-700/90 line-clamp-3">${escapeText(version.description)}</p>` +
    `<div class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">` +
    `<time datetime="${escapeAttr(article.publishedAt)}">${escapeText(publishedDate)}</time>` +
    `<span aria-hidden="true">·</span>` +
    `<span>${escapeText(formatString(t.blog.readingTime, { minutes: version.readingMinutes }))}</span>` +
    `</div></article>`
  );
}

function blogCards(
  articles: BlogArticle[],
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData,
  gridClass = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
): string {
  const cards: string[] = [];
  for (const article of articles) {
    const version = getBlogArticleVersion(article, locale, data);
    if (!version) continue;
    cards.push(blogCard(article, version, t, locale, data));
  }
  return `<div class="${gridClass}">` + cards.join('') + `</div>`;
}

/** Category nav: "All articles" + one link per category (mirrors BlogCategoryNav.tsx). The React page renders a CategoryIcon inside each link; the static version keeps the link text only. */
function blogCategoryNav(
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData,
  currentCategoryId?: string
): string {
  const categories = getLocalizedCategories(locale, data);
  const parts: string[] = [];
  parts.push('<section aria-labelledby="blog-categories-heading" class="mb-12">');
  parts.push(`<h2 id="blog-categories-heading" class="text-xl font-bold text-slate-900 mb-5">${escapeText(t.blog.browseByCategory)}</h2>`);
  parts.push('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">');
  const allClass =
    currentCategoryId === undefined
      ? 'bg-indigo-600 text-white'
      : 'bg-white border border-slate-200 text-slate-800 hover:border-indigo-300 hover:text-indigo-700';
  parts.push(
    `<a href="${escapeAttr(blogHref(locale))}"${currentCategoryId === undefined ? ' aria-current="page"' : ''} class="flex items-center gap-2.5 rounded-2xl px-3.5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${allClass}">${escapeText(t.blog.allArticles)}</a>`
  );
  for (const category of categories) {
    const palette = pastelForKey(`cat:${category.id}`);
    const isCurrent = category.id === currentCategoryId;
    const cls = isCurrent ? 'bg-indigo-600 text-white' : `${palette.card} text-slate-800`;
    parts.push(
      `<a href="${escapeAttr(blogCategoryHref(category.id, locale))}"${isCurrent ? ' aria-current="page"' : ''} class="flex items-center gap-2.5 rounded-2xl px-3.5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${cls}"><span class="min-w-0 truncate">${escapeText(category.name)}</span></a>`
    );
  }
  parts.push('</div></section>');
  return parts.join('');
}

/** Static search input mirroring BlogSearch (hero variant). Non-functional pre-JS; React replaces it on mount. */
function blogSearchInput(t: UiStrings): string {
  return (
    `<div class="relative w-full max-w-2xl">` +
    `<form role="search" aria-label="${escapeAttr(t.blog.searchArticles)}">` +
    `<div class="relative flex items-center">` +
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none absolute left-4 w-5 h-5 text-slate-400" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>` +
    `<input type="search" placeholder="${escapeAttr(t.blog.searchPlaceholder)}" aria-label="${escapeAttr(t.blog.searchArticles)}" class="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-14 text-base text-slate-900 placeholder:text-slate-400 shadow-md transition-colors focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />` +
    `<kbd class="pointer-events-none absolute right-4 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-500">⌘K</kbd>` +
    `</div></form></div>`
  );
}

/** First <p> of the body as plain text, for the lede paragraph. Pure replica of ArticlePage.extractFirstParagraph. */
function extractFirstParagraph(body: string): string | undefined {
  const match = /<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(body);
  if (!match) return undefined;
  const text = match[1].replace(/<[^>]*>/g, '').trim();
  return text === '' ? undefined : text;
}

/**
 * Extract H2/H3 headings (with ids) from an article body HTML string.
 * Pure replica of src/components/blog/ArticleTOC.tsx extractHeadingsFromBody
 * (kept in sync by hand — the component file pulls in React/LocaleContext,
 * which this Node script must not import).
 */
interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

function extractHeadings(body: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const pattern = /<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(body)) !== null) {
    const level = Number(match[1]) as 2 | 3;
    const attrs = match[2];
    const idMatch = /id="([^"]+)"/i.exec(attrs) ?? /id='([^']+)'/i.exec(attrs);
    if (!idMatch) continue;
    const text = match[3]
      .replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    if (!text) continue;
    headings.push({ id: idMatch[1], text, level });
  }
  return headings;
}

// ---------------------------------------------------------------------------
// Blog home — 11 locales (mirrors BlogHomePage.tsx).
// ---------------------------------------------------------------------------

export function renderBlogHomeBody(
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const articles = getPublishedBlogArticles()
    .filter((article) => getBlogArticleVersion(article, locale, data) !== undefined)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = articles.slice(0, 3);
  const parts: string[] = [];
  parts.push(openMain());
  parts.push(
    breadcrumbs(
      [
        { label: t.footer.home, href: localizeStaticPath('/', locale) },
        { label: t.nav.blog },
      ],
      locale
    )
  );
  parts.push('<header class="mx-auto max-w-3xl text-center mb-10">');
  parts.push(`<h1 class="${H1}">${escapeText(t.blog.title)}</h1>`);
  parts.push(`<p class="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">${escapeText(t.blog.description)}</p>`);
  parts.push('<div class="mt-6 flex justify-center">');
  parts.push(blogSearchInput(t));
  parts.push('</div></header>');
  parts.push(blogCategoryNav(t, locale, data));
  if (featured.length > 0) {
    parts.push('<section aria-labelledby="featured-articles-heading" class="mb-12">');
    parts.push(`<h2 id="featured-articles-heading" class="text-xl font-bold text-slate-900 mb-5">${escapeText(t.blog.featured)}</h2>`);
    parts.push(blogCards(featured, t, locale, data));
    parts.push('</section>');
  }
  parts.push('<section aria-labelledby="latest-articles-heading">');
  parts.push(
    `<h2 id="latest-articles-heading" class="text-xl font-bold text-slate-900 mb-5">${escapeText(t.blog.latest)} <span class="text-base font-semibold text-slate-500">(${articles.length})</span></h2>`
  );
  if (articles.length > 0) {
    parts.push(blogCards(articles, t, locale, data));
  } else {
    parts.push('<div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm text-center">');
    parts.push(`<h3 class="text-lg font-bold text-slate-900">${escapeText(t.blog.noArticlesYet)}</h3>`);
    parts.push(
      `<p class="mt-2 text-sm leading-relaxed text-slate-600 max-w-xl mx-auto">${escapeText(t.blog.noArticlesYetDescription)}</p>`
    );
    parts.push('</div>');
  }
  parts.push('</section></main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Blog category — 7 categories x 11 locales (mirrors BlogCategoryPage.tsx).
// `category` must already be localized for `locale`.
// ---------------------------------------------------------------------------

export function renderBlogCategoryBody(
  category: ToolCategory,
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const articles = getBlogArticlesForCategory(category.id, locale, data);
  const parts: string[] = [];
  parts.push(openMain());
  parts.push(
    breadcrumbs(
      [
        { label: t.footer.home, href: localizeStaticPath('/', locale) },
        { label: t.nav.blog, href: blogHref(locale) },
        { label: category.name },
      ],
      locale
    )
  );
  parts.push('<header class="mx-auto max-w-3xl text-center mb-10">');
  parts.push(`<h1 class="${H1}">${escapeText(category.name)}</h1>`);
  parts.push(`<p class="${BODY_P}">${escapeText(category.longDescription)}</p>`);
  if (category.intro) {
    parts.push(`<p class="${BODY_P}">${escapeText(category.intro)}</p>`);
  }
  parts.push(
    `<p class="mt-5"><a href="${escapeAttr(categoryHref(category.id, locale))}" class="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline">${escapeText(formatString(t.toolPage.browseAll, { name: category.name }))}</a></p>`
  );
  parts.push('</header>');
  parts.push('<section aria-labelledby="category-articles-heading" class="mb-12">');
  parts.push(
    `<h2 id="category-articles-heading" class="text-xl font-bold text-slate-900 mb-5">${escapeText(t.blog.guidesInCategory)} <span class="text-base font-semibold text-slate-500">(${articles.length})</span></h2>`
  );
  if (articles.length > 0) {
    parts.push(blogCards(articles, t, locale, data));
  } else {
    parts.push('<div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm text-center">');
    parts.push(`<h3 class="text-lg font-bold text-slate-900">${escapeText(t.blog.noArticlesYet)}</h3>`);
    parts.push(
      `<p class="mt-2 text-sm leading-relaxed text-slate-600 max-w-xl mx-auto">${escapeText(t.blog.noArticlesYetDescription)}</p>`
    );
    parts.push('</div>');
  }
  parts.push('</section>');
  parts.push(blogCategoryNav(t, locale, data, category.id));
  parts.push('</main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Article pages — one per published locale (mirrors ArticlePage.tsx).
// `version` must be the locale version for `locale` (never undefined here —
// the prerender only generates files for locales where the article is
// published). The body HTML is trusted registry content, injected verbatim.
// ---------------------------------------------------------------------------

export function renderArticleBody(
  article: BlogArticle,
  version: BlogArticleLocaleVersion,
  t: UiStrings,
  locale: LocaleCode,
  data: FullLocaleData
): string {
  const category = getLocalizedCategory(article.categoryId, locale, data);
  const headings = extractHeadings(version.body);
  const lede = extractFirstParagraph(version.body) ?? version.description;
  const dateTag = localeTag(locale);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(dateTag, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const updatedDate = article.updatedAt
    ? new Date(article.updatedAt).toLocaleDateString(dateTag, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : undefined;
  const faqs = version.faqs.map((faq) => ({ question: faq.q, answer: faq.a }));
  const primaryTool = getToolById(article.toolId);
  const localizedPrimaryTool = primaryTool
    ? getLocalizedTool(primaryTool, locale, data)
    : undefined;
  const relatedTools = article.relatedToolIds
    .map((id) => getToolById(id))
    .filter(
      (tool): tool is ToolDefinition => tool !== undefined && tool.id !== article.toolId
    )
    .map((tool) => getLocalizedTool(tool, locale, data));
  const related = getRelatedBlogArticles(article, locale, 4, data);
  const { prev, next } = getBlogArticlePrevNext(article, locale, data);
  const prevVersion = prev ? getBlogArticleVersion(prev, locale, data) : undefined;
  const nextVersion = next ? getBlogArticleVersion(next, locale, data) : undefined;
  const ctaPalette = pastelForKey(`blog:${article.id}`);
  const canonicalPath = articleHref(version.slug, locale);
  const canonicalUrl = buildCanonicalUrl(canonicalPath, SITE_CONFIG.defaultOrigin);
  const shareXUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(version.title)}`;
  const shareFacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`;

  const parts: string[] = [];
  parts.push(openMain());
  parts.push(
    breadcrumbs(
      [
        { label: t.footer.home, href: localizeStaticPath('/', locale) },
        { label: t.nav.blog, href: blogHref(locale) },
        ...(category
          ? [{ label: category.name, href: blogCategoryHref(category.id, locale) }]
          : []),
        { label: version.title },
      ],
      locale
    )
  );
  parts.push('<header class="max-w-3xl mb-8">');
  if (category) {
    parts.push(
      `<p class="mb-3"><a href="${escapeAttr(blogCategoryHref(category.id, locale))}" class="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 transition-colors hover:text-indigo-700">${escapeText(category.name)}</a></p>`
    );
  }
  parts.push(`<h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">${escapeText(version.title)}</h1>`);
  parts.push(`<p class="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">${escapeText(lede)}</p>`);
  parts.push(
    `<p class="mt-3 text-xs text-slate-600">${escapeText(t.blog.byEditorial)} · ${escapeText(formatString(t.blog.publishedOn, { date: publishedDate }))}${updatedDate ? ` · ${escapeText(formatString(t.blog.updatedOn, { date: updatedDate }))}` : ''} · ${escapeText(formatString(t.blog.readingTime, { minutes: version.readingMinutes }))}</p>`
  );
  parts.push('</header>');

  parts.push('<div class="grid grid-cols-1 lg:grid-cols-12 gap-10">');
  parts.push('<div class="lg:col-span-8 space-y-12">');
  // Body HTML: trusted registry content, injected verbatim (same class
  // string as ArticlePage's dangerouslySetInnerHTML <article>).
  parts.push(
    `<article class="text-slate-700 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2 [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-indigo-700 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono">${version.body}</article>`
  );

  if (faqs.length > 0) {
    parts.push('<section aria-labelledby="article-faq-heading">');
    parts.push(`<h2 id="article-faq-heading" class="text-2xl font-bold text-slate-900 mb-4">${escapeText(t.toolPage.faqs)}</h2>`);
    parts.push(faqList(faqs));
    parts.push('</section>');
  }

  if (localizedPrimaryTool) {
    parts.push(
      `<section aria-labelledby="article-cta-heading" class="rounded-2xl ${ctaPalette.card} p-6 shadow-sm">` +
        `<h2 id="article-cta-heading" class="text-xl font-bold text-slate-900">${escapeText(localizedPrimaryTool.name)}</h2>` +
        `<p class="mt-2 text-sm leading-relaxed text-slate-700">${escapeText(localizedPrimaryTool.shortDescription)}</p>` +
        `<p class="mt-4"><a href="${escapeAttr(toolHref(localizedPrimaryTool.slug, locale))}" class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">${escapeText(t.blog.tryTool)}</a></p>` +
        `</section>`
    );
  }

  if (related.length > 0) {
    parts.push('<section aria-labelledby="related-articles-heading">');
    parts.push(`<h2 id="related-articles-heading" class="text-xl sm:text-2xl font-bold text-slate-900 mb-5">${escapeText(t.blog.relatedArticles)}</h2>`);
    parts.push(blogCards(related, t, locale, data, 'grid grid-cols-1 sm:grid-cols-2 gap-4'));
    parts.push('</section>');
  }

  if (relatedTools.length > 0) {
    parts.push('<section aria-labelledby="article-related-tools-heading">');
    parts.push(`<h2 id="article-related-tools-heading" class="text-xl sm:text-2xl font-bold text-slate-900 mb-5">${escapeText(t.blog.relatedTools)}</h2>`);
    parts.push(toolCards(relatedTools, locale));
    parts.push('</section>');
  }

  if (prevVersion || nextVersion) {
    parts.push(`<nav aria-label="${escapeAttr(t.blog.relatedArticles)}" class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-slate-200">`);
    if (prevVersion && prev) {
      parts.push(
        `<a href="${escapeAttr(articleHref(prevVersion.slug, locale))}" class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">` +
          `<span class="flex items-center gap-1.5 text-xs font-semibold text-slate-500">${escapeText(t.blog.prevArticle)}</span>` +
          `<span class="mt-1.5 block text-sm font-semibold text-slate-900">${escapeText(prevVersion.title)}</span></a>`
      );
    } else {
      parts.push('<span />');
    }
    if (nextVersion && next) {
      parts.push(
        `<a href="${escapeAttr(articleHref(nextVersion.slug, locale))}" class="rounded-2xl border border-slate-200 bg-white p-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">` +
          `<span class="flex items-center justify-end gap-1.5 text-xs font-semibold text-slate-500">${escapeText(t.blog.nextArticle)}</span>` +
          `<span class="mt-1.5 block text-sm font-semibold text-slate-900">${escapeText(nextVersion.title)}</span></a>`
      );
    } else {
      parts.push('<span />');
    }
    parts.push('</nav>');
  }

  parts.push('<section aria-labelledby="article-share-heading" class="pt-10 border-t border-slate-200">');
  parts.push(`<h2 id="article-share-heading" class="text-xl font-bold text-slate-900 mb-4">${escapeText(t.blog.share)}</h2>`);
  parts.push('<div class="flex flex-wrap gap-3">');
  parts.push(
    `<button type="button" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-700 cursor-pointer">${escapeText(t.common.copy)}</button>`
  );
  parts.push(
    `<a href="${escapeAttr(shareXUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-700">X</a>`
  );
  parts.push(
    `<a href="${escapeAttr(shareFacebookUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-700">Facebook</a>`
  );
  parts.push('</div></section>');
  parts.push('</div>');

  if (headings.length > 0) {
    parts.push('<aside class="order-first lg:order-last lg:col-span-4">');
    parts.push('<div class="lg:sticky lg:top-6">');
    parts.push(`<nav aria-label="${escapeAttr(t.blog.tableOfContents)}" class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">`);
    parts.push(`<h2 class="text-base font-bold text-slate-900">${escapeText(t.blog.tableOfContents)}</h2>`);
    parts.push('<ul class="mt-3 space-y-2">');
    for (const heading of headings) {
      parts.push(
        `<li class="${heading.level === 3 ? 'pl-4' : ''}"><a href="#${escapeAttr(heading.id)}" class="text-sm leading-snug text-slate-600 transition-colors hover:text-indigo-700 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm">${escapeText(heading.text)}</a></li>`
      );
    }
    parts.push('</ul></nav></div></aside>');
  } else {
    parts.push('<aside class="order-first lg:order-last lg:col-span-4"></aside>');
  }
  parts.push('</div>');

  if (primaryTool) {
    const primaryRelated = getRelatedTools(primaryTool, 4).map((item) =>
      getLocalizedTool(item, locale, data)
    );
    if (primaryRelated.length > 0) {
      parts.push('<section class="mt-12">');
      parts.push(`<h2 class="${H2}">${escapeText(t.toolPage.relatedTitle)}</h2>`);
      parts.push(toolCards(primaryRelated, locale));
      parts.push('</section>');
    }
  }

  parts.push(
    `<p class="mt-12"><a href="${escapeAttr(blogHref(locale))}" class="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline">${escapeText(t.blog.backToBlog)}</a></p>`
  );
  parts.push('</main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Injection: replace the empty SPA root with the root + static <main>.
// Throws unless the shell contains exactly `<div id="root"></div>`.
// ---------------------------------------------------------------------------

export function injectStaticBody(shell: string, body: string): string {
  const marker = '<div id="root"></div>';
  if (!shell.includes(marker)) {
    throw new Error(
      'Shell has no empty <div id="root"></div> to inject the static body into'
    );
  }
  return shell.replace(marker, () => `<div id="root">${body}</div>`);
}
