import type { ToolLocaleOverride } from '../../types';
import { DE_AI_OVERRIDES } from './ai';
import { DE_BATCH_1_OVERRIDES } from './batch1';
import { DE_BATCH_2_OVERRIDES } from './batch2';
import { DE_BATCH_3_OVERRIDES } from './batch3';
import { DE_BATCH_4_OVERRIDES } from './batch4';
import { DE_BATCH_5_OVERRIDES } from './batch5';

/** All German tool overrides, keyed by English tool id. */
export const DE_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...DE_BATCH_1_OVERRIDES,
  ...DE_BATCH_2_OVERRIDES,
  ...DE_BATCH_3_OVERRIDES,
  ...DE_BATCH_4_OVERRIDES,
  ...DE_BATCH_5_OVERRIDES,
  ...DE_AI_OVERRIDES,
};
