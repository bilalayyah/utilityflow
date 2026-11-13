import { ArrowRight, Layers, Lock, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdSlot } from '../components/common/AdSlot';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { FAQAccordion, buildFaqSchema } from '../components/common/FAQAccordion';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolCard } from '../components/tool/ToolCard';
import { ToolSearchBar } from '../components/tool/ToolSearchBar';
import { SITE_CONFIG, buildCanonicalUrl } from '../config/site';
import { AI_TOOLS } from '../registry/aiTools';
import { CATEGORIES, getCategoryById } from '../registry/categories';
import { getAllTools, getPopularTools, searchTools } from '../registry/toolsRegistry';
import type { CategoryId, ToolFAQ } from '../types/tool';

const HOMEPAGE_FAQS: ToolFAQ[] = [
  {
    question: 'Are UtilityFlow tools free to use without creating an account?',
    answer:
      'Yes. All 85 browser utilities and 3 AI tools on UtilityFlow are available free of charge with no registration, sign-in wall, credits, or subscription required.',
  },
  {
    question: 'Does UtilityFlow upload my text, code, or files to a server?',
    answer:
      'All 85 core browser utilities run locally in your web browser without uploading inputs. Our 3 optional Free AI tools (AI Writing Assistant, AI Text Summarizer, and AI Smart Tool Finder) process prompts securely via server-side Groq inference without storing your text.',
  },
  {
    question: 'How are the 88 tools organized across the platform?',
    answer:
      'UtilityFlow covers seven core categories (Text & Writing, Developer, Calculators, Social Media, PDFs, SEO, and Image & File tools) totaling 85 browser tools alongside 3 Free AI tools integrated into the platform.',
  },
  {
    question: 'Can I bookmark or share a direct link to any specific tool?',
    answer:
      'Yes. Every tool and category receives its own permanent, clean URL (such as /word-counter/, /ai-writing-assistant/, or /category/developer-tools/) that loads directly and works across browser refreshes.',
  },
  {
    question: 'Does UtilityFlow work smoothly on mobile phones and tablets?',
    answer:
      'Yes. All layouts, navigation controls, and interactive workspaces—including Light Mode and Dark Mode—are designed mobile-first with accessible touch targets and responsive grids.',
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    number: '01.',
    title: 'Browser-first privacy',
    description:
      'Core calculations, string transforms, and formatting run directly in client memory so sensitive drafts and JSON payloads stay on your device.',
    icon: Lock,
  },
  {
    number: '02.',
    title: 'Fast, lightweight delivery',
    description:
      'Code-split tool modules and minimal runtime dependencies keep initial page loads lean and Core Web Vitals responsive on any connection.',
    icon: Zap,
  },
  {
    number: '03.',
    title: 'Permanent clean URLs',
    description:
      'Every utility lives at its own dedicated path with structured metadata, usage examples, and direct deep-link reliability across browser refreshes.',
    icon: Layers,
  },
  {
    number: '04.',
    title: 'Predictable, verifiable results',
    description:
      'Tools focus on deterministic outputs, transparent instructions, and accessible controls without cluttered popups or misleading indicators.',
    icon: ShieldCheck,
  },
];

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [directoryQuery, setDirectoryQuery] = useState('');

  const allTools = getAllTools();
  const popularTools = getPopularTools(8);

  const filteredTools = useMemo(() => {
    return searchTools(directoryQuery, selectedCategory);
  }, [directoryQuery, selectedCategory]);

  const filteredCategories = useMemo(() => {
    const q = directoryQuery.trim().toLowerCase();
    return CATEGORIES.filter((cat) => {
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
      if (!q) return true;
      return [cat.name, cat.description, ...cat.sampleToolNames].join(' ').toLowerCase().includes(q);
    });
  }, [directoryQuery, selectedCategory]);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: buildCanonicalUrl('/'),
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${buildCanonicalUrl('/tools/')}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <SeoHead
        title="UtilityFlow – Fast Browser-Based Online Utility Tools"
        description="Free, fast, privacy-first online utility tools for text analysis, developer formatting, calculators, PDFs, SEO checks, and image workflows."
        canonicalPath="/"
        keywords={[
          'online utility tools',
          'browser tools',
          'text tools',
          'developer tools',
          'online calculators',
          'pdf tools',
          'seo tools',
        ]}
        structuredData={[websiteSchema, buildFaqSchema(HOMEPAGE_FAQS)]}
      />

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50/80 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-medium text-indigo-600 mb-3">
              UtilityFlow Platform · 7 Core Categories · {allTools.length} Live Utilities
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Practical online utilities built for speed and privacy.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              {SITE_CONFIG.name} organizes 85 browser-first utilities plus free AI writing,
              summarization, and smart tool discovery across text, developer, calculator, social
              media, PDF, SEO, and image workflows.
            </p>

            <div className="mt-8">
              <ToolSearchBar />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 whitespace-nowrap shrink-0"
              >
                Explore Categories
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                to="/tools/"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 whitespace-nowrap shrink-0"
              >
                Open Full Directory
              </Link>
              <Link
                to="/ai-writing-assistant/"
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                AI Writing
              </Link>
              <Link
                to="/ai-text-summarizer/"
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 whitespace-nowrap shrink-0"
              >
                AI Summarizer
              </Link>
              <Link
                to="/ai-tool-finder/"
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 whitespace-nowrap shrink-0"
              >
                AI Tool Finder
              </Link>
            </div>
          </div>

          {/* 4-column Platform Metrics Strip */}
          <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-200 pt-8">
            <div>
              <dt className="text-xs text-slate-500">Tool Categories</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {CATEGORIES.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Browser Utilities</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {SITE_CONFIG.plannedTotalTools}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Live Tools</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {allTools.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Account Required</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">None</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Free AI Tools Spotlight Section */}
      <section
        id="ai-tools"
        aria-labelledby="ai-tools-heading"
        className="border-b border-slate-200 bg-slate-50/70 py-12 sm:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 mb-1">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Free AI Suite · Zero Login Required</span>
              </div>
              <h2 id="ai-tools-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Free AI Tools
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-slate-600">
                Improve drafts, summarize long documents, or find the right tool in seconds with
                zero sign-up.
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
            <h2 id="popular-tools-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Popular Tools
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600">
              Most-used everyday utilities across writing, development, and calculations.
            </p>
          </div>
          <Link
            to="/tools/"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline whitespace-nowrap shrink-0"
          >
            View tools directory
          </Link>
        </div>

        {popularTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-indigo-600 mb-1">
                Phase 0 · Platform Foundation Ready
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                Tool slots are initialized and awaiting Batch 1 rollout
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                The routing architecture, shared tool layout, central registry, and SEO pipeline
                are live. Popular tools will automatically populate here starting with Batch 1 (Text
                &amp; Writing Tools).
              </p>
            </div>
            <Link
              to="/category/text-writing-tools/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
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
        className="border-y border-slate-200 bg-slate-50/70 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 id="categories-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Tool Categories
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Seven specialized suites engineered to cover writing, coding, math, publishing,
              documents, search optimization, and media workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((category) => {
              const liveCount = allTools.filter((t) => t.categoryId === category.id).length;
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}/`}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all duration-150 hover:border-indigo-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                          <CategoryIcon name={category.iconName} className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium text-slate-500 tabular-nums">
                          Batch {category.batch} ·{' '}
                          {liveCount >= category.plannedToolCount
                            ? `${liveCount} live`
                            : `${liveCount}/${category.plannedToolCount} live`}
                        </span>
                      </div>
                      <ArrowRight
                        className="w-4 h-4 text-slate-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  <p className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 truncate">
                    Includes: {category.sampleToolNames.slice(0, 3).join(' · ')}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AdSlot slotId="directory-top" format="horizontal" />
      </div>

      {/* All Tools Directory Section */}
      <section
        id="directory"
        aria-labelledby="directory-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <h2 id="directory-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
              All Tools Directory
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600">
              Filter by category or keyword to jump directly to any live utility or category hub.
            </p>
          </div>

          <div className="w-full lg:w-80">
            <label htmlFor="directory-filter-input" className="sr-only">
              Filter directory
            </label>
            <input
              id="directory-filter-input"
              type="search"
              value={directoryQuery}
              onChange={(e) => setDirectoryQuery(e.target.value)}
              placeholder="Filter categories or tools..."
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter directory by category"
          className="flex items-center gap-1.5 overflow-x-auto rounded-lg bg-slate-100 p-1 mb-8"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
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
                {filteredCategories.map((category) => {
                  const categoryLiveTools = allTools.filter((t) => t.categoryId === category.id);
                  return (
                    <div
                      key={category.id}
                      className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <Link
                            to={`/category/${category.slug}/`}
                            className="inline-flex items-center gap-2 text-base font-bold text-slate-900 hover:text-indigo-700"
                          >
                            <CategoryIcon name={category.iconName} className="w-4 h-4 text-indigo-600" />
                            <span>{category.name}</span>
                          </Link>
                          <span className="text-xs font-mono text-slate-500 tabular-nums">
                            Batch {category.batch} · {categoryLiveTools.length}/{category.plannedToolCount}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">
                          Upcoming utilities: {category.sampleToolNames.join(', ')}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                        <span className="text-slate-500">
                          {categoryLiveTools.length === 0
                            ? `Scheduled in Batch ${category.batch}`
                            : `${categoryLiveTools.length} tools active`}
                        </span>
                        <Link
                          to={`/category/${category.slug}/`}
                          className="font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                          Open category page
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
                <p className="text-sm text-slate-600">
                  No categories or tools matched &ldquo;{directoryQuery}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDirectoryQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-sm font-semibold text-indigo-600 hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section
        aria-labelledby="why-choose-heading"
        className="border-y border-slate-200 bg-slate-50/60 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 id="why-choose-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Choose {SITE_CONFIG.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Engineered as a clean, reliable alternative to ad-heavy utility sites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.number}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-sm font-semibold text-indigo-600 tabular-nums">
                      {item.number}
                    </span>
                    <IconComponent className="w-5 h-5 text-slate-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
          <h2 id="home-faq-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Key details about how {SITE_CONFIG.name} operates and what to expect in upcoming batches.
          </p>
        </div>

        <FAQAccordion items={HOMEPAGE_FAQS} />
      </section>
    </>
  );
}

// Keep unused import guard clean if category lookup used in future edits
export { getCategoryById };
