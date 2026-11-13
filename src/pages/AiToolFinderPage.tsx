import { Suspense } from 'react';
import { ToolPageLayout } from '../components/tool/ToolPageLayout';
import { AI_TOOL_FINDER_TOOL } from '../registry/aiTools';

export function AiToolFinderPage() {
  const ToolComponent = AI_TOOL_FINDER_TOOL.component;

  return (
    <ToolPageLayout tool={AI_TOOL_FINDER_TOOL}>
      <Suspense
        fallback={
          <div className="py-12 text-center text-sm text-slate-500">
            Loading AI Smart Tool Finder workspace...
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
