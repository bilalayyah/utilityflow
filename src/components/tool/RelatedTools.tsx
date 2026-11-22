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
    <section aria-labelledby="related-tools-heading" className="pt-10 border-t border-[#E5E5EA] dark:border-[#243247]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <h2 id="related-tools-heading" className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">
            {t.toolPage.relatedTitle}
          </h2>
          <p className="mt-1 text-sm text-[#6E6E73] dark:text-[#CBD5E1]">
            {t.toolPage.relatedDescription}
          </p>
        </div>
        {category && (
          <Link
            to={categoryHref(category.id, locale)}
            className="text-sm font-semibold text-[#0B7A59] hover:text-[#0B7557] underline-offset-4 hover:underline whitespace-nowrap shrink-0 dark:text-[#34D399] dark:hover:text-[#6EE7B7]"
          >
            {formatString(t.toolPage.browseAll, { name: category.name })}
          </Link>
        )}
      </div>

      {related.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((item) => (
            <ToolCard key={item.id} tool={item} />
          ))}
        </div>
      ) : (
        category && (
          <div className="rounded-2xl border border-[#E5E5EA] bg-white p-5 text-sm text-[#6E6E73] shadow-sm dark:border-[#243247] dark:bg-[#131D31] dark:text-[#CBD5E1]">
            {t.toolPage.moreToolsIn}{' '}
            <Link
              to={categoryHref(category.id, locale)}
              className="font-semibold text-[#0B7A59] hover:underline dark:text-[#34D399]"
            >
              {category.name}
            </Link>{' '}
            {t.toolPage.willAppear}
          </div>
        )
      )}
    </section>
  );
}
