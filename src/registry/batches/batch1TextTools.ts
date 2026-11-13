import type { ToolDefinition } from '../../types/tool';
import { TEXT_TOOLS_PART_1 } from './batch1/textToolsPart1';
import { TEXT_TOOLS_PART_2 } from './batch1/textToolsPart2';
import { TEXT_TOOLS_PART_3 } from './batch1/textToolsPart3';

/**
 * Batch 1: Text & Writing Tools (15 tools)
 */
export const BATCH_1_TEXT_TOOLS: ToolDefinition[] = [
  ...TEXT_TOOLS_PART_1,
  ...TEXT_TOOLS_PART_2,
  ...TEXT_TOOLS_PART_3,
];
