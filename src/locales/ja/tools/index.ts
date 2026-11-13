import type { ToolLocaleOverride } from '../../types';
import { JA_AI_OVERRIDES } from './ai';
import { JA_BATCH_1_OVERRIDES } from './batch1';
import { JA_BATCH_2_OVERRIDES } from './batch2';
import { JA_BATCH_3_OVERRIDES } from './batch3';
import { JA_BATCH_4_OVERRIDES } from './batch4';
import { JA_BATCH_5_OVERRIDES } from './batch5';

/** All Japanese tool overrides, keyed by English tool id. */
export const JA_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...JA_BATCH_1_OVERRIDES,
  ...JA_BATCH_2_OVERRIDES,
  ...JA_BATCH_3_OVERRIDES,
  ...JA_BATCH_4_OVERRIDES,
  ...JA_BATCH_5_OVERRIDES,
  ...JA_AI_OVERRIDES,
};
