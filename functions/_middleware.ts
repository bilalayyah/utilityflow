// functions/_middleware.ts — Cloudflare Pages Functions middleware
// (Audit Fix #2 soft 404s + Fix #15 trailing-slash redirect).
//
// - Unknown page paths get a real HTTP 404 status (SPA shell body, so the
//   client-side 404 page still renders) instead of the fallback's 200.
// - Known routes requested without a trailing slash 301 to the slash
//   version (except `/`). L-4: /admin/comments is a known route in both
//   forms, but the slash-less form 301s to /admin/comments/ like any
//   other known route.
// - The three known dead/guessed URLs 301 to their real pages here too:
//   _redirects carries the same rules, but whether _redirects or Functions
//   runs first is not guaranteed, so both layers redirect them.
// - Everything else passes through untouched: /api/*, /assets/*, files
//   with an extension, sitemap/robots/ads.txt, favicon, og-image.
// - L-14: /og/* is NOT a blind passthrough. Real images return 200; a
//   guessed /og/* path that Pages would serve the SPA fallback for
//   (text/html) gets a plain 404 instead, so crawlers never see a 200
//   for a non-existent OG image.
// - EXCEPTION: the Google/Yandex verification files are NOT passed
//   through. Cloudflare Pages always 308-redirects *.html URLs to the
//   extensionless URL (no setting disables it), and the extensionless
//   path then 404s — so these files can never return 200 as static
//   assets. The middleware serves their exact bytes directly instead:
//   a Function-served response bypasses Pages' static-asset routing
//   (and _redirects), so no 308 happens.

import { KNOWN_ROUTES } from './known-routes';

const PASSTHROUGH_PREFIXES = ['/api/', '/assets/', '/og/'];

const PASSTHROUGH_EXACT = new Set([
  '/sitemap.xml',
  '/robots.txt',
  '/ads.txt',
  '/favicon.svg',
  '/og-image.jpg',
]);

// Search-engine verification files — byte-identical to the files in
// public/ (same names). NO trailing newline on either file. Keep both in
// sync if the verification files ever change.
const VERIFICATION_FILES: Record<string, string> = {
  '/googlec9e8a7a2828e1238.html':
    'google-site-verification: googlec9e8a7a2828e1238.html',
  '/yandex_1e4f4374733f0a22.html':
    '<html>\n    <head>\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n    </head>\n    <body>Verification: 1e4f4374733f0a22</body>\n</html>',
};

// Same three redirects as public/_redirects (both slash forms).
const LEGACY_REDIRECTS: Record<string, string> = {
  '/privacy/': '/privacy-policy/',
  '/privacy': '/privacy-policy/',
  '/pdf-merger/': '/merge-pdf/',
  '/pdf-merger': '/merge-pdf/',
  '/categories/text-writing/': '/category/text-writing-tools/',
  '/categories/text-writing': '/category/text-writing-tools/',
};

interface MiddlewareContext {
  request: Request;
  next: () => Promise<Response>;
}

function hasFileExtension(pathname: string): boolean {
  const last = pathname.split('/').pop() ?? '';
  return last.includes('.');
}

function redirectTo(url: URL, pathname: string): Response {
  const target = new URL(url.toString());
  target.pathname = pathname;
  return Response.redirect(target.toString(), 301);
}

// M-1: dedicated 404 <head> for unknown paths. The SPA shell returned by
// context.next() is the HOME prerender, so its raw HTML carries the home
// title, `index, follow`, home canonical, hreflang links and home JSON-LD
// — all wrong on a 404 URL. Rewrite ONLY the <head>: swap in a 404 title /
// description / `noindex, follow`, and strip every SEO tag that points at
// the home page (canonical, hreflang, keywords, og:*, twitter:*, JSON-LD).
// The functional head tags are kept verbatim — theme inline script, fonts
// preconnect + stylesheet, AdSense script, gtag inline stub, entry module
// script, modulepreload links, CSS link — so the client-side 404 page
// still renders. No asset hashes are hardcoded: everything below is a
// targeted string replacement/removal on the shell HTML at runtime, so it
// survives rebuilds. Matching is attribute-order agnostic.
const NOT_FOUND_TITLE = 'Page Not Found (404) | UtilityFlow';
const NOT_FOUND_DESCRIPTION =
  "The page you're looking for doesn't exist or was moved. Browse all 88 free UtilityFlow tools instead.";

