import { Link } from 'react-router-dom';
import { useLocale } from '../../locales/LocaleContext';
import { categoryHref } from '../../locales/config';
import { getLocalizedCategory } from '../../locales/tools';
import { formatString } from '../../locales/ui';
import { getRelatedTools } from '../../registry/toolsRegistry';
import type { ToolDefinition } from '../../types/tool';
import { ToolCard } from './ToolCard';

interface RelatedToolsProps {
  tool: ToolDefinition;
}

export function RelatedTools({ tool }: RelatedToolsProps) {
  const { locale, t } = useLocale();
  const related = getRelatedTools(tool, 4);
  const category = getLocalizedCategory(tool.categoryId, locale);

  if (related.length === 0 && !category) {
    return null;
  }

  return (
    <section aria-labelledby="related-tools-heading" className="pt-10 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <h2 id="related-tools-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.toolPage.relatedTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {t.toolPage.relatedDescription}
          </p>
        </div>
        {category && (
          <Link
            to={categoryHref(category.id, locale)}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline whitespace-nowrap shrink-0"
          >
            {formatString(t.toolPage.browseAll, { name: category.name })}
          </Link>
        )}
      </div>

      {related.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((item) => (
            <ToolCard key={item.id} tool={item} />
          ))}
        </div>
      ) : (
        category && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            {t.toolPage.moreToolsIn}{' '}
            <Link
              to={categoryHref(category.id, locale)}
              className="font-semibold text-indigo-600 hover:underline"
            >
              {category.name}
            </Link>{' '}
            {formatString(t.toolPage.willAppear, { batch: category.batch })}
          </div>
        )
      )}
    </section>
  );
}
