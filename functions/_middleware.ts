// functions/_middleware.ts — Cloudflare Pages Functions middleware
// (Audit Fix #2 soft 404s + Fix #15 trailing-slash redirect).
//
// - Unknown page paths get a real HTTP 404 status (SPA shell body, so the
//   client-side 404 page still renders) instead of the fallback's 200.
// - Known routes requested without a trailing slash 301 to the slash
//   version (except `/` and `/admin/comments`, which is slash-less by design).
// - The three known dead/guessed URLs 301 to their real pages here too:
//   _redirects carries the same rules, but whether _redirects or Functions
//   runs first is not guaranteed, so both layers redirect them.
// - Everything else passes through untouched: /api/*, /assets/*, /og/*,
//   files with an extension, sitemap/robots/ads.txt, favicon, og-image.
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
  if (PASSTHROUGH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return context.next();
  }
  if (hasFileExtension(pathname)) return context.next();

  const legacy = LEGACY_REDIRECTS[pathname];
  if (legacy) return redirectTo(url, legacy);

  if (KNOWN_ROUTES.has(pathname)) return context.next();

  // Known route without trailing slash -> 301 to the slash version.
  if (
    pathname !== '/' &&
    pathname !== '/admin/comments' &&
    !pathname.endsWith('/') &&
    KNOWN_ROUTES.has(`${pathname}/`)
  ) {
    return redirectTo(url, `${pathname}/`);
  }

  // Unknown path: serve the SPA shell with a real 404 status (and don't
  // let edge caches keep the 404 around).
  const res = await context.next();
  const headers = new Headers(res.headers);
  headers.set('cache-control', 'no-store');
  return new Response(res.body, { status: 404, headers });
}
