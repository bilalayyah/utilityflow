import type { ToolDefinition } from '../../types/tool';
import { DEV_TOOLS_PART_1 } from './batch2/devToolsPart1';
import { DEV_TOOLS_PART_2 } from './batch2/devToolsPart2';
import { DEV_TOOLS_PART_3 } from './batch2/devToolsPart3';

/**
 * Batch 2: Developer Tools (15 tools)
 */
export const BATCH_2_DEVELOPER_TOOLS: ToolDefinition[] = [
  ...DEV_TOOLS_PART_1,
  ...DEV_TOOLS_PART_2,
  ...DEV_TOOLS_PART_3,
];
