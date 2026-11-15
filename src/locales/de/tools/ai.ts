import type { ToolLocaleOverride } from '../../types';

/**
 * German overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/fr/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 * Fixed German slugs (src/locales/config.ts STATIC_PATHS):
 * ki-schreibassistent, ki-text-zusammenfasser, ki-tool-finder.
 */
export const DE_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'ki-schreibassistent',
    name: 'KI-Schreibassistent',
    shortDescription:
      'Korrigiere Grammatik, schreibe Sätze um, passe den Ton an, paraphrasiere, erweitere Ideen und entwirf klare E-Mails – kostenlos, ohne Anmeldung.',
    keywords: [
      'ki schreibassistent',
      'kostenlose grammatikprüfung',
      'sätze umschreiben',
      'text paraphrasieren',
      'tonfall ändern',
      'e-mail schreibassistent',
      'rechtschreibkorrektur',
      'sätze vereinfachen',
      'ki text korrigieren',
    ],
    seo: {
      title: 'KI-Schreibassistent – Grammatik & Tonfall | UtilityFlow',
      description:
        'Korrigiere Grammatik, schreibe Sätze um, passe den Ton an, vereinfache oder erweitere Absätze und schreibe klare E-Mails und Texte – kostenlos, ohne Anmeldung.',
      primaryKeyword: 'ki schreibassistent',
      secondaryKeywords: [
        'kostenlose grammatikprüfung ki',
        'ki sätze umschreiben',
        'ki text paraphrasieren',
        'ki e-mail schreibassistent',
      ],
      longTailKeywords: [
        'kostenloser ki schreibassistent ohne anmeldung',
        'text professioneller machen mit ki tool',
        'absatz umschreiben und bedeutung erhalten kostenlos',
        'grammatik und rechtschreibung online kostenlos korrigieren',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % kostenlos, ohne Login, Abo oder Credits. Kostenloses Kontingent: bis zu 5 Schreibanfragen pro Tag und Besucher (maximal 12.000 Zeichen), betrieben mit kostenloser Groq-Inferenz, ohne deinen Text zu speichern.',
    intro:
      'Verfeinere deine Entwürfe in Sekunden sauber, ohne ein Konto zu erstellen. Wähle aus 10 Schreibaufgaben – darunter Grammatikkorrektur, Paraphrasieren, Tonwechsel, Satzvereinfachung und E-Mail-Entwurf – und bewahre dabei strikt deine ursprüngliche Bedeutung und deine Fakten.',
  },
  'ai-text-summarizer': {
    slug: 'ki-text-zusammenfasser',
    name: 'KI-Text-Zusammenfasser',
    shortDescription:
      'Fasse Artikel, Berichte und Notizen in kurze, mittlere oder lange Zusammenfassungen mit Stichpunkten und Kernaussagen zusammen – kostenlos.',
    keywords: [
      'ki text zusammenfasser',
      'kostenloser artikel zusammenfasser',
      'zusammenfassung mit stichpunkten',
      'kernaussagen extraktor',
      'absatz zusammenfasser',
      'zusammenfassung in einfacher sprache',
      'lesezeit rechner',
      'langen text online zusammenfassen',
      'ki zusammenfassung generator kostenlos',
    ],
    seo: {
      title: 'KI-Text-Zusammenfasser – Texte kürzen | UtilityFlow',
      description:
        'Fasse lange Artikel, Forschungsnotizen und Berichte in kurze Absätze, Stichpunkte oder Kernaussagen zusammen – kostenlos, schnell und online, ohne Anmeldung.',
      primaryKeyword: 'ki text zusammenfasser',
      secondaryKeywords: [
        'kostenloser artikel zusammenfasser',
        'text zusammenfasser mit stichpunkten',
        'kernaussagen mit ki extrahieren',
        'absatz zusammenfassung generator',
      ],
      longTailKeywords: [
        'ki text zusammenfasser kostenlos ohne anmeldung',
        'langen artikel zusammenfassen und zahlen und fakten erhalten',
        'kurzer mittlerer und langer text zusammenfasser online',
        'forschungspapier in stichpunkte zusammenfassen',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % kostenlos, ohne Login, Abo oder Credits. Kostenloses Kontingent: bis zu 5 Zusammenfassungen pro Tag und Besucher (bis zu 25.000 Zeichen pro Anfrage), betrieben mit kostenloser Groq-Inferenz, ohne deinen Text zu speichern.',
    intro:
      'Destilliere lange Artikel, Berichte, Aufsätze und Meeting-Transkripte in prägnante Zusammenfassungen, ohne ein Konto zu erstellen. Wähle kurze (10–20 %), mittlere (30–40 %) oder lange (50–60 %) Längen in Absatz-, Stichpunkt-, Kernaussagen- und Einfache-Sprache-Formaten und bewahre dabei Namen, Zahlen und Daten.',
  },
  'ai-tool-finder': {
    slug: 'ki-tool-finder',
    name: 'Intelligenter KI-Tool-Finder',
    shortDescription:
      'Beschreibe deine Aufgabe in einfacher Sprache – mit Tippfehlern oder natürlicher Formulierung –, um sofort das am besten passende UtilityFlow-Tool zu finden.',
    keywords: [
      'ki tool finder',
      'intelligente tool suche',
      'utility tool finden',
      'online tool empfehlen',
      'tool suche in natürlicher sprache',
      'kostenloses tool online finden',
      'utility tool empfehlung',
      'tools nach aufgabe suchen',
      'ki tool suche online',
    ],
    seo: {
      title: 'KI-Tool-Finder – Das passende Tool finden | UtilityFlow',
      description:
        'Beschreibe, was du brauchst, in einfacher Sprache, um das passende Tool unter den 88 von UtilityFlow zu entdecken – schnell, kostenlos und ohne erfundene Links.',
      primaryKeyword: 'ki tool finder',
      secondaryKeywords: [
        'online tool finder',
        'passendes utility tool finden',
        'ki tool empfehlung',
        'utilityflow tool suche',
      ],
      longTailKeywords: [
        'kostenloses online tool für meine aufgabe finden',
        'utility tools nach problem in einfacher sprache suchen',
        'ki tool entdeckung ohne anmeldung',
        'welches online tool brauche ich für pdf',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % kostenlos, ohne Login, Abo oder Credits. Durchsucht unser verifiziertes Inventar von 85 Browser-Tools + 2 KI-Tools (bis zu 10 KI-Suchen pro Tag + unbegrenzte sofortige Keyword-Suche).',
    intro:
      'Du weißt nicht, welches Tool deine Aufgabe löst? Beschreibe dein Ziel in einfacher Sprache – auch mit Rechtschreibfehlern oder informeller Formulierung –, und unser hybrider Keyword- + Groq-KI-Abgleich empfiehlt verifizierte Tools aus dem Live-Katalog von UtilityFlow mit klaren Begründungen.',
  },
};
