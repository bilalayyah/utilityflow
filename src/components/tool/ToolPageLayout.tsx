import { Check, Info } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { buildCanonicalUrl } from '../../config/site';
import { getOgImageForPage } from '../../config/ogImages';
import { loadToolDetail } from '../../locales/details';
import { useLocale } from '../../locales/LocaleContext';
import { categoryHref, localizeStaticPath, toolHref } from '../../locales/config';
import { getToolAlternatePaths, toHreflangEntries } from '../../locales/routes';
import { getLocalizedCategory, getLocalizedTools } from '../../locales/tools';
import { formatString } from '../../locales/ui';
import type { BreadcrumbItem, ToolDefinition, ToolDetail, ToolStep } from '../../types/tool';
import { buildToolNameEntries, linkifyToolNames } from '../../utils/linkifyToolNames';
import { trackEvent } from '../../utils/analytics';
import { Breadcrumbs, buildBreadcrumbSchema } from '../common/Breadcrumbs';
import { FAQAccordion, buildFaqSchema } from '../common/FAQAccordion';
import { ToolRelatedArticles } from '../blog/ToolRelatedArticles';
import { SeoHead } from '../seo/SeoHead';
import { PASTEL_PALETTES, pastelForKey } from './pastel';
import { RelatedTools } from './RelatedTools';

interface ToolPageLayoutProps {
  tool: ToolDefinition;
  children: ReactNode;
}

export function buildHowToSchema(howToTitle: string, description: string, steps: ToolStep[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToTitle,
    description,
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
    })),
  };
}

