import type { ToolLocaleOverride } from '../../types';
import { AR_BATCH_1_OVERRIDES } from './batch1';
import { AR_BATCH_2_OVERRIDES } from './batch2';
import { AR_BATCH_3_OVERRIDES } from './batch3';
import { AR_BATCH_4_OVERRIDES } from './batch4';
import { AR_BATCH_5_OVERRIDES } from './batch5';

/** All Arabic tool overrides, keyed by English tool id. */
export const AR_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...AR_BATCH_1_OVERRIDES,
  ...AR_BATCH_2_OVERRIDES,
  ...AR_BATCH_3_OVERRIDES,
  ...AR_BATCH_4_OVERRIDES,
  ...AR_BATCH_5_OVERRIDES,
};
