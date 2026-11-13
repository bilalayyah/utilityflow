import type { ToolDefinition } from '../../types/tool';
import { CALC_TOOLS_PART_1 } from './batch3/calcToolsPart1';
import { CALC_TOOLS_PART_2 } from './batch3/calcToolsPart2';
import { CALC_TOOLS_PART_3 } from './batch3/calcToolsPart3';

/**
 * Batch 3: Calculators (15 tools)
 * Organized across modular part files for clean maintainability.
 */
export const BATCH_3_CALCULATORS: ToolDefinition[] = [
  ...CALC_TOOLS_PART_1,
  ...CALC_TOOLS_PART_2,
  ...CALC_TOOLS_PART_3,
];
