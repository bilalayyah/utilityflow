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
    instructions: [
      {
        title: 'Collez ou écrivez votre texte',
        description:
          'Saisissez jusqu’à 12 000 caractères dans l’éditeur. Utilisez les compteurs de mots et de caractères en direct pour vérifier la longueur du brouillon avant de générer.',
      },
      {
        title: 'Choisissez une tâche d’écriture, un ton et une langue',
        description:
          'Sélectionnez l’une des 10 tâches d’écriture (comme Corriger la grammaire, Rendre professionnel, Paraphraser ou Écrire un e-mail), associez un ton de Professionnel à Simple et choisissez votre langue de sortie cible.',
      },
      {
        title: 'Cliquez sur Générer pour traiter votre demande',
        description:
          'Appuyez sur Générer et attendez quelques secondes pendant que la demande est envoyée à Groq pour inférence. Un indicateur de progression s’affiche pendant la production de votre texte amélioré.',
      },
      {
        title: 'Vérifiez et comparez le texte original et amélioré',
        description:
          'Inspectez la vue côte à côte ou les surlignages de modifications au niveau des mots pour voir exactement ce qui a changé, et confirmez que les noms, chiffres et dates sont restés intacts.',
      },
      {
        title: 'Copiez ou téléchargez le résultat',
        description:
          'Utilisez le bouton Copier pour déplacer le texte amélioré dans votre presse-papiers, ou téléchargez-le en fichier TXT pour l’utiliser dans votre document ou votre client de messagerie.',
      },
      {
        title: 'Essayez une autre tâche ou un autre ton si nécessaire',
        description:
          'Si le résultat n’est pas tout à fait correct, changez la tâche ou le ton et générez de nouveau — par exemple, essayez Rendre simple après Rendre professionnel — en gardant à l’esprit la limite quotidienne gratuite de demandes.',
      },
    ],
    examples: [
      {
        title: 'Nettoyage de grammaire et d’orthographe',
        input:
          'Bonjour équipe, je voulais faire un suivi de la réunion d’hier et partager le calendrier mis à jour pour le lancement du quatrième trimestre.',
        output:
          'Bonjour à toute l’équipe, je voulais faire un suivi de la réunion d’hier et partager le calendrier mis à jour pour le lancement du quatrième trimestre.',
        explanation:
          'Tâche : Corriger la grammaire · Ton : Professionnel. Corrige l’accentuation et l’orthographe tout en gardant votre voix exacte.',
      },
      {
        title: 'Notes brutes transformées en e-mail prêt à envoyer',
        input:
          'demander à la cliente sarah si jeudi 14h lui convient pour l’appel de révision du design, mentionner que le mockup v2 est prêt et le lien joint',
        output:
          'Objet : Appel de révision du design et Mockup v2\n\nBonjour Sarah,\n\nJe voulais vous informer que le Mockup v2 est prêt et joint pour votre révision. Jeudi à 14 h 00 vous conviendrait-il pour un bref appel de révision du design ?\n\nCordialement,',
        explanation:
          'Tâche : Écrire un e-mail · Ton : Amical. Structure des notes en puces en un e-mail poli et factuel sans inventer de détails.',
      },
    ],
    benefits: [
      'Accès 100 % gratuit sans inscription, connexion ni barrières d’abonnement',
      '10 modes d’écriture spécialisés plus 7 préréglages de ton et une sortie multilingue',
      'Préserve les noms, chiffres, dates et le sens sans fabriquer de données',
      'Comparaison côte à côte et suivi des modifications surlignées au niveau des mots',
    ],
    useCases: [
      'Peaufiner les e-mails, propositions et mises à jour de statut clients avant l’envoi',
      'Corriger les erreurs de grammaire, de ponctuation et d’orthographe dans les dissertations ou rapports',
      'Simplifier des paragraphes techniques denses pour des audiences plus larges',
      'Convertir des brouillons de discussion informels en communication professionnelle formelle',
    ],
    faqs: [
      {
        question: 'L’assistant d’écriture IA est-il entièrement gratuit sans inscription ?',
        answer:
          'Oui. Vous n’avez pas besoin de créer un compte, de saisir une adresse e-mail ni d’ajouter une carte de paiement. Les visiteurs reçoivent jusqu’à 5 demandes d’écriture gratuites par jour UTC.',
      },
      {
        question: 'L’IA invente-t-elle de nouvelles données quand elle réécrit ou développe du texte ?',
        answer:
          'Non. Notre invite système demande au modèle de préserver strictement toutes les données, noms, dates et chiffres d’origine et d’éviter de fabriquer des statistiques ou des affirmations.',
      },
      {
        question: 'UtilityFlow stocke-t-il ou journalise-t-il mon écriture ?',
        answer:
          'UtilityFlow ne stocke, ne journalise ni ne vend votre texte. Les demandes sont envoyées en sécurité via notre backend à Groq pour inférence, et le suivi du quota des visiteurs utilise uniquement un hash SHA-256 quotidien salé.',
      },
      {
        question: 'Que se passe-t-il si j’atteins la limite quotidienne gratuite de demandes ?',
        answer:
          'Les limites quotidiennes se réinitialisent automatiquement à minuit UTC. En attendant, les plus de 85 utilitaires locaux du navigateur — notamment le compteur de mots, le vérificateur de lisibilité et le vérificateur de différences de texte — fonctionnent sans limites.',
      },
      {
        question: 'Quelles tâches d’écriture l’assistant d’écriture IA peut-il gérer ?',
        answer:
          'Il propose 10 tâches, notamment Corriger la grammaire, Rendre professionnel, Paraphraser, Simplifier, Développer, Résumer, Écrire un e-mail, Améliorer la clarté, Changer le ton et Corriger l’orthographe.',
      },
      {
        question: 'Quelle longueur mon texte peut-il avoir dans l’assistant d’écriture IA ?',
        answer:
          'Chaque demande accepte jusqu’à 12 000 caractères. Pour les documents plus longs, divisez le texte en sections et traitez-les une à la fois.',
      },
      {
        question: 'Quels tons puis-je choisir pour mon texte réécrit ?',
        answer:
          'Vous pouvez choisir parmi 7 préréglages de ton, notamment Professionnel, Amical, Formel, Informel, Simple, Assuré et Concis, selon votre audience.',
      },
      {
        question: 'L’assistant d’écriture IA envoie-t-il mon texte à un service externe ?',
        answer:
          'Oui. Votre texte est envoyé en sécurité à Groq pour inférence IA via notre worker backend, car les tâches d’écriture nécessitent un modèle de langage. Il n’est ni stocké ni journalisé par UtilityFlow.',
      },
      {
        question: 'L’assistant d’écriture IA peut-il écrire un e-mail complet à partir de notes brutes ?',
        answer:
          'Oui. Choisissez la tâche Écrire un e-mail, collez vos puces ou notes brutes, et il les structurera en un e-mail poli avec une ligne d’objet et une salutation.',
      },
      {
        question: 'L’assistant d’écriture IA changera-t-il le sens de mon texte ?',
        answer:
          'Il est chargé de préserver votre sens d’origine, vos données, noms, dates et chiffres. Vérifiez toujours la comparaison côte à côte avant d’utiliser le résultat.',
      },
      {
        question: 'Puis-je utiliser l’assistant d’écriture IA pour des dissertations universitaires ?',
        answer:
          'Oui, il peut corriger la grammaire et améliorer la clarté des dissertations et rapports. Vérifiez d’abord les règles de votre établissement, car certaines écoles restreignent l’écriture assistée par IA.',
      },
      {
        question: 'L’assistant d’écriture IA fonctionne-t-il dans d’autres langues que l’anglais ?',
        answer:
          'Oui. Vous pouvez choisir une langue de sortie cible, et l’outil produira le texte amélioré dans cette langue tout en gardant vos données inchangées.',
      },
      {
        question: 'Comment voir exactement ce que l’IA a changé dans mon texte ?',
        answer:
          'La vue des résultats surligne les modifications au niveau des mots et montre votre texte original et amélioré côte à côte, pour que vous puissiez accepter ou rejeter chaque modification mentalement avant de copier.',
      },
      {
        question: 'L’assistant d’écriture IA peut-il paraphraser du texte pour éviter les répétitions ?',
        answer:
          'Oui. La tâche Paraphraser réécrit les phrases avec des mots différents tout en gardant le même sens, ce qui est utile pour des brouillons variés et des résumés.',
      },
      {
        question: 'Que faire si le texte généré contient une erreur ?',
        answer:
          'Modifiez directement le résultat, ou relancez le texte avec une autre tâche ou un autre ton. La sortie IA peut contenir des erreurs : relisez donc les textes importants avant de les envoyer.',
      },
      {
        question: 'Y a-t-il une limite de mots par demande dans l’assistant d’écriture IA ?',
        answer:
          'La limite est de 12 000 caractères par demande, ce qui couvre environ 1 800 à 2 000 mots en anglais. Les textes plus courts produisent généralement des résultats plus rapides et plus précis.',
      },
      {
        question: 'En quoi l’assistant d’écriture IA diffère-t-il du compteur de mots ?',
        answer:
          'Le compteur de mots mesure uniquement les mots, caractères et temps de lecture localement, tandis que l’assistant d’écriture IA réécrit et améliore votre texte avec le modèle de langage de Groq.',
      },
      {
        question: 'L’assistant d’écriture IA peut-il raccourcir ou allonger mon texte ?',
        answer:
          'Oui. Utilisez la tâche Simplifier pour raccourcir les paragraphes denses, ou la tâche Développer pour ajouter des détails et des explications tout en gardant vos données d’origine intactes.',
      },
      {
        question: 'Puis-je télécharger mon texte amélioré sous forme de fichier ?',
        answer:
          'Oui. Après la génération, cliquez sur l’option de téléchargement pour enregistrer le texte amélioré en fichier TXT sur votre appareil.',
      },
      {
        question: 'Que se passe-t-il si ma demande échoue ou expire ?',
        answer:
          'Vérifiez votre connexion Internet et réessayez. Si la limite quotidienne gratuite est atteinte, l’outil vous le dira, et la limite se réinitialise à minuit UTC.',
      },
    ],
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
    instructions: [
      {
        title: 'Collez ou écrivez votre texte source',
        description:
          'Saisissez au moins 25 mots (120+ caractères) jusqu’à 25 000 caractères. Vérifiez le nombre de mots en direct et le temps de lecture estimé sous l’éditeur.',
      },
      {
        title: 'Choisissez la longueur, le format et la langue du résumé',
        description:
          'Sélectionnez la compression Courte, Moyenne ou Longue (Détaillée), choisissez le format Paragraphe, Puces, Points clés ou Langage simple, et choisissez une langue de sortie.',
      },
      {
        title: 'Cliquez sur Résumer pour générer le résumé',
        description:
          'Appuyez sur Résumer le texte et attendez quelques secondes pendant que votre texte est envoyé à Groq pour inférence IA. Un indicateur de progression s’affiche pendant la production du résumé.',
      },
      {
        title: 'Comparez le temps de lecture et vérifiez le résultat',
        description:
          'Examinez le temps de lecture économisé, comparez le résumé avec le texte d’origine, et vérifiez que les noms, chiffres et dates clés restent corrects.',
      },
      {
        title: 'Copiez ou téléchargez le résumé',
        description:
          'Utilisez le bouton Copier pour déplacer le résumé dans votre presse-papiers, ou téléchargez-le en fichier TXT pour vos notes, votre rapport ou votre matériel d’étude.',
      },
      {
        title: 'Essayez une autre longueur ou un autre format si nécessaire',
        description:
          'Si le résumé est trop court ou trop détaillé, changez la longueur ou le format et résumez de nouveau — par exemple, essayez Puces après un résumé en Paragraphe.',
      },
    ],
    examples: [
      {
        title: 'Digest exécutif avec puces',
        input:
          'Étude d’ingénierie de 160 mots comparant des mises à jour écrites deux fois par semaine aux réunions quotidiennes entre 140 ingénieurs.',
        output:
          '- Étude de 140 ingénieurs à Londres, Berlin et Toronto sur six mois.\n- Remplacer trois synchronisations hebdomadaires par des digests deux fois par semaine a réduit la fragmentation du calendrier de 28 % et augmenté la livraison des sprints de 14 %.\n- Le succès dépendait des bloqueurs anticipés, des liens de PR et des dates exactes.',
        explanation:
          'Longueur : Courte · Format : Résumé avec puces. Préserve la taille de l’échantillon, les lieux et les pourcentages exacts.',
      },
      {
        title: 'Résumé long d’un rapport de recherche',
        input:
          'Rapport de recherche de 3 000 mots sur les habitudes d’étude et la réussite scolaire.',
        output:
          'Résumé long (50–60 %) en paragraphes qui conserve la méthodologie, les principales conclusions et les chiffres clés.',
        explanation:
          'Longueur : Longue · Format : Paragraphe. Conserve les détails de méthodologie et les conclusions pour une révision complète.',
      },
    ],
    benefits: [
      'Accès anonyme gratuit sans comptes, abonnements ni crédits',
      'Contrôles de résumé Court (10–20 %), Moyen (30–40 %) et Long (50–60 %)',
      'Modes Paragraphe, Puces, Extraction de points clés et Langage simple',
      'Préserve les noms, statistiques, dates et données sans inventer de détails',
    ],
    useCases: [
      'Convertir de longs articles ou rapports de recherche en notes rapides avec puces',
      'Résumer des transcriptions de réunions et extraire des points d’action numérotés',
      'Traduire et condenser des documents de plusieurs paragraphes en conclusions claires',
      'Estimer le gain de temps de lecture avant de partager des digests exécutifs',
    ],
    faqs: [
      {
        question: 'Pourquoi le résumeur de texte IA exige-t-il au moins 25 mots ?',
        answer:
          'Les textes de moins de 25 mots ou 120 caractères sont trop brefs pour être compressés de façon significative sans perdre le contexte essentiel : l’outil vous demande donc d’ajouter d’abord plus de texte source.',
      },
      {
        question: 'Le résumeur modifie-t-il les noms, chiffres ou dates ?',
        answer:
          'Non. Nos instructions de résumé exigent strictement de garder intacts les chiffres, dates, noms et relations factuelles d’origine sans ajouter d’affirmations externes.',
      },
      {
        question: 'Comment le temps de lecture estimé est-il calculé ?',
        answer:
          'Le temps de lecture estimé utilise une vitesse moyenne de lecture silencieuse de 200 mots par minute pour votre texte d’origine comme pour le résumé généré, pour que vous puissiez voir le temps gagné d’un coup d’œil.',
      },
      {
        question: 'Y a-t-il une limite ou un frais pour utiliser le résumeur de texte IA ?',
        answer:
          'L’outil est entièrement gratuit, sans facturation ni inscription. Les visiteurs reçoivent jusqu’à 5 résumés gratuits par jour UTC, et les 85 outils locaux du navigateur restent illimités.',
      },
      {
        question: 'Quelles longueurs de résumé le résumeur de texte IA propose-t-il ?',
        answer:
          'Vous pouvez choisir des résumés Court (10–20 % de l’original), Moyen (30–40 %) ou Long (50–60 %), selon le niveau de détail que vous voulez conserver.',
      },
      {
        question: 'Quels formats de résumé puis-je choisir ?',
        answer:
          'L’outil propose les formats Paragraphe, Puces, Extraction de points clés et Langage simple, pour adapter le résumé aux notes, rapports ou matériel d’étude.',
      },
      {
        question: 'Quelle longueur le texte que je résume peut-il avoir ?',
        answer:
          'Chaque demande accepte entre 25 mots et 25 000 caractères. Pour les documents plus longs, divisez-les en sections et résumez chaque partie séparément.',
      },
      {
        question: 'Le résumeur de texte IA envoie-t-il mon texte à un service externe ?',
        answer:
          'Oui. Votre texte est envoyé en sécurité à Groq pour inférence IA via notre worker backend, car le résumé nécessite un modèle de langage. UtilityFlow ne le stocke ni ne le journalise.',
      },
      {
        question: 'Le résumeur de texte IA peut-il résumer des transcriptions de réunions ?',
        answer:
          'Oui. Collez la transcription et choisissez le format Points clés ou Puces pour extraire rapidement décisions, points d’action et principaux sujets de discussion.',
      },
      {
        question: 'Le résumé conservera-t-il les données et chiffres d’origine ?',
        answer:
          'Le résumeur est chargé de préserver noms, statistiques, dates et relations factuelles. Vérifiez néanmoins le résumé par rapport à l’original pour les documents importants.',
      },
      {
        question: 'Puis-je résumer des documents de recherche avec le résumeur de texte IA ?',
        answer:
          'Oui. Collez le résumé ou le texte complet et utilisez le format Long pour conserver les détails de méthodologie et les conclusions, ou le format Court pour un aperçu rapide.',
      },
      {
        question: 'Le résumeur de texte IA fonctionne-t-il dans d’autres langues que l’anglais ?',
        answer:
          'Oui. Vous pouvez sélectionner une langue de sortie, et le résumé sera produit dans cette langue tout en gardant les données d’origine inchangées.',
      },
      {
        question: 'Comment le temps de lecture économisé est-il calculé dans le résumeur de texte IA ?',
        answer:
          'L’outil compare le temps de lecture estimé de votre texte d’origine avec celui du résumé, en utilisant une vitesse moyenne de lecture silencieuse de 200 mots par minute.',
      },
      {
        question: 'Le résumeur de texte IA peut-il créer une version en langage simple d’un texte ?',
        answer:
          'Oui. Choisissez le format Langage simple pour obtenir une version simple et facile à lire d’une écriture complexe ou technique, utile pour les étudiants et les non-experts.',
      },
      {
        question: 'Que faire si le résumé omet un point important ?',
        answer:
          'Essayez le format Long ou le format Points clés, qui conservent plus de détails. Vous pouvez aussi diviser le texte et résumer séparément la section omise.',
      },
      {
        question: 'Le résumeur de texte IA est-il bon pour étudier et réviser les examens ?',
        answer:
          'Oui. Résumez les chapitres ou notes de cours en puces et points clés, puis relisez la version courte avant les examens pour rafraîchir les idées principales.',
      },
      {
        question: 'En quoi le résumeur de texte IA diffère-t-il de l’assistant d’écriture IA ?',
        answer:
          'Le résumeur condense un long texte en versions plus courtes, tandis que l’assistant d’écriture corrige la grammaire, réécrit les phrases et change le ton sans raccourcir le texte.',
      },
      {
        question: 'Que se passe-t-il quand j’atteins la limite quotidienne de résumés ?',
        answer:
          'La limite se réinitialise automatiquement à minuit UTC. Jusque-là, vous pouvez utiliser les outils locaux du navigateur, comme le compteur de mots et le vérificateur de densité de mots-clés, sans limites.',
      },
      {
        question: 'Le résumeur de texte IA peut-il gérer directement des PDF ou des pages web ?',
        answer:
          'Non. Collez le texte lui-même dans l’éditeur. Pour les PDF, utilisez d’abord l’extracteur de texte PDF pour copier le texte, puis collez-le dans le résumeur.',
      },
      {
        question: 'Le résumeur de texte IA ajoute-t-il de nouvelles informations à mon résumé ?',
        answer:
          'Non. Il est chargé de résumer uniquement ce qui se trouve dans votre texte et de ne pas ajouter d’affirmations externes, mais vous devez quand même vérifier le résultat pour en confirmer l’exactitude.',
      },
    ],
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
      '100 % gratuit, sans connexion, abonnement ni crédits. Recherche dans notre inventaire vérifié de 85 outils de navigateur + 2 outils IA (jusqu’à 10 recherches IA par jour + correspondance instantanée par mots-clés illimitée).',
    intro:
      'Vous ne savez pas quel outil gère votre tâche ? Décrivez votre objectif en langage simple, même avec des fautes d’orthographe ou une formulation informelle, et notre comparateur hybride mots-clés + IA Groq recommande des outils vérifiés du catalogue en direct d’UtilityFlow avec des justifications claires.',
    instructions: [
      {
        title: 'Décrivez votre tâche ou sélectionnez une suggestion rapide',
        description:
          'Écrivez une demande en langage simple comme « Je veux réduire la taille de mon image à 100 Ko » ou « convertir un PDF en PNG », ou cliquez sur n’importe quel préréglage de tâche rapide.',
      },
      {
        title: 'Filtrez par catégorie si nécessaire',
        description:
          'Réduisez les recommandations aux outils Texte et écriture, Développeur, Calculatrices, Réseaux sociaux, PDF, SEO ou Image et fichier — ou recherchez dans les 87 outils à la fois.',
      },
      {
        title: 'Lancez la recherche et examinez les correspondances',
        description:
          'Soumettez votre demande pour obtenir des correspondances instantanées par mots-clés, ou utilisez une recherche assistée par IA pour la correspondance sémantique. Les résultats sont classés par pertinence pour votre tâche.',
      },
      {
        title: 'Inspectez les justifications et les alternatives',
        description:
          'Lisez la justification en une phrase de chaque recommandation et consultez la liste des alternatives pour comparer des outils similaires avant de choisir.',
      },
      {
        title: 'Ouvrez l’outil vérifié',
        description:
          'Cliquez sur Ouvrir l’outil pour lancer immédiatement l’outil recommandé. Chaque lien est vérifié par rapport au registre en direct : il ouvre donc toujours un outil réel.',
      },
      {
        title: 'Essayez une autre formulation s’il n’y a pas de correspondance',
        description:
          'Si le chercheur signale qu’il n’y a pas de correspondance exacte, reformulez votre tâche avec des mots plus simples ou un autre filtre de catégorie, et consultez la note honnête d’absence de correspondance pour l’option la plus proche.',
      },
    ],
    examples: [
      {
        title: 'Compresser une image à 100 Ko',
        input: 'Je veux réduire la taille de mon image à 100 Ko.',
        output: 'Recommandé : Compresseur d’images (/fr/compresseur-d-images/)',
        explanation:
          'Correspond au compresseur d’images côté client et suggère le redimensionneur et recadreur d’images ou le convertisseur de format d’image comme alternatives.',
      },
      {
        title: 'Gestion honnête de l’absence de correspondance',
        input: 'J’ai besoin de convertir un PDF en Word.',
        output: 'Aucun convertisseur exact PDF vers DOCX disponible ; l’extracteur de texte PDF est suggéré pour le texte brut.',
        explanation:
          'N’invente jamais d’outils manquants ni ne prétend qu’un outil prend en charge des formats qu’il ne prend pas en charge.',
      },
    ],
    benefits: [
      'Recherche gratuite en langage naturel dans les 85 outils de navigateur et 2 outils IA',
      'Correspondance instantanée locale par mots-clés tolérante aux fautes de frappe plus classement sémantique IA Groq',
      'La vérification stricte de l’inventaire garantit zéro outil fabriqué ou lien cassé',
      'Affiche une justification claire en une phrase et jusqu’à 3 alternatives',
    ],
    useCases: [
      'Trouver l’utilitaire PDF, image ou texte adapté sans parcourir chaque catégorie',
      'Relier des objectifs en langage simple à des outils de navigateur exacts avec des formats pris en charge',
      'Vérifier honnêtement si UtilityFlow prend actuellement en charge un format de fichier spécialisé',
      'Comparer plusieurs outils similaires avant de décider lequel utiliser pour une tâche',
    ],
    faqs: [
      {
        question: 'Le chercheur d’outils intelligent IA recommande-t-il parfois des outils qui n’existent pas ?',
        answer:
          'Non. Chaque recommandation renvoyée par l’IA est strictement vérifiée par rapport à notre registre d’outils en direct avant affichage. S’il n’existe pas d’outil correspondant, le chercheur vous le dit honnêtement.',
      },
      {
        question: 'Que se passe-t-il si je fais des fautes d’orthographe dans ma recherche ?',
        answer:
          'Notre classeur local de mots-clés inclut une tolérance aux fautes de frappe par distance d’édition et des synonymes de tâches, et le classeur IA de Groq interprète automatiquement la formulation naturelle et les fautes d’orthographe.',
      },
      {
        question: 'Combien de recherches puis-je lancer gratuitement ?',
        answer:
          'La correspondance instantanée locale par mots-clés est illimitée, et les visiteurs reçoivent jusqu’à 10 recherches gratuites assistées par IA par jour UTC, sans inscription ni paiement.',
      },
      {
        question: 'Comment le chercheur d’outils intelligent IA comprend-il ma demande ?',
        answer:
          'Il combine la correspondance instantanée locale par mots-clés avec le classement sémantique IA de Groq : il comprend donc les objectifs en langage simple, les synonymes et la formulation naturelle — pas seulement les noms exacts d’outils.',
      },
      {
        question: 'Quels outils le chercheur d’outils intelligent IA peut-il recommander ?',
        answer:
          'Il recherche dans le catalogue complet d’UtilityFlow de 88 outils : 85 outils de navigateur dans les catégories texte, développeur, calculatrice, réseaux sociaux, PDF, SEO et image, plus l’assistant d’écriture IA et le résumeur de texte IA.',
      },
      {
        question: 'Le chercheur d’outils intelligent IA envoie-t-il ma recherche à un service externe ?',
        answer:
          'Les recherches assistées par IA envoient le texte de votre demande à Groq pour la correspondance sémantique via notre worker backend. La correspondance instantanée par mots-clés s’exécute localement dans votre navigateur et n’envoie rien.',
      },
      {
        question: 'Puis-je rechercher un outil par format de fichier, comme PDF ou PNG ?',
        answer:
          'Oui. Mentionnez le format dans votre demande, par exemple « convertir un PDF en PNG », et le chercheur recommandera des outils qui prennent en charge ce format, comme PDF vers Images.',
      },
      {
        question: 'Que fait le chercheur d’outils intelligent IA si aucun outil ne correspond à ma tâche ?',
        answer:
          'Il vous dit honnêtement qu’il n’existe pas de correspondance exacte et suggère l’outil disponible le plus proche, au lieu d’inventer un outil ou un lien cassé.',
      },
      {
        question: 'Puis-je filtrer les recommandations d’outils par catégorie ?',
        answer:
          'Oui. Utilisez le filtre de catégorie pour limiter les résultats aux outils Texte et écriture, Développeur, Calculatrices, Réseaux sociaux, PDF, SEO ou Image et fichier avant de rechercher.',
      },
      {
        question: 'Comment fonctionnent les suggestions rapides de tâches dans le chercheur d’outils intelligent IA ?',
        answer:
          'Les suggestions rapides sont des demandes d’exemple en un clic, comme réduire une image à 100 Ko, qui montrent comment formuler une tâche et renvoient instantanément l’outil correspondant.',
      },
      {
        question: 'Pourquoi chaque recommandation inclut-elle une justification ?',
        answer:
          'Chaque résultat montre une explication en une phrase de la raison pour laquelle l’outil correspond à votre objectif, formats pris en charge inclus, pour que vous puissiez juger l’adéquation avant de l’ouvrir.',
      },
      {
        question: 'Le chercheur d’outils intelligent IA peut-il aussi recommander des outils IA ?',
        answer:
          'Oui. Il peut recommander l’assistant d’écriture IA pour la grammaire et la réécriture, et le résumeur de texte IA pour condenser un long texte, quand votre tâche correspond à ces outils.',
      },
      {
        question: 'Le chercheur d’outils intelligent IA est-il gratuit ?',
        answer:
          'Oui. La correspondance par mots-clés est illimitée et gratuite, et les recherches assistées par IA sont gratuites jusqu’à 10 par jour et par visiteur, sans compte, connexion ni paiement.',
      },
      {
        question: 'Que faire si la recommandation principale n’est pas tout à fait correcte ?',
        answer:
          'Consultez la liste des alternatives sous le résultat principal, ou reformulez votre demande avec plus de détails — par exemple, nommez le format de fichier ou la sortie exacte dont vous avez besoin.',
      },
      {
        question: 'Puis-je utiliser le chercheur d’outils intelligent IA pour trouver une calculatrice ?',
        answer:
          'Oui. Décrivez le calcul en mots simples, comme « calculer mon paiement mensuel de prêt », et il recommandera la calculatrice de prêt EMI ou une calculatrice connexe.',
      },
      {
        question: 'En quoi le chercheur d’outils intelligent IA diffère-t-il de la page d’annuaire des outils ?',
        answer:
          'L’annuaire des outils liste les 88 outils par catégorie pour la navigation, tandis que le chercheur d’outils relie votre tâche en langage simple au meilleur outil et explique pourquoi il convient.',
      },
      {
        question: 'Le chercheur d’outils intelligent IA peut-il aider avec des tâches SEO ?',
        answer:
          'Oui. Demandez des choses comme « vérifier la longueur de ma meta description » ou « générer un sitemap », et il vous indiquera le générateur de meta tags, le générateur de sitemap XML ou le vérificateur SEO on-page.',
      },
      {
        question: 'Que se passe-t-il quand j’atteins la limite quotidienne de recherche IA ?',
        answer:
          'La limite de recherche IA se réinitialise à minuit UTC. Jusque-là, la correspondance instantanée par mots-clés continue de fonctionner sans limites : vous pouvez donc toujours trouver des outils par mots-clés.',
      },
      {
        question: 'Le chercheur d’outils intelligent IA peut-il recommander des outils pour l’édition d’images ?',
        answer:
          'Oui. Décrivez votre tâche d’image, comme « compresser cette photo » ou « redimensionner une image », et il recommandera le compresseur d’images, le redimensionneur d’images ou le convertisseur de format d’image.',
      },
      {
        question: 'Les liens du chercheur d’outils intelligent IA fonctionnent-ils toujours ?',
        answer:
          'Oui. Chaque recommandation est vérifiée par rapport au registre d’outils en direct avant affichage : les liens ouvrent donc toujours une page d’outil UtilityFlow réelle et fonctionnelle.',
      },
    ],
  },
};
