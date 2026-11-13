import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { SeoHead } from '../components/seo/SeoHead';
import { ToolSearchBar } from '../components/tool/ToolSearchBar';
import { CATEGORIES } from '../registry/categories';

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found (404) | UtilityFlow"
        description="The requested tool or page could not be found on UtilityFlow. Search our utility directory or browse categories."
        canonicalPath="/404/"
        noIndex
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-sm font-semibold text-indigo-600 mb-3">404 · Not Found</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          We couldn&rsquo;t find that page.
        </h1>
        <p className="mt-3 text-base text-slate-600 max-w-xl leading-relaxed">
          The URL may have moved, or this utility has not been released yet. Search below or browse
          our categories to find what you need.
        </p>

        <div className="mt-8">
          <ToolSearchBar />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Return Home
          </Link>
          <Link
            to="/tools/"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            Browse Directory
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}/`}
                className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
              >
                <CategoryIcon name={category.iconName} className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
