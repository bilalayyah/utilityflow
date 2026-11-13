import type { CategoryLocaleOverride } from '../types';

/**
 * Korean overrides for the 7 categories, keyed by category id.
 * Every category: slug (matches CATEGORY_LOCALE_SLUGS.ko in
 * src/locales/config.ts), name, shortName, description, longDescription,
 * seo, sampleToolNames (5 — exactly the Korean tool names).
 * Sample sets follow the English categories' sampleToolNames (the same 5
 * tool ids per category); each name exactly equals the Korean tool name
 * in src/locales/ko/tools/batch*.ts.
 */
export const KO_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'tekseuteu-dogu',
    name: '텍스트·글쓰기 도구',
    shortName: '텍스트·글쓰기',
    description:
      '단어 수를 세고, 텍스트 형식을 바꾸고, 불필요한 공백을 정리하고, 대소문자를 변환하고, 가독성을 바로 브라우저에서 확인하세요.',
    longDescription:
      '작가, 편집자, 콘텐츠 팀, 학생을 위한 정밀한 글쓰기·문자열 조작 유틸리티입니다. 모든 텍스트 작업이 기기에서 즉시 실행되며 초안이 서버로 업로드되지 않습니다.',
    seo: {
      title: '텍스트·글쓰기 도구 – 온라인 단어·문자 세기 유틸리티 무료 모음 | UtilityFlow',
      description:
        '브라우저 기반 텍스트·글쓰기 도구를 살펴보세요. 단어 카운터, 문자 카운터, 대소문자 변환기, 행 정렬기, 텍스트 정리 도구를 로컬에서 즉시 처리합니다. 초안이 서버로 전송되지 않아 비공개로 안전하게 쓸 수 있습니다. 학생과 작가, 편집자 모두 무료로 쓸 수 있습니다.',
      keywords: [
        '텍스트 도구',
        '글쓰기 유틸리티',
        '단어 카운터',
        '문자 카운터',
        '대소문자 변환기',
      ],
    },
    sampleToolNames: [
      '단어 카운터',
      '문자 수 카운터',
      '대소문자 변환기',
      '중복 줄 제거기',
      '텍스트 비교 도구',
    ],
  },
  developer: {
    slug: 'gaebalja-dogu',
    name: '개발자 도구',
    shortName: '개발자',
    description:
      'JSON을 포맷하고, Base64를 인코딩하고, 정규식을 테스트하고, JWT를 디코딩하고, 서버 없이 해시를 만드세요.',
    longDescription:
      '빠른 디버깅과 깔끔한 데이터 변환을 위한 일상적인 엔지니어링 유틸리티입니다. 페이로드를 붙여넣고 구조화된 형식을 검사하며 구문을 로컬에서 검증하므로 민감한 토큰이 기기를 떠나지 않습니다.',
    seo: {
      title: '개발자 도구 – JSON 포맷터·정규식·해시 무료 온라인 도구 모음 | UtilityFlow',
      description:
        '클라이언트 측 개발자 유틸리티로 JSON을 포맷하고, 정규식을 테스트하고, Base64와 URL을 인코딩하고, JWT를 확인하고, UUID를 안전하게 만들 수 있습니다. 토큰과 페이로드가 기기를 떠나지 않아 안전합니다. 민감한 토큰을 안전하게 다루는 데 도움이 됩니다.',
      keywords: [
        '개발자 도구',
        'JSON 포맷터',
        'Base64 인코더',
        '정규식 테스터',
        'JWT 디코더',
      ],
    },
    sampleToolNames: [
      'JSON 포맷터',
      'Base64 인코더·디코더',
      'URL 인코더·디코더',
      'UUID 생성기',
      '정규식 테스터',
    ],
  },
  calculators: {
    slug: 'gyesangi',
    name: '계산기',
    shortName: '계산기',
    description:
      '나이, 백분율, 대출 상환 일정, BMI, 단위 변환, 비즈니스 마진을 확실한 정밀도로 계산하세요.',
    longDescription:
      '정확하고 이해하기 쉬운 금융, 날짜, 건강, 수학 계산기입니다. 단계별 내역과 깔끔한 결과 표를 보고, 입력을 바꾸면 즉시 다시 계산됩니다.',
    seo: {
      title: '계산기 온라인 – 금융·날짜·건강·단위 계산 무료 온라인 도구 모음 | UtilityFlow',
      description:
        '나이, 백분율, 대출 할부, 비즈니스 마진, 단위 변환을 즉시 결과로 계산하는 빠르고 투명한 온라인 계산기를 사용하세요. 가입 없이 무료로 이용할 수 있으며, 단계별 내역과 결과 표를 함께 볼 수 있습니다. 대출과 할인, 날짜 계산을 한 곳에서 모두 해결할 수 있습니다.',
      keywords: [
        '계산기 온라인',
        '나이 계산기',
        '백분율 계산기',
        '대출 계산기',
        '단위 변환기',
      ],
    },
    sampleToolNames: [
      '나이 계산기',
      '백분율 계산기',
      '대출 할부 계산기',
      '할인 마진 계산기',
      '날짜 차이 계산기',
    ],
  },
  'social-media': {
    slug: 'sosyeol-midieo-dogu',
    name: '소셜 미디어 도구',
    shortName: '소셜 미디어',
    description:
      '추적 가능한 UTM 링크를 만들고, 게시물 길이를 미리 보고, QR 코드를 만들며, 최신 소셜 채널용 캡션을 서식 지정하세요.',
    longDescription:
      '크리에이터, 성장 팀, 커뮤니티 관리자를 위한 실용적인 마케팅·게시 도우미입니다. 캠페인 추적 파라미터를 표준화하고 플랫폼 글자 수 제한을 확인하며 언제든 스캔 가능한 QR 코드를 만드세요.',
    seo: {
      title: '소셜 미디어 도구 – QR 코드·UTM 링크·게시물 무료 도구 모음 | UtilityFlow',
      description:
        'UTM 링크를 만들고 QR 코드를 생성하며 소셜 미디어 글자 수 제한을 확인하고 해시태그와 바이오를 서식 지정하는 무료 브라우저 유틸리티입니다. 크리에이터와 마케팅 팀이 캠페인 추적을 표준화할 수 있습니다. 게시 전에 글자 수와 추적 링크를 미리 확인해 실수를 줄일 수 있습니다.',
      keywords: [
        '소셜 미디어 도구',
        'QR 코드 생성기',
        'UTM 생성기',
        '해시태그 서식 도구',
        '캡션 카운터',
      ],
    },
    sampleToolNames: [
      'QR 코드 생성기',
      'UTM 링크 생성기',
      'SNS 글자 수 확인기',
      '유니코드 꾸밈 글자 생성기',
      '프로필 줄바꿈 정리 도구',
    ],
  },
  pdf: {
    slug: 'pdf-dogu',
    name: 'PDF 도구',
    shortName: 'PDF 도구',
    description:
      '개인 파일을 업로드하지 않고 브라우저에서 PDF를 병합, 분할, 재정렬하고 워터마크를 넣고 변환하세요.',
    longDescription:
      '기밀성을 위해 설계된 문서 워크플로입니다. 계약서, 청구서, 학습 자료를 원격 서버가 아니라 WebAssembly와 브라우저 캔버스 API를 이용해 클라이언트 메모리에서 바로 처리합니다.',
    seo: {
      title: 'PDF 도구 – 브라우저에서 PDF 병합·분할·변환 무료 온라인 도구 | UtilityFlow',
      description:
        '민감한 문서를 타사 서버에 업로드하지 않고 브라우저에서 로컬로 PDF를 병합, 분할, 회전, 변환하세요. 완전 무료이며 개인정보가 보호되고, 계약서와 청구서를 안전하게 처리할 수 있습니다. 계약서, 청구서, 학습 자료를 서버 업로드 없이 안전하게 바로 처리할 수 있습니다.',
      keywords: [
        'PDF 도구',
        'PDF 병합',
        'PDF 분할',
        '이미지 PDF 변환',
        '브라우저 PDF 편집기',
      ],
    },
    sampleToolNames: [
      'PDF 합치기',
      'PDF 나누기',
      '이미지 PDF 변환',
      'PDF 페이지 회전',
      'PDF 메타데이터 편집기',
    ],
  },
  seo: {
    slug: 'seo-dogu',
    name: 'SEO 도구',
    shortName: 'SEO 도구',
    description:
      'SERP 스니펫을 미리 보고, 오픈 그래프 태그를 만들고, robots.txt와 XML 사이트맵을 생성하고, 키워드 밀도를 확인하세요.',
    longDescription:
      '퍼블리셔, 인디 창업자, SEO 전문가를 위한 기술·온페이지 검색 최적화 유틸리티입니다. 제목 길이를 검증하고 구조화 메타데이터를 정리하며 깔끔한 SEO 슬러그 URL을 몇 초 만에 만드세요.',
    seo: {
      title: 'SEO 도구 – SERP 미리보기·메타 태그·슬러그 무료 온라인 모음 | UtilityFlow',
      description:
        '무료 SEO 유틸리티로 웹페이지를 최적화하세요. SERP 스니펫 미리보기, 메타 태그 생성기, robots.txt 생성기, 키워드 밀도 검사기를 브라우저에서 제공합니다. 검색 노출과 클릭률을 함께 높일 수 있습니다. 검색 노출과 클릭률을 함께 높일 수 있습니다. 지금 무료로 시작하세요.',
      keywords: [
        'SEO 도구',
        '메타 태그 생성기',
        'SERP 미리보기',
        'robots.txt 생성기',
        '슬러그 생성기',
      ],
    },
    sampleToolNames: [
      '메타 태그 생성기',
      'SERP 스니펫 미리보기',
      'URL 슬러그 생성기',
      'robots.txt 생성기',
      '스키마 마크업 생성기',
    ],
  },
  'image-file': {
    slug: 'imiji-pail-dogu',
    name: '이미지·파일 도구',
    shortName: '이미지·파일',
    description:
      '이미지를 압축하고 크기를 바꾸며 PNG/JPG/WebP를 변환하고, WCAG 대비를 테스트하고, QR 코드를 스캔하고, 파일 해시를 확인하고, 파비콘을 로컬에서 만드세요.',
    longDescription:
      'HTML5 캔버스, Web Crypto API, 파일 API를 이용한 빠르고 클라이언트 측 미디어·암호화·파일 유틸리티입니다. Core Web Vitals용 웹 애셋을 최적화하고, 파일의 SHA-256 체크섬을 검증하고, 이미지 팔레트를 추출하고, 업로드 없이 파비콘을 만드세요.',
    seo: {
      title: '이미지·파일 도구 – 압축·변환·QR 코드·파일 검사 무료 온라인 모음 | UtilityFlow',
      description:
        'PNG, JPG, WebP 이미지를 로컬에서 압축, 크기 변경, 회전, 변환하고 파일 체크섬을 검증하며 QR 코드를 스캔하고 대비를 확인하고 파비콘을 만드세요. 업로드 없이 무료로 모든 작업을 처리할 수 있습니다. 업로드 없이 무료로 모든 작업을 처리할 수 있습니다. 지금 시작하세요.',
      keywords: [
        '이미지 도구',
        '이미지 압축기',
        '이미지 크기 조절기',
        'WebP 변환기',
        '색상 대비 검사기',
      ],
    },
    sampleToolNames: [
      '이미지 압축기',
      '이미지 크기 조절기',
      '이미지 형식 변환기',
      '색상 대비 검사기',
      '비밀번호 생성기',
    ],
  },
};
