import { ArrowRight, Layers, Lock, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdSlot } from '../components/common/AdSlot';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { FAQAccordion, buildFaqSchema } from '../components/common/FAQAccordion';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { ToolSearchBar } from '../components/tool/ToolSearchBar';
import { PASTEL_PALETTES, pastelForKey } from '../components/tool/pastel';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { categoryHref, localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import { getLocalizedCategories, getLocalizedTools, searchToolsLocalized } from '../locales/tools';
import { formatString } from '../locales/ui';
import { AI_TOOLS } from '../registry/aiTools';
import { CATEGORIES } from '../registry/categories';
import { getPopularTools } from '../registry/toolsRegistry';
import type { CategoryId } from '../types/tool';

const WHY_ICONS = [Lock, Zap, Layers, ShieldCheck];

export function HomePage() {
  const { locale, t } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [directoryQuery, setDirectoryQuery] = useState('');

  const allTools = getLocalizedTools(locale);
  const popularTools = getPopularTools(8);
  const categories = getLocalizedCategories(locale);
  const directoryPalette = pastelForKey('directory');
  const popularPalette = pastelForKey('popular');

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
        structuredData={[websiteSchema, buildFaqSchema(t.home.faqs)]}
        alternates={toHreflangEntries(getStaticAlternatePaths('/'))}
      />

      {/* Hero Section */}
      <section className="border-b border-slate-200/70 bg-gradient-to-b from-violet-50/80 via-[#f6f6fb] to-transparent dark:border-slate-800 dark:from-violet-950/30 dark:via-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
              {formatString(t.home.eyebrow, { count: allTools.length })}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
              {t.home.h1}
            </h1>
            <p className="mx-auto mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
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
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-indigo-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-indigo-700 hover:to-violet-700 whitespace-nowrap shrink-0"
              >
                {t.home.exploreCategories}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                to={localizeStaticPath('/tools/', locale)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 whitespace-nowrap shrink-0 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t.home.openDirectory}
              </Link>
              <Link
                to={localizeStaticPath('/ai-writing-assistant/', locale)}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 whitespace-nowrap shrink-0 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                {t.home.aiWriting}
              </Link>
              <Link
                to={localizeStaticPath('/ai-text-summarizer/', locale)}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 whitespace-nowrap shrink-0 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20"
              >
                {t.home.aiSummarizer}
              </Link>
              <Link
                to={localizeStaticPath('/ai-tool-finder/', locale)}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 whitespace-nowrap shrink-0 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20"
              >
                {t.home.aiFinder}
              </Link>
            </div>
          </div>

          {/* 4-column Platform Metrics Strip */}
          <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <dt className="text-xs text-slate-500 dark:text-slate-400">{t.home.metrics.toolCategories}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                {CATEGORIES.length}
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <dt className="text-xs text-slate-500 dark:text-slate-400">{t.home.metrics.browserUtilities}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                {SITE_CONFIG.plannedTotalTools}
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <dt className="text-xs text-slate-500 dark:text-slate-400">{t.home.metrics.liveTools}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                {allTools.length}
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <dt className="text-xs text-slate-500 dark:text-slate-400">{t.home.metrics.accountRequired}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tabular-nums">{t.home.metrics.none}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Free AI Tools Spotlight Section */}
      <section
        id="ai-tools"
        aria-labelledby="ai-tools-heading"
        className="border-b border-slate-200/70 py-12 sm:py-14 dark:border-slate-800"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.home.aiSpotlight.badge}</span>
              </div>
              <h2 id="ai-tools-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {t.home.aiSpotlight.title}
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {t.home.aiSpotlight.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AI_TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section aria-labelledby="popular-tools-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 id="popular-tools-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.home.popular.title}
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {t.home.popular.description}
            </p>
          </div>
          <Link
            to={localizeStaticPath('/tools/', locale)}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline whitespace-nowrap shrink-0 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {t.home.popular.viewDirectory}
          </Link>
        </div>

        {popularTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className={`rounded-2xl ${popularPalette.card} p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm dark:border-slate-800 dark:bg-slate-900`}>
            <div className="max-w-2xl">
              <p className={`text-xs font-semibold ${popularPalette.link} mb-1`}>
                Phase 0 · Platform Foundation Ready
              </p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Tool slots are initialized and awaiting Batch 1 rollout
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                The routing architecture, shared tool layout, central registry, and SEO pipeline
                are live. Popular tools will automatically populate here starting with Batch 1 (Text
                &amp; Writing Tools).
              </p>
            </div>
            <Link
              to={categoryHref('text-writing', locale)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Preview Batch 1 Category
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>

      {/* Tool Categories Section */}
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="border-y border-slate-200/70 bg-white/50 py-14 sm:py-16 dark:border-slate-800 dark:bg-slate-900/30"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 id="categories-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.home.categories.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {t.home.categories.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((category) => {
              const liveCount = allTools.filter((tool) => tool.categoryId === category.id).length;
              const palette = pastelForKey(`cat:${category.id}`);
              return (
                <Link
                  key={category.id}
                  to={categoryHref(category.id, locale)}
                  className={`group flex flex-col justify-between rounded-2xl p-6 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${palette.card}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${palette.icon}`}>
                          <CategoryIcon name={category.iconName} className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 tabular-nums">
                          {formatString(t.category.batchLabel, { batch: category.batch })} ·{' '}
                          {liveCount >= category.plannedToolCount
                            ? formatString(t.category.toolsLive, { count: liveCount })
                            : formatString(t.category.ofToolsLive, {
                                count: liveCount,
                                total: category.plannedToolCount,
                              })}
                        </span>
                      </div>
                      <ArrowRight
                        className="w-4 h-4 text-slate-500 dark:text-slate-300 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700/90 dark:text-slate-200/90">
                      {category.description}
                    </p>
                  </div>

                  <p className="mt-5 pt-4 border-t border-slate-900/10 dark:border-white/15 text-xs text-slate-600 dark:text-slate-300 truncate">
                    {formatString(t.home.categories.includes, {
                      names: category.sampleToolNames.slice(0, 3).join(' · '),
                    })}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AdSlot slotId="home-mid" format="horizontal" />
      </div>

      {/* All Tools Directory Section */}
      <section
        id="directory"
        aria-labelledby="directory-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <h2 id="directory-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.home.directory.title}
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
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
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
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
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-indigo-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500'
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
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-indigo-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500'
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
                      className={`rounded-2xl ${palette.card} p-5 flex flex-col justify-between gap-4 shadow-sm dark:border-slate-800 dark:bg-slate-900`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <Link
                            to={categoryHref(category.id, locale)}
                            className="inline-flex items-center gap-2 text-base font-bold text-slate-900 hover:text-indigo-700 dark:text-white dark:hover:text-indigo-300"
                          >
                            <CategoryIcon name={category.iconName} className={`w-4 h-4 ${palette.link}`} />
                            <span>{category.name}</span>
                          </Link>
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                            {formatString(t.category.batchLabel, { batch: category.batch })} ·{' '}
                            {categoryLiveTools.length}/{category.plannedToolCount}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          {formatString(t.home.directory.upcomingUtilities, {
                            names: category.sampleToolNames.join(', '),
                          })}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                        <span className="text-slate-500 dark:text-slate-400">
                          {categoryLiveTools.length === 0
                            ? formatString(t.home.directory.scheduledInBatch, { batch: category.batch })
                            : formatString(t.home.directory.toolsActive, { count: categoryLiveTools.length })}
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
              <div className={`rounded-2xl ${directoryPalette.card} p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900`}>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {formatString(t.home.directory.noMatch, { query: directoryQuery })}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDirectoryQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-sm font-semibold text-indigo-600 hover:underline cursor-pointer dark:text-indigo-400"
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
        className="border-y border-slate-200/70 bg-white/50 py-14 sm:py-16 dark:border-slate-800 dark:bg-slate-900/30"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 id="why-choose-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.home.why.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
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
                  className={`rounded-2xl ${palette.card} p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className={`font-mono text-sm font-semibold ${palette.link} tabular-nums`}>
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${palette.icon}`}>
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Homepage FAQ Section */}
      <section aria-labelledby="home-faq-heading" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 id="home-faq-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.home.faq.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.home.faq.description}
          </p>
        </div>

        <FAQAccordion items={t.home.faqs} />
      </section>

      {/* Trust strip */}
      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
          <ShieldCheck className="w-4 h-4 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
          <span>{t.home.trustLine}</span>
        </p>
      </div>
    </>
  );
}
