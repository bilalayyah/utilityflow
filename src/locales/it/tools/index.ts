import type { ToolLocaleOverride } from '../../types';
import { IT_AI_OVERRIDES } from './ai';
import { IT_BATCH_1_OVERRIDES } from './batch1';
import { IT_BATCH_2_OVERRIDES } from './batch2';
import { IT_BATCH_3_OVERRIDES } from './batch3';
import { IT_BATCH_4_OVERRIDES } from './batch4';
import { IT_BATCH_5_OVERRIDES } from './batch5';

/** All Italian tool overrides, keyed by English tool id. */
export const IT_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...IT_BATCH_1_OVERRIDES,
  ...IT_BATCH_2_OVERRIDES,
  ...IT_BATCH_3_OVERRIDES,
  ...IT_BATCH_4_OVERRIDES,
  ...IT_BATCH_5_OVERRIDES,
  ...IT_AI_OVERRIDES,
};
