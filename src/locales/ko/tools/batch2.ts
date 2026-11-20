import type { ToolLocaleOverride } from '../../types';

/**
 * Korean overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are Revised Romanization of the Korean tool names, unique,
 * lowercase, hyphenated, and do not collide with English slugs or
 * reserved paths.
 */
export const KO_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-inkodeo-dikodeo',
    name: 'Base64 인코더·디코더',
    shortDescription:
      '텍스트를 표준 또는 URL 안전 Base64로 인코딩하고 UTF-8 Base64 문자열을 안전하게 디코딩합니다.',
    keywords: [
      'Base64 인코더',
      'Base64 디코더',
      'Base64 변환기',
      '텍스트 Base64 인코딩',
      'Base64 디코딩 온라인',
      'URL 안전 Base64',
      'UTF-8 Base64',
      'Base64 인코딩 도구',
      '온라인 Base64 변환',
    ],
    seo: {
      title: 'Base64 인코더·디코더: UTF-8 텍스트를 변환하는 무료 도구 | UtilityFlow',
      description:
        '텍스트를 표준 또는 URL 안전 Base64로 인코딩하고 UTF-8 Base64 문자열을 안전하게 디코딩하세요. 모든 변환은 브라우저 메모리 안에서 이루어지며 서버 업로드가 없습니다. API 토큰과 이미지 데이터를 다룰 때 유용하며, 입력한 텍스트는 브라우저 안에서만 처리됩니다.',
      primaryKeyword: 'Base64 인코더',
      secondaryKeywords: ['Base64 디코더', 'Base64 변환기', '텍스트 Base64 인코딩', 'URL 안전 Base64'],
      longTailKeywords: ['온라인 텍스트 Base64 인코딩 디코딩', 'UTF-8 문자열 Base64 변환', 'URL 안전 Base64 인코딩 도구', 'Base64 디코딩 온라인 무료'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '텍스트를 Base64로 인코딩해 API와 데이터 URI에 안전하게 담거나, Base64 문자열을 원래 텍스트로 되돌리세요.',
  },
  'url-encoder-decoder': {
    slug: 'url-inkodeo-dikodeo',
    name: 'URL 인코더·디코더',
    shortDescription:
      '쿼리 값을 퍼센트 인코딩하거나 전체 URL을 인코딩하고 호스트, 경로, 쿼리 매개변수를 분석합니다.',
    keywords: [
      'URL 인코더',
      'URL 디코더',
      '퍼센트 인코딩',
      'URL 인코딩 도구',
      '쿼리 값 인코딩',
      'URL 디코딩 온라인',
      '온라인 URL 인코더',
      'URL 매개변수 분석',
      'URL 인코딩 변환기',
    ],
    seo: {
      title: 'URL 인코더·디코더: 쿼리 값을 퍼센트 인코딩하는 무료 온라인 도구 | UtilityFlow',
      description:
        '쿼리 값을 퍼센트 인코딩하거나 전체 URL을 인코딩하고, 호스트, 경로, 쿼리 매개변수를 분석하세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료로 사용할 수 있습니다. 공유 링크와 검색 쿼리를 만들 때 유용하며, 입력한 데이터는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: 'URL 인코더',
      secondaryKeywords: ['URL 디코더', '퍼센트 인코딩', 'URL 인코딩 도구', '쿼리 값 인코딩'],
      longTailKeywords: ['온라인 URL 퍼센트 인코딩 디코딩', '쿼리 매개변수 URL 인코딩', '전체 URL 인코딩 도구', 'URL 호스트 경로 분석 온라인'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '공유 링크와 API 요청에 들어가는 쿼리 값을 안전하게 인코딩하거나, 인코딩된 URL을 원래 형태로 되돌리고 구성 요소를 분석하세요.',
  },
  'uuid-generator': {
    slug: 'uuid-saengseonggi',
    name: 'UUID 생성기',
    shortDescription:
      '암호학적으로 안전한 무작위 UUID v4와 시간 순서 RFC 9562 UUID v7 식별자를 일괄 생성합니다.',
    keywords: [
      'UUID 생성기',
      'UUID v4 생성',
      'UUID v7 생성',
      '온라인 UUID 생성',
      '무작위 UUID 만들기',
      '고유 식별자 생성기',
      'GUID 생성기',
      'UUID 일괄 생성',
      'RFC 9562 UUID',
    ],
    seo: {
      title: 'UUID 생성기: v4와 v7 식별자를 일괄 생성하는 무료 온라인 도구 | UtilityFlow',
      description:
        '암호학적으로 안전한 무작위 UUID v4와 시간 순서 RFC 9562 UUID v7 식별자를 일괄 생성하세요. 하이픈과 대문자 옵션을 브라우저에서 바로 조절할 수 있으며 무료입니다. 데이터베이스 키와 API 식별자를 만들 때 유용하며, 생성된 값은 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: 'UUID 생성기',
      secondaryKeywords: ['UUID v4 생성', 'UUID v7 생성', '온라인 UUID 생성', '고유 식별자 생성기'],
      longTailKeywords: ['온라인 무료 UUID v4 생성', '시간 순서 UUID v7 일괄 생성', '암호학적으로 안전한 UUID 만들기', '데이터베이스용 고유 식별자 생성'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '데이터베이스 키, API 식별자, 세션 토큰에 쓸 고유 식별자를 생성하세요. 무작위 v4와 시간 순서 v7 중 용도에 맞는 버전을 선택할 수 있습니다.',
  },
  'regex-tester': {
    slug: 'jeonggyusik-teseuteo',
    name: '정규식 테스터',
    shortDescription:
      '자바스크립트 정규식을 실시간 매치 강조, 캡처 그룹, 플래그, 교체 출력과 함께 테스트합니다.',
    keywords: [
      '정규식 테스터',
      '정규표현식 테스트',
      'RegExp 테스터',
      '정규식 매치 확인',
      '온라인 정규식 테스트',
      '정규식 캡처 그룹',
      '자바스크립트 정규식',
      '정규식 플래그',
      '정규식 교체 테스트',
    ],
    seo: {
      title: '정규식 테스터: 패턴 매치를 실시간으로 확인하는 무료 온라인 도구 | UtilityFlow',
      description:
        '자바스크립트 정규식을 실시간 매치 강조, 캡처 그룹, 플래그, 교체 출력과 함께 테스트하세요. 모든 테스트는 브라우저에서 로컬로 이루어지며 무료로 사용할 수 있습니다. 이메일과 전화번호 패턴을 만들 때 유용하며, 입력한 텍스트는 브라우저 안에서만 안전하게 처리됩니다. 무료로 써 보세요.',
      primaryKeyword: '정규식 테스터',
      secondaryKeywords: ['정규표현식 테스트', 'RegExp 테스터', '정규식 매치 확인', '온라인 정규식 테스트'],
      longTailKeywords: ['자바스크립트 정규식 온라인 테스트', '정규식 캡처 그룹 매치 확인', '정규식 플래그 교체 출력 테스트', '이메일 패턴 정규식 실시간 확인'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '정규식 패턴이 텍스트의 어디에 일치하는지 실시간으로 확인하고, 캡처 그룹과 교체 결과를 미리 보세요.',
  },
  'jwt-decoder': {
    slug: 'jwt-dikodeo',
    name: 'JWT 디코더',
    shortDescription:
      'JSON 웹 토큰의 헤더, 페이로드 클레임, 만료 타임스탬프를 브라우저 안에서 안전하게 디코딩합니다.',
    keywords: [
      'JWT 디코더',
      'JWT 토큰 확인',
      'JWT 디코딩',
      '토큰 클레임 확인',
      '온라인 JWT 디코더',
      'JWT 만료 시간 확인',
      'JSON 웹 토큰 검사',
      'JWT 페이로드 보기',
      'JWT 헤더 확인',
    ],
    seo: {
      title: 'JWT 디코더: 토큰 헤더와 클레임을 확인하는 무료 온라인 확인 도구 | UtilityFlow',
      description:
        'JSON 웹 토큰의 헤더, 페이로드 클레임, 만료 타임스탬프를 브라우저 안에서 안전하게 디코딩하세요. 토큰은 서버로 전송되지 않으며 서명을 검증하지 않고 내용을 표시합니다. 로그인 토큰의 만료 시간을 확인할 때 유용하며, 디코딩은 브라우저 안에서만 안전하게 이루어집니다.',
      primaryKeyword: 'JWT 디코더',
      secondaryKeywords: ['JWT 토큰 확인', 'JWT 디코딩', '토큰 클레임 확인', '온라인 JWT 디코더'],
      longTailKeywords: ['온라인 JWT 토큰 디코딩 무료', 'JWT 만료 시간 exp 확인', 'JWT 페이로드 클레임 보기', 'JSON 웹 토큰 헤더 검사'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '로그인 토큰 안에 어떤 정보가 들어 있는지 확인하세요. 헤더, 페이로드 클레임, 만료 시간을 브라우저 안에서 안전하게 살펴볼 수 있습니다.',
  },
  'hash-generator': {
    slug: 'haesi-saengseonggi',
    name: '해시 생성기',
    shortDescription:
      '텍스트나 로컬 파일의 SHA-1, SHA-256, SHA-384, SHA-512 암호화 해시를 Web Crypto로 계산합니다.',
    keywords: [
      '해시 생성기',
      'SHA-256 생성기',
      'SHA-512 해시',
      'SHA-1 해시 계산',
      '온라인 해시 생성',
      '파일 해시 확인',
      'MD5 SHA 해시',
      '암호화 해시 도구',
      '체크섬 계산기',
    ],
    seo: {
      title: '해시 생성기: SHA-256 등 암호화 해시를 계산하는 무료 온라인 도구 | UtilityFlow',
      description:
        '텍스트나 로컬 파일의 SHA-1, SHA-256, SHA-384, SHA-512 암호화 해시를 Web Crypto로 계산하세요. 모든 해시는 브라우저에서 로컬로 계산되며 파일이 업로드되지 않습니다. 파일 무결성과 비밀번호 해시를 확인할 때 유용하며, 계산은 브라우저 안에서 이루어집니다.',
      primaryKeyword: '해시 생성기',
      secondaryKeywords: ['SHA-256 생성기', 'SHA-512 해시', 'SHA-1 해시 계산', '온라인 해시 생성'],
      longTailKeywords: ['온라인 SHA-256 해시 계산 무료', '파일 SHA-512 체크섬 확인', '텍스트 SHA-1 해시 생성', 'Web Crypto 해시 계산 도구'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '텍스트나 파일의 지문을 계산하세요. SHA-1부터 SHA-512까지 원하는 알고리즘으로 해시를 만들어 무결성을 확인하세요.',
  },
  'html-entity-encoder': {
    slug: 'html-entiti-inkodeo',
    name: 'HTML 엔티티 인코더',
    shortDescription:
      '예약된 HTML 문자(<, >, &, 따옴표)와 비 ASCII 기호를 이스케이프하거나 HTML 엔티티를 깔끔하게 디코딩합니다.',
    keywords: [
      'HTML 엔티티 인코더',
      'HTML 이스케이프',
      'HTML 엔티티 디코더',
      'HTML 특수 문자 변환',
      '온라인 HTML 인코딩',
      'HTML 문자 이스케이프 도구',
      '엔티티 디코딩',
      'HTML 코드 이스케이프',
      '특수 문자 HTML 변환',
    ],
    seo: {
      title: 'HTML 엔티티 인코더: 특수 문자를 안전하게 이스케이프하는 도구 | UtilityFlow',
      description:
        '예약된 HTML 문자(<, >, &, 따옴표)와 비 ASCII 기호를 이스케이프하거나 HTML 엔티티를 깔끔하게 디코딩하세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료입니다. 문서와 블로그에 코드 예시를 넣을 때 유용하며, 입력한 텍스트는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: 'HTML 엔티티 인코더',
      secondaryKeywords: ['HTML 이스케이프', 'HTML 엔티티 디코더', 'HTML 특수 문자 변환', '온라인 HTML 인코딩'],
      longTailKeywords: ['온라인 HTML 특수 문자 이스케이프', 'HTML 엔티티 디코딩 무료 도구', 'HTML 코드 예시 이스케이프 변환', '따옴표 꺾쇠 HTML 엔티티 변환'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '코드 예시를 문서에 그대로 표시하거나, HTML 엔티티로 인코딩된 텍스트를 원래 문자로 되돌리세요.',
  },
  'json-csv-converter': {
    slug: 'json-csv-byeonhwangi',
    name: 'JSON-CSV 변환기',
    shortDescription:
      'JSON 배열을 RFC 4180 CSV 스프레드시트로 변환하고 따옴표가 포함된 CSV 파일을 다시 깔끔한 JSON으로 변환합니다.',
    keywords: [
      'JSON CSV 변환기',
      'JSON을 CSV로',
      'CSV를 JSON으로',
      'JSON CSV 변환 온라인',
      '스프레드시트 JSON 변환',
      'CSV JSON 변환기',
      'RFC 4180 CSV',
      'JSON 배열 CSV 변환',
      '온라인 JSON CSV 변환',
    ],
    seo: {
      title: 'JSON-CSV 변환기: 스프레드시트 형식으로 변환하는 무료 도구 | UtilityFlow',
      description:
        'JSON 배열을 RFC 4180 CSV 스프레드시트로 변환하고, 따옴표가 포함된 CSV 파일을 다시 깔끔한 JSON으로 변환하세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료입니다. 스프레드시트 데이터를 주고받을 때 유용하며, 입력한 데이터는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: 'JSON CSV 변환기',
      secondaryKeywords: ['JSON을 CSV로', 'CSV를 JSON으로', 'JSON CSV 변환 온라인', '스프레드시트 JSON 변환'],
      longTailKeywords: ['온라인 JSON 배열 CSV 변환 무료', 'CSV 파일 JSON 변환 따옴표 처리', 'RFC 4180 CSV 스프레드시트 변환', 'JSON CSV 양방향 변환 도구'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'API 데이터를 스프레드시트로 가져오거나, 스프레드시트 데이터를 API용 JSON으로 바꾸세요. 따옴표와 쉼표도 올바르게 처리합니다.',
  },
  'unix-timestamp-converter': {
    slug: 'yunikseu-taimseutaempeu-byeonhwangi',
    name: '유닉스 타임스탬프 변환기',
    shortDescription:
      '유닉스 에포크 초 또는 밀리초를 ISO 8601, UTC, 로컬 날짜로 변환하고 그 반대로도 변환합니다.',
    keywords: [
      '유닉스 타임스탬프 변환기',
      '에포크 시간 변환',
      '타임스탬프 날짜 변환',
      'Unix 시간 변환기',
      '에포크 초 변환',
      'ISO 8601 변환',
      '타임스탬프 계산기',
      '날짜 타임스탬프 변환',
      '온라인 타임스탬프 변환',
    ],
    seo: {
      title: '유닉스 타임스탬프 변환기: 날짜와 시간을 변환하는 무료 온라인 도구 | UtilityFlow',
      description:
        '유닉스 에포크 초 또는 밀리초를 ISO 8601, UTC, 로컬 날짜로 변환하고 그 반대로도 변환하세요. 초와 밀리초를 자동 감지하며 브라우저에서 무료로 사용할 수 있습니다. 로그 시간과 API 타임스탬프를 확인할 때 유용하며, 입력한 값은 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '유닉스 타임스탬프 변환기',
      secondaryKeywords: ['에포크 시간 변환', '타임스탬프 날짜 변환', 'Unix 시간 변환기', 'ISO 8601 변환'],
      longTailKeywords: ['온라인 유닉스 타임스탬프 날짜 변환', '에포크 초 밀리초 자동 감지 변환', 'ISO 8601 UTC 로컬 날짜 변환', '날짜를 유닉스 타임스탬프로 변환'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'API 로그와 데이터베이스에 저장된 숫자 시간을 사람이 읽을 수 있는 날짜로 바꾸거나, 날짜를 타임스탬프로 변환하세요.',
  },
  'sql-formatter': {
    slug: 'sql-pomaeteo',
    name: 'SQL 포맷터',
    shortDescription:
      'SQL 쿼리를 포맷하고 들여쓰기를 정리하고 키워드를 대문자 또는 소문자로 표준화하거나 한 줄로 압축합니다.',
    keywords: [
      'SQL 포맷터',
      'SQL 정리 도구',
      'SQL 쿼리 포맷',
      '온라인 SQL 포맷터',
      'SQL 들여쓰기 정리',
      'SQL 키워드 대문자',
      'SQL 압축기',
      'SQL 쿼리 보기 좋게',
      'SQL 문법 정리',
    ],
    seo: {
      title: 'SQL 포맷터: 쿼리를 보기 좋게 정리하는 무료 온라인 정리 도구 | UtilityFlow',
      description:
        'SQL 쿼리를 포맷하고 들여쓰기를 정리하고 키워드를 대문자 또는 소문자로 표준화하거나 한 줄로 압축하세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료입니다. 복잡한 조인 쿼리를 검토할 때 유용하며, 입력한 쿼리는 브라우저 안에서만 안전하게 처리됩니다. 무료로 바로 써 보세요.',
      primaryKeyword: 'SQL 포맷터',
      secondaryKeywords: ['SQL 정리 도구', 'SQL 쿼리 포맷', '온라인 SQL 포맷터', 'SQL 들여쓰기 정리'],
      longTailKeywords: ['온라인 SQL 쿼리 포맷 들여쓰기 정리', 'SQL 키워드 대문자 소문자 표준화', '복잡한 조인 쿼리 보기 좋게 정리', 'SQL 한 줄 압축 무료 도구'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '한 줄로 뭉친 쿼리를 읽기 쉬운 형태로 펼치고, 키워드 대소문자를 통일하고, 복잡한 조인을 구조적으로 정리하세요.',
  },
  'css-minifier': {
    slug: 'css-apchukgi',
    name: 'CSS 압축기',
    shortDescription:
      'CSS 스타일시트를 압축해 번들 크기를 줄이거나 압축된 CSS 규칙을 깔끔한 들여쓰기로 다시 펼칩니다.',
    keywords: [
      'CSS 압축기',
      'CSS Minify',
      'CSS 압축 온라인',
      'CSS 정리 도구',
      'CSS Beautifier',
      '스타일시트 압축',
      'CSS 크기 줄이기',
      'CSS 포맷터',
      '온라인 CSS 압축',
    ],
    seo: {
      title: 'CSS 압축기: 스타일시트 크기를 크게 줄이는 무료 온라인 압축 도구 | UtilityFlow',
      description:
        'CSS 스타일시트를 압축해 번들 크기를 줄이거나 압축된 CSS 규칙을 깔끔한 들여쓰기로 다시 펼치세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료로 사용할 수 있습니다. 웹사이트 로딩 속도를 개선할 때 유용하며, 입력한 스타일은 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: 'CSS 압축기',
      secondaryKeywords: ['CSS Minify', 'CSS 압축 온라인', 'CSS 정리 도구', 'CSS Beautifier'],
      longTailKeywords: ['온라인 CSS 스타일시트 압축 무료', 'CSS 번들 크기 줄이기 도구', '압축된 CSS 보기 좋게 펼치기', 'CSS 주석 제거 압축 온라인'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '스타일시트에서 불필요한 공백과 주석을 제거해 파일 크기를 줄이거나, 압축된 CSS를 읽기 쉬운 형태로 다시 펼치세요.',
  },
  'js-formatter': {
    slug: 'js-pomaeteo',
    name: 'JS 포맷터',
    shortDescription:
      '주석과 불필요한 공백을 제거해 자바스크립트 스니펫을 압축하거나 압축된 코드 블록을 보기 좋게 펼칩니다.',
    keywords: [
      'JS 포맷터',
      '자바스크립트 포맷터',
      'JS 압축기',
      '자바스크립트 압축',
      '온라인 JS 포맷',
      'JS 코드 정리',
      '자바스크립트 Beautifier',
      'JS Minify',
      '타입스크립트 포맷터',
    ],
    seo: {
      title: 'JS 포맷터: 자바스크립트를 정리하고 압축하는 무료 온라인 편집 도구 | UtilityFlow',
      description:
        '주석과 불필요한 공백을 제거해 자바스크립트 스니펫을 압축하거나, 압축된 코드 블록을 보기 좋게 펼치세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료입니다. 압축된 스크립트를 디버깅할 때 유용하며, 입력한 코드는 브라우저 안에서만 안전하게 처리됩니다. 무료로 바로 써 보세요.',
      primaryKeyword: 'JS 포맷터',
      secondaryKeywords: ['자바스크립트 포맷터', 'JS 압축기', '자바스크립트 압축', '온라인 JS 포맷'],
      longTailKeywords: ['온라인 자바스크립트 코드 포맷 정리', 'JS 주석 공백 제거 압축', '압축된 자바스크립트 보기 좋게 펼치기', '타입스크립트 코드 포맷 온라인'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '압축된 자바스크립트를 읽기 쉬운 형태로 펼치거나, 주석과 공백을 제거해 배포용으로 압축하세요.',
  },
  'cron-expression-parser': {
    slug: 'keuron-pyohyeonsik-paseo',
    name: '크론 표현식 파서',
    shortDescription:
      '5필드 크론 표현식을 쉬운 말로 풀어주고, 프리셋을 살펴보고, 다음 8번의 실행 시간을 미리 봅니다.',
    keywords: [
      '크론 표현식 파서',
      '크론 스케줄 확인',
      '크론탭 생성기',
      '크론 표현식 설명',
      '온라인 크론 파서',
      '크론 다음 실행 시간',
      '크론 프리셋',
      '스케줄 표현식 변환',
      '크론탭 스케줄러',
    ],
    seo: {
      title: '크론 표현식 파서: 스케줄을 쉬운 말로 풀어주는 무료 온라인 도구 | UtilityFlow',
      description:
        '5필드 크론 표현식을 쉬운 말로 풀어주고, 프리셋을 살펴보고, 다음 8번의 실행 시간을 미리 보세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료로 사용할 수 있습니다. 자동 작업 스케줄을 설정할 때 유용하며, 입력한 표현식은 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '크론 표현식 파서',
      secondaryKeywords: ['크론 스케줄 확인', '크론탭 생성기', '크론 표현식 설명', '온라인 크론 파서'],
      longTailKeywords: ['온라인 크론 표현식 쉬운 말 설명', '크론 다음 실행 시간 미리 보기', '5필드 크론탭 스케줄 확인', '크론 프리셋 매시간 매일 설정'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '"0 9 * * 1-5"가 무슨 뜻인지 궁금한가요? 크론 표현식을 쉬운 말로 풀어주고 다음 실행 시간을 미리 보여줍니다.',
  },
  'color-converter': {
    slug: 'saeksang-byeonhwangi',
    name: '색상 변환기',
    shortDescription:
      'HEX, RGB, HSL 간에 색상을 변환하고 라이브 색상 선택기와 WCAG 2.1 AA/AAA 명암비 검사를 사용합니다.',
    keywords: [
      '색상 변환기',
      'HEX RGB 변환',
      'HSL 색상 변환',
      'HEX 색상 코드',
      'RGB HSL 변환기',
      '명암비 검사',
      'WCAG 명암비',
      '온라인 색상 변환',
      '색상 선택기',
    ],
    seo: {
      title: '색상 변환기: HEX·RGB·HSL 변환과 명암비를 확인하는 도구 | UtilityFlow',
      description:
        'HEX, RGB, HSL 간에 색상을 변환하고 라이브 색상 선택기와 WCAG 2.1 AA/AAA 명암비 검사를 사용하세요. 모든 작업은 브라우저에서 로컬로 이루어지며 무료입니다. 접근성 높은 디자인 색상을 고를 때 유용하며, 입력한 값은 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '색상 변환기',
      secondaryKeywords: ['HEX RGB 변환', 'HSL 색상 변환', 'HEX 색상 코드', '명암비 검사'],
      longTailKeywords: ['온라인 HEX RGB HSL 색상 변환', 'WCAG 명암비 AA AAA 검사', '색상 선택기 HEX 코드 확인', '전경 배경 명암비 계산 도구'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '디자인 색상을 HEX, RGB, HSL 형식으로 변환하고, 텍스트와 배경의 명암비가 접근성 기준을 만족하는지 확인하세요.',
  },
};
