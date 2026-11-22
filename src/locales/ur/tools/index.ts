import type { ToolLocaleOverride } from '../../types';
import { UR_BATCH_1_OVERRIDES } from './batch1';
import { UR_BATCH_2_OVERRIDES } from './batch2';
import { UR_BATCH_3_OVERRIDES } from './batch3';
import { UR_BATCH_4_OVERRIDES } from './batch4';
import { UR_BATCH_5_OVERRIDES } from './batch5';

/** All Urdu tool overrides, keyed by English tool id. */
export const UR_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...UR_BATCH_1_OVERRIDES,
  ...UR_BATCH_2_OVERRIDES,
  ...UR_BATCH_3_OVERRIDES,
  ...UR_BATCH_4_OVERRIDES,
  ...UR_BATCH_5_OVERRIDES,
};
