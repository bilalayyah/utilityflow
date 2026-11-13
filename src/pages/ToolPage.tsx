import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ToolPageLayout } from '../components/tool/ToolPageLayout';
import { getToolBySlug } from '../registry/toolsRegistry';
import { NotFoundPage } from './NotFoundPage';

export function ToolPage() {
  const { toolSlug = '' } = useParams<{ toolSlug: string }>();
  const tool = getToolBySlug(toolSlug);

  if (!tool) {
    return <NotFoundPage />;
  }

  const ToolComponent = tool.component;

  return (
    <ToolPageLayout tool={tool}>
      <Suspense
        fallback={
          <div className="py-12 text-center text-sm text-slate-500">
            Loading {tool.name} workspace...
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
