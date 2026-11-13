import type { ToolLocaleOverride } from '../../types';

/**
 * French overrides — Batch 4: Social (10) + PDF (10) tools (20 tools).
 * Source: src/registry/batches/batch4/socialToolsPart1.ts, Part2,
 * and src/registry/batches/batch5/pdfToolsPart1.ts, Part2.
 * Filled by Phase 2 translation (French, international).
 */
export const FR_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'generateur-code-qr',
    name: 'Générateur de Code QR',
    shortDescription:
      'Générez des codes QR personnalisés et lisibles pour des URL, du texte brut, des connexions Wi-Fi, des e-mails ou des numéros de téléphone, avec export PNG et SVG.',
    keywords: [
      'générateur de code qr',
      'créateur de code qr gratuit',
      'code qr wifi',
      'générateur de code qr svg',
      'créer code qr en ligne',
      'code qr pour mot de passe wifi',
      'téléchargement code qr png',
      'générateur de code qr gratuit sans inscription',
      'créateur de code qr pour cartes de visite',
    ],
    seo: {
      title: 'Générateur de Code QR – Codes QR PNG et SVG | UtilityFlow',
      description:
        'Créez des codes QR statiques gratuits pour URL, Wi-Fi, texte et e-mails dans votre navigateur — sans inscription — et téléchargez des PNG ou SVG nets.',
      primaryKeyword: 'générateur de code qr',
      secondaryKeywords: [
        'générateur de code qr wifi',
        'créateur de code qr svg',
        'code qr personnalisé en couleur',
        'créateur de code qr pour impression',
      ],
      longTailKeywords: [
        'générer code qr statique sans expiration ni suivi',
        'créer code qr wifi lisible dans le navigateur',
        'télécharger code qr svg vectoriel gratuit',
        'créer code qr pour carte de visite gratuit en ligne',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Encodez des URL de sites web, des identifiants Wi-Fi, du texte brut, des liens e-mail ou des numéros de téléphone en codes QR nets conformes aux normes ISO, directement dans votre navigateur — sans aucune limite d’expiration, sans redirection de suivi et avec des téléchargements instantanés en PNG ou en SVG vectoriel.',
    instructions: [
      {
        title: 'Choisissez le format de contenu',
        description:
          'Sélectionnez URL de site web, Texte brut, Réseau Wi-Fi, Lien e-mail ou Numéro de téléphone en haut.',
      },
      {
        title: 'Saisissez votre contenu',
        description:
          'Tapez ou collez votre URL, votre texte ou vos coordonnées. Pour le Wi-Fi, ajoutez le nom du réseau (SSID), le type de sécurité et le mot de passe.',
      },
      {
        title: 'Personnalisez l’apparence et la correction d’erreur',
        description:
          'Ajustez la taille en pixels, la marge de zone de silence, les couleurs hexadécimales de premier plan et d’arrière-plan, et le niveau de correction d’erreur (L à H).',
      },
      {
        title: 'Prévisualisez et testez le code',
        description:
          'Vérifiez l’aperçu en direct et scannez-le avec l’appareil photo de votre téléphone avant de le télécharger pour confirmer qu’il ouvre la bonne destination.',
      },
      {
        title: 'Téléchargez en PNG ou en SVG vectoriel',
        description:
          'Exportez un PNG net pour les visuels sociaux ou copiez et téléchargez le fichier SVG évolutif pour les supports imprimés.',
      },
      {
        title: 'Corrigez un code qui ne se scanne pas',
        description:
          'Augmentez le contraste du premier plan, agrandissez le code, augmentez le niveau de correction d’erreur ou élargissez la marge de zone de silence, puis testez à nouveau.',
      },
    ],
    examples: [
      {
        title: 'Autocollant QR Wi-Fi pour invités',
        input: 'SSID : GuestWiFi · Sécurité : WPA',
        output: 'WIFI:T:WPA;S:GuestWiFi;P:...;H:false;;',
        explanation:
          'Les appareils photo iOS et Android reconnaissent automatiquement les contenus QR Wi-Fi standard pour se connecter sans taper le mot de passe.',
      },
      {
        title: 'Code QR d’URL pour une carte de visite',
        input: 'URL : https://example.com/portfolio',
        output: 'Code QR PNG ou SVG lisible par tout appareil photo de téléphone',
        explanation:
          'Le contenu est encodé directement dans le motif, donc le code fonctionne pour toujours sans serveur ni suivi.',
      },
    ],
    benefits: [
      'Les codes QR statiques n’expirent jamais et ne font passer les utilisateurs par aucune redirection de suivi tierce',
      'Génère un SVG vectoriel sans perte en plus d’images PNG haute résolution',
      'Prend en charge proprement le formatage QR Wi-Fi WPA/WEP/ouvert, avec échappement des caractères spéciaux',
      'Conserve les URL privées et les mots de passe Wi-Fi strictement dans la mémoire du navigateur',
    ],
    useCases: [
      'Relier des prospectus, des affiches ou des cartes de visite imprimés à des pages de destination avec balises UTM',
      'Créer des panneaux QR Wi-Fi pour invités lisibles pour les bureaux, les studios ou les événements',
      'Ajouter des liens de contact ou de portfolio instantanés aux diaporamas et aux emballages',
      'Exporter des codes QR SVG nets pour les outils de design d’impression haute résolution',
    ],
    faqs: [
      {
        question: 'Les codes QR créés ici expirent-ils après une période d’essai ?',
        answer:
          'Non. Ce sont des codes QR statiques dont les données sont encodées directement dans le motif noir et blanc, donc ils fonctionnent en permanence sans dépendance à un serveur ni limite de scans.',
      },
      {
        question: 'Quel niveau de correction d’erreur dois-je choisir ?',
        answer:
          'Le niveau M (15 %) équilibre densité compacte et fiabilité pour les écrans numériques propres ou les prospectus. Choisissez Q (25 %) ou H (30 %) pour les autocollants extérieurs ou les surfaces d’impression plus rugueuses.',
      },
      {
        question: 'Pourquoi le contraste du premier plan doit-il rester élevé ?',
        answer:
          'Les appareils photo des téléphones reposent sur un fort contraste de luminance entre les modules sombres et l’arrière-plan clair ; gardez des couleurs de premier plan sombres sur des arrière-plans clairs avec une marge de silence d’au moins 2 modules.',
      },
      {
        question: 'Le générateur de code QR est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, sans filigrane et sans limite de nombre de codes QR créés ou téléchargés.',
      },
      {
        question: 'Ai-je besoin d’un compte pour créer un code QR ?',
        answer:
          'Aucun compte n’est nécessaire. Tout s’exécute localement dans votre navigateur, donc vous pouvez générer et télécharger un code QR immédiatement.',
      },
      {
        question: 'Quels types de contenu puis-je encoder dans un code QR ?',
        answer:
          'Vous pouvez encoder des URL de sites web, du texte brut, des identifiants de réseau Wi-Fi, des liens e-mail et des numéros de téléphone qui ouvrent le composeur quand ils sont scannés.',
      },
      {
        question: 'Puis-je créer un code QR pour mon mot de passe Wi-Fi ?',
        answer:
          'Oui. Choisissez le format Réseau Wi-Fi, saisissez le nom du réseau (SSID), le type de sécurité comme WPA et le mot de passe, et les invités peuvent se connecter en scannant au lieu de taper.',
      },
      {
        question: 'Quelle est la différence entre les téléchargements PNG et SVG ?',
        answer:
          'Le PNG est une image matricielle à résolution fixe, idéale pour les écrans et les publications sociales, tandis que le SVG est un fichier vectoriel qui s’adapte à n’importe quelle taille sans perdre de netteté, ce qui le rend idéal pour l’impression.',
      },
      {
        question: 'Mon code QR fonctionnera-t-il encore si je l’imprime en petit ?',
        answer:
          'Cela dépend de la quantité de données qu’il contient et de la qualité d’impression. Les URL courtes se scannent de façon fiable en petit format, tandis que les codes denses doivent être imprimés plus grands avec une zone de silence claire.',
      },
      {
        question: 'Que fait le niveau de correction d’erreur ?',
        answer:
          'La correction d’erreur ajoute de la redondance pour que le code se scanne encore si une partie est rayée, sale ou couverte. Les niveaux plus élevés survivent à plus de dégâts, mais rendent le motif plus dense.',
      },
      {
        question: 'Puis-je changer les couleurs de mon code QR ?',
        answer:
          'Oui, vous pouvez définir des couleurs hexadécimales personnalisées de premier plan et d’arrière-plan. Gardez des modules sombres sur un arrière-plan clair pour que les appareils photo des téléphones puissent toujours lire le motif de façon fiable.',
      },
      {
        question: 'Qu’est-ce que la zone de silence et pourquoi est-elle importante ?',
        answer:
          'La zone de silence est la marge vierge autour du code qui aide les scanners à trouver ses bords. Gardez une marge d’au moins 4 modules de large et ne placez jamais de texte ou de logo à l’intérieur.',
      },
      {
        question: 'Les codes QR créés ici suivent-ils les scans ?',
        answer:
          'Non. Ce sont des codes statiques sans serveur de redirection derrière eux, donc personne ne peut voir quand ni où ils sont scannés.',
      },
      {
        question: 'Puis-je utiliser ces codes QR sur des cartes de visite et des prospectus ?',
        answer:
          'Oui. Téléchargez la version SVG pour une impression nette sur les cartes, les affiches et les emballages, et utilisez le PNG pour les sites web, les diapositives et les visuels sociaux.',
      },
      {
        question: 'Pourquoi mon téléphone ne scanne-t-il pas le code QR ?',
        answer:
          'Un faible contraste, un code imprimé trop petit, des reflets ou des dégâts sont les causes habituelles. Essayez un premier plan plus sombre, une taille plus grande, un niveau de correction d’erreur plus élevé et une zone de silence plus large.',
      },
      {
        question: 'Le code QR fonctionne-t-il hors ligne après l’avoir téléchargé ?',
        answer:
          'Oui. Les données sont encodées directement dans le motif lui-même, donc un code téléchargé se scanne et fonctionne sans aucune connexion à ce site web.',
      },
      {
        question: 'Puis-je encoder un numéro de téléphone pour qu’il ouvre le composeur ?',
        answer:
          'Oui. Choisissez le format Numéro de téléphone et le code crée un lien tel: , donc le scan sur un téléphone ouvre le composeur avec le numéro prêt à appeler.',
      },
      {
        question: 'Puis-je encoder une adresse e-mail pour qu’elle ouvre un nouveau message ?',
        answer:
          'Oui. Le format Lien e-mail crée un lien mailto: , donc le scan ouvre l’application de messagerie avec votre adresse préremplie comme destinataire.',
      },
      {
        question: 'Mon mot de passe Wi-Fi est-il sûr quand je génère un code QR ici ?',
        answer:
          'Oui. Le code est généré entièrement dans votre navigateur et rien de ce que vous tapez n’est envoyé ni enregistré sur un serveur.',
      },
      {
        question: 'À quelle taille dois-je télécharger le PNG pour l’impression ?',
        answer:
          'Choisissez la plus grande taille en pixels disponible pour le travail d’impression, et préférez le SVG pour tout ce qui dépasse un prospectus, car le rendu vectoriel reste net à n’importe quelle taille.',
      },
    ],
  },
  'utm-link-builder': {
    slug: 'createur-liens-utm',
    name: 'Créateur de Liens UTM',
    shortDescription:
      'Créez des URL de suivi de campagne propres avec les paramètres utm_source, utm_medium, utm_campaign, utm_term et utm_content.',
    keywords: [
      'créateur de liens utm',
      'créateur d’url de campagne',
      'générateur utm',
      'utm google analytics',
      'créateur utm gratuit',
      'générateur de paramètres utm',
      'créateur de liens de suivi de campagne',
      'générateur de liens utm instagram',
      'générateur de liens utm pour e-mail',
    ],
    seo: {
      title: 'Créateur de Liens UTM – Suivi de Campagne | UtilityFlow',
      description:
        'Créez des URL de campagne UTM pour les réseaux sociaux, les e-mails et les publicités, avec des préréglages et une normalisation en minuscules — gratuit.',
      primaryKeyword: 'créateur de liens utm',
      secondaryKeywords: [
        'créateur d’url de campagne',
        'générateur de balises utm',
        'url de suivi pour réseaux sociaux',
        'créateur d’url utm pour bio instagram',
      ],
      longTailKeywords: [
        'créer des liens de suivi utm cohérents en minuscules en ligne',
        'générateur utm qui préserve les chaînes de requête et ancres',
        'modèles de liens utm pour bio instagram et newsletter',
        'comment créer des liens utm pour campagnes sociales',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Générez des URL de suivi de campagne propres et standardisées pour les bios sociales, les parrainages de créateurs, les publicités payantes et les newsletters, tout en préservant les chaînes de requête existantes et les fragments d’URL (#section).',
    instructions: [
      {
        title: 'Saisissez votre URL de destination',
        description:
          'Collez l’URL de la page de destination cible ou sélectionnez un préréglage rapide de canal pour préremplir les balises standard.',
      },
      {
        title: 'Choisissez un préréglage de canal (facultatif)',
        description:
          'Choisissez Instagram, e-mail, YouTube ou un autre préréglage pour remplir les valeurs standard de source et de support au lieu de les taper vous-même.',
      },
      {
        title: 'Remplissez les paramètres UTM',
        description:
          'Indiquez utm_source, utm_medium, utm_campaign, ainsi que utm_content ou utm_term facultatifs.',
      },
      {
        title: 'Ajoutez utm_term et utm_content facultatifs',
        description:
          'Utilisez utm_term pour les mots-clés de recherche payante et utm_content pour distinguer deux liens d’une même campagne, comme un bouton de bio par rapport à un lien de story.',
      },
      {
        title: 'Copiez et vérifiez le détail',
        description:
          'Examinez le tableau des paramètres en direct ci-dessous pour éviter les fautes de frappe ou les casses mélangées avant de copier le lien final.',
      },
      {
        title: 'Testez le lien avant de le publier',
        description:
          'Ouvrez l’URL copiée dans un navigateur pour confirmer qu’elle mène à la bonne page, puis vérifiez que la normalisation en minuscules n’a pas modifié une partie sensible à la casse de la destination.',
      },
    ],
    examples: [
      {
        title: 'Lien de campagne Instagram pour lien en bio',
        input: 'URL : https://utilityflow.online/tools/ · Source : instagram · Support : social · Campagne : spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation:
          'Utilise l’analyse d’URL du navigateur pour que les paramètres existants ou les ancres # restent intacts.',
      },
      {
        title: 'Lien de newsletter avec utm_content',
        input: 'URL : https://example.com/offre · Source : newsletter · Support : email · Campagne : lancement_printemps · Contenu : bouton_hero',
        output: 'https://example.com/offre?utm_source=newsletter&utm_medium=email&utm_campaign=lancement_printemps&utm_content=bouton_hero',
        explanation:
          'Le paramètre utm_content distingue ce bouton des autres liens de la même newsletter.',
      },
    ],
    benefits: [
      'Les préréglages de canal en un clic évitent les noms incohérents comme IG contre instagram',
      'La normalisation facultative en minuscules et avec underscores évite les rapports GA4 divisés',
      'Préserve correctement les paramètres de requête préexistants et les ancres #',
      'Affiche un tableau de révision des paramètres décodés avant la publication',
    ],
    useCases: [
      'Suivre les clics depuis les bios de profil Instagram, LinkedIn, X et TikTok',
      'Mesurer les boutons d’appel à l’action individuels dans les newsletters hebdomadaires',
      'Baliser les liens de sponsors dans les descriptions de vidéos YouTube',
      'Générer des liens UTM propres à transmettre directement au générateur de code QR',
    ],
    faqs: [
      {
        question: 'Pourquoi la normalisation en minuscules est-elle importante pour les paramètres UTM ?',
        answer:
          'Les plateformes d’analyse comme Google Analytics 4 traitent utm_source=Instagram et utm_source=instagram comme des lignes distinctes, divisant l’attribution de campagne.',
      },
      {
        question: 'Dois-je utiliser des balises UTM sur les liens de navigation internes du site ?',
        answer:
          'Non. Les paramètres UTM sont conçus exclusivement pour les campagnes entrantes externes ; les utiliser sur des liens internes écrase l’attribution de provenance d’origine en cours de session.',
      },
      {
        question: 'Puis-je transformer un lien UTM généré en code QR ?',
        answer:
          'Oui. Copiez votre URL UTM terminée et collez-la directement dans notre générateur de code QR pour des campagnes mesurables du papier vers le numérique.',
      },
      {
        question: 'Le créateur de liens UTM est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et chaque lien est construit localement dans votre navigateur sans envoyer vos URL nulle part.',
      },
      {
        question: 'Qu’est-ce qu’un paramètre UTM ?',
        answer:
          'Un paramètre UTM est une courte balise ajoutée à la fin d’une URL, comme utm_source=instagram, qui indique aux outils d’analyse d’où vient un visiteur.',
      },
      {
        question: 'Que signifie utm_source ?',
        answer:
          'Il identifie la source du trafic, comme instagram, google ou newsletter, pour que vous puissiez voir quel endroit a envoyé chaque visiteur.',
      },
      {
        question: 'Que signifie utm_medium ?',
        answer:
          'Il décrit le canal marketing, comme social, email, cpc ou referral, pour que vous puissiez comparer les canaux au sein d’une même campagne.',
      },
      {
        question: 'Que signifie utm_campaign ?',
        answer:
          'Il nomme la campagne précise, comme spring_launch ou black_friday, pour que tous les liens d’une même promotion soient regroupés dans les rapports.',
      },
      {
        question: 'À quoi sert utm_content ?',
        answer:
          'Il distingue deux liens d’une même campagne, par exemple un bouton de bio par rapport à un lien de story, pour que vous puissiez voir quel emplacement a le mieux performé.',
      },
      {
        question: 'À quoi sert utm_term ?',
        answer:
          'Il identifie le mot-clé de recherche payante qui a déclenché un clic sur une publicité, et il est surtout utile pour Google Ads ou d’autres campagnes de recherche.',
      },
      {
        question: 'Dois-je remplir les cinq paramètres UTM ?',
        answer:
          'Non. La source, le support et la campagne sont le minimum recommandé, tandis que utm_term et utm_content sont facultatifs et ne sont nécessaires que quand vous souhaitez un détail plus fin.',
      },
      {
        question: 'Puis-je utiliser des liens UTM dans ma bio Instagram ?',
        answer:
          'Oui. Les liens UTM sont l’un des moyens les plus courants de mesurer le trafic de la bio, et ils fonctionnent de la même façon dans les pages de lien en bio, les liens de story et les légendes de publications.',
      },
      {
        question: 'Les paramètres UTM vont-ils casser ma chaîne de requête existante ou mon ancre # ?',
        answer:
          'Non. Le créateur préserve les paramètres déjà présents dans votre URL et conserve le fragment d’ancre # à la fin, pour que le lien mène toujours à la bonne section.',
      },
      {
        question: 'Dois-je utiliser des espaces dans les valeurs UTM ?',
        answer:
          'Non. Utilisez plutôt des underscores ou des traits d’union, comme spring_launch, car les espaces sont encodés en pourcentage et rendent les rapports plus difficiles à lire.',
      },
      {
        question: 'Puis-je suivre les scans de code QR avec des liens UTM ?',
        answer:
          'Oui. Créez d’abord l’URL UTM, puis transformez-la en code QR avec notre générateur de code QR, et chaque scan qui atteint votre site portera les balises de campagne.',
      },
      {
        question: 'Les liens UTM affectent-ils le référencement ?',
        answer:
          'Non, les moteurs de recherche ignorent généralement les paramètres UTM pour le classement, mais il est bon de garder une balise canonique sur la page de destination pour que les URL indexées restent propres.',
      },
      {
        question: 'Comment voir les résultats UTM dans Google Analytics ?',
        answer:
          'Dans Google Analytics 4, ouvrez le rapport d’acquisition du trafic et regardez la source, le support et la campagne de session, qui sont remplis à partir de vos valeurs UTM.',
      },
      {
        question: 'Quelle est la différence entre utm_source et utm_medium ?',
        answer:
          'La source répond à la question d’où vient le clic, comme instagram, tandis que le support répond à la question de comment il est arrivé, comme social ou email. Une balise complète a besoin des deux.',
      },
      {
        question: 'Puis-je enregistrer ou réutiliser un modèle de lien UTM ?',
        answer:
          'Oui. Les préréglages de canal préremplissent les valeurs standard de source et de support, et vous pouvez copier un lien terminé et réutiliser le même schéma de nommage pour les campagnes futures.',
      },
      {
        question: 'Pourquoi mes rapports UTM montrent-ils la même campagne deux fois ?',
        answer:
          'Une casse mélangée ou une orthographe incohérente, comme Instagram contre instagram, crée des lignes distinctes. Gardez une seule convention de nommage en minuscules pour chaque lien.',
      },
    ],
  },
  'social-character-limit-checker': {
    slug: 'compteur-caracteres-reseaux-sociaux',
    name: 'Vérificateur de Limite de Caractères pour Réseaux Sociaux',
    shortDescription:
      'Mesurez la longueur des textes sur X, Instagram, LinkedIn, TikTok, Threads, Bluesky et YouTube, avec des aperçus de repli dans le fil.',
    keywords: [
      'vérificateur de limite de caractères sociaux',
      'compteur de caractères twitter',
      'limite de légende instagram',
      'vérificateur de longueur de publication linkedin',
      'compteur de caractères x',
      'compteur de caractères de légende instagram',
      'vérificateur de limite de légende tiktok',
      'limite de caractères threads',
      'compteur de caractères bluesky',
    ],
    seo: {
      title: 'Vérificateur de Limite de Caractères – Réseaux | UtilityFlow',
      description:
        'Vérifiez les limites de caractères et les aperçus de repli pour X, Instagram, LinkedIn, TikTok, Threads, Bluesky et YouTube — avec un comptage des émojis.',
      primaryKeyword: 'vérificateur de limite de caractères sociaux',
      secondaryKeywords: [
        'compteur de publication x twitter',
        'vérificateur de longueur de légende instagram',
        'aperçu du repli voir plus linkedin',
        'compteur de caractères de légende tiktok',
      ],
      longTailKeywords: [
        'vérifier limite de caractères et repli sur les plateformes sociales',
        'compteur twitter 280 caractères avec pondération url 23 caractères',
        'compteur bio instagram 150 caractères et légende',
        'combien de caractères dans une bio instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Écrivez une fois et vérifiez instantanément les plafonds stricts de caractères, la pondération des liens t.co de 23 caractères sur X, le nombre de hashtags et les aperçus de troncature au-dessus du repli sur 10 grandes surfaces sociales.',
    instructions: [
      {
        title: 'Écrivez ou collez votre brouillon social',
        description:
          'Tapez des légendes, des bios ou des descriptions de vidéos dans la zone d’édition.',
      },
      {
        title: 'Consultez les cartes de mesure des plateformes',
        description:
          'Voyez les barres d’utilisation vertes, orange et rouges pour X, Instagram, LinkedIn, TikTok, Threads, Bluesky et YouTube.',
      },
      {
        title: 'Vérifiez l’aperçu du repli « Voir plus »',
        description:
          'Choisissez une plateforme cible dans le menu déroulant ci-dessous pour inspecter où la troncature du fil coupe votre accroche d’ouverture.',
      },
      {
        title: 'Raccourcissez votre accroche au-dessus du repli',
        description:
          'Placez vos mots les plus importants dans les 125 premiers caractères pour Instagram ou 210 pour LinkedIn, pour que les lecteurs les voient avant le bouton « ...plus ».',
      },
      {
        title: 'Ajustez les hashtags, les mentions et les liens',
        description:
          'Supprimez ou raccourcissez les hashtags, les @mentions et les URL sur les plateformes où vous dépassez la limite, et rappelez-vous que X compte chaque lien comme 23 caractères.',
      },
      {
        title: 'Revérifiez et copiez le texte final',
        description:
          'Après chaque modification, confirmez que toutes les cartes de mesure sont vertes, puis copiez le texte. Si une plateforme affiche encore du rouge, supprimez des mots superflus ou déplacez les détails supplémentaires dans une réponse ou un commentaire.',
      },
    ],
    examples: [
      {
        title: 'Tester une publication avec lien sur X contre LinkedIn',
        input: 'Accroche de 140 caractères + https://example.com/very-long-campaign-url',
        output: 'X compte l’URL comme 23 caractères ; Instagram et LinkedIn comptent la longueur complète de l’URL.',
        explanation:
          'Reflète fidèlement le comportement d’enveloppement automatique des liens t.co sur X.',
      },
      {
        title: 'Vérifier une bio Instagram de 150 caractères',
        input: 'Bio de 148 caractères avec deux émojis et un saut de ligne',
        output: 'Instagram : 148 / 150 — dans la limite ; X : 148 / 160 — dans la limite.',
        explanation:
          'Chaque émoji compte pour un caractère et chaque saut de ligne compte aussi pour un caractère.',
      },
    ],
    benefits: [
      'Tient compte avec précision des émojis à plusieurs points de code grâce au comptage de caractères Array.from',
      'Modélise automatiquement la normalisation de longueur d’URL de 23 caractères sur X',
      'Affiche à la fois les plafonds maximums stricts et les seuils de troncature du fil (« Voir plus »)',
      'Compte en temps réel les hashtags, les @mentions et les URL intégrés',
    ],
    useCases: [
      'S’assurer que vos 125 à 210 premiers caractères accrochent les lecteurs avant le repli du fil',
      'Faire tenir les annonces de créateurs sous les limites de 280 caractères de X et de 300 caractères de Bluesky',
      'Modifier les bios LinkedIn et Instagram strictement dans les limites de 150 à 160 caractères',
      'Vérifier la visibilité des titres YouTube de 70 caractères sur mobile avant la publication',
    ],
    faqs: [
      {
        question: 'Pourquoi X (Twitter) compte-t-il les URL longues comme 23 caractères ?',
        answer:
          'X enveloppe les liens sortants via son raccourcisseur t.co, donc chaque URL http/https occupe 23 caractères du budget de 280 caractères de la publication, quelle que soit la longueur d’origine de l’URL.',
      },
      {
        question: 'Qu’est-ce que la longueur de « repli » affichée sur les cartes Instagram et LinkedIn ?',
        answer:
          'Les mises en page du fil replient les longues légendes après environ 125 caractères sur Instagram et 210 caractères sur LinkedIn, derrière un bouton « ...plus ». Placer votre accroche principale avant le repli augmente la lecture complète.',
      },
      {
        question: 'Cela compte-t-il les émojis comme 1 caractère ou 2 ?',
        answer:
          'En utilisant l’itération par points de code Unicode, les émojis simples standard comptent comme 1 caractère au lieu de paires de substitution UTF-16 gonflées.',
      },
      {
        question: 'Le vérificateur de limite de caractères sociaux est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et votre brouillon est compté localement dans votre navigateur sans être envoyé nulle part.',
      },
      {
        question: 'Quelle est la limite de caractères d’une publication sur X (Twitter) ?',
        answer:
          'Les publications standard sur X autorisent jusqu’à 280 caractères, chaque URL comptant comme 23 caractères en raison de l’enveloppement de lien t.co.',
      },
      {
        question: 'Quelle est la limite de caractères d’une légende Instagram ?',
        answer:
          'Les légendes Instagram autorisent jusqu’à 2 200 caractères, mais seuls les 125 premiers caractères environ s’affichent dans le fil avant le repli « ...plus ».',
      },
      {
        question: 'Quelle est la limite de caractères d’une bio Instagram ?',
        answer:
          'Les bios Instagram autorisent jusqu’à 150 caractères : chaque lettre, espace, émoji et saut de ligne compte dans ce budget serré.',
      },
      {
        question: 'Quelle est la limite de caractères d’une publication LinkedIn ?',
        answer:
          'Les publications LinkedIn autorisent jusqu’à 3 000 caractères, tandis que le fil affiche environ les 210 premiers caractères avant le bouton « voir plus ».',
      },
      {
        question: 'Quelle est la limite de caractères d’une légende TikTok ?',
        answer:
          'Les légendes de vidéos TikTok autorisent jusqu’à 4 000 caractères, même si les légendes courtes et percutantes fonctionnent généralement mieux, car les spectateurs scannent rapidement.',
      },
      {
        question: 'Quelle est la limite de caractères de Threads ?',
        answer:
          'Les publications Threads autorisent jusqu’à 500 caractères, ce qui est plus long qu’une publication standard sur X, mais assez court pour récompenser une écriture serrée.',
      },
      {
        question: 'Quelle est la limite de caractères de Bluesky ?',
        answer:
          'Les publications Bluesky autorisent jusqu’à 300 caractères, soit légèrement plus que la limite de 280 caractères d’une publication standard sur X.',
      },
      {
        question: 'Quelle est la limite de caractères d’un titre YouTube ?',
        answer:
          'Les titres YouTube autorisent jusqu’à 100 caractères, mais les résultats de recherche mobiles n’en affichent généralement que les 70 premiers : placez donc vos mots-clés en premier.',
      },
      {
        question: 'Quelle est la limite de caractères d’une description YouTube ?',
        answer:
          'Les descriptions de vidéos YouTube autorisent jusqu’à 5 000 caractères, les une ou deux premières lignes étant visibles avant que les spectateurs appuient sur « afficher plus ».',
      },
      {
        question: 'Comment fonctionne le repli du fil sur Instagram ?',
        answer:
          'Instagram replie les légendes après environ 125 caractères dans le fil, donc les lecteurs doivent appuyer sur « ...plus » pour voir le reste. Mettez votre accroche et votre message clé en premier.',
      },
      {
        question: 'Comment fonctionne le repli « voir plus » de LinkedIn ?',
        answer:
          'LinkedIn affiche environ les 210 premiers caractères d’une publication dans le fil, puis masque le reste derrière « voir plus » : commencez donc par une phrase qui mérite le clic.',
      },
      {
        question: 'Les hashtags comptent-ils dans la limite de caractères ?',
        answer:
          'Oui. Chaque caractère d’un hashtag, y compris le symbole # lui-même, compte dans la limite de la publication sur chaque plateforme.',
      },
      {
        question: 'Les sauts de ligne comptent-ils comme des caractères ?',
        answer:
          'Oui. Chaque saut de ligne de votre brouillon compte pour un caractère, donc les lignes vides supplémentaires grignotent les limites serrées comme la bio Instagram de 150 caractères.',
      },
      {
        question: 'Les émojis comptent-ils pour un caractère sur chaque plateforme ?',
        answer:
          'Ce vérificateur compte les émojis simples standard comme un caractère grâce au comptage par points de code, mais les émojis complexes composés de symboles joints peuvent compter davantage sur certaines plateformes.',
      },
      {
        question: 'Les URL comptent-elles pareil sur chaque plateforme ?',
        answer:
          'Non. X compte chaque URL comme 23 caractères via l’enveloppement t.co, tandis qu’Instagram, LinkedIn et la plupart des autres plateformes comptent la longueur complète du lien.',
      },
      {
        question: 'Puis-je vérifier plusieurs plateformes à la fois ?',
        answer:
          'Oui. Tapez ou collez votre brouillon une fois et chaque carte de mesure de plateforme se met à jour en même temps, pour que vous puissiez adapter une publication pour X, Instagram, LinkedIn et plus encore.',
      },
    ],
  },
  'unicode-fancy-text-formatter': {
    slug: 'formateur-texte-unicode',
    name: 'Formateur de Texte Unicode Élégant',
    shortDescription:
      'Convertissez du texte ASCII brut en styles Unicode gras, italique, monospace, script, petites capitales et pleine largeur pour les bios.',
    keywords: [
      'générateur de texte élégant',
      'texte unicode en gras',
      'formateur de police pour bio instagram',
      'générateur de petites capitales',
      'générateur de texte en gras pour instagram',
      'générateur de texte unicode en italique',
      'générateur de texte monospace',
      'générateur de texte script',
      'générateur de texte pleine largeur',
    ],
    seo: {
      title: 'Formateur de Texte Unicode Élégant – Styles | UtilityFlow',
      description:
        'Transformez du texte brut en styles Unicode gras, italique, monospace, script et petites capitales pour bios et publications — copiez-collez partout, gratuit.',
      primaryKeyword: 'formateur de texte unicode élégant',
      secondaryKeywords: [
        'générateur de texte unicode en gras',
        'convertisseur de texte en petites capitales',
        'polices pour bios de réseaux sociaux',
        'texte gras italique pour bios sociales',
      ],
      longTailKeywords: [
        'copier-coller texte unicode en gras pour linkedin et instagram',
        'convertir texte brut en petites capitales et monospace unicode',
        'conseils d’accessibilité pour texte social stylé unicode',
        'comment mettre du texte en gras dans une bio instagram sans appli',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez des lettres et des chiffres bruts en symboles alphanumériques mathématiques Unicode standard, en petites capitales et en glyphes pleine largeur qui conservent le style gras ou monospace dans les bios sociales en texte brut.',
    instructions: [
      {
        title: 'Saisissez un titre court ou un libellé de bio',
        description:
          'Tapez une courte phrase, un titre de section ou un slogan de pseudonyme dans Texte à styliser.',
      },
      {
        title: 'Parcourez 10 styles Unicode',
        description:
          'Comparez les aperçus Sans-serif gras, Italique, Monospace, Script, Double-barre, Petites capitales et Pleine largeur.',
      },
      {
        title: 'Comparez les aperçus côte à côte',
        description:
          'Parcourez les dix cartes de style pour trouver celle qui se lit le mieux en petite taille, car certains styles script et double-barre sont plus difficiles à lire.',
      },
      {
        title: 'Copiez votre style préféré',
        description:
          'Cliquez sur Copier sur la carte de style de votre choix pour placer le texte Unicode stylisé dans votre presse-papiers.',
      },
      {
        title: 'Collez et vérifiez le rendu',
        description:
          'Collez le texte dans votre bio, votre légende ou votre publication, puis regardez-le sur un autre appareil pour vous assurer qu’aucun caractère ne s’affiche comme une case vide.',
      },
      {
        title: 'Copiez de façon responsable',
        description:
          'Cliquez sur Copier sur votre style préféré et gardez le texte principal essentiel en texte brut standard pour l’accessibilité des lecteurs d’écran.',
      },
    ],
    examples: [
      {
        title: 'Formater un séparateur de bio LinkedIn ou X',
        input: 'Nouvelle Boîte à Outils 2025',
        output: '𝗡𝗼𝘂𝘃𝗲𝗹𝗹𝗲 𝗕𝗼î𝘁𝗲 à 𝗢𝘂𝘁𝗶𝗹𝘀 𝟮𝟬𝟮𝟱 (Sans-serif gras)',
        explanation:
          'Utilise les points de code Unicode mathématiques officiels U+1D5D4–U+1D7EC pour le gras.',
      },
      {
        title: 'Titre en petites capitales pour une bio',
        input: 'Créateur de contenu',
        output: 'Cʀéᴀᴛᴇᴜʀ ᴅᴇ ᴄᴏɴᴛᴇɴᴜ (Petites capitales)',
        explanation:
          'Les petites capitales utilisent des glyphes Unicode distincts qui restent lisibles en petite taille.',
      },
    ],
    benefits: [
      'Affiche de vrais glyphes Unicode plutôt que des images ou du HTML propre à une plateforme',
      'Comprend un avis d’accessibilité clair sur le comportement des lecteurs d’écran et de la recherche',
      'Gère correctement les chiffres, la ponctuation et les symboles spéciaux de tableau noir comme ℂ, ℕ, ℝ',
      'Copie en un clic pour chaque carte de style',
    ],
    useCases: [
      'Mettre en valeur les titres de section dans les bios de profil Instagram ou TikTok',
      'Formater les pseudonymes techniques ou les dates en Unicode monospace',
      'Ajouter des libellés discrets en petites capitales dans les newsletters ou notes en texte brut',
      'Styliser de courtes annonces là où le gras Markdown natif n’est pas pris en charge',
    ],
    faqs: [
      {
        question: 'Pourquoi l’outil comprend-il un avertissement d’accessibilité ?',
        answer:
          'Les symboles mathématiques Unicode sont destinés aux équations plutôt qu’à la prose, donc les lecteurs d’écran d’assistance les lisent souvent à voix haute comme « A majuscule gras sans-serif mathématique » et les barres de recherche sociales peuvent ne pas les indexer.',
      },
      {
        question: 'S’agit-il de vrais fichiers de police ?',
        answer:
          'Non. Ce sont des caractères Unicode standardisés mappés sur des blocs de symboles distincts, ce qui explique pourquoi ils survivent au collage dans les champs sociaux en texte brut.',
      },
      {
        question: 'Pourquoi les lettres accentuées non ASCII restent-elles inchangées ?',
        answer:
          'Les blocs alphanumériques mathématiques Unicode ne définissent que les lettres latines non accentuées A–Z et les chiffres 0–9, donc les caractères accentués restent intacts pour préserver la lisibilité.',
      },
      {
        question: 'Le formateur de texte Unicode élégant est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et votre texte est converti localement dans votre navigateur sans être envoyé nulle part.',
      },
      {
        question: 'Quels styles Unicode puis-je créer avec ce formateur ?',
        answer:
          'Vous pouvez créer des styles Sans-serif gras, Italique, Monospace, Script, Double-barre, Fraktur, Petites capitales et Pleine largeur, avec dix cartes de style à comparer d’un coup d’œil.',
      },
      {
        question: 'Le texte élégant fonctionnera-t-il sur Instagram ?',
        answer:
          'Oui. Le texte Unicode stylisé se colle directement dans les bios, les légendes et les commentaires Instagram, car il est fait de vrais caractères, et non d’images ou de polices.',
      },
      {
        question: 'Le texte élégant fonctionnera-t-il sur LinkedIn et X ?',
        answer:
          'Oui. LinkedIn et X acceptent tous deux les caractères Unicode dans les bios et les publications, donc les titres en gras ou en petites capitales se collent comme du texte ordinaire.',
      },
      {
        question: 'Puis-je utiliser du texte élégant dans ma bio TikTok ?',
        answer:
          'Oui. Les bios TikTok acceptent les caractères Unicode, donc vous pouvez styliser un nom court ou un slogan, même s’il vaut mieux garder le reste de la bio en texte brut.',
      },
      {
        question: 'Pourquoi certains caractères ressemblent-ils à des cases sur certains appareils ?',
        answer:
          'Les téléphones ou ordinateurs plus anciens peuvent ne pas avoir de polices couvrant chaque bloc de symboles Unicode, donc un glyphe manquant s’affiche comme une case vide. Testez votre texte stylisé sur un autre appareil avant de le publier.',
      },
      {
        question: 'Puis-je utiliser du texte élégant pour toute ma bio ?',
        answer:
          'Ce n’est pas recommandé. Les lecteurs d’écran peinent avec le texte stylisé et la recherche peut ne pas le retrouver : utilisez donc le texte élégant uniquement pour les titres courts et gardez le reste en texte brut.',
      },
      {
        question: 'Le texte élégant affecte-t-il la recherche sur les plateformes sociales ?',
        answer:
          'Oui, il peut. Une recherche d’un mot en texte brut peut ne pas correspondre au même mot écrit en caractères mathématiques gras : évitez donc de styliser les mots-clés que les gens recherchent.',
      },
      {
        question: 'Les lecteurs d’écran peuvent-ils lire le texte Unicode élégant ?',
        answer:
          'Souvent mal. Les lecteurs d’écran peuvent lire chaque lettre stylisée à voix haute avec son nom Unicode complet, ce qui rend les longs passages stylisés déroutants pour les utilisateurs aveugles.',
      },
      {
        question: 'Puis-je mettre du texte en gras dans WhatsApp avec ce formateur ?',
        answer:
          'Oui, le gras Unicode se colle dans WhatsApp, mais l’application a aussi un formatage natif : entourer le texte d’astérisques comme *gras* est donc généralement le choix le plus simple.',
      },
      {
        question: 'Les chiffres et la ponctuation changent-ils aussi ?',
        answer:
          'Les chiffres se convertissent dans la plupart des styles, comme le gras et le monospace, tandis que la plupart des signes de ponctuation restent inchangés, car les blocs de symboles Unicode n’en définissent pas de versions stylisées.',
      },
      {
        question: 'Puis-je reconvertir le texte stylisé en texte normal ?',
        answer:
          'L’outil convertit le texte brut en texte stylisé : pour retrouver du texte brut, retapez la phrase d’origine ou collez-la depuis l’endroit où vous l’avez copiée la première fois.',
      },
      {
        question: 'Le texte Unicode élégant est-il la même chose qu’une police ?',
        answer:
          'Non. Une police change l’apparence des lettres ordinaires sur un seul appareil, tandis que le texte Unicode élégant utilise des caractères entièrement différents, ce qui explique pourquoi le style survit au copier-coller.',
      },
      {
        question: 'Le texte élégant fonctionnera-t-il dans les lignes d’objet des e-mails ?',
        answer:
          'Il s’affiche généralement dans les clients de messagerie modernes, mais les caractères stylisés peuvent déclencher les filtres anti-spam et dérouter les lecteurs d’écran : le texte brut est donc le choix le plus sûr pour les e-mails.',
      },
      {
        question: 'Puis-je utiliser du texte élégant dans les titres YouTube ?',
        answer:
          'Oui, YouTube accepte l’Unicode dans les titres, mais les mots stylisés peuvent ne pas correspondre aux requêtes de recherche en texte brut : utilisez-le avec parcimonie et gardez les mots-clés recherchables en texte brut.',
      },
      {
        question: 'Ce formateur envoie-t-il mon texte quelque part ?',
        answer:
          'Non. Toute la conversion se fait localement dans votre navigateur, donc rien de ce que vous tapez n’est envoyé à un serveur ni enregistré.',
      },
      {
        question: 'Qu’est-ce que le texte pleine largeur ?',
        answer:
          'Le texte pleine largeur utilise des caractères Unicode larges, comme Ｆｕｌｌｗｉｄｔｈ, où chaque lettre occupe le double de la largeur normale, donnant aux titres un aspect aéré et espacé.',
      },
    ],
  },
  'bio-line-break-formatter': {
    slug: 'formateur-sauts-ligne-bio',
    name: 'Formateur de Sauts de Ligne pour Bio Instagram',
    shortDescription:
      'Préservez des paragraphes vides propres dans les légendes et les bios Instagram en supprimant les espaces de fin et en ajoutant des espaces invisibles.',
    keywords: [
      'générateur de sauts de ligne instagram',
      'formateur de sauts de ligne pour bio',
      'outil d’espacement de légende',
      'saut de ligne invisible pour réseaux sociaux',
      'espaceur de légende instagram',
      'sauts de ligne pour bio instagram',
      'outil de saut de ligne de légende',
      'caractère invisible pour instagram',
      'sauts de ligne pour bio tiktok',
    ],
    seo: {
      title: 'Formateur de Sauts de Ligne Bio – Instagram | UtilityFlow',
      description:
        'Gardez un espacement de paragraphe propre dans les légendes et bios Instagram, Threads et TikTok — supprimez les espaces de fin et copiez facilement en un clic.',
      primaryKeyword: 'formateur de sauts de ligne pour bio',
      secondaryKeywords: [
        'sauts de ligne de légende instagram',
        'espaceur invisible pour bio instagram',
        'préserver les lignes vides sur les réseaux sociaux',
        'outil d’espacement de bio instagram',
      ],
      longTailKeywords: [
        'garder l’espacement des paragraphes dans les légendes instagram sans points',
        'corriger les espaces de fin qui cassent les sauts de ligne de bio instagram',
        'copier une légende sociale formatée proprement dans le presse-papiers',
        'comment ajouter des sauts de ligne dans une bio instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Empêchez les applications sociales de fusionner les lignes vides de vos légendes et bios en supprimant les espaces de fin cachés et en insérant éventuellement des espaces invisibles Braille Blank (⠀) dans les intervalles de paragraphe.',
    instructions: [
      {
        title: 'Écrivez ou collez votre légende',
        description:
          'Rédigez un texte à plusieurs paragraphes ou des lignes de bio avec des lignes vides partout où vous voulez un espace visuel.',
      },
      {
        title: 'Sélectionnez la stratégie d’espacement',
        description:
          'Choisissez Espaceur invisible (U+2800), Espaceur à point minimal (.) ou Nettoyage des espaces de fin uniquement.',
      },
      {
        title: 'Consultez l’aperçu formaté',
        description:
          'Vérifiez l’aperçu pour confirmer que chaque ligne vide a survécu et qu’il ne reste aucun espace de fin à la fin de vos lignes.',
      },
      {
        title: 'Vérifiez le nombre de caractères',
        description:
          'Surveillez le compteur en direct pour vous assurer que votre bio tient toujours dans la limite de 150 caractères d’Instagram, car chaque espaceur compte pour un caractère.',
      },
      {
        title: 'Copiez le texte formaté',
        description:
          'Cliquez sur Copier la légende formatée et vérifiez si votre bio tient dans la limite de 150 caractères d’Instagram.',
      },
      {
        title: 'Collez et vérifiez sur la plateforme',
        description:
          'Collez dans Instagram, Threads ou TikTok et prévisualisez la publication. Si les sauts se replient encore, passez en mode Espaceur invisible et copiez à nouveau.',
      },
    ],
    examples: [
      {
        title: 'Nettoyer les espaces de fin avant de coller dans Instagram',
        input: 'Ligne 1   \\n\\nLigne 2',
        output: 'Ligne 1\\n⠀\\nLigne 2',
        explanation:
          'Supprime les espaces de fin après « Ligne 1 » et insère un espaceur invisible U+2800 pour que l’intervalle vide persiste.',
      },
      {
        title: 'Structurer une bio à plusieurs lignes',
        input: 'Créateur · Paris · Liens ci-dessous',
        output: 'Créateur\\n⠀\\nParis\\n⠀\\nLiens ci-dessous',
        explanation:
          'Chaque ligne vide reçoit un espaceur invisible pour que la bio empilée garde sa structure après le collage.',
      },
    ],
    benefits: [
      'Élimine les espaces de fin invisibles qui déclenchent les bogues de fusion de lignes des plateformes sociales',
      'Prend en charge à la fois les espaces Unicode invisibles et les séparateurs à point propres',
      'Fusionne automatiquement les doubles espaces accidentels à l’intérieur des phrases',
      'Vérifie la longueur totale par rapport au plafond de 150 caractères de la bio Instagram en direct',
    ],
    useCases: [
      'Formater des légendes Instagram et Facebook lisibles à plusieurs paragraphes',
      'Structurer des bios de profil Instagram ou TikTok empilées à puces',
      'Nettoyer le texte collé depuis Notion, Google Docs ou Notes avant la publication',
      'Séparer le récit principal de la légende des appels à l’action du pied de page',
    ],
    faqs: [
      {
        question: 'Pourquoi les lignes vides disparaissent-elles quand je colle du texte directement dans Instagram ?',
        answer:
          'Les claviers mobiles et les éditeurs de texte laissent souvent des espaces de fin à la fin des phrases, que les analyseurs sociaux traitent comme des artefacts de formatage et fusionnent en un seul saut de ligne.',
      },
      {
        question: 'Quel caractère est utilisé pour le mode Espaceur invisible ?',
        answer:
          'Il insère U+2800 (Braille Pattern Blank) uniquement sur les lignes autrement vides, pour que l’espacement visuel tienne sans afficher de points ou de tirets gênants.',
      },
      {
        question: 'Cela modifie-t-il le texte à l’intérieur de mes phrases ?',
        answer:
          'Seuls les espaces blancs de fin à la fin des lignes sont supprimés, plus éventuellement les espaces répétés à l’intérieur des lignes quand cette option est activée.',
      },
      {
        question: 'Le formateur de sauts de ligne pour bio est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et votre légende est formatée localement dans votre navigateur sans être envoyée nulle part.',
      },
      {
        question: 'Pourquoi les légendes Instagram perdent-elles leurs sauts de ligne ?',
        answer:
          'Les espaces de fin laissés par les claviers et les éditeurs font que les applications sociales traitent une ligne vide comme un artefact et la fusionnent. Supprimer ces espaces et ajouter un espaceur conserve l’intervalle.',
      },
      {
        question: 'Puis-je utiliser ce formateur pour les légendes TikTok aussi ?',
        answer:
          'Oui. Les légendes TikTok acceptent les mêmes sauts de ligne et espaces invisibles, donc le texte formaté se colle avec son espacement de paragraphe intact.',
      },
      {
        question: 'Puis-je utiliser ce formateur pour les publications Threads ?',
        answer:
          'Oui. Threads préserve les lignes vides dans le texte formaté, donc vous pouvez structurer les publications plus longues avec des sauts de paragraphe clairs.',
      },
      {
        question: 'Puis-je l’utiliser pour ma bio Instagram ?',
        answer:
          'Oui. Il fonctionne pour les bios empilées à plusieurs lignes, mais surveillez le compteur en direct, car les bios Instagram n’autorisent que 150 caractères et chaque espaceur compte.',
      },
      {
        question: 'Quelle est la différence entre Espaceur invisible et Espaceur à point ?',
        answer:
          'L’espaceur invisible place un caractère Braille vide sur les lignes vides pour que l’intervalle semble vide, tandis que l’espaceur à point y place un point visible, que certaines personnes préfèrent pour la fiabilité.',
      },
      {
        question: 'Quand dois-je choisir « Nettoyage des espaces de fin uniquement » ?',
        answer:
          'Choisissez-le quand la plateforme préserve déjà vos sauts de ligne et que vous voulez seulement supprimer les espaces de fin cachés qui pourraient encore déclencher une fusion.',
      },
      {
        question: 'L’espaceur invisible compte-t-il dans la limite de caractères de la bio Instagram ?',
        answer:
          'Oui. Chaque espaceur U+2800 vaut un caractère, donc une bio avec plusieurs lignes vides utilise une partie du budget de 150 caractères.',
      },
      {
        question: 'Le caractère invisible s’affichera-t-il comme un symbole bizarre ?',
        answer:
          'Sur la plupart des téléphones modernes, il s’affiche comme un espace vide, mais les polices très anciennes peuvent l’afficher comme une case vide : testez donc votre bio sur un autre appareil après le collage.',
      },
      {
        question: 'Puis-je formater du texte collé depuis Google Docs ou Notion ?',
        answer:
          'Oui. Le texte copié depuis Docs, Notion ou Notes comporte souvent des espaces de fin cachés, et cet outil les nettoie avant que vous colliez dans une application sociale.',
      },
      {
        question: 'L’outil supprime-t-il les espaces à l’intérieur de mes phrases ?',
        answer:
          'Non. Il ne supprime que les espaces blancs de fin à la fin des lignes, et il ne fusionne les espaces répétés à l’intérieur d’une ligne que quand vous activez cette option.',
      },
      {
        question: 'Combien de lignes vides dois-je laisser entre les paragraphes ?',
        answer:
          'Une ligne vide suffit généralement pour des légendes lisibles. Deux lignes ou plus peuvent sembler espacées dans le fil et gaspiller des caractères dans une bio.',
      },
      {
        question: 'Puis-je utiliser ce formateur pour les publications Facebook ?',
        answer:
          'Oui. Facebook préserve généralement les sauts de ligne de lui-même, mais l’outil reste utile pour nettoyer les espaces de fin du texte collé depuis d’autres applications.',
      },
      {
        question: 'Cet outil envoie-t-il ma légende quelque part ?',
        answer:
          'Non. Tout le formatage se fait localement dans votre navigateur, donc le texte de votre légende n’est jamais envoyé à un serveur ni enregistré.',
      },
      {
        question: 'Pourquoi ma légende semble-t-elle encore fusionnée après le collage ?',
        answer:
          'Certaines applications suppriment le formatage quand vous collez. Essayez de copier à nouveau en mode Espaceur invisible, collez directement dans le champ de légende plutôt que via une autre application, et vérifiez l’aperçu.',
      },
      {
        question: 'Puis-je utiliser des sauts de ligne dans les publications X (Twitter) ?',
        answer:
          'Oui. X prend en charge les sauts de ligne dans les publications, et ce formateur fonctionne là aussi, mais rappelez-vous que chaque saut de ligne compte dans la limite de 280 caractères.',
      },
      {
        question: 'Puis-je utiliser ce formateur pour les descriptions YouTube ?',
        answer:
          'Oui. Les descriptions YouTube préservent les lignes vides, donc le texte formaté garde son espacement de paragraphe quand les spectateurs développent la description.',
      },
    ],
  },
  'youtube-timestamp-generator': {
    slug: 'generateur-horodatage-youtube',
    name: 'Générateur d’Horodatage et de Chapitres YouTube',
    shortDescription:
      'Créez des descriptions de chapitres de vidéos YouTube triées, validées selon les spécifications YouTube, et générez des liens de saut ?t= cliquables.',
    keywords: [
      'générateur d’horodatage youtube',
      'créateur de chapitres youtube',
      'générateur de liens temporels youtube',
      'formateur de chapitres vidéo',
      'créateur d’horodatage de chapitres youtube',
      'outil de chapitres de description youtube',
      'liens d’horodatage youtube cliquables',
      'validateur de chapitres youtube',
      'générateur de codes temporels de chapitres vidéo',
    ],
    seo: {
      title: 'Générateur d’Horodatage YouTube – Chapitres | UtilityFlow',
      description:
        'Créez des chapitres YouTube triés et validés : début à 00:00, 3 chapitres minimum et espacement de 10 secondes, plus des liens de saut ?t= cliquables.',
      primaryKeyword: 'générateur d’horodatage youtube',
      secondaryKeywords: [
        'formateur de chapitres youtube',
        'créateur d’url d’horodatage youtube',
        'liste de vérification des chapitres vidéo',
        'outil de code temporel de chapitres youtube',
      ],
      longTailKeywords: [
        'générer bloc de description de chapitres vidéo youtube en ligne',
        'créer liens de saut d’horodatage youtube cliquables pour chapitres',
        'valider règle youtube des 10 secondes minimum entre chapitres',
        'formater chapitres youtube commençant à 00:00 avec trois chapitres',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Assemblez des blocs de chapitres YouTube propres et triés chronologiquement pour vos descriptions de vidéos — vérifiés automatiquement par rapport aux règles officielles des chapitres YouTube — et générez des liens de saut `?t=` cliquables pour les commentaires, les newsletters ou les notes d’émission.',
    instructions: [
      {
        title: 'Collez votre URL YouTube (facultatif)',
        description:
          'Saisissez n’importe quel lien youtube.com/watch, youtu.be ou Shorts pour générer automatiquement des liens profonds cliquables par chapitre.',
      },
      {
        title: 'Ajoutez et intitulez les chapitres',
        description:
          'Saisissez des horodatages MM:SS ou HH:MM:SS et des titres de chapitres ; cliquez sur Trier chronologiquement à tout moment si les lignes se mélangent.',
      },
      {
        title: 'Triez et vérifiez les règles des chapitres',
        description:
          'Triez la liste chronologiquement et consultez la vérification des spécifications pour le début à 00:00, au moins 3 chapitres et l’espacement minimum de 10 secondes.',
      },
      {
        title: 'Corrigez les avertissements avant de copier',
        description:
          'Si un avertissement apparaît, ajustez l’horodatage ou le titre fautif pour que chaque chapitre respecte les règles de YouTube avant l’exportation.',
      },
      {
        title: 'Copiez le bloc de description et les liens',
        description:
          'Copiez le bloc de chapitres formaté pour la description de votre vidéo, et copiez les liens ?t= individuels pour les commentaires, les notes d’émission ou les newsletters.',
      },
      {
        title: 'Astuce : testez un lien avant de publier',
        description:
          'Ouvrez un lien ?t= généré dans un nouvel onglet pour confirmer qu’il saute au bon moment, surtout après avoir modifié des horodatages tardivement.',
      },
    ],
    examples: [
      {
        title: 'Formater une description de tutoriel à 4 chapitres',
        input: '00:00 Intro · 01:15 Installation · 04:40 Démo · 08:20 Résumé',
        output: '00:00 Intro\n01:15 Installation\n04:40 Démo\n08:20 Résumé (+ https://youtu.be/...?t=75)',
        explanation:
          'Convertit directement 01:15 en ?t=75s pour un partage en un clic.',
      },
      {
        title: 'Vérifier un chapitre trop court',
        input: '00:00 Intro · 00:05 Démarrage · 01:00 Contenu',
        output: 'Avertissement : le chapitre « Démarrage » ne dure que 5 secondes, sous le minimum de 10 secondes.',
        explanation:
          'YouTube ignore les chapitres de moins de 10 secondes : l’outil signale l’écart pour que vous déplaciez l’horodatage.',
      },
    ],
    benefits: [
      'Valide automatiquement les règles YouTube de début à 00:00, de minimum de 3 chapitres et de durée de 10 secondes',
      'Bascule facilement vers le format HH:MM:SS quand les vidéos dépassent 60 minutes',
      'Extrait les identifiants de vidéo des URL standard, raccourcies, en direct, intégrées et Shorts',
      'Génère des liens profonds ?t= prêts à partager pour les notes d’émission et les commentaires épinglés',
    ],
    useCases: [
      'Ajouter des barres de défilement de chapitres consultables aux tutoriels et podcasts YouTube',
      'Créer des horodatages de notes d’émission cliquables pour les épisodes de podcast',
      'Partager les étapes exactes de tutoriels dans la documentation, Slack ou Discord',
      'Contrôler les listes de chapitres de longs diffusions en direct pour les fautes de formatage',
    ],
    faqs: [
      {
        question: 'Pourquoi les chapitres de ma vidéo YouTube ne s’affichent-ils pas sur la barre de progression ?',
        answer:
          'YouTube exige que le premier horodatage soit exactement 00:00, au moins 3 horodatages listés par ordre chronologique croissant, et que chaque chapitre dure au moins 10 secondes.',
      },
      {
        question: 'Les horodatages de plus de 60 minutes doivent-ils être en MM:SS ou en HH:MM:SS ?',
        answer:
          'Dès qu’un chapitre atteint 60 minutes ou plus, cet outil formate automatiquement chaque horodatage de façon cohérente en notation HH:MM:SS.',
      },
      {
        question: 'Cela se connecte-t-il à l’API de données YouTube ?',
        answer:
          'Non. Tout est analysé et formaté localement dans votre navigateur sans nécessiter d’OAuth de compte Google ni de clés API.',
      },
      {
        question: 'Le générateur d’horodatage YouTube est-il gratuit ?',
        answer:
          'Oui, il est gratuit dans votre navigateur, sans inscription, et rien n’est envoyé à un serveur.',
      },
      {
        question: 'Quel est le nombre minimum de chapitres requis par YouTube ?',
        answer:
          'YouTube a besoin d’au moins 3 chapitres dans la description avant d’afficher les marqueurs de chapitres sur la barre de progression.',
      },
      {
        question: 'Pourquoi le premier chapitre YouTube doit-il commencer à 00:00 ?',
        answer:
          'YouTube utilise le premier horodatage pour ancrer le système de chapitres : une description qui commence plus tard ne générera donc aucun chapitre.',
      },
      {
        question: 'Que se passe-t-il si deux chapitres sont espacés de moins de 10 secondes ?',
        answer:
          'YouTube ignore les chapitres de moins de 10 secondes : cet outil signale donc l’écart et vous devez déplacer l’horodatage suivant vers l’avant.',
      },
      {
        question: 'Puis-je utiliser le générateur d’horodatage YouTube pour les Shorts ?',
        answer:
          'Oui, vous pouvez coller un lien Shorts et l’outil générera toujours des liens de saut ?t=, même si les chapitres eux-mêmes sont surtout utiles pour les vidéos plus longues.',
      },
      {
        question: 'Comment fonctionnent les liens de saut ?t= ?',
        answer:
          'Chaque lien ajoute l’heure de début du chapitre en secondes à l’URL de la vidéo, donc un clic ouvre la vidéo à ce moment exact.',
      },
      {
        question: 'Quels formats d’URL YouTube le générateur d’horodatage accepte-t-il ?',
        answer:
          'Il accepte les liens standard youtube.com/watch, les liens raccourcis youtu.be, les liens en direct, les liens intégrés et les liens Shorts.',
      },
      {
        question: 'Les chapitres doivent-ils être par ordre chronologique ?',
        answer:
          'Oui, YouTube exige un ordre croissant, et cet outil peut trier vos lignes chronologiquement en un clic si elles se mélangent.',
      },
      {
        question: 'Puis-je ajouter des chapitres à une vidéo que je n’ai pas mise en ligne ?',
        answer:
          'Vous pouvez générer des liens d’horodatage pour n’importe quelle vidéo publique afin de partager des moments exacts, mais les chapitres n’apparaissent que quand le propriétaire de la vidéo les ajoute à la description.',
      },
      {
        question: 'Combien de chapitres puis-je ajouter avec cet outil ?',
        answer:
          'Il n’y a pas de plafond fixe dans l’outil, mais les très longues listes de chapitres deviennent difficiles à lire : concentrez-les donc sur les vraies sections de la vidéo.',
      },
      {
        question: 'Dois-je inclure des titres de chapitres, ou les heures suffisent-elles ?',
        answer:
          'YouTube a besoin d’un titre après chaque horodatage : ajoutez donc un court libellé descriptif pour chaque chapitre listé.',
      },
      {
        question: 'Puis-je utiliser ces horodatages dans la description d’un épisode de podcast ?',
        answer:
          'Oui, le même format 00:00 fonctionne dans les notes d’émission et les descriptions d’épisodes de podcast, et les liens ?t= sont pratiques pour les auditeurs.',
      },
      {
        question: 'Pourquoi l’outil bascule-t-il tous les horodatages en HH:MM:SS pour les longues vidéos ?',
        answer:
          'Les formats mélangés MM:SS et HH:MM:SS déroutent les spectateurs et les analyseurs : l’outil garde donc chaque horodatage dans un seul format cohérent.',
      },
      {
        question: 'L’URL de ma vidéo ou ma liste de chapitres est-elle envoyée quelque part ?',
        answer:
          'Non, toute l’analyse et le formatage se font localement dans votre navigateur, et vos URL et titres de chapitres ne quittent jamais votre appareil.',
      },
      {
        question: 'Puis-je modifier un chapitre après l’avoir ajouté ?',
        answer:
          'Oui, vous pouvez modifier n’importe quel horodatage ou titre, trier à nouveau la liste et revérifier les avertissements de spécification avant de copier le bloc mis à jour.',
      },
      {
        question: 'Que dois-je faire si un lien généré s’ouvre au mauvais moment ?',
        answer:
          'Vérifiez que l’horodatage a été saisi en minutes et secondes dans le bon ordre, puis copiez à nouveau le lien après l’avoir corrigé.',
      },
      {
        question: 'Les chapitres YouTube aident-ils les spectateurs à trouver le contenu plus vite ?',
        answer:
          'Oui, les chapitres permettent aux spectateurs de sauter directement à la section dont ils ont besoin, ce qui rend les longs tutoriels, critiques et podcasts plus faciles à parcourir.',
      },
    ],
  },
  'social-thumbnail-previewer': {
    slug: 'apercu-miniatures-reseaux-sociaux',
    name: 'Aperçu de Miniatures YouTube et Sociales',
    shortDescription:
      'Prévisualisez les images de miniatures locales avec les titres dans les mises en page de fil de bureau et de barre latérale, avec des vérifications 16:9 et 2 Mo.',
    keywords: [
      'aperçu de miniature youtube',
      'testeur de miniature',
      'aperçu de troncature de titre vidéo',
      'vérificateur de miniature 16:9',
      'vérificateur de taille de miniature youtube',
      'aperçu de miniature en mode sombre',
      'aperçu de miniature de fil youtube',
      'vérificateur de zone sûre de miniature',
      'outil de maquette de miniature vidéo',
    ],
    seo: {
      title: 'Aperçu de Miniatures YouTube et Sociales | UtilityFlow',
      description:
        'Prévisualisez miniature et titre dans les fils YouTube clairs et sombres avant la publication, avec des vérifications 16:9, 1280×720 et 2 Mo — sans envoi.',
      primaryKeyword: 'aperçu de miniature youtube',
      secondaryKeywords: [
        'aperçu de miniature dans le fil',
        'vérificateur de longueur de titre youtube',
        'outil de zone sûre de miniature',
        'vérificateur de taille de miniature youtube',
      ],
      longTailKeywords: [
        'prévisualiser miniature youtube en mode sombre avant publication',
        'vérifier chevauchement du badge d’horodatage en bas à droite',
        'vérificateur privé de miniature 1280x720 côté client',
        'tester lisibilité de miniature youtube en taille barre latérale',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Testez vos miniatures et titres de vidéos non publiés dans des mises en page réalistes de fil d’accueil clair et sombre et de barre latérale compacte — en vérifiant localement les dimensions HD 1280×720, le rapport 16:9, la limite de taille de fichier de 2 Mo et le chevauchement de l’horodatage en bas à droite.',
    instructions: [
      {
        title: 'Chargez une image de miniature locale',
        description:
          'Choisissez un fichier PNG, JPG ou WebP sur le disque ; il reste strictement dans la mémoire locale du navigateur via des URL d’objet.',
      },
      {
        title: 'Saisissez le titre, la chaîne et la durée',
        description:
          'Tapez le titre candidat et la durée de la vidéo pour vérifier la troncature du fil sur deux lignes et la couverture du badge d’angle.',
      },
      {
        title: 'Basculez le mode sombre et la zone sûre',
        description:
          'Basculez entre les fils clair et sombre et activez la superposition de zone d’angle d’horodatage orange avant l’exportation.',
      },
      {
        title: 'Comparez les tailles du fil et de la barre latérale',
        description:
          'Vérifiez côte à côte la grande carte de fil de bureau et la miniature compacte de barre latérale pour repérer le texte illisible en petite taille.',
      },
      {
        title: 'Vérifiez les avertissements de spécification',
        description:
          'Consultez les vérifications de dimensions 1280×720, de rapport 16:9 et de taille de fichier de 2 Mo, et corrigez tout problème signalé dans votre éditeur d’images.',
      },
      {
        title: 'Astuce : corrigez le texte masqué par le badge',
        description:
          'Si le badge de durée couvre un texte ou un visage important, éloignez cet élément du coin inférieur droit et téléchargez à nouveau l’image.',
      },
    ],
    examples: [
      {
        title: 'Vérifier le placement du texte en bas à droite',
        input: 'PNG 1280×720 · Durée : 12:48 · Zone sûre : activée',
        output: 'Met en évidence le coin inférieur droit où le badge de durée 12:48 couvre l’illustration.',
        explanation:
          'Empêche les visages ou les chiffres importants de la miniature de se trouver derrière les superpositions de durée du lecteur.',
      },
      {
        title: 'Comparer le titre dans le fil clair et sombre',
        input: 'Titre : « Comment doubler vos vues en 30 jours » · Miniature : 1280×720',
        output: 'Le titre s’affiche sur deux lignes dans le fil clair et sombre, sans troncature des mots-clés.',
        explanation:
          'La bascule clair/sombre montre comment le contraste du titre change selon le thème du fil.',
      },
    ],
    benefits: [
      'Lit immédiatement les vraies dimensions naturelles en pixels, le rapport d’aspect et la taille de fichier en Ko/Mo',
      'Prévisualise à la fois les grandes cartes de fil de bureau et les petites miniatures de barre latérale recommandées',
      'Comprend une bascule de fil clair/sombre pour tester la lisibilité à fort contraste',
      'Aucun envoi vers un serveur — idéal pour les visuels de sponsors ou de lancements de produits non publiés',
    ],
    useCases: [
      'Repérer le petit texte illisible dans les miniatures compactes de barre latérale avant la publication',
      'S’assurer que les visuels importants restent à l’écart de la superposition de durée en bas à droite',
      'Vérifier que les miniatures respectent les exigences YouTube 1280×720, 16:9 et < 2 Mo',
      'Comparer la formulation des titres pour que les mots-clés essentiels apparaissent avant la troncature',
    ],
    faqs: [
      {
        question: 'Mes images de miniatures téléchargées sont-elles envoyées à un serveur distant ?',
        answer:
          'Jamais. Les images se chargent exclusivement dans l’onglet de votre navigateur via URL.createObjectURL() et sont révoquées automatiquement quand elles sont remplacées ou fermées.',
      },
      {
        question: 'Quelles dimensions et quelle taille de fichier YouTube recommande-t-il pour les miniatures ?',
        answer:
          'YouTube recommande 1280×720 pixels (largeur minimale de 640 px) dans un rapport 16:9, enregistrés en JPG, PNG ou WebP de moins de 2 Mo.',
      },
      {
        question: 'Pourquoi l’aperçu de la barre latérale est-il si important ?',
        answer:
          'Les miniatures suggérées de la page de lecture apparaissent beaucoup plus petites (environ 168 px de large) : vérifier la lisibilité à une échelle compacte évite donc les designs encombrés.',
      },
      {
        question: 'L’aperçu de miniatures YouTube est-il gratuit ?',
        answer:
          'Oui, il est gratuit dans votre navigateur, sans compte, et vos images de miniatures ne sont jamais envoyées nulle part.',
      },
      {
        question: 'Quels formats d’image puis-je prévisualiser avec l’aperçu de miniatures ?',
        answer:
          'Vous pouvez charger des fichiers PNG, JPG et WebP, qui sont les mêmes formats que YouTube accepte pour les miniatures personnalisées.',
      },
      {
        question: 'Comment l’aperçu de miniatures vérifie-t-il le rapport 16:9 ?',
        answer:
          'Il lit les vraies dimensions en pixels de votre image et signale si le rapport largeur-hauteur ne correspond pas à 16:9.',
      },
      {
        question: 'Qu’est-ce que la zone sûre de miniature dans cet aperçu ?',
        answer:
          'La superposition de zone sûre met en évidence le coin inférieur droit où YouTube place le badge de durée de la vidéo, pour que vous puissiez garder les visages et le texte clé à l’écart.',
      },
      {
        question: 'Pourquoi dois-je prévisualiser ma miniature en mode sombre ?',
        answer:
          'De nombreux spectateurs parcourent YouTube en mode sombre, et les designs lumineux ou à faible contraste peuvent paraître très différents sur un fond de fil sombre.',
      },
      {
        question: 'Comment l’aperçu montre-t-il la troncature du titre ?',
        answer:
          'Il affiche votre titre dans une carte de fil réaliste avec la même limite de deux lignes, pour que vous puissiez voir exactement où YouTube le coupe.',
      },
      {
        question: 'Que se passe-t-il si ma miniature dépasse 2 Mo ?',
        answer:
          'L’outil signale la taille du fichier, et vous devez l’exporter à nouveau avec une compression plus forte ou une résolution plus petite jusqu’à ce qu’elle passe sous 2 Mo.',
      },
      {
        question: 'Puis-je prévisualiser une miniature avant la publication de ma vidéo ?',
        answer:
          'Oui, c’est l’usage principal : tester localement les miniatures non publiées pour que les visuels de sponsors et les illustrations de lancement restent privés jusqu’au jour de sortie.',
      },
      {
        question: 'Pourquoi ma miniature semble-t-elle floue dans l’aperçu de la barre latérale ?',
        answer:
          'Les petites miniatures de barre latérale réduisent beaucoup votre image : le texte fin et les détails fins deviennent donc flous ; utilisez plutôt du texte grand et gras et des formes simples.',
      },
      {
        question: 'L’aperçu modifie-t-il ou compresse-t-il mon image de miniature ?',
        answer:
          'Non, il affiche seulement votre fichier tel quel et indique ses dimensions et sa taille ; il ne modifie, ne redimensionne ni ne réencode jamais l’image.',
      },
      {
        question: 'Quelle est la largeur minimale de miniature acceptée par YouTube ?',
        answer:
          'YouTube exige une largeur minimale de 640 pixels, même si 1280 pixels de large sont recommandés pour un résultat HD net.',
      },
      {
        question: 'Puis-je tester différents titres avec la même miniature ?',
        answer:
          'Oui, modifiez simplement le champ du titre et l’aperçu du fil se met à jour instantanément, pour que vous puissiez comparer les formulations sans télécharger à nouveau l’image.',
      },
      {
        question: 'Pourquoi le texte de ma miniature est-il coupé dans l’aperçu du fil ?',
        answer:
          'Les cartes de fil limitent les titres à deux lignes : placez donc vos mots les plus importants au début du titre, là où ils restent visibles.',
      },
      {
        question: 'L’aperçu fonctionne-t-il pour les miniatures d’autres plateformes ?',
        answer:
          'Il est construit autour des mises en page du fil YouTube, mais les vérifications de taille, de contraste et de lisibilité à petite échelle sont utiles pour n’importe quelle plateforme vidéo.',
      },
      {
        question: 'Comment supprimer une image de miniature chargée ?',
        answer:
          'Chargez une autre image pour la remplacer, ou fermez l’onglet ; l’URL d’objet en mémoire est révoquée et rien n’est enregistré.',
      },
      {
        question: 'Que dois-je faire si l’aperçu semble différent du vrai YouTube ?',
        answer:
          'YouTube modifie sa mise en page au fil du temps : considérez donc l’aperçu comme une approximation proche et faites une vérification finale sur une mise en ligne privée ou non répertoriée.',
      },
      {
        question: 'L’aperçu de miniatures peut-il vérifier la miniature d’une vidéo YouTube en direct ?',
        answer:
          'Non, il prévisualise uniquement les fichiers d’images locaux ; pour vérifier une vidéo publiée, téléchargez d’abord son image de miniature et chargez ce fichier ici.',
      },
    ],
  },
  'hashtag-formatter': {
    slug: 'formateur-hashtags',
    name: 'Formateur de Hashtags et Gestionnaire de Groupes',
    shortDescription:
      'Nettoyez les mots-clés désordonnés, supprimez les hashtags en double, formatez des balises #CamelCase accessibles et vérifiez les limites des plateformes.',
    keywords: [
      'formateur de hashtags',
      'nettoyeur de hashtags',
      'convertisseur de hashtags camelcase',
      'supprimer hashtags en double',
      'générateur de hashtags à partir de mots-clés',
      'vérificateur de limite de hashtags instagram',
      'convertisseur de casse de hashtags',
      'outil de nettoyage de liste de hashtags',
      'formateur de groupes de hashtags',
    ],
    seo: {
      title: 'Formateur de Hashtags – CamelCase et Compteur | UtilityFlow',
      description:
        'Normalisez les mots-clés en hashtags #CamelCase ou minuscules, supprimez doublons et ponctuation invalide, et vérifiez le plafond de 30 balises Instagram.',
      primaryKeyword: 'formateur de hashtags',
      secondaryKeywords: [
        'générateur de hashtags camelcase',
        'suppression de hashtags en double',
        'compteur de hashtags instagram',
        'convertisseur de casse de hashtags',
      ],
      longTailKeywords: [
        'convertir liste de mots-clés en hashtags camelcase accessibles',
        'supprimer hashtags en double et ponctuation invalide en ligne',
        'formater groupes de hashtags avec séparateurs à points',
        'vérifier limite de 30 hashtags instagram avant publication',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez des mots-clés séparés par des virgules ou des tas de balises désordonnés en hashtags dédupliqués et propres en ponctuation, formatés en `#CamelCase` convivial pour les lecteurs d’écran ou en minuscules, prêts pour des blocs de légende en une ligne, verticaux ou séparés par des points.',
    instructions: [
      {
        title: 'Collez des mots-clés ou des hashtags bruts',
        description:
          'Saisissez des balises séparées par des virgules, des espaces, des points-virgules ou des sauts de ligne — avec ou sans symboles # en tête.',
      },
      {
        title: 'Choisissez la casse et la mise en page',
        description:
          'Choisissez PascalCase (#CamelCase) pour l’accessibilité, les minuscules ou Conserver la casse, plus une sortie en ligne ou séparée par des lignes.',
      },
      {
        title: 'Choisissez un style de séparateur de légende',
        description:
          'Choisissez un bloc d’une seule ligne, une liste verticale ou un pied de page séparé par des points pour que les balises se placent proprement sous le texte de votre légende.',
      },
      {
        title: 'Lancez le formateur',
        description:
          'L’outil supprime la ponctuation invalide, élimine les doublons sans tenir compte de la casse et reconstruit chaque balise dans la casse choisie.',
      },
      {
        title: 'Vérifiez le nombre et copiez',
        description:
          'Vérifiez les doublons supprimés et le nombre total de balises par rapport au plafond de 30 balises d’Instagram, puis cliquez sur Copier les hashtags.',
      },
      {
        title: 'Astuce : réduisez les balises au-dessus du plafond de la plateforme',
        description:
          'Si le nombre dépasse 30, supprimez d’abord les balises les moins pertinentes, car les balises supplémentaires au-delà du plafond sont ignorées par Instagram.',
      },
    ],
    examples: [
      {
        title: 'Convertir des phrases brutes en hashtags CamelCase accessibles',
        input: 'marketing de contenu, astuces de productivité, Marketing de Contenu',
        output: '#MarketingDeContenu #AstucesDeProductivité (1 doublon supprimé)',
        explanation:
          'Mettre en majuscule chaque limite de mot aide les lecteurs d’écran à prononcer correctement les balises à plusieurs mots.',
      },
      {
        title: 'Nettoyer une liste de balises désordonnée',
        input: '#voyage, #Voyage, #voyage-2025, #plage!!',
        output: '#Voyage #Voyage2025 #Plage (1 doublon supprimé, ponctuation nettoyée)',
        explanation:
          'Les doublons insensibles à la casse sont supprimés et la ponctuation non prise en charge est retirée de chaque balise.',
      },
    ],
    benefits: [
      'Prend en charge le formatage #PascalCase accessible recommandé par les guides d’accessibilité numérique',
      'Déduplique automatiquement les balises identiques sans tenir compte de la casse',
      'Supprime la ponctuation non prise en charge (traits d’union, points, virgules) qui casse les balises cliquables',
      'Suit le nombre exact de balises par rapport aux plafonds des plateformes',
    ],
    useCases: [
      'Nettoyer les banques de hashtags de campagne partagées dans les tableurs marketing',
      'Convertir les mots-clés SEO à plusieurs mots en hashtags sociaux cliquables',
      'Mettre à jour les anciennes listes de balises en minuscules vers un formatage CamelCase accessible',
      'Générer des pieds de page de hashtags nets séparés par des points pour les publications Instagram',
    ],
    faqs: [
      {
        question: 'Pourquoi CamelCase / PascalCase est-il recommandé pour les hashtags ?',
        answer:
          'Les lecteurs d’écran séparent les limites de mots en majuscules (par exemple #OutilsReseauxSociaux lu comme « Outils Réseaux Sociaux ») au lieu d’essayer de prononcer une longue chaîne en minuscules comme un seul mot confus.',
      },
      {
        question: 'Pourquoi les traits d’union et les points sont-ils supprimés dans les balises ?',
        answer:
          'La plupart des plateformes sociales terminent un hashtag cliquable au premier espace, trait d’union ou signe de ponctuation : supprimer les traits d’union garde donc la balise entière intacte.',
      },
      {
        question: 'Cela utilise-t-il l’IA ou devine-t-il les hashtags interdits ?',
        answer:
          'Non. Il nettoie, formate et déduplique de façon déterministe les balises exactes que vous fournissez.',
      },
      {
        question: 'Le formateur de hashtags est-il gratuit ?',
        answer:
          'Oui, il est gratuit dans votre navigateur, sans inscription, et vos balises sont traitées localement sans être envoyées.',
      },
      {
        question: 'Quelle est la limite de hashtags sur Instagram ?',
        answer:
          'Instagram autorise jusqu’à 30 hashtags par publication, et cet outil compte vos balises pour que vous puissiez rester dans ce plafond.',
      },
      {
        question: 'Comment le formateur de hashtags supprime-t-il les doublons ?',
        answer:
          'Il compare les balises sans tenir compte de la casse : #MarketingDeContenu et #marketingdecontenu comptent donc comme la même balise et une seule est conservée.',
      },
      {
        question: 'Puis-je coller des hashtags avec ou sans le symbole # ?',
        answer:
          'Oui, les deux fonctionnent : l’outil ajoute un # aux mots-clés bruts et conserve ceux que vous avez déjà tapés avec un #.',
      },
      {
        question: 'Quels séparateurs puis-je utiliser entre les hashtags ?',
        answer:
          'Vous pouvez séparer les balises par des virgules, des espaces, des points-virgules ou des sauts de ligne, et l’outil gère les séparateurs mélangés en un seul collage.',
      },
      {
        question: 'Quelle est la différence entre les hashtags CamelCase et en minuscules ?',
        answer:
          'CamelCase met en majuscule chaque mot (#ReseauxSociaux) pour l’accessibilité des lecteurs d’écran, tandis que les minuscules (#reseauxsociaux) sont un choix stylistique qui se lit comme un seul mot.',
      },
      {
        question: 'Le formateur de hashtags vérifie-t-il si un hashtag est interdit ?',
        answer:
          'Non, il ne vérifie pas les listes d’interdiction ni les données en direct des plateformes ; il nettoie et formate uniquement les balises que vous fournissez.',
      },
      {
        question: 'Puis-je utiliser les hashtags formatés sur TikTok et X aussi ?',
        answer:
          'Oui, les balises nettoyées fonctionnent sur n’importe quelle plateforme, même si chaque plateforme a ses propres limites, comme le plafond de 30 balises sur Instagram.',
      },
      {
        question: 'Pourquoi certains de mes hashtags disparaissent-ils après le formatage ?',
        answer:
          'Les balises composées uniquement de ponctuation ou de caractères non pris en charge sont supprimées, car elles ne fonctionneraient de toute façon pas comme hashtags cliquables.',
      },
      {
        question: 'À quoi servent les pieds de page de hashtags séparés par des points ?',
        answer:
          'Les séparateurs à points poussent les hashtags sous le repli de la légende sur Instagram, gardant la légende visible propre pendant que les balises fonctionnent toujours.',
      },
      {
        question: 'Puis-je formater les hashtags en liste verticale ?',
        answer:
          'Oui, choisissez la mise en page séparée par des lignes pour mettre un hashtag par ligne, ce qui est pratique pour les commentaires et les pieds de page de légende.',
      },
      {
        question: 'Le formateur de hashtags fonctionne-t-il avec des mots non français ?',
        answer:
          'Oui, il conserve les lettres d’autres alphabets dans la balise, tant que la plateforme les prend en charge dans les hashtags.',
      },
      {
        question: 'Combien de hashtags dois-je utiliser par publication ?',
        answer:
          'Il n’y a pas de nombre unique idéal ; utilisez des balises vraiment pertinentes pour la publication, et laissez le compteur vous garder sous le plafond de la plateforme.',
      },
      {
        question: 'Puis-je enregistrer un groupe de hashtags pour le réutiliser ?',
        answer:
          'L’outil n’enregistre pas les groupes : copiez donc le bloc formaté dans vos propres notes ou votre tableur pour le réutiliser plus tard.',
      },
      {
        question: 'Pourquoi Conserver la casse garde-t-il ma capitalisation d’origine ?',
        answer:
          'Conserver la casse sert aux balises de marque ou aux acronymes que vous voulez exactement tels que tapés, tandis que les autres modes standardisent chaque balise de la même façon.',
      },
      {
        question: 'Mes hashtags sont-ils envoyés à un serveur ?',
        answer:
          'Non, tout le formatage se fait localement dans votre navigateur, donc vos listes de mots-clés et vos balises de campagne ne quittent jamais votre appareil.',
      },
      {
        question: 'Que dois-je faire si un hashtag formaté ne fonctionne toujours pas sur une plateforme ?',
        answer:
          'Vérifiez les propres règles de la plateforme pour cette balise, car certaines plateformes bloquent certains mots ou limitent la longueur des balises même quand le format est propre.',
      },
    ],
  },
  'caption-template-builder': {
    slug: 'createur-modeles-legendes',
    name: 'Créateur de Modèles de Légendes et d’Accroches',
    shortDescription:
      'Assemblez des légendes sociales structurées avec des modèles déterministes PAS, Tutoriel, Avant-Après-Pont et Liste de vérification.',
    keywords: [
      'créateur de modèles de légendes',
      'modèles de publications pour réseaux sociaux',
      'créateur de cadres d’accroche',
      'formateur de publication linkedin',
      'modèles de légendes instagram',
      'modèle de rédaction pas',
      'générateur d’accroches pour réseaux sociaux',
      'modèles de structure de publication',
      'outil de cadre de rédaction de légende',
    ],
    seo: {
      title: 'Créateur de Modèles de Légendes – Accroches | UtilityFlow',
      description:
        'Assemblez des légendes pour les réseaux sociaux avec les modèles PAS, Tutoriel et Avant-Après-Pont — vos propres mots, structurés, avec des compteurs.',
      primaryKeyword: 'créateur de modèles de légendes',
      secondaryKeywords: [
        'cadres de légendes pour réseaux sociaux',
        'créateur de structure de publication linkedin',
        'modèle de rédaction pas',
        'modèles de légendes instagram',
      ],
      longTailKeywords: [
        'créer des légendes linkedin et instagram structurées sans ia',
        'modèle de publication sociale problème agitation solution',
        'vérifier l’adéquation des caractères x et instagram en rédigeant',
        'modèle de légende avant après pont pour publications sociales',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Composez des publications sociales cohérentes et faciles à parcourir plus rapidement avec des modèles de rédaction déterministes — Problème–Agitation–Solution (PAS), Détail actionnable, Avant–Après–Pont, Liste de contrôle d’audit et Mythe contre Réalité — strictement à partir de vos propres entrées, sans texte IA inventé.',
    instructions: [
      {
        title: 'Choisissez une structure de publication',
        description:
          'Choisissez parmi les cinq modèles déterministes de la barre du haut pour correspondre à votre objectif.',
      },
      {
        title: 'Remplissez votre propre accroche, vos points et votre appel à l’action',
        description:
          'Saisissez votre accroche d’ouverture authentique, le contexte du problème, les points clés à retenir (un par ligne), l’appel à l’action et les hashtags.',
      },
      {
        title: 'Consultez l’aperçu en direct',
        description:
          'Lisez la publication formatée telle qu’elle apparaîtra, en vérifiant l’espacement des paragraphes et l’ordre de l’accroche, des points à retenir et de l’appel à l’action.',
      },
      {
        title: 'Vérifiez l’adéquation des caractères et des mots',
        description:
          'Surveillez le compteur en direct par rapport à la limite de 280 caractères de X et aux limites d’Instagram ou de LinkedIn, et raccourcissez les lignes qui vous font dépasser.',
      },
      {
        title: 'Copiez et vérifiez la longueur',
        description:
          'Prévisualisez la publication formatée en direct, confirmez l’adéquation des caractères et des mots pour X ou Instagram/LinkedIn, et cliquez sur Copier la légende.',
      },
      {
        title: 'Astuce : essayez les mêmes notes dans un autre modèle',
        description:
          'Changez de modèle sans retaper pour comparer la façon dont votre accroche et vos points se lisent en PAS, en tutoriel ou en liste de vérification avant de publier.',
      },
    ],
    examples: [
      {
        title: 'Assembler une publication LinkedIn actionnable en 3 étapes',
        input: 'Accroche + Contexte + 3 points clés + Appel à l’action',
        output: 'Publication numérotée propre avec un espacement de paragraphe net et des hashtags en pied de page.',
        explanation:
          'Structure vos mots exacts de façon déterministe sans modifier le ton ni inventer d’affirmations.',
      },
      {
        title: 'Transformer des notes brutes en publication PAS',
        input: 'Problème : les publications prennent trop de temps · Solution : un modèle structuré',
        output: 'Problème → Agitation → Solution → Appel à l’action, avec les mots exacts de l’utilisateur.',
        explanation:
          'Le modèle PAS organise vos propres mots sans rien réécrire ni ajouter.',
      },
    ],
    benefits: [
      'Assemblage déterministe 100 % transparent — aucun mot à la mode générique d’IA ni fait halluciné',
      'Impose une hiérarchie visuelle claire entre l’accroche, les points à retenir et l’appel à l’action',
      'Le compteur de caractères et de mots en direct signale les limites de 280 caractères de X et d’Instagram/LinkedIn',
      'Permet aux créateurs de tester cinq cadres classiques sur les mêmes notes en un clic',
    ],
    useCases: [
      'Rédiger des annonces de lancement de produit cohérentes pour les canaux sociaux',
      'Transformer des notes brutes d’ingénierie ou de marketing en publications lisibles',
      'Formater des carrousels éducatifs ou des listes de conseils hebdomadaires',
      'Séparer proprement les accroches d’ouverture des listes de valeur avant la planification',
    ],
    faqs: [
      {
        question: 'Cet outil utilise-t-il un modèle de langage IA pour réécrire mes mots ?',
        answer:
          'Non. C’est un créateur de modèles structurés purement déterministe qui s’exécute dans votre navigateur — chaque phrase de l’aperçu provient strictement de vos propres entrées.',
      },
      {
        question: 'Comment ajouter plus d’étapes ou d’éléments de liste de vérification ?',
        answer:
          'Appuyez simplement sur Entrée pour ajouter de nouvelles lignes dans la zone de texte des points clés ; chaque ligne non vide se formate automatiquement en élément numéroté, en puce ou en case à cocher.',
      },
      {
        question: 'Puis-je préserver les lignes vides quand je colle ensuite dans Instagram ?',
        answer:
          'Oui. Si une application fusionne encore l’espacement sur mobile, déposez la légende copiée dans notre formateur de sauts de ligne pour bio Instagram pour des espaces invisibles.',
      },
      {
        question: 'Le créateur de modèles de légendes est-il gratuit ?',
        answer:
          'Oui, il est gratuit dans votre navigateur, sans inscription, et vos brouillons sont traités localement sans être envoyés.',
      },
      {
        question: 'Qu’est-ce que le modèle PAS dans le créateur de modèles de légendes ?',
        answer:
          'PAS signifie Problème–Agitation–Solution : nommez le problème du lecteur, accentuez pourquoi il fait mal, puis présentez votre solution et votre appel à l’action.',
      },
      {
        question: 'Quels modèles de légendes ce créateur comprend-il ?',
        answer:
          'Il comprend cinq modèles : Problème–Agitation–Solution, Détail actionnable, Avant–Après–Pont, Liste de contrôle d’audit et Mythe contre Réalité.',
      },
      {
        question: 'Puis-je utiliser le créateur de modèles de légendes pour les publications LinkedIn ?',
        answer:
          'Oui, la mise en page structurée avec accroche, points à retenir et appel à l’action fonctionne bien pour LinkedIn, et le compteur en direct vous aide à rester dans ses limites.',
      },
      {
        question: 'Puis-je utiliser le créateur de modèles de légendes pour les légendes Instagram ?',
        answer:
          'Oui, les modèles se formatent proprement pour les légendes Instagram, et vous pouvez ajouter des hashtags à la fin de la légende construite.',
      },
      {
        question: 'Qu’est-ce que le modèle de légende Avant–Après–Pont ?',
        answer:
          'Il montre la situation actuelle du lecteur, dépeint l’état amélioré d’après, puis comble l’écart avec votre produit, votre méthode ou votre conseil.',
      },
      {
        question: 'Comment fonctionne le compteur de caractères dans le créateur de légendes ?',
        answer:
          'Il compte les caractères et les mots en direct pendant que vous tapez et signale quand votre brouillon dépasse des limites comme les 280 caractères de X.',
      },
      {
        question: 'Puis-je changer de modèle sans perdre mon texte ?',
        answer:
          'Oui, changer de modèle réutilise votre accroche, vos points et votre appel à l’action existants, pour que vous puissiez comparer les structures sans retaper.',
      },
      {
        question: 'Le créateur ajoute-t-il des hashtags automatiquement ?',
        answer:
          'Non, il ne place que les hashtags que vous saisissez vous-même, donc vous contrôlez exactement quelles balises apparaissent avec chaque légende.',
      },
      {
        question: 'Qu’est-ce qui fait une bonne accroche pour une légende de réseaux sociaux ?',
        answer:
          'Une bonne accroche énonce un avantage clair, un fait surprenant ou un problème identifiable en une seule ligne courte qui fait arrêter le défilement du lecteur.',
      },
      {
        question: 'Puis-je utiliser le créateur de légendes pour les publications X (Twitter) ?',
        answer:
          'Oui, le compteur vous avertit à 280 caractères, pour que vous puissiez raccourcir votre accroche et vos points à retenir jusqu’à ce que la publication tienne dans un seul tweet.',
      },
      {
        question: 'À quoi sert le modèle de légende Mythe contre Réalité ?',
        answer:
          'Il associe une idée fausse courante au fait correct, ce qui fonctionne bien pour les publications éducatives et pour réfuter les mauvais conseils dans votre domaine.',
      },
      {
        question: 'Puis-je modifier la légende après l’avoir copiée ?',
        answer:
          'Oui, le texte copié est du texte brut : vous pouvez donc modifier la formulation, les émojis ou les sauts de ligne dans votre application de planification avant la publication.',
      },
      {
        question: 'Le créateur enregistre-t-il mes légendes ?',
        answer:
          'Non, les brouillons ne vivent que dans l’onglet de votre navigateur : copiez donc les légendes terminées dans vos propres notes ou votre planificateur avant de fermer la page.',
      },
      {
        question: 'Que dois-je mettre dans le champ d’appel à l’action ?',
        answer:
          'Écrivez une seule prochaine étape claire, comme commenter, enregistrer la publication, cliquer sur votre lien ou suivre votre compte.',
      },
      {
        question: 'Puis-je utiliser le créateur de légendes pour les annonces de lancement de produit ?',
        answer:
          'Oui, les modèles PAS ou Avant–Après–Pont conviennent bien aux lancements : énoncez le problème, montrez le résultat et terminez par où l’obtenir.',
      },
      {
        question: 'Pourquoi le créateur ne réécrit-il pas ou n’améliore-t-il pas ma formulation ?',
        answer:
          'Il est délibérément déterministe, donc votre ton et vos faits restent exactement tels que vous les avez écrits au lieu d’être remplacés par un texte générique généré.',
      },
    ],
  },
  'social-handle-formatter': {
    slug: 'formateur-noms-utilisateur',
    name: 'Formateur de Noms d’Utilisateur pour Réseaux Sociaux',
    shortDescription:
      'Générez des variations de pseudonymes de marque cohérentes, validez les règles de caractères et de syntaxe des plateformes et ouvrez des URL directes de vérification de profil.',
    keywords: [
      'formateur de pseudonymes sociaux',
      'validateur de syntaxe de nom d’utilisateur',
      'générateur de pseudonymes de marque',
      'règles de noms d’utilisateur sociaux',
      'vérificateur de disponibilité de nom d’utilisateur',
      'vérificateur de pseudonymes multiplateformes',
      'règles de nom d’utilisateur instagram',
      'limite de caractères de nom d’utilisateur x',
      'convertisseur de nom de marque en pseudonyme',
    ],
    seo: {
      title: 'Formateur de Noms d’Utilisateur – Règles | UtilityFlow',
      description:
        'Générez des variations de pseudonymes à partir d’un nom de marque, validez les règles de X, Instagram, TikTok, YouTube, Threads et GitHub, et ouvrez des URL.',
      primaryKeyword: 'formateur de noms d’utilisateur',
      secondaryKeywords: [
        'règles de noms d’utilisateur des réseaux sociaux',
        'générateur de variations de pseudonymes de marque',
        'règles de caractères des pseudonymes youtube',
        'vérificateur de disponibilité de nom d’utilisateur',
      ],
      longTailKeywords: [
        'vérifier longueur de caractères et symboles autorisés des noms d’utilisateur',
        'suggestions de pseudonymes de marque cohérents sur x instagram tiktok',
        'valider format de pseudonyme pour github youtube et threads',
        'trouver variations de pseudonymes de marque quand le nom exact est pris',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transformez n’importe quel nom de marque, de projet ou de créateur en candidats de pseudonymes propres multiplateformes, validez chaque candidat par rapport aux limites de caractères et aux règles de ponctuation officielles de six réseaux, et accédez directement aux URL de profils en direct pour vérifier la disponibilité.',
    instructions: [
      {
        title: 'Saisissez le nom de la marque ou du créateur',
        description:
          'Tapez le nom de votre marque ou d’affichage (par exemple Utility Hub) pour générer des candidats de pseudonymes propres et cohérents.',
      },
      {
        title: 'Testez les variations ou modifiez directement',
        description:
          'Cliquez sur n’importe quelle pastille de variation ou personnalisez le pseudonyme actif pour tester des préfixes et suffixes comme get, use, hq ou studio.',
      },
      {
        title: 'Vérifiez la conformité de syntaxe par plateforme',
        description:
          'Vérifiez le statut de format valide de chaque candidat sur X, Instagram, TikTok, YouTube, Threads et GitHub.',
      },
      {
        title: 'Corrigez les caractères invalides',
        description:
          'Si une plateforme signale un pseudonyme, supprimez le caractère non autorisé — par exemple, supprimez les traits d’union pour X et Instagram, ou les underscores pour GitHub.',
      },
      {
        title: 'Vérifiez la conformité et ouvrez les URL',
        description:
          'Vérifiez le statut de format valide sur X, Instagram, TikTok, YouTube, Threads et GitHub, puis cliquez sur Vérifier l’URL pour inspecter le statut de revendication en direct.',
      },
      {
        title: 'Astuce : copiez votre sélection avant de revendiquer',
        description:
          'Copiez les pseudonymes qui passent sur chaque plateforme qui vous intéresse, puis revendiquez-les un par un, en commençant par le réseau où votre audience est la plus grande.',
      },
    ],
    examples: [
      {
        title: 'Comparer les pseudonymes avec trait d’union et avec underscore sur les plateformes',
        input: 'Pseudonyme : utility-hub',
        output: 'Valide sur GitHub et YouTube @handle · Invalide sur X et Instagram (traits d’union interdits)',
        explanation:
          'Évite de choisir un pseudonyme de marque qui ne peut pas être identique sur les principaux réseaux sociaux.',
      },
      {
        title: 'Tester un pseudonyme trop long pour X',
        input: 'Pseudonyme : utilityflowofficiel (19 caractères)',
        output: 'Invalide sur X (limite de 15 caractères) · Valide sur Instagram et TikTok',
        explanation:
          'Le plafond strict de 15 caractères de X est appliqué à chaque candidat pour éviter les mauvaises surprises.',
      },
    ],
    benefits: [
      'Repère tôt les incompatibilités entre plateformes (comme les traits d’union qui échouent sur X/Instagram contre autorisés sur GitHub/YouTube)',
      'Applique les limites exactes de caractères comme le maximum strict de 15 caractères de X',
      'N’invente jamais de badges de disponibilité en direct hors ligne — fournit plutôt des liens directs cliquables vers les profils',
      'Comprend la copie en un clic du @pseudonyme dans le presse-papiers',
    ],
    useCases: [
      'Nommer une nouvelle startup, un podcast, une newsletter ou un projet open source de façon cohérente',
      'Trouver des préfixes et suffixes de secours quand un pseudonyme exact d’un seul mot est pris',
      'Vérifier si un pseudonyme proposé de 18 caractères dépasse le plafond de 15 caractères de X',
      'Préparer une liste de lancement de toutes les URL officielles de profils sociaux',
    ],
    faqs: [
      {
        question: 'Pourquoi cet outil n’affiche-t-il pas automatiquement de badges verts « Disponible » en direct ?',
        answer:
          'Les principaux réseaux sociaux bloquent les vérifications CORS de navigateur non authentifiées et limitent le grattage automatisé de disponibilité. Plutôt que d’afficher des suppositions peu fiables ou inventées, cet outil valide localement les règles de syntaxe officielles des plateformes et donne des liens URL directs pour vérifier chaque plateforme avec précision.',
      },
      {
        question: 'Quels caractères de pseudonyme fonctionnent sur presque tous les grands réseaux ?',
        answer:
          'Les caractères alphanumériques minuscules (a–z, 0–9) et les underscores (_) de 4 à 15 caractères fonctionnent simultanément sur X, Instagram, TikTok, YouTube et Threads.',
      },
      {
        question: 'Pourquoi GitHub rejette-t-il les underscores dans les pseudonymes ?',
        answer:
          'Les noms d’utilisateur GitHub n’autorisent que les caractères alphanumériques et les traits d’union simples non initiaux et non finaux, tandis que X et Instagram interdisent les traits d’union.',
      },
      {
        question: 'Le formateur de noms d’utilisateur est-il gratuit ?',
        answer:
          'Oui, il est gratuit dans votre navigateur, sans inscription, et vos noms de marque et idées de pseudonymes sont traités localement sans être envoyés.',
      },
      {
        question: 'Quelle est la longueur maximale d’un pseudonyme sur X ?',
        answer:
          'Les noms d’utilisateur X peuvent compter au maximum 15 caractères : cet outil signale donc tout candidat plus long pour X.',
      },
      {
        question: 'Comment vérifier si un pseudonyme social est réellement disponible ?',
        answer:
          'Cliquez sur le lien Vérifier l’URL de chaque plateforme pour ouvrir la page de profil en direct ; si la page montre un vrai profil, le pseudonyme est pris.',
      },
      {
        question: 'Pourquoi les traits d’union fonctionnent-ils sur GitHub mais pas sur X ou Instagram ?',
        answer:
          'Chaque plateforme définit ses propres caractères autorisés : GitHub permet les traits d’union, tandis que X et Instagram n’autorisent que les lettres, les chiffres et les underscores.',
      },
      {
        question: 'Quels préfixes de pseudonyme dois-je essayer si mon nom exact est pris ?',
        answer:
          'Les préfixes et suffixes courants comprennent get, use, the, hq, studio, official et app — l’outil génère ces variations pour que vous les testiez.',
      },
      {
        question: 'Le formateur de noms d’utilisateur peut-il vérifier les pseudonymes YouTube ?',
        answer:
          'Oui, il valide les candidats par rapport aux règles de caractères des @pseudonymes YouTube et vous donne un lien direct pour vérifier le statut en direct du pseudonyme.',
      },
      {
        question: 'Quelle est la longueur minimale d’un pseudonyme sur la plupart des plateformes ?',
        answer:
          'La plupart des plateformes exigent au moins quelques caractères, et les pseudonymes qui fonctionnent sur X, Instagram, TikTok, YouTube et Threads comptent généralement de 4 à 15 caractères.',
      },
      {
        question: 'Mon pseudonyme doit-il être identique sur chaque plateforme sociale ?',
        answer:
          'Des pseudonymes identiques rendent votre marque plus facile à trouver et plus difficile à usurper : visez donc un pseudonyme qui respecte les règles de chaque plateforme que vous utilisez.',
      },
      {
        question: 'Puis-je utiliser des chiffres dans mon pseudonyme social ?',
        answer:
          'Oui, les chiffres sont autorisés sur les six plateformes vérifiées par cet outil, même si commencer un pseudonyme par un chiffre peut sembler moins soigné.',
      },
      {
        question: 'Pourquoi l’outil dit-il que mon pseudonyme est valide, mais que la plateforme le rejette ?',
        answer:
          'La validité de syntaxe n’est qu’une vérification ; la plateforme peut aussi rejeter un pseudonyme parce qu’il est déjà pris, réservé ou bloqué pour des raisons de politique.',
      },
      {
        question: 'Le formateur de noms d’utilisateur vérifie-t-il les pseudonymes Threads ?',
        answer:
          'Oui, il valide les candidats par rapport aux règles de noms d’utilisateur Threads, aux côtés de X, Instagram, TikTok, YouTube et GitHub.',
      },
      {
        question: 'Puis-je utiliser des points dans un pseudonyme social ?',
        answer:
          'Instagram autorise les points dans les noms d’utilisateur, mais X, TikTok et GitHub ne le font pas : un pseudonyme avec des points ne sera donc pas identique partout.',
      },
      {
        question: 'Comment choisir un pseudonyme pour une nouvelle startup ou un podcast ?',
        answer:
          'Saisissez le nom de votre marque, présélectionnez les variations qui passent sur chaque plateforme, puis revendiquez le même partout avant de l’annoncer.',
      },
      {
        question: 'Puis-je tester un pseudonyme avec des underscores sur GitHub ?',
        answer:
          'Vous pouvez le tester, mais GitHub rejettera les underscores : l’outil le signale donc comme invalide pour GitHub, même s’il passe sur X et Instagram.',
      },
      {
        question: 'Mes idées de noms de marque sont-elles envoyées à un serveur ?',
        answer:
          'Non, toute la génération et la validation de pseudonymes se font localement dans votre navigateur, donc vos idées de nom ne quittent jamais votre appareil.',
      },
      {
        question: 'Que dois-je faire si mon pseudonyme idéal est pris sur une plateforme ?',
        answer:
          'Essayez un préfixe ou un suffixe cohérent sur toutes les plateformes au lieu d’un nom différent sur un seul réseau, pour que votre marque reste facile à trouver.',
      },
      {
        question: 'Puis-je copier un pseudonyme directement depuis l’outil ?',
        answer:
          'Oui, l’outil comprend la copie en un clic du pseudonyme actif, pour que vous puissiez le coller dans les formulaires d’inscription sans le retaper.',
      },
    ],
  },
  'merge-pdf': {
    slug: 'fusionner-pdf',
    name: 'Fusionner des PDF',
    shortDescription:
      'Combinez plusieurs documents PDF dans un ordre personnalisé dans votre navigateur, sans envoyer de fichiers à des serveurs externes.',
    keywords: [
      'fusionner pdf',
      'combiner fichiers pdf',
      'joindre pdf en ligne gratuit',
      'fusionneur pdf côté client',
      'fusionner fichiers pdf gratuit',
      'combiner plusieurs pdf en un seul',
      'fusionneur pdf sans envoi',
      'joindre documents pdf en ligne',
      'fusionner pages pdf dans l’ordre',
    ],
    seo: {
      title: 'Fusionner des PDF – Combiner des PDF Gratuit | UtilityFlow',
      description:
        'Combinez plusieurs fichiers PDF en un seul document dans l’ordre choisi, localement dans votre navigateur avec pdf-lib, sans aucun envoi vers un serveur.',
      primaryKeyword: 'fusionner pdf',
      secondaryKeywords: [
        'combiner fichiers pdf en ligne',
        'joindre pages pdf localement',
        'fusionneur pdf privé',
        'fusionner fichiers pdf gratuit',
      ],
      longTailKeywords: [
        'fusionner contrats pdf confidentiels sans envoi vers un serveur',
        'combiner plusieurs pdf et réorganiser l’ordre dans le navigateur',
        'combinateur de documents pdf gratuit côté client',
        'fusionner fichiers pdf dans l’ordre sans envoi',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combinez deux fichiers PDF ou plus en un seul document propre directement dans la mémoire du navigateur. Consultez le nombre de pages de chaque fichier, réorganisez les documents avec les contrôles haut/bas, choisissez un nom de fichier de sortie et téléchargez immédiatement.',
    instructions: [
      {
        title: 'Ajoutez plusieurs fichiers PDF',
        description:
          'Sélectionnez deux fichiers .pdf non chiffrés ou plus sur votre appareil ; chaque fichier est validé pour un en-tête %PDF avant la mise en file.',
      },
      {
        title: 'Vérifiez le nombre de pages et les tailles',
        description:
          'Consultez le nombre de pages et la taille en octets affichés pour chaque document en file pour confirmer que vous avez ajouté les bons fichiers.',
      },
      {
        title: 'Organisez l’ordre de fusion',
        description:
          'Utilisez les flèches haut/bas pour ordonner les chapitres, les annexes ou les factures avant de les combiner.',
      },
      {
        title: 'Nommez votre fichier de sortie',
        description:
          'Saisissez un nom de fichier personnalisé si vous le souhaitez, pour que le document fusionné soit facile à retrouver plus tard.',
      },
      {
        title: 'Fusionnez et téléchargez',
        description:
          'Cliquez sur Fusionner les PDF et télécharger pour combiner les fichiers localement et enregistrer le résultat.',
      },
      {
        title: 'Vérifiez le document fusionné',
        description:
          'Ouvrez le PDF téléchargé et vérifiez l’ordre des pages et le nombre total de pages ; relancez avec un ordre corrigé si quelque chose est déplacé.',
      },
    ],
    examples: [
      {
        title: 'Combiner une page de garde de facture et un paquet de reçus',
        input: 'page-de-garde.pdf (1 page) + recus.pdf (4 pages)',
        output: 'document-fusionne.pdf (5 pages)',
        explanation:
          'Copie toutes les pages vectorielles, les polices et les images intégrées dans un seul conteneur PDF.',
      },
      {
        title: 'Assembler un dossier de candidature',
        input: 'cv.pdf (2 pages) + lettre.pdf (1 page) + portfolio.pdf (3 pages)',
        output: 'candidature.pdf (6 pages)',
        explanation:
          'Les documents sont fusionnés dans l’ordre choisi, chaque page gardant sa mise en page d’origine.',
      },
    ],
    benefits: [
      'Aucun envoi de fichier : les contrats, déclarations fiscales et accords de confidentialité restent strictement sur votre machine',
      'Affiche le nombre exact de pages et la taille en octets par document en file',
      'Valide immédiatement les PDF mal formés ou chiffrés par mot de passe lors du téléchargement',
      'Aucun filigrane, plafond de pages ni limite quotidienne',
    ],
    useCases: [
      'Regrouper des propositions clients, des formulaires signés et des annexes de tarification',
      'Combiner des documents fiscaux numérisés en plusieurs parties avant le dépôt',
      'Fusionner des diapositives de cours ou des guides d’étude en un seul paquet imprimable',
      'Assembler les factures de dépenses mensuelles en un seul PDF comptable',
    ],
    faqs: [
      {
        question: 'Cet outil peut-il fusionner des fichiers PDF protégés par mot de passe ?',
        answer:
          'La bibliothèque pdf-lib côté navigateur exige des PDF non chiffrés, sauf s’ils sont déverrouillés d’abord. Si un fichier chiffré est téléchargé, le validateur vous alerte clairement au lieu d’échouer silencieusement.',
      },
      {
        question: 'Les polices vectorielles et les hyperliens cliquables sont-ils préservés ?',
        answer:
          'Oui. Les flux de pages PDF standard, les polices intégrées et les tracés vectoriels sont copiés directement via PDFDocument.copyPages() sans convertir les pages en images floues.',
      },
      {
        question: 'Y a-t-il une limite d’envoi vers un serveur ?',
        answer:
          'Aucun fichier n’est jamais envoyé : le traitement s’exécute uniquement dans la mémoire de l’onglet de votre navigateur.',
      },
      {
        question: 'L’outil Fusionner des PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans filigrane, sans plafond de pages ni limite quotidienne, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Combien de fichiers PDF puis-je fusionner à la fois ?',
        answer:
          'Vous pouvez en mettre en file autant que la mémoire de votre navigateur le permet confortablement. Le nombre de pages et la taille de chaque fichier sont affichés pour que vous puissiez juger avant de fusionner.',
      },
      {
        question: 'Puis-je réorganiser les PDF après les avoir ajoutés ?',
        answer:
          'Oui, utilisez les flèches haut et bas à côté de chaque fichier pour définir l’ordre de fusion exact avant de combiner.',
      },
      {
        question: 'La fusion modifiera-t-elle la qualité de mes PDF ?',
        answer:
          'Non, les pages sont copiées sous forme de données vectorielles : le texte, les polices et les images conservent leur qualité d’origine.',
      },
      {
        question: 'Le PDF fusionné conserve-t-il les signets ou les sommaires ?',
        answer:
          'Le contenu des pages est entièrement préservé, mais les sommaires et les signets du document peuvent ne pas être repris dans le fichier fusionné.',
      },
      {
        question: 'Puis-je fusionner des PDF numérisés ?',
        answer:
          'Oui, les pages numérisées sont copiées comme des images dans le fichier fusionné, comme n’importe quelle autre page.',
      },
      {
        question: 'Quels types de fichiers puis-je fusionner avec cet outil ?',
        answer:
          'Uniquement des fichiers PDF (.pdf). Les images doivent d’abord être converties avec l’outil Images en PDF avant de pouvoir être fusionnées.',
      },
      {
        question: 'Puis-je choisir le nom du fichier de sortie du PDF fusionné ?',
        answer:
          'Oui, saisissez un nom de fichier personnalisé avant de cliquer sur Fusionner ; sinon, un nom par défaut est utilisé.',
      },
      {
        question: 'L’outil Fusionner des PDF fonctionne-t-il sur mobile ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles modernes, même si les très gros fichiers fusionnent plus vite sur un ordinateur.',
      },
      {
        question: 'Mes fichiers sont-ils privés quand je fusionne des PDF ici ?',
        answer:
          'Oui, tout se passe localement dans l’onglet de votre navigateur et aucun fichier n’est envoyé à un serveur.',
      },
      {
        question: 'Que se passe-t-il si l’un de mes PDF est corrompu ?',
        answer:
          'Le validateur vérifie l’en-tête %PDF de chaque fichier et vous alerte sur les fichiers mal formés ou chiffrés avant le début de la fusion.',
      },
      {
        question: 'Puis-je fusionner des PDF de tailles de page différentes ?',
        answer:
          'Oui, chaque page conserve sa taille et son orientation d’origine dans le document fusionné.',
      },
      {
        question: 'Le PDF fusionné restera-t-il consultable par recherche ?',
        answer:
          'Oui, les PDF basés sur du texte conservent un texte sélectionnable et consultable, car les pages sont copiées et non converties en images.',
      },
      {
        question: 'Puis-je fusionner un PDF avec lui-même ?',
        answer:
          'Oui, vous pouvez ajouter le même fichier plusieurs fois si vous avez besoin qu’une page ou un document soit répété dans le résultat.',
      },
      {
        question: 'Y a-t-il une taille de fichier maximale pour fusionner des PDF ?',
        answer:
          'Il n’y a pas de limite définie ; la limite pratique est la mémoire du navigateur disponible sur votre appareil.',
      },
      {
        question: 'Que dois-je faire si le téléchargement fusionné ne démarre pas ?',
        answer:
          'Vérifiez les paramètres de téléchargement et le bloqueur de fenêtres contextuelles de votre navigateur, puis cliquez à nouveau sur Fusionner ; le fichier est généré localement à chaque fois.',
      },
      {
        question: 'Puis-je fusionner des PDF puis diviser le résultat ?',
        answer:
          'Oui, téléchargez le PDF fusionné et ouvrez-le dans l’outil Diviser un PDF pour extraire les pages dont vous avez besoin.',
      },
    ],
  },
  'split-pdf': {
    slug: 'diviser-pdf',
    name: 'Diviser et Extraire des Pages PDF',
    shortDescription:
      'Extrayez des plages de pages personnalisées, des pages paires ou impaires, ou éclatez des PDF individuels d’une seule page localement via pdf-lib.',
    keywords: [
      'diviser pdf',
      'extraire pages pdf',
      'séparer pages pdf',
      'extracteur de pages pdf',
      'diviser pages pdf gratuit',
      'diviseur pdf en ligne',
      'extraire pages de pdf gratuit',
      'éclater pdf en pages uniques',
      'diviser pdf par plage de pages',
    ],
    seo: {
      title: 'Diviser un PDF – Extraire des Pages Gratuit | UtilityFlow',
      description:
        'Extrayez des plages de pages PDF (comme 1-3, 5), séparez les pages paires ou impaires, ou éclatez des pages individuelles dans votre navigateur, sans envoi.',
      primaryKeyword: 'diviser pdf',
      secondaryKeywords: [
        'extraire pages de pdf',
        'extracteur de plage de pages pdf',
        'séparer pdf en pages uniques',
        'diviser pdf par plage de pages',
      ],
      longTailKeywords: [
        'extraire pages 1-3 et 5 de pdf sans envoi vers un serveur',
        'diviser pages paires et impaires de pdf dans le navigateur',
        'séparer pdf de plusieurs pages localement gratuit',
        'diviser pdf et télécharger uniquement les pages sélectionnées',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Extrayez des plages de pages exactes (`1-3, 5, 8-10`), isolez les pages paires ou impaires pour le réassemblage recto-verso, ou éclatez des PDF plus courts en fichiers individuels d’une seule page, entièrement dans la mémoire du client.',
    instructions: [
      {
        title: 'Chargez votre document PDF',
        description:
          'Choisissez n’importe quel fichier PDF non chiffré ; l’outil valide l’en-tête et affiche le nombre total de pages.',
      },
      {
        title: 'Choisissez le mode de division',
        description:
          'Sélectionnez Extraire des plages de pages, Pages impaires uniquement, Pages paires uniquement ou Éclater toutes les pages individuelles.',
      },
      {
        title: 'Saisissez les pages ou les plages',
        description:
          'Pour le mode plage, tapez des pages comme « 1-3, 5, 9-12 » ; l’analyseur signale les plages hors limites ou inversées avant l’enregistrement.',
      },
      {
        title: 'Vérifiez votre sélection',
        description:
          'Confirmez que le mode et la liste de pages correspondent à ce dont vous avez besoin, surtout pour les extractions paires/impaires et éclatées.',
      },
      {
        title: 'Divisez et téléchargez',
        description:
          'Cliquez sur Diviser et télécharger le PDF pour générer votre document réduit localement.',
      },
      {
        title: 'Vérifiez le résultat et répétez si nécessaire',
        description:
          'Ouvrez le fichier téléchargé pour confirmer que les bonnes pages ont été extraites ; pour le mode éclaté, autorisez plusieurs téléchargements dans votre navigateur si on vous le demande.',
      },
    ],
    examples: [
      {
        title: 'Extraire les pages de signature d’un accord de 12 pages',
        input: 'Pages à extraire : 1, 10-12',
        output: 'contrat-extrait.pdf (4 pages)',
        explanation:
          'Exporte les pages 1, 10, 11 et 12 par ordre croissant tout en laissant votre fichier d’origine intact.',
      },
      {
        title: 'Extraire uniquement les pages impaires',
        input: 'Mode : Pages impaires uniquement · Document : 10 pages',
        output: 'document-impair.pdf (5 pages : 1, 3, 5, 7, 9)',
        explanation:
          'Utile pour les flux de numérisation recto-verso où les pages impaires et paires sont numérisées séparément.',
      },
    ],
    benefits: [
      'L’analyseur de plage flexible détecte les plages hors limites ou inversées avant l’enregistrement',
      'Préserve la netteté vectorielle d’origine et la sélection du texte',
      'Prend en charge l’extraction paire/impaire pour les flux de numérisation recto-verso',
      'Protège les documents financiers et juridiques privés des serveurs d’envoi tiers',
    ],
    useCases: [
      'Extraire uniquement les chapitres pertinents d’un grand rapport avant de le partager',
      'Séparer des factures individuelles regroupées dans un PDF de facturation principal',
      'Extraire les pages de signature ou d’annexe de contrats de plusieurs pages',
      'Récupérer des lots de numérisations paires/impaires depuis des chargeurs de documents recto',
    ],
    faqs: [
      {
        question: 'Pourquoi le mode Éclater toutes les pages individuelles est-il limité à 25 pages ?',
        answer:
          'Les navigateurs bloquent ou demandent souvent une confirmation quand un site déclenche plus d’environ 25 téléchargements de fichiers simultanés rapides. Utilisez Extraire des plages de pages pour les extractions plus importantes en plusieurs parties.',
      },
      {
        question: 'La division modifie-t-elle mon fichier PDF d’origine ?',
        answer:
          'Non. Le navigateur lit une copie locale en mémoire et génère un nouveau PDF téléchargé.',
      },
      {
        question: 'Quelle syntaxe puis-je taper dans Pages à extraire ?',
        answer:
          'Combinez des numéros uniques et des plages avec trait d’union séparés par des virgules, comme « 1-3, 5, 9-12 ».',
      },
      {
        question: 'L’outil Diviser un PDF est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans filigrane ni limite de pages au-delà du plafond d’éclatement de 25 pages.',
      },
      {
        question: 'Puis-je extraire uniquement les pages impaires d’un PDF ?',
        answer:
          'Oui, choisissez Pages impaires uniquement ; c’est utile pour les flux de numérisation recto-verso.',
      },
      {
        question: 'Puis-je extraire uniquement les pages paires d’un PDF ?',
        answer:
          'Oui, choisissez Pages paires uniquement pour extraire uniquement les pages numérotées paires.',
      },
      {
        question: 'Que se passe-t-il si je tape un numéro de page qui n’existe pas ?',
        answer:
          'L’analyseur de plage valide votre saisie et vous avertit des plages hors limites ou inversées avant d’enregistrer quoi que ce soit.',
      },
      {
        question: 'Puis-je extraire des pages PDF dans un ordre personnalisé, comme 10-12 puis 1 ?',
        answer:
          'Les pages extraites sont enregistrées par ordre croissant. Pour les réorganiser ensuite, utilisez l’outil Réorganiser les pages PDF.',
      },
      {
        question: 'La division d’un PDF garde-t-elle le texte consultable ?',
        answer:
          'Oui, les pages sont copiées sous forme de données vectorielles : le texte reste donc sélectionnable et consultable dans le fichier extrait.',
      },
      {
        question: 'Puis-je diviser un PDF protégé par mot de passe ?',
        answer:
          'Non, les PDF chiffrés doivent d’abord être déverrouillés ; l’outil n’accepte que les fichiers non chiffrés.',
      },
      {
        question: 'Puis-je diviser un PDF numérisé ?',
        answer:
          'Oui, les pages numérisées s’extraient exactement comme les pages de texte.',
      },
      {
        question: 'Le PDF extrait conservera-t-il sa qualité d’origine ?',
        answer:
          'Oui, aucune recompression ni conversion en image n’a lieu pendant l’extraction.',
      },
      {
        question: 'Comment éclater un PDF en fichiers d’une seule page ?',
        answer:
          'Choisissez Éclater toutes les pages individuelles ; chaque page se télécharge comme son propre PDF, jusqu’à 25 pages par exécution.',
      },
      {
        question: 'Puis-je télécharger uniquement la première page d’un PDF ?',
        answer:
          'Oui, choisissez Extraire des plages de pages et tapez « 1 » dans le champ Pages à extraire.',
      },
      {
        question: 'L’outil Diviser un PDF envoie-t-il mon fichier quelque part ?',
        answer:
          'Non, la division s’exécute entièrement dans votre navigateur ; votre fichier ne quitte jamais votre appareil.',
      },
      {
        question: 'Puis-je utiliser l’outil Diviser un PDF sur mon téléphone ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles modernes, même si les très gros fichiers se divisent plus confortablement sur un ordinateur.',
      },
      {
        question: 'Quelle est la différence entre Extraire des plages de pages et Éclater ?',
        answer:
          'Les plages combinent les pages sélectionnées en un seul nouveau PDF, tandis qu’Éclater crée un PDF distinct par page.',
      },
      {
        question: 'Puis-je extraire les pages 1-3 et la page 5 en une seule fois ?',
        answer:
          'Oui, tapez « 1-3, 5 » — les numéros uniques et les plages avec trait d’union peuvent être combinés avec des virgules.',
      },
      {
        question: 'Les signets survivront-ils quand je divise un PDF ?',
        answer:
          'Le contenu des pages est préservé, mais les sommaires et les signets du document ne sont généralement pas repris dans les fichiers extraits.',
      },
      {
        question: 'Mon téléchargement n’a pas démarré après la division — que dois-je faire ?',
        answer:
          'Autorisez les téléchargements multiples pour ce site dans votre navigateur, puis cliquez à nouveau sur Diviser ; le fichier est généré localement à chaque fois.',
      },
    ],
  },
  'images-to-pdf': {
    slug: 'images-en-pdf',
    name: 'Convertisseur d’Images en PDF',
    shortDescription:
      'Convertissez des images PNG, JPG et WebP en un seul PDF A4, Lettre US ou adapté à l’image, localement dans votre navigateur.',
    keywords: [
      'images en pdf',
      'jpg en pdf',
      'convertisseur png en pdf',
      'webp en pdf',
      'convertir images en pdf gratuit',
      'jpg png en pdf',
      'convertisseur photo en pdf',
      'combiner images en un seul pdf',
      'capture d’écran en pdf',
    ],
    seo: {
      title: 'Images en PDF – Convertir JPG, PNG et WebP | UtilityFlow',
      description:
        'Transformez vos photos ou captures JPG, PNG et WebP en un seul PDF de plusieurs pages, avec des pages A4, Lettre US ou à taille exacte, dans votre navigateur.',
      primaryKeyword: 'images en pdf',
      secondaryKeywords: [
        'convertisseur jpg en pdf dans le navigateur',
        'png en pdf en ligne gratuit',
        'combiner photos en pdf',
        'convertir images en pdf gratuit',
      ],
      longTailKeywords: [
        'convertir images jpg png webp en pdf a4 sans envoi',
        'regrouper captures d’écran en pdf de plusieurs pages localement',
        'adapter dimensions d’image à la page pdf sans recadrage',
        'transformer photos de téléphone en document pdf gratuit',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combinez des numérisations, des reçus ou des captures JPG, PNG et WebP en un PDF propre de plusieurs pages. Ordonnez les images visuellement, choisissez A4 Portrait, Lettre US ou Dimensions exactes de l’image, définissez les marges et générez localement via `pdf-lib`.',
    instructions: [
      {
        title: 'Sélectionnez une ou plusieurs images',
        description:
          'Choisissez des images JPG, PNG ou WebP ; les miniatures et les dimensions en pixels apparaissent immédiatement.',
      },
      {
        title: 'Organisez l’ordre des images',
        description:
          'Utilisez les flèches haut/bas pour définir la séquence des pages de votre PDF.',
      },
      {
        title: 'Configurez la taille de page et les marges',
        description:
          'Choisissez A4 Portrait, Lettre US ou Dimensions exactes de l’image, et définissez une marge pour les tailles de page standard.',
      },
      {
        title: 'Nommez votre fichier de sortie',
        description:
          'Saisissez un nom de fichier personnalisé pour que le PDF terminé soit facile à identifier.',
      },
      {
        title: 'Générez le PDF',
        description:
          'Cliquez sur Convertir les images en PDF pour construire le document localement et le télécharger instantanément.',
      },
      {
        title: 'Vérifiez et ajustez',
        description:
          'Ouvrez le PDF pour vérifier la mise en page et les marges ; réorganisez les images ou modifiez le réglage de page et reconvertissez si une page semble incorrecte.',
      },
    ],
    examples: [
      {
        title: 'Compiler des reçus de dépenses sur des pages A4 standard',
        input: '3 reçus JPG · A4 Portrait · Marge de 24 pt',
        output: 'lot-images.pdf (3 pages A4 centrées, proportions préservées)',
        explanation:
          'Met à l’échelle chaque image proportionnellement pour tenir dans les marges A4 imprimables sans distorsion.',
      },
      {
        title: 'Convertir une seule photo en PDF',
        input: '1 photo PNG · Dimensions exactes de l’image',
        output: 'photo.pdf (1 page à la taille native de l’image, sans marge)',
        explanation:
          'Le mode Dimensions exactes crée une page par image à sa taille native, sans recadrage ni marge.',
      },
    ],
    benefits: [
      'Intègre directement les flux JPG et PNG natifs et convertit proprement WebP via Canvas',
      'Préserve le rapport d’aspect complet de l’image sans étirement ni recadrage',
      'Prend en charge les feuilles imprimables A4 / Lettre US ainsi que les pages d’images exactes sans marge',
      'Garde les photos d’identité, les reçus et les documents privés strictement hors ligne dans la RAM du navigateur',
    ],
    useCases: [
      'Transformer les photos de reçus du téléphone en un PDF de dépenses mensuelles propre',
      'Compiler des maquettes de design ou des captures d’interface en un dossier de révision A4',
      'Convertir des pages de documents numérisés en un seul PDF téléchargeable',
      'Emballer des planches d’œuvres de portfolio sans compression cloud',
    ],
    faqs: [
      {
        question: 'Comment l’outil gère-t-il les images WebP ?',
        answer:
          'Comme la spécification PDF intègre nativement JPEG et PNG plutôt que WebP, l’outil décode les images WebP en douceur via HTML5 Canvas en cadres PNG sans perte avant de les intégrer.',
      },
      {
        question: 'Les photos portrait et paysage seront-elles étirées pour tenir en A4 ?',
        answer:
          'Non. Les images sont mises à l’échelle proportionnellement avec Math.min(largeurMax/largeurImg, hauteurMax/hauteurImg) et centrées sur la page.',
      },
      {
        question: 'Les miniatures d’images sont-elles envoyées quelque part ?',
        answer:
          'Non. Les aperçus utilisent des URL d’objet locales temporaires dans l’onglet de votre navigateur.',
      },
      {
        question: 'L’outil Images en PDF est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans filigrane et sans limite de nombre d’images converties.',
      },
      {
        question: 'Quels formats d’image puis-je convertir en PDF ?',
        answer:
          'JPG, PNG et WebP sont pris en charge.',
      },
      {
        question: 'Puis-je convertir une seule image en PDF ?',
        answer:
          'Oui, une image produit un PDF d’une page.',
      },
      {
        question: 'Puis-je réorganiser les images avant de les convertir en PDF ?',
        answer:
          'Oui, utilisez les flèches haut et bas pour organiser l’ordre des pages avant de générer le PDF.',
      },
      {
        question: 'Quelles tailles de page sont disponibles pour convertir des images en PDF ?',
        answer:
          'A4 Portrait, Lettre US et Dimensions exactes de l’image, qui crée une page par image à sa taille native.',
      },
      {
        question: 'Mes images seront-elles recadrées quand elles sont converties en PDF ?',
        answer:
          'Non, les images sont mises à l’échelle proportionnellement et centrées ; rien n’est recadré ni étiré.',
      },
      {
        question: 'Puis-je ajouter des marges autour de mes images dans le PDF ?',
        answer:
          'Oui, définissez une marge (par exemple 24 pt) quand vous utilisez les tailles de page A4 ou Lettre US.',
      },
      {
        question: 'La conversion d’images en PDF réduit-elle leur qualité ?',
        answer:
          'Les flux JPG et PNG sont intégrés nativement, et WebP est converti via Canvas en PNG sans perte : la qualité est donc préservée.',
      },
      {
        question: 'Puis-je convertir des photos HEIC de mon iPhone en PDF ?',
        answer:
          'Pas directement ; convertissez d’abord HEIC en JPG ou PNG, puis utilisez cet outil.',
      },
      {
        question: 'Mes photos sont-elles envoyées à un serveur quand je les convertis en PDF ?',
        answer:
          'Non, la conversion s’exécute localement dans votre navigateur et les aperçus utilisent des URL d’objet locales temporaires.',
      },
      {
        question: 'Puis-je utiliser l’outil Images en PDF sur mobile ?',
        answer:
          'Oui, il fonctionne dans les navigateurs mobiles ; choisissez les images directement dans votre photothèque.',
      },
      {
        question: 'Que se passe-t-il avec les très grandes images ?',
        answer:
          'Les grandes images sont intégrées en pleine résolution : le PDF résultant peut donc être volumineux ; compressez-les d’abord si la taille du fichier compte.',
      },
      {
        question: 'Puis-je mélanger JPG, PNG et WebP dans un seul PDF ?',
        answer:
          'Oui, vous pouvez combiner les trois formats dans un seul document.',
      },
      {
        question: 'Les pages du PDF seront-elles dans le même ordre que mes images ?',
        answer:
          'Oui, les pages suivent l’ordre affiché dans la liste des images.',
      },
      {
        question: 'Puis-je définir un nom de fichier personnalisé pour le PDF ?',
        answer:
          'Oui, saisissez le nom de fichier de votre choix avant de convertir.',
      },
      {
        question: 'L’outil conserve-t-il la transparence des images ?',
        answer:
          'La transparence PNG est préservée sur les pages à dimensions exactes de l’image ; sur les pages A4 ou Lettre, l’image repose sur un fond de page blanc.',
      },
      {
        question: 'Mon PDF ne s’est pas téléchargé — que dois-je faire ?',
        answer:
          'Vérifiez les autorisations de téléchargement de votre navigateur et réessayez ; le fichier est généré localement dans votre onglet.',
      },
    ],
  },
  'pdf-to-images': {
    slug: 'pdf-en-images',
    name: 'PDF en Images (PNG / JPG)',
    shortDescription:
      'Convertissez les pages PDF en images PNG ou JPG téléchargeables à une résolution de 1,0× à 2,0× localement via PDF.js.',
    keywords: [
      'pdf en images',
      'pdf en png',
      'convertisseur pdf en jpg',
      'convertir pages pdf en images',
      'convertir pdf en png gratuit',
      'convertir pdf en jpg',
      'page pdf en image',
      'exporter pages pdf en png',
      'enregistrer pdf en image en ligne',
    ],
    seo: {
      title: 'PDF en Images – Exporter des Pages en PNG | UtilityFlow',
      description:
        'Convertissez les pages PDF en PNG ou en JPG jusqu’à 2× dans votre navigateur. Choisissez des pages exactes, prévisualisez le rendu et téléchargez l’essentiel.',
      primaryKeyword: 'pdf en images',
      secondaryKeywords: [
        'convertisseur pdf en png',
        'pdf en jpg en ligne gratuit',
        'extraire page pdf en image',
        'convertir pdf en png gratuit',
      ],
      longTailKeywords: [
        'convertir pages pdf en png haute résolution dans le navigateur',
        'enregistrer une seule page pdf en jpg sans envoyer le document',
        'moteur de rendu pdfjs côté client vers png',
        'convertir diapositives pdf en images png pour partage',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convertissez les pages PDF en images PNG nettes sans perte ou en images JPG compactes directement dans votre navigateur avec le moteur de rendu PDF.js de Mozilla — avec filtrage par plage de pages, sélection d’échelle (`1,0×`–`2,0×`) et aperçus visuels.',
    instructions: [
      {
        title: 'Choisissez un fichier PDF',
        description:
          'Sélectionnez n’importe quel document PDF non chiffré ; PDF.js lit immédiatement le nombre total de pages.',
      },
      {
        title: 'Choisissez les pages à convertir',
        description:
          'Saisissez « tout » ou une plage de pages (jusqu’à 20 pages par lot), comme « 1-3, 5 ».',
      },
      {
        title: 'Choisissez le format et l’échelle',
        description:
          'Choisissez PNG pour un texte net ou JPG pour des fichiers plus petits riches en photos, et sélectionnez une résolution de 1,0×, 1,5× ou 2,0×.',
      },
      {
        title: 'Convertissez les pages',
        description:
          'Lancez le rendu et attendez que les aperçus de pages apparaissent ; les lots plus importants prennent un peu plus de temps.',
      },
      {
        title: 'Consultez les aperçus',
        description:
          'Inspectez chaque miniature rendue pour la netteté et le contenu correct avant de télécharger.',
      },
      {
        title: 'Téléchargez vos images',
        description:
          'Cliquez sur .PNG ou .JPG sur n’importe quelle carte de page pour enregistrer cette image ; répétez le lot pour les pages restantes si nécessaire.',
      },
    ],
    examples: [
      {
        title: 'Exporter des diapositives de présentation pour le partage social',
        input: 'Pages : 1-3 · Format : PNG · Échelle : 2,0× (144 PPP)',
        output: '3 images de diapositives PNG nettes 2× prêtes pour LinkedIn ou les intégrations de blog',
        explanation:
          'Le rendu de canevas à grande échelle garde les diagrammes et la typographie nets.',
      },
      {
        title: 'Enregistrer une seule page de certificat en JPG',
        input: 'Page : 1 · Format : JPG · Échelle : 1,5×',
        output: '1 image JPG compacte du certificat, prête à partager',
        explanation:
          'Le JPG convient aux pages riches en photos et produit des fichiers plus petits que le PNG.',
      },
    ],
    benefits: [
      'Utilise le Web Worker PDF.js intégré à Vite — aucune requête de script CDN externe',
      'Remplit automatiquement un fond de canevas blanc quand il exporte des PDF transparents en JPG',
      'Permet de cibler des plages de pages exactes au lieu de convertir un fichier entier de 100 pages',
      'Le rendu de canevas privé côté navigateur protège les documents sensibles',
    ],
    useCases: [
      'Transformer les diapositives de pitch-deck PDF en visuels de blog ou sociaux',
      'Enregistrer une seule page de certificat signé ou de billet en photo mobile',
      'Générer des aperçus d’interface nets de documents PDF imprimables',
      'Inspecter visuellement le rendu des polices et de la mise en page en dehors des applications PDF dédiées',
    ],
    faqs: [
      {
        question: 'Dois-je choisir PNG ou JPG pour les pages PDF ?',
        answer:
          'Choisissez PNG pour les diapositives, les documents texte, les reçus et les graphiques où les bords nets comptent. Choisissez JPG quand vous exportez des brochures riches en photos pour des tailles de fichier plus petites.',
      },
      {
        question: 'Pourquoi PDF en Images convertit-il jusqu’à 20 pages par lot ?',
        answer:
          'Les canevas haute résolution 2× consomment beaucoup de GPU et de RAM par page ; limiter les lots à 20 pages garde les onglets de navigateur réactifs sur les téléphones et les ordinateurs portables.',
      },
      {
        question: 'Cela fonctionne-t-il sur les PDF protégés par mot de passe ?',
        answer:
          'Les PDF chiffrés doivent être déverrouillés avant le rendu local.',
      },
      {
        question: 'L’outil PDF en Images est-il gratuit ?',
        answer:
          'Oui, il est gratuit, sans filigrane ; le rendu se fait localement dans votre navigateur.',
      },
      {
        question: 'Quelle résolution dois-je choisir pour les réseaux sociaux ?',
        answer:
          '2,0× donne les résultats les plus nets pour les publications et les intégrations de blog, tandis que 1,0× suffit pour des aperçus rapides.',
      },
      {
        question: 'Puis-je exporter une seule page en image ?',
        answer:
          'Oui, saisissez ce numéro de page dans le champ de plage de pages.',
      },
      {
        question: 'Puis-je exporter toutes les pages d’un PDF à la fois ?',
        answer:
          'Vous pouvez convertir jusqu’à 20 pages par lot ; répétez le processus pour les documents plus longs.',
      },
      {
        question: 'Pourquoi mon export JPG affiche-t-il un fond blanc ?',
        answer:
          'Le JPG n’a pas de transparence : les zones PDF transparentes sont donc automatiquement remplies en blanc.',
      },
      {
        question: 'PDF en Images garde-t-il le texte net ?',
        answer:
          'Oui, les pages sont rendues à une échelle allant jusqu’à 2× avec PDF.js, gardant le texte et les diagrammes nets.',
      },
      {
        question: 'Puis-je choisir quelles pages convertir en images ?',
        answer:
          'Oui, tapez « tout » ou une plage comme « 1-3, 5 » dans le champ des pages.',
      },
      {
        question: 'Mes fichiers PDF sont-ils envoyés quelque part ?',
        answer:
          'Non, le rendu se fait dans votre navigateur via un worker PDF.js local ; rien ne quitte votre appareil.',
      },
      {
        question: 'Puis-je utiliser PDF en Images sur mon téléphone ?',
        answer:
          'Oui, même si les rendus haute résolution utilisent plus de mémoire : les lots plus petits fonctionnent donc mieux sur les téléphones.',
      },
      {
        question: 'Quelle est la différence entre les échelles 1,0×, 1,5× et 2,0× ?',
        answer:
          'Les échelles plus élevées rendent plus de pixels par page, produisant des images plus grandes et plus nettes ; 2,0× correspond à environ 144 PPP.',
      },
      {
        question: 'Puis-je télécharger toutes les pages rendues en un clic ?',
        answer:
          'Chaque carte de page a son propre bouton de téléchargement .PNG ou .JPG ; téléchargez individuellement les pages dont vous avez besoin.',
      },
      {
        question: 'Les graphiques vectoriels et les diagrammes resteront-ils nets ?',
        answer:
          'Oui, PDF.js convertit le contenu vectoriel à l’échelle choisie, donc les graphiques et les diagrammes restent nets.',
      },
      {
        question: 'Pourquoi le rendu prend-il du temps sur les gros PDF ?',
        answer:
          'Chaque page est dessinée sur un canevas à haute résolution ; convertir quelques pages à la fois garde l’onglet réactif.',
      },
      {
        question: 'Puis-je convertir un PDF numérisé en images ?',
        answer:
          'Oui, les pages numérisées se convertissent en images exactement comme elles apparaissent dans le PDF.',
      },
      {
        question: 'L’outil PDF en Images fonctionne-t-il hors ligne ?',
        answer:
          'Une fois la page chargée, le rendu s’exécute localement dans votre navigateur sans autre requête réseau.',
      },
      {
        question: 'Mon image rendue semble floue — que dois-je faire ?',
        answer:
          'Convertissez à nouveau à l’échelle 2,0× et choisissez PNG pour les pages riches en texte.',
      },
      {
        question: 'Puis-je utiliser les images exportées commercialement ?',
        answer:
          'Les images vous appartiennent et vous pouvez les utiliser comme le PDF d’origine ; respectez le droit d’auteur du document source.',
      },
    ],
  },
  'pdf-page-rotator': {
    slug: 'rotation-pages-pdf',
    name: 'Rotation de Pages PDF',
    shortDescription:
      'Faites pivoter toutes les pages, les pages paires ou impaires, ou des plages de pages précises de 90°, 180° ou 270° de façon permanente, sans perte de qualité.',
    keywords: [
      'pivoter pdf',
      'rotation de pages pdf',
      'corriger pages pdf de travers',
      'enregistrer pdf pivoté',
      'pivoter pages pdf en ligne gratuit',
      'pivoter pdf de 90 degrés',
      'corriger pdf pivoté',
      'pivoter pages pdf de façon permanente',
      'pivoter pages pdf numérisées',
    ],
    seo: {
      title: 'Rotation de Pages PDF – Corriger les Pages | UtilityFlow',
      description:
        'Faites pivoter les pages PDF de travers ou à l’envers de 90°, 180° ou 270° sur toutes les pages, paires/impaires ou des plages personnalisées, gratuitement.',
      primaryKeyword: 'rotation de pages pdf',
      secondaryKeywords: [
        'pivoter pdf de façon permanente',
        'corriger scan pdf à l’envers',
        'pivoter pages pdf précises',
        'pivoter pdf de 90 degrés en ligne',
      ],
      longTailKeywords: [
        'pivoter uniquement les pages 2 et 4 d’un document pdf en ligne',
        'pivoter pdf numérisé de 90 degrés de façon permanente sans réencodage',
        'outil d’orientation de pages pdf côté client',
        'pivoter pages pdf à l’envers de façon permanente gratuit',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrigez définitivement les tableaux en paysage de travers ou les numérisations de documents à l’envers dans le dictionnaire de pages du PDF. Appliquez des rotations de `90°` dans le sens horaire, `90°` dans le sens antihoraire ou `180°` à chaque page, aux feuilles paires/impaires ou à des plages de pages exactes.',
    instructions: [
      {
        title: 'Chargez votre PDF',
        description:
          'Sélectionnez le fichier PDF contenant des pages de travers ou inversées.',
      },
      {
        title: 'Choisissez l’angle de rotation',
        description:
          'Choisissez 90° dans le sens horaire, 90° dans le sens antihoraire ou 180°, selon la façon dont les pages sont mal alignées.',
      },
      {
        title: 'Choisissez la portée des pages',
        description:
          'Sélectionnez Toutes les pages, Plages précises, Impaires ou Paires ; pour les plages, tapez des pages comme « 2, 5-7 ».',
      },
      {
        title: 'Prévisualisez l’orientation actuelle',
        description:
          'Vérifiez quelles pages sont réellement de travers pour ne pivoter que celles qui en ont besoin.',
      },
      {
        title: 'Appliquez et téléchargez',
        description:
          'Cliquez sur Appliquer la rotation et télécharger le PDF pour enregistrer définitivement le fichier corrigé.',
      },
      {
        title: 'Vérifiez et corrigez les restes',
        description:
          'Ouvrez le PDF téléchargé ; si une page est encore de travers, relancez-le avec un autre 90° dans le même sens.',
      },
    ],
    examples: [
      {
        title: 'Corriger un seul graphique financier pivoté à la page 3',
        input: 'Rotation : 90° dans le sens horaire · Portée : Plages de pages précises (3)',
        output: 'Seule la page 3 pivote dans le sens horaire ; toutes les autres pages conservent leur orientation existante.',
        explanation:
          'Ajoute 90° modulo 360 aux métadonnées de rotation de page existantes sans convertir le texte en image.',
      },
      {
        title: 'Redresser un lot de numérisations à l’envers',
        input: 'Rotation : 180° · Portée : Toutes les pages',
        output: 'Toutes les pages sont retournées et s’ouvrent à l’endroit dans n’importe quel lecteur PDF.',
        explanation:
          'La rotation de 180° est écrite dans le dictionnaire de pages et enregistrée dans le fichier téléchargé.',
      },
    ],
    benefits: [
      'Rotation sans perte — met à jour les indicateurs d’orientation des pages PDF sans recompresser le texte ou les images',
      'Préserve proprement les angles de page existants (calcule la rotation relative modulo 360°)',
      'Cible des plages sélectives comme « 2, 5-7 » sans pivoter les pages droites',
      'Téléchargement instantané dans le navigateur sans aucun envoi vers un serveur',
    ],
    useCases: [
      'Corriger des lots de numérisations à l’envers sur mobile ou sur des photocopieurs de bureau',
      'Faire pivoter de larges tableurs en paysage dans des rapports majoritairement en portrait',
      'Corriger les pièces jointes d’orientation mixte après la fusion de documents',
      'Préparer des dépôts de conformité proprement orientés pour les portails',
    ],
    faqs: [
      {
        question: 'La rotation des pages réduit-elle la netteté du texte ou des images ?',
        answer:
          'Non. Définir la propriété de rotation de page du PDF est complètement sans perte et ne réencode ni les polices ni les images intégrées.',
      },
      {
        question: 'Que se passe-t-il si une page de mon PDF était déjà pivotée de 90° ?',
        answer:
          'Le rotateur lit l’angle de rotation actuel de chaque page et ajoute le delta choisi modulo 360° : les changements d’orientation sont donc prévisibles par rapport à l’apparence actuelle de la page.',
      },
      {
        question: 'Puis-je pivoter une seule page dans un PDF de 20 pages ?',
        answer:
          'Oui. Choisissez « Plages de pages précises » et tapez ce numéro de page exact (par exemple « 7 »).',
      },
      {
        question: 'La rotation de pages PDF est-elle gratuite ?',
        answer:
          'Oui, elle est gratuite, sans filigrane ni limite.',
      },
      {
        question: 'Puis-je pivoter toutes les pages d’un PDF à la fois ?',
        answer:
          'Oui, choisissez Toutes les pages et sélectionnez 90° dans le sens horaire, 90° dans le sens antihoraire ou 180°.',
      },
      {
        question: 'Puis-je pivoter uniquement les pages paires ou impaires ?',
        answer:
          'Oui, choisissez la portée Impaire ou Paire ; c’est utile pour corriger les lots de numérisation recto-verso.',
      },
      {
        question: 'Par quels angles puis-je pivoter les pages PDF ?',
        answer:
          '90° dans le sens horaire, 90° dans le sens antihoraire et 180°.',
      },
      {
        question: 'Puis-je pivoter une page PDF d’un angle personnalisé comme 45° ?',
        answer:
          'Non, seuls 90°, 180° et 270° (via des rotations répétées de 90°) sont pris en charge, car la rotation PDF est définie en quarts de tour.',
      },
      {
        question: 'La rotation est-elle permanente ?',
        answer:
          'Oui, la rotation est écrite dans le dictionnaire de pages du PDF et enregistrée dans le fichier téléchargé.',
      },
      {
        question: 'La rotation modifie-t-elle la taille du fichier PDF ?',
        answer:
          'À peine ; seules les métadonnées d’orientation changent, donc le fichier garde presque la même taille.',
      },
      {
        question: 'Puis-je pivoter un PDF protégé par mot de passe ?',
        answer:
          'Non, les PDF chiffrés doivent d’abord être déverrouillés.',
      },
      {
        question: 'La rotation de pages PDF envoie-t-elle mon fichier ?',
        answer:
          'Non, la rotation s’exécute entièrement dans votre navigateur ; votre fichier ne quitte jamais votre appareil.',
      },
      {
        question: 'Puis-je pivoter des pages dans un PDF numérisé ?',
        answer:
          'Oui, les pages numérisées pivotent comme les pages de texte.',
      },
      {
        question: 'La rotation corrigera-t-elle un PDF qui s’ouvre de travers dans chaque lecteur ?',
        answer:
          'Oui, le fichier enregistré s’ouvre dans l’orientation corrigée dans n’importe quel lecteur PDF.',
      },
      {
        question: 'Puis-je pivoter différentes pages de montants différents ?',
        answer:
          'Exécutez l’outil une fois par angle : pivotez une plage, téléchargez, puis pivotez une autre plage dans le résultat.',
      },
      {
        question: 'Que dois-je faire si une page est encore de travers après la rotation ?',
        answer:
          'Vérifiez d’abord l’apparence actuelle de la page, puis ajoutez un autre 90° dans le même sens, car la rotation est relative à l’angle actuel.',
      },
      {
        question: 'La rotation affecte-t-elle les liens cliquables ou les champs de formulaire ?',
        answer:
          'Les liens et les annotations pivotent avec la page, donc ils restent alignés avec le contenu.',
      },
      {
        question: 'Puis-je utiliser la rotation de pages PDF sur mon téléphone ?',
        answer:
          'Oui, elle fonctionne dans les navigateurs mobiles modernes.',
      },
      {
        question: 'Le PDF pivoté s’imprimera-t-il correctement ?',
        answer:
          'Oui, les imprimantes suivent l’orientation de page enregistrée : les pages pivotées s’impriment donc dans le bon sens.',
      },
      {
        question: 'Mon téléchargement n’a pas démarré — que dois-je faire ?',
        answer:
          'Autorisez les téléchargements pour ce site dans les paramètres de votre navigateur et cliquez à nouveau sur Appliquer la rotation ; le fichier est généré localement.',
      },
    ],
  },
  'reorder-delete-pdf-pages': {
    slug: 'reorganiser-supprimer-pages-pdf',
    name: 'Réorganiser et Supprimer des Pages PDF',
    shortDescription:
      'Inspectez visuellement les miniatures PDF, déplacez les pages vers le haut ou le bas, dupliquez des feuilles ou supprimez les pages indésirables localement.',
    keywords: [
      'réorganiser pages pdf',
      'supprimer pages pdf',
      'réarranger pdf',
      'retirer pages de pdf',
      'réorganiser pages pdf en ligne',
      'supprimer pages vides de pdf',
      'dupliquer page pdf',
      'organiser pages pdf',
      'déplacer pages pdf',
    ],
    seo: {
      title: 'Réorganiser les Pages PDF – Déplacer | UtilityFlow',
      description:
        'Réorganisez les pages PDF dans votre navigateur : déplacez, dupliquez ou supprimez des pages avec des miniatures en direct et téléchargez un fichier propre.',
      primaryKeyword: 'réorganiser pages pdf',
      secondaryKeywords: [
        'supprimer pages de pdf',
        'réarranger pdf en ligne',
        'retirer pages pdf vides',
        'réorganiser pages pdf en ligne',
      ],
      longTailKeywords: [
        'réorganiser et retirer visuellement pages pdf sans envoi',
        'dupliquer une page dans un pdf existant dans le navigateur',
        'réorganiser séquence de pages pdf gratuit côté client',
        'réorganiser pages pdf en ligne gratuit dans le navigateur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Consultez les cartes de pages rendues de votre PDF, déplacez les pages mal placées vers l’avant ou l’arrière, dupliquez les pages de garde ou de modèle, supprimez les pages vides et exportez un PDF propre réorganisé localement.',
    instructions: [
      {
        title: 'Chargez votre document PDF',
        description:
          'Sélectionnez un PDF non chiffré ; les aperçus de miniatures se rendent localement pour un maximum de 30 pages (avec des cartes de pages et des dimensions pour toutes les pages).',
      },
      {
        title: 'Consultez les cartes de pages',
        description:
          'Chaque carte montre sa position de sortie actuelle et son index de page d’origine, pour que vous puissiez repérer les pages vides, dupliquées ou mal placées avant de modifier quoi que ce soit.',
      },
      {
        title: 'Réorganisez, dupliquez ou supprimez',
        description:
          'Utilisez les boutons fléchés pour modifier la séquence, l’icône de copie pour dupliquer une feuille ou l’icône de corbeille pour supprimer les pages indésirables.',
      },
      {
        title: 'Vérifiez le nouvel ordre des pages',
        description:
          'Parcourez les positions mises à jour de chaque carte pour confirmer que les annexes, les pièces et les pages de garde se trouvent exactement là où elles doivent être.',
      },
      {
        title: 'Enregistrez le PDF organisé',
        description:
          'Cliquez sur Enregistrer le PDF réorganisé pour compiler et télécharger votre document propre.',
      },
      {
        title: 'Astuce : gardez le fichier d’origine',
        description:
          'L’outil ne modifie jamais votre fichier source : gardez-le donc comme sauvegarde. Si un PDF ne se charge pas, vérifiez qu’il n’est pas protégé par mot de passe ou chiffré.',
      },
    ],
    examples: [
      {
        title: 'Supprimer une page de fin vide et avancer une annexe',
        input: 'PDF de 5 pages · Supprimer la page 5 · Déplacer la page 4 en position n° 2',
        output: 'PDF mis à jour de 4 pages avec le contenu vectoriel intact',
        explanation:
          'Reconstruit proprement l’arborescence des pages du document dans l’ordre sélectionné.',
      },
      {
        title: 'Dupliquer une page de formulaire imprimable',
        input: 'PDF de 3 pages · Dupliquer la page 2',
        output: 'PDF de 4 pages avec la page de formulaire répétée deux fois',
        explanation:
          'La copie de page duplique la feuille exacte, utile pour les formulaires ou les feuilles de signature répétés.',
      },
    ],
    benefits: [
      'Combine les miniatures visuelles PDF.js avec la copie de pages pdf-lib sans perte',
      'Protège contre l’enregistrement accidentel d’un PDF vide de 0 page',
      'Affiche à la fois la position de sortie actuelle et l’index de page d’origine',
      'Aucun envoi de fichier pour les dossiers RH, juridiques ou médicaux confidentiels',
    ],
    useCases: [
      'Supprimer les pages vides accidentelles produites par les scanners recto-verso',
      'Déplacer les annexes ou les pièces mal placées dans le bon ordre',
      'Dupliquer les pages de formulaires imprimables ou les feuilles de signature dans un paquet',
      'Nettoyer les PDF combinés avant de les envoyer aux clients',
    ],
    faqs: [
      {
        question: 'Pourquoi les miniatures ne se rendent-elles que pour les 30 premières pages ?',
        answer:
          'Pour garder la RAM du navigateur rapide sur les documents volumineux, les miniatures en direct se rendent pour les 30 premières pages, tandis que chaque page reste entièrement réorganisable et supprimable via sa carte.',
      },
      {
        question: 'La réorganisation des pages aplatit-elle le texte en images ?',
        answer:
          'Non. Les miniatures ne servent qu’à l’aperçu visuel dans l’interface ; le résultat enregistré utilise pdf-lib copyPages() pour préserver le texte vectoriel d’origine et les liens.',
      },
      {
        question: 'Puis-je annuler la suppression de toutes les pages ?',
        answer:
          'L’éditeur exige qu’au moins 1 page reste, et le re-téléchargement du fichier source intact restaure l’original complet à tout moment.',
      },
      {
        question: 'L’outil Réorganiser et Supprimer des Pages PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand je réorganise ses pages ?',
        answer:
          'Non. Votre PDF est traité localement dans votre navigateur et n’est jamais envoyé : les documents confidentiels restent donc sur votre appareil.',
      },
      {
        question: 'Puis-je supprimer plusieurs pages à la fois ?',
        answer:
          'Chaque carte de page a sa propre icône de corbeille : supprimez donc les pages une par une ; le nombre de pages et les positions se mettent à jour immédiatement après chaque suppression.',
      },
      {
        question: 'Puis-je déplacer une page directement au début ou à la fin du PDF ?',
        answer:
          'Utilisez les boutons fléchés à plusieurs reprises pour amener une page à la première ou à la dernière position, en vérifiant sa position de sortie mise à jour sur la carte au fur et à mesure.',
      },
      {
        question: 'Que se passe-t-il si je supprime la mauvaise page par erreur ?',
        answer:
          'Il n’y a pas de bouton d’annulation : téléchargez donc simplement à nouveau votre fichier d’origine intact et refaites les modifications ; l’outil ne modifie jamais votre fichier source.',
      },
      {
        question: 'La réorganisation des pages modifie-t-elle le texte ou les images qu’elles contiennent ?',
        answer:
          'Non. Les pages sont copiées telles quelles avec pdf-lib : le texte vectoriel, les images et les polices conservent donc leur qualité d’origine.',
      },
      {
        question: 'Puis-je dupliquer la même page plusieurs fois ?',
        answer:
          'Oui. Cliquez sur l’icône de copie d’une page autant de fois que nécessaire, par exemple pour répéter un formulaire imprimable ou une feuille de signature dans un paquet.',
      },
      {
        question: 'Quels PDF fonctionnent avec l’outil Réorganiser et Supprimer des Pages PDF ?',
        answer:
          'Tout PDF non chiffré fonctionne. Les PDF protégés par mot de passe ou chiffrés ne peuvent pas être ouverts par cet outil de navigateur.',
      },
      {
        question: 'Combien de pages mon PDF peut-il avoir ?',
        answer:
          'Il n’y a pas de plafond fixe de pages ; les miniatures en direct se rendent pour les 30 premières pages, tandis que chaque page reçoit toujours une carte avec sa position et son index d’origine.',
      },
      {
        question: 'La taille de mon fichier changera-t-elle après la réorganisation des pages ?',
        answer:
          'La suppression de pages rend le fichier plus petit, tandis que la réorganisation seule garde la taille à peu près identique, car le document est reconstruit à partir des mêmes pages.',
      },
      {
        question: 'Puis-je réorganiser les pages d’un PDF numérisé ?',
        answer:
          'Oui. Les pages sont copiées entières, qu’elles contiennent du texte ou des images numérisées : les documents numérisés se réorganisent donc comme n’importe quel autre PDF.',
      },
      {
        question: 'L’outil Réorganiser et Supprimer des Pages PDF fonctionne-t-il sur mobile ?',
        answer:
          'Oui, il fonctionne dans n’importe quel navigateur mobile moderne, même si les cartes de pages et les miniatures sont plus faciles à gérer sur un écran d’ordinateur plus grand.',
      },
      {
        question: 'Puis-je pivoter les pages en les réorganisant ?',
        answer:
          'Non. La rotation est une tâche distincte : utilisez donc d’abord l’outil Rotation de Pages PDF, puis réorganisez ici les pages pivotées.',
      },
      {
        question: 'Comment distinguer les pages dans l’éditeur ?',
        answer:
          'Chaque carte montre un aperçu miniature quand il est disponible, ainsi que sa position de sortie actuelle et son numéro de page d’origine dans le fichier source.',
      },
      {
        question: 'Puis-je fusionner deux PDF ensemble avec cet outil ?',
        answer:
          'Non. Cet outil ne réorganise que les pages d’un seul PDF ; utilisez d’abord l’outil Fusionner des PDF pour combiner des documents distincts.',
      },
      {
        question: 'La suppression de pages supprime-t-elle les signets ou les liens internes ?',
        answer:
          'Le contenu des pages est préservé, mais les signets au niveau du document peuvent ne pas survivre à la reconstruction : vérifiez donc le fichier enregistré avant de le partager.',
      },
      {
        question: 'Quel fichier obtiens-je après avoir enregistré le PDF réorganisé ?',
        answer:
          'Un tout nouveau PDF se télécharge sur votre appareil dans l’ordre de pages choisi, tandis que votre fichier d’origine reste intact sur votre ordinateur.',
      },
    ],
  },
  'pdf-watermark': {
    slug: 'filigrane-pdf',
    name: 'Outil de Filigrane PDF',
    shortDescription:
      'Apposez des filigranes de texte diagonaux personnalisables comme CONFIDENTIEL ou BROUILLON sur les pages PDF, avec taille et opacité personnalisées.',
    keywords: [
      'filigrane pdf',
      'ajouter filigrane à pdf',
      'tampon pdf confidentiel',
      'filigrane pdf brouillon',
      'filigrane pdf en ligne gratuit',
      'ajouter tampon brouillon à pdf',
      'filigrane confidentiel pdf',
      'créateur de filigrane pdf',
      'tamponner pages pdf',
    ],
    seo: {
      title: 'Filigrane PDF – Ajouter des Tampons Gratuit | UtilityFlow',
      description:
        'Ajoutez un filigrane PDF à vos documents dans votre navigateur : texte diagonal ou centré, taille, opacité, angle et couleur, sans envoi — gratuit et privé.',
      primaryKeyword: 'filigrane pdf',
      secondaryKeywords: [
        'ajouter tampon confidentiel à pdf',
        'filigrane pdf dans le navigateur',
        'outil de superposition brouillon pdf',
        'filigrane pdf en ligne gratuit',
      ],
      longTailKeywords: [
        'ajouter filigrane diagonal semi-transparent à pdf sans envoi',
        'filigrane uniquement première page du contrat pdf',
        'tampon de texte vectoriel sur pages pdf gratuit',
        'ajouter filigrane confidentiel à pdf gratuit dans le navigateur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Apposez des filigranes de texte vectoriel centrés ou diagonaux — comme `CONFIDENTIEL`, `BROUILLON` ou `NE PAS DISTRIBUER` — sur toutes les pages ou sur la page de garde de n’importe quel PDF, avec des contrôles en direct de la taille de police, de l’opacité, de l’angle de rotation et de la couleur de marque.',
    instructions: [
      {
        title: 'Choisissez votre fichier PDF',
        description:
          'Téléchargez n’importe quel document PDF non chiffré localement en mémoire.',
      },
      {
        title: 'Tapez le texte de votre filigrane',
        description:
          'Saisissez le tampon dont vous avez besoin, comme CONFIDENTIEL, BROUILLON ou NE PAS DISTRIBUER, en caractères latins standard.',
      },
      {
        title: 'Personnalisez le tampon de filigrane',
        description:
          'Choisissez Gris neutre, Indigo de marque ou Rouge tampon, et réglez les curseurs de taille, d’opacité et d’angle jusqu’à ce que le tampon soit correct.',
      },
      {
        title: 'Choisissez les pages à tamponner',
        description:
          'Laissez le réglage par défaut pour filigraner chaque page, ou cochez Première page uniquement quand seule la page de garde a besoin d’un tampon de classification.',
      },
      {
        title: 'Appliquez et téléchargez',
        description:
          'Cochez éventuellement Première page uniquement, puis cliquez sur Appliquer le filigrane et télécharger.',
      },
      {
        title: 'Astuce : vérifiez la lisibilité avant de partager',
        description:
          'Ouvrez le fichier téléchargé et confirmez que le corps du texte reste facile à lire ; si le tampon est trop fort, relancez-le avec une opacité plus faible comme 15 à 22 %.',
      },
    ],
    examples: [
      {
        title: 'Tamponner un brouillon de proposition avant publication',
        input: 'Texte : BROUILLON · Police : 54 pt · Opacité : 22 % · Angle : 40°',
        output: 'Superposition vectorielle BROUILLON diagonale centrée semi-transparente sur chaque page',
        explanation:
          'Utilise l’opacité alpha pour que le texte du corps sous-jacent reste entièrement lisible.',
      },
      {
        title: 'Tamponner uniquement la page de garde',
        input: 'Texte : CONFIDENTIEL · Première page uniquement : coché',
        output: 'Tampon CONFIDENTIEL uniquement sur la page 1 ; les autres pages restent propres',
        explanation:
          'Le mode Première page uniquement convient aux tampons de classification de la page de garde.',
      },
    ],
    benefits: [
      'Utilise une typographie vectorielle HelveticaBold standard nette plutôt que des bitmaps flous',
      'Prend en charge une opacité alpha semi-transparente de 8 % à 65 % pour que le contenu reste lisible',
      'Offre le mode Première page uniquement pour les tampons de classification de page de garde',
      'Garde les brouillons non publiés strictement hors des serveurs cloud externes',
    ],
    useCases: [
      'Marquer les contrats brouillons, les cahiers des charges ou les pitch decks avant la révision externe',
      'Ajouter des mentions CONFIDENTIEL ou USAGE INTERNE UNIQUEMENT aux dossiers RH ou du conseil',
      'Étiqueter des portfolios d’échantillons ou des épreuves d’aperçu',
      'Appliquer des tampons de statut de révision cohérents avant l’archivage',
    ],
    faqs: [
      {
        question: 'Les destinataires peuvent-ils modifier ou supprimer le filigrane dans des éditeurs PDF complets ?',
        answer:
          'Les filigranes de texte dessinés avec pdf-lib sont des objets de contenu vectoriel standard sur la page. Si vous avez besoin de pages aplaties non sélectionnables où les filigranes ne peuvent pas être sélectionnés comme texte, convertissez le PDF filigrané via nos outils PDF en Images et Images en PDF.',
      },
      {
        question: 'Le filigrane fonctionne-t-il sur les pages portrait et paysage ?',
        answer:
          'Oui. Les coordonnées se calculent dynamiquement à partir de la largeur et de la hauteur de chaque page individuelle.',
      },
      {
        question: 'Quels caractères sont pris en charge dans la chaîne de filigrane ?',
        answer:
          'Les caractères WinAnsi standard (ASCII latin et symboles courants d’Europe occidentale) pris en charge par PDF HelveticaBold.',
      },
      {
        question: 'L’outil de filigrane PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand j’ajoute un filigrane ?',
        answer:
          'Non. Le fichier est traité localement dans votre navigateur et n’est jamais envoyé : les brouillons non publiés restent donc privés.',
      },
      {
        question: 'Puis-je filigraner seulement certaines pages d’un PDF ?',
        answer:
          'Vous pouvez filigraner chaque page ou uniquement la première page avec l’option Première page uniquement ; le tamponnage d’une plage médiane personnalisée n’est pas pris en charge.',
      },
      {
        question: 'Quel texte puis-je utiliser comme filigrane PDF ?',
        answer:
          'N’importe quel court libellé en caractères latins standard, comme CONFIDENTIEL, BROUILLON, USAGE INTERNE UNIQUEMENT ou le nom de votre entreprise.',
      },
      {
        question: 'Puis-je utiliser le nom de mon entreprise comme filigrane ?',
        answer:
          'Oui. Tapez le nom de votre entreprise ou de votre marque comme texte de filigrane et il sera tamponné sur les pages choisies.',
      },
      {
        question: 'Puis-je changer la couleur du filigrane PDF ?',
        answer:
          'Oui. Choisissez Gris neutre pour une marque discrète, Indigo de marque pour correspondre à une marque, ou Rouge tampon pour une notice de classification audacieuse.',
      },
      {
        question: 'Quelle transparence le filigrane peut-il avoir ?',
        answer:
          'L’opacité est réglable de 8 % à 65 % : vous pouvez donc garder le tampon visible pendant que le texte en dessous reste entièrement lisible.',
      },
      {
        question: 'Puis-je rendre le filigrane horizontal au lieu de diagonal ?',
        answer:
          'Oui. Réglez le curseur d’angle sur 0 degré pour un tampon droit horizontal, ou choisissez n’importe quel angle jusqu’à une diagonale complète.',
      },
      {
        question: 'Puis-je ajouter un filigrane d’image ou de logo à un PDF ?',
        answer:
          'Non. Cet outil ne tamponne que des filigranes de texte ; les superpositions d’images et de logos ne sont pas prises en charge.',
      },
      {
        question: 'Le filigrane s’imprimera-t-il quand le PDF est imprimé ?',
        answer:
          'Oui. Le filigrane est un vrai contenu vectoriel dessiné sur chaque page : il apparaît donc dans les impressions comme à l’écran.',
      },
      {
        question: 'Le filigranage modifie-t-il le texte d’origine de mon PDF ?',
        answer:
          'Non. Le filigrane est dessiné comme une superposition au-dessus des pages et ne modifie ni ne remplace aucun contenu existant.',
      },
      {
        question: 'Puis-je filigraner un PDF protégé par mot de passe ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'Cet outil peut-il supprimer un filigrane d’un PDF ?',
        answer:
          'Non. Il ne fait qu’ajouter des filigranes ; la suppression d’un filigrane existant nécessite un éditeur PDF complet.',
      },
      {
        question: 'Quelle police le filigrane PDF utilise-t-il ?',
        answer:
          'Les filigranes utilisent une typographie vectorielle HelveticaBold standard nette, qui reste nette à n’importe quelle taille au lieu de devenir floue comme un bitmap.',
      },
      {
        question: 'Le filigrane restera-t-il lisible sur des pages sombres ou chargées ?',
        answer:
          'Cela dépend de l’arrière-plan de la page : choisissez donc une couleur contrastée et une opacité modérée, puis ouvrez le fichier téléchargé pour vérifier le résultat.',
      },
      {
        question: 'Puis-je filigraner un PDF numérisé ?',
        answer:
          'Oui. Le filigrane est dessiné sur chaque page, que la page contienne du texte ou une image numérisée.',
      },
      {
        question: 'L’ajout d’un filigrane rend-il mon fichier PDF beaucoup plus volumineux ?',
        answer:
          'Seulement légèrement. Le texte vectoriel ajoute très peu de données : la taille du fichier augmente donc d’une petite quantité par rapport aux tampons basés sur des images.',
      },
    ],
  },
  'add-pdf-page-numbers': {
    slug: 'ajouter-numeros-page-pdf',
    name: 'Ajouter des Numéros de Page au PDF',
    shortDescription:
      'Insérez des numéros de page vectoriels propres (« Page 1 sur N », « 1 / N » ou « 1 ») dans les documents PDF, avec saut de la page de garde.',
    keywords: [
      'ajouter numéros de page à pdf',
      'numérotation de pages pdf',
      'numéroter pages pdf en ligne',
      'numéros de page style bates',
      'numéroter pages pdf',
      'ajouter numéros de page pdf gratuit',
      'numéros de page de pied de page pdf',
      'page x sur n pdf',
      'paginer pdf en ligne',
    ],
    seo: {
      title: 'Ajouter des Numéros de Page au PDF – Gratuit | UtilityFlow',
      description:
        'Ajoutez des numéros de page aux PDF avec des libellés vectoriels, le saut de la page de garde et un numéro de départ — sans envoi ni inscription, gratuit.',
      primaryKeyword: 'ajouter numéros de page à pdf',
      secondaryKeywords: [
        'outil de numéros de page pdf',
        'numéroter pages pdf dans le navigateur',
        'sauter page de garde numérotation pdf',
        'paginer pdf en ligne',
      ],
      longTailKeywords: [
        'ajouter numéros de pied de page page 1 sur n au pdf fusionné',
        'commencer numérotation pdf à la page 2 sauter page de titre',
        'outil de pagination pdf vectoriel côté client',
        'ajouter numéros de page à pdf gratuit sans envoi',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Numérotez proprement les paquets fusionnés, les pièces juridiques ou les soumissions académiques avec une typographie vectorielle nette — en choisissant `Page 1 sur N`, `1 / N` ou des chiffres seuls, l’alignement bas/haut, des numéros de départ personnalisés et le saut facultatif de la page de garde.',
    instructions: [
      {
        title: 'Chargez votre document PDF',
        description:
          'Choisissez le fichier PDF non numéroté ou fusionné que vous souhaitez paginer.',
      },
      {
        title: 'Choisissez le format de numéro',
        description:
          'Choisissez « Page 1 sur N » pour les paquets formels, « 1 / N » pour un aspect compact, ou des chiffres seuls pour un pied de page minimal.',
      },
      {
        title: 'Définissez la position et la taille',
        description:
          'Sélectionnez Bas centre, Bas droite, Bas gauche ou Haut droite, et ajustez la taille de police pour que les numéros se placent proprement dans la marge.',
      },
      {
        title: 'Définissez le numéro de départ et le saut de garde',
        description:
          'Modifiez le numéro de départ pour continuer un ensemble en plusieurs volumes, et activez Sauter la page de garde quand la page de titre doit rester propre.',
      },
      {
        title: 'Appliquez et téléchargez',
        description:
          'Cliquez sur Ajouter les numéros de page et télécharger pour exporter le PDF paginé localement.',
      },
      {
        title: 'Astuce : vérifiez les pages aux pieds de page serrés',
        description:
          'Ouvrez le fichier téléchargé et regardez les pages qui ont déjà du texte de pied de page ; si un numéro est trop proche, relancez-le avec une taille de police plus petite.',
      },
    ],
    examples: [
      {
        title: 'Numéroter un paquet fusionné en commençant après une page de garde',
        input: 'PDF de 5 pages · Format : Page 1 sur N · Sauter la page de garde : coché',
        output: 'Page 1 intacte ; pages 2 à 5 tamponnées « Page 1 sur 4 » à « Page 4 sur 4 »',
        explanation:
          'Idéal après avoir combiné des pages de garde et des annexes avec Fusionner des PDF.',
      },
      {
        title: 'Continuer la numérotation d’un volume 2',
        input: 'PDF de 8 pages · Format : 1 / N · Numéro de départ : 15',
        output: 'Pages numérotées de 15 à 22',
        explanation:
          'Le numéro de départ personnalisé permet de continuer un ensemble en plusieurs volumes.',
      },
    ],
    benefits: [
      'Corrige la pagination cassée juste après la fusion de rapports PDF distincts',
      'Prend en charge le saut de la page 1 pour que les couvertures de titre restent propres',
      'Le numéro de départ personnalisable prend en charge les ensembles de documents en plusieurs volumes',
      'Mesure la largeur exacte du texte par taille de page pour un centrage et un alignement à droite nets',
    ],
    useCases: [
      'Paginer les propositions clients et les appels d’offres combinés après Fusionner des PDF',
      'Numéroter les dépôts judiciaires, les annexes ou les chapitres de thèse',
      'Continuer la numérotation séquentielle à partir de la page 15 dans un volume Partie 2',
      'Ajouter des numéros discrets en bas à droite aux guides d’étude imprimés',
    ],
    faqs: [
      {
        question: 'Cela effacera-t-il le texte existant près de la marge inférieure ?',
        answer:
          'L’outil dessine des chiffres nets avec un décalage de marge de 28 pt sans couvrir les arrière-plans existants : inspectez donc les pages qui ont déjà des pieds de page serrés.',
      },
      {
        question: 'Comment « Sauter la page de garde » affecte-t-il le total dans « Page X sur N » ?',
        answer:
          'Quand cette option est activée, la page 1 ne reçoit aucun libellé et les pages restantes comptent proprement de 1 jusqu’à (nombre total de pages − 1) pour que les totaux restent cohérents.',
      },
      {
        question: 'Puis-je commencer la numérotation à la page 10 au lieu de 1 ?',
        answer:
          'Oui. Modifiez le numéro de départ sur 10 pour numéroter les volumes séquentiels à partir de 10.',
      },
      {
        question: 'L’outil Ajouter des numéros de page au PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand j’ajoute des numéros de page ?',
        answer:
          'Non. Le fichier est traité localement dans votre navigateur et n’est jamais envoyé : vos documents restent donc privés.',
      },
      {
        question: 'Quels formats de numéros de page puis-je choisir ?',
        answer:
          'Vous pouvez choisir « Page 1 sur N », le style compact « 1 / N » ou des chiffres seuls sans aucun libellé.',
      },
      {
        question: 'Où sur la page les numéros peuvent-ils apparaître ?',
        answer:
          'Choisissez Bas centre, Bas droite, Bas gauche ou Haut droite, selon l’endroit où vos marges ont de l’espace libre.',
      },
      {
        question: 'Puis-je sauter la numérotation de la page de garde ?',
        answer:
          'Oui. Activez Sauter la page de garde et la page 1 reste propre tandis que la numérotation commence à la page 2.',
      },
      {
        question: 'L’outil renumérote-t-il un PDF qui a déjà des numéros de page ?',
        answer:
          'Non. Il tamponne de nouveaux numéros à côté des existants : supprimez donc d’abord les anciens numéros si vous ne voulez qu’un seul ensemble.',
      },
      {
        question: 'Puis-je changer la taille de police des numéros de page ?',
        answer:
          'Oui. Ajustez le réglage de taille de police pour que les numéros soient lisibles sans encombrer votre pied de page ou votre en-tête.',
      },
      {
        question: 'La numérotation des pages fonctionne-t-elle sur les pages en paysage ?',
        answer:
          'Oui. L’outil mesure la largeur exacte du texte par taille de page : les numéros restent donc centrés ou alignés sur les pages portrait et paysage.',
      },
      {
        question: 'Puis-je numéroter uniquement certaines pages d’un PDF ?',
        answer:
          'Non. La numérotation s’applique à chaque page sauf une page de garde éventuellement sautée ; la numérotation d’une plage personnalisée n’est pas prise en charge.',
      },
      {
        question: 'Que se passe-t-il si mon PDF a déjà des numéros de page ?',
        answer:
          'Les nouveaux numéros sont tamponnés en plus des anciens, ce qui peut sembler doublé : vérifiez donc le résultat et nettoyez d’abord l’original si nécessaire.',
      },
      {
        question: 'Puis-je utiliser des chiffres romains pour les numéros de page ?',
        answer:
          'Non. L’outil numérote les pages uniquement avec des chiffres arabes standard.',
      },
      {
        question: 'Puis-je ajouter des numéros de page à un PDF numérisé ?',
        answer:
          'Oui. Les numéros sont dessinés sur chaque page comme du texte vectoriel, que la page contienne du texte ou une image numérisée.',
      },
      {
        question: 'Puis-je mettre les numéros de page dans l’en-tête au lieu du pied de page ?',
        answer:
          'Oui, choisissez la position Haut droite pour la numérotation d’en-tête ; le placement en haut au centre n’est pas proposé.',
      },
      {
        question: 'Les numéros de page tamponnés seront-ils du texte sélectionnable ?',
        answer:
          'Oui. Les numéros sont dessinés comme du texte vectoriel net : les lecteurs peuvent donc les sélectionner et les copier comme du texte PDF ordinaire.',
      },
      {
        question: 'Puis-je numéroter un PDF protégé par mot de passe ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'Puis-je ajouter un préfixe comme « Section 2 – Page 3 » ?',
        answer:
          'Non. L’outil n’offre que les trois formats de numéros : les préfixes personnalisés ou les libellés de section ne peuvent donc pas être ajoutés.',
      },
      {
        question: 'L’ajout de numéros de page modifie-t-il le contenu de mon PDF ?',
        answer:
          'Non. Seuls les libellés de numéros sont ajoutés ; votre texte, vos images et votre mise en page existants restent exactement tels qu’ils étaient.',
      },
    ],
  },
  'pdf-metadata-editor': {
    slug: 'editeur-metadonnees-pdf',
    name: 'Inspecteur et Éditeur de Métadonnées PDF',
    shortDescription:
      'Consultez, mettez à jour ou supprimez les balises Titre, Auteur, Sujet, Mots-clés, Créateur et Producteur du PDF, en privé dans la mémoire du navigateur.',
    keywords: [
      'éditeur de métadonnées pdf',
      'visionneuse de métadonnées pdf',
      'supprimer auteur de pdf',
      'supprimer métadonnées pdf',
      'modifier métadonnées pdf',
      'changer titre pdf',
      'éditeur de propriétés pdf',
      'suppresseur d’auteur pdf',
      'voir métadonnées pdf',
    ],
    seo: {
      title: 'Éditeur de Métadonnées PDF – Voir et Modifier | UtilityFlow',
      description:
        'Consultez, mettez à jour ou supprimez les balises Titre, Auteur, Sujet, Mots-clés, Créateur et Producteur d’un PDF, en privé dans votre navigateur — gratuit.',
      primaryKeyword: 'éditeur de métadonnées pdf',
      secondaryKeywords: [
        'visionneuse de métadonnées pdf',
        'supprimer métadonnées d’auteur pdf',
        'changer titre de document pdf',
        'modifier métadonnées pdf en ligne',
      ],
      longTailKeywords: [
        'inspecter et supprimer métadonnées d’auteur cachées de pdf en ligne',
        'changer titre pdf affiché dans l’onglet du navigateur gratuit',
        'éditeur privé de propriétés pdf côté client',
        'supprimer métadonnées d’auteur de pdf avant partage',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Révélez les propriétés cachées stockées dans les en-têtes PDF — y compris le titre du document, l’auteur, le sujet, les mots-clés, le logiciel créateur et le producteur — pour définir des titres d’onglet de navigateur propres ou supprimer les métadonnées personnelles d’identification avant une publication publique.',
    instructions: [
      {
        title: 'Chargez un fichier PDF',
        description:
          'Sélectionnez n’importe quel PDF non chiffré ; les champs de métadonnées existants et les dimensions de page se remplissent automatiquement.',
      },
      {
        title: 'Consultez les métadonnées actuelles',
        description:
          'Lisez les champs Titre, Auteur, Sujet, Mots-clés, Créateur et Producteur, ainsi que le nombre de pages et les dimensions exactes des pages, pour voir ce qui est stocké.',
      },
      {
        title: 'Modifiez ou nettoyez les champs',
        description:
          'Mettez à jour le titre, l’auteur, le sujet et les mots-clés pour plus de clarté, ou cliquez sur Supprimer tous les champs de métadonnées pour la confidentialité.',
      },
      {
        title: 'Supprimez toutes les métadonnées pour la confidentialité',
        description:
          'Utilisez Supprimer tous les champs de métadonnées avant de partager un fichier publiquement pour effacer les noms d’auteurs et les versions de logiciels en un clic.',
      },
      {
        title: 'Enregistrez et téléchargez',
        description:
          'Cliquez sur Enregistrer les métadonnées et télécharger le PDF pour exporter une copie fraîchement balisée.',
      },
      {
        title: 'Astuce : vérifiez le fichier enregistré',
        description:
          'Rouvrez le PDF téléchargé dans cet outil pour confirmer le nouveau titre et les champs d’auteur effacés, car les modifications ne s’appliquent qu’à la copie enregistrée.',
      },
    ],
    examples: [
      {
        title: 'Anonymiser un PDF exporté depuis Word ou Illustrator',
        input: 'Auteur : « John Doe » · Créateur : « Microsoft® Word 2021 »',
        output: 'Cliquez sur Supprimer tous les champs de métadonnées → Enregistrez un PDF propre avec Auteur/Créateur vides',
        explanation:
          'Supprime les noms d’employés et les versions de logiciels avant l’hébergement web public.',
      },
      {
        title: 'Corriger le titre affiché dans l’onglet du navigateur',
        input: 'Titre : « Sans titre-2 » · Fichier : rapport-annuel.pdf',
        output: 'Titre : « Rapport annuel 2025 » → l’onglet du navigateur affiche le bon titre',
        explanation:
          'Les navigateurs affichent la propriété Titre du document PDF plutôt que le nom du fichier.',
      },
    ],
    benefits: [
      'Expose les noms d’auteurs cachés et les chaînes de logiciels que les navigateurs montrent dans les onglets et les propriétés',
      'La suppression en un clic de tous les champs de métadonnées efface les 6 balises standard du dictionnaire Info',
      'Met à jour proprement le titre, le sujet et les mots-clés séparés par des virgules, pertinents pour le référencement',
      'Affiche les dimensions exactes des points PDF (`largeur × hauteur pt`) avec le nombre de pages',
    ],
    useCases: [
      'Nettoyer les noms d’employés et les versions d’outils locaux avant de publier des PDF publics',
      'Corriger les noms de fichiers maladroits comme « Sans titre-2 » affichés dans les onglets PDF Chrome/Safari via le titre',
      'Ajouter des balises de sujet et de mots-clés consultables aux livres blancs téléchargeables',
      'Auditer localement les soumissions PDF de fournisseurs ou de candidats',
    ],
    faqs: [
      {
        question: 'Pourquoi l’onglet de mon navigateur affiche-t-il le mauvais titre quand j’ouvre un PDF ?',
        answer:
          'Les navigateurs affichent la propriété interne Titre du document PDF plutôt que le nom de fichier .pdf si une balise Titre est intégrée. Modifier le titre ici corrige la façon dont les navigateurs étiquettent l’onglet.',
      },
      {
        question: 'L’effacement des champs de métadonnées affecte-t-il le contenu visible des pages ?',
        answer:
          'Non. La suppression ou la mise à jour du titre, de l’auteur, du sujet, des mots-clés, du créateur et du producteur ne met à jour que le dictionnaire Info du PDF sans modifier les pages visibles.',
      },
      {
        question: 'Les modifications sont-elles chiffrées ou journalisées quelque part ?',
        answer:
          'Jamais. La lecture et l’écriture des métadonnées s’exécutent uniquement dans la mémoire du client via pdf-lib.',
      },
      {
        question: 'L’éditeur de métadonnées PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Mon PDF est-il envoyé à un serveur quand je modifie ses métadonnées ?',
        answer:
          'Non. La lecture et l’écriture des métadonnées se font uniquement dans votre navigateur : vos fichiers ne sont donc jamais envoyés ni journalisés.',
      },
      {
        question: 'Quels champs de métadonnées puis-je modifier dans un PDF ?',
        answer:
          'Vous pouvez consulter et modifier le titre, l’auteur, le sujet, les mots-clés, le créateur et le producteur — les six balises standard du dictionnaire Info du PDF.',
      },
      {
        question: 'Puis-je supprimer uniquement le nom de l’auteur d’un PDF ?',
        answer:
          'Oui. Effacez simplement le champ Auteur et enregistrez, en laissant le titre, le sujet et les autres balises intacts.',
      },
      {
        question: 'Que fait « Supprimer tous les champs de métadonnées » ?',
        answer:
          'Il efface les six balises standard du dictionnaire Info à la fois, supprimant les noms d’auteurs, les chaînes de logiciels et les titres avant que vous partagiez le fichier.',
      },
      {
        question: 'La modification du titre peut-elle changer l’apparence du PDF dans les résultats de recherche ?',
        answer:
          'Modifier le titre change le libellé que les navigateurs affichent dans l’onglet PDF, mais cela ne garantit aucun classement ni extrait de recherche particulier.',
      },
      {
        question: 'La suppression des métadonnées supprime-t-elle les signets ou les liens ?',
        answer:
          'Non. La suppression ne met à jour que le dictionnaire Info : les signets, les liens et le contenu visible des pages restent inchangés.',
      },
      {
        question: 'Puis-je consulter les métadonnées PDF sans rien modifier ?',
        answer:
          'Oui. Les champs se remplissent dès que vous chargez un fichier, et rien n’est modifié sauf si vous cliquez sur Enregistrer les métadonnées et télécharger le PDF.',
      },
      {
        question: 'Que sont les champs Créateur et Producteur dans un PDF ?',
        answer:
          'Créateur nomme l’application qui a créé le document, comme Microsoft Word, tandis que Producteur nomme le logiciel qui l’a converti en PDF.',
      },
      {
        question: 'Puis-je ajouter des mots-clés à un PDF pour une meilleure recherche ?',
        answer:
          'Oui. Saisissez des mots-clés séparés par des virgules dans l’éditeur de métadonnées, et ils sont stockés dans le PDF pour les outils de recherche qui les lisent.',
      },
      {
        question: 'La taille du fichier changera-t-elle après la modification des métadonnées PDF ?',
        answer:
          'Seulement d’une infime quantité. Les métadonnées sont un petit bloc de texte : leur modification ou leur suppression affecte donc à peine la taille globale du fichier.',
      },
      {
        question: 'Puis-je modifier les métadonnées d’un PDF numérisé ?',
        answer:
          'Oui. Les métadonnées vivent dans l’en-tête du document et sont indépendantes du contenu des pages : les PDF numérisés fonctionnent donc comme ceux basés sur du texte.',
      },
      {
        question: 'Puis-je modifier les métadonnées XMP avec cet outil ?',
        answer:
          'Non. Cet outil ne modifie que les six balises standard du dictionnaire Info ; les paquets de métadonnées XMP étendus ne sont pas modifiés.',
      },
      {
        question: 'Puis-je modifier les métadonnées d’un PDF chiffré ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'L’éditeur de métadonnées PDF affiche-t-il la taille de page ?',
        answer:
          'Oui. Il affiche les dimensions exactes des pages en points (largeur × hauteur) avec le nombre de pages pour chaque fichier chargé.',
      },
      {
        question: 'La suppression des métadonnées supprimera-t-elle toutes les informations personnelles d’un PDF ?',
        answer:
          'Elle supprime les six balises Info, mais les détails personnels tapés visiblement sur les pages elles-mêmes, comme un nom dans le corps du texte, restent.',
      },
      {
        question: 'Dois-je télécharger le fichier pour appliquer les modifications de métadonnées ?',
        answer:
          'Oui. Cliquer sur Enregistrer les métadonnées et télécharger le PDF crée un nouveau fichier avec vos modifications, tandis que votre fichier d’origine reste intact.',
      },
    ],
  },
  'pdf-text-extractor': {
    slug: 'extracteur-texte-pdf',
    name: 'Extracteur de Texte PDF',
    shortDescription:
      'Extrayez le texte sélectionnable page par page des documents PDF en texte brut copiable ou en téléchargements .txt via PDF.js.',
    keywords: [
      'extracteur de texte pdf',
      'extraire texte de pdf',
      'convertisseur pdf en txt',
      'copier texte de pdf',
      'extraire texte de pdf en ligne',
      'pdf en texte gratuit',
      'pdf en txt',
      'obtenir texte de pdf',
      'outil de copie de texte pdf',
    ],
    seo: {
      title: 'Extracteur de Texte PDF – Copier en .TXT | UtilityFlow',
      description:
        'Extrayez le texte intégré d’un PDF page par page dans votre navigateur, avec des marqueurs de page, des nombres de mots, la copie et le téléchargement .txt.',
      primaryKeyword: 'extracteur de texte pdf',
      secondaryKeywords: [
        'pdf en txt en ligne gratuit',
        'extraire texte pdf côté client',
        'copier texte de document pdf',
        'pdf en texte gratuit',
      ],
      longTailKeywords: [
        'extraire texte de pdf confidentiel localement sans envoi',
        'convertir pdf basé sur du texte en fichier txt brut avec marqueurs',
        'détecter pdf numérisé sans couche de texte',
        'extraire texte de pdf en txt gratuit dans le navigateur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lisez et extrayez le texte Unicode intégré directement des PDF basés sur du texte, page par page, avec PDF.js, avec des en-têtes facultatifs `--- Page N ---`, des statistiques de mots et d’octets, une copie en un clic et l’exportation `.txt` — plus une détection transparente quand un PDF est numérisé ou composé uniquement d’images.',
    instructions: [
      {
        title: 'Sélectionnez un document PDF',
        description:
          'Choisissez n’importe quel fichier PDF non chiffré ; PDF.js analyse localement le flux de texte intégré de chaque page.',
      },
      {
        title: 'Consultez le texte extrait',
        description:
          'Lisez le résultat et vérifiez le nombre de pages, le nombre de mots et la taille en octets UTF-8 indiqués pour confirmer que l’extraction semble complète.',
      },
      {
        title: 'Activez les marqueurs de page',
        description:
          'Gardez les en-têtes de page activés pour les citations structurées ou décochez-les pour une prose continue.',
      },
      {
        title: 'Vérifiez les pages numérisées',
        description:
          'Si l’outil signale 0 caractère, le PDF est probablement un fichier numérisé composé uniquement d’images, sans couche de texte à extraire.',
      },
      {
        title: 'Copiez ou exportez en .txt',
        description:
          'Copiez le texte extrait dans votre éditeur ou téléchargez une transcription .txt propre en UTF-8.',
      },
      {
        title: 'Astuce : corrigez le texte brouillé ou manquant',
        description:
          'Si les caractères semblent incorrects, le PDF source utilise peut-être une police personnalisée sans mappage Unicode approprié ; essayez le document d’origine ou une copie fraîchement exportée.',
      },
    ],
    examples: [
      {
        title: 'Extraire une copie lisible d’un livre blanc de plusieurs pages',
        input: 'livre-blanc.pdf (8 pages, couche de texte intégrée)',
        output: 'Texte brut structuré avec des séparateurs --- Page 1 ---, nombre de mots et téléchargement .txt',
        explanation:
          'Extrait proprement les éléments de texte PDF sous-jacents sans les problèmes de surlignage et de copie manuels.',
      },
      {
        title: 'Vérifier si un PDF archivé contient du texte consultable',
        input: 'archive.pdf (12 pages)',
        output: 'Texte extrait avec 0 caractère sur certaines pages — pages numérisées détectées',
        explanation:
          'L’outil signale honnêtement les pages sans couche de texte au lieu de renvoyer un résultat vide et trompeur.',
      },
    ],
    benefits: [
      'Avertit en toute transparence si un PDF est numérisé ou composé uniquement d’images (couche de texte 0, OCR non exécuté hors ligne)',
      'Préserve des sauts de page propres via des marqueurs --- Page N --- activables',
      'Indique le nombre de pages extraites, le nombre de mots et la taille en octets UTF-8',
      'Première étape idéale avant d’envoyer le texte au compteur de mots ou à Rechercher et remplacer',
    ],
    useCases: [
      'Extraire du texte brut propre des livres blancs, programmes ou documentations PDF',
      'Vérifier le nombre de mots des essais PDF formatés avec notre compteur de mots',
      'Vérifier si un PDF archivé contient une couche de texte consultable plutôt que des numérisations plates',
      'Exporter les ordres du jour de réunions PDF en notes Markdown en texte brut',
    ],
    faqs: [
      {
        question: 'Pourquoi un PDF numérisé a-t-il extrait 0 caractère ?',
        answer:
          'Les PDF de scanner enregistrent souvent les pages uniquement comme des images bitmap plates sans couche de texte OCR intégrée. Cet outil de navigateur lit directement les flux de texte PDF existants et indique honnêtement que l’OCR hors ligne n’est pas inclus.',
      },
      {
        question: 'Pourquoi les tableaux complexes à plusieurs colonnes passent-ils parfois à la ligne ?',
        answer:
          'Les fichiers PDF stockent le texte positionné par coordonnées X/Y plutôt que sous forme de tableaux HTML sémantiques : PDF.js émet donc les éléments de texte dans l’ordre du flux avec des indices de fin de ligne.',
      },
      {
        question: 'Mon PDF est-il envoyé pour extraire le texte ?',
        answer:
          'Non. PDF.js analyse et extrait les flux de texte strictement dans l’onglet de votre navigateur.',
      },
      {
        question: 'L’extracteur de texte PDF est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit, sans inscription, et il s’exécute entièrement dans votre navigateur.',
      },
      {
        question: 'Vers quels formats de fichier puis-je exporter le texte extrait ?',
        answer:
          'Vous pouvez copier le texte brut dans votre presse-papiers ou le télécharger comme une transcription .txt propre en UTF-8.',
      },
      {
        question: 'Puis-je extraire le texte d’une seule page d’un PDF ?',
        answer:
          'L’extraction couvre tout le document, mais les marqueurs facultatifs --- Page N --- permettent de trouver et de copier facilement juste la section dont vous avez besoin.',
      },
      {
        question: 'Pourquoi certains textes manquent-ils dans le résultat extrait ?',
        answer:
          'Le texte stocké sous forme d’image, ou dessiné avec une police personnalisée sans carte Unicode, n’a pas de flux de texte lisible que PDF.js puisse extraire.',
      },
      {
        question: 'L’extracteur de texte PDF inclut-il l’OCR pour les pages numérisées ?',
        answer:
          'Non. Il lit uniquement la couche de texte intégrée existante et n’exécute pas d’OCR : les pages numérisées composées uniquement d’images ne renvoient donc aucun texte.',
      },
      {
        question: 'Puis-je extraire le texte d’un PDF dans une autre langue ?',
        answer:
          'Oui. Le texte Unicode intégré est extrait tel quel : les documents non français fonctionnent tant que le PDF stocke une couche de texte appropriée.',
      },
      {
        question: 'L’extraction préserve-t-elle le texte en gras ou les titres ?',
        answer:
          'Non. Le résultat est uniquement du texte brut : le gras, l’italique, les titres et les autres formatages ne sont donc pas repris.',
      },
      {
        question: 'Quelle taille de PDF puis-je extraire ?',
        answer:
          'Il n’y a pas de plafond de taille indiqué, et l’extraction s’exécute localement ; les très gros documents peuvent simplement prendre un peu plus de temps à analyser.',
      },
      {
        question: 'Puis-je copier le texte extrait sans télécharger de fichier ?',
        answer:
          'Oui. Utilisez le bouton de copie en un clic pour coller le texte directement dans votre éditeur, votre application de notes ou votre document.',
      },
      {
        question: 'Que sont les marqueurs « --- Page N --- » dans le résultat ?',
        answer:
          'Ce sont des en-têtes facultatifs qui marquent le début de chaque page, pour que vous puissiez citer les pages avec précision ; désactivez-les pour une prose continue.',
      },
      {
        question: 'L’extracteur de texte PDF affiche-t-il un nombre de mots ?',
        answer:
          'Oui. Il indique le nombre de pages extraites, le nombre de mots et la taille en octets UTF-8 à côté du texte.',
      },
      {
        question: 'Puis-je extraire le texte d’un PDF protégé par mot de passe ?',
        answer:
          'Non. Seuls les PDF non chiffrés peuvent être ouverts par cet outil de navigateur : supprimez donc d’abord le mot de passe.',
      },
      {
        question: 'Les hyperliens seront-ils extraits du PDF ?',
        answer:
          'Le texte de lien visible est extrait quand il existe sous forme de texte, mais les liens eux-mêmes ne sont pas exportés comme des URL cliquables.',
      },
      {
        question: 'Puis-je utiliser le texte extrait dans Word ou Google Docs ?',
        answer:
          'Oui. Collez directement le texte copié, ou ouvrez le fichier .txt téléchargé et copiez son contenu dans n’importe quel traitement de texte.',
      },
      {
        question: 'Pourquoi certains caractères semblent-ils brouillés dans le texte extrait ?',
        answer:
          'Certains PDF intègrent des polices personnalisées sans mappage Unicode approprié : PDF.js ne peut donc pas associer les glyphes aux bons caractères.',
      },
      {
        question: 'L’extraction de texte modifie-t-elle mon PDF d’origine ?',
        answer:
          'Non. L’extraction est en lecture seule ; votre fichier PDF d’origine n’est jamais modifié.',
      },
      {
        question: 'L’extracteur de texte PDF peut-il extraire le texte des formulaires et des annotations ?',
        answer:
          'Il extrait la couche de texte intégrée principale de chaque page ; les valeurs de formulaires remplis et les notes d’annotation peuvent ne pas apparaître si elles sont stockées séparément.',
      },
    ],
  },
};
