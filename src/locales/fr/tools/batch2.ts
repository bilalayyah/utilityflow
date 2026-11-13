import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const FR_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'json-formatter': {
    slug: 'formateur-json',
    name: 'Formateur et Validateur JSON',
    shortDescription:
      'Formatez, minifiez, triez les clés et validez la syntaxe JSON avec un repérage précis des erreurs par ligne et colonne.',
    keywords: [
      'formateur json',
      'validateur json',
      'embellisseur json',
      'minifieur json',
      'imprimer json proprement',
      'imprimante json',
      'formater json en ligne',
      'vérificateur de syntaxe json',
      'json lint',
    ],
    seo: {
      title: 'Formateur JSON et Validateur : imprimer JSON | UtilityFlow',
      description:
        'Formatez, validez, minifiez et triez les clés JSON instantanément dans votre navigateur, avec des erreurs de syntaxe par ligne et colonne pour déboguer vite.',
      primaryKeyword: 'formateur json',
      secondaryKeywords: ['validateur json', 'embellisseur json', 'minifieur json', 'imprimer json proprement'],
      longTailKeywords: ['valider et imprimer json en ligne gratuitement', 'trier les clés json par ordre alphabétique dans le navigateur', 'minifier une charge utile json sans envoi vers un serveur', 'formater du json imbriqué avec indentation en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Validez les charges utiles JSON mal formées avec un retour par ligne et colonne, formatez les structures imbriquées avec une indentation de 2 espaces, 4 espaces ou tabulation, triez les clés par ordre alphabétique ou minifiez pour le transport en production.',
    instructions: [
      {
        title: 'Collez du JSON brut',
        description:
          'Insérez n’importe quel objet ou tableau JSON dans le champ Entrée JSON brut, ou cliquez sur Charger un exemple pour inspecter une charge utile d’exemple.',
      },
      {
        title: 'Sélectionnez le mode de formatage',
        description:
          'Basculez entre 2 espaces, 4 espaces, Tabulation ou Minifier, et activez éventuellement Trier les clés de A à Z.',
      },
      {
        title: 'Corrigez les erreurs de syntaxe grâce aux indications de ligne et de colonne',
        description:
          'Si le validateur signale une erreur, lisez la ligne et la colonne exactes affichées, corrigez la virgule, le guillemet ou le crochet fautif dans votre entrée, et la bannière de statut se met à jour instantanément.',
      },
      {
        title: 'Examinez la sortie formatée et les statistiques',
        description:
          'Confirmez la bannière de statut JSON valide indiquant le nombre total de clés, la profondeur d’imbrication et le nombre d’octets, puis parcourez la sortie formatée pour vérifier que les structures imbriquées semblent correctes.',
      },
      {
        title: 'Copiez ou téléchargez le résultat',
        description:
          'Cliquez sur Copier pour placer le JSON formaté dans votre presse-papiers, ou sur Télécharger pour l’enregistrer en fichier .json pour votre projet.',
      },
      {
        title: 'Astuce : comparez les tailles et nettoyez les diffs',
        description:
          'Collez à nouveau la même charge utile après minification pour comparer les tailles en octets, ou activez Trier les clés de A à Z avant un diff git pour que seules les vraies modifications apparaissent.',
      },
    ],
    examples: [
      {
        title: 'Formatage d’une réponse d’API minifiée',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation:
          'Développe les charges utiles d’API compactes sur une seule ligne en JSON indenté et lisible.',
      },
      {
        title: 'Tri des clés avant un diff git',
        input: '{"zebra": 1, "apple": 2, "mango": 3}',
        output: '{\n  "apple": 2,\n  "mango": 3,\n  "zebra": 1\n}',
        explanation:
          'Trie les clés par ordre alphabétique pour que les diffs git ne montrent que les vraies modifications.',
      },
    ],
    benefits: [
      'Signale les positions d’erreur de syntaxe avec le contexte de ligne et de colonne',
      'Trie récursivement les clés des objets imbriqués par ordre alphabétique pour des diffs propres',
      'Calcule le nombre total de clés, la profondeur maximale d’imbrication et la taille en octets de la sortie',
      'Garde les réponses d’API privées et les jetons strictement dans la mémoire du navigateur',
    ],
    useCases: [
      'Déboguer des charges utiles d’API REST et GraphQL pendant le développement',
      'Normaliser des fichiers package.json ou de configuration avant un diff git',
      'Minifier des fixtures JSON et des jeux de données statiques',
      'Valider des corps de webhook avant d’écrire des analyseurs',
    ],
    faqs: [
      {
        question: 'Le tri des clés modifie-t-il l’ordre des éléments de tableau ?',
        answer:
          'Non. Trier les clés de A à Z ne réordonne que les clés à l’intérieur des objets JSON tout en préservant la séquence exacte des éléments de tableau.',
      },
      {
        question: 'Pourquoi le JSON avec une virgule de fin affiche-t-il une erreur de syntaxe ?',
        answer:
          'Le JSON strict RFC 8259 n’autorise ni les virgules de fin ni les clés entre guillemets simples. Le validateur signale la ligne et la colonne exactes pour que vous puissiez les corriger avant de déployer.',
      },
      {
        question: 'Ma charge utile JSON est-elle journalisée quelque part ?',
        answer:
          'Jamais. L’analyse et le formatage s’exécutent entièrement via JavaScript dans l’onglet de votre navigateur.',
      },
      {
        question: 'Le Formateur JSON est-il gratuit ?',
        answer:
          'Oui, le Formateur JSON est entièrement gratuit sans inscription, sans limites d’utilisation et sans filigrane sur la sortie.',
      },
      {
        question: 'Quelle est la différence entre formater et minifier du JSON ?',
        answer:
          'Le formatage ajoute de l’indentation et des sauts de ligne pour que le JSON soit facile à lire, tandis que la minification supprime tous les espaces inutiles pour que la charge utile soit aussi petite que possible pour le transport.',
      },
      {
        question: 'Le Formateur JSON peut-il gérer de gros fichiers JSON ?',
        answer:
          'Oui. Comme tout le traitement se fait localement dans votre navigateur, il n’y a pas de limite d’envoi vers un serveur, même si les très grosses charges utiles dépendent de la mémoire de votre navigateur.',
      },
      {
        question: 'Quelles options d’indentation le Formateur JSON offre-t-il ?',
        answer:
          'Vous pouvez formater avec 2 espaces, 4 espaces ou un caractère de tabulation, pour que la sortie corresponde au style de votre base de code.',
      },
      {
        question: 'Le Formateur JSON prend-il en charge les tableaux JSON au niveau supérieur ?',
        answer:
          'Oui. Un tableau au niveau supérieur est du JSON valide, donc vous pouvez coller et formater des tableaux comme des objets.',
      },
      {
        question: 'Comment corriger une erreur « Unexpected token » dans mon JSON ?',
        answer:
          'Regardez la ligne et la colonne signalées par le validateur. Les causes les plus courantes sont une virgule manquante, un crochet non fermé ou un guillemet simple là où un guillemet double est requis.',
      },
      {
        question: 'Puis-je formater du JSON avec des commentaires ou des virgules de fin ?',
        answer:
          'Non. Les commentaires et les virgules de fin ne font pas partie du JSON strict, donc supprimez-les d’abord et le formateur acceptera l’entrée nettoyée.',
      },
      {
        question: 'Que signifie la statistique de profondeur d’imbrication dans le Formateur JSON ?',
        answer:
          'La profondeur d’imbrication compte le nombre de niveaux de profondeur auxquels se trouve la valeur la plus imbriquée dans les objets et les tableaux, ce qui aide à évaluer la complexité d’une charge utile.',
      },
      {
        question: 'Le Formateur JSON préserve-t-il l’ordre des clés d’objet ?',
        answer:
          'Oui, sauf si vous activez Trier les clés de A à Z. Par défaut, le formateur conserve votre ordre de clés d’origine exactement tel que collé.',
      },
      {
        question: 'Puis-je aussi trier les clés dans des objets JSON imbriqués ?',
        answer:
          'Oui. Le tri s’applique récursivement, donc les clés à l’intérieur de chaque objet imbriqué sont réordonnées par ordre alphabétique tandis que l’ordre des tableaux reste intact.',
      },
      {
        question: 'Quel format de fichier le téléchargement du Formateur JSON produit-il ?',
        answer:
          'Le téléchargement enregistre votre résultat formaté ou minifié sous forme de fichier texte .json standard que vous pouvez ouvrir dans n’importe quel éditeur.',
      },
      {
        question: 'Le Formateur JSON fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Une fois la page chargée, le formatage et la validation s’exécutent entièrement dans votre navigateur sans aucune requête réseau.',
      },
      {
        question: 'Pourquoi mon objet JavaScript valide est-il rejeté comme JSON ?',
        answer:
          'Le JSON est plus strict que JavaScript : les clés doivent utiliser des guillemets doubles, les valeurs ne peuvent pas être undefined ou des fonctions, et les virgules de fin ne sont pas autorisées.',
      },
      {
        question: 'Le Formateur JSON peut-il valider du JSON provenant d’une réponse d’API ?',
        answer:
          'Oui. Collez le corps brut de la réponse dans l’entrée et le validateur confirmera s’il s’agit de JSON valide et repérera toute erreur de syntaxe.',
      },
      {
        question: 'Quelle est la taille maximale de JSON que je peux coller dans le Formateur JSON ?',
        answer:
          'Il n’y a pas de limite de taille fixe parce que rien n’est envoyé vers un serveur. Les limites pratiques viennent uniquement de la mémoire de votre navigateur et de la taille de zone de texte qu’il peut gérer sans effort.',
      },
      {
        question: 'Minifier du JSON change-t-il sa signification ?',
        answer:
          'Non. La minification ne supprime que les espaces, donc les données, les clés et les valeurs restent exactement les mêmes tandis que le fichier devient plus petit.',
      },
      {
        question: 'Comment copier du JSON formaté sans espaces supplémentaires ?',
        answer:
          'Passez d’abord en mode Minifier, puis cliquez sur Copier. Le presse-papiers contiendra le JSON compact sur une seule ligne sans espaces ni sauts de ligne supplémentaires.',
      },
    ],
  },
  'base64-encoder-decoder': {
    slug: 'encodeur-decodeur-base64',
    name: 'Encodeur / Décodeur Base64',
    shortDescription:
      'Encodez du texte en Base64 standard ou sûr pour les URL et décodez des chaînes Base64 UTF-8 en toute sécurité dans la mémoire du navigateur.',
    keywords: [
      'encodeur base64',
      'décodeur base64',
      'base64 utf-8',
      'base64 sûr pour les url',
      'encoder en base64 en ligne',
      'décoder base64 en ligne',
      'encoder du texte en base64',
      'décoder base64 en texte',
      'convertisseur base64',
    ],
    seo: {
      title: 'Encodeur Base64 et Décodeur : UTF-8 et URL | UtilityFlow',
      description:
        'Encodez du texte UTF-8 en Base64 ou décodez du Base64 en texte lisible, avec des options sûres pour les URL, localement sans envoi, dans votre navigateur.',
      primaryKeyword: 'encodeur décodeur base64',
      secondaryKeywords: ['décoder base64 en ligne', 'encoder base64 utf-8', 'base64 sûr pour les url', 'base64 en texte'],
      longTailKeywords: ['encoder des émojis utf-8 en base64 en ligne', 'décoder du base64 sûr pour les url sans remplissage', 'convertisseur base64 côté client', 'décoder une chaîne base64 avec des émojis en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convertissez des chaînes UTF-8 — y compris les caractères accentués et les émojis — en Base64 standard ou Base64 sûr pour les URL selon la RFC 4648, ou décodez des chaînes Base64 en texte brut avec une validation instantanée.',
    instructions: [
      {
        title: 'Choisissez Encoder ou Décoder',
        description:
          'Sélectionnez Encoder en Base64 ou Décoder le Base64 en haut de l’espace de travail.',
      },
      {
        title: 'Collez votre texte ou votre chaîne Base64',
        description:
          'Saisissez le texte UTF-8 que vous voulez encoder, ou la chaîne Base64 que vous voulez décoder, dans la zone d’entrée.',
      },
      {
        title: 'Configurez les options Base64',
        description:
          'En mode Encoder, activez éventuellement la sortie sûre pour les URL (- et _) ou omettez les caractères de remplissage = de fin.',
      },
      {
        title: 'Vérifiez la sortie et la validation',
        description:
          'Examinez instantanément le résultat converti. Si un décodage échoue, vérifiez le remplissage manquant ou les caractères hors de l’alphabet Base64.',
      },
      {
        title: 'Copiez ou échangez',
        description:
          'Copiez le résultat dans votre presse-papiers ou cliquez sur Échanger pour inverser la direction en utilisant votre sortie actuelle.',
      },
      {
        title: 'Astuce : gérer les jetons sûrs pour les URL',
        description:
          'Quand vous collez des jetons depuis une URL, utilisez le mode sûr pour les URL pour que - et _ soient gérés correctement. Rappelez-vous que le Base64 est un encodage, pas un chiffrement, donc ne le traitez jamais comme un stockage sécurisé.',
      },
    ],
    examples: [
      {
        title: 'Encodage d’une chaîne UTF-8',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUh1YjogVVRGLTggeKky',
        explanation:
          'Utilise la sérialisation d’octets UTF-8 de TextEncoder avant la conversion Base64.',
      },
      {
        title: 'Décodage d’une chaîne Base64',
        input: 'SGVsbG8gTW9uZGU=',
        output: 'Hello Monde',
        explanation:
          'Décode une chaîne Base64 standard en texte UTF-8 lisible.',
      },
    ],
    benefits: [
      'L’encodage/décodage sûr UTF-8 évite les plantages Unicode de btoa/atob hérités',
      'Prend en charge l’alphabet sûr pour les URL de la RFC 4648 (- et _) et le décodage sans remplissage',
      'L’Échange en un clic déplace la sortie dans l’entrée et inverse le mode',
      'Exécution locale sûre pour les clés d’API et les en-têtes Basic Auth',
    ],
    useCases: [
      'Encoder localement des identifiants d’authentification HTTP Basic',
      'Inspecter des charges utiles JSON encodées en Base64 ou des data URI',
      'Préparer des jetons Base64 sûrs pour les URL pour des paramètres de requête',
      'Décoder des extraits de corps d’e-mail ou de webhook en Base64',
    ],
    faqs: [
      {
        question: 'Pourquoi le btoa() standard échoue-t-il sur les caractères Unicode ?',
        answer:
          'Le btoa() natif n’accepte que les points de code Latin-1 sur un seul octet. Cet outil convertit d’abord le texte en octets UTF-8 via TextEncoder pour que toutes les écritures internationales et les émojis s’encodent proprement.',
      },
      {
        question: 'Le décodeur peut-il gérer du Base64 sûr pour les URL sans remplissage « = » ?',
        answer:
          'Oui. Le décodeur normalise automatiquement « - » et « _ » en « + » et « / » et restaure le remplissage « = » manquant avant de décoder.',
      },
      {
        question: 'Le Base64 est-il un chiffrement ?',
        answer:
          'Non. Le Base64 est un format d’encodage pour représenter des données binaires ou textuelles en ASCII, pas un chiffrement cryptographique.',
      },
      {
        question: 'L’Encodeur Base64 est-il gratuit ?',
        answer:
          'Oui, l’Encodeur Base64 est entièrement gratuit sans inscription et sans limite sur le nombre de chaînes que vous convertissez.',
      },
      {
        question: 'Quels caractères sont autorisés dans une chaîne Base64 ?',
        answer:
          'Le Base64 standard utilise A–Z, a–z, 0–9, plus + et /, avec = utilisé pour le remplissage. La variante sûre pour les URL remplace + et / par - et _.',
      },
      {
        question: 'Pourquoi ma sortie Base64 est-elle plus longue que mon entrée ?',
        answer:
          'Le Base64 représente chaque groupe de 3 octets d’entrée par 4 caractères ASCII, donc la sortie encodée est environ un tiers plus longue que le texte d’origine.',
      },
      {
        question: 'Puis-je encoder des émojis et du texte non anglais en Base64 ?',
        answer:
          'Oui. L’outil encode d’abord le texte en octets UTF-8, donc les émojis, les lettres accentuées et les écritures non latines s’encodent et se décodent correctement.',
      },
      {
        question: 'Qu’est-ce que le Base64 sûr pour les URL et quand l’utiliser ?',
        answer:
          'Le Base64 sûr pour les URL remplace + et / par - et _ pour que la chaîne encodée puisse se trouver dans une URL ou un nom de fichier sans être encodée en pourcentage. Utilisez-le pour les jetons passés dans des paramètres de requête.',
      },
      {
        question: 'Comment décoder une chaîne Base64 sans remplissage ?',
        answer:
          'Collez-la directement. Le décodeur détecte le remplissage = manquant et le restaure automatiquement avant de décoder.',
      },
      {
        question: 'L’Encodeur Base64 peut-il gérer des fichiers binaires ?',
        answer:
          'Non, cet outil n’encode que du texte. Pour encoder un fichier, il faudrait d’abord lire ses octets, ce que cet outil textuel ne fait pas.',
      },
      {
        question: 'Quelle est la différence entre Base64 et Base64URL ?',
        answer:
          'Base64URL est la variante sûre pour les URL du Base64 : elle échange + contre - et / contre _, et supprime généralement le remplissage =, donc le résultat est sûr dans les URL et les noms de fichiers.',
      },
      {
        question: 'Pourquoi mon texte Base64 décodé affiche-t-il des caractères étranges ?',
        answer:
          'Le texte d’origine a probablement été encodé à partir d’un encodage d’octets différent de l’UTF-8, ou la chaîne Base64 est corrompue. Essayez de ré-encoder la source en UTF-8 et comparez.',
      },
      {
        question: 'Puis-je encoder un mot de passe ou un secret avec Base64 ?',
        answer:
          'Vous pouvez, mais vous ne devriez pas compter dessus pour la sécurité. Le Base64 est trivialement réversible, donc quiconque voit la chaîne encodée peut la décoder instantanément.',
      },
      {
        question: 'Comment encoder du texte pour un en-tête Basic Auth ?',
        answer:
          'Combinez le nom d’utilisateur et le mot de passe sous la forme nom:motdepasse, encodez cette chaîne en Base64, et utilisez-la comme Authorization: Basic <valeur encodée> dans votre requête.',
      },
      {
        question: 'L’Encodeur Base64 fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Une fois la page chargée, l’encodage et le décodage s’exécutent entièrement dans votre navigateur sans aucune requête réseau.',
      },
      {
        question: 'Que se passe-t-il si je colle une chaîne Base64 invalide dans le décodeur ?',
        answer:
          'Le décodeur signale une erreur au lieu de deviner. Vérifiez les caractères hors de l’alphabet Base64, le remplissage manquant ou les espaces et sauts de ligne parasites.',
      },
      {
        question: 'Puis-je décoder un data URI Base64 avec cet outil ?',
        answer:
          'Oui, si vous ne collez que la partie Base64 après la virgule. Supprimez d’abord le préfixe data:...;base64, car il ne fait pas partie des données encodées.',
      },
      {
        question: 'Pourquoi certaines chaînes Base64 se terminent-elles par des signes « = » ?',
        answer:
          'Les signes = sont du remplissage ajouté quand la longueur d’entrée n’est pas un multiple de trois octets. Ils indiquent au décodeur exactement combien d’octets le dernier groupe représente.',
      },
      {
        question: 'Mon texte est-il envoyé vers un serveur quand je l’encode ?',
        answer:
          'Non. L’encodage et le décodage s’exécutent localement dans votre navigateur, donc les chaînes sensibles comme les clés d’API ne quittent jamais votre appareil.',
      },
      {
        question: 'Comment reconvertir du Base64 en texte d’origine ?',
        answer:
          'Basculez en mode Décoder, collez la chaîne Base64, et l’outil renvoie le texte UTF-8 d’origine, que vous pouvez ensuite copier.',
      },
    ],
  },
  'url-encoder-decoder': {
    slug: 'encodeur-decodeur-url',
    name: 'Encodeur / Décodeur d’URL',
    shortDescription:
      'Encodez en pourcentage des valeurs de requête ou des URL complètes et inspectez l’hôte, le chemin et les paramètres de requête analysés.',
    keywords: [
      'encodeur url',
      'décodeur url',
      'encodage en pourcentage',
      'analyseur d’url',
      'encoder une url en ligne',
      'décoder une url en ligne',
      'outil d’encodage d’url',
      'encodeuricomponent',
      'encodeur de chaîne de requête',
    ],
    seo: {
      title: 'Encodeur URL et Décodeur : encodage en % | UtilityFlow',
      description:
        'Encodez ou décodez des URL avec les modes encodeURIComponent et encodeURI tout en inspectant protocole, hôte, chemin et paramètres de requête, en ligne.',
      primaryKeyword: 'encodeur décodeur url',
      secondaryKeywords: ['encodage en pourcentage en ligne', 'outil de décodage d’url', 'analyseur de chaîne de requête', 'encodeuricomponent en ligne'],
      longTailKeywords: ['différence entre encodeuri et encodeuricomponent', 'décoder le tableau des paramètres de requête d’une url en ligne', 'encoder en pourcentage les caractères spéciaux des url', 'encoder une valeur de requête d’url sans casser l’esperluette'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Encodez en toute sécurité des valeurs de paramètres de requête ou des URL complètes, décodez des chaînes encodées en pourcentage (%20, %3A, +), et inspectez une répartition en direct de chaque paramètre de requête dans un tableau.',
    instructions: [
      {
        title: 'Choisissez Encoder ou Décoder',
        description:
          'Basculez entre Encoder et Décoder, puis sélectionnez encodeURIComponent (pour une seule valeur de paramètre) ou encodeURI (pour préserver les délimiteurs ://?&).',
      },
      {
        title: 'Collez une URL ou une chaîne de paramètre',
        description:
          'Saisissez n’importe quelle URL ou extrait encodé en pourcentage dans le champ Chaîne d’entrée ou URL.',
      },
      {
        title: 'Examinez le résultat encodé ou décodé',
        description:
          'Vérifiez la zone de sortie pour confirmer que les caractères spéciaux comme les espaces, & et = ont été encodés ou décodés exactement comme prévu.',
      },
      {
        title: 'Inspectez les paramètres analysés',
        description:
          'Quand une URL complète valide est détectée, examinez le tableau de Répartition de l’URL analysée ci-dessous pour les paires clé-valeur de requête décodées.',
      },
      {
        title: 'Copiez le résultat',
        description:
          'Cliquez sur Copier pour utiliser l’URL encodée dans votre code, votre lien ou votre requête d’API sans la retaper.',
      },
      {
        title: 'Dépannage : séquences % mal formées',
        description:
          'Si vous voyez une erreur sur une séquence % mal formée, cherchez un % isolé non suivi de deux chiffres hexadécimaux, comme %2, et corrigez-le avant de décoder à nouveau.',
      },
    ],
    examples: [
      {
        title: 'Encodage d’une valeur de requête',
        input: 'formateur json & validateur',
        output: 'formateur%20json%20%26%20validateur',
        explanation:
          'Utiliser encodeURIComponent échappe « & » pour qu’il ne divise pas votre chaîne de requête.',
      },
      {
        title: 'Décodage d’une URL encodée',
        input: 'https://exemple.com/recherche?q=caf%C3%A9+noir',
        output: 'https://exemple.com/recherche?q=café noir',
        explanation:
          'Décode les séquences en pourcentage et le + des chaînes de requête encodées par formulaire.',
      },
    ],
    benefits: [
      'Clarifie le comportement d’encodeURIComponent par rapport à encodeURI côte à côte',
      'Analyse automatiquement les URL valides en lignes de protocole, hôte, chemin, hash et requête',
      'Gère proprement l’encodage d’espace « + » lors du décodage des chaînes de requête de formulaire',
      'Signale clairement les séquences % mal formées',
    ],
    useCases: [
      'Déboguer des URI de redirection OAuth et des paramètres de rappel',
      'Échapper des requêtes de recherche ou des chaînes JSON passées en paramètres de requête',
      'Auditer des liens de campagne UTM avec plusieurs paramètres de suivi',
      'Décoder des URL de journaux d’accès serveur pour un examen humain',
    ],
    faqs: [
      {
        question: 'Quand utiliser encodeURIComponent plutôt qu’encodeURI ?',
        answer:
          'Utilisez encodeURIComponent quand vous encodez une seule valeur de paramètre de requête (pour que des caractères comme & et = soient échappés). Utilisez encodeURI quand vous encodez une URL entière et que vous voulez garder https://, /, ? et & intacts.',
      },
      {
        question: 'Pourquoi une URL décodée a-t-elle transformé « + » en espace ?',
        answer:
          'Dans les chaînes de requête application/x-www-form-urlencoded, « + » représente un espace. Le décodage de composant normalise automatiquement « + » en espaces.',
      },
      {
        question: 'L’analyseur d’URL vérifie-t-il si un domaine est joignable ?',
        answer:
          'Non. L’analyse utilise l’API URL du navigateur localement sans envoyer aucune requête réseau à l’hôte cible.',
      },
      {
        question: 'L’Encodeur d’URL est-il gratuit ?',
        answer:
          'Oui, l’Encodeur d’URL est entièrement gratuit sans inscription et sans limite sur le nombre d’URL que vous encodez ou décodez.',
      },
      {
        question: 'Quels caractères l’encodage d’URL modifie-t-il ?',
        answer:
          'L’encodage d’URL convertit les caractères réservés et dangereux, comme les espaces, &, =, ?, # et les lettres non ASCII, en % suivi de deux chiffres hexadécimaux.',
      },
      {
        question: 'Quelle est la différence entre %20 et + pour les espaces dans une URL ?',
        answer:
          'Les deux peuvent représenter un espace dans une chaîne de requête, mais %20 est l’encodage en pourcentage standard tandis que + ne signifie espace que dans les chaînes de requête encodées par formulaire, pas dans les chemins.',
      },
      {
        question: 'L’Encodeur d’URL peut-il encoder une URL complète avec https:// intact ?',
        answer:
          'Oui. Choisissez le mode encodeURI et le schéma, les barres obliques et les délimiteurs restent intacts tandis que seuls les caractères dangereux sont encodés.',
      },
      {
        question: 'Comment encoder une esperluette dans une valeur de requête ?',
        answer:
          'Utilisez le mode encodeURIComponent sur la valeur seule. Il transforme & en %26 pour que l’esperluette soit traitée comme une donnée au lieu de diviser votre chaîne de requête.',
      },
      {
        question: 'Pourquoi mon URL décodée contient-elle encore des signes % ?',
        answer:
          'Un % suivi de deux chiffres hexadécimaux se décode une fois, donc une valeur doublement encodée comme %2520 devient %20 après un décodage. Lancez à nouveau le décodage si vous avez besoin de la forme entièrement décodée.',
      },
      {
        question: 'Puis-je décoder une URL avec plusieurs paramètres de requête ?',
        answer:
          'Oui. Le décodeur gère toute la chaîne de requête, et le tableau de répartition analysée liste chaque paire clé-valeur séparément pour une inspection facile.',
      },
      {
        question: 'L’Encodeur d’URL gère-t-il les caractères Unicode ?',
        answer:
          'Oui. Les caractères non ASCII sont d’abord convertis en octets UTF-8 puis encodés en pourcentage, donc les lettres accentuées et les autres écritures s’encodent correctement.',
      },
      {
        question: 'Qu’est-ce que l’encodage en pourcentage dans une URL ?',
        answer:
          'L’encodage en pourcentage remplace un caractère par un signe % suivi de sa valeur d’octet hexadécimale à deux chiffres, ce qui garde les URL valides quand elles contiennent des espaces ou des symboles spéciaux.',
      },
      {
        question: 'Comment encoder une URL pour l’utiliser dans un e-mail ou un document ?',
        answer:
          'Collez l’URL, choisissez le mode encodeURI et copiez le résultat. Le lien encodé reste cliquable et ne se cassera pas lors des retours à la ligne dans du texte brut.',
      },
      {
        question: 'Le Décodeur d’URL valide-t-il l’URL ?',
        answer:
          'Il vérifie que l’entrée est une URL bien formée et que chaque séquence % est valide, mais il ne vérifie pas si le domaine existe ou si la page se charge.',
      },
      {
        question: 'Puis-je encoder les espaces en %20 au lieu de + ?',
        answer:
          'Oui. L’encodeur utilise toujours %20 pour les espaces. La forme + n’apparaît que lors du décodage d’une entrée encodée par formulaire, où + signifie déjà un espace.',
      },
      {
        question: 'Que se passe-t-il si j’encode une URL déjà encodée ?',
        answer:
          'Les signes % eux-mêmes sont encodés en %25, produisant un double encodage comme %2520. Décodez une fois pour revenir à la forme à encodage simple.',
      },
      {
        question: 'Mon URL est-elle envoyée vers un serveur quand je l’encode ?',
        answer:
          'Non. L’encodage, le décodage et l’analyse s’exécutent localement dans votre navigateur, donc les liens privés et les jetons ne quittent jamais votre appareil.',
      },
      {
        question: 'Comment encoder un fragment ou un hash d’URL ?',
        answer:
          'Encodez uniquement la valeur du fragment avec encodeURIComponent, puis ajoutez-la après le # vous-même, pour que le délimiteur de hash ne soit pas encodé.',
      },
      {
        question: 'Pourquoi certaines URL encodées semblent-elles beaucoup plus longues ?',
        answer:
          'Chaque caractère spécial ou non ASCII devient trois caractères (% plus deux chiffres hexadécimaux), donc les URL avec beaucoup d’espaces ou de caractères Unicode grandissent sensiblement.',
      },
      {
        question: 'L’Encodeur d’URL peut-il gérer de très longues URL ?',
        answer:
          'Oui. Le traitement s’exécute localement sans limite d’envoi vers un serveur, donc les longues URL s’encodent et se décodent dans votre navigateur tant que votre navigateur peut contenir le texte.',
      },
    ],
  },
  'uuid-generator': {
    slug: 'generateur-uuid',
    name: 'Générateur d’UUID (v4 et v7)',
    shortDescription:
      'Générez des identifiants UUID v4 cryptographiquement aléatoires et UUID v7 ordonnés par temps selon la RFC 9562, par lots.',
    keywords: [
      'générateur uuid',
      'générateur guid',
      'uuid v4',
      'générateur uuid v7',
      'générateur uuid v4 en ligne',
      'générer uuid en ligne',
      'générateur uuid aléatoire',
      'générateur uuid en masse',
      'générateur uuid gratuit',
    ],
    seo: {
      title: 'Générateur UUID : v4 et v7 par lot gratuits | UtilityFlow',
      description:
        'Générez jusqu’à 100 identifiants UUID v4 aléatoires ou UUID v7 ordonnés par temps (RFC 9562), avec majuscules et accolades en option, dans votre navigateur.',
      primaryKeyword: 'générateur uuid',
      secondaryKeywords: ['générateur guid en ligne', 'générateur uuid v4', 'générateur uuid v7', 'générateur uuid en masse'],
      longTailKeywords: ['générer des uuid v4 et v7 en masse en ligne', 'générateur uuid v7 ordonné par temps rfc 9562', 'générateur uuid sans traits d’union en majuscules', 'générer 100 uuid d’un coup en ligne gratuitement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Créez des lots uniques ou multiples d’identifiants UUID v4 cryptographiquement aléatoires et UUID v7 ordonnés par horodatage selon la RFC 9562 directement via les API Web Crypto, avec des bascules de formatage.',
    instructions: [
      {
        title: 'Choisissez UUID v4 ou v7',
        description:
          'Choisissez v4 pour des identifiants aléatoires standard ou v7 pour des clés primaires de base de données triables avec préfixe d’horodatage.',
      },
      {
        title: 'Définissez la quantité et le formatage',
        description:
          'Saisissez entre 1 et 100 identifiants et activez Majuscules, Inclure les traits d’union ou Envelopper entre {accolades}.',
      },
      {
        title: 'Générez un nouveau lot',
        description:
          'Cliquez sur Générer des UUID pour créer un nouveau lot. Chaque clic produit un ensemble entièrement nouveau d’identifiants aléatoires.',
      },
      {
        title: 'Examinez les identifiants générés',
        description:
          'Parcourez la liste pour confirmer que la version, la casse et le format des traits d’union correspondent à ce que votre base de données ou votre code attend.',
      },
      {
        title: 'Copiez ou téléchargez la liste',
        description:
          'Cliquez sur Tout copier pour mettre chaque identifiant dans votre presse-papiers, ou téléchargez le lot en fichier .txt pour amorcer des enregistrements ou des fixtures de test.',
      },
      {
        title: 'Astuce : choisir v7 pour les bases de données',
        description:
          'Si vous stockez des identifiants comme clés primaires, préférez v7 pour que les nouvelles lignes se trient chronologiquement et gardent votre index efficace. Utilisez v4 quand l’ordre n’a pas d’importance.',
      },
    ],
    examples: [
      {
        title: 'UUID v4 standard en minuscules',
        input: 'Version : v4 · Traits d’union : Activés · Majuscules : Désactivées',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation:
          'Identifiant RFC 4122 de 128 bits adapté aux clés primaires distribuées.',
      },
      {
        title: 'Lot de 5 UUID v7 sans traits d’union',
        input: 'Version : v7 · Quantité : 5 · Traits d’union : Désactivés · Majuscules : Désactivées',
        output: '0191a2b3c4d57f8a89b0c1d2e3f4a5b6',
        explanation:
          'Identifiants ordonnés par temps au format hexadécimal compact de 32 caractères, prêts pour des clés primaires triables.',
      },
    ],
    benefits: [
      'Utilise crypto.randomUUID / crypto.getRandomValues du navigateur (CSPRNG)',
      'Prend en charge l’UUID v7 moderne de la RFC 9562 avec préfixe d’horodatage en millisecondes sur 48 bits',
      'Génère par lot jusqu’à 100 identifiants uniques d’un coup',
      'Formate en majuscules, en hexadécimal compact sans trait d’union, ou en chaînes GUID entre accolades',
    ],
    useCases: [
      'Amorcer des fixtures de base de données et des enregistrements de test de migration',
      'Générer des identifiants de corrélation, des clés d’API et des identifiants de test de webhook',
      'Comparer l’UUID v7 adapté à l’index B-tree et l’UUID v4 aléatoire',
      'Créer des constantes GUID entre accolades pour Windows/C#',
    ],
    faqs: [
      {
        question: 'Quel est l’avantage de l’UUID v7 par rapport à l’UUID v4 ?',
        answer:
          'L’UUID v7 encode un horodatage Unix en millisecondes dans ses bits les plus significatifs, rendant les identifiants triables chronologiquement et réduisant la fragmentation de l’index B-tree dans les bases de données SQL.',
      },
      {
        question: 'Ces UUID sont-ils générés avec Math.random() ?',
        answer:
          'Non. Chaque UUID utilise un aléa cryptographiquement fort provenant de l’API Web Crypto.',
      },
      {
        question: 'Comment obtenir un identifiant hexadécimal de 32 caractères sans tirets ?',
        answer:
          'Décochez « Inclure les traits d’union » pour supprimer les tirets immédiatement sur tout le lot généré.',
      },
      {
        question: 'Le Générateur d’UUID est-il gratuit ?',
        answer:
          'Oui, le Générateur d’UUID est entièrement gratuit sans inscription, et vous pouvez générer autant de lots que nécessaire.',
      },
      {
        question: 'Qu’est-ce qu’un UUID et à quoi sert-il ?',
        answer:
          'Un UUID est un identifiant unique de 128 bits, généralement écrit sous forme de 32 chiffres hexadécimaux en cinq groupes. Il est utilisé pour les clés primaires de base de données, les identifiants de corrélation, les jetons de session et les noms de fichiers.',
      },
      {
        question: 'Deux UUID générés peuvent-ils être identiques ?',
        answer:
          'En pratique, non. Avec 122 bits aléatoires dans un UUID v4, une collision est si improbable que vous pouvez considérer les identifiants générés comme uniques.',
      },
      {
        question: 'Quelle est la différence entre UUID v4 et UUID v7 ?',
        answer:
          'L’UUID v4 est entièrement aléatoire, tandis que l’UUID v7 commence par un horodatage en millisecondes pour que les identifiants plus récents se trient après les plus anciens. Les deux sont des identifiants de 128 bits.',
      },
      {
        question: 'Combien d’UUID puis-je générer d’un coup ?',
        answer:
          'Vous pouvez générer entre 1 et 100 UUID en un seul lot. Cliquez à nouveau sur Générer pour un autre lot frais de même taille.',
      },
      {
        question: 'Que signifie « ordonné par temps » pour l’UUID v7 ?',
        answer:
          'Ordonné par temps signifie que la première partie de l’UUID est un horodatage Unix en millisecondes, donc trier les identifiants par ordre alphabétique les trie aussi par heure de création.',
      },
      {
        question: 'Puis-je générer des UUID sans traits d’union ?',
        answer:
          'Oui. Désactivez Inclure les traits d’union et chaque UUID du lot est affiché comme une chaîne hexadécimale compacte de 32 caractères.',
      },
      {
        question: 'Que sont les GUID entre accolades et quand en ai-je besoin ?',
        answer:
          'Les GUID entre accolades enveloppent l’UUID dans des accolades, comme {550e8400-...}. Certains outils Microsoft et du code C# attendent ce format pour les constantes GUID.',
      },
      {
        question: 'Les UUID générés ici sont-ils sûrs pour une utilisation en production ?',
        answer:
          'Oui. Ils utilisent l’API Web Crypto du navigateur, qui fournit un aléa cryptographiquement fort adapté aux identifiants de production.',
      },
      {
        question: 'Puis-je générer des UUID en majuscules ?',
        answer:
          'Oui. Activez la bascule Majuscules et tout le lot est affiché avec les lettres hexadécimales A–F en capitales.',
      },
      {
        question: 'Ai-je besoin d’une connexion internet pour générer des UUID ?',
        answer:
          'Seulement pour charger la page. Une fois chargée, la génération s’exécute entièrement dans votre navigateur sans aucune requête réseau.',
      },
      {
        question: 'Ma liste d’UUID générés est-elle stockée ou envoyée quelque part ?',
        answer:
          'Non. La génération se fait localement dans votre navigateur, donc vos identifiants ne sont jamais envoyés vers un serveur ni stockés nulle part.',
      },
      {
        question: 'Puis-je utiliser un UUID comme clé d’API ?',
        answer:
          'Vous pouvez l’utiliser comme jeton opaque, mais un UUID est un identifiant, pas un secret conçu pour l’authentification. Pour de vraies clés d’API, utilisez un vrai système de secrets avec rotation.',
      },
      {
        question: 'Quelle est la différence entre un UUID et un GUID ?',
        answer:
          'Ils ont le même format de 128 bits. GUID est le nom utilisé par Microsoft, tandis que UUID est le nom du standard ouvert utilisé partout ailleurs.',
      },
      {
        question: 'Pourquoi choisir l’UUID v7 comme clé primaire de base de données ?',
        answer:
          'Parce que les identifiants v7 se trient par heure de création, les nouvelles lignes atterrissent près les unes des autres dans un index B-tree, ce qui garde les insertions rapides et réduit la fragmentation de l’index par rapport aux identifiants v4 aléatoires.',
      },
      {
        question: 'Puis-je régénérer deux fois le même UUID ?',
        answer:
          'Non. Chaque génération utilise un nouvel aléa cryptographique, donc vous n’obtiendrez jamais deux fois le même UUID. Enregistrez tout identifiant que vous devez réutiliser.',
      },
      {
        question: 'Comment copier tous les UUID générés d’un coup ?',
        answer:
          'Cliquez sur Tout copier pour placer tout le lot dans votre presse-papiers, un UUID par ligne, prêt à coller dans votre code, votre tableur ou votre script SQL.',
      },
    ],
  },
  'regex-tester': {
    slug: 'testeur-regex',
    name: 'Testeur Regex',
    shortDescription:
      'Testez des expressions régulières JavaScript avec surlignage des correspondances en direct, groupes de capture, drapeaux et sortie de remplacement.',
    keywords: [
      'testeur regex',
      'testeur d’expression régulière',
      'regex javascript',
      'surligneur de correspondance regex',
      'testeur regex en ligne',
      'tester regex en ligne',
      'débogueur regex',
      'testeur de correspondance regex',
      'testeur regex javascript',
    ],
    seo: {
      title: 'Testeur Regex : correspondances JS en direct | UtilityFlow',
      description:
        'Testez des expressions régulières en direct avec les drapeaux g/i/m/s, le surlignage des correspondances et l’aperçu de remplacement dans votre navigateur.',
      primaryKeyword: 'testeur regex',
      secondaryKeywords: ['testeur d’expression régulière', 'débogueur regex js', 'groupes de capture regex', 'testeur de remplacement regex'],
      longTailKeywords: ['tester les groupes de capture regex javascript en ligne', 'surligneur de correspondance d’expression régulière en direct', 'aperçu de remplacement regex avec groupe de capture $1', 'déboguer du regex javascript avec surlignage en direct en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Déboguez des expressions régulières JavaScript de manière interactive avec des correspondances surlignées en direct, des positions d’index de correspondance, l’inspection des groupes de capture numérotés, des bascules de drapeaux et des aperçus de remplacement.',
    instructions: [
      {
        title: 'Saisissez votre motif et vos drapeaux',
        description:
          'Tapez un motif RegExp entre les barres obliques et activez les drapeaux g, i, m ou s.',
      },
      {
        title: 'Fournissez un texte d’exemple',
        description:
          'Collez des chaînes de test dans Chaîne de test pour voir les sous-chaînes correspondantes surlignées à droite.',
      },
      {
        title: 'Examinez les correspondances surlignées',
        description:
          'Vérifiez les sous-chaînes surlignées et le nombre de correspondances pour confirmer que votre motif trouve exactement ce que vous attendez, et rien de plus.',
      },
      {
        title: 'Inspectez les groupes et les remplacements',
        description:
          'Examinez les index de correspondance exacts et les groupes de capture $1/$2, ou testez un modèle de remplacement ci-dessous.',
      },
      {
        title: 'Corrigez les erreurs de motif',
        description:
          'Si une erreur de syntaxe apparaît, lisez le message, vérifiez les crochets ou parenthèses non fermés, et ajustez le motif jusqu’à ce que des correspondances apparaissent.',
      },
      {
        title: 'Astuce : testez les cas limites avant de livrer',
        description:
          'Essayez les chaînes vides, les caractères inhabituels et les entrées multi-lignes avant d’utiliser un motif en production, et activez le drapeau i pour vérifier la sensibilité à la casse.',
      },
    ],
    examples: [
      {
        title: 'Extraire la partie locale et le domaine d’un e-mail',
        input: 'Motif : ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Texte : support@utilityflow.online',
        output: 'Correspondance n°1 · $1="support" · $2="utilityflow.online"',
        explanation:
          'Les groupes entre parenthèses exposent individuellement les sous-chaînes capturées.',
      },
      {
        title: 'Remplacement avec inversion de groupes',
        input: 'Motif : (\\w+) (\\w+) · Remplacement : $2 $1 · Texte : Jean Dupont',
        output: 'Dupont Jean',
        explanation:
          'Les groupes de capture numérotés permettent d’échanger l’ordre des mots capturés dans le remplacement.',
      },
    ],
    benefits: [
      'Protège automatiquement contre les boucles infinies sur les correspondances de longueur nulle',
      'Affiche l’index de caractère exact et les valeurs de groupe capturé par correspondance',
      'Inclut un aperçu de modèle de remplacement en direct utilisant $1, $2 et $&',
      'Signale proprement les erreurs de syntaxe RegExp sans planter',
    ],
    useCases: [
      'Valider des motifs d’e-mail, de slug ou d’entrée de formulaire avant de livrer',
      'Extraire des jetons structurés de lignes de journal ou d’extraits HTML',
      'Tester des modèles de capture de recherche et de remplacement',
      'Vérifier le comportement des drapeaux multi-lignes (^ / $) et insensibles à la casse',
    ],
    faqs: [
      {
        question: 'Quel moteur regex ce testeur utilise-t-il ?',
        answer:
          'Il utilise le moteur RegExp ECMAScript (JavaScript) natif de votre navigateur, donc le comportement correspond exactement au JS côté client et au code Node.js.',
      },
      {
        question: 'Pourquoi le mode global (« g ») est-il important ?',
        answer:
          'Sans le drapeau « g », RegExp s’arrête après la première correspondance. Activer « g » trouve et surligne chaque correspondance dans toute la chaîne de test.',
      },
      {
        question: 'Comment trouver des correspondances à travers les sauts de ligne avec « . » ?',
        answer:
          'Activez le drapeau « s » (dotAll) pour que le métacaractère « . » corresponde aussi aux caractères de saut de ligne.',
      },
      {
        question: 'Le Testeur Regex est-il gratuit ?',
        answer:
          'Oui, le Testeur Regex est entièrement gratuit sans inscription et sans limite sur le nombre de motifs ou de chaînes de test que vous essayez.',
      },
      {
        question: 'Quel dialecte regex le Testeur Regex utilise-t-il ?',
        answer:
          'Il utilise le dialecte regex JavaScript (ECMAScript), le même moteur qui fonctionne dans les navigateurs et Node.js, donc les motifs se comportent de la même façon dans votre code.',
      },
      {
        question: 'Comment tester une regex de validation d’e-mail ?',
        answer:
          'Collez un motif comme ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) et essayez des adresses valides et invalides dans la chaîne de test pour voir lesquelles correspondent.',
      },
      {
        question: 'Que font les drapeaux g, i, m et s dans le Testeur Regex ?',
        answer:
          'Le drapeau g trouve toutes les correspondances, i rend la correspondance insensible à la casse, m permet à ^ et $ de correspondre aux limites de ligne, et s permet à . de correspondre aux sauts de ligne.',
      },
      {
        question: 'Comment fonctionnent les groupes de capture dans le Testeur Regex ?',
        answer:
          'Le texte entre parenthèses forme un groupe de capture numéroté. Après une correspondance, chaque groupe est listé comme $1, $2, etc. avec la sous-chaîne exacte qu’il a capturée.',
      },
      {
        question: 'Quelle est la différence entre .* et .*? en regex ?',
        answer:
          'Le quantificateur .* est gourmand et correspond à autant que possible, tandis que .*? est paresseux et correspond à aussi peu que possible. Utilisez la forme paresseuse quand vous voulez la correspondance la plus courte.',
      },
      {
        question: 'Comment trouver un point ou une parenthèse littéral en regex ?',
        answer:
          'Échappez-le avec une barre oblique inverse, comme \\. pour un point ou \\( pour une parenthèse, pour que le caractère soit traité comme du texte littéral au lieu d’un métacaractère.',
      },
      {
        question: 'Pourquoi ma regex correspond-elle à trop de texte ?',
        answer:
          'Vous utilisez probablement un quantificateur gourmand comme .* qui engloutit tout jusqu’à la dernière correspondance possible. Passez à un quantificateur paresseux comme .*? ou réduisez la classe de caractères.',
      },
      {
        question: 'Comment utiliser $1 et $2 dans un remplacement ?',
        answer:
          'Tapez un modèle de remplacement comme $2@$1 et le testeur substitue chaque $n par le texte capturé par ce groupe numéroté dans chaque correspondance.',
      },
      {
        question: 'Le Testeur Regex peut-il trouver des correspondances sur plusieurs lignes ?',
        answer:
          'Oui. Activez le drapeau m pour que ^ et $ fonctionnent par ligne, et le drapeau s si vous avez besoin que . traverse les sauts de ligne.',
      },
      {
        question: 'Qu’est-ce qu’un lookahead en regex ?',
        answer:
          'Un lookahead comme (?=...) vérifie qu’un motif suit la position actuelle sans le consommer, pour que vous puissiez exiger une condition, comme un chiffre devant, sans l’inclure dans la correspondance.',
      },
      {
        question: 'Pourquoi mon motif n’affiche-t-il aucune correspondance ?',
        answer:
          'Vérifiez une erreur de syntaxe, un caractère spécial non échappé ou une classe de caractères qui exclut votre entrée. Essayez de simplifier le motif et d’ajouter un élément à la fois.',
      },
      {
        question: 'Comment tester une regex sur plusieurs lignes à la fois ?',
        answer:
          'Collez tout l’échantillon multi-lignes dans la chaîne de test et activez le drapeau g. Chaque ligne correspondante est surlignée et listée avec son index.',
      },
      {
        question: 'Le Testeur Regex prend-il en charge les caractères Unicode ?',
        answer:
          'Oui. Le regex JavaScript gère le texte Unicode, et vous pouvez utiliser des séquences d’échappement comme \\u{1F600} ou le drapeau u pour une correspondance entièrement compatible Unicode.',
      },
      {
        question: 'Ma regex ou mon texte de test est-il envoyé quelque part ?',
        answer:
          'Non. Les tests s’exécutent entièrement dans votre navigateur, donc vos motifs et vos données d’exemple ne quittent jamais votre appareil.',
      },
      {
        question: 'Qu’est-ce que le backtracking catastrophique et comment l’éviter ?',
        answer:
          'Cela se produit quand des quantificateurs imbriqués comme (a+)+ forcent le moteur à essayer un nombre énorme de combinaisons. Évitez les quantificateurs qui se chevauchent et utilisez plutôt des motifs de type atomique ou des classes de caractères plus simples.',
      },
      {
        question: 'Puis-je enregistrer ou partager mon motif regex ?',
        answer:
          'Il n’y a pas de fonction d’enregistrement intégrée, donc copiez votre motif et votre chaîne de test dans un fichier d’extraits ou un commentaire de code. Vous pouvez aussi coller le motif directement dans votre code source.',
      },
    ],
  },
  'jwt-decoder': {
    slug: 'decodeur-jwt',
    name: 'Décodeur JWT',
    shortDescription:
      'Décodez les en-têtes, les revendications de charge utile et les horodatages d’expiration des jetons web JSON en toute sécurité dans votre navigateur.',
    keywords: [
      'décodeur jwt',
      'décoder un jeton web json',
      'inspecteur jwt',
      'horodatage exp jwt',
      'décodeur de jeton jwt',
      'décoder la charge utile jwt',
      'vérificateur d’expiration jwt',
      'visionneuse de revendications jwt',
      'vérifier l’expiration jwt',
    ],
    seo: {
      title: 'Décodeur JWT : décoder les jetons et l’expiry | UtilityFlow',
      description:
        'Décodez les en-têtes JWT et les revendications de charge utile dans votre navigateur et vérifiez iat, nbf et exp en dates UTC lisibles. Gratuit et privé.',
      primaryKeyword: 'décodeur jwt',
      secondaryKeywords: ['décoder jwt en ligne', 'visionneuse de charge utile jwt', 'inspecteur de jeton web json', 'vérificateur d’expiration jwt'],
      longTailKeywords: ['décoder un jeton jwt localement sans envoi vers un serveur', 'vérifier l’horodatage d’expiration exp jwt en ligne', 'inspecter l’en-tête base64url et les revendications jwt', 'lire les revendications de charge utile jwt dans le navigateur'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Inspectez les jetons web JSON (JWT) en toute sécurité dans la mémoire locale du navigateur — consultez les objets JSON formatés d’En-tête et de Charge utile et vérifiez le statut d’expiration lisible des revendications `iat`, `nbf` et `exp`.',
    instructions: [
      {
        title: 'Collez votre chaîne JWT',
        description:
          'Collez un jeton standard à trois segments (en-tête.charge utile.signature) dans la zone d’entrée, ou cliquez sur Charger un exemple de JWT pour essayer un jeton de démonstration.',
      },
      {
        title: 'Examinez le JSON d’En-tête et de Charge utile',
        description:
          'Inspectez les métadonnées d’algorithme (`alg`, `typ`) et les champs de revendications décodés dans des panneaux JSON formatés.',
      },
      {
        title: 'Vérifiez les revendications d’horodatage',
        description:
          'Vérifiez les conversions de dates UTC pour `iat`, `nbf` et `exp` ainsi que le statut actif/expiré.',
      },
      {
        title: 'Inspectez des revendications comme sub, roles et scopes',
        description:
          'Cherchez des revendications d’identité et de permission comme sub, iss, aud, roles et scope pour confirmer que le jeton porte ce que votre API attend.',
      },
      {
        title: 'Copiez le JSON décodé ou une seule revendication',
        description:
          'Copiez tout le JSON formaté d’en-tête ou de charge utile, ou copiez une valeur de revendication individuelle pour la coller dans votre code, vos tests ou votre ticket de support.',
      },
      {
        title: 'Résolvez un jeton qui ne se décode pas',
        description:
          'Supprimez les espaces, sauts de ligne ou guillemets supplémentaires autour du jeton. Un jeton à cinq segments est un JWE chiffré, pas un JWT, et ne peut pas être décodé sans sa clé de déchiffrement.',
      },
    ],
    examples: [
      {
        title: 'Inspecter l’expiration d’un jeton',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'En-tête : { "alg": "HS256", "typ": "JWT" } · exp : 2027-01-15 UTC',
        explanation:
          'Décode les segments Base64Url et traduit les revendications d’époque numériques en dates UTC.',
      },
      {
        title: 'Vérifier les rôles d’un jeton d’accès',
        input: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMiIsInJvbGVzIjpbImFkbWluIl0sImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Charge utile : { "sub": "usr_2", "roles": ["admin"], "exp": 1800000000 }',
        explanation:
          'Montre les revendications de rôle et d’identité portées par un jeton d’accès OAuth2.',
      },
    ],
    benefits: [
      'Aucune transmission réseau — les jetons ne quittent jamais l’onglet de votre navigateur',
      'Traduit les revendications numériques iat, nbf et exp en dates UTC lisibles',
      'Met en évidence si l’horodatage d’expiration du jeton est déjà passé',
      'Indique clairement que la vérification cryptographique de la signature nécessite votre clé de signature',
    ],
    useCases: [
      'Déboguer des jetons d’accès et d’identité OAuth2 / OIDC pendant l’intégration d’API',
      'Vérifier les revendications de rôle, de portée et de locataire émises par les fournisseurs d’authentification',
      'Vérifier pourquoi une API a rejeté un jeton porteur expiré',
      'Valider la structure JWT dans des tests d’intégration',
    ],
    faqs: [
      {
        question: 'Ce Décodeur JWT vérifie-t-il si la signature d’un jeton est authentique ?',
        answer:
          'Non. Décoder un JWT ne fait qu’analyser ses segments d’en-tête et de charge utile Base64Url. Vérifier une signature nécessite le secret de votre serveur ou votre clé publique JWKS et doit toujours se faire sur votre backend.',
      },
      {
        question: 'Est-il sûr de coller des jetons d’authentification ici ?',
        answer:
          'Tout le décodage s’exécute localement en JavaScript côté client sans journaliser ni transmettre les jetons. Évitez quand même de coller des identifiants de production sur des ordinateurs partagés non fiables.',
      },
      {
        question: 'Pourquoi mon jeton échoue-t-il s’il a 5 segments au lieu de 3 ?',
        answer:
          'Un jeton à 5 segments est un JWE chiffré (JSON Web Encryption) plutôt qu’un JWT signé JWS, donc sa charge utile ne peut pas être décodée sans la clé de déchiffrement.',
      },
      {
        question: 'Qu’est-ce qu’un JWT et que montre ce décodeur ?',
        answer:
          'Un jeton web JSON est une chaîne compacte à trois segments Base64Url : en-tête, charge utile et signature. Ce décodeur montre le JSON d’en-tête, les revendications de charge utile et des dates lisibles pour les revendications d’horodatage.',
      },
      {
        question: 'Le Décodeur JWT est-il gratuit ?',
        answer:
          'Oui. Le Décodeur JWT est entièrement gratuit sans inscription, sans limite d’utilisation et sans compte nécessaire. Il fonctionne entièrement dans votre navigateur.',
      },
      {
        question: 'Puis-je décoder un JWT sans le secret de signature ?',
        answer:
          'Oui. Le décodage ne fait que lire l’en-tête et la charge utile Base64Url, qui ne sont pas chiffrés. Le secret de signature n’est nécessaire que pour vérifier que la signature est authentique.',
      },
      {
        question: 'Que signifient les champs d’en-tête alg et typ dans un JWT ?',
        answer:
          'Le champ alg nomme l’algorithme de signature, comme HS256 ou RS256, et typ indique généralement JWT pour identifier le type de jeton. Les deux champs se trouvent dans le segment d’en-tête.',
      },
      {
        question: 'Quelles revendications figurent généralement dans une charge utile JWT ?',
        answer:
          'Les revendications courantes de charge utile incluent sub pour le sujet ou l’identifiant utilisateur, iss pour l’émetteur, aud pour le public, iat pour l’heure d’émission, nbf pour l’heure de validité et exp pour l’heure d’expiration, ainsi que des revendications personnalisées comme roles ou scopes.',
      },
      {
        question: 'Comment savoir si mon JWT a expiré ?',
        answer:
          'Comparez la revendication exp avec l’heure actuelle. Ce décodeur convertit exp en une date UTC simple et signale si le jeton est encore actif ou déjà expiré.',
      },
      {
        question: 'Quelle est la différence entre iat, nbf et exp dans un JWT ?',
        answer:
          'La revendication iat enregistre quand le jeton a été émis, nbf enregistre la première heure à laquelle le jeton devient valide, et exp enregistre quand il cesse d’être valide. Les trois sont des horodatages Unix en secondes.',
      },
      {
        question: 'Pourquoi ma charge utile JWT décodée semble-t-elle différente du JSON d’origine ?',
        answer:
          'Le décodage ne fait qu’inverser l’encodage Base64Url, donc la charge utile devrait correspondre aux revendications d’origine. Si elle semble brouillée, le jeton est peut-être tronqué, enveloppé sur plusieurs lignes ou copié avec des caractères supplémentaires.',
      },
      {
        question: 'Puis-je décoder un JWT sans signature ?',
        answer:
          'Oui. Un jeton non signé utilise alg none et a un troisième segment vide, et son en-tête et sa charge utile se décodent quand même normalement. Les jetons non signés ne doivent jamais être fiables en production.',
      },
      {
        question: 'Que signifie un jeton avec seulement deux segments ?',
        answer:
          'Un jeton à deux segments est mal formé ou incomplet, généralement parce qu’une partie a été coupée lors de la copie. Un JWT signé valide a toujours trois segments séparés par des points.',
      },
      {
        question: 'Le Décodeur JWT stocke-t-il ou envoie-t-il mon jeton quelque part ?',
        answer:
          'Non. Le décodage se fait entièrement dans l’onglet de votre navigateur et rien n’est envoyé, journalisé ou stocké sur un serveur. Fermer l’onglet supprime le jeton de la mémoire.',
      },
      {
        question: 'Pourquoi mon JWT ne se décode-t-il pas du tout ?',
        answer:
          'Vérifiez les espaces, sauts de ligne ou guillemets supplémentaires autour du jeton, et confirmez qu’il a exactement trois segments séparés par des points. Les jetons copiés depuis une sortie de journal incluent souvent une ponctuation de fin qui casse le décodage.',
      },
      {
        question: 'Puis-je utiliser ce Décodeur JWT pour des jetons d’accès OAuth2 ?',
        answer:
          'Oui, tant que le jeton d’accès est un JWT. De nombreux fournisseurs OAuth2 et OpenID Connect émettent des jetons d’accès et d’identité JWT, et cet outil décode leurs revendications de la même façon.',
      },
      {
        question: 'Qu’est-ce qu’un JWE et pourquoi ne puis-je pas le décoder ici ?',
        answer:
          'Un JWE est un jeton chiffré JSON Web Encryption à cinq segments. Sa charge utile est chiffrée, donc elle ne peut être lue qu’avec la clé de déchiffrement détenue par le destinataire prévu.',
      },
      {
        question: 'Comment vérifier des revendications JWT comme les rôles et les portées ?',
        answer:
          'Collez le jeton et lisez le panneau de charge utile décodée. Les rôles, les portées, les permissions et les revendications de locataire y apparaissent comme des champs JSON ordinaires que vous pouvez inspecter ou copier.',
      },
      {
        question: 'Décoder un JWT prouve-t-il que le jeton est valide ?',
        answer:
          'Non. Le décodage ne montre que ce que le jeton contient. N’importe qui peut créer un jeton avec n’importe quelles revendications, donc la validité doit être confirmée en vérifiant la signature et la revendication exp sur votre serveur.',
      },
      {
        question: 'Puis-je décoder un JWT sur un ordinateur partagé ou public ?',
        answer:
          'Vous pouvez, parce que le décodage est local et que rien n’est envoyé, mais il vaut mieux éviter de coller des jetons de production actifs sur un ordinateur que vous ne contrôlez pas.',
      },
    ],
  },
  'hash-generator': {
    slug: 'generateur-de-hash',
    name: 'Générateur de Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Calculez des hashs cryptographiques SHA-1, SHA-256, SHA-384 et SHA-512 pour du texte ou des fichiers locaux via Web Crypto.',
    keywords: [
      'générateur de hash',
      'générateur sha256',
      'hash sha512',
      'somme de contrôle sha256 de fichier',
      'générateur de hash sha1',
      'hash sha384 en ligne',
      'calculateur de somme de contrôle',
      'vérifier la somme de contrôle d’un fichier',
      'générateur de hash sécurisé en ligne',
    ],
    seo: {
      title: 'Générateur de Hash : SHA-1, SHA-256, SHA-512 | UtilityFlow',
      description:
        'Générez des condensés SHA-1, SHA-256, SHA-384 et SHA-512 en hexadécimal ou Base64 pour du texte et des fichiers locaux — gratuit et privé, sans inscription.',
      primaryKeyword: 'générateur de hash',
      secondaryKeywords: ['hash sha256 en ligne', 'vérificateur de somme de contrôle de fichier', 'générateur sha512', 'calculateur de somme de contrôle'],
      longTailKeywords: ['calculer la somme de contrôle sha256 d’un fichier local dans le navigateur', 'générer un hash sha256 en hexadécimal et base64', 'générateur de hash api web crypto en ligne', 'vérifier la somme de contrôle sha256 d’un fichier téléchargé'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Calculez simultanément les condensés SHA-1, SHA-256, SHA-384 et SHA-512 en utilisant l’API Web Crypto native du navigateur (`crypto.subtle.digest`) pour le texte UTF-8 comme pour les sommes de contrôle de fichiers locaux.',
    instructions: [
      {
        title: 'Choisissez Entrée de texte ou Somme de contrôle de fichier local',
        description:
          'Sélectionnez Entrée de texte pour hasher des chaînes ou Somme de contrôle de fichier local pour vérifier des binaires téléchargés sans les envoyer.',
      },
      {
        title: 'Saisissez du texte ou choisissez un fichier local',
        description:
          'Tapez ou collez votre texte dans la zone d’entrée, ou choisissez un fichier sur votre appareil. Le fichier est lu uniquement dans votre navigateur et n’est jamais envoyé.',
      },
      {
        title: 'Sélectionnez l’encodage de sortie',
        description:
          'Basculez entre le formatage de condensé Hex (minuscules ou majuscules) et Base64.',
      },
      {
        title: 'Examinez les quatre condensés à la fois',
        description:
          'SHA-1, SHA-256, SHA-384 et SHA-512 sont calculés simultanément, donc comparez les algorithmes côte à côte sans relancer l’outil.',
      },
      {
        title: 'Copiez n’importe quel condensé',
        description:
          'Cliquez sur Copier à côté de SHA-1, SHA-256, SHA-384 ou SHA-512 pour copier le hash calculé.',
      },
      {
        title: 'Résolvez une somme de contrôle qui ne correspond pas',
        description:
          'Si la somme de contrôle d’un fichier diffère de la valeur publiée, téléchargez à nouveau le fichier et vérifiez les sauts de ligne ou espaces de fin dans l’entrée de texte, car même un seul caractère supplémentaire change complètement le hash.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 de « UtilityFlow »',
        input: 'UtilityFlow',
        output: 'Calculé de façon déterministe en 64 caractères hexadécimaux (256 bits)',
        explanation:
          'Même la modification d’un seul caractère produit un condensé complètement différent.',
      },
      {
        title: 'Vérifier la somme de contrôle d’un fichier téléchargé',
        input: 'Mode : Somme de contrôle de fichier local · Fichier : installateur-v2.4.zip',
        output: 'SHA-256 : 64 caractères hexadécimaux · Correspond à la valeur publiée : Oui',
        explanation:
          'Comparer le condensé calculé avec la somme publiée par l’éditeur confirme que le fichier est intact.',
      },
    ],
    benefits: [
      'Utilise l’API Web Crypto SubtleCrypto native accélérée par le matériel',
      'Vérifie les sommes de contrôle SHA-256 de fichiers locaux sans envoyer les fichiers',
      'Produit les formats Hex (majuscules/minuscules) et Base64',
      'Calcule les quatre algorithmes SHA simultanément',
    ],
    useCases: [
      'Vérifier les sommes de contrôle SHA-256 d’installateurs logiciels ou d’archives téléchargés',
      'Générer des hashs Base64 d’intégrité de sous-ressource (SRI) pour des scripts/styles',
      'Tester les attentes de HMAC de webhook ou de condensé de charge utile',
      'Créer des empreintes de contenu déterministes',
    ],
    faqs: [
      {
        question: 'Puis-je inverser un hash SHA-256 pour retrouver le texte d’origine ?',
        answer:
          'Non. Les fonctions de hash cryptographiques sont des condensés mathématiques à sens unique conçus pour que l’entrée d’origine ne puisse pas être déduite du hash.',
      },
      {
        question: 'Pourquoi SHA-256 et SHA-512 sont-ils préférés à SHA-1 ?',
        answer:
          'SHA-1 présente des faiblesses de collision connues et est déprécié pour les signatures de sécurité ; SHA-256 et SHA-512 appartiennent à la famille SHA-2, plus forte.',
      },
      {
        question: 'Les fichiers envoyés sont-ils transmis à un serveur ?',
        answer:
          'Non. Les fichiers sélectionnés sont lus dans un ArrayBuffer à l’intérieur de l’onglet de votre navigateur et hashés localement.',
      },
      {
        question: 'À quoi sert un générateur de hash ?',
        answer:
          'Un générateur de hash transforme du texte ou un fichier en une empreinte de longueur fixe appelée condensé. Les développeurs utilisent les condensés pour vérifier les téléchargements, contrôler l’intégrité des données et construire des valeurs d’intégrité de sous-ressource.',
      },
      {
        question: 'Le Générateur de Hash est-il gratuit ?',
        answer:
          'Oui. Le Générateur de Hash est entièrement gratuit sans inscription et sans limite d’utilisation. Tout le hashage s’exécute localement dans votre navigateur.',
      },
      {
        question: 'Quelle est la différence entre SHA-1, SHA-256, SHA-384 et SHA-512 ?',
        answer:
          'Ce sont des membres de la famille SHA avec des longueurs de condensé différentes : SHA-1 produit 160 bits, SHA-256 produit 256 bits, SHA-384 produit 384 bits et SHA-512 produit 512 bits. Les condensés plus longs sont généralement plus forts.',
      },
      {
        question: 'Comment vérifier la somme de contrôle d’un fichier téléchargé avec cet outil ?',
        answer:
          'Basculez en mode Somme de contrôle de fichier local, sélectionnez le fichier téléchargé et comparez la valeur SHA-256 calculée avec la somme de contrôle publiée par l’éditeur du logiciel. Des valeurs correspondantes signifient que le fichier est intact.',
      },
      {
        question: 'Que dois-je faire si la somme de contrôle de mon fichier ne correspond pas ?',
        answer:
          'N’installez pas et n’exécutez pas le fichier. Téléchargez-le à nouveau depuis la source officielle et hashez-le de nouveau, car une discordance peut signifier un téléchargement corrompu ou falsifié.',
      },
      {
        question: 'Quelle est la différence entre la sortie de hash en hexadécimal et en Base64 ?',
        answer:
          'La sortie hexadécimale montre le condensé sous forme de caractères hexadécimaux, tandis que la sortie Base64 montre le même condensé dans une chaîne Base64 plus courte. Les deux représentent exactement les mêmes octets de hash.',
      },
      {
        question: 'Changer un seul caractère change-t-il vraiment tout le hash ?',
        answer:
          'Oui. Les fonctions de hash ont un effet avalanche, donc changer une seule lettre, un espace ou un saut de ligne produit un condensé complètement différent sans motif visible.',
      },
      {
        question: 'Deux fichiers différents peuvent-ils produire le même hash SHA-256 ?',
        answer:
          'En théorie, une collision est possible, mais avec SHA-256 elle est si improbable en pratique que des hashs correspondants sont considérés comme la preuve que les fichiers sont identiques.',
      },
      {
        question: 'Puis-je hasher un fichier sans l’envoyer ?',
        answer:
          'Oui. Cet outil lit le fichier dans la mémoire de votre navigateur et le hashe avec l’API Web Crypto. Le fichier ne quitte jamais votre appareil.',
      },
      {
        question: 'Qu’est-ce qu’un hash d’intégrité de sous-ressource et comment en créer un ?',
        answer:
          'Un hash d’intégrité de sous-ressource (SRI) est un condensé SHA Base64 ajouté à une balise de script ou de lien pour que les navigateurs refusent les fichiers falsifiés. Sélectionnez la sortie Base64 ici et copiez le condensé SHA-256 ou SHA-384 dans votre attribut integrity.',
      },
      {
        question: 'Pourquoi le même texte produit-il toujours le même hash ?',
        answer:
          'Les fonctions de hash sont déterministes : une entrée identique produit toujours le condensé identique. C’est ce qui rend les hashs utiles pour vérifier les fichiers et détecter les modifications.',
      },
      {
        question: 'SHA-1 est-il encore sûr à utiliser ?',
        answer:
          'SHA-1 convient aux simples sommes de contrôle de données non sensibles, mais il ne doit pas être utilisé pour les signatures de sécurité ou les certificats parce qu’il existe des attaques de collision pratiques contre lui.',
      },
      {
        question: 'Quelle est la longueur d’un hash SHA-256 en caractères hexadécimaux ?',
        answer:
          'Un condensé SHA-256 fait 256 bits, ce qui apparaît comme 64 caractères hexadécimaux. SHA-1 affiche 40 caractères hexadécimaux, SHA-384 en affiche 96 et SHA-512 en affiche 128.',
      },
      {
        question: 'Le Générateur de Hash fonctionne-t-il hors ligne ?',
        answer:
          'Oui, une fois la page chargée. Le hashage utilise l’API Web Crypto intégrée à votre navigateur, donc aucune connexion réseau n’est nécessaire pendant que vous hashez du texte ou des fichiers.',
      },
      {
        question: 'Puis-je hasher du texte avec des caractères spéciaux ou des émojis ?',
        answer:
          'Oui. Le texte est encodé en UTF-8 avant le hashage, donc les lettres accentuées, les symboles et les émojis sont tous gérés de façon cohérente.',
      },
      {
        question: 'Quelle est la différence entre un hash et un chiffrement ?',
        answer:
          'Le chiffrement est réversible avec une clé, tandis que le hashage est un condensé à sens unique qui ne peut pas être inversé. Les hashs vérifient l’intégrité ; le chiffrement protège la confidentialité.',
      },
      {
        question: 'Puis-je utiliser le Générateur de Hash pour vérifier un mot de passe ?',
        answer:
          'Vous pouvez hasher un mot de passe pour le comparer avec un condensé stocké, mais les mots de passe doivent être hashés avec un algorithme de mot de passe lent comme bcrypt ou Argon2, et non du simple SHA-256, dans les vraies applications.',
      },
    ],
  },
  'html-entity-encoder': {
    slug: 'encodeur-d-entites-html',
    name: 'Encodeur et Décodeur d’Entités HTML',
    shortDescription:
      'Échappez les caractères HTML réservés (<, >, &, guillemets) et les symboles non ASCII ou décodez proprement les entités HTML.',
    keywords: [
      'encodeur d’entités html',
      'décodeur html',
      'échapper html en ligne',
      'déséchapper les entités html',
      'encoder les caractères html',
      'outil d’échappement html',
      'convertir en entités html',
      'décoder les entités html en ligne',
      'échapper les caractères spéciaux html',
    ],
    seo: {
      title: 'Encodeur d’Entités HTML : échapper et décoder | UtilityFlow',
      description:
        'Encodez les caractères HTML réservés et les symboles non ASCII en entités, ou décodez les entités nommées et numériques en texte brut. Gratuit et local.',
      primaryKeyword: 'encodeur d’entités html',
      secondaryKeywords: ['outil d’échappement html', 'décodeur d’entités html', 'déséchapper html', 'encoder les caractères html'],
      longTailKeywords: ['échapper les balises html pour des extraits de code en ligne', 'décoder les entités html nommées et numériques', 'convertir les caractères spéciaux en entités html', 'échapper les guillemets et les esperluettes html en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Échappez en toute sécurité `<`, `>`, `&`, les guillemets et les symboles Unicode internationaux en entités HTML pour intégrer des extraits de code dans des pages web, ou décodez des chaînes échappées en HTML en texte lisible.',
    instructions: [
      {
        title: 'Choisissez Encoder ou Décoder',
        description:
          'Choisissez Encoder les entités pour échapper le balisage HTML ou Décoder les entités pour déséchapper les entités existantes.',
      },
      {
        title: 'Collez votre HTML ou votre texte',
        description:
          'Collez l’extrait, la valeur d’attribut ou la chaîne échappée dans la zone d’entrée. Les gros blocs de code se collent tels quels.',
      },
      {
        title: 'Activez l’encodage non ASCII',
        description:
          'En mode Encoder, décidez si les caractères au-dessus d’ASCII 127 doivent aussi se convertir en entités numériques &#...;.',
      },
      {
        title: 'Examinez la sortie convertie',
        description:
          'Vérifiez que les balises, les guillemets et les symboles se sont convertis comme prévu, et confirmez que rien dans votre extrait n’a été modifié ou supprimé.',
      },
      {
        title: 'Copiez ou échangez',
        description:
          'Copiez le texte converti ou cliquez sur Échanger pour inverser votre flux de travail.',
      },
      {
        title: 'Résolvez les entités doublement encodées',
        description:
          'Si vous voyez &amp;lt; dans votre sortie, le texte a été encodé deux fois. Décodez une fois pour revenir aux entités normales, puis encodez une seule fois.',
      },
    ],
    examples: [
      {
        title: 'Échapper un extrait HTML pour la documentation',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation:
          'Empêche le navigateur d’interpréter les balises d’exemple comme des éléments DOM actifs.',
      },
      {
        title: 'Décoder des entités nommées depuis un flux RSS',
        input: 'Le caf&eacute; &amp; la cr&egrave;me co&ucirc;tent 5&nbsp;€',
        output: 'Le café & la crème coûtent 5 €',
        explanation:
          'Récupère du texte brut lisible à partir de contenu HTML échappé.',
      },
    ],
    benefits: [
      'Échappe les cinq caractères réservés XML/HTML (&, <, >, ", \')',
      'Encodage d’entités numériques en option pour les symboles internationaux et la ponctuation',
      'Décode les entités nommées (&mdash;, &copy;) et numériques (&#8212;, &#x2014;)',
      'Utilise l’extraction de texte sûre par DOMParser lors du décodage',
    ],
    useCases: [
      'Préparer des exemples de code HTML pour des articles de blog et de la documentation',
      'Nettoyer du texte encodé en HTML récupéré depuis des flux RSS ou des API XML',
      'Échapper des valeurs d’attributs dans des modèles HTML statiques',
      'Vérifier comment les symboles spéciaux se rendent en toute sécurité dans des pages UTF-8 ou ASCII',
    ],
    faqs: [
      {
        question: 'Quels cinq caractères doivent toujours être échappés dans le texte et les attributs HTML ?',
        answer:
          'L’esperluette (&), inférieur à (<), supérieur à (>), guillemet double (") et guillemet simple (\') doivent être échappés pour éviter toute ambiguïté de balisage ou des problèmes XSS.',
      },
      {
        question: 'Quand désactiver l’encodage non ASCII ?',
        answer:
          'Si votre page web utilise <meta charset="UTF-8">, les caractères internationaux standard et les symboles se rendent directement sans avoir besoin d’entités numériques &#...;.',
      },
      {
        question: 'Le décodeur gère-t-il les entités hexadécimales comme &#x27; ?',
        answer:
          'Oui. Les entités décimales (&#39;) et hexadécimales (&#x27;) ainsi que les entités nommées standard (&amp;, &nbsp;, &copy;) se décodent correctement.',
      },
      {
        question: 'Qu’est-ce qu’une entité HTML ?',
        answer:
          'Une entité HTML est un code texte qui représente un caractère spécial, comme &lt; pour < ou &amp; pour &. Les entités permettent d’afficher des caractères réservés sans que le navigateur les traite comme du balisage.',
      },
      {
        question: 'L’Encodeur d’Entités HTML est-il gratuit ?',
        answer:
          'Oui. L’Encodeur d’Entités HTML est entièrement gratuit sans inscription et sans limite d’utilisation. Tout l’encodage et le décodage s’exécutent localement dans votre navigateur.',
      },
      {
        question: 'Pourquoi échapper les caractères HTML ?',
        answer:
          'Les navigateurs interprètent <, > et & comme du balisage. Les échapper montre les caractères comme du texte visible à la place, ce qui est essentiel pour les exemples de code, le contenu utilisateur et les modèles sûrs.',
      },
      {
        question: 'Quelle est la différence entre les entités HTML nommées et numériques ?',
        answer:
          'Les entités nommées utilisent un nom lisible comme &copy; pour le symbole de copyright, tandis que les entités numériques utilisent un point de code comme &#169; ou &#xA9;. Les deux rendent le même caractère.',
      },
      {
        question: 'Quand encoder des caractères non ASCII en entités ?',
        answer:
          'Encodez-les quand une page ou un système d’e-mail ne prend pas en charge l’UTF-8 de façon fiable, ou quand vous avez besoin d’une sortie ASCII pure. Sur les pages UTF-8 modernes, les lettres accentuées et les symboles peuvent rester des caractères bruts.',
      },
      {
        question: 'À quoi ressemble du HTML doublement encodé ?',
        answer:
          'Le double encodage transforme &lt; en &amp;lt;, donc le navigateur affiche le texte littéral &lt; au lieu de <. Décodez une fois pour corriger, puis encodez une seule fois.',
      },
      {
        question: 'Puis-je décoder des entités HTML depuis des pages web récupérées ?',
        answer:
          'Oui. Collez le texte échappé d’un flux RSS, d’une API XML ou d’une page récupérée et décodez-le pour retrouver du texte brut lisible avec de vrais caractères.',
      },
      {
        question: 'Encoder des entités HTML empêche-t-il les attaques XSS ?',
        answer:
          'Échapper l’entrée utilisateur est une couche importante de défense XSS, mais ce n’est pas une solution complète à elle seule. Combinez-la toujours avec un encodage de sortie approprié, une validation et une politique de sécurité du contenu.',
      },
      {
        question: 'Quelle est l’entité HTML pour un espace insécable ?',
        answer:
          'L’espace insécable est &nbsp; ou &#160;. Il garde deux mots sur la même ligne et est couramment utilisé pour préserver l’espacement dans les mises en page HTML.',
      },
      {
        question: 'Comment échapper des guillemets à l’intérieur d’un attribut HTML ?',
        answer:
          'Utilisez &quot; pour les guillemets doubles et &#39; ou &apos; pour les guillemets simples. Échapper les guillemets empêche une valeur d’attribut de se terminer trop tôt et de casser votre balisage.',
      },
      {
        question: 'Cet outil peut-il encoder des émojis et d’autres symboles Unicode ?',
        answer:
          'Oui. Avec l’encodage non ASCII activé, les émojis et les symboles internationaux deviennent des entités numériques comme &#128512;. Avec cette option désactivée, ils restent des caractères Unicode bruts.',
      },
      {
        question: 'Quelle est la différence entre échapper du HTML et encoder une URL ?',
        answer:
          'L’échappement HTML convertit les caractères de balisage réservés en entités pour l’affichage dans les pages, tandis que l’encodage d’URL convertit les caractères en codes en pourcentage comme %20 pour une utilisation dans les liens et les chaînes de requête.',
      },
      {
        question: 'L’encodeur modifie-t-il les lettres et les chiffres normaux ?',
        answer:
          'Non. Les lettres brutes, les chiffres et la plupart des signes de ponctuation passent tels quels. Seuls les caractères réservés et, éventuellement, les symboles non ASCII sont convertis.',
      },
      {
        question: 'Pourquoi mon texte décodé affiche-t-il des caractères étranges ?',
        answer:
          'La source a probablement été encodée avec un jeu de caractères différent, ou une entité était mal formée. Essayez de décoder à nouveau depuis le texte échappé d’origine et vérifiez que la page déclare UTF-8.',
      },
      {
        question: 'Puis-je encoder un document HTML entier avec cet outil ?',
        answer:
          'Oui. Vous pouvez coller un document complet et l’encoder, mais le résultat est destiné à être affiché comme un exemple de code, pas à être enregistré comme une page web fonctionnelle.',
      },
      {
        question: 'Mon HTML collé est-il envoyé vers un serveur ?',
        answer:
          'Non. L’encodage et le décodage se font entièrement dans votre navigateur, donc votre code et votre texte ne quittent jamais votre appareil.',
      },
      {
        question: 'Quelle est l’entité HTML pour le caractère esperluette ?',
        answer:
          'L’esperluette elle-même est &amp; ou &#38;. Encodez toujours un & littéral en premier, parce qu’une esperluette non encodée peut faire mal interpréter par le navigateur les entités qui la suivent.',
      },
    ],
  },
  'json-csv-converter': {
    slug: 'convertisseur-json-csv',
    name: 'Convertisseur JSON en CSV / CSV en JSON',
    shortDescription:
      'Convertissez des tableaux JSON en feuilles de calcul CSV RFC 4180 et analysez des fichiers CSV entre guillemets en JSON propre.',
    keywords: [
      'json en csv',
      'csv en json',
      'convertisseur json csv',
      'convertir un tableau json en csv',
      'exporter json en csv',
      'json en csv en ligne gratuit',
      'convertisseur csv en json',
      'convertisseur json en tsv',
      'convertir csv en tableau json',
    ],
    seo: {
      title: 'Convertisseur JSON en CSV : JSON et CSV simple | UtilityFlow',
      description:
        'Convertissez des tableaux JSON en feuilles CSV propres avec aplatissement des objets imbriqués, ou analysez CSV et TSV en JSON structuré. Gratuit et local.',
      primaryKeyword: 'convertisseur json en csv',
      secondaryKeywords: ['convertisseur csv en json', 'exporter json en csv', 'tsv en json', 'json en csv en ligne gratuit'],
      longTailKeywords: ['convertir des objets json imbriqués en colonnes csv en ligne', 'analyser du csv entre guillemets avec virgules en tableau json', 'téléchargeur json en csv côté client', 'convertir un tableau json en feuille de calcul csv gratuitement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transformez des tableaux JSON d’API en feuilles de calcul CSV propres — en aplatissant automatiquement les clés d’objets imbriqués — ou analysez des fichiers CSV/TSV délimités avec des virgules entre guillemets en JSON formaté.',
    instructions: [
      {
        title: 'Choisissez le sens de conversion',
        description:
          'Sélectionnez JSON → CSV ou CSV → JSON et choisissez Virgule (,), Point-virgule (;) ou Tabulation (TSV) comme délimiteur.',
      },
      {
        title: 'Collez vos données JSON ou CSV',
        description:
          'Insérez les données dans l’éditeur de gauche ou cliquez sur Charger un exemple pour tester les champs entre guillemets.',
      },
      {
        title: 'Vérifiez les en-têtes de colonnes',
        description:
          'Examinez les en-têtes générés avant de convertir. Les objets imbriqués deviennent des colonnes séparées par des points comme adresse.ville, et les clés manquantes laissent des cellules vides.',
      },
      {
        title: 'Convertissez vos données',
        description:
          'Lancez la conversion et inspectez l’aperçu. Les virgules entre guillemets, les guillemets intégrés et les sauts de ligne à l’intérieur des cellules sont préservés exactement comme l’exige la RFC 4180.',
      },
      {
        title: 'Copiez ou téléchargez le résultat',
        description:
          'Copiez la sortie convertie ou téléchargez-la directement en fichier .csv ou .json.',
      },
      {
        title: 'Résolvez une erreur de conversion',
        description:
          'Si la conversion échoue, validez d’abord votre syntaxe JSON : vérifiez les virgules de fin, les guillemets manquants et les crochets non appariés. Pour le CSV, confirmez que vous avez choisi le délimiteur réellement utilisé par votre fichier.',
      },
    ],
    examples: [
      {
        title: 'Gérer les virgules à l’intérieur des valeurs CSV',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation:
          'Met automatiquement entre guillemets les champs contenant des délimiteurs ou des guillemets doubles selon la RFC 4180.',
      },
      {
        title: 'Convertir du CSV en tableau JSON',
        input: 'id,nom,ville\n1,Marie,Paris\n2,Jean,Lyon',
        output: '[{"id": 1, "nom": "Marie", "ville": "Paris"}, {"id": 2, "nom": "Jean", "ville": "Lyon"}]',
        explanation:
          'La première ligne devient les clés d’objet et chaque ligne suivante devient un objet JSON.',
      },
    ],
    benefits: [
      'Conversion bidirectionnelle JSON ↔ CSV dans un seul espace de travail',
      'Aplatit les objets JSON imbriqués en utilisant des en-têtes de colonnes en notation pointée',
      'Un analyseur RFC 4180 approprié préserve les virgules entre guillemets et les sauts de ligne intégrés',
      'Prend en charge les délimiteurs virgule, point-virgule (Excel européen) et tabulation',
    ],
    useCases: [
      'Exporter des listes JSON d’API REST vers Excel ou Google Sheets',
      'Convertir des exports de données de tableur en fichiers de données JSON pour des applications web',
      'Préparer des jeux de données TSV pour la science des données ou les imports SQL',
      'Inspecter proprement des exports CSV délimités par des points-virgules',
    ],
    faqs: [
      {
        question: 'Comment JSON en CSV gère-t-il les objets avec des propriétés imbriquées ?',
        answer:
          'Les objets imbriqués sont aplatis en noms de colonnes séparés par des points (par exemple, adresse.ville), et les tableaux sont sérialisés en chaînes JSON compactes.',
      },
      {
        question: 'Que se passe-t-il si différents objets JSON ont des clés légèrement différentes ?',
        answer:
          'Le convertisseur analyse tous les objets du tableau pour construire une union d’en-têtes de colonnes et laisse des cellules vides là où une clé est absente.',
      },
      {
        question: 'L’analyseur CSV casse-t-il si une cellule contient une virgule entre guillemets ?',
        answer:
          'Non. L’analyseur à machine à états suit précisément les cellules entre guillemets doubles et les guillemets "" échappés.',
      },
      {
        question: 'À quoi sert le Convertisseur JSON en CSV ?',
        answer:
          'Il transforme les données JSON des API et des applications en feuilles de calcul CSV que vous pouvez ouvrir dans Excel ou Google Sheets, et il reconvertit les fichiers CSV en JSON pour le code et les bases de données.',
      },
      {
        question: 'Le Convertisseur JSON en CSV est-il gratuit ?',
        answer:
          'Oui. Le Convertisseur JSON en CSV est entièrement gratuit sans inscription et sans limite d’utilisation. Toute la conversion s’exécute localement dans votre navigateur.',
      },
      {
        question: 'Puis-je convertir un seul objet JSON au lieu d’un tableau ?',
        answer:
          'Oui. Un seul objet est traité comme une ligne avec ses clés comme en-têtes de colonnes, donc vous obtenez quand même un fichier CSV valide avec une seule ligne de données.',
      },
      {
        question: 'Comment les tableaux JSON à l’intérieur des objets sont-ils convertis en CSV ?',
        answer:
          'Les valeurs de tableau sont sérialisées en chaînes JSON compactes à l’intérieur d’une seule cellule, donc les données sont préservées et peuvent être réanalysées en tableau plus tard.',
      },
      {
        question: 'Quel délimiteur choisir pour mon fichier CSV ?',
        answer:
          'Utilisez une virgule pour le CSV standard, un point-virgule pour les exports Excel européens où les virgules sont des séparateurs décimaux, et une tabulation pour les fichiers TSV utilisés dans les outils de données.',
      },
      {
        question: 'Le convertisseur préserve-t-il correctement les nombres et les booléens ?',
        answer:
          'Oui. Les nombres et les booléens sont écrits comme des valeurs brutes en CSV. Lors de la reconversion en JSON, les valeurs qui ressemblent à des nombres ou des booléens sont analysées dans leurs types JSON correspondants.',
      },
      {
        question: 'Que deviennent les valeurs vides ou nulles en JSON vers CSV ?',
        answer:
          'Les chaînes vides, les valeurs nulles et les clés manquantes deviennent toutes des cellules vides dans le CSV, ce qui garde les lignes alignées avec les en-têtes de colonnes.',
      },
      {
        question: 'Puis-je reconvertir du CSV en JSON avec cet outil ?',
        answer:
          'Oui. Basculez en mode CSV vers JSON, collez vos données CSV ou TSV et choisissez le délimiteur. La première ligne devient les clés d’objet et chaque ligne suivante devient un objet JSON.',
      },
      {
        question: 'Pourquoi mon CSV s’ouvre-t-il avec toutes les données dans une seule colonne Excel ?',
        answer:
          'Excel attend peut-être un délimiteur différent de celui utilisé par votre fichier. Réexportez avec un délimiteur virgule, ou utilisez l’option point-virgule pour les paramètres régionaux européens.',
      },
      {
        question: 'Le Convertisseur JSON en CSV gère-t-il les gros fichiers ?',
        answer:
          'Oui, dans les limites de la mémoire du navigateur. La conversion s’exécute localement, donc de très grands jeux de données peuvent prendre quelques secondes, mais vos données ne sont jamais envoyées vers un serveur.',
      },
      {
        question: 'Mes données JSON ou CSV sont-elles envoyées vers un serveur ?',
        answer:
          'Non. La conversion se fait entièrement dans l’onglet de votre navigateur, donc vos données restent sur votre appareil et sont supprimées quand vous fermez l’onglet.',
      },
      {
        question: 'Qu’est-ce que la RFC 4180 et pourquoi est-elle importante pour le CSV ?',
        answer:
          'La RFC 4180 est le format standard des fichiers CSV. Elle définit comment les champs avec des virgules, des guillemets ou des sauts de ligne doivent être enveloppés entre guillemets doubles, ce qui permet aux applications de tableur de lire votre fichier correctement.',
      },
      {
        question: 'Puis-je convertir des fichiers TSV en JSON ?',
        answer:
          'Oui. Choisissez le délimiteur Tabulation (TSV) en mode CSV vers JSON et collez vos données séparées par des tabulations. Les tabulations sont courantes dans les exports de données et fonctionnent comme les virgules.',
      },
      {
        question: 'Pourquoi ma conversion JSON en CSV a-t-elle échoué ?',
        answer:
          'Les causes les plus courantes sont du JSON invalide, comme des virgules de fin ou des guillemets manquants, et le collage d’un objet JSON qui n’est pas un tableau d’objets. Corrigez la syntaxe et réessayez.',
      },
      {
        question: 'Comment exporter des données JSON d’API vers Excel ?',
        answer:
          'Copiez le tableau JSON de votre réponse d’API, collez-le ici, convertissez en CSV et téléchargez le fichier. Ouvrez le CSV téléchargé directement dans Excel ou importez-le dans Google Sheets.',
      },
      {
        question: 'Le convertisseur conserve-t-il l’ordre d’origine de mes clés JSON ?',
        answer:
          'L’ordre des colonnes suit l’ordre dans lequel les clés apparaissent pour la première fois dans vos objets. Le premier objet définit l’ordre initial et les nouvelles clés des objets suivants sont ajoutées.',
      },
      {
        question: 'Puis-je télécharger le fichier converti au lieu de le copier ?',
        answer:
          'Oui. Utilisez le bouton de téléchargement pour enregistrer le résultat en fichier .csv ou .json sur votre appareil, prêt à ouvrir dans un tableur ou à importer dans votre application.',
      },
    ],
  },
  'unix-timestamp-converter': {
    slug: 'convertisseur-horodatage-unix',
    name: 'Convertisseur d’Horodatage Unix',
    shortDescription:
      'Convertissez des secondes ou millisecondes d’époque Unix en dates ISO 8601, UTC et locales — et inversement.',
    keywords: [
      'convertisseur d’horodatage unix',
      'convertisseur d’époque',
      'époque en date',
      'horodatage en iso 8601',
      'convertisseur de temps unix',
      'convertir l’époque en date',
      'date en horodatage unix',
      'heure unix actuelle',
      'convertisseur d’époque en millisecondes',
    ],
    seo: {
      title: 'Convertisseur d’Horodatage Unix : époque-date | UtilityFlow',
      description:
        'Convertissez des horodatages Unix en secondes ou millisecondes en ISO 8601, UTC, RFC 2822 et heure locale, ou en temps Unix. Gratuit, dans votre navigateur.',
      primaryKeyword: 'convertisseur d’horodatage unix',
      secondaryKeywords: ['convertisseur d’époque', 'temps unix en date', 'date en horodatage unix', 'convertisseur d’époque en millisecondes'],
      longTailKeywords: ['convertir des millisecondes d’époque unix en date iso 8601', 'horodatage unix actuel en direct en secondes', 'convertir une date et une heure locales en époque unix', 'horodatage unix en date utc en ligne gratuitement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convertissez des entiers d’époque Unix (secondes ou millisecondes) en chaînes ISO 8601, UTC et de fuseau horaire local avec des décalages relatifs, ou transformez n’importe quelle date et heure de calendrier en horodatage d’époque.',
    instructions: [
      {
        title: 'Consultez ou copiez l’heure Unix actuelle',
        description:
          'Utilisez le compteur en direct en haut pour récupérer l’époque Unix actuelle en secondes.',
      },
      {
        title: 'Convertir Horodatage Unix → Date lisible',
        description:
          'Saisissez n’importe quelle époque numérique ; le mode Auto détecte automatiquement les secondes par rapport aux millisecondes, ou forcez une unité.',
      },
      {
        title: 'Examinez les formats ISO, UTC et locaux',
        description:
          'Comparez les sorties ISO 8601, UTC, RFC 2822 et d’heure locale côte à côte, ainsi que le temps relatif comme il y a 2 heures, pour choisir le format dont vous avez besoin.',
      },
      {
        title: 'Convertir Date et heure locales → Horodatage Unix',
        description:
          'Choisissez une date et une heure dans le panneau inférieur pour obtenir les secondes exactes, les millisecondes et la sortie ISO 8601.',
      },
      {
        title: 'Copiez l’horodatage dont vous avez besoin',
        description:
          'Copiez la valeur en secondes pour les API et les bases de données, la valeur en millisecondes pour les objets Date JavaScript, ou la chaîne ISO pour les journaux et le JSON.',
      },
      {
        title: 'Résolvez une date qui semble erronée',
        description:
          'Si la date tombe en 1970 ou en l’an 5000, vous avez probablement confondu secondes et millisecondes. Basculez le sélecteur d’unité d’Auto à l’unité correcte et convertissez à nouveau.',
      },
    ],
    examples: [
      {
        title: 'Détecter secondes contre millisecondes',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (secondes)',
        explanation:
          'Les nombres à 10 chiffres sont interprétés comme des secondes ; les nombres à 13 chiffres comme des millisecondes.',
      },
      {
        title: 'Convertir une date locale en horodatage Unix',
        input: 'Date : 2026-11-13 04:40:00 (heure locale)',
        output: 'Secondes : 1794544800 · Millisecondes : 1794544800000',
        explanation:
          'Le sélecteur de date produit les secondes et les millisecondes exactes pour la date choisie.',
      },
    ],
    benefits: [
      'Horloge Unix en direct synchronisée avec l’heure de votre système',
      'Détection automatique secondes contre millisecondes avec remplacement manuel',
      'Produit ensemble ISO 8601, heure locale, RFC 2822 GMT et temps relatif',
      'Inclut un convertisseur bidirectionnel de sélecteur de date vers secondes/ms Unix',
    ],
    useCases: [
      'Inspecter les revendications JWT `iat` / `exp` et les horodatages created_at d’API',
      'Déboguer des horodatages entiers de base de données dans PostgreSQL ou SQLite',
      'Générer des horodatages d’époque futurs pour des TTL de cache ou des tests',
      'Convertir des marqueurs d’époque de fichiers journaux en heures locales lisibles',
    ],
    faqs: [
      {
        question: 'Comment le mode Auto distingue-t-il les secondes des millisecondes ?',
        answer:
          'Les valeurs de magnitude ≥ 100 000 000 000 (1e11, environ 1973 en millisecondes ou l’an 5138 en secondes) sont traitées comme des millisecondes ; les valeurs plus petites sont traitées comme des secondes.',
      },
      {
        question: 'Le temps Unix est-il affecté par les fuseaux horaires ?',
        answer:
          'Non. Le temps d’époque Unix mesure toujours les secondes écoulées depuis 1970-01-01T00:00:00Z (UTC), quel que soit votre fuseau horaire local.',
      },
      {
        question: 'Puis-je convertir des horodatages antérieurs à 1970 ?',
        answer:
          'Oui. Saisissez un horodatage Unix négatif (comme -86400 pour le 31 décembre 1969) pour inspecter des dates antérieures à 1970.',
      },
      {
        question: 'Qu’est-ce qu’un horodatage Unix ?',
        answer:
          'Un horodatage Unix, aussi appelé temps d’époque, est le nombre de secondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC. C’est une façon simple pour les ordinateurs de stocker les dates sous forme d’un seul nombre.',
      },
      {
        question: 'Le Convertisseur d’Horodatage Unix est-il gratuit ?',
        answer:
          'Oui. Le Convertisseur d’Horodatage Unix est entièrement gratuit sans inscription et sans limite d’utilisation. Toute la conversion s’exécute localement dans votre navigateur.',
      },
      {
        question: 'Quelle est la différence entre les secondes Unix et les millisecondes ?',
        answer:
          'Les secondes Unix comptent les secondes entières depuis 1970 et font généralement 10 chiffres, tandis que les millisecondes comptent les millièmes de seconde et font généralement 13 chiffres. Les objets Date JavaScript utilisent les millisecondes.',
      },
      {
        question: 'Quel est l’horodatage Unix actuel en ce moment ?',
        answer:
          'Le compteur en direct en haut de cet outil défile chaque seconde et affiche l’heure Unix actuelle en secondes. Copiez-le quand vous avez besoin de la valeur exacte pour des tests ou des journaux.',
      },
      {
        question: 'Comment convertir un horodatage Unix en date lisible ?',
        answer:
          'Collez le nombre d’époque dans le convertisseur et il montre la date correspondante en ISO 8601, UTC, RFC 2822 et votre fuseau horaire local, ainsi qu’un temps relatif comme il y a 3 jours.',
      },
      {
        question: 'Comment convertir une date en horodatage Unix ?',
        answer:
          'Utilisez le sélecteur de date et d’heure dans le panneau inférieur, puis lisez les secondes et millisecondes Unix exactes pour la date sélectionnée dans votre fuseau horaire local.',
      },
      {
        question: 'Pourquoi mon horodatage affiche-t-il une date en 1970 ?',
        answer:
          'Vous avez probablement saisi une valeur en millisecondes alors que l’outil attendait des secondes, ou un très petit nombre. Une petite valeur signifie seulement quelques secondes après le début de l’époque 1970.',
      },
      {
        question: 'Pourquoi mon horodatage affiche-t-il une date en l’an 5000 ?',
        answer:
          'Vous avez probablement saisi une valeur en secondes alors que l’outil la traitait comme des millisecondes, ou saisi des millisecondes dans un champ de secondes. Basculez le sélecteur d’unité vers l’unité correcte et convertissez à nouveau.',
      },
      {
        question: 'Quel est le format ISO 8601 pour un horodatage Unix ?',
        answer:
          'L’ISO 8601 écrit une date sous la forme AAAA-MM-JJTHH:MM:SS, par exemple 2026-11-13T04:40:00.000Z. Le Z final signifie que l’heure est en UTC.',
      },
      {
        question: 'Les horodatages Unix incluent-ils les secondes intercalaires ?',
        answer:
          'Non. Le temps Unix compte chaque jour comme exactement 86 400 secondes et ignore les secondes intercalaires, donc il dérive légèrement du vrai temps astronomique sur de longues périodes.',
      },
      {
        question: 'Puis-je utiliser des horodatages Unix pour des dates futures ?',
        answer:
          'Oui. Saisissez une date future dans le sélecteur de date pour obtenir son horodatage Unix, ce qui est pratique pour définir des délais d’expiration de cache, des tâches planifiées et des données de test.',
      },
      {
        question: 'Quel est l’horodatage Unix maximal ?',
        answer:
          'Sur les systèmes 32 bits, la limite classique est de 2 147 483 647 secondes, soit le 19 janvier 2038. Les systèmes modernes 64 bits gèrent des valeurs bien plus grandes, et cet outil les accepte.',
      },
      {
        question: 'Comment vérifier un horodatage d’expiration JWT avec ce convertisseur ?',
        answer:
          'Copiez la revendication exp de votre JWT décodé et collez-la ici. Le convertisseur montre la date et l’heure UTC exactes d’expiration du jeton.',
      },
      {
        question: 'Le Convertisseur d’Horodatage Unix fonctionne-t-il hors ligne ?',
        answer:
          'Oui, une fois la page chargée. La conversion est une simple arithmétique dans votre navigateur, et l’horloge en direct lit l’heure de votre système, donc aucune connexion réseau n’est nécessaire.',
      },
      {
        question: 'Quelle est la différence entre UTC et l’heure locale dans les résultats ?',
        answer:
          'UTC est le temps de référence universel sans décalage, tandis que l’heure locale applique le décalage de votre fuseau horaire. Les deux décrivent le même instant, simplement montré dans des zones différentes.',
      },
      {
        question: 'Puis-je convertir un horodatage Unix depuis une base de données ou un fichier journal ?',
        answer:
          'Oui. Copiez l’horodatage entier depuis votre ligne de base de données ou de journal et collez-le ici pour voir la date lisible, ce qui rend le débogage beaucoup plus rapide.',
      },
      {
        question: 'Mes données d’horodatage sont-elles envoyées vers un serveur ?',
        answer:
          'Non. La conversion se fait entièrement dans votre navigateur, donc les horodatages et les dates que vous saisissez ne quittent jamais votre appareil.',
      },
    ],
  },
  'sql-formatter': {
    slug: 'formateur-sql',
    name: 'Formateur SQL',
    shortDescription:
      'Formatez, indentez et standardisez des requêtes SQL avec des mots-clés en majuscules/minuscules ou minifiez des requêtes sur une ligne.',
    keywords: [
      'formateur sql',
      'embellisseur sql',
      'formater une requête sql',
      'minifieur sql',
      'formater sql en ligne',
      'embellisseur de requête sql',
      'imprimer sql proprement',
      'formateur sql en ligne',
      'indenter une requête sql',
    ],
    seo: {
      title: 'Formateur SQL : embellir et minifier | UtilityFlow',
      description:
        'Formatez des requêtes SQL désordonnées avec des sauts de clause propres et une indentation de 2/4 espaces, ou minifiez-les sur une ligne, dans votre navigateur.',
      primaryKeyword: 'formateur sql',
      secondaryKeywords: ['embellisseur sql en ligne', 'imprimer sql proprement', 'minifieur sql', 'formater une requête sql en ligne'],
      longTailKeywords: ['formater une requête sql select join group by en ligne', 'convertir les mots-clés sql en majuscules proprement', 'minifier une requête sql en préservant les littéraux de chaîne', 'indenter une requête sql avec 2 ou 4 espaces en ligne'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transformez des requêtes SQL denses sur une seule ligne en instructions lisibles et structurées avec un alignement clair des clauses `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` et `ORDER BY`, tout en préservant les chaînes entre guillemets et les commentaires.',
    instructions: [
      {
        title: 'Collez votre requête SQL',
        description:
          'Insérez n’importe quelle requête SELECT, INSERT, UPDATE, DELETE ou DDL dans le champ Requête SQL brute, y compris des instructions multi-lignes ou sur une seule ligne.',
      },
      {
        title: 'Choisissez le mode Embellir ou Minifier',
        description:
          'Sélectionnez Embellir pour développer la requête en clauses indentées lisibles, ou Minifier pour la réduire en une seule ligne pour les journaux et le code.',
      },
      {
        title: 'Définissez la casse des mots-clés et l’indentation',
        description:
          'Choisissez des mots-clés SQL en MAJUSCULES ou en minuscules et une indentation de 2 ou 4 espaces pour correspondre à votre guide de style d’équipe.',
      },
      {
        title: 'Examinez la sortie formatée',
        description:
          'Vérifiez que les sauts de clause, les JOIN et les sous-requêtes sont alignés comme prévu et que les chaînes et les commentaires sont intacts.',
      },
      {
        title: 'Copiez ou réutilisez le SQL formaté',
        description:
          'Utilisez Copier le SQL pour transférer la requête standardisée dans votre éditeur, votre fichier de migration ou votre pull request.',
      },
      {
        title: 'Corrigez les problèmes de formatage',
        description:
          'Si la sortie semble erronée, vérifiez les guillemets déséquilibrés ou un point-virgule manquant dans votre entrée, puis recollez et formatez à nouveau.',
      },
    ],
    examples: [
      {
        title: 'Formater une requête multi-jointures',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation:
          'Sépare les clauses SQL principales sur des lignes dédiées et normalise la casse des mots-clés.',
      },
      {
        title: 'Minifier une requête pour un journal',
        input: 'SELECT id, name\nFROM users\nWHERE active = 1;',
        output: 'SELECT id, name FROM users WHERE active = 1;',
        explanation:
          'Réduit une requête multi-lignes en une seule ligne tout en préservant les littéraux de chaîne.',
      },
    ],
    benefits: [
      'Préserve intacts les littéraux de chaîne entre guillemets simples et les commentaires SQL',
      'Prend en charge les clauses multi-mots comme LEFT OUTER JOIN, GROUP BY et ORDER BY',
      'Bascule sans effort entre les modes Embellir et Minifier',
      'Fonctionne localement pour que les noms de tables et de schémas propriétaires restent privés',
    ],
    useCases: [
      'Nettoyer les journaux SQL générés par ORM pour le débogage de performances',
      'Standardiser les scripts SQL avant les révisions de pull request',
      'Compacter des requêtes multi-lignes en chaînes sur une seule ligne pour des scripts CLI',
      'Aligner la casse des mots-clés dans les guides de style SQL d’équipe',
    ],
    faqs: [
      {
        question: 'Le Formateur SQL modifiera-t-il les noms de table ou le texte entre guillemets ?',
        answer:
          'Non. Le tokeniseur isole les littéraux de chaîne et les commentaires pour que le formatage en majuscules/minuscules des mots-clés ne s’applique qu’aux mots-clés SQL reconnus.',
      },
      {
        question: 'Quels dialectes SQL sont pris en charge ?',
        answer:
          'Les clauses SQL ANSI standard (PostgreSQL, MySQL, SQLite, SQL Server) incluant SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE et DELETE sont prises en charge.',
      },
      {
        question: 'Puis-je minifier une requête formatée en une seule ligne ?',
        answer:
          'Oui. Basculez la bascule de mode sur Minifier pour supprimer les commentaires et réduire en toute sécurité les espaces supplémentaires.',
      },
      {
        question: 'Le Formateur SQL est-il gratuit ?',
        answer:
          'Oui. Le Formateur SQL est entièrement gratuit sans inscription, et il fonctionne entièrement dans votre navigateur.',
      },
      {
        question: 'Le Formateur SQL envoie-t-il mes requêtes vers un serveur ?',
        answer:
          'Non. Tout le formatage se fait localement dans votre navigateur, donc les noms de table, les détails de schéma et les valeurs de données de vos requêtes ne quittent jamais votre appareil.',
      },
      {
        question: 'Puis-je formater du SQL avec des sous-requêtes et des CTE ?',
        answer:
          'Oui. Les instructions SELECT imbriquées et les expressions de table communes (WITH ... AS) sont formatées avec leurs propres niveaux d’indentation pour que la structure reste lisible.',
      },
      {
        question: 'Le Formateur SQL gère-t-il les instructions INSERT, UPDATE et DELETE ?',
        answer:
          'Oui. Les instructions INSERT, UPDATE et DELETE sont formatées avec les requêtes SELECT, avec leurs clauses séparées sur des lignes distinctes.',
      },
      {
        question: 'Puis-je formater des instructions DDL comme CREATE TABLE ?',
        answer:
          'Oui. Les instructions DDL comme CREATE TABLE, ALTER TABLE et DROP TABLE peuvent être collées et formatées avec les mêmes règles de casse des mots-clés et d’indentation.',
      },
      {
        question: 'Quelles options d’indentation le Formateur SQL offre-t-il ?',
        answer:
          'Vous pouvez choisir une indentation de 2 ou 4 espaces pour les requêtes embellies, pour que la sortie corresponde à votre éditeur ou à votre guide de style d’équipe.',
      },
      {
        question: 'Le formatage change-t-il ce que fait ma requête SQL ?',
        answer:
          'Non. Le formatage ne modifie que les espaces et la casse des mots-clés ; il n’ajoute, ne supprime ni ne réordonne aucune partie de la logique de la requête.',
      },
      {
        question: 'Puis-je formater plusieurs requêtes SQL à la fois ?',
        answer:
          'Oui. Vous pouvez coller plusieurs instructions séparées par des points-virgules et les formater ensemble en un seul passage.',
      },
      {
        question: 'Le Formateur SQL fonctionne-t-il avec la syntaxe MySQL, PostgreSQL et SQL Server ?',
        answer:
          'Oui. Il gère le SQL ANSI standard utilisé par MySQL, PostgreSQL, SQLite et SQL Server, y compris leurs mots-clés de clause courants.',
      },
      {
        question: 'Les commentaires de mon SQL seront-ils préservés lors du formatage ?',
        answer:
          'Oui. Les commentaires sur une seule ligne et en bloc sont préservés par le tokeniseur, même si le mode Minifier supprime les commentaires pour produire la plus petite sortie.',
      },
      {
        question: 'Que se passe-t-il si mon SQL contient une erreur de syntaxe ?',
        answer:
          'Le formateur traite quand même le texte au mieux, car il travaille sur des jetons plutôt que d’exécuter la requête, mais vous devriez corriger l’erreur avant d’exécuter le SQL dans votre base de données.',
      },
      {
        question: 'Puis-je minifier du SQL pour l’utiliser dans du code d’application ou des journaux ?',
        answer:
          'Oui. Le mode Minifier réduit une requête à une ligne tout en préservant les littéraux de chaîne, ce qui est idéal pour intégrer du SQL dans du code ou le journaliser de façon compacte.',
      },
      {
        question: 'Le Formateur SQL prend-il en charge les fonctions de fenêtre ?',
        answer:
          'Oui. Les fonctions de fenêtre comme ROW_NUMBER() OVER (PARTITION BY ...) sont formatées dans la liste SELECT avec leurs clauses OVER intactes.',
      },
      {
        question: 'Y a-t-il une limite de taille sur le SQL que je peux formater ?',
        answer:
          'Il n’y a pas de limite de caractères fixe dans l’outil, car il fonctionne dans votre navigateur, même si de très longues requêtes peuvent prendre un moment sur des appareils plus lents.',
      },
      {
        question: 'Puis-je utiliser le Formateur SQL sur mon téléphone ?',
        answer:
          'Oui. Il fonctionne dans n’importe quel navigateur mobile moderne, donc vous pouvez coller et formater du SQL sur votre téléphone ou votre tablette sans rien installer.',
      },
      {
        question: 'Le Formateur SQL préserve-t-il les sauts de ligne à l’intérieur des littéraux de chaîne ?',
        answer:
          'Oui. Le texte à l’intérieur des littéraux de chaîne entre guillemets simples est laissé intact, donc les chaînes multi-lignes conservent leurs sauts de ligne d’origine.',
      },
      {
        question: 'Comment standardiser la casse des mots-clés dans mon équipe avec le Formateur SQL ?',
        answer:
          'Mettez-vous d’accord sur un style de casse, comme des mots-clés en MAJUSCULES, et passez chaque requête dans le formateur avec ce réglage avant de la valider dans votre dépôt.',
      },
    ],
  },
  'css-minifier': {
    slug: 'minifieur-css',
    name: 'Minifieur et Embellisseur CSS',
    shortDescription:
      'Minifiez des feuilles de style CSS pour réduire la taille du bundle ou embellissez des règles CSS compressées avec une indentation propre.',
    keywords: [
      'minifieur css',
      'embellisseur css',
      'compresser css en ligne',
      'formater css',
      'compresseur css',
      'minifier css en ligne',
      'déminifier css',
      'formateur css',
      'réduire la taille d’un fichier css',
    ],
    seo: {
      title: 'Minifieur CSS et Embellisseur : compresser CSS | UtilityFlow',
      description:
        'Minifiez le CSS en supprimant commentaires et espaces superflus, avec des statistiques d’économie d’octets, ou embellissez des feuilles minifiées, en ligne.',
      primaryKeyword: 'minifieur css',
      secondaryKeywords: ['embellisseur css', 'compresser css', 'formateur css en ligne', 'minifier css en ligne'],
      longTailKeywords: ['minifier le css en préservant les chaînes entre guillemets et les media queries', 'déminifier une feuille de style css compressée en ligne', 'calculer le pourcentage de compression css dans le navigateur', 'réduire la taille d’un fichier css avant déploiement'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compressez des feuilles de style CSS en supprimant les commentaires, les espaces redondants et les points-virgules de fin avant les accolades fermantes — ou développez du CSS minifié sur une ligne en blocs indentés lisibles.',
    instructions: [
      {
        title: 'Sélectionnez Minifier ou Embellir',
        description:
          'Choisissez Minifier le CSS pour réduire le poids du fichier pour la production ou Embellir le CSS pour restaurer l’indentation d’une feuille de style compressée.',
      },
      {
        title: 'Collez votre feuille de style',
        description:
          'Saisissez des règles CSS, des propriétés personnalisées ou des blocs `@media` dans le champ CSS d’entrée, y compris des feuilles de style complètes ou des extraits uniques.',
      },
      {
        title: 'Lancez l’outil et vérifiez les statistiques',
        description:
          'La sortie se met à jour pendant que vous tapez ; en mode Minifier, vérifiez les octets d’entrée exacts, les octets de sortie et le pourcentage économisé.',
      },
      {
        title: 'Examinez attentivement la sortie',
        description:
          'Confirmez que les blocs @media, les chaînes entre guillemets et les valeurs url(...) ont survécu intacts et que les règles imbriquées sont indentées correctement en mode Embellir.',
      },
      {
        title: 'Copiez ou téléchargez le CSS',
        description:
          'Cliquez sur Copier le CSS pour coller le résultat dans votre feuille de style, votre bloc <style> en ligne ou votre étape de build de déploiement.',
      },
      {
        title: 'Corrigez une sortie plate ou cassée',
        description:
          'Si la sortie d’Embellir semble plate ou si les règles fusionnent, vérifiez une accolade fermante manquante dans votre entrée et ajoutez-la avant de réessayer.',
      },
    ],
    examples: [
      {
        title: 'Compresser une règle de carte',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation:
          'Supprime les sauts de ligne, les espaces autour de la ponctuation et le point-virgule final à l’intérieur du bloc.',
      },
      {
        title: 'Embellir du CSS minifié',
        input: '.card{padding:16px}.card h2{font-size:18px}',
        output: '.card {\n  padding: 16px;\n}\n.card h2 {\n  font-size: 18px;\n}',
        explanation:
          'Développe le CSS compressé en règles indentées et lisibles pour le débogage.',
      },
    ],
    benefits: [
      'Le tokeniseur préserve les chaînes entre guillemets (comme content: "..." ou url(...))',
      'Supprime en toute sécurité les commentaires /* ... */ et les espaces inutiles',
      'Affiche les octets d’entrée exacts, les octets de sortie et le pourcentage économisé',
      'Inclut le mode Embellir pour inspecter le CSS minifié de tiers',
    ],
    useCases: [
      'Compresser des extraits <style> en ligne pour des e-mails HTML et des pages de destination',
      'Déminifier des bundles CSS de production pendant le débogage visuel',
      'Vérifier les économies de poids de feuille de style avant déploiement',
      'Nettoyer les incohérences d’espacement dans les feuilles de style héritées',
    ],
    faqs: [
      {
        question: 'La minification CSS casse-t-elle les espaces à l’intérieur des chaînes content: "..." ?',
        answer:
          'Non. Les littéraux de chaîne entre guillemets simples et doubles sont préservés textuellement par le tokeniseur.',
      },
      {
        question: 'Pourquoi Minifier supprime-t-il le dernier point-virgule avant « } » ?',
        answer:
          'Dans la syntaxe CSS, la dernière déclaration avant une accolade fermante ne nécessite pas de point-virgule de fin, ce qui économise 1 octet par bloc de règle.',
      },
      {
        question: 'Prend-il en charge les blocs @media imbriqués en mode Embellir ?',
        answer:
          'Oui. La profondeur des accolades est suivie dans les blocs @media et @supports pour que les règles internes s’indentent correctement.',
      },
      {
        question: 'Le Minifieur CSS est-il gratuit ?',
        answer:
          'Oui. Le Minifieur CSS est entièrement gratuit sans inscription, et il fonctionne entièrement dans votre navigateur.',
      },
      {
        question: 'Le Minifieur CSS envoie-t-il ma feuille de style quelque part ?',
        answer:
          'Non. Toute la minification et l’embellissement se font localement dans votre navigateur, donc votre CSS ne quitte jamais votre appareil.',
      },
      {
        question: 'De combien mon CSS sera-t-il plus petit après minification ?',
        answer:
          'Cela dépend du nombre de commentaires et d’espaces supplémentaires que contient votre feuille de style ; l’outil montre le nombre d’octets exact et le pourcentage économisé pour votre entrée.',
      },
      {
        question: 'La minification CSS supprime-t-elle les requêtes @media ?',
        answer:
          'Non. Les requêtes @media et leurs conditions sont préservées exactement, car les supprimer changerait la façon dont votre page répond aux tailles d’écran.',
      },
      {
        question: 'Puis-je minifier du CSS qui utilise des propriétés personnalisées (variables) ?',
        answer:
          'Oui. Les propriétés personnalisées comme --brand-color et leurs références var() sont traitées comme des déclarations normales et conservées intactes.',
      },
      {
        question: 'Le Minifieur CSS préserve-t-il url(...) et les chaînes de content ?',
        answer:
          'Oui. Les chaînes entre guillemets à l’intérieur de url(...) et des propriétés content sont préservées textuellement, donc les chemins d’images et le texte généré restent corrects.',
      },
      {
        question: 'Le CSS minifié fonctionnera-t-il toujours dans tous les navigateurs ?',
        answer:
          'Oui. La minification ne supprime que les commentaires et les espaces inutiles, que les navigateurs ignorent de toute façon, donc le résultat rendu est identique.',
      },
      {
        question: 'Puis-je embellir du CSS provenant d’un bundle de production ?',
        answer:
          'Oui. Collez n’importe quelle feuille de style minifiée en mode Embellir pour la développer en règles indentées et lisibles pour le débogage.',
      },
      {
        question: 'Le Minifieur CSS gère-t-il @keyframes et @font-face ?',
        answer:
          'Oui. Les règles at comme @keyframes, @font-face et @import sont préservées, avec leurs blocs internes indentés correctement en mode Embellir.',
      },
      {
        question: 'Quelle est la différence entre minifier et embellir dans le Minifieur CSS ?',
        answer:
          'Minifier réduit le CSS en supprimant les commentaires et les espaces pour la production, tandis qu’Embellir développe le CSS compressé en règles indentées lisibles pour l’édition et le débogage.',
      },
      {
        question: 'Puis-je minifier plusieurs feuilles de style à la fois ?',
        answer:
          'Oui. Vous pouvez coller plusieurs feuilles de style ensemble dans une seule entrée, même si garder les fichiers liés séparés rend la sortie plus facile à gérer.',
      },
      {
        question: 'Le Minifieur CSS supprime-t-il les règles CSS inutilisées ?',
        answer:
          'Non. Il ne supprime que les commentaires et les espaces ; il n’analyse pas quels sélecteurs votre HTML utilise, donc les règles inutilisées restent dans la sortie.',
      },
      {
        question: 'Le pourcentage d’économie d’octets affiché par le Minifieur CSS est-il exact ?',
        answer:
          'Oui. Il est calculé à partir des nombres d’octets réels de votre entrée et de votre sortie, donc le pourcentage reflète vos économies réelles.',
      },
      {
        question: 'Puis-je utiliser le Minifieur CSS pour des extraits <style> en ligne ?',
        answer:
          'Oui. Les petits extraits se minifient comme les feuilles de style complètes, ce qui est utile pour les e-mails HTML et les pages de destination avec des styles en ligne.',
      },
      {
        question: 'Le Minifieur CSS prend-il en charge le CSS moderne comme grid et l’imbrication ?',
        answer:
          'Oui. Les propriétés modernes comme grid et flexbox passent telles quelles, et les règles imbriquées sont indentées par profondeur d’accolade en mode Embellir.',
      },
      {
        question: 'Que se passe-t-il si mon CSS contient une erreur de syntaxe ?',
        answer:
          'L’outil traite quand même le texte, mais une accolade manquante ou une chaîne non fermée peut perturber la sortie, donc corrigez les erreurs de syntaxe avant de minifier pour la production.',
      },
      {
        question: 'Puis-je minifier du CSS sur mon téléphone ?',
        answer:
          'Oui. Le Minifieur CSS fonctionne dans n’importe quel navigateur mobile moderne, donc vous pouvez coller et minifier des feuilles de style sans rien installer.',
      },
    ],
  },
  'js-formatter': {
    slug: 'formateur-javascript',
    name: 'Minifieur et Formateur JavaScript / TypeScript',
    shortDescription:
      'Minifiez des extraits JavaScript en supprimant les commentaires et les espaces superflus ou embellissez des blocs de code compacts.',
    keywords: [
      'minifieur javascript',
      'formateur js',
      'embellisseur js',
      'compresser javascript en ligne',
      'formateur javascript',
      'minifieur js en ligne',
      'embellir javascript',
      'minifieur typescript',
      'formateur de code js',
    ],
    seo: {
      title: 'Minifieur JavaScript : compresser le JS | UtilityFlow',
      description:
        'Minifiez JavaScript et TypeScript en supprimant commentaires et espaces en toute sécurité, ou embellissez du code compact — gratuit, dans votre navigateur.',
      primaryKeyword: 'minifieur javascript',
      secondaryKeywords: ['embellisseur js', 'formater javascript en ligne', 'compresseur js', 'formateur javascript'],
      longTailKeywords: ['minifier un extrait javascript en préservant les chaînes et les littéraux de modèle', 'déminifier du code javascript compact avec indentation', 'formateur et minifieur js côté client', 'embellir du code javascript avec une indentation de 2 ou 4 espaces'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compactez des extraits JavaScript pour des bookmarklets et des scripts en ligne en supprimant les commentaires et l’espacement superflu — tout en gardant intacts les littéraux de chaîne — ou ré-indentez proprement du code compressé.',
    instructions: [
      {
        title: 'Choisissez Minifier JS ou Embellir JS',
        description:
          'Choisissez Minifier JS pour supprimer les commentaires et les espaces pour une sortie compacte, ou Embellir JS avec 2 ou 4 espaces pour restaurer une indentation lisible.',
      },
      {
        title: 'Collez votre extrait de code',
        description:
          'Insérez du code JavaScript ou TypeScript dans l’éditeur de gauche, d’une seule fonction à un bloc de script complet.',
      },
      {
        title: 'Définissez l’indentation pour le mode Embellir',
        description:
          'Choisissez une indentation de 2 ou 4 espaces pour que le code embelli corresponde à votre éditeur ou au style de votre projet.',
      },
      {
        title: 'Examinez les économies d’octets et la sortie',
        description:
          'Vérifiez la réduction d’octets en mode Minifier et parcourez la sortie pour confirmer que les chaînes, les littéraux de modèle et les motifs regex sont intacts.',
      },
      {
        title: 'Copiez le code traité',
        description:
          'Utilisez le bouton de copie pour déplacer le code minifié ou embelli dans votre éditeur, votre bookmarklet ou votre script en ligne.',
      },
      {
        title: 'Corrigez les problèmes de minification',
        description:
          'Si le code minifié se comporte bizarrement, ajoutez d’abord les points-virgules manquants à votre entrée, car l’insertion automatique de point-virgule peut être ambiguë après la suppression des espaces.',
      },
    ],
    examples: [
      {
        title: 'Supprimer les commentaires et les espaces',
        input: '// Aide\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation:
          'Supprime les commentaires et les espaces autour des accolades sans toucher à la logique.',
      },
      {
        title: 'Embellir du code compact',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation:
          'Ré-indente le code sur une seule ligne en lignes lisibles pour le débogage.',
      },
    ],
    benefits: [
      'Le tokeniseur lexical protège les chaînes simples, doubles et de modèle entre backticks',
      'Supprime les commentaires // sur une seule ligne et /* */ en bloc en mode Minifier',
      'Signale le pourcentage de réduction d’octets en direct',
      'Exécution rapide uniquement dans le navigateur, sans code envoyé à l’extérieur',
    ],
    useCases: [
      'Préparer des scripts en ligne compacts ou des bookmarklets',
      'Décompresser des extraits compacts sur une seule ligne pour la lisibilité',
      'Supprimer les commentaires de développeur avant de partager des exemples de code',
      'Ré-indenter rapidement des fonctions JS collées',
    ],
    faqs: [
      {
        question: 'Cet outil renomme-t-il les variables (mangling) comme Terser ou esbuild ?',
        answer:
          'Non. Il effectue une minification sûre des espaces et des commentaires sans renommer les identifiants ni modifier la sémantique de l’AST, ce qui rend la sortie facile à inspecter.',
      },
      {
        question: 'Les littéraux de chaîne contenant « // » (comme les URL) sont-ils sûrs ?',
        answer:
          'Oui. Les chaînes entre guillemets et les littéraux de modèle sont tokenisés avant la détection des commentaires, donc les URL entre guillemets ne sont jamais traitées comme des commentaires.',
      },
      {
        question: 'Dois-je utiliser des points-virgules quand je minifie du JS multi-instructions ?',
        answer:
          'Il est recommandé d’inclure des points-virgules standard avant de minifier n’importe quel extrait JavaScript pour éviter les ambiguïtés d’ASI (insertion automatique de point-virgule).',
      },
      {
        question: 'Le Minifieur JavaScript est-il gratuit ?',
        answer:
          'Oui. Le Minifieur JavaScript est entièrement gratuit sans inscription, et il fonctionne entièrement dans votre navigateur.',
      },
      {
        question: 'Le Minifieur JavaScript envoie-t-il mon code vers un serveur ?',
        answer:
          'Non. Toute la minification et le formatage se font localement dans votre navigateur, donc votre code ne quitte jamais votre appareil.',
      },
      {
        question: 'Le Minifieur JavaScript fonctionne-t-il avec du code TypeScript ?',
        answer:
          'Oui. Les extraits TypeScript peuvent être collés et minifiés ou embellis de la même façon, car le tokeniseur gère la syntaxe standard JS et TS.',
      },
      {
        question: 'Minifier va-t-il casser mon JavaScript ?',
        answer:
          'Non, tant que votre code utilise des points-virgules standard. Seuls les commentaires et les espaces supplémentaires sont supprimés, donc la logique reste identique.',
      },
      {
        question: 'Le Minifieur JavaScript supprime-t-il les instructions console.log ?',
        answer:
          'Non. Il ne supprime que les commentaires et les espaces, donc les appels console.log et les autres instructions restent dans la sortie.',
      },
      {
        question: 'Puis-je embellir du code minifié provenant d’un bundle de production ?',
        answer:
          'Oui. Collez du code compact sur une seule ligne en mode Embellir pour le ré-indenter en lignes lisibles pour le débogage.',
      },
      {
        question: 'Le Minifieur JavaScript gère-t-il les littéraux de modèle avec des expressions ${} ?',
        answer:
          'Oui. Les littéraux de modèle entre backticks, y compris les interpolations ${}, sont tokenisés comme des chaînes et préservés exactement.',
      },
      {
        question: 'Quelle est la différence entre minifier et embellir dans le Minifieur JavaScript ?',
        answer:
          'Minifier supprime les commentaires et les espaces pour réduire le code pour une utilisation en ligne, tandis qu’Embellir ré-indente le code compact en lignes lisibles pour l’édition.',
      },
      {
        question: 'Puis-je minifier du code ES6 avec des fonctions fléchées et des classes ?',
        answer:
          'Oui. Les fonctions fléchées, les classes, la déstructuration et d’autres syntaxes ES6 modernes sont gérées par le tokeniseur sans modifier le code.',
      },
      {
        question: 'Le Minifieur JavaScript prend-il en charge JSX ou le code React ?',
        answer:
          'JSX n’est pas spécifiquement pris en charge, car les chevrons dans JSX peuvent être mal interprétés par le tokeniseur. Utilisez-le pour du JavaScript ou TypeScript brut et un formateur dédié pour JSX.',
      },
      {
        question: 'De combien mon JavaScript sera-t-il plus petit après minification ?',
        answer:
          'Cela dépend du nombre de commentaires et de sauts de ligne de votre code ; l’outil montre le nombre d’octets exact et le pourcentage économisé pour votre extrait.',
      },
      {
        question: 'Puis-je minifier plusieurs fichiers JavaScript à la fois ?',
        answer:
          'L’outil traite un extrait à la fois, donc collez chaque fichier séparément. Pour des projets entiers, utilisez plutôt un bundler comme esbuild ou Terser.',
      },
      {
        question: 'Le Minifieur JavaScript préserve-t-il les expressions régulières ?',
        answer:
          'Oui. Les littéraux d’expression régulière sont reconnus par le tokeniseur et conservés intacts, y compris les caractères // à l’intérieur du motif.',
      },
      {
        question: 'Que se passe-t-il si mon JavaScript contient une erreur de syntaxe ?',
        answer:
          'L’outil traite quand même le texte, mais des accolades déséquilibrées ou des chaînes non fermées peuvent produire une sortie étrange, donc corrigez les erreurs de syntaxe avant de minifier.',
      },
      {
        question: 'Puis-je utiliser le Minifieur JavaScript pour des bookmarklets ?',
        answer:
          'Oui. Le mode Minifier est idéal pour les bookmarklets, car il réduit un extrait en une seule ligne compacte que vous pouvez coller dans une URL de signet.',
      },
      {
        question: 'La sortie minifiée peut-elle être collée en toute sécurité dans une balise script HTML ?',
        answer:
          'Généralement oui, mais évitez une séquence littérale « </script> » à l’intérieur de vos chaînes, car le navigateur la traiterait comme la fin du bloc de script.',
      },
      {
        question: 'Puis-je formater du JavaScript sur mon téléphone ?',
        answer:
          'Oui. Le Minifieur JavaScript fonctionne dans n’importe quel navigateur mobile moderne, donc vous pouvez coller et formater du code sans rien installer.',
      },
    ],
  },
  'cron-expression-parser': {
    slug: 'analyseur-d-expression-cron',
    name: 'Analyseur d’Expression Cron et Aperçu du Planning',
    shortDescription:
      'Traduisez des expressions cron à 5 champs en français simple, explorez les préréglages et prévisualisez les 8 prochaines heures d’exécution.',
    keywords: [
      'analyseur d’expression cron',
      'générateur crontab',
      'testeur de planning cron',
      'prochaines exécutions cron',
      'analyseur crontab',
      'testeur d’expression cron',
      'aperçu de planning cron',
      'cron en français simple',
      'planificateur de tâches cron',
    ],
    seo: {
      title: 'Analyseur d’Expression Cron : anglais et runs | UtilityFlow',
      description:
        'Analysez des expressions cron à 5 champs en plannings en français simple, inspectez chaque champ et prévisualisez les 8 prochaines exécutions, en ligne.',
      primaryKeyword: 'analyseur d’expression cron',
      secondaryKeywords: ['alternative à crontab guru', 'aperçu de planning cron', 'constructeur cron', 'testeur d’expression cron'],
      longTailKeywords: ['traduire une expression cron à 5 champs en français simple', 'calculer les 8 prochains horodatages d’exécution cron', 'tester les expressions cron de jour de semaine et de pas en ligne', 'expression cron tous les jours de semaine à 9h exemple'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Décodez des expressions crontab Unix à 5 champs (`minute heure jour-du-mois mois jour-de-semaine`) en résumés clairs et lisibles par un humain, vérifiez les plages de champs et inspectez les 8 prochains horodatages d’exécution planifiés.',
    instructions: [
      {
        title: 'Saisissez une expression cron à 5 champs ou choisissez un préréglage',
        description:
          'Tapez n’importe quelle expression cron comme `0 9 * * 1-5` ou cliquez sur un bouton de préréglage de planning courant pour partir d’un motif connu.',
      },
      {
        title: 'Vérifiez le résumé en français simple et la répartition des champs',
        description:
          'Vérifiez que les champs minute, heure, jour du mois, mois et jour de semaine correspondent à votre intention avant de faire confiance au planning.',
      },
      {
        title: 'Vérifiez les 8 prochaines heures d’exécution',
        description:
          'Examinez les horodatages d’exécution locaux à venir calculés pour confirmer que la tâche s’exécute quand vous l’attendez.',
      },
      {
        title: 'Ajustez les champs avec des pas, des plages et des listes',
        description:
          'Affinez le planning en utilisant des valeurs de pas comme */15, des plages comme 1-5 ou des listes comme 1,15, puis revérifiez le résumé et les heures d’exécution.',
      },
      {
        title: 'Copiez l’expression pour votre planificateur',
        description:
          'Copiez l’expression vérifiée dans votre crontab, votre workflow GitHub Actions ou votre déclencheur cron de Cloudflare Worker.',
      },
      {
        title: 'Attention au jour du mois contre jour de semaine',
        description:
          'Si les deux champs de jour sont restreints, le cron standard s’exécute quand l’un ou l’autre correspond. Utilisez * dans l’un d’eux si vous voulez qu’une seule condition s’applique.',
      },
    ],
    examples: [
      {
        title: 'Tâche du matin en heures de bureau',
        input: '0 9 * * 1-5',
        output: 'À 09:00, les jours de semaine 1-5 (lundi–vendredi).',
        explanation:
          'S’exécute à 09:00 chaque lundi au vendredi.',
      },
      {
        title: 'Tâche toutes les 15 minutes',
        input: '*/15 * * * *',
        output: 'Toutes les 15 minutes, à :00, :15, :30 et :45.',
        explanation:
          'La syntaxe de pas */15 dans le champ minute exécute la tâche quatre fois par heure.',
      },
    ],
    benefits: [
      'Prend en charge les caractères génériques (*), les pas (*/5), les plages (1-5), les listes (1,15) et les noms (LUN-VEN)',
      'Calcule les 8 prochains horodatages d’exécution concrets dans votre fuseau horaire local',
      'Signale immédiatement les valeurs hors plage ou les champs manquants',
      'Inclut des préréglages en un clic pour les intervalles courants',
    ],
    useCases: [
      'Vérifier les `schedule.cron` de GitHub Actions et les déclencheurs Cron de Cloudflare Workers',
      'Déboguer des plannings crontab Linux de sauvegarde ou de nettoyage',
      'Vérifier la logique jour de semaine (0–6) contre jour du mois (1–31)',
      'Documenter les plannings de tâches récurrentes pour les guides d’exploitation',
    ],
    faqs: [
      {
        question: 'Cet analyseur prend-il en charge les expressions cron à 6 champs avec secondes ?',
        answer:
          'Cet outil analyse les expressions crontab Unix standard à 5 champs (minute, heure, jour du mois, mois, jour de semaine), utilisées par le cron Linux, GitHub Actions et Cloudflare Workers.',
      },
      {
        question: 'Que se passe-t-il si le Jour du mois et le Jour de semaine sont tous deux non génériques ?',
        answer:
          'Suivant le comportement standard du cron Vixie/Unix, quand les deux champs de jour sont restreints, une exécution se déclenche si le Jour du mois OU le Jour de semaine correspond.',
      },
      {
        question: 'Les noms LUN–VEN et JAN–DÉC sont-ils pris en charge ?',
        answer:
          'Oui. Les abréviations anglaises standard de 3 lettres pour les mois et les jours de semaine ainsi que le 0 ou 7 numérique pour dimanche sont pris en charge.',
      },
      {
        question: 'L’Analyseur d’Expression Cron est-il gratuit ?',
        answer:
          'Oui. L’Analyseur d’Expression Cron est entièrement gratuit sans inscription, et il fonctionne entièrement dans votre navigateur.',
      },
      {
        question: 'Qu’est-ce qu’une expression cron ?',
        answer:
          'Une expression cron est une chaîne de planning compacte à 5 champs qui indique à un système quand exécuter une tâche automatiquement, par exemple chaque heure ou chaque jour de semaine à 9 h.',
      },
      {
        question: 'Que signifient les 5 champs d’une expression cron ?',
        answer:
          'De gauche à droite, ce sont la minute (0-59), l’heure (0-23), le jour du mois (1-31), le mois (1-12) et le jour de semaine (0-7, où 0 et 7 signifient dimanche).',
      },
      {
        question: 'Comment exécuter une tâche cron toutes les 5 minutes ?',
        answer:
          'Utilisez la syntaxe de pas dans le champ minute : */5 * * * * exécute la tâche toutes les 5 minutes, à :00, :05, :10, etc.',
      },
      {
        question: 'Comment planifier une tâche cron à 9 h les jours de semaine ?',
        answer:
          'Utilisez 0 9 * * 1-5, ce qui signifie minute 0, heure 9, n’importe quel jour du mois, n’importe quel mois, et les jours de semaine du lundi au vendredi.',
      },
      {
        question: 'Que signifie */15 dans une expression cron ?',
        answer:
          'La syntaxe de pas */15 signifie toutes les 15 unités de ce champ, donc */15 dans le champ minute exécute une tâche toutes les 15 minutes.',
      },
      {
        question: 'Quelle est la différence entre 0 et 7 pour dimanche dans cron ?',
        answer:
          'Il n’y a pas de différence ; 0 et 7 représentent tous deux dimanche dans le champ jour de semaine, donc vous pouvez utiliser celui que vous préférez.',
      },
      {
        question: 'Puis-je utiliser cet Analyseur d’Expression Cron pour les plannings GitHub Actions ?',
        answer:
          'Oui. GitHub Actions utilise la même syntaxe cron à 5 champs, donc vous pouvez vérifier un planning ici avant de le coller dans votre fichier de workflow.',
      },
      {
        question: 'L’Analyseur d’Expression Cron tient-il compte de mon fuseau horaire ?',
        answer:
          'Les 8 prochaines heures d’exécution sont affichées dans le fuseau horaire local de votre navigateur, mais rappelez-vous que cron lui-même s’exécute dans le fuseau horaire du serveur, donc vérifiez aussi vos réglages de serveur.',
      },
      {
        question: 'Que se passe-t-il si je saisis une expression cron invalide ?',
        answer:
          'L’analyseur signale immédiatement les valeurs hors plage ou les champs manquants, pour que vous puissiez corriger l’expression avant de la déployer.',
      },
      {
        question: 'Puis-je planifier une tâche cron pour le dernier jour du mois ?',
        answer:
          'Le cron standard à 5 champs n’a pas de syntaxe de dernier jour. Une solution courante consiste à planifier sur les jours 28-31 et à laisser la tâche elle-même vérifier s’il s’agit du dernier jour.',
      },
      {
        question: 'Que signifient L et W dans une expression cron ?',
        answer:
          'L (dernier) et W (jour de semaine) sont des extensions de style Quartz, pas partie du cron Unix standard, donc elles ne sont pas prises en charge par cet analyseur.',
      },
      {
        question: 'Comment exécuter une tâche cron deux fois par jour ?',
        answer:
          'Listez les deux heures dans le champ heure, par exemple 0 6,18 * * * exécute la tâche à 6 h et 18 h chaque jour.',
      },
      {
        question: 'L’Analyseur d’Expression Cron prend-il en charge les secondes ou les expressions à 6 champs ?',
        answer:
          'Non. Il prend en charge uniquement les expressions Unix standard à 5 champs ; les planificateurs qui ont besoin de secondes utilisent un format différent à 6 champs.',
      },
      {
        question: 'Puis-je prévisualiser les exécutions cron pour une plage de dates précise ?',
        answer:
          'L’outil prévisualise les 8 prochaines heures d’exécution à partir de maintenant. Il n’offre pas de vue de plage de dates personnalisée, mais les 8 prochaines exécutions révèlent généralement les erreurs de planning.',
      },
      {
        question: 'Pourquoi ma tâche cron s’exécute-t-elle des jours inattendus ?',
        answer:
          'La cause la plus courante est de restreindre à la fois le jour du mois et le jour de semaine, ce qui déclenche une exécution quand l’un ou l’autre correspond. Définissez l’un d’eux sur * pour corriger.',
      },
      {
        question: 'Puis-je utiliser des préréglages cron pour des plannings courants ?',
        answer:
          'Oui. L’outil inclut des préréglages en un clic pour des intervalles courants comme chaque heure, quotidien, hebdomadaire et mensuel, que vous pouvez ensuite personnaliser.',
      },
    ],
  },
  'color-converter': {
    slug: 'convertisseur-de-couleurs',
    name: 'Convertisseur de Couleurs (HEX / RGB / HSL et Contraste WCAG)',
    shortDescription:
      'Convertissez des couleurs entre HEX, RGB et HSL avec un sélecteur de couleurs en direct et une vérification de contraste WCAG 2.1 AA/AAA.',
    keywords: [
      'convertisseur de couleurs',
      'hex en rgb',
      'rgb en hsl',
      'vérificateur de contraste wcag',
      'hex en hsl',
      'rgb en hex',
      'sélecteur de couleurs en ligne',
      'convertisseur de couleurs hex',
      'hsl en rgb',
    ],
    seo: {
      title: 'Convertisseur de Couleurs : HEX, RGB et HSL | UtilityFlow',
      description:
        'Convertissez des couleurs entre HEX, RGB et HSL instantanément, puis testez le contraste pour la conformité WCAG 2.1 AA et AAA — gratuit, dans votre navigateur.',
      primaryKeyword: 'convertisseur de couleurs',
      secondaryKeywords: ['convertisseur hex en rgb', 'sélecteur de couleurs hsl', 'vérificateur de contraste wcag', 'convertisseur rgb en hex'],
      longTailKeywords: ['convertir une couleur hex en valeurs css rgb et hsl', 'vérifier le ratio de contraste de texte wcag 2.1 aa et aaa', 'outil de couleurs hex rgb hsl interactif pour développeurs', 'convertir hex en hsl pour les variables css'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Traduisez les couleurs sans effort entre les notations CSS HEX, RGB et HSL avec un échantillon en direct et un vérificateur de ratio de contraste WCAG 2.1 intégré pour un design d’interface accessible.',
    instructions: [
      {
        title: 'Choisissez ou tapez une couleur',
        description:
          'Utilisez le sélecteur de couleurs, saisissez un code HEX à 3 ou 6 chiffres, ou ajustez les canaux R/V/B ou T/S/L individuels pour définir votre couleur de premier plan.',
      },
      {
        title: 'Examinez les valeurs HEX, RGB et HSL',
        description:
          'Vérifiez les valeurs synchronisées dans les trois notations et confirmez que l’échantillon en direct correspond à la couleur voulue.',
      },
      {
        title: 'Copiez les valeurs de couleur CSS',
        description:
          'Cliquez sur Copier HEX, Copier RGB ou Copier HSL pour récupérer des chaînes CSS prêtes à l’emploi pour votre feuille de style ou vos jetons de design.',
      },
      {
        title: 'Sélectionnez une couleur d’arrière-plan',
        description:
          'Choisissez une couleur d’arrière-plan ci-dessous pour la comparer avec votre couleur de premier plan pour la vérification de contraste.',
      },
      {
        title: 'Vérifiez les résultats de contraste WCAG',
        description:
          'Lisez le ratio de contraste exact et le statut Réussi/Échoué pour AA Normal, AAA Normal et AA Grand texte avant de livrer la paire.',
      },
      {
        title: 'Corrigez une paire de contraste qui échoue',
        description:
          'Si la paire échoue, baissez la Luminosité en HSL pour assombrir le texte (ou éclaircir l’arrière-plan) jusqu’à ce que le ratio atteigne au moins 4,5:1 pour le texte normal.',
      },
    ],
    examples: [
      {
        title: 'Bleu cobalt accessible sur blanc',
        input: 'Premier plan : #2563EB · Arrière-plan : #FFFFFF',
        output: 'RGB : rgb(37, 99, 235) · HSL : hsl(221, 83%, 53%) · Contraste : 5,17:1 (AA Réussi)',
        explanation:
          'Respecte l’exigence WCAG AA de 4,5:1 pour le texte courant standard.',
      },
      {
        title: 'Convertir une couleur de marque HEX en HSL',
        input: 'HEX : #E11D48',
        output: 'RGB : rgb(225, 29, 72) · HSL : hsl(347, 77%, 50%)',
        explanation:
          'Convertit une couleur de marque en HSL pour l’utiliser dans des variables CSS ou des thèmes Tailwind.',
      },
    ],
    benefits: [
      'Synchronise les canaux HEX, RGB et HSL de façon bidirectionnelle en temps réel',
      'Calculateur de contraste par luminance relative WCAG 2.1 intégré',
      'Teste les seuils AA Normal (4,5:1), AAA Normal (7,0:1) et AA Grand texte (3,0:1)',
      'Copie en un clic pour des chaînes de couleur CSS valides',
    ],
    useCases: [
      'Vérifier le contraste du texte des boutons et des liens pendant l’implémentation d’interface',
      'Convertir des palettes HEX de marque en HSL pour Tailwind ou des variables CSS',
      'Ajuster la luminosité et la saturation sans quitter le navigateur',
      'Auditer la conformité d’accessibilité avant la remise du design',
    ],
    faqs: [
      {
        question: 'Quel ratio de contraste est requis pour le texte courant WCAG 2.1 AA ?',
        answer:
          'WCAG 2.1 AA exige au moins 4,5:1 pour le texte normal et 3,0:1 pour le texte large (18pt / 24px en régulier ou 14pt / 18,66px en gras).',
      },
      {
        question: 'Puis-je saisir des codes HEX abrégés à 3 chiffres comme #09f ?',
        answer:
          'Oui. Les codes HEX à trois caractères se développent automatiquement en leurs équivalents à 6 caractères.',
      },
      {
        question: 'Pourquoi HSL facilite-t-il l’ajustement des thèmes par rapport à RGB ?',
        answer:
          'HSL sépare la Teinte, la Saturation et la Luminosité, ce qui vous permet d’assombrir ou d’éclaircir une couleur de marque en ne changeant que le pourcentage de Luminosité.',
      },
      {
        question: 'Le Convertisseur de Couleurs est-il gratuit ?',
        answer:
          'Oui. Le Convertisseur de Couleurs est entièrement gratuit sans inscription, et il fonctionne entièrement dans votre navigateur.',
      },
      {
        question: 'Le Convertisseur de Couleurs stocke-t-il mes couleurs ?',
        answer:
          'Non. Les conversions et les vérifications de contraste se font localement dans votre navigateur, donc vos choix de palette ne sont jamais envoyés ni stockés.',
      },
      {
        question: 'Comment convertir HEX en RGB avec le Convertisseur de Couleurs ?',
        answer:
          'Saisissez un code HEX comme #2563EB et la valeur RGB apparaît instantanément, prête à copier comme une chaîne CSS rgb().',
      },
      {
        question: 'Comment convertir RGB en HSL ?',
        answer:
          'Saisissez les valeurs RGB ou ajustez les canaux R, V et B, et la valeur HSL correspondante se met à jour en direct dans le même panneau.',
      },
      {
        question: 'Quelle est la différence entre HEX, RGB et HSL ?',
        answer:
          'HEX est un code compact pour une couleur, RGB la définit par les quantités de rouge, vert et bleu, et HSL la définit par la teinte, la saturation et la luminosité. Ils décrivent la même couleur dans des notations différentes.',
      },
      {
        question: 'Quel ratio de contraste faut-il pour WCAG AAA ?',
        answer:
          'WCAG AAA exige au moins 7,0:1 pour le texte normal et 4,5:1 pour le texte large, ce qui est plus strict que le niveau AA.',
      },
      {
        question: 'Qu’est-ce qui compte comme du texte large pour le contraste WCAG ?',
        answer:
          'Le texte large fait 18pt (24px) ou plus en poids régulier, ou 14pt (18,66px) ou plus en poids gras. Le texte large n’a besoin que d’un ratio de 3,0:1 pour AA.',
      },
      {
        question: 'Puis-je convertir une couleur avec transparence (alpha) dans le Convertisseur de Couleurs ?',
        answer:
          'Ce convertisseur gère les couleurs pleines sans canal alpha. Pour la transparence, prenez les valeurs RGB converties et utilisez-les dans une fonction rgba().',
      },
      {
        question: 'Le Convertisseur de Couleurs prend-il en charge les codes HEX à 8 chiffres avec alpha ?',
        answer:
          'Non. Le convertisseur accepte les codes HEX standard à 3 et 6 chiffres ; pour la transparence, utilisez la sortie RGB avec une valeur alpha dans rgba().',
      },
      {
        question: 'Puis-je choisir une couleur depuis une image avec le Convertisseur de Couleurs ?',
        answer:
          'Non. L’outil n’échantillonne pas les images ; saisissez la valeur HEX de la couleur voulue ou choisissez-la avec le sélecteur de couleurs intégré.',
      },
      {
        question: 'Comment le ratio de contraste WCAG est-il calculé ?',
        answer:
          'Il est calculé à partir de la luminance relative des couleurs de premier plan et d’arrière-plan en utilisant la formule définie dans la spécification WCAG 2.1.',
      },
      {
        question: 'Pourquoi ma couleur de marque échoue-t-elle au contraste AA sur blanc ?',
        answer:
          'Les couleurs de marque claires ou de ton moyen tombent souvent sous le seuil de 4,5:1 contre le blanc. Assombrissez la couleur ou utilisez-la uniquement pour le texte large et les éléments décoratifs.',
      },
      {
        question: 'Puis-je copier des couleurs comme variables CSS depuis le Convertisseur de Couleurs ?',
        answer:
          'Oui. Copiez la valeur HEX, RGB ou HSL et collez-la dans une propriété personnalisée CSS, par exemple --brand: #2563EB, puis référencez-la avec var(--brand).',
      },
      {
        question: 'Quelle est la différence entre HSL et HSV ?',
        answer:
          'HSL décrit une couleur par la teinte, la saturation et la luminosité, tandis que HSV utilise la teinte, la saturation et la valeur (luminosité). HSL est généralement plus facile pour créer des variantes de thèmes clairs et sombres accessibles.',
      },
      {
        question: 'Puis-je convertir des couleurs CSS nommées comme « red » dans le Convertisseur de Couleurs ?',
        answer:
          'Saisissez plutôt la valeur HEX de la couleur nommée, par exemple red est #FF0000. L’outil accepte les entrées HEX, RGB et HSL.',
      },
      {
        question: 'Comment trouver une teinte plus sombre de ma couleur de marque ?',
        answer:
          'Convertissez la couleur en HSL, gardez la teinte et la saturation identiques, et baissez le pourcentage de Luminosité jusqu’à atteindre la teinte voulue.',
      },
      {
        question: 'Puis-je utiliser le Convertisseur de Couleurs sur mon téléphone ?',
        answer:
          'Oui. Le Convertisseur de Couleurs fonctionne dans n’importe quel navigateur mobile moderne, donc vous pouvez convertir des couleurs et vérifier le contraste sans rien installer.',
      },
    ],
  },
};
