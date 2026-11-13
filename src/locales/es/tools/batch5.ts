import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Batch 5: SEO tools (10) + Image & File tools (10).
 * Source: src/registry/batches/batch6/seoToolsPart1.ts, Part2,
 *         src/registry/batches/batch7/imageFileToolsPart1.ts, Part2.
 * Filled by Phase 1 translation. See batch1.ts for the required shape.
 */
export const ES_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'generador-de-meta-etiquetas',
    name: 'Generador de Meta Etiquetas y Open Graph',
    shortDescription:
      'Genere etiquetas HTML de título, meta descripción, canónicas, robots, Open Graph y Twitter/X Card con vista previa en vivo de la tarjeta.',
    keywords: [
      'generador de meta etiquetas',
      'generador de opengraph',
      'generador de twitter card',
      'etiquetas meta html seo',
      'meta tags open graph',
      'generador de meta descripcion',
      'creador de meta etiquetas html',
      'meta etiquetas para redes sociales',
      'generador de etiquetas og',
    ],
    seo: {
      title: 'Generador de Meta Etiquetas y Open Graph | UtilityFlow',
      description:
        'Cree títulos, descripciones y URL canónicas con etiquetas Open Graph y Twitter Card, control de longitud en vivo y vista previa social, gratis en su navegador.',
      primaryKeyword: 'generador de meta etiquetas',
      secondaryKeywords: [
        'generador de etiquetas open graph',
        'generador de meta tags sociales',
        'constructor de etiquetas head seo',
        'generador de meta tags twitter card',
      ],
      longTailKeywords: [
        'generar etiquetas meta html open graph y twitter card gratis',
        'revisar longitud de titulo y descripcion con vista previa social',
        'descargar etiquetas meta head seo listas para pegar',
        'crear meta etiquetas para sitio web con vista previa open graph',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Cree metadatos HTML `<head>` que cumplen los estándares: `<title>`, `<meta name="description">`, URL canónicas, directivas de indexación, etiquetas Open Graph (`og:*`) y marcado de Twitter/X Card, con escape de atributos y vista previa en vivo de la tarjeta social.',
    instructions: [
      {
        title: 'Ingrese el título y la meta descripción de la página',
        description:
          'Complete el Título de la página (apunte a 30–60 caracteres) y la Meta descripción (120–160 caracteres) mientras observa los indicadores de longitud en vivo.',
      },
      {
        title: 'Configure la URL canónica y las directivas de indexación',
        description:
          'Ingrese la URL canónica completa de la página y elija si los rastreadores deben indexarla y seguir sus enlaces.',
      },
      {
        title: 'Agregue etiquetas Open Graph',
        description:
          'Complete el título, la descripción, el tipo y la URL de la imagen de Open Graph (se recomienda 1200×630 píxeles) para que los enlaces se vean bien al compartirlos.',
      },
      {
        title: 'Configure la Twitter/X Card',
        description:
          'Elija summary o summary_large_image y confirme el título, la descripción y la imagen de la tarjeta que mostrará X.',
      },
      {
        title: 'Revise la vista previa en vivo de la tarjeta social',
        description:
          'Revise el panel de vista previa para ver exactamente cómo aparecerá el enlace en un feed social, y corrija cualquier recorte o imagen faltante antes de publicar.',
      },
      {
        title: 'Copie o descargue el fragmento HTML',
        description:
          'Copie el HTML escapado en el <head> de su página, o descargue meta-tags.html y reutilice el bloque en sus plantillas.',
      },
    ],
    examples: [
      {
        title: 'Bloque estándar de Open Graph y canónica para un sitio web',
        input: 'Título: UtilityFlow · Tipo: website · Tarjeta: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* y twitter:*',
        explanation: 'Escapa correctamente las comillas dobles y los ampersands dentro de los valores de los atributos.',
      },
      {
        title: 'Etiquetas de artículo de blog con og:type article',
        input: 'Título: Guía 2026 · Tipo: article · Imagen: 1200×630',
        output: '<meta property="og:type" content="article">, <meta property="article:published_time" ...>',
        explanation: 'El tipo article muestra el formato de vista previa correcto en redes sociales para entradas de blog.',
      },
    ],
    benefits: [
      'Escapa automáticamente los caracteres &, ", < y > en los atributos de las etiquetas',
      'Combina etiquetas head de SEO, etiquetas Open Graph y Twitter/X Cards en un solo fragmento coherente',
      'Muestra una vista previa de cómo aparecerán los enlaces compartidos en los feeds sociales antes de publicarlos',
      'Permite descargar un fragmento independiente meta-tags.html',
    ],
    useCases: [
      'Publicar páginas de lanzamiento, micrositios de marketing y centros de producto SaaS',
      'Estandarizar dimensiones de imágenes Open Graph y tipos de tarjeta en todos los artículos',
      'Verificar directivas index/noindex y URL canónicas antes del lanzamiento a producción',
      'Entregar plantillas <head> limpias de los equipos de marketing a los ingenieros frontend',
    ],
    faqs: [
      {
        question: '¿Necesito etiquetas separadas para Open Graph y Twitter/X?',
        answer:
          'X usa Open Graph para el título y la descripción cuando es necesario, pero declarar explícitamente twitter:card (summary_large_image) junto con og:* garantiza vistas previas de imágenes amplias y predecibles en todas partes.',
      },
      {
        question: '¿Qué tamaño debe tener mi og:image?',
        answer:
          'Use una imagen de 1200×630 píxeles (relación de aspecto 1.91:1) alojada en una URL HTTPS sin bloqueo de robots.txt.',
      },
      {
        question: '¿Agregar <meta name="keywords"> todavía ayuda al posicionamiento en Google?',
        answer:
          'Los principales motores de búsqueda ignoran las meta keywords debido al spam histórico, por lo que este generador mantiene su <head> limpio con títulos, descripciones, canónicas y etiquetas sociales que sí importan.',
      },
      {
        question: '¿El Generador de Meta Etiquetas es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que sus títulos, descripciones y URL nunca se suben a un servidor.',
      },
      {
        question: '¿Necesito instalar algo para usar el Generador de Meta Etiquetas?',
        answer:
          'No. Funciona en cualquier navegador moderno sin instalar nada, y puede generar etiquetas en computadora o móvil.',
      },
      {
        question: '¿Cuál es la longitud ideal para un meta título?',
        answer:
          'Apunte a 30–60 caracteres para que el título completo quepa en los resultados de búsqueda y en las tarjetas sociales sin cortarse con puntos suspensivos.',
      },
      {
        question: '¿Cuál es la longitud ideal para una meta descripción?',
        answer:
          'Manténgala entre 120 y 160 caracteres para que todo el resumen se vea en los resultados de búsqueda en computadora y móvil.',
      },
      {
        question: '¿Cómo maneja el Generador de Meta Etiquetas los caracteres especiales en los títulos?',
        answer:
          'Escapa automáticamente &, ", < y > dentro de los valores de los atributos con HTML, para que las comillas y los ampersands nunca rompan el código de su página.',
      },
      {
        question: '¿Qué es una URL canónica y por qué la incluye el generador?',
        answer:
          'Una URL canónica indica a los motores de búsqueda cuál versión de una página es la original cuando existen páginas similares, evitando la confusión por contenido duplicado.',
      },
      {
        question: '¿Cuál es la diferencia entre las etiquetas Open Graph y Twitter Card?',
        answer:
          'Las etiquetas Open Graph controlan las vistas previas de enlaces en Facebook, LinkedIn y apps de mensajería, mientras que las etiquetas Twitter Card controlan cómo aparece el mismo enlace en X.',
      },
      {
        question: '¿Qué tipo de tarjeta de Twitter debo elegir en el Generador de Meta Etiquetas?',
        answer:
          'Use summary_large_image para páginas con imágenes destacadas, como artículos y páginas de producto, y summary para páginas de texto simple donde basta una miniatura pequeña.',
      },
      {
        question: '¿Puedo ver una vista previa de cómo se verá mi enlace al compartirlo?',
        answer:
          'Sí. La vista previa en vivo de la tarjeta social muestra el título, la descripción y la imagen exactamente como aparecerán en el feed social antes de publicar.',
      },
      {
        question: '¿El Generador de Meta Etiquetas sube el contenido de mi página a algún lugar?',
        answer:
          'No. Todo funciona localmente en su navegador y nada de lo que escribe sale de su dispositivo.',
      },
      {
        question: '¿Cómo agrego las meta etiquetas generadas a mi sitio web?',
        answer:
          'Copie el fragmento y péguelo dentro de la sección <head> de su plantilla de página, o descargue meta-tags.html y reutilice el bloque en varias páginas.',
      },
      {
        question: '¿Cuándo debo usar una directiva robots noindex con el Generador de Meta Etiquetas?',
        answer:
          'Use noindex solo para páginas que nunca quiere en los resultados de búsqueda, como páginas de agradecimiento, resultados de búsqueda interna o copias de prueba de una página en vivo.',
      },
      {
        question: '¿Puedo usar el Generador de Meta Etiquetas para una entrada de blog o una página de producto?',
        answer:
          'Sí. Configure og:type en article para entradas de blog o product para páginas de tienda, para que cada plataforma muestre el formato de vista previa correcto.',
      },
      {
        question: '¿Qué pasa si mi URL de og:image es incorrecta o falta la imagen?',
        answer:
          'Las plataformas sociales no mostrarán imagen o mostrarán una vista previa rota, así que use siempre una URL de imagen HTTPS directa y revise la vista previa antes de publicar.',
      },
      {
        question: '¿El Generador de Meta Etiquetas admite páginas multilingües?',
        answer:
          'Genera etiquetas para una página a la vez, así que configure og:locale según el idioma de la página y genere un conjunto de etiquetas separado para cada versión traducida.',
      },
      {
        question: '¿Puedo descargar las meta etiquetas generadas como archivo?',
        answer:
          'Sí. El botón de descarga guarda un archivo meta-tags.html independiente con el fragmento completo escapado.',
      },
      {
        question: '¿El Generador de Meta Etiquetas mejorará mi posicionamiento en Google por sí solo?',
        answer:
          'Ninguna herramienta garantiza posiciones, pero los títulos, descripciones y etiquetas sociales precisos mejoran la tasa de clics y la forma en que se presentan sus páginas.',
      },
    ],
  },
  'serp-snippet-preview': {
    slug: 'vista-previa-de-fragmento-serp',
    name: 'Vista Previa de Fragmento SERP',
    shortDescription:
      'Simule resultados de búsqueda de Google en computadora y móvil con verificación real del ancho en píxeles del título y resaltado de palabras clave en negrita.',
    keywords: [
      'vista previa serp',
      'simulador de fragmento google',
      'verificador de ancho en pixeles titulo seo',
      'vista previa meta descripcion',
      'vista previa serp google',
      'herramienta de vista previa de resultados',
      'verificador de fragmento seo',
      'verificador de titulo google',
      'verificador de longitud meta descripcion',
    ],
    seo: {
      title: 'Vista Previa de Fragmento SERP de Google | UtilityFlow',
      description:
        'Vea su fragmento de búsqueda de Google en computadora y móvil con verificación real del ancho en píxeles del título y alertas de recorte antes de publicar.',
      primaryKeyword: 'vista previa de fragmento serp',
      secondaryKeywords: [
        'simulador serp de google',
        'verificador de ancho en pixeles titulo seo',
        'vista previa de resultado movil',
        'herramienta de vista previa serp escritorio',
      ],
      longTailKeywords: [
        'revisar ancho en pixeles 580px del titulo seo en google',
        'vista previa de fragmento escritorio vs movil y recorte',
        'probar resaltado en negrita de palabras clave en meta descripcion',
        'vista previa de fragmento de google antes de publicar pagina',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mida si su título SEO cabe dentro del presupuesto de visualización de Google de unos 580 px usando cálculo en vivo de métricas de fuente con HTML5 Canvas en lugar de solo adivinar por caracteres, y vea vistas previas de tarjetas de búsqueda de escritorio y móvil con resaltado de palabras clave en negrita.',
    instructions: [
      {
        title: 'Ingrese título, descripción y URL',
        description:
          'Escriba su Título SEO candidato, Meta descripción, URL de la página y, si quiere, el Nombre del sitio o la fecha de publicación.',
      },
      {
        title: 'Mida el ancho en píxeles',
        description:
          'Revise la lectura de píxeles en vivo junto al Título SEO: las letras anchas como W y M consumen más píxeles horizontales que l e i.',
      },
      {
        title: 'Revise la vista previa de escritorio',
        description:
          'Revise la tarjeta de búsqueda de escritorio para ver el título completo, la URL en forma de ruta y la descripción tal como las verían los usuarios de computadora.',
      },
      {
        title: 'Cambie a la vista previa móvil',
        description:
          'Cambie a la vista Móvil para revisar el punto de recorte más corto y asegurarse de que el mensaje clave siga apareciendo en pantallas pequeñas.',
      },
      {
        title: 'Pruebe el resaltado de palabras clave en negrita',
        description:
          'Ingrese su consulta de búsqueda objetivo en el campo Palabra clave en negrita para ver qué palabras resaltaría Google dentro de su fragmento.',
      },
      {
        title: 'Copie las etiquetas terminadas',
        description:
          'Cuando la vista previa se vea bien, copie las etiquetas <title> y <meta name="description"> listas para pegar en su página.',
      },
    ],
    examples: [
      {
        title: 'Detectar el recorte de un título con caracteres anchos',
        input: 'Título de 60 caracteres lleno de W y M en mayúsculas',
        output: 'Marca desbordamiento de más de 580 px aunque tenga menos de 60 caracteres, para que lo recorte antes del corte con puntos suspensivos.',
        explanation: 'Las métricas de texto de Canvas aproximan los anchos reales de las fuentes serif/sans de los resultados de búsqueda.',
      },
      {
        title: 'Comparar el recorte de la descripción en móvil y escritorio',
        input: 'Descripción de 160 caracteres · Vista móvil activada',
        output: 'La vista móvil muestra el corte cerca de los 120 caracteres, con el mensaje clave al inicio.',
        explanation: 'La vista previa móvil revela qué parte del mensaje sobrevive al pliegue en pantallas pequeñas.',
      },
    ],
    benefits: [
      'Usa anchos en píxeles de Canvas measureText() además del conteo de caracteres',
      'Formatea el dominio y los segmentos de ruta en rutas de navegación limpias automáticamente',
      'Simula términos de consulta en negrita dentro de las meta descripciones para revisar la tasa de clics',
      'Copia las etiquetas <title> y <meta name="description"> listas para pegar con un clic',
    ],
    useCases: [
      'Refinar títulos de blog y de páginas de producto para evitar el recorte "..." a mitad de palabra',
      'Escribir meta descripciones con mayor CTR dentro del pliegue móvil de unos 120 caracteres',
      'Revisar cómo las fechas de publicación afectan la longitud visible de la descripción',
      'Revisar fragmentos de páginas de destino durante el control de calidad editorial',
    ],
    faqs: [
      {
        question: '¿Por qué el ancho en píxeles importa más que el conteo estricto de caracteres?',
        answer:
          'Los motores de búsqueda recortan los títulos según el ancho en píxeles del contenedor (unos 580–600 px en escritorio), no según una longitud fija de caracteres. Las letras mayúsculas y los caracteres anchos como W o M ocupan casi el doble de ancho que i o l.',
      },
      {
        question: '¿Google puede reescribir mi título o mi meta descripción en los resultados en vivo?',
        answer:
          'Sí. Google a veces reescribe los fragmentos dinámicamente para que coincidan con consultas de búsqueda específicas o con encabezados H1, aunque los títulos concisos y precisos reducen las reescrituras no deseadas.',
      },
      {
        question: '¿Esto obtiene posiciones en vivo de Google?',
        answer:
          'No. Es un simulador visual de fragmentos SERP sin conexión que funciona por completo en su navegador.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que nada de lo que escribe se sube a ningún lugar.',
      },
      {
        question: '¿Cuál es la longitud ideal del título para los resultados de búsqueda de Google?',
        answer:
          'Apunte a menos de unos 580 píxeles en escritorio, lo que suele significar entre 50 y 60 caracteres según el ancho de las letras.',
      },
      {
        question: '¿Cómo mide la Vista Previa de Fragmento SERP el ancho en píxeles?',
        answer:
          'Usa la API Canvas measureText() del navegador para calcular el ancho real renderizado de su título con el mismo estilo de fuente que usan los resultados de búsqueda.',
      },
      {
        question: '¿Por qué mi título se corta aunque tenga menos de 60 caracteres?',
        answer:
          'Los motores de búsqueda recortan por ancho en píxeles, no por conteo de caracteres, así que las letras anchas como W y M ocupan mucho más espacio que las letras angostas como i y l.',
      },
      {
        question: '¿Cuál es la longitud ideal de la meta descripción para escritorio y móvil?',
        answer:
          'En escritorio se muestran unos 155–160 caracteres, mientras que en móvil el corte es de unos 120, así que ponga primero las palabras y palabras clave más importantes.',
      },
      {
        question: '¿Puedo ver vistas previas de resultados de búsqueda de escritorio y móvil?',
        answer:
          'Sí. Alterne entre las vistas de Escritorio y Móvil para ver cómo se ven el mismo título y descripción en cada tamaño de pantalla.',
      },
      {
        question: '¿Qué hace la función de palabras clave en negrita en la Vista Previa de Fragmento SERP?',
        answer:
          'Ingrese una consulta de búsqueda objetivo y la vista previa pone en negrita las palabras coincidentes dentro de su título y descripción, tal como Google resalta los términos de consulta en los resultados reales.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP muestra mi posicionamiento real en Google?',
        answer:
          'No. Es un simulador visual sin conexión que muestra cómo podría verse un fragmento, no datos de posicionamiento en vivo de Google.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP sube mi título o mi URL a algún lugar?',
        answer:
          'No. Toda la vista previa y la medición ocurren localmente en su navegador.',
      },
      {
        question: '¿Cómo copio el título y la meta descripción después de la vista previa?',
        answer:
          'Use el botón de copia con un clic para obtener las etiquetas <title> y <meta name="description"> listas para pegar en su página.',
      },
      {
        question: '¿Por qué Google a veces reescribe mi título en los resultados en vivo?',
        answer:
          'Google puede usar su H1 u otro texto de la página cuando cree que coincide mejor con una consulta de búsqueda, aunque los títulos concisos y precisos reducen las reescrituras.',
      },
      {
        question: '¿Debo incluir mi marca o el nombre del sitio en el título?',
        answer:
          'A menudo sí. Póngalo al final después de un separador, para que la palabra clave principal quede primero y la marca siga apareciendo en los resultados.',
      },
      {
        question: '¿Cuál es la diferencia entre una etiqueta de título y un encabezado H1?',
        answer:
          'La etiqueta de título aparece en los resultados de búsqueda y en las pestañas del navegador, mientras que el H1 es el titular visible dentro de la página.',
      },
      {
        question: '¿Puedo probar varios títulos rápidamente en la Vista Previa de Fragmento SERP?',
        answer:
          'Sí. Edite el campo del título y la vista previa, el ancho en píxeles y la advertencia de recorte se actualizan en vivo mientras escribe.',
      },
      {
        question: '¿La Vista Previa de Fragmento SERP tiene en cuenta las fechas de publicación?',
        answer:
          'Sí. Al agregar una fecha se muestra cómo acorta la descripción visible, lo que importa para noticias y entradas de blog.',
      },
      {
        question: '¿Qué debo hacer si mi descripción se recorta en móvil?',
        answer:
          'Mueva el mensaje clave y la palabra clave objetivo al inicio de la descripción, para que la vista móvil plegada siga teniendo sentido.',
      },
      {
        question: '¿La verificación de ancho en píxeles de la Vista Previa de Fragmento SERP es precisa para todos los idiomas?',
        answer:
          'Aproxima el renderizado real de búsqueda a partir de las fuentes de su navegador, por lo que los resultados son más precisos para escrituras latinas y pueden variar con otros sistemas de escritura.',
      },
    ],
  },
  'xml-sitemap-generator': {
    slug: 'generador-de-sitemap-xml',
    name: 'Generador de Sitemap XML',
    shortDescription:
      'Genere archivos XML de sitemap válidos según Sitemaps.org a partir de listas de URL con deduplicación, <lastmod>, <changefreq> y descarga .xml.',
    keywords: [
      'generador de sitemap xml',
      'constructor de sitemap.xml',
      'crear sitemap xml en linea',
      'creador de sitemap seo',
      'generador de sitemap gratis',
      'creador de sitemap xml en linea',
      'generar sitemap.xml',
      'herramienta constructora de sitemap',
      'generador de sitemap para sitio web',
    ],
    seo: {
      title: 'Generador de Sitemap XML para Sitios Web | UtilityFlow',
      description:
        'Convierta una lista de URL canónicas en un sitemap.xml válido con deduplicación, fechas lastmod, sugerencias de changefreq y escape XML, gratis en su navegador.',
      primaryKeyword: 'generador de sitemap xml',
      secondaryKeywords: [
        'constructor de sitemap xml',
        'crear sitemap.xml gratis',
        'herramienta de sitemap con url canonicas',
        'generador de archivo sitemap.xml',
      ],
      longTailKeywords: [
        'generar sitemap xml valido desde lista de urls sin conexion',
        'crear sitemap.xml con etiquetas lastmod y changefreq',
        'escapar caracteres especiales en urls de sitemap xml',
        'crear sitemap xml para sitio web pequeno gratis en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierta cualquier lista de URL canónicas `https://` en un `sitemap.xml` válido según el esquema Sitemaps 0.9, con filtrado de URL no válidas, deduplicación automática, escape de caracteres XML y exportación `.xml`.',
    instructions: [
      {
        title: 'Pegue las URL canónicas',
        description:
          'Ingrese una URL completa https:// (o http://) por línea en el editor; las líneas con errores se marcan claramente.',
      },
      {
        title: 'Revise las líneas no válidas marcadas',
        description:
          'Revise las líneas resaltadas por errores tipográficos o por falta del prefijo https:// y corríjalas antes de generar, ya que las URL no válidas se excluyen del XML.',
      },
      {
        title: 'Configure las etiquetas opcionales',
        description:
          'Configure una fecha <lastmod> opcional, una sugerencia <changefreq> y una <priority> (u omita las etiquetas opcionales para archivos más limpios).',
      },
      {
        title: 'Revise la deduplicación',
        description:
          'Confirme el conteo de duplicados que muestra la herramienta para que el sitemap final liste cada URL canónica exactamente una vez.',
      },
      {
        title: 'Revise el XML generado',
        description:
          'Inspeccione la salida XML para confirmar que el urlset, las entradas <loc> y los valores <lastmod> opcionales se vean correctos.',
      },
      {
        title: 'Copie o descargue sitemap.xml',
        description:
          'Haga clic en Copiar XML o Descargar .xml para colocarlo directamente en la carpeta raíz o /public/ de su sitio.',
      },
    ],
    examples: [
      {
        title: 'Generar un sitemap de sitio estático para Cloudflare Pages',
        input: '5 URL canónicas · lastmod: 2026-11-12 · Deduplicar: activado',
        output: '<?xml version="1.0"?> válido <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: 'Escapa las entidades XML (&, <, >, comillas) limpiamente dentro de cada elemento <loc>.',
      },
      {
        title: 'Limpiar una lista con duplicados y errores tipográficos',
        input: '12 URL pegadas, 2 duplicadas y 1 con un error tipográfico',
        output: 'Sitemap con 9 URL únicas y la línea no válida marcada y excluida.',
        explanation: 'La deduplicación y la validación evitan que un error en una línea rompa todo el archivo.',
      },
    ],
    benefits: [
      'Valida cada línea con el análisis de URL nativo del navegador antes de emitir el XML',
      'Escapa automáticamente & y caracteres especiales de consulta dentro de las URL <loc>',
      'Deduplica las URL idénticas para evitar sitemaps inflados',
      'Permite omitir <priority> y <changefreq> limpiamente cuando lo desea (Google ignora ambas)',
    ],
    useCases: [
      'Crear sitemaps iniciales para páginas de destino estáticas o micrositios de documentación',
      'Preparar archivos limpios de envío de URL después de migraciones de sitio',
      'Generar sitemaps complementarios sin imágenes ni noticias para sitios de pequeñas empresas',
      'Exportar XML con formato directamente para desplegar junto con robots.txt',
    ],
    faqs: [
      {
        question: '¿Debo incluir URL no canónicas, redirigidas o noindex en un sitemap?',
        answer:
          'No. Los sitemaps deben listar solo URL canónicas que devuelven HTTP 200 y que usted quiere que los motores de búsqueda indexen.',
      },
      {
        question: '¿Google todavía usa <priority> y <changefreq>?',
        answer:
          'Google Search ignora las etiquetas <priority> y <changefreq> y se enfoca principalmente en <loc> y en fechas <lastmod> precisas cuando se actualizan de forma significativa.',
      },
      {
        question: '¿Este generador rastrea automáticamente mi sitio web en vivo?',
        answer:
          'No. Las páginas del lado del cliente no pueden rastrear sitios web arbitrarios de otros orígenes debido a la seguridad CORS del navegador; pegue aquí su lista de rutas exportada para compilar XML válido al instante.',
      },
      {
        question: '¿El Generador de Sitemap XML es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que su lista de URL nunca se sube a un servidor.',
      },
      {
        question: '¿Cuántas URL puedo incluir en un sitemap?',
        answer:
          'El protocolo Sitemaps permite hasta 50.000 URL o 50 MB sin comprimir por archivo, así que los sitios grandes deben dividirse en varios sitemaps o usar un índice de sitemaps.',
      },
      {
        question: '¿Cuál es la diferencia entre un sitemap y robots.txt?',
        answer:
          'Un sitemap lista las URL que usted quiere que los motores de búsqueda descubran, mientras que robots.txt da a los rastreadores reglas sobre qué rutas pueden o no visitar.',
      },
      {
        question: '¿Dónde subo el archivo sitemap.xml?',
        answer:
          'Colóquelo en la raíz de su sitio, por ejemplo https://ejemplo.com/sitemap.xml, para que los rastreadores puedan encontrarlo en la ubicación estándar.',
      },
      {
        question: '¿Necesito enviar mi sitemap a Google?',
        answer:
          'Se recomienda. Envíelo en Google Search Console y también haga referencia a él con una línea Sitemap: en robots.txt para otros rastreadores.',
      },
      {
        question: '¿Qué formatos de URL acepta el Generador de Sitemap XML?',
        answer:
          'Ingrese una URL completa https:// o http:// por línea, incluido el dominio, y la herramienta marca cualquier línea que no sea una URL válida.',
      },
      {
        question: '¿Qué pasa con las URL duplicadas en mi sitemap?',
        answer:
          'Los duplicados se eliminan automáticamente para que el sitemap terminado contenga cada URL canónica exactamente una vez.',
      },
      {
        question: '¿Qué pasa con las URL no válidas o mal formadas en el Generador de Sitemap XML?',
        answer:
          'Las líneas no válidas se marcan claramente y se excluyen del XML, para que un error tipográfico en una línea nunca rompa todo el archivo.',
      },
      {
        question: '¿Cómo maneja el Generador de Sitemap XML los caracteres especiales en las URL?',
        answer:
          'Escapa con XML el carácter & y otros caracteres especiales dentro de los elementos <loc>, para que las cadenas de consulta y las rutas codificadas se mantengan válidas.',
      },
      {
        question: '¿Debo incluir URL de imágenes o videos en un sitemap normal?',
        answer:
          'Un sitemap estándar lista solo URL de páginas. Las URL de imágenes y videos necesitan sus propias extensiones de sitemap si quiere indexarlas por separado.',
      },
      {
        question: '¿Debo listar URL paginadas o filtradas en mi sitemap?',
        answer:
          'No. Liste solo páginas canónicas e indexables y deje fuera la paginación, los parámetros de ordenación y las páginas de resultados de búsqueda interna.',
      },
      {
        question: '¿Qué es <lastmod> y debo configurarlo en mi sitemap?',
        answer:
          'Registra la fecha en que una página cambió por última vez. Configúrelo solo cuando la fecha sea precisa, porque Google lo usa para juzgar qué tan actualizada está una página.',
      },
      {
        question: '¿El Generador de Sitemap XML funciona sin conexión?',
        answer:
          'Sí. Funciona por completo en su navegador sin subir nada, por lo que puede crear sitemaps sin conexión a internet una vez cargada la página.',
      },
      {
        question: '¿Puedo regenerar mi sitemap después de agregar páginas nuevas?',
        answer:
          'Sí. Pegue la lista de URL actualizada y descargue un sitemap.xml nuevo, luego vuelva a subirlo a la raíz de su sitio.',
      },
      {
        question: '¿Qué es un archivo índice de sitemap?',
        answer:
          'Es un archivo que lista varios archivos de sitemap, usado por sitios grandes para organizar miles de URL por secciones o idiomas.',
      },
      {
        question: '¿Tener un sitemap garantiza que Google indexará mis páginas?',
        answer:
          'No. Un sitemap ayuda a los motores de búsqueda a descubrir URL, pero la indexación sigue dependiendo de la calidad de la página, los enlaces y el presupuesto de rastreo.',
      },
      {
        question: '¿Puedo usar el Generador de Sitemap XML para un sitio de WordPress o Shopify?',
        answer:
          'Sí. Exporte o copie su lista de URL canónicas desde cualquier plataforma, péguela aquí y la herramienta crea un sitemap.xml estándar.',
      },
    ],
  },
  'robots-txt-generator': {
    slug: 'generador-de-robots-txt',
    name: 'Generador de Robots.txt',
    shortDescription:
      'Cree reglas válidas de robots.txt para rastreadores agrupadas por User-agent, con rutas Allow/Disallow, Crawl-delay y directivas Sitemap.',
    keywords: [
      'generador de robots.txt',
      'crear robots txt',
      'constructor allow disallow rastreadores',
      'generador de directiva sitemap',
      'creador de robots txt en linea',
      'generador de archivo robots.txt',
      'bloquear rastreadores de busqueda',
      'allow disallow robots txt',
      'crear archivo robots.txt gratis',
    ],
    seo: {
      title: 'Generador de Robots.txt y Directivas | UtilityFlow',
      description:
        'Cree un robots.txt válido con grupos de User-agent, reglas Allow y Disallow, crawl-delay y enlaces de sitemap con plantillas iniciales, gratis en su navegador.',
      primaryKeyword: 'generador de robots.txt',
      secondaryKeywords: [
        'creador de robots txt',
        'rutas disallow para rastreadores',
        'robots.txt para wordpress y spa',
        'creador de archivo robots.txt',
      ],
      longTailKeywords: [
        'generar robots.txt limpio para react vite y cloudflare pages',
        'agregar varias directivas sitemap al archivo robots.txt',
        'bloquear entorno de pruebas de los rastreadores con robots.txt',
        'crear robots.txt para bloquear rastreadores de ia del sitio web',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Cree directivas `robots.txt` limpias y agrupadas con plantillas iniciales para sitios abiertos, apps web SaaS, WordPress o bloqueo de pruebas, con filas personalizadas de `User-agent`, `Allow`/`Disallow`, `Crawl-delay` y declaraciones `Sitemap:`.',
    instructions: [
      {
        title: 'Elija una plantilla inicial o edite las reglas',
        description:
          'Haga clic en Permitir todo, App web estándar / SaaS, WordPress limpio o Pruebas (Bloquear todo) para completar reglas comunes.',
      },
      {
        title: 'Personalice User-agents y rutas',
        description:
          'Agregue rutas Allow o Disallow para * o para rastreadores específicos como Googlebot, Bingbot o GPTBot.',
      },
      {
        title: 'Configure Crawl-delay donde sea necesario',
        description:
          'Agregue un valor de Crawl-delay para rastreadores que lo respetan, como Bingbot, para ralentizar las solicitudes en un servidor pequeño o compartido.',
      },
      {
        title: 'Adjunte URL de sitemap',
        description:
          'Ingrese la URL completa de su sitemap XML para que los rastreadores puedan descubrirlo desde robots.txt, agregando más de una línea si usa varios sitemaps.',
      },
      {
        title: 'Revise la salida agrupada',
        description:
          'Verifique que cada bloque User-agent esté agrupado correctamente y que ninguna regla Disallow bloquee por accidente CSS, JavaScript o páginas públicas.',
      },
      {
        title: 'Copie, descargue y pruebe',
        description:
          'Copie o descargue robots.txt, colóquelo en la raíz de su dominio y verifíquelo con el probador de robots.txt en Google Search Console.',
      },
    ],
    examples: [
      {
        title: 'App web SaaS que bloquea /api/ y /admin/',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Archivo robots.txt agrupado que termina con Sitemap: https://ejemplo.com/sitemap.xml',
        explanation: 'Agrupa limpiamente los User-agents coincidentes en bloques únicos.',
      },
      {
        title: 'Bloquear todo un entorno de pruebas',
        input: 'Plantilla: Pruebas (Bloquear todo) · Sitemap: ninguno',
        output: 'User-agent: *\nDisallow: /',
        explanation: 'La plantilla de pruebas evita que los motores de búsqueda indexen un sitio sin lanzar.',
      },
    ],
    benefits: [
      'Agrupa automáticamente las reglas por bloques de User-agent coincidentes según las mejores prácticas de RFC 9309',
      'Incluye plantillas iniciales verificadas para evitar bloquear por accidente recursos CSS/JS',
      'Admite varias declaraciones Sitemap: para índices de sitemap o archivos localizados',
      'La descarga con un clic produce un archivo robots.txt listo para desplegar',
    ],
    useCases: [
      'Evitar que los rastreadores gasten presupuesto en /api/, /admin/ o URL de búsqueda interna con consultas',
      'Anunciar ubicaciones de sitemap XML en la raíz del dominio',
      'Agregar reglas específicas para bots especializados como AdsBot o rastreadores de IA',
      'Configurar entornos de pruebas antes del lanzamiento por DNS',
    ],
    faqs: [
      {
        question: '¿Disallow: /admin/ en robots.txt mantiene una página fuera de la Búsqueda de Google o protege secretos?',
        answer:
          'Distinción importante: robots.txt detiene el rastreo, no necesariamente la indexación si otros sitios enlazan directamente a la URL, y robots.txt es legible públicamente. Use autenticación para rutas sensibles y <meta name="robots" content="noindex"> para evitar la indexación.',
      },
      {
        question: '¿Dónde debe alojarse robots.txt?',
        answer:
          'Debe servirse en la ruta raíz exacta de su host (https://sudominio.com/robots.txt), devolviendo HTTP 200.',
      },
      {
        question: '¿Google respeta Crawl-delay?',
        answer:
          'Googlebot ignora Crawl-delay (use la configuración de Search Console si lo necesita), mientras que Bing y otros rastreadores todavía respetan intervalos numéricos de Crawl-delay.',
      },
      {
        question: '¿El Generador de Robots.txt es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que las reglas de su sitio nunca se suben a ningún lugar.',
      },
      {
        question: '¿Cuál es la diferencia entre robots.txt y una meta etiqueta robots noindex?',
        answer:
          'Robots.txt indica a los rastreadores que no visiten una ruta, mientras que una etiqueta noindex indica a los motores de búsqueda que no muestren una página rastreada en los resultados. Resuelven problemas diferentes.',
      },
      {
        question: '¿Puede robots.txt bloquear rastreadores de IA como GPTBot?',
        answer:
          'Sí. Agregue un grupo User-agent: GPTBot con Disallow: / para mantener fuera a ese rastreador, y repita el patrón para otros bots de IA que quiera bloquear.',
      },
      {
        question: '¿Qué significa "User-agent: *" en robots.txt?',
        answer:
          'Significa que las reglas de ese grupo se aplican a todos los rastreadores que visitan su sitio, a menos que un grupo User-agent más específico las anule.',
      },
      {
        question: '¿Cuál es la diferencia entre Allow y Disallow en robots.txt?',
        answer:
          'Allow permite rastrear una ruta y Disallow la bloquea. Cuando las reglas se superponen, gana la regla coincidente más específica.',
      },
      {
        question: '¿Puedo bloquear una sola página o carpeta con el Generador de Robots.txt?',
        answer:
          'Sí. Agregue Disallow: /pagina/ para una página o Disallow: /carpeta/ para bloquear todo un directorio y su contenido.',
      },
      {
        question: '¿Debo bloquear mis archivos CSS y JavaScript en robots.txt?',
        answer:
          'No. Los motores de búsqueda necesitan su CSS y JavaScript para renderizar las páginas correctamente, y bloquearlos puede dañar el posicionamiento.',
      },
      {
        question: '¿Qué plantillas iniciales incluye el Generador de Robots.txt?',
        answer:
          'Incluye Permitir todo, App web estándar / SaaS, WordPress limpio y Pruebas (Bloquear todo), para que pueda partir de una plantilla probada en lugar de un archivo en blanco.',
      },
      {
        question: '¿Cómo agrego mi sitemap a robots.txt?',
        answer:
          'Agregue una línea como Sitemap: https://ejemplo.com/sitemap.xml al final del archivo para que los rastreadores encuentren su sitemap desde la raíz.',
      },
      {
        question: '¿Puedo tener varias líneas Sitemap en un archivo robots.txt?',
        answer:
          'Sí. Puede listar varias URL de sitemap, lo que es útil para índices de sitemap o sitemaps separados por idioma o sección.',
      },
      {
        question: '¿El Generador de Robots.txt sube mis reglas a algún lugar?',
        answer:
          'No. Todo funciona localmente en su navegador y el archivo se genera en su dispositivo.',
      },
      {
        question: '¿Cómo pruebo mi robots.txt después de publicarlo?',
        answer:
          'Súbalo a la raíz de su dominio y luego verifíquelo con el probador de robots.txt en Google Search Console o solicitándolo como Googlebot.',
      },
      {
        question: '¿Qué pasa si bloqueo por accidente todo mi sitio en robots.txt?',
        answer:
          'Los motores de búsqueda dejarán de rastrear sus páginas. Elimine la línea Disallow: /, vuelva a subir el archivo y solicite un nuevo rastreo en Search Console.',
      },
      {
        question: '¿Robots.txt oculta mis páginas de administración de los hackers?',
        answer:
          'No. Robots.txt es legible públicamente, así que cualquiera puede ver qué rutas bloqueó. Proteja las páginas sensibles con contraseñas o autenticación.',
      },
      {
        question: '¿Qué es Crawl-delay y debo usarlo en robots.txt?',
        answer:
          'Crawl-delay pide a los rastreadores que esperen un número de segundos entre solicitudes. Googlebot lo ignora, pero Bing y algunos otros rastreadores lo respetan.',
      },
      {
        question: '¿Puedo escribir reglas de robots.txt diferentes para Googlebot y Bingbot?',
        answer:
          'Sí. Cree un grupo User-agent separado para cada rastreador con sus propias líneas Allow y Disallow.',
      },
      {
        question: '¿Dónde subo robots.txt en Cloudflare Pages o en un sitio estático?',
        answer:
          'Coloque el archivo en la carpeta public/ o en la raíz de su salida de compilación para que se sirva en https://sudominio.com/robots.txt.',
      },
    ],
  },
  'schema-markup-generator': {
    slug: 'generador-de-datos-estructurados',
    name: 'Generador de Datos Estructurados (JSON-LD)',
    shortDescription:
      'Genere scripts JSON-LD válidos de Schema.org para marcado Article, FAQPage, Product, Organization y BreadcrumbList.',
    keywords: [
      'generador de datos estructurados',
      'generador de json ld',
      'generador de esquema faq',
      'constructor de datos estructurados',
      'generador de schema.org json-ld',
      'generador de esquema rich snippet',
      'generador de esquema faqpage',
      'marcado de esquema de producto',
      'generador de esquema breadcrumb',
    ],
    seo: {
      title: 'Generador de Datos Estructurados JSON-LD | UtilityFlow',
      description:
        'Cree JSON-LD válido de Schema.org para Article, FAQPage, Product, Organization y BreadcrumbList con escape HTML seguro, copia de script y exportación .jsonld.',
      primaryKeyword: 'generador de datos estructurados',
      secondaryKeywords: [
        'generador de json-ld en linea',
        'herramienta de datos estructurados faqpage',
        'constructor de esquema de producto',
        'herramienta de marcado de datos estructurados',
      ],
      longTailKeywords: [
        'generar script json-ld valido de schema.org gratis',
        'crear datos estructurados dinamicos de faqpage y breadcrumb',
        'escapar json-ld de forma segura para etiquetas script html',
        'crear marcado de esquema json-ld para articulo y producto',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Cree bloques limpios de datos estructurados JSON-LD de Schema.org para `Article`, `FAQPage`, `Product`, `Organization` y `BreadcrumbList`, con constructores dinámicos de filas, escape seguro de `<` en HTML dentro de etiquetas script y exportación `.jsonld`.',
    instructions: [
      {
        title: 'Elija un tipo de Schema.org',
        description:
          'Seleccione Article, FAQPage, Product, Organization o BreadcrumbList en el selector superior.',
      },
      {
        title: 'Complete las propiedades de la entidad',
        description:
          'Ingrese titulares, pares de preguntas y respuestas, ofertas de precios, detalles de la organización o rutas de navegación.',
      },
      {
        title: 'Agregue filas extra para las listas',
        description:
          'Agregue pares extra de preguntas y respuestas para FAQPage o elementos extra de ruta para BreadcrumbList, y elimine las filas que no necesita.',
      },
      {
        title: 'Revise el JSON-LD generado',
        description:
          'Revise la salida JSON en vivo para confirmar los nombres y valores correctos de los campos, y confirme que las propiedades opcionales vacías se omiten automáticamente.',
      },
      {
        title: 'Copie la etiqueta <script> o exporte .jsonld',
        description:
          'Copie el bloque completo <script type="application/ld+json"> en el <head> de su página o descargue el archivo .jsonld.',
      },
      {
        title: 'Valide antes de publicar',
        description:
          'Pegue la salida en la Prueba de resultados enriquecidos o en el validador de Schema para detectar errores de sintaxis, ya que los motores de búsqueda ignoran el JSON-LD no válido.',
      },
    ],
    examples: [
      {
        title: 'Crear datos estructurados dinámicos de FAQPage',
        input: '2 pares de Pregunta/Respuesta bajo el esquema FAQPage',
        output: 'Bloque de script JSON-LD FAQPage válido con @context https://schema.org',
        explanation: 'Usa serialización JSON segura con escape \\u003c para evitar el cierre prematuro de </script>.',
      },
      {
        title: 'Marcar un producto con precio y disponibilidad',
        input: 'Nombre: Curso SEO · Precio: 49 USD · Disponibilidad: InStock',
        output: 'Bloque Product con offers y availability listo para pegar en la página de producto.',
        explanation: 'Los campos de oferta y disponibilidad permiten resultados enriquecidos de compras en Google.',
      },
    ],
    benefits: [
      'Admite 5 de los tipos de datos estructurados de Schema.org con mayor impacto',
      'Escapa los caracteres "<" limpiamente dentro de JSON-LD para evitar rupturas por inyección de script HTML',
      'Omite automáticamente las propiedades opcionales vacías para una sintaxis limpia',
      'Se combina naturalmente con el Formateador y Validador de JSON para extensiones personalizadas',
    ],
    useCases: [
      'Agregar metadatos de autor y publicación de Article a plantillas de blog editorial',
      'Estructurar precio, moneda y disponibilidad de Stock de productos para feeds de comerciantes',
      'Declarar la identidad de marca Organization y la URL del logotipo en todo el sitio',
      'Insertar rutas de jerarquía BreadcrumbList en páginas de categoría y de herramientas',
    ],
    faqs: [
      {
        question: '¿Dónde debo colocar los datos estructurados JSON-LD en una página web?',
        answer:
          'Puede colocar <script type="application/ld+json"> dentro de <head> o dentro de <body>; colocarlo limpiamente en <head> es la práctica estándar.',
      },
      {
        question: '¿Por qué el generador escapa "<" como "\\u003c" en la salida JSON?',
        answer:
          'Si la respuesta de una FAQ contiene "</script>", los navegadores terminan el bloque de script HTML antes de tiempo, a menos que "<" se escape como "\\u003c", lo que sigue siendo JSON 100% válido.',
      },
      {
        question: '¿Agregar marcado Schema garantiza fragmentos enriquecidos en Google?',
        answer:
          'No. Los datos estructurados válidos hacen que las páginas sean elegibles para funciones de búsqueda mejoradas, mientras que los motores de búsqueda deciden la elegibilidad de visualización según la calidad general de la página y las directrices.',
      },
      {
        question: '¿El Generador de Datos Estructurados es gratis?',
        answer:
          'Sí. Es completamente gratis y funciona por completo en su navegador, por lo que su contenido nunca se sube a un servidor.',
      },
      {
        question: '¿Qué tipos de Schema.org admite el Generador de Datos Estructurados?',
        answer:
          'Admite Article, FAQPage, Product, Organization y BreadcrumbList, que cubren los casos de uso de resultados enriquecidos más comunes.',
      },
      {
        question: '¿Cuál es la diferencia entre JSON-LD y Microdata?',
        answer:
          'JSON-LD es un bloque <script> separado que se pega en su página, mientras que Microdata agrega atributos directamente a sus elementos HTML visibles.',
      },
      {
        question: '¿Cómo agrego el JSON-LD generado a mi sitio web?',
        answer:
          'Copie el bloque completo <script type="application/ld+json"> y péguelo en el <head> de la página correspondiente.',
      },
      {
        question: '¿Cómo pruebo mi marcado de esquema después de generarlo?',
        answer:
          'Pegue la URL de la página o el código en la Prueba de resultados enriquecidos o en el validador de Schema.org para revisar errores y mejoras elegibles.',
      },
      {
        question: '¿Puedo combinar varios tipos de esquema en una página?',
        answer:
          'Sí. Una sola página puede llevar marcado Article, BreadcrumbList y FAQPage juntos como bloques JSON-LD separados.',
      },
      {
        question: '¿Qué es el esquema FAQPage y cuándo debo usarlo?',
        answer:
          'Úselo en páginas que muestran una lista visible de preguntas y respuestas, como páginas de ayuda, para que los motores de búsqueda puedan mostrarlas como resultados expandibles.',
      },
      {
        question: '¿Qué campos de esquema Product admite el generador?',
        answer:
          'Cubre el nombre del producto, el precio, la moneda y la disponibilidad, que son los campos principales que usan los motores de búsqueda para los resultados de compras.',
      },
      {
        question: '¿Para qué se usa el esquema BreadcrumbList?',
        answer:
          'Describe la jerarquía de navegación de una página, como Inicio > Guías > Tema, para que los motores de búsqueda puedan mostrar rutas de navegación en los resultados.',
      },
      {
        question: '¿Para qué se usa el esquema Organization?',
        answer:
          'Declara la identidad de su marca, incluidos el nombre, el logotipo y el sitio web oficial, para que los motores de búsqueda puedan mostrar un panel de conocimiento coherente.',
      },
      {
        question: '¿El Generador de Datos Estructurados sube mi contenido a algún lugar?',
        answer:
          'No. Todo el marcado se genera localmente en su navegador y nada de lo que ingresa sale de su dispositivo.',
      },
      {
        question: '¿Puedo exportar el esquema como un archivo .jsonld?',
        answer:
          'Sí. El botón de exportación descarga un archivo .jsonld independiente que puede almacenar, versionar o entregar a un desarrollador.',
      },
      {
        question: '¿Qué pasa si mi JSON-LD tiene un error de sintaxis?',
        answer:
          'Todo el bloque puede ser ignorado por los motores de búsqueda, así que siempre valide la salida con la Prueba de resultados enriquecidos antes de publicar.',
      },
      {
        question: '¿Puedo usar el Generador de Datos Estructurados para una página de receta o evento?',
        answer:
          'El generador cubre solo cinco tipos, así que las páginas de Recipe y Event necesitan JSON-LD escrito a mano, que puede validar con las mismas herramientas.',
      },
      {
        question: '¿Las respuestas de FAQ en el esquema deben coincidir con el texto visible de la página?',
        answer:
          'Sí. Google exige que los datos estructurados coincidan con el contenido que los usuarios realmente pueden ver en la página, o el marcado puede ser ignorado.',
      },
      {
        question: '¿Puedo editar el JSON-LD generado a mano?',
        answer:
          'Sí. Es JSON estándar, así que puede agregar o cambiar campos en cualquier editor y volver a validar el resultado antes de publicar.',
      },
      {
        question: '¿El Generador de Datos Estructurados funciona sin conexión?',
        answer:
          'Sí. Funciona por completo en su navegador sin subir nada, por lo que puede crear marcado de esquema sin conexión a internet una vez cargada la página.',
      },
    ],
  },
  'url-slug-generator': {
    slug: 'generador-de-slugs-de-url',
    name: 'Generador de Slugs URL y Optimizador de Rutas SEO',
    shortDescription:
      'Convierta titulares de artículos en slugs URL SEO limpios, con transliteración de acentos, por lotes y con filtrado de palabras vacías.',
    keywords: [
      'generador de slugs url',
      'creador de slugs seo',
      'generador de enlaces permanentes limpios',
      'convertidor de slugs por lotes',
      'generador de urls amigables seo',
      'convertidor de titulo de blog a slug',
      'creador de slugs de enlace permanente',
      'eliminador de palabras vacias para urls',
      'convertidor de acentos a ascii para slugs',
    ],
    seo: {
      title: 'Generador de Slugs URL SEO para Artículos | UtilityFlow',
      description:
        'Convierta titulares en slugs SEO en minúsculas por lotes, con transliteración de acentos, eliminación de palabras vacías y truncado en límites de palabra.',
      primaryKeyword: 'generador de slugs url',
      secondaryKeywords: [
        'generador de urls amigables seo',
        'convertir titulares a slugs por lotes',
        'limpiador de slugs con palabras vacias',
        'creador de slugs de enlace permanente',
      ],
      longTailKeywords: [
        'convertir titulos de blog en slugs url seo limpios por lotes',
        'transliterar caracteres acentuados a slugs url ascii',
        'truncar slugs url largos en limites de palabra limpios',
        'generar enlaces permanentes limpios sin palabras vacias en linea',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Estandarice enlaces permanentes legibles con guiones en publicaciones individuales o calendarios de contenido por lotes. Translitera los diacríticos limpiamente (`Café` → `cafe`), recorta opcionalmente las palabras vacías de relleno, aplica una longitud máxima limpia sin cortes a mitad de palabra y muestra vistas previas de URL completas.',
    instructions: [
      {
        title: 'Ingrese titulares o nombres de página',
        description:
          'Pegue uno o varios títulos (uno por línea) en el área de texto Titulares de página.',
      },
      {
        title: 'Configure las reglas de formato de slug',
        description:
          'Ingrese su Dominio base, elija guion (-) o guion bajo (_), configure la Longitud máxima del slug y active las opciones de palabras vacías o barra final.',
      },
      {
        title: 'Revise los slugs generados',
        description:
          'Revise la tabla de resultados para comprobar la transliteración de acentos, la eliminación de palabras vacías y dónde se cortaron los slugs largos en límites de palabra.',
      },
      {
        title: 'Ajuste la longitud o la configuración de palabras vacías',
        description:
          'Si un slug pierde su significado o se corta de forma incómoda, aumente la longitud máxima del slug o desactive la eliminación de palabras vacías y vuelva a generar.',
      },
      {
        title: 'Copie slugs individuales o listas por lotes',
        description:
          'Copie slugs individuales desde la tabla o exporte todos los slugs o las URL completas con un clic.',
      },
      {
        title: 'Nunca cambie el nombre de un slug en vivo sin una redirección',
        description:
          'Si cambia un slug en una página ya indexada, agregue una redirección 301 desde la URL antigua para que los enlaces y el posicionamiento pasen a la nueva.',
      },
    ],
    examples: [
      {
        title: 'Recortar palabras vacías y diacríticos de un titular',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'Translitera é → e, expande & → and, elimina "in" y une los tokens en minúsculas con guiones.',
      },
      {
        title: 'Convertir por lotes un calendario editorial completo',
        input: '5 titulares pegados, uno por línea · Longitud máxima: 60',
        output: 'Tabla con 5 slugs limpios y URL completas con el dominio base.',
        explanation: 'El procesamiento por lotes convierte todo el calendario editorial en una sola tabla lista para copiar.',
      },
    ],
    benefits: [
      'Procesa por lotes decenas de títulos de calendario editorial simultáneamente',
      'Trunca los slugs demasiado largos en límites de guion/palabra en lugar de a mitad de palabra',
      'Preserva el significado principal manteniendo intactos los slugs cortos aunque la eliminación de palabras vacías esté activada',
      'Sigue las recomendaciones de estructura de URL de Google (guiones ASCII UTF-8 en lugar de guiones bajos)',
    ],
    useCases: [
      'Planificar estructuras de URL limpias antes de lanzar categorías de blog o colecciones de CMS',
      'Limpiar títulos de productos internacionales con acentos en slugs seguros en ASCII',
      'Auditar enlaces permanentes de CMS demasiado largos hasta rutas nítidas de 4–6 palabras',
      'Preparar listas de objetivos canónicos para alimentar el Generador de Sitemap XML',
    ],
    faqs: [
      {
        question: '¿Los slugs URL SEO deben usar guiones (-) o guiones bajos (_)?',
        answer:
          'Google recomienda guiones (-) como separadores de palabras en las URL porque los analizadores de búsqueda tratan los guiones como espacios, mientras que los guiones bajos unen las palabras adyacentes.',
      },
      {
        question: '¿Eliminar palabras vacías daña la legibilidad?',
        answer:
          'Eliminar palabras cortas de relleno como "a", "the" u "of" hace que los slugs de blog muy largos sean más contundentes. Mantenga las palabras vacías si eliminarlas altera el significado principal (por ejemplo, "how to").',
      },
      {
        question: '¿Debo cambiar los slugs de URL en vivo ya indexadas?',
        answer:
          'Solo si implementa redirecciones 301 permanentes desde el slug antiguo al nuevo (usando nuestro Generador de Canónicos y Redirecciones 301) para que los enlaces y el posicionamiento se transfieran limpiamente.',
      },
      {
        question: '¿El Generador de Slugs URL es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro y sin límites en la cantidad de titulares que convierte en una sesión.',
      },
      {
        question: '¿Puedo generar slugs para muchos titulares a la vez?',
        answer:
          'Sí. Pegue un titular por línea y la herramienta convierte todo el lote en una sola tabla, para que pueda crear slugs para todo un calendario editorial de una vez.',
      },
      {
        question: '¿Cómo se manejan los caracteres acentuados en los slugs?',
        answer:
          'Los diacríticos se transliteran a ASCII simple: é se convierte en e, ü en u, ñ en n, para que las URL se mantengan legibles y seguras en navegadores y servidores.',
      },
      {
        question: '¿Qué pasa con símbolos como & y @ en un slug?',
        answer:
          'El ampersand (&) se expande a "and" y la mayoría de los demás signos de puntuación se eliminan, porque los símbolos en las URL pueden romper enlaces o verse desordenados al compartirlos.',
      },
      {
        question: '¿Qué son las palabras vacías y por qué las eliminaría?',
        answer:
          'Las palabras vacías son palabras cortas de relleno como "a", "the", "of" e "in". Eliminarlas acorta los slugs largos de blog sin cambiar el significado principal.',
      },
      {
        question: '¿Puedo mantener las palabras vacías en mis slugs?',
        answer:
          'Sí. Desactive el interruptor de eliminación de palabras vacías y el generador mantiene cada palabra de su titular, incluidas las palabras cortas de relleno.',
      },
      {
        question: '¿Cuál es la longitud ideal para un slug SEO?',
        answer:
          'Apunte a 3 a 6 palabras significativas. Use la configuración de Longitud máxima del slug para mantener los slugs cortos, y la herramienta corta en límites de palabra para que las palabras nunca se partan a la mitad.',
      },
      {
        question: '¿Los slugs URL deben estar en minúsculas?',
        answer:
          'Sí. Los slugs en minúsculas evitan problemas de contenido duplicado, porque algunos servidores tratan /Blog-Post y /blog-post como páginas diferentes.',
      },
      {
        question: '¿Puedo usar guiones bajos en lugar de guiones en los slugs?',
        answer:
          'Puede elegir guiones bajos en la configuración, pero se recomiendan los guiones porque los motores de búsqueda los tratan como separadores de palabras y los guiones bajos como uniones.',
      },
      {
        question: '¿Mis titulares se suben a algún lugar?',
        answer:
          'No. El Generador de Slugs URL funciona por completo en su navegador, por lo que sus titulares nunca salen de su dispositivo.',
      },
      {
        question: '¿Cómo veo la vista previa de la URL completa con mi dominio?',
        answer:
          'Ingrese su dominio en el campo Dominio base y la tabla de resultados muestra cada slug como una URL completa que puede copiar.',
      },
      {
        question: '¿Mis slugs deben terminar con una barra final?',
        answer:
          'Es opcional, pero sea coherente: use el interruptor de barra final para que coincida con el estilo de URL que su sitio ya usa, para no crear versiones duplicadas.',
      },
      {
        question: '¿Puedo usar esta herramienta para páginas de productos y categorías?',
        answer:
          'Sí. Funciona para cualquier nombre de página: títulos de productos, nombres de categorías, páginas de destino y encabezados de documentación se convierten de la misma manera.',
      },
      {
        question: '¿Por qué mi slug se cortó más corto que la longitud máxima que configuré?',
        answer:
          'La herramienta trunca en el guion más cercano antes del límite en lugar de cortar a mitad de palabra, por lo que un slug puede terminar unos caracteres más corto que el máximo.',
      },
      {
        question: '¿Qué pasa con los titulares escritos en escrituras no latinas?',
        answer:
          'Solo se transliteran los diacríticos latinos; los caracteres de otras escrituras se eliminan, por lo que un titular escrito por completo en otra escritura puede producir un slug muy corto. Agregue una versión latina de las palabras clave para obtener el mejor resultado.',
      },
      {
        question: '¿Puedo exportar todos mis slugs a la vez?',
        answer:
          'Sí. Use los botones de copia masiva para copiar todos los slugs, o todas las URL completas, con un clic en lugar de copiarlos uno por uno.',
      },
      {
        question: '¿Cuál es la diferencia entre un slug y un enlace permanente?',
        answer:
          'El slug es la parte final legible de una URL, como "best-cafe-tools", mientras que el enlace permanente es la URL completa, incluido el dominio y las carpetas.',
      },
    ],
  },
  'keyword-density-checker': {
    slug: 'verificador-de-densidad-de-palabras-clave',
    name: 'Verificador de Densidad de Palabras Clave y Analizador de Contenido',
    shortDescription:
      'Audite conteos de palabras, densidad de la palabra clave objetivo, tiempo de lectura y frecuencia de las frases principales de 1, 2 y 3 palabras localmente.',
    keywords: [
      'verificador de densidad de palabras clave',
      'analizador de contenido seo',
      'analizador de frecuencia de n-gramas',
      'auditoria de repeticion de frases',
      'revisar densidad de palabras clave en linea',
      'herramienta de frecuencia de palabras clave',
      'analizador de texto seo gratis',
      'calculadora de densidad de palabra clave',
      'analizador de bigramas y trigramas',
    ],
    seo: {
      title: 'Verificador de Densidad de Palabras Clave | UtilityFlow',
      description:
        'Pegue un borrador o HTML para revisar conteo de palabras, tiempo de lectura, densidad de la palabra clave y frases de 1, 2 y 3 palabras, en su navegador.',
      primaryKeyword: 'verificador de densidad de palabras clave',
      secondaryKeywords: [
        'analizador de frecuencia de texto seo',
        'contador de n-gramas de 2 y 3 palabras',
        'revisar repeticion de palabras clave en linea',
        'calculadora de densidad de palabra clave objetivo',
      ],
      longTailKeywords: [
        'analizar html pegado para densidad de palabras clave sin subirlo',
        'encontrar frases de 2 y 3 palabras repetidas en borrador de blog',
        'revisar frecuencia de palabra clave objetivo en el navegador',
        'como revisar la densidad de palabras clave de un blog en linea',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Inspeccione borradores de contenido o copias HTML pegadas para conocer la profundidad del vocabulario, el tiempo de lectura, los aciertos exactos de la frase objetivo y las frecuencias principales de n-gramas de 1, 2 y 3 palabras, diseñado para detectar repeticiones accidentales en lugar de perseguir cuotas de palabras clave obsoletas.',
    instructions: [
      {
        title: 'Pegue el borrador del artículo o el HTML',
        description:
          'Inserte texto plano o HTML sin procesar (mantenga activada la opción Eliminar etiquetas HTML para ignorar etiquetas de marcado y bloques de script/style).',
      },
      {
        title: 'Ingrese la frase objetivo y el tamaño de n-grama',
        description:
          'Especifique una Palabra clave/frase objetivo opcional y alterne entre el análisis de frases de 1 palabra, 2 palabras y 3 palabras.',
      },
      {
        title: 'Revise la tabla de frecuencias',
        description:
          'Revise los términos principales y sus porcentajes (%) para confirmar el enfoque temático y recortar la repetición de frases poco natural.',
      },
      {
        title: 'Revise el conteo de palabras, el tiempo de lectura y el vocabulario',
        description:
          'Use el total de palabras, el porcentaje de palabras únicas y el tiempo de lectura para juzgar si el borrador es demasiado corto, demasiado largo o demasiado repetitivo.',
      },
      {
        title: 'Reescriba las frases repetidas con naturalidad',
        description:
          'Cuando la misma frase de 2 o 3 palabras domine la tabla, varíela con sinónimos y pronombres en lugar de eliminar por completo su palabra clave temática.',
      },
      {
        title: 'Corrija conteos extraños antes de confiar en los resultados',
        description:
          'Si los números se ven mal, asegúrese de que Eliminar etiquetas HTML esté activado y de que no se hayan pegado menús de navegación, bloques de código o pies de página junto con el texto.',
      },
    ],
    examples: [
      {
        title: 'Detectar repetición de frases no intencional en un borrador de 500 palabras',
        input: 'Borrador de artículo + Objetivo: "technical seo" + Frases de 2 palabras',
        output: 'Clasifica los bigramas principales ("technical seo", "meta descriptions", "canonical tags") con su porcentaje %.',
        explanation: 'Resalta tanto la alineación con el tema principal como la frase repetitiva que puede variar con naturalidad.',
      },
      {
        title: 'Revisar si un borrador corto tiene datos suficientes',
        input: 'Borrador de 150 palabras + Objetivo: "compresor de imagenes"',
        output: 'Advertencia de muestra pequeña: los porcentajes son ruidosos con menos de 300 palabras.',
        explanation: 'Los textos cortos producen porcentajes inestables, así que trate los resultados con cautela.',
      },
    ],
    benefits: [
      'Analiza frases de varias palabras (bigramas y trigramas), no solo palabras individuales',
      'Elimina de forma segura <script>, <style> y etiquetas HTML antes de contar el texto',
      'Incluye orientación honesta que desaconseja el relleno mecánico de palabras clave',
      'Mantiene los borradores no publicados y los informes de clientes estrictamente dentro de la memoria del navegador',
    ],
    useCases: [
      'Editar guías extensas para asegurar que los temas principales aparezcan claramente sin relleno incómodo',
      'Auditar borradores sin competencia para lograr equilibrio en el vocabulario temático',
      'Revisar el texto de páginas de destino limpio de HTML exportado',
      'Revisar el tiempo promedio de lectura junto con el Contador de Palabras y el Verificador de Legibilidad',
    ],
    faqs: [
      {
        question: '¿Existe un porcentaje ideal de densidad de palabras clave para Google?',
        answer:
          'No. Google afirma explícitamente que no existe un umbral fijo de densidad de palabras clave. Escriba con naturalidad para los lectores y use las auditorías de densidad solo para revisar la cobertura temática y evitar repeticiones poco naturales.',
      },
      {
        question: '¿Cómo maneja Eliminar etiquetas HTML los elementos <script> y <style>?',
        answer:
          'Elimina bloques completos de <script> y <style> antes de quitar las etiquetas HTML restantes, para que los tokens de JavaScript o CSS nunca contaminen las estadísticas de palabras.',
      },
      {
        question: '¿Puedo analizar una URL en vivo de la competencia escribiendo un dominio aquí?',
        answer:
          'No. Pegue el texto o el código fuente HTML directamente: las apps del navegador no pueden extraer sitios web de terceros de otros orígenes sin proxies de servidor.',
      },
      {
        question: '¿El Verificador de Densidad de Palabras Clave es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede analizar tantos borradores como quiera.',
      },
      {
        question: '¿Qué es exactamente la densidad de palabras clave?',
        answer:
          'La densidad de palabras clave es la frecuencia con la que aparece una palabra o frase como porcentaje del total de palabras de un texto. Una frase usada 5 veces en 500 palabras tiene una densidad del 1%.',
      },
      {
        question: '¿Qué cuenta como relleno de palabras clave?',
        answer:
          'El relleno de palabras clave es repetir una frase con una frecuencia poco natural solo para posicionar mejor. Se lee mal para los visitantes y puede dañar el posicionamiento, así que use esta herramienta para detectar repeticiones, no para alcanzar un número objetivo.',
      },
      {
        question: '¿Qué son los n-gramas y por qué revisar frases de 2 y 3 palabras?',
        answer:
          'Los n-gramas son secuencias de n palabras: los bigramas son frases de 2 palabras y los trigramas son frases de 3 palabras. Revisarlos revela frases repetidas que los conteos de palabras individuales pasan por alto por completo.',
      },
      {
        question: '¿Cuántas palabras necesito para una verificación de densidad significativa?',
        answer:
          'Los textos cortos producen porcentajes ruidosos, así que apunte a al menos 300 palabras para obtener resultados estables. Los fragmentos muy cortos aún pueden mostrar conteos brutos, pero trate los porcentajes con cautela.',
      },
      {
        question: '¿La herramienta cuenta las palabras dentro de encabezados y listas?',
        answer:
          'Sí. Todo el texto visible que pega se cuenta, incluidos encabezados, listas con viñetas y pies de foto, porque los motores de búsqueda también ven ese contenido.',
      },
      {
        question: '¿Por qué mi frase objetivo muestra 0%?',
        answer:
          'Revise la ortografía y redacción exactas: los plurales, guiones y el orden de las palabras deben coincidir. También asegúrese de que Eliminar etiquetas HTML esté activado si pegó HTML.',
      },
      {
        question: '¿Puedo revisar la densidad de varias palabras clave a la vez?',
        answer:
          'Cada ejecución rastrea una frase objetivo. Para revisar otra palabra clave, cambie la frase objetivo y ejecute el análisis de nuevo sobre el mismo texto.',
      },
      {
        question: '¿El verificador cuenta palabras vacías como "the" y "and"?',
        answer:
          'Sí, aparecen en la tabla de frecuencia de 1 palabra, pero concéntrese en las palabras y frases temáticas: las palabras vacías son naturalmente frecuentes en todos los textos y dicen poco sobre SEO.',
      },
      {
        question: '¿Mi borrador se sube a algún lugar?',
        answer:
          'No. El Verificador de Densidad de Palabras Clave funciona por completo en su navegador, por lo que los borradores no publicados y el texto de clientes nunca salen de su dispositivo.',
      },
      {
        question: '¿Cuál es un buen tiempo de lectura para una entrada de blog?',
        answer:
          'Depende del tema, pero la herramienta muestra el tiempo de lectura para que pueda juzgar si una publicación coincide con las expectativas de los lectores: una guía rápida puede ser de 3 minutos, un tutorial profundo de 10 o más.',
      },
      {
        question: '¿Puedo pegar HTML copiado de mi CMS?',
        answer:
          'Sí. Pegue el HTML sin procesar y mantenga activada la opción Eliminar etiquetas HTML para que las etiquetas, scripts y estilos se eliminen antes de contar las palabras.',
      },
      {
        question: '¿El verificador funciona con texto en otros idiomas?',
        answer:
          'Sí. El conteo de palabras funciona para cualquier idioma que separe las palabras con espacios, y las tablas de n-gramas listarán las frases más frecuentes en ese idioma.',
      },
      {
        question: '¿Cómo bajo la densidad sin eliminar mi tema?',
        answer:
          'Use sinónimos, pronombres y redacción variada en lugar de repetir la palabra clave exacta. El tema se mantiene claro mientras el texto se lee con naturalidad.',
      },
      {
        question: '¿Qué significa la diversidad de vocabulario?',
        answer:
          'Es el porcentaje de palabras únicas comparado con el total de palabras. Un porcentaje más alto suele significar una escritura más rica y variada; un porcentaje muy bajo puede indicar texto repetitivo.',
      },
      {
        question: '¿Puedo analizar un documento PDF o Word?',
        answer:
          'La herramienta acepta texto pegado, así que copie el texto de su archivo PDF o Word y péguelo aquí: el formato no es necesario para una verificación de densidad.',
      },
      {
        question: '¿Por qué cambian los porcentajes cuando cambio el tamaño de n-grama?',
        answer:
          'Cada tamaño de n-grama tiene su propio total: un texto de 500 palabras tiene 500 palabras individuales pero solo 499 frases de dos palabras, por lo que el mismo conteo de frases produce un porcentaje ligeramente diferente.',
      },
    ],
  },
  'canonical-hreflang-generator': {
    slug: 'generador-de-hreflang-y-redirecciones-301',
    name: 'Constructor de Canónicos, Hreflang y Redirecciones 301',
    shortDescription:
      'Genere etiquetas hreflang y canónicas en HTML/XML o compile redirecciones 301 para _redirects de Cloudflare Pages, Apache y Nginx.',
    keywords: [
      'generador de hreflang',
      'constructor de etiqueta canonica',
      'generador de redireccion 301',
      'constructor de _redirects cloudflare',
      'generador de url canonica',
      'generador de etiquetas hreflang',
      'etiquetas seo multilingues',
      'generador de reglas de redireccion 301',
      'constructor de redirecciones htaccess apache',
    ],
    seo: {
      title: 'Generador de Hreflang y Redirecciones 301 | UtilityFlow',
      description:
        'Genere etiquetas hreflang y canónicas para páginas multilingües, además de reglas de redirección 301 para Cloudflare Pages, Apache y Nginx, listas para usar.',
      primaryKeyword: 'generador de hreflang',
      secondaryKeywords: [
        'generador de etiqueta de enlace canonico',
        'constructor de configuracion de redireccion 301',
        'generador de redirecciones de cloudflare pages',
        'generador de url canonica',
      ],
      longTailKeywords: [
        'generar etiquetas hreflang html y enlaces xhtml de sitemap xml',
        'convertir lista de urls antiguas en reglas 301 de cloudflare pages',
        'crear redirecciones 301 de apache htaccess y nginx en linea',
        'generar etiqueta hreflang x-default para paginas internacionales',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Maneje dos migraciones esenciales de SEO técnico en un solo lugar: genere anotaciones `hreflang` + `canonical` de varias regiones (tanto para `<head>` HTML como para sitemaps XML), o convierta listas de mapeo de URL en configuraciones de redirección 301 listas para desplegar en Cloudflare Pages, Apache y Nginx.',
    instructions: [
      {
        title: 'Elija Hreflang o Redirecciones 301',
        description:
          'Seleccione Etiquetas canónicas y Hreflang para SEO internacional o Generador de reglas de redirección 301 para migraciones de URL.',
      },
      {
        title: 'Ingrese configuraciones regionales o pares de migración de URL',
        description:
          'Agregue códigos ISO de idioma-región (`en-US`, `en-GB`, `x-default`) y URL, o pegue pares de rutas antiguas a nuevas.',
      },
      {
        title: 'Revise las etiquetas o reglas generadas',
        description:
          'Revise cada código de configuración regional, URL y par de redirección en busca de errores tipográficos antes de copiar: un código incorrecto puede romper todo el conjunto hreflang.',
      },
      {
        title: 'Agregue x-default y canónicos autorreferenciales',
        description:
          'Incluya una configuración regional de reserva x-default y asegúrese de que cada página se liste a sí misma como su propio canónico.',
      },
      {
        title: 'Copie la configuración lista para la plataforma',
        description:
          'Copie directamente las etiquetas HTML `<link>`, las líneas XML `<xhtml:link>` o las reglas `_redirects` / `.htaccess` / `nginx`.',
      },
      {
        title: 'Valide después de desplegar',
        description:
          'Una vez en vivo, vea el código fuente de la página o use un validador de hreflang para confirmar que las etiquetas están presentes, son recíprocas y apuntan a las URL correctas.',
      },
    ],
    examples: [
      {
        title: 'Regla de migración 301 de Cloudflare Pages',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: 'Produce la sintaxis exacta de _redirects de Cloudflare Pages con el estado permanente 301 explícito.',
      },
      {
        title: 'Conjunto hreflang recíproco en inglés y español',
        input: 'en-US: /en/page · es: /es/pagina · x-default: /en/page',
        output: '<link rel="alternate" hreflang="en-US" href="...">, hreflang="es", hreflang="x-default"',
        explanation: 'Cada versión apunta a las demás y a sí misma, con x-default como reserva internacional.',
      },
    ],
    benefits: [
      'Produce formatos HTML <link rel="alternate"> y XML <xhtml:link> de forma coherente',
      'Admite sintaxis de _redirects de Cloudflare Pages, .htaccess de Apache y servidor Nginx',
      'Fomenta canónicos autorreferenciales y configuraciones regionales de reserva x-default',
      'Normaliza automáticamente las barras iniciales en las rutas de origen de redirección',
    ],
    useCases: [
      'Lanzar páginas regionales localizadas en inglés/español/francés limpiamente sin penalizaciones por duplicados',
      'Preservar el valor de los enlaces al cambiar el nombre de slugs durante un rediseño',
      'Generar archivos de despliegue /public/_redirects de Cloudflare Pages en segundos',
      'Verificar conjuntos hreflang recíprocos antes de enviar sitemaps internacionales',
    ],
    faqs: [
      {
        question: '¿Las etiquetas hreflang deben ser bidireccionales o recíprocas?',
        answer:
          'Sí. Si la Página A enlaza a la Página B con hreflang="es", la Página B debe enlazar de vuelta a la Página A con hreflang="en" (y a sí misma); de lo contrario, los motores de búsqueda ignoran la anotación.',
      },
      {
        question: '¿Cuándo debo usar x-default en hreflang?',
        answer:
          'Use hreflang="x-default" para designar su página internacional de reserva para visitantes cuyo idioma o región del navegador no coincida con ninguna alternativa específica.',
      },
      {
        question: '¿Las URL canónicas deben apuntar entre idiomas (por ejemplo, es → en)?',
        answer:
          'No. Cada versión de idioma traducida debe declarar un canónico autorreferencial que apunte a sí misma, mientras que hreflang conecta los equivalentes localizados.',
      },
      {
        question: '¿El Generador de Hreflang es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede generar tantos conjuntos hreflang y reglas de redirección como necesite.',
      },
      {
        question: '¿Qué es hreflang y por qué importa?',
        answer:
          'Hreflang es una anotación HTML o XML que indica a los motores de búsqueda qué versión de idioma y región de una página mostrar a cada visitante, para que los usuarios de inglés vean la página en inglés y los de español la vean en español.',
      },
      {
        question: '¿Qué formato deben usar los códigos de idioma-región?',
        answer:
          'Use códigos de idioma ISO con una región ISO opcional, como en, es, fr-CA o en-GB. El idioma va primero, luego un guion, luego la región en mayúsculas.',
      },
      {
        question: '¿Necesito hreflang si mi sitio tiene un solo idioma?',
        answer:
          'No. Hreflang solo es útil cuando el mismo contenido existe en más de un idioma o versión regional.',
      },
      {
        question: '¿Puedo poner hreflang en mi sitemap XML en lugar de HTML?',
        answer:
          'Sí. La herramienta produce ambos formatos: etiquetas de enlace HTML para el head de su página y bloques xhtml:link para su sitemap XML. Elija un lugar y manténgalo coherente.',
      },
      {
        question: '¿Qué es un canónico autorreferencial?',
        answer:
          'Es una etiqueta canónica en una página que apunta a la página misma. Cada versión de una página debe incluir una, incluidas todas las versiones traducidas.',
      },
      {
        question: '¿Cuándo debo usar una redirección 301 en lugar de una etiqueta canónica?',
        answer:
          'Use una redirección 301 cuando una página se ha movido permanentemente a una URL nueva. Use una etiqueta canónica cuando dos páginas similares deben permanecer en vivo y quiere que los motores de búsqueda prefieran una de ellas.',
      },
      {
        question: '¿Cuál es la diferencia entre una redirección 301 y una 302?',
        answer:
          'Una 301 es permanente y transfiere la mayoría de las señales de posicionamiento a la URL nueva; una 302 es temporal e indica a los motores de búsqueda que la URL antigua puede volver, por lo que es la opción incorrecta para un cambio permanente.',
      },
      {
        question: '¿Cómo funcionan los _redirects de Cloudflare Pages?',
        answer:
          'Coloca un archivo _redirects en la carpeta pública de su sitio con una regla por línea — ruta antigua, ruta nueva y código de estado — y Cloudflare aplica las redirecciones cuando se despliega el sitio.',
      },
      {
        question: '¿Puedo redirigir toda una carpeta con una regla?',
        answer:
          'La herramienta produce una regla por par de URL. Para un cambio de toda una carpeta, use una regla comodín o splat en Cloudflare Pages o Apache, o genere aquí la lista completa de pares.',
      },
      {
        question: '¿Las redirecciones 301 transfieren señales de posicionamiento a la página nueva?',
        answer:
          'Sí. Una redirección 301 transfiere la mayoría de las señales de posicionamiento y el valor de enlaces de la página antigua a la URL nueva, por lo que es la opción estándar para cambios permanentes.',
      },
      {
        question: '¿La URL antigua debe permanecer en mi sitemap después de una redirección 301?',
        answer:
          'No. Elimine las URL redirigidas de su sitemap y liste solo las URL de destino nuevas, para que los motores de búsqueda rastreen las páginas actuales.',
      },
      {
        question: '¿Cuánto tiempo debo mantener activa una redirección 301?',
        answer:
          'Manténgala al menos un año, e idealmente de forma permanente. Eliminarla demasiado pronto puede romper enlaces antiguos y marcadores que todavía apuntan a la URL antigua.',
      },
      {
        question: '¿Hreflang puede solucionar problemas de contenido duplicado?',
        answer:
          'No por sí solo. Hreflang indica a los motores de búsqueda qué versión mostrar a cada público, pero las páginas verdaderamente duplicadas en el mismo idioma aún necesitan etiquetas canónicas o consolidación.',
      },
      {
        question: '¿Qué pasa si uso un código de configuración regional incorrecto?',
        answer:
          'Los motores de búsqueda ignoran los códigos no válidos, así que un error tipográfico como en-UK en lugar de en-GB rompe silenciosamente esa versión de idioma. Revise cada código antes de desplegar.',
      },
      {
        question: '¿Mi lista de URL se sube a algún lugar?',
        answer:
          'No. El Constructor de Canónicos, Hreflang y Redirecciones 301 funciona por completo en su navegador, por lo que sus URL y planes de migración nunca salen de su dispositivo.',
      },
      {
        question: '¿Puedo generar etiquetas hreflang para más de dos idiomas?',
        answer:
          'Sí. Agregue tantas filas de configuración regional como admita su sitio: la herramienta crea un conjunto recíproco completo que cubre cada versión de idioma que ingrese.',
      },
    ],
  },
  'on-page-seo-checker': {
    slug: 'verificador-de-seo-on-page',
    name: 'Verificador de SEO On-Page en HTML',
    shortDescription:
      'Audite el código fuente HTML pegado localmente con DOMParser: longitud del título, meta descripción, jerarquía H1–H4, texto alt y JSON-LD.',
    keywords: [
      'verificador de seo on page',
      'analizador de seo html',
      'verificador de jerarquia de encabezados',
      'herramienta de auditoria de alt de imagenes',
      'herramienta de auditoria seo gratis',
      'verificador de longitud de meta descripcion',
      'verificador de longitud de etiqueta de titulo',
      'verificador de etiquetas seo html',
      'verificador de json-ld',
    ],
    seo: {
      title: 'Verificador de SEO On-Page y Auditoría HTML | UtilityFlow',
      description:
        'Pegue el código HTML de cualquier página para auditar título, meta descripción, encabezados, canónico, texto alt y JSON-LD al instante, gratis, en su navegador.',
      primaryKeyword: 'verificador de seo on page',
      secondaryKeywords: [
        'auditoria seo de codigo fuente html',
        'verificador de estructura de encabezados h1 h2',
        'revisar atributos alt de imagenes faltantes',
        'verificador de longitud de meta descripcion',
      ],
      longTailKeywords: [
        'auditar codigo html pegado para etiquetas seo on page sin conexion',
        'revisar esquema de encabezados h1 a h4 y enlace canonico en html',
        'inspector seo dom del lado del cliente sin rastreo externo',
        'pegar codigo html para revisar titulo meta descripcion y encabezados',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Ejecute una inspección instantánea de SEO técnico y on-page a nivel DOM sobre cualquier código fuente HTML pegado (`Ver código fuente de la página`) directamente en su navegador: revisa `<title>`, meta descripción, canónicos, jerarquía de encabezados `H1`–`H4`, texto `alt` faltante en imágenes, enlaces internos/externos, Open Graph y JSON-LD.',
    instructions: [
      {
        title: 'Copie el código fuente HTML de su página',
        description:
          'Abra Ver código fuente de la página (o inspeccione el dist/index.html compilado) y pegue el HTML en el área de texto de código fuente.',
      },
      {
        title: 'Revise la puntuación de auditoría DOM y las listas de verificación',
        description:
          'Inspeccione los indicadores de aprobado/advertencia para título, meta descripción, un solo H1, enlace canónico, texto alt y datos estructurados.',
      },
      {
        title: 'Verifique el esquema de encabezados y los enlaces',
        description:
          'Desplácese por el árbol H1–H4 extraído y el conteo de enlaces internos/externos para corregir niveles omitidos o etiquetas faltantes.',
      },
      {
        title: 'Corrija las advertencias en orden de prioridad',
        description:
          'Empiece con un título faltante o demasiado largo y una meta descripción, luego etiquetas H1 duplicadas, luego texto alt faltante en imágenes.',
      },
      {
        title: 'Vuelva a pegar y auditar después de las correcciones',
        description:
          'Pegue el HTML actualizado y ejecute la auditoría de nuevo para confirmar que la puntuación mejoró y que no aparecieron advertencias nuevas.',
      },
      {
        title: 'Audite correctamente las páginas renderizadas con JavaScript',
        description:
          'Si faltan meta etiquetas en el código fuente sin procesar de una página React o SPA, copie el outerHTML en vivo desde el panel Elementos de DevTools de su navegador.',
      },
    ],
    examples: [
      {
        title: 'Auditar una exportación HTML estática renderizada',
        input: 'Documento <html> completo con <title>, <meta description>, H1/H2 y JSON-LD',
        output: '6/6 verificaciones aprobadas · Esquema H1–H4 + desglose de enlaces internos/externos',
        explanation: 'Usa el DOMParser nativo del navegador limpiamente sin ejecutar scripts no confiables.',
      },
      {
        title: 'Detectar un H1 duplicado en una plantilla de blog',
        input: 'HTML de una plantilla de CMS con dos etiquetas <h1>',
        output: 'Advertencia: se encontraron 2 etiquetas H1 · Puntuación reducida hasta corregirla.',
        explanation: 'El esquema de encabezados extraído muestra ambas etiquetas H1 para que pueda eliminar una.',
      },
    ],
    benefits: [
      'Usa DOMParser nativo (nunca ejecuta etiquetas <script> pegadas ni cargas externas)',
      'Es honesto sobre los límites CORS del navegador: nunca finge extraer URL remotas bloqueadas',
      'Extrae el esquema completo del documento H1–H4 limpiamente',
      'Verifica la presencia de Open Graph y JSON-LD junto con las etiquetas SEO clásicas',
    ],
    useCases: [
      'Control de calidad previo al despliegue en compilaciones de pruebas y exportaciones HTML estáticas',
      'Revisar plantillas de blog de CMS por etiquetas <h1> duplicadas accidentales o atributos alt vacíos',
      'Verificar que las páginas renderizadas en el servidor emitan etiquetas canónicas y meta limpiamente',
      'Inspeccionar páginas HTML de localhost o con acceso por correo electrónico que los rastreadores en la nube no pueden alcanzar',
    ],
    faqs: [
      {
        question: '¿Por qué esta herramienta me pide pegar el código fuente HTML en lugar de escribir una URL de sitio web?',
        answer:
          'Los navegadores aplican políticas de uso compartido de recursos entre orígenes (CORS) que impiden que el JavaScript del lado del cliente lea sitios web externos arbitrarios, y las URL de localhost o de pruebas privadas son inalcanzables desde servidores públicos. Pegar Ver código fuente de la página hace que la auditoría local sea 100% confiable y privada.',
      },
      {
        question: '¿Las SPA renderizadas con JavaScript se auditan correctamente con el código fuente sin procesar?',
        answer:
          'Para las SPA renderizadas en el cliente donde React inyecta meta etiquetas en tiempo de ejecución, copie el outerHTML en vivo desde el panel Elementos de DevTools de Chrome/Firefox en lugar del código fuente sin procesar.',
      },
      {
        question: '¿DOMParser ejecuta scripts dentro del HTML pegado?',
        answer:
          'No. DOMParser.parseFromString(..., "text/html") construye un árbol DOM inerte estrictamente para inspección, sin ejecutar JavaScript ni cargar imágenes externas.',
      },
      {
        question: '¿El Verificador de SEO On-Page es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede auditar tantas páginas como quiera.',
      },
      {
        question: '¿Cuál es la longitud ideal de la etiqueta de título?',
        answer:
          'Apunte a 50 a 60 caracteres. Los títulos más largos se cortan en los resultados de búsqueda, mientras que los títulos muy cortos desperdician la oportunidad de describir la página claramente.',
      },
      {
        question: '¿Cuál es la longitud ideal de la meta descripción?',
        answer:
          'Apunte a 150 a 160 caracteres. Esa longitud suele mostrarse completa en los resultados de búsqueda sin truncarse.',
      },
      {
        question: '¿Cuántas etiquetas H1 debe tener una página?',
        answer:
          'Una. Un solo H1 indica el tema principal de la página; los subtemas van en encabezados H2 y H3 debajo de él.',
      },
      {
        question: '¿Puedo omitir niveles de encabezado, por ejemplo H1 y luego H3?',
        answer:
          'Evítele. Mantenga la jerarquía en orden — H1, luego H2, luego H3 — para que los motores de búsqueda y los lectores de pantalla puedan seguir la estructura de la página.',
      },
      {
        question: '¿Qué pasa si mi página no tiene etiqueta canónica?',
        answer:
          'Los motores de búsqueda elegirán ellos mismos una URL canónica, que puede no ser la versión que usted prefiere. Agregar una explícitamente elimina las conjeturas.',
      },
      {
        question: '¿Por qué importa el texto alt de las imágenes para SEO?',
        answer:
          'El texto alt describe las imágenes a los motores de búsqueda y lectores de pantalla, ayuda a que las imágenes posicionen en la búsqueda de imágenes y mantiene la página usable cuando una imagen no carga.',
      },
      {
        question: '¿Qué es JSON-LD y por qué debo revisarlo?',
        answer:
          'JSON-LD es un bloque de datos estructurados que describe el contenido de su página a los motores de búsqueda, impulsando resultados enriquecidos como calificaciones, FAQ y rutas de navegación. El verificador confirma que está presente.',
      },
      {
        question: '¿El verificador audita las etiquetas Open Graph?',
        answer:
          'Sí. Informa si están presentes etiquetas Open Graph como og:title y og:image, para que su página se vea bien al compartirla en redes sociales.',
      },
      {
        question: '¿Puedo auditar una página que requiere inicio de sesión?',
        answer:
          'Sí. Como usted pega el HTML, puede auditar páginas privadas, de pruebas y de localhost que los rastreadores públicos no pueden alcanzar.',
      },
      {
        question: '¿Mi HTML se sube a algún lugar?',
        answer:
          'No. El Verificador de SEO On-Page funciona por completo en su navegador, por lo que el código fuente de su página nunca sale de su dispositivo.',
      },
      {
        question: 'Mi puntuación de auditoría es baja: ¿qué debo corregir primero?',
        answer:
          'Corrija los problemas en este orden: un título faltante o demasiado largo, una meta descripción faltante, etiquetas H1 duplicadas y luego texto alt faltante en imágenes.',
      },
      {
        question: '¿El verificador cuenta los enlaces internos y externos?',
        answer:
          'Sí. Cuenta los enlaces internos y externos por separado, para que pueda ver si una página enlaza lo suficiente hacia afuera y si la navegación interna está presente.',
      },
      {
        question: '¿Puedo auditar mi página principal y mis entradas de blog con la misma herramienta?',
        answer:
          'Sí. Pegue el código fuente HTML de cada página por separado y audítelas una a la vez: cada página obtiene su propia puntuación y lista de verificación.',
      },
      {
        question: '¿Por qué algunas verificaciones muestran advertencias en lugar de fallos?',
        answer:
          'Las advertencias señalan problemas de mejores prácticas que vale la pena corregir pero que no son errores críticos, como un título ligeramente largo o un nivel de encabezado omitido.',
      },
      {
        question: '¿Funciona para páginas de WordPress?',
        answer:
          'Sí. Abra Ver código fuente de la página en cualquier página de WordPress, copie el HTML y péguelo aquí: el verificador funciona con la salida de cualquier CMS.',
      },
      {
        question: '¿Con qué frecuencia debo ejecutar una auditoría de SEO on-page?',
        answer:
          'Ejecute una cada vez que cambie una plantilla, publique un nuevo tipo de página o después de un rediseño, y vuelva a auditar después de las correcciones para confirmar que la puntuación mejoró.',
      },
    ],
  },
  'robots-meta-tag-generator': {
    slug: 'generador-de-meta-etiquetas-robots',
    name: 'Constructor de Meta Etiquetas Robots y X-Robots-Tag',
    shortDescription:
      'Genere directivas noindex, nofollow, noarchive, max-snippet, max-image-preview y reglas _headers de Cloudflare con control detallado.',
    keywords: [
      'generador de meta etiquetas robots',
      'constructor de x-robots-tag',
      'meta etiqueta noindex nofollow',
      'etiqueta max-image-preview large',
      'generador de etiqueta noindex',
      'creador de meta etiquetas robots',
      'generador de encabezado robots',
      'generador de _headers cloudflare',
      'meta etiqueta nosnippet',
    ],
    seo: {
      title: 'Generador de Meta Etiquetas Robots y X-Robots | UtilityFlow',
      description:
        'Cree meta etiquetas robots HTML y encabezados X-Robots-Tag con noindex, nofollow, max-snippet y max-image-preview, más salida _headers de Cloudflare, gratis.',
      primaryKeyword: 'generador de meta etiquetas robots',
      secondaryKeywords: [
        'generador de encabezado x-robots-tag',
        'creador de meta etiqueta noindex',
        'google max-image-preview large',
        'generador de etiqueta noindex',
      ],
      longTailKeywords: [
        'generar encabezado x-robots-tag noindex para pdf en cloudflare pages',
        'crear meta etiqueta robots con max-snippet y max-image-preview large',
        'diferencia entre robots.txt y meta robots noindex',
        'crear meta etiqueta robots con noindex nofollow y max-snippet',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Genere directivas precisas de rastreadores a nivel de página, incluidos `index`/`noindex`, `follow`/`nofollow`, `noarchive`, `nosnippet`, `max-snippet` y `max-image-preview:large`, simultáneamente como etiquetas HTML `<meta name="robots">`, encabezados HTTP `X-Robots-Tag` y bloques `_headers` de Cloudflare Pages.',
    instructions: [
      {
        title: 'Elija las directivas de indexación y enlaces',
        description:
          'Configure index/noindex, follow/nofollow y restricciones opcionales como noarchive, nosnippet o noimageindex.',
      },
      {
        title: 'Ajuste los límites de fragmento y vista previa',
        description:
          'Configure max-snippet (-1 para ilimitado), max-image-preview (large para Google Discover) y max-video-preview.',
      },
      {
        title: 'Copie la etiqueta HTML o el encabezado HTTP',
        description:
          'Use la meta etiqueta HTML dentro de <head>, o despliegue el bloque de encabezado X-Robots-Tag para PDF y descargas que no son HTML.',
      },
      {
        title: 'Elija el formato de salida correcto',
        description:
          'Use la meta etiqueta HTML para páginas normales, X-Robots-Tag para PDF y otros archivos que no son HTML, y el bloque _headers para las reglas de ruta de Cloudflare.',
      },
      {
        title: 'Coloque la salida en el lugar correcto',
        description:
          'Ponga la meta etiqueta dentro del <head> de su página, o agregue las reglas de encabezado a la configuración de su servidor o al archivo _headers de Cloudflare, luego despliegue.',
      },
      {
        title: '¿La página todavía aparece en la búsqueda?',
        description:
          'Noindex solo funciona después de que los motores de búsqueda vuelvan a rastrear la página, lo que puede tardar días. Verifique que robots.txt no esté bloqueando el rastreo y luego confirme en Search Console.',
      },
    ],
    examples: [
      {
        title: 'Excluir descargas PDF privadas con _headers de Cloudflare Pages',
        input: 'noindex, nofollow · Ruta: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'El X-Robots-Tag HTTP funciona para PDF, imágenes y archivos que no son HTML y que no tienen elemento <head>.',
      },
      {
        title: 'Permitir vistas previas grandes de imagen para un artículo editorial',
        input: 'index, follow · max-image-preview: large',
        output: '<meta name="robots" content="index, follow, max-image-preview:large">',
        explanation: 'La vista previa de imagen grande es la recomendada por Google para páginas que apuntan a Google Discover.',
      },
    ],
    benefits: [
      'Produce simultáneamente <meta> HTML, X-Robots-Tag HTTP genérico y _headers de Cloudflare Pages',
      'Incluye los valores predeterminados de max-image-preview:large recomendados por Google Discover',
      'Evita combinaciones conflictivas automáticamente (desactiva los controles deslizantes de fragmento/imagen cuando nosnippet/noimageindex están activos)',
      'Hace sencilla la desindexación de PDF y recursos que no son HTML mediante encabezados HTTP',
    ],
    useCases: [
      'Evitar que páginas de agradecimiento, resultados de búsqueda interna o portales de miembros entren al índice de Google',
      'Desindexar folletos PDF alojados o recursos de libros blancos mediante encabezados X-Robots-Tag',
      'Habilitar max-image-preview:large para artículos editoriales dirigidos a Google Discover',
      'Agregar límites estrictos de noarchive o de longitud de fragmento en documentación de pago o sensible',
    ],
    faqs: [
      {
        question: '¿Cuándo debo usar X-Robots-Tag en lugar de <meta name="robots">?',
        answer:
          'Use encabezados HTTP X-Robots-Tag para archivos que no son HTML (como PDF, hojas de cálculo o imágenes) o cuando aplique reglas de indexación en toda una ruta de carpeta mediante reglas de CDN.',
      },
      {
        question: '¿Debo combinar Disallow de robots.txt con <meta name="robots" content="noindex">?',
        answer:
          '¡No! Si una URL está bloqueada en robots.txt, los bots de búsqueda no pueden rastrear la página para leer la etiqueta HTML <meta name="robots" content="noindex"> dentro de ella. Permita el rastreo si depende del noindex de meta.',
      },
      {
        question: '¿Qué significa max-snippet:-1?',
        answer:
          'Un valor de -1 permite que los motores de búsqueda elijan cualquier longitud de fragmento que consideren útil, mientras que 0 evita los fragmentos de texto y los enteros positivos (como 160) limitan la longitud de caracteres del fragmento.',
      },
      {
        question: '¿El Generador de Meta Etiquetas Robots es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, y puede generar tantas etiquetas y reglas de encabezado como necesite.',
      },
      {
        question: '¿Qué hace noindex?',
        answer:
          'Noindex indica a los motores de búsqueda que no incluyan una página en los resultados de búsqueda. La página sigue en vivo y se puede visitar, pero no aparecerá en Google ni Bing.',
      },
      {
        question: '¿Qué hace nofollow?',
        answer:
          'Nofollow indica a los motores de búsqueda que no sigan los enlaces de una página ni transfieran señales de posicionamiento a través de ellos. Es útil para páginas con enlaces no confiables o de pago.',
      },
      {
        question: '¿Cuál es la diferencia entre robots.txt y una meta etiqueta robots?',
        answer:
          'Robots.txt bloquea el rastreo de una URL, mientras que una meta etiqueta robots controla si una página rastreada se indexa. Resuelven problemas diferentes y no deben combinarse sin cuidado.',
      },
      {
        question: '¿Cuánto tarda en funcionar noindex?',
        answer:
          'Solo surte efecto después de que los motores de búsqueda vuelvan a rastrear la página, lo que puede tardar días o semanas según la frecuencia con que se visite la página.',
      },
      {
        question: '¿Qué es max-image-preview:large?',
        answer:
          'Permite que los motores de búsqueda muestren vistas previas de imágenes grandes para su página, lo que Google recomienda para páginas dirigidas a Google Discover.',
      },
      {
        question: '¿Qué hace nosnippet?',
        answer:
          'Nosnippet evita que los motores de búsqueda muestren cualquier fragmento de texto de la página en los resultados de búsqueda, por lo que solo aparecen el título y la URL.',
      },
      {
        question: '¿Qué hace noarchive?',
        answer:
          'Noarchive impide que los motores de búsqueda ofrezcan una copia en caché de su página, lo que es útil para contenido sensible al tiempo o que cambia con frecuencia.',
      },
      {
        question: '¿Qué hace noimageindex?',
        answer:
          'Noimageindex indica a los motores de búsqueda que no indexen las imágenes de una página, mientras que la página en sí todavía puede aparecer en los resultados de búsqueda normales.',
      },
      {
        question: '¿Puedo aplicar noindex a un archivo PDF?',
        answer:
          'Sí. Los PDF no tienen head HTML, así que use el encabezado HTTP X-Robots-Tag: la herramienta genera el bloque de encabezado exacto para usted.',
      },
      {
        question: '¿Debo aplicar noindex a las páginas de agradecimiento y de pago?',
        answer:
          'Sí. Las páginas de agradecimiento, los pasos de pago, los resultados de búsqueda interna y las áreas de miembros generalmente no aportan valor de búsqueda y comúnmente se configuran como noindex.',
      },
      {
        question: '¿Puedo combinar noindex y nofollow en la misma página?',
        answer:
          'Sí. Controlan cosas diferentes — indexación y seguimiento de enlaces — y a menudo se usan juntos en páginas privadas o de utilidad.',
      },
      {
        question: '¿Qué es un archivo _headers de Cloudflare?',
        answer:
          'Es un archivo en la carpeta pública de su sitio que asigna rutas URL a encabezados de respuesta HTTP. La herramienta produce un bloque listo para pegar para cualquier ruta que elija.',
      },
      {
        question: '¿Las meta etiquetas robots funcionan en Bing y otros motores de búsqueda?',
        answer:
          'Sí. La mayoría de los motores de búsqueda importantes respetan las directivas estándar de robots, aunque algunos admiten solo un subconjunto: manténgase en las directivas comunes para la cobertura más amplia.',
      },
      {
        question: '¿Mi configuración se sube a algún lugar?',
        answer:
          'No. El Generador de Meta Etiquetas Robots funciona por completo en su navegador, por lo que su configuración nunca sale de su dispositivo.',
      },
      {
        question: '¿Qué pasa si elijo directivas en conflicto?',
        answer:
          'La herramienta evita combinaciones conflictivas automáticamente: por ejemplo, desactiva los controles deslizantes de fragmento y vista previa de imagen cuando nosnippet o noimageindex está activo.',
      },
      {
        question: '¿Debo usar noindex o simplemente eliminar la página?',
        answer:
          'Si una página debe desaparecer para siempre, elimínela y deje que devuelva un estado 404 o 410. Use noindex cuando la página debe permanecer en vivo pero no debe aparecer en los resultados de búsqueda.',
      },
    ],
  },
  'image-compressor': {
    slug: 'compresor-de-imagenes',
    name: 'Compresor de Imágenes',
    shortDescription:
      'Comprima imágenes PNG, JPG y WebP localmente con HTML5 Canvas, con controles de calidad personalizados, límite de ancho máximo y métricas instantáneas de ahorro de bytes.',
    keywords: [
      'compresor de imagenes',
      'comprimir imagen en linea',
      'reducir tamano de archivo de imagen',
      'optimizador de imagenes webp',
      'comprimir png a menor tamano',
      'reducir tamano de archivo jpg en linea',
      'reductor de tamano de imagen gratis',
      'optimizar imagenes para web',
      'reducir tamano de archivo de foto',
    ],
    seo: {
      title: 'Compresor de Imágenes PNG, JPG y WebP | UtilityFlow',
      description:
        'Comprima imágenes en su navegador: ajuste la calidad, limite el ancho máximo, compare los tamaños antes y después y descargue, sin subir archivos a un servidor.',
      primaryKeyword: 'compresor de imagenes',
      secondaryKeywords: [
        'comprimir png jpg webp en linea',
        'reducir tamano de foto gratis',
        'optimizador de imagenes del lado del cliente',
        'reducir tamano de imagen para sitio web',
      ],
      longTailKeywords: [
        'comprimir imagenes grandes para web core vitals sin subir al servidor',
        'convertir y reducir foto jpg a formato webp ligero',
        'redimensionar ancho maximo y optimizar calidad de imagen sin conexion',
        'reducir tamano de archivo de imagen antes de adjuntar por correo',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Reduzca recursos pesados de PNG, JPG y WebP para cargas de página más rápidas y archivos adjuntos de correo más ligeros directamente en su navegador: ajuste la calidad de compresión con pérdida, aplique límites opcionales de ancho y compare el ahorro exacto en bytes sin subir archivos remotos.',
    instructions: [
      {
        title: 'Elija una imagen de origen',
        description:
          'Seleccione cualquier imagen PNG, JPG, WebP o GIF de su dispositivo para decodificar sus dimensiones y tamaño original en bytes.',
      },
      {
        title: 'Elija el formato de destino, el límite de ancho y la calidad',
        description:
          'Seleccione WebP o JPG para un ahorro drástico de bytes, aplique opcionalmente un límite de ancho máximo (como 1920 px o 1280 px) y ajuste el control de calidad de 10% a 100%.',
      },
      {
        title: 'Ejecute la compresión',
        description:
          'Haga clic en Comprimir para volver a codificar la imagen localmente en su navegador y ver el nuevo tamaño en bytes al instante.',
      },
      {
        title: 'Compare antes y después',
        description:
          'Revise la vista previa lado a lado y el ahorro exacto en bytes y porcentaje para asegurarse de que la calidad siga viéndose bien.',
      },
      {
        title: 'Descargue el archivo comprimido',
        description:
          'Haga clic en Descargar para guardar la imagen optimizada en su dispositivo y repita el proceso para otro archivo cuando lo necesite.',
      },
      {
        title: 'Consejo: ¿la salida es más grande que la entrada?',
        description:
          'Si un PNG pequeño crece después de la compresión, cambie el formato de salida a WebP o JPG, o baje ligeramente el control de calidad, y comprima de nuevo.',
      },
    ],
    examples: [
      {
        title: 'Optimizar una foto principal de 2.4 MB para un artículo de blog',
        input: 'JPG 3840×2160 · Salida: WebP · Ancho máx.: 1280 px · Calidad: 80%',
        output: 'WebP 1280×720 típicamente ~85–140 KB (reducción de carga de -94%)',
        explanation: 'Combinar el límite de dimensiones con la compresión moderna WebP acelera dramáticamente el Largest Contentful Paint.',
      },
      {
        title: 'Reducir una captura de pantalla para adjuntarla por correo',
        input: 'PNG 1920×1080 · Salida: JPG · Calidad: 75%',
        output: 'JPG de unos cientos de KB, lo suficientemente pequeño para los límites de archivos adjuntos de correo.',
        explanation: 'Convertir a JPG elimina la transparencia innecesaria y reduce mucho el tamaño del archivo.',
      },
    ],
    benefits: [
      'Cero subidas al servidor mantienen los gráficos de productos no publicados y las fotos privadas completamente locales',
      'Admite re-codificación WebP, JPEG (con relleno mate blanco automático para alfa) y PNG',
      'Muestra los tamaños reales en bytes antes y después y el ahorro en porcentaje al instante',
      'Los límites opcionales de ancho máximo redimensionan fotos de cámara demasiado grandes en una pasada',
    ],
    useCases: [
      'Reducir banners principales y capturas de pantalla para mejorar Core Web Vitals y LCP',
      'Preparar archivos adjuntos más ligeros para correos, portales y subidas a CMS',
      'Convertir capturas de pantalla pesadas en recursos web WebP ligeros',
      'Comprobar rápidamente el equilibrio óptimo entre calidad y fidelidad visual',
    ],
    faqs: [
      {
        question: '¿Por qué comprimir un PNG pequeño a PNG a veces aumenta su tamaño?',
        answer:
          'El Canvas del navegador vuelve a codificar los PNG usando flujos DEFLATE estándar sin pérdidas, sin herramientas especializadas de cuantización de paleta como pngquant. Cambiar el Formato de salida a WebP o JPG suele reducir el tamaño del archivo dramáticamente.',
      },
      {
        question: '¿Mis fotos se suben a un servidor externo de compresión?',
        answer:
          'No. Toda la decodificación, el redimensionado y la re-codificación con Canvas se ejecutan estrictamente dentro de la memoria de su navegador.',
      },
      {
        question: '¿Qué pasa con los fondos transparentes si elijo JPG?',
        answer:
          'Como JPEG no admite transparencia alfa, las regiones transparentes se rellenan limpiamente con blanco sólido (#ffffff) antes de la codificación.',
      },
      {
        question: '¿El Compresor de Imágenes es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, sin marcas de agua y sin límites en la cantidad de imágenes que comprime.',
      },
      {
        question: '¿Qué formatos de imagen puedo comprimir?',
        answer:
          'Puede comprimir imágenes PNG, JPG, WebP y GIF, y descargar el resultado como WebP, JPG o PNG.',
      },
      {
        question: '¿Cuánto puede reducir mi foto el Compresor de Imágenes?',
        answer:
          'El ahorro depende del formato original y de la configuración de calidad, pero las fotos convertidas a WebP con calidad del 80% a menudo se reducen entre 50 y 90%.',
      },
      {
        question: '¿Comprimir mi imagen reducirá su calidad?',
        answer:
          'Los formatos con pérdida como WebP y JPG intercambian un poco de detalle por archivos mucho más pequeños. Use el control de calidad y la vista previa para encontrar el equilibrio que le guste, o mantenga PNG para resultados sin pérdida.',
      },
      {
        question: '¿El Compresor de Imágenes cambia las dimensiones de mi imagen?',
        answer:
          'Solo si configura un límite de ancho máximo. De lo contrario, las dimensiones en píxeles se mantienen iguales y solo cambia el tamaño del archivo.',
      },
      {
        question: '¿Puedo comprimir imágenes para archivos adjuntos de correo?',
        answer:
          'Sí, comprimir primero hace que las fotos grandes sean lo suficientemente pequeñas para caber en los límites de archivos adjuntos de correo sin dividirlas en varios mensajes.',
      },
      {
        question: '¿Qué configuración de calidad debo elegir para imágenes de sitios web?',
        answer:
          'Una calidad de 75–85% en WebP suele verse casi idéntica a la original mientras mantiene los archivos lo suficientemente pequeños para cargas rápidas de página.',
      },
      {
        question: '¿Por qué debería convertir JPG a WebP al comprimir?',
        answer:
          'WebP usa una compresión más eficiente que JPG, por lo que la misma foto con la misma calidad visual suele ser mucho más pequeña.',
      },
      {
        question: '¿Puedo comprimir varias imágenes a la vez?',
        answer:
          'El compresor procesa una imagen a la vez para que pueda ajustar la calidad, el ancho y el formato de cada foto antes de descargarla.',
      },
      {
        question: '¿La compresión funciona sin conexión?',
        answer:
          'Sí, una vez cargada la página, toda la compresión se ejecuta localmente en su navegador, por lo que funciona sin conexión a internet.',
      },
      {
        question: '¿Mi imagen comprimida tendrá una marca de agua?',
        answer:
          'No, las imágenes descargadas nunca incluyen marcas de agua ni branding.',
      },
      {
        question: '¿Cuál es el mejor formato para comprimir capturas de pantalla?',
        answer:
          'WebP suele dar los archivos más pequeños para capturas de pantalla. Use PNG solo cuando necesite calidad sin pérdida y píxel perfecto.',
      },
      {
        question: '¿Puedo comprimir una imagen sin cambiar sus dimensiones?',
        answer:
          'Sí, deje el límite de ancho máximo sin configurar y la herramienta mantiene el ancho y alto originales mientras solo reduce el tamaño del archivo.',
      },
      {
        question: '¿El Compresor de Imágenes conserva los metadatos de la imagen?',
        answer:
          'La re-codificación con Canvas del navegador generalmente elimina metadatos EXIF como la configuración de la cámara y la ubicación, lo que también ayuda a reducir el archivo.',
      },
      {
        question: '¿Puedo usar el Compresor de Imágenes en mi teléfono?',
        answer:
          'Sí, funciona en cualquier navegador móvil moderno. Elija una imagen de su galería de fotos y descargue el resultado comprimido de la misma manera.',
      },
      {
        question: '¿Cuál es el tamaño máximo de imagen que puedo comprimir?',
        answer:
          'No hay un límite fijo de servidor porque nada se sube. Las imágenes muy grandes están limitadas solo por la memoria de su dispositivo y el tamaño de Canvas del navegador.',
      },
      {
        question: '¿Cómo comprimo una imagen a menos de 100 KB?',
        answer:
          'Elija salida WebP, configure un ancho máximo como 1280 px y baje el control de calidad paso a paso hasta que el tamaño de archivo mostrado caiga por debajo de 100 KB.',
      },
    ],
  },
  'image-resizer': {
    slug: 'redimensionador-de-imagenes',
    name: 'Redimensionador y Recortador de Imágenes',
    shortDescription:
      'Redimensione imágenes a dimensiones exactas en píxeles o ajustes preestablecidos sociales/OG con bloqueo de relación de aspecto, recorte de cobertura centrado y exportación PNG/JPG/WebP.',
    keywords: [
      'redimensionador de imagenes',
      'redimensionar imagen en pixeles',
      'recortador de imagenes en linea',
      'redimensionador de imagen og 1200x630',
      'redimensionar imagen en linea gratis',
      'cambiar dimensiones de imagen',
      'redimensionar foto para instagram',
      'recortar imagen a tamano',
      'redimensionar imagen a 1200x630',
    ],
    seo: {
      title: 'Redimensionador de Imágenes a Píxeles Exactos | UtilityFlow',
      description:
        'Redimensione fotos a píxeles exactos: use ajustes preestablecidos, bloquee la relación de aspecto, recorte por cobertura y exporte PNG, JPG o WebP en privado.',
      primaryKeyword: 'redimensionador de imagenes',
      secondaryKeywords: [
        'redimensionar foto a pixeles exactos',
        'herramienta de recorte de cobertura por relacion de aspecto',
        'redimensionador con ajustes de tamano para redes sociales',
        'redimensionar imagen para redes sociales',
      ],
      longTailKeywords: [
        'redimensionar imagen a 1200x630 dimensiones open graph sin estirar',
        'recorte de cobertura centrado de foto a cuadrado 1080x1080 local',
        'cambiar ancho y alto en pixeles de imagen en el navegador gratis',
        'redimensionar foto vertical a cuadrado 1080x1080 para instagram',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Escale gráficos y fotografías a dimensiones exactas en píxeles, o haga clic en los ajustes preestablecidos integrados de Open Graph (1200×630), YouTube HD (1280×720), Cuadrado (1080×1080) y Avatar (512×512), usando remuestreo Canvas de alta calidad y Recorte de cobertura centrado opcional para evitar distorsiones.',
    instructions: [
      {
        title: 'Cargue su imagen',
        description:
          'Suba cualquier imagen PNG, JPG, WebP o GIF para leer su ancho y alto originales en píxeles.',
      },
      {
        title: 'Configure ancho, alto y modo de ajuste',
        description:
          'Ingrese píxeles personalizados (con Bloqueo de relación de aspecto opcional) o seleccione un ajuste social, luego elija Recorte de cobertura centrado o Estiramiento/Escala exacta.',
      },
      {
        title: 'Elija un formato de salida',
        description:
          'Elija PNG para transparencia, JPG para fotos o WebP para el archivo más pequeño antes de renderizar.',
      },
      {
        title: 'Renderice la imagen redimensionada',
        description:
          'Haga clic en Renderizar imagen redimensionada para generar la nueva versión con sus dimensiones exactas en píxeles.',
      },
      {
        title: 'Revise el resultado y descargue',
        description:
          'Inspeccione la vista previa para verificar nitidez y recorte, revise el tamaño del archivo y luego haga clic en Descargar para guardarla.',
      },
      {
        title: 'Consejo: ¿la imagen se ve estirada o borrosa?',
        description:
          'Active Bloqueo de relación de aspecto o cambie a Recorte de cobertura centrado para evitar distorsión, y evite ampliar mucho más allá del tamaño original.',
      },
    ],
    examples: [
      {
        title: 'Recortar una captura alta en una tarjeta Open Graph de 1200×630',
        input: 'Captura 1440×1600 · Ajuste: OG Share (1200×630) · Ajuste: Recorte de cobertura centrado',
        output: 'Tarjeta nítida de 1200×630 centrada verticalmente sin aplastamiento ni distorsión.',
        explanation: 'El recorte de cobertura escala proporcionalmente hasta llenar el marco objetivo, recortando los bordes sobrantes de forma uniforme.',
      },
      {
        title: 'Crear un avatar cuadrado de 512×512 para un perfil',
        input: 'Foto 3000×2000 · Ajuste: Avatar (512×512) · Ajuste: Recorte de cobertura centrado',
        output: 'Avatar cuadrado de 512×512 con el rostro centrado y sin estiramiento.',
        explanation: 'El recorte centrado mantiene el sujeto en el medio mientras recorta los lados sobrantes.',
      },
    ],
    benefits: [
      'Ajustes preestablecidos de un clic para Open Graph, YouTube HD, Cuadrado y Avatar en píxeles',
      'El Recorte de cobertura centrado evita el estiramiento incómodo al cambiar las relaciones de aspecto',
      'El imageSmoothingQuality de Canvas de alta calidad preserva tipografía y líneas nítidas',
      'Exporta directamente a PNG, JPG o WebP con lectura real del tamaño de archivo',
    ],
    useCases: [
      'Crear tarjetas og:image de 1200×630 para entradas de blog y páginas de destino',
      'Preparar fotos de producto de 1080×1080 y avatares de perfil de 512×512',
      'Reducir capturas de pantalla de alta DPI antes de agregarlas a la documentación',
      'Generar dimensiones exactas de héroe que coincidan con los requisitos de plantillas de CMS',
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre Recorte de cobertura centrado y Estiramiento / Escala exacta?',
        answer:
          'El Recorte de cobertura centrado preserva las proporciones naturales y recorta los bordes sobrantes de forma simétrica cuando la nueva relación de aspecto difiere. La Escala exacta fuerza toda la imagen original dentro del ancho y alto objetivo.',
      },
      {
        question: '¿Puedo ampliar una foto pequeña a 4K limpiamente?',
        answer:
          'La interpolación de Canvas puede exportar rejillas de píxeles más grandes, aunque ampliar más allá de la resolución nativa no puede inventar detalles finos faltantes.',
      },
      {
        question: '¿Cuál es la dimensión máxima de salida admitida?',
        answer:
          'Las entradas están limitadas hasta 8000 px por eje para mantenerse de forma segura dentro de los límites de memoria de Canvas del navegador.',
      },
      {
        question: '¿El Redimensionador de Imágenes es gratis?',
        answer:
          'Sí, es gratis sin registro, sin marcas de agua y sin límite en la cantidad de imágenes que redimensiona.',
      },
      {
        question: '¿Cuál es la diferencia entre redimensionar y recortar una imagen?',
        answer:
          'Redimensionar cambia las dimensiones completas en píxeles de la imagen, mientras que recortar corta parte de la imagen. Esta herramienta puede hacer ambas cosas, incluido el recorte de cobertura centrado.',
      },
      {
        question: '¿El Redimensionador de Imágenes puede hacer una imagen de 1200x630 para compartir en redes sociales?',
        answer:
          'Sí, elija el ajuste preestablecido de Open Graph (1200×630) y la herramienta dimensiona su imagen exactamente para las vistas previas de enlaces en plataformas sociales.',
      },
      {
        question: '¿Cómo redimensiono una imagen sin estirarla?',
        answer:
          'Mantenga activado Bloqueo de relación de aspecto o use Recorte de cobertura centrado, para que la herramienta escale proporcionalmente en lugar de aplastar la imagen.',
      },
      {
        question: '¿Puedo redimensionar una imagen a un cuadrado de 1080x1080?',
        answer:
          'Sí, elija el ajuste Cuadrado o ingrese 1080 tanto para el ancho como para el alto con Recorte de cobertura centrado activado.',
      },
      {
        question: '¿Redimensionar una imagen reduce su tamaño de archivo?',
        answer:
          'Generalmente sí, porque menos píxeles significan menos datos, especialmente cuando también exporta como WebP o JPG.',
      },
      {
        question: '¿Qué formatos de imagen puedo redimensionar?',
        answer:
          'Puede redimensionar imágenes PNG, JPG, WebP y GIF y exportarlas como PNG, JPG o WebP.',
      },
      {
        question: '¿Redimensionar hará que mi imagen se vea borrosa?',
        answer:
          'Reducir el tamaño suele mantenerse nítido gracias al suavizado de Canvas de alta calidad. Ampliar más allá del tamaño original puede suavizar los detalles finos.',
      },
      {
        question: '¿Puedo redimensionar una imagen para una foto de perfil?',
        answer:
          'Sí, use el ajuste Avatar (512×512) con Recorte de cobertura centrado para obtener una foto de perfil perfectamente cuadrada.',
      },
      {
        question: '¿Qué es el Recorte de cobertura centrado en el Redimensionador de Imágenes?',
        answer:
          'Escala la imagen hasta llenar el marco objetivo y luego recorta los bordes sobrantes de forma uniforme desde el centro para que nada se vea estirado.',
      },
      {
        question: '¿El Redimensionador de Imágenes sube mis fotos a algún lugar?',
        answer:
          'No, todo el redimensionado ocurre localmente en su navegador y sus imágenes nunca salen de su dispositivo.',
      },
      {
        question: '¿Puedo redimensionar una imagen en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Suba una foto, ingrese las nuevas dimensiones y descargue el resultado.',
      },
      {
        question: '¿Qué pasa con la transparencia cuando redimensiono un PNG?',
        answer:
          'La transparencia se preserva siempre que exporte como PNG o WebP. Exportar como JPG rellena las áreas transparentes con blanco.',
      },
      {
        question: '¿Puedo redimensionar varias imágenes al mismo tamaño?',
        answer:
          'La herramienta redimensiona una imagen a la vez. Repita el mismo ajuste o dimensiones para cada imagen para mantenerlas coherentes.',
      },
      {
        question: '¿Cuál es la imagen más grande que puede manejar el Redimensionador de Imágenes?',
        answer:
          'Las entradas están limitadas a 8000 px por lado para mantenerse dentro de los límites de memoria de Canvas del navegador.',
      },
      {
        question: '¿Cómo redimensiono una imagen para miniaturas de YouTube?',
        answer:
          'Elija el ajuste YouTube HD (1280×720) para que su miniatura coincida con el tamaño recomendado de 16:9.',
      },
      {
        question: '¿Por qué mi imagen redimensionada sigue siendo grande?',
        answer:
          'El tamaño en píxeles es solo parte de la historia. Exporte como WebP o JPG en lugar de PNG, o use el Compresor de Imágenes después para reducir aún más el archivo.',
      },
    ],
  },
  'image-format-converter': {
    slug: 'conversor-de-formato-de-imagen',
    name: 'Conversor de Formato de Imagen (PNG / JPG / WebP)',
    shortDescription:
      'Convierta por lotes imágenes PNG, JPG, WebP, GIF y SVG a PNG, JPG o WebP localmente con control de calidad y relleno mate de fondo JPEG personalizado.',
    keywords: [
      'conversor de formato de imagen',
      'convertidor png a webp',
      'convertidor webp a png',
      'convertidor svg a png en navegador',
      'convertir jpg a png',
      'convertir png a jpg',
      'convertidor de imagenes por lotes',
      'convertidor webp a jpg',
      'convertidor de imagenes en linea gratis',
    ],
    seo: {
      title: 'Conversor de Formato de Imagen PNG y WebP | UtilityFlow',
      description:
        'Convierta imágenes entre PNG, JPG y WebP: convierta por lotes, ajuste la calidad JPG y rellene fondos transparentes antes de exportar, gratis en su navegador.',
      primaryKeyword: 'conversor de formato de imagen',
      secondaryKeywords: [
        'convertir webp a jpg o png',
        'convertidor png a webp por lotes',
        'relleno de fondo png transparente a jpg',
        'convertir jpg a png gratis',
      ],
      longTailKeywords: [
        'convertir varias imagenes png y jpg a webp por lotes sin conexion',
        'convertir captura webp a png estandar sin subirla',
        'rellenar color de fondo png transparente al convertir a jpg',
        'cambiar formato de imagen de png a jpg en el navegador',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Convierta por lotes archivos PNG, JPG, WebP, GIF y SVG en WebP listo para web, JPG universal o PNG transparente sin pérdida, por completo en su navegador, con relleno mate de fondo personalizado al aplanar la transparencia a JPEG.',
    instructions: [
      {
        title: 'Elija el formato de destino y las opciones',
        description:
          'Seleccione salida PNG, JPG o WebP, configure la calidad con pérdida si aplica y elija un color mate de fondo al convertir imágenes transparentes a JPG.',
      },
      {
        title: 'Seleccione una o varias imágenes',
        description:
          'Cargue un solo archivo o un lote de varios archivos para renderizar cada imagen limpiamente a resolución nativa completa.',
      },
      {
        title: 'Revise la vista previa de cada archivo',
        description:
          'Revise las dimensiones y el tamaño estimado de cada imagen convertida antes de descargar nada.',
      },
      {
        title: 'Convierta el lote',
        description:
          'La herramienta renderiza cada imagen a resolución nativa completa en el formato seleccionado, directamente en su navegador.',
      },
      {
        title: 'Descargue los recursos convertidos',
        description:
          'Compare las dimensiones y el nuevo tamaño en bytes de cada archivo, luego descargue sus imágenes convertidas individualmente.',
      },
      {
        title: 'Consejo: ¿las áreas transparentes se volvieron negras?',
        description:
          'Si un PNG convertido a JPG muestra negro donde era transparente, vuelva a convertir con un color de relleno mate como blanco o el color de su marca.',
      },
    ],
    examples: [
      {
        title: 'Aplanar un logotipo SVG/PNG transparente sobre azul marino de marca para JPG',
        input: 'logo.png transparente · Destino: JPG (90%) · Relleno: #FFFFFF',
        output: 'logo.jpg con fondo blanco limpio y cero artefactos negros de transparencia',
        explanation: 'Rellenar explícitamente el mate de Canvas antes de dibujar evita halos negros al convertir PNG con alfa a JPEG.',
      },
      {
        title: 'Convertir por lotes descargas .webp a .png para software antiguo',
        input: '8 archivos .webp · Destino: PNG',
        output: '8 archivos .png a resolución nativa completa, listos para imprimir o subir.',
        explanation: 'La conversión por lotes procesa todo el grupo sin colas de servidor ni subidas.',
      },
    ],
    benefits: [
      'Procesa lotes de varias imágenes a resolución completa sin colas de servidor',
      'El color configurable de relleno de fondo JPEG evita rellenos transparentes negros feos',
      'Convierte descargas WebP de vuelta a archivos PNG o JPG universalmente aceptados',
      'Renderiza archivos SVG vectoriales directamente en imágenes raster PNG o WebP nítidas',
    ],
    useCases: [
      'Convertir archivos .webp descargados en .png o .jpg para software antiguo',
      'Producir por lotes recursos .webp modernos para sitios web estáticos y CDN',
      'Exportar PNG nítidos desde iconos de marca SVG para diapositivas o publicaciones sociales',
      'Comparar diferencias de tamaño de formato entre PNG, JPG y WebP lado a lado',
    ],
    faqs: [
      {
        question: '¿Puede esto convertir fotos HEIC de Apple?',
        answer:
          'La decodificación HEIC depende del soporte subyacente del navegador (Safari admite HEIC de forma nativa, mientras que Chrome/Firefox generalmente requieren entradas PNG, JPG, WebP, SVG o GIF).',
      },
      {
        question: '¿Convertir JPG a PNG mejora el detalle fotográfico perdido?',
        answer:
          'No. Convertir un JPG ya comprimido a PNG lo preserva sin pérdida en adelante, aunque no puede restaurar artefactos previos de compresión JPEG.',
      },
      {
        question: '¿Se aplican límites de archivo?',
        answer:
          'Solo aplica la RAM de su dispositivo; toda la codificación ocurre localmente sin límites de tamaño de archivo de servidor.',
      },
      {
        question: '¿El Conversor de Formato de Imagen es gratis?',
        answer:
          'Sí, es gratis sin cuenta, sin marcas de agua y sin límites en la cantidad de conversiones.',
      },
      {
        question: '¿Qué formatos puedo convertir y a cuáles?',
        answer:
          'Puede convertir archivos PNG, JPG, WebP, GIF y SVG a salida PNG, JPG o WebP.',
      },
      {
        question: '¿Por qué convertir PNG a WebP?',
        answer:
          'Los archivos WebP suelen ser mucho más pequeños que PNG con una calidad visual similar, lo que hace que las páginas web carguen más rápido.',
      },
      {
        question: '¿Por qué convertir WebP a JPG o PNG?',
        answer:
          'Algunas apps antiguas, impresoras y formularios de subida no aceptan WebP, así que convertir de vuelta a JPG o PNG restaura la compatibilidad universal.',
      },
      {
        question: '¿Puedo convertir varias imágenes a la vez?',
        answer:
          'Sí, puede cargar un lote de imágenes y convertirlas todas al mismo formato de destino de una vez.',
      },
      {
        question: '¿Convertir a JPG elimina la transparencia?',
        answer:
          'Sí, JPG no tiene canal alfa, por lo que las áreas transparentes se rellenan con el color mate que elija, como blanco.',
      },
      {
        question: '¿Qué color mate debo usar al convertir un PNG transparente a JPG?',
        answer:
          'El blanco es el valor predeterminado más seguro. Combine el color de fondo de su sitio web o diapositiva para una apariencia perfecta.',
      },
      {
        question: '¿Puedo convertir una foto a WebP y mantener su calidad?',
        answer:
          'Sí, WebP con calidad de 85–90% suele verse idéntico al JPG original mientras produce un archivo notablemente más pequeño.',
      },
      {
        question: '¿Puedo convertir un logotipo SVG a PNG?',
        answer:
          'Sí, la herramienta rasteriza archivos SVG en imágenes PNG o WebP nítidas con sus dimensiones nativas.',
      },
      {
        question: '¿El Conversor de Formato de Imagen sube mis imágenes?',
        answer:
          'No, cada conversión se ejecuta localmente en su navegador y sus archivos nunca salen de su dispositivo.',
      },
      {
        question: '¿Qué calidad debo usar al convertir a JPG?',
        answer:
          'Una calidad de 85–90% mantiene las fotos limpias mientras son mucho más pequeñas que PNG. Bájela para archivos más pequeños.',
      },
      {
        question: '¿Puedo convertir GIF animados con esta herramienta?',
        answer:
          'Los archivos GIF se pueden cargar, pero la conversión renderiza un solo fotograma fijo en lugar de preservar la animación.',
      },
      {
        question: '¿Por qué mi PNG convertido es más grande que el JPG original?',
        answer:
          'PNG es sin pérdida, por lo que una foto convertida de JPG comprimido a PNG almacena cada píxel sin compresión y suele crecer en tamaño.',
      },
      {
        question: '¿El conversor mantiene las dimensiones originales de la imagen?',
        answer:
          'Sí, las imágenes convertidas mantienen su resolución nativa completa a menos que las redimensione por separado con el Redimensionador de Imágenes.',
      },
      {
        question: '¿Puedo usar el Conversor de Formato de Imagen en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Seleccione imágenes de su dispositivo y descargue los archivos convertidos.',
      },
      {
        question: '¿Cuál es el mejor formato para imágenes de sitios web?',
        answer:
          'WebP suele ser mejor para fotos y gráficos en la web, mientras que PNG es mejor cuando necesita transparencia o calidad sin pérdida.',
      },
      {
        question: '¿Las imágenes convertidas incluyen marcas de agua?',
        answer:
          'No, los archivos convertidos son copias limpias sin marcas de agua ni branding agregados.',
      },
    ],
  },
  'image-rotate-flip': {
    slug: 'rotar-y-voltear-imagen',
    name: 'Rotar, Voltear y Filtrar Imágenes',
    shortDescription:
      'Rote imágenes 90°/180°/270°, voltéelas horizontal o verticalmente, y aplique filtros de escala de grises, brillo y contraste en vivo en su navegador.',
    keywords: [
      'rotar imagen en linea',
      'voltear imagen horizontalmente',
      'filtro de imagen en escala de grises',
      'ajustar brillo y contraste de imagen',
      'rotar foto 90 grados',
      'voltear foto en linea',
      'espejo de imagen en linea',
      'enderezar imagen en linea',
      'editor de filtros de foto en linea',
    ],
    seo: {
      title: 'Rotar Imagen en Línea: Girar y Voltear Fotos | UtilityFlow',
      description:
        'Rote una imagen en línea 90, 180 o 270 grados, voltee fotos horizontal o verticalmente, y ajuste brillo, contraste y escala de grises, gratis en su navegador.',
      primaryKeyword: 'rotar imagen en linea',
      secondaryKeywords: [
        'voltear imagen horizontal vertical',
        'convertir foto a escala de grises en linea',
        'ajustar brillo y contraste en el navegador',
        'rotar foto 90 grados en linea',
      ],
      longTailKeywords: [
        'corregir rotacion de foto de lado 90 grados sin conexion en el navegador',
        'espejo de imagen selfie horizontal sin photoshop',
        'aplicar filtro de escala de grises en blanco y negro y exportar png',
        'rotar imagen de documento escaneado a orientacion correcta',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Corrija la orientación lateral, refleje selfies horizontal o verticalmente, cambie fotos a escala de grises en blanco y negro, y ajuste el brillo y el contraste en tiempo real usando transformaciones locales de HTML5 Canvas 2D.',
    instructions: [
      {
        title: 'Suba una imagen',
        description:
          'Elija cualquier imagen PNG, JPG, WebP o GIF para cargarla en la vista previa interactiva de Canvas.',
      },
      {
        title: 'Rote, voltee o aplique filtros',
        description:
          'Use los botones Girar a la izquierda/derecha, los interruptores de Volteo horizontal/vertical, el interruptor de Escala de grises y los controles deslizantes de Brillo/Contraste.',
      },
      {
        title: 'Revise el resultado en vivo',
        description:
          'Revise la vista previa de Canvas después de cada cambio para confirmar que la orientación y la intensidad del filtro se vean bien.',
      },
      {
        title: 'Restablezca si es necesario',
        description:
          'Use el botón Restablecer para deshacer todas las rotaciones, volteos y cambios de filtro y empezar de nuevo desde el original.',
      },
      {
        title: 'Elija un formato de salida',
        description:
          'Elija PNG para mantener la transparencia, JPG para fotos o WebP para archivos más pequeños antes de exportar.',
      },
      {
        title: 'Exporte la imagen editada',
        description:
          'Haga clic en Descargar para guardar su imagen rotada, volteada o filtrada en su dispositivo.',
      },
    ],
    examples: [
      {
        title: 'Corregir una foto de teléfono de lado y aumentar el brillo',
        input: 'Foto 3024×4032 girada 90° en sentido horario · Brillo: 110% · Contraste: 105%',
        output: 'Imagen vertical de 4032×3024 exportada limpiamente con la orientación EXIF integrada en los píxeles.',
        explanation: 'Canvas intercambia el ancho y el alto automáticamente en giros de 90° y 270°.',
      },
      {
        title: 'Convertir una foto a blanco y negro para imprimir',
        input: 'Foto a color · Escala de grises: activada · Contraste: 110%',
        output: 'Imagen en blanco y negro de alto contraste lista para imprimir o documentar.',
        explanation: 'El filtro de escala de grises se aplica en vivo antes de exportar, sin subir nada.',
      },
    ],
    benefits: [
      'La vista previa en vivo de píxeles se actualiza de inmediato sin latencia de subida',
      'Integra la orientación limpiamente en las coordenadas reales de píxeles en lugar de frágiles marcas EXIF',
      'Combina rotación, reflejo y ajustes de color/tono en un solo espacio de trabajo limpio',
      'El botón Restablecer no destructivo restaura los valores predeterminados en cualquier momento',
    ],
    useCases: [
      'Enderezar documentos o recibos escaneados capturados de lado',
      'Des-reflejar capturas de cámara web al revés o capturas de pantalla volteadas',
      'Crear gráficos en escala de grises de alto contraste para impresión o documentación',
      'Aclarar rápidamente fotos de productos subexpuestas antes de publicarlas',
    ],
    faqs: [
      {
        question: '¿Rotar una imagen vuelve a codificar los píxeles?',
        answer:
          'Sí. Dibujar sobre HTML5 Canvas integra la nueva orientación y los ajustes de filtro permanentemente en cada píxel para que todas las apps la muestren derecha.',
      },
      {
        question: '¿Puedo preservar fondos transparentes al rotar o voltear?',
        answer:
          'Sí: mantenga el Formato de salida en PNG o WebP para conservar la transparencia alfa completa alrededor de gráficos rotados o volteados.',
      },
      {
        question: '¿Las ediciones se guardan en sus servidores?',
        answer:
          'No. Todo se ejecuta dentro de su propia pestaña del navegador y se descarta cuando cierra la página.',
      },
      {
        question: '¿La herramienta para rotar imágenes es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, sin marcas de agua y sin límites.',
      },
      {
        question: '¿Cómo roto una imagen 90 grados?',
        answer:
          'Suba su imagen y haga clic en Girar a la derecha o Girar a la izquierda. Cada clic gira la imagen 90 grados.',
      },
      {
        question: '¿Puedo rotar una imagen 180 grados?',
        answer:
          'Sí, haga clic en Girar dos veces en la misma dirección para voltear la imagen boca abajo.',
      },
      {
        question: '¿Cómo volteo una imagen horizontalmente?',
        answer:
          'Use el interruptor de Volteo horizontal para reflejar la imagen de izquierda a derecha, lo que es útil para corregir selfies reflejadas.',
      },
      {
        question: '¿Cuál es la diferencia entre voltear y rotar una imagen?',
        answer:
          'Rotar gira la imagen alrededor de su centro, mientras que voltear la refleja como un reflejo en un espejo.',
      },
      {
        question: '¿Puedo rotar una foto sin perder calidad?',
        answer:
          'La herramienta vuelve a codificar la imagen a través de Canvas, por lo que exportar como PNG la mantiene sin pérdida. La exportación JPG aplica una compresión ligera.',
      },
      {
        question: '¿Rotar una imagen cambia sus dimensiones?',
        answer:
          'Una rotación de 90 o 270 grados intercambia el ancho y el alto. Una rotación de 180 grados mantiene las mismas dimensiones.',
      },
      {
        question: '¿Puedo hacer una foto en blanco y negro?',
        answer:
          'Sí, active el interruptor de Escala de grises para convertir su foto a blanco y negro al instante.',
      },
      {
        question: '¿Cómo aclaro una foto oscura?',
        answer:
          'Mueva el control de Brillo por encima del 100% y agregue un poco de Contraste para que la imagen no se vea lavada.',
      },
      {
        question: '¿Puedo rotar un PNG y mantener su transparencia?',
        answer:
          'Sí, exporte como PNG o WebP para preservar las áreas transparentes después de rotar o voltear.',
      },
      {
        question: '¿Mis fotos editadas se suben a un servidor?',
        answer:
          'No, toda la rotación, el volteo y el filtrado se ejecutan localmente en su navegador y nada se sube.',
      },
      {
        question: '¿Puedo rotar una imagen en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Suba una foto de lado, gírela hasta que quede derecha y descargue la versión corregida.',
      },
      {
        question: '¿Por qué mi foto está de lado después de subirla?',
        answer:
          'Algunos teléfonos almacenan la orientación como una marca EXIF que no todas las apps leen. Esta herramienta integra la orientación correcta en los píxeles para que se muestre derecha en todas partes.',
      },
      {
        question: '¿Puedo deshacer una rotación o un filtro?',
        answer:
          'Sí, el botón Restablecer restaura la imagen original y la configuración de filtro predeterminada en cualquier momento.',
      },
      {
        question: '¿La herramienta corrige fotos torcidas o inclinadas?',
        answer:
          'Gira en pasos de 90 grados, por lo que corrige fotos de lado o boca abajo. No se admiten correcciones de inclinación pequeñas.',
      },
      {
        question: '¿Qué formatos de imagen puedo rotar y voltear?',
        answer:
          'Puede editar imágenes PNG, JPG, WebP y GIF y exportarlas como PNG, JPG o WebP.',
      },
      {
        question: '¿Puedo rotar y voltear una imagen de una vez?',
        answer:
          'Sí, puede combinar rotaciones, volteos horizontales o verticales y filtros antes de exportar una sola imagen terminada.',
      },
    ],
  },
  'image-to-base64': {
    slug: 'imagen-a-base64',
    name: 'Conversor de Imagen a Base64 y Data URI',
    shortDescription:
      'Codifique imágenes PNG, JPG, WebP, SVG e ICO en Data URIs Base64, etiquetas HTML <img> y reglas CSS, o decodifique cadenas Base64 de vuelta a vistas previas.',
    keywords: [
      'imagen a base64',
      'decodificador de imagen base64',
      'generador de data uri',
      'imagen base64 de fondo css',
      'convertir imagen a data uri',
      'codificador de imagen base64',
      'imagen a base64 en linea gratis',
      'codificar png a base64',
      'convertidor de base64 a imagen',
    ],
    seo: {
      title: 'Convertidor de Imagen a Base64 y Data URI | UtilityFlow',
      description:
        'Cree Data URIs, Base64 sin procesar, etiquetas img HTML y fondos CSS con este convertidor de imagen a base64, o decodifique Base64 a una vista previa.',
      primaryKeyword: 'imagen a base64',
      secondaryKeywords: [
        'codificador de imagen data uri',
        'vista previa de imagen base64',
        'svg o png en linea en css',
        'imagen a base64 en linea gratis',
      ],
      longTailKeywords: [
        'convertir icono png a data uri de fondo css sin conexion',
        'decodificar cadena base64 sin procesar en vista previa de imagen descargable',
        'comparar tamano de bytes de imagen binaria vs tamano de cadena base64',
        'codificar imagen de logotipo pequena a base64 para correo html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierta iconos pequeños, logotipos y gráficos de correo en URIs autocontenidas `data:image/...;base64,...`, etiquetas HTML `<img>` listas para copiar y declaraciones CSS `background-image`, o cambie de modo para inspeccionar y descargar cargas útiles de imágenes Base64 sin procesar.',
    instructions: [
      {
        title: 'Elija el modo Codificar o Decodificar',
        description:
          'Use Imagen → Data URI Base64 para codificar un archivo, o Base64 → Vista previa de imagen para renderizar cargas útiles Base64 pegadas.',
      },
      {
        title: 'Cargue una imagen o pegue texto Base64',
        description:
          'Seleccione cualquier recurso PNG, JPG, WebP, SVG, GIF o ICO (o pegue una cadena completa data:image/... o texto Base64 sin procesar).',
      },
      {
        title: 'Revise la comparación de tamaños',
        description:
          'Compare el tamaño del archivo original con el tamaño de la cadena Base64 para ver la sobrecarga de aproximadamente 33% antes de incrustarla.',
      },
      {
        title: 'Elija el formato de salida que necesita',
        description:
          'Elija el Data URI completo, la cadena Base64 sin procesar, la etiqueta HTML <img> o el fragmento de background-image de CSS.',
      },
      {
        title: 'Copie el fragmento o descargue la vista previa',
        description:
          'Copie el Data URI, el Base64 sin procesar, la etiqueta HTML <img> o el fragmento de fondo CSS, o descargue una imagen de vista previa decodificada.',
      },
      {
        title: 'Consejo: ¿el Base64 pegado no funciona?',
        description:
          'Asegúrese de haber pegado la cadena completa sin saltos de línea, y verifique que el decodificador haya agregado el prefijo correcto data:image/... para su formato.',
      },
    ],
    examples: [
      {
        title: 'Incrustar una marca de verificación SVG de 2 KB dentro de CSS',
        input: 'check.svg (2.048 bytes)',
        output: 'data:image/svg+xml;base64,... (~2,7 KB) + regla CSS background-image lista para pegar',
        explanation: 'Ahorra una ida y vuelta HTTP extra para iconos de UI diminutos y correos HTML de un solo archivo sin conexión.',
      },
      {
        title: 'Decodificar una cadena Base64 copiada de DevTools',
        input: 'Cadena Base64 sin procesar de un icono PNG',
        output: 'Vista previa del icono renderizada con opción de descarga como PNG.',
        explanation: 'El decodificador agrega automáticamente el prefijo de Data URI PNG cuando falta el encabezado.',
      },
    ],
    benefits: [
      'Comparación instantánea del tamaño de archivo binario frente a la sobrecarga de cadena Base64 de ~33%',
      'Genera simultáneamente Data URI, Base64 sin procesar, <img> HTML y fragmentos de fondo CSS',
      'Antepone automáticamente el prefijo de Data URI PNG si pega Base64 sin procesar sin encabezado',
      'Mantiene recursos propietarios y blobs de respuesta de API sin conexión dentro de su navegador',
    ],
    useCases: [
      'Incrustar iconos diminutos dentro de paquetes CSS o informes HTML autocontenidos',
      'Depurar Data URIs de imágenes devueltas por API JSON o webhooks',
      'Incrustar insignias de marca pequeñas en plantillas de correo HTML transaccional',
      'Inspeccionar cargas útiles de imágenes codificadas copiadas de DevTools del navegador',
    ],
    faqs: [
      {
        question: '¿Cuándo debo usar imágenes Base64 en lugar de URL de imágenes normales?',
        answer:
          'Use Data URIs Base64 con moderación para iconos muy pequeños (generalmente menos de 5–10 KB) o exportaciones HTML de un solo archivo. Base64 expande el tamaño de los datos en ~33% y no se puede almacenar en caché de forma independiente entre páginas como las URL normales.',
      },
      {
        question: '¿El decodificador puede mostrar vistas previas de cadenas Base64 sin procesar sin el prefijo "data:image/png;base64,"?',
        answer:
          '¡Sí! Cambiar a Base64 → Vista previa de imagen elimina automáticamente los espacios en blanco y antepone un encabezado estándar de Data URI PNG si falta uno.',
      },
      {
        question: '¿Funciona con SVG vectoriales?',
        answer:
          'Sí. Subir un archivo .svg crea un URI válido data:image/svg+xml;base64,... junto con fragmentos HTML y CSS.',
      },
      {
        question: '¿El convertidor de imagen a Base64 es gratis?',
        answer:
          'Sí, es gratis sin registro, sin marcas de agua y sin límites en la cantidad de imágenes que codifica o decodifica.',
      },
      {
        question: '¿Qué es un Data URI Base64?',
        answer:
          'Un Data URI incrusta una imagen directamente dentro de una página web, hoja de estilos o correo como texto, comenzando con data:image/...;base64, seguido de los datos codificados.',
      },
      {
        question: '¿Por qué la cadena Base64 es más grande que mi imagen?',
        answer:
          'La codificación Base64 representa datos binarios con caracteres de texto, lo que agrega aproximadamente 33% de sobrecarga al tamaño original del archivo.',
      },
      {
        question: '¿Qué tamaño de imagen es mejor para la codificación Base64?',
        answer:
          'Mantenga las imágenes Base64 pequeñas, generalmente menos de 5–10 KB, como iconos y logotipos. Las imágenes más grandes inflan su HTML o CSS y no se pueden almacenar en caché por separado.',
      },
      {
        question: '¿Puedo convertir un JPG a Base64?',
        answer:
          'Sí, los archivos JPG, PNG, WebP, SVG, GIF e ICO se pueden codificar en Data URIs Base64.',
      },
      {
        question: '¿Cómo uso una imagen Base64 en HTML?',
        answer:
          'Copie la etiqueta HTML <img> generada y péguela en su página. El atributo src ya contiene el Data URI completo.',
      },
      {
        question: '¿Cómo uso una imagen Base64 en CSS?',
        answer:
          'Copie el fragmento de background-image de CSS y péguelo en su hoja de estilos para mostrar la imagen sin una solicitud de archivo separada.',
      },
      {
        question: '¿Puedo decodificar una cadena Base64 de vuelta a una imagen?',
        answer:
          'Sí, cambie a Base64 → Vista previa de imagen, pegue la cadena y la herramienta renderiza la imagen para que pueda verla o descargarla.',
      },
      {
        question: '¿Necesito el prefijo data:image/png;base64, al decodificar?',
        answer:
          'No, si pega Base64 sin procesar sin encabezado, la herramienta agrega automáticamente un prefijo estándar de Data URI PNG.',
      },
      {
        question: '¿La herramienta de imagen a Base64 sube mis archivos?',
        answer:
          'No, la codificación y decodificación se ejecutan por completo en su navegador y sus imágenes nunca salen de su dispositivo.',
      },
      {
        question: '¿Puedo codificar un SVG a Base64?',
        answer:
          'Sí, los archivos SVG producen un URI válido data:image/svg+xml;base64,... junto con fragmentos HTML y CSS coincidentes.',
      },
      {
        question: '¿Cuál es la diferencia entre Base64 sin procesar y un Data URI?',
        answer:
          'El Base64 sin procesar es solo el texto codificado, mientras que un Data URI agrega el encabezado data:image/...;base64, para que los navegadores conozcan el tipo de imagen.',
      },
      {
        question: '¿Puedo usar imágenes Base64 en correos?',
        answer:
          'Sí, las imágenes Base64 pequeñas funcionan bien en correos HTML autocontenidos, aunque algunos clientes de correo limitan el soporte de Data URI, así que pruebe antes de enviar.',
      },
      {
        question: '¿Hay un límite de tamaño de archivo para codificar?',
        answer:
          'No hay límite de servidor porque nada se sube. Las imágenes muy grandes están limitadas solo por la memoria de su navegador, y las cadenas Base64 enormes son poco prácticas para pegar.',
      },
      {
        question: '¿Puedo convertir una imagen Base64 en un archivo descargable?',
        answer:
          'Sí, decodifique la cadena en el modo Base64 → Vista previa de imagen y use la opción de descarga para guardarla como un archivo de imagen normal.',
      },
      {
        question: '¿La codificación Base64 cambia la calidad de la imagen?',
        answer:
          'No, Base64 es una representación de texto sin pérdida de los mismos bytes exactos, por lo que la imagen decodificada es idéntica a la original.',
      },
      {
        question: '¿Puedo usar el convertidor de imagen a Base64 en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles. Codifique una imagen de su galería de fotos o pegue una cadena Base64 para verla.',
      },
    ],
  },
  'color-contrast-checker': {
    slug: 'verificador-de-contraste-de-color',
    name: 'Verificador de Contraste de Color y Extractor de Paleta',
    shortDescription:
      'Pruebe proporciones de contraste de color WCAG 2.1 AA/AAA, convierta valores HEX/RGB/HSL y extraiga paletas de colores dominantes de imágenes subidas.',
    keywords: [
      'verificador de contraste de color wcag',
      'proporcion de contraste de accesibilidad',
      'extractor de paleta de colores de imagen',
      'selector de color hex rgb hsl',
      'calculadora de proporcion de contraste wcag aa',
      'verificador de contraste aaa en linea',
      'combinaciones de colores accesibles',
      'prueba de contraste de texto y fondo',
      'verificador de accesibilidad de diseno',
    ],
    seo: {
      title: 'Verificador de Contraste de Color WCAG AA/AAA | UtilityFlow',
      description:
        'Revise proporciones de contraste WCAG 2.1 AA y AAA para pares de texto y fondo, convierta HEX, RGB y HSL y extraiga paletas de imágenes, gratis en su navegador.',
      primaryKeyword: 'verificador de contraste de color',
      secondaryKeywords: [
        'calculadora de proporcion de contraste wcag aa aaa',
        'extraer paleta de colores de imagen',
        'verificador de color accesible de texto y fondo',
        'proporcion de contraste wcag para texto normal y grande',
      ],
      longTailKeywords: [
        'probar proporcion de contraste wcag 2.1 de texto normal y grande en linea',
        'extraer muestras hex dominantes de captura al verificador de contraste',
        'revisar accesibilidad de color de interfaz en modo oscuro',
        'que proporcion de contraste pasa wcag aa para texto del cuerpo',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Valide pares de colores de UI contra los umbrales oficiales de luminancia relativa y contraste de WCAG 2.1 (AA 4.5:1, AA Grande 3.0:1, AAA 7.0:1), edite valores HEX/RGB/HSL sincronizados y suba capturas de pantalla o logotipos para extraer muestras HEX dominantes directamente en su espacio de Primer plano o Fondo.',
    instructions: [
      {
        title: 'Elija los colores de Primer plano y Fondo',
        description:
          'Use los selectores de color, las entradas HEX o las entradas individuales R/G/B, o empiece con ajustes accesibles e intercambie colores con un clic.',
      },
      {
        title: 'Ajuste los tonos hasta que la proporción pase',
        description:
          'Mueva la luminosidad o los canales RGB individuales y observe cómo se actualiza la proporción en vivo hasta que su par alcance el umbral AA o AAA que necesita.',
      },
      {
        title: 'Revise la tarjeta de puntuación WCAG 2.1',
        description:
          'Revise la proporción de contraste exacta (por ejemplo, 12.63 : 1) y el estado instantáneo de APROBADO/REPROBADO en los puntos de referencia AA Normal, AA Grande/UI, AAA Normal y AAA Grande.',
      },
      {
        title: 'Vea el par en texto real de UI',
        description:
          'Lea las vistas previas en vivo de tipografía y tarjetas de control de UI con borde para ver cómo se ven realmente sus colores como texto del cuerpo, encabezados y botones.',
      },
      {
        title: 'Extraiga muestras de una imagen (opcional)',
        description:
          'Suba cualquier captura de pantalla o logotipo de marca abajo para extraer hasta 8 colores dominantes distintos y aplicarlos directamente a Primer plano o Fondo.',
      },
      {
        title: 'Copie los colores y corrija los pares que fallan',
        description:
          'Copie los valores HEX, RGB o HSL sincronizados en su CSS. Si un par falla, oscurezca el texto o aclare el fondo hasta que la tarjeta de puntuación se vuelva verde.',
      },
    ],
    examples: [
      {
        title: 'Auditar la legibilidad de un botón CTA principal',
        input: 'Primer plano: #FFFFFF · Fondo: #4F46E5',
        output: 'Proporción de contraste 6.29 : 1 — Pasa WCAG AA Normal, AA Grande y AAA Grande',
        explanation: 'Usa la luminancia relativa oficial sRGB con corrección gamma (0.2126R + 0.7152G + 0.0722B).',
      },
      {
        title: 'Extraer la paleta de un logotipo de marca',
        input: 'Logotipo subido · 8 muestras extraídas',
        output: 'Muestras HEX dominantes listas para probar como Primer plano o Fondo.',
        explanation: 'El cuantizador de color de Canvas agrupa tonos cercanos y muestra los colores más prominentes por área.',
      },
    ],
    benefits: [
      'Fórmula exacta de luminancia relativa sRGB de WCAG 2.1, sin aproximaciones',
      'Vistas previas en vivo de tipografía y tarjetas de control de UI con borde con el par activo',
      'El cuantizador de color de imagen Canvas integrado extrae muestras de marca sin herramientas extra',
      'Muestra cadenas HEX, RGB y HSL sincronizadas listas para pegar en CSS',
    ],
    useCases: [
      'Auditar sistemas de diseño, paneles SaaS y temas de modo oscuro para cumplimiento WCAG AA/AAA',
      'Extraer colores de marca dominantes de logotipos de clientes directamente en paletas de UI accesibles',
      'Corregir pares de insignias, marcadores de posición o etiquetas de botones de bajo contraste antes del lanzamiento',
      'Enseñar jerarquía visual accesible con vistas previas en vivo de texto grande frente a normal',
    ],
    faqs: [
      {
        question: '¿Qué proporción de contraste se requiere para WCAG Nivel AA frente a Nivel AAA?',
        answer:
          'WCAG 2.1 Nivel AA requiere al menos 4.5:1 para texto normal del cuerpo y 3.0:1 para texto grande (18 pt+ o 14 pt+ en negrita) y componentes de UI. El Nivel AAA aumenta estos umbrales a 7.0:1 para texto normal y 4.5:1 para texto grande.',
      },
      {
        question: '¿Cómo funciona el extractor de paleta de imágenes?',
        answer:
          'Dibuja su imagen subida en un Canvas HTML5 fuera de pantalla, ignora los píxeles transparentes, agrupa cubos RGB cercanos y muestra hasta 8 muestras dominantes visualmente distintas por cobertura de área.',
      },
      {
        question: '¿El Verificador de Contraste de Color también convierte entre HEX, RGB y HSL?',
        answer:
          'Sí. Actualizar cualquier selector de color, entrada HEX o campo R/G/B recalcula automáticamente las representaciones HEX, rgb() y hsl().',
      },
      {
        question: '¿Qué cuenta como texto grande bajo las reglas de contraste WCAG?',
        answer:
          'El texto grande es de 18 pt (24 px) o más, o de 14 pt (18.66 px) en negrita o más. El texto grande solo necesita una proporción de 3.0:1 para AA y 4.5:1 para AAA, mientras que el texto normal necesita 4.5:1 para AA y 7.0:1 para AAA.',
      },
      {
        question: '¿El Verificador de Contraste de Color es gratis?',
        answer:
          'Sí, es completamente gratis sin registro. Todas las verificaciones se ejecutan localmente en su navegador, por lo que puede probar tantos pares de colores como quiera.',
      },
      {
        question: '¿Mis imágenes subidas salen de mi dispositivo?',
        answer:
          'No. La extracción de paleta ocurre por completo en su navegador usando un canvas fuera de pantalla, y sus imágenes nunca se suben a ningún servidor.',
      },
      {
        question: '¿Cómo se calcula la proporción de contraste?',
        answer:
          'Usa la fórmula oficial de WCAG 2.1: la luminancia relativa de cada color se calcula a partir de valores sRGB linealizados con gamma, y la proporción es (L1 + 0.05) / (L2 + 0.05), donde L1 es el color más claro.',
      },
      {
        question: '¿Puedo revisar el contraste para diseños de modo oscuro?',
        answer:
          'Sí. Ingrese sus colores de fondo oscuro y texto claro de la misma manera, y la tarjeta de puntuación muestra si el par pasa AA y AAA tanto para texto normal como grande.',
      },
      {
        question: '¿Por qué mi par de colores falla AA aunque me parece legible?',
        answer:
          'La legibilidad percibida y el contraste de luminancia medido son cosas diferentes. Los colores que le parecen distintos pueden seguir estando cerca en luminancia, especialmente los tonos medios, así que confíe en la proporción y ajuste la luminosidad hasta que pase.',
      },
      {
        question: '¿Qué debo hacer si mi color de marca falla la prueba de contraste?',
        answer:
          'Mantenga el color de marca para encabezados grandes o elementos decorativos, y use un tono más oscuro para el texto del cuerpo. También puede aclarar el fondo o agregar una superposición semitransparente detrás del texto.',
      },
      {
        question: '¿El verificador funciona para componentes de UI como botones e iconos?',
        answer:
          'Sí. WCAG 2.1 requiere una proporción de 3.0:1 para componentes de UI que no son texto, como bordes de botones, contornos de entradas e iconos significativos, y la columna AA Grande/UI de la tarjeta de puntuación cubre exactamente eso.',
      },
      {
        question: '¿Puedo probar texto de marcador de posición y estados deshabilitados con esta herramienta?',
        answer:
          'Sí, ingrese el color del marcador de posición o del estado deshabilitado como primer plano. Tenga en cuenta que los controles deshabilitados están exentos de los requisitos de contraste WCAG, pero el texto de marcador de posición que transmite información no lo está.',
      },
      {
        question: '¿Cuántos colores puede extraer el extractor de paleta de una imagen?',
        answer:
          'Hasta 8 colores dominantes distintos. Los tonos similares se agrupan, por lo que las muestras representan los colores visualmente más prominentes de la imagen en lugar de cada tono presente.',
      },
      {
        question: '¿Puedo aplicar una muestra extraída directamente como mi primer plano o fondo?',
        answer:
          'Sí. Cada muestra extraída tiene un botón para enviarla directamente al espacio de Primer plano o Fondo, para que pueda probarla contra su otro color de inmediato.',
      },
      {
        question: '¿Qué formatos de imagen funcionan con el extractor de paleta?',
        answer:
          'Cualquier imagen que su navegador pueda mostrar, incluidas capturas de pantalla o logotipos PNG, JPG, WebP y SVG. Los píxeles transparentes se ignoran al agrupar colores.',
      },
      {
        question: '¿El Verificador de Contraste de Color prueba el daltonismo?',
        answer:
          'No, mide solo el contraste de luminancia. El contraste es una parte de la accesibilidad; para la seguridad ante el daltonismo, evite también depender solo del color para transmitir significado y revise su paleta con un simulador de daltonismo.',
      },
      {
        question: '¿Puedo usar los valores HEX, RGB y HSL en mi CSS?',
        answer:
          'Sí. Los tres formatos se mantienen sincronizados mientras edita, y puede copiar cualquiera de ellos directamente en su hoja de estilos, tokens de diseño o configuración de Tailwind.',
      },
      {
        question: '¿Cuál es la diferencia entre AA y AAA en la práctica?',
        answer:
          'AA es el estándar legal y práctico al que apuntan la mayoría de los sitios, mientras que AAA es más estricto y a menudo difícil de cumplir para texto del cuerpo con colores de marca. Apunte a AAA donde pueda, pero nunca publique por debajo de AA para texto.',
      },
      {
        question: '¿La herramienta almacena mis elecciones de color o imágenes?',
        answer:
          'No. Todo se ejecuta localmente en la pestaña de su navegador, nada se sube y sus colores e imágenes desaparecen cuando cierra o actualiza la página.',
      },
      {
        question: '¿Puedo revisar más de un par de colores a la vez?',
        answer:
          'El verificador prueba un par de primer plano/fondo a la vez, pero puede intercambiar colores con un solo clic y volver a probar tantos pares como necesite en segundos.',
      },
    ],
  },
  'qr-code-scanner': {
    slug: 'escaneador-de-codigos-qr',
    name: 'Escáner de Códigos QR y Estudio de QR vCard',
    shortDescription:
      'Decodifique códigos QR de imágenes subidas o de la cámara de su dispositivo en privado en el navegador, o cree códigos QR de contacto vCard descargables en PNG/SVG.',
    keywords: [
      'escaneador de codigo qr en linea',
      'decodificar codigo qr de imagen',
      'generador de codigo qr vcard',
      'lector qr de camara en navegador',
      'escanear codigo qr de captura de pantalla',
      'lector de codigo qr sin app',
      'decodificar codigo qr png jpg',
      'escaneador de codigo qr wifi',
      'lector de contenido de codigo qr',
    ],
    seo: {
      title: 'Escáner de Códigos QR y Generador de vCard | UtilityFlow',
      description:
        'Escanee y decodifique códigos QR de capturas, fotos o su cámara web en su navegador, o cree un código QR de contacto vCard descargable en PNG y SVG, gratis.',
      primaryKeyword: 'escaneador de codigos qr',
      secondaryKeywords: [
        'lector de imagen de codigo qr en linea',
        'escanear qr de captura de pantalla gratis',
        'generar codigo qr de contacto vcard',
        'lector de codigo qr con camara web',
      ],
      longTailKeywords: [
        'decodificar codigo qr de captura png o jpg subida sin conexion',
        'escanear codigo qr con camara web de laptop sin instalar app',
        'crear codigo qr de contacto vcard 3.0 descargable svg y png',
        'leer codigo qr invertido de modo oscuro de captura de pantalla',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lea el contenido de códigos QR desde capturas de pantalla, fotos o una transmisión de cámara en vivo opcional directamente en su navegador, con clasificación automática de la carga útil (URL, Wi-Fi, vCard, Texto), además de un **Constructor de QR de contacto vCard** complementario que exporta tarjetas de contacto nítidas en PNG y SVG.',
    instructions: [
      {
        title: 'Suba una imagen QR o active el escaneo con cámara',
        description:
          'Suelte o seleccione cualquier captura QR en PNG, JPG, WebP o SVG, o haga clic en Iniciar escáner de cámara cuando quiera leer un código QR impreso en vivo.',
      },
      {
        title: 'Deje que el escáner decodifique el código',
        description:
          'La herramienta ejecuta decodificación local en su navegador con varias escalas y detección de inversión, por lo que incluso los códigos QR de modo oscuro o invertidos se leen sin subir nada.',
      },
      {
        title: 'Inspeccione y copie el texto decodificado',
        description:
          'Revise la carga útil decodificada, la categoría de carga útil detectada y la vista previa de enlace seguro (solo las URL http/https se convierten en enlaces clicables), luego copie con un clic.',
      },
      {
        title: 'Revise el tipo de carga útil antes de actuar',
        description:
          'Vea si el QR contiene una URL, credenciales de Wi-Fi, un contacto vCard o texto simple, y verifique que el destino se vea correcto antes de visitarlo o conectarse.',
      },
      {
        title: 'Cambie al Constructor de QR de contacto vCard (opcional)',
        description:
          'Cree un código QR de tarjeta de presentación VCF 3.0 escaneable con nombre, organización, teléfono, correo y sitio web, y descárguelo como PNG o SVG.',
      },
      {
        title: 'Descargue, imprima o solucione un escaneo fallido',
        description:
          'Descargue su QR vCard o vuelva a subir una captura más nítida y bien iluminada si la decodificación falla: los códigos QR recortados, borrosos o diminutos son la causa más común.',
      },
    ],
    examples: [
      {
        title: 'Verificar una captura de folleto de marketing impreso antes de pedir impresiones',
        input: 'Subir flyer-qr.png (PNG 600×600)',
        output: 'Carga útil decodificada · URL del sitio web: https://ejemplo.com/?utm_source=print',
        explanation: 'Ejecuta decodificación local con varias escalas y detección de inversión para que los códigos QR de modo oscuro invertidos también se decodifiquen de forma confiable.',
      },
      {
        title: 'Crear un código QR vCard para una tarjeta de presentación',
        input: 'Nombre: Ana Ruiz · Teléfono: +34 600 123 456 · Correo: ana@ejemplo.com',
        output: 'Código QR vCard 3.0 descargable en PNG y SVG.',
        explanation: 'Los teléfonos reconocen el formato VCF 3.0 y ofrecen guardar el contacto al escanear.',
      },
    ],
    benefits: [
      'Decodifica limpiamente capturas QR normales e invertidas en color sin apps móviles',
      'La transmisión de cámara opcional se detiene de inmediato al decodificar o al salir de la pestaña',
      'Clasifica las cargas útiles decodificadas limpiamente sin redirigir automáticamente',
      'Incluye generación completa de QR vCard 3.0 en PNG y SVG para tarjetas de presentación digitales',
    ],
    useCases: [
      'Verificar dos veces las URL de destino UTM dentro de recursos QR antes de imprimir carteles',
      'Extraer cadenas de Wi-Fi o tokens de texto de capturas de pantalla de escritorio',
      'Escanear códigos QR físicos en una laptop usando su cámara web integrada',
      'Crear códigos QR de contacto vCard escaneables para currículums, insignias y presentaciones',
    ],
    faqs: [
      {
        question: '¿Qué pasa si mi dispositivo no tiene cámara o deniega el permiso de cámara?',
        answer:
          'Nunca necesita una cámara para usar esta herramienta: simplemente tome una captura de pantalla o foto y súbala con Subir imagen de código QR, que funciona de forma idéntica sin permisos de cámara.',
      },
      {
        question: '¿Escanear un código QR abre automáticamente sitios web maliciosos?',
        answer:
          'No. El texto decodificado se muestra primero de forma segura dentro de un área de texto de solo lectura para que pueda inspeccionar cualquier URL antes de decidir si la visita.',
      },
      {
        question: '¿Necesita un generador de QR de URL, Wi-Fi o de color personalizado en lugar de un vCard?',
        answer:
          'Pruebe nuestra herramienta dedicada Generador de Códigos QR en Herramientas de Redes Sociales para colores personalizados de primer plano/fondo, niveles de corrección de errores y códigos QR de URL/texto.',
      },
      {
        question: '¿El Escáner de Códigos QR es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, y tanto el escaneo como la generación de QR vCard se ejecutan localmente en su navegador.',
      },
      {
        question: '¿Mis imágenes QR subidas se envían a un servidor?',
        answer:
          'No. La decodificación ocurre por completo en su navegador usando jsQR, por lo que sus capturas de pantalla y fotos nunca salen de su dispositivo.',
      },
      {
        question: '¿Qué formatos de imagen puede leer el Escáner de Códigos QR?',
        answer:
          'Las imágenes PNG, JPG, WebP y SVG funcionan. Las capturas de pantalla tomadas en un teléfono o computadora son la forma más común de proporcionar un código QR.',
      },
      {
        question: '¿Por qué falló el escaneo de mi código QR?',
        answer:
          'Las causas habituales son una imagen borrosa o de baja resolución, un código QR recortado demasiado ajustado, reflejos en un código impreso o un código simplemente demasiado pequeño en el marco. Vuelva a subir una captura más nítida, más grande y bien iluminada.',
      },
      {
        question: '¿El escáner puede leer códigos QR invertidos o de modo oscuro?',
        answer:
          'Sí. El decodificador detecta inversiones, por lo que los códigos QR con módulos claros sobre fondo oscuro se decodifican con la misma confiabilidad que los códigos estándar negros sobre blanco.',
      },
      {
        question: '¿Qué tipos de cargas útiles QR puede detectar?',
        answer:
          'Clasifica automáticamente el contenido decodificado, incluidas URL de sitios web, credenciales de red Wi-Fi, contactos vCard y texto simple, para que sepa qué hace un código antes de actuar sobre él.',
      },
      {
        question: '¿Es seguro escanear un código QR que encontré en público?',
        answer:
          'Escanear es seguro aquí porque nada se abre automáticamente: primero ve el texto decodificado. Siempre lea la URL con cuidado y evite ingresar contraseñas o datos de pago en páginas a las que lo lleve un código QR aleatorio.',
      },
      {
        question: '¿Puedo escanear un código QR con la cámara web de mi laptop?',
        answer:
          'Sí. Haga clic en Iniciar escáner de cámara, permita el acceso a la cámara cuando su navegador lo pida y sostenga el código impreso frente a la cámara. La transmisión se detiene automáticamente una vez que el código se decodifica o cuando sale de la pestaña.',
      },
      {
        question: '¿La cámara sigue grabando después de un escaneo?',
        answer:
          'No. La transmisión de cámara se detiene de inmediato tras una decodificación exitosa, y también se detiene si cambia de pestaña o cierra el escáner.',
      },
      {
        question: '¿Qué es un código QR vCard?',
        answer:
          'Un código QR vCard almacena datos de contacto — nombre, organización, teléfono, correo y sitio web — en el formato estándar VCF 3.0, por lo que escanearlo con un teléfono ofrece guardar el contacto directamente.',
      },
      {
        question: '¿Puedo descargar mi código QR vCard como PNG y SVG?',
        answer:
          'Sí. El constructor vCard exporta ambos formatos: PNG para documentos y presentaciones, y SVG para impresión nítida a cualquier tamaño.',
      },
      {
        question: '¿El código QR vCard funcionará tanto en iPhone como en Android?',
        answer:
          'Sí. Ambas plataformas reconocen los códigos QR vCard estándar VCF 3.0 y ofrecen agregar el contacto al escanear con la cámara integrada.',
      },
      {
        question: '¿Puedo escanear un código QR de un video o grabación de pantalla?',
        answer:
          'No directamente, pero puede pausar el video, tomar una captura de pantalla del fotograma que muestra el código QR y subir esa captura al escáner.',
      },
      {
        question: '¿El Escáner de Códigos QR funciona sin conexión?',
        answer:
          'Una vez cargada la página, la decodificación se ejecuta por completo en su navegador sin solicitudes de red, por lo que puede escanear imágenes subidas incluso sin conexión a internet.',
      },
      {
        question: '¿Puedo escanear varios códigos QR en una imagen?',
        answer:
          'El escáner decodifica un código QR a la vez. Si una imagen contiene varios códigos, recorte la imagen para que cada código se suba por separado.',
      },
      {
        question: '¿Qué debo revisar antes de imprimir un código QR en un folleto?',
        answer:
          'Suba una captura de pantalla del diseño terminado y escanee aquí para confirmar que la URL de destino, los parámetros UTM y la carga útil sean exactamente correctos antes de pedir impresiones.',
      },
      {
        question: '¿La herramienta almacena mis códigos QR escaneados o imágenes de cámara?',
        answer:
          'No. Nada se sube, registra ni almacena. Los resultados decodificados existen solo en su pestaña actual del navegador y desaparecen cuando la cierra.',
      },
    ],
  },
  'password-generator': {
    slug: 'generador-de-contrasenas',
    name: 'Generador Criptográfico de Contraseñas y Frases de Contraseña',
    shortDescription:
      'Genere contraseñas aleatorias sin sesgo y frases de contraseña estilo Diceware usando muestreo de rechazo con crypto.getRandomValues y cálculos exactos de entropía.',
    keywords: [
      'generador de contrasenas criptografico',
      'generador de contrasenas aleatorias seguras',
      'generador de frases de contrasena diceware',
      'contrasena crypto getrandomvalues',
      'creador de contrasenas fuertes en linea',
      'generador de frases de contrasena aleatorias',
      'verificador de entropia de contrasena',
      'generar contrasena segura gratis',
      'herramienta de contrasena aleatoria sin sesgo',
    ],
    seo: {
      title: 'Generador de Contraseñas Seguras Aleatorias | UtilityFlow',
      description:
        'Genere contraseñas aleatorias fuertes y frases Diceware memorables en su navegador con Web Crypto y puntuación exacta de entropía, sin almacenamiento.',
      primaryKeyword: 'generador de contrasenas',
      secondaryKeywords: [
        'generador de contrasenas criptograficamente seguro',
        'generador de frases de contrasena memorables en linea',
        'calculadora de entropia de contrasena',
        'creador de contrasena aleatoria con simbolos',
      ],
      longTailKeywords: [
        'generar contrasena aleatoria con crypto getrandomvalues sin sesgo de modulo',
        'crear frase de contrasena diceware de 5 palabras local sin conexion',
        'excluir caracteres ambiguos 0 o 1 l i en generador de contrasenas',
        'cuantos bits de entropia tiene una contrasena de 18 caracteres',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Genere contraseñas de alta entropía y frases de contraseña memorables de varias palabras 100% localmente usando el CSPRNG respaldado por hardware de su navegador (`window.crypto.getRandomValues`) con muestreo de rechazo para eliminar el sesgo de módulo y mezcla Fisher-Yates para evitar posiciones de caracteres predecibles.',
    instructions: [
      {
        title: 'Elija Contraseña aleatoria o Frase de contraseña Diceware',
        description:
          'Use Contraseña aleatoria para máxima densidad de conjunto de caracteres o Frase de contraseña Diceware para escritura humana más fácil con fuerte entropía de varias palabras.',
      },
      {
        title: 'Personalice longitud, conjuntos de caracteres y cantidad por lote',
        description:
          'Ajuste la longitud (8–64 caracteres), active Mayúsculas/Minúsculas/Dígitos/Símbolos, excluya opcionalmente caracteres parecidos (0/O/1/l/I) o seleccione 3–8 palabras Diceware.',
      },
      {
        title: 'Genere su contraseña o frase de contraseña',
        description:
          'Haga clic en generar para crear una salida nueva usando el CSPRNG respaldado por hardware de su navegador con muestreo de rechazo, para que cada carácter tenga exactamente la misma probabilidad.',
      },
      {
        title: 'Revise la puntuación de entropía',
        description:
          'Inspeccione los bits exactos de entropía de Shannon (~72–118+ bits recomendados) para ver cuánto trabajo de adivinación representa el resultado antes de usarlo.',
      },
      {
        title: 'Regenere y copie de forma segura',
        description:
          '¿No le gusta un resultado? Regenere para obtener uno nuevo, luego copie una sola contraseña o todo el lote con un clic.',
      },
      {
        title: 'Guárdela en un gestor de contraseñas y actualice para borrar',
        description:
          'Pegue el resultado en su gestor de contraseñas de inmediato. Actualizar la página borra las contraseñas generadas de la memoria, así que nunca dependa de la pestaña para recordarlas.',
      },
    ],
    examples: [
      {
        title: 'Contraseña mixta de 18 caracteres con conjunto completo de caracteres',
        input: 'Longitud: 18 · Mayúsculas + Minúsculas + Dígitos + Símbolos (Conjunto: 88 caracteres)',
        output: '~116.3 bits de entropía criptográfica · Garantiza >= 1 carácter de cada clase habilitada',
        explanation: 'Usa muestreo de rechazo (descartar muestras uint32 >= floor(2^32 / conjunto) * conjunto) para uniformidad estricta.',
      },
      {
        title: 'Frase de contraseña Diceware de 5 palabras para cifrado de disco',
        input: 'Frase de contraseña Diceware · 5 palabras',
        output: 'Cinco palabras aleatorias fáciles de escribir con fuerte entropía, listas para memorizar.',
        explanation: 'Las frases de varias palabras son mucho más fáciles de escribir a mano que caracteres aleatorios.',
      },
    ],
    benefits: [
      'Evita estrictamente el inseguro Math.random(): usa window.crypto.getRandomValues con semilla de hardware',
      'Elimina el sesgo de módulo mediante muestreo de rechazo verdadero y mezcla Fisher-Yates sin sesgo',
      'Garantiza al menos un carácter de cada clase de caracteres seleccionada sin posiciones fijas',
      'Nada se registra, almacena ni transmite por la red',
    ],
    useCases: [
      'Proteger cuentas en la nube, claves SSH, credenciales de bases de datos y bóvedas maestras de gestores de contraseñas',
      'Generar frases de contraseña Diceware fáciles de escribir para cifrado de disco o claves de Wi-Fi para invitados',
      'Aprovisionar credenciales temporales de incorporación por lotes (hasta 10 por clic)',
      'Comparar el impacto de entropía en bits de 12 frente a 18 frente a 24 caracteres',
    ],
    faqs: [
      {
        question: '¿Por qué importa el muestreo de rechazo con crypto.getRandomValues?',
        answer:
          'Simplemente calcular randomUint32 % tamanoDelConjunto favorece ligeramente los caracteres de índice bajo cuando 2^32 no es divisible uniformemente por tamanoDelConjunto (sesgo de módulo). El muestreo de rechazo descarta las extracciones fuera de rango para que cada carácter del conjunto tenga exactamente la misma probabilidad matemática.',
      },
      {
        question: '¿Debo usar una contraseña aleatoria o una frase de contraseña?',
        answer:
          'Ambas son excelentes cuando son lo suficientemente largas: 16+ caracteres mixtos funcionan en todas partes en gestores de contraseñas, mientras que una frase de 5 a 6 palabras es mucho más fácil de escribir manualmente en televisores, teléfonos o solicitudes de descifrado de disco.',
      },
      {
        question: '¿Las contraseñas generadas se almacenan en algún lugar?',
        answer:
          'Nunca. Las contraseñas viven únicamente en la memoria efímera de React en su pestaña y desaparecen al actualizar.',
      },
      {
        question: '¿El Generador de Contraseñas es gratis?',
        answer:
          'Sí, es completamente gratis sin registro. Puede generar tantas contraseñas y frases de contraseña como necesite, directamente en su navegador.',
      },
      {
        question: '¿Cómo se generan las contraseñas aquí?',
        answer:
          'Se crean localmente en su navegador usando window.crypto.getRandomValues, el generador de números aleatorios criptográficamente seguro respaldado por hardware de su navegador, con muestreo de rechazo para eliminar el sesgo de módulo.',
      },
      {
        question: '¿Mis contraseñas generadas se envían a un servidor?',
        answer:
          'No. La generación ocurre por completo en su dispositivo, y nada se almacena, registra ni transmite por la red.',
      },
      {
        question: '¿Qué tan larga debe ser mi contraseña?',
        answer:
          'Para cuentas importantes, use al menos 16 caracteres con clases de caracteres mixtas, lo que da aproximadamente 100+ bits de entropía. Las contraseñas más cortas solo son adecuadas para cuentas de bajo valor, y la longitud importa más que la complejidad.',
      },
      {
        question: '¿Qué es la entropía de contraseña y cuántos bits necesito?',
        answer:
          'La entropía mide cuánto trabajo de adivinación representa una contraseña. Alrededor de 70–80 bits es fuerte para la mayoría de las cuentas, mientras que 100+ bits se recomienda para contraseñas maestras, claves de cifrado y cuentas de alto valor.',
      },
      {
        question: '¿Qué es una frase de contraseña Diceware?',
        answer:
          'Una frase de contraseña Diceware son varias palabras aleatorias elegidas de una lista fija de palabras, como "correct horse battery staple". Cinco o seis palabras aleatorias dan una entropía fuerte mientras siguen siendo mucho más fáciles de escribir y recordar que caracteres aleatorios.',
      },
      {
        question: '¿Debo excluir caracteres ambiguos como 0, O, 1, l e I?',
        answer:
          'Sí, cuando escribirá la contraseña a mano o la leerá en voz alta. Excluir los parecidos evita inicios de sesión mal escritos, y con una contraseña lo suficientemente larga la pequeña pérdida de entropía es insignificante.',
      },
      {
        question: '¿Puedo generar varias contraseñas a la vez?',
        answer:
          'Sí. Puede generar un lote de hasta 10 contraseñas con un clic, lo que es útil al aprovisionar cuentas o incorporar nuevos miembros del equipo.',
      },
      {
        question: '¿El generador garantiza al menos un carácter de cada clase seleccionada?',
        answer:
          'Sí. Cada contraseña generada incluye al menos un carácter de cada clase de caracteres que habilitó, sin colocar esos caracteres en posiciones fijas y predecibles.',
      },
      {
        question: '¿Puedo usar estas contraseñas para la contraseña maestra de mi gestor de contraseñas?',
        answer:
          'Una frase de contraseña larga funciona bien como contraseña maestra porque debe escribirla de memoria. Genere una frase de contraseña Diceware de 6 palabras, memorícela y almacene sus otras contraseñas en el gestor.',
      },
      {
        question: '¿Por qué no usar Math.random() para contraseñas?',
        answer:
          'Math.random() no es criptográficamente seguro: su salida puede predecirse si un atacante conoce su estado interno. Esta herramienta usa solo window.crypto.getRandomValues, diseñado para aleatoriedad sensible a la seguridad.',
      },
      {
        question: '¿Una contraseña generada funcionará en todos los sitios web?',
        answer:
          'Casi siempre. Si un sitio rechaza símbolos o limita la longitud, reduzca la longitud o desactive la clase de símbolos y regenere hasta que el sitio la acepte.',
      },
      {
        question: '¿Puedo reutilizar una contraseña generada en varios sitios?',
        answer:
          'No debería. Reutilizar una contraseña significa que una filtración expone todas las cuentas que la comparten, así que genere una contraseña única para cada sitio y guárdelas en un gestor de contraseñas.',
      },
      {
        question: '¿Qué pasa con mis contraseñas si actualizo la página?',
        answer:
          'Desaparecen. Las contraseñas generadas existen solo en la memoria temporal de la pestaña, así que cópielas o guárdelas en un gestor de contraseñas antes de actualizar o cerrar la página.',
      },
      {
        question: '¿El Generador de Contraseñas funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, la generación se ejecuta por completo en su navegador sin solicitudes de red, por lo que funciona sin conexión.',
      },
      {
        question: '¿Cómo elijo entre una contraseña y una frase de contraseña para Wi-Fi?',
        answer:
          'Use una frase de contraseña para claves Wi-Fi que escribe en muchos dispositivos, ya que las palabras son más fáciles de ingresar correctamente, y una contraseña de caracteres aleatorios cuando un gestor de contraseñas la completará por usted.',
      },
      {
        question: '¿Una contraseña generada está garantizada como inhackeable?',
        answer:
          'Ninguna contraseña puede garantizarse como inhackeable: un sitio aún puede ser vulnerado o engañado por phishing. Sin embargo, una contraseña larga, única y generada aleatoriamente almacenada en un gestor de contraseñas es una de las defensas prácticas más fuertes que puede usar.',
      },
    ],
  },
  'file-hash-verifier': {
    slug: 'verificador-de-hash-de-archivos',
    name: 'Verificador de Hash y Suma de Verificación de Archivos',
    shortDescription:
      'Calcule sumas de verificación locales SHA-256, SHA-512, SHA-384 y SHA-1 de archivos binarios con Web Crypto SubtleCrypto y verifique descargas contra hashes publicados.',
    keywords: [
      'verificador de hash de archivo',
      'verificador de suma de verificacion sha256 de archivo',
      'verificar hash de archivo descargado en linea',
      'generador de hash de archivo sha512',
      'calculadora de suma de verificacion sha256',
      'revisar integridad de archivo en linea',
      'comparar suma de verificacion de archivo',
      'verificador de hash sha384 sha1',
      'verificar suma de verificacion iso en navegador',
    ],
    seo: {
      title: 'Verificador de Hash de Archivos SHA-256 | UtilityFlow',
      description:
        'Calcule resúmenes SHA-256, SHA-512, SHA-384 y SHA-1 de cualquier archivo local en su navegador y compárelos con sumas publicadas, sin subidas, gratis.',
      primaryKeyword: 'verificador de hash de archivo',
      secondaryKeywords: [
        'calculadora de suma de verificacion sha256 de archivo',
        'verificar sha256sum de archivo en linea',
        'resumen de archivo subtlecrypto del navegador',
        'verificador de suma de verificacion sha512',
      ],
      longTailKeywords: [
        'revisar hash sha-256 de instalador descargado sin terminal',
        'comparar suma de verificacion binaria de archivo con cadena sha256sum esperada',
        'calcular sha256 y sha512 localmente sin subir el archivo',
        'verificar suma de verificacion sha256 de iso de linux en el navegador',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Verifique la integridad y autenticidad de instaladores de software, archivos, conjuntos de datos y documentos localmente, calculando resúmenes `SHA-256`, `SHA-512`, `SHA-384` y `SHA-1` mediante Web Crypto `subtle.digest` acelerado por hardware con comparación instantánea de la suma de verificación esperada.',
    instructions: [
      {
        title: 'Seleccione un archivo de su dispositivo',
        description:
          'Elija un archivo, instalador, PDF o recurso binario. El archivo se lee estrictamente en la memoria local del navegador (se recomienda menos de 500 MB) y nunca se sube.',
      },
      {
        title: 'Espere a que se calculen los resúmenes',
        description:
          'El navegador calcula SHA-256, SHA-512, SHA-384 y SHA-1 en paralelo usando Web Crypto acelerado por hardware. Los archivos más grandes tardan unos segundos.',
      },
      {
        title: 'Inspeccione los resúmenes criptográficos calculados',
        description:
          'Revise los hashes hexadecimales SHA-256, SHA-512, SHA-384 y SHA-1 heredado junto con los metadatos del archivo y descargue un archivo de texto .sha256 estándar si lo necesita.',
      },
      {
        title: 'Verifique contra una suma de verificación publicada',
        description:
          'Pegue la cadena esperada SHA-256/512/384/1, o una línea completa "<hash>  nombredearchivo" de un archivo .sha256sum, para confirmar una coincidencia exacta o detectar corrupción o manipulación.',
      },
      {
        title: 'Copie o exporte el hash',
        description:
          'Copie cualquier resumen con un clic, o descargue el archivo de texto .sha256 estándar para enviarlo junto con un lanzamiento o guardarlo como registro de verificación.',
      },
      {
        title: 'Actúe ante una discrepancia o un archivo grande',
        description:
          'Si los hashes no coinciden, elimine el archivo y vuelva a descargarlo desde la fuente oficial. Para archivos de más de ~500 MB, use shasum -a 256 o certutil, ya que el navegador carga todo el archivo en memoria.',
      },
    ],
    examples: [
      {
        title: 'Verificar un binario de lanzamiento descargado contra un .sha256sum del proveedor',
        input: 'Archivo: app-v2.tar.gz · Esperado: "e3b0c442...  app-v2.tar.gz"',
        output: '¡Suma de verificación verificada! Coincide limpiamente con el resumen SHA-256 calculado.',
        explanation: 'Extrae automáticamente el token hash inicial, ignora mayúsculas y minúsculas, y compara con los 4 algoritmos calculados.',
      },
      {
        title: 'Detectar una descarga truncada antes de extraerla',
        input: 'Archivo: instalador.zip · Esperado: hash SHA-256 del sitio oficial',
        output: '¡No coincide! El hash calculado difiere del esperado: elimine el archivo y descárguelo de nuevo.',
        explanation: 'Una discrepancia significa que la descarga se corrompió, se truncó o posiblemente se manipuló.',
      },
    ],
    benefits: [
      'Usa Web Crypto SubtleCrypto nativo del navegador acelerado por C++/hardware',
      'Admite pegar líneas completas "<hash>  nombredearchivo" de manifiestos .sha256sum de lanzamientos',
      'Exporta archivos estándar de verificación nombredearchivo.sha256 con un clic',
      'Cero subidas de archivos mantienen privadas las compilaciones confidenciales y los contratos',
    ],
    useCases: [
      'Verificar ISO de Linux, binarios de CLI o tarballs de código abierto sin abrir una terminal',
      'Confirmar la entrega exacta byte por byte de archivos legales o financieros',
      'Generar manifiestos .sha256 de lanzamiento para pequeños entregables de clientes',
      'Detectar descargas truncadas o corruptas antes de la extracción',
    ],
    faqs: [
      {
        question: '¿Hay un límite máximo de tamaño de archivo?',
        answer:
          'Como File.arrayBuffer() del navegador carga todo el archivo en la RAM del cliente a la vez, los archivos de hasta ~300–500 MB funcionan sin problemas, mientras que los ISO de varios gigabytes pueden exceder las cuotas de memoria del navegador; para archivos de varios GB, se recomiendan herramientas CLI nativas (shasum -a 256 o certutil).',
      },
      {
        question: '¿Por qué SHA-1 se etiqueta solo como compatibilidad heredada?',
        answer:
          'SHA-1 tiene debilidades prácticas conocidas de colisión y no debe confiarse para garantías de seguridad adversariales; prefiera SHA-256 o SHA-512 siempre que sea posible.',
      },
      {
        question: '¿Busca hashear cadenas de texto sin procesar en lugar de archivos binarios?',
        answer:
          'Consulte nuestra herramienta Generador de Hash en Herramientas de Desarrollador para hashing instantáneo de texto UTF-8.',
      },
      {
        question: '¿El Verificador de Hash de Archivos es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, y puede verificar tantos archivos como quiera.',
      },
      {
        question: '¿Mis archivos se suben a algún lugar cuando los verifico?',
        answer:
          'No. El hashing ocurre por completo en su navegador usando la API Web Crypto, por lo que sus archivos nunca salen de su dispositivo, que es exactamente por qué es seguro para compilaciones confidenciales y contratos.',
      },
      {
        question: '¿Qué es un hash de archivo y por qué debo revisarlo?',
        answer:
          'Un hash es una huella digital de longitud fija calculada a partir de los bytes exactos de un archivo. Si cambia aunque sea un byte, el hash cambia por completo, por lo que comparar hashes prueba que una descarga llegó intacta y sin modificaciones.',
      },
      {
        question: '¿Qué algoritmo hash debo usar: SHA-256, SHA-512 o SHA-1?',
        answer:
          'Use SHA-256 para verificación general: es el estándar que proporcionan los editores. SHA-512 es igualmente fuerte y más rápido en sistemas de 64 bits, mientras que SHA-1 es solo heredado y no debe confiarse para seguridad.',
      },
      {
        question: '¿Dónde encuentro la suma de verificación oficial para comparar?',
        answer:
          'Los editores generalmente la listan en la página de descarga o en un archivo .sha256 / .sha256sum junto a la descarga. Siempre cópiela del propio sitio del proveedor, nunca de un espejo o publicación de foro.',
      },
      {
        question: '¿Qué debo hacer si los hashes no coinciden?',
        answer:
          'No ejecute ni extraiga el archivo. Elimínelo y vuelva a descargarlo desde la fuente oficial; una discrepancia significa que la descarga se corrompió, se truncó o posiblemente se manipuló.',
      },
      {
        question: '¿Puedo pegar una línea completa .sha256sum en lugar de solo el hash?',
        answer:
          'Sí. El verificador acepta una línea completa "<hash>  nombredearchivo" de un manifiesto de lanzamiento: extrae automáticamente el token hash inicial, ignora mayúsculas y minúsculas, y lo compara con los cuatro algoritmos calculados.',
      },
      {
        question: '¿El hash depende del nombre del archivo?',
        answer:
          'No. El resumen se calcula solo a partir del contenido del archivo, por lo que cambiar el nombre de un archivo nunca cambia su hash. Dos archivos con los mismos bytes siempre producen el mismo hash.',
      },
      {
        question: '¿Puedo verificar un ISO de Linux o un instalador grande con esta herramienta?',
        answer:
          'Sí, hasta aproximadamente 300–500 MB. Para ISO de varios gigabytes, use una herramienta nativa como shasum -a 256 en macOS/Linux o certutil -hashfile en Windows, ya que los navegadores cargan todo el archivo en memoria.',
      },
      {
        question: '¿Cuál es la diferencia entre SHA-256 y SHA-512?',
        answer:
          'Ambos son miembros seguros de la familia SHA-2; SHA-256 produce un resumen hexadecimal de 64 caracteres y SHA-512 uno de 128 caracteres. SHA-512 es ligeramente más fuerte y rápido en hardware de 64 bits, pero SHA-256 es la suma de verificación más ampliamente publicada.',
      },
      {
        question: '¿Esta herramienta puede detectar un virus o malware en un archivo?',
        answer:
          'No. Un hash coincidente solo prueba que el archivo es idéntico al que lanzó el editor. Si el propio archivo del editor fuera malicioso, el hash seguiría coincidiendo, así que solo verifique descargas de fuentes en las que confía.',
      },
      {
        question: '¿Cómo descargo un archivo .sha256 para mi propio lanzamiento?',
        answer:
          'Hashee su archivo de lanzamiento aquí, luego descargue el archivo de texto nombredearchivo.sha256 estándar que genera la herramienta y publíquelo junto con su descarga para que los usuarios puedan verificarla.',
      },
      {
        question: '¿Por qué el hashing tarda unos segundos para archivos grandes?',
        answer:
          'El navegador debe leer y procesar cada byte del archivo. Los archivos más grandes simplemente tardan más, y el tiempo crece con el tamaño del archivo en lugar de con el algoritmo que elija.',
      },
      {
        question: '¿El Verificador de Hash de Archivos funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, todo el hashing se ejecuta localmente en su navegador sin solicitudes de red, por lo que puede verificar archivos sin conexión a internet.',
      },
      {
        question: '¿Puedo verificar varios archivos a la vez?',
        answer:
          'La herramienta verifica un archivo a la vez. Hashee cada archivo por separado y compárelo con su propia suma de verificación publicada.',
      },
      {
        question: '¿Un hash coincidente prueba que el archivo es auténtico?',
        answer:
          'Prueba que el archivo es byte por byte idéntico al que el editor hasheó. No prueba que el editor sea quien dice ser, así que obtenga el hash esperado del canal oficial del editor.',
      },
      {
        question: '¿La herramienta almacena mis archivos o sus hashes?',
        answer:
          'No. Nada se sube ni almacena, y los hashes calculados existen solo en su pestaña actual del navegador hasta que la cierra o actualiza.',
      },
    ],
  },
  'favicon-generator': {
    slug: 'generador-de-favicon',
    name: 'Generador de Favicon e Iconos de App (.ico y PNG)',
    shortDescription:
      'Genere iconos PNG nítidos de varios tamaños (16×16 a 512×512) y un favicon.ico binario real de varios marcos a partir de una insignia de monograma personalizada o un logotipo subido.',
    keywords: [
      'generador de favicon',
      'crear favicon.ico en linea',
      'generador de icono apple touch',
      'texto a favicon monograma',
      'creador de favicon ico gratis',
      'generador de iconos pwa 192 512',
      'creador de favicon para sitio web',
      'convertidor png a favicon',
      'generador de iconos de app en linea',
    ],
    seo: {
      title: 'Generador de Favicon .ico e Iconos PNG | UtilityFlow',
      description:
        'Genere un favicon.ico de varios marcos más iconos PNG de 16–512px, Apple Touch y PWA desde su logotipo o un monograma, gratis en su navegador, sin registro.',
      primaryKeyword: 'generador de favicon',
      secondaryKeywords: [
        'convertidor png a ico de varios tamanos',
        'constructor de favicon monograma',
        'generador de iconos pwa y apple touch',
        'creador de favicon ico en linea gratis',
      ],
      longTailKeywords: [
        'crear favicon.ico binario real con marcos 16x16 32x32 48x48 gratis',
        'generar favicon de sitio web y etiquetas link html desde iniciales de texto',
        'recortar logotipo cuadrado a icono apple touch circular 180x180',
        'generar iconos pwa 192x192 y 512x512 para manifiesto web',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Diseñe un icono de monograma limpio en segundos, o suba su logotipo de marca existente, para renderizar recursos PNG nítidos de `16×16`, `32×32`, `48×48`, Apple Touch de `180×180` y PWA de `192×192` / `512×512`, además de un **`favicon.ico`** binario de varias imágenes que cumple los estándares y marcado HTML `<link>` listo para pegar.',
    instructions: [
      {
        title: 'Elija Insignia de monograma o Subir logotipo',
        description:
          'Ingrese 1–3 iniciales de marca con colores personalizados de fondo/texto, o cambie a Subir imagen de logotipo para recortar al centro una marca PNG/SVG/JPG existente.',
      },
      {
        title: 'Estilice su icono',
        description:
          'Elija sus letras de monograma y colores, o ajuste el recorte del logotipo subido para que la marca quede centrada con relleno uniforme en todos los lados.',
      },
      {
        title: 'Seleccione la forma de esquina',
        description:
          'Elija Cuadrado redondeado (estilo iOS/macOS), Círculo o Cuadrado nítido.',
      },
      {
        title: 'Revise cada tamaño',
        description:
          'Revise cuidadosamente las vistas previas de 16×16 y 32×32: una marca que se ve bien grande puede volverse borrosa a tamaño de pestaña, así que simplifique letras o detalles si es necesario.',
      },
      {
        title: 'Descargue favicon.ico, PNG y el fragmento HTML',
        description:
          'Descargue el paquete favicon.ico de varios marcos junto con tamaños PNG individuales y copie las etiquetas <head> link en su proyecto.',
      },
      {
        title: 'Instale los iconos y limpie la caché',
        description:
          'Coloque los archivos en su carpeta /public/, pegue las etiquetas link en index.html y luego actualice forzado o limpie la caché de su navegador: los navegadores almacenan favicons en caché agresivamente, por lo que un icono desactualizado generalmente significa uno en caché.',
      },
    ],
    examples: [
      {
        title: 'Crear iconos para una nueva app React o Cloudflare Pages',
        input: 'Monograma "UH" · Fondo #4F46E5 · Forma: Cuadrado redondeado',
        output: 'favicon.ico binario (marcos PNG 16+32+48 px) + 6 tamaños PNG + fragmento HTML <link>',
        explanation: 'Construye encabezados binarios ICONDIR e ICONDIRENTRY válidos directamente dentro de búferes Uint8Array.',
      },
      {
        title: 'Convertir un logotipo cuadrado en un conjunto completo de iconos PWA',
        input: 'Logotipo PNG 512×512 con fondo transparente · Forma: Círculo',
        output: 'Iconos Apple Touch 180×180 y PWA 192×192/512×512 con etiquetas <link> listas.',
        explanation: 'El recorte centrado mantiene la marca centrada con relleno uniforme en todos los tamaños.',
      },
    ],
    benefits: [
      'Crea un archivo .ico binario genuino de varios marcos (16×16, 32×32 y 48×48), no un PNG renombrado',
      'Cubre pestañas de escritorio, Apple Touch (180×180) e iconos de Manifiesto web (192/512 px)',
      'El modo Monograma instantáneo no requiere software de diseño para proyectos paralelos y MVP',
      'Genera código estándar HTML5 <link rel="icon"> listo para pegar en index.html',
    ],
    useCases: [
      'Enviar favicons e iconos Apple Touch faltantes antes de lanzamientos SaaS o de micrositios',
      'Crear iconos de pestaña de alto contraste para paneles de pruebas frente a producción',
      'Convertir marcas SVG/PNG cuadradas de marca en conjuntos completos de iconos PWA',
      'Generar vistas previas nítidas de 16×16 y 32×32 para verificar la legibilidad a tamaño pequeño',
    ],
    faqs: [
      {
        question: '¿El favicon.ico descargado es un archivo binario ICO real?',
        answer:
          'Sí. Escribe encabezados ICONDIR estándar de Windows ICO y entradas de directorio que contienen tres marcos nítidos codificados en PNG (16×16, 32×32 y 48×48) compatibles con todos los navegadores y sistemas operativos modernos.',
      },
      {
        question: '¿Qué tamaños de icono necesitan realmente los sitios web modernos?',
        answer:
          'Un favicon.ico más un PNG de 32×32, un icono Apple Touch de 180×180 y PNG de Manifiesto web de 192×192 / 512×512 cubren prácticamente todos los navegadores de escritorio, iOS móvil y Android.',
      },
      {
        question: '¿Dónde debo poner estos archivos en un proyecto React + Vite?',
        answer:
          'Coloque favicon.ico y los iconos PNG dentro de la carpeta /public/ de su proyecto y pegue las etiquetas HTML <link> dentro del <head> de index.html.',
      },
      {
        question: '¿El Generador de Favicon es gratis?',
        answer:
          'Sí, es completamente gratis sin registro, y todos los iconos se generan localmente en su navegador.',
      },
      {
        question: '¿Mis logotipos subidos se envían a un servidor?',
        answer:
          'No. Su logotipo se procesa por completo en su navegador y nunca se sube, por lo que sus recursos de marca se mantienen privados.',
      },
      {
        question: '¿Cuál es la diferencia entre un favicon.ico y un favicon PNG?',
        answer:
          'Un favicon.ico es un contenedor que guarda varios tamaños de icono en un archivo binario, que los navegadores han admitido durante décadas. Un favicon PNG es una imagen de un solo tamaño; los navegadores modernos aceptan ambos, pero .ico sigue siendo el valor predeterminado más seguro.',
      },
      {
        question: '¿Qué es un icono Apple Touch?',
        answer:
          'Es el icono PNG de 180×180 que iOS usa cuando alguien agrega su sitio a su pantalla de inicio. Sin uno, iOS toma una captura de pantalla de su página, que generalmente se ve mal.',
      },
      {
        question: '¿Para qué sirven los iconos PWA de 192×192 y 512×512?',
        answer:
          'Son los iconos listados en el manifiesto de su app web para Progressive Web Apps instalables. Android y Chrome los usan para el icono de pantalla de inicio, la pantalla de bienvenida y el lanzador de apps.',
      },
      {
        question: '¿Puedo hacer un favicon a partir de texto sin un logotipo?',
        answer:
          'Sí. El modo Monograma convierte 1–3 letras, como las iniciales de su marca, en una insignia limpia con su elección de color de fondo, color de texto y forma de esquina, sin necesidad de software de diseño.',
      },
      {
        question: '¿Qué archivo de logotipo debo subir para obtener el mejor resultado?',
        answer:
          'Suba un PNG o SVG cuadrado con fondo transparente de 512×512 o más. Las imágenes de origen cuadradas se recortan limpiamente; los logotipos anchos o altos se recortan al centro, lo que puede cortar bordes.',
      },
      {
        question: '¿Por qué mi nuevo favicon no aparece después de desplegar?',
        answer:
          'Los navegadores almacenan favicons en caché muy agresivamente. Actualice forzado con Ctrl+Shift+R (o Cmd+Shift+R en Mac), limpie la caché del sitio o pruebe en una ventana privada para ver el nuevo icono.',
      },
      {
        question: '¿El favicon debe coincidir exactamente con mi logotipo?',
        answer:
          'A tamaños grandes sí, pero a 16×16 los detalles finos desaparecen. Simplifique la marca para los tamaños más pequeños: las iniciales en negrita o una sola forma en negrita se leen mucho mejor que un logotipo detallado.',
      },
      {
        question: '¿Qué forma de esquina debo elegir?',
        answer:
          'El Cuadrado redondeado coincide con el estilo de iconos de apps de iOS y macOS, el Círculo se adapta a avatares y marcas estilo social, y el Cuadrado nítido es mejor para marcas geométricas o técnicas.',
      },
      {
        question: '¿Necesito agregar etiquetas link HTML para los iconos?',
        answer:
          'Sí para resultados confiables. Los navegadores buscan /favicon.ico por defecto, pero los iconos Apple Touch y PWA solo cargan cuando los declara con etiquetas <link> en el <head> de su página, que esta herramienta genera para usted.',
      },
      {
        question: '¿Puedo usar los iconos generados también para una app móvil?',
        answer:
          'Los PNG de 192×192 y 512×512 funcionan para instalaciones PWA, pero las apps nativas de iOS y Android necesitan sus propios conjuntos de iconos con tamaños y formatos específicos, que esta herramienta enfocada en web no genera.',
      },
      {
        question: '¿El Generador de Favicon funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, la generación de iconos se ejecuta por completo en su navegador sin solicitudes de red.',
      },
      {
        question: '¿Qué color de fondo funciona mejor para un favicon de monograma?',
        answer:
          'Un color de marca sólido y de alto contraste con letras blancas o casi blancas funciona mejor, ya que se mantiene legible a 16×16. Evite texto claro sobre fondos claros y degradados recargados.',
      },
      {
        question: '¿Puedo regenerar iconos después de cambiar los colores de mi marca?',
        answer:
          'Sí. Simplemente actualice los colores o suba el nuevo logotipo y descargue un conjunto nuevo: la herramienta no guarda nada de su sesión anterior, por lo que cada ejecución empieza limpia.',
      },
      {
        question: '¿El favicon funcionará en pestañas de navegador en modo oscuro?',
        answer:
          'Un favicon con un color de fondo sólido se muestra igual en pestañas claras y oscuras. Si su marca es oscura sobre transparente, agregue un fondo claro o un contorno para que se mantenga visible en el cromo oscuro del navegador.',
      },
      {
        question: '¿La herramienta almacena mis logotipos o iconos generados?',
        answer:
          'No. Todo se ejecuta localmente en la pestaña de su navegador, nada se sube ni almacena, y sus archivos desaparecen cuando cierra o actualiza la página.',
      },
    ],
  },
};
