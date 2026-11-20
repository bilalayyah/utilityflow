import { ArrowLeft, ArrowRight, Check, Link2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { buildCanonicalUrl } from '../config/site';
import { getBlogImageUrl } from '../config/ogImages';
import { useLocale } from '../locales/LocaleContext';
import {
  getCachedLocalizedArticle,
  loadLocalizedArticleById,
} from '../locales/articleLoader';
import {
  articleHref,
  blogCategoryHref,
  blogHref,
  localeTag,
  localizeStaticPath,
  SUPPORTED_LOCALES,
  toolHref,
} from '../locales/config';
import {
  toHreflangEntries,
  type LocaleAlternatePaths,
} from '../locales/routes';
import {
  getLocalizedCategory,
  getLocalizedTool,
  getToolById,
} from '../locales/tools';
import { formatString } from '../locales/ui';
import {
  getBlogArticleBySlug,
  getBlogArticlePrevNext,
  getBlogArticleUrl,
  getBlogArticleVersion,
  getBlogHomeUrl,
} from '../registry/blogArticleMeta';
import { getCachedArticleById, loadBlogArticleById } from '../registry/blogArticleLoader';
import type { BlogArticleLocaleVersion } from '../types/blog';
import type { ArticleLocaleOverride } from '../locales/types';
import type { BreadcrumbItem, ToolDefinition, ToolFAQ } from '../types/tool';
import { ArticleTOC, extractHeadingsFromBody } from '../components/blog/ArticleTOC';
import { AuthorProfileModal } from '../components/blog/AuthorProfileModal';
import { RelatedArticles } from '../components/blog/RelatedArticles';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { FAQAccordion, buildFaqSchema } from '../components/common/FAQAccordion';
import { SeoHead } from '../components/seo/SeoHead';
import { RelatedTools } from '../components/tool/RelatedTools';
import { ToolCard } from '../components/tool/ToolCard';
import { pastelForKey } from '../components/tool/pastel';
import { NotFoundPage } from './NotFoundPage';

/** First <p> of the body as plain text, for the lede paragraph. */
function extractFirstParagraph(body: string): string | undefined {
  const match = /<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(body);
  if (!match) return undefined;
  const text = match[1].replace(/<[^>]*>/g, '').trim();
  return text === '' ? undefined : text;
}

export function ArticlePage() {
  const { locale, t } = useLocale();
  const { articleSlug = '' } = useParams<{ articleSlug: string }>();
  // Declared before the early returns below so hook order stays stable.
  const [copied, setCopied] = useState(false);
  const [authorModalOpen, setAuthorModalOpen] = useState(false);

  // Slim meta record (id, slugs, titles — no bodies). Resolves
  // synchronously from the generated index, so routing, the page shell
  // and hreflang never wait on the full article data (Phase 5).
  const article = getBlogArticleBySlug(articleSlug, locale);

  // Full version (body + FAQs) — loaded on demand from the article's
  // own per-article chunk, which is ~5 KB gz instead of the full
  // registry / locale chunk. EN: src/registry/articles/<id>.ts (via
  // blogArticleLoader, registry split, perf fix Wed 2026-11-18).
  // Non-EN: src/locales/<code>/articles/<id>.ts (via articleLoader,
  // audit #6 — the locale chunk carries only the SLIM overrides now,
  // so the full version needs its own fetch, mirroring EN).
  // CLS fix (Wed 2026-11-18): when the boot gate (src/boot/preloadRoute.ts)
  // already loaded this article's chunk, start with the full version so
  // the first render has the body — no loading placeholder, no
  // placeholder -> body swap (that swap measured a 0.381 grid shift).
  const [enFull, setEnFull] = useState<BlogArticleLocaleVersion | null>(() =>
    locale === 'en' && article ? getCachedArticleById(article.id) : null
  );
  const [enFullFailed, setEnFullFailed] = useState(false);
  const [enFullRetry, setEnFullRetry] = useState(0);
  useEffect(() => {
    if (locale !== 'en' || !article) return;
    const cached = getCachedArticleById(article.id);
    if (cached) {
      // Already loaded (boot gate preloaded it): adopt it WITHOUT
      // resetting to null first — the first render already has the body.
      // setEnFull with the identical reference is a no-op re-render.
      setEnFull(cached);
      return;
    }
    let cancelled = false;
    setEnFull(null);
    setEnFullFailed(false);
    loadBlogArticleById(article.id)
      .then((version) => {
        if (cancelled) return;
        setEnFull(version);
      })
      .catch(() => {
        if (!cancelled) setEnFullFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [locale, article?.id, enFullRetry]);

  // Non-EN full version — mirrors enFull exactly (audit #6).
  const [localeFull, setLocaleFull] = useState<ArticleLocaleOverride | null>(() =>
    locale !== 'en' && article ? getCachedLocalizedArticle(locale, article.id) : null
  );
  const [localeFullFailed, setLocaleFullFailed] = useState(false);
  const [localeFullRetry, setLocaleFullRetry] = useState(0);
  useEffect(() => {
    if (locale === 'en' || !article) return;
    const cached = getCachedLocalizedArticle(locale, article.id);
    if (cached) {
      setLocaleFull(cached);
      return;
    }
    let cancelled = false;
    setLocaleFull(null);
    setLocaleFullFailed(false);
    loadLocalizedArticleById(locale, article.id)
      .then((version) => {
        if (cancelled) return;
        setLocaleFull(version);
      })
      .catch(() => {
        if (!cancelled) setLocaleFullFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [locale, article?.id, localeFullRetry]);

  /** Either full-version load failed (EN or localized). */
  const fullFailed = locale === 'en' ? enFullFailed : localeFullFailed;

  if (!article) {
    // The article exists in English but has no version in this locale:
    // the route exists, the translation does not — show a notice, not a 404.
    const englishArticle =
      locale === 'en'
        ? undefined
        : getBlogArticleBySlug(articleSlug, 'en');
    if (!englishArticle) {
      return <NotFoundPage />;
    }
    return (
      <>
        <SeoHead
          title={englishArticle.en.title}
          description={englishArticle.en.description}
          canonicalPath={articleHref(englishArticle.en.slug, 'en')}
          noIndex
        />
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
            {englishArticle.en.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
            {t.blog.notAvailableInLanguage}
          </p>
          <p className="mt-6">
            <Link
              to={getBlogHomeUrl(locale)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E8A66] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0B7557]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              {t.blog.backToBlog}
            </Link>
          </p>
        </div>
      </>
    );
  }

  // Full version: EN loads async (enFull); other locales load async
  // too (localeFull, audit #6 — the locale chunk no longer carries
  // bodies). `version` is null only while the body chunk is still
  // loading (or failed to load — see fullFailed). While it is null the
  // page renders its shell (H1, lede, breadcrumbs) from the meta record
  // and the slim locale version; the body, FAQs and TOC appear once the
  // chunk arrives.
  const version: BlogArticleLocaleVersion | ArticleLocaleOverride | null =
    locale === 'en' ? enFull : localeFull;
  const isLoadingBody = version === null && !fullFailed;

  // No version and not (still loading / failed): the article has no
  // version in this locale — show the notice. Unreachable via
  // getBlogArticleBySlug (it only matches when a version exists), but
  // guard anyway.
  if (!version && !isLoadingBody && !fullFailed) {
    return (
      <>
        <SeoHead
          title={article.en.title}
          description={article.en.description}
          canonicalPath={articleHref(article.en.slug, 'en')}
          noIndex
        />
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F1F5F9]">
            {article.en.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
            {t.blog.notAvailableInLanguage}
          </p>
          <p className="mt-6">
            <Link
              to={getBlogHomeUrl(locale)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E8A66] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0B7557]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              {t.blog.backToBlog}
            </Link>
          </p>
        </div>
      </>
    );
  }

  // Cross-locale slug guard: a stale or English slug under /<locale>/
  // redirects to the correct localized article URL. Skipped while the
  // EN body is still loading (version not yet known).
  if (version && version.slug !== articleSlug) {
    return <Navigate to={articleHref(version.slug, locale)} replace />;
  }

  const category = getLocalizedCategory(article.categoryId, locale);
  const canonicalPath = articleHref(version?.slug ?? article.en.slug, locale);
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  // Per-article OG image (article-images batch): one branded card per
  // published (article, locale). The file is generated by
  // scripts/generate-blog-images.py; the URL is derived by convention
  // (see getBlogImageUrl). The two not-yet-translated branches above keep
  // SeoHead's default generic image (no ogImage prop passed there).
  const blogImageUrl = getBlogImageUrl(article.id, locale);
  const headings = version ? extractHeadingsFromBody(version.body) : [];
  const lede = version
    ? extractFirstParagraph(version.body) ?? version.description
    : article.en.description;
  const dateTag = localeTag(locale);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    dateTag,
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
  const updatedDate = article.updatedAt
    ? new Date(article.updatedAt).toLocaleDateString(dateTag, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : undefined;

  // Hreflang alternates — only locales where the article is published.
  const alternates: LocaleAlternatePaths = {};
  for (const info of SUPPORTED_LOCALES) {
    const url = getBlogArticleUrl(article, info.code);
    if (url) alternates[info.code] = url;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.blog, href: blogHref(locale) },
    ...(category
      ? [
          {
            label: category.name,
            href: blogCategoryHref(category.id, locale),
          },
        ]
      : []),
    { label: version?.title ?? article.en.title },
  ];

  // Visible breadcrumb trail (uf-06 mockup): Home / Blog / Category — the
  // article title stays in the JSON-LD schema above, not in the trail.
  const visibleBreadcrumbs: BreadcrumbItem[] = breadcrumbs.slice(
    0,
    category ? 3 : 2
  );

  const blogPostingSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: version?.title ?? article.en.title,
    description: version?.description ?? article.en.description,
    inLanguage: localeTag(locale),
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    author: { '@type': 'Organization', name: 'UtilityFlow' },
    mainEntityOfPage: canonicalUrl,
    image: blogImageUrl,
  };

  const faqs: ToolFAQ[] = version
    ? (version.faqs ?? []).map((faq) => ({
        question: faq.q,
        answer: faq.a,
      }))
    : [];

  const structuredData: Array<Record<string, unknown>> = [
    blogPostingSchema,
    buildBreadcrumbSchema(breadcrumbs),
    ...(faqs.length > 0 ? [buildFaqSchema(faqs)] : []),
  ];

  const primaryTool = getToolById(article.toolId);
  const localizedPrimaryTool = primaryTool
    ? getLocalizedTool(primaryTool, locale)
    : undefined;
  const relatedTools = article.relatedToolIds
    .map((id) => getToolById(id))
    .filter(
      (tool): tool is ToolDefinition =>
        tool !== undefined && tool.id !== article.toolId
    );

  const { prev, next } = getBlogArticlePrevNext(article, locale);
  const prevVersion = prev ? getBlogArticleVersion(prev, locale) : undefined;
  const nextVersion = next ? getBlogArticleVersion(next, locale) : undefined;
  const ctaPalette = pastelForKey(`blog:${article.id}`);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the link is
      // still shown in the address bar; stay silent rather than erroring.
    }
  };

  const shareTitle = version?.title ?? article.en.title;
  const shareXUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    canonicalUrl
  )}&text=${encodeURIComponent(shareTitle)}`;
  const shareFacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    canonicalUrl
  )}`;
  const shareWhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    `${shareTitle} ${canonicalUrl}`
  )}`;
  const shareLinkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    canonicalUrl
  )}`;
  const shareTelegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
    canonicalUrl
  )}&text=${encodeURIComponent(shareTitle)}`;
  const shareEmailUrl = `mailto:?subject=${encodeURIComponent(
    shareTitle
  )}&body=${encodeURIComponent(canonicalUrl)}`;

  return (
    <>
      <SeoHead
        title={version?.title ?? article.en.title}
        description={version?.description ?? article.en.description}
        canonicalPath={canonicalPath}
        ogType="article"
        ogImage={blogImageUrl}
        structuredData={structuredData}
        alternates={toHreflangEntries(alternates)}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Breadcrumbs items={visibleBreadcrumbs} className="mb-6" />

        <header className="max-w-3xl mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#86868B] dark:text-[#94A3B8]">
            Blog Article
          </p>
          {category && (
            <p className="mb-3">
              <Link
                to={blogCategoryHref(category.id, locale)}
                className="rounded-full bg-[#E7F3EE] px-2.5 py-0.5 text-xs font-semibold text-[#0B7A59] transition-colors hover:text-[#0A6B4E] dark:bg-[rgba(16,185,129,.14)] dark:text-[#34D399] dark:hover:text-[#6EE7B7]"
              >
                {category.name}
              </Link>
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] text-balance dark:text-[#F1F5F9]">
            {version?.title ?? article.en.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
            {lede}
          </p>
          <p className="mt-3 text-sm text-[#6E6E73] dark:text-[#CBD5E1]">
            By{' '}
            <button
              type="button"
              onClick={() => setAuthorModalOpen(true)}
              className="cursor-pointer font-semibold text-[#1D1D1F] underline-offset-4 hover:text-[#0B7A59] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] dark:text-[#F1F5F9] dark:hover:text-[#34D399]"
            >
              Bilal Asghar
            </button>
            {' · '}
            {publishedDate}
            {updatedDate && (
              <>
                {' · '}
                {formatString(t.blog.updatedOn, { date: updatedDate })}
              </>
            )}
            {' · '}
            {formatString(t.blog.readingTime, { minutes: version?.readingMinutes ?? article.en.readingMinutes })}
          </p>
        </header>

        <img
          src={blogImageUrl}
          alt={version?.title ?? article.en.title}
          className="mb-10 aspect-[1200/630] w-full rounded-2xl border border-[#E5E5EA] object-cover shadow-sm dark:border-[#243247]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            {version ? (
              <article
                className="text-[#3A3A3C] dark:text-[#CBD5E1] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#1D1D1F] [&_h2]:dark:text-[#F1F5F9] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1D1D1F] [&_h3]:dark:text-[#F1F5F9] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2 [&_a]:text-[#0B7A59] [&_a]:dark:text-[#34D399] [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-[#0A6B4E] [&_a:hover]:dark:text-[#6EE7B7] [&_strong]:font-semibold [&_strong]:text-[#1D1D1F] [&_strong]:dark:text-[#F1F5F9] [&_code]:rounded [&_code]:bg-[#F5F5F7] [&_code]:dark:bg-[#182239] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-[#1D1D1F] [&_code]:dark:text-[#F1F5F9]"
                dangerouslySetInnerHTML={{ __html: version.body }}
              />
            ) : fullFailed ? (
              <div
                role="alert"
                className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center dark:border-rose-500/40 dark:bg-rose-500/10"
              >
                <p className="text-sm leading-relaxed text-red-800 dark:text-rose-200">
                  The article body could not be loaded. Please check your
                  connection and try again.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    locale === 'en'
                      ? setEnFullRetry((n) => n + 1)
                      : setLocaleFullRetry((n) => n + 1)
                  }
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
                >
                  {t.common.tryAgain}
                </button>
              </div>
            ) : (
              <div
                aria-busy="true"
                aria-live="polite"
                style={{ minHeight: article.en.readingMinutes * 2800 }}
                className="rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF] p-6 text-center text-sm text-[#6E6E73] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#CBD5E1]"
              >
                {t.common.loading}
              </div>
            )}

            {faqs.length > 0 && (
              <section aria-labelledby="article-faq-heading">
                <h2
                  id="article-faq-heading"
                  className="text-2xl font-bold text-[#1D1D1F] mb-4 dark:text-[#F1F5F9]"
                >
                  {t.toolPage.faqs}
                </h2>
                <FAQAccordion items={faqs} />
              </section>
            )}

            {localizedPrimaryTool && (
              <section
                aria-labelledby="article-cta-heading"
                className={`rounded-2xl ${ctaPalette.card} p-6 shadow-sm`}
              >
                <h2
                  id="article-cta-heading"
                  className="text-xl font-bold text-[#1D1D1F] dark:text-[#F1F5F9]"
                >
                  {localizedPrimaryTool.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
                  {localizedPrimaryTool.shortDescription}
                </p>
                <p className="mt-4">
                  <Link
                    to={toolHref(localizedPrimaryTool.slug, locale)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0E8A66] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0B7557]"
                  >
                    {t.blog.tryTool}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </p>
              </section>
            )}

            <div className="space-y-12">
              <RelatedArticles article={article} locale={locale} />

              {relatedTools.length > 0 && (
                <section aria-labelledby="article-related-tools-heading">
                  <h2
                    id="article-related-tools-heading"
                    className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-5 dark:text-[#F1F5F9]"
                  >
                    {t.blog.relatedTools}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedTools.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {(prevVersion || nextVersion) && (
              <nav
                aria-label={t.blog.relatedArticles}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-[#E5E5EA] dark:border-[#243247]"
              >
                {prevVersion && prev ? (
                  <Link
                    to={articleHref(prevVersion.slug, locale)}
                    className="rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#243247] dark:bg-[#131D31]"
                  >
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#6E6E73] dark:text-[#CBD5E1]">
                      <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                      {t.blog.prevArticle}
                    </span>
                    <span className="mt-1.5 block text-sm font-semibold text-[#1D1D1F] dark:text-[#F1F5F9]">
                      {prevVersion.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {nextVersion && next ? (
                  <Link
                    to={articleHref(nextVersion.slug, locale)}
                    className="rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF] p-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#243247] dark:bg-[#131D31]"
                  >
                    <span className="flex items-center justify-end gap-1.5 text-xs font-semibold text-[#6E6E73] dark:text-[#CBD5E1]">
                      {t.blog.nextArticle}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span className="mt-1.5 block text-sm font-semibold text-[#1D1D1F] dark:text-[#F1F5F9]">
                      {nextVersion.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            )}

            <section
              aria-labelledby="article-share-heading"
              className="pt-10 border-t border-[#E5E5EA] dark:border-[#243247]"
            >
              <h2
                id="article-share-heading"
                className="text-xl font-bold text-[#1D1D1F] mb-4 dark:text-[#F1F5F9]"
              >
                {t.blog.share}
              </h2>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:border-[#BFE3D3] hover:text-[#0B7A59] cursor-pointer dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#0E8A66]" aria-hidden="true" />
                  ) : (
                    <Link2 className="w-4 h-4" aria-hidden="true" />
                  )}
                  {copied ? t.common.copied : t.common.copy}
                </button>
                <a
                  href={shareXUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
                >
                  X
                </a>
                <a
                  href={shareFacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
                >
                  Facebook
                </a>
                <a
                  href={shareWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
                >
                  WhatsApp
                </a>
                <a
                  href={shareLinkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
                >
                  LinkedIn
                </a>
                <a
                  href={shareTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
                >
                  Telegram
                </a>
                <a
                  href={shareEmailUrl}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5EA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#1D1D1F] shadow-sm transition-colors hover:border-[#BFE3D3] hover:text-[#0B7A59] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
                >
                  Email
                </a>
              </div>
            </section>
          </div>

          <aside className="order-first lg:order-last lg:col-span-4">
            <div className="lg:sticky lg:top-6">
              <ArticleTOC headings={headings} />
            </div>
          </aside>
        </div>

        {primaryTool && (
          <div className="mt-12">
            <RelatedTools tool={primaryTool} />
          </div>
        )}

        <p className="mt-12">
          <Link
            to={blogHref(locale)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B7A59] hover:text-[#0A6B4E] underline-offset-4 hover:underline dark:text-[#34D399] dark:hover:text-[#6EE7B7]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t.blog.backToBlog}
          </Link>
        </p>
      </div>

      <AuthorProfileModal
        open={authorModalOpen}
        onClose={() => setAuthorModalOpen(false)}
      />
    </>
  );
}
