import {
  AlertCircle,
  ArrowLeftRight,
  CheckCircle2,
  Columns2,
  Download,
  FileText,
  Loader2,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Square,
  Wand2,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';
import {
  fetchAiHealth,
  postAiJson,
  type AiErrorResponse,
  type QuotaStatus,
  type WritingRequestPayload,
  type WritingTask,
  type WritingTone,
} from '../../config/ai';

const MAX_CHARS = 12_000;

const STRINGS = {
  en: {
    tasks: {
      'fix-grammar': { label: 'Fix Grammar', hint: 'Correct grammar & punctuation' },
      'rewrite-text': { label: 'Rewrite Text', hint: 'Smooth flow & natural phrasing' },
      'improve-writing': { label: 'Improve Writing', hint: 'Polish clarity & word choice' },
      'make-professional': { label: 'Make Professional', hint: 'Workplace & executive clarity' },
      'make-casual': { label: 'Make Casual', hint: 'Relaxed everyday voice' },
      'simplify-text': { label: 'Simplify Text', hint: 'Clear, easy-to-read sentences' },
      'expand-text': { label: 'Expand Text', hint: 'Add helpful detail grounded in input' },
      paraphrase: { label: 'Paraphrase', hint: 'Fresh wording, same meaning' },
      'fix-spelling': { label: 'Fix Spelling', hint: 'Fix typos & capitalization only' },
      'write-email': { label: 'Write an Email', hint: 'Structured email with subject line' },
    },
    tones: {
      professional: 'Professional',
      friendly: 'Friendly',
      formal: 'Formal',
      casual: 'Casual',
      academic: 'Academic',
      persuasive: 'Persuasive',
      simple: 'Simple',
    },
    languageLabels: {
      'English (US)': 'English (US)',
      'English (UK)': 'English (UK)',
      Spanish: 'Spanish',
      French: 'French',
      German: 'German',
      Portuguese: 'Portuguese',
      Italian: 'Italian',
      Dutch: 'Dutch',
      Arabic: 'Arabic',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turkish',
      Japanese: 'Japanese',
      Korean: 'Korean',
      'Chinese (Simplified)': 'Chinese (Simplified)',
      'Same as original language': 'Same as original language',
    },
    samples: {
      default:
        'Hi team, i wanted to folow up on yesterday meeting and share the update timeline for our Q4 product launch. Their are still two items we need review before friday, so please let me know if any blockers comes up.',
      'write-email':
        'need to update client Daniel about the mobile app launch. testing finished today, 2 minor UI bugs left to fix tomorrow morning, ready for App Store submission on Friday afternoon. ask if Monday 10am works for handoff call.',
      'fix-spelling':
        'We are delited to anounce that the quarterly maintenence window went smothly with zero unplaned downtime across all servrs.',
      'expand-text':
        'Remote async standups save engineering time and let global teammates focus deeply without constant calendar interruptions.',
    },
    title: 'Free AI Writing Assistant',
    noLogin: 'No login or card required',
    allowanceBefore: 'Daily free allowance:',
    allowanceAfter: 'left today',
    allowanceFallback: 'Up to 5 free requests / day',
    backendTitle: 'AI backend key is not active yet in this environment.',
    backendSet: 'Set',
    backendRest: 'on the server or Worker to enable live AI writing generation.',
    stepTask: '1. Choose Writing Task (10 Modes)',
    stepTone: '2. Tone',
    stepLanguage: '3. Output Language',
    stepText: '4. Your Original Text',
    taskSelectorAria: 'Writing task selector',
    placeholder:
      'Type or paste your paragraph, message, notes, or email draft here (up to 12,000 characters)...',
    word: 'word',
    words: 'words',
    characters: 'characters',
    chars: 'chars',
    tip: 'Tip: Press Ctrl + Enter to generate',
    stop: 'Stop',
    generating: 'Generating...',
    applying: 'Applying',
    tonePhrase: '{tone} tone',
    applyingIn: 'in',
    errorDailyLimit: 'Daily Free Limit Reached',
    errorRateLimited: 'Please Slow Down Slightly',
    errorGlobal: 'Platform Daily Capacity Reached',
    errorGeneric: 'Unable to Complete Writing Request',
    retry: 'Retry',
    emptyError: 'Please enter or paste some text before clicking Generate.',
    overLimitBefore: 'Input exceeds the ',
    overLimitMiddle: ' character limit. Shorten your draft by ',
    overLimitAfter: ' characters and try again.',
    connectionError: 'Temporary connection issue while generating. Please try again.',
    resultTitle: 'Improved Output',
    copyResult: 'Copy result',
    downloadTxt: 'Download TXT',
    editOutput: 'Edit output further',
    tabCompare: 'Original vs. Improved',
    tabDiff: 'Highlight Changes',
    tabResult: 'Result Only',
    resultAria: 'Improved writing result and comparison',
    originalText: 'Original Text',
    improvedText: 'Improved Text',
    removed: 'Removed',
    added: 'Added / Updated',
    processedWith: 'Processed with free-tier Groq model',
    fallbackNote: ' (automatic model fallback)',
    reviewNote: '. Always review final copy before sending.',
  },
  es: {
    tasks: {
      'fix-grammar': { label: 'Corregir gramática', hint: 'Corrige la gramática y la puntuación' },
      'rewrite-text': { label: 'Reescribir texto', hint: 'Flujo fluido y fraseo natural' },
      'improve-writing': { label: 'Mejorar redacción', hint: 'Pule la claridad y la elección de palabras' },
      'make-professional': { label: 'Hacerlo profesional', hint: 'Claridad laboral y ejecutiva' },
      'make-casual': { label: 'Hacerlo informal', hint: 'Tono relajado y cotidiano' },
      'simplify-text': { label: 'Simplificar texto', hint: 'Oraciones claras y fáciles de leer' },
      'expand-text': { label: 'Ampliar texto', hint: 'Agrega detalles útiles basados en el texto' },
      paraphrase: { label: 'Parafrasear', hint: 'Nueva redacción, mismo significado' },
      'fix-spelling': { label: 'Corregir ortografía', hint: 'Corrige solo errores tipográficos y mayúsculas' },
      'write-email': { label: 'Escribir un correo', hint: 'Correo estructurado con asunto' },
    },
    tones: {
      professional: 'Profesional',
      friendly: 'Amistoso',
      formal: 'Formal',
      casual: 'Informal',
      academic: 'Académico',
      persuasive: 'Persuasivo',
      simple: 'Sencillo',
    },
    languageLabels: {
      'English (US)': 'Inglés (EE. UU.)',
      'English (UK)': 'Inglés (Reino Unido)',
      Spanish: 'Español',
      French: 'Francés',
      German: 'Alemán',
      Portuguese: 'Portugués',
      Italian: 'Italiano',
      Dutch: 'Neerlandés',
      Arabic: 'Árabe',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turco',
      Japanese: 'Japonés',
      Korean: 'Coreano',
      'Chinese (Simplified)': 'Chino (simplificado)',
      'Same as original language': 'Igual que el idioma original',
    },
    samples: {
      default:
        'Hola equipo, queria hacer seguimiento de la reunion de ayer y compartir la cronologia actualizada para el lanzamiento de nuestro producto del cuarto trimestre. Todavia hay dos puntos que nesecitamos revisar antes del viernes, asi que avisenme si surge algun inconveniente.',
      'write-email':
        'necesito avisar al cliente Daniel sobre el lanzamiento de la aplicacion movil. las pruebas terminaron hoy, quedan 2 errores menores de interfaz por corregir mañana por la mañana, y estara lista para enviar a la App Store el viernes por la tarde. preguntale si el lunes a las 10 a. m. le funciona para la llamada de entrega.',
      'fix-spelling':
        'Estamos encantados de anunciar que la ventana de mantenimiento trimestral transcurrio sin problemas y sin tiempo de inactividad no planeado en todos los servidores.',
      'expand-text':
        'Las reuniones breves asincronas a distancia ahorran tiempo a los ingenieros y permiten que los compañeros de todo el mundo se concentren sin interrupciones constantes del calendario.',
    },
    title: 'Asistente de escritura con IA gratuito',
    noLogin: 'No requiere registro ni tarjeta',
    allowanceBefore: 'Asignación gratuita diaria:',
    allowanceAfter: 'restantes hoy',
    allowanceFallback: 'Hasta 5 solicitudes gratuitas al día',
    backendTitle: 'La clave del backend de IA aún no está activa en este entorno.',
    backendSet: 'Configura',
    backendRest: 'en el servidor o Worker para activar la generación de texto con IA.',
    stepTask: '1. Elige la tarea de escritura (10 modos)',
    stepTone: '2. Tono',
    stepLanguage: '3. Idioma de salida',
    stepText: '4. Tu texto original',
    taskSelectorAria: 'Selector de tarea de escritura',
    placeholder:
      'Escribe o pega tu párrafo, mensaje, notas o borrador de correo aquí (hasta 12,000 caracteres)...',
    word: 'palabra',
    words: 'palabras',
    characters: 'caracteres',
    chars: 'caracteres',
    tip: 'Consejo: pulsa Ctrl + Intro para generar',
    stop: 'Detener',
    generating: 'Generando...',
    applying: 'Aplicando',
    tonePhrase: 'tono {tone}',
    applyingIn: 'en',
    errorDailyLimit: 'Límite diario gratuito alcanzado',
    errorRateLimited: 'Reduce un poco el ritmo',
    errorGlobal: 'Capacidad diaria de la plataforma alcanzada',
    errorGeneric: 'No se pudo completar la solicitud de escritura',
    retry: 'Reintentar',
    emptyError: 'Ingresa o pega un texto antes de hacer clic en Generar.',
    overLimitBefore: 'La entrada supera el límite de ',
    overLimitMiddle: ' caracteres. Acorta tu borrador en ',
    overLimitAfter: ' caracteres e inténtalo de nuevo.',
    connectionError: 'Problema temporal de conexión al generar. Inténtalo de nuevo.',
    resultTitle: 'Resultado mejorado',
    copyResult: 'Copiar resultado',
    downloadTxt: 'Descargar TXT',
    editOutput: 'Seguir editando el resultado',
    tabCompare: 'Original vs. mejorado',
    tabDiff: 'Resaltar cambios',
    tabResult: 'Solo resultado',
    resultAria: 'Resultado de escritura mejorado y comparación',
    originalText: 'Texto original',
    improvedText: 'Texto mejorado',
    removed: 'Eliminado',
    added: 'Agregado / actualizado',
    processedWith: 'Procesado con el modelo Groq de nivel gratuito',
    fallbackNote: ' (cambio automático de modelo)',
    reviewNote: '. Revisa siempre el texto final antes de enviarlo.',
  },
  pt: {
    tasks: {
      'fix-grammar': {
        label: 'Corrigir gramática',
        hint: 'Corrige gramática e pontuação',
      },
      'rewrite-text': {
        label: 'Reescrever texto',
        hint: 'Fluxo suave e fraseado natural',
      },
      'improve-writing': {
        label: 'Melhorar a escrita',
        hint: 'Aprimora clareza e escolha de palavras',
      },
      'make-professional': {
        label: 'Tornar profissional',
        hint: 'Clareza para o trabalho e executivos',
      },
      'make-casual': {
        label: 'Tornar informal',
        hint: 'Tom relaxado e cotidiano',
      },
      'simplify-text': {
        label: 'Simplificar texto',
        hint: 'Frases claras e fáceis de ler',
      },
      'expand-text': {
        label: 'Expandir texto',
        hint: 'Adiciona detalhes úteis com base no texto',
      },
      paraphrase: {
        label: 'Parafrasear',
        hint: 'Nova redação, mesmo significado',
      },
      'fix-spelling': {
        label: 'Corrigir ortografia',
        hint: 'Corrige apenas erros de digitação e maiúsculas',
      },
      'write-email': {
        label: 'Escrever um e-mail',
        hint: 'E-mail estruturado com linha de assunto',
      },
    },
    tones: {
      professional: 'Profissional',
      friendly: 'Amigável',
      formal: 'Formal',
      casual: 'Informal',
      academic: 'Acadêmico',
      persuasive: 'Persuasivo',
      simple: 'Simples',
    },
    languageLabels: {
      'English (US)': 'Inglês (EUA)',
      'English (UK)': 'Inglês (Reino Unido)',
      Spanish: 'Espanhol',
      French: 'Francês',
      German: 'Alemão',
      Portuguese: 'Português',
      Italian: 'Italiano',
      Dutch: 'Holandês',
      Arabic: 'Árabe',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turco',
      Japanese: 'Japonês',
      Korean: 'Coreano',
      'Chinese (Simplified)': 'Chinês (simplificado)',
      'Same as original language': 'Igual ao idioma original',
    },
    samples: {
      default: 'Oi, pessoal, queria acompanhar a reunião de ontem e compartilhar o cronograma atualizado do lançamento do nosso produto do Q4. Ainda tem dois itens que prescisamos revisar antes de sexta-feira, então me avisa se surgir algum bloquio.',
      'write-email': 'preciso avisar o cliente Daniel sobre o lançamento do aplicativo. os testes terminaram hoje, faltam 2 pequenos bugs de interface para corrigir amanhã de manhã, pronto para envio à App Store na sexta à tarde. pergunte se segunda às 10h funciona para a ligação de entrega.',
      'fix-spelling': 'Estamos muito contentes em anuciar que a janela de manutenção trimestral correu bem, com zero tempo de inatividade não planejado em todos os servdores.',
      'expand-text': 'As standups assíncronas remotas economizam tempo de engenharia e permitem que colegas do mundo todo se concentrem profundamente sem interrupções constantes do calendário.',
    },
    title: 'Assistente de escrita com IA gratuito',
    noLogin: 'Sem login ou cartão',
    allowanceBefore: 'Cota diária gratuita:',
    allowanceAfter: 'restantes hoje',
    allowanceFallback: 'Até 5 solicitações grátis por dia',
    backendTitle: 'A chave do backend de IA ainda não está ativa neste ambiente.',
    backendSet: 'Configure',
    backendRest: 'no servidor ou Worker para ativar a geração de texto com IA ao vivo.',
    stepTask: '1. Escolha a tarefa de escrita (10 modos)',
    stepTone: '2. Tom',
    stepLanguage: '3. Idioma de saída',
    stepText: '4. Seu texto original',
    taskSelectorAria: 'Seletor de tarefa de escrita',
    placeholder: 'Digite ou cole seu parágrafo, mensagem, notas ou rascunho de e-mail aqui (até 12.000 caracteres)...',
    word: 'palavra',
    words: 'palavras',
    characters: 'caracteres',
    chars: 'caracteres',
    tip: 'Dica: pressione Ctrl + Enter para gerar',
    stop: 'Parar',
    generating: 'Gerando...',
    applying: 'Aplicando',
    tonePhrase: 'tom {tone}',
    applyingIn: 'em',
    errorDailyLimit: 'Limite diário gratuito atingido',
    errorRateLimited: 'Diminua um pouco o ritmo',
    errorGlobal: 'Capacidade diária da plataforma atingida',
    errorGeneric: 'Não foi possível concluir a solicitação de escrita',
    retry: 'Tentar novamente',
    emptyError: 'Digite ou cole um texto antes de clicar em Gerar.',
    overLimitBefore: 'A entrada excede o limite de ',
    overLimitMiddle: ' caracteres. Encurte seu rascunho em ',
    overLimitAfter: ' caracteres e tente novamente.',
    connectionError: 'Problema temporário de conexão ao gerar. Tente novamente.',
    resultTitle: 'Resultado melhorado',
    copyResult: 'Copiar resultado',
    downloadTxt: 'Baixar TXT',
    editOutput: 'Editar o resultado',
    tabCompare: 'Original vs. melhorado',
    tabDiff: 'Destacar alterações',
    tabResult: 'Somente resultado',
    resultAria: 'Resultado de escrita melhorado e comparação',
    originalText: 'Texto original',
    improvedText: 'Texto melhorado',
    removed: 'Removido',
    added: 'Adicionado / atualizado',
    processedWith: 'Processado com o modelo Groq de nível gratuito',
    fallbackNote: ' (alternativa automática de modelo)',
    reviewNote: '. Sempre revise o texto final antes de enviar.',
  },
  fr: {
    tasks: {
      'fix-grammar': {
        label: 'Corriger la grammaire',
        hint: 'Corrige la grammaire et la ponctuation',
      },
      'rewrite-text': {
        label: 'Réécrire le texte',
        hint: 'Fluidité et formulation naturelle',
      },
      'improve-writing': {
        label: 'Améliorer la rédaction',
        hint: 'Clarifie et choisit mieux les mots',
      },
      'make-professional': {
        label: 'Rendre professionnel',
        hint: 'Clarté professionnelle et de direction',
      },
      'make-casual': {
        label: 'Rendre décontracté',
        hint: 'Ton détendu et quotidien',
      },
      'simplify-text': {
        label: 'Simplifier le texte',
        hint: 'Phrases claires et faciles à lire',
      },
      'expand-text': {
        label: 'Développer le texte',
        hint: 'Ajoute des détails utiles fondés sur le texte',
      },
      paraphrase: {
        label: 'Paraphraser',
        hint: 'Nouvelle formulation, même sens',
      },
      'fix-spelling': {
        label: 'Corriger l\'orthographe',
        hint: 'Corrige uniquement les fautes de frappe et les majuscules',
      },
      'write-email': {
        label: 'Rédiger un e-mail',
        hint: 'E-mail structuré avec objet',
      },
    },
    tones: {
      professional: 'Professionnel',
      friendly: 'Amical',
      formal: 'Formel',
      casual: 'Décontracté',
      academic: 'Académique',
      persuasive: 'Persuasif',
      simple: 'Simple',
    },
    languageLabels: {
      'English (US)': 'Anglais (États-Unis)',
      'English (UK)': 'Anglais (Royaume-Uni)',
      Spanish: 'Espagnol',
      French: 'Français',
      German: 'Allemand',
      Portuguese: 'Portugais',
      Italian: 'Italien',
      Dutch: 'Néerlandais',
      Arabic: 'Arabe',
      Hindi: 'Hindi',
      Urdu: 'Ourdou',
      Turkish: 'Turc',
      Japanese: 'Japonais',
      Korean: 'Coréen',
      'Chinese (Simplified)': 'Chinois (simplifié)',
      'Same as original language': 'Identique à la langue d\'origine',
    },
    samples: {
      default: 'Bonjour l\'équipe, je voulais faire le suivi de la reunion d\'hier et partager le calendrier actualisé pour le lancement de notre produit du T4. Il y a encore deux points que nous devons revoir avant vendredi, alors prévenez-moi si un bloquage survient.',
      'write-email': 'je dois prévenir le client Daniel du lancement de l\'application mobile. les tests sont terminés aujourd\'hui, il reste 2 petits bugs d\'interface à corriger demain matin, prêt pour la soumission à l\'App Store vendredi après-midi. demandez-lui si lundi 10h convient pour l\'appel de passation.',
      'fix-spelling': 'Nous sommes ravis d\'anonncer que la fenêtre de maintenance trimestrielle s\'est bien déroulée, avec zéro temps d\'arrêt imprévu sur tous les serveures.',
      'expand-text': 'Les stand-ups asynchrones à distance font gagner du temps aux ingénieurs et permettent aux collègues du monde entier de se concentrer sans interruptions constantes du calendrier.',
    },
    title: 'Assistant d\'écriture par IA gratuit',
    noLogin: 'Aucune connexion ni carte requise',
    allowanceBefore: 'Quota gratuit quotidien :',
    allowanceAfter: 'restants aujourd\'hui',
    allowanceFallback: 'Jusqu\'à 5 demandes gratuites par jour',
    backendTitle: 'La clé du backend IA n\'est pas encore active dans cet environnement.',
    backendSet: 'Configurez',
    backendRest: 'sur le serveur ou le Worker pour activer la génération d\'écriture par IA en direct.',
    stepTask: '1. Choisissez la tâche d\'écriture (10 modes)',
    stepTone: '2. Ton',
    stepLanguage: '3. Langue de sortie',
    stepText: '4. Votre texte d\'origine',
    taskSelectorAria: 'Sélecteur de tâche d\'écriture',
    placeholder: 'Saisissez ou collez votre paragraphe, message, notes ou brouillon d\'e-mail ici (jusqu\'à 12 000 caractères)...',
    word: 'mot',
    words: 'mots',
    characters: 'caractères',
    chars: 'caractères',
    tip: 'Astuce : appuyez sur Ctrl + Entrée pour générer',
    stop: 'Arrêter',
    generating: 'Génération en cours...',
    applying: 'Application du',
    tonePhrase: 'ton {tone}',
    applyingIn: 'en',
    errorDailyLimit: 'Limite gratuite quotidienne atteinte',
    errorRateLimited: 'Ralentissez légèrement',
    errorGlobal: 'Capacité quotidienne de la plateforme atteinte',
    errorGeneric: 'Impossible de terminer la demande d\'écriture',
    retry: 'Réessayer',
    emptyError: 'Veuillez saisir ou coller du texte avant de cliquer sur Générer.',
    overLimitBefore: 'La saisie dépasse la limite de ',
    overLimitMiddle: ' caractères. Raccourcissez votre brouillon de ',
    overLimitAfter: ' caractères et réessayez.',
    connectionError: 'Problème temporaire de connexion pendant la génération. Veuillez réessayer.',
    resultTitle: 'Résultat amélioré',
    copyResult: 'Copier le résultat',
    downloadTxt: 'Télécharger le TXT',
    editOutput: 'Modifier le résultat',
    tabCompare: 'Original vs amélioré',
    tabDiff: 'Surligner les modifications',
    tabResult: 'Résultat seul',
    resultAria: 'Résultat d\'écriture amélioré et comparaison',
    originalText: 'Texte d\'origine',
    improvedText: 'Texte amélioré',
    removed: 'Supprimé',
    added: 'Ajouté / mis à jour',
    processedWith: 'Traité avec le modèle Groq gratuit',
    fallbackNote: ' (repli automatique de modèle)',
    reviewNote: '. Relisez toujours le texte final avant de l\'envoyer.',
  },
  de: {
    tasks: {
      'fix-grammar': { label: 'Grammatik korrigieren', hint: 'Grammatik & Zeichensetzung korrigieren' },
      'rewrite-text': { label: 'Text umschreiben', hint: 'Flüssiger Ablauf & natürliche Formulierung' },
      'improve-writing': { label: 'Schreibstil verbessern', hint: 'Klarheit & Wortwahl polieren' },
      'make-professional': { label: 'Professionell formulieren', hint: 'Klarheit für Beruf & Führungsebene' },
      'make-casual': { label: 'Locker formulieren', hint: 'Entspannte Alltagssprache' },
      'simplify-text': { label: 'Text vereinfachen', hint: 'Klare, leicht lesbare Sätze' },
      'expand-text': { label: 'Text erweitern', hint: 'Hilfreiche Details aus der Eingabe ergänzen' },
      paraphrase: { label: 'Paraphrasieren', hint: 'Neue Formulierung, gleiche Bedeutung' },
      'fix-spelling': { label: 'Rechtschreibung korrigieren', hint: 'Nur Tippfehler & Großschreibung korrigieren' },
      'write-email': { label: 'E-Mail schreiben', hint: 'Strukturierte E-Mail mit Betreffzeile' },
    },
    tones: {
      professional: 'Professionell',
      friendly: 'Freundlich',
      formal: 'Formell',
      casual: 'Locker',
      academic: 'Wissenschaftlich',
      persuasive: 'Überzeugend',
      simple: 'Einfach',
    },
    languageLabels: {
      'English (US)': 'Englisch (USA)',
      'English (UK)': 'Englisch (UK)',
      Spanish: 'Spanisch',
      French: 'Französisch',
      German: 'Deutsch',
      Portuguese: 'Portugiesisch',
      Italian: 'Italienisch',
      Dutch: 'Niederländisch',
      Arabic: 'Arabisch',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Türkisch',
      Japanese: 'Japanisch',
      Korean: 'Koreanisch',
      'Chinese (Simplified)': 'Chinesisch (vereinfacht)',
      'Same as original language': 'Wie in der Originalsprache',
    },
    samples: {
      default:
        'Hallo Team, ich wollte mich wegen dem gestrigen Meeting melden und den Zeitplan für unser Q4 Produktlaunch teilen. Es gibt noch zwei Punkte die wir vor Freitag prüfen müssen, also sagt mir bitte bescheid falls Blocker auftauchen.',
      'write-email':
        'muss den Kunden Daniel über den Mobile-App-Launch updaten. Tests heute fertig, noch 2 kleine UI-Bugs morgen früh zu fixen, bereit für die App-Store-Einreichung am Freitagnachmittag. Fragen, ob Montag 10 Uhr für den Übergabe-Call passt.',
      'fix-spelling':
        'Wir freuen uns sehr bekantzugeben, dass das vierteljährliche Wartungsfenster reibunglos verlaufen ist, ohne ungeplante Ausfallzeiten auf allen Servern.',
      'expand-text':
        'Remote asynchrone Standups sparen Engineering-Zeit und lassen globale Teammitglieder sich tief konzentrieren, ohne ständige Kalenderunterbrechungen.',
    },
    title: 'Kostenloser KI-Schreibassistent',
    noLogin: 'Keine Anmeldung oder Karte erforderlich',
    allowanceBefore: 'Tägliches kostenloses Kontingent:',
    allowanceAfter: 'heute übrig',
    allowanceFallback: 'Bis zu 5 kostenlose Anfragen / Tag',
    backendTitle: 'Der KI-Backend-Schlüssel ist in dieser Umgebung noch nicht aktiv.',
    backendSet: 'Legen Sie',
    backendRest: 'auf dem Server oder Worker fest, um Live-KI-Textgenerierung zu aktivieren.',
    stepTask: '1. Schreibaufgabe wählen (10 Modi)',
    stepTone: '2. Ton',
    stepLanguage: '3. Ausgabesprache',
    stepText: '4. Ihr Originaltext',
    taskSelectorAria: 'Auswahl der Schreibaufgabe',
    placeholder:
      'Tippen oder fügen Sie hier Ihren Absatz, Ihre Nachricht, Notizen oder Ihren E-Mail-Entwurf ein (bis zu 12.000 Zeichen)...',
    word: 'Wort',
    words: 'Wörter',
    characters: 'Zeichen',
    chars: 'Zeichen',
    tip: 'Tipp: Strg + Eingabetaste drücken, um zu generieren',
    stop: 'Stopp',
    generating: 'Wird generiert...',
    applying: 'Anwenden:',
    tonePhrase: '{tone}-Ton',
    applyingIn: 'auf',
    errorDailyLimit: 'Tägliches kostenloses Limit erreicht',
    errorRateLimited: 'Bitte etwas langsamer',
    errorGlobal: 'Tägliche Plattformkapazität erreicht',
    errorGeneric: 'Schreibanfrage konnte nicht abgeschlossen werden',
    retry: 'Erneut versuchen',
    emptyError: 'Bitte geben Sie vor dem Generieren einen Text ein oder fügen Sie ihn ein.',
    overLimitBefore: 'Die Eingabe überschreitet das Limit von ',
    overLimitMiddle: ' Zeichen. Kürzen Sie Ihren Entwurf um ',
    overLimitAfter: ' Zeichen und versuchen Sie es erneut.',
    connectionError: 'Vorübergehendes Verbindungsproblem beim Generieren. Bitte versuchen Sie es erneut.',
    resultTitle: 'Verbesserte Ausgabe',
    copyResult: 'Ergebnis kopieren',
    downloadTxt: 'TXT herunterladen',
    editOutput: 'Ausgabe weiter bearbeiten',
    tabCompare: 'Original vs. verbessert',
    tabDiff: 'Änderungen hervorheben',
    tabResult: 'Nur Ergebnis',
    resultAria: 'Verbessertes Schreibergebnis und Vergleich',
    originalText: 'Originaltext',
    improvedText: 'Verbesserter Text',
    removed: 'Entfernt',
    added: 'Hinzugefügt / aktualisiert',
    processedWith: 'Verarbeitet mit kostenlosem Groq-Modell',
    fallbackNote: ' (automatischer Modell-Fallback)',
    reviewNote: '. Prüfen Sie den finalen Text immer vor dem Absenden.',
  },
  it: {
    tasks: {
      'fix-grammar': { label: 'Correggi grammatica', hint: 'Correggi grammatica e punteggiatura' },
      'rewrite-text': { label: 'Riscrivi testo', hint: 'Flusso fluido e fraseggio naturale' },
      'improve-writing': { label: 'Migliora scrittura', hint: 'Migliora chiarezza e scelta delle parole' },
      'make-professional': { label: 'Rendi professionale', hint: 'Chiarezza per lavoro e dirigenti' },
      'make-casual': { label: 'Rendi informale', hint: 'Voce quotidiana rilassata' },
      'simplify-text': { label: 'Semplifica testo', hint: 'Frasi chiare e facili da leggere' },
      'expand-text': { label: 'Espandi testo', hint: 'Aggiungi dettagli utili basati sull’input' },
      paraphrase: { label: 'Parafrasa', hint: 'Nuova formulazione, stesso significato' },
      'fix-spelling': { label: 'Correggi ortografia', hint: 'Correggi solo refusi e maiuscole' },
      'write-email': { label: 'Scrivi un’email', hint: 'Email strutturata con oggetto' },
    },
    tones: {
      professional: 'Professionale',
      friendly: 'Amichevole',
      formal: 'Formale',
      casual: 'Informale',
      academic: 'Accademico',
      persuasive: 'Persuasivo',
      simple: 'Semplice',
    },
    languageLabels: {
      'English (US)': 'Inglese (USA)',
      'English (UK)': 'Inglese (Regno Unito)',
      Spanish: 'Spagnolo',
      French: 'Francese',
      German: 'Tedesco',
      Portuguese: 'Portoghese',
      Italian: 'Italiano',
      Dutch: 'Olandese',
      Arabic: 'Arabo',
      Hindi: 'Hindi',
      Urdu: 'Urdu',
      Turkish: 'Turco',
      Japanese: 'Giapponese',
      Korean: 'Coreano',
      'Chinese (Simplified)': 'Cinese (semplificato)',
      'Same as original language': 'Stessa lingua dell’originale',
    },
    samples: {
      default:
        'Ciao team, volevo fare un follow up sulla riunione di ieri e condividere la timeline aggiornata per il lancio del nostro prodotto del Q4. Ci sono ancora due punti che dobbiamo rivedere prima di venerdi, quindi fatemi sapere se emergono dei blocchi.',
      'write-email':
        'devo aggiornare il cliente Daniel sul lancio dell’app mobile. test finiti oggi, restano 2 piccoli bug UI da correggere domani mattina, pronto per l’invio all’App Store venerdì pomeriggio. chiedi se lunedì alle 10 va bene per la call di passaggio.',
      'fix-spelling':
        'Siamo lieti di anunciare che la finestra di manutenzione trimestrale si è svolta senza intoppi, con zero tempi di inattività non pianificati su tutti i server.',
      'expand-text':
        'Gli stand-up asincroni da remoto fanno risparmiare tempo agli ingegneri e permettono ai colleghi di tutto il mondo di concentrarsi senza continue interruzioni del calendario.',
    },
    title: 'Assistente di scrittura AI gratuito',
    noLogin: 'Nessun accesso o carta richiesto',
    allowanceBefore: 'Quota gratuita giornaliera:',
    allowanceAfter: 'rimaste oggi',
    allowanceFallback: 'Fino a 5 richieste gratuite / giorno',
    backendTitle: 'La chiave backend AI non è ancora attiva in questo ambiente.',
    backendSet: 'Imposta',
    backendRest: 'sul server o sul Worker per abilitare la generazione AI live.',
    stepTask: '1. Scegli attività di scrittura (10 modalità)',
    stepTone: '2. Tono',
    stepLanguage: '3. Lingua di output',
    stepText: '4. Il tuo testo originale',
    taskSelectorAria: 'Selettore attività di scrittura',
    placeholder:
      'Scrivi o incolla qui paragrafo, messaggio, appunti o bozza email (fino a 12.000 caratteri)...',
    word: 'parola',
    words: 'parole',
    characters: 'caratteri',
    chars: 'caratteri',
    tip: 'Suggerimento: premi Ctrl + Invio per generare',
    stop: 'Interrompi',
    generating: 'Generazione in corso...',
    applying: 'Applicazione di',
    tonePhrase: 'tono {tone}',
    applyingIn: 'in',
    errorDailyLimit: 'Limite gratuito giornaliero raggiunto',
    errorRateLimited: 'Rallenta leggermente',
    errorGlobal: 'Capacità giornaliera della piattaforma raggiunta',
    errorGeneric: 'Impossibile completare la richiesta di scrittura',
    retry: 'Riprova',
    emptyError: 'Inserisci o incolla del testo prima di fare clic su Genera.',
    overLimitBefore: 'L’input supera il limite di ',
    overLimitMiddle: ' caratteri. Accorcia la bozza di ',
    overLimitAfter: ' caratteri e riprova.',
    connectionError: 'Problema temporaneo di connessione durante la generazione. Riprova.',
    resultTitle: 'Output migliorato',
    copyResult: 'Copia risultato',
    downloadTxt: 'Scarica TXT',
    editOutput: 'Modifica ulteriormente l’output',
    tabCompare: 'Originale vs. migliorato',
    tabDiff: 'Evidenzia modifiche',
    tabResult: 'Solo risultato',
    resultAria: 'Risultato di scrittura migliorato e confronto',
    originalText: 'Testo originale',
    improvedText: 'Testo migliorato',
    removed: 'Rimosso',
    added: 'Aggiunto / aggiornato',
    processedWith: 'Elaborato con modello Groq gratuito',
    fallbackNote: ' (fallback automatico del modello)',
    reviewNote: '. Rivedi sempre la copia finale prima di inviarla.',
  },
};

const WRITING_TASK_VALUES: WritingTask[] = [
  'fix-grammar',
  'rewrite-text',
  'improve-writing',
  'make-professional',
  'make-casual',
  'simplify-text',
  'expand-text',
  'paraphrase',
  'fix-spelling',
  'write-email',
];

const WRITING_TONE_VALUES: WritingTone[] = [
  'professional',
  'friendly',
  'formal',
  'casual',
  'academic',
  'persuasive',
  'simple',
];

const LANGUAGES: string[] = [
  'English (US)',
  'English (UK)',
  'Spanish',
  'French',
  'German',
  'Portuguese',
  'Italian',
  'Dutch',
  'Arabic',
  'Hindi',
  'Urdu',
  'Turkish',
  'Japanese',
  'Korean',
  'Chinese (Simplified)',
  'Same as original language',
];

function countWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

interface DiffSegment {
  type: 'equal' | 'added' | 'removed';
  text: string;
}

/**
 * Lightweight word-level diff preserving whitespace for readable inline change comparison.
 */
function computeWordDiff(original: string, improved: string): DiffSegment[] {
  const origTokens = original.split(/(\s+)/).filter(Boolean);
  const impTokens = improved.split(/(\s+)/).filter(Boolean);

  // Guard huge inputs against O(N*M) DP table blowup; fallback cleanly to side-by-side summary
  if (origTokens.length * impTokens.length > 90_000) {
    return [
      { type: 'removed', text: original },
      { type: 'added', text: improved },
    ];
  }

  const m = origTokens.length;
  const n = impTokens.length;
  const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));

  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      if (origTokens[i] === impTokens[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = dp[i + 1][j] >= dp[i][j + 1] ? dp[i + 1][j] : dp[i][j + 1];
      }
    }
  }

  const raw: DiffSegment[] = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (origTokens[i] === impTokens[j]) {
      raw.push({ type: 'equal', text: origTokens[i] });
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      raw.push({ type: 'removed', text: origTokens[i] });
      i += 1;
    } else {
      raw.push({ type: 'added', text: impTokens[j] });
      j += 1;
    }
  }
  while (i < m) {
    raw.push({ type: 'removed', text: origTokens[i] });
    i += 1;
  }
  while (j < n) {
    raw.push({ type: 'added', text: impTokens[j] });
    j += 1;
  }

  const merged: DiffSegment[] = [];
  for (const seg of raw) {
    const prev = merged[merged.length - 1];
    if (prev && prev.type === seg.type) {
      prev.text += seg.text;
    } else {
      merged.push({ ...seg });
    }
  }
  return merged;
}

