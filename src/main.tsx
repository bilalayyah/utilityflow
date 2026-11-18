import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider} from './context/ThemeContext.tsx';
import { SUPPORTED_LOCALES } from './locales/config.ts';
import './index.css';

// H-3 (page weight): defer gtag.js until after LCP. The GA4 inline config
// stub in index.html only queues calls in window.dataLayer (no network),
// so the config/page_view fires once this script loads. Loading here —
// after first paint via requestIdleCallback, with load-event and timeout
// fallbacks — keeps the ~183 KB gtag.js off the critical path. The AdSense
// script is untouched, and index.html's inline GA stub is byte-identical,
// so the CSP sha256 hashes in public/_headers still match.
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
  const ric = (
    window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    }
  ).requestIdleCallback;
  if (typeof ric === 'function') {
    ric(loadGtag, { timeout: 3000 });
  } else if (document.readyState === 'complete') {
    setTimeout(loadGtag, 0);
  } else {
    window.addEventListener('load', loadGtag, { once: true });
    setTimeout(loadGtag, 3000);
  }
}
scheduleGtagLoad();

// Article pages: start downloading the full EN registry chunk during
// initial load (Phase 5). It is NOT in the entry bundle — it loads on
// demand when ArticlePage renders — but starting the fetch here means
// the chunk is usually already in the module cache by the time the
// article renders, so the body appears without a visible delay. Only
// article routes pay this cost; every other page skips it. The
// .catch() swallows the (benign) failure if the chunk cannot load —
// ArticlePage shows its own loading/error state instead.
const pathname = window.location.pathname;
const isArticleRoute =
  pathname.startsWith('/blog/') ||
  SUPPORTED_LOCALES.some((info) =>
    pathname.startsWith(`${info.pathPrefix}/blog/`)
  );
if (isArticleRoute) {
  import('./registry/blogArticles').catch(() => {});
}

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
