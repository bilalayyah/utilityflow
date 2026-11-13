import type { ToolLocaleOverride } from '../../types';
import { ZH_AI_OVERRIDES } from './ai';
import { ZH_BATCH_1_OVERRIDES } from './batch1';
import { ZH_BATCH_2_OVERRIDES } from './batch2';
import { ZH_BATCH_3_OVERRIDES } from './batch3';
import { ZH_BATCH_4_OVERRIDES } from './batch4';
import { ZH_BATCH_5_OVERRIDES } from './batch5';

/** All Simplified Chinese tool overrides, keyed by English tool id. */
export const ZH_TOOL_OVERRIDES: Record<string, ToolLocaleOverride> = {
  ...ZH_BATCH_1_OVERRIDES,
  ...ZH_BATCH_2_OVERRIDES,
  ...ZH_BATCH_3_OVERRIDES,
  ...ZH_BATCH_4_OVERRIDES,
  ...ZH_BATCH_5_OVERRIDES,
  ...ZH_AI_OVERRIDES,
};
