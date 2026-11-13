import type { ToolDefinition } from '../../types/tool';
import { PDF_TOOLS_PART_1 } from './batch5/pdfToolsPart1';
import { PDF_TOOLS_PART_2 } from './batch5/pdfToolsPart2';

/**
 * Batch 5: PDF Tools (10 tools)
 */
export const BATCH_5_PDF_TOOLS: ToolDefinition[] = [
  ...PDF_TOOLS_PART_1,
  ...PDF_TOOLS_PART_2,
];
