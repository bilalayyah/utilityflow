import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider} from './context/ThemeContext.tsx';
import { getLocaleFromPath } from './locales/config.ts';
import { getBlogArticleBySlug } from './registry/blogArticleMeta';
import { loadBlogArticleById } from './registry/blogArticleLoader';
import './index.css';

// H-3 (page weight) / perf fix: defer gtag.js until first interaction.
// The GA4 inline config stub in index.html only queues calls in
// window.dataLayer (no network), so the config/page_view fires once this
// script loads. Loading on first interaction (pointerdown / keydown /
// scroll / touchstart, one-time listeners) keeps the ~183 KB gtag.js out
// of the initial-load window — Lighthouse does not interact, so gtag
// leaves the measurement window entirely. A 20 s fallback timer still
// loads it for non-interacting users (beyond Lighthouse's window). The
// AdSense script is untouched, and index.html's inline GA stub is
// byte-identical, so the CSP sha256 hashes in public/_headers still match.
const GTAG_SRC = 'https://www.googletagmanager.com/gtag/js?id=G-EEF32XG70M';
let gtagLoading = false;
function loadGtag(): void {
  if (gtagLoading) return;
  gtagLoading = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = GTAG_SRC;
  document.head.appendChild(script);
}
function scheduleGtagLoad(): void {
  const events: Array<keyof WindowEventMap> = [
    'pointerdown',
    'keydown',
    'scroll',
    'touchstart',
  ];
  for (const event of events) {
    window.addEventListener(event, loadGtag, { once: true, passive: true });
  }
  // Fallback for users who never interact: still track them eventually,
  // 20 s in — beyond Lighthouse's measurement window.
  setTimeout(loadGtag, 20000);
}
scheduleGtagLoad();

// Article pages: start downloading ONLY this article's per-article
// chunk during initial load (registry split, perf fix Wed 2026-11-18).
// The chunk is NOT in the entry bundle — it loads on demand when
// ArticlePage renders — but starting the fetch here means it is usually
// already in the module cache by the time the article renders, so the
// body appears without a visible delay. Only article routes pay this
// cost (and only ~5 KB gz per article, not the old 1.25 MB gz registry);
// every other page skips it. The article id resolves from the URL slug
// via the slim index (already in the entry chunk), so this adds no new
// dependency. Non-EN article routes resolve no EN slug — they skip the
// preload, which is correct: non-EN bodies come from the locale chunk,
// never from the EN per-article chunk. If the slug does not resolve to
// an article, the preload is skipped. The .catch() swallows the (benign)
// failure if the chunk cannot load — ArticlePage shows its own
// loading/error state instead.
const pathname = window.location.pathname;
const { locale: pathLocale, restPath } = getLocaleFromPath(pathname);
const articleSlugMatch = /^\/blog\/([^/]+)\/?$/.exec(restPath);
if (articleSlugMatch) {
  const article = getBlogArticleBySlug(articleSlugMatch[1], pathLocale);
  if (article) {
    loadBlogArticleById(article.id).catch(() => {});
  }
}

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
