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
      primaryKeyword: 'escáner de códigos qr',
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
  },
};
