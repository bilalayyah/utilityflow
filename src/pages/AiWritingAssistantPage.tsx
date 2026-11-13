import { Suspense } from 'react';
import { ToolPageLayout } from '../components/tool/ToolPageLayout';
import { AI_WRITING_ASSISTANT_TOOL } from '../registry/aiTools';

export function AiWritingAssistantPage() {
  const ToolComponent = AI_WRITING_ASSISTANT_TOOL.component;

  return (
    <ToolPageLayout tool={AI_WRITING_ASSISTANT_TOOL}>
      <Suspense
        fallback={
          <div className="py-12 text-center text-sm text-slate-500">
            Loading AI Writing Assistant workspace...
          </div>
        }
      >
        <ToolComponent />
      </Suspense>
    </ToolPageLayout>
  );
}
