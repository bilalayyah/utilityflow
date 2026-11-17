import type { UiStrings } from '../ui';

/**
 * Spanish chrome dictionary — neutral Latin American Spanish.
 * Same keys and structure as the English source (locales/en/ui.ts).
 * Brand name, email addresses, URLs and {placeholder} tokens stay unchanged.
 */
export const esStrings: UiStrings = {
  nav: {
    tools: 'Herramientas',
    categories: 'Categorías',
    aiTools: 'Herramientas de IA',
    about: 'Acerca de',
    contact: 'Contacto',
    blog: 'Blog',
    allTools: 'Todas las herramientas',
    freeAiTools: 'Herramientas de IA gratuitas',
    viewAiSection: 'Ver la sección de IA en la página principal →',
    searchPlaceholder: 'Buscar entre 88 herramientas...',
    searchTools: 'Buscar herramientas',
    closeSearch: 'Cerrar búsqueda',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    skipToContent: 'Saltar al contenido',
    language: 'Idioma',
    chooseLanguage: 'Elegir idioma',
    aiWriting: {
      label: 'Asistente de escritura con IA',
      desc: 'Gramática, reescritura, tono y redacción de correos',
    },
    aiSummarizer: {
      label: 'Resumidor de texto con IA',
      desc: 'Resúmenes cortos, medianos y con viñetas',
    },
    aiFinder: {
      label: 'Buscador inteligente de herramientas con IA',
      desc: 'Encuentra la herramienta adecuada en lenguaje natural',
    },
  },
  footer: {
    tagline:
      'Una colección rápida de utilidades cotidianas, pensadas para el navegador, para escritores, ingenieros, especialistas en marketing y analistas. Diseñada para ejecutarse localmente con el mínimo consumo de recursos.',
    categories: 'Categorías',
    platformAi: 'Plataforma e IA',
    trustLegal: 'Confianza y Legal',
    home: 'Inicio',
    allToolsDirectory: 'Directorio de todas las herramientas',
    blog: 'Blog',
    aboutUs: 'Sobre nosotros',
    contact: 'Contacto',
    privacyPolicy: 'Política de privacidad',
    termsOfService: 'Términos de servicio',
    xmlSitemap: 'Mapa del sitio XML',
    rightsReserved: 'Todos los derechos reservados.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: 'Usamos cookies y analítica para entender cómo se usa el sitio y mejorarlo. Puedes aceptar o rechazar.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    cookieSettings: 'Configuración de cookies',
  },
  common: {
    copy: 'Copiar',
    copied: 'Copiado',
    download: 'Descargar',
    clear: 'Limpiar',
    loadSample: 'Cargar ejemplo',
    reset: 'Restablecer',
    search: 'Buscar',
    close: 'Cerrar',
    cancel: 'Cancelar',
    save: 'Guardar',
    submit: 'Enviar',
    loading: 'Cargando...',
    processing: 'Procesando...',
    upload: 'Subir',
    chooseFile: 'Elegir archivo',
    dragDrop: 'Arrastra y suelta tu archivo aquí',
    tryAgain: 'Intentar de nuevo',
    openTool: 'Abrir herramienta',
    browserSide: 'Del navegador',
    freeAiTool: 'Herramienta de IA gratuita',
    externalApi: 'API externa',
  },
  home: {
    seoTitle: 'UtilityFlow – Herramientas online rápidas en el navegador',
    seoDescription:
      'Herramientas online gratuitas, rápidas y privadas para texto, desarrollo, calculadoras, PDF, SEO e imágenes, en tu navegador.',
    seoKeywords: [
      'herramientas en línea',
      'herramientas de navegador',
      'herramientas de texto',
      'herramientas para desarrolladores',
      'calculadoras en línea',
      'herramientas pdf',
      'herramientas seo',
    ],
    eyebrow: 'Plataforma UtilityFlow · 7 categorías principales · {count} utilidades en vivo',
    h1: 'Utilidades online prácticas, rápidas y privadas.',
    heroDescription:
      'UtilityFlow reúne 85 utilidades pensadas para el navegador, además de escritura con IA gratuita, resúmenes y descubrimiento inteligente de herramientas para flujos de trabajo de texto, desarrollo, calculadoras, redes sociales, PDF, SEO e imágenes.',
    exploreCategories: 'Explorar categorías',
    openDirectory: 'Abrir el directorio completo',
    aiWriting: 'Escritura con IA',
    aiSummarizer: 'Resumidor con IA',
    aiFinder: 'Buscador de herramientas con IA',
    metrics: {
      toolCategories: 'Categorías de herramientas',
      browserUtilities: 'Utilidades del navegador',
      liveTools: 'Herramientas en vivo',
      accountRequired: 'Cuenta necesaria',
      none: 'Ninguna',
    },
    aiSpotlight: {
      badge: 'Suite de IA gratuita · Sin registro',
      title: 'Herramientas de IA gratuitas',
      description:
        'Mejora borradores, resume documentos largos o encuentra la herramienta adecuada en segundos, sin registrarte.',
    },
    popular: {
      title: 'Herramientas populares',
      description: 'Las utilidades cotidianas más usadas para escribir, desarrollar y calcular.',
      viewDirectory: 'Ver el directorio de herramientas',
    },
    categories: {
      title: 'Categorías de herramientas',
      description:
        'Siete suites especializadas diseñadas para cubrir flujos de trabajo de escritura, programación, matemáticas, publicación, documentos, optimización de búsqueda y medios.',
      includes: 'Incluye: {names}',
    },
    directory: {
      title: 'Directorio de todas las herramientas',
      description:
        'Filtra por categoría o palabra clave para ir directamente a cualquier utilidad en vivo o centro de categoría.',
      filterPlaceholder: 'Filtrar categorías o herramientas...',
      allCategories: 'Todas las categorías',
      noMatch: 'Ninguna categoría o herramienta coincide con "{query}".',
      resetFilters: 'Restablecer filtros',
      upcomingUtilities: 'Próximas utilidades: {names}',
      toolsActive: '{count} herramientas activas',
      openCategory: 'Abrir página de categoría',
    },
    why: {
      title: 'Por qué elegir UtilityFlow',
      description: 'Diseñado como una alternativa limpia y confiable a los sitios de utilidades llenos de anuncios.',
      items: [
        {
          title: 'Privacidad ante todo en el navegador',
          description:
            'Los cálculos principales, las transformaciones de texto y el formato se ejecutan directamente en la memoria del cliente, por lo que tus borradores y cargas JSON sensibles permanecen en tu dispositivo.',
        },
        {
          title: 'Entrega rápida y ligera',
          description:
            'Los módulos de herramientas con carga por código y las dependencias mínimas de ejecución mantienen las cargas iniciales de página ligeras y los Core Web Vitals con buena respuesta en cualquier conexión.',
        },
        {
          title: 'URL limpias y permanentes',
          description:
            'Cada utilidad tiene su propia ruta dedicada con metadatos estructurados, ejemplos de uso y enlaces profundos directos y confiables al actualizar el navegador.',
        },
        {
          title: 'Resultados predecibles y verificables',
          description:
            'Las herramientas se centran en resultados deterministas, instrucciones transparentes y controles accesibles, sin ventanas emergentes desordenadas ni indicadores engañosos.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      description:
        'Detalles clave sobre cómo funciona UtilityFlow y qué esperar de las nuevas herramientas.',
    },
    faqs: [
      {
        question: '¿Las herramientas de UtilityFlow son gratuitas y se pueden usar sin crear una cuenta?',
        answer:
          'Sí. Las 85 utilidades del navegador y las 3 herramientas de IA de UtilityFlow están disponibles de forma gratuita, sin registro, muro de inicio de sesión, créditos ni suscripción.',
      },
      {
        question: '¿UtilityFlow sube mi texto, código o archivos a un servidor?',
        answer:
          'Las 85 utilidades principales del navegador se ejecutan localmente en tu navegador web sin subir las entradas. Nuestras 3 herramientas gratuitas opcionales de IA (Asistente de escritura con IA, Resumidor de texto con IA y Buscador inteligente de herramientas con IA) procesan las indicaciones de forma segura mediante inferencia de Groq del lado del servidor, sin almacenar tu texto.',
      },
      {
        question: '¿Cómo están organizadas las 88 herramientas en la plataforma?',
        answer:
          'UtilityFlow abarca siete categorías principales (herramientas de texto y escritura, para desarrolladores, calculadoras, redes sociales, PDF, SEO y herramientas de imagen y archivos) con un total de 85 herramientas del navegador junto con 3 herramientas gratuitas de IA integradas en la plataforma.',
      },
      {
        question: '¿Puedo marcar o compartir un enlace directo a una herramienta específica?',
        answer:
          'Sí. Cada herramienta y categoría recibe su propia URL permanente y limpia (como /word-counter/, /ai-writing-assistant/ o /category/developer-tools/) que carga directamente y funciona al actualizar el navegador.',
      },
      {
        question: '¿UtilityFlow funciona bien en teléfonos móviles y tabletas?',
        answer:
          'Sí. Todos los diseños, controles de navegación y espacios de trabajo interactivos —incluidos el modo claro y el modo oscuro— están diseñados con un enfoque móvil primero, con objetivos táctiles accesibles y cuadrículas adaptables.',
      },
    ],
    trustLine: 'Todas las herramientas son gratuitas • No es necesario registrarse • Funciona en tu navegador',
  },
  directory: {
    seoTitle: 'Directorio de todas las herramientas online | UtilityFlow',
    seoDescription:
      'Explora todas las utilidades y categorías de UtilityFlow, organizadas para escritura, desarrollo, calculadoras, PDF, SEO e imágenes.',
    seoKeywords: [
      'directorio de herramientas',
      'todas las herramientas en línea',
      'herramientas gratuitas de navegador',
    ],
    title: 'Directorio de todas las herramientas',
    description:
      'Explora las {count} utilidades en vivo registradas en UtilityFlow o explora los siete centros de categoría en flujos de trabajo del navegador y de IA gratuita.',
    searchPlaceholder: 'Buscar por nombre de herramienta, palabra clave o categoría...',
    showing: 'Mostrando {tools} herramientas en vivo en {categories} categorías',
    all: 'Todas',
    availableTools: 'Herramientas disponibles',
    categorySuites: 'Suites de categoría',
    visitHub: 'Visitar el centro de {name}',
    plannedToolsInclude: 'Las herramientas de esta categoría incluyen: {names}',
    noMatch: 'Ninguna categoría o herramienta coincide con tu filtro.',
    clearFilters: 'Limpiar filtros',
  },
  category: {
    plannedCount: '{count} herramientas',
    toolsCount: '{count} herramientas',
    toolsLive: '{count} herramientas en vivo',
    ofToolsLive: '{count} de {total} herramientas en vivo',
    availableTools: '{name} disponibles',
    exploreOther: 'Explorar otras categorías',
    scheduledTitle: 'Más herramientas próximamente',
    scheduledDescription:
      'Este centro de categoría está activo e indexado en la arquitectura de {name}. Las páginas individuales de herramientas con funcionalidad del navegador se agregarán aquí próximamente.',
    plannedToolsTitle: 'Herramientas en esta categoría:',
  },
  toolPage: {
    howToUse: 'Cómo usar {name}',
    practicalExamples: 'Ejemplos prácticos',
    faqs: 'Preguntas frecuentes',
    keyBenefits: 'Beneficios clave',
    commonUseCases: 'Casos de uso comunes',
    runsLocally: 'Se ejecuta localmente en tu navegador',
    externalApi: 'Integración con API externa',
    freeAiTool: 'Herramienta de IA gratuita · Sin registro',
    loadingWorkspace: 'Cargando el espacio de trabajo de {name}...',
    input: 'Entrada',
    output: 'Salida',
    relatedTitle: 'Herramientas relacionadas',
    relatedDescription: 'Continúa tu flujo de trabajo con utilidades complementarias.',
    browseAll: 'Explorar todas las {name}',
    moreToolsIn: 'Más herramientas en',
    willAppear: 'aparecerán aquí próximamente.',
    bylineAuthor: 'Por Bilal',
    lastUpdated: 'Última actualización: noviembre de 2026',
  },
  blog: {
    seoTitle: 'Guías, tutoriales y recursos | Blog de UtilityFlow',
    seoDescription:
      'Guías prácticas, tutoriales paso a paso y recursos para cada herramienta de UtilityFlow: texto, desarrollo, calculadoras, PDF, SEO, redes sociales e imágenes.',
    title: 'Guías, tutoriales y recursos',
    description:
      'Guías prácticas y tutoriales paso a paso para cada herramienta de UtilityFlow. Aprende qué hace cada herramienta, cómo usarla bien y cómo obtener el mejor resultado.',
    searchPlaceholder: 'Buscar artículos...',
    searchArticles: 'Buscar artículos',
    noResults: 'No se encontraron artículos.',
    featured: 'Artículos destacados',
    latest: 'Artículos más recientes',
    browseByCategory: 'Explorar por categoría',
    relatedArticles: 'Artículos relacionados',
    relatedTools: 'Herramientas relacionadas',
    readingTime: '{minutes} min de lectura',
    publishedOn: 'Publicado el {date}',
    updatedOn: 'Actualizado el {date}',
    byEditorial: 'Por el equipo editorial de UtilityFlow',
    tableOfContents: 'Tabla de contenido',
    prevArticle: 'Artículo anterior',
    nextArticle: 'Artículo siguiente',
    share: 'Compartir',
    tryTool: 'Probar la herramienta',
    guidesInCategory: 'Guías en esta categoría',
    noArticlesYet: 'Aún no hay artículos',
    noArticlesYetDescription: 'Las guías de esta sección están en camino. Vuelve pronto.',
    backToBlog: 'Volver al blog',
    allArticles: 'Todos los artículos',
    notAvailableInLanguage: 'Este artículo aún no está disponible en este idioma.',
    minRead: 'min de lectura',
  },
  comments: {
    title: 'Comentarios',
    note: 'Comparte tu opinión: no necesitas cuenta. Solo escribe tu nombre y publica.',
    namePlaceholder: 'Tu nombre',
    commentPlaceholder: 'Escribe un comentario…',
    postButton: 'Publicar comentario',
    posting: 'Publicando…',
    empty: 'Aún no hay comentarios. Sé la primera persona en compartir su opinión.',
    loadError: 'No se pudieron cargar los comentarios ahora mismo, pero puedes publicar uno abajo.',
    postError: 'No se pudo publicar tu comentario. Inténtalo de nuevo en un momento.',
  },
  search: {
    placeholder:
      'Buscar herramientas o categorías (p. ej., contador de palabras, JSON, PDF, calculadoras)...',
    search: 'Buscar',
    tools: 'Herramientas',
    categories: 'Categorías',
    noResults: 'No se encontraron herramientas o categorías que coincidan con "{query}".',
    viewDirectory: 'Ver el directorio completo',
    clearSearch: 'Limpiar búsqueda',
    ariaLabel: 'Buscar herramientas o categorías',
  },
  notFound: {
    seoTitle: 'Página no encontrada (404) | UtilityFlow',
    seoDescription:
      'La herramienta o página solicitada no se encontró en UtilityFlow. Busca en nuestro directorio de utilidades o explora las categorías.',
    eyebrow: '404 · No encontrada',
    title: 'No pudimos encontrar esa página.',
    description:
      'Es posible que la URL haya cambiado o que esta utilidad aún no se haya publicado. Busca abajo o explora nuestras categorías para encontrar lo que necesitas.',
    returnHome: 'Volver al inicio',
    browseDirectory: 'Explorar el directorio',
    browseCategories: 'Explorar las categorías',
  },
  about: {
    seoTitle: 'Acerca de UtilityFlow – Herramientas en el navegador',
    seoDescription:
      'Descubre cómo UtilityFlow crea utilidades rápidas y privadas para el navegador en siete categorías, sin cuentas ni subidas de datos.',
    title: 'Acerca de UtilityFlow',
    intro:
      'UtilityFlow es una plataforma web independiente que crea 85 utilidades enfocadas y confiables para el navegador, para el trabajo digital cotidiano.',
    whyTitle: 'Por qué creamos UtilityFlow',
    whyP1:
      'Las tareas online rutinarias —contar palabras, validar JSON, revisar límites de caracteres, calcular pagos de préstamos o comprimir una imagen— a menudo obligan a las personas a usar sitios lentos llenos de capas intrusivas, descargas confusas o registros obligatorios.',
    whyP2:
      'Nuestro objetivo es sencillo: dar a cada utilidad una página limpia y dedicada que cargue rápido, explique con claridad cómo funciona la herramienta y se ejecute directamente en tu navegador siempre que los estándares web lo permitan.',
    orgTitle: 'Quién está detrás de UtilityFlow',
    orgP1:
      'UtilityFlow es un proyecto independiente creado y mantenido por Bilal, un creador que construye herramientas web gratuitas en su tiempo libre. No hay ninguna empresa detrás del sitio, ni financiación de inversionistas, ni un equipo de empleados: cada herramienta, guía y página de ayuda es diseñada, construida y probada por una sola persona. El proyecto se sostiene con la publicidad que se muestra en el sitio, y eso es lo que mantiene las 88 herramientas gratuitas, sin cuentas ni suscripciones. El crédito del pie de página menciona a Shaheen, cuyo apoyo inspiró el proyecto y cuyo nombre aparece en cada página como un recordatorio de dónde comenzó la idea.',
    orgP2:
      'Como el proyecto es pequeño e independiente, las decisiones son sencillas: si una herramienta es lenta, confusa o está mal, se corrige. Los comentarios enviados a través de la página de contacto llegan directamente a la persona que puede cambiar el código, y las sugerencias de los visitantes ya han dado lugar a nuevas herramientas y mejoras en todo el sitio.',
    howTitle: 'Cómo se construyen y se prueban nuestras herramientas',
    howP1:
      'Cada utilidad nace de una tarea clara y concreta —contar palabras, unir archivos PDF, dar formato a JSON— y se construye como una página enfocada que hace bien ese trabajo. Siempre que los estándares web lo permiten, el trabajo se realiza por completo dentro de tu navegador, así que tu texto y tus archivos nunca tienen que salir de tu dispositivo. Cada página de herramienta explica sus pasos con una guía breve, muestra ejemplos resueltos y responde las preguntas más frecuentes, para que puedas evaluar el resultado en lugar de confiar en una caja negra.',
    howP2:
      'Antes de que una herramienta se publique, se prueba con entradas reales en un navegador de escritorio y en uno móvil, incluidos casos límite como entradas vacías, textos muy largos y tipos de archivo poco comunes. Cuando algo falla o un cálculo parece incorrecto, la corrección se publica como una actualización del sitio y la página se vuelve a revisar. Las tres herramientas opcionales de IA son las únicas que envían texto a un servidor, y sus páginas lo indican claramente antes de que las uses.',
    whoTitle: 'Para quién es UtilityFlow',
    whoP1:
      'UtilityFlow está pensado para cualquier persona que necesita una respuesta rápida de una herramienta sin instalar programas ni crear una cuenta: estudiantes que revisan el conteo de palabras de un ensayo, escritores que dan formato a un borrador, desarrolladores que validan JSON o codifican una URL, especialistas en marketing que revisan límites de caracteres y dueños de pequeños negocios que calculan un préstamo o un descuento. Si una tarea toma menos de un minuto, la herramienta para hacerla también debería tomar menos de un minuto: ese es el estándar que debe cumplir cada página de este sitio.',
    principlesTitle: 'Principios fundamentales de ingeniería',
    principles: [
      {
        title: 'Ejecución en el cliente',
        description:
          'Las utilidades de texto, código, matemáticas y archivos locales procesan las entradas en la memoria del navegador, por lo que tus datos de trabajo no se envían a servidores remotos.',
      },
      {
        title: 'Avisos transparentes de API',
        description:
          'Si una utilidad especializada requiere una consulta externa o una llamada al servidor, lo indicamos explícitamente en la página de esa herramienta antes de que ejecutes nada.',
      },
      {
        title: 'Interfaces accesibles',
        description:
          'La navegación por teclado, el contraste legible, la retroalimentación clara de errores y los controles móviles con diseño adaptable están integrados en cada plantilla.',
      },
      {
        title: 'Lanzamiento modular',
        description:
          'Las herramientas se publican y verifican por categoría, de modo que cada utilidad recibe pruebas funcionales y documentación exhaustivas.',
      },
    ],
    categoriesTitle: 'Siete categorías de herramientas',
    feedbackTitle: '¿Tienes comentarios o una solicitud?',
    feedbackBefore:
      'Si notas un caso límite en un cálculo, un problema de accesibilidad o quieres sugerir una nueva utilidad, comunícate a través de nuestra',
    feedbackLink: 'página de contacto',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Contactar con UtilityFlow – Soporte, errores y sugerencias',
    seoDescription:
      'Ponte en contacto con el equipo de UtilityFlow para informar un problema, sugerir una nueva herramienta de utilidad o preguntar sobre privacidad y términos.',
    title: 'Contáctanos',
    intro:
      'Envía informes de errores, sugerencias de herramientas o consultas generales. Leemos cada mensaje y priorizamos las correcciones que mejoran la precisión y la accesibilidad de las herramientas.',
    aboutTitle: 'Sobre qué puedes escribir',
    aboutP1:
      'Usa este formulario para cualquier tema relacionado con el sitio. Para reportar un error, dinos qué herramienta estabas usando, qué escribiste y qué esperabas que pasara: mientras más detalles incluyas, más rápido se podrá reproducir y corregir el problema. Para sugerir una herramienta nueva, describe la tarea que debería realizar; las ideas que piden muchos visitantes pasan a los primeros lugares de la lista. También puedes señalar un cálculo incorrecto, una instrucción confusa o un error de traducción en cualquier página.',
    aboutP2:
      'Las preguntas de privacidad y legales también son bienvenidas. Si necesitas que se elimine un comentario que publicaste, incluye la página de la herramienta y el nombre que usaste, y se retirará. Para cualquier otro tema —una idea de colaboración, una pregunta de prensa o un comentario general sobre el sitio— funciona el mismo formulario, o puedes escribir directamente a la dirección de correo de esta página.',
    responseTitle: 'Qué pasa después de enviar un mensaje',
    responseP1:
      'Cada mensaje lo lee la persona que construye y mantiene UtilityFlow: no hay un equipo de soporte ni una cola de respuestas automáticas. Los reportes de errores y los resultados incorrectos se revisan primero, porque una herramienta rota afecta a todas las personas que la usan. Las sugerencias de herramientas se recopilan y se evalúan según cuántas personas las usarían y qué tan bien encajan con el enfoque del sitio, que prioriza el navegador.',
    responseP2:
      'No necesitas una cuenta para contactarnos, y solo usaremos tu dirección de correo para responder a tu mensaje. Si prefieres no usar el formulario, la dirección de correo directo de esta página llega a la misma bandeja de entrada.',
    name: 'Nombre',
    email: 'Correo electrónico',
    topic: 'Tema',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Describe la herramienta, el error o la pregunta en detalle...',
    topics: [
      'Sugerencia de herramienta',
      'Informe de error',
      'Corrección de SEO o contenido',
      'Consulta de privacidad o legal',
      'Pregunta general',
    ],
    errors: {
      name: 'Ingresa tu nombre.',
      emailEmpty: 'Ingresa tu dirección de correo electrónico.',
      emailInvalid: 'Ingresa una dirección de correo electrónico válida.',
      subject: 'Elige o escribe un tema.',
      message: 'Incluye al menos 10 caracteres en tu mensaje.',
    },
    successTitle: 'Mensaje enviado',
    successThanks:
      'Gracias, {name}. Tu mensaje ha sido enviado y te responderemos pronto.',
    successNote:
      'Si necesitas añadir algo más, también puedes contactarnos directamente en',
    sending: 'Enviando…',
    sendError: 'No se pudo enviar tu mensaje. Inténtalo de nuevo.',
    sendAnother: 'Enviar otro mensaje',
    directEmail: 'Correo directo',
    directEmailText: '¿Prefieres escribir directamente? Envía un correo a nuestro equipo a:',
  },
  privacy: {
    seoTitle: 'Política de privacidad – Tus datos y cookies | UtilityFlow',
    seoDescription:
      'Lee la Política de privacidad de UtilityFlow: herramientas en el navegador, cookies, registros del servidor y publicidad de terceros.',
    title: 'Política de privacidad',
    lastUpdated: 'Última actualización: noviembre de 2026',
    sections: [
      {
        title: '1. Descripción general',
        paragraphs: [
          'UtilityFlow está diseñado en torno al procesamiento en el navegador del lado del cliente. Esta Política de privacidad explica qué información se procesa cuando visitas nuestro sitio web, cómo nuestras utilidades manejan las entradas y cómo pueden funcionar las cookies o las tecnologías publicitarias.',
        ],
      },
      {
        title: '2. Entradas de herramientas, procesamiento en el navegador y herramientas gratuitas de IA',
        paragraphs: [
          'El texto, los números, los fragmentos de código y los archivos que se ingresan en nuestras 85 herramientas basadas en el navegador se procesan localmente dentro de tu sesión del navegador sin salir de tu dispositivo.',
          'Nuestras tres herramientas gratuitas opcionales de IA (Asistente de escritura con IA, Resumidor de texto con IA y Buscador inteligente de herramientas con IA) envían el texto enviado a través de nuestro backend protegido a Groq para inferencia en tiempo real. No almacenamos ni registramos tus indicaciones, y los límites diarios gratuitos usan solo un hash SHA-256 con fecha UTC, por lo que las direcciones IP sin procesar de los visitantes nunca se almacenan.',
          'Los comentarios publicados en nuestras herramientas solo piden un nombre y el texto del comentario. El nombre y el texto que envías se guardan en nuestra plataforma de alojamiento y se muestran públicamente en la página de esa herramienta, junto con la fecha. No pedimos una dirección de correo ni una cuenta para comentar, y no usamos los datos de los comentarios para publicidad. Si quieres que se elimine un comentario, contáctanos con la página y el nombre usado y lo borraremos.',
        ],
      },
      {
        title: '3. Registros de alojamiento y telemetría técnica',
        paragraphs: [
          'UtilityFlow está alojado en Cloudflare Pages. Como ocurre con los proveedores de alojamiento web estándar, nuestra red perimetral puede procesar automáticamente metadatos estándar de solicitudes HTTP (como la dirección IP, el agente de usuario del navegador, la URL solicitada y la marca de tiempo) para entregar las páginas de forma confiable, mitigar abusos y mantener la seguridad.',
          'No combinamos los registros de alojamiento con ningún otro dato para identificar a visitantes individuales, y no vendemos ni compartimos los datos de los registros con anunciantes. Los registros existen solo para mantener el servicio en funcionamiento y seguro.',
        ],
      },
      {
        title: '4. Cookies y publicidad de terceros',
        paragraphs: [
          'Es posible que mostremos anuncios de redes publicitarias de terceros (como Google AdSense) para apoyar el acceso gratuito a nuestras herramientas. Los proveedores externos, incluido Google, pueden usar cookies o balizas web para mostrar anuncios según las visitas anteriores de un usuario a este sitio web o a otros sitios web.',
          'Puedes optar por no recibir publicidad personalizada visitando la Configuración de anuncios de Google o administrando las preferencias de cookies directamente en la configuración de tu navegador.',
        ],
      },
      {
        title: '5. Enlaces externos',
        paragraphs: [
          'Nuestra documentación o las páginas de herramientas pueden enlazar a sitios web externos. No somos responsables de las prácticas de privacidad ni del contenido de los sitios web de terceros.',
          'Los enlaces externos se abren en una pestaña nueva cuando es posible. Antes de ingresar información personal en cualquier sitio enlazado, revisa la política de privacidad de ese sitio.',
        ],
      },
      {
        title: '6. Conservación de datos',
        paragraphs: [
          'La información que se procesa en tu navegador nunca se nos envía, así que no hay nada que conservar. El texto enviado a las herramientas opcionales de IA se procesa para la solicitud y no se guarda. Los comentarios se conservan hasta que se eliminan, ya sea por nosotros o a petición tuya. Los registros de alojamiento y de seguridad se guardan solo durante el período limitado que nuestro proveedor de alojamiento necesita para operar y proteger el servicio.',
        ],
      },
      {
        title: '7. Tus derechos y opciones',
        paragraphs: [
          'Puedes desactivar la publicidad personalizada a través de la Configuración de anuncios de Google o de la página de exclusión de AboutAds.info enlazada en la sección 4, y puedes bloquear o eliminar las cookies en la configuración de tu navegador en cualquier momento. Si publicaste un comentario, puedes pedir que se elimine contactándonos. Como nuestras herramientas se ejecutan en tu navegador y no tenemos cuentas ni perfiles, no hay ningún archivo de datos personales para descargar o corregir, pero cualquier pregunta sobre tus datos será respondida si nos escribes.',
        ],
      },
      {
        title: '8. Privacidad de los niños',
        paragraphs: [
          'UtilityFlow es un sitio de uso general y no está dirigido a niños menores de 13 años. No recopilamos a sabiendas información personal de niños. Si eres padre, madre o tutor y crees que un niño publicó un comentario en el sitio, contáctanos y lo eliminaremos.',
        ],
      },
      {
        title: '9. Cambios en esta política',
        paragraphs: [
          'Podemos actualizar esta Política de privacidad cuando agreguemos herramientas, cambiemos de proveedores o ajustemos el funcionamiento del sitio. La fecha de “Última actualización” en la parte superior de esta página muestra cuándo se revisó por última vez. Si sigues usando el sitio después de un cambio, aceptas la política actualizada.',
        ],
      },
    ],
    contactTitle: '10. Contacto',
    contactBefore:
      'Si tienes preguntas sobre esta Política de privacidad, contáctanos a través de nuestra',
    contactLink: 'página de contacto',
    contactMiddle: 'o envía un correo a',
    optOutGoogleAds: 'Configuración de anuncios de Google',
    optOutAboutAds: 'Exclusión de publicidad en AboutAds.info',
  },
  terms: {
    seoTitle: 'Términos de servicio – Uso de las herramientas | UtilityFlow',
    seoDescription:
      'Revisa los Términos de servicio de UtilityFlow: uso de las utilidades, propiedad intelectual, exenciones de responsabilidad y límites de responsabilidad.',
    title: 'Términos de servicio',
    lastUpdated: 'Última actualización: noviembre de 2026',
    sections: [
      {
        title: '2. Uso permitido',
        paragraphs: [
          'Puedes usar UtilityFlow para tareas de productividad personales, educativas y comerciales. Aceptas no automatizar tráfico abusivo, intentar interrumpir la entrega del sitio, aplicar ingeniería inversa a las protecciones de seguridad ni usar ninguna utilidad para actividades ilegales.',
          'Puedes enlazar a nuestras herramientas y compartir sus resultados. No puedes presentar nuestras herramientas como tuyas, copiar el diseño o el contenido del sitio y volver a publicarlo como un servicio competidor, ni usar el sitio de una manera que engañe a otros sobre el origen de un resultado.',
        ],
      },
      {
        title: '3. Precisión y exención de responsabilidad informativa',
        paragraphs: [
          'Aunque probamos cada utilidad con cuidado, todas las herramientas, cálculos, conversiones y revisiones de SEO se proporcionan «tal cual» y «según disponibilidad». Los resultados deben verificarse de forma independiente antes de tomar decisiones financieras, legales, médicas o de ingeniería de producción.',
          'Los cálculos como los pagos de préstamos, las estimaciones de impuestos y las conversiones de moneda son ayudas para planificar, no asesoría profesional. Las cifras pueden cambiar según las tasas, las reglas y el redondeo, así que confirma los números importantes con un profesional calificado o con una fuente oficial antes de actuar con base en ellos.',
        ],
      },
      {
        title: '4. Propiedad intelectual',
        paragraphs: [
          'La interfaz de UtilityFlow, los recursos de marca, la documentación y el código fuente están protegidos por las leyes de propiedad intelectual aplicables. Conservas la plena propiedad de cualquier texto, código, documento o imagen que proceses con nuestras utilidades del lado del cliente.',
        ],
      },
      {
        title: '5. Limitación de responsabilidad',
        paragraphs: [
          'En la máxima medida permitida por la ley, UtilityFlow y sus colaboradores no serán responsables de ningún daño indirecto, incidental, especial o consecuente que surja de tu uso o de tu incapacidad para usar esta plataforma.',
          'UtilityFlow es un proyecto independiente y no está afiliado a YouTube, Instagram, Google ni a ninguna otra marca de terceros mencionada en este sitio, ni cuenta con su respaldo ni está conectado con ellas.',
        ],
      },
      {
        title: '6. Contenido de los usuarios y comentarios',
        paragraphs: [
          'Conservas la plena propiedad de todo lo que escribes en nuestras herramientas o publicas como comentario. Al publicar un comentario, nos das permiso para mostrarlo públicamente en la página de la herramienta correspondiente. No publiques nada ilegal, engañoso o dañino para otros, ni publiques información personal de otra persona. Podemos eliminar sin aviso los comentarios que infrinjan estas reglas o que nos sean reportados.',
        ],
      },
      {
        title: '7. Servicios de terceros',
        paragraphs: [
          'Algunas funciones dependen de servicios independientes de terceros: las tres herramientas de IA envían texto a Groq para su procesamiento, el formulario de contacto se entrega a través de FormSubmit, el sitio está alojado en Cloudflare y la publicidad la sirve Google AdSense. Cada uno de estos servicios tiene sus propios términos y su propia política de privacidad, y tu uso de ellos se rige por esos documentos. UtilityFlow no es responsable de la disponibilidad ni de las prácticas de los servicios de terceros.',
        ],
      },
      {
        title: '8. Disponibilidad del servicio',
        paragraphs: [
          'UtilityFlow es un servicio gratuito y no garantizamos que todas las herramientas estén siempre disponibles. Las herramientas pueden cambiar, mejorar o eliminarse, y el sitio puede no estar disponible temporalmente por mantenimiento. Nuestro objetivo es mantener el servicio funcionando sin problemas, pero no somos responsables de las interrupciones ni de ninguna pérdida causada por el tiempo de inactividad.',
        ],
      },
    ],
    acceptanceTitle: '1. Aceptación de los términos',
    acceptanceBefore:
      'Al acceder a UtilityFlow o usarlo, aceptas quedar sujeto a estos Términos de servicio y a nuestra',
    acceptanceLink: 'Política de privacidad',
    acceptanceAfter:
      '. Si no estás de acuerdo con alguna parte de estos términos, deja de usar el sitio web.',
    changesTitle: '9. Cambios y contacto',
    changesBefore:
      'Es posible que actualicemos estos Términos de servicio a medida que se publiquen nuevas herramientas. Las preguntas pueden dirigirse a nuestra',
    changesLink: 'página de contacto',
    changesAfter: '.',
  },
};