export default function AiWritingAssistantTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [text, setText] = useState('');
  const [task, setTask] = useState<WritingTask>('fix-grammar');
  const [tone, setTone] = useState<WritingTone>('professional');
  const [language, setLanguage] = useState('English (US)');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AiErrorResponse['error'] | null>(null);
  const [submittedOriginal, setSubmittedOriginal] = useState('');
  const [resultText, setResultText] = useState('');
  const [resultMeta, setResultMeta] = useState<{
    model: string;
    fallbackUsed: boolean;
  } | null>(null);
  const [viewMode, setViewMode] = useState<'compare' | 'diff' | 'result'>('compare');

  const [quota, setQuota] = useState<QuotaStatus | null>(null);
  const [backendConfigured, setBackendConfigured] = useState<boolean | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchAiHealth(controller.signal).then((health) => {
      if (!health) return;
      setBackendConfigured(health.configuredProviders.groq);
      const writingQuota = health.quota.limits.writing;
      setQuota({
        limit: writingQuota.limit,
        remaining: writingQuota.remaining,
        resetAtIso: health.quota.resetAtIso,
        globalRemaining: health.quota.globalRemaining,
      });
    });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const inputChars = text.length;
  const inputWords = useMemo(() => countWords(text), [text]);
  const outputChars = resultText.length;
  const outputWords = useMemo(() => countWords(resultText), [resultText]);
  const isOverLimit = inputChars > MAX_CHARS;
  const isEmpty = text.trim().length === 0;

  const diffSegments = useMemo(() => {
    if (!submittedOriginal || !resultText || viewMode !== 'diff') return [];
    return computeWordDiff(submittedOriginal, resultText);
  }, [submittedOriginal, resultText, viewMode]);

  const handleLoadSample = () => {
    setText(
      (s.samples as Partial<Record<WritingTask, string>>)[task] ?? s.samples.default
    );
    setError(null);
  };

  const handleClear = () => {
    abortRef.current?.abort();
    setLoading(false);
    setText('');
    setSubmittedOriginal('');
    setResultText('');
    setResultMeta(null);
    setError(null);
  };

  const handleCancel = () => {
    abortRef.current?.abort();
    setLoading(false);
  };

  const handleGenerate = async () => {
    if (loading) return;
    const trimmed = text.trim();
    if (!trimmed) {
      setError({
        code: 'BAD_REQUEST',
        message: s.emptyError,
      });
      return;
    }
    if (text.length > MAX_CHARS) {
      setError({
        code: 'PAYLOAD_TOO_LARGE',
        message: `${s.overLimitBefore}${MAX_CHARS.toLocaleString(locale)}${s.overLimitMiddle}${(
          text.length - MAX_CHARS
        ).toLocaleString(locale)}${s.overLimitAfter}`,
      });
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const payload: WritingRequestPayload = {
        text,
        task,
        tone,
        language,
      };
      const response = await postAiJson<WritingRequestPayload, string>(
        'writing',
        payload,
        controller.signal
      );

      if (response.ok) {
        setSubmittedOriginal(text);
        setResultText(response.data);
        setResultMeta({
          model: response.model,
          fallbackUsed: response.fallbackUsed,
        });
        setQuota(response.quota);
        setBackendConfigured(true);
      } else {
        setError(response.error);
        if (response.error.quota) {
          setQuota(response.error.quota);
        }
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return;
      }
      setError({
        code: 'SERVICE_UNAVAILABLE',
        message: s.connectionError,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTxt = () => {
    if (!resultText) return;
    const blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `utilityflow-${task}-result.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleUseOutputAsInput = () => {
    if (!resultText) return;
    setText(resultText);
    setError(null);
  };

  const activeTaskOption = { value: task, ...s.tasks[task] };
  const wordDelta = resultText ? outputWords - countWords(submittedOriginal) : 0;
  const languageLabel =
    (s.languageLabels as Record<string, string>)[language] ?? language;
  const tonePhrase = s.tonePhrase.replace('{tone}', s.tones[tone]);

  return (
    <div className="space-y-6">
      {/* Top Status & Free Allowance Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-2 text-slate-700">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" aria-hidden="true" />
          <span className="font-medium">{s.title}</span>
          <span className="text-slate-400" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-600">{s.noLogin}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 tabular-nums">
          {quota ? (
            <span>
              {s.allowanceBefore}{' '}
              <strong className="font-semibold text-slate-900">
                {quota.remaining} / {quota.limit}
              </strong>{' '}
              {s.allowanceAfter}
            </span>
          ) : (
            <span>{s.allowanceFallback}</span>
          )}
        </div>
      </div>

      {backendConfigured === false && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs sm:text-sm text-amber-900"
        >
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">{s.backendTitle}</p>
            <p className="mt-0.5">
              {s.backendSet} <code className="font-mono text-xs">GROQ_API_KEY</code>{' '}
              {s.backendRest}
            </p>
          </div>
        </div>
      )}

      {/* Quick Writing Task Selector (10 Tasks) */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <label
            htmlFor="ai-writing-task-select"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            {s.stepTask}
          </label>
          <span className="text-xs text-slate-500 hidden sm:inline">{activeTaskOption.hint}</span>
        </div>

        {/* Accessible Select on small viewports + clean button grid on desktop/tablet */}
        <div className="sm:hidden">
          <select
            id="ai-writing-task-select"
            value={task}
            onChange={(e) => setTask(e.target.value as WritingTask)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {WRITING_TASK_VALUES.map((value) => (
              <option key={value} value={value}>
                {s.tasks[value].label} — {s.tasks[value].hint}
              </option>
            ))}
          </select>
        </div>

        <div
          className="hidden sm:grid grid-cols-2 md:grid-cols-5 gap-2"
          role="radiogroup"
          aria-label={s.taskSelectorAria}
        >
          {WRITING_TASK_VALUES.map((value) => {
            const opt = s.tasks[value];
            const selected = value === task;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setTask(value)}
                className={`flex flex-col items-start rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                  selected
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-xs font-semibold leading-snug">{opt.label}</span>
                <span className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                  {opt.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tone & Language Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ai-writing-tone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
          >
            {s.stepTone}
          </label>
          <select
            id="ai-writing-tone"
            value={tone}
            onChange={(e) => setTone(e.target.value as WritingTone)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {WRITING_TONE_VALUES.map((value) => (
              <option key={value} value={value}>
                {s.tones[value]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="ai-writing-language"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"
          >
            {s.stepLanguage}
          </label>
          <select
            id="ai-writing-language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {(s.languageLabels as Record<string, string>)[lang] ?? lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Editor Input Toolbar & Textarea */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label
            htmlFor="ai-writing-input"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            {s.stepText}
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleLoadSample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>{t.common.loadSample}</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={!text && !resultText && !error}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.common.clear}</span>
            </button>
          </div>
        </div>

        <textarea
          id="ai-writing-input"
          rows={8}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error?.code === 'BAD_REQUEST' || error?.code === 'PAYLOAD_TOO_LARGE') {
              setError(null);
            }
          }}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
              e.preventDefault();
              void handleGenerate();
            }
          }}
          placeholder={s.placeholder}
          aria-describedby="ai-writing-counters"
          className={`w-full rounded-xl border bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
            isOverLimit
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/20'
          }`}
        />

        {/* Character & Word Counter Row + Generate Button */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div
            id="ai-writing-counters"
            className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 tabular-nums"
          >
            <span>
              <strong className="font-semibold text-slate-900">{inputWords.toLocaleString(locale)}</strong>{' '}
              {inputWords === 1 ? s.word : s.words}
            </span>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <span className={isOverLimit ? 'font-semibold text-red-600' : ''}>
              <strong className={isOverLimit ? 'text-red-600' : 'font-semibold text-slate-900'}>
                {inputChars.toLocaleString(locale)}
              </strong>{' '}
              / {MAX_CHARS.toLocaleString(locale)} {s.characters}
            </span>
            <span className="hidden md:inline text-xs text-slate-400">
              {s.tip}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {loading && (
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Square className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.stop}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => void handleGenerate()}
              disabled={loading || isEmpty || isOverLimit}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-h-[42px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>{s.generating}</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" aria-hidden="true" />
                  <span>{activeTaskOption.label}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Loading Animation Skeleton */}
      {loading && (
        <div
          aria-live="polite"
          className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-5 space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>
              {s.applying} <strong>{activeTaskOption.label}</strong> ({tonePhrase}){' '}
              {s.applyingIn} {languageLabel}...
            </span>
          </div>
          <div className="space-y-2 animate-pulse">
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-11/12" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-full" />
            <div className="h-3.5 rounded bg-slate-200 dark:bg-slate-700 w-4/5" />
          </div>
        </div>
      )}

      {/* Clear Error Alert */}
      {error && !loading && (
        <div
          role="alert"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-800"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold">
                {error.code === 'DAILY_LIMIT_REACHED'
                  ? s.errorDailyLimit
                  : error.code === 'RATE_LIMITED'
                  ? s.errorRateLimited
                  : error.code === 'GLOBAL_QUOTA_EXHAUSTED'
                  ? s.errorGlobal
                  : s.errorGeneric}
              </p>
              <p className="mt-0.5 text-xs sm:text-sm">{error.message}</p>
            </div>
          </div>

          {(error.code === 'SERVICE_UNAVAILABLE' ||
            error.code === 'RATE_LIMITED' ||
            error.code === 'INTERNAL_ERROR') && (
            <button
              type="button"
              onClick={() => void handleGenerate()}
              className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-semibold text-red-800 hover:bg-red-50 cursor-pointer shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.retry}</span>
            </button>
          )}
        </div>
      )}

      {/* Result & Original vs Improved Comparison */}
      {resultText && !loading && (
        <section
          aria-label={s.resultAria}
          className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4"
        >
          {/* Result Header + Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <h2 className="text-base font-bold text-slate-900">{s.resultTitle}</h2>
              <span className="text-xs text-slate-500 tabular-nums">
                ({outputWords.toLocaleString(locale)} {s.words} · {outputChars.toLocaleString(locale)} {s.chars}
                {wordDelta !== 0
                  ? ` · ${wordDelta > 0 ? `+${wordDelta}` : wordDelta} ${s.words}`
                  : ''}
                )
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <CopyButton text={resultText} label={s.copyResult} copiedLabel={t.common.copied} />

              <button
                type="button"
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.downloadTxt}</span>
              </button>

              <button
                type="button"
                onClick={handleUseOutputAsInput}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{s.editOutput}</span>
              </button>
            </div>
          </div>

          {/* View Switcher Tabs: Side-by-Side | Word Changes | Result Only */}
          <div className="inline-flex flex-wrap rounded-lg border border-slate-200 bg-slate-100 p-1 gap-1">
            <button
              type="button"
              onClick={() => setViewMode('compare')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'compare'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabCompare}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('diff')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'diff'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabDiff}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('result')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'result'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{s.tabResult}</span>
            </button>
          </div>

          {/* Comparison Panels */}
          {viewMode === 'compare' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <span>{s.originalText}</span>
                  <span className="tabular-nums font-normal">
                    {countWords(submittedOriginal).toLocaleString(locale)} {s.words}
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 max-h-96 overflow-y-auto">
                  {submittedOriginal}
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2">
                  <span>{s.improvedText}</span>
                  <span className="tabular-nums font-normal text-slate-500">
                    {outputWords.toLocaleString(locale)} {s.words}
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-900 max-h-96 overflow-y-auto">
                  {resultText}
                </div>
              </div>
            </div>
          )}

          {viewMode === 'diff' && (
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-xs bg-red-50 border border-red-200" />
                  {s.removed}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-xs bg-emerald-50 border border-emerald-200" />
                  {s.added}
                </span>
              </div>
              <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-900 max-h-96 overflow-y-auto">
                {diffSegments.map((seg, idx) => {
                  if (seg.type === 'equal') {
                    return <span key={idx}>{seg.text}</span>;
                  }
                  if (seg.type === 'removed') {
                    return (
                      <del
                        key={idx}
                        className="rounded-xs bg-red-50 text-red-700 px-0.5 line-through decoration-red-400"
                      >
                        {seg.text}
                      </del>
                    );
                  }
                  return (
                    <ins
                      key={idx}
                      className="rounded-xs bg-emerald-50 text-emerald-800 px-0.5 no-underline font-medium"
                    >
                      {seg.text}
                    </ins>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === 'result' && (
            <div className="rounded-xl border border-indigo-200 bg-white p-4">
              <div className="whitespace-pre-wrap break-words text-sm sm:text-base leading-relaxed text-slate-900 max-h-[28rem] overflow-y-auto">
                {resultText}
              </div>
            </div>
          )}

          {resultMeta && (
            <p className="text-xs text-slate-500">
              {s.processedWith}{' '}
              <code className="font-mono text-slate-700">{resultMeta.model}</code>
              {resultMeta.fallbackUsed ? s.fallbackNote : ''}{s.reviewNote}
            </p>
          )}
        </section>
      )}
    </div>
  );
}
