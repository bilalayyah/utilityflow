import { useLocale } from '../../locales/LocaleContext';

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Extract H2/H3 headings from an article body HTML string.
 * Only headings carrying an `id` attribute are included — the anchor link
 * must point at a real in-page target. Batch 3 bodies carry ids on every
 * heading; bodies without ids simply yield no TOC entries.
 */
export function extractHeadingsFromBody(body: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const pattern = /<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(body)) !== null) {
    const level = Number(match[1]) as 2 | 3;
    const attrs = match[2];
    const idMatch =
      /id="([^"]+)"/i.exec(attrs) ?? /id='([^']+)'/i.exec(attrs);
    if (!idMatch) continue;
    const text = match[3]
      .replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    if (!text) continue;
    headings.push({ id: idMatch[1], text, level });
  }
  return headings;
}

interface ArticleTOCProps {
  headings: TocHeading[];
}

export function ArticleTOC({ headings }: ArticleTOCProps) {
  const { t } = useLocale();

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label={t.blog.tableOfContents}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-base font-bold text-slate-900">
        {t.blog.tableOfContents}
      </h2>
      <ul className="mt-3 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${heading.id}`}
              className="text-sm leading-snug text-slate-600 transition-colors hover:text-indigo-700 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
