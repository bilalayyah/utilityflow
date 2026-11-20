import type { ToolFAQ } from '../types/tool';
import type { LocaleCode } from './config';
import { enStrings } from './en/ui';
import { getActiveLocaleData } from './store';
import type { InfoSection, LocaleData, WhyChooseItem } from './types';

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
    about: string;
    contact: string;
    blog: string;
    allTools: string;
    searchPlaceholder: string;
    searchTools: string;
    closeSearch: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    language: string;
    chooseLanguage: string;
  };
  footer: {
    tagline: string;
    categories: string;
    platformAi: string;
    trustLegal: string;
    home: string;
    allToolsDirectory: string;
    blog: string;
    aboutUs: string;
    contact: string;
    privacyPolicy: string;
    termsOfService: string;
    xmlSitemap: string;
    rightsReserved: string;
    deployedNote: string;
  };
  consent: {
    message: string;
    accept: string;
    decline: string;
    cookieSettings: string;
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
    metrics: {
      toolCategories: string;
      browserUtilities: string;
      liveTools: string;
      accountRequired: string;
      none: string;
    };
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
      toolsActive: string;
      openCategory: string;
    };
    why: { title: string; description: string; items: WhyChooseItem[] };
    faq: { title: string; description: string };
    faqs: ToolFAQ[];
    trustLine: string;
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
    loadingWorkspace: string;
    input: string;
    output: string;
    relatedTitle: string;
    relatedDescription: string;
    browseAll: string;
    moreToolsIn: string;
    willAppear: string;
    /** L-12: tool-page byline ("By Bilal") + last-updated line. */
    bylineAuthor: string;
    lastUpdated: string;
  };
  blog: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    searchArticles: string;
    noResults: string;
    featured: string;
    latest: string;
    browseByCategory: string;
    relatedArticles: string;
    relatedTools: string;
    readingTime: string;
    publishedOn: string;
    updatedOn: string;
    byEditorial: string;
    tableOfContents: string;
    prevArticle: string;
    nextArticle: string;
    share: string;
    tryTool: string;
    guidesInCategory: string;
    /** Localized word for "Guides" used in the blog-category page title
     * ("<Category> <Guides> | UtilityFlow Blog") — Phase 8 fix F4. */
    categoryGuidesWord: string;
    noArticlesYet: string;
    noArticlesYetDescription: string;
    backToBlog: string;
    allArticles: string;
    notAvailableInLanguage: string;
    minRead: string;
  };
  comments: {
    title: string;
    note: string;
    namePlaceholder: string;
    commentPlaceholder: string;
    postButton: string;
    posting: string;
    empty: string;
    loadError: string;
    postError: string;
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
    /** Fix #14: who runs the project (E-E-A-T). */
    orgTitle: string;
    orgP1: string;
    orgP2: string;
    /** Fix #12: how tools are built and tested. */
    howTitle: string;
    howP1: string;
    howP2: string;
    /** Fix #12: who the tools are for. */
    whoTitle: string;
    whoP1: string;
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
    /** Fix #12: what to write about + what happens next. */
    aboutTitle: string;
    aboutP1: string;
    aboutP2: string;
    responseTitle: string;
    responseP1: string;
    responseP2: string;
    name: string;
    email: string;
    topic: string;
    message: string;
    submit: string;
    sending?: string;
    sendError?: string;
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
 * Chrome dictionary for the requested locale. Locale data is NOT statically
 * imported here anymore: the active locale's dictionary is loaded on demand
 * (loader.ts) and held in store.ts. `data` is an OPTIONAL trailing
 * parameter (default: the active data from the store). If locale === 'en',
 * or the loaded data covers a different locale, English is returned — a
 * partially translated locale never breaks a page.
 */
export function getUiStrings(
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): UiStrings {
  if (locale === 'en' || locale !== data.code) return enStrings;
  return data.uiStrings;
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
