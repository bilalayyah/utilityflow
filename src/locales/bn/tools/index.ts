import type { ToolLocaleOverride } from '../../types';
import { BN_BATCH_1_OVERRIDES } from './batch1';
import { BN_BATCH_2_OVERRIDES } from './batch2';
import { BN_BATCH_3_OVERRIDES } from './batch3';
import { BN_BATCH_4_OVERRIDES } from './batch4';
import { BN_BATCH_5_OVERRIDES } from './batch5';

/** All Bengali tool overrides, keyed by English tool id. */
export const BN_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...BN_BATCH_1_OVERRIDES,
  ...BN_BATCH_2_OVERRIDES,
  ...BN_BATCH_3_OVERRIDES,
  ...BN_BATCH_4_OVERRIDES,
  ...BN_BATCH_5_OVERRIDES,
};
