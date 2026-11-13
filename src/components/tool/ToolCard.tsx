import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCategoryById } from '../../registry/categories';
import type { ToolDefinition } from '../../types/tool';
import { CategoryIcon } from '../common/CategoryIcon';

interface ToolCardProps {
  tool: ToolDefinition;
}

export function ToolCard({ tool }: ToolCardProps) {
  const category = getCategoryById(tool.categoryId);

  return (
    <Link
      to={`/${tool.slug}/`}
      className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-150 hover:border-indigo-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {category && <CategoryIcon name={category.iconName} className="w-4 h-4 text-indigo-600 shrink-0" />}
            <span>{category ? category.shortName : 'Utility'}</span>
            <span aria-hidden="true">·</span>
            <span>
              {tool.id.startsWith('ai-')
                ? 'Free AI Tool'
                : tool.requiresExternalApi
                ? 'External API'
                : 'Browser-side'}
            </span>
          </div>
          <ArrowRight
            className="w-4 h-4 text-slate-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-indigo-600 shrink-0"
            aria-hidden="true"
          />
        </div>

        <h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
          {tool.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-indigo-600">
        <span>Open tool</span>
        <span className="font-mono text-slate-400">/{tool.slug}/</span>
      </div>
    </Link>
  );
}
