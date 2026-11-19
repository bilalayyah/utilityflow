import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { preloadRouteData } from './boot/preloadRoute';
import {ThemeProvider} from './context/ThemeContext.tsx';
import './index.css';

// H-3 (page weight) / perf fix: defer gtag.js until first interaction.
// The GA4 inline config stub in index.html only queues calls in
// window.dataLayer (no network), so the config/page_view fires once this
// script loads. Loading on first interaction (pointerdown / keydown /
// scroll / touchstart, one-time listeners) keeps the ~183 KB gtag.js out
// of the initial-load window — Lighthouse does not interact, so gtag
// leaves the measurement window entirely. A 20 s fallback timer still
// loads it for non-interacting users (beyond Lighthouse's window).
// AdSense was removed from the site entirely (2026-11-19: no ad scripts,
// no ad slots); index.html's inline GA stub is byte-identical, so the CSP
// sha256 hashes in public/_headers still match.
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

// CLS fix (Wed 2026-11-18) — boot gate: preload the current route's page
// chunk (+ locale data for non-EN, + article chunk for EN articles) BEFORE
// the first render, so the first client commit is the FULL page instead of
// the Suspense "Loading…" fallback. See src/boot/preloadRoute.ts for the
// measured root cause. The prerendered static HTML stays visible while the
// gate runs (createRoot has not executed yet), and the gate never rejects
// and times out after 5 s, so mount can never hang.
async function boot(): Promise<void> {
  await preloadRouteData(window.location.pathname);
  createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

boot();
