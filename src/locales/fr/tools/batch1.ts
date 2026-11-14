import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const FR_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'compteur-de-mots',
    name: 'Compteur de Mots',
    shortDescription:
      'Comptez les mots, les caractères, les phrases, les paragraphes, le temps de lecture et les mots-clés les plus répétés, instantanément.',
    keywords: [
      'compteur de mots',
      'compter les mots en ligne',
      'compter les mots d’un texte',
      'calculateur de temps de lecture',
      'compteur de phrases',
      'compteur de paragraphes',
      'compteur de mots gratuit',
      'calculateur de temps de parole',
      'compter caractères et mots',
    ],
    seo: {
      title: 'Compteur de Mots : mots et temps de lecture | UtilityFlow',
      description:
        'Comptez mots, caractères, phrases et paragraphes instantanément et consultez les temps de lecture et de parole estimés, dans votre navigateur sans envoi.',
      primaryKeyword: 'compteur de mots',
      secondaryKeywords: ['compteur de mots en ligne', 'outil de comptage de mots', 'estimateur de temps de lecture', 'compteur de paragraphes'],
      longTailKeywords: ['compter mots et caractères en ligne gratuitement', 'estimer le temps de lecture et de parole d’un texte', 'compteur de mots dans le navigateur sans envoi', 'vérifier le nombre de mots d’une dissertation en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mesurez le nombre exact de mots, le total de caractères, la densité des phrases et les durées estimées de lecture et de prise de parole en temps réel, sans envoyer votre brouillon sur un serveur.',
    instructions: [
      {
        title: 'Collez ou tapez votre brouillon',
        description:
          'Saisissez le texte directement dans l’éditeur ou cliquez sur Charger un exemple pour voir comment les compteurs se mettent à jour.',
      },
      {
        title: 'Consultez les totaux en direct',
        description:
          'Vérifiez les mots, les caractères avec et sans espaces, les phrases, les paragraphes et le temps de lecture estimé dans la barre de résumé.',
      },
      {
        title: 'Vérifiez les temps de lecture et de parole',
        description:
          'Consultez le temps de lecture estimé à 225 mots par minute et le temps de parole à 130 mots par minute pour rythmer vos dissertations, vos exposés et vos scripts vidéo avant de publier.',
      },
      {
        title: 'Repérez les termes répétés',
        description:
          'Parcourez le panneau des mots les plus fréquents pour repérer les répétitions involontaires et resserrer votre formulation avant de finaliser le brouillon.',
      },
      {
        title: 'Copiez ou téléchargez votre texte',
        description:
          'Utilisez le bouton de copie ou téléchargez une sauvegarde .txt de votre brouillon une fois les compteurs satisfaisants.',
      },
      {
        title: 'Résolvez un compteur inattendu',
        description:
          'Si un compteur semble erroné, vérifiez les caractères masqués collés ou les lignes vides supplémentaires ; supprimer les sauts de ligne superflus corrige généralement les totaux de paragraphes et de phrases.',
      },
    ],
    examples: [
      {
        title: 'Vérification de la longueur d’une introduction de blog',
        input: 'Les sites web statiques réduisent la latence du serveur. Les lecteurs restent engagés quand le texte est concis.',
        output: '18 mots · 109 caractères · 2 phrases · 5 s de lecture',
        explanation:
          'Idéal pour vérifier le rythme du titre et du paragraphe d’ouverture avant de publier.',
      },
      {
        title: 'Vérification de la limite de mots d’une dissertation',
        input: 'Paragraphe 1 (240 mots)\n\nParagraphe 2 (255 mots)',
        output: '495 mots · 2 paragraphes · 2 min 12 s de lecture',
        explanation:
          'Confirme un objectif de 500 mots pour une bourse ou un devoir, avec de la marge.',
      },
    ],
    benefits: [
      'Se met à jour instantanément à chaque frappe, dans la mémoire du navigateur',
      'Calcule le temps de lecture (225 mots par minute) et le temps de parole (130 mots par minute)',
      'Affiche vos six mots les plus fréquents pour repérer les formulations répétitives',
      'Exporte des sauvegardes en texte brut directement en fichier .txt',
    ],
    useCases: [
      'Respecter des objectifs de mots stricts pour des dissertations et des demandes de subvention',
      'Chronométrer des exposés, des scripts vidéo et des introductions de podcast',
      'Auditer des brouillons d’articles et des pages de destination pour une structure concise',
      'Vérifier la longueur d’une infolettre avant de programmer des campagnes',
    ],
    faqs: [
      {
        question: 'Comment le Compteur de Mots calcule-t-il les temps de lecture et de parole ?',
        answer:
          'Le temps de lecture se base sur un rythme moyen de lecture silencieuse d’un adulte de 225 mots par minute, tandis que le temps de parole se base sur un rythme de présentation conversationnel de 130 mots par minute.',
      },
      {
        question: 'Les mots avec trait d’union comptent-ils pour un mot ou pour deux ?',
        answer:
          'Les séquences standard délimitées par des espaces sont comptées comme un seul mot, comme dans la plupart des traitements de texte.',
      },
      {
        question: 'Mon texte est-il enregistré ou envoyé quelque part ?',
        answer:
          'Non. Tout le comptage s’effectue localement dans l’onglet de votre navigateur, et votre texte disparaît dès que vous effacez ou fermez la page.',
      },
      {
        question: 'Quelle est la différence entre le Compteur de Mots et le Compteur de Caractères ?',
        answer:
          'Le Compteur de Mots se concentre sur les totaux de mots, les paragraphes, la durée de parole et les mots les plus répétés, tandis que le Compteur de Caractères détaille la taille en octets UTF-8 et les limites de caractères des réseaux sociaux et du SEO.',
      },
      {
        question: 'Le Compteur de Mots est-il gratuit ?',
        answer:
          'Oui. Le Compteur de Mots est entièrement gratuit, sans inscription, sans limite de mots et sans compte nécessaire.',
      },
      {
        question: 'Le Compteur de Mots fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Une fois la page chargée, tout le comptage s’effectue localement dans votre navigateur, donc l’outil continue de fonctionner sans connexion internet.',
      },
      {
        question: 'Comment les phrases sont-elles comptées ?',
        answer:
          'Les phrases sont comptées à la ponctuation de fin de phrase, comme les points, les points d’exclamation et les points d’interrogation ; les abréviations comme « Dr. » peuvent donc ajouter une phrase.',
      },
      {
        question: 'Qu’est-ce qui compte comme un mot dans le Compteur de Mots ?',
        answer:
          'Toute suite de caractères séparée par des espaces compte pour un mot, y compris les nombres, les termes avec trait d’union et les mots avec apostrophe.',
      },
      {
        question: 'Puis-je compter les mots d’un PDF ou d’un document Word ?',
        answer:
          'Pas directement. Copiez le texte de votre document et collez-le dans le Compteur de Mots pour voir ses compteurs instantanément.',
      },
      {
        question: 'Le Compteur de Mots compte-t-il les caractères avec espaces ?',
        answer:
          'Oui. Il affiche les caractères avec et sans espaces, pour que vous puissiez vérifier les limites qui comptent dans un sens comme dans l’autre.',
      },
      {
        question: 'Quelle est la précision de l’estimation du temps de lecture ?',
        answer:
          'Il s’agit d’une estimation basée sur un rythme moyen de lecture silencieuse de 225 mots par minute ; chaque lecteur peut être plus rapide ou plus lent.',
      },
      {
        question: 'Sur quoi se base l’estimation du temps de parole ?',
        answer:
          'Le temps de parole se base sur un rythme de présentation conversationnel de 130 mots par minute, adapté aux exposés, aux scripts vidéo et aux introductions de podcast.',
      },
      {
        question: 'Le Compteur de Mots gère-t-il d’autres langues ?',
        answer:
          'Oui. Il compte les mots séparés par des espaces dans n’importe quelle langue, même si les estimations de temps de lecture sont calibrées pour le texte en anglais.',
      },
      {
        question: 'Puis-je vérifier une limite de mots pour une dissertation ou un devoir ?',
        answer:
          'Oui. Collez votre dissertation et comparez le total de mots en direct avec votre objectif ; la barre de résumé affiche le compteur exact pendant que vous modifiez le texte.',
      },
      {
        question: 'Le Compteur de Mots compte-t-il les nombres comme des mots ?',
        answer:
          'Oui. Les nombres isolés séparés par des espaces sont comptés comme des mots, comme dans la plupart des traitements de texte.',
      },
      {
        question: 'Pourquoi mon compteur diffère-t-il de Microsoft Word ou de Google Docs ?',
        answer:
          'Les outils découpent différemment les mots avec trait d’union, les tirets cadratins et les nombres, donc de petits écarts de quelques mots sont normaux.',
      },
      {
        question: 'À quoi servent les mots les plus fréquents affichés ?',
        answer:
          'Le panneau liste vos six mots les plus répétés pour que vous puissiez repérer les termes suremployés et varier votre vocabulaire avant de publier.',
      },
      {
        question: 'Puis-je compter les mots d’un seul paragraphe ?',
        answer:
          'Oui. Collez uniquement ce paragraphe dans l’éditeur et les totaux en direct ne refléteront que le texte saisi.',
      },
      {
        question: 'Puis-je utiliser le Compteur de Mots pour des légendes de réseaux sociaux ?',
        answer:
          'Oui. Collez votre légende pour vérifier son nombre de mots et son temps de lecture, et utilisez le Compteur de Caractères si vous devez aussi vérifier les limites de caractères.',
      },
      {
        question: 'Puis-je utiliser le Compteur de Mots sur mon téléphone ?',
        answer:
          'Oui. Il fonctionne dans n’importe quel navigateur mobile moderne avec les mêmes compteurs en direct, le même temps de lecture et les mêmes options de copie.',
      },
    ],
  },
  'character-counter': {
    slug: 'compteur-de-caracteres',
    name: 'Compteur de Caractères',
    shortDescription:
      'Mesurez la longueur exacte en caractères avec et sans espaces, en octets UTF-8, et les limites de caractères des réseaux sociaux et du SEO.',
    keywords: [
      'compteur de caractères',
      'compteur de lettres',
      'vérificateur de longueur de méta-description',
      'compteur d’octets utf-8',
      'outil de limite de caractères',
      'compter les caractères en ligne',
      'vérificateur de longueur de texte',
      'vérificateur de longueur de titre seo',
      'compteur de caractères sms',
    ],
    seo: {
      title: 'Compteur de Caractères : limites et octets | UtilityFlow',
      description:
        'Comptez les caractères avec et sans espaces, les lettres et les octets UTF-8 tout en suivant votre progression vers les limites SEO et des réseaux sociaux.',
      primaryKeyword: 'compteur de caractères',
      secondaryKeywords: ['compter les caractères en ligne', 'calculateur de longueur de chaîne', 'longueur de titre méta', 'vérificateur de longueur de texte'],
      longTailKeywords: ['compter les caractères sans espaces en ligne', 'vérifier la limite de caractères d’une méta-description seo', 'calculer la longueur en octets utf-8 d’un texte', 'vérifier la limite de caractères de twitter en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Suivez les compteurs exacts de caractères, de lettres, de chiffres, d’espaces et de taille en octets UTF-8 tout en surveillant les barres de progression en direct pour les extraits SEO, les segments SMS et les flux sociaux.',
    instructions: [
      {
        title: 'Saisissez ou collez votre texte',
        description:
          'Tapez un titre méta, une légende de réseau social, une alerte SMS ou une chaîne de champ de formulaire dans la zone de texte.',
      },
      {
        title: 'Consultez les mesures de caractères et d’octets',
        description:
          'Comparez le total de caractères avec espaces, le total sans espaces, les lettres, les chiffres et le poids en octets UTF-8.',
      },
      {
        title: 'Vérifiez les seuils des plateformes',
        description:
          'Consultez les jauges de progression en direct pour confirmer que votre texte respecte les limites SEO, SMS, X, Instagram ou LinkedIn.',
      },
      {
        title: 'Utilisez la taille en octets pour les limites techniques',
        description:
          'Vérifiez le total en octets UTF-8 pour valider des colonnes de base de données, des charges utiles d’API ou des champs de fichier limités en octets plutôt qu’en caractères.',
      },
      {
        title: 'Comparez avec et sans espaces',
        description:
          'Basculez entre le total avec espaces et le total sans espaces quand un formulaire ou une plateforme ne compte que les caractères non blancs.',
      },
      {
        title: 'Résolvez un compteur qui semble erroné',
        description:
          'Si un compteur semble faux, vérifiez les caractères invisibles comme les espaces de fin ou les sauts de ligne collés, qui sont comptés dans le total avec espaces.',
      },
    ],
    examples: [
      {
        title: 'Vérification d’un titre méta',
        input: 'Compteur de Mots – Compter les mots, les phrases et le temps de lecture',
        output: '51 / 60 caractères (9 restants)',
        explanation:
          'Tient confortablement dans la fenêtre d’affichage typique de 60 caractères des titres dans les moteurs de recherche.',
      },
      {
        title: 'Vérification des octets d’un émoji multi-octets',
        input: 'Jour de lancement 🚀',
        output: '13 unités de code UTF-16 · 15 octets UTF-8',
        explanation:
          'Montre les différences exactes de taille en octets quand des caractères non ASCII sont inclus.',
      },
    ],
    benefits: [
      'Suit à la fois les caractères avec espaces et le nombre de caractères sans espaces',
      'Mesure la longueur exacte en octets UTF-8 pour les limites de colonnes de base de données et de charges utiles d’API',
      'Inclut des indicateurs visuels de limite pour les balises SEO, les SMS, X, Instagram et LinkedIn',
      'Aucun envoi vers un serveur ni journalisation des caractères',
    ],
    useCases: [
      'Rédiger des balises de titre et des méta-descriptions sans troncature dans les moteurs de recherche',
      'Rédiger des notifications SMS dans la limite de 160 caractères d’un segment',
      'Valider la longueur d’un champ VARCHAR de base de données en octets UTF-8',
      'Composer des légendes de réseaux sociaux concises avant publication',
    ],
    faqs: [
      {
        question: 'Pourquoi les octets UTF-8 sont-ils parfois supérieurs au nombre de caractères ?',
        answer:
          'Les caractères ASCII anglais standard occupent 1 octet chacun en UTF-8, tandis que les caractères accentués, les écritures non latines et les émojis nécessitent 2 à 4 octets par caractère.',
      },
      {
        question: 'Le compteur de caractères inclut-il les sauts de ligne ?',
        answer:
          'Oui. Les caractères de nouvelle ligne sont comptés dans la mesure « Avec espaces » et exclus de la mesure « Sans espaces ».',
      },
      {
        question: 'Que se passe-t-il si je dépasse une barre de limite de plateforme ?',
        answer:
          'L’indicateur de progression devient rouge et affiche le nombre exact de caractères en trop, pour que vous sachiez combien retirer.',
      },
      {
        question: 'Le Compteur de Caractères est-il gratuit ?',
        answer:
          'Oui. Le Compteur de Caractères est entièrement gratuit, sans inscription, sans limite de caractères et sans compte nécessaire.',
      },
      {
        question: 'Quelle est la différence entre les caractères avec et sans espaces ?',
        answer:
          'Les caractères avec espaces incluent chaque espace entre les mots, tandis que les caractères sans espaces les excluent, ce qui compte quand une plateforme ne compte que les caractères visibles.',
      },
      {
        question: 'Le Compteur de Caractères compte-t-il les émojis ?',
        answer:
          'Oui. Chaque émoji compte comme des caractères, et comme la plupart des émojis utilisent plusieurs octets UTF-8, le total en octets sera supérieur au nombre de caractères.',
      },
      {
        question: 'Combien de caractères puis-je coller dans le Compteur de Caractères ?',
        answer:
          'Il n’y a pas de limite définie. Le comptage s’effectue entièrement dans votre navigateur, donc même les documents très longs sont mesurés instantanément.',
      },
      {
        question: 'Quelle est la limite de caractères d’un titre méta SEO ?',
        answer:
          'Les moteurs de recherche affichent généralement environ 50 à 60 caractères d’une balise de titre, donc rester dans cette fourchette évite la troncature dans les résultats.',
      },
      {
        question: 'Quelle est la limite de caractères d’une méta-description ?',
        answer:
          'Les moteurs de recherche affichent généralement environ 150 à 160 caractères d’une méta-description, donc l’outil suit votre progression vers cette fourchette.',
      },
      {
        question: 'Combien de caractères tiennent dans un seul SMS ?',
        answer:
          'Un segment SMS standard contient 160 caractères avec l’alphabet GSM de base ; les messages plus longs sont divisés en plusieurs segments.',
      },
      {
        question: 'Le Compteur de Caractères compte-t-il les tabulations et les sauts de ligne ?',
        answer:
          'Oui. Les tabulations et les sauts de ligne sont comptés dans le total avec espaces, donc un texte collé avec des lignes vides supplémentaires affichera un compteur plus élevé.',
      },
      {
        question: 'Le Compteur de Caractères inclut-il la ponctuation dans le compteur ?',
        answer:
          'Oui. Les signes de ponctuation comptent comme des caractères et sont inclus dans les totaux avec et sans espaces.',
      },
      {
        question: 'Quelle limite de caractères X (Twitter) utilise-t-il ?',
        answer:
          'Les publications X sont limitées à 280 caractères pour la plupart des comptes, et les barres de limite de cet outil montrent votre progression vers ce seuil.',
      },
      {
        question: 'Puis-je vérifier la longueur d’une légende Instagram ?',
        answer:
          'Oui. Collez votre légende et observez la jauge de limite Instagram ; les légendes sont limitées à 2 200 caractères.',
      },
      {
        question: 'Le Compteur de Caractères fonctionne-t-il avec du texte non anglais ?',
        answer:
          'Oui. Il compte les caractères dans n’importe quelle écriture, et le total en octets UTF-8 montre la vraie taille de stockage des lettres accentuées et des caractères non latins.',
      },
      {
        question: 'Puis-je utiliser le Compteur de Caractères pour une publication LinkedIn ?',
        answer:
          'Oui. Collez votre publication et vérifiez la jauge de limite LinkedIn, qui suit la limite de 3 000 caractères des publications.',
      },
      {
        question: 'Le Compteur de Caractères enregistre-t-il ou envoie-t-il mon texte ?',
        answer:
          'Non. Tout le comptage se fait localement dans votre navigateur, et votre texte n’est jamais envoyé, stocké ou partagé.',
      },
      {
        question: 'Pourquoi mon compteur diffère-t-il de Microsoft Word ?',
        answer:
          'Les outils traitent différemment les sauts de ligne, les tabulations et les caractères de mise en forme masqués, donc de petits écarts entre compteurs sont normaux.',
      },
      {
        question: 'Qu’est-ce qui compte comme une lettre par rapport à un chiffre ?',
        answer:
          'Les lettres sont des caractères alphabétiques dans n’importe quelle écriture, tandis que les chiffres sont les caractères numériques de 0 à 9 ; les deux sont affichés en totaux séparés.',
      },
      {
        question: 'Puis-je vérifier le nombre de caractères d’un champ de mot de passe ou de nom d’utilisateur ?',
        answer:
          'Oui. Collez la valeur dans l’outil pour vérifier qu’elle respecte une longueur minimale ou maximale avant d’envoyer un formulaire.',
      },
    ],
  },
  'case-converter': {
    slug: 'convertisseur-de-casse',
    name: 'Convertisseur de Casse',
    shortDescription:
      'Convertissez un texte entre MAJUSCULES, minuscules, Casse de Titre, casse de phrase, camelCase, snake_case et kebab-case.',
    keywords: [
      'convertisseur de casse',
      'convertisseur de casse de titre',
      'majuscules en minuscules',
      'convertisseur camelcase',
      'générateur snake case',
      'convertisseur majuscules',
      'convertisseur minuscules',
      'convertisseur casse de phrase',
      'convertisseur pascalcase',
    ],
    seo: {
      title: 'Convertisseur de Casse : titre et camelCase | UtilityFlow',
      description:
        'Transformez un texte entre majuscules, minuscules, Casse de Titre, casse de phrase, camelCase, PascalCase, snake_case et kebab-case en un clic sans inscription.',
      primaryKeyword: 'convertisseur de casse',
      secondaryKeywords: ['convertisseur de casse de titre', 'outil de casse de phrase', 'changer la casse du texte', 'majuscules en minuscules'],
      longTailKeywords: ['convertir un texte en majuscules en casse de phrase', 'convertir une chaîne en camelcase et snake_case', 'outil de capitalisation de titre en ligne', 'changer les majuscules en minuscules en ligne gratuitement'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrigez un texte tapé par accident en verrouillage majuscule, standardisez les titres d’articles en Casse de Titre, ou formatez des identifiants de variables en camelCase, PascalCase, snake_case ou kebab-case en un seul clic.',
    instructions: [
      {
        title: 'Collez ou tapez votre texte',
        description:
          'Insérez des titres, des paragraphes ou des chaînes d’identifiants dans l’éditeur.',
      },
      {
        title: 'Choisissez un style de casse',
        description:
          'Cliquez sur un bouton de transformation — par exemple Casse de Titre, casse de phrase, camelCase ou snake_case — pour mettre à jour le texte immédiatement.',
      },
      {
        title: 'Copiez le résultat formaté',
        description:
          'Utilisez le bouton Copier le résultat pour transférer le texte converti dans votre presse-papiers.',
      },
      {
        title: 'Corrigez un texte TOUT EN MAJUSCULES en un clic',
        description:
          'Collez le texte tapé avec le verrouillage majuscule activé et choisissez la casse de phrase pour restaurer une capitalisation normale dans chaque phrase.',
      },
      {
        title: 'Convertissez des identifiants pour le code',
        description:
          'Collez un libellé simple comme « statut du compte utilisateur » et choisissez camelCase, PascalCase, snake_case ou kebab-case pour obtenir un nom de variable prêt à l’emploi.',
      },
      {
        title: 'Résolvez une capitalisation étrange',
        description:
          'Si la Casse de Titre laisse un mot en minuscules, c’est probablement un mot mineur comme « et » ou « de » ; retapez-le ou appliquez les Majuscules à ce mot seul.',
      },
    ],
    examples: [
      {
        title: 'Corriger un texte tout en majuscules par accident',
        input: 'CE RAPPORT RÉSUME LES RÉSULTATS DU T4. TOUTES LES MESURES SONT DÉFINITIVES.',
        output: 'Ce rapport résume les résultats du t4. Toutes les mesures sont définitives.',
        explanation:
          'La casse de phrase met toutes les lettres en minuscules et capitalise le début de chaque phrase.',
      },
      {
        title: 'Formater des identifiants de code',
        input: 'statut de facturation du compte utilisateur',
        output: 'statutDeFacturationDuCompteUtilisateur (camelCase) / statut_de_facturation_du_compte_utilisateur (snake_case)',
        explanation:
          'Convertit des libellés en français directement dans les conventions standard de programmation.',
      },
    ],
    benefits: [
      'Prend en charge 10 formats de casse pour la prose et le développement dans un seul espace',
      'La Casse de Titre intelligente garde les prépositions et conjonctions mineures en minuscules',
      'Gère proprement les paragraphes multi-phrases et les sauts de ligne',
      'Fonctionne localement dans votre navigateur avec copie instantanée en un clic',
    ],
    useCases: [
      'Reconvertir des e-mails tapés par accident TOUT EN MAJUSCULES en casse de phrase',
      'Formater les titres de blog et de vidéos YouTube de façon cohérente',
      'Renommer des colonnes de base de données, des classes CSS ou des variables JavaScript',
      'Normaliser les en-têtes de tableur avant d’importer des fichiers CSV',
    ],
    faqs: [
      {
        question: 'Comment la Casse de Titre gère-t-elle les mots courts comme « et » ou « de » ?',
        answer:
          'Le formateur de Casse de Titre capitalise le premier et le dernier mot du titre tout en gardant en minuscules les articles, conjonctions et prépositions courtes standard (comme un, une, et, de, à, en).',
      },
      {
        question: 'Puis-je convertir un identifiant snake_case ou camelCase existant vers un autre format ?',
        answer:
          'Oui. Les limites de mots aux underscores, aux traits d’union et aux transitions camelCase sont découpées automatiquement avant d’appliquer la nouvelle règle de casse.',
      },
      {
        question: 'La casse de phrase préserve-t-elle plusieurs paragraphes ?',
        answer:
          'Oui. La capitalisation se réinitialise au début du texte, après la ponctuation de fin de phrase et au début des nouvelles lignes.',
      },
      {
        question: 'Le Convertisseur de Casse est-il gratuit ?',
        answer:
          'Oui. Le Convertisseur de Casse est entièrement gratuit, sans inscription, sans limite de longueur de texte et sans compte nécessaire.',
      },
      {
        question: 'Quelle est la différence entre la Casse de Titre et la casse de phrase ?',
        answer:
          'La Casse de Titre capitalise la plupart des mots d’un titre, tandis que la casse de phrase ne capitalise que le premier mot de chaque phrase et les noms propres, comme une phrase normale.',
      },
      {
        question: 'À quoi sert le camelCase ?',
        answer:
          'Le camelCase est le style de nommage standard des variables et des fonctions en JavaScript et dans de nombreux autres langages de programmation, par exemple statutCompteUtilisateur.',
      },
      {
        question: 'À quoi sert le snake_case ?',
        answer:
          'Le snake_case sépare les mots par des underscores et est couramment utilisé pour les variables Python, les colonnes de base de données et les noms de fichiers, par exemple statut_compte_utilisateur.',
      },
      {
        question: 'À quoi sert le kebab-case ?',
        answer:
          'Le kebab-case sépare les mots par des traits d’union et est couramment utilisé pour les URL, les noms de classes CSS et les attributs HTML, par exemple statut-compte-utilisateur.',
      },
      {
        question: 'À quoi sert le PascalCase ?',
        answer:
          'Le PascalCase capitalise chaque mot sans séparateur et est couramment utilisé pour les noms de classes et de composants, par exemple StatutCompteUtilisateur.',
      },
      {
        question: 'Le Convertisseur de Casse peut-il corriger un texte tapé TOUT EN MAJUSCULES ?',
        answer:
          'Oui. Collez le texte en majuscules et choisissez la casse de phrase ou les minuscules pour restaurer une capitalisation normale en un clic.',
      },
      {
        question: 'Le Convertisseur de Casse fonctionne-t-il avec les chiffres et les symboles ?',
        answer:
          'Oui. Les chiffres, la ponctuation et les symboles passent tels quels ; seules les lettres sont converties.',
      },
      {
        question: 'Puis-je convertir tout un paragraphe d’un coup ?',
        answer:
          'Oui. Collez tout le paragraphe et le convertisseur applique la casse choisie à toutes ses phrases et à tous ses sauts de ligne.',
      },
      {
        question: 'La Casse de Titre capitalise-t-elle les mots après deux-points ?',
        answer:
          'Les mots après deux-points sont traités comme les autres mots du titre : les mots principaux sont capitalisés et les mots mineurs restent en minuscules.',
      },
      {
        question: 'Le Convertisseur de Casse gère-t-il d’autres langues ?',
        answer:
          'Oui. Il convertit les lettres dans n’importe quelle langue qui utilise des formes majuscules et minuscules, même si les règles des mots mineurs de la Casse de Titre se basent sur l’anglais.',
      },
      {
        question: 'Puis-je reconvertir du snake_case en mots normaux ?',
        answer:
          'Oui. Collez l’identifiant et choisissez la casse de phrase ou la Casse de Titre ; les underscores sont traités comme des séparateurs de mots et remplacés par des espaces.',
      },
      {
        question: 'Que deviennent les sauts de ligne quand je convertis la casse ?',
        answer:
          'Les sauts de ligne sont préservés exactement, donc un texte multi-lignes garde sa structure après la conversion.',
      },
      {
        question: 'Le Convertisseur de Casse enregistre-t-il ou envoie-t-il mon texte ?',
        answer:
          'Non. La conversion s’effectue localement dans votre navigateur, et votre texte n’est jamais envoyé, stocké ou partagé.',
      },
      {
        question: 'Puis-je convertir un texte dont la casse est déjà mixte ?',
        answer:
          'Oui. Le convertisseur découpe d’abord les mots aux underscores, aux traits d’union et aux transitions de casse, donc une entrée à casse mixte se convertit proprement.',
      },
      {
        question: 'Puis-je utiliser le Convertisseur de Casse pour des titres YouTube ?',
        answer:
          'Oui. Collez le titre de votre vidéo et appliquez la Casse de Titre pour un style de titre cohérent et professionnel.',
      },
      {
        question: 'Le Convertisseur de Casse fonctionne-t-il sur mon téléphone ?',
        answer:
          'Oui. Il fonctionne dans n’importe quel navigateur mobile moderne avec les mêmes conversions en un clic et le même bouton de copie.',
      },
    ],
  },
  'remove-duplicate-lines': {
    slug: 'supprimer-les-lignes-en-double',
    name: 'Supprimer les Lignes en Double',
    shortDescription:
      'Dédupliquez des listes et des journaux avec des options de sensibilité à la casse, de suppression des espaces et de tri alphabétique.',
    keywords: [
      'supprimer les lignes en double',
      'dédupliquer une liste en ligne',
      'filtre de lignes uniques',
      'supprimer les lignes répétées',
      'supprimer les doublons d’une liste',
      'dédupliquer une liste d’e-mails',
      'lignes uniques en ligne',
      'supprimer les entrées répétées',
      'nettoyer les entrées en double',
    ],
    seo: {
      title: 'Supprimer les Lignes en Double : dédupliquer | UtilityFlow',
      description:
        'Supprimez les lignes répétées des listes, des e-mails, des URL ou des journaux instantanément, avec suppression des espaces et tri en option, sans inscription.',
      primaryKeyword: 'supprimer les lignes en double',
      secondaryKeywords: ['supprimer les lignes dupliquées', 'dédupliquer une liste de texte', 'outil de lignes uniques', 'supprimer les entrées en double'],
      longTailKeywords: ['supprimer les lignes en double en gardant l’ordre d’origine', 'dédupliquer une liste d’e-mails sans tenir compte de la casse', 'nettoyer les lignes répétées d’un texte en ligne', 'supprimer les doublons d’une liste d’e-mails en ligne gratuitement'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Nettoyez des listes désordonnées, des mots-clés exportés, des adresses e-mail ou des journaux de serveur en supprimant les entrées en double tout en contrôlant la suppression des espaces, la sensibilité à la casse et l’ordre de sortie.',
    instructions: [
      {
        title: 'Collez votre liste séparée par lignes',
        description:
          'Ajoutez n’importe quelle liste avec un élément par ligne dans la zone Lignes d’origine.',
      },
      {
        title: 'Configurez les règles de correspondance',
        description:
          'Activez Sensible à la casse, Supprimer les espaces, Supprimer les lignes vides ou Trier par ordre alphabétique selon la rigueur de correspondance souhaitée.',
      },
      {
        title: 'Copiez les lignes uniques',
        description:
          'Vérifiez combien de doublons ont été supprimés dans l’en-tête de résumé et cliquez sur Copier pour récupérer la liste nettoyée.',
      },
      {
        title: 'Triez la liste nettoyée par ordre alphabétique',
        description:
          'Activez Trier par ordre alphabétique si vous voulez que les lignes uniques soient classées de A à Z au lieu de conserver leur ordre de première occurrence.',
      },
      {
        title: 'Vérifiez les compteurs du résumé',
        description:
          'Consultez le nombre de lignes d’origine, le nombre de lignes uniques et les doublons supprimés dans l’en-tête de résumé pour confirmer que le nettoyage a fonctionné comme prévu.',
      },
      {
        title: 'Résolvez les lignes qui ne se sont pas dédupliquées',
        description:
          'Si deux lignes qui semblent identiques subsistent, vérifiez les espaces de fin masqués ou les différences de capitalisation, puis activez Supprimer les espaces ou désactivez Sensible à la casse et relancez l’outil.',
      },
    ],
    examples: [
      {
        title: 'Nettoyage d’une liste d’e-mails',
        input: 'alex@exemple.com\nsam@exemple.com\nAlex@exemple.com\n  sam@exemple.com  ',
        output: 'alex@exemple.com\nsam@exemple.com',
        explanation:
          'Avec la suppression des espaces activée et la sensibilité à la casse désactivée, les espaces de fin et les variantes de capitalisation se regroupent proprement.',
      },
      {
        title: 'Nettoyage d’une liste de mots-clés',
        input: 'chaussures de course\nchaussures running\nchaussures de course\nbaskets',
        output: 'chaussures de course\nchaussures running\nbaskets',
        explanation:
          'Les mots-clés répétés sont supprimés tout en conservant l’ordre de première occurrence de la liste.',
      },
    ],
    benefits: [
      'Préserve l’ordre de première occurrence par défaut ou trie par ordre alphabétique sur demande',
      'Affiche le nombre exact de lignes d’origine, de lignes uniques et de doublons supprimés',
      'Gère sans effort les grandes listes de plusieurs milliers de lignes dans la mémoire du client',
      'Garde les listes privées et les exports de clients hors des serveurs tiers',
    ],
    useCases: [
      'Dédupliquer des exports de recherche de mots-clés et des listes d’URL',
      'Nettoyer des listes d’e-mails d’abonnés avant de les importer dans un CRM',
      'Supprimer les traces de pile ou les entrées IP répétées des fichiers journaux',
      'Préparer des listes uniques de balises ou de SKU pour des tableurs',
    ],
    faqs: [
      {
        question: 'L’outil Supprimer les Lignes en Double préserve-t-il mon ordre d’origine ?',
        answer:
          'Oui. Par défaut, il conserve la première occurrence de chaque ligne unique dans son ordre d’origine. Vous pouvez activer « Trier par ordre alphabétique » quand vous voulez aussi un classement de A à Z.',
      },
      {
        question: 'Comment la suppression des espaces affecte-t-elle la détection des doublons ?',
        answer:
          'Quand Supprimer les espaces est coché, les espaces de début et de fin sont retirés avant la vérification d’unicité, ce qui évite que des éléments comme « pomme » et « pomme » soient traités comme différents.',
      },
      {
        question: 'Que faire si je veux garder les variantes de casse comme « USA » et « usa » ?',
        answer:
          'Activez la case « Sensible à la casse » pour que les lignes avec une capitalisation différente restent des entrées séparées.',
      },
      {
        question: 'L’outil Supprimer les Lignes en Double est-il gratuit ?',
        answer:
          'Oui. L’outil est entièrement gratuit, sans inscription, sans limite de lignes et sans compte nécessaire.',
      },
      {
        question: 'Qu’est-ce qui compte comme une ligne en double ?',
        answer:
          'Deux lignes sont des doublons quand leur texte correspond exactement selon vos réglages actuels, y compris les options de sensibilité à la casse et de suppression des espaces que vous avez choisies.',
      },
      {
        question: 'Fonctionne-t-il avec des listes séparées par des virgules ?',
        answer:
          'Pas directement. L’outil compare des lignes entières, donc divisez d’abord une liste séparée par des virgules en un élément par ligne, puis collez-la.',
      },
      {
        question: 'Puis-je supprimer les lignes en double d’un fichier CSV ?',
        answer:
          'Oui. Copiez la colonne ou les lignes de votre CSV, collez-les sous forme de lignes, dédupliquez, puis recollez la liste nettoyée dans votre tableur.',
      },
      {
        question: 'Que deviennent les lignes vides ?',
        answer:
          'Les lignes vides sont traitées comme n’importe quelle autre ligne, donc activer « Supprimer les lignes vides » les efface de la sortie avec les doublons.',
      },
      {
        question: 'Puis-je supprimer les doublons d’une liste d’URL ?',
        answer:
          'Oui. Collez une URL par ligne et l’outil supprime les URL répétées, ce qui est utile pour nettoyer des exports de mots-clés et des listes de sitemap.',
      },
      {
        question: 'Combien de lignes puis-je dédupliquer en une fois ?',
        answer:
          'Il n’y a pas de limite définie. La déduplication s’effectue entièrement dans votre navigateur, donc les listes de plusieurs milliers de lignes sont traitées sans effort dans la mémoire du client.',
      },
      {
        question: 'L’outil garde-t-il la première ou la dernière occurrence d’un doublon ?',
        answer:
          'Il garde la première occurrence de chaque ligne unique et supprime les répétitions ultérieures, ce qui préserve votre ordre d’origine.',
      },
      {
        question: 'Puis-je supprimer les adresses e-mail en double d’une liste ?',
        answer:
          'Oui. Collez une adresse par ligne avec la sensibilité à la casse désactivée et la suppression des espaces activée, et les adresses en double se regroupent en une seule entrée.',
      },
      {
        question: 'Le tri change-t-il les lignes conservées ?',
        answer:
          'Non. Le tri ne fait que réordonner les lignes uniques par ordre alphabétique après la déduplication ; il ne change pas quelles lignes sont considérées comme des doublons.',
      },
      {
        question: 'L’outil supprime-t-il les mots en double à l’intérieur d’une seule ligne ?',
        answer:
          'Non. Il compare des lignes entières, donc les doublons à l’intérieur d’une ligne ne sont pas touchés ; utilisez l’outil Rechercher et Remplacer pour un nettoyage au niveau des mots.',
      },
      {
        question: 'L’outil fonctionne-t-il avec des nombres ou des adresses IP ?',
        answer:
          'Oui. N’importe quel contenu de ligne fonctionne, y compris les nombres, les adresses IP, les SKU et les codes, tant que chaque élément est sur sa propre ligne.',
      },
      {
        question: 'Puis-je supprimer les lignes en double des journaux de serveur ?',
        answer:
          'Oui. Collez les lignes du journal et dédupliquez-les pour isoler les erreurs uniques ou les entrées IP répétées et dépanner plus vite.',
      },
      {
        question: 'L’outil Supprimer les Lignes en Double enregistre-t-il ou envoie-t-il ma liste ?',
        answer:
          'Non. La déduplication s’effectue localement dans votre navigateur, et votre liste n’est jamais envoyée, stockée ou partagée.',
      },
      {
        question: 'Que faire si ma liste utilise des points-virgules au lieu de sauts de ligne ?',
        answer:
          'L’outil traite chaque ligne comme un élément, donc remplacez d’abord les points-virgules par des sauts de ligne, puis collez la liste pour la dédupliquer.',
      },
      {
        question: 'Puis-je supprimer les doublons tout en gardant les lignes vides ?',
        answer:
          'Oui. Laissez « Supprimer les lignes vides » décoché et les lignes vides seront conservées dans la sortie avec les éléments dédupliqués.',
      },
      {
        question: 'L’outil fonctionne-t-il sur mon téléphone ?',
        answer:
          'Oui. Il fonctionne dans n’importe quel navigateur mobile moderne avec les mêmes options de déduplication et le même bouton de copie.',
      },
    ],
  },
  'text-diff-checker': {
    slug: 'comparateur-de-texte',
    name: 'Comparateur de Texte',
    shortDescription:
      'Comparez deux blocs de texte ligne par ligne pour repérer les ajouts, les suppressions et les lignes inchangées.',
    keywords: [
      'comparateur de texte',
      'comparer deux textes',
      'outil de diff en ligne',
      'comparaison de texte',
      'comparer deux fichiers texte',
      'outil de différence en ligne',
      'trouver les différences entre deux textes',
      'outil de comparaison de texte',
      'diff ligne par ligne',
    ],
    seo: {
      title: 'Comparateur de Texte : comparer deux textes | UtilityFlow',
      description:
        'Comparez deux versions de texte, de code ou de configuration côte à côte avec des indicateurs clairs de lignes ajoutées et supprimées, dans votre navigateur.',
      primaryKeyword: 'comparateur de texte',
      secondaryKeywords: ['comparer du texte en ligne', 'vérificateur de diff', 'outil de différence de texte', 'outil de diff en ligne'],
      longTailKeywords: ['comparer deux fichiers texte ligne par ligne en ligne', 'comparateur de diff ignorant les espaces et la casse', 'outil de comparaison de texte côté client', 'comparer deux versions d’un document en ligne gratuitement'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Repérez chaque insertion, suppression et modification entre deux versions d’un article, d’une clause de contrat ou d’un extrait de configuration grâce à un moteur de diff ligne par ligne basé sur la plus longue sous-séquence commune.',
    instructions: [
      {
        title: 'Collez les deux versions',
        description:
          'Mettez la copie de référence dans Texte d’origine et la version révisée dans Texte modifié.',
      },
      {
        title: 'Ajustez les options de comparaison',
        description:
          'Activez Ignorer les espaces ou Ignorer la casse si vous voulez passer les modifications de mise en forme uniquement.',
      },
      {
        title: 'Examinez les modifications surlignées',
        description:
          'Parcourez le panneau Comparaison des lignes avec les indicateurs + ajouté, - supprimé et les numéros de ligne.',
      },
      {
        title: 'Consultez le résumé des modifications',
        description:
          'Lisez les compteurs de lignes ajoutées, supprimées et inchangées pour avoir une idée rapide de l’ampleur des changements entre les deux versions.',
      },
      {
        title: 'Comparez uniquement une section précise',
        description:
          'Collez seulement la section qui vous intéresse dans les deux zones pour comparer un seul paragraphe ou un seul bloc de configuration sans le reste du document.',
      },
      {
        title: 'Résolvez un diff qui semble erroné',
        description:
          'Si presque chaque ligne apparaît comme modifiée, les deux textes utilisent peut-être des fins de ligne ou une indentation différentes ; activez Ignorer les espaces et vérifiez que les deux collages commencent à la même ligne.',
      },
    ],
    examples: [
      {
        title: 'Vérification d’une révision de configuration',
        input: 'Original : TTL du cache : 600\nModifié : TTL du cache : 1800',
        output: '- TTL du cache : 600\n+ TTL du cache : 1800',
        explanation:
          'Isole clairement la ligne modifiée avec les anciens et nouveaux numéros de ligne.',
      },
      {
        title: 'Révision d’un paragraphe d’article',
        input: 'Original : Le lancement a lieu en mars.\nModifié : Le lancement a lieu en avril.',
        output: '- Le lancement a lieu en mars.\n+ Le lancement a lieu en avril.',
        explanation:
          'Montre exactement quelle phrase a changé entre les deux versions d’un brouillon.',
      },
    ],
    benefits: [
      'Utilise l’alignement par plus longue sous-séquence commune (LCS) plutôt qu’une simple correspondance d’index',
      'Associe le surlignage couleur aux symboles + / - pour l’accessibilité aux daltoniens',
      'Suit les numéros de ligne d’origine et modifiés côte à côte',
      'Garde les brouillons confidentiels et les fichiers de configuration strictement dans la mémoire locale du navigateur',
    ],
    useCases: [
      'Réviser les modifications entre deux révisions d’un article ou d’un contrat',
      'Inspecter les changements dans des extraits de configuration .env, JSON ou YAML',
      'Vérifier des mises à jour de traduction ou des révisions de politiques légales',
      'Vérifier rapidement les révisions de brouillons d’étudiants ou d’équipes',
    ],
    faqs: [
      {
        question: 'Comment l’algorithme de diff gère-t-il les lignes insérées au milieu d’un fichier ?',
        answer:
          'Comme il utilise un algorithme de comparaison de lignes par plus longue sous-séquence commune (LCS), l’insertion de lignes décale les numéros de ligne suivants sans marquer le reste du fichier comme modifié.',
      },
      {
        question: 'Que fait « Ignorer les espaces » ?',
        answer:
          'Cette option supprime les espaces de début et de fin et fusionne les espaces consécutifs multiples avant de comparer les lignes, ce qui aide à se concentrer sur les modifications de contenu plutôt que sur les retouches d’indentation.',
      },
      {
        question: 'Y a-t-il une limite de caractères pour comparer des textes ?',
        answer:
          'La comparaison s’effectue directement dans votre navigateur sans limites de serveur ; les documents typiques de plusieurs milliers de lignes se comparent presque instantanément.',
      },
      {
        question: 'Le Comparateur de Texte est-il gratuit ?',
        answer:
          'Oui. Le Comparateur de Texte est entièrement gratuit, sans inscription, sans limite de comparaison et sans compte nécessaire.',
      },
      {
        question: 'Quelle est la différence entre les lignes ajoutées et supprimées ?',
        answer:
          'Les lignes ajoutées n’apparaissent que dans le texte modifié et sont marquées d’un symbole +, tandis que les lignes supprimées n’apparaissent que dans le texte d’origine et sont marquées d’un symbole -.',
      },
      {
        question: 'Puis-je comparer deux fichiers au lieu de texte collé ?',
        answer:
          'Pas directement. Copiez le contenu de chaque fichier et collez-le dans les zones Texte d’origine et Texte modifié pour les comparer.',
      },
      {
        question: 'Le Comparateur de Texte fonctionne-t-il avec du code ?',
        answer:
          'Oui. Il compare n’importe quel texte basé sur des lignes, y compris le code source, donc vous pouvez repérer les lignes modifiées entre deux versions d’un script ou d’une feuille de style.',
      },
      {
        question: 'Puis-je comparer des fichiers de configuration JSON ou YAML ?',
        answer:
          'Oui. Collez chaque version dans les deux zones et le diff mettra en évidence les clés, les valeurs et les lignes modifiées de votre configuration.',
      },
      {
        question: 'Que fait « Ignorer la casse » ?',
        answer:
          'Cette option traite les majuscules et les minuscules comme égales pendant la comparaison, donc une ligne dont seule la capitalisation a changé ne sera pas marquée comme différente.',
      },
      {
        question: 'Puis-je comparer des textes dans différentes langues ?',
        answer:
          'Oui. La comparaison fonctionne sur n’importe quel texte, même si les lignes dans différentes langues apparaîtront naturellement comme modifiées parce que leur contenu diffère.',
      },
      {
        question: 'Le Comparateur de Texte montre-t-il les modifications au niveau des caractères ?',
        answer:
          'Non. La comparaison fonctionne ligne par ligne, donc un mot modifié marque toute sa ligne comme modifiée ; pour plus de détail, comparez les deux lignes séparément.',
      },
      {
        question: 'Puis-je comparer un document avec son ancienne version ?',
        answer:
          'Oui. Collez l’ancienne version comme Texte d’origine et la nouvelle version comme Texte modifié pour voir chaque ajout et chaque suppression.',
      },
      {
        question: 'Comment les numéros de ligne sont-ils affichés dans la comparaison ?',
        answer:
          'Chaque ligne conserve son propre numéro issu de son texte d’origine, pour que vous puissiez retrouver une ligne modifiée à sa position exacte dans l’une ou l’autre version.',
      },
      {
        question: 'Le Comparateur de Texte enregistre-t-il ou envoie-t-il mon texte ?',
        answer:
          'Non. La comparaison s’effectue localement dans votre navigateur, et vos textes ne sont jamais envoyés, stockés ou partagés.',
      },
      {
        question: 'Puis-je comparer des contrats juridiques avec le Comparateur de Texte ?',
        answer:
          'Oui. Collez les deux versions du contrat pour repérer les clauses modifiées, même si vous devriez toujours faire examiner les modifications juridiques importantes par un avocat.',
      },
      {
        question: 'Que se passe-t-il si je colle le même texte dans les deux zones ?',
        answer:
          'La comparaison affichera zéro ligne ajoutée et zéro ligne supprimée, confirmant que les deux textes sont identiques.',
      },
      {
        question: 'Puis-je comparer du texte avec des fins de ligne différentes ?',
        answer:
          'Oui. Si les fins de ligne diffèrent, le diff peut marquer des lignes comme modifiées ; activer Ignorer les espaces efface généralement ces différences de mise en forme uniquement.',
      },
      {
        question: 'Le Comparateur de Texte fonctionne-t-il avec de gros documents ?',
        answer:
          'Oui. Les documents de plusieurs milliers de lignes se comparent presque instantanément dans le navigateur, sans aucun envoi vers un serveur.',
      },
      {
        question: 'Puis-je utiliser le Comparateur de Texte pour des révisions de traduction ?',
        answer:
          'Oui. Collez la traduction d’origine et la traduction révisée pour examiner chaque ligne modifiée côte à côte.',
      },
      {
        question: 'Le Comparateur de Texte fonctionne-t-il sur mon téléphone ?',
        answer:
          'Oui. Il fonctionne dans n’importe quel navigateur mobile moderne avec la même comparaison côte à côte et le même surlignage.',
      },
    ],
  },
  'whitespace-remover': {
    slug: 'supprimer-les-espaces-superflus',
    name: 'Suppresseur d’Espaces et de Sauts de Ligne',
    shortDescription:
      'Supprimez les espaces superflus, les tabulations, les lignes vides et les sauts de ligne indésirables du texte copié depuis un PDF ou le web.',
    keywords: [
      'suppresseur d’espaces',
      'supprimer les espaces superflus',
      'suppresseur de sauts de ligne',
      'supprimer les lignes vides',
      'nettoyer le texte copié d’un pdf',
      'supprimer les espaces de fin',
      'corriger les sauts de ligne d’un pdf',
      'réduire les espaces multiples',
      'nettoyer le texte en ligne',
    ],
    seo: {
      title: 'Suppresseur d’Espaces : nettoyer les espaces | UtilityFlow',
      description:
        'Supprimez les espaces superflus, les tabulations, les lignes vides et les sauts de ligne cassés des PDF dans votre navigateur — rapide et gratuit en ligne.',
      primaryKeyword: 'suppresseur d’espaces',
      secondaryKeywords: ['supprimer les espaces superflus', 'supprimer les sauts de ligne', 'nettoyer les espaces du texte', 'supprimer les lignes vides'],
      longTailKeywords: ['supprimer les espaces superflus et les lignes vides en ligne', 'corriger les sauts de ligne lors d’une copie depuis un pdf', 'convertir les tabulations et les espaces multiples en un seul espace', 'supprimer les espaces de fin d’un texte copié'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Nettoyez le texte désordonné copié depuis des PDF, des e-mails, des tableurs ou des pages web en réduisant les espaces répétés, en convertissant les tabulations, en rognant les bords des lignes et en normalisant les sauts de ligne.',
    instructions: [
      {
        title: 'Collez le texte non formaté',
        description:
          'Déposez le texte contenant des espaces doubles, des tabulations parasites ou des retours à la ligne cassés dans le champ Texte d’entrée.',
      },
      {
        title: 'Choisissez comment les espaces et les tabulations sont traités',
        description:
          'Réduisez les suites d’espaces multiples en un seul, convertissez les tabulations en espaces simples et rognez les espaces de début et de fin de chaque ligne.',
      },
      {
        title: 'Choisissez une option de saut de ligne',
        description:
          'Conservez les sauts de paragraphe, supprimez uniquement les lignes vides, remplacez les sauts de ligne par des espaces pour rejoindre les phrases coupées, ou supprimez tous les sauts pour obtenir une seule ligne continue.',
      },
      {
        title: 'Examinez le résultat nettoyé',
        description:
          'Vérifiez le résultat dans le panneau de sortie et le compteur de caractères indiquant exactement combien de caractères ont été supprimés pendant le nettoyage.',
      },
      {
        title: 'Copiez le texte nettoyé',
        description:
          'Utilisez le bouton de copie pour copier le résultat normalisé, puis collez-le dans votre document, votre formulaire ou votre champ de CMS.',
      },
      {
        title: 'Corrigez les phrases qui se collent',
        description:
          'Si les mots de lignes séparées se rejoignent sans espace, passez à « Remplacer par des espaces ». Si les paragraphes ont fusionné en un seul bloc, revenez plutôt à « Supprimer les lignes vides ».',
      },
    ],
    examples: [
      {
        title: 'Nettoyage d’un copier-coller de PDF',
        input: '   Première   ligne avec   des espaces superflus.\n\n\nDeuxième   ligne   ici.   ',
        output: 'Première ligne avec des espaces superflus.\nDeuxième ligne ici.',
        explanation:
          'Réduit les espaces doubles, rogne les marges et supprime les lignes vides d’espacement.',
      },
      {
        title: 'Transformer une adresse multi-lignes en une seule ligne',
        input: '12 rue des Lilas\n75011 Paris\nFrance',
        output: '12 rue des Lilas 75011 Paris France',
        explanation:
          'Remplace les sauts de ligne par des espaces pour coller l’adresse dans un seul champ de formulaire.',
      },
    ],
    benefits: [
      'Corrige les retours à la ligne cassés des documents PDF en un clic',
      'Compte le nombre exact de caractères supprimés pendant le nettoyage',
      'Permet de garder les paragraphes tout en supprimant uniquement l’excès d’espacement',
      'Traite tout localement dans le navigateur',
    ],
    useCases: [
      'Réparer le texte cassé copié depuis des PDF multi-colonnes',
      'Supprimer les espaces de fin avant de coller dans des champs de CMS',
      'Aplatir des adresses ou des extraits multi-lignes en une seule ligne',
      'Normaliser des notes indentées par tabulations en texte propre à espacement simple',
    ],
    faqs: [
      {
        question: 'Quelle option de saut de ligne choisir pour du texte copié depuis un PDF ?',
        answer:
          'Choisissez « Remplacer par des espaces » quand des retours à la ligne forcés ont coupé des phrases en plein milieu, ou « Supprimer les lignes vides » si chaque ligne est déjà un paragraphe ou un élément de liste distinct.',
      },
      {
        question: 'La réduction des espaces affecte-t-elle les espaces simples entre les mots ?',
        answer:
          'Non. Seules les suites de deux espaces consécutifs ou plus sont réduites en un seul espace.',
      },
      {
        question: 'Cet outil supprime-t-il aussi les tabulations ?',
        answer:
          'Oui, quand « Convertir les tabulations en espaces » est activé, les caractères de tabulation sont transformés en espaces simples et fusionnés avec les espaces adjacents.',
      },
      {
        question: 'Le Suppresseur d’Espaces est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, sans compte et sans limite sur le nombre de nettoyages.',
      },
      {
        question: 'Mon texte quitte-t-il mon navigateur quand j’utilise le Suppresseur d’Espaces ?',
        answer:
          'Non. Tout le nettoyage se fait localement dans votre navigateur, donc votre texte n’est jamais envoyé vers un serveur.',
      },
      {
        question: 'Que fait l’option « Supprimer les lignes vides » ?',
        answer:
          'Elle supprime les lignes vides de votre texte tout en conservant chaque ligne contenant du contenu, donc les paragraphes et les éléments de liste restent dans l’ordre.',
      },
      {
        question: 'Puis-je garder les sauts de paragraphe tout en supprimant les espaces superflus ?',
        answer:
          'Oui. Choisissez l’option qui conserve les sauts de ligne et ne réduit que les espaces superflus, pour que vos paragraphes restent séparés pendant que l’espacement à l’intérieur est corrigé.',
      },
      {
        question: 'Quelle est la différence entre « Remplacer par des espaces » et supprimer tous les sauts de ligne ?',
        answer:
          '« Remplacer par des espaces » joint les lignes avec un seul espace pour que les phrases coupées se lisent correctement, tandis que supprimer tous les sauts joint les lignes directement sans espace entre elles.',
      },
      {
        question: 'Le Suppresseur d’Espaces supprime-t-il les espaces de fin en bout de ligne ?',
        answer:
          'Oui. Les espaces et les tabulations en fin de chaque ligne sont rognés, ce qui est utile avant de coller du texte dans des formulaires ou des champs de code.',
      },
      {
        question: 'Supprime-t-il les espaces de début et l’indentation en début de ligne ?',
        answer:
          'Oui. Les espaces blancs de début de chaque ligne sont rognés, donc le texte collé indenté ou mal aligné s’aligne proprement.',
      },
      {
        question: 'Puis-je nettoyer du texte copié depuis un tableur avec le Suppresseur d’Espaces ?',
        answer:
          'Oui. Les tabulations entre les cellules du tableur sont converties en espaces simples, et les lignes vides supplémentaires des plages copiées sont supprimées.',
      },
      {
        question: 'Comment transformer un texte multi-lignes en une seule ligne ?',
        answer:
          'Collez votre texte, puis choisissez l’option qui remplace les sauts de ligne par des espaces ou supprime tous les sauts, et copiez la sortie en une seule ligne obtenue.',
      },
      {
        question: 'Le Suppresseur d’Espaces modifie-t-il la ponctuation, les lettres ou les chiffres ?',
        answer:
          'Non. Il ne modifie que les caractères d’espacement comme les espaces, les tabulations et les sauts de ligne ; vos mots, votre ponctuation et vos chiffres restent exactement tels quels.',
      },
      {
        question: 'Puis-je utiliser le Suppresseur d’Espaces pour nettoyer du texte avant de le coller dans un formulaire ?',
        answer:
          'Oui. Il est idéal pour supprimer les espaces de fin et les sauts de ligne parasites des adresses, des noms ou des descriptions avant de les saisir dans un formulaire web ou un champ de CMS.',
      },
      {
        question: 'Que signifie le compteur de caractères affiché après le nettoyage ?',
        answer:
          'Il montre combien de caractères ont été supprimés pendant le nettoyage, pour que vous puissiez voir exactement combien d’espaces superflus l’outil a retirés de votre texte.',
      },
      {
        question: 'Le Suppresseur d’Espaces fonctionne-t-il sur de très longs documents ?',
        answer:
          'Oui. Comme il fonctionne localement dans votre navigateur, vous pouvez coller de longs documents, même si des blocs de texte extrêmement volumineux peuvent prendre un moment à traiter.',
      },
      {
        question: 'Puis-je annuler un nettoyage si je choisis la mauvaise option ?',
        answer:
          'Votre texte d’origine reste dans le champ d’entrée, donc vous pouvez simplement choisir une autre option et la sortie se met à jour sans perdre votre texte collé.',
      },
      {
        question: 'Le Suppresseur d’Espaces supprime-t-il les espaces à l’intérieur des mots ?',
        answer:
          'Non. Les espaces à l’intérieur des mots sont des espaces simples, donc ils ne sont pas touchés ; seules les suites de deux espaces ou plus sont réduites.',
      },
      {
        question: 'Quels types d’espaces l’outil nettoie-t-il ?',
        answer:
          'Il nettoie les espaces ordinaires, les caractères de tabulation, les espaces de fin et de début des lignes, les lignes vides et les sauts de ligne indésirables.',
      },
      {
        question: 'Puis-je utiliser le Suppresseur d’Espaces sur du code ?',
        answer:
          'Il fonctionne pour la prose, mais soyez prudent avec le code sensible à l’indentation comme Python, car rogner les espaces de début peut changer le comportement du code.',
      },
    ],
  },
  'sort-lines': {
    slug: 'trier-les-lignes',
    name: 'Trier les Lignes par Ordre Alphabétique',
    shortDescription:
      'Triez des listes de A à Z, de Z à A, naturellement (1, 2, 10), par longueur de caractères, à l’envers ou mélangées aléatoirement.',
    keywords: [
      'trier les lignes par ordre alphabétique',
      'mettre une liste par ordre alphabétique en ligne',
      'outil de tri naturel',
      'trier le texte par longueur',
      'trier une liste de a à z',
      'outil d’ordre alphabétique',
      'mélanger les lignes en ligne',
      'trier les lignes de z à a',
      'inverser l’ordre des lignes',
    ],
    seo: {
      title: 'Trier les Lignes : ordre A-Z et naturel | UtilityFlow',
      description:
        'Triez les lignes de A à Z, de Z à A, par ordre alphabétique ou naturel, par longueur, à l’envers ou mélangées — avec déduplication en option.',
      primaryKeyword: 'trier les lignes par ordre alphabétique',
      secondaryKeywords: ['mettre une liste par ordre alphabétique', 'trieur de lignes de texte', 'tri naturel en ligne', 'trier les lignes de a à z'],
      longTailKeywords: ['trier une liste par ordre alphabétique avec des nombres dans l’ordre naturel', 'trier les lignes par longueur du plus court au plus long', 'mettre par ordre alphabétique et supprimer les lignes en double', 'inverser l’ordre des lignes en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organisez des listes, des bibliographies, des SKU d’inventaire ou des imports de code par ordre alphabétique, numérique avec tri naturel, par longueur de caractères ou à l’envers.',
    instructions: [
      {
        title: 'Saisissez un élément par ligne',
        description:
          'Collez votre liste dans le champ Lignes d’entrée, avec chaque élément sur sa propre ligne.',
      },
      {
        title: 'Choisissez un ordre de tri',
        description:
          'Choisissez A → Z, Z → A, Naturel (1, 2, 10), Le plus court / Le plus long d’abord, Ordre inversé ou Mélanger.',
      },
      {
        title: 'Définissez la sensibilité à la casse',
        description:
          'Activez la comparaison sensible à la casse si les majuscules et les minuscules doivent être triées séparément ; sinon « pomme » et « Pomme » sont traitées de la même façon.',
      },
      {
        title: 'Activez les options de nettoyage',
        description:
          'Supprimez éventuellement les lignes vides ou les doublons dans le même passage pour que votre liste triée ressorte propre.',
      },
      {
        title: 'Vérifiez et copiez la liste triée',
        description:
          'Vérifiez la sortie triée dans l’ordre, puis copiez-la en un clic pour la coller dans votre document, votre tableur ou votre fichier de code.',
      },
      {
        title: 'Corrigez des éléments numérotés triés dans le désordre',
        description:
          'Si « Élément 10 » apparaît avant « Élément 2 », passez de A → Z au tri naturel, qui compare les nombres à l’intérieur de chaque ligne numériquement.',
      },
    ],
    examples: [
      {
        title: 'Tri numérique naturel contre tri de texte standard',
        input: 'Élément 10\nÉlément 2\nÉlément 1',
        output: 'Élément 1\nÉlément 2\nÉlément 10',
        explanation:
          'Le mode naturel compare les nombres intégrés numériquement, donc Élément 2 précède Élément 10.',
      },
      {
        title: 'Tri alphabétique simple d’une liste',
        input: 'Banane\nPomme\nCerise',
        output: 'Pomme\nBanane\nCerise',
        explanation:
          'Le tri A → Z classe les éléments par ordre alphabétique, avec les accents gérés par le comparateur local.',
      },
    ],
    benefits: [
      'Inclut un comparateur local sensible à la langue et un tri numérique naturel',
      'Combine le tri avec la suppression des lignes vides et la déduplication',
      'Prend en charge le tri par longueur pour les tableaux d’interface et les vérifications de texte',
      'Copie instantanée du résultat trié en un clic',
    ],
    useCases: [
      'Mettre par ordre alphabétique des bibliographies, des glossaires et des listes de référence',
      'Ordonner naturellement des fichiers ou des cas de test numérotés (Élément 1, 2, 10)',
      'Trier des propriétés CSS, des imports ou des clés d’environnement',
      'Randomiser des participations à un tirage ou des questions de quiz avec Mélanger',
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre A → Z et le tri naturel ?',
        answer:
          'Le tri alphabétique standard place « Élément 10 » avant « Élément 2 » parce que « 1 » vient avant « 2 ». Le tri naturel analyse les nombres dans les chaînes, donc « Élément 2 » vient avant « Élément 10 ».',
      },
      {
        question: 'Puis-je supprimer les entrées en double pendant le tri ?',
        answer:
          'Oui. Cochez l’option « Supprimer les doublons » pour dédupliquer et trier votre liste simultanément.',
      },
      {
        question: 'En quoi l’Ordre inversé diffère-t-il de Z → A ?',
        answer:
          'Z → A trie par ordre alphabétique décroissant, tandis que l’Ordre inversé retourne votre séquence de lignes existante du bas vers le haut sans mettre par ordre alphabétique.',
      },
      {
        question: 'L’outil Trier les Lignes est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, sans compte et sans limite sur le nombre de listes que vous triez.',
      },
      {
        question: 'Ma liste quitte-t-elle mon navigateur quand je la trie ?',
        answer:
          'Non. Le tri se fait localement dans votre navigateur, donc votre liste n’est jamais envoyée vers un serveur.',
      },
      {
        question: 'Qu’est-ce que le tri naturel et quand l’utiliser ?',
        answer:
          'Le tri naturel compare les nombres à l’intérieur du texte numériquement, donc utilisez-le pour des éléments numérotés comme « Chapitre 2 » et « Chapitre 10 » pour les garder dans le vrai ordre numérique.',
      },
      {
        question: 'Puis-je trier une liste de Z à A ?',
        answer:
          'Oui. Choisissez l’option Z → A pour trier vos lignes par ordre alphabétique inverse.',
      },
      {
        question: 'Puis-je trier les lignes par longueur plutôt que par ordre alphabétique ?',
        answer:
          'Oui. Choisissez Le plus court d’abord ou Le plus long d’abord pour ordonner les lignes par longueur de caractères, ce qui est pratique pour vérifier des tableaux d’interface ou aligner du texte.',
      },
      {
        question: 'Que fait l’option Mélanger dans l’outil Trier les Lignes ?',
        answer:
          'Mélanger randomise l’ordre de vos lignes, ce qui est utile pour des participations à un tirage, des questions de quiz ou toute liste que vous voulez dans un ordre aléatoire.',
      },
      {
        question: 'L’outil Trier les Lignes supprime-t-il les lignes vides ?',
        answer:
          'Oui, si vous activez l’option des lignes vides. Sinon, les lignes vides sont conservées dans la sortie.',
      },
      {
        question: 'Puis-je trier en tenant compte de la casse avec l’outil Trier les Lignes ?',
        answer:
          'Oui. Activez la comparaison sensible à la casse pour trier les majuscules et les minuscules séparément ; avec elle désactivée, « pomme » et « Pomme » sont traitées de la même façon.',
      },
      {
        question: 'L’outil Trier les Lignes fonctionne-t-il avec des nombres et des dates ?',
        answer:
          'Oui. Le tri naturel ordonne correctement les nombres intégrés, et les dates se trient correctement quand elles sont écrites au format AAAA-MM-JJ ; les autres formats de date se trient comme du texte brut.',
      },
      {
        question: 'Puis-je trier des colonnes à l’intérieur d’une ligne, comme des valeurs CSV ?',
        answer:
          'Non. L’outil trie des lignes entières, donc chaque ligne se déplace comme une unité ; il ne réordonne pas les valeurs séparées par des virgules à l’intérieur d’une seule ligne.',
      },
      {
        question: 'Que deviennent les lignes en double quand je trie ?',
        answer:
          'Les doublons restent dans la liste sauf si vous activez « Supprimer les doublons », qui ne garde que la première occurrence de chaque ligne avant le tri.',
      },
      {
        question: 'Puis-je inverser une liste sans la trier par ordre alphabétique ?',
        answer:
          'Oui. Utilisez Ordre inversé pour retourner votre liste du bas vers le haut tout en gardant le texte à l’intérieur de chaque ligne inchangé.',
      },
      {
        question: 'L’outil Trier les Lignes gère-t-il les lettres accentuées et d’autres langues ?',
        answer:
          'Oui. Il utilise un comparateur sensible à la langue, donc les caractères accentués et les lettres non anglaises se trient dans un ordre logique plutôt que par codes de caractères bruts.',
      },
      {
        question: 'Puis-je trier une liste numérotée comme « 1. Pomme, 2. Banane, 10. Cerise » ?',
        answer:
          'Oui. Le tri naturel lit les nombres au début de chaque ligne, donc « 2. Banane » vient correctement avant « 10. Cerise ».',
      },
      {
        question: 'Quelle taille de liste l’outil Trier les Lignes peut-il gérer ?',
        answer:
          'Il fonctionne localement dans votre navigateur et gère facilement les longues listes, même si des collages extrêmement volumineux de dizaines de milliers de lignes peuvent prendre un moment.',
      },
      {
        question: 'Le tri modifie-t-il le texte à l’intérieur de chaque ligne ?',
        answer:
          'Non. Le tri ne modifie que l’ordre des lignes ; les mots, les nombres et la ponctuation à l’intérieur de chaque ligne restent exactement les mêmes.',
      },
      {
        question: 'Puis-je annuler un tri si je choisis le mauvais ordre ?',
        answer:
          'Votre liste d’origine reste dans le champ d’entrée, donc vous pouvez choisir un autre ordre de tri et la sortie se met à jour sans perdre votre liste collée.',
      },
    ],
  },
  'find-and-replace': {
    slug: 'rechercher-et-remplacer',
    name: 'Rechercher et Remplacer du Texte',
    shortDescription:
      'Recherchez et remplacez des chaînes dans du texte avec sensibilité à la casse, correspondance de mots entiers et prise en charge des expressions régulières.',
    keywords: [
      'rechercher et remplacer du texte',
      'remplacement de texte en masse',
      'rechercher et remplacer par regex',
      'rechercher et remplacer en ligne',
      'remplacer du texte en ligne',
      'rechercher remplacer des mots',
      'remplacer par regex en ligne',
      'remplacer toutes les occurrences',
      'outil de remplacement de texte',
    ],
    seo: {
      title: 'Rechercher et Remplacer : texte et regex | UtilityFlow',
      description:
        'Recherchez et remplacez du texte dans votre navigateur avec un compteur d’occurrences en direct, la casse, les mots entiers et RegExp — sans inscription.',
      primaryKeyword: 'rechercher et remplacer du texte',
      secondaryKeywords: ['rechercher et remplacer en ligne', 'outil de remplacement par regex', 'remplacer du texte en masse', 'remplacer du texte en ligne'],
      longTailKeywords: ['rechercher et remplacer uniquement des mots entiers en ligne', 'rechercher et remplacer par regex avec groupes de capture', 'remplacer des chaînes de texte en masse dans le navigateur', 'remplacer toutes les occurrences dans un texte en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Effectuez des modifications rapides de recherche et de remplacement en masse dans de la prose, des extraits CSV ou des blocs de code en utilisant la correspondance de texte exacte, les limites de mots entiers ou les groupes de capture d’expressions régulières.',
    instructions: [
      {
        title: 'Saisissez les termes Rechercher et Remplacer',
        description:
          'Tapez le texte ou le motif à trouver dans Rechercher, et la chaîne cible dans Remplacer par.',
      },
      {
        title: 'Définissez les options de correspondance',
        description:
          'Activez Sensible à la casse, Mot entier uniquement ou Utiliser une expression régulière (RegExp) pour la correspondance par motif.',
      },
      {
        title: 'Collez le texte à modifier',
        description:
          'Collez le document complet, l’extrait CSV ou le bloc de code dans le champ de texte source pour que chaque occurrence soit couverte en un seul passage.',
      },
      {
        title: 'Vérifiez le compteur d’occurrences en direct',
        description:
          'Consultez le compteur en direct des occurrences remplacées pour confirmer que la correspondance touche exactement les endroits attendus avant de copier.',
      },
      {
        title: 'Examinez la sortie et copiez',
        description:
          'Parcourez le texte mis à jour pour repérer les modifications involontaires, puis copiez-le en un clic pour le recoller dans votre document ou votre éditeur.',
      },
      {
        title: 'Corrigez une correspondance qui ne remplace rien',
        description:
          'Si le compteur est à zéro, vérifiez la sensibilité à la casse, désactivez Mot entier uniquement, ou échappez les caractères spéciaux comme . et ( en mode RegExp ; les motifs invalides affichent un message d’erreur de syntaxe.',
      },
    ],
    examples: [
      {
        title: 'Reformatage par groupe de capture regex',
        input: 'Rechercher : Commande n°(\\d+)  |  Remplacer : Réf-$1\nSource : Commande n°1042 expédiée.',
        output: 'Réf-1042 expédiée.',
        explanation:
          'Utilise un groupe de capture RegExp ($1) pour préserver l’identifiant numérique de commande tout en changeant le préfixe.',
      },
      {
        title: 'Remplacement d’un nom de marque dans un document',
        input: 'Rechercher : AncienneMarque  |  Remplacer : NouvelleMarque\nSource : Bienvenue chez AncienneMarque, votre partenaire AncienneMarque.',
        output: 'Bienvenue chez NouvelleMarque, votre partenaire NouvelleMarque.',
        explanation:
          'Remplace toutes les occurrences du nom de marque dans tout le document en un seul passage.',
      },
    ],
    benefits: [
      'Affiche le compteur d’occurrences en direct et un retour d’erreur de syntaxe clair pour les motifs RegExp invalides',
      'L’option de mot entier évite les correspondances partielles accidentelles à l’intérieur de mots plus longs',
      'Prend en charge les groupes de capture RegExp ($1, $2) pour les réécritures de texte structuré',
      'Fonctionne localement, donc les extraits privés et les identifiants restent sur votre appareil',
    ],
    useCases: [
      'Échanger des noms de marque, des URL ou des dates dans de longs documents',
      'Reformater des identifiants ou des dates avec des groupes de capture d’expressions régulières',
      'Mettre à jour des délimiteurs ou des variables d’espace réservé dans des modèles',
      'Nettoyer des fautes de frappe répétées avant publication',
    ],
    faqs: [
      {
        question: 'Puis-je utiliser des groupes de capture comme $1 en mode RegExp ?',
        answer:
          'Oui. Quand « Utiliser une expression régulière (RegExp) » est coché, les groupes entre parenthèses dans Rechercher peuvent être référencés comme $1, $2, etc. dans le champ Remplacer.',
      },
      {
        question: 'Pourquoi « Mot entier uniquement » est-il désactivé en mode RegExp ?',
        answer:
          'En mode RegExp, vous contrôlez directement les limites de mots en utilisant \\b dans votre motif.',
      },
      {
        question: 'Laisser « Remplacer par » vide supprime-t-il le texte trouvé ?',
        answer:
          'Oui. Laisser le champ Remplacer vide supprime proprement chaque occurrence trouvée, alors vérifiez l’aperçu d’abord pour éviter de supprimer un texte encore utile.',
      },
      {
        question: 'L’outil Rechercher et Remplacer est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, sans compte et sans limite sur le nombre de remplacements que vous effectuez.',
      },
      {
        question: 'Mon texte quitte-t-il mon navigateur quand j’utilise Rechercher et Remplacer ?',
        answer:
          'Non. Tout s’exécute localement dans votre navigateur, donc les extraits privés, les documents et le code restent sur votre appareil.',
      },
      {
        question: 'Que montre le compteur d’occurrences en direct ?',
        answer:
          'Il montre combien d’occurrences de votre terme Rechercher ont été remplacées, pour que vous puissiez confirmer que le remplacement a touché exactement les endroits attendus.',
      },
      {
        question: 'Puis-je remplacer uniquement des mots entiers et pas des parties de mots plus longs ?',
        answer:
          'Oui. Activez « Mot entier uniquement » pour que « chat » soit remplacé mais « château » reste intact ; en mode RegExp, utilisez plutôt les limites de mots \\b.',
      },
      {
        question: 'Rechercher et Remplacer est-il sensible à la casse ?',
        answer:
          'Seulement si vous activez l’option Sensible à la casse. Avec elle désactivée, « Pomme » et « pomme » sont traitées comme la même correspondance.',
      },
      {
        question: 'Puis-je remplacer du texte sur plusieurs lignes à la fois ?',
        answer:
          'Oui. L’outil traite tout votre texte collé en un seul passage, donc les correspondances sur chaque ligne sont remplacées ensemble.',
      },
      {
        question: 'Que se passe-t-il si mon expression régulière est invalide ?',
        answer:
          'L’outil affiche un message d’erreur de syntaxe clair au lieu de produire une mauvaise sortie, pour que vous puissiez corriger le motif avant de copier quoi que ce soit.',
      },
      {
        question: 'Puis-je trouver des caractères spéciaux comme les sauts de ligne ou les tabulations dans Rechercher et Remplacer ?',
        answer:
          'Oui, en mode RegExp vous pouvez utiliser des séquences d’échappement comme \\n pour un saut de ligne et \\t pour une tabulation dans votre motif.',
      },
      {
        question: 'Puis-je échanger deux mots avec des groupes de capture ?',
        answer:
          'Oui. Par exemple, recherchez (\\w+) (\\w+) et remplacez par $2 $1 pour transformer « Jean Dupont » en « Dupont Jean ».',
      },
      {
        question: 'Puis-je insérer tout le texte trouvé dans le remplacement ?',
        answer:
          'Oui. En mode RegExp, $& dans le champ Remplacer insère tout le texte trouvé, ce qui est utile pour entourer les correspondances de guillemets ou de balises.',
      },
      {
        question: 'Puis-je remplacer des URL ou des dates dans tout un document ?',
        answer:
          'Oui. Collez le document complet et utilisez un seul passage de Rechercher et Remplacer pour échanger chaque ancienne URL, chaque nom de marque ou chaque date d’un coup.',
      },
      {
        question: 'Rechercher et Remplacer modifie-t-il seulement la première occurrence ou toutes ?',
        answer:
          'Il remplace toutes les correspondances du texte collé en une fois ; pour ne modifier qu’une seule occurrence, modifiez cet endroit manuellement après avoir copié le résultat.',
      },
      {
        question: 'Rechercher et Remplacer fonctionne-t-il sur du code ?',
        answer:
          'Oui. Il fonctionne sur des blocs de code, des modèles et des extraits de configuration, donc vous pouvez renommer des variables, mettre à jour des espaces réservés ou changer des délimiteurs en masse.',
      },
      {
        question: 'Puis-je corriger une faute de frappe répétée avec Rechercher et Remplacer ?',
        answer:
          'Oui. Saisissez le mot mal orthographié dans Rechercher et l’orthographe correcte dans Remplacer, puis vérifiez le compteur d’occurrences pour voir combien de fautes ont été corrigées.',
      },
      {
        question: 'Quel dialecte d’expression régulière l’outil utilise-t-il ?',
        answer:
          'Il utilise JavaScript RegExp, la même syntaxe de motif que dans les navigateurs, avec des groupes de capture, des classes de caractères et des quantificateurs.',
      },
      {
        question: 'Puis-je annuler un remplacement si je fais une erreur ?',
        answer:
          'Votre texte d’origine reste dans le champ d’entrée, donc vous pouvez modifier les termes Rechercher ou Remplacer et la sortie se met à jour sans perdre votre texte source.',
      },
      {
        question: 'Y a-t-il une limite sur la quantité de texte que je peux traiter avec Rechercher et Remplacer ?',
        answer:
          'Il n’y a pas de limite définie. Il fonctionne localement dans votre navigateur et gère de longs documents, même si des collages extrêmement volumineux peuvent prendre un moment à traiter.',
      },
    ],
  },
  'text-reverser': {
    slug: 'inverseur-de-texte',
    name: 'Inverseur de Texte',
    shortDescription:
      'Inversez des chaînes de texte entières, l’ordre des mots, les lettres de chaque mot, ou la séquence des lignes.',
    keywords: [
      'inverseur de texte',
      'inverser une chaîne en ligne',
      'inverser les mots',
      'inverser les lignes',
      'inverser les caractères d’un texte',
      'retourner du texte en ligne',
      'générateur de texte miroir',
      'inverser l’ordre des phrases',
      'générateur de texte à l’envers',
    ],
    seo: {
      title: 'Inverseur de Texte : mots et lignes inversés | UtilityFlow',
      description:
        'Inversez les caractères, retournez l’ordre des mots, reflétez chaque mot ou inversez l’ordre des lignes — compatible Unicode, gratuit et privé sans inscription.',
      primaryKeyword: 'inverseur de texte',
      secondaryKeywords: ['inverser du texte en ligne', 'inverser l’ordre des mots', 'inverser les lignes', 'retourner du texte en ligne'],
      longTailKeywords: ['inverser chaque mot d’une phrase en ligne', 'inverser l’ordre des lignes d’un fichier texte', 'inverseur de chaîne compatible unicode', 'inverser les caractères d’un texte en ligne'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Retournez des séquences de caractères, inversez l’ordre des mots par ligne, reflétez les lettres à l’intérieur de chaque mot, ou inversez des listes multi-lignes du bas vers le haut avec une gestion Unicode.',
    instructions: [
      {
        title: 'Choisissez un mode d’inversion',
        description:
          'Sélectionnez Inverser les caractères, Inverser l’ordre des mots, Inverser chaque mot ou Inverser l’ordre des lignes.',
      },
      {
        title: 'Saisissez votre texte',
        description:
          'Tapez ou collez du texte dans Texte d’origine pour voir immédiatement la sortie inversée.',
      },
      {
        title: 'Vérifiez l’aperçu en direct',
        description:
          'La sortie se met à jour pendant que vous tapez, pour que vous puissiez voir instantanément comment le mode choisi transforme votre texte.',
      },
      {
        title: 'Comparez les modes côte à côte',
        description:
          'Basculez entre les modes sur la même entrée pour comparer l’inversion des caractères, l’inversion de l’ordre des mots et l’inversion des lignes avant d’en choisir un.',
      },
      {
        title: 'Copiez la sortie',
        description:
          'Utilisez le bouton Copier pour copier le texte transformé, puis collez-le dans votre document, votre casse-tête ou votre message.',
      },
      {
        title: 'Corrigez des lignes inversées dans le mauvais sens',
        description:
          'Si les mots à l’intérieur de chaque ligne se sont retournés alors que vous vouliez seulement retourner la liste, passez à Inverser l’ordre des lignes, qui déplace les lignes sans toucher au texte qu’elles contiennent.',
      },
    ],
    examples: [
      {
        title: 'Comparer les modes d’inversion',
        input: 'Bonjour Monde',
        output: 'Caractères : ednoM ruojnoB · Ordre des mots : Monde Bonjour · Chaque mot : ruojnoB ednoM',
        explanation:
          'Montre comment chaque mode modifie le placement des caractères par rapport aux mots.',
      },
      {
        title: 'Inverser une liste de noms « Prénom Nom »',
        input: 'Jean Dupont\nMarie Martin',
        output: 'Marie Martin\nJean Dupont',
        explanation:
          'Le mode Inverser l’ordre des lignes retourne la liste sans modifier le texte de chaque ligne.',
      },
    ],
    benefits: [
      'Le découpage de caractères compatible Unicode préserve les émojis et les paires de substitution',
      'Quatre modes distincts couvrent à la fois le retournement de chaînes et l’inversion de listes',
      'Aperçu en direct sans clic pendant que vous tapez',
      'Exécution légère côté navigateur',
    ],
    useCases: [
      'Inverser des journaux ou des listes chronologiques du plus ancien au plus récent',
      'Tester des chaînes palindromes et des cas limites de caractères de droite à gauche',
      'Inverser des listes de noms « Prénom Nom » ou des séquences de mots',
      'Créer des casse-tête, des chiffres et des jeux de mots',
    ],
    faqs: [
      {
        question: 'Inverser les caractères casse-t-il les émojis ou les caractères Unicode accentués ?',
        answer:
          'L’outil utilise l’itération par points de code Array.from() plutôt qu’une indexation UTF-16 naïve, donc les caractères multi-octets et les émojis standard restent intacts.',
      },
      {
        question: 'Comment retourner une liste de lignes sans inverser les mots ?',
        answer:
          'Sélectionnez « Inverser l’ordre des lignes » pour déplacer la ligne du bas vers le haut tout en gardant le texte à l’intérieur de chaque ligne inchangé.',
      },
      {
        question: 'Quelle est la différence entre « Inverser l’ordre des mots » et « Inverser chaque mot » ?',
        answer:
          '« Inverser l’ordre des mots » transforme « un deux trois » en « trois deux un », tandis que « Inverser chaque mot » garde les positions des mots et retourne les lettres en « nu xued siort ».',
      },
      {
        question: 'L’Inverseur de Texte est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, sans compte et sans limite sur la quantité de texte que vous inversez.',
      },
      {
        question: 'Mon texte quitte-t-il mon navigateur quand j’utilise l’Inverseur de Texte ?',
        answer:
          'Non. L’inversion se fait localement dans votre navigateur, donc votre texte n’est jamais envoyé ni stocké nulle part.',
      },
      {
        question: 'Quels sont les quatre modes d’inversion de l’Inverseur de Texte ?',
        answer:
          'Inverser les caractères retourne chaque caractère, Inverser l’ordre des mots retourne l’ordre des mots, Inverser chaque mot reflète les lettres à l’intérieur de chaque mot, et Inverser l’ordre des lignes inverse la séquence des lignes.',
      },
      {
        question: 'Puis-je inverser tout un paragraphe avec l’Inverseur de Texte ?',
        answer:
          'Oui. Collez le paragraphe et choisissez Inverser les caractères pour retourner tout le bloc, ou Inverser l’ordre des lignes pour retourner le texte multi-lignes ligne par ligne.',
      },
      {
        question: 'Puis-je utiliser l’Inverseur de Texte pour créer un effet miroir ?',
        answer:
          'Oui. Inverser les caractères produit un texte d’apparence miroir qui se lit à l’envers, ce qui convient bien aux casse-tête, aux chiffres et aux messages ludiques.',
      },
      {
        question: 'L’Inverseur de Texte fonctionne-t-il avec les lettres accentuées ?',
        answer:
          'Oui. Il gère les caractères Unicode par point de code, donc les lettres accentuées comme é et ü sont inversées correctement sans se décomposer.',
      },
      {
        question: 'L’Inverseur de Texte fonctionne-t-il avec du texte dans d’autres langues ?',
        answer:
          'Oui. Il fonctionne sur n’importe quel texte Unicode, y compris les écritures non latines, parce que l’inversion se fait caractère par caractère plutôt que selon des règles de langue.',
      },
      {
        question: 'Qu’est-ce qu’un palindrome et l’Inverseur de Texte peut-il aider à en vérifier un ?',
        answer:
          'Un palindrome se lit de la même façon à l’endroit et à l’envers, comme « radar ». Inversez votre texte et comparez-le avec l’original pour vérifier.',
      },
      {
        question: 'Puis-je utiliser l’Inverseur de Texte pour des casse-tête et des jeux de mots ?',
        answer:
          'Oui. Les mots et les phrases inversés sont un format classique de casse-tête, et l’aperçu en direct facilite la création rapide d’indices et de réponses.',
      },
      {
        question: 'Inverser du texte ajoute-t-il ou supprime-t-il des espaces ?',
        answer:
          'Inverser les caractères inverse tout, y compris les espaces, tandis que les modes basés sur les mots gardent des espaces simples entre les mots pour que la sortie reste lisible.',
      },
      {
        question: 'Puis-je inverser un très long bloc de texte ?',
        answer:
          'Oui. Il fonctionne localement dans votre navigateur et gère les longs collages, même si des blocs extrêmement volumineux peuvent prendre un moment à se mettre à jour dans l’aperçu en direct.',
      },
      {
        question: 'L’Inverseur de Texte enregistre-t-il ou stocke-t-il mon texte ?',
        answer:
          'Non. Rien n’est enregistré ni envoyé vers un serveur ; votre texte n’existe que dans l’onglet de votre navigateur pendant que vous utilisez l’outil.',
      },
      {
        question: 'Comment inverser des noms « Prénom Nom » en « Nom Prénom » ?',
        answer:
          'Utilisez Inverser l’ordre des mots, qui transforme « Jean Dupont » en « Dupont Jean » tout en gardant chaque nom orthographié correctement.',
      },
      {
        question: 'L’Inverseur de Texte peut-il inverser des nombres ?',
        answer:
          'Oui. En mode Inverser les caractères, « 12345 » devient « 54321 », ce qui est utile pour tester des chaînes numériques et des codes.',
      },
      {
        question: 'Que deviennent les sauts de ligne quand j’inverse les caractères ?',
        answer:
          'Les sauts de ligne sont inversés avec le reste du texte, donc les lignes finissent aussi dans l’ordre inverse ; utilisez Inverser l’ordre des lignes si vous voulez retourner les lignes sans toucher au texte qu’elles contiennent.',
      },
      {
        question: 'Puis-je annuler une inversion ?',
        answer:
          'Oui. Votre texte d’origine reste dans le champ d’entrée, et inverser la sortie une seconde fois avec le même mode restaure le texte d’origine.',
      },
      {
        question: 'Le texte inversé est-il lisible ?',
        answer:
          'Non, le texte inversé se lit à l’envers par conception. Recollez-le dans l’outil et inversez-le à nouveau pour restaurer le texte d’origine.',
      },
    ],
  },
  'lorem-ipsum-generator': {
    slug: 'generateur-de-lorem-ipsum',
    name: 'Générateur de Lorem Ipsum',
    shortDescription:
      'Générez des paragraphes, des phrases ou un nombre de mots personnalisés, avec des balises HTML <p> en option.',
    keywords: [
      'générateur de lorem ipsum',
      'générateur de texte de substitution',
      'texte factice',
      'lorem ipsum html',
      'texte lorem ipsum',
      'générateur de texte factice',
      'paragraphes factices',
      'mots lorem ipsum',
      'générateur de texte de remplissage',
    ],
    seo: {
      title: 'Générateur de Lorem Ipsum : texte factice | UtilityFlow',
      description:
        'Générez du texte factice Lorem Ipsum par paragraphes, phrases ou nombre exact de mots, avec des balises HTML en option — sans inscription dans votre navigateur.',
      primaryKeyword: 'générateur de lorem ipsum',
      secondaryKeywords: ['texte factice', 'générateur de texte factice', 'paragraphes lorem ipsum', 'générateur de faux texte'],
      longTailKeywords: ['générer du lorem ipsum par nombre de mots', 'générateur de lorem ipsum avec balises html p', 'texte factice propre pour maquettes d’interface', 'générateur de lorem ipsum pour maquette de site web'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Créez du texte factice propre adapté à des nombres exacts de paragraphes, de phrases ou de mots pour des wireframes, des tests typographiques et des prototypes de mise en page — avec des balises de paragraphe HTML en option.',
    instructions: [
      {
        title: 'Choisissez l’unité et la quantité',
        description:
          'Choisissez Paragraphes, Phrases ou Mots et saisissez le nombre souhaité.',
      },
      {
        title: 'Personnalisez la mise en forme',
        description:
          'Choisissez de commencer par la phrase classique « Lorem ipsum dolor sit amet... » et d’envelopper ou non les paragraphes dans des balises HTML <p>.',
      },
      {
        title: 'Générez le texte factice',
        description:
          'Le texte est généré instantanément dans votre navigateur, sans attente et sans appel réseau.',
      },
      {
        title: 'Vérifiez le nombre de mots et de caractères',
        description:
          'Utilisez le compteur de mots et de caractères en direct pour vérifier que le texte généré tient dans votre mise en page avant de le coller dans votre design.',
      },
      {
        title: 'Régénérez ou copiez',
        description:
          'Cliquez sur Régénérer pour une nouvelle variation de phrases ou sur Copier le texte factice pour le coller dans votre design.',
      },
      {
        title: 'Adaptez la longueur du texte à votre mise en page',
        description:
          'Si une carte déborde ou semble vide, passez à l’unité Mots et générez un nombre exact de mots qui correspond à l’espace, puis régénérez jusqu’à ce que l’ajustement semble bon.',
      },
    ],
    examples: [
      {
        title: 'Extrait de maquette HTML',
        input: 'Unité : Paragraphes · Quantité : 1 · Envelopper dans des balises <p> : Coché',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation:
          'Prêt à coller directement dans des modèles HTML ou des vues de code de CMS.',
      },
      {
        title: 'Nombre exact de mots pour une carte',
        input: 'Unité : Mots · Quantité : 25 · Envelopper dans des balises <p> : Non coché',
        output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        explanation:
          'Génère exactement 25 mots de texte factice pour tester la hauteur d’une carte sans débordement.',
      },
    ],
    benefits: [
      'Génère des nombres exacts de mots, de phrases ou de paragraphes sur demande',
      'L’enveloppement en balises <p> en option fait gagner du temps pour les prototypes front-end',
      'Le compteur de mots et de caractères en direct vérifie l’ajustement de la mise en page avant le collage',
      'Régénération instantanée sans appel réseau externe',
    ],
    useCases: [
      'Tester à l’effort les hauteurs de cartes et les retours à la ligne dans des mises en page d’interface réactives',
      'Prévisualiser des associations de polices, des hauteurs de ligne et des largeurs de mesure',
      'Remplir des modèles de wireframe et des maquettes de pages éditoriales',
      'Tester le comportement de troncature et de débordement dans des composants CSS',
    ],
    faqs: [
      {
        question: 'Puis-je générer un nombre exact de mots au lieu de paragraphes ?',
        answer:
          'Oui. Basculez le sélecteur d’unité sur « Mots » et saisissez n’importe quel nombre jusqu’à 500 mots.',
      },
      {
        question: 'Pourquoi utiliser le Lorem Ipsum plutôt que de répéter une seule phrase ?',
        answer:
          'Le texte factice latin classique se rapproche de la distribution naturelle des longueurs de mots et du rythme des lettres en anglais sans distraire les parties prenantes avec du texte lisible.',
      },
      {
        question: 'L’option de balise <p> fonctionne-t-elle avec les modes Phrases et Mots ?',
        answer:
          'Oui. En mode Paragraphes, chaque paragraphe reçoit sa propre enveloppe <p>...</p>, tandis que les modes Phrases et Mots enveloppent le bloc généré dans un seul élément <p>.',
      },
      {
        question: 'Le Générateur de Lorem Ipsum est-il gratuit ?',
        answer:
          'Oui. Il est entièrement gratuit, sans inscription, sans compte et sans limite sur la quantité de texte factice que vous générez.',
      },
      {
        question: 'Ai-je besoin d’un compte ou d’une connexion internet pour générer du Lorem Ipsum ?',
        answer:
          'Non. Le générateur fonctionne entièrement dans votre navigateur sans inscription et sans appel réseau, donc il fonctionne instantanément dès que la page est chargée.',
      },
      {
        question: 'Qu’est-ce que le Lorem Ipsum ?',
        answer:
          'Le Lorem Ipsum est un texte factice pseudo-latin brouillé que les designers utilisent depuis l’époque de la composition typographique pour remplir les mises en page avant que le vrai texte soit prêt.',
      },
      {
        question: 'Puis-je générer une seule phrase de Lorem Ipsum ?',
        answer:
          'Oui. Choisissez l’unité Phrases, saisissez 1, et le générateur produit une seule phrase factice.',
      },
      {
        question: 'Puis-je commencer mon texte par la phrase classique « Lorem ipsum dolor sit amet... » ?',
        answer:
          'Oui. Activez l’option d’ouverture classique et votre texte généré commence par la phrase familière « Lorem ipsum dolor sit amet... ».',
      },
      {
        question: 'Puis-je coller le texte généré directement dans du HTML ?',
        answer:
          'Oui. Activez l’option de balise <p> et la sortie est enveloppée dans des balises de paragraphe HTML, prête à coller dans des modèles ou une vue de code de CMS.',
      },
      {
        question: 'Puis-je générer exactement 100 mots de Lorem Ipsum ?',
        answer:
          'Oui. Sélectionnez l’unité Mots, saisissez 100, et le générateur produit exactement 100 mots de texte factice.',
      },
      {
        question: 'Le texte Lorem Ipsum généré est-il toujours le même ?',
        answer:
          'Non. Cliquez sur Régénérer pour produire une nouvelle variation avec des structures de phrases différentes, pour que les blocs répétés n’aient pas l’air identiques.',
      },
      {
        question: 'Le Lorem Ipsum est-il du vrai latin ?',
        answer:
          'Non. C’est du pseudo-latin brouillé composé de mots ressemblant au latin ; il ressemble à une vraie langue mais ne porte aucune signification réelle.',
      },
      {
        question: 'Puis-je utiliser le Lorem Ipsum sur un site web publié ?',
        answer:
          'Il est conçu comme un texte factice temporaire, donc remplacez-le par du vrai contenu avant de publier, sinon les visiteurs verront du texte factice.',
      },
      {
        question: 'À quoi sert le Lorem Ipsum ?',
        answer:
          'Il remplit les wireframes, les maquettes et les prototypes pour que les designers puissent tester la typographie, l’espacement et la mise en page sans attendre le texte final.',
      },
      {
        question: 'Puis-je contrôler la longueur des phrases individuelles ?',
        answer:
          'Non. Vous contrôlez le nombre total en paragraphes, phrases ou mots, tandis que le générateur varie naturellement la longueur des phrases ; régénérez si le rythme ne convient pas à votre mise en page.',
      },
      {
        question: 'Le Générateur de Lorem Ipsum fonctionne-t-il aussi pour le design d’impression ?',
        answer:
          'Oui. Copiez le texte généré dans des outils d’impression, des diaporamas ou des logiciels de mise en page pour prévisualiser comment le vrai texte s’écoulera dans le design.',
      },
      {
        question: 'Comment tester la troncature de texte avec le Lorem Ipsum ?',
        answer:
          'Générez un nombre exact de mots qui correspond à votre espace, collez-le dans le composant et observez si le texte se tronque ou déborde à différentes tailles d’écran.',
      },
      {
        question: 'Puis-je générer du Lorem Ipsum dans une autre langue ?',
        answer:
          'Non. L’outil ne génère que le texte factice classique pseudo-latin ; pour du texte lisible dans une autre langue, rédigez ou traduisez du vrai texte à la place.',
      },
      {
        question: 'Le Générateur de Lorem Ipsum enregistre-t-il mon texte généré ?',
        answer:
          'Non. Tout fonctionne localement dans votre navigateur et rien n’est stocké ni envoyé vers un serveur.',
      },
      {
        question: 'Pourquoi le texte factice aide-t-il les clients à se concentrer sur le design ?',
        answer:
          'Un brouillon lisible attire l’attention sur les mots eux-mêmes, tandis que le Lorem Ipsum neutre garde les réviseurs concentrés sur la mise en page, la typographie et l’espacement.',
      },
    ],
  },
  'readability-checker': {
    slug: 'verificateur-de-lisibilite',
    name: 'Vérificateur de Lisibilité',
    shortDescription:
      'Calculez les scores Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog et SMOG de lisibilité.',
    keywords: [
      'vérificateur de lisibilité',
      'flesch reading ease',
      'niveau flesch-kincaid',
      'calculateur de gunning fog',
      'indice de lisibilité smog',
      'vérificateur de niveau de lecture',
      'vérificateur de score de lisibilité',
      'lisibilité par niveau scolaire',
      'vérifier la lisibilité d’un texte en ligne',
    ],
    seo: {
      title: 'Vérificateur de Lisibilité : scores Flesch | UtilityFlow',
      description:
        'Vérifiez les scores Flesch Reading Ease, Flesch-Kincaid, Gunning Fog et SMOG avec notre vérificateur de lisibilité — gratuit et privé, dans votre navigateur.',
      primaryKeyword: 'vérificateur de lisibilité',
      secondaryKeywords: ['calculateur de flesch reading ease', 'vérificateur de niveau scolaire', 'outil de niveau de lecture', 'calculateur d’indice gunning fog'],
      longTailKeywords: ['vérifier le niveau flesch-kincaid en ligne', 'calculer les indices de lisibilité gunning fog et smog', 'améliorer le score de lisibilité d’un article dans le navigateur', 'quel est un bon score flesch reading ease'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Évaluez la facilité de compréhension de votre texte avec quatre formules de lisibilité reconnues — Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog et SMOG — ainsi que la détection des mots complexes.',
    instructions: [
      {
        title: 'Collez votre article ou votre passage',
        description:
          'Saisissez au moins une phrase complète dans l’éditeur, ou cliquez sur Charger un exemple pour essayer avec un texte d’exemple.',
      },
      {
        title: 'Consultez les quatre cartes de score',
        description:
          'Examinez Flesch Reading Ease (0–100, plus c’est élevé plus c’est facile) ainsi que les estimations de niveau scolaire Flesch-Kincaid, Gunning Fog et SMOG côte à côte.',
      },
      {
        title: 'Lisez la répartition des phrases et des syllabes',
        description:
          'Inspectez le nombre moyen de mots par phrase, de syllabes par mot et le nombre de mots longs ou complexes à l’origine de chaque score.',
      },
      {
        title: 'Trouvez les mots complexes',
        description:
          'Parcourez la liste des mots de 3 syllabes ou plus signalés par l’outil et notez ceux que vous pouvez remplacer par des termes simples du quotidien.',
      },
      {
        title: 'Raccourcissez les phrases longues et vérifiez à nouveau',
        description:
          'Divisez les phrases denses à plusieurs propositions, recollez le texte révisé et observez les scores se mettre à jour instantanément.',
      },
      {
        title: 'Résolvez des résultats étranges',
        description:
          'Si un score semble erroné, vérifiez les points manquants, les abréviations ou les fragments de puces, car les formules comptent les phrases et les syllabes à partir de la ponctuation.',
      },
    ],
    examples: [
      {
        title: 'Guide en langage clair',
        input: 'Les phrases courtes gardent les instructions claires. Utilisez des mots simples pour expliquer les étapes.',
        output: 'Flesch Ease ~78 (Assez facile) · Niveau ~5,2',
        explanation:
          'Une longueur moyenne de phrase plus courte et moins de mots polysyllabiques donnent une meilleure facilité de lecture.',
      },
      {
        title: 'Texte dense à simplifier',
        input: 'La mise en œuvre de méthodologies exhaustives nécessite une compréhension approfondie des paradigmes organisationnels sous-jacents.',
        output: 'Flesch Ease ~15 (Très difficile) · Niveau ~16',
        explanation:
          'Les phrases longues et les mots polysyllabiques font chuter la facilité de lecture et monter le niveau scolaire estimé.',
      },
    ],
    benefits: [
      'Calcule simultanément quatre indices de lisibilité largement utilisés',
      'Liste des exemples de mots de 3 syllabes ou plus trouvés dans votre passage',
      'Affiche le nombre exact de mots moyens par phrase et de syllabes par mot',
      'Fonctionne entièrement hors ligne dans la mémoire du navigateur pour les brouillons non publiés',
    ],
    useCases: [
      'Modifier la documentation, le texte d’interface et les articles d’aide pour plus de clarté',
      'Vérifier des supports pédagogiques par rapport au niveau scolaire cible des élèves',
      'Simplifier les communications juridiques, de santé ou financières destinées aux clients',
      'Améliorer la lisibilité rapide des articles de blog et des pages de destination',
    ],
    faqs: [
      {
        question: 'Quel est un bon score Flesch Reading Ease pour les articles web ?',
        answer:
          'La plupart des contenus web grand public visent un score Flesch Reading Ease entre 60 et 75, ce qui correspond environ à un niveau de lecture de 7e à 9e année.',
      },
      {
        question: 'Comment augmenter un score de lisibilité faible ?',
        answer:
          'Divisez les phrases longues à plusieurs propositions en énoncés plus courts et remplacez le jargon inutile de 3 syllabes ou plus par des mots concrets du quotidien.',
      },
      {
        question: 'Pourquoi l’outil mentionne-t-il le nombre de phrases pour le SMOG ?',
        answer:
          'La formule SMOG standard repose sur des échantillons multi-phrases, donc les courts extraits de 1 à 2 phrases utilisent une estimation mise à l’échelle jusqu’à ce que 3 phrases ou plus soient fournies.',
      },
      {
        question: 'À quoi sert le Vérificateur de Lisibilité ?',
        answer:
          'Il mesure la facilité de compréhension d’un passage en calculant quatre formules standard de lisibilité et en affichant des statistiques de phrases et de syllabes.',
      },
      {
        question: 'Le Vérificateur de Lisibilité est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit sans inscription, et il fonctionne dans votre navigateur pour que votre texte ne quitte jamais votre appareil.',
      },
      {
        question: 'Qu’est-ce que le Flesch-Kincaid Grade Level ?',
        answer:
          'Il estime le niveau scolaire américain nécessaire pour comprendre un texte ; par exemple, un score de 8,0 signifie qu’un élève de huitième année devrait pouvoir le lire confortablement.',
      },
      {
        question: 'Que mesure l’indice Gunning Fog ?',
        answer:
          'Il estime les années d’éducation formelle nécessaires pour comprendre un passage à la première lecture, en fonction de la longueur des phrases et de la part des mots complexes.',
      },
      {
        question: 'Qu’est-ce que l’indice SMOG ?',
        answer:
          'L’indice SMOG estime les années d’éducation nécessaires pour comprendre pleinement un texte, en comptant les mots polysyllabiques dans un échantillon de phrases.',
      },
      {
        question: 'Quel score Flesch Reading Ease dois-je viser ?',
        answer:
          'Le grand public vise généralement 60–70, tandis que le contenu public en langage clair vise souvent 70 ou plus ; l’écriture technique pour spécialistes peut avoir un score plus bas.',
      },
      {
        question: 'Combien de mots faut-il pour des scores de lisibilité précis ?',
        answer:
          'Des échantillons plus longs d’au moins 100 mots donnent des résultats plus fiables, même si l’outil fonctionne sur des passages plus courts avec une estimation SMOG mise à l’échelle.',
      },
      {
        question: 'Le Vérificateur de Lisibilité stocke-t-il ou envoie-t-il mon texte ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur, donc les brouillons, les articles non publiés et les documents privés restent sur votre appareil.',
      },
      {
        question: 'Pourquoi les quatre scores sont-ils en désaccord ?',
        answer:
          'Chaque formule pondère différemment la longueur des phrases et le nombre de syllabes, donc considérez-les comme des estimations complémentaires plutôt qu’un niveau exact unique.',
      },
      {
        question: 'Comment les syllabes sont-elles comptées dans le Vérificateur de Lisibilité ?',
        answer:
          'L’outil estime les syllabes à partir des lettres de chaque mot, ce qui est précis pour la plupart des mots anglais courants mais peut mal compter les noms inhabituels, les abréviations ou les termes techniques.',
      },
      {
        question: 'Puis-je vérifier la lisibilité d’un texte non anglais ?',
        answer:
          'Les quatre formules ont été conçues pour l’anglais, donc les scores pour d’autres langues peuvent être trompeurs même si l’outil les calculera quand même.',
      },
      {
        question: 'Qu’est-ce qui compte comme un mot complexe ?',
        answer:
          'Un mot complexe est généralement un mot de trois syllabes ou plus, à l’exclusion des suffixes courants et des noms propres, et l’outil liste les exemples qu’il trouve dans votre passage.',
      },
      {
        question: 'La ponctuation affecte-t-elle mon score de lisibilité ?',
        answer:
          'Oui. Les limites de phrases viennent des points, des points d’interrogation et des points d’exclamation, donc une ponctuation manquante peut fusionner des phrases et fausser les résultats.',
      },
      {
        question: 'Le Vérificateur de Lisibilité peut-il aider pour le SEO ?',
        answer:
          'Un contenu plus clair et plus facile à lire retient les visiteurs plus longtemps, ce qui soutient le SEO indirectement, même si la lisibilité n’est qu’un facteur de classement parmi beaucoup d’autres.',
      },
      {
        question: 'Un score Flesch Reading Ease plus élevé est-il toujours meilleur ?',
        answer:
          'Pas toujours. Adaptez le score à votre public : les instructions simples doivent avoir un score élevé, tandis que les lecteurs académiques ou juridiques spécialisés peuvent attendre un langage plus dense.',
      },
      {
        question: 'Pourquoi mon score change-t-il quand j’ajoute un titre ?',
        answer:
          'Les scores sont calculés à partir de tout le texte que vous collez, donc inclure des titres, des libellés de navigation ou des fragments de code peut déplacer les moyennes ; vérifiez le corps du texte seul pour le résultat le plus cohérent.',
      },
      {
        question: 'Puis-je utiliser le Vérificateur de Lisibilité pour des dissertations d’étudiants ?',
        answer:
          'Oui. Les enseignants et les étudiants peuvent l’utiliser pour vérifier si une dissertation correspond au niveau scolaire visé avant de la soumettre.',
      },
    ],
  },
  'word-frequency-counter': {
    slug: 'compteur-de-frequence-de-mots',
    name: 'Compteur de Fréquence de Mots et de Densité',
    shortDescription:
      'Analysez les fréquences des expressions de 1, 2 et 3 mots et les pourcentages de densité avec export CSV.',
    keywords: [
      'compteur de fréquence de mots',
      'vérificateur de densité de mots-clés',
      'compteur de n-grammes',
      'analyseur de répétition de mots',
      'analyseur de fréquence d’expressions',
      'calculateur de densité de mots-clés',
      'compter les mots répétés en ligne',
      'compteur d’occurrences de mots',
      'analyse de fréquence de texte',
    ],
    seo: {
      title: 'Compteur de Fréquence de Mots et Densité | UtilityFlow',
      description:
        'Analysez la fréquence des mots et la densité des mots-clés pour les expressions de 1, 2 et 3 mots, avec filtrage des mots vides et export CSV, en ligne.',
      primaryKeyword: 'compteur de fréquence de mots',
      secondaryKeywords: ['vérificateur de densité de mots-clés', 'analyseur de fréquence d’expressions', 'outil d’occurrences de mots', 'compteur de fréquence de n-grammes'],
      longTailKeywords: ['compter la fréquence des mots et le pourcentage de densité en ligne', 'analyser les expressions de 2 et 3 mots dans un texte', 'exporter le tableau de fréquence des mots en csv', 'vérifier le bourrage de mots-clés dans un brouillon d’article'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Auditez les brouillons de contenu pour l’équilibre des mots-clés, les formulations suremployées et les motifs de n-grammes multi-mots avec des tableaux de fréquence instantanés, un filtrage des mots vides et des rapports CSV téléchargeables.',
    instructions: [
      {
        title: 'Collez votre contenu',
        description:
          'Insérez un brouillon d’article, une transcription, un texte de produit ou des réponses d’enquête dans la zone de texte.',
      },
      {
        title: 'Choisissez des expressions de 1, 2 ou 3 mots',
        description:
          'Basculez entre les mots simples et les n-grammes multi-mots pour voir les termes individuels ou les expressions récurrentes.',
      },
      {
        title: 'Filtrez les mots vides et définissez une longueur minimale',
        description:
          'Activez l’exclusion des mots vides pour masquer les mots de remplissage comme « le » et « et », et augmentez la longueur minimale des mots pour vous concentrer sur les termes significatifs.',
      },
      {
        title: 'Examinez les compteurs et les pourcentages de densité',
        description:
          'Triez le tableau pour voir quels mots et quelles expressions apparaissent le plus souvent et quelle part du texte chacun représente.',
      },
      {
        title: 'Repérez la suremployée ou le bourrage de mots-clés',
        description:
          'Comparez vos termes principaux avec vos mots-clés cibles et réécrivez les passages où un terme domine le texte.',
      },
      {
        title: 'Copiez ou exportez les résultats en CSV',
        description:
          'Cliquez sur Exporter en CSV pour télécharger le tableau pour un tableur, ou sur Copier en CSV pour le coller directement dans un rapport.',
      },
    ],
    examples: [
      {
        title: 'Vérification de la densité d’une expression',
        input: 'Les pages rapides améliorent l’engagement des utilisateurs et la vitesse des pages.',
        output: 'pages : 2 · vitesse des pages : 1 · engagement des utilisateurs : 1',
        explanation:
          'Fait ressortir à la fois la fréquence des termes individuels et les expressions thématiques multi-mots.',
      },
      {
        title: 'Repérer un tic verbal dans une transcription',
        input: 'En fait, le projet avance bien. En fait, l’équipe est motivée. En fait, tout va bien.',
        output: 'en fait : 3 · projet : 1 · équipe : 1',
        explanation:
          'Le mode 2 mots révèle les expressions répétées qu’un orateur utilise sans s’en rendre compte.',
      },
    ],
    benefits: [
      'Prend en charge l’analyse de n-grammes de 1, 2 et 3 mots',
      'Le filtre de mots vides en option supprime les mots de remplissage comme « le » et « et »',
      'Seuil de longueur minimale de mot ajustable',
      'Exporte des tableaux CSV propres prêts pour les tableurs',
    ],
    useCases: [
      'Vérifier des brouillons d’articles pour éviter le bourrage de mots-clés involontaire',
      'Repérer des tics verbaux répétitifs dans des discours ou des transcriptions',
      'Identifier des thèmes récurrents dans les commentaires clients ou les réponses d’enquête',
      'Comparer l’équilibre des expressions multi-mots dans le texte des pages de destination',
    ],
    faqs: [
      {
        question: 'Comment le pourcentage de densité de mots-clés est-il calculé ?',
        answer:
          'La densité est égale à (occurrences du terme × mots dans l’expression ÷ nombre total de mots du texte) × 100, ce qui donne une part précise du document.',
      },
      {
        question: 'Que sont les mots vides ?',
        answer:
          'Les mots vides sont des mots grammaticaux très fréquents comme « le », « et », « de », « à » et « en », qui portent généralement peu de signification thématique dans les audits de fréquence.',
      },
      {
        question: 'Puis-je exporter les résultats de fréquence vers Excel ou Google Sheets ?',
        answer:
          'Oui. Cliquez sur « Exporter en CSV » pour télécharger un fichier standard séparé par des virgules ou sur « Copier en CSV » pour coller directement.',
      },
      {
        question: 'À quoi sert un Compteur de Fréquence de Mots ?',
        answer:
          'Il compte la fréquence d’apparition de chaque mot ou expression dans un texte pour que vous puissiez repérer les répétitions, vérifier l’équilibre des mots-clés et trouver des thèmes récurrents.',
      },
      {
        question: 'Le Compteur de Fréquence de Mots est-il gratuit ?',
        answer:
          'Oui, il est gratuit sans inscription, et il fonctionne entièrement dans votre navigateur pour que votre texte ne soit jamais envoyé.',
      },
      {
        question: 'Qu’est-ce que la densité de mots-clés et pourquoi est-ce important ?',
        answer:
          'La densité de mots-clés est le pourcentage d’un texte constitué par un terme donné ; une densité naturelle aide les moteurs de recherche à comprendre un sujet, tandis qu’une densité anormalement élevée ressemble à du bourrage.',
      },
      {
        question: 'Quel est un bon pourcentage de densité de mots-clés ?',
        answer:
          'Il n’y a pas d’objectif officiel, mais la plupart des rédacteurs visent un 1 à 2 % naturel pour un mot-clé principal et se concentrent sur une écriture lisible et utile plutôt que sur l’atteinte d’un chiffre.',
      },
      {
        question: 'Que sont les n-grammes dans le Compteur de Fréquence de Mots ?',
        answer:
          'Les n-grammes sont des séquences d’un, deux ou trois mots consécutifs, comme « vitesse des pages » ou « engagement des utilisateurs », comptées comme des expressions uniques.',
      },
      {
        question: 'Pourquoi analyser les expressions de 2 et 3 mots ?',
        answer:
          'Les mots seuls peuvent être trompeurs, tandis que les expressions multi-mots révèlent les sujets réels et les expressions répétées de votre contenu.',
      },
      {
        question: 'Comment fonctionne le filtre de mots vides ?',
        answer:
          'Quand il est activé, il supprime les mots grammaticaux courants comme « le », « et » et « de » pour que le tableau mette en évidence les mots thématiques au lieu du remplissage.',
      },
      {
        question: 'Puis-je modifier quels mots comptent comme mots vides ?',
        answer:
          'L’outil utilise une liste intégrée de mots vides anglais courants, et vous pouvez activer ou désactiver le filtre quand vous voulez voir le tableau complet.',
      },
      {
        question: 'Que fait le réglage de longueur minimale de mot ?',
        answer:
          'Il exclut les mots plus courts que la longueur choisie, ce qui aide à masquer les abréviations et les lettres isolées du tableau de fréquence.',
      },
      {
        question: 'Le Compteur de Fréquence de Mots envoie-t-il mon texte ?',
        answer:
          'Non. Tout le comptage se fait localement dans votre navigateur, donc les brouillons privés et les transcriptions restent sur votre appareil.',
      },
      {
        question: 'Puis-je compter la fréquence des mots dans un long document ?',
        answer:
          'Oui. Collez de longs articles ou des transcriptions et l’outil compte chaque occurrence, même si de très longs textes peuvent prendre un moment à traiter.',
      },
      {
        question: 'Comment le pourcentage de densité est-il calculé pour les expressions ?',
        answer:
          'La densité est égale aux occurrences de l’expression multipliées par le nombre de mots de l’expression, divisées par le nombre total de mots du texte, puis multipliées par 100.',
      },
      {
        question: 'Le Compteur de Fréquence de Mots peut-il trouver des expressions répétées dans une transcription ?',
        answer:
          'Oui. Basculez en mode 2 ou 3 mots pour faire ressortir les tics verbaux et les expressions qu’un orateur répète sans s’en rendre compte.',
      },
      {
        question: 'La ponctuation affecte-t-elle le nombre de mots ?',
        answer:
          'L’outil supprime la ponctuation avant de compter, donc « vitesse, » et « vitesse » sont comptés comme le même mot.',
      },
      {
        question: 'Les mots en majuscules et en minuscules sont-ils comptés ensemble ?',
        answer:
          'Oui. Les mots sont mis en minuscules avant le comptage, donc « Page » et « page » comptent comme un seul terme.',
      },
      {
        question: 'Puis-je exporter le tableau de fréquence vers Excel ?',
        answer:
          'Oui. Utilisez Exporter en CSV pour télécharger un fichier qui s’ouvre directement dans Excel ou Google Sheets, ou Copier en CSV pour coller le tableau n’importe où.',
      },
      {
        question: 'Comment utiliser la fréquence des mots pour améliorer mon écriture ?',
        answer:
          'Cherchez les mots que vous répétez involontairement, remplacez-les par des synonymes variés, et vérifiez que vos mots-clés principaux apparaissent de façon cohérente mais naturelle.',
      },
    ],
  },
  'text-to-slug': {
    slug: 'convertisseur-texte-en-slug',
    name: 'Convertisseur de Texte en Slug',
    shortDescription:
      'Convertissez des titres et des rubriques en slugs d’URL propres et adaptés au SEO, avec translittération des accents et mode par lot.',
    keywords: [
      'texte en slug',
      'générateur de slug d’url',
      'slugifier en ligne',
      'formateur d’url seo',
      'convertisseur de slug',
      'créer un slug d’url',
      'convertisseur de titre en slug',
      'créateur de slug d’url propre',
      'générateur de slug par lot',
    ],
    seo: {
      title: 'Convertisseur Texte en Slug : URL SEO propres | UtilityFlow',
      description:
        'Transformez des titres en slugs d’URL propres et adaptés au SEO, avec translittération des accents et mode par lot — gratuit et privé, dans votre navigateur.',
      primaryKeyword: 'convertisseur de texte en slug',
      secondaryKeywords: ['générateur de slug d’url', 'slugifier une chaîne', 'générateur d’url propre', 'outil de titre en slug'],
      longTailKeywords: ['convertir un titre d’article en slug d’url adapté au seo', 'convertir plusieurs titres en slugs par lot', 'slugifier les caractères accentués en ascii en ligne', 'générer un slug à partir d’un nom de produit'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez des titres de blog, des noms de produits et des calendriers de contenu multi-lignes en slugs ASCII propres et sûrs pour les URL, avec translittération automatique des accents, contrôles de délimiteur et suppression facultative des mots vides.',
    instructions: [
      {
        title: 'Saisissez un ou plusieurs titres',
        description:
          'Tapez un seul titre ou collez plusieurs lignes pour générer un slug pour chacune en mode par lot.',
      },
      {
        title: 'Choisissez un séparateur',
        description:
          'Choisissez les traits d’union (-) pour des URL adaptées au SEO ou les underscores (_) pour les noms de fichiers et les clés de base de données.',
      },
      {
        title: 'Ajustez les minuscules et les mots vides',
        description:
          'Gardez les minuscules imposées pour des URL propres et supprimez éventuellement les mots vides courants comme « le » et « et » pour des slugs plus courts.',
      },
      {
        title: 'Examinez les slugs générés',
        description:
          'Vérifiez que chaque slug se lit clairement, conserve ses mots clés et ne contient ni ponctuation parasite ni séparateur double.',
      },
      {
        title: 'Copiez les slugs dans votre CMS ou votre code',
        description:
          'Copiez des slugs individuels ou tout le lot dans votre système de contenu, votre table de routage ou vos noms de fichiers.',
      },
      {
        title: 'Corrigez un slug qui semble erroné',
        description:
          'Si un caractère a survécu bizarrement, vérifiez les symboles inhabituels ou l’écriture non latine dans le titre d’origine et simplifiez-le avant de convertir à nouveau.',
      },
    ],
    examples: [
      {
        title: 'Normalisation d’un titre accentué',
        input: 'Café & Crème : Guide pour 2026 !',
        output: 'cafe-and-creme-guide-for-2026',
        explanation:
          'Translittère les lettres latines accentuées, développe « & » en « and » et supprime la ponctuation.',
      },
      {
        title: 'Conversion par lot de titres de blog',
        input: 'Guide du débutant\n10 astuces SEO\nRecettes faciles',
        output: 'guide-du-debutant\n10-astuces-seo\nrecettes-faciles',
        explanation:
          'Convertit chaque ligne en son propre slug en un seul passage, prêt pour un CMS.',
      },
    ],
    benefits: [
      'Normalise les caractères accentués (é, ñ, ü) en équivalents ASCII propres',
      'Prend en charge la conversion multi-lignes par lot en un seul passage',
      'Offre la suppression facultative des mots vides pour des URL plus courtes',
      'Remplace « & » proprement par « and » au lieu de supprimer le sens',
    ],
    useCases: [
      'Générer des URL lisibles pour des articles de blog et de la documentation',
      'Créer des noms de fichiers cohérents pour des ressources et des images téléchargeables',
      'Préparer par lot des slugs de routes pour des sites statiques et des catalogues e-commerce',
      'Standardiser des identifiants de catégories ou de balises dans des bases de données',
    ],
    faqs: [
      {
        question: 'Dois-je utiliser des traits d’union ou des underscores dans les slugs d’URL ?',
        answer:
          'Les moteurs de recherche recommandent généralement les traits d’union (-) comme séparateurs de mots dans les URL, tandis que les underscores (_) sont courants pour les noms de fichiers ou les clés de base de données.',
      },
      {
        question: 'Comment l’outil gère-t-il les caractères accentués comme « café » ?',
        answer:
          'Il applique la normalisation Unicode NFD pour séparer les signes diacritiques et les supprimer proprement, transformant « café » en « cafe » plutôt que de supprimer la lettre.',
      },
      {
        question: 'Puis-je convertir 50 titres d’un coup ?',
        answer:
          'Oui. Collez un titre par ligne et chaque ligne sera convertie en son propre slug correspondant à droite.',
      },
      {
        question: 'Qu’est-ce qu’un Convertisseur de Texte en Slug ?',
        answer:
          'Il transforme un titre ou une expression en un slug propre et sûr pour les URL en le mettant en minuscules, en supprimant la ponctuation et en remplaçant les espaces par des traits d’union ou des underscores.',
      },
      {
        question: 'Le Convertisseur de Texte en Slug est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit sans inscription, et il fonctionne dans votre navigateur pour que vos titres ne quittent jamais votre appareil.',
      },
      {
        question: 'Qu’est-ce qui rend un slug adapté au SEO ?',
        answer:
          'Un bon slug est court, lisible, en minuscules et construit à partir de vrais mots qui décrivent la page, avec des traits d’union séparant les mots.',
      },
      {
        question: 'Quelle longueur doit avoir un slug d’URL ?',
        answer:
          'Visez trois à cinq mots significatifs ; les slugs plus longs sont tronqués dans les résultats de recherche et plus difficiles à retenir pour les lecteurs.',
      },
      {
        question: 'Pourquoi les slugs sont-ils en minuscules ?',
        answer:
          'Les URL en minuscules évitent les problèmes de contenu dupliqué, car certains serveurs traitent « /Guide » et « /guide » comme des pages différentes.',
      },
      {
        question: 'Que deviennent les nombres dans un slug ?',
        answer:
          'Les nombres sont conservés tels quels, donc un titre comme « Guide pour 2026 » devient « guide-pour-2026 ».',
      },
      {
        question: 'Comment les caractères spéciaux sont-ils gérés dans les slugs ?',
        answer:
          'La ponctuation et les symboles sont supprimés, « & » devient « and », et les lettres accentuées comme é sont translittérées en équivalents ASCII simples.',
      },
      {
        question: 'Le Convertisseur de Texte en Slug peut-il gérer des titres non anglais ?',
        answer:
          'Les caractères accentués d’origine latine sont translittérés proprement, mais les écritures non latines peuvent être supprimées, donc vérifiez la sortie avant de publier.',
      },
      {
        question: 'Que sont les mots vides dans un slug ?',
        answer:
          'Les mots vides sont des mots courants comme « un », « le » et « de » qui ajoutent de la longueur sans signification ; les supprimer donne des URL plus courtes et plus propres.',
      },
      {
        question: 'Dois-je supprimer les mots vides de chaque slug ?',
        answer:
          'Pas toujours. Gardez-les quand ils sont nécessaires à la clarté, comme dans les guides « comment faire », et supprimez-les seulement quand le slug reste lisible sans eux.',
      },
      {
        question: 'Puis-je convertir beaucoup de titres à la fois ?',
        answer:
          'Oui. Collez un titre par ligne et l’outil génère un slug correspondant pour chaque ligne en un seul passage.',
      },
      {
        question: 'Le Convertisseur de Texte en Slug envoie-t-il mes titres ?',
        answer:
          'Non. Toute la conversion se fait localement dans votre navigateur, donc les titres non publiés et les noms de produits restent privés.',
      },
      {
        question: 'Pourquoi mes slugs ont-ils des traits d’union doubles ?',
        answer:
          'Les traits d’union doubles viennent généralement de ponctuations ou d’espaces consécutifs dans le titre d’origine ; nettoyez le titre ou supprimez la ponctuation superflue et convertissez à nouveau.',
      },
      {
        question: 'Puis-je utiliser des slugs aussi pour des noms de fichiers ?',
        answer:
          'Oui. Les slugs font des noms de fichiers sûrs et lisibles, et l’option de séparateur underscore convient aux systèmes de fichiers et aux clés de base de données.',
      },
      {
        question: 'Quelle est la différence entre un slug et une URL ?',
        answer:
          'Un slug est la partie finale lisible d’une URL, comme « guide-compresseur-d-image » dans exemple.com/guide-compresseur-d-image.',
      },
      {
        question: 'Les slugs affectent-ils le classement dans les recherches ?',
        answer:
          'Un slug clair aide les moteurs de recherche et les lecteurs à comprendre une page d’un coup d’œil, même s’il n’est qu’un petit élément du SEO.',
      },
      {
        question: 'Puis-je modifier un slug après avoir publié une page ?',
        answer:
          'Oui, mais mettez en place une redirection de l’ancienne URL vers la nouvelle pour que les liens existants et les fiches de recherche ne se cassent pas.',
      },
    ],
  },
  'markdown-previewer': {
    slug: 'apercu-markdown',
    name: 'Aperçu Markdown et Exportateur HTML',
    shortDescription:
      'Écrivez du Markdown dans un éditeur divisé en direct, inspectez la mise en forme rendue en toute sécurité, et copiez ou exportez du HTML propre.',
    keywords: [
      'aperçu markdown',
      'markdown en html',
      'éditeur markdown en ligne',
      'visionneuse markdown en direct',
      'outil markdown en ligne',
      'rendre du markdown en ligne',
      'convertisseur markdown en html',
      'aperçu markdown de readme',
      'exportateur html markdown',
    ],
    seo: {
      title: 'Aperçu Markdown : éditeur HTML en direct | UtilityFlow',
      description:
        'Écrivez du Markdown et regardez-le se rendre en direct, inspectez le HTML compilé, et copiez ou téléchargez un document HTML propre — gratuit, sans inscription.',
      primaryKeyword: 'aperçu markdown',
      secondaryKeywords: ['convertisseur markdown en html', 'éditeur markdown en ligne', 'visionneuse markdown', 'éditeur markdown en direct'],
      longTailKeywords: ['aperçu markdown en direct avec export html', 'convertir un readme markdown en html en ligne', 'éditeur markdown dans le navigateur sans envoi', 'prévisualiser un readme github avant de valider'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Rédigez des fichiers README, de la documentation et des notes formatées dans un éditeur Markdown réactif avec aperçu rendu en direct, échappement HTML sûr, inspection du HTML brut et export HTML en un clic.',
    instructions: [
      {
        title: 'Écrivez ou collez du Markdown',
        description:
          'Utilisez la syntaxe standard (# titres, **gras**, *italique*, listes, citations, liens et blocs de code délimités) dans le panneau de gauche.',
      },
      {
        title: 'Regardez l’aperçu en direct',
        description:
          'Le panneau de droite rend votre mise en forme instantanément pendant que vous tapez, pour que vous puissiez vérifier les titres, les listes et les liens sans actualiser.',
      },
      {
        title: 'Basculez vers l’onglet HTML brut',
        description:
          'Basculez au-dessus du panneau de droite pour inspecter le balisage HTML compilé à partir duquel l’aperçu est construit.',
      },
      {
        title: 'Vérifiez les blocs de code et les liens',
        description:
          'Faites défiler l’aperçu pour confirmer que les blocs de code délimités se rendent correctement et que les liens pointent où vous l’attendez.',
      },
      {
        title: 'Copiez le HTML ou exportez un fichier',
        description:
          'Cliquez sur Copier le HTML pour un extrait à coller dans un CMS ou un e-mail, ou sur Exporter le HTML pour télécharger un document HTML5 autonome.',
      },
      {
        title: 'Corrigez une mise en forme qui semble erronée',
        description:
          'Si une liste ou un bloc de code ne se rend pas, vérifiez une ligne vide manquante avant lui ou une clôture de backticks non fermée, puis revérifiez l’aperçu.',
      },
    ],
    examples: [
      {
        title: 'Conversion d’un titre et d’une liste',
        input: '## Liste de vérification\n- **Vérifier** les liens\n- Publier le brouillon',
        output: '<h2>Liste de vérification</h2><ul><li><strong>Vérifier</strong> les liens</li><li>Publier le brouillon</li></ul>',
        explanation:
          'Convertit une syntaxe Markdown propre directement en éléments HTML sémantiques.',
      },
      {
        title: 'Citation et lien',
        input: '> La simplicité est la clé.\n\nVoir [UtilityFlow](https://utilityflow.online) pour plus d’outils.',
        output: '<blockquote><p>La simplicité est la clé.</p></blockquote><p>Voir <a href="https://utilityflow.online">UtilityFlow</a> pour plus d’outils.</p>',
        explanation:
          'Montre comment les citations et les liens se rendent en HTML propre et sûr.',
      },
    ],
    benefits: [
      'Échappe le HTML brut et assainit les schémas de liens pour empêcher le balisage d’aperçu dangereux',
      'Prend en charge les titres, le gras/l’italique, le barré, les citations, les listes, les liens et les blocs de code',
      'Bascule sans effort entre l’aperçu visuel et le code source HTML brut',
      'Télécharge un fichier .html autonome complet en un clic',
    ],
    useCases: [
      'Prévisualiser des fichiers README.md GitHub avant de valider',
      'Convertir des notes Markdown en HTML propre pour un e-mail ou des blocs de CMS',
      'Rédiger des tutoriels techniques et des notes de version hors ligne',
      'Vérifier rapidement la mise en forme des liens et des clôtures de code',
    ],
    faqs: [
      {
        question: 'L’Aperçu Markdown exécute-t-il du JavaScript intégré ?',
        answer:
          'Non. Les balises HTML brutes de l’entrée sont échappées et les protocoles de lien sont limités aux schémas web sûrs, relatifs, d’ancre et mailto.',
      },
      {
        question: 'Puis-je copier uniquement le fragment HTML compilé sans le boilerplate <html> ?',
        answer:
          'Oui. Le bouton « Copier le HTML » copie le balisage HTML du corps compilé, tandis que « Exporter le HTML » l’enveloppe dans un document HTML5 autonome.',
      },
      {
        question: 'Les blocs de code délimités sont-ils pris en charge ?',
        answer:
          'Oui. Enveloppez les extraits de code multi-lignes dans des triples backticks (```) pour rendre des blocs <pre><code> formatés.',
      },
      {
        question: 'Qu’est-ce qu’un Aperçu Markdown ?',
        answer:
          'Il rend le texte Markdown en HTML formaté en temps réel pour que vous puissiez voir exactement à quoi ressembleront les titres, les listes, les liens et le code avant de publier.',
      },
      {
        question: 'L’Aperçu Markdown est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit sans inscription, et il fonctionne dans votre navigateur pour que vos brouillons ne soient jamais envoyés.',
      },
      {
        question: 'Quelle syntaxe Markdown l’aperçu prend-il en charge ?',
        answer:
          'Il prend en charge les titres, le gras, l’italique, le barré, les citations, les listes ordonnées et non ordonnées, les liens, les images et les blocs de code délimités.',
      },
      {
        question: 'Puis-je prévisualiser un README GitHub avec cet outil ?',
        answer:
          'Oui. Collez le contenu de votre README.md dans l’éditeur pour vérifier comment il se rendra sur GitHub avant de le valider.',
      },
      {
        question: 'L’Aperçu Markdown prend-il en charge les tableaux ?',
        answer:
          'La prise en charge des tableaux dépend du dialecte Markdown ; vérifiez l’aperçu pour voir si vos tableaux à barres verticales se rendent, et simplifiez-les s’ils ne se rendent pas.',
      },
      {
        question: 'Quelle est la différence entre Copier le HTML et Exporter le HTML ?',
        answer:
          'Copier le HTML ne copie que le balisage du corps compilé pour le coller ailleurs, tandis que Exporter le HTML télécharge un document HTML5 autonome complet.',
      },
      {
        question: 'Le HTML exporté est-il une page web complète ?',
        answer:
          'Oui. L’export enveloppe votre contenu dans un document HTML5 complet avec des balises head et body, prêt à ouvrir dans n’importe quel navigateur.',
      },
      {
        question: 'L’Aperçu Markdown exécute-t-il du JavaScript depuis mon entrée ?',
        answer:
          'Non. Les balises HTML brutes sont échappées et les protocoles de lien sont limités aux schémas web sûrs, relatifs, d’ancre et mailto.',
      },
      {
        question: 'Puis-je utiliser l’Aperçu Markdown hors ligne ?',
        answer:
          'L’éditeur et l’aperçu fonctionnent entièrement dans votre navigateur sans envoi, donc vos brouillons restent sur votre appareil pendant que vous travaillez.',
      },
      {
        question: 'L’Aperçu Markdown enregistre-t-il mon travail ?',
        answer:
          'L’outil ne stocke votre texte sur aucun serveur, donc copiez ou exportez tout ce qui est important avant de fermer l’onglet.',
      },
      {
        question: 'Comment ajouter une image en Markdown ?',
        answer:
          'Utilisez la syntaxe ![texte alternatif](url-de-l-image) et l’image se rendra dans l’aperçu quand l’URL est accessible.',
      },
      {
        question: 'Pourquoi mon bloc de code ne se rend-il pas ?',
        answer:
          'Assurez-vous que les clôtures d’ouverture et de fermeture utilisent trois backticks sur leurs propres lignes, avec une ligne vide avant la clôture d’ouverture.',
      },
      {
        question: 'Puis-je convertir du Markdown en HTML pour un e-mail ?',
        answer:
          'Oui. Copiez le fragment HTML compilé et collez-le dans un éditeur d’e-mail qui accepte le HTML, ou exportez d’abord le document complet.',
      },
      {
        question: 'Puis-je écrire des blocs de code avec une balise de langue ?',
        answer:
          'Oui. Ajoutez le nom de la langue après les backticks d’ouverture, par exemple ```js, et le bloc se rend comme du code formaté.',
      },
      {
        question: 'Puis-je coller du Markdown copié depuis un autre éditeur ?',
        answer:
          'Oui. Collez du Markdown depuis n’importe quel éditeur ou application de notes et l’aperçu se met à jour immédiatement.',
      },
      {
        question: 'Que deviennent les liens dans l’aperçu ?',
        answer:
          'Les liens se rendent comme des ancres cliquables dans l’aperçu, et seuls les protocoles sûrs comme https, les chemins relatifs, les ancres et mailto sont autorisés.',
      },
      {
        question: 'Puis-je imprimer l’aperçu rendu ?',
        answer:
          'Oui. Exportez le fichier HTML et ouvrez-le dans votre navigateur, puis utilisez la fonction d’impression du navigateur pour l’imprimer ou l’enregistrer en PDF.',
      },
    ],
  },
  'line-prefix-suffix': {
    slug: 'ajouter-prefixe-et-suffixe-aux-lignes',
    name: 'Ajouter des Numéros de Ligne et Préfixe/Suffixe',
    shortDescription:
      'Ajoutez des numéros de ligne, des préfixes personnalisés et des suffixes à chaque ligne pour des listes, des clauses SQL et du code.',
    keywords: [
      'ajouter un préfixe et un suffixe aux lignes',
      'ajouter des numéros de ligne au texte',
      'envelopper les lignes entre guillemets',
      'formateur de lignes en masse',
      'ajouter du texte avant chaque ligne',
      'ajouter du texte aux lignes',
      'générateur de numéros de ligne',
      'formateur de clause sql in',
      'ajouter une virgule à chaque ligne',
    ],
    seo: {
      title: 'Ajouter Préfixe et Suffixe aux Lignes | UtilityFlow',
      description:
        'Ajoutez des numéros de ligne, des préfixes et des suffixes personnalisés à chaque ligne de texte pour des listes, du SQL et du code — gratuit, sans inscription.',
      primaryKeyword: 'ajouter un préfixe et un suffixe aux lignes',
      secondaryKeywords: ['ajouter des numéros de ligne en ligne', 'outil de préfixe suffixe de ligne', 'envelopper les lignes entre guillemets', 'formateur de lignes en masse'],
      longTailKeywords: ['envelopper chaque ligne entre guillemets simples et virgule pour sql', 'ajouter un préfixe de liste numérotée aux lignes de texte', 'ajouter du texte avant et après chaque ligne en masse', 'ajouter des numéros de ligne à partir de zéro'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ajoutez des numéros de ligne séquentiels, des caractères de puce ou des guillemets ouvrants, et ajoutez des virgules, des points-virgules ou des balises de fermeture à chaque ligne d’une liste en quelques secondes.',
    instructions: [
      {
        title: 'Définissez votre préfixe et votre suffixe',
        description:
          'Saisissez n’importe quel texte à ajouter avant ou après chaque ligne, comme un guillemet ouvrant, une puce ou une balise de fermeture.',
      },
      {
        title: 'Activez les numéros de ligne si nécessaire',
        description:
          'Activez Ajouter des numéros de ligne et définissez le numéro de départ et le séparateur, par exemple « 1. » ou « 01 : ».',
      },
      {
        title: 'Collez vos lignes',
        description:
          'Saisissez un élément par ligne dans Lignes d’entrée, ou cliquez sur Charger un exemple pour voir la citation de style SQL en action.',
      },
      {
        title: 'Choisissez comment les lignes vides sont gérées',
        description:
          'Gardez Ignorer les lignes vides coché pour que les lignes d’espacement vides soient préservées sans numérotation ni caractères supplémentaires.',
      },
      {
        title: 'Examinez la sortie formatée',
        description:
          'Vérifiez que les guillemets, les virgules et les nombres s’alignent sur chaque ligne avant d’utiliser le résultat.',
      },
      {
        title: 'Copiez les lignes formatées',
        description:
          'Copiez tout le bloc dans votre presse-papiers et collez-le dans votre requête SQL, votre fichier de code ou votre document.',
      },
    ],
    examples: [
      {
        title: 'Formater des valeurs pour une clause SQL IN',
        input: 'Préfixe : \'  |  Suffixe : \',  |  Lignes : tokyo / londres',
        output: '\'tokyo\',\n\'londres\',',
        explanation:
          'Enveloppe instantanément des éléments de texte brut entre guillemets simples et virgules de fin.',
      },
      {
        title: 'Étapes numérotées avec zéros de remplissage',
        input: 'Numéros de ligne : Activé · Remplissage de zéros : Activé · Séparateur : « : »',
        output: '01 : Étape un\n02 : Étape deux',
        explanation:
          'Crée des listes numérotées alignées pour des plans ou de la documentation.',
      },
    ],
    benefits: [
      'Combine préfixe, suffixe et numérotation séquentielle des lignes dans un seul outil',
      'Le remplissage de zéros en option garde les listes multi-chiffres visuellement alignées',
      'Ignore automatiquement les lignes vides quand c’est activé pour que les compteurs restent précis',
      'Aucun envoi vers un serveur pour les identifiants sensibles ou les valeurs de requête',
    ],
    useCases: [
      'Envelopper des identifiants de tableur entre guillemets et virgules pour des requêtes SQL IN (...)',
      'Convertir des éléments de texte brut en puces Markdown ou en balises HTML <li>',
      'Ajouter des numéros d’étapes séquentiels aux listes de vérification et aux plans',
      'Construire des tableaux de chaînes pour JavaScript, Python ou JSON',
    ],
    faqs: [
      {
        question: 'Puis-je ajouter uniquement des numéros de ligne sans préfixe ni suffixe ?',
        answer:
          'Oui. Effacez les champs Préfixe de ligne et Suffixe de ligne, activez « Ajouter des numéros de ligne » et définissez votre numéro de départ et votre séparateur préférés.',
      },
      {
        question: 'Comment ignorer la numérotation des lignes d’espacement vides ?',
        answer:
          'Gardez « Ignorer les lignes vides » coché pour que les lignes vides soient préservées sans incrémenter le compteur de lignes ni recevoir de préfixe/suffixe.',
      },
      {
        question: 'Puis-je commencer la numérotation à 0 ou à n’importe quel nombre personnalisé ?',
        answer:
          'Oui. Saisissez n’importe quel entier dans le champ Numéro de départ pour commencer à compter à partir de 0, 1, 100 ou d’un autre décalage.',
      },
      {
        question: 'Qu’est-ce que l’outil Ajouter des Numéros de Ligne et Préfixe/Suffixe ?',
        answer:
          'Il ajoute un préfixe personnalisé, un suffixe ou un numéro de ligne séquentiel à chaque ligne d’une liste, pour que vous puissiez formater du texte en masse au lieu de modifier chaque ligne à la main.',
      },
      {
        question: 'L’outil de préfixe et de suffixe de ligne est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit sans inscription, et il fonctionne dans votre navigateur pour que votre texte ne quitte jamais votre appareil.',
      },
      {
        question: 'Puis-je ajouter un préfixe sans suffixe ?',
        answer:
          'Oui. Remplissez uniquement le champ Préfixe de ligne et laissez le suffixe vide, ou inversement, et seule la partie saisie sera appliquée.',
      },
      {
        question: 'Comment envelopper des lignes entre guillemets pour une clause SQL IN ?',
        answer:
          'Saisissez un guillemet simple comme préfixe et « \', » comme suffixe, et chaque ligne devient une valeur entre guillemets suivie d’une virgule.',
      },
      {
        question: 'Puis-je ajouter une virgule à la fin de chaque ligne ?',
        answer:
          'Oui. Mettez une virgule dans le champ Suffixe de ligne et chaque ligne non vide se terminera par une virgule.',
      },
      {
        question: 'Comment fonctionne le remplissage de zéros pour les numéros de ligne ?',
        answer:
          'Quand le remplissage de zéros est activé, les nombres sont complétés à la même largeur, donc une liste de 100 lignes affiche 001, 002, etc. au lieu de 1, 2 et 100.',
      },
      {
        question: 'Quel séparateur dois-je utiliser pour les lignes numérotées ?',
        answer:
          'Les choix courants sont « . » pour les listes numérotées simples, « : » pour les étapes étiquetées et « ) » pour la numérotation de type plan.',
      },
      {
        question: 'Puis-je numéroter des lignes à partir d’un nombre autre que 1 ?',
        answer:
          'Oui. Saisissez n’importe quel entier dans le champ Numéro de départ pour commencer à 0, 100 ou tout autre décalage dont vous avez besoin.',
      },
      {
        question: 'Que deviennent les lignes vides de ma liste ?',
        answer:
          'Avec Ignorer les lignes vides activé, les lignes vides sont conservées telles quelles sans nombres ni affixes ; avec cette option désactivée, elles sont traitées comme n’importe quelle autre ligne.',
      },
      {
        question: 'Puis-je utiliser l’outil pour créer une liste à puces Markdown ?',
        answer:
          'Oui. Saisissez « - » comme préfixe et chaque ligne devient un point de puce Markdown.',
      },
      {
        question: 'Puis-je transformer des lignes en éléments de liste HTML ?',
        answer:
          'Oui. Utilisez « <li> » comme préfixe et « </li> » comme suffixe pour envelopper chaque ligne dans des balises d’élément de liste.',
      },
      {
        question: 'L’outil envoie-t-il mon texte vers un serveur ?',
        answer:
          'Non. Tout le formatage se fait localement dans votre navigateur, ce qui garde privés les identifiants sensibles, les valeurs de requête et le code.',
      },
      {
        question: 'Puis-je formater des lignes pour un tableau JavaScript ou Python ?',
        answer:
          'Oui. Enveloppez les lignes entre guillemets avec une virgule de fin et collez le résultat directement dans un littéral de tableau.',
      },
      {
        question: 'Y a-t-il une limite sur le nombre de lignes que je peux formater ?',
        answer:
          'L’outil gère confortablement les longues listes, même si des collages extrêmement volumineux peuvent prendre un moment à traiter dans le navigateur.',
      },
      {
        question: 'Pourquoi certaines lignes ne sont-elles pas numérotées ?',
        answer:
          'Vérifiez si Ignorer les lignes vides est activé, car les lignes vides sont ignorées par conception et ne recevront pas de numéro.',
      },
      {
        question: 'Puis-je ajouter des préfixes différents à des lignes différentes ?',
        answer:
          'Non. L’outil applique le même préfixe et le même suffixe à chaque ligne ; pour une mise en forme mixte, passez chaque groupe dans l’outil séparément.',
      },
      {
        question: 'Comment supprimer un préfixe ajouté par erreur ?',
        answer:
          'Collez le texte formaté dans l’outil Rechercher et Remplacer ou relancez la liste d’origine avec les bons réglages, car cet outil ne fait qu’ajouter du texte et ne le supprime pas.',
      },
    ],
  },
};
