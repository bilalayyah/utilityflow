// Detail content for ES tools — split out of
// src/locales/es/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'merge-pdf': {
    instructions: [
      {
        title: 'Agrega varios archivos PDF',
        description:
          'Selecciona dos o más archivos .pdf sin cifrar de tu dispositivo; cada archivo se valida con un encabezado %PDF antes de entrar en la cola.',
      },
      {
        title: 'Revisa el conteo de páginas y los tamaños',
        description:
          'Revisa el conteo de páginas y el tamaño en bytes que se muestra para cada documento en cola para confirmar que agregaste los archivos correctos.',
      },
      {
        title: 'Ordena la secuencia de combinación',
        description:
          'Usa las flechas de subir y bajar para ordenar capítulos, apéndices o facturas antes de combinar.',
      },
      {
        title: 'Nombra tu archivo de salida',
        description:
          'Escribe un nombre de archivo personalizado si quieres, para que el documento combinado sea fácil de encontrar después.',
      },
      {
        title: 'Combina y descarga',
        description:
          'Haz clic en Combinar PDFs y descargar para unir los archivos localmente y guardar el resultado.',
      },
      {
        title: 'Verifica el documento combinado',
        description:
          'Abre el PDF descargado y revisa el orden de las páginas y el conteo total de páginas; vuelve a ejecutarlo con un orden corregido si algo está fuera de lugar.',
      },
    ],
    examples: [
      {
        title: 'Combinar una portada de factura y un paquete de recibos',
        input: 'portada.pdf (1 página) + recibos.pdf (4 páginas)',
        output: 'documento-combinado.pdf (5 páginas)',
        explanation:
          'Copia todas las páginas vectoriales, fuentes e imágenes incrustadas en un solo contenedor PDF.',
      },
      {
        title: 'Armar un paquete de propuesta para un cliente',
        input: 'propuesta.pdf (6 páginas) + precios.pdf (2 páginas) + terminos.pdf (3 páginas)',
        output: 'propuesta-completa.pdf (11 páginas)',
        explanation:
          'Los tres documentos se unen en el orden elegido, con el texto y los enlaces intactos.',
      },
    ],
    benefits: [
      'Sin subidas de archivos: los contratos, declaraciones de impuestos y acuerdos de confidencialidad se quedan estrictamente en tu equipo',
      'Muestra el conteo exacto de páginas y el tamaño en bytes por documento en cola',
      'Valida de inmediato los PDF mal formados o cifrados con contraseña al subirlos',
      'Sin marcas de agua, límites de páginas ni límites diarios',
    ],
    useCases: [
      'Agrupar propuestas de clientes, formularios firmados y apéndices de precios',
      'Combinar documentos fiscales escaneados de varias partes antes de presentarlos',
      'Unir diapositivas de clases o guías de estudio en un solo paquete imprimible',
      'Armar facturas mensuales de gastos en un solo PDF de contabilidad',
    ],
    faqs: [
      {
        question: '¿Esta herramienta puede combinar archivos PDF protegidos con contraseña?',
        answer:
          'La biblioteca pdf-lib del navegador requiere PDF sin cifrar, a menos que se desbloqueen primero. Si se sube un archivo cifrado, el validador te avisa claramente en lugar de fallar en silencio.',
      },
      {
        question: '¿Se conservan las fuentes vectoriales y los hipervínculos clicables?',
        answer:
          'Sí. Los flujos de página PDF estándar, las fuentes incrustadas y las rutas vectoriales se copian directamente con PDFDocument.copyPages() sin convertir las páginas en imágenes borrosas.',
      },
      {
        question: '¿Hay un límite de subida al servidor?',
        answer:
          'Ningún archivo se sube jamás: el procesamiento se ejecuta por completo dentro de la memoria de la pestaña de tu navegador.',
      },
      {
        question: '¿La herramienta Combinar PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin marcas de agua, límites de páginas ni límites diarios, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Cuántos archivos PDF puedo combinar a la vez?',
        answer:
          'Puedes poner en cola tantos como la memoria de tu navegador maneje con comodidad. Se muestra el conteo de páginas y el tamaño de cada archivo para que puedas juzgar antes de combinar.',
      },
      {
        question: '¿Puedo reordenar los PDF después de agregarlos?',
        answer:
          'Sí, usa las flechas de subir y bajar junto a cada archivo para fijar el orden exacto de combinación antes de unirlos.',
      },
      {
        question: '¿La combinación cambiará la calidad de mis PDF?',
        answer:
          'No, las páginas se copian como datos vectoriales, así que el texto, las fuentes y las imágenes mantienen su calidad original.',
      },
      {
        question: '¿El PDF combinado conserva marcadores o esquemas?',
        answer:
          'El contenido de las páginas se conserva por completo, pero los esquemas y marcadores del documento pueden no transferirse al archivo combinado.',
      },
      {
        question: '¿Puedo combinar PDF escaneados?',
        answer:
          'Sí, las páginas escaneadas se copian como imágenes en el archivo combinado igual que cualquier otra página.',
      },
      {
        question: '¿Qué tipos de archivo puedo combinar con esta herramienta?',
        answer:
          'Solo archivos PDF (.pdf). Las imágenes deben convertirse primero con la herramienta Imágenes a PDF antes de poder combinarse.',
      },
      {
        question: '¿Puedo elegir el nombre del archivo de salida del PDF combinado?',
        answer:
          'Sí, escribe un nombre de archivo personalizado antes de hacer clic en Combinar; de lo contrario, se usa un nombre predeterminado.',
      },
      {
        question: '¿La herramienta Combinar PDF funciona en el móvil?',
        answer:
          'Sí, funciona en navegadores móviles modernos, aunque los archivos muy grandes se combinan más rápido en una computadora de escritorio.',
      },
      {
        question: '¿Mis archivos son privados cuando combino PDF aquí?',
        answer:
          'Sí, todo ocurre localmente en la pestaña de tu navegador y ningún archivo se sube a ningún servidor.',
      },
      {
        question: '¿Qué pasa si uno de mis PDF está dañado?',
        answer:
          'El validador revisa el encabezado %PDF de cada archivo y te avisa sobre archivos mal formados o cifrados antes de que empiece la combinación.',
      },
      {
        question: '¿Puedo combinar PDF de distintos tamaños de página?',
        answer:
          'Sí, cada página conserva su tamaño y orientación originales en el documento combinado.',
      },
      {
        question: '¿El PDF combinado seguirá siendo buscable?',
        answer:
          'Sí, los PDF basados en texto mantienen el texto seleccionable y buscable porque las páginas se copian, no se convierten en imágenes.',
      },
      {
        question: '¿Puedo combinar un PDF consigo mismo?',
        answer:
          'Sí, puedes agregar el mismo archivo más de una vez si necesitas que una página o documento se repita en el resultado.',
      },
      {
        question: '¿Hay un tamaño máximo de archivo para combinar PDF?',
        answer:
          'No hay un límite fijo; el límite práctico es la memoria del navegador disponible en tu dispositivo.',
      },
      {
        question: '¿Qué debo hacer si la descarga combinada no empieza?',
        answer:
          'Revisa la configuración de descargas y el bloqueador de ventanas emergentes de tu navegador, y luego haz clic en Combinar de nuevo; el archivo se genera localmente cada vez.',
      },
      {
        question: '¿Puedo combinar PDF y luego dividir el resultado?',
        answer:
          'Sí, descarga el PDF combinado y ábrelo en la herramienta Dividir PDF para extraer las páginas que necesites.',
      },
    ],
  },
  'split-pdf': {
    instructions: [
      {
        title: 'Carga tu documento PDF',
        description:
          'Elige cualquier archivo PDF sin cifrar; la herramienta valida el encabezado y muestra el conteo total de páginas.',
      },
      {
        title: 'Elige el modo de división',
        description:
          'Selecciona Extraer rangos de páginas, Solo páginas impares, Solo páginas pares o Dividir todas las páginas individuales.',
      },
      {
        title: 'Escribe las páginas o rangos',
        description:
          'Para el modo de rangos, escribe páginas como "1-3, 5, 9-12"; el analizador marca rangos fuera de límites o invertidos antes de guardar.',
      },
      {
        title: 'Revisa tu selección',
        description:
          'Confirma que el modo y la lista de páginas coincidan con lo que necesitas, sobre todo para extracciones de páginas pares o impares y divisiones completas.',
      },
      {
        title: 'Divide y descarga',
        description:
          'Haz clic en Dividir y descargar PDF para generar tu documento recortado localmente.',
      },
      {
        title: 'Revisa el resultado y repite si hace falta',
        description:
          'Abre el archivo descargado para confirmar que se extrajeron las páginas correctas; para el modo de división completa, permite varias descargas en tu navegador si te lo pide.',
      },
    ],
    examples: [
      {
        title: 'Extraer páginas de firma de un acuerdo de 12 páginas',
        input: 'Páginas a extraer: 1, 10-12',
        output: 'contrato-extraido.pdf (4 páginas)',
        explanation:
          'Exporta las páginas 1, 10, 11 y 12 en secuencia ascendente sin tocar tu archivo original.',
      },
      {
        title: 'Separar solo las páginas impares de un escaneo dúplex',
        input: 'Modo: Solo páginas impares · PDF de 8 páginas',
        output: 'documento-impares.pdf (páginas 1, 3, 5, 7)',
        explanation:
          'Aísla las páginas impares para rearmar un documento escaneado a doble cara.',
      },
    ],
    benefits: [
      'El analizador flexible de rangos detecta rangos fuera de límites o invertidos antes de guardar',
      'Conserva la nitidez vectorial original y la selección de texto',
      'Admite extracción de páginas pares o impares para flujos de escáner dúplex',
      'Protege los documentos financieros y legales privados de los servidores de subida de terceros',
    ],
    useCases: [
      'Extraer solo los capítulos relevantes de un informe grande antes de compartirlo',
      'Separar facturas individuales agrupadas dentro de un PDF maestro de facturación',
      'Extraer páginas de firma o apéndices de contratos de varias páginas',
      'Recuperar escaneos de páginas pares o impares de alimentadores de documentos de una cara',
    ],
    faqs: [
      {
        question: '¿Por qué el modo Dividir todas las páginas individuales tiene un límite de 25 páginas?',
        answer:
          'Los navegadores suelen bloquear o preguntar cuando un sitio activa más de unas 25 descargas simultáneas de archivos. Usa Extraer rangos de páginas para extracciones más grandes de varias partes.',
      },
      {
        question: '¿La división altera mi archivo PDF original?',
        answer:
          'No. El navegador lee una copia local en memoria y genera un nuevo PDF descargado.',
      },
      {
        question: '¿Qué sintaxis puedo escribir en Páginas a extraer?',
        answer:
          'Combina números individuales y rangos con guion separados por comas, como "1-3, 5, 9-12".',
      },
      {
        question: '¿La herramienta Dividir PDF es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua ni límites de páginas más allá del límite de 25 páginas del modo de división completa.',
      },
      {
        question: '¿Puedo extraer solo las páginas impares de un PDF?',
        answer:
          'Sí, elige Solo páginas impares; es útil para flujos de escaneo dúplex.',
      },
      {
        question: '¿Puedo extraer solo las páginas pares de un PDF?',
        answer:
          'Sí, elige Solo páginas pares para extraer solo las páginas con números pares.',
      },
      {
        question: '¿Qué pasa si escribo un número de página que no existe?',
        answer:
          'El analizador de rangos valida tu entrada y te avisa sobre rangos fuera de límites o invertidos antes de guardar nada.',
      },
      {
        question: '¿Puedo extraer páginas PDF en un orden personalizado, como 10-12 y luego 1?',
        answer:
          'Las páginas extraídas se guardan en orden ascendente. Para reordenarlas después, usa la herramienta Reordenar páginas PDF.',
      },
      {
        question: '¿La división de un PDF mantiene el texto buscable?',
        answer:
          'Sí, las páginas se copian como datos vectoriales, así que el texto se mantiene seleccionable y buscable en el archivo extraído.',
      },
      {
        question: '¿Puedo dividir un PDF protegido con contraseña?',
        answer:
          'No, los PDF cifrados deben desbloquearse primero; la herramienta solo acepta archivos sin cifrar.',
      },
      {
        question: '¿Puedo dividir un PDF escaneado?',
        answer:
          'Sí, las páginas escaneadas se extraen exactamente igual que las páginas de texto.',
      },
      {
        question: '¿El PDF extraído mantendrá su calidad original?',
        answer:
          'Sí, no ocurre recompresión ni conversión a imágenes durante la extracción, así que cada página extraída conserva la calidad exacta del PDF original.',
      },
      {
        question: '¿Cómo divido un PDF en archivos de una página?',
        answer:
          'Elige Dividir todas las páginas individuales; cada página se descarga como su propio PDF, hasta 25 páginas por ejecución.',
      },
      {
        question: '¿Puedo descargar solo la primera página de un PDF?',
        answer:
          'Sí, elige Extraer rangos de páginas y escribe "1" en el campo Páginas a extraer.',
      },
      {
        question: '¿La herramienta Dividir PDF sube mi archivo a algún lugar?',
        answer:
          'No, la división se ejecuta por completo en tu navegador; tu archivo nunca sale de tu dispositivo.',
      },
      {
        question: '¿Puedo usar la herramienta Dividir PDF en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles modernos, aunque los archivos muy grandes se dividen con más comodidad en una computadora de escritorio.',
      },
      {
        question: '¿Cuál es la diferencia entre Extraer rangos de páginas y Dividir?',
        answer:
          'Los rangos combinan las páginas seleccionadas en un solo PDF nuevo, mientras que Dividir crea un PDF separado por página.',
      },
      {
        question: '¿Puedo extraer las páginas 1-3 y la página 5 de una vez?',
        answer:
          'Sí, escribe "1-3, 5": los números individuales y los rangos con guion pueden combinarse con comas.',
      },
      {
        question: '¿Los marcadores sobrevivirán cuando divida un PDF?',
        answer:
          'El contenido de las páginas se conserva, pero los esquemas y marcadores del documento generalmente no se transfieren a los archivos extraídos.',
      },
      {
        question: 'Mi descarga no empezó después de dividir: ¿qué debo hacer?',
        answer:
          'Permite varias descargas para este sitio en tu navegador y luego haz clic en Dividir de nuevo; el archivo se genera localmente cada vez.',
      },
    ],
  },
  'images-to-pdf': {
    instructions: [
      {
        title: 'Selecciona una o más imágenes',
        description:
          'Elige imágenes JPG, PNG o WebP; las miniaturas y las dimensiones en píxeles aparecen de inmediato.',
      },
      {
        title: 'Ordena las imágenes',
        description:
          'Usa las flechas de subir y bajar para fijar la secuencia de páginas de tu PDF.',
      },
      {
        title: 'Configura el tamaño de página y los márgenes',
        description:
          'Elige A4 vertical, Carta EE. UU. o Dimensiones exactas de la imagen, y define un margen para los tamaños de página estándar.',
      },
      {
        title: 'Nombra tu archivo de salida',
        description:
          'Escribe un nombre de archivo personalizado para que el PDF terminado sea fácil de identificar.',
      },
      {
        title: 'Genera el PDF',
        description:
          'Haz clic en Convertir imágenes a PDF para crear el documento localmente y descargarlo al instante.',
      },
      {
        title: 'Revisa y ajusta',
        description:
          'Abre el PDF para revisar el diseño y los márgenes; reordena las imágenes o cambia la configuración de página y vuelve a convertir si alguna página se ve mal.',
      },
    ],
    examples: [
      {
        title: 'Compilar recibos de gastos en páginas A4 estándar',
        input: '3 JPG de recibos · A4 vertical · Margen de 24 pt',
        output: 'imagenes-paquete.pdf (3 páginas A4 centradas con proporción conservada)',
        explanation:
          'Escala cada imagen proporcionalmente para que quepa dentro de los márgenes imprimibles A4 sin distorsión.',
      },
      {
        title: 'Convertir una sola captura en un PDF de una página',
        input: '1 captura PNG · Dimensiones exactas de la imagen',
        output: 'captura.pdf (1 página del tamaño exacto de la imagen)',
        explanation:
          'El modo de dimensiones exactas crea una página por imagen a su tamaño nativo, sin márgenes.',
      },
    ],
    benefits: [
      'Incrusta flujos nativos JPG y PNG directamente y convierte WebP limpiamente con Canvas',
      'Conserva la proporción completa de la imagen sin estirar ni recortar',
      'Admite hojas imprimibles A4 / Carta EE. UU., así como páginas exactas de imagen sin margen',
      'Mantiene fotos de identificación, recibos y documentos privados estrictamente sin conexión en la RAM del navegador',
    ],
    useCases: [
      'Convertir fotos de recibos del teléfono en un PDF limpio de gastos mensuales',
      'Compilar maquetas de diseño o capturas de interfaz en una presentación de revisión A4',
      'Convertir páginas de documentos escaneados en un solo PDF para subir',
      'Empaquetar láminas de arte de portafolio sin compresión en la nube',
    ],
    faqs: [
      {
        question: '¿Cómo maneja la herramienta las imágenes WebP?',
        answer:
          'Como la especificación PDF incrusta de forma nativa JPEG y PNG en lugar de WebP, la herramienta decodifica las imágenes WebP sin problema con HTML5 Canvas en marcos PNG sin pérdida antes de incrustarlas.',
      },
      {
        question: '¿Las fotos verticales y horizontales se estirarán para caber en A4?',
        answer:
          'No. Las imágenes se escalan proporcionalmente usando Math.min(maxWidth/imgWidth, maxHeight/imgHeight) y se centran en la página.',
      },
      {
        question: '¿Las miniaturas de imágenes se suben a algún lugar?',
        answer:
          'No. Las vistas previas usan URLs de objeto locales temporales dentro de la pestaña de tu navegador.',
      },
      {
        question: '¿La herramienta Imágenes a PDF es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua y sin límite en la cantidad de imágenes que conviertes.',
      },
      {
        question: '¿Qué formatos de imagen puedo convertir a PDF?',
        answer:
          'Se admiten JPG, PNG y WebP, así que puedes convertir fotos, capturas de pantalla e imágenes web en un solo PDF.',
      },
      {
        question: '¿Puedo convertir una sola imagen a PDF?',
        answer:
          'Sí, una imagen produce un PDF de una página, lo que funciona bien para compartir una sola foto o un documento escaneado como archivo.',
      },
      {
        question: '¿Puedo reordenar las imágenes antes de convertirlas a PDF?',
        answer:
          'Sí, usa las flechas de subir y bajar para ordenar las páginas antes de generar el PDF.',
      },
      {
        question: '¿Qué tamaños de página hay disponibles al convertir imágenes a PDF?',
        answer:
          'A4 vertical, Carta EE. UU. y Dimensiones exactas de la imagen, que crea una página por imagen a su tamaño nativo.',
      },
      {
        question: '¿Mis imágenes se recortarán al convertirlas a PDF?',
        answer:
          'No, las imágenes se escalan proporcionalmente y se centran; nada se recorta ni se estira.',
      },
      {
        question: '¿Puedo agregar márgenes alrededor de mis imágenes en el PDF?',
        answer:
          'Sí, define un margen (por ejemplo, 24 pt) cuando uses tamaños de página A4 o Carta EE. UU.',
      },
      {
        question: '¿Convertir imágenes a PDF reduce su calidad?',
        answer:
          'Los flujos JPG y PNG se incrustan de forma nativa, y WebP se convierte con Canvas a PNG sin pérdida, así que la calidad se conserva.',
      },
      {
        question: '¿Puedo convertir fotos HEIC de mi iPhone a PDF?',
        answer:
          'No directamente; convierte HEIC a JPG o PNG primero y luego usa esta herramienta.',
      },
      {
        question: '¿Mis fotos se suben a un servidor al convertirlas a PDF?',
        answer:
          'No, la conversión se ejecuta localmente en tu navegador y las vistas previas usan URLs de objeto locales temporales.',
      },
      {
        question: '¿Puedo usar la herramienta Imágenes a PDF en el móvil?',
        answer:
          'Sí, funciona en navegadores móviles; elige imágenes directo desde tu biblioteca de fotos.',
      },
      {
        question: '¿Qué pasa con imágenes muy grandes?',
        answer:
          'Las imágenes grandes se incrustan a resolución completa, así que el PDF resultante puede ser grande; comprímelas primero si el tamaño del archivo importa.',
      },
      {
        question: '¿Puedo mezclar JPG, PNG y WebP en un solo PDF?',
        answer:
          'Sí, puedes combinar los tres formatos en un solo documento, y las páginas se mantienen en el orden en que las organizaste.',
      },
      {
        question: '¿Las páginas del PDF estarán en el mismo orden que mis imágenes?',
        answer:
          'Sí, las páginas siguen el orden que se muestra en la lista de imágenes.',
      },
      {
        question: '¿Puedo definir un nombre de archivo personalizado para el PDF?',
        answer:
          'Sí, escribe tu nombre de archivo preferido antes de convertir, y el PDF descargado usará ese nombre en lugar del nombre predeterminado.',
      },
      {
        question: '¿La herramienta conserva la transparencia de las imágenes?',
        answer:
          'La transparencia PNG se conserva en páginas de Dimensiones exactas de la imagen; en páginas A4 o Carta, la imagen queda sobre un fondo blanco de página.',
      },
      {
        question: 'Mi PDF no se descargó: ¿qué debo hacer?',
        answer:
          'Revisa los permisos de descarga de tu navegador e inténtalo de nuevo; el archivo se genera localmente en tu pestaña.',
      },
    ],
  },
  'pdf-to-images': {
    instructions: [
      {
        title: 'Elige un archivo PDF',
        description:
          'Selecciona cualquier documento PDF sin cifrar; PDF.js lee el conteo total de páginas de inmediato.',
      },
      {
        title: 'Elige las páginas a convertir',
        description:
          'Escribe "todas" o un rango de páginas (hasta 20 páginas por lote), como "1-3, 5".',
      },
      {
        title: 'Elige el formato y la escala',
        description:
          'Elige PNG para texto nítido o JPG para archivos más pequeños con muchas fotos, y selecciona resolución 1.0×, 1.5× o 2.0×.',
      },
      {
        title: 'Convierte las páginas',
        description:
          'Inicia la conversión y espera a que aparezcan las vistas previas de las páginas; los lotes más grandes tardan un poco más.',
      },
      {
        title: 'Revisa las vistas previas',
        description:
          'Inspecciona cada miniatura generada para verificar nitidez y contenido correcto antes de descargar.',
      },
      {
        title: 'Descarga tus imágenes',
        description:
          'Haz clic en .PNG o .JPG en cualquier tarjeta de página para guardar esa imagen; repite el lote para las páginas restantes si hace falta.',
      },
    ],
    examples: [
      {
        title: 'Exportar diapositivas de presentación para compartir en redes',
        input: 'Páginas: 1-3 · Formato: PNG · Escala: 2.0× (144 DPI)',
        output: '3 imágenes PNG nítidas a 2× listas para LinkedIn o blogs',
        explanation:
          'La conversión en canvas de alta escala mantiene nítidos los diagramas y la tipografía.',
      },
      {
        title: 'Guardar un certificado de una página como foto JPG',
        input: 'Página: 1 · Formato: JPG · Escala: 1.5×',
        output: 'certificado-pagina-1.jpg compacto y listo para compartir',
        explanation:
          'JPG produce un archivo pequeño ideal para enviar por correo o mensajería.',
      },
    ],
    benefits: [
      'Usa el Web Worker de PDF.js incluido en Vite, sin solicitudes de scripts CDN externos',
      'Rellena automáticamente el fondo blanco del canvas al exportar PDF transparentes a JPG',
      'Permite apuntar a rangos exactos de páginas en lugar de convertir un archivo completo de 100 páginas',
      'La conversión privada en canvas del navegador protege los documentos sensibles',
    ],
    useCases: [
      'Convertir diapositivas de presentaciones PDF en gráficos para blogs o redes sociales',
      'Guardar una sola página de certificado o boleto firmado como foto en el móvil',
      'Generar vistas previas nítidas de interfaz de folletos PDF imprimibles',
      'Inspeccionar visualmente la representación de fuentes y diseño fuera de apps de PDF dedicadas',
    ],
    faqs: [
      {
        question: '¿Debo elegir PNG o JPG para las páginas PDF?',
        answer:
          'Elige PNG para diapositivas, documentos de texto, recibos y gráficos donde importan los bordes nítidos. Elige JPG al exportar folletos con muchas fotos para tamaños de archivo más pequeños.',
      },
      {
        question: '¿Por qué PDF a imágenes convierte hasta 20 páginas por lote?',
        answer:
          'Los canvas de alta resolución 2× consumen mucha GPU y RAM por página; convertir hasta 20 páginas por lote mantiene las pestañas del navegador ágiles en teléfonos y laptops.',
      },
      {
        question: '¿Funciona con PDF protegidos con contraseña?',
        answer:
          'Los PDF cifrados deben desbloquearse antes de convertirlos localmente, porque la herramienta no puede leer las páginas de un archivo que sigue bloqueado.',
      },
      {
        question: '¿La herramienta PDF a imágenes es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua; la conversión ocurre localmente en tu navegador.',
      },
      {
        question: '¿Qué resolución debo elegir para redes sociales?',
        answer:
          '2.0× da los resultados más nítidos para publicaciones y blogs, mientras que 1.0× basta para vistas previas rápidas.',
      },
      {
        question: '¿Puedo exportar solo una página como imagen?',
        answer:
          'Sí, escribe ese número de página en el campo de rango de páginas.',
      },
      {
        question: '¿Puedo exportar todas las páginas de un PDF a la vez?',
        answer:
          'Puedes convertir hasta 20 páginas por lote; repite el proceso para documentos más largos.',
      },
      {
        question: '¿Por qué mi exportación JPG muestra un fondo blanco?',
        answer:
          'JPG no tiene transparencia, así que las áreas transparentes del PDF se rellenan automáticamente de blanco.',
      },
      {
        question: '¿PDF a imágenes mantiene el texto nítido?',
        answer:
          'Sí, las páginas se convierten con escala de hasta 2× con PDF.js, manteniendo nítidos el texto y los diagramas.',
      },
      {
        question: '¿Puedo elegir qué páginas convertir en imágenes?',
        answer:
          'Sí, escribe "todas" o un rango como "1-3, 5" en el campo de páginas.',
      },
      {
        question: '¿Mis archivos PDF se suben a algún lugar?',
        answer:
          'No, la conversión ocurre en tu navegador con un worker local de PDF.js; nada sale de tu dispositivo.',
      },
      {
        question: '¿Puedo usar PDF a imágenes en mi teléfono?',
        answer:
          'Sí, aunque las conversiones de alta resolución usan más memoria, así que los lotes más pequeños funcionan mejor en teléfonos.',
      },
      {
        question: '¿Cuál es la diferencia entre escala 1.0×, 1.5× y 2.0×?',
        answer:
          'Las escalas más altas generan más píxeles por página, produciendo imágenes más grandes y nítidas; 2.0× equivale aproximadamente a 144 DPI.',
      },
      {
        question: '¿Puedo descargar todas las páginas convertidas con un clic?',
        answer:
          'Cada tarjeta de página tiene su propio botón de descarga .PNG o .JPG; descarga las páginas que necesites una por una.',
      },
      {
        question: '¿Los gráficos vectoriales y diagramas se mantendrán nítidos?',
        answer:
          'Sí, PDF.js rasteriza el contenido vectorial a la escala que elegiste, así que los diagramas y gráficos se mantienen nítidos.',
      },
      {
        question: '¿Por qué la conversión tarda en PDF grandes?',
        answer:
          'Cada página se dibuja en un canvas de alta resolución; convertir pocas páginas a la vez mantiene la pestaña ágil.',
      },
      {
        question: '¿Puedo convertir un PDF escaneado a imágenes?',
        answer:
          'Sí, las páginas escaneadas se convierten en imágenes exactamente como aparecen en el PDF.',
      },
      {
        question: '¿La herramienta PDF a imágenes funciona sin conexión?',
        answer:
          'Una vez cargada la página, la conversión se ejecuta localmente en tu navegador sin más solicitudes de red.',
      },
      {
        question: 'Mi imagen convertida se ve borrosa: ¿qué debo hacer?',
        answer:
          'Vuelve a convertir con escala 2.0× y elige PNG para páginas con mucho texto.',
      },
      {
        question: '¿Puedo usar las imágenes exportadas comercialmente?',
        answer:
          'Las imágenes son tuyas para usarlas como usarías el PDF original; respeta los derechos de autor del documento fuente.',
      },
    ],
  },
  'pdf-page-rotator': {
    instructions: [
      {
        title: 'Carga tu PDF',
        description:
          'Selecciona el archivo PDF que contiene páginas de lado o invertidas.',
      },
      {
        title: 'Elige el ángulo de rotación',
        description:
          'Elige 90° en sentido horario, 90° en sentido antihorario o 180° según cómo estén desalineadas las páginas.',
      },
      {
        title: 'Elige el alcance de páginas',
        description:
          'Selecciona Todas las páginas, Rangos específicos, Impares o Pares; para rangos, escribe páginas como "2, 5-7".',
      },
      {
        title: 'Revisa la orientación actual',
        description:
          'Verifica qué páginas están realmente de lado para rotar solo las que lo necesitan.',
      },
      {
        title: 'Aplica y descarga',
        description:
          'Haz clic en Aplicar rotación y descargar PDF para guardar el archivo corregido de forma permanente.',
      },
      {
        title: 'Verifica y corrige lo que quede',
        description:
          'Abre el PDF descargado; si una página sigue de lado, ejecútalo de nuevo con otros 90° en la misma dirección.',
      },
    ],
    examples: [
      {
        title: 'Corregir un solo gráfico financiero rotado en la página 3',
        input: 'Rotación: 90° en sentido horario · Alcance: Rangos específicos de páginas (3)',
        output: 'Solo la página 3 rota en sentido horario; todas las demás páginas conservan su orientación.',
        explanation:
          'Suma 90° módulo 360 a los metadatos de rotación de página existentes sin convertir el texto en imagen.',
      },
      {
        title: 'Enderezar un lote de escaneos boca abajo',
        input: 'Rotación: 180° · Alcance: Todas las páginas',
        output: 'PDF completo enderezado y listo para enviar',
        explanation:
          'La rotación de 180° voltea cada página sin tocar el texto ni las imágenes incrustadas.',
      },
    ],
    benefits: [
      'Rotación sin pérdida: actualiza las marcas de orientación de página del PDF sin recomprimir texto ni imágenes',
      'Conserva limpiamente los ángulos de página existentes (calcula la rotación relativa módulo 360°)',
      'Apunta a rangos selectivos como "2, 5-7" sin rotar las páginas derechas',
      'Descarga instantánea en el navegador sin subida al servidor',
    ],
    useCases: [
      'Corregir lotes de escáner boca abajo en móviles o fotocopiadoras de oficina',
      'Rotar hojas de cálculo horizontales anchas dentro de informes mayormente verticales',
      'Corregir archivos adjuntos con orientación mixta después de combinar documentos',
      'Preparar presentaciones de cumplimiento orientadas limpiamente para portales',
    ],
    faqs: [
      {
        question: '¿Rotar páginas reduce la nitidez del texto o de las imágenes?',
        answer:
          'No. Establecer la propiedad de rotación de página del PDF es completamente sin pérdida y no recodifica fuentes ni imágenes incrustadas.',
      },
      {
        question: '¿Qué pasa si una página de mi PDF ya estaba rotada 90°?',
        answer:
          'El rotador lee el ángulo de rotación actual de cada página y suma el delta que elegiste módulo 360°, así que la orientación cambia de forma predecible respecto a cómo se ve la página ahora.',
      },
      {
        question: '¿Puedo rotar solo una página en un PDF de 20 páginas?',
        answer:
          'Sí. Elige "Rangos específicos de páginas" y escribe ese número exacto de página (por ejemplo, "7").',
      },
      {
        question: '¿El Rotador de páginas PDF es gratis?',
        answer:
          'Sí, es gratis, sin marcas de agua ni límites, y puedes rotar todos los PDF que necesites sin crear una cuenta.',
      },
      {
        question: '¿Puedo rotar todas las páginas de un PDF a la vez?',
        answer:
          'Sí, elige Todas las páginas y escoge 90° en sentido horario, 90° en sentido antihorario o 180°.',
      },
      {
        question: '¿Puedo rotar solo las páginas pares o impares?',
        answer:
          'Sí, elige el alcance Impares o Pares; es útil para corregir lotes de escaneo dúplex.',
      },
      {
        question: '¿Con qué ángulos puedo rotar las páginas PDF?',
        answer:
          'Puedes rotar 90° en sentido horario, 90° en sentido antihorario y 180°, así que cualquier página de lado o al revés se corrige con un clic.',
      },
      {
        question: '¿Puedo rotar una página PDF en un ángulo personalizado como 45°?',
        answer:
          'No, solo se admiten 90°, 180° y 270° (mediante rotaciones repetidas de 90°), ya que la rotación PDF se define en cuartos de vuelta.',
      },
      {
        question: '¿La rotación es permanente?',
        answer:
          'Sí, la rotación se escribe en el diccionario de páginas del PDF y se guarda en el archivo descargado.',
      },
      {
        question: '¿La rotación cambia el tamaño del archivo PDF?',
        answer:
          'Apenas; solo cambian los metadatos de orientación, así que el archivo se mantiene casi del mismo tamaño.',
      },
      {
        question: '¿Puedo rotar un PDF protegido con contraseña?',
        answer:
          'No, los PDF cifrados deben desbloquearse primero, porque la herramienta no puede cambiar las páginas de un archivo que sigue bloqueado.',
      },
      {
        question: '¿El Rotador de páginas PDF sube mi archivo?',
        answer:
          'No, la rotación se ejecuta por completo en tu navegador; tu archivo nunca sale de tu dispositivo.',
      },
      {
        question: '¿Puedo rotar páginas en un PDF escaneado?',
        answer:
          'Sí, las páginas escaneadas rotan igual que las páginas de texto, porque la rotación gira toda la imagen de la página sin leer su contenido.',
      },
      {
        question: '¿La rotación corregirá un PDF que se abre de lado en todos los visores?',
        answer:
          'Sí, el archivo guardado se abre en la orientación corregida en cualquier visor de PDF.',
      },
      {
        question: '¿Puedo rotar distintas páginas en distintas cantidades?',
        answer:
          'Ejecuta la herramienta una vez por ángulo: rota un rango, descarga, y luego rota otro rango en el resultado.',
      },
      {
        question: '¿Qué debo hacer si una página sigue de lado después de rotarla?',
        answer:
          'Revisa primero cómo se ve la página ahora y luego agrega otros 90° en la misma dirección, ya que la rotación es relativa al ángulo actual.',
      },
      {
        question: '¿La rotación afecta los enlaces clicables o los campos de formulario?',
        answer:
          'Los enlaces y las anotaciones rotan con la página, así que se mantienen alineados con el contenido.',
      },
      {
        question: '¿Puedo usar el Rotador de páginas PDF en mi teléfono?',
        answer:
          'Sí, funciona en navegadores móviles modernos, así que puedes abrir un PDF en tu teléfono y rotar sus páginas allí.',
      },
      {
        question: '¿El PDF rotado se imprimirá correctamente?',
        answer:
          'Sí, las impresoras siguen la orientación de página guardada, así que las páginas rotadas se imprimen derechas.',
      },
      {
        question: 'Mi descarga no empezó: ¿qué debo hacer?',
        answer:
          'Permite las descargas para este sitio en la configuración de tu navegador y haz clic en Aplicar rotación de nuevo; el archivo se genera localmente.',
      },
    ],
  },
  'reorder-delete-pdf-pages': {
    instructions: [
      {
        title: 'Carga tu documento PDF',
        description:
          'Selecciona un PDF sin cifrar; las vistas previas en miniatura se generan localmente hasta 30 páginas (con tarjetas de página y dimensiones para todas las páginas).',
      },
      {
        title: 'Revisa las tarjetas de páginas',
        description:
          'Cada tarjeta muestra su posición de salida actual y su índice de página original, para que puedas detectar páginas en blanco, duplicadas o fuera de lugar antes de cambiar nada.',
      },
      {
        title: 'Reordena, duplica o elimina',
        description:
          'Usa los botones de flecha para cambiar la secuencia, el ícono de copia para duplicar una hoja o el ícono de papelera para quitar páginas no deseadas.',
      },
      {
        title: 'Revisa el nuevo orden de páginas',
        description:
          'Escanea las posiciones actualizadas en cada tarjeta para confirmar que los apéndices, anexos y portadas queden exactamente donde pertenecen.',
      },
      {
        title: 'Guarda el PDF organizado',
        description:
          'Haz clic en Guardar PDF reordenado para compilar y descargar tu documento limpio.',
      },
      {
        title: 'Consejo: conserva el archivo original',
        description:
          'La herramienta nunca edita tu archivo fuente, así que consérvalo como respaldo. Si un PDF no carga, verifica que no esté protegido con contraseña ni cifrado.',
      },
    ],
    examples: [
      {
        title: 'Eliminar una página final en blanco y adelantar el apéndice',
        input: 'PDF de 5 páginas · Eliminar página 5 · Mover página 4 a la posición n.º 2',
        output: 'PDF actualizado de 4 páginas con contenido vectorial intacto',
        explanation:
          'Reconstruye limpiamente el árbol de páginas del documento en el orden que elegiste.',
      },
      {
        title: 'Duplicar una hoja de formulario imprimible dentro de un paquete',
        input: 'PDF de 3 páginas · Duplicar página 2',
        output: 'PDF de 4 páginas con la hoja de formulario repetida',
        explanation:
          'El ícono de copia duplica la página exacta para imprimir el formulario varias veces.',
      },
    ],
    benefits: [
      'Combina miniaturas visuales de PDF.js con copia de páginas sin pérdida de pdf-lib',
      'Protege contra guardar accidentalmente un PDF vacío de 0 páginas',
      'Muestra tanto la posición de salida actual como el índice de página original',
      'Sin subidas de archivos para registros confidenciales de recursos humanos, legales o médicos',
    ],
    useCases: [
      'Eliminar páginas en blanco accidentales producidas por escáneres dúplex de documentos',
      'Mover apéndices o anexos fuera de lugar a la secuencia correcta',
      'Duplicar páginas de formularios imprimibles u hojas de aprobación dentro de un paquete',
      'Limpiar PDF combinados antes de enviarlos a clientes',
    ],
    faqs: [
      {
        question: '¿Por qué las miniaturas solo se generan para las primeras 30 páginas?',
        answer:
          'Para mantener rápida la RAM del navegador en documentos enormes, las miniaturas en vivo se generan para las primeras 30 páginas, mientras que cada página sigue siendo totalmente reordenable y eliminable mediante su tarjeta.',
      },
      {
        question: '¿Reordenar páginas convierte el texto en imágenes?',
        answer:
          'No. Las miniaturas solo sirven para la vista previa visual dentro de la interfaz; la salida guardada usa pdf-lib copyPages() para conservar el texto vectorial original y los enlaces.',
      },
      {
        question: '¿Puedo deshacer la eliminación de todas las páginas?',
        answer:
          'El editor exige que quede al menos 1 página, y volver a subir el archivo fuente intacto restaura el original completo en cualquier momento.',
      },
      {
        question: '¿La herramienta Reordenar y eliminar páginas PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando reordeno sus páginas?',
        answer:
          'No. Tu PDF se procesa localmente en tu navegador y nunca se sube, así que los documentos confidenciales se quedan en tu dispositivo.',
      },
      {
        question: '¿Puedo eliminar varias páginas a la vez?',
        answer:
          'Cada tarjeta de página tiene su propio ícono de papelera, así que elimina las páginas una a la vez; el conteo de páginas y las posiciones se actualizan de inmediato después de cada eliminación.',
      },
      {
        question: '¿Puedo mover una página directo al principio o al final del PDF?',
        answer:
          'Usa los botones de flecha repetidamente para llevar una página a la primera o última posición, revisando su posición de salida actualizada en la tarjeta a medida que avanzas.',
      },
      {
        question: '¿Qué pasa si elimino la página equivocada por error?',
        answer:
          'No hay botón de deshacer, así que simplemente vuelve a subir tu archivo original intacto y repite los cambios; la herramienta nunca modifica tu archivo fuente.',
      },
      {
        question: '¿Reordenar páginas cambia el texto o las imágenes de ellas?',
        answer:
          'No. Las páginas se copian tal cual con pdf-lib, así que el texto vectorial, las imágenes y las fuentes mantienen su calidad original.',
      },
      {
        question: '¿Puedo duplicar la misma página más de una vez?',
        answer:
          'Sí. Haz clic en el ícono de copia de una página tantas veces como necesites, por ejemplo para repetir un formulario imprimible o una hoja de aprobación dentro de un paquete.',
      },
      {
        question: '¿Qué PDF funcionan con la herramienta Reordenar y eliminar páginas PDF?',
        answer:
          'Cualquier PDF sin cifrar funciona. Los PDF protegidos con contraseña o cifrados no pueden abrirse con esta herramienta de navegador.',
      },
      {
        question: '¿Cuántas páginas puede tener mi PDF?',
        answer:
          'No hay un límite fijo de páginas; las miniaturas en vivo se generan para las primeras 30 páginas, mientras que cada página sigue teniendo una tarjeta con su posición y su índice original.',
      },
      {
        question: '¿Mi tamaño de archivo cambiará después de reordenar páginas?',
        answer:
          'Eliminar páginas hace el archivo más pequeño, mientras que reordenar por sí solo mantiene el tamaño más o menos igual porque el documento se reconstruye con las mismas páginas.',
      },
      {
        question: '¿Puedo reordenar páginas en un PDF escaneado?',
        answer:
          'Sí. Las páginas se copian enteras sin importar si contienen texto o imágenes escaneadas, así que los documentos escaneados se reordenan igual que cualquier otro PDF.',
      },
      {
        question: '¿La herramienta Reordenar y eliminar páginas PDF funciona en el móvil?',
        answer:
          'Sí, se ejecuta en cualquier navegador móvil moderno, aunque las tarjetas de páginas y las miniaturas son más fáciles de manejar en una pantalla de escritorio más grande.',
      },
      {
        question: '¿Puedo rotar páginas mientras las reordeno?',
        answer:
          'No. La rotación es un trabajo aparte, así que usa primero la herramienta Rotador de páginas PDF y luego reordena aquí las páginas rotadas.',
      },
      {
        question: '¿Cómo distingo las páginas en el editor?',
        answer:
          'Cada tarjeta muestra una vista previa en miniatura cuando está disponible, además de su posición de salida actual y su número de página original en el archivo fuente.',
      },
      {
        question: '¿Puedo combinar dos PDF con esta herramienta?',
        answer:
          'No. Esta herramienta solo reorganiza páginas dentro de un PDF; usa la herramienta Combinar PDF para unir documentos separados primero.',
      },
      {
        question: '¿Eliminar páginas quita marcadores o enlaces internos?',
        answer:
          'El contenido de las páginas se conserva, pero los marcadores a nivel de documento pueden no sobrevivir a la reconstrucción, así que revisa el archivo guardado antes de compartirlo.',
      },
      {
        question: '¿Qué archivo obtengo después de guardar el PDF reordenado?',
        answer:
          'Se descarga a tu dispositivo un PDF completamente nuevo en el orden de páginas que elegiste, mientras que tu archivo original se mantiene intacto en tu computadora.',
      },
    ],
  },
  'pdf-watermark': {
    instructions: [
      {
        title: 'Elige tu archivo PDF',
        description:
          'Sube cualquier documento PDF sin cifrar localmente a la memoria.',
      },
      {
        title: 'Escribe el texto de la marca de agua',
        description:
          'Escribe el sello que necesitas, como CONFIDENCIAL, BORRADOR o NO DISTRIBUIR, usando caracteres latinos estándar.',
      },
      {
        title: 'Personaliza el sello de marca de agua',
        description:
          'Elige Gris neutro, Índigo de marca o Rojo de sello, y ajusta los controles de tamaño, opacidad y ángulo hasta que el sello se vea bien.',
      },
      {
        title: 'Elige qué páginas sellar',
        description:
          'Deja el valor predeterminado para poner marca de agua en todas las páginas, o marca Solo primera página cuando solo la portada necesita un sello de clasificación.',
      },
      {
        title: 'Aplica y descarga',
        description:
          'Opcionalmente marca Solo primera página y luego haz clic en Aplicar marca de agua y descargar.',
      },
      {
        title: 'Consejo: revisa la legibilidad antes de compartir',
        description:
          'Abre el archivo descargado y confirma que el texto del cuerpo siga siendo fácil de leer; si el sello es demasiado fuerte, ejecútalo de nuevo con una opacidad menor, como 15–22 %.',
      },
    ],
    examples: [
      {
        title: 'Sellar un borrador de propuesta antes de su lanzamiento',
        input: 'Texto: BORRADOR · Fuente: 54 pt · Opacidad: 22 % · Ángulo: 40°',
        output: 'Superposición vectorial semitransparente de BORRADOR en diagonal centrada en todas las páginas',
        explanation:
          'Usa opacidad alfa para que el texto del cuerpo se mantenga totalmente legible.',
      },
      {
        title: 'Marcar solo la portada como CONFIDENCIAL',
        input: 'Texto: CONFIDENCIAL · Solo primera página: activado',
        output: 'Sello de CONFIDENCIAL solo en la página 1; las demás páginas quedan limpias',
        explanation:
          'El modo Solo primera página clasifica la portada sin marcar todo el documento.',
      },
    ],
    benefits: [
      'Usa tipografía vectorial HelveticaBold estándar y nítida en lugar de mapas de bits borrosos',
      'Admite opacidad alfa semitransparente del 8 % al 65 % para que el contenido se mantenga legible',
      'Ofrece el modo Solo primera página para sellos de clasificación en portadas',
      'Mantiene los borradores no publicados estrictamente fuera de servidores externos en la nube',
    ],
    useCases: [
      'Marcar contratos en borrador, documentos de trabajo o presentaciones antes de la revisión externa',
      'Agregar avisos de CONFIDENCIAL o SOLO USO INTERNO a paquetes de recursos humanos o junta directiva',
      'Etiquetar portafolios de muestra o pruebas preliminares',
      'Aplicar sellos consistentes de estado de revisión antes de archivar',
    ],
    faqs: [
      {
        question: '¿Los destinatarios pueden editar o quitar la marca de agua en editores de PDF completos?',
        answer:
          'Las marcas de agua de texto dibujadas con pdf-lib son objetos de contenido vectorial estándar en la página. Si necesitas páginas aplanadas no seleccionables donde las marcas de agua no puedan seleccionarse como texto, convierte el PDF con marca de agua con nuestras herramientas PDF a imágenes e Imágenes a PDF.',
      },
      {
        question: '¿La marca de agua funciona tanto en páginas verticales como horizontales?',
        answer:
          'Sí. Las coordenadas se calculan dinámicamente a partir del ancho y alto de cada página individual.',
      },
      {
        question: '¿Qué caracteres se admiten en la cadena de la marca de agua?',
        answer:
          'Caracteres estándar WinAnsi (ASCII latino y símbolos comunes de Europa occidental) admitidos por PDF HelveticaBold.',
      },
      {
        question: '¿La herramienta de marca de agua en PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando agrego una marca de agua?',
        answer:
          'No. El archivo se procesa localmente en tu navegador y nunca se sube, así que los borradores no publicados se mantienen privados.',
      },
      {
        question: '¿Puedo poner marca de agua solo en algunas páginas de un PDF?',
        answer:
          'Puedes poner marca de agua en todas las páginas o solo en la primera página con la opción Solo primera página; sellar un rango intermedio personalizado no está admitido.',
      },
      {
        question: '¿Qué texto puedo usar como marca de agua en PDF?',
        answer:
          'Cualquier etiqueta corta en caracteres latinos estándar, como CONFIDENCIAL, BORRADOR, SOLO USO INTERNO o el nombre de tu empresa.',
      },
      {
        question: '¿Puedo usar el nombre de mi empresa como marca de agua?',
        answer:
          'Sí. Escribe el nombre de tu empresa o marca como texto de marca de agua y se estampará en las páginas que elijas.',
      },
      {
        question: '¿Puedo cambiar el color de la marca de agua del PDF?',
        answer:
          'Sí. Elige Gris neutro para una marca sutil, Índigo de marca para combinar con una marca, o Rojo de sello para un aviso de clasificación llamativo.',
      },
      {
        question: '¿Qué tan transparente puede ser la marca de agua?',
        answer:
          'La opacidad se ajusta del 8 % al 65 %, así que puedes mantener el sello visible mientras el texto de abajo se mantiene totalmente legible.',
      },
      {
        question: '¿Puedo hacer la marca de agua horizontal en lugar de diagonal?',
        answer:
          'Sí. Ajusta el control de ángulo a 0 grados para un sello recto horizontal, o elige cualquier ángulo hasta una diagonal completa.',
      },
      {
        question: '¿Puedo agregar una marca de agua de imagen o logotipo a un PDF?',
        answer:
          'No. Esta herramienta estampa solo marcas de agua de texto; no se admiten superposiciones de imágenes ni logotipos.',
      },
      {
        question: '¿La marca de agua se imprimirá cuando se imprima el PDF?',
        answer:
          'Sí. La marca de agua es contenido vectorial real dibujado en cada página, así que aparece en las impresiones igual que en pantalla.',
      },
      {
        question: '¿La marca de agua cambia el texto original de mi PDF?',
        answer:
          'No. La marca de agua se dibuja como una superposición encima de las páginas y no edita ni reemplaza ningún contenido existente.',
      },
      {
        question: '¿Puedo poner marca de agua en un PDF protegido con contraseña?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿Esta herramienta puede quitar una marca de agua de un PDF?',
        answer:
          'No. Solo agrega marcas de agua; quitar una marca de agua existente requiere un editor de PDF completo.',
      },
      {
        question: '¿Qué fuente usa la marca de agua del PDF?',
        answer:
          'Las marcas de agua usan tipografía vectorial HelveticaBold estándar y nítida, que se mantiene afilada a cualquier tamaño en lugar de verse borrosa como un mapa de bits.',
      },
      {
        question: '¿La marca de agua se mantendrá legible en páginas oscuras o recargadas?',
        answer:
          'Depende del fondo de la página, así que elige un color con contraste y una opacidad moderada, y luego abre el archivo descargado para revisar el resultado.',
      },
      {
        question: '¿Puedo poner marca de agua en un PDF escaneado?',
        answer:
          'Sí. La marca de agua se dibuja en cada página sin importar si la página contiene texto o una imagen escaneada.',
      },
      {
        question: '¿Agregar una marca de agua hace mi PDF mucho más grande?',
        answer:
          'Solo un poco. El texto vectorial agrega muy pocos datos, así que el tamaño del archivo crece en una pequeña cantidad comparado con sellos basados en imágenes.',
      },
    ],
  },
  'add-pdf-page-numbers': {
    instructions: [
      {
        title: 'Carga tu documento PDF',
        description:
          'Elige el archivo PDF sin numerar o combinado que quieres paginar.',
      },
      {
        title: 'Elige el formato de número',
        description:
          'Elige "Página 1 de N" para paquetes formales, "1 / N" para un aspecto compacto, o dígitos simples para un pie mínimo.',
      },
      {
        title: 'Define la posición y el tamaño',
        description:
          'Selecciona Inferior centrado, Inferior derecha, Inferior izquierda o Superior derecha, y ajusta el tamaño de fuente para que los números queden ordenados en el margen.',
      },
      {
        title: 'Define el número inicial y la omisión de portada',
        description:
          'Cambia Número inicial para continuar un conjunto de varios volúmenes, y activa Omitir portada cuando la página de título debe mantenerse limpia.',
      },
      {
        title: 'Aplica y descarga',
        description:
          'Haz clic en Agregar números de página y descargar para exportar el PDF paginado localmente.',
      },
      {
        title: 'Consejo: revisa las páginas con pies ajustados',
        description:
          'Abre el archivo descargado y mira las páginas que ya tienen texto de pie; si un número queda demasiado cerca, ejecútalo de nuevo con un tamaño de fuente más pequeño.',
      },
    ],
    examples: [
      {
        title: 'Numerar un paquete combinado empezando después de la portada',
        input: 'PDF de 5 páginas · Formato: Página 1 de N · Omitir portada: activado',
        output: 'Página 1 intacta; páginas 2–5 estampadas "Página 1 de 4" hasta "Página 4 de 4"',
        explanation:
          'Ideal después de combinar portadas y apéndices con Combinar PDF.',
      },
      {
        title: 'Continuar la numeración de un segundo volumen desde la página 15',
        input: 'PDF de 10 páginas · Formato: 1 / N · Número inicial: 15',
        output: 'Páginas estampadas "15 / 24" hasta "24 / 24"',
        explanation:
          'El número inicial personalizado continúa la secuencia de un conjunto de varios volúmenes.',
      },
    ],
    benefits: [
      'Corrige la paginación rota justo después de combinar informes PDF separados',
      'Admite omitir la página 1 para que las portadas de título se mantengan limpias',
      'El número inicial personalizable admite conjuntos de documentos de varios volúmenes',
      'Mide el ancho exacto del texto por tamaño de página para un centrado nítido y alineación derecha',
    ],
    useCases: [
      'Paginar propuestas de clientes y solicitudes de propuesta combinadas después de Combinar PDF',
      'Numerar presentaciones judiciales, apéndices o capítulos de tesis',
      'Continuar la numeración secuencial desde la página 15 en adelante en un volumen Parte 2',
      'Agregar números discretos en la esquina inferior derecha a guías de estudio impresas',
    ],
    faqs: [
      {
        question: '¿Esto borrará el texto existente cerca del margen inferior?',
        answer:
          'La herramienta dibuja números nítidos con un desplazamiento de margen de 28 pt sin cubrir fondos existentes, así que inspecciona las páginas que ya tienen pies ajustados.',
      },
      {
        question: '¿Cómo afecta "Omitir portada" al conteo total en "Página X de N"?',
        answer:
          'Cuando está activado, la página 1 no recibe etiqueta y las páginas restantes se cuentan limpiamente desde 1 hasta (Páginas totales − 1) para que los totales se mantengan consistentes.',
      },
      {
        question: '¿Puedo empezar la numeración en la página 10 en lugar de 1?',
        answer:
          'Sí. Cambia Número inicial a 10 para numerar volúmenes secuenciales desde 10 en adelante.',
      },
      {
        question: '¿La herramienta Agregar números de página a PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando agrego números de página?',
        answer:
          'No. El archivo se procesa localmente en tu navegador y nunca se sube, así que tus documentos se mantienen privados.',
      },
      {
        question: '¿Qué formatos de número de página puedo elegir?',
        answer:
          'Puedes elegir "Página 1 de N", el estilo compacto "1 / N" o dígitos simples sin etiqueta.',
      },
      {
        question: '¿Dónde en la página pueden aparecer los números?',
        answer:
          'Elige Inferior centrado, Inferior derecha, Inferior izquierda o Superior derecha, según dónde tengan espacio libre tus márgenes.',
      },
      {
        question: '¿Puedo omitir la numeración de la portada?',
        answer:
          'Sí. Activa Omitir portada y la página 1 se mantiene limpia mientras la numeración empieza en la página 2.',
      },
      {
        question: '¿La herramienta vuelve a numerar un PDF que ya tiene números de página?',
        answer:
          'No. Estampa números nuevos junto a los existentes, así que quita los números viejos primero si quieres un solo conjunto.',
      },
      {
        question: '¿Puedo cambiar el tamaño de fuente de los números de página?',
        answer:
          'Sí. Ajusta el tamaño de fuente para que los números sean legibles sin saturar tu pie o encabezado.',
      },
      {
        question: '¿La numeración de páginas funciona en páginas horizontales?',
        answer:
          'Sí. La herramienta mide el ancho exacto del texto por tamaño de página, así que los números se mantienen centrados o alineados en páginas verticales y horizontales por igual.',
      },
      {
        question: '¿Puedo numerar solo páginas seleccionadas de un PDF?',
        answer:
          'No. La numeración se aplica a todas las páginas excepto una portada opcionalmente omitida; numerar un rango personalizado no está admitido.',
      },
      {
        question: '¿Qué pasa si mi PDF ya tiene números de página?',
        answer:
          'Los números nuevos se estampan además de los viejos, lo que puede verse duplicado, así que revisa la salida y limpia el original primero si hace falta.',
      },
      {
        question: '¿Puedo usar números romanos para los números de página?',
        answer:
          'No. La herramienta numera las páginas solo con números arábigos estándar, así que formatos como los números romanos no están disponibles como estilo de numeración.',
      },
      {
        question: '¿Puedo agregar números de página a un PDF escaneado?',
        answer:
          'Sí. Los números se dibujan en cada página como texto vectorial sin importar si la página contiene texto o una imagen escaneada.',
      },
      {
        question: '¿Puedo poner números de página en el encabezado en lugar del pie?',
        answer:
          'Sí, elige la posición Superior derecha para numeración en el encabezado; no se ofrece ubicación superior centrada.',
      },
      {
        question: '¿Los números de página estampados serán texto seleccionable?',
        answer:
          'Sí. Los números se dibujan como texto vectorial nítido, así que los lectores pueden seleccionarlos y copiarlos como texto PDF normal.',
      },
      {
        question: '¿Puedo numerar un PDF protegido con contraseña?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿Puedo agregar un prefijo como "Sección 2 – Página 3"?',
        answer:
          'No. La herramienta ofrece solo los tres formatos de número, así que no se pueden agregar prefijos personalizados ni etiquetas de sección.',
      },
      {
        question: '¿Agregar números de página cambia mi contenido PDF?',
        answer:
          'No. Solo se agregan las etiquetas de número; tu texto, imágenes y diseño existentes se mantienen exactamente como estaban.',
      },
    ],
  },
  'pdf-metadata-editor': {
    instructions: [
      {
        title: 'Carga un archivo PDF',
        description:
          'Selecciona cualquier PDF sin cifrar; los campos de metadatos existentes y las dimensiones de página se completan automáticamente.',
      },
      {
        title: 'Revisa los metadatos actuales',
        description:
          'Lee los campos de Título, Autor, Asunto, Palabras clave, Creador y Productor, además del conteo de páginas y las dimensiones exactas de página, para ver qué está guardado.',
      },
      {
        title: 'Edita o limpia los campos',
        description:
          'Actualiza Título, Autor, Asunto y Palabras clave para mayor claridad, o haz clic en Eliminar todos los campos de metadatos para privacidad.',
      },
      {
        title: 'Elimina todos los metadatos para privacidad',
        description:
          'Usa Eliminar todos los campos de metadatos antes de compartir un archivo en público para borrar nombres de autor y versiones de software en un clic.',
      },
      {
        title: 'Guarda y descarga',
        description:
          'Haz clic en Guardar metadatos y descargar PDF para exportar una copia recién etiquetada.',
      },
      {
        title: 'Consejo: verifica el archivo guardado',
        description:
          'Vuelve a abrir el PDF descargado en esta herramienta para confirmar el nuevo Título y los campos de Autor borrados, ya que los cambios solo se aplican a la copia guardada.',
      },
    ],
    examples: [
      {
        title: 'Anonimizar un PDF exportado desde Word o Illustrator',
        input: 'Autor: "John Doe" · Creador: "Microsoft® Word 2021"',
        output: 'Haz clic en Eliminar todos los campos de metadatos → Guarda un PDF limpio con Autor/Creador en blanco',
        explanation:
          'Elimina nombres de empleados y versiones de software antes de alojarlo en la web pública.',
      },
      {
        title: 'Corregir el título que se muestra en la pestaña del navegador',
        input: 'Título: "Sin título-2" · Archivo: informe-anual.pdf',
        output: 'Título: "Informe anual 2026" · La pestaña del navegador muestra el título correcto',
        explanation:
          'Los navegadores muestran la propiedad Título del PDF en lugar del nombre del archivo.',
      },
    ],
    benefits: [
      'Expone nombres de autor ocultos y cadenas de software que los navegadores muestran en pestañas y propiedades',
      'Eliminar todos los campos de metadatos con un clic borra las 6 etiquetas estándar del diccionario Info',
      'Actualiza limpiamente Título, Asunto y Palabras clave separadas por comas relevantes para SEO',
      'Muestra las dimensiones exactas en puntos PDF (`ancho × alto pt`) junto con el conteo de páginas',
    ],
    useCases: [
      'Limpiar nombres de empleados y versiones de herramientas locales antes de publicar PDF en público',
      'Corregir nombres de archivo incómodos como "Sin título-2" que se muestran en pestañas de PDF de Chrome o Safari mediante Título',
      'Agregar etiquetas buscables de Asunto y Palabras clave a documentos técnicos descargables',
      'Auditar envíos de PDF de proveedores o candidatos localmente',
    ],
    faqs: [
      {
        question: '¿Por qué la pestaña de mi navegador muestra el título equivocado al abrir un PDF?',
        answer:
          'Los navegadores muestran la propiedad interna Título del documento PDF en lugar del nombre del archivo .pdf si hay una etiqueta Título incrustada. Editar el Título aquí corrige cómo los navegadores etiquetan la pestaña.',
      },
      {
        question: '¿Borrar los campos de metadatos afecta el contenido visible de las páginas?',
        answer:
          'No. Eliminar o actualizar Título, Autor, Asunto, Palabras clave, Creador y Productor actualiza solo el diccionario Info del PDF sin alterar las páginas visibles.',
      },
      {
        question: '¿Las ediciones se cifran o se registran en algún lugar?',
        answer:
          'Nunca. Tanto la lectura como la escritura de metadatos se ejecutan por completo dentro de la memoria del cliente con pdf-lib.',
      },
      {
        question: '¿El Editor de metadatos PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Mi PDF se sube a un servidor cuando edito sus metadatos?',
        answer:
          'No. La lectura y escritura de metadatos ocurren por completo dentro de tu navegador, así que tus archivos nunca se suben ni se registran.',
      },
      {
        question: '¿Qué campos de metadatos puedo editar en un PDF?',
        answer:
          'Puedes ver y editar Título, Autor, Asunto, Palabras clave, Creador y Productor: las seis etiquetas estándar del diccionario Info del PDF.',
      },
      {
        question: '¿Puedo quitar solo el nombre del autor de un PDF?',
        answer:
          'Sí. Borra solo el campo Autor y guarda, dejando intactos el Título, el Asunto y las demás etiquetas.',
      },
      {
        question: '¿Qué hace "Eliminar todos los campos de metadatos"?',
        answer:
          'Borra las seis etiquetas estándar del diccionario Info a la vez, eliminando nombres de autor, cadenas de software y títulos antes de compartir el archivo.',
      },
      {
        question: '¿Editar el Título puede cambiar cómo aparece el PDF en los resultados de búsqueda?',
        answer:
          'Editar el Título cambia la etiqueta que los navegadores muestran en la pestaña del PDF, pero no garantiza ningún posicionamiento ni fragmento de búsqueda en particular.',
      },
      {
        question: '¿Eliminar metadatos borra marcadores o enlaces?',
        answer:
          'No. Eliminar actualiza solo el diccionario Info, así que los marcadores, enlaces y contenido visible de las páginas quedan sin cambios.',
      },
      {
        question: '¿Puedo ver los metadatos de un PDF sin cambiar nada?',
        answer:
          'Sí. Los campos se completan tan pronto cargas un archivo, y nada se altera a menos que hagas clic en Guardar metadatos y descargar PDF.',
      },
      {
        question: '¿Qué son los campos Creador y Productor en un PDF?',
        answer:
          'Creador nombra la aplicación que hizo el documento, como Microsoft Word, mientras que Productor nombra el software que lo convirtió en PDF.',
      },
      {
        question: '¿Puedo agregar palabras clave a un PDF para mejorar su búsqueda?',
        answer:
          'Sí. Escribe Palabras clave separadas por comas en el editor de metadatos, y se guardan en el PDF para las herramientas de búsqueda que las lean.',
      },
      {
        question: '¿El tamaño del archivo cambiará después de editar los metadatos del PDF?',
        answer:
          'Solo en una cantidad mínima. Los metadatos son un bloque pequeño de texto, así que editarlos o eliminarlos apenas afecta el tamaño total del archivo.',
      },
      {
        question: '¿Puedo editar metadatos en un PDF escaneado?',
        answer:
          'Sí. Los metadatos viven en el encabezado del documento y son independientes del contenido de las páginas, así que los PDF escaneados funcionan igual que los basados en texto.',
      },
      {
        question: '¿Puedo editar metadatos XMP con esta herramienta?',
        answer:
          'No. Esta herramienta edita solo las seis etiquetas estándar del diccionario Info; los paquetes extendidos de metadatos XMP no se modifican.',
      },
      {
        question: '¿Puedo editar metadatos en un PDF cifrado?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿El Editor de metadatos PDF muestra el tamaño de página?',
        answer:
          'Sí. Muestra las dimensiones exactas de página en puntos (ancho × alto) junto con el conteo de páginas de cada archivo cargado.',
      },
      {
        question: '¿Eliminar metadatos quitará toda la información personal de un PDF?',
        answer:
          'Elimina las seis etiquetas Info, pero los datos personales escritos visiblemente en las páginas mismas, como un nombre en el texto del cuerpo, permanecen.',
      },
      {
        question: '¿Necesito descargar el archivo para aplicar los cambios de metadatos?',
        answer:
          'Sí. Hacer clic en Guardar metadatos y descargar PDF crea un archivo nuevo con tus cambios, mientras que tu archivo original se mantiene intacto.',
      },
    ],
  },
  'pdf-text-extractor': {
    instructions: [
      {
        title: 'Selecciona un documento PDF',
        description:
          'Elige cualquier archivo PDF sin cifrar; PDF.js escanea el flujo de texto incrustado de cada página localmente.',
      },
      {
        title: 'Revisa el texto extraído',
        description:
          'Lee la salida y revisa el conteo de páginas, el conteo de palabras y el tamaño en bytes UTF-8 reportados para confirmar que la extracción se ve completa.',
      },
      {
        title: 'Activa los marcadores de página',
        description:
          'Mantén los encabezados de página activados para citas estructuradas o desactívalos para prosa continua.',
      },
      {
        title: 'Revisa si hay páginas escaneadas',
        description:
          'Si la herramienta reporta 0 caracteres, es probable que el PDF sea un archivo escaneado solo de imágenes sin capa de texto para extraer.',
      },
      {
        title: 'Copia o exporta .txt',
        description:
          'Copia el texto extraído en tu editor o descarga una transcripción limpia en UTF-8 .txt.',
      },
      {
        title: 'Consejo: corrige texto confuso o faltante',
        description:
          'Si los caracteres se ven mal, es posible que el PDF fuente use una fuente personalizada sin mapeo Unicode adecuado; prueba el documento original o una copia recién exportada.',
      },
    ],
    examples: [
      {
        title: 'Extraer copia legible de un documento técnico de varias páginas',
        input: 'documento-tecnico.pdf (8 páginas, capa de texto incrustada)',
        output: 'Texto plano estructurado con separadores --- Página 1 ---, conteo de palabras y descarga .txt',
        explanation:
          'Extrae limpiamente los elementos de texto subyacentes del PDF sin errores manuales de resaltar y copiar.',
      },
      {
        title: 'Detectar un PDF escaneado sin capa de texto',
        input: 'escaneo.pdf (12 páginas, solo imágenes)',
        output: 'Advertencia: 0 caracteres extraídos; el PDF no tiene capa de texto',
        explanation:
          'La herramienta indica con honestidad que el PDF escaneado no contiene texto extraíble y que no se ejecuta OCR sin conexión.',
      },
    ],
    benefits: [
      'Advierte con transparencia si un PDF es escaneado o solo de imágenes (capa de texto 0, OCR no ejecutado sin conexión)',
      'Conserva saltos de página limpios con marcadores activables --- Página N ---',
      'Reporta el conteo de páginas extraídas, el conteo de palabras y el tamaño en bytes UTF-8',
      'Primer paso ideal antes de enviar copia al Contador de palabras o a Buscar y reemplazar',
    ],
    useCases: [
      'Extraer texto plano limpio de documentos técnicos, programas de estudio o documentación en PDF',
      'Revisar conteos de palabras en ensayos PDF con formato usando nuestro Contador de palabras',
      'Verificar si un PDF archivado contiene una capa de texto buscable frente a escaneos planos',
      'Exportar agendas de reuniones en PDF a notas de texto plano Markdown',
    ],
    faqs: [
      {
        question: '¿Por qué un PDF escaneado extrajo 0 caracteres?',
        answer:
          'Los PDF de escáner a menudo guardan las páginas solo como imágenes de mapa de bits planas sin una capa de texto OCR incrustada. Esta herramienta de navegador lee directamente los flujos de texto PDF existentes y revela con honestidad que el OCR sin conexión no está incluido.',
      },
      {
        question: '¿Por qué las tablas complejas de varias columnas a veces se envuelven entre líneas?',
        answer:
          'Los archivos PDF guardan el texto posicionado por coordenadas X/Y en lugar de tablas HTML semánticas, así que PDF.js emite los elementos de texto en orden de flujo con pistas de fin de línea.',
      },
      {
        question: '¿Mi PDF se sube para extraer texto?',
        answer:
          'No. PDF.js analiza y extrae los flujos de texto estrictamente dentro de la pestaña de tu navegador.',
      },
      {
        question: '¿El Extractor de texto de PDF es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿A qué formatos de archivo puedo exportar el texto extraído?',
        answer:
          'Puedes copiar el texto plano a tu portapapeles o descargarlo como una transcripción limpia en UTF-8 .txt.',
      },
      {
        question: '¿Puedo extraer texto de solo una página de un PDF?',
        answer:
          'La extracción cubre todo el documento, pero los marcadores opcionales --- Página N --- facilitan encontrar y copiar solo la sección que necesitas.',
      },
      {
        question: '¿Por qué falta parte del texto en la salida extraída?',
        answer:
          'El texto guardado como imagen, o dibujado con una fuente personalizada que carece de mapa Unicode, no tiene flujo de texto legible para que PDF.js lo extraiga.',
      },
      {
        question: '¿El Extractor de texto de PDF incluye OCR para páginas escaneadas?',
        answer:
          'No. Lee solo la capa de texto incrustada existente y no ejecuta OCR, así que las páginas escaneadas solo de imágenes no devuelven texto.',
      },
      {
        question: '¿Puedo extraer texto de un PDF en otro idioma?',
        answer:
          'Sí. El texto Unicode incrustado se extrae tal cual, así que los documentos en otros idiomas funcionan siempre que el PDF guarde una capa de texto adecuada.',
      },
      {
        question: '¿La extracción conserva el texto en negrita o los encabezados?',
        answer:
          'No. La salida es solo texto plano, así que la negrita, la cursiva, los encabezados y otros formatos no se transfieren.',
      },
      {
        question: '¿Qué tan grande puede ser un PDF para extraer texto?',
        answer:
          'No hay un límite de tamaño declarado, y la extracción se ejecuta localmente; los documentos muy grandes simplemente pueden tardar un poco más en escanearse.',
      },
      {
        question: '¿Puedo copiar el texto extraído sin descargar un archivo?',
        answer:
          'Sí. Usa el botón de copia con un clic para pegar el texto directo en tu editor, app de notas o documento.',
      },
      {
        question: '¿Qué son los marcadores "--- Página N ---" en la salida?',
        answer:
          'Son encabezados opcionales que marcan dónde empieza cada página, para que puedas citar páginas con precisión; desactívalos para prosa continua.',
      },
      {
        question: '¿El Extractor de texto de PDF muestra un conteo de palabras?',
        answer:
          'Sí. Reporta el conteo de páginas extraídas, el conteo de palabras y el tamaño en bytes UTF-8 junto con el texto.',
      },
      {
        question: '¿Puedo extraer texto de un PDF protegido con contraseña?',
        answer:
          'No. Solo los PDF sin cifrar pueden abrirse con esta herramienta de navegador, así que quita la contraseña primero.',
      },
      {
        question: '¿Se extraerán los hipervínculos del PDF?',
        answer:
          'El texto visible de los enlaces se extrae cuando existe como texto, pero los enlaces mismos no se exportan como URLs clicables.',
      },
      {
        question: '¿Puedo usar el texto extraído en Word o Google Docs?',
        answer:
          'Sí. Pega el texto copiado directamente, o abre el archivo .txt descargado y copia su contenido en cualquier procesador de textos.',
      },
      {
        question: '¿Por qué algunos caracteres se ven confusos en el texto extraído?',
        answer:
          'Algunos PDF incrustan fuentes personalizadas sin un mapeo Unicode adecuado, así que PDF.js no puede relacionar los glifos con los caracteres correctos.',
      },
      {
        question: '¿Extraer texto cambia mi PDF original?',
        answer:
          'No. La extracción es de solo lectura; tu archivo PDF original nunca se modifica.',
      },
      {
        question: '¿El Extractor de texto de PDF puede extraer texto de formularios y anotaciones?',
        answer:
          'Extrae la capa principal de texto incrustado de cada página; los valores de formularios completados y las notas de anotación pueden no aparecer si se guardan por separado.',
      },
    ],
  },
};
