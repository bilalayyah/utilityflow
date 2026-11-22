/**
 * Synchronous detail-data access for the validation scripts (check-*-locale.ts).
 *
 * DEV-ONLY: statically imports all per-batch detail modules (EN + 11
 * locales, 7 batches each) and merges them into per-locale maps. The check scripts are
 * synchronous Node scripts, so they cannot use the async loader in
 * src/locales/details.ts.
 *
 * DO NOT import this from src/ (the app): a static import would pull the
 * entire detail payload into the initial bundle and defeat the H-3 split.
 * The app loads detail lazily via src/locales/details.ts.
 */
import type { LocaleCode } from '../src/locales/config';
import type { ToolDetail } from '../src/types/tool';

import { TOOL_DETAILS as EN_BATCH1 } from '../src/registry/details/batch1';
import { TOOL_DETAILS as EN_BATCH2 } from '../src/registry/details/batch2';
import { TOOL_DETAILS as EN_BATCH3 } from '../src/registry/details/batch3';
import { TOOL_DETAILS as EN_BATCH4 } from '../src/registry/details/batch4';
import { TOOL_DETAILS as EN_BATCH5 } from '../src/registry/details/batch5';
import { TOOL_DETAILS as EN_BATCH6 } from '../src/registry/details/batch6';
import { TOOL_DETAILS as EN_BATCH7 } from '../src/registry/details/batch7';
import { TOOL_DETAILS as ES_BATCH1 } from '../src/locales/es/details/batch1';
import { TOOL_DETAILS as ES_BATCH2 } from '../src/locales/es/details/batch2';
import { TOOL_DETAILS as ES_BATCH3 } from '../src/locales/es/details/batch3';
import { TOOL_DETAILS as ES_BATCH4 } from '../src/locales/es/details/batch4';
import { TOOL_DETAILS as ES_BATCH5 } from '../src/locales/es/details/batch5';
import { TOOL_DETAILS as ES_BATCH6 } from '../src/locales/es/details/batch6';
import { TOOL_DETAILS as ES_BATCH7 } from '../src/locales/es/details/batch7';
import { TOOL_DETAILS as PT_BATCH1 } from '../src/locales/pt/details/batch1';
import { TOOL_DETAILS as PT_BATCH2 } from '../src/locales/pt/details/batch2';
import { TOOL_DETAILS as PT_BATCH3 } from '../src/locales/pt/details/batch3';
import { TOOL_DETAILS as PT_BATCH4 } from '../src/locales/pt/details/batch4';
import { TOOL_DETAILS as PT_BATCH5 } from '../src/locales/pt/details/batch5';
import { TOOL_DETAILS as PT_BATCH6 } from '../src/locales/pt/details/batch6';
import { TOOL_DETAILS as PT_BATCH7 } from '../src/locales/pt/details/batch7';
import { TOOL_DETAILS as FR_BATCH1 } from '../src/locales/fr/details/batch1';
import { TOOL_DETAILS as FR_BATCH2 } from '../src/locales/fr/details/batch2';
import { TOOL_DETAILS as FR_BATCH3 } from '../src/locales/fr/details/batch3';
import { TOOL_DETAILS as FR_BATCH4 } from '../src/locales/fr/details/batch4';
import { TOOL_DETAILS as FR_BATCH5 } from '../src/locales/fr/details/batch5';
import { TOOL_DETAILS as FR_BATCH6 } from '../src/locales/fr/details/batch6';
import { TOOL_DETAILS as FR_BATCH7 } from '../src/locales/fr/details/batch7';
import { TOOL_DETAILS as DE_BATCH1 } from '../src/locales/de/details/batch1';
import { TOOL_DETAILS as DE_BATCH2 } from '../src/locales/de/details/batch2';
import { TOOL_DETAILS as DE_BATCH3 } from '../src/locales/de/details/batch3';
import { TOOL_DETAILS as DE_BATCH4 } from '../src/locales/de/details/batch4';
import { TOOL_DETAILS as DE_BATCH5 } from '../src/locales/de/details/batch5';
import { TOOL_DETAILS as DE_BATCH6 } from '../src/locales/de/details/batch6';
import { TOOL_DETAILS as DE_BATCH7 } from '../src/locales/de/details/batch7';
import { TOOL_DETAILS as IT_BATCH1 } from '../src/locales/it/details/batch1';
import { TOOL_DETAILS as IT_BATCH2 } from '../src/locales/it/details/batch2';
import { TOOL_DETAILS as IT_BATCH3 } from '../src/locales/it/details/batch3';
import { TOOL_DETAILS as IT_BATCH4 } from '../src/locales/it/details/batch4';
import { TOOL_DETAILS as IT_BATCH5 } from '../src/locales/it/details/batch5';
import { TOOL_DETAILS as IT_BATCH6 } from '../src/locales/it/details/batch6';
import { TOOL_DETAILS as IT_BATCH7 } from '../src/locales/it/details/batch7';
import { TOOL_DETAILS as ID_BATCH1 } from '../src/locales/id/details/batch1';
import { TOOL_DETAILS as ID_BATCH2 } from '../src/locales/id/details/batch2';
import { TOOL_DETAILS as ID_BATCH3 } from '../src/locales/id/details/batch3';
import { TOOL_DETAILS as ID_BATCH4 } from '../src/locales/id/details/batch4';
import { TOOL_DETAILS as ID_BATCH5 } from '../src/locales/id/details/batch5';
import { TOOL_DETAILS as ID_BATCH6 } from '../src/locales/id/details/batch6';
import { TOOL_DETAILS as ID_BATCH7 } from '../src/locales/id/details/batch7';
import { TOOL_DETAILS as RU_BATCH1 } from '../src/locales/ru/details/batch1';
import { TOOL_DETAILS as RU_BATCH2 } from '../src/locales/ru/details/batch2';
import { TOOL_DETAILS as RU_BATCH3 } from '../src/locales/ru/details/batch3';
import { TOOL_DETAILS as RU_BATCH4 } from '../src/locales/ru/details/batch4';
import { TOOL_DETAILS as RU_BATCH5 } from '../src/locales/ru/details/batch5';
import { TOOL_DETAILS as RU_BATCH6 } from '../src/locales/ru/details/batch6';
import { TOOL_DETAILS as RU_BATCH7 } from '../src/locales/ru/details/batch7';
import { TOOL_DETAILS as JA_BATCH1 } from '../src/locales/ja/details/batch1';
import { TOOL_DETAILS as JA_BATCH2 } from '../src/locales/ja/details/batch2';
import { TOOL_DETAILS as JA_BATCH3 } from '../src/locales/ja/details/batch3';
import { TOOL_DETAILS as JA_BATCH4 } from '../src/locales/ja/details/batch4';
import { TOOL_DETAILS as JA_BATCH5 } from '../src/locales/ja/details/batch5';
import { TOOL_DETAILS as JA_BATCH6 } from '../src/locales/ja/details/batch6';
import { TOOL_DETAILS as JA_BATCH7 } from '../src/locales/ja/details/batch7';
import { TOOL_DETAILS as KO_BATCH1 } from '../src/locales/ko/details/batch1';
import { TOOL_DETAILS as KO_BATCH2 } from '../src/locales/ko/details/batch2';
import { TOOL_DETAILS as KO_BATCH3 } from '../src/locales/ko/details/batch3';
import { TOOL_DETAILS as KO_BATCH4 } from '../src/locales/ko/details/batch4';
import { TOOL_DETAILS as KO_BATCH5 } from '../src/locales/ko/details/batch5';
import { TOOL_DETAILS as KO_BATCH6 } from '../src/locales/ko/details/batch6';
import { TOOL_DETAILS as KO_BATCH7 } from '../src/locales/ko/details/batch7';
import { TOOL_DETAILS as ZH_BATCH1 } from '../src/locales/zh/details/batch1';
import { TOOL_DETAILS as ZH_BATCH2 } from '../src/locales/zh/details/batch2';
import { TOOL_DETAILS as ZH_BATCH3 } from '../src/locales/zh/details/batch3';
import { TOOL_DETAILS as ZH_BATCH4 } from '../src/locales/zh/details/batch4';
import { TOOL_DETAILS as ZH_BATCH5 } from '../src/locales/zh/details/batch5';
import { TOOL_DETAILS as ZH_BATCH6 } from '../src/locales/zh/details/batch6';
import { TOOL_DETAILS as ZH_BATCH7 } from '../src/locales/zh/details/batch7';
import { TOOL_DETAILS as HI_BATCH1 } from '../src/locales/hi/details/batch1';
import { TOOL_DETAILS as AR_BATCH1 } from '../src/locales/ar/details/batch1';
import { TOOL_DETAILS as HI_BATCH2 } from '../src/locales/hi/details/batch2';
import { TOOL_DETAILS as AR_BATCH2 } from '../src/locales/ar/details/batch2';
import { TOOL_DETAILS as HI_BATCH3 } from '../src/locales/hi/details/batch3';
import { TOOL_DETAILS as AR_BATCH3 } from '../src/locales/ar/details/batch3';
import { TOOL_DETAILS as HI_BATCH4 } from '../src/locales/hi/details/batch4';
import { TOOL_DETAILS as AR_BATCH4 } from '../src/locales/ar/details/batch4';
import { TOOL_DETAILS as HI_BATCH5 } from '../src/locales/hi/details/batch5';
import { TOOL_DETAILS as AR_BATCH5 } from '../src/locales/ar/details/batch5';
import { TOOL_DETAILS as HI_BATCH6 } from '../src/locales/hi/details/batch6';
import { TOOL_DETAILS as AR_BATCH6 } from '../src/locales/ar/details/batch6';
import { TOOL_DETAILS as HI_BATCH7 } from '../src/locales/hi/details/batch7';
import { TOOL_DETAILS as AR_BATCH7 } from '../src/locales/ar/details/batch7';
import { TOOL_DETAILS as TR_BATCH1 } from '../src/locales/tr/details/batch1';
import { TOOL_DETAILS as TR_BATCH2 } from '../src/locales/tr/details/batch2';
import { TOOL_DETAILS as TR_BATCH3 } from '../src/locales/tr/details/batch3';
import { TOOL_DETAILS as TR_BATCH4 } from '../src/locales/tr/details/batch4';
import { TOOL_DETAILS as TR_BATCH5 } from '../src/locales/tr/details/batch5';
import { TOOL_DETAILS as TR_BATCH6 } from '../src/locales/tr/details/batch6';
import { TOOL_DETAILS as TR_BATCH7 } from '../src/locales/tr/details/batch7';
import { TOOL_DETAILS as VI_BATCH1 } from '../src/locales/vi/details/batch1';
import { TOOL_DETAILS as VI_BATCH2 } from '../src/locales/vi/details/batch2';
import { TOOL_DETAILS as VI_BATCH3 } from '../src/locales/vi/details/batch3';
import { TOOL_DETAILS as VI_BATCH4 } from '../src/locales/vi/details/batch4';
import { TOOL_DETAILS as VI_BATCH5 } from '../src/locales/vi/details/batch5';
import { TOOL_DETAILS as VI_BATCH6 } from '../src/locales/vi/details/batch6';
import { TOOL_DETAILS as VI_BATCH7 } from '../src/locales/vi/details/batch7';