function rewrite404Head(html: string): string {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) return html;
  let head = headMatch[1];

  // Title: replace if present, otherwise insert at the top of <head>.
  const titleTag = `<title>${NOT_FOUND_TITLE}</title>`;
  if (/<title>[\s\S]*?<\/title>/i.test(head)) {
    head = head.replace(/<title>[\s\S]*?<\/title>/i, titleTag);
  } else {
    head = `${titleTag}\n    ${head}`;
  }

  // Description + robots: replace if present, otherwise insert after <title>.
  const descriptionTag = `<meta name="description" content="${NOT_FOUND_DESCRIPTION}" />`;
  if (/<meta[^>]*\bname="description"[^>]*>/i.test(head)) {
    head = head.replace(/<meta[^>]*\bname="description"[^>]*>/i, descriptionTag);
  } else {
    head = head.replace(/<\/title>/i, `</title>\n    ${descriptionTag}`);
  }
  const robotsTag = '<meta name="robots" content="noindex, follow" />';
  if (/<meta[^>]*\bname="robots"[^>]*>/i.test(head)) {
    head = head.replace(/<meta[^>]*\bname="robots"[^>]*>/i, robotsTag);
  } else {
    head = head.replace(/<\/title>/i, `</title>\n    ${robotsTag}`);
  }

  // Strip every SEO tag that belongs to the home page (no canonical at
  // all on a 404 — there is no /404/ page to point at).
  head = head.replace(/<link[^>]*\brel="canonical"[^>]*>/gi, '');
  head = head.replace(/<link[^>]*\brel="alternate"[^>]*>/gi, '');
  head = head.replace(/<meta[^>]*\bname="keywords"[^>]*>/gi, '');
  head = head.replace(/<meta[^>]*\bproperty="og:[^"]*"[^>]*>/gi, '');
  head = head.replace(/<meta[^>]*\bname="twitter:[^"]*"[^>]*>/gi, '');
  head = head.replace(/<script[^>]*\btype="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  const openTag = headMatch[0].slice(0, headMatch[0].indexOf(headMatch[1]));
  const start = headMatch.index!;
  return html.slice(0, start) + openTag + head + '</head>' + html.slice(start + headMatch[0].length);
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const { request } = context;
  const method = request.method.toUpperCase();
  if (method !== 'GET' && method !== 'HEAD') return context.next();

  const url = new URL(request.url);
  const pathname = url.pathname;

  // Verification files: serve exact bytes directly (see note above).
  const verification = VERIFICATION_FILES[pathname];
  if (verification !== undefined) {
    return new Response(verification, {
      status: 200,
      headers: { 'content-type': 'text/html; charset=UTF-8' },
    });
  }

  if (PASSTHROUGH_EXACT.has(pathname)) return context.next();

  // L-14: /og/* — real images pass through, guessed paths 404. Pages
  // serves the SPA fallback (text/html) for a missing /og/* file, so
  // check what context.next() actually returned: image/* means the
  // file exists, text/html means the fallback fired and the file does
  // not exist. No hardcoded file list — existence is decided by the
  // response content-type. /og-image.jpg (root) is unaffected: it is
  // in PASSTHROUGH_EXACT above and its path does not start with /og/.
  if (pathname.startsWith('/og/')) {
    const res = await context.next();
    const contentType = res.headers.get('content-type') ?? '';
    if (contentType.includes('text/html')) {
      return new Response('Not Found', {
        status: 404,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'no-store',
        },
      });
    }
    return res;
  }

  if (PASSTHROUGH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return context.next();
  }
  if (hasFileExtension(pathname)) return context.next();

  const legacy = LEGACY_REDIRECTS[pathname];
  if (legacy) return redirectTo(url, legacy);

  // Known route without trailing slash -> 301 to the slash version.
  // Runs BEFORE the KNOWN_ROUTES passthrough below: '/admin/comments'
  // is itself a known route (both forms are listed), so the passthrough
  // would swallow it before this check ever ran (L-4). The only other
  // slash-less known route is '/', which is excluded here.
  if (
    pathname !== '/' &&
    !pathname.endsWith('/') &&
    KNOWN_ROUTES.has(`${pathname}/`)
  ) {
    return redirectTo(url, `${pathname}/`);
  }

  if (KNOWN_ROUTES.has(pathname)) return context.next();

  // Unknown path: serve the SPA shell with a real 404 status (and don't
  // let edge caches keep the 404 around). The shell's <head> is rewritten
  // to a dedicated 404 head (M-1) so crawlers never see the home page's
  // SEO tags on a 404 URL; the functional head tags stay verbatim so the
  // client-side 404 page still renders. The rewritten body differs in
  // length, so drop the shell's stale content-length header.
  const res = await context.next();
  const headers = new Headers(res.headers);
  headers.set('cache-control', 'no-store');
  headers.delete('content-length');
  const shell = await res.text();
  return new Response(rewrite404Head(shell), { status: 404, headers });
}
