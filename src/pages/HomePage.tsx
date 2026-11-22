import { ArrowRight, Layers, Lock, ShieldCheck, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQAccordion, buildFaqSchema } from '../components/common/FAQAccordion';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { ToolSearchBar } from '../components/tool/ToolSearchBar';
import { PASTEL_PALETTES } from '../components/tool/pastel';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getLocalizedCategories, getLocalizedTools, searchToolsLocalized } from '../locales/tools';
import { formatString } from '../locales/ui';
import type { CategoryId } from '../types/tool';

const WHY_ICONS = [Lock, Zap, Layers, ShieldCheck];

export function HomePage() {
  const { locale, t } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  const allTools = getLocalizedTools(locale);
  const categories = getLocalizedCategories(locale);

  const filteredTools = useMemo(() => {
    return searchToolsLocalized('', locale, selectedCategory);
  }, [selectedCategory, locale]);

  const homePath = localizeStaticPath('/', locale);
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: buildCanonicalUrl(homePath),
    description: t.home.seoDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${buildCanonicalUrl(localizeStaticPath('/tools/', locale))}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // Fix #14 (E-E-A-T): Organization schema — who is behind the site.
  // L-12: founder (Bilal) — the person behind the site, named in the
  // footer ("Crafted with ❤️ by Bilal inspired by Shaheen").
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: buildCanonicalUrl(homePath),
    logo: 'https://utilityflow.online/og-image.jpg',
    founder: {
      '@type': 'Person',
      name: 'Bilal',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE_CONFIG.contactEmail,
    },
  };

  const heroPills: Array<{ id: CategoryId | 'all'; label: string }> = [
    { id: 'all', label: t.home.directory.allCategories },
    ...categories.map((category) => ({ id: category.id as CategoryId, label: category.shortName })),
  ];

  return (
    <>
      <SeoHead
        title={t.home.seoTitle}
        description={t.home.seoDescription}
        canonicalPath={homePath}
        keywords={t.home.seoKeywords}
        structuredData={[websiteSchema, organizationSchema, buildFaqSchema(t.home.faqs)]}
        alternates={toHreflangEntries(getStaticAlternatePaths('/'))}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9EADF] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0B7A59] shadow-sm dark:border-[#1E3A32] dark:bg-[#131D31] dark:text-[#34D399]">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8A66] dark:bg-[#34D399]"
              aria-hidden="true"
            />
            {formatString(t.home.eyebrow, { count: allTools.length })}
          </p>
          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9] text-balance ${
              // Bengali + Hindi (Devanagari) glyphs have tall ascenders /
              // descenders that cross into the next line at leading 1.08 —
              // give the hero heading room in those scripts only; every
              // other locale keeps the 1.08 look.
              locale === 'bn' || locale === 'hi' ? 'leading-[1.35]' : 'leading-[1.08]'
            }`}
          >
            <span className="text-[#0E8A66] dark:text-[#34D399]">{t.home.h1Lead}</span>
            {t.home.h1Rest}
          </h1>
          <p className="mx-auto mt-5 text-base sm:text-lg leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1] max-w-2xl text-balance">
            {formatString(t.home.heroDescription, { count: allTools.length })}
          </p>

          <div className="mt-8 flex justify-center">
            <ToolSearchBar variant="hero" />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {heroPills.map((pill) => (
              <button
                key={pill.id}
                type="button"
                aria-pressed={selectedCategory === pill.id}
                onClick={() => setSelectedCategory(pill.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === pill.id
                    ? 'bg-[#0E8A66] text-white shadow-sm'
                    : 'border border-[#E5E5EA] bg-white text-[#1D1D1F] shadow-sm hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#directory"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E8A66] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0B7557] whitespace-nowrap shrink-0"
            >
              {t.home.exploreCategories}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <Link
              to={localizeStaticPath('/tools/', locale)}
              className="inline-flex items-center gap-2 rounded-full border border-[#D2D2D7] bg-white px-5 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:bg-[#F5F5F7] whitespace-nowrap shrink-0 dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:bg-[#182239]"
            >
              {t.home.openDirectory}
            </Link>
          </div>
        </div>
      </section>

      {/* All Tools Directory Section */}
      <section
        id="directory"
        aria-labelledby="directory-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h2 id="directory-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
            {t.home.directory.title}
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#6E6E73] dark:text-[#CBD5E1]">
            {t.home.directory.description}
          </p>
        </div>

        {/* Live Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        aria-labelledby="why-choose-heading"
        className="py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 id="why-choose-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
              {t.home.why.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6E6E73] dark:text-[#CBD5E1]">
              {t.home.why.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.home.why.items.map((item, index) => {
              const IconComponent = WHY_ICONS[index] ?? ShieldCheck;
              const palette = PASTEL_PALETTES[index % PASTEL_PALETTES.length];
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl ${palette.card} p-6 shadow-sm`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className={`font-mono text-sm font-semibold ${palette.link} tabular-nums`}>
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${palette.icon}`}>
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section aria-labelledby="how-it-works-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
            {t.home.howItWorks.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6E6E73] dark:text-[#CBD5E1]">
            {t.home.howItWorks.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.home.howItWorks.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#E5E5EA] bg-white p-6 shadow-sm dark:border-[#243247] dark:bg-[#131D31]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7F3EE] text-sm font-bold text-[#0B7A59] dark:bg-[rgba(16,185,129,.14)] dark:text-[#34D399]">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Homepage FAQ Section */}
      <section aria-labelledby="home-faq-heading" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 id="home-faq-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
            {t.home.faq.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6E6E73] dark:text-[#CBD5E1]">
            {t.home.faq.description}
          </p>
        </div>

        <FAQAccordion items={t.home.faqs} />
      </section>

      {/* Trust strip */}
      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-center text-sm text-[#6E6E73] dark:text-[#CBD5E1]">
          <ShieldCheck className="w-4 h-4 shrink-0 text-[#0E8A66] dark:text-[#34D399]" aria-hidden="true" />
          <span>{t.home.trustLine}</span>
        </p>
      </div>
    </>
  );
}
