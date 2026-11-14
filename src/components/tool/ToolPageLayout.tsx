import { Check, Info } from 'lucide-react';
import type { ReactNode } from 'react';
import { buildCanonicalUrl } from '../../config/site';
import { useLocale } from '../../locales/LocaleContext';
import { categoryHref, localizeStaticPath, toolHref } from '../../locales/config';
import { getToolAlternatePaths, toHreflangEntries } from '../../locales/routes';
import { getLocalizedCategory } from '../../locales/tools';
import { formatString } from '../../locales/ui';
import type { BreadcrumbItem, ToolDefinition, ToolStep } from '../../types/tool';
import { AdSlot } from '../common/AdSlot';
import { Breadcrumbs, buildBreadcrumbSchema } from '../common/Breadcrumbs';
import { FAQAccordion, buildFaqSchema } from '../common/FAQAccordion';
import { SeoHead } from '../seo/SeoHead';
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
  const category = getLocalizedCategory(tool.categoryId, locale);
  const canonicalPath = toolHref(tool.slug, locale);
  const howToTitle = formatString(t.toolPage.howToUse, { name: tool.name });

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
    ...(tool.instructions.length > 0
      ? [buildHowToSchema(howToTitle, tool.seo.description, tool.instructions)]
      : []),
    ...(tool.faqs.length > 0 ? [buildFaqSchema(tool.faqs)] : []),
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
        structuredData={structuredData}
        alternates={toHreflangEntries(getToolAlternatePaths(tool.id))}
      />

      <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        <header className="max-w-3xl mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
            <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 font-semibold text-indigo-700">
              {category ? category.name : 'Utility'}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {tool.id.startsWith('ai-')
                ? t.toolPage.freeAiTool
                : tool.requiresExternalApi
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
          className="rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-6 shadow-sm"
        >
          {children}
        </section>

        {/* Ad placement isolated below interactive controls */}
        <AdSlot slotId="tool-below-workspace" format="horizontal" />

        {/* Structured Educational & SEO Guide Sections */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            {tool.instructions.length > 0 && (
              <section aria-labelledby="how-to-use-heading">
                <h2 id="how-to-use-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  {howToTitle}
                </h2>
                <ol className="space-y-4">
                  {tool.instructions.map((step, index) => (
                    <li
                      key={step.title}
                      className="flex gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 shadow-sm"
                    >
                      <span className="font-mono text-sm font-semibold text-indigo-600 tabular-nums shrink-0 mt-0.5">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {tool.examples.length > 0 && (
              <section aria-labelledby="examples-heading">
                <h2 id="examples-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  {t.toolPage.practicalExamples}
                </h2>
                <div className="space-y-4">
                  {tool.examples.map((example) => (
                    <div
                      key={example.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-slate-900">{example.title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                          <div className="font-sans font-semibold text-slate-500 mb-1">{t.toolPage.input}</div>
                          <pre className="whitespace-pre-wrap break-words text-slate-800">
                            {example.input}
                          </pre>
                        </div>
                        <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                          <div className="font-sans font-semibold text-slate-500 mb-1">{t.toolPage.output}</div>
                          <pre className="whitespace-pre-wrap break-words text-slate-800">
                            {example.output}
                          </pre>
                        </div>
                      </div>
                      {example.explanation && (
                        <p className="text-sm text-slate-600">{example.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {tool.faqs.length > 0 && (
              <section aria-labelledby="tool-faq-heading">
                <h2 id="tool-faq-heading" className="text-2xl font-bold text-slate-900 mb-4">
                  {t.toolPage.faqs}
                </h2>
                <FAQAccordion items={tool.faqs} />
              </section>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8">
            {tool.benefits.length > 0 && (
              <section className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-3">{t.toolPage.keyBenefits}</h2>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {tool.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {tool.useCases.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-3">{t.toolPage.commonUseCases}</h2>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-4">
                  {tool.useCases.map((useCase) => (
                    <li key={useCase}>{useCase}</li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>

        <AdSlot slotId="tool-below-guide" format="horizontal" />

        <div className="mt-12">
          <RelatedTools tool={tool} />
        </div>
      </article>
    </>
  );
}
