import type { ToolFAQ } from '../types/tool';
import type { LocaleCode, NonDefaultLocale } from './config';
import { enStrings } from './en/ui';
import { esStrings } from './es/ui';
import { deStrings } from './de/ui';
import { frStrings } from './fr/ui';
import { itStrings } from './it/ui';
import { ptStrings } from './pt/ui';
import type { InfoSection, WhyChooseItem } from './types';

/**
 * Chrome dictionary: every user-facing string outside tool registry content
 * and tool workbench components. One shape for all locales — adding a
 * language means adding one file under locales/<code>/ui.ts.
 *
 * Templates use {placeholder} tokens; render them with formatString().
 * Brand name, email addresses and URLs stay identical across locales.
 */
export interface UiStrings {
  nav: {
    tools: string;
    categories: string;
    aiTools: string;
    about: string;
    contact: string;
    allTools: string;
    freeAiTools: string;
    viewAiSection: string;
    searchPlaceholder: string;
    searchTools: string;
    closeSearch: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    language: string;
    chooseLanguage: string;
    aiWriting: { label: string; desc: string };
    aiSummarizer: { label: string; desc: string };
    aiFinder: { label: string; desc: string };
  };
  footer: {
    tagline: string;
    categories: string;
    platformAi: string;
    legal: string;
    home: string;
    allToolsDirectory: string;
    aboutUs: string;
    contact: string;
    privacyPolicy: string;
    termsOfService: string;
    xmlSitemap: string;
    rightsReserved: string;
    deployedNote: string;
  };
  common: {
    copy: string;
    copied: string;
    download: string;
    clear: string;
    loadSample: string;
    reset: string;
    search: string;
    close: string;
    cancel: string;
    save: string;
    submit: string;
    loading: string;
    processing: string;
    upload: string;
    chooseFile: string;
    dragDrop: string;
    tryAgain: string;
    openTool: string;
    browserSide: string;
    freeAiTool: string;
    externalApi: string;
  };
  home: {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string[];
    eyebrow: string;
    h1: string;
    heroDescription: string;
    exploreCategories: string;
    openDirectory: string;
    aiWriting: string;
    aiSummarizer: string;
    aiFinder: string;
    metrics: {
      toolCategories: string;
      browserUtilities: string;
      liveTools: string;
      accountRequired: string;
      none: string;
    };
    aiSpotlight: { badge: string; title: string; description: string };
    popular: { title: string; description: string; viewDirectory: string };
    categories: { title: string; description: string; includes: string };
    directory: {
      title: string;
      description: string;
      filterPlaceholder: string;
      allCategories: string;
      noMatch: string;
      resetFilters: string;
      upcomingUtilities: string;
      scheduledInBatch: string;
      toolsActive: string;
      openCategory: string;
    };
    why: { title: string; description: string; items: WhyChooseItem[] };
    faq: { title: string; description: string };
    faqs: ToolFAQ[];
  };
  directory: {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string[];
    title: string;
    description: string;
    searchPlaceholder: string;
    showing: string;
    all: string;
    availableTools: string;
    categorySuites: string;
    visitHub: string;
    plannedToolsInclude: string;
    noMatch: string;
    clearFilters: string;
  };
  category: {
    batchLabel: string;
    plannedCount: string;
    toolsCount: string;
    toolsLive: string;
    ofToolsLive: string;
    availableTools: string;
    exploreOther: string;
    scheduledTitle: string;
    scheduledDescription: string;
    plannedToolsTitle: string;
  };
  toolPage: {
    howToUse: string;
    practicalExamples: string;
    faqs: string;
    keyBenefits: string;
    commonUseCases: string;
    runsLocally: string;
    externalApi: string;
    freeAiTool: string;
    loadingWorkspace: string;
    input: string;
    output: string;
    relatedTitle: string;
    relatedDescription: string;
    browseAll: string;
    moreToolsIn: string;
    willAppear: string;
  };
  search: {
    placeholder: string;
    search: string;
    tools: string;
    categories: string;
    noResults: string;
    viewDirectory: string;
    clearSearch: string;
    ariaLabel: string;
  };
  notFound: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    returnHome: string;
    browseDirectory: string;
    browseCategories: string;
  };
  about: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    intro: string;
    whyTitle: string;
    whyP1: string;
    whyP2: string;
    principlesTitle: string;
    principles: WhyChooseItem[];
    categoriesTitle: string;
    feedbackTitle: string;
    feedbackBefore: string;
    feedbackLink: string;
    feedbackAfter: string;
  };
  contact: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    intro: string;
    name: string;
    email: string;
    topic: string;
    message: string;
    submit: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    topics: string[];
    errors: {
      name: string;
      emailEmpty: string;
      emailInvalid: string;
      subject: string;
      message: string;
    };
    successTitle: string;
    successThanks: string;
    successNote: string;
    sendAnother: string;
    directEmail: string;
    directEmailText: string;
  };
  privacy: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    lastUpdated: string;
    /** Sections 1-5. Section 6 (Contact) renders from contactBefore/Link/Middle. */
    sections: InfoSection[];
    contactTitle: string;
    contactBefore: string;
    contactLink: string;
    contactMiddle: string;
  };
  terms: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    lastUpdated: string;
    /** Sections 2-5. Section 1 renders from acceptance*, section 6 from changes*. */
    sections: InfoSection[];
    acceptanceTitle: string;
    acceptanceBefore: string;
    acceptanceLink: string;
    acceptanceAfter: string;
    changesTitle: string;
    changesBefore: string;
    changesLink: string;
    changesAfter: string;
  };
}

/**
 * Chrome dictionaries per non-default locale. A locale whose dictionary is
 * not registered here falls back to English — a partially translated locale
 * never breaks a page. Translators: replace the stub re-export in
 * locales/<code>/ui.ts with the real dictionary and register it here.
 */
const LOCALIZED_STRINGS: Record<NonDefaultLocale, UiStrings> = {
  es: esStrings,
  pt: ptStrings,
  fr: frStrings,
  de: deStrings,
  it: itStrings,
};

export function getUiStrings(locale: LocaleCode): UiStrings {
  if (locale === 'en') return enStrings;
  return LOCALIZED_STRINGS[locale] ?? enStrings;
}

/** Replace {placeholder} tokens in a dictionary template. */
export function formatString(
  template: string,
  vars: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) =>
    key in vars ? String(vars[key]) : _match
  );
}
