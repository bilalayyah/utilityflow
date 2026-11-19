import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/es/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 */
export const FR_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'assistant-d-ecriture-ia',
    name: 'Assistant d’Écriture IA',
    shortDescription:
      'Corrigez la grammaire, réécrivez des phrases, ajustez le ton, paraphrasez, développez des idées et rédigez des e-mails clairs gratuitement, sans inscription.',
    keywords: [
      'assistant écriture ia',
      'correcteur grammaire gratuit',
      'réécrivain de phrases',
      'paraphraseur de texte',
      'convertisseur de ton',
      'assistant rédaction e-mails',
      'correction orthographe',
      'simplificateur de phrases',
      'correcteur texte ia',
    ],
    seo: {
      title: 'Assistant d’Écriture IA – Grammaire et Ton | UtilityFlow',
      description:
        'Corrigez la grammaire, réécrivez des phrases, ajustez le ton, simplifiez ou développez des paragraphes et rédigez des e-mails gratuitement, sans inscription.',
      primaryKeyword: 'assistant écriture ia',
      secondaryKeywords: [
        'correcteur grammaire gratuit ia',
        'réécrivain phrases ia',
        'paraphraseur texte ia',
        'assistant écriture e-mails ia',
      ],
      longTailKeywords: [
        'assistant écriture ia gratuit sans inscription',
        'rendre texte plus professionnel avec outil ia',
        'réécrire paragraphe en gardant sens gratuit',
        'corriger grammaire et orthographe en ligne gratuit',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % gratuit, sans connexion, abonnement ni crédits. Forfait gratuit : jusqu’à 5 demandes d’écriture par jour et par visiteur (12 000 caractères maximum), alimenté par l’inférence gratuite de Groq sans stocker votre texte.',
    intro:
      'Peaufinez vos brouillons proprement en quelques secondes sans créer de compte. Choisissez parmi 10 tâches d’écriture — notamment la correction grammaticale, la paraphrase, le changement de ton, la simplification de phrases et la rédaction d’e-mails — tout en préservant strictement votre sens et vos données d’origine.',
  },
  'ai-text-summarizer': {
    slug: 'resumeur-de-texte-ia',
    name: 'Résumeur de Texte IA',
    shortDescription:
      'Condensez articles, rapports et notes en résumés courts, moyens ou longs avec puces et points clés, gratuitement.',
    keywords: [
      'résumeur texte ia',
      'résumeur article gratuit',
      'résumé avec puces',
      'extracteur points clés',
      'résumeur de paragraphes',
      'résumé en langage simple',
      'calculateur temps de lecture',
      'résumer long texte en ligne',
      'générateur résumé ia gratuit',
    ],
    seo: {
      title: 'Résumeur de Texte IA – Résumés Courts | UtilityFlow',
      description:
        'Résumez de longs articles, notes de recherche et rapports en paragraphes courts, puces ou points clés, gratuitement, rapidement et en ligne, sans inscription.',
      primaryKeyword: 'résumeur texte ia',
      secondaryKeywords: [
        'résumeur article gratuit',
        'résumeur texte avec puces',
        'extraire points clés avec ia',
        'générateur résumé de paragraphe',
      ],
      longTailKeywords: [
        'résumeur texte ia gratuit sans inscription',
        'résumer long article en gardant chiffres et données',
        'résumeur texte court moyen et long en ligne',
        'résumer document recherche en puces',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % gratuit, sans connexion, abonnement ni crédits. Forfait gratuit : jusqu’à 5 résumés par jour et par visiteur (jusqu’à 25 000 caractères par demande), alimenté par l’inférence gratuite de Groq sans stocker votre texte.',
    intro:
      'Distillez de longs articles, rapports, dissertations et transcriptions de réunions en résumés nets sans créer de compte. Choisissez des longueurs Courte (10–20 %), Moyenne (30–40 %) ou Longue (50–60 %) dans des formats paragraphe, puces, points clés et langage simple, tout en préservant noms, chiffres et dates.',
  },
  'ai-tool-finder': {
    slug: 'chercheur-d-outils-ia',
    name: 'Chercheur d’Outils Intelligent IA',
    shortDescription:
      'Décrivez votre tâche en langage simple, avec des fautes de frappe ou une formulation naturelle, pour trouver instantanément le meilleur outil UtilityFlow correspondant.',
    keywords: [
      'chercheur outils ia',
      'recherche intelligente outils',
      'trouver outil utilitaire',
      'recommander outil en ligne',
      'recherche outils langage naturel',
      'trouver outil gratuit en ligne',
      'recommandateur outils utilitaires',
      'rechercher outils par tâche',
      'chercheur utilitaires en ligne',
    ],
    seo: {
      title: 'Chercheur d’Outils IA – Trouvez le Bon Outil | UtilityFlow',
      description:
        'Décrivez ce dont vous avez besoin en langage simple pour découvrir l’outil adapté parmi les 88 d’UtilityFlow, rapidement, gratuitement et sans liens inventés.',
      primaryKeyword: 'chercheur outils ia',
      secondaryKeywords: [
        'chercheur outils en ligne',
        'trouver bon outil utilitaire',
        'recommandateur outils ia',
        'recherche outils utilityflow',
      ],
      longTailKeywords: [
        'trouver outil en ligne gratuit pour ma tâche',
        'rechercher outils utilitaires par problème en langage simple',
        'découverte outils ia sans inscription',
        'quel outil en ligne me faut-il pour pdf',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100 % gratuit, sans connexion, abonnement ni crédits. Recherche dans notre inventaire vérifié de 84 outils de navigateur, 3 outils IA et la Calculatrice de Devises (jusqu’à 10 recherches IA par jour + correspondance instantanée par mots-clés illimitée).',
    intro:
      'Vous ne savez pas quel outil gère votre tâche ? Décrivez votre objectif en langage simple, même avec des fautes d’orthographe ou une formulation informelle, et notre comparateur hybride mots-clés + IA Groq recommande des outils vérifiés du catalogue en direct d’UtilityFlow avec des justifications claires.',
  },
};
