import type { ToolLocaleOverride } from '../../types';

/**
 * Korean overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 * Korean slugs (STATIC_PATHS): ai-geul-sseugi, ai-yoyak, ai-dogu-chatgi.
 */
export const KO_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'ai-geul-sseugi',
    name: 'AI 글쓰기 도우미',
    shortDescription:
      '문법 수정, 문장 다시 쓰기, 톤 조정, 바꿔 쓰기, 아이디어 확장, 명확한 이메일 초안 작성을 가입 없이 무료로 하세요.',
    keywords: [
      'AI 글쓰기 도우미',
      '무료 문법 검사기',
      '문장 다시 쓰기',
      '텍스트 바꿔 쓰기',
      '톤 변환기',
      '이메일 작성 도우미',
      '맞춤법 교정',
      '문장 단순화',
      '문법 교정 AI',
    ],
    seo: {
      title: 'AI 글쓰기 도우미 – 문법 교정·다시 쓰기 무료 온라인 생성 도구 | UtilityFlow',
      description:
        '문법을 고치고 문장을 다시 쓰며 톤을 조정하고 단락을 단순화·확장하며 바꿔 쓰고 명확한 이메일을 무료로 작성하세요. 가입이나 계정이 전혀 필요 없으며, 하루 5건까지 Groq AI 추론으로 처리됩니다. 에세이와 보고서의 문법도 깔끔하게 다듬어 바로 보낼 수 있습니다. 지금 써 보세요.',
      primaryKeyword: 'AI 글쓰기 도우미',
      secondaryKeywords: [
        '무료 문법 검사기 AI',
        'AI 문장 다시 쓰기',
        'AI 텍스트 바꿔 쓰기',
        'AI 이메일 작성 도우미',
      ],
      longTailKeywords: [
        '로그인 없는 무료 AI 글쓰기 도우미',
        'AI 도구로 텍스트 더 전문적으로 만들기',
        '의미 유지하며 단락 다시 쓰기 무료',
        '문법 맞춤법 온라인 무료 수정',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '로그인, 구독, 크레딧 없이 100% 무료입니다. 무료 허용량: 방문자당 하루 최대 5건의 글쓰기 요청(최대 12,000자), 텍스트를 저장하지 않고 Groq 무료 티어 추론으로 구동됩니다.',
    intro:
      '계정을 만들지 않고 몇 초 만에 초안을 깔끔하게 다듬으세요. 문법 교정, 바꿔 쓰기, 톤 전환, 문장 단순화, 이메일 작성 등 10가지 글쓰기 작업 중에서 고르면서 원래 의미와 사실을 엄격히 보존합니다.',
  },
  'ai-text-summarizer': {
    slug: 'ai-yoyak',
    name: 'AI 텍스트 요약기',
    shortDescription:
      '글, 보고서, 메모를 짧고 중간이며 긴 요약으로 바꾸고 글머리 기호와 핵심 요점을 무료로 만드세요.',
    keywords: [
      'AI 텍스트 요약기',
      '무료 글 요약기',
      '글머리 기호 요약',
      '핵심 요점 추출기',
      '단락 요약기',
      '쉬운 언어 요약',
      '읽기 시간 계산기',
      '긴 텍스트 온라인 요약',
      'AI 요약 생성기 무료',
    ],
    seo: {
      title: 'AI 텍스트 요약기 – 긴 글과 보고서를 짧게 요약하는 무료 온라인 도구 | UtilityFlow',
      description:
        '긴 글, 연구 메모, 보고서를 짧은 단락, 글머리 기호, 핵심 요점으로 요약하세요. 무료, 빠르고 가입이 필요 없으며 사실과 숫자를 그대로 유지합니다. 회의 기록과 논문 요약에도 바로 쓸 수 있습니다. 긴 회의 기록과 강의 노트도 핵심만 모아 빠르게 정리할 수 있습니다.',
      primaryKeyword: 'AI 텍스트 요약기',
      secondaryKeywords: [
        '무료 글 요약기',
        '글머리 기호 텍스트 요약기',
        '핵심 요점 AI 추출',
        '단락 요약 생성기',
      ],
      longTailKeywords: [
        '로그인 없는 무료 AI 텍스트 요약기',
        '숫자와 사실 유지하며 긴 글 요약',
        '짧고 중간이며 긴 텍스트 요약기 온라인',
        '연구 논문을 글머리 기호로 요약',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '로그인, 구독, 크레딧 없이 100% 무료입니다. 무료 허용량: 방문자당 하루 최대 5건의 요약(요청당 최대 25,000자), 텍스트를 저장하지 않고 Groq 무료 티어 추론으로 구동됩니다.',
    intro:
      '계정을 만들지 않고 긴 글, 보고서, 에세이, 회의 기록을 간결한 요약으로 바꾸세요. 짧음(10~20%), 중간(30~40%), 긴(50~60%) 길이를 단락, 글머리 기호, 핵심 요점, 쉬운 언어 형식으로 선택하면서 이름, 숫자, 날짜를 보존합니다.',
  },
  'ai-tool-finder': {
    slug: 'ai-dogu-chatgi',
    name: 'AI 도구 찾기',
    shortDescription:
      '오타나 자연스러운 표현이 있어도 작업을 평이한 한국어로 설명하면 UtilityFlow에서 가장 잘 맞는 도구를 즉시 찾으세요.',
    keywords: [
      'AI 도구 찾기',
      '스마트 도구 검색',
      '유틸리티 도구 찾기',
      '온라인 도구 추천',
      '자연어 도구 검색',
      '무료 도구 온라인 찾기',
      '유틸리티 도구 추천기',
      '작업별 도구 검색',
      'AI 도구 발견',
    ],
    seo: {
      title: 'AI 도구 찾기 – 딱 맞는 유틸리티를 찾아주는 무료 온라인 도구 | UtilityFlow',
      description:
        '필요한 것을 평이한 언어로 설명하면 UtilityFlow의 88개 도구 중에서 딱 맞는 브라우저·AI 유틸리티를 찾을 수 있습니다. 빠르고 무료이며 지어낸 링크가 없고, 오타가 있어도 의미로 이해해 추천합니다. 카테고리 필터로 범위를 좁혀 더 정확하게 찾을 수 있습니다.',
      primaryKeyword: 'AI 도구 찾기',
      secondaryKeywords: [
        '온라인 도구 찾기',
        '딱 맞는 유틸리티 도구 찾기',
        'AI 도구 추천기',
        'UtilityFlow 도구 검색',
      ],
      longTailKeywords: [
        '내 작업용 무료 온라인 도구 찾기',
        '평이한 언어 문제로 유틸리티 도구 검색',
        '로그인 없는 AI 도구 발견',
        'PDF에 필요한 온라인 도구는 무엇인가요',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '로그인, 구독, 크레딧 없이 100% 무료입니다. 검증된 84개 브라우저 도구, 3개 AI 도구, 환율 계산기를 검색합니다(하루 최대 10건의 AI 검색 + 무제한 즉시 키워드 매칭).',
    intro:
      '어떤 도구가 작업을 처리하는지 잘 모르겠나요? 철자 실수나 비격식 표현이 있어도 평이한 한국어로 목표를 설명하면 하이브리드 키워드 + Groq AI 매처가 명확한 근거와 함께 UtilityFlow 라이브 카탈로그에서 검증된 도구를 추천합니다.',
  },
};
