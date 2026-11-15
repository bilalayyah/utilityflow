import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider} from './context/ThemeContext.tsx';
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

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
