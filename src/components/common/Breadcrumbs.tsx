import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildCanonicalUrl } from '../../config/site';
import type { BreadcrumbItem } from '../../types/tool';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
      };
      if (item.href) {
        entry.item = buildCanonicalUrl(item.href);
      }
      return entry;
    }),
  };
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-slate-500 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-indigo-700 transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-slate-900 font-medium' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
