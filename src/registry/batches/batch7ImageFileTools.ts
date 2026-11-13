import type { ToolDefinition } from '../../types/tool';
import { IMAGE_FILE_TOOLS_PART_1 } from './batch7/imageFileToolsPart1';
import { IMAGE_FILE_TOOLS_PART_2 } from './batch7/imageFileToolsPart2';

/**
 * Batch 7: Image & File Tools (10 tools)
 */
export const BATCH_7_IMAGE_FILE_TOOLS: ToolDefinition[] = [
  ...IMAGE_FILE_TOOLS_PART_1,
  ...IMAGE_FILE_TOOLS_PART_2,
];
