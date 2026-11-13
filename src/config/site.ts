export const SITE_CONFIG = {
  name: 'UtilityFlow',
  tagline: 'Fast, browser-first online utilities with zero sign-up.',
  description:
    'Free, fast, privacy-first online utility tools for text analysis, developer formatting, calculators, PDFs, SEO checks, and image workflows.',
  contactEmail: 'hello@utilityflow.online',
  defaultOrigin: 'https://utilityflow.online',
  plannedTotalTools: 85,
  totalBatches: 7,
} as const;

export const STATIC_ROUTES = [
  { path: '/', label: 'Home', changefreq: 'weekly', priority: '1.0' },
  { path: '/tools/', label: 'All Tools', changefreq: 'weekly', priority: '0.9' },
  { path: '/about/', label: 'About', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact/', label: 'Contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy-policy/', label: 'Privacy Policy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms-of-service/', label: 'Terms of Service', changefreq: 'yearly', priority: '0.4' },
] as const;

export const NAV_LINKS = [
  { label: 'Tools', to: '/tools/' },
  { label: 'Categories', to: '/#categories' },
  { label: 'AI Tools', to: '/#ai-tools' },
  { label: 'About', to: '/about/' },
  { label: 'Contact', to: '/contact/' },
] as const;

export function getCanonicalOrigin(): string {
  const envUrl =
    typeof import.meta !== 'undefined' &&
    import.meta.env &&
    typeof import.meta.env.VITE_SITE_URL === 'string' &&
    import.meta.env.VITE_SITE_URL.trim() !== ''
      ? import.meta.env.VITE_SITE_URL.trim().replace(/\/+$/, '')
      : '';

  return envUrl || SITE_CONFIG.defaultOrigin;
}

export function normalizeCanonicalPath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const cleaned = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

export function buildCanonicalUrl(pathname: string, origin?: string): string {
  const base = (origin || getCanonicalOrigin()).replace(/\/+$/, '');
  return `${base}${normalizeCanonicalPath(pathname)}`;
}