export const EN_DETAILS: Record<string, ToolDetail> = Object.assign(
  {},
  EN_BATCH1,
  EN_BATCH2,
  EN_BATCH3,
  EN_BATCH4,
  EN_BATCH5,
  EN_BATCH6,
  EN_BATCH7,
);

export const LOCALE_DETAILS: Record<Exclude<LocaleCode, 'en'>, Record<string, ToolDetail>> = {
  es: Object.assign(
    {},
    ES_BATCH1,
    ES_BATCH2,
    ES_BATCH3,
    ES_BATCH4,
    ES_BATCH5,
    ES_BATCH6,
    ES_BATCH7,
  ),
  pt: Object.assign(
    {},
    PT_BATCH1,
    PT_BATCH2,
    PT_BATCH3,
    PT_BATCH4,
    PT_BATCH5,
    PT_BATCH6,
    PT_BATCH7,
  ),
  fr: Object.assign(
    {},
    FR_BATCH1,
    FR_BATCH2,
    FR_BATCH3,
    FR_BATCH4,
    FR_BATCH5,
    FR_BATCH6,
    FR_BATCH7,
  ),
  de: Object.assign(
    {},
    DE_BATCH1,
    DE_BATCH2,
    DE_BATCH3,
    DE_BATCH4,
    DE_BATCH5,
    DE_BATCH6,
    DE_BATCH7,
  ),
  it: Object.assign(
    {},
    IT_BATCH1,
    IT_BATCH2,
    IT_BATCH3,
    IT_BATCH4,
    IT_BATCH5,
    IT_BATCH6,
    IT_BATCH7,
  ),
  id: Object.assign(
    {},
    ID_BATCH1,
    ID_BATCH2,
    ID_BATCH3,
    ID_BATCH4,
    ID_BATCH5,
    ID_BATCH6,
    ID_BATCH7,
  ),
  ru: Object.assign(
    {},
    RU_BATCH1,
    RU_BATCH2,
    RU_BATCH3,
    RU_BATCH4,
    RU_BATCH5,
    RU_BATCH6,
    RU_BATCH7,
  ),
  ja: Object.assign(
    {},
    JA_BATCH1,
    JA_BATCH2,
    JA_BATCH3,
    JA_BATCH4,
    JA_BATCH5,
    JA_BATCH6,
    JA_BATCH7,
  ),
  ko: Object.assign(
    {},
    KO_BATCH1,
    KO_BATCH2,
    KO_BATCH3,
    KO_BATCH4,
    KO_BATCH5,
    KO_BATCH6,
    KO_BATCH7,
  ),
  zh: Object.assign(
    {},
    ZH_BATCH1,
    ZH_BATCH2,
    ZH_BATCH3,
    ZH_BATCH4,
    ZH_BATCH5,
    ZH_BATCH6,
    ZH_BATCH7,
  ),
  hi: Object.assign(
    {},
    HI_BATCH1,
    HI_BATCH2,
    HI_BATCH3,
    HI_BATCH4,
    HI_BATCH5,
    HI_BATCH6,
    HI_BATCH7,
  ),
  ar: Object.assign(
    {},
    AR_BATCH1,
    AR_BATCH2,
    AR_BATCH3,
    AR_BATCH4,
    AR_BATCH5,
    AR_BATCH6,
    AR_BATCH7,
  ),
  tr: Object.assign(
    {},
    TR_BATCH1,
    TR_BATCH2,
    TR_BATCH3,
    TR_BATCH4,
    TR_BATCH5,
    TR_BATCH6,
    TR_BATCH7,
  ),
  vi: Object.assign(
    {},
    VI_BATCH1,
    VI_BATCH2,
    VI_BATCH3,
    VI_BATCH4,
    VI_BATCH5,
    VI_BATCH6,
    VI_BATCH7,
  ),
};
