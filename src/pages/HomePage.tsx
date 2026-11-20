import { ArrowRight, Layers, Lock, ShieldCheck, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { FAQAccordion, buildFaqSchema } from '../components/common/FAQAccordion';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { ToolSearchBar } from '../components/tool/ToolSearchBar';
import { PASTEL_PALETTES } from '../components/tool/pastel';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getLocalizedCategories, getLocalizedTools, searchToolsLocalized } from '../locales/tools';
import { formatString } from '../locales/ui';
import type { CategoryId } from '../types/tool';

const WHY_ICONS = [Lock, Zap, Layers, ShieldCheck];

export function HomePage() {
  const { locale, t } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [directoryQuery, setDirectoryQuery] = useState('');

  const allTools = getLocalizedTools(locale);
  const categories = getLocalizedCategories(locale);

  const filteredTools = useMemo(() => {
    return searchToolsLocalized(directoryQuery, locale, selectedCategory);
  }, [directoryQuery, selectedCategory, locale]);

  const filteredCategories = useMemo(() => {
    const q = directoryQuery.trim().toLowerCase();
    return categories.filter((cat) => {
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
      if (!q) return true;
      return [cat.name, cat.description, ...cat.sampleToolNames].join(' ').toLowerCase().includes(q);
    });
  }, [directoryQuery, selectedCategory, categories]);

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
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6E6E73] dark:text-[#94A3B8] mb-3">
            {formatString(t.home.eyebrow, { count: allTools.length })}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9] leading-[1.1] text-balance">
            {t.home.h1}
          </h1>
          <p className="mx-auto mt-5 text-base sm:text-lg leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1] max-w-2xl">
            {t.home.heroDescription}
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <h2 id="directory-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
              {t.home.directory.title}
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-[#6E6E73] dark:text-[#CBD5E1]">
              {t.home.directory.description}
            </p>
          </div>

          <div className="w-full lg:w-80">
            <label htmlFor="directory-filter-input" className="sr-only">
              {t.home.directory.filterPlaceholder}
            </label>
            <input
              id="directory-filter-input"
              type="search"
              value={directoryQuery}
              onChange={(e) => setDirectoryQuery(e.target.value)}
              placeholder={t.home.directory.filterPlaceholder}
              className="w-full rounded-xl border border-[#E5E5EA] bg-white px-3.5 py-2 text-sm text-[#1D1D1F] placeholder:text-[#86868B] shadow-sm focus:border-[#0E8A66] focus:outline-none focus:ring-2 focus:ring-[#0E8A66]/20"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter directory by category"
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#0E8A66] text-white shadow-sm'
                : 'border border-[#E5E5EA] bg-white text-[#1D1D1F] shadow-sm hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]'
            }`}
          >
            {t.home.directory.allCategories}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-[#0E8A66] text-white shadow-sm'
                  : 'border border-[#E5E5EA] bg-white text-[#1D1D1F] shadow-sm hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]'
              }`}
            >
              {category.shortName}
            </button>
          ))}
        </div>

        {/* Live Tools Grid (if any registered) */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCategories.map((category, index) => {
                  const categoryLiveTools = allTools.filter((tool) => tool.categoryId === category.id);
                  const palette = PASTEL_PALETTES[index % PASTEL_PALETTES.length];
                  return (
                    <div
                      key={category.id}
                      className={`rounded-2xl ${palette.card} p-5 flex flex-col justify-between gap-4 shadow-sm`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <Link
                            to={categoryHref(category.id, locale)}
                            className="inline-flex items-center gap-2 text-base font-bold text-[#1D1D1F] hover:text-[#0B7A59] dark:text-[#F1F5F9] dark:hover:text-[#34D399]"
                          >
                            <CategoryIcon name={category.iconName} className={`w-4 h-4 ${palette.link}`} />
                            <span>{category.name}</span>
                          </Link>
                          <span className="text-xs font-mono text-[#86868B] tabular-nums">
                            {categoryLiveTools.length}/{category.plannedToolCount}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-[#6E6E73] dark:text-[#CBD5E1]">
                          {formatString(t.home.directory.upcomingUtilities, {
                            names: category.sampleToolNames.join(', '),
                          })}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-[#E5E5EA] text-xs dark:border-[#243247]">
                        <span className="text-[#86868B]">
                          {formatString(t.home.directory.toolsActive, { count: categoryLiveTools.length })}
                        </span>
                        <Link
                          to={categoryHref(category.id, locale)}
                          className={`font-semibold ${palette.link} hover:underline underline-offset-4`}
                        >
                          {t.home.directory.openCategory}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-[#E5E5EA] bg-white p-8 text-center shadow-sm dark:border-[#243247] dark:bg-[#131D31]">
                <p className="text-sm text-[#6E6E73] dark:text-[#CBD5E1]">
                  {formatString(t.home.directory.noMatch, { query: directoryQuery })}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDirectoryQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-sm font-semibold text-[#0B7A59] hover:underline cursor-pointer dark:text-[#34D399]"
                >
                  {t.home.directory.resetFilters}
                </button>
              </div>
            )}
          </div>
        )}
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
