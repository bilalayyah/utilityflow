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
    legal: 'Legal',
    home: 'Inicio',
    allToolsDirectory: 'Directorio de todas las herramientas',
    aboutUs: 'Sobre nosotros',
    contact: 'Contacto',
    privacyPolicy: 'Política de privacidad',
    termsOfService: 'Términos de servicio',
    xmlSitemap: 'Mapa del sitio XML',
    rightsReserved: 'Todos los derechos reservados.',
    deployedNote: 'Utilidades del navegador · Publicado en Cloudflare Pages',
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
    seoTitle: 'UtilityFlow – Herramientas de utilidad online rápidas en el navegador',
    seoDescription:
      'Herramientas de utilidad online gratuitas, rápidas y centradas en la privacidad para análisis de texto, formato para desarrolladores, calculadoras, PDF, revisiones de SEO y flujos de trabajo con imágenes.',
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
      scheduledInBatch: 'Programada en el lote {batch}',
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
        'Detalles clave sobre cómo funciona UtilityFlow y qué esperar de los próximos lotes.',
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
  },
  directory: {
    seoTitle: 'Directorio de todas las herramientas de utilidad online | UtilityFlow',
    seoDescription:
      'Explora y busca todas las utilidades basadas en el navegador y las categorías de UtilityFlow, organizadas para escritura, desarrollo, calculadoras, PDF, SEO e imágenes.',
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
    plannedToolsInclude: 'Las herramientas planificadas incluyen: {names}',
    noMatch: 'Ninguna categoría o herramienta coincide con tu filtro.',
    clearFilters: 'Limpiar filtros',
  },
  category: {
    batchLabel: 'Lote {batch}',
    plannedCount: '{count} herramientas planificadas',
    toolsCount: '{count} herramientas',
    toolsLive: '{count} herramientas en vivo',
    ofToolsLive: '{count} de {total} herramientas en vivo',
    availableTools: '{name} disponibles',
    exploreOther: 'Explorar otras categorías',
    scheduledTitle: 'Programado para la implementación del lote {batch}',
    scheduledDescription:
      'Este centro de categoría está activo e indexado en la arquitectura de {name}. Las páginas individuales de herramientas con funcionalidad del navegador se agregarán aquí durante el lote {batch}.',
    plannedToolsTitle: 'Herramientas planificadas en esta categoría:',
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
    willAppear: 'aparecerán aquí cuando se publique el lote {batch}.',
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
    seoTitle: 'Acerca de UtilityFlow – Plataforma de herramientas online en el navegador',
    seoDescription:
      'Descubre cómo UtilityFlow crea utilidades rápidas y centradas en la privacidad para el navegador en siete categorías, sin cuentas, desorden ni subidas de datos innecesarias.',
    title: 'Acerca de UtilityFlow',
    intro:
      'UtilityFlow es una plataforma web independiente que crea 85 utilidades enfocadas y confiables para el navegador, para el trabajo digital cotidiano.',
    whyTitle: 'Por qué creamos UtilityFlow',
    whyP1:
      'Las tareas online rutinarias —contar palabras, validar JSON, revisar límites de caracteres, calcular pagos de préstamos o comprimir una imagen— a menudo obligan a las personas a usar sitios lentos llenos de capas intrusivas, descargas confusas o registros obligatorios.',
    whyP2:
      'Nuestro objetivo es sencillo: dar a cada utilidad una página limpia y dedicada que cargue rápido, explique con claridad cómo funciona la herramienta y se ejecute directamente en tu navegador siempre que los estándares web lo permitan.',
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
          'Las herramientas se publican y verifican en siete lotes por categoría, de modo que cada utilidad recibe pruebas funcionales y documentación exhaustivas.',
      },
    ],
    categoriesTitle: 'Siete categorías de herramientas planificadas',
    feedbackTitle: '¿Tienes comentarios o una solicitud?',
    feedbackBefore:
      'Si notas un caso límite en un cálculo, un problema de accesibilidad o quieres sugerir una utilidad para un próximo lote, comunícate a través de nuestra',
    feedbackLink: 'página de contacto',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Contactar con UtilityFlow – Soporte, informes de errores y sugerencias',
    seoDescription:
      'Ponte en contacto con el equipo de UtilityFlow para informar un problema, sugerir una nueva herramienta de utilidad o preguntar sobre privacidad y términos.',
    title: 'Contáctanos',
    intro:
      'Envía informes de errores, sugerencias de herramientas o consultas generales. Leemos cada mensaje y priorizamos las correcciones que mejoran la precisión y la accesibilidad de las herramientas.',
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
    successTitle: 'Mensaje preparado',
    successThanks:
      'Gracias, {name}. Tu mensaje sobre {subject} ha sido validado.',
    successNote:
      'Como UtilityFlow funciona como un sitio estático sin almacenar los mensajes de los usuarios en un servidor backend, también puedes enviar tu mensaje directamente desde tu cliente de correo a',
    sendAnother: 'Enviar otro mensaje',
    directEmail: 'Correo directo',
    directEmailText: '¿Prefieres escribir directamente? Envía un correo a nuestro equipo a:',
  },
  privacy: {
    seoTitle: 'Política de privacidad | UtilityFlow',
    seoDescription:
      'Lee la Política de privacidad de UtilityFlow sobre la ejecución de herramientas en el navegador, cookies, registros del servidor y divulgaciones de publicidad de terceros.',
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
        ],
      },
      {
        title: '3. Registros de alojamiento y telemetría técnica',
        paragraphs: [
          'UtilityFlow está alojado en Cloudflare Pages. Como ocurre con los proveedores de alojamiento web estándar, nuestra red perimetral puede procesar automáticamente metadatos estándar de solicitudes HTTP (como la dirección IP, el agente de usuario del navegador, la URL solicitada y la marca de tiempo) para entregar las páginas de forma confiable, mitigar abusos y mantener la seguridad.',
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
        ],
      },
    ],
    contactTitle: '6. Contacto',
    contactBefore:
      'Si tienes preguntas sobre esta Política de privacidad, contáctanos a través de nuestra',
    contactLink: 'página de contacto',
    contactMiddle: 'o envía un correo a',
  },
  terms: {
    seoTitle: 'Términos de servicio | UtilityFlow',
    seoDescription:
      'Revisa los Términos de servicio que rigen el uso de las utilidades del navegador de UtilityFlow, la propiedad intelectual, las exenciones de responsabilidad sobre la precisión y los límites de responsabilidad.',
    title: 'Términos de servicio',
    lastUpdated: 'Última actualización: noviembre de 2026',
    sections: [
      {
        title: '2. Uso permitido',
        paragraphs: [
          'Puedes usar UtilityFlow para tareas de productividad personales, educativas y comerciales. Aceptas no automatizar tráfico abusivo, intentar interrumpir la entrega del sitio, aplicar ingeniería inversa a las protecciones de seguridad ni usar ninguna utilidad para actividades ilegales.',
        ],
      },
      {
        title: '3. Precisión y exención de responsabilidad informativa',
        paragraphs: [
          'Aunque probamos cada utilidad con cuidado, todas las herramientas, cálculos, conversiones y revisiones de SEO se proporcionan «tal cual» y «según disponibilidad». Los resultados deben verificarse de forma independiente antes de tomar decisiones financieras, legales, médicas o de ingeniería de producción.',
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
        ],
      },
    ],
    acceptanceTitle: '1. Aceptación de los términos',
    acceptanceBefore:
      'Al acceder a UtilityFlow o usarlo, aceptas quedar sujeto a estos Términos de servicio y a nuestra',
    acceptanceLink: 'Política de privacidad',
    acceptanceAfter:
      '. Si no estás de acuerdo con alguna parte de estos términos, deja de usar el sitio web.',
    changesTitle: '6. Cambios y contacto',
    changesBefore:
      'Es posible que actualicemos estos Términos de servicio a medida que se publiquen nuevos lotes de herramientas. Las preguntas pueden dirigirse a nuestra',
    changesLink: 'página de contacto',
    changesAfter: '.',
  },
};
