// Detail content for FR tools — split out of
// src/locales/fr/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'age-calculator': {
    instructions: [
      {
        title: 'Saisissez votre date de naissance',
        description:
          'Sélectionnez le mois, le jour et l’année de votre naissance dans le champ Date de naissance.',
      },
      {
        title: 'Choisissez la date de comparaison',
        description:
          'Laissez la date de référence sur aujourd’hui ou choisissez n’importe quelle date passée ou future pour calculer l’âge ce jour-là.',
      },
      {
        title: 'Lancez le calcul d’âge',
        description:
          'Le résultat se met à jour instantanément dans votre navigateur — aucun bouton à presser et aucune donnée envoyée.',
      },
      {
        title: 'Consultez le détail complet',
        description:
          'Lisez vos années, mois et jours exacts, le total en semaines, le total des jours vécus et le compte à rebours jusqu’à votre prochain anniversaire.',
      },
      {
        title: 'Copiez ou partagez votre résultat',
        description:
          'Copiez le détail de l’âge pour le coller dans un formulaire, un message ou un document, là où vous en avez besoin.',
      },
      {
        title: 'Astuce : vérifiez une étape future',
        description:
          'Définissez la date de comparaison sur un anniversaire, un examen ou une date de retraite pour voir exactement quel âge vous aurez ce jour-là.',
      },
    ],
    examples: [
      {
        title: 'Vérification d’âge pour une étape importante',
        input: 'Date de naissance : 1995-06-15 · Date de référence : 2025-11-12',
        output: '30 ans, 4 mois, 28 jours (11 108 jours)',
        explanation:
          'Utilise la durée exacte des mois du calendrier et les années bissextiles entre 1995 et 2025.',
      },
      {
        title: 'Âge exact à un anniversaire rond',
        input: 'Date de naissance : 2000-01-01 · Date de référence : 2025-01-01',
        output: '25 ans exacts (9 132 jours)',
        explanation:
          'Vingt-cinq ans comprennent 7 jours bissextiles (2000, 2004, 2008, 2012, 2016, 2020 et 2024) : 25 × 365 + 7 = 9 132 jours.',
      },
    ],
    benefits: [
      'Gère les mois de 28, 29, 30 et 31 jours sans approximation de mois de 30 jours',
      'Prend en charge avec précision les anniversaires du 29 février pour les comptes à rebours',
      'Affiche simultanément le total en mois, en semaines, en jours et les heures approximatives',
      'Signale les plages invalides lorsque la date de naissance suit la date cible',
    ],
    useCases: [
      'Vérifier l’admissibilité liée à l’âge exact pour l’inscription scolaire, une pension ou des formulaires officiels',
      'Calculer des anniversaires d’étapes en jours ou en semaines au total',
      'Vérifier quel âge aura une personne à une date précise d’un événement à venir',
      'Connaître le nombre de jours restants jusqu’au prochain anniversaire',
    ],
    faqs: [
      {
        question: 'Comment la calculatrice d’âge gère-t-elle les anniversaires des années bissextiles (29 février) ?',
        answer:
          'Pour les années non bissextiles, le compte à rebours du prochain anniversaire s’aligne sur le 28 février de l’année cible, afin que le compteur de jours reste exact.',
      },
      {
        question: 'Pourquoi le nombre total de jours diffère-t-il parfois de années × 365 dans la calculatrice d’âge ?',
        answer:
          'Chaque année bissextile ajoute un 366e jour (le 29 février), et les mois du calendrier varient de 28 à 31 jours. Cet outil compte les différences exactes de jours calendaires en UTC.',
      },
      {
        question: 'Puis-je calculer mon âge à une date future avec la calculatrice d’âge ?',
        answer:
          'Oui. Modifiez la date de référence pour n’importe quelle date future afin de voir votre âge exact projeté ce jour-là.',
      },
      {
        question: 'La calculatrice d’âge est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite, sans inscription, et elle fonctionne entièrement dans votre navigateur : votre date de naissance n’est jamais envoyée.',
      },
      {
        question: 'Que montre la calculatrice d’âge en plus des années ?',
        answer:
          'Elle affiche les années, les mois et les jours, ainsi que le total en mois, en semaines et en jours vécus, et les jours restants jusqu’à votre prochain anniversaire.',
      },
      {
        question: 'Quelle est la précision de la calculatrice d’âge ?',
        answer:
          'Elle utilise la durée exacte des mois du calendrier et les années bissextiles, donc le résultat correspond au vrai calendrier plutôt qu’à une approximation de mois de 30 jours.',
      },
      {
        question: 'La calculatrice d’âge peut-elle indiquer mon âge en jours seulement ?',
        answer:
          'Oui. Le détail comprend le total des jours vécus, utile pour compter les étapes et les anniversaires mesurés en jours.',
      },
      {
        question: 'Puis-je utiliser la calculatrice d’âge pour connaître mon âge en semaines ou en mois ?',
        answer:
          'Oui, les résultats comprennent le total des semaines et le total des mois, en plus du détail en années, mois et jours.',
      },
      {
        question: 'La calculatrice d’âge enregistre-t-elle ma date de naissance ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur, et rien de ce que vous saisissez n’est enregistré ni envoyé à un serveur.',
      },
      {
        question: 'Que se passe-t-il si je saisis une date de naissance postérieure à la date de comparaison ?',
        answer:
          'L’outil affiche un message de validation, car il est impossible de calculer un âge lorsque la date de naissance est postérieure à la date de comparaison.',
      },
      {
        question: 'La calculatrice d’âge peut-elle me dire quel âge j’aurai à la retraite ?',
        answer:
          'Oui. Définissez la date de comparaison sur votre date de retraite prévue et l’outil indiquera votre âge exact ce jour-là.',
      },
      {
        question: 'La calculatrice d’âge compte-t-elle les heures que j’ai vécues ?',
        answer:
          'Elle affiche un nombre approximatif d’heures basé sur le total des jours vécus, en plus du résultat exact en années, mois et jours.',
      },
      {
        question: 'Puis-je vérifier l’âge de quelqu’un d’autre avec la calculatrice d’âge ?',
        answer:
          'Oui, vous pouvez saisir n’importe quelle date de naissance pour calculer l’âge de cette personne, par exemple pour vérifier l’admissibilité à l’école ou à une pension.',
      },
      {
        question: 'Pourquoi la calculatrice d’âge demande-t-elle une date de comparaison ?',
        answer:
          'La date de comparaison est le jour auquel vous souhaitez mesurer votre âge : aujourd’hui par défaut, ou n’importe quelle date passée ou future pour vos prévisions et vos dossiers.',
      },
      {
        question: 'La calculatrice d’âge fonctionne-t-elle pour des dates de naissance très anciennes ?',
        answer:
          'Oui, elle gère des dates de naissance sur plusieurs décennies, en comptant correctement les années bissextiles sur toute la période.',
      },
      {
        question: 'Puis-je utiliser la calculatrice d’âge pour des formulaires officiels ?',
        answer:
          'Oui, le résultat exact en années, mois et jours convient pour vérifier l’admissibilité liée à l’âge, même si les documents officiels restent la preuve définitive.',
      },
      {
        question: 'Comment la calculatrice d’âge compte-t-elle mon prochain anniversaire ?',
        answer:
          'Elle compare la date du jour à celle de votre prochain anniversaire et affiche le nombre exact de jours restants.',
      },
      {
        question: 'La calculatrice d’âge a-t-elle besoin d’une connexion Internet ?',
        answer:
          'Elle a besoin que la page soit chargée, mais le calcul lui-même s’exécute localement dans votre navigateur, sans envoi de données.',
      },
      {
        question: 'La calculatrice d’âge peut-elle indiquer mon âge à une date passée ?',
        answer:
          'Oui. Choisissez n’importe quelle date passée comme date de comparaison pour voir exactement quel âge vous aviez ce jour-là.',
      },
      {
        question: 'Ma date de naissance est-elle privée quand j’utilise la calculatrice d’âge ?',
        answer:
          'Oui. L’outil fonctionne localement dans votre navigateur, donc votre date de naissance ne quitte jamais votre appareil.',
      },
    ],
  },
  'percentage-calculator': {
    instructions: [
      {
        title: 'Choisissez le bloc de calcul de pourcentage',
        description:
          'Chaque carte résout une formule de pourcentage distincte de façon indépendante, sans effacer vos autres nombres.',
      },
      {
        title: 'Saisissez vos valeurs numériques',
        description:
          'Tapez des entiers ou des décimales dans les champs en surbrillance ; les résultats se recalculent à chaque frappe.',
      },
      {
        title: 'Lancez le calcul instantanément',
        description:
          'Il n’y a aucun bouton d’envoi : le résultat en pourcentage apparaît immédiatement pendant que vous tapez, directement dans votre navigateur.',
      },
      {
        title: 'Examinez les résultats des formules',
        description:
          'Consultez à la fois la variation en pourcentage signée et la différence numérique absolue pour vérifier une croissance ou une baisse.',
      },
      {
        title: 'Copiez votre résultat en pourcentage',
        description:
          'Copiez la réponse pour la coller dans un rapport, une facture, un tableur ou un message.',
      },
      {
        title: 'Astuce : vérifiez une valeur de départ nulle ou négative',
        description:
          'Si le résultat affiche un message de validation, vérifiez la présence d’un dénominateur nul ou d’une valeur de départ négative, que l’outil signale.',
      },
    ],
    examples: [
      {
        title: 'Mesurer le pourcentage de croissance des revenus',
        input: 'De 120 à 150',
        output: '+25 % (+30 de variation absolue)',
        explanation: 'Calculé comme ((150 - 120) / |120|) × 100 = +25 %.',
      },
      {
        title: 'Trouver 20 % d’un nombre',
        input: '20 % de 250',
        output: '50',
        explanation: 'Calculé comme 250 × (20 / 100) = 50.',
      },
    ],
    benefits: [
      'Affiche les trois formules de pourcentage côte à côte sur un seul écran',
      'Gère proprement les décimales, les valeurs de départ négatives et les dénominateurs nuls',
      'Affiche la variation absolue en plus de la variation en pourcentage',
      'Ne nécessite aucun rechargement de page ni clic d’envoi',
    ],
    useCases: [
      'Vérifier la croissance mensuelle du trafic, des ventes ou du taux de conversion',
      'Calculer les notes d’examen et les pourcentages de réussite',
      'Appliquer rapidement des majorations ou des déductions en pourcentage aux factures',
      'Comparer les prix ou les budgets avant et après',
    ],
    faqs: [
      {
        question: 'Comment la variation en pourcentage est-elle calculée quand les valeurs baissent dans la calculatrice de pourcentage ?',
        answer:
          'La variation en pourcentage utilise ((Nouvelle valeur − Ancienne valeur) / |Ancienne valeur|) × 100. Quand la nouvelle valeur est inférieure à l’ancienne, l’outil indique clairement une baisse en pourcentage négative.',
      },
      {
        question: 'Que se passe-t-il si le dénominateur ou la valeur de départ est 0 dans la calculatrice de pourcentage ?',
        answer:
          'La division par zéro est mathématiquement indéfinie, donc la calculatrice affiche un message de validation clair au lieu de l’infini ou de NaN.',
      },
      {
        question: 'Puis-je saisir des pourcentages décimaux comme 7,25 % dans la calculatrice de pourcentage ?',
        answer:
          'Oui. Toutes les entrées acceptent des valeurs décimales et conservent toute la précision des nombres à virgule flottante avant l’arrondi d’affichage.',
      },
      {
        question: 'La calculatrice de pourcentage est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite, sans inscription, et elle fonctionne entièrement dans votre navigateur : vos nombres ne sont jamais envoyés.',
      },
      {
        question: 'Comment trouver le pourcentage qu’un nombre représente d’un autre ?',
        answer:
          'Utilisez la carte « quel pourcentage » : saisissez la partie et le tout, et l’outil divise la partie par le tout puis multiplie par 100.',
      },
      {
        question: 'Comment calculer X % d’un nombre avec la calculatrice de pourcentage ?',
        answer:
          'Saisissez le pourcentage et le nombre dans la carte « X % de Y », et l’outil multiplie le nombre par le pourcentage divisé par 100.',
      },
      {
        question: 'Quelle est la différence entre la variation en pourcentage et les points de pourcentage ?',
        answer:
          'La variation en pourcentage est relative à la valeur de départ, tandis que les points de pourcentage sont la simple différence arithmétique entre deux pourcentages.',
      },
      {
        question: 'La calculatrice de pourcentage gère-t-elle les nombres négatifs ?',
        answer:
          'Oui, elle gère les valeurs de départ négatives, et le résultat signé indique s’il s’agit d’une augmentation ou d’une baisse.',
      },
      {
        question: 'Comment calculer une augmentation en pourcentage entre deux nombres ?',
        answer:
          'Saisissez l’ancienne valeur et la nouvelle valeur dans la carte de variation ; l’outil affiche l’augmentation en pourcentage ainsi que la différence absolue.',
      },
      {
        question: 'Comment calculer une baisse en pourcentage ?',
        answer:
          'Saisissez la valeur de départ la plus élevée et la nouvelle valeur la plus basse, et l’outil indique la baisse sous forme de pourcentage négatif.',
      },
      {
        question: 'Puis-je utiliser la calculatrice de pourcentage pour des notes d’examen ?',
        answer:
          'Oui. Divisez les points obtenus par le total des points et l’outil affiche la note en pourcentage.',
      },
      {
        question: 'La calculatrice de pourcentage affiche-t-elle aussi la différence absolue ?',
        answer:
          'Oui, en plus de la variation en pourcentage, elle affiche la différence numérique absolue entre les deux valeurs.',
      },
      {
        question: 'Puis-je calculer un pourcentage de remise avec cet outil ?',
        answer:
          'Oui. Saisissez le prix d’origine et le prix soldé dans la carte de variation pour voir la remise sous forme de baisse en pourcentage.',
      },
      {
        question: 'La calculatrice de pourcentage enregistre-t-elle mes nombres ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur, et rien de ce que vous saisissez n’est enregistré ni envoyé à un serveur.',
      },
      {
        question: 'Quelle est la précision des résultats de la calculatrice de pourcentage ?',
        answer:
          'Les résultats utilisent toute la précision des nombres à virgule flottante avant l’arrondi d’affichage, donc les petites différences décimales sont gérées correctement.',
      },
      {
        question: 'Puis-je utiliser la calculatrice de pourcentage pour la croissance des ventes ?',
        answer:
          'Oui, elle est idéale pour la croissance mensuelle des ventes, du trafic ou du taux de conversion, en affichant à la fois le pourcentage et la variation absolue.',
      },
      {
        question: 'Que signifie une variation en pourcentage négative ?',
        answer:
          'Un résultat négatif signifie que la nouvelle valeur est inférieure à l’ancienne valeur : il s’agit d’une baisse plutôt que d’une augmentation.',
      },
      {
        question: 'Puis-je calculer des pourcentages avec de très grands nombres ?',
        answer:
          'Oui, l’outil accepte les grands entiers et les décimales, et il recalcule instantanément pendant que vous tapez.',
      },
      {
        question: 'Dois-je appuyer sur un bouton pour calculer un pourcentage ?',
        answer:
          'Non. Les résultats se mettent à jour automatiquement à chaque frappe, sans rechargement de page ni clic d’envoi.',
      },
      {
        question: 'La calculatrice de pourcentage peut-elle retrouver la valeur d’origine à partir d’un pourcentage ?',
        answer:
          'Les trois cartes couvrent X % de Y, le pourcentage que X représente de Y et la variation en pourcentage ; pour un calcul inverse, divisez le montant connu par le pourcentage exprimé en décimal.',
      },
    ],
  },
  'loan-emi-calculator': {
    instructions: [
      {
        title: 'Saisissez les détails de votre prêt',
        description:
          'Indiquez le capital emprunté, le taux d’intérêt annuel (TAEG en %) et la durée du prêt en mois ou en années.',
      },
      {
        title: 'Choisissez l’unité de durée',
        description:
          'Basculez la durée entre années et mois pour correspondre à la façon dont votre prêteur exprime la durée du prêt.',
      },
      {
        title: 'Lancez le calcul de l’EMI',
        description:
          'L’EMI, le total des intérêts et le remboursement total se mettent à jour instantanément dans votre navigateur — aucune donnée n’est envoyée.',
      },
      {
        title: 'Consultez le résumé de l’EMI',
        description:
          'Examinez la mensualité EMI, le total des intérêts à payer, le remboursement total et le pourcentage de part des intérêts.',
      },
      {
        title: 'Consultez le tableau d’amortissement',
        description:
          'Basculez entre le résumé annuel et le tableau mensuel pour voir comment le remboursement du capital s’accélère avec le temps.',
      },
      {
        title: 'Astuce : comparez une durée plus courte',
        description:
          'Essayez une durée plus courte pour voir combien d’intérêts totaux vous pourriez économiser, puis copiez les chiffres pour comparer les offres de prêt côte à côte.',
      },
    ],
    examples: [
      {
        title: 'Prêt auto ou personnel sur 5 ans',
        input: 'Capital : 25 000 $ · Taux : 7,5 % · Durée : 60 mois',
        output: 'Mensualité EMI : 500,95 $ · Intérêts totaux : 5 056,92 $ · Total payé : 30 056,92 $',
        explanation:
          'Utilise la formule EMI standard à capital restant dû : P·r·(1+r)^n / ((1+r)^n - 1).',
      },
      {
        title: 'Prêt à 0 % d’intérêt',
        input: 'Capital : 12 000 $ · Taux : 0 % · Durée : 24 mois',
        output: 'Mensualité EMI : 500 $ · Intérêts totaux : 0 $ · Total payé : 12 000 $',
        explanation:
          'Avec un TAEG de 0 %, la mensualité est simplement le capital divisé par le nombre de mois.',
      },
    ],
    benefits: [
      'Utilise les mathématiques EMI exactes à capital restant dû avec intérêts composés',
      'Gère avec précision les prêts promotionnels à 0 % sans erreur de division',
      'Comprend des vues de tableau d’amortissement annuel et mensuel interchangeables',
      'Permet de basculer l’unité de durée entre années et mois en toute simplicité',
    ],
    useCases: [
      'Comparer les offres de prêts auto, étudiants ou personnels de plusieurs prêteurs',
      'Évaluer comment raccourcir la durée d’un prêt réduit les intérêts sur toute sa durée',
      'Prévoir le solde restant du prêt après 12, 24 ou 36 mensualités',
      'Comparer les plans à 0 % avec un financement à faible TAEG',
    ],
    faqs: [
      {
        question: 'Quelle formule utilise la calculatrice de prêt et d’EMI ?',
        answer:
          'Elle applique la formule standard d’amortissement à capital restant dû : EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), où r est le taux annuel ÷ 12 ÷ 100 et n le nombre total de mensualités.',
      },
      {
        question: 'Pourquoi les intérêts des premiers mois sont-ils plus élevés que ceux des derniers mois dans un prêt EMI ?',
        answer:
          'Les intérêts de chaque mois sont calculés sur le solde restant du capital. Comme le capital diminue à chaque mensualité, une part de plus en plus grande de chaque versement fixe va au capital.',
      },
      {
        question: 'La calculatrice de prêt et d’EMI inclut-elle les frais de dossier ou l’assurance du prêteur ?',
        answer:
          'Non. Le résultat reflète uniquement le remboursement du capital et des intérêts. Ajoutez les frais financés dans le champ Capital du prêt pour modéliser leur coût de remboursement.',
      },
      {
        question: 'La calculatrice de prêt et d’EMI est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite, sans inscription, et elle fonctionne entièrement dans votre navigateur : les détails de votre prêt ne sont jamais envoyés.',
      },
      {
        question: 'Qu’est-ce que l’EMI dans un prêt ?',
        answer:
          'EMI signifie « Equated Monthly Installment » (mensualité constante) : le montant fixe que vous payez chaque mois, couvrant à la fois les intérêts et une partie du capital, jusqu’au remboursement complet du prêt.',
      },
      {
        question: 'Comment la calculatrice de prêt et d’EMI gère-t-elle un prêt à 0 % d’intérêt ?',
        answer:
          'Elle gère avec précision les prêts promotionnels à 0 % sans erreur de division, en affichant une mensualité égale au capital divisé par le nombre de mois.',
      },
      {
        question: 'Puis-je comparer deux offres de prêt avec la calculatrice de prêt et d’EMI ?',
        answer:
          'Oui. Passez chaque offre dans la calculatrice et comparez la mensualité EMI et le total des intérêts à payer pour voir laquelle coûte le moins cher au total.',
      },
      {
        question: 'Une durée de prêt plus courte réduit-elle le total des intérêts ?',
        answer:
          'En général, oui. Une durée plus courte signifie une mensualité plus élevée, mais beaucoup moins d’intérêts totaux, car les intérêts s’accumulent sur moins de mois.',
      },
      {
        question: 'Qu’est-ce qu’un tableau d’amortissement ?',
        answer:
          'C’est un tableau qui indique, pour chaque mois ou chaque année, la part de votre EMI qui va aux intérêts, celle qui va au capital et le solde restant.',
      },
      {
        question: 'Puis-je voir le solde restant de mon prêt après un an ?',
        answer:
          'Oui. Le tableau d’amortissement montre le capital restant après 12, 24 ou 36 mensualités, ou à tout autre moment de la durée.',
      },
      {
        question: 'La calculatrice de prêt et d’EMI fonctionne-t-elle pour les prêts auto ?',
        answer:
          'Oui, elle fonctionne pour les prêts auto, personnels, étudiants et professionnels — tout prêt remboursé en mensualités fixes à capital restant dû.',
      },
      {
        question: 'Puis-je utiliser la calculatrice de prêt et d’EMI pour un prêt immobilier ?',
        answer:
          'Oui, pour la partie capital et intérêts. Pour un coût de logement complet incluant taxes, assurance et PMI, utilisez plutôt la calculatrice d’hypothèque.',
      },
      {
        question: 'Que se passe-t-il si je fais un paiement supplémentaire sur mon prêt ?',
        answer:
          'Les paiements supplémentaires réduisent directement le capital, ce qui diminue les intérêts futurs. Cette calculatrice modélise les EMI régulières ; prévoyez le montant supplémentaire séparément dans vos calculs.',
      },
      {
        question: 'La calculatrice de prêt et d’EMI enregistre-t-elle les détails de mon prêt ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur, et rien de ce que vous saisissez n’est enregistré ni envoyé à un serveur.',
      },
      {
        question: 'Pourquoi mon EMI reste-t-elle la même alors que la part des intérêts change ?',
        answer:
          'L’EMI est fixe, mais chaque mois, les intérêts sont calculés sur un solde qui diminue, donc la part des intérêts baisse et la part du capital augmente.',
      },
      {
        question: 'Puis-je basculer la durée du prêt entre années et mois ?',
        answer:
          'Oui, la calculatrice permet de basculer l’unité de durée entre années et mois en toute simplicité.',
      },
      {
        question: 'La calculatrice de prêt et d’EMI est-elle un conseil financier ?',
        answer:
          'Non. C’est un outil de calcul qui montre ce que seraient les chiffres avec les données que vous saisissez ; ce n’est pas un conseil financier, et vous devez vérifier les conditions auprès de votre prêteur.',
      },
      {
        question: 'Comment utiliser la calculatrice de prêt et d’EMI pour un plan à 0 % ?',
        answer:
          'Saisissez 0 % comme taux annuel et votre durée en mois, et l’outil affichera la mensualité fixe sans intérêts.',
      },
      {
        question: 'Que dois-je saisir comme capital du prêt ?',
        answer:
          'Saisissez le montant que vous empruntez réellement. Si des frais sont financés dans le prêt, ajoutez-les au capital pour modéliser leur coût de remboursement.',
      },
      {
        question: 'La calculatrice de prêt et d’EMI peut-elle afficher des tableaux annuels et mensuels ?',
        answer:
          'Oui, vous pouvez basculer entre le résumé annuel et le tableau mensuel pour voir le remboursement avec l’un ou l’autre niveau de détail.',
      },
    ],
  },
  'mortgage-calculator': {
    instructions: [
      {
        title: 'Définissez le prix du logement et l’apport',
        description:
          'Saisissez le prix du bien et votre apport (reflétant automatiquement le ratio prêt-valeur et le capital du prêt).',
      },
      {
        title: 'Choisissez le taux d’intérêt et la durée',
        description:
          'Saisissez le taux hypothécaire annuel (en %) et sélectionnez une durée fixe de 10, 15, 20 ou 30 ans.',
      },
      {
        title: 'Incluez taxes, assurance et charges',
        description:
          'Ajustez la taxe foncière annuelle, l’assurance habitation annuelle, les charges mensuelles de copropriété et le taux de PMI (quand l’apport est inférieur à 20 %).',
      },
      {
        title: 'Lancez le calcul hypothécaire',
        description:
          'La mensualité PITI se met à jour instantanément dans votre navigateur — aucune donnée n’est envoyée.',
      },
      {
        title: 'Consultez le détail du paiement',
        description:
          'Vérifiez la répartition entre capital et intérêts, taxe, assurance, charges et PMI, ainsi que le total des intérêts sur toute la durée.',
      },
      {
        title: 'Astuce : testez 20 % d’apport ou une durée plus courte',
        description:
          'Essayez d’augmenter l’apport à 20 % pour supprimer la PMI, ou une durée de 15 ans pour voir l’économie d’intérêts, puis copiez les chiffres pour comparer les options.',
      },
    ],
    examples: [
      {
        title: 'Achat immobilier à taux fixe sur 30 ans avec 20 % d’apport',
        input: 'Logement : 450 000 $ · Apport : 90 000 $ (20 %) · Taux : 6,5 % · Taxe : 5 400 $/an · Assurance : 1 800 $/an',
        output: 'Total mensuel : 2 875,44 $ (C&I 2 275,44 $ + Taxe 450 $ + Assurance 150 $)',
        explanation:
          'Avec 20 % d’apport (80 % de ratio prêt-valeur), la PMI est de 0 $ et le capital et les intérêts s’amortissent sur 360 mois.',
      },
      {
        title: 'Comparer une durée de 15 ans et de 30 ans',
        input: 'Prêt : 360 000 $ · Taux : 6,5 % · Durée : 15 ans contre 30 ans',
        output: '15 ans : 3 136,58 $/mois · 30 ans : 2 275,44 $/mois',
        explanation:
          'La durée de 15 ans coûte plus cher chaque mois, mais elle réduit fortement le total des intérêts payés sur toute la durée.',
      },
    ],
    benefits: [
      'Détaille le coût mensuel du logement en capital et intérêts, taxe foncière, assurance, charges et PMI',
      'Calcule le ratio prêt-valeur (LTV) et le total des intérêts sur toute la durée',
      'Comprend un tableau annuel de remboursement du solde',
      'Permet de comparer instantanément les amortissements sur 10, 15, 20 et 30 ans',
    ],
    useCases: [
      'Budgétiser les coûts mensuels PITI réalistes avant de chercher un logement',
      'Comparer les économies d’intérêts d’une hypothèque de 15 ans contre 30 ans',
      'Tester comment un apport de 20 % élimine les frais mensuels de PMI',
      'Estimer le capital restant après 5 ou 10 ans',
    ],
    faqs: [
      {
        question: 'Que signifie PITI dans une mensualité hypothécaire ?',
        answer:
          'PITI signifie Principal (capital), Intérêts, Taxes (taxe foncière) et Insurance (assurance habitation et PMI le cas échéant) — les quatre composantes que les prêteurs utilisent pour évaluer l’accessibilité mensuelle.',
      },
      {
        question: 'Quand la PMI s’applique-t-elle à une hypothèque ?',
        answer:
          'Les hypothèques classiques facturent généralement une assurance hypothécaire privée (PMI) quand votre apport est inférieur à 20 % (ratio prêt-valeur supérieur à 80 %).',
      },
      {
        question: 'La calculatrice d’hypothèque inclut-elle les frais de clôture ?',
        answer:
          'Non. Les frais de clôture varient selon la région et le prêteur (souvent 2 % à 5 % du montant du prêt) et sont payés d’avance, sauf s’ils sont intégrés au capital du prêt.',
      },
      {
        question: 'La calculatrice d’hypothèque est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite, sans inscription, et elle fonctionne entièrement dans votre navigateur : le prix de votre logement et les détails du prêt ne sont jamais envoyés.',
      },
      {
        question: 'Comment un apport plus important change-t-il ma mensualité hypothécaire ?',
        answer:
          'Un apport plus important réduit le capital du prêt, ce qui diminue le capital et les intérêts — et avec 20 % d’apport, il peut supprimer entièrement la PMI.',
      },
      {
        question: 'Quelle est la différence entre une hypothèque de 15 ans et de 30 ans ?',
        answer:
          'Une hypothèque de 15 ans a des mensualités plus élevées, mais beaucoup moins d’intérêts totaux, tandis qu’une hypothèque de 30 ans a des mensualités plus basses et plus d’intérêts totaux.',
      },
      {
        question: 'Comment le ratio prêt-valeur (LTV) est-il calculé ?',
        answer:
          'Le LTV est le montant du prêt divisé par le prix du logement, exprimé en pourcentage. Un prêt de 360 000 $ sur un logement de 450 000 $ représente un LTV de 80 %.',
      },
      {
        question: 'La calculatrice d’hypothèque inclut-elle la taxe foncière ?',
        answer:
          'Oui. Saisissez la taxe foncière annuelle et l’outil ajoute un douzième de celle-ci à votre mensualité.',
      },
      {
        question: 'La calculatrice d’hypothèque inclut-elle l’assurance habitation ?',
        answer:
          'Oui. Saisissez la prime annuelle d’assurance habitation et l’outil ajoute un douzième de celle-ci au total mensuel.',
      },
      {
        question: 'Que sont les charges de copropriété dans un calcul hypothécaire ?',
        answer:
          'Les charges de copropriété sont des frais mensuels facturés par une association de propriétaires. Saisissez-les séparément et elles sont ajoutées à votre coût mensuel total du logement.',
      },
      {
        question: 'Puis-je voir le solde restant de mon hypothèque après 5 ou 10 ans ?',
        answer:
          'Oui, le tableau annuel de remboursement du solde montre le capital restant à chaque année de la durée du prêt.',
      },
      {
        question: 'La calculatrice d’hypothèque enregistre-t-elle le prix de mon logement ou les détails du prêt ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur, et rien de ce que vous saisissez n’est enregistré ni envoyé à un serveur.',
      },
      {
        question: 'Puis-je comparer les durées hypothécaires avec cette calculatrice ?',
        answer:
          'Oui. Basculez entre les durées de 10, 15, 20 et 30 ans pour comparer instantanément les mensualités et le total des intérêts.',
      },
      {
        question: 'Combien d’intérêts totaux vais-je payer sur la durée de l’hypothèque ?',
        answer:
          'L’outil affiche le total des intérêts sur toute la durée, pour que vous puissiez voir le vrai coût sur toute la durée, au-delà de la mensualité.',
      },
      {
        question: 'Que devient la PMI quand le solde de mon prêt tombe sous 80 % de LTV ?',
        answer:
          'Dans de nombreux prêts classiques, la PMI peut être supprimée une fois les capitaux propres à 20 %, mais les règles dépendent de votre prêteur et du type de prêt : confirmez directement auprès d’eux.',
      },
      {
        question: 'La calculatrice d’hypothèque est-elle un conseil financier ?',
        answer:
          'Non. C’est un outil de calcul qui montre ce que seraient les chiffres avec les données que vous saisissez ; ce n’est pas un conseil financier, et vous devez vérifier les conditions auprès de votre prêteur.',
      },
      {
        question: 'Puis-je saisir l’apport en montant ou en pourcentage ?',
        answer:
          'Oui, vous pouvez saisir l’apport dans les deux formes, et l’outil reflète automatiquement le ratio prêt-valeur et le capital du prêt.',
      },
      {
        question: 'La calculatrice d’hypothèque fonctionne-t-elle pour les hypothèques à taux fixe ?',
        answer:
          'Oui, elle modélise les hypothèques à taux fixe sur des durées de 10, 15, 20 et 30 ans avec un taux annuel constant.',
      },
      {
        question: 'Que dois-je saisir comme taux d’intérêt hypothécaire ?',
        answer:
          'Saisissez le taux annuel indiqué par votre prêteur, en pourcentage. De petites variations de taux peuvent modifier sensiblement la mensualité, donc comparez quelques taux.',
      },
      {
        question: 'La calculatrice d’hypothèque peut-elle m’aider à budgétiser avant de chercher un logement ?',
        answer:
          'Oui. Saisissez un prix de logement réaliste, un apport, un taux, une taxe et une assurance pour voir le vrai coût mensuel PITI avant de commencer vos recherches.',
      },
    ],
  },
  'compound-interest-calculator': {
    instructions: [
      {
        title: 'Saisissez le capital et les dépôts récurrents',
        description:
          'Indiquez votre dépôt initial et le montant de votre versement mensuel.',
      },
      {
        title: 'Définissez le rendement annuel et l’horizon',
        description:
          'Saisissez le taux de rendement annuel attendu (en %) et la durée du placement en années.',
      },
      {
        title: 'Choisissez la fréquence de capitalisation',
        description:
          'Basculez entre la capitalisation annuelle, trimestrielle, mensuelle ou quotidienne et consultez le détail annuel.',
      },
      {
        title: 'Lancez la projection de croissance',
        description:
          'Le solde final se met à jour instantanément dans votre navigateur — aucune donnée n’est envoyée.',
      },
      {
        title: 'Consultez le registre année par année',
        description:
          'Vérifiez les versements, les intérêts gagnés et le solde courant de chaque année pour voir comment la croissance s’accélère avec le temps.',
      },
      {
        title: 'Astuce : testez un versement mensuel plus élevé',
        description:
          'Essayez d’ajouter 100 $ par mois pour voir de combien le solde final augmente, puis copiez les chiffres pour comparer les plans d’épargne.',
      },
    ],
    examples: [
      {
        title: 'Projection d’un placement indiciel régulier sur 20 ans',
        input: 'Initial : 10 000 $ · Mensuel : 500 $ · Rendement : 7 % · Durée : 20 ans · Capitalisation mensuelle',
        output: 'Solde final : 300 850,56 $ · Versements : 130 000 $ · Intérêts gagnés : 170 850,56 $',
        explanation:
          'Les rendements composés représentent plus de 56 % de la valeur finale du portefeuille.',
      },
      {
        title: 'Épargne sans versements mensuels',
        input: 'Initial : 5 000 $ · Mensuel : 0 $ · Rendement : 5 % · Durée : 10 ans · Capitalisation annuelle',
        output: 'Solde final : 8 144,47 $ · Intérêts gagnés : 3 144,47 $',
        explanation:
          'Avec la capitalisation annuelle, 5 000 $ × (1,05)^10 = 8 144,47 $. Les intérêts composés font croître le solde sans aucun versement supplémentaire.',
      },
    ],
    benefits: [
      'Sépare le total des versements de votre poche des intérêts composés gagnés',
      'Prend en charge les intervalles de capitalisation annuel, trimestriel, mensuel et quotidien',
      'Option de versement en fin de mois ou en début de mois',
      'Génère un registre de croissance complet année par année pour la planification',
    ],
    useCases: [
      'Planifier des étapes d’épargne retraite ou de fonds indiciels à long terme',
      'Comparer des comptes d’épargne à haut rendement à capitalisation mensuelle ou quotidienne',
      'Visualiser l’impact d’une augmentation des versements mensuels de 100 $',
      'Enseigner la capitalisation exponentielle par rapport aux intérêts simples linéaires',
    ],
    faqs: [
      {
        question: 'Quelle différence la fréquence de capitalisation fait-elle dans la calculatrice d’intérêts composés ?',
        answer:
          'À des taux d’intérêt modérés, la capitalisation mensuelle produit une croissance légèrement supérieure à la capitalisation annuelle, car les intérêts commencent à rapporter des intérêts plus tôt ; la différence entre quotidienne et mensuelle est généralement une petite fraction de pour cent.',
      },
      {
        question: 'La calculatrice d’intérêts composés tient-elle compte des impôts ou de l’inflation ?',
        answer:
          'La calculatrice montre une croissance nominale avant impôts. Pour estimer le pouvoir d’achat réel ajusté de l’inflation, soustrayez l’inflation annuelle attendue (par exemple 2,5 % à 3 %) de votre taux de rendement nominal.',
      },
      {
        question: 'Les versements sont-ils supposés en début ou en fin de mois dans la calculatrice d’intérêts composés ?',
        answer:
          'Par défaut, les versements s’appliquent en fin de chaque mois ; vous pouvez basculer vers le début de mois dans les options de la calculatrice.',
      },
      {
        question: 'La calculatrice d’intérêts composés est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite, sans inscription, et elle fonctionne entièrement dans votre navigateur : vos chiffres d’épargne ne sont jamais envoyés.',
      },
      {
        question: 'Qu’est-ce que l’intérêt composé ?',
        answer:
          'L’intérêt composé est l’intérêt gagné à la fois sur votre capital d’origine et sur les intérêts déjà gagnés, de sorte que la croissance s’accélère avec le temps.',
      },
      {
        question: 'En quoi l’intérêt composé diffère-t-il de l’intérêt simple ?',
        answer:
          'L’intérêt simple n’est versé que sur le capital, tandis que l’intérêt composé est versé sur le capital plus les intérêts accumulés, ce qui fait croître le solde plus vite.',
      },
      {
        question: 'Puis-je prévoir la croissance avec des versements mensuels ?',
        answer:
          'Oui. Saisissez votre versement mensuel et l’outil l’ajoute chaque mois, en capitalisant le solde croissant sur toute la durée.',
      },
      {
        question: 'Quel taux de rendement dois-je saisir dans la calculatrice d’intérêts composés ?',
        answer:
          'Saisissez le rendement annuel que vous attendez, en pourcentage. C’est une donnée de projection, pas une prédiction : essayez quelques taux pour voir une plage de résultats.',
      },
      {
        question: 'La calculatrice d’intérêts composés montre-t-elle ce que j’ai versé par rapport à ce que j’ai gagné ?',
        answer:
          'Oui, elle sépare le total des versements de votre poche des intérêts composés gagnés, et elle affiche les deux dans le registre année par année.',
      },
      {
        question: 'Puis-je comparer la capitalisation mensuelle et quotidienne ?',
        answer:
          'Oui. Basculez la fréquence de capitalisation entre annuelle, trimestrielle, mensuelle et quotidienne pour comparer le solde final de chacune.',
      },
      {
        question: 'La calculatrice d’intérêts composés peut-elle aider à planifier l’épargne retraite ?',
        answer:
          'Oui, elle est idéale pour les projections de retraite ou de fonds indiciels à long terme : saisissez votre solde de départ, vos dépôts mensuels, votre taux et vos années pour voir le solde prévu.',
      },
      {
        question: 'La calculatrice d’intérêts composés enregistre-t-elle mes chiffres d’épargne ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur, et rien de ce que vous saisissez n’est enregistré ni envoyé à un serveur.',
      },
      {
        question: 'Que se passe-t-il si j’augmente mon versement mensuel de 100 $ ?',
        answer:
          'Le solde final augmente de bien plus que les dépôts supplémentaires seuls, car chaque dollar ajouté rapporte aussi des intérêts composés sur les années restantes.',
      },
      {
        question: 'Puis-je utiliser la calculatrice d’intérêts composés sans versements mensuels ?',
        answer:
          'Oui. Mettez le versement mensuel à zéro et l’outil prévoira la croissance de votre dépôt initial seul.',
      },
      {
        question: 'Puis-je utiliser la calculatrice d’intérêts composés sans dépôt initial ?',
        answer:
          'Oui. Mettez le dépôt initial à zéro et saisissez un versement mensuel pour prévoir la croissance à partir des seuls dépôts réguliers.',
      },
      {
        question: 'La calculatrice d’intérêts composés est-elle un conseil financier ?',
        answer:
          'Non. C’est un outil de projection qui montre ce que seraient les chiffres avec le taux de rendement et les données que vous saisissez ; ce n’est pas un conseil financier.',
      },
      {
        question: 'Comment fonctionne le tableau année par année ?',
        answer:
          'Le registre indique le solde de départ, les versements, les intérêts gagnés et le solde final de chaque année, pour que vous puissiez suivre la croissance année par année.',
      },
      {
        question: 'Pourquoi la croissance s’accélère-t-elle dans les dernières années ?',
        answer:
          'Parce que les intérêts sont gagnés sur un solde toujours plus important, les intérêts gagnés chaque année augmentent à mesure que le solde se capitalise.',
      },
      {
        question: 'Puis-je calculer les intérêts composés d’un compte d’épargne à haut rendement ?',
        answer:
          'Oui. Saisissez le taux annuel du compte et votre rythme de dépôt pour comparer la capitalisation mensuelle et quotidienne de votre épargne.',
      },
      {
        question: 'Que comprend le solde final ?',
        answer:
          'Le solde final comprend votre dépôt initial, tous les versements mensuels et tous les intérêts composés gagnés sur la durée du placement.',
      },
    ],
  },
  'discount-margin-calculator': {
    instructions: [
      {
        title: 'Choisissez le mode Remise ou Marge',
        description:
          'Sélectionnez Remise commerciale pour les prix soldés ou Marge bénéficiaire et majoration pour l’économie unitaire d’une référence.',
      },
      {
        title: 'Saisissez les chiffres de tarification',
        description:
          'Indiquez le prix d’origine, la remise principale en %, le coupon supplémentaire facultatif en % et la taxe en % — ou le coût et le prix de vente en mode Marge.',
      },
      {
        title: 'Ajoutez des remises cumulées et la taxe',
        description:
          'En mode Remise, saisissez un deuxième coupon en % et une taxe facultative en % ; les remises s’appliquent l’une après l’autre, et ne s’additionnent pas.',
      },
      {
        title: 'Voyez les résultats se mettre à jour instantanément',
        description:
          'Les chiffres se recalculent pendant que vous tapez, sans bouton à presser et sans inscription.',
      },
      {
        title: 'Consultez les indicateurs nets',
        description:
          'Vérifiez le prix final, les économies totales, le pourcentage de remise effectif, le bénéfice brut, la marge en % et la majoration en %.',
      },
      {
        title: 'Copiez vos résultats et testez des prix',
        description:
          'Copiez le prix final, les économies, la marge et la majoration dans votre liste de prix, votre devis ou votre tableur, puis ajustez les données pour tester différents prix.',
      },
    ],
    examples: [
      {
        title: 'Calcul de remise commerciale cumulée',
        input: 'Origine : 120 $ · Remise 1 : 25 % · Coupon supplémentaire : 10 % · Taxe : 0 %',
        output: 'Prix final : 81,00 $ · Économisé : 39,00 $ · Remise effective : 32,5 %',
        explanation:
          'Les remises successives se multiplient (0,75 × 0,90 = 0,675), soit 32,5 % de réduction totale au lieu de 35 %.',
      },
      {
        title: 'Marge et majoration à partir du coût',
        input: 'Coût : 50 $ · Prix de vente : 100 $',
        output: 'Bénéfice brut : 50 $ · Marge : 50 % · Majoration : 100 %',
        explanation:
          'La marge divise le bénéfice par le prix de vente (50 / 100 = 50 %), tandis que la majoration le divise par le coût (50 / 50 = 100 %).',
      },
    ],
    benefits: [
      'Évite l’erreur classique d’addition des remises cumulées',
      'Distingue la marge brute en % de la majoration sur coût en % côte à côte',
      'Calcule immédiatement le bénéfice unitaire et les seuils de coût d’équilibre',
      'Comprend un calcul facultatif de la taxe de vente après remise',
    ],
    useCases: [
      'Vérifier les codes promotionnels cumulés avant le paiement',
      'Fixer les prix de vente de gros ou e-commerce à partir du coût unitaire',
      'Contrôler l’érosion de la marge des campagnes promotionnelles',
      'Convertir un pourcentage de marge cible en majoration requise',
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre la marge bénéficiaire et la majoration ?',
        answer:
          'La marge brute divise le bénéfice par le prix de vente ((Prix − Coût) / Prix), tandis que la majoration divise le bénéfice par le coût ((Prix − Coût) / Coût). Un produit coûtant 50 $ et vendu 100 $ a une marge de 50 %, mais une majoration de 100 %.',
      },
      {
        question: 'Pourquoi deux remises de 20 % et 10 % équivalent-elles à 28 % de réduction au lieu de 30 % ?',
        answer:
          'La deuxième remise de 10 % s’applique au prix déjà réduit à 80 %, retirant encore 8 % du prix d’origine (20 % + 8 % = 28 %).',
      },
      {
        question: 'La taxe de vente est-elle appliquée avant ou après les remises ?',
        answer:
          'La taxe de vente standard s’applique au sous-total remisé après les coupons du commerçant, et c’est ainsi que cette calculatrice la calcule.',
      },
      {
        question: 'Quelle est une bonne marge bénéficiaire pour un produit commercial ?',
        answer:
          'Il n’existe pas de marge unique idéale ; elle varie selon le secteur, le type de produit et les coûts. Utilisez la calculatrice pour comparer votre marge en % à votre propre objectif, et rappelez-vous que le résultat est un calcul mathématique, pas un conseil commercial.',
      },
      {
        question: 'Comment calculer le prix soldé après une seule remise ?',
        answer:
          'Multipliez le prix d’origine par (1 − remise en %). Un article à 80 $ avec 25 % de remise coûte 80 $ × 0,75 = 60 $.',
      },
      {
        question: 'Puis-je cumuler une remise en pourcentage et un coupon en montant fixe ?',
        answer:
          'Cette calculatrice cumule les remises en pourcentage l’une après l’autre. Pour un coupon en montant fixe, soustrayez-le du prix après l’application de la remise en pourcentage.',
      },
      {
        question: 'La calculatrice de remise et de marge fonctionne-t-elle pour les prix de gros ?',
        answer:
          'Oui. Saisissez votre coût unitaire et votre prix de vente cible en mode Marge pour voir le bénéfice brut, la marge en % et la majoration en % par unité.',
      },
      {
        question: 'Quelle est la différence entre le bénéfice brut et le bénéfice net ?',
        answer:
          'Le bénéfice brut est le prix de vente moins le coût du produit. Le bénéfice net soustrait aussi les frais généraux comme l’expédition, les frais et le loyer, que cette calculatrice n’inclut pas.',
      },
      {
        question: 'Comment fixer un prix à partir d’un pourcentage de marge cible ?',
        answer:
          'En mode Marge, essayez différents prix de vente jusqu’à ce que la marge en % corresponde à votre objectif. La majoration en % affichée indique combien ajouter au coût.',
      },
      {
        question: 'La calculatrice de remise et de marge est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite et fonctionne entièrement dans votre navigateur — aucun compte, aucun envoi ni aucun paiement n’est nécessaire.',
      },
      {
        question: 'Pourquoi ma marge en % est-elle inférieure à ma majoration en % ?',
        answer:
          'La marge divise le bénéfice par le prix de vente, tandis que la majoration le divise par le coût, donc pour le même bénéfice, la majoration en % est toujours plus élevée.',
      },
      {
        question: 'La marge peut-elle dépasser 100 % ?',
        answer:
          'Non. La marge est le bénéfice divisé par le prix de vente, donc elle ne peut jamais dépasser 100 %. La majoration, en revanche, peut largement dépasser 100 %.',
      },
      {
        question: 'Comment la taxe de vente affecte-t-elle le prix final ?',
        answer:
          'La taxe est appliquée au sous-total remisé, donc une remise plus importante réduit aussi la taxe que vous payez. La calculatrice affiche le prix final taxes comprises.',
      },
      {
        question: 'Qu’est-ce qu’un prix d’équilibre ?',
        answer:
          'C’est le prix auquel le bénéfice brut est nul — égal à votre coût unitaire. Tout prix de vente supérieur au coût produit une marge positive.',
      },
      {
        question: 'Puis-je utiliser cette calculatrice pour les prix du Black Friday ou des soldes ?',
        answer:
          'Oui. Saisissez le prix d’origine et chaque remise cumulée pour vérifier le prix final et la marge que la promotion laisse.',
      },
      {
        question: 'La calculatrice enregistre-t-elle ou envoie-t-elle mes prix ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur et rien n’est envoyé ni enregistré.',
      },
      {
        question: 'Comment convertir une majoration en % en marge en % ?',
        answer:
          'Marge en % = Majoration en % ÷ (100 + Majoration en %) × 100. Par exemple, une majoration de 100 % équivaut à une marge de 50 %, et la calculatrice fait cette conversion pour vous.',
      },
      {
        question: 'Que faire si la marge semble trop faible ?',
        answer:
          'Vérifiez vos données de coût, puis testez un prix de vente plus élevé ou une remise plus faible dans la calculatrice pour voir comment la marge se rétablit.',
      },
      {
        question: 'Puis-je calculer une remise sur un prix qui inclut déjà la taxe ?',
        answer:
          'Saisissez le montant taxes comprises comme prix d’origine et mettez la taxe en % à 0, pour que la remise s’applique au montant que vous avez tapé.',
      },
      {
        question: 'Que signifie « pourcentage de remise effectif » ?',
        answer:
          'C’est la remise unique en % qui donne le même prix final que toutes vos remises cumulées réunies — par exemple, 20 % puis 10 % équivalent à une remise effective de 28 %.',
      },
    ],
  },
  'vat-tax-calculator': {
    instructions: [
      {
        title: 'Choisissez le sens de la taxe',
        description:
          'Choisissez Ajouter la taxe (Net → Brut) ou Extraire la taxe (Brut → Net).',
      },
      {
        title: 'Saisissez le montant et le taux de taxe',
        description:
          'Tapez le montant de la facture et choisissez un taux rapide prédéfini (5 %, 10 %, 15 %, 20 %) ou n’importe quel pourcentage de taxe personnalisé.',
      },
      {
        title: 'Utilisez un préréglage rapide ou un taux personnalisé',
        description:
          'Appuyez sur 5 %, 10 %, 15 % ou 20 %, ou tapez n’importe quel taux décimal comme 8,875 % pour correspondre à une taxe de vente locale.',
      },
      {
        title: 'Vérifiez le calcul instantanément',
        description:
          'Les résultats se mettent à jour pendant que vous tapez, sans bouton d’envoi et sans inscription.',
      },
      {
        title: 'Lisez les lignes de la facture',
        description:
          'Copiez le sous-total net exact, la composante de taxe et le total brut pour la comptabilité ou un devis.',
      },
      {
        title: 'Copiez le détail et comparez les taux',
        description:
          'Copiez les chiffres net, taxe et brut dans votre facture, votre devis ou votre feuille comptable, puis relancez avec un taux différent pour comparer les scénarios.',
      },
    ],
    examples: [
      {
        title: 'Extraire 20 % de TVA d’un reçu brut',
        input: 'Mode : Extraire la taxe · Total brut : 120,00 $ · Taux : 20 %',
        output: 'Sous-total net : 100,00 $ · Composante TVA : 20,00 $',
        explanation:
          'Divise le brut par (1 + 0,20) au lieu de multiplier le brut par 20 %, évitant une erreur comptable de 4 $.',
      },
      {
        title: 'Ajouter 20 % de TVA à un prix net',
        input: 'Mode : Ajouter la taxe · Net : 100,00 $ · Taux : 20 %',
        output: 'Total brut : 120,00 $ · Composante TVA : 20,00 $',
        explanation:
          'Multiplie le prix net par 1,20 : 100 $ × 1,20 = 120 $, dont 20 $ de TVA.',
      },
    ],
    benefits: [
      'Évite les erreurs courantes de TVA inverse (diviser par 1 + taux au lieu de soustraire le % du taux)',
      'Fonctionne de la même façon pour la TVA européenne, la TPS australienne et canadienne et la taxe de vente américaine',
      'Comprend des boutons de taux rapides instantanés ainsi que des pourcentages de taxe décimaux quelconques',
      'Affiche un détail clair en 3 colonnes : Net / Taxe / Brut',
    ],
    useCases: [
      'Préparer des factures B2B ou B2C avec des lignes claires hors taxe et taxe',
      'Rapprocher les reçus de dépenses TVA incluse pour la comptabilité',
      'Établir des devis SaaS ou freelance internationaux hors TVA ou TVA incluse',
      'Vérifier les totaux en caisse des commerces locaux avec les taux de taxe d’État et municipaux',
    ],
    faqs: [
      {
        question: 'Pourquoi extraire 20 % de TVA de 120 $ donne-t-il 20 $ et non 24 $ ?',
        answer:
          'Parce que les 20 % ont été ajoutés à l’origine au montant net de 100 $ (100 $ × 1,20 = 120 $). Pour inverser, vous divisez 120 $ par 1,20 pour retrouver le montant net de 100 $ et la taxe de 20 $.',
      },
      {
        question: 'Puis-je saisir des taux de taxe de vente locaux fractionnaires comme 8,875 % ?',
        answer:
          'Oui. Le champ du taux de taxe accepte n’importe quel taux décimal positif, comme 7,25 %, 8,875 % ou 21 %.',
      },
      {
        question: 'Cela prend-il en charge à la fois la TPS et la TVA ?',
        answer:
          'Oui. Mathématiquement, la taxe sur la valeur ajoutée (TVA), la taxe sur les produits et services (TPS) et la taxe de vente en pourcentage utilisent exactement les mêmes formules net/brut.',
      },
      {
        question: 'Quelle est la différence entre la TVA, la TPS et la taxe de vente ?',
        answer:
          'Ce sont toutes des taxes en pourcentage sur les biens et services. La TVA et la TPS sont généralement incluses dans le prix affiché, tandis que la taxe de vente américaine est généralement ajoutée à la caisse. Les calculs sont identiques.',
      },
      {
        question: 'Comment ajouter 20 % de TVA à un prix net ?',
        answer:
          'Multipliez le prix net par 1,20. Un prix net de 100 $ devient 120 $ brut, avec 20 $ de TVA.',
      },
      {
        question: 'Comment retirer la TVA d’un prix qui l’inclut ?',
        answer:
          'Divisez le prix brut par (1 + taux). Avec 20 % de TVA, 120 $ ÷ 1,20 = 100 $ net et 20 $ de taxe — et non 24 $.',
      },
      {
        question: 'La calculatrice de TVA et de taxe est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite et fonctionne entièrement dans votre navigateur, sans compte ni envoi.',
      },
      {
        question: 'Puis-je utiliser cette calculatrice pour la TVA britannique à 20 % ?',
        answer:
          'Oui. Sélectionnez Extraire ou Ajouter la taxe, saisissez votre montant et utilisez le préréglage de 20 % ou tapez 20 comme taux personnalisé.',
      },
      {
        question: 'Quel taux de TVA dois-je utiliser pour mon pays ?',
        answer:
          'Les taux varient selon le pays et le type de produit, donc vérifiez le taux actuel auprès de votre administration fiscale et saisissez-le comme taux personnalisé. La calculatrice ne donne pas de conseil fiscal.',
      },
      {
        question: 'La calculatrice gère-t-elle les articles à taux zéro ou exonérés de taxe ?',
        answer:
          'Oui. Saisissez un taux de 0 % et les montants net et brut seront identiques.',
      },
      {
        question: 'Qu’est-ce qu’un prix taxes comprises ?',
        answer:
          'Un prix qui contient déjà la taxe, comme indiqué sur la plupart des reçus européens. Le mode Extraire la taxe le décompose à nouveau en net et en taxe.',
      },
      {
        question: 'Qu’est-ce qu’un prix hors taxe ?',
        answer:
          'Un prix avant l’ajout de la taxe, courant dans les magasins américains. Le mode Ajouter la taxe montre le total brut que votre client paie.',
      },
      {
        question: 'Puis-je calculer la TVA sur un remboursement partiel ?',
        answer:
          'Oui. Saisissez le montant du remboursement comme chiffre brut ou net et extrayez ou ajoutez la taxe au même taux que celui utilisé sur la vente d’origine.',
      },
      {
        question: 'Comment afficher la TVA sur une facture ?',
        answer:
          'Utilisez les trois chiffres de la calculatrice comme lignes distinctes : sous-total net, montant de la taxe et total brut, pour que le client voie clairement le détail.',
      },
      {
        question: 'Cette calculatrice enregistre-t-elle les montants de mes factures ?',
        answer:
          'Non. Tout est calculé localement dans votre navigateur et rien n’est envoyé ni enregistré.',
      },
      {
        question: 'Puis-je utiliser des taux décimaux comme 7,25 % ou 8,875 % ?',
        answer:
          'Oui. Le champ du taux accepte n’importe quel pourcentage décimal positif, donc des taux comme 7,25 % ou 8,875 % calculent la taxe et le total avec exactitude.',
      },
      {
        question: 'Que faire si mon reçu n’indique que le total brut ?',
        answer:
          'Utilisez le mode Extraire la taxe avec le total brut et votre taux local pour retrouver le montant net et la composante de taxe.',
      },
      {
        question: 'La TVA est-elle facturée sur les frais d’expédition ou de livraison ?',
        answer:
          'Cela dépend des règles fiscales locales. Si elle s’applique dans votre cas, incluez le montant de l’expédition dans le chiffre net avant d’ajouter la taxe.',
      },
      {
        question: 'Comment vérifier le calcul de TVA d’un fournisseur ?',
        answer:
          'Saisissez son total brut en mode Extraire la taxe au taux indiqué et comparez le chiffre net avec la facture du fournisseur.',
      },
      {
        question: 'Puis-je calculer la TPS pour l’Australie ou le Canada ?',
        answer:
          'Oui. La TPS utilise les mêmes formules net/brut que la TVA : saisissez votre montant et le taux de TPS local — par exemple 10 % en Australie ou 5 % de TPS fédérale au Canada.',
      },
    ],
  },
  'salary-calculator': {
    instructions: [
      {
        title: 'Saisissez la rémunération de base et la période de paie',
        description:
          'Tapez le montant de votre salaire et sélectionnez si ce chiffre est horaire, journalier, hebdomadaire, bimensuel, mensuel ou annuel.',
      },
      {
        title: 'Ajustez les hypothèses d’horaire de travail',
        description:
          'Définissez les heures par semaine (40 par défaut), les jours par semaine (5 par défaut) et les semaines payées par an (52 par défaut, ou moins pour les congés non payés).',
      },
      {
        title: 'Modifiez les heures ou les semaines pour le temps partiel',
        description:
          'Réduisez les heures par semaine ou les semaines payées par an pour modéliser des horaires à temps partiel, une semaine de 4 jours ou des congés non payés.',
      },
      {
        title: 'Voyez les résultats se mettre à jour instantanément',
        description:
          'Chaque fréquence de paie se recalcule pendant que vous tapez, sans bouton à presser et sans inscription.',
      },
      {
        title: 'Comparez toutes les fréquences de paie',
        description:
          'Consultez simultanément chaque ligne d’équivalence brute, y compris le total des heures de travail annuelles.',
      },
      {
        title: 'Copiez vos chiffres et comparez les offres',
        description:
          'Copiez le chiffre brut horaire, mensuel ou annuel dans une comparaison d’offres d’emploi, un budget ou une note de négociation, puis ajustez les données pour comparer les offres côte à côte.',
      },
    ],
    examples: [
      {
        title: 'Conversion standard temps plein du taux horaire vers l’annuel',
        input: 'Paie : 45,00 $ de l’heure · 40 h/semaine · 52 semaines/an (2 080 h)',
        output: 'Annuel : 93 600 $ · Mensuel : 7 800 $ · Bimensuel : 3 600 $ · Hebdomadaire : 1 800 $',
        explanation:
          'Utilise les 2 080 heures de travail annuelles standard à temps plein.',
      },
      {
        title: 'Temps partiel à 24 heures par semaine',
        input: 'Paie : 30,00 $ de l’heure · 24 h/semaine · 52 semaines/an',
        output: 'Annuel : 37 440 $ · Mensuel : 3 120 $ · Hebdomadaire : 720 $',
        explanation:
          '24 heures × 52 semaines = 1 248 heures par an ; 30 $ × 1 248 = 37 440 $.',
      },
    ],
    benefits: [
      'Convertit dans les deux sens à partir de n’importe quelle fréquence de paie, pas seulement horaire ou annuelle',
      'Tient compte des vacances non payées ou des temps d’arrêt des entrepreneurs grâce aux semaines payées par an personnalisées',
      'Affiche clairement les différences entre le bimensuel calendaire (24×/an) et le bimensuel (26×/an)',
      'Indique le salaire brut sans deviner des impôts propres à une juridiction, ce qui serait trompeur',
    ],
    useCases: [
      'Comparer une offre de contrat horaire à un salaire annuel à temps plein',
      'Traduire les offres de salaire annuel en budgets mensuels et bimensuels du foyer',
      'Intégrer les congés non payés dans les estimations de revenu annuel des entrepreneurs indépendants',
      'Calculer la paie annualisée d’une semaine de travail à temps partiel de 24 ou 32 heures',
    ],
    faqs: [
      {
        question: 'Pourquoi les paies bimensuelles et bimensuelles calendaires sont-elles de montants différents ?',
        answer:
          'La paie bimensuelle émet 26 chèques de paie par an (toutes les 2 semaines), tandis que la paie bimensuelle calendaire en émet 24 par an (deux fois par mois). Les chèques bimensuels calendaires sont légèrement plus élevés par période pour le même salaire annuel.',
      },
      {
        question: 'Cela calcule-t-il le salaire net après impôt sur le revenu ?',
        answer:
          'Non. L’impôt sur le revenu, les retenues sur la paie et les cotisations sociales varient beaucoup selon le pays, l’État, la situation fiscale et les déductions, donc cette calculatrice indique le salaire brut de façon déterministe.',
      },
      {
        question: 'Comment les entrepreneurs doivent-ils gérer les jours fériés et les congés payés non rémunérés ?',
        answer:
          'Réduisez les « semaines payées par an » de 52 à 48 ou 49 pour voir votre revenu brut annuel réaliste en tenant compte des congés non payés.',
      },
      {
        question: 'Comment convertir 25 $ de l’heure en salaire annuel ?',
        answer:
          'À 40 heures par semaine pendant 52 semaines (2 080 heures), 25 $ de l’heure équivalent à 52 000 $ par an brut. Saisissez vos propres heures pour obtenir votre chiffre exact.',
      },
      {
        question: 'La calculatrice de salaire est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite et fonctionne entièrement dans votre navigateur — aucun compte ni envoi n’est nécessaire.',
      },
      {
        question: 'La calculatrice de salaire affiche-t-elle le salaire net après impôt ?',
        answer:
          'Non. Elle affiche uniquement le salaire brut, car l’impôt sur le revenu et les déductions varient selon le pays, l’État et la situation personnelle.',
      },
      {
        question: 'Quelle est la différence entre le salaire brut et le salaire net ?',
        answer:
          'Le salaire brut est votre rémunération avant impôts et déductions. Le salaire net (à emporter) est ce qui reste après eux. Cette calculatrice indique le salaire brut.',
      },
      {
        question: 'Combien d’heures compte une année de travail standard à temps plein ?',
        answer:
          '2 080 heures : 40 heures par semaine × 52 semaines. La calculatrice utilise votre propre réglage d’heures par semaine au lieu de supposer ce chiffre.',
      },
      {
        question: 'Puis-je comparer un taux de contrat horaire avec une offre salariée ?',
        answer:
          'Oui. Saisissez le taux horaire et comparez son chiffre brut annuel avec l’offre de salaire, en gardant à l’esprit que les avantages et les congés payés diffèrent.',
      },
      {
        question: 'Comment tenir compte des vacances non payées en tant qu’entrepreneur ?',
        answer:
          'Réduisez les « semaines payées par an » de 52 au nombre de semaines pour lesquelles vous êtes réellement payé, par exemple 48 ou 49.',
      },
      {
        question: 'Qu’est-ce que la paie bimensuelle calendaire ?',
        answer:
          'Une paie émise deux fois par mois, 24 fois par an, généralement à des dates fixes comme le 1er et le 15 — différente de la paie bimensuelle, qui est de 26 fois par an.',
      },
      {
        question: 'Pourquoi mon chèque de paie bimensuel est-il plus petit que mon chèque bimensuel calendaire ?',
        answer:
          'Parce que le même salaire annuel est divisé en 26 chèques bimensuels au lieu de 24 chèques bimensuels calendaires, donc chaque chèque bimensuel est légèrement plus petit.',
      },
      {
        question: 'Puis-je calculer la paie pour une semaine de travail de 4 jours ?',
        answer:
          'Oui. Définissez les jours par semaine sur 4 et les heures par semaine sur 32 (ou vos heures réelles) et la calculatrice convertit le taux dans toutes les fréquences.',
      },
      {
        question: 'Les heures supplémentaires sont-elles incluses ?',
        answer:
          'Non. La calculatrice convertit un seul taux de base. Les heures supplémentaires à un taux différent nécessiteraient un calcul séparé.',
      },
      {
        question: 'Comment convertir un salaire mensuel en taux horaire ?',
        answer:
          'Saisissez le montant mensuel, choisissez Mensuel comme période de paie et lisez le chiffre horaire — il divise par vos heures par semaine et vos semaines payées par an.',
      },
      {
        question: 'La calculatrice enregistre-t-elle mes informations de salaire ?',
        answer:
          'Non. Tous les chiffres restent dans votre navigateur et rien n’est envoyé ni enregistré.',
      },
      {
        question: 'Que dois-je saisir si ma paie change au cours de l’année ?',
        answer:
          'Calculez chaque taux séparément, ou utilisez une moyenne pondérée des deux taux pour une estimation annuelle approximative.',
      },
      {
        question: 'Puis-je utiliser cette calculatrice pour un travail à temps partiel ou occasionnel ?',
        answer:
          'Oui. Définissez vos heures réelles par semaine et vos jours par semaine pour correspondre à votre horaire à temps partiel.',
      },
      {
        question: 'Comment comparer deux offres d’emploi avec des périodes de paie différentes ?',
        answer:
          'Saisissez le taux et la période de paie de chaque offre, puis comparez les chiffres bruts annuels côte à côte en utilisant les mêmes réglages d’heures et de semaines.',
      },
      {
        question: 'La calculatrice inclut-elle les primes ou les commissions ?',
        answer:
          'Non. Elle convertit uniquement le salaire de base. Ajoutez les primes ou les commissions séparément au chiffre annuel pour une image plus complète.',
      },
    ],
  },
  'tip-calculator': {
    instructions: [
      {
        title: 'Saisissez le sous-total et le nombre de convives',
        description:
          'Saisissez le montant de l’addition, le montant facultatif de la taxe de vente si elle est incluse, et le nombre de personnes qui partagent l’addition.',
      },
      {
        title: 'Choisissez le pourcentage de pourboire',
        description:
          'Appuyez sur un préréglage (10 %, 15 %, 18 %, 20 %, 25 %) ou saisissez n’importe quel pourcentage de pourboire personnalisé.',
      },
      {
        title: 'Excluez la taxe de la base du pourboire',
        description:
          'Si votre addition inclut la taxe de vente, saisissez le montant de la taxe pour que le pourboire soit calculé sur le sous-total hors taxe.',
      },
      {
        title: 'Vérifiez les totaux instantanément',
        description:
          'Le pourboire, le total de l’addition et les montants par personne se mettent à jour pendant que vous tapez, sans bouton à presser.',
      },
      {
        title: 'Arrondi et partage facultatifs',
        description:
          'Activez l’arrondi au dollar supérieur par personne et consultez la part de chaque convive.',
      },
      {
        title: 'Copiez ou partagez le partage',
        description:
          'Copiez la part de chaque personne pour l’envoyer au groupe, ou ajustez le pourcentage de pourboire pour voir comment le total par personne change.',
      },
    ],
    examples: [
      {
        title: 'Dîner de groupe partagé en 4',
        input: 'Addition : 160,00 $ · Pourboire : 20 % · Personnes : 4',
        output: 'Pourboire : 32,00 $ · Total : 192,00 $ · Par personne : 48,00 $',
        explanation:
          'Ajoute 20 % de pourboire (32 $) et divise 192 $ à parts égales entre 4 convives.',
      },
      {
        title: 'Pourboire sur le sous-total hors taxe',
        input: 'Addition : 110,00 $ · Taxe : 10,00 $ · Pourboire : 20 % · Personnes : 2',
        output: 'Pourboire : 20,00 $ · Total : 130,00 $ · Par personne : 65,00 $',
        explanation:
          'Le pourboire de 20 % s’applique au sous-total hors taxe de 100 $, et non au total de 110 $ taxes comprises.',
      },
    ],
    benefits: [
      'Prend en charge le pourboire sur le sous-total hors taxe quand la taxe de vente est indiquée',
      'Affiche clairement à la fois le pourboire par personne et le total par personne',
      'Comprend des boutons de préréglage rapides pour une utilisation mobile au restaurant en un geste',
      'L’arrondi facultatif ajuste le pourboire effectif en toute transparence',
    ],
    useCases: [
      'Partager les dîners de groupe au restaurant sans calcul mental gênant',
      'Calculer les pourboires de livraison, de covoiturage ou de salon',
      'Vérifier le pourboire exact de 18 % ou 20 % hors taxe sur les reçus détaillés',
      'Diviser à parts égales les notes partagées de voyage ou d’événement de groupe',
    ],
    faqs: [
      {
        question: 'Faut-il donner un pourboire sur l’addition hors taxe ou taxes comprises ?',
        answer:
          'L’usage veut traditionnellement que le pourboire soit calculé sur le sous-total hors taxe. Saisissez le montant de la taxe dans le champ Taxe si vous souhaitez que la calculatrice exclue la taxe de la base du pourboire.',
      },
      {
        question: 'Que se passe-t-il si je partage entre 1 seule personne ?',
        answer:
          'Avec le nombre de personnes réglé sur 1, le montant par personne correspond directement au pourboire complet et au total de l’addition.',
      },
      {
        question: 'Comment fonctionne l’arrondi par personne ?',
        answer:
          'Quand il est activé, la part totale de chaque personne est arrondie au dollar entier supérieur, et la calculatrice affiche le pourcentage de pourboire effectif qui en résulte.',
      },
      {
        question: 'Combien de pourboire dois-je laisser au restaurant ?',
        answer:
          'Les fourchettes courantes de pourboire sont de 15 à 20 % pour le service à table aux États-Unis, mais les usages varient selon le pays et la qualité du service. La calculatrice ne fait que les calculs.',
      },
      {
        question: 'Comment calculer rapidement un pourboire de 20 % ?',
        answer:
          'Déplacez la virgule d’une place vers la gauche pour obtenir 10 % de l’addition, puis doublez. Sur une addition de 60 $, 10 % font 6 $, donc 20 % font 12 $.',
      },
      {
        question: 'La calculatrice de pourboire est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite et fonctionne entièrement dans votre navigateur — aucun compte ni envoi n’est nécessaire.',
      },
      {
        question: 'Dois-je donner un pourboire sur le total taxes comprises ?',
        answer:
          'Traditionnellement, le pourboire est calculé sur le sous-total hors taxe. Saisissez le montant de la taxe dans le champ Taxe pour l’exclure de la base du pourboire.',
      },
      {
        question: 'Quel est un bon pourboire pour la livraison de repas ?',
        answer:
          'Les usages de pourboire pour la livraison varient selon la région et la taille de la commande. Saisissez n’importe quel pourcentage personnalisé dans la calculatrice pour correspondre à ce que vous décidez.',
      },
      {
        question: 'Comment partager une addition quand les gens ont commandé des montants différents ?',
        answer:
          'Cette calculatrice partage à parts égales. Pour des parts inégales, calculez le pourboire de chaque personne sur son propre sous-total séparément.',
      },
      {
        question: 'Puis-je donner un pourboire avec un pourcentage personnalisé comme 17 % ?',
        answer:
          'Oui. Tapez n’importe quel pourcentage dans le champ de pourboire personnalisé au lieu d’utiliser les préréglages.',
      },
      {
        question: 'Que comprend le montant par personne ?',
        answer:
          'La part de l’addition de chaque personne plus sa part du pourboire. Avec l’arrondi activé, elle est arrondie au dollar entier supérieur.',
      },
      {
        question: 'Comment l’arrondi modifie-t-il le pourboire effectif ?',
        answer:
          'Arrondir la part de chaque personne au dollar supérieur ajoute un petit montant au pourboire, donc la calculatrice affiche le pourcentage de pourboire effectif qui en résulte.',
      },
      {
        question: 'Puis-je utiliser la calculatrice de pourboire pour les pourboires de salon ou de taxi ?',
        answer:
          'Oui. Saisissez le total du service et le pourcentage de pourboire de votre choix ; les mêmes calculs s’appliquent à tout service avec pourboire.',
      },
      {
        question: 'La calculatrice enregistre-t-elle les montants de mes additions ?',
        answer:
          'Non. Tous les calculs se font localement dans votre navigateur et rien n’est envoyé ni enregistré.',
      },
      {
        question: 'Que faire si l’addition comprend déjà des frais de service ?',
        answer:
          'Vérifiez si les frais de service constituent le pourboire. Si c’est le cas, vous n’avez peut-être pas besoin de pourboire supplémentaire, et vous pouvez saisir 0 % pour voir le partage sans pourboire.',
      },
      {
        question: 'Comment partager une addition entre 3 personnes avec un total impair ?',
        answer:
          'Saisissez l’addition, le pourcentage de pourboire et 3 personnes. La calculatrice divise le total à parts égales et affiche la part exacte de chaque personne.',
      },
      {
        question: 'Puis-je calculer le pourboire avant taxe si je ne connais que le total ?',
        answer:
          'Vous avez besoin du montant de la taxe ou du sous-total hors taxe pour donner un pourboire avant taxe. Si le reçu n’indique que le total, utilisez le total complet comme base du pourboire.',
      },
      {
        question: 'Quels pourcentages de pourboire les préréglages couvrent-ils ?',
        answer:
          'Les préréglages rapides sont 10 %, 15 %, 18 %, 20 % et 25 %, et vous pouvez saisir n’importe quel autre pourcentage comme valeur personnalisée.',
      },
      {
        question: 'Est-il impoli de partager une addition à parts égales ?',
        answer:
          'Cela dépend du groupe et de ce que chacun a commandé. La calculatrice rend simplement le calcul du partage égal instantané.',
      },
      {
        question: 'Comment calculer le pourboire sur une addition de grand groupe ?',
        answer:
          'Saisissez le total complet de l’addition et le nombre de convives. La calculatrice affiche le pourboire, le total et ce que chaque personne doit.',
      },
    ],
  },
  'bmi-calculator': {
    instructions: [
      {
        title: 'Choisissez le système d’unités',
        description:
          'Basculez entre le système métrique (cm / kg) et le système impérial (pi, po / lb).',
      },
      {
        title: 'Saisissez la taille et le poids',
        description:
          'Saisissez votre taille actuelle et votre poids corporel dans les champs validés.',
      },
      {
        title: 'Vérifiez vos unités',
        description:
          'Assurez-vous que les centimètres vont avec les kilogrammes et les pieds/pouces avec les livres, sinon le résultat sera faux.',
      },
      {
        title: 'Voyez votre IMC instantanément',
        description:
          'Le score, la catégorie OMS et la fourchette de poids santé se mettent à jour pendant que vous tapez, sans bouton à presser.',
      },
      {
        title: 'Consultez l’IMC et le contexte',
        description:
          'Examinez votre score d’IMC, votre catégorie OMS et la fourchette de poids santé correspondante pour votre taille.',
      },
      {
        title: 'Notez ou partagez votre résultat',
        description:
          'Copiez votre IMC et votre fourchette de poids santé pour les suivre dans le temps ou en discuter avec un professionnel de santé, et saisissez de nouvelles mesures chaque fois que votre poids change.',
      },
    ],
    examples: [
      {
        title: 'Vérification d’IMC métrique pour adulte',
        input: 'Taille : 175 cm · Poids : 70 kg',
        output: 'IMC : 22,9 kg/m² · Catégorie OMS : Poids normal (56,7 – 76,3 kg)',
        explanation:
          'Calculé comme 70 / (1,75 × 1,75) = 22,86 kg/m².',
      },
      {
        title: 'Vérification d’IMC impérial pour adulte',
        input: 'Taille : 5 pi 9 po · Poids : 160 lb',
        output: 'IMC : 23,6 kg/m² · Catégorie OMS : Poids normal',
        explanation:
          'Calculé comme (160 × 703) / (69 × 69) = 23,6 kg/m².',
      },
    ],
    benefits: [
      'Permet de basculer instantanément entre les mesures métriques et impériales américaines',
      'Calcule la fourchette de poids santé exacte de 18,5 à 24,9 kg/m² pour votre taille',
      'Comprend des notes claires sur les limites cliniques concernant la masse musculaire et la composition corporelle',
      'Fonctionne en privé dans la mémoire du navigateur, sans aucun stockage de données de santé',
    ],
    useCases: [
      'Vérifications rapides de dépistage poids-taille pour adultes',
      'Trouver les fourchettes de poids santé cibles pour une taille donnée',
      'Associer à la planification quotidienne des calories et du métabolisme de base',
      'Convertir les mesures impériales de taille et de poids en IMC standard kg/m²',
    ],
    faqs: [
      {
        question: 'Quelle est la formule de l’indice de masse corporelle ?',
        answer:
          'L’IMC est égal au poids en kilogrammes divisé par la taille en mètres au carré : poids (kg) / taille (m)². En unités impériales, cela équivaut à (poids (lb) × 703) / taille (po)².',
      },
      {
        question: 'L’IMC s’applique-t-il avec précision aux athlètes ou aux personnes âgées ?',
        answer:
          'L’IMC est un ratio de dépistage au niveau de la population et ne distingue pas la masse musculaire maigre de la graisse. Les athlètes très musclés peuvent se situer dans la tranche de surpoids malgré une faible masse grasse, et les enfants et adolescents nécessitent des percentiles selon l’âge et le sexe.',
      },
      {
        question: 'Mes informations de santé sont-elles enregistrées quelque part ?',
        answer:
          'Non. Toutes les mesures restent strictement dans l’onglet actif de votre navigateur et disparaissent quand vous le fermez.',
      },
      {
        question: 'Quelle est la fourchette d’IMC santé ?',
        answer:
          'L’OMS définit 18,5 à 24,9 kg/m² comme la fourchette de poids normal pour les adultes. En dessous de 18,5, c’est l’insuffisance pondérale, et de 25 à 29,9, le surpoids.',
      },
      {
        question: 'La calculatrice d’IMC est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite et fonctionne entièrement dans votre navigateur — aucun compte ni envoi n’est nécessaire.',
      },
      {
        question: 'Quelles sont les catégories d’IMC de l’OMS ?',
        answer:
          'L’insuffisance pondérale est inférieure à 18,5, le poids normal est de 18,5 à 24,9, le surpoids de 25 à 29,9 et l’obésité de 30 ou plus.',
      },
      {
        question: 'Comment calculer l’IMC en livres et en pouces ?',
        answer:
          'Utilisez (poids en lb × 703) ÷ (taille en pouces)². La calculatrice fait cela automatiquement en mode impérial.',
      },
      {
        question: 'Comment calculer l’IMC en kilogrammes et en centimètres ?',
        answer:
          'Divisez le poids en kg par la taille en mètres au carré. La calculatrice convertit vos centimètres en mètres pour vous.',
      },
      {
        question: 'L’IMC est-il précis pour tout le monde ?',
        answer:
          'Non. L’IMC est un ratio de dépistage qui ne distingue pas le muscle de la graisse, donc les personnes très musclées, les personnes âgées et les enfants ont besoin d’évaluations différentes.',
      },
      {
        question: 'Les enfants peuvent-ils utiliser cette calculatrice d’IMC ?',
        answer:
          'Non. L’IMC des enfants s’interprète avec des courbes de percentiles selon l’âge et le sexe, et non avec les tranches adultes de l’OMS : cet outil est donc réservé aux adultes.',
      },
      {
        question: 'Quelle est ma fourchette de poids santé ?',
        answer:
          'La calculatrice montre la fourchette de poids qui donne un IMC de 18,5 à 24,9 pour votre taille — par exemple, environ 56,7 à 76,3 kg pour 175 cm.',
      },
      {
        question: 'À quelle fréquence dois-je vérifier mon IMC ?',
        answer:
          'Occasionnellement suffit, par exemple une fois par mois quand vous suivez l’évolution de votre poids. L’IMC est un chiffre de dépistage, pas un verdict de santé quotidien.',
      },
      {
        question: 'L’IMC mesure-t-il le pourcentage de masse grasse ?',
        answer:
          'Non. L’IMC ne fait que relier le poids à la taille et ne peut pas dire quelle part de votre poids est de la graisse plutôt que du muscle ou des os.',
      },
      {
        question: 'Que dois-je faire si mon IMC est dans la tranche de surpoids ?',
        answer:
          'Considérez-le comme une invitation à examiner votre alimentation, votre activité et votre santé globale avec un professionnel de santé. Un seul chiffre d’IMC n’est pas un diagnostic.',
      },
      {
        question: 'Puis-je utiliser l’IMC si je suis enceinte ?',
        answer:
          'Non. La grossesse modifie le poids d’une façon que l’IMC ne prend pas en compte, donc les catégories standard ne s’appliquent pas.',
      },
      {
        question: 'Mes données de taille et de poids sont-elles enregistrées quelque part ?',
        answer:
          'Non. Vos mesures restent dans l’onglet de votre navigateur et disparaissent quand vous le fermez.',
      },
      {
        question: 'Pourquoi la calculatrice demande-t-elle la taille en pieds et en pouces ?',
        answer:
          'Le mode impérial accepte les pieds et les pouces parce que c’est ainsi que la taille est généralement mesurée aux États-Unis. Le mode métrique utilise les centimètres à la place.',
      },
      {
        question: 'Quelle est la différence entre l’IMC et le métabolisme de base ?',
        answer:
          'L’IMC relie le poids à la taille, tandis que le métabolisme de base (MB) estime les calories que votre corps brûle au repos — ils mesurent des choses différentes.',
      },
      {
        question: 'Les athlètes peuvent-ils avoir un IMC élevé et être en bonne santé ?',
        answer:
          'Oui. Le muscle est dense, donc un athlète très musclé peut être classé en surpoids selon l’IMC malgré une faible masse grasse. L’outil signale cette limite.',
      },
      {
        question: 'Quelle est la précision du résultat d’IMC ?',
        answer:
          'Les calculs sont exacts pour les chiffres que vous saisissez, mais le résultat n’est aussi précis que vos mesures de taille et de poids.',
      },
    ],
  },
  'calorie-calculator': {
    instructions: [
      {
        title: 'Choisissez les unités et le profil',
        description:
          'Sélectionnez les unités métriques ou impériales, les constantes de référence biologique Homme ou Femme, et saisissez l’âge, la taille et le poids.',
      },
      {
        title: 'Choisissez votre niveau d’activité hebdomadaire',
        description:
          'Sélectionnez le multiplicateur d’activité, de Sédentaire (1,2×) à Très actif (1,9×), qui reflète votre routine réelle.',
      },
      {
        title: 'Définissez votre objectif de poids',
        description:
          'Choisissez le maintien, un léger déficit, une perte de graisse standard ou un gain maigre pour voir l’objectif calorique quotidien qui correspond à votre objectif.',
      },
      {
        title: 'Consultez les objectifs caloriques quotidiens',
        description:
          'Comparez le TDEE de maintien, les déficits de perte de poids légère et standard, le surplus de gain maigre et les grammes de macros de référence.',
      },
      {
        title: 'Vérifiez vos objectifs de macros en grammes',
        description:
          'Lisez les références en grammes de protéines, de glucides et de lipides pour l’objectif calorique choisi et ajustez-les à votre régime.',
      },
      {
        title: 'Enregistrez et revérifiez vos chiffres',
        description:
          'Notez vos objectifs, relancez le calcul si votre poids ou votre activité change, et suivez les tendances réelles de votre poids pendant 2 à 3 semaines avant d’ajuster votre apport.',
      },
    ],
    examples: [
      {
        title: 'Vérification de maintien d’un adulte modérément actif',
        input: 'Homme · 30 ans · 175 cm · 72 kg · Modérément actif (1,55×)',
        output: 'MB : 1 669 kcal · TDEE de maintien : 2 587 kcal/jour · Perte de 0,5 kg/sem. : 2 087 kcal/jour',
        explanation:
          'Applique le MB de Mifflin-St Jeor × le facteur d’activité 1,55 et soustrait 500 kcal pour une perte d’environ 0,5 kg par semaine.',
      },
      {
        title: 'Déficit léger pour une perte progressive',
        input: 'Femme · 40 ans · 165 cm · 68 kg · Légèrement active (1,375×)',
        output: 'MB : 1 367 kcal · TDEE de maintien : 1 880 kcal/jour · Déficit léger : 1 630 kcal/jour',
        explanation:
          'Un déficit de 250 kcal par jour vise une perte progressive d’environ 0,25 kg par semaine.',
      },
    ],
    benefits: [
      'Utilise la formule de prédiction du MB de Mifflin-St Jeor, largement reconnue',
      'Impose un avis de plancher de 1 200 kcal sur les projections de déficit pour sensibiliser à la sécurité',
      'Indique des références équilibrées en grammes de protéines, de glucides et de lipides',
      'Prend en charge les unités métriques (cm/kg) et impériales américaines (pi, po/lb)',
    ],
    useCases: [
      'Fixer des budgets caloriques quotidiens de départ réalistes pour le suivi nutritionnel',
      'Estimer les variations de la dépense énergétique selon les niveaux d’activité',
      'Traduire les calories de maintien en grammes quotidiens de protéines, de glucides et de lipides',
      'Planifier des déficits progressifs de 250 à 500 kcal au lieu de régimes draconiens intenables',
    ],
    faqs: [
      {
        question: 'Pourquoi cette calculatrice utilise-t-elle l’équation de Mifflin-St Jeor ?',
        answer:
          'La recherche en nutrition classe régulièrement Mifflin-St Jeor parmi les formules les plus précises pour la population générale pour estimer la dépense énergétique au repos à partir de l’âge, du sexe, de la taille et du poids.',
      },
      {
        question: 'Quelle est la précision des multiplicateurs d’activité ?',
        answer:
          'Les multiplicateurs d’activité fournissent une estimation de départ fondée sur des preuves. Suivez l’évolution de votre poids sur 2 à 3 semaines et ajustez votre apport quotidien de 100 à 200 kcal en fonction de vos progrès réels.',
      },
      {
        question: 'S’agit-il d’un conseil nutritionnel médical ou clinique ?',
        answer:
          'Non. Les prévisions sont des estimations informatives ; consultez un médecin ou un diététicien agréé pour un accompagnement nutritionnel médical personnalisé.',
      },
      {
        question: 'Qu’est-ce que le MB et en quoi diffère-t-il du TDEE ?',
        answer:
          'Le MB est l’énergie que votre corps utilise au repos complet pour maintenir les fonctions de base. Le TDEE ajoute au MB les calories brûlées par les mouvements quotidiens et l’exercice.',
      },
      {
        question: 'Que fait la calculatrice de calories avec mon âge, ma taille et mon poids ?',
        answer:
          'Elle les introduit dans l’équation de Mifflin-St Jeor pour estimer votre MB, puis multiplie celui-ci par votre niveau d’activité pour estimer votre TDEE et vos objectifs caloriques quotidiens.',
      },
      {
        question: 'Comment choisir le bon niveau d’activité dans la calculatrice de calories ?',
        answer:
          'Choisissez le niveau qui correspond à une semaine typique, et non à votre journée la plus chargée. La plupart des travailleurs de bureau qui font de l’exercice quelques fois par semaine relèvent de Légèrement actif ou Modérément actif.',
      },
      {
        question: 'Quel est un déficit calorique sûr pour perdre du poids ?',
        answer:
          'Un point de départ courant est un déficit quotidien de 250 à 500 kcal, qui vise une perte progressive d’environ 0,25 à 0,5 kg par semaine. Les déficits plus importants doivent être discutés avec un professionnel de santé.',
      },
      {
        question: 'Combien de calories dois-je manger pour prendre du poids maigrement ?',
        answer:
          'L’outil affiche un surplus de gain maigre au-dessus de votre TDEE de maintien comme objectif de départ. Suivez votre poids pendant quelques semaines et ajustez le surplus à la hausse ou à la baisse en fonction du changement réel.',
      },
      {
        question: 'Pourquoi la calculatrice de calories affiche-t-elle un avis de plancher de 1 200 kcal ?',
        answer:
          'Les objectifs caloriques très bas peuvent être dangereux et difficiles à maintenir, donc l’outil signale les déficits qui tombent sous 1 200 kcal pour sensibiliser à la sécurité.',
      },
      {
        question: 'Que sont les objectifs de macros affichés par la calculatrice de calories ?',
        answer:
          'Ce sont des quantités de référence en grammes pour les protéines, les glucides et les lipides qui totalisent l’objectif calorique quotidien choisi. C’est une répartition de départ, pas un régime prescrit.',
      },
      {
        question: 'La calculatrice de calories fonctionne-t-elle avec les unités métriques et impériales ?',
        answer:
          'Oui. Vous pouvez saisir la taille et le poids en centimètres et en kilogrammes, ou en pieds, en pouces et en livres, et les résultats sont les mêmes.',
      },
      {
        question: 'Puis-je utiliser la calculatrice de calories si je suis très actif ou athlète ?',
        answer:
          'Oui, le niveau Très actif couvre le travail physique intense ou l’entraînement quotidien intense, mais les athlètes à la composition corporelle inhabituelle peuvent trouver l’estimation moins précise.',
      },
      {
        question: 'Pourquoi mon TDEE a-t-il changé quand j’ai changé mon niveau d’activité ?',
        answer:
          'Le TDEE est votre MB multiplié par un facteur d’activité, donc un niveau d’activité plus élevé augmente le multiplicateur et donc vos besoins caloriques quotidiens estimés.',
      },
      {
        question: 'À quelle fréquence dois-je recalculer mes calories ?',
        answer:
          'Recalculez chaque fois que votre poids, votre niveau d’activité ou votre objectif change, ou environ toutes les 4 à 8 semaines pendant que vous perdez ou prenez activement du poids.',
      },
      {
        question: 'La calculatrice de calories enregistre-t-elle ou envoie-t-elle mes données personnelles ?',
        answer:
          'Non. Tous les calculs s’exécutent localement dans votre navigateur, et votre âge, votre taille, votre poids et vos choix d’activité ne sont jamais envoyés ni enregistrés sur un serveur.',
      },
      {
        question: 'La calculatrice de calories est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite dans votre navigateur, sans compte, sans inscription et sans limite de fréquence de recalcul.',
      },
      {
        question: 'La calculatrice de calories peut-elle m’aider à planifier un déficit de 500 kcal ?',
        answer:
          'Oui. L’objectif de perte de poids standard soustrait environ 500 kcal par jour de votre TDEE de maintien, ce qui vise environ 0,5 kg de perte par semaine.',
      },
      {
        question: 'Que dois-je faire si mon poids ne change pas après avoir suivi l’objectif ?',
        answer:
          'Vérifiez d’abord que votre niveau d’activité et votre suivi alimentaire sont honnêtes et réguliers pendant 2 à 3 semaines. Si le poids ne bouge toujours pas, ajustez l’apport de 100 à 200 kcal et continuez le suivi.',
      },
      {
        question: 'La calculatrice de calories tient-elle compte du pourcentage de masse grasse ?',
        answer:
          'Non. L’équation de Mifflin-St Jeor utilise uniquement l’âge, le sexe, la taille et le poids corporel total, donc elle ne peut pas distinguer le muscle de la masse grasse.',
      },
      {
        question: 'Les adolescents ou les personnes âgées peuvent-ils utiliser la calculatrice de calories ?',
        answer:
          'La formule a été conçue pour les adultes, donc les résultats pour les adolescents ou les personnes beaucoup plus âgées ne sont que des estimations approximatives. Les jeunes doivent obtenir des conseils nutritionnels auprès d’un parent et d’un professionnel de santé.',
      },
    ],
  },
  'date-difference-calculator': {
    instructions: [
      {
        title: 'Choisissez Différence ou Ajouter/Soustraire',
        description:
          'Choisissez Différence entre deux dates pour comparer deux dates, ou Ajouter / Soustraire du temps pour projeter une date future ou passée.',
      },
      {
        title: 'Choisissez les dates et les options',
        description:
          'Saisissez les dates de début et de fin (utilisez le bouton d’échange à tout moment) et cochez éventuellement Inclure la date de fin (+1 jour).',
      },
      {
        title: 'Échangez les dates si nécessaire',
        description:
          'Utilisez le bouton d’échange pour inverser instantanément les dates de début et de fin si vous les avez saisies à l’envers.',
      },
      {
        title: 'Consultez le détail calendaire',
        description:
          'Examinez les années, mois et jours, le total des jours calendaires, les semaines, les jours de semaine (lun.–ven.), les jours de week-end et les heures.',
      },
      {
        title: 'Vérifiez les jours de semaine et de week-end',
        description:
          'Lisez séparément les nombres de jours de semaine et de week-end pour planifier les jours de travail, les jours de facturation ou la durée des voyages.',
      },
      {
        title: 'Copiez ou réutilisez le résultat',
        description:
          'Copiez le détail pour des contrats, des plannings ou des messages, et relancez le calcul avec l’option de date de fin incluse si votre compte semble manquer d’un jour.',
      },
    ],
    examples: [
      {
        title: 'Compter la durée d’un projet et les jours de travail',
        input: 'Début : 2025-01-15 · Fin : 2025-11-12 · Inclusif : Non',
        output: '0 an, 9 mois, 28 jours · 301 jours au total · 215 jours de semaine · 86 jours de week-end',
        explanation:
          'Utilise l’arithmétique calendaire UTC, insensible aux erreurs de décalage de 23 ou 25 heures lors des changements d’heure.',
      },
      {
        title: 'Ajouter 90 jours à une date de contrat',
        input: 'Date de référence : 2025-01-15 · Ajouter : 90 jours',
        output: 'Date résultante : 2025-04-15',
        explanation:
          'Ajoute l’intervalle complet en une seule étape, avec le passage de mois et d’année géré automatiquement.',
      },
    ],
    benefits: [
      'L’arithmétique calendaire pure en UTC évite les erreurs d’un jour liées au changement d’heure',
      'Compte instantanément les jours de semaine (lundi–vendredi) et les jours de week-end',
      'Prend en charge le comptage de la date de fin incluse pour les nuits d’hôtel par rapport aux jours de sprint',
      'Comprend l’addition et la soustraction de dates avec ajustement intelligent de fin de mois',
    ],
    useCases: [
      'Compter les jours de sprint de projet, les durées de contrat ou les limites de séjour de visa',
      'Trouver les jours de facturation exacts ou les dates d’expiration de préavis',
      'Ajouter 90 jours ou 6 mois à une date d’entrée en vigueur de contrat',
      'Vérifier le total des jours de semaine disponibles dans un trimestre ou un exercice fiscal',
    ],
    faqs: [
      {
        question: 'Le compteur de jours de semaine exclut-il les jours fériés ?',
        answer:
          'Il compte les jours de semaine calendaires du lundi au vendredi, car les jours fériés diffèrent selon le pays, l’État et le calendrier de l’employeur.',
      },
      {
        question: 'Quand dois-je cocher « Inclure la date de fin (+1 jour calendaire) » ?',
        answer:
          'Cochez-la quand vous comptez des jours de présence ou de vacances inclusifs (par exemple, du lundi au vendredi = 5 jours). Laissez-la décochée quand vous comptez des nuits écoulées ou des intervalles.',
      },
      {
        question: 'Que se passe-t-il si j’ajoute 1 mois au 31 janvier ?',
        answer:
          'L’ajustement calendaire ramène le 31 janvier + 1 mois au dernier jour valide de février (28 février, ou 29 février les années bissextiles) au lieu de déborder en mars.',
      },
      {
        question: 'Comment la calculatrice de différence de dates compte-t-elle les jours entre deux dates ?',
        answer:
          'Elle mesure la durée calendaire exacte entre les deux dates à l’aide de l’arithmétique des dates UTC, puis décompose la durée en années, en mois et en jours restants, plus le total en jours et en semaines.',
      },
      {
        question: 'La calculatrice de différence de dates inclut-elle la date de début dans le total ?',
        answer:
          'Par défaut, non : du lundi au vendredi compte donc 4 jours écoulés. Activez l’option de date de fin incluse quand vous souhaitez que les dates de début et de fin soient toutes deux comptées.',
      },
      {
        question: 'Quelle est la différence entre les jours calendaires et les jours de semaine dans cet outil ?',
        answer:
          'Les jours calendaires comptent chaque jour de la durée, tandis que les jours de semaine ne comptent que du lundi au vendredi. Les jours de week-end sont affichés séparément pour que vous puissiez voir les deux totaux à la fois.',
      },
      {
        question: 'La calculatrice de différence de dates peut-elle compter les jours de week-end séparément ?',
        answer:
          'Oui. Le détail indique le total des jours de week-end (samedis et dimanches) à côté des jours de semaine, pour que vous puissiez planifier des voyages, des quarts ou des échéances qui s’étendent sur des week-ends.',
      },
      {
        question: 'Comment la calculatrice de différence de dates gère-t-elle les années bissextiles ?',
        answer:
          'Elle utilise une vraie arithmétique calendaire : le 29 février est compté les années bissextiles et les durées qui traversent février d’une année bissextile incluent automatiquement le jour supplémentaire.',
      },
      {
        question: 'Puis-je utiliser la calculatrice de différence de dates pour savoir combien de jours restent avant une date ?',
        answer:
          'Oui. Définissez la date de début sur aujourd’hui et la date de fin sur votre date cible, et le résultat en jours totaux vous indique exactement combien de jours restent.',
      },
      {
        question: 'La calculatrice de différence de dates fonctionne-t-elle sur plusieurs années ?',
        answer:
          'Oui. Vous pouvez comparer des dates séparées de plusieurs années, et le résultat décompose la durée en années complètes, en mois restants et en jours restants.',
      },
      {
        question: 'Que se passe-t-il si la date de fin est avant la date de début ?',
        answer:
          'Utilisez le bouton d’échange pour inverser les deux dates. L’outil est conçu pour comparer une date de début avec une date de fin ultérieure, donc l’échange vous donne la durée positive correcte.',
      },
      {
        question: 'Puis-je ajouter des années, des mois et des jours à une date en même temps ?',
        answer:
          'Oui. En mode Ajouter / Soustraire, vous pouvez saisir une combinaison d’années, de mois et de jours, et l’outil applique tout l’intervalle à votre date de référence en une seule étape.',
      },
      {
        question: 'La calculatrice de différence de dates tient-elle compte du changement d’heure ?',
        answer:
          'Oui, en effet. Elle utilise l’arithmétique calendaire UTC, donc les journées de 23 et 25 heures autour des changements d’heure ne peuvent pas décaler le résultat d’un jour.',
      },
      {
        question: 'Comment compter les jours ouvrés pour une échéance de projet ?',
        answer:
          'Saisissez les dates de début et de fin du projet et lisez le nombre de jours de semaine, soit du lundi au vendredi. N’oubliez pas que les jours fériés ne sont pas soustraits : ajustez le compte si des jours fériés tombent dans la durée.',
      },
      {
        question: 'La calculatrice de différence de dates est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite dans votre navigateur, sans compte, sans inscription et sans limite de nombre de durées calculées.',
      },
      {
        question: 'La calculatrice de différence de dates enregistre-t-elle ou envoie-t-elle mes dates ?',
        answer:
          'Non. Tous les calculs s’exécutent localement dans votre navigateur, et les dates que vous saisissez ne sont jamais envoyées ni enregistrées sur un serveur.',
      },
      {
        question: 'Puis-je calculer la différence entre des dates dans des fuseaux horaires différents ?',
        answer:
          'L’outil compare des dates calendaires, et non des heures de la journée, donc les fuseaux horaires ne changent pas le résultat. Choisissez les dates telles qu’elles apparaissent sur chaque calendrier local.',
      },
      {
        question: 'Que change l’option de date de fin incluse dans le résultat ?',
        answer:
          'Elle ajoute exactement un jour calendaire au total : un compte inclusif du lundi au vendredi devient donc 5 jours au lieu de 4. Le détail en années, mois et jours se met à jour en conséquence.',
      },
      {
        question: 'La calculatrice de différence de dates peut-elle ajouter 90 jours à une date de contrat ?',
        answer:
          'Oui. Choisissez Ajouter / Soustraire, saisissez la date du contrat, ajoutez 90 jours, et l’outil affiche la date résultante exacte, y compris le passage de mois et d’année.',
      },
      {
        question: 'Pourquoi février modifie-t-il parfois le résultat de mon ajout de mois ?',
        answer:
          'L’ajout de mois s’ajuste au dernier jour valide du mois cible : le 31 janvier plus un mois tombe donc sur le 28 ou le 29 février au lieu du 2 ou du 3 mars.',
      },
    ],
  },
  'time-duration-calculator': {
    instructions: [
      {
        title: 'Choisissez le mode Temps écoulé ou Addition de durées',
        description:
          'Utilisez Temps écoulé entre deux heures pour vérifier le début et la fin d’un quart, ou Addition de durées de feuille de temps pour additionner plusieurs blocs.',
      },
      {
        title: 'Saisissez les heures et la pause facultative',
        description:
          'Définissez l’heure de début, l’heure de fin et toute pause non payée en minutes ; activez le passage de nuit si un quart traverse minuit.',
      },
      {
        title: 'Activez le passage de nuit pour les quarts de nuit',
        description:
          'Activez l’option de nuit quand l’heure de fin est antérieure à l’heure de début, pour qu’un quart traversant minuit soit compté correctement.',
      },
      {
        title: 'Consultez le détail de la durée nette',
        description:
          'Vérifiez ensemble les HH:MM:SS, le total en minutes, le total en secondes et les heures décimales avant d’utiliser le résultat.',
      },
      {
        title: 'Copiez les HH:MM:SS ou les heures décimales',
        description:
          'Utilisez les HH:MM:SS pour les journaux ou les heures décimales (par exemple 7,50 h) pour la facturation et les feuilles de paie.',
      },
      {
        title: 'Corrigez un résultat qui semble faux',
        description:
          'Si le total semble trop court, vérifiez d’abord la durée de la pause et le basculement de nuit, puis confirmez que les heures de début et de fin ne sont pas inversées.',
      },
    ],
    examples: [
      {
        title: 'Quart de travail standard avec une pause de 30 minutes',
        input: 'Début : 09:00:00 · Fin : 17:30:00 · Pause : 30 min',
        output: 'Durée nette : 08:00:00 · Décimal : 8,00 h · 480 min',
        explanation:
          '8,5 heures écoulées moins 0,5 heure de pause non payée équivalent à 8,00 heures facturables.',
      },
      {
        title: 'Quart de nuit traversant minuit',
        input: 'Début : 22:00:00 · Fin : 06:30:00 · Passage de nuit : activé',
        output: 'Durée nette : 08:30:00 · Décimal : 8,50 h · 510 min',
        explanation:
          'L’heure de fin est traitée comme le lendemain, donc le quart de nuit complet est compté.',
      },
    ],
    benefits: [
      'Gère proprement les quarts de nuit traversant 00:00 avec un seul basculement',
      'Affiche ensemble les HH:MM:SS, les heures décimales, le total en minutes et le total en secondes',
      'L’additionneur dynamique à plusieurs lignes totalise des segments de travail ou des durées vidéo et audio illimités',
      'Empêche les déductions de pause supérieures à la durée totale du quart écoulé',
    ],
    useCases: [
      'Consigner les heures facturables des indépendants et déduire les pauses non payées',
      'Calculer les heures de quart de nuit hospitalières, logistiques ou hôtelières',
      'Additionner les horodatages d’épisodes de podcast, les durées de cours ou de listes de lecture',
      'Convertir des entrées de feuille de temps de 7 h 45 min en 7,75 heures décimales pour la facturation',
    ],
    faqs: [
      {
        question: 'Comment les heures décimales sont-elles calculées ?',
        answer:
          'Le total des secondes nettes est divisé par 3 600. Par exemple, 7 heures 45 minutes (27 900 secondes) équivalent à 7,75 heures décimales.',
      },
      {
        question: 'Cela prend-il en charge les quarts de nuit qui se terminent après minuit ?',
        answer:
          'Oui. Laissez cochée l’option « Traiter l’heure de fin antérieure à l’heure de début comme le lendemain » pour qu’un quart de 22:00 à 06:30 calcule précisément 8 heures 30 minutes.',
      },
      {
        question: 'Puis-je additionner des durées supérieures à 24 heures ?',
        answer:
          'Oui. Le mode Addition de durées de feuille de temps accumule les heures sans revenir à zéro à 24 et affiche aussi le nombre équivalent de jours de 24 heures.',
      },
      {
        question: 'Que mesure la calculatrice de durée de temps ?',
        answer:
          'Elle mesure le temps écoulé entre deux heures, ou le total de plusieurs lignes de durée, et affiche le résultat en HH:MM:SS, en heures décimales, en minutes et en secondes.',
      },
      {
        question: 'Comment saisir les heures dans la calculatrice de durée de temps ?',
        answer:
          'Saisissez une heure de début et une heure de fin en heures, minutes et secondes. En mode Addition de durées, saisissez plutôt chaque bloc comme sa propre ligne.',
      },
      {
        question: 'Comment la calculatrice de durée de temps déduit-elle une pause non payée ?',
        answer:
          'Elle soustrait les minutes de pause que vous saisissez du temps de quart écoulé : un quart de 8,5 heures avec une pause de 30 minutes donne donc 8,00 heures nettes.',
      },
      {
        question: 'Que se passe-t-il si ma pause est plus longue que mon quart ?',
        answer:
          'L’outil empêche une déduction de pause supérieure à la durée totale du quart écoulé, donc la durée nette ne peut pas passer sous zéro.',
      },
      {
        question: 'La calculatrice de durée de temps peut-elle gérer les quarts qui commencent avant minuit et se terminent après ?',
        answer:
          'Oui. Activez le passage de nuit pour qu’une heure de fin antérieure à l’heure de début soit traitée comme le lendemain, et tout le quart de nuit est compté.',
      },
      {
        question: 'Quelle est la différence entre le temps écoulé et la durée nette ?',
        answer:
          'Le temps écoulé est la durée complète du début à la fin. La durée nette est le temps écoulé moins toute pause non payée, soit le chiffre généralement facturé ou payé.',
      },
      {
        question: 'Comment additionner plusieurs blocs de travail distincts ?',
        answer:
          'Basculez en mode Addition de durées de feuille de temps, ajoutez une ligne par bloc de travail avec ses heures, minutes et secondes, et l’outil totalise toutes les lignes à la fois.',
      },
      {
        question: 'Puis-je utiliser la calculatrice de durée de temps pour les durées vidéo ou audio ?',
        answer:
          'Oui. Ajoutez chaque durée d’épisode, de cours ou de piste comme une ligne en mode Addition de durées pour obtenir la durée combinée d’une liste de lecture ou d’un cours.',
      },
      {
        question: 'La calculatrice de durée de temps arrondit-elle les minutes ou les secondes ?',
        answer:
          'Non, elle calcule à partir des secondes exactes et affiche le résultat précis en HH:MM:SS avec l’équivalent en heures décimales, donc rien n’est arrondi en silence.',
      },
      {
        question: 'Que signifient 7,75 heures décimales en heures et en minutes ?',
        answer:
          'Cela signifie 7 heures et 45 minutes. La partie après la virgule est une fraction d’heure : 0,75 d’heure équivaut donc à 45 minutes.',
      },
      {
        question: 'La calculatrice de durée de temps est-elle gratuite ?',
        answer:
          'Oui, elle est entièrement gratuite dans votre navigateur, sans compte, sans inscription et sans limite de nombre de durées calculées.',
      },
      {
        question: 'La calculatrice de durée de temps enregistre-t-elle ou envoie-t-elle mes heures ?',
        answer:
          'Non. Tous les calculs s’exécutent localement dans votre navigateur, et les heures et durées que vous saisissez ne sont jamais envoyées ni enregistrées sur un serveur.',
      },
      {
        question: 'Puis-je calculer une durée sur plus d’un jour ?',
        answer:
          'Oui. Le mode Addition de durées totalise les heures sans revenir à zéro à 24, et il indique aussi à combien de jours de 24 heures le total équivaut.',
      },
      {
        question: 'Pourquoi mon quart affiche-t-il une durée négative ou nulle ?',
        answer:
          'Cela signifie généralement que l’heure de fin est antérieure à l’heure de début sans passage de nuit activé, ou que la pause est aussi longue que le quart. Vérifiez d’abord le basculement de nuit et la durée de la pause.',
      },
      {
        question: 'Comment convertir des minutes en heures décimales avec cet outil ?',
        answer:
          'Saisissez le temps comme une ligne de durée ou utilisez le résultat écoulé, et lisez le chiffre des heures décimales. Par exemple, 90 minutes s’affichent comme 1,50 heure décimale.',
      },
      {
        question: 'La calculatrice de durée de temps peut-elle additionner des heures au format HH:MM:SS ?',
        answer:
          'Oui. Chaque ligne de durée accepte des heures, des minutes et des secondes, et le total s’affiche en HH:MM:SS ainsi qu’en heures décimales.',
      },
      {
        question: 'Que dois-je vérifier si le total de ma feuille de temps ne correspond pas à mes heures ?',
        answer:
          'Vérifiez que chaque ligne a été saisie dans le bon mode, qu’aucune pause n’a été comptée deux fois et que les quarts de nuit ont l’option de passage activée.',
      },
    ],
  },
  'unit-converter': {
    instructions: [
      {
        title: 'Choisissez une catégorie de mesure',
        description:
          'Sélectionnez Longueur, Poids et masse, Température, Surface, Volume, Vitesse ou Stockage numérique dans la barre du haut.',
      },
      {
        title: 'Saisissez la valeur et choisissez les unités',
        description:
          'Tapez n’importe quelle valeur numérique et choisissez vos unités De et Vers (cliquez sur Échanger à tout moment pour inverser).',
      },
      {
        title: 'Inversez le sens de la conversion',
        description:
          'Cliquez sur Échanger pour inverser instantanément les unités De et Vers sans retaper la valeur.',
      },
      {
        title: 'Lisez le résultat converti exact',
        description:
          'Vérifiez la valeur cible formatée, y compris les décimales, avant de la copier dans votre document ou votre calcul.',
      },
      {
        title: 'Copiez le résultat ou parcourez toutes les unités',
        description:
          'Copiez le résultat cible formaté ou lisez le tableau des valeurs équivalentes pour chaque unité de la famille.',
      },
      {
        title: 'Vérifiez les particularités du stockage ou de la température',
        description:
          'Pour le stockage, confirmez si vous avez besoin de Go décimaux ou de Gio binaires, et pour la température, notez que les valeurs sous le zéro absolu sont bloquées.',
      },
    ],
    examples: [
      {
        title: 'Gigaoctet décimal contre gibioctet binaire',
        input: 'Catégorie : Stockage numérique · 1 000 Go → Gio',
        output: '931,32257 Gio',
        explanation:
          'Explique pourquoi un disque de 1 To (1 000 Go) affiche environ 931 Gio dans les systèmes d’exploitation de bureau.',
      },
      {
        title: 'Conversion de température Celsius vers Fahrenheit',
        input: 'Catégorie : Température · 20 °C → °F',
        output: '68 °F',
        explanation:
          'Calculé comme (20 × 9/5) + 32 = 68 °F.',
      },
    ],
    benefits: [
      'Utilise les constantes de conversion internationales exactes NIST/SI (par exemple 1 po = 0,0254 m exactement)',
      'Sépare le stockage décimal SI (Ko/Mo/Go) du stockage binaire CEI (Kio/Mio/Gio)',
      'Valide les limites physiques de température (jamais sous le zéro absolu 0 K / -273,15 °C)',
      'Affiche un tableau de comparaison complet pour chaque unité de la catégorie active',
    ],
    useCases: [
      'Convertir des plans techniques entre millimètres, pouces et pieds',
      'Vérifier les volumes liquides de cuisine entre millilitres, tasses et gallons',
      'Traduire les températures météo ou de laboratoire Celsius en Fahrenheit et en Kelvin',
      'Contrôler les tailles de disque cloud entre Go décimaux et Gio binaires',
    ],
    faqs: [
      {
        question: 'Pourquoi le stockage numérique sépare-t-il Go et Gio ?',
        answer:
          'Les fabricants de stockage utilisent des préfixes SI en base 10 (1 Go = 1 000³ octets), tandis que de nombreux utilitaires de système d’exploitation utilisent des tailles binaires en base 2 (1 Gio = 1 024³ octets). Les garder distincts élimine toute confusion.',
      },
      {
        question: 'Les unités de volume usuelles américaines sont-elles utilisées pour les tasses, les pintes et les gallons ?',
        answer:
          'Oui. Les onces liquides, les tasses, les pintes, les quarts et les gallons utilisent les définitions liquides usuelles américaines (1 gallon US = 3,785411784 L exactement).',
      },
      {
        question: 'Pourquoi le convertisseur de température bloque-t-il les valeurs sous -273,15 °C ?',
        answer:
          'Le zéro absolu (0 K / -273,15 °C / -459,67 °F) est la limite inférieure physique de la température thermodynamique.',
      },
      {
        question: 'Quelles unités le convertisseur d’unités peut-il convertir ?',
        answer:
          'Il couvre sept familles : longueur, poids et masse, température, surface, volume, vitesse et stockage numérique, avec de nombreuses unités dans chaque famille.',
      },
      {
        question: 'Quelle est la précision des résultats du convertisseur d’unités ?',
        answer:
          'Les résultats utilisent les constantes de conversion internationales exactes NIST et SI, comme 1 pouce égal à 0,0254 mètre exactement, donc les calculs sont aussi précis que la valeur que vous saisissez.',
      },
      {
        question: 'Le convertisseur d’unités est-il gratuit ?',
        answer:
          'Oui, il est entièrement gratuit dans votre navigateur, sans compte, sans inscription et sans limite de nombre de conversions.',
      },
      {
        question: 'Comment convertir des kilomètres en miles avec le convertisseur d’unités ?',
        answer:
          'Choisissez la catégorie Longueur, saisissez vos kilomètres, choisissez kilomètres comme unité De et miles comme unité Vers, et la valeur convertie apparaît instantanément.',
      },
      {
        question: 'Comment convertir des kilogrammes en livres ?',
        answer:
          'Choisissez la catégorie Poids et masse, saisissez les kilogrammes, choisissez kilogrammes comme unité De et livres comme unité Vers, et lisez le résultat ou le tableau de comparaison complet.',
      },
      {
        question: 'Quelle est la différence entre un litre et un gallon US ?',
        answer:
          'Un litre est une unité de volume métrique, tandis qu’un gallon US est une unité liquide usuelle américaine égale à 3,785411784 litres exactement. Le convertisseur utilise ce facteur exact.',
      },
      {
        question: 'Le convertisseur d’unités peut-il convertir Celsius en Fahrenheit et en Kelvin ?',
        answer:
          'Oui. Choisissez la catégorie Température et n’importe quelle paire parmi Celsius, Fahrenheit et Kelvin, et l’outil convertit entre elles avec les formules standard.',
      },
      {
        question: 'Pourquoi 1 To s’affiche-t-il comme environ 931 Gio dans le convertisseur d’unités ?',
        answer:
          'Un disque de 1 To contient 1 000 Go en termes décimaux, mais les systèmes d’exploitation affichent souvent des gibioctets binaires, et 1 000 Go équivalent à environ 931 Gio, car chaque Gio vaut 1 024³ octets.',
      },
      {
        question: 'Le convertisseur d’unités fonctionne-t-il hors ligne dans mon navigateur ?',
        answer:
          'Oui. Toutes les conversions s’exécutent localement dans votre navigateur avec des constantes intégrées, donc aucune connexion Internet ni envoi n’est nécessaire une fois la page chargée.',
      },
      {
        question: 'Le convertisseur d’unités enregistre-t-il ou envoie-t-il mes nombres ?',
        answer:
          'Non. Chaque conversion s’exécute localement dans votre navigateur, et les valeurs que vous saisissez ne sont jamais envoyées ni enregistrées sur un serveur.',
      },
      {
        question: 'Puis-je convertir la vitesse entre km/h et mph ?',
        answer:
          'Oui. Choisissez la catégorie Vitesse, saisissez la valeur en km/h, choisissez mph comme unité Vers, et l’outil la convertit instantanément.',
      },
      {
        question: 'Comment convertir des mètres carrés en pieds carrés ?',
        answer:
          'Choisissez la catégorie Surface, saisissez les mètres carrés, choisissez mètres carrés comme unité De et pieds carrés comme unité Vers, et la surface convertie apparaît immédiatement.',
      },
      {
        question: 'Quelle est la différence entre Ko décimal et Kio binaire ?',
        answer:
          'Un kilooctet décimal (Ko) vaut 1 000 octets, tandis qu’un kibioctet binaire (Kio) vaut 1 024 octets. Le convertisseur garde les deux systèmes séparés pour que les tailles de stockage ne soient jamais confondues.',
      },
      {
        question: 'Le convertisseur d’unités gère-t-il les très grands ou les très petits nombres ?',
        answer:
          'Oui. Vous pouvez saisir de grandes valeurs comme des milliers de kilomètres ou de minuscules valeurs comme des fractions de millimètre, et le résultat s’affiche avec une précision décimale complète.',
      },
      {
        question: 'Quelle échelle de température dois-je utiliser pour la cuisine ou la météo ?',
        answer:
          'La plupart des recettes et des bulletins météo hors des États-Unis utilisent Celsius, tandis que les recettes et la météo américaines utilisent Fahrenheit. Kelvin est surtout utilisé en science et en laboratoire.',
      },
      {
        question: 'Comment convertir des millilitres en tasses pour une recette ?',
        answer:
          'Choisissez la catégorie Volume, saisissez les millilitres, choisissez millilitres comme unité De et tasses US comme unité Vers, et l’outil donne l’équivalent en tasses pour votre recette.',
      },
      {
        question: 'Pourquoi mes valeurs converties affichent-elles beaucoup de décimales ?',
        answer:
          'L’outil affiche une précision complète pour que les travaux d’ingénierie et de science restent précis. Pour un usage quotidien, arrondissez simplement le résultat aux décimales dont vous avez besoin.',
      },
    ],
  },
  // Minimal record (EN-first launch): empty guide arrays satisfy the
  // prerender's hard detail requirement; translated guide content lands
  // in a later phase. Guide sections stay hidden until then.
  'roman-numeral-converter': {
    instructions: [],
    examples: [],
    benefits: [],
    useCases: [],
    faqs: [],
  },
  // Minimal record (EN-first launch): empty guide arrays satisfy the
  // prerender's hard detail requirement; translated guide content lands
  // in a later phase. Guide sections stay hidden until then.
  'online-hourly-calculator': {
    instructions: [],
    examples: [],
    benefits: [],
    useCases: [],
    faqs: [],
  },
};
