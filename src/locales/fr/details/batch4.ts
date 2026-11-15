// Detail content for FR tools — split out of
// src/locales/fr/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'qr-code-generator': {
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
};