export function ToolPageLayout({ tool, children }: ToolPageLayoutProps) {
  const { locale, t } = useLocale();
  // H-3 (page weight): the guide fields (instructions, examples, benefits,
  // useCases, faqs) are NOT in the locale chunk — they load from the
  // tool's per-batch detail module after first paint, so they never block
  // LCP. The header (name/intro/apiNotice) and workbench use the light
  // record only. While detail loads, the guide sections stay hidden via
  // their existing `length > 0` guards (no layout shift: they sit below
  // the fold). A failed load just hides the guide — never an error state.
  const [detail, setDetail] = useState<ToolDetail | null>(null);
  useEffect(() => {
    let cancelled = false;
    setDetail(null);
    loadToolDetail(locale, tool.id, tool.batch)
      .then((loaded) => {
        if (!cancelled) setDetail(loaded);
      })
      .catch(() => {
        // Detail is below-the-fold content; hide the guide, keep the page.
      });
    return () => {
      cancelled = true;
    };
  }, [locale, tool.id, tool.batch]);
  // L-21: GA4 conversion event — one tool_use per tool page view (tool id
  // + name as params). The ref guards StrictMode double-mounts in dev
  // (production mounts once); keyed by tool.id so navigating between
  // tools fires once per tool.
  const toolUseFiredRef = useRef<string | null>(null);
  useEffect(() => {
    if (toolUseFiredRef.current === tool.id) return;
    toolUseFiredRef.current = tool.id;
    trackEvent('tool_use', { tool_id: tool.id, tool_name: tool.name });
  }, [tool.id, tool.name]);
  const fullTool: ToolDefinition &
    ToolDetail & { howItWorks: string[]; supportedFormats: string[]; limitations: string[] } = {
    ...tool,
    // Spread alone does not narrow the optional detail fields to required,
    // so assign them explicitly (empty arrays until the detail loads).
    instructions: detail?.instructions ?? [],
    examples: detail?.examples ?? [],
    benefits: detail?.benefits ?? [],
    useCases: detail?.useCases ?? [],
    faqs: detail?.faqs ?? [],
    howItWorks: detail?.howItWorks ?? [],
    supportedFormats: detail?.supportedFormats ?? [],
    limitations: detail?.limitations ?? [],
  };
  const category = getLocalizedCategory(tool.categoryId, locale);
  const canonicalPath = toolHref(tool.slug, locale);
  const howToTitle = formatString(t.toolPage.howToUse, { name: tool.name });
  // M-5: contextual internal links in guide prose. The entry map comes
  // from the light locale records (getLocalizedTools — names/slugs already
  // in the locale chunk), NOT from detail modules, so this adds no detail
  // payload to the bundle. The current tool is excluded inside the
  // linkifier (a tool never links to itself).
  const toolNameEntries = useMemo(
    () => buildToolNameEntries(getLocalizedTools(locale), locale),
    [locale]
  );
  const linkifyGuideText = (text: string): string =>
    linkifyToolNames(text, toolNameEntries, { excludeToolId: tool.id });
  // Pastel redesign: the tool's own palette tints the workbench shell and
  // sidebar panels; a second deterministic palette tints the use-cases panel.
  const palette = pastelForKey(tool.id);
  const useCasesPalette = pastelForKey(`usecases:${tool.id}`);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    ...(category
      ? [{ label: category.name, href: categoryHref(category.id, locale) }]
      : []),
    { label: tool.name },
  ];

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    url: buildCanonicalUrl(canonicalPath),
    applicationCategory: tool.seo.schemaApplicationCategory || 'UtilitiesApplication',
    operatingSystem: 'All',
    isAccessibleForFree: true,
    description: tool.seo.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const structuredData = [
    softwareSchema,
    buildBreadcrumbSchema(breadcrumbItems),
    ...(fullTool.instructions.length > 0
      ? [buildHowToSchema(howToTitle, tool.seo.description, fullTool.instructions)]
      : []),
    ...(fullTool.faqs.length > 0 ? [buildFaqSchema(fullTool.faqs)] : []),
  ];

  return (
    <>
      <SeoHead
        title={tool.seo.title}
        description={tool.seo.description}
        canonicalPath={canonicalPath}
        keywords={[
          tool.seo.primaryKeyword,
          ...tool.seo.secondaryKeywords,
          ...tool.seo.longTailKeywords,
        ]}
        ogImage={getOgImageForPage('tool', tool.id, locale)}
        structuredData={structuredData}
        alternates={toHreflangEntries(getToolAlternatePaths(tool.id))}
      />

      <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        <header className="max-w-3xl mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mb-3">
            <span className={`rounded-full px-2.5 py-0.5 font-semibold ${palette.soft}`}>
              {category ? category.name : 'Utility'}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {tool.requiresExternalApi
                ? t.toolPage.externalApi
                : t.toolPage.runsLocally}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            {tool.name}
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            {tool.intro}
          </p>

          {/* L-12: author byline + last-updated line (E-E-A-T). */}
          <p className="mt-3 text-xs text-slate-600">
            {t.toolPage.bylineAuthor} · {t.toolPage.lastUpdated}
          </p>

          {tool.requiresExternalApi && tool.apiNotice && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p>{tool.apiNotice}</p>
            </div>
          )}
        </header>

        {/* Interactive Tool Workbench */}
        <section
          aria-label={`${tool.name} workspace`}
          className={`rounded-2xl ${palette.card} p-4 sm:p-6 shadow-sm`}
        >
          {children}
        </section>

        {/* Structured Educational & SEO Guide Sections */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            {fullTool.instructions.length > 0 && (
              <section aria-labelledby="how-to-use-heading">
                <h2 id="how-to-use-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  {howToTitle}
                </h2>
                <ol className="space-y-4">
                  {fullTool.instructions.map((step, index) => {
                    const stepPalette = PASTEL_PALETTES[index % PASTEL_PALETTES.length];
                    return (
                      <li
                        key={step.title}
                        className={`flex gap-4 rounded-2xl ${stepPalette.card} p-4 shadow-sm`}
                      >
                        <span
                          className={`font-mono text-sm font-semibold tabular-nums shrink-0 mt-0.5 ${stepPalette.link}`}
                        >
                          {String(index + 1).padStart(2, '0')}.
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                          <p
                            className="mt-1 text-sm leading-relaxed text-slate-600"
                            dangerouslySetInnerHTML={{ __html: linkifyGuideText(step.description) }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            )}

            {/* Phase 18: How It Works — mechanism, not UI steps. Headings
                are hardcoded English (EN-only): the fields exist only in the
                EN detail modules, so this section never renders in other
                locales until they add the fields. */}
            {fullTool.howItWorks.length > 0 && (
              <section aria-labelledby="how-it-works-heading">
                <h2 id="how-it-works-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  How It Works
                </h2>
                <div className="space-y-3">
                  {fullTool.howItWorks.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-slate-600"
                      dangerouslySetInnerHTML={{ __html: linkifyGuideText(paragraph) }}
                    />
                  ))}
                </div>
              </section>
            )}

            {fullTool.examples.length > 0 && (
              <section aria-labelledby="examples-heading">
                <h2 id="examples-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  {t.toolPage.practicalExamples}
                </h2>
                <div className="space-y-4">
                  {fullTool.examples.map((example, index) => {
                    const examplePalette = PASTEL_PALETTES[index % PASTEL_PALETTES.length];
                    return (
                      <div
                        key={example.title}
                        className={`rounded-2xl ${examplePalette.card} p-5 space-y-3 shadow-sm`}
                      >
                        <h3 className="text-base font-semibold text-slate-900">{example.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                            <div className={`font-sans font-semibold mb-1 ${examplePalette.link}`}>
                              {t.toolPage.input}
                            </div>
                            <pre className="whitespace-pre-wrap break-words text-slate-800">
                              {example.input}
                            </pre>
                          </div>
                          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                            <div className={`font-sans font-semibold mb-1 ${examplePalette.link}`}>
                              {t.toolPage.output}
                            </div>
                            <pre className="whitespace-pre-wrap break-words text-slate-800">
                              {example.output}
                            </pre>
                          </div>
                        </div>
                        {example.explanation && (
                          <p
                            className="text-sm text-slate-600"
                            dangerouslySetInnerHTML={{ __html: linkifyGuideText(example.explanation) }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Phase 18: Supported Formats — EN-only heading, see above. */}
            {fullTool.supportedFormats.length > 0 && (
              <section aria-labelledby="supported-formats-heading">
                <h2 id="supported-formats-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  Supported Formats
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {fullTool.supportedFormats.map((format) => (
                    <li
                      key={format}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {format}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Phase 18: Accuracy & Limitations — EN-only heading, see above. */}
            {fullTool.limitations.length > 0 && (
              <section aria-labelledby="limitations-heading">
                <h2 id="limitations-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  Accuracy &amp; Limitations
                </h2>
                <ul className="space-y-2 text-sm text-slate-600 list-disc ps-4">
                  {fullTool.limitations.map((limitation) => (
                    <li
                      key={limitation.slice(0, 48)}
                      dangerouslySetInnerHTML={{ __html: linkifyGuideText(limitation) }}
                    />
                  ))}
                </ul>
              </section>
            )}

            {fullTool.faqs.length > 0 && (
              <section aria-labelledby="tool-faq-heading">
                <h2 id="tool-faq-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  {t.toolPage.faqs}
                </h2>
                <FAQAccordion items={fullTool.faqs} renderAnswer={(answer) => <span dangerouslySetInnerHTML={{ __html: linkifyGuideText(answer) }} />} />
              </section>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8">
            {fullTool.benefits.length > 0 && (
              <section className={`rounded-2xl ${palette.card} p-5 shadow-sm`}>
                <h2 className="text-lg font-bold text-slate-900 mb-3">{t.toolPage.keyBenefits}</h2>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {fullTool.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${palette.link}`}
                        aria-hidden="true"
                      />
                      <span dangerouslySetInnerHTML={{ __html: linkifyGuideText(benefit) }} />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {fullTool.useCases.length > 0 && (
              <section className={`rounded-2xl ${useCasesPalette.card} p-5 shadow-sm`}>
                <h2 className="text-lg font-bold text-slate-900 mb-3">{t.toolPage.commonUseCases}</h2>
                <ul className="space-y-2 text-sm text-slate-600 list-disc ps-4">
                  {fullTool.useCases.map((useCase) => (
                    <li
                      key={useCase}
                      dangerouslySetInnerHTML={{ __html: linkifyGuideText(useCase) }}
                    />
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>

        {/* Internal linking (audit fix #1): the tool's 3 articles. Renders
            nothing when the tool has no published articles in this locale.
            Placed above Related Tools, mirroring the static prerender
            (scripts/prerender-body.ts renderToolBody) and CMP's layout. */}
        <ToolRelatedArticles toolId={tool.id} locale={locale} />

        <div className="mt-12">
          <RelatedTools tool={tool} />
        </div>
      </article>
    </>
  );
}
