import type { ToolLocaleOverride } from '../../types';
import { ES_AI_OVERRIDES } from './ai';
import { ES_BATCH_1_OVERRIDES } from './batch1';
import { ES_BATCH_2_OVERRIDES } from './batch2';
import { ES_BATCH_3_OVERRIDES } from './batch3';
import { ES_BATCH_4_OVERRIDES } from './batch4';
import { ES_BATCH_5_OVERRIDES } from './batch5';

/** All Spanish tool overrides, keyed by English tool id. */
export const ES_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...ES_BATCH_1_OVERRIDES,
  ...ES_BATCH_2_OVERRIDES,
  ...ES_BATCH_3_OVERRIDES,
  ...ES_BATCH_4_OVERRIDES,
  ...ES_BATCH_5_OVERRIDES,
  ...ES_AI_OVERRIDES,
};
