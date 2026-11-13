import { Link } from 'react-router-dom';
import { getCategoryById } from '../../registry/categories';
import { getRelatedTools } from '../../registry/toolsRegistry';
import type { ToolDefinition } from '../../types/tool';
import { ToolCard } from './ToolCard';

interface RelatedToolsProps {
  tool: ToolDefinition;
}

export function RelatedTools({ tool }: RelatedToolsProps) {
  const related = getRelatedTools(tool, 4);
  const category = getCategoryById(tool.categoryId);

  if (related.length === 0 && !category) {
    return null;
  }

  return (
    <section aria-labelledby="related-tools-heading" className="pt-10 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <h2 id="related-tools-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
            Related Tools
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Continue your workflow with complementary utilities.
          </p>
        </div>
        {category && (
          <Link
            to={`/category/${category.slug}/`}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline whitespace-nowrap shrink-0"
          >
            Browse all {category.name}
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
            More tools in{' '}
            <Link
              to={`/category/${category.slug}/`}
              className="font-semibold text-indigo-600 hover:underline"
            >
              {category.name}
            </Link>{' '}
            will appear here as Batch {category.batch} is released.
          </div>
        )
      )}
    </section>
  );
}
