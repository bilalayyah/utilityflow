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

import { SITE_CONFIG } from '../src/config/site';
import {
  categoryHref,
  localizeStaticPath,
  toolHref,
} from '../src/locales/config';
import type { LocaleCode } from '../src/locales/config';
import {
  getLocalizedCategories,
  getLocalizedCategory,
  getLocalizedTool,
  getLocalizedTools,
} from '../src/locales/tools';
import type { LocaleData } from '../src/locales/types';
import { formatString } from '../src/locales/ui';
import type { UiStrings } from '../src/locales/ui';
import { AI_TOOLS } from '../src/registry/aiTools';
import { CATEGORIES } from '../src/registry/categories';
import { getPopularTools, getRelatedTools } from '../src/registry/toolsRegistry';
import type { ToolCategory, ToolDefinition } from '../src/types/tool';
import { buildToolNameEntries, linkifyToolNames } from '../src/utils/linkifyToolNames';

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
  return `<nav aria-label="Breadcrumb" class="mb-6"><ol class="flex flex-wrap items-center gap-1 text-sm text-slate-500">${lis}</ol></nav>`;
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
  data: LocaleData
): string {
  const category = getLocalizedCategory(tool.categoryId, locale, data);
  const howToTitle = formatString(t.toolPage.howToUse, { name: tool.name });
  const modeLabel = tool.id.startsWith('ai-')
    ? t.toolPage.freeAiTool
    : tool.requiresExternalApi
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
    `<p class="text-xs text-slate-500 mb-3">${category ? escapeText(category.name) : 'Utility'} · ${escapeText(modeLabel)}</p>`
  );
  parts.push(`<h1 class="${H1}">${escapeText(tool.name)}</h1>`);
  parts.push(`<p class="${BODY_P}">${escapeText(tool.intro)}</p>`);
  // L-12: author byline + last-updated line (E-E-A-T).
  parts.push(
    `<p class="mt-3 text-xs text-slate-500">${escapeText(t.toolPage.bylineAuthor)} · ${escapeText(t.toolPage.lastUpdated)}</p>`
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
  data: LocaleData
): string {
  const allTools = getLocalizedTools(locale, data);
  const categories = getLocalizedCategories(locale, data);
  const popularTools = getPopularTools(8).map((tool) =>
    getLocalizedTool(tool, locale, data)
  );
  const aiTools = AI_TOOLS.map((tool) => getLocalizedTool(tool, locale, data));
  const parts: string[] = [];
  parts.push(openMain());
  parts.push('<section class="mx-auto max-w-3xl text-center py-6">');
  parts.push(
    `<p class="text-xs sm:text-sm font-medium text-indigo-600 mb-3">${escapeText(formatString(t.home.eyebrow, { count: allTools.length }))}</p>`
  );
  parts.push(`<h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">${escapeText(t.home.h1)}</h1>`);
  parts.push(`<p class="mx-auto mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">${escapeText(t.home.heroDescription)}</p>`);
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
  parts.push(`<h2 class="${H2}">${escapeText(t.home.aiSpotlight.title)}</h2>`);
  parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.aiSpotlight.description)}</p>`);
  parts.push(toolCards(aiTools, locale));
  parts.push('</section>');

  parts.push('<section class="mt-12">');
  parts.push(`<h2 class="${H2}">${escapeText(t.home.popular.title)}</h2>`);
  parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.popular.description)}</p>`);
  parts.push(toolCards(popularTools, locale));
  parts.push(
    `<p class="mt-6"><a href="${escapeAttr(localizeStaticPath('/tools/', locale))}" class="${LINK}">${escapeText(t.home.popular.viewDirectory)}</a></p>`
  );
  parts.push('</section>');

  parts.push('<section class="mt-12">');
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

  parts.push('<section class="mt-12">');
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

  if (t.home.faqs.length > 0) {
    parts.push('<section class="mt-12">');
    parts.push(`<h2 class="${H2}">${escapeText(t.home.faq.title)}</h2>`);
    parts.push(`<p class="text-sm sm:text-base text-slate-600 mb-6">${escapeText(t.home.faq.description)}</p>`);
    parts.push(faqList(t.home.faqs));
    parts.push('</section>');
  }
  parts.push(`<p class="mt-12 text-center text-sm text-slate-500">${escapeText(t.home.trustLine)}</p>`);
  parts.push('</main>');
  return parts.join('');
}

// ---------------------------------------------------------------------------
// Tools directory — 11 locales (mirrors ToolsDirectoryPage.tsx).
// ---------------------------------------------------------------------------

export function renderDirectoryBody(
  t: UiStrings,
  locale: LocaleCode,
  data: LocaleData
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
  data: LocaleData
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

export type StaticPageKey = 'about' | 'contact' | 'privacy' | 'terms';

export function renderStaticBody(
  key: StaticPageKey,
  t: UiStrings,
  locale: LocaleCode,
  data: LocaleData
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
    t.privacy.sections.forEach((section, sectionIndex) => {
      parts.push('<section>');
      parts.push(`<h2 class="text-xl font-bold text-slate-900 mb-2">${escapeText(section.title)}</h2>`);
      for (const paragraph of section.paragraphs) {
        parts.push(`<p class="mt-3">${escapeText(paragraph)}</p>`);
      }
      if (sectionIndex === 3) {
        // L-2: the optout.aboutads.info link was removed — it persistently
        // returns HTTP 429 (rate-limited) from multiple networks. Google
        // Ads Settings already covers opt-out.
        parts.push(
          `<p class="mt-3"><a href="https://adssettings.google.com" target="_blank" rel="noopener" class="${LINK}">${escapeText(t.privacy.optOutGoogleAds ?? 'Google Ads Settings')}</a></p>`
        );
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
