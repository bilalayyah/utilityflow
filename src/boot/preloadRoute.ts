/**
 * Boot gate (CLS fix, Wed 2026-11-18) — preload the current route's data
 * BEFORE the first React render, so the first client commit is the FULL
 * page instead of a loading state.
 *
 * Root cause (measured with an independent Playwright probe — Lighthouse
 * misses this shift on fast loads): src/main.tsx uses createRoot(), which
 * DISCARDS the prerendered static <main> on mount. Two async loads then
 * emptied the first render: (1) non-EN locales — LocaleProvider renders
 * a full-viewport "Loading…" fallback until its chunk arrives; (2) EN
 * articles — ArticlePage renders a loading placeholder until its
 * per-article chunk arrives (that swap measured a 0.381 grid shift).
 * The gate awaits both before rendering, and the two initializers read
 * the preloaded data synchronously (LocaleContext reads the store,
 * ArticlePage reads the loader cache), so the first commit is complete.
 *
 * NOTE — the route's PAGE chunk is deliberately NOT awaited here. The
 * first version of this gate tried that (preloading HomePage etc. before
 * render), and the probe proved it does NOT work: React.lazy() ALWAYS
 * suspends on its first render attempt — its import promise resolves
 * asynchronously even when the module is already cached — so the
 * Suspense fallback still paints for a frame. The real fix for the
 * page-level collapse (CLS 0.42) was removing React.lazy() from
 * src/App.tsx: the 16 pages are statically imported, so the first
 * commit renders the full page. See docs in cls-fix-report.md.
 *
 * The prerendered static HTML stays visible while the gate runs
 * (createRoot has not executed yet). Every await is raced against a
 * 5 s timeout so a slow or hung fetch can never block mount forever;
 * on timeout/failure we render anyway (the loading states return, but
 * nothing breaks).
 */
import { getLocaleFromPath } from '../locales/config';
import { loadLocaleData } from '../locales/loader';
import { setActiveLocaleData } from '../locales/store';
import { getBlogArticleBySlug } from '../registry/blogArticleMeta';
import { loadBlogArticleById } from '../registry/blogArticleLoader';

const BOOT_TIMEOUT_MS = 5000;

/**
 * Preload everything the first render needs for `pathname`, then resolve.
 * Never rejects: every task swallows its own failure, and the whole gate
 * is raced against BOOT_TIMEOUT_MS.
 */
export async function preloadRouteData(pathname: string): Promise<void> {
  const { locale, restPath } = getLocaleFromPath(pathname);
  const tasks: Array<Promise<unknown>> = [];
  if (locale !== 'en') {
    tasks.push(
      loadLocaleData(locale).then(setActiveLocaleData).catch(() => undefined)
    );
  }
  if (locale === 'en') {
    const articleSlugMatch = /^\/blog\/([^/]+)\/?$/.exec(restPath);
    if (articleSlugMatch) {
      const article = getBlogArticleBySlug(articleSlugMatch[1], locale);
      if (article) {
        tasks.push(loadBlogArticleById(article.id).catch(() => undefined));
      }
    }
  }
  if (tasks.length === 0) return;
  await Promise.race([
    Promise.allSettled(tasks),
    new Promise((resolve) => setTimeout(resolve, BOOT_TIMEOUT_MS)),
  ]);
}
