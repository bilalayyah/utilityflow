import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Filled by Phase 1 translation. Every tool: slug, name, shortDescription,
 * keywords (9), seo, intro, instructions (6), examples (2), benefits (4),
 * useCases (4), faqs (20). Slugs must be unique, lowercase, hyphenated,
 * and must not collide with English slugs or reserved paths.
 */
export const ES_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'contador-de-palabras',
    name: 'Contador de Palabras',
    shortDescription:
      'Cuenta palabras, caracteres, oraciones, párrafos, tiempo de lectura y las palabras clave más repetidas al instante.',
    keywords: [
      'contador de palabras',
      'contar palabras online',
      'contar palabras de un texto',
      'calculadora de tiempo de lectura',
      'contador de oraciones',
      'contador de párrafos',
      'contador de palabras gratis',
      'calculadora de tiempo de habla',
      'contar caracteres y palabras',
    ],
    seo: {
      title: 'Contador de Palabras: Palabras y Lectura | UtilityFlow',
      description:
        'Cuenta palabras, caracteres, oraciones y párrafos al instante y consulta el tiempo de lectura y de habla estimado, calculado en tu navegador sin subir nada.',
      primaryKeyword: 'contador de palabras',
      secondaryKeywords: ['contador de palabras online', 'herramienta de conteo de palabras', 'estimador de tiempo de lectura', 'contador de párrafos'],
      longTailKeywords: ['contar palabras y caracteres online gratis', 'estimar tiempo de lectura y de habla de un texto', 'contador de palabras en el navegador sin subir archivos', 'verificar cantidad de palabras de un ensayo online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mide el número exacto de palabras, el total de caracteres, la densidad de oraciones y la duración estimada de lectura y de habla en tiempo real, sin subir tu borrador a ningún servidor.',
    instructions: [
      {
        title: 'Pega o escribe tu borrador',
        description:
          'Escribe el texto directamente en el editor o haz clic en Cargar ejemplo para ver cómo se actualizan los conteos.',
      },
      {
        title: 'Revisa los totales estructurales en vivo',
        description:
          'Consulta las palabras, los caracteres con y sin espacios, las oraciones, los párrafos y el tiempo estimado de lectura en la barra de resumen.',
      },
      {
        title: 'Consulta el tiempo de lectura y de habla',
        description:
          'Ve el tiempo estimado de lectura a 225 palabras por minuto y el tiempo de habla a 130 palabras por minuto para ajustar el ritmo de ensayos, charlas y guiones de video antes de publicar.',
      },
      {
        title: 'Revisa los términos repetidos',
        description:
          'Explora el panel de palabras más frecuentes para detectar repeticiones no deseadas y afinar tu redacción antes de finalizar el borrador.',
      },
      {
        title: 'Copia o descarga tu texto',
        description:
          'Usa el botón de copiar o descarga una copia de respaldo en formato .txt de tu borrador cuando estés conforme con los conteos.',
      },
      {
        title: 'Soluciona conteos inesperados',
        description:
          'Si un conteo parece incorrecto, revisa si hay caracteres ocultos pegados o líneas en blanco adicionales; eliminar los saltos de línea extra suele corregir los totales de párrafos y oraciones.',
      },
    ],
    examples: [
      {
        title: 'Verificación de la longitud de una introducción de blog',
        input: 'Los sitios web estáticos reducen la latencia del servidor. Los lectores se quedan cuando el texto es conciso.',
        output: '18 palabras · 109 caracteres · 2 oraciones · 5 s de lectura',
        explanation:
          'Ideal para verificar el ritmo del título y del párrafo inicial antes de publicar.',
      },
      {
        title: 'Verificación del límite de palabras de un ensayo',
        input: 'Párrafo 1 (240 palabras)\n\nPárrafo 2 (255 palabras)',
        output: '495 palabras · 2 párrafos · 2 min 12 s de lectura',
        explanation: 'Confirma un objetivo de 500 palabras para una beca o una tarea, con margen de sobra.',
      },
    ],
    benefits: [
      'Se actualiza al instante con cada tecla, en la memoria del navegador',
      'Calcula el tiempo de lectura (225 palabras por minuto) y el tiempo de habla (130 palabras por minuto)',
      'Muestra tus seis palabras más frecuentes para detectar frases repetitivas',
      'Exporta copias de respaldo en texto plano directamente como archivo .txt',
    ],
    useCases: [
      'Cumplir objetivos estrictos de palabras en ensayos académicos y solicitudes de becas',
      'Calcular la duración de charlas de conferencias, guiones de video e introducciones de pódcast',
      'Auditar borradores de artículos y páginas de destino para una estructura concisa',
      'Verificar la longitud del texto de un boletín antes de programar campañas',
    ],
    faqs: [
      {
        question: '¿Cómo calcula el Contador de Palabras el tiempo de lectura y de habla?',
        answer:
          'El tiempo de lectura usa un ritmo promedio de lectura silenciosa de un adulto de 225 palabras por minuto, mientras que el tiempo de habla usa un ritmo de presentación conversacional de 130 palabras por minuto.',
      },
      {
        question: '¿Las palabras con guion se cuentan como una palabra o como dos?',
        answer:
          'Los tokens estándar separados por espacios en blanco se cuentan como una sola palabra, igual que en la mayoría de los procesadores de texto de escritorio.',
      },
      {
        question: '¿Mi texto se guarda o se envía a algún lugar?',
        answer:
          'No. Todo el conteo se ejecuta localmente dentro de la pestaña de tu navegador y tu texto desaparece en cuanto limpias o cierras la página.',
      },
      {
        question: '¿Cuál es la diferencia entre el Contador de Palabras y el Contador de Caracteres?',
        answer:
          'El Contador de Palabras se centra en los totales de palabras, los párrafos, la duración de habla y las palabras más repetidas, mientras que el Contador de Caracteres desglosa el tamaño en bytes UTF-8 y los límites de caracteres de redes sociales y SEO.',
      },
      {
        question: '¿El Contador de Palabras es gratis?',
        answer:
          'Sí. El Contador de Palabras es completamente gratis, sin registro, sin límite de palabras y sin necesidad de cuenta.',
      },
      {
        question: '¿El Contador de Palabras funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, todo el conteo se ejecuta localmente en tu navegador, así que sigue funcionando sin conexión a internet.',
      },
      {
        question: '¿Cómo se cuentan las oraciones?',
        answer:
          'Las oraciones se cuentan en los signos de puntuación que terminan una oración, como puntos, signos de exclamación y signos de interrogación, por lo que abreviaturas como Dr. pueden sumar una oración extra.',
      },
      {
        question: '¿Qué cuenta como palabra en el Contador de Palabras?',
        answer:
          'Cualquier secuencia de caracteres separada por espacios en blanco cuenta como una palabra, incluidos los números, los términos con guion y las palabras con apóstrofos.',
      },
      {
        question: '¿Puedo contar las palabras de un PDF o de un documento de Word?',
        answer:
          'No directamente. Copia el texto de tu documento y pégalo en el Contador de Palabras para ver sus conteos al instante.',
      },
      {
        question: '¿El Contador de Palabras cuenta los caracteres con espacios?',
        answer:
          'Sí. Muestra los caracteres con y sin espacios, para que puedas verificar límites que cuenten de cualquiera de las dos formas.',
      },
      {
        question: '¿Qué tan precisa es la estimación del tiempo de lectura?',
        answer:
          'Es una estimación basada en un ritmo promedio de lectura silenciosa de 225 palabras por minuto; cada persona puede leer más rápido o más lento.',
      },
      {
        question: '¿En qué se basa la estimación del tiempo de habla?',
        answer:
          'El tiempo de habla usa un ritmo de presentación conversacional de 130 palabras por minuto, adecuado para charlas, guiones de video e introducciones de pódcast.',
      },
      {
        question: '¿El Contador de Palabras funciona con otros idiomas?',
        answer:
          'Sí. Cuenta las palabras separadas por espacios en blanco en cualquier idioma, aunque las estimaciones de tiempo de lectura están calibradas para textos en inglés.',
      },
      {
        question: '¿Puedo verificar un límite de palabras para un ensayo o una tarea?',
        answer:
          'Sí. Pega tu ensayo y compara el total de palabras en vivo con tu objetivo; la barra de resumen muestra el conteo exacto mientras editas.',
      },
      {
        question: '¿El Contador de Palabras cuenta los números como palabras?',
        answer:
          'Sí. Los números independientes separados por espacios se cuentan como palabras, igual que en la mayoría de los procesadores de texto de escritorio.',
      },
      {
        question: '¿Por qué mi conteo difiere del de Microsoft Word o Google Docs?',
        answer:
          'Cada herramienta divide las palabras con guion, los guiones largos y los números de forma ligeramente distinta, por lo que pequeñas diferencias de unas pocas palabras son normales.',
      },
      {
        question: '¿Para qué sirven las palabras más frecuentes que se muestran?',
        answer:
          'El panel enumera tus seis palabras más repetidas para que puedas detectar términos sobreusados y variar tu vocabulario antes de publicar.',
      },
      {
        question: '¿Puedo contar las palabras de un solo párrafo?',
        answer:
          'Sí. Pega solo ese párrafo en el editor y los totales en vivo reflejarán únicamente el texto que ingresaste.',
      },
      {
        question: '¿Puedo usar el Contador de Palabras para subtítulos de redes sociales?',
        answer:
          'Sí. Pega tu subtítulo para verificar su total de palabras y su tiempo de lectura, y usa el Contador de Caracteres si también necesitas verificar los límites de caracteres.',
      },
      {
        question: '¿Puedo usar el Contador de Palabras en mi teléfono?',
        answer:
          'Sí. Funciona en cualquier navegador móvil moderno con los mismos conteos en vivo, el tiempo de lectura y las opciones de copia.',
      },
    ],
  },
  'character-counter': {
    slug: 'contador-de-caracteres',
    name: 'Contador de Caracteres',
    shortDescription:
      'Mide la longitud exacta en caracteres con y sin espacios, bytes UTF-8 y los límites de caracteres de redes sociales y SEO.',
    keywords: [
      'contador de caracteres',
      'contador de letras',
      'verificador de longitud de meta descripción',
      'contador de bytes utf8',
      'herramienta de límite de caracteres',
      'contar caracteres online',
      'verificador de longitud de texto',
      'verificador de longitud de título seo',
      'contador de caracteres de sms',
    ],
    seo: {
      title: 'Contador de Caracteres: Límites y Bytes | UtilityFlow',
      description:
        'Cuenta caracteres con y sin espacios, letras, dígitos y bytes UTF-8, y sigue tu progreso frente a los límites de SEO y redes sociales, todo en tu navegador.',
      primaryKeyword: 'contador de caracteres',
      secondaryKeywords: ['conteo de caracteres online', 'calculadora de longitud de texto', 'longitud de título meta', 'verificador de longitud de texto'],
      longTailKeywords: ['contar caracteres sin espacios online', 'verificar límite de caracteres de meta descripción seo', 'calcular longitud en bytes utf8 de un texto', 'verificar límite de caracteres de twitter online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Sigue los conteos exactos de caracteres, letras, dígitos numéricos, espacios en blanco y tamaños en bytes UTF-8 mientras monitoreas las barras de progreso en vivo para fragmentos de SEO, segmentos de SMS y redes sociales.',
    instructions: [
      {
        title: 'Escribe o pega tu texto',
        description:
          'Escribe un título meta, un subtítulo para redes sociales, una alerta por SMS o una cadena de un campo de formulario en el cuadro de texto.',
      },
      {
        title: 'Revisa las métricas de caracteres y bytes',
        description:
          'Compara el total de caracteres con espacios, los caracteres sin espacios, las letras, los dígitos y el peso en bytes UTF-8.',
      },
      {
        title: 'Verifica los límites de cada plataforma',
        description:
          'Revisa los medidores de progreso en vivo para confirmar que tu texto cabe dentro de los límites de SEO, SMS, X, Instagram o LinkedIn.',
      },
      {
        title: 'Usa el tamaño en bytes para los límites técnicos',
        description:
          'Consulta el total de bytes UTF-8 al validar columnas de bases de datos, cargas de API o campos de archivo que limitan por bytes en lugar de caracteres.',
      },
      {
        title: 'Compara con y sin espacios',
        description:
          'Alterna entre los totales con espacios y sin espacios cuando un formulario o una plataforma cuenta solo los caracteres sin espacios en blanco.',
      },
      {
        title: 'Soluciona un conteo que parece incorrecto',
        description:
          'Si un conteo parece incorrecto, revisa si hay caracteres invisibles como espacios finales o saltos de línea pegados, que se cuentan en el total con espacios.',
      },
    ],
    examples: [
      {
        title: 'Verificación de un título meta',
        input: 'Contador de Palabras y Tiempo de Lectura',
        output: '40 / 60 caracteres (quedan 20)',
        explanation: 'Cabe cómodamente dentro de la ventana típica de 60 caracteres que muestran los motores de búsqueda para los títulos.',
      },
      {
        title: 'Verificación de bytes de un emoji multibyte',
        input: 'Día de lanzamiento 🚀',
        output: '21 unidades de código UTF-16 · 24 bytes UTF-8',
        explanation: 'Muestra la diferencia exacta en el tamaño de bytes cuando se incluyen caracteres no ASCII.',
      },
    ],
    benefits: [
      'Registra tanto los caracteres con espacios como el conteo de caracteres sin espacios en blanco',
      'Mide la longitud exacta en bytes UTF-8 para los límites de columnas de bases de datos y cargas de API',
      'Incluye indicadores visuales de límite para etiquetas SEO, SMS, X, Instagram y LinkedIn',
      'Sin subidas al servidor ni registro de caracteres',
    ],
    useCases: [
      'Escribir etiquetas de título y meta descripciones para motores de búsqueda sin truncamiento',
      'Redactar notificaciones por SMS dentro del límite de 160 caracteres de un solo segmento',
      'Validar la longitud de un campo VARCHAR de base de datos en bytes UTF-8',
      'Crear subtítulos concisos para redes sociales antes del corte',
    ],
    faqs: [
      {
        question: '¿Por qué los bytes UTF-8 a veces son más altos que el conteo de caracteres?',
        answer:
          'Los caracteres ASCII estándar en inglés ocupan 1 byte cada uno en UTF-8, mientras que los caracteres acentuados, las escrituras no latinas y los emojis requieren de 2 a 4 bytes por carácter.',
      },
      {
        question: '¿El contador de caracteres incluye los saltos de línea?',
        answer:
          'Sí. Los caracteres de salto de línea se cuentan en la métrica "Con espacios" y se excluyen de la métrica "Sin espacios".',
      },
      {
        question: '¿Qué pasa si supero la barra de límite de una plataforma?',
        answer:
          'El indicador de progreso se vuelve rojo y muestra el número exacto de caracteres que te pasaste, para que sepas cuánto debes recortar.',
      },
      {
        question: '¿El Contador de Caracteres es gratis?',
        answer:
          'Sí. El Contador de Caracteres es completamente gratis, sin registro, sin límite de caracteres y sin necesidad de cuenta.',
      },
      {
        question: '¿Cuál es la diferencia entre caracteres con y sin espacios?',
        answer:
          'Los caracteres con espacios incluyen cada espacio entre las palabras, mientras que los caracteres sin espacios los excluyen, lo cual importa cuando una plataforma cuenta solo los caracteres visibles.',
      },
      {
        question: '¿El Contador de Caracteres cuenta los emojis?',
        answer:
          'Sí. Cada emoji cuenta como caracteres y, como la mayoría de los emojis usan varios bytes UTF-8, el total de bytes será mayor que el conteo de caracteres.',
      },
      {
        question: '¿Cuántos caracteres puedo pegar en el Contador de Caracteres?',
        answer:
          'No hay un límite establecido. El conteo se ejecuta por completo en tu navegador, así que incluso los documentos muy largos se miden al instante.',
      },
      {
        question: '¿Cuál es el límite de caracteres de un título meta para SEO?',
        answer:
          'Los motores de búsqueda suelen mostrar alrededor de 50 a 60 caracteres de una etiqueta de título, por lo que mantener los títulos en ese rango evita el truncamiento en los resultados.',
      },
      {
        question: '¿Cuál es el límite de caracteres de una meta descripción?',
        answer:
          'Los motores de búsqueda suelen mostrar unos 150 a 160 caracteres de una meta descripción, por lo que la herramienta sigue tu progreso hacia ese rango.',
      },
      {
        question: '¿Cuántos caracteres caben en un solo SMS?',
        answer:
          'Un segmento estándar de SMS admite 160 caracteres con el alfabeto GSM básico; los mensajes más largos se dividen en varios segmentos.',
      },
      {
        question: '¿El Contador de Caracteres cuenta las tabulaciones y los saltos de línea?',
        answer:
          'Sí. Las tabulaciones y los saltos de línea se cuentan en el total con espacios, por lo que el texto pegado con líneas en blanco adicionales mostrará un conteo mayor.',
      },
      {
        question: '¿El Contador de Caracteres incluye la puntuación en el conteo?',
        answer:
          'Sí. Los signos de puntuación cuentan como caracteres y se incluyen tanto en los totales con espacios como sin espacios.',
      },
      {
        question: '¿Qué límite de caracteres usa X (Twitter)?',
        answer:
          'Las publicaciones de X están limitadas a 280 caracteres para la mayoría de las cuentas, y las barras de límite de esta herramienta muestran tu progreso hacia ese umbral.',
      },
      {
        question: '¿Puedo verificar la longitud de un subtítulo de Instagram?',
        answer:
          'Sí. Pega tu subtítulo y observa el medidor de límite de Instagram; los subtítulos están limitados a 2200 caracteres.',
      },
      {
        question: '¿El Contador de Caracteres funciona con texto en otros idiomas?',
        answer:
          'Sí. Cuenta caracteres en cualquier escritura, y el total de bytes UTF-8 muestra el tamaño real de almacenamiento de las letras acentuadas y los caracteres no latinos.',
      },
      {
        question: '¿Puedo usar el Contador de Caracteres para una publicación de LinkedIn?',
        answer:
          'Sí. Pega tu publicación y revisa el medidor de límite de LinkedIn, que sigue el límite de 3000 caracteres por publicación.',
      },
      {
        question: '¿El Contador de Caracteres guarda o sube mi texto?',
        answer:
          'No. Todo el conteo ocurre localmente en tu navegador y tu texto nunca se sube, se almacena ni se comparte.',
      },
      {
        question: '¿Por qué mi conteo difiere del de Microsoft Word?',
        answer:
          'Cada herramienta trata los saltos de línea, las tabulaciones y los caracteres de formato ocultos de forma distinta, por lo que pequeñas diferencias entre contadores son normales.',
      },
      {
        question: '¿Qué cuenta como letra y qué como dígito?',
        answer:
          'Las letras son caracteres alfabéticos en cualquier escritura, mientras que los dígitos son caracteres numéricos del 0 al 9; ambos se muestran como totales separados.',
      },
      {
        question: '¿Puedo verificar el conteo de caracteres de un campo de contraseña o nombre de usuario?',
        answer:
          'Sí. Pega el valor en la herramienta para verificar que cumple con un requisito de longitud mínima o máxima antes de enviar un formulario.',
      },
    ],
  },
  'case-converter': {
    slug: 'convertidor-de-mayusculas-y-minusculas',
    name: 'Convertidor de Mayúsculas y Minúsculas',
    shortDescription:
      'Convierte texto entre MAYÚSCULAS, minúsculas, Título, Oración, camelCase, snake_case y kebab-case.',
    keywords: [
      'convertidor de mayúsculas',
      'convertidor de título',
      'mayúsculas a minúsculas',
      'convertidor camelCase',
      'generador snake case',
      'convertidor a mayúsculas',
      'convertidor a minúsculas',
      'convertidor de caso oración',
      'convertidor PascalCase',
    ],
    seo: {
      title: 'Convertidor de Mayúsculas y Minúsculas | UtilityFlow',
      description:
        'Transforma texto entre mayúsculas, minúsculas, Título, Oración, camelCase, PascalCase, snake_case y kebab-case en un clic, directamente en tu navegador.',
      primaryKeyword: 'convertidor de mayúsculas',
      secondaryKeywords: ['convertidor de título', 'herramienta de caso oración', 'cambiar mayúsculas de texto', 'mayúsculas a minúsculas'],
      longTailKeywords: ['convertir texto en mayúsculas a caso oración', 'convertir texto a camelCase y snake_case', 'herramienta online de capitalización de títulos', 'cambiar mayúsculas a minúsculas online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrige texto escrito por accidente con el Bloqueo de mayúsculas, estandariza los titulares de artículos en formato de Título o formatea identificadores de variables en camelCase, PascalCase, snake_case o kebab-case con un solo clic.',
    instructions: [
      {
        title: 'Pega o escribe tu texto',
        description:
          'Inserta títulos, párrafos o cadenas de identificadores en el editor.',
      },
      {
        title: 'Elige un estilo de mayúsculas',
        description:
          'Haz clic en cualquier botón de transformación, como Título, Oración, camelCase o snake_case, para actualizar el texto de inmediato.',
      },
      {
        title: 'Copia el resultado formateado',
        description:
          'Usa el botón Copiar resultado para transferir el texto convertido a tu portapapeles.',
      },
      {
        title: 'Corrige texto en MAYÚSCULAS en un clic',
        description:
          'Pega el texto escrito con el Bloqueo de mayúsculas activado y elige Oración para restaurar la capitalización normal en cada oración.',
      },
      {
        title: 'Convierte identificadores para código',
        description:
          'Pega una etiqueta sencilla como "estado de facturación de la cuenta de usuario" y elige camelCase, PascalCase, snake_case o kebab-case para obtener un nombre de variable listo para usar.',
      },
      {
        title: 'Soluciona una capitalización extraña',
        description:
          'Si el formato de Título deja una palabra en minúscula, probablemente sea una palabra menor como "y" o "de"; vuelve a escribirla o aplica Mayúsculas solo a esa palabra.',
      },
    ],
    examples: [
      {
        title: 'Corrección de prosa en mayúsculas por accidente',
        input: 'ESTE INFORME RESUME LOS RESULTADOS DEL CUARTO TRIMESTRE. TODAS LAS MÉTRICAS SON FINALES.',
        output: 'Este informe resume los resultados del cuarto trimestre. Todas las métricas son finales.',
        explanation: 'El caso oración pone en minúscula todas las letras y escribe en mayúscula el inicio de cada oración.',
      },
      {
        title: 'Formato de identificadores de código',
        input: 'user account billing status',
        output: 'userAccountBillingStatus (camelCase) / user_account_billing_status (snake_case)',
        explanation: 'Convierte etiquetas sencillas en inglés directamente a las convenciones estándar de programación.',
      },
    ],
    benefits: [
      'Admite 10 formatos de mayúsculas para prosa y desarrollo en un solo espacio de trabajo',
      'El formato de Título inteligente mantiene en minúscula las preposiciones y conjunciones menores',
      'Maneja párrafos de varias oraciones y saltos de línea sin problemas',
      'Se ejecuta localmente en tu navegador con copia instantánea en un clic',
    ],
    useCases: [
      'Convertir correos escritos por accidente en MAYÚSCULAS de nuevo a caso oración',
      'Dar formato consistente a titulares de blogs y títulos de YouTube',
      'Cambiar el nombre de columnas de bases de datos, clases CSS o variables de JavaScript',
      'Normalizar encabezados de hojas de cálculo antes de importar archivos CSV',
    ],
    faqs: [
      {
        question: '¿Cómo maneja el formato de Título las palabras cortas como "y" o "de"?',
        answer:
          'El formateador de Título escribe en mayúscula la primera y la última palabra del título, pero mantiene en minúscula los artículos, conjunciones y preposiciones cortas estándar (como a, un, y, de, en, para).',
      },
      {
        question: '¿Puedo convertir un identificador snake_case o camelCase existente a otro formato?',
        answer:
          'Sí. Los límites de palabra en guiones bajos, guiones y transiciones de camelCase se dividen automáticamente antes de aplicar la nueva regla de mayúsculas.',
      },
      {
        question: '¿El caso oración conserva varios párrafos?',
        answer:
          'Sí. La capitalización se reinicia al inicio del texto, después de la puntuación que termina una oración y al inicio de las líneas nuevas.',
      },
      {
        question: '¿El Convertidor de Mayúsculas y Minúsculas es gratis?',
        answer:
          'Sí. El Convertidor de Mayúsculas y Minúsculas es completamente gratis, sin registro, sin límite de longitud de texto y sin necesidad de cuenta.',
      },
      {
        question: '¿Cuál es la diferencia entre Título y caso oración?',
        answer:
          'El formato de Título escribe en mayúscula la mayoría de las palabras de un encabezado, mientras que el caso oración solo escribe en mayúscula la primera palabra de cada oración y los nombres propios, como una oración normal.',
      },
      {
        question: '¿Para qué se usa camelCase?',
        answer:
          'camelCase es el estilo estándar de nombres para variables y funciones en JavaScript y muchos otros lenguajes de programación, por ejemplo userAccountStatus.',
      },
      {
        question: '¿Para qué se usa snake_case?',
        answer:
          'snake_case separa las palabras con guiones bajos y se usa comúnmente para variables de Python, columnas de bases de datos y nombres de archivos, por ejemplo user_account_status.',
      },
      {
        question: '¿Para qué se usa kebab-case?',
        answer:
          'kebab-case separa las palabras con guiones y se usa comúnmente para URL, nombres de clases CSS y atributos HTML, por ejemplo user-account-status.',
      },
      {
        question: '¿Para qué se usa PascalCase?',
        answer:
          'PascalCase escribe en mayúscula cada palabra sin separadores y se usa comúnmente para nombres de clases y de componentes, por ejemplo UserAccountStatus.',
      },
      {
        question: '¿El Convertidor de Mayúsculas puede corregir texto escrito en MAYÚSCULAS?',
        answer:
          'Sí. Pega el texto en mayúsculas y elige caso oración o minúsculas para restaurar la capitalización normal en un clic.',
      },
      {
        question: '¿El Convertidor de Mayúsculas funciona con números y símbolos?',
        answer:
          'Sí. Los números, la puntuación y los símbolos pasan sin cambios; solo se convierten las letras.',
      },
      {
        question: '¿Puedo convertir un párrafo completo a la vez?',
        answer:
          'Sí. Pega el párrafo completo y el convertidor aplica el caso elegido en todas sus oraciones y saltos de línea.',
      },
      {
        question: '¿El formato de Título escribe en mayúscula las palabras después de dos puntos?',
        answer:
          'Las palabras después de dos puntos se tratan como las demás palabras del título, así que las palabras principales se escriben en mayúscula y las menores quedan en minúscula.',
      },
      {
        question: '¿El Convertidor de Mayúsculas maneja otros idiomas?',
        answer:
          'Sí. Convierte letras en cualquier idioma que use formas en mayúscula y minúscula, aunque las reglas de palabras menores del formato de Título se basan en el inglés.',
      },
      {
        question: '¿Puedo convertir snake_case de nuevo a palabras normales?',
        answer:
          'Sí. Pega el identificador y elige caso oración o Título; los guiones bajos se tratan como separadores de palabras y se reemplazan con espacios.',
      },
      {
        question: '¿Qué pasa con los saltos de línea al convertir el caso?',
        answer:
          'Los saltos de línea se conservan exactamente, así que el texto de varias líneas mantiene su estructura después de la conversión.',
      },
      {
        question: '¿El Convertidor de Mayúsculas guarda o sube mi texto?',
        answer:
          'No. La conversión se ejecuta localmente en tu navegador y tu texto nunca se sube, se almacena ni se comparte.',
      },
      {
        question: '¿Puedo convertir texto que ya tiene casos mezclados?',
        answer:
          'Sí. El convertidor primero divide las palabras en guiones bajos, guiones y transiciones de caso, por lo que la entrada con casos mezclados se convierte sin problemas.',
      },
      {
        question: '¿Puedo usar el Convertidor de Mayúsculas para títulos de YouTube?',
        answer:
          'Sí. Pega el título de tu video y aplica el formato de Título para un estilo de titular consistente y profesional.',
      },
      {
        question: '¿El Convertidor de Mayúsculas funciona en mi teléfono?',
        answer:
          'Sí. Funciona en cualquier navegador móvil moderno con las mismas conversiones en un clic y el botón de copiar.',
      },
    ],
  },
  'remove-duplicate-lines': {
    slug: 'eliminar-lineas-duplicadas',
    name: 'Eliminar Líneas Duplicadas',
    shortDescription:
      'Elimina duplicados de listas y registros con opciones de distinción entre mayúsculas y minúsculas, recorte de espacios y orden alfabético.',
    keywords: [
      'eliminar líneas duplicadas',
      'eliminar duplicados de lista online',
      'filtro de líneas únicas',
      'eliminar filas repetidas',
      'quitar duplicados de una lista',
      'eliminar duplicados de lista de correos',
      'líneas únicas online',
      'eliminar líneas repetidas',
      'limpiar entradas duplicadas',
    ],
    seo: {
      title: 'Eliminar Líneas Duplicadas de Listas | UtilityFlow',
      description:
        'Elimina líneas repetidas de listas, correos, URL o registros al instante, con recorte de espacios, distinción de mayúsculas y orden opcionales, en tu navegador.',
      primaryKeyword: 'eliminar líneas duplicadas',
      secondaryKeywords: ['eliminador de líneas duplicadas', 'eliminar duplicados de lista de texto', 'herramienta de líneas únicas', 'eliminar entradas duplicadas'],
      longTailKeywords: ['eliminar líneas duplicadas manteniendo el orden original', 'eliminar duplicados de lista de correos sin distinguir mayúsculas', 'limpiar filas repetidas de texto online', 'eliminar duplicados de lista de correos online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Limpia listas desordenadas, palabras clave exportadas, direcciones de correo o registros de servidor eliminando las entradas duplicadas, con control del recorte de espacios, la distinción entre mayúsculas y minúsculas y el orden de salida.',
    instructions: [
      {
        title: 'Pega tu lista separada por líneas',
        description:
          'Agrega cualquier lista con un elemento por línea en el cuadro de Líneas originales.',
      },
      {
        title: 'Configura las reglas de coincidencia',
        description:
          'Activa Distingue mayúsculas y minúsculas, Recortar espacios en blanco, Eliminar líneas vacías u Ordenar alfabéticamente según qué tan estricta deba ser la coincidencia.',
      },
      {
        title: 'Copia las líneas únicas',
        description:
          'Revisa cuántos duplicados se eliminaron en el encabezado de resumen y haz clic en Copiar para tomar la lista limpia.',
      },
      {
        title: 'Ordena la lista limpia alfabéticamente',
        description:
          'Activa Ordenar alfabéticamente si quieres las líneas únicas ordenadas de la A a la Z en lugar de mantener el orden de su primera aparición.',
      },
      {
        title: 'Revisa los conteos del resumen',
        description:
          'Revisa el conteo de líneas originales, el conteo de líneas únicas y los duplicados eliminados en el encabezado de resumen para confirmar que la limpieza funcionó como esperabas.',
      },
      {
        title: 'Soluciona líneas que no se eliminaron',
        description:
          'Si dos líneas que se ven idénticas permanecen, revisa si hay espacios finales ocultos o diferencias de mayúsculas, luego activa Recortar espacios en blanco o desactiva Distingue mayúsculas y minúsculas y ejecútalo de nuevo.',
      },
    ],
    examples: [
      {
        title: 'Limpieza de una lista de correos',
        input: 'alex@example.com\nsam@example.com\nAlex@example.com\n  sam@example.com  ',
        output: 'alex@example.com\nsam@example.com',
        explanation:
          'Con el recorte de espacios activado y sin distinción de mayúsculas y minúsculas, los espacios finales y las variantes de capitalización se combinan sin problemas.',
      },
      {
        title: 'Limpieza de una lista de palabras clave',
        input: 'seo\nmarketing\nseo\ncontenido\nmarketing',
        output: 'seo\nmarketing\ncontenido',
        explanation:
          'Mantiene la primera aparición de cada término y elimina las repeticiones posteriores, conservando el orden original.',
      },
    ],
    benefits: [
      'Conserva el orden de la primera aparición por defecto u ordena alfabéticamente si lo pides',
      'Muestra el conteo exacto de líneas originales, líneas únicas y duplicados eliminados',
      'Maneja sin problemas listas grandes de varios miles de líneas en la memoria del cliente',
      'Mantiene las listas privadas y las exportaciones de clientes fuera de servidores de terceros',
    ],
    useCases: [
      'Eliminar duplicados de exportaciones de investigación de palabras clave y listas de URL',
      'Limpiar listas de correos de suscriptores antes de importarlas a un CRM',
      'Eliminar entradas repetidas de trazas de errores o IP de archivos de registro',
      'Preparar listas únicas de etiquetas o SKU para hojas de cálculo',
    ],
    faqs: [
      {
        question: '¿Eliminar Líneas Duplicadas conserva mi orden original?',
        answer:
          'Sí. Por defecto mantiene la primera aparición de cada línea única en su orden original. Puedes activar "Ordenar alfabéticamente" cuando también quieras un orden de la A a la Z.',
      },
      {
        question: '¿Cómo afecta Recortar espacios en blanco a la detección de duplicados?',
        answer:
          'Cuando Recortar espacios en blanco está marcado, los espacios iniciales y finales se eliminan antes de verificar la unicidad, lo que evita que elementos como "manzana " y "manzana" se traten como diferentes.',
      },
      {
        question: '¿Qué pasa si quiero conservar variantes de mayúsculas como "EE. UU." y "ee. uu."?',
        answer:
          'Activa la casilla "Distingue mayúsculas y minúsculas" para que las líneas con diferente capitalización se mantengan como entradas separadas.',
      },
      {
        question: '¿La herramienta Eliminar Líneas Duplicadas es gratis?',
        answer:
          'Sí. La herramienta es completamente gratis, sin registro, sin límite de líneas y sin necesidad de cuenta.',
      },
      {
        question: '¿Qué cuenta como una línea duplicada?',
        answer:
          'Dos líneas son duplicadas cuando su texto coincide exactamente según tu configuración actual, incluidas las opciones de distinción de mayúsculas y minúsculas y recorte de espacios que elegiste.',
      },
      {
        question: '¿Funciona con listas separadas por comas?',
        answer:
          'No directamente. La herramienta compara líneas completas, así que divide primero una lista separada por comas en un elemento por línea y luego pégala.',
      },
      {
        question: '¿Puedo eliminar líneas duplicadas de un archivo CSV?',
        answer:
          'Sí. Copia la columna o las filas de tu CSV, pégalas como líneas, elimina los duplicados y pega la lista limpia de nuevo en tu hoja de cálculo.',
      },
      {
        question: '¿Qué pasa con las líneas vacías?',
        answer:
          'Las líneas vacías se tratan como cualquier otra línea, así que activar "Eliminar líneas vacías" las quita de la salida junto con los duplicados.',
      },
      {
        question: '¿Puedo eliminar duplicados de una lista de URL?',
        answer:
          'Sí. Pega una URL por línea y la herramienta elimina las URL repetidas, lo cual es útil para limpiar exportaciones de palabras clave y listas de sitemap.',
      },
      {
        question: '¿Cuántas líneas puedo eliminar duplicados a la vez?',
        answer:
          'No hay un límite establecido. La eliminación de duplicados se ejecuta por completo en tu navegador, por lo que las listas de varios miles de líneas se manejan sin problemas en la memoria del cliente.',
      },
      {
        question: '¿La herramienta conserva la primera o la última aparición de un duplicado?',
        answer:
          'Conserva la primera aparición de cada línea única y elimina las repeticiones posteriores, lo que preserva tu orden original.',
      },
      {
        question: '¿Puedo eliminar direcciones de correo duplicadas de una lista?',
        answer:
          'Sí. Pega una dirección por línea con la distinción de mayúsculas desactivada y el recorte de espacios activado, y las direcciones duplicadas se combinan en una sola entrada.',
      },
      {
        question: '¿El orden alfabético cambia qué líneas se conservan?',
        answer:
          'No. El orden solo reordena las líneas únicas alfabéticamente después de eliminar los duplicados; no cambia qué líneas se consideran duplicadas.',
      },
      {
        question: '¿La herramienta elimina palabras duplicadas dentro de una sola línea?',
        answer:
          'No. Compara líneas completas, así que los duplicados dentro de una línea no se tocan; usa la herramienta Buscar y Reemplazar para la limpieza a nivel de palabra.',
      },
      {
        question: '¿La herramienta funciona con números o direcciones IP?',
        answer:
          'Sí. Funciona cualquier contenido de línea, incluidos números, direcciones IP, SKU y códigos, siempre que cada elemento esté en su propia línea.',
      },
      {
        question: '¿Puedo eliminar líneas duplicadas de registros de servidor?',
        answer:
          'Sí. Pega las líneas del registro y elimínalas para aislar errores únicos o entradas de IP repetidas y solucionar problemas más rápido.',
      },
      {
        question: '¿Eliminar Líneas Duplicadas guarda o sube mi lista?',
        answer:
          'No. La eliminación de duplicados se ejecuta localmente en tu navegador y tu lista nunca se sube, se almacena ni se comparte.',
      },
      {
        question: '¿Qué pasa si mi lista usa punto y coma en lugar de saltos de línea?',
        answer:
          'La herramienta trata cada línea como un elemento, así que reemplaza primero los puntos y comas con saltos de línea y luego pega la lista para eliminar los duplicados.',
      },
      {
        question: '¿Puedo eliminar duplicados manteniendo las líneas en blanco?',
        answer:
          'Sí. Deja "Eliminar líneas vacías" sin marcar y las líneas en blanco se conservarán en la salida junto con los elementos sin duplicar.',
      },
      {
        question: '¿La herramienta funciona en mi teléfono?',
        answer:
          'Sí. Funciona en cualquier navegador móvil moderno con las mismas opciones de eliminación de duplicados y el botón de copiar.',
      },
    ],
  },
  'text-diff-checker': {
    slug: 'comparador-de-textos',
    name: 'Comparador de Textos',
    shortDescription:
      'Compara dos bloques de texto línea por línea para detectar adiciones, eliminaciones y líneas sin cambios.',
    keywords: [
      'comparador de textos',
      'comparar dos textos',
      'herramienta diff online',
      'comparación de textos',
      'comparar dos archivos de texto',
      'herramienta de diferencias online',
      'encontrar diferencias entre textos',
      'herramienta para comparar textos',
      'diff línea por línea',
    ],
    seo: {
      title: 'Comparador de Textos: Encuentra Cambios | UtilityFlow',
      description:
        'Compara dos versiones de texto, código o archivos de configuración lado a lado, con indicadores claros de líneas agregadas y eliminadas, sin subir nada.',
      primaryKeyword: 'comparador de textos',
      secondaryKeywords: ['comparar textos online', 'verificador de diferencias', 'herramienta de diferencia de texto', 'herramienta diff online'],
      longTailKeywords: ['comparar dos archivos de texto línea por línea online', 'comparador de diferencias sin espacios ni mayúsculas', 'herramienta de comparación de texto en el cliente', 'comparar dos versiones de un documento online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Detecta cada inserción, eliminación y edición entre dos versiones de un artículo, una cláusula de contrato o un fragmento de configuración con un motor de diferencias por línea basado en la subsecuencia común más larga.',
    instructions: [
      {
        title: 'Pega ambas versiones',
        description:
          'Pon la copia base en Texto original y la versión revisada en Texto modificado.',
      },
      {
        title: 'Ajusta las opciones de comparación',
        description:
          'Activa Ignorar espacios en blanco o Ignorar mayúsculas y minúsculas si quieres omitir los cambios de solo formato.',
      },
      {
        title: 'Revisa los cambios resaltados',
        description:
          'Explora el panel de Comparación por línea con los indicadores + de agregado, - de eliminado y los números de línea.',
      },
      {
        title: 'Consulta el resumen de cambios',
        description:
          'Lee los conteos de líneas agregadas, eliminadas y sin cambios para tener una idea rápida de cuánto cambió entre las dos versiones.',
      },
      {
        title: 'Compara solo una sección específica',
        description:
          'Pega solo la sección que te interesa en ambos cuadros para comparar un solo párrafo o bloque de configuración sin el resto del documento.',
      },
      {
        title: 'Soluciona una comparación que se ve mal',
        description:
          'Si casi todas las líneas aparecen como cambiadas, los dos textos pueden usar diferentes finales de línea o sangrías; activa Ignorar espacios en blanco y verifica que ambos pegados empiecen en la misma línea.',
      },
    ],
    examples: [
      {
        title: 'Verificación de una revisión de configuración',
        input: 'Original: TTL de caché: 600\nModificado: TTL de caché: 1800',
        output: '- TTL de caché: 600\n+ TTL de caché: 1800',
        explanation: 'Aísla claramente la línea cambiada junto con los números de línea antiguos y nuevos.',
      },
      {
        title: 'Comparación de un cambio de precio',
        input: 'Original: Precio: 100\nModificado: Precio: 120',
        output: '- Precio: 100\n+ Precio: 120',
        explanation: 'Muestra la línea eliminada y la línea agregada con sus símbolos + y - para identificar el cambio al instante.',
      },
    ],
    benefits: [
      'Usa alineación por subsecuencia común más larga (LCS) en lugar de una comparación ingenua por índice',
      'Combina el resaltado de color con los símbolos + / - para accesibilidad de personas con daltonismo',
      'Registra los números de línea originales y modificados lado a lado',
      'Mantiene los borradores confidenciales y los archivos de configuración estrictamente en la memoria local del navegador',
    ],
    useCases: [
      'Revisar ediciones entre dos revisiones de un artículo o contrato',
      'Inspeccionar cambios en fragmentos de configuración .env, JSON o YAML',
      'Verificar actualizaciones de traducción o revisiones de políticas legales',
      'Revisar rápidamente revisiones de borradores de estudiantes o de equipos',
    ],
    faqs: [
      {
        question: '¿Cómo maneja el algoritmo de diferencias las líneas insertadas en medio de un archivo?',
        answer:
          'Como usa un algoritmo de comparación por línea de subsecuencia común más larga (LCS), insertar líneas desplaza los números de línea posteriores sin marcar el resto del archivo como cambiado.',
      },
      {
        question: '¿Qué hace "Ignorar espacios en blanco"?',
        answer:
          'Recorta los espacios iniciales y finales y colapsa varios espacios consecutivos antes de comparar las líneas, lo que ayuda a centrarse en las ediciones de contenido en lugar de los ajustes de sangría.',
      },
      {
        question: '¿Hay un límite de caracteres para comparar textos?',
        answer:
          'La comparación se ejecuta directamente en tu navegador sin límites de servidor; los documentos típicos de hasta varios miles de líneas se comparan casi al instante.',
      },
      {
        question: '¿El Comparador de Textos es gratis?',
        answer:
          'Sí. El Comparador de Textos es completamente gratis, sin registro, sin límite de comparaciones y sin necesidad de cuenta.',
      },
      {
        question: '¿Cuál es la diferencia entre líneas agregadas y eliminadas?',
        answer:
          'Las líneas agregadas aparecen solo en el texto modificado y se marcan con el símbolo +, mientras que las líneas eliminadas aparecen solo en el texto original y se marcan con el símbolo -.',
      },
      {
        question: '¿Puedo comparar dos archivos en lugar de texto pegado?',
        answer:
          'No directamente. Copia el contenido de cada archivo y pégalo en los cuadros de Texto original y Texto modificado para compararlos.',
      },
      {
        question: '¿El Comparador de Textos funciona con código?',
        answer:
          'Sí. Compara cualquier texto basado en líneas, incluido el código fuente, para que puedas detectar las líneas cambiadas entre dos versiones de un script o una hoja de estilos.',
      },
      {
        question: '¿Puedo comparar archivos de configuración JSON o YAML?',
        answer:
          'Sí. Pega cada versión en los dos cuadros y la comparación resaltará las claves, los valores y las líneas cambiadas de tu configuración.',
      },
      {
        question: '¿Qué hace "Ignorar mayúsculas y minúsculas"?',
        answer:
          'Trata las letras mayúsculas y minúsculas como iguales durante la comparación, así que una línea que solo cambió su capitalización no se marcará como diferente.',
      },
      {
        question: '¿Puedo comparar textos en diferentes idiomas?',
        answer:
          'Sí. La comparación funciona con cualquier texto, aunque las líneas en diferentes idiomas naturalmente se mostrarán como cambiadas porque su contenido difiere.',
      },
      {
        question: '¿El Comparador de Textos muestra cambios a nivel de carácter?',
        answer:
          'No. La comparación funciona línea por línea, así que una palabra cambiada marca toda su línea como cambiada; para más detalle, compara las dos líneas por separado.',
      },
      {
        question: '¿Puedo comparar un documento con su versión anterior?',
        answer:
          'Sí. Pega la versión anterior como Texto original y la versión más reciente como Texto modificado para ver cada adición y eliminación.',
      },
      {
        question: '¿Cómo se muestran los números de línea en la comparación?',
        answer:
          'Cada línea conserva su propio número de su texto original, para que puedas rastrear una línea cambiada hasta su posición exacta en cualquiera de las dos versiones.',
      },
      {
        question: '¿El Comparador de Textos guarda o sube mi texto?',
        answer:
          'No. La comparación se ejecuta localmente en tu navegador y tus textos nunca se suben, se almacenan ni se comparten.',
      },
      {
        question: '¿Puedo comparar contratos legales con el Comparador de Textos?',
        answer:
          'Sí. Pega las dos versiones del contrato para detectar cláusulas cambiadas, aunque siempre debes pedirle a un abogado que revise los cambios legales importantes.',
      },
      {
        question: '¿Qué pasa si pego el mismo texto en ambos cuadros?',
        answer:
          'La comparación mostrará cero líneas agregadas y cero líneas eliminadas, confirmando que los dos textos son idénticos.',
      },
      {
        question: '¿Puedo comparar textos con diferentes finales de línea?',
        answer:
          'Sí. Si los finales de línea difieren, la comparación puede marcar líneas como cambiadas; activar Ignorar espacios en blanco suele eliminar estas diferencias de solo formato.',
      },
      {
        question: '¿El Comparador de Textos funciona con documentos grandes?',
        answer:
          'Sí. Los documentos de hasta varios miles de líneas se comparan casi al instante en el navegador, sin subir nada al servidor.',
      },
      {
        question: '¿Puedo usar el Comparador de Textos para revisiones de traducción?',
        answer:
          'Sí. Pega la traducción original y la traducción revisada para revisar cada línea editada lado a lado.',
      },
      {
        question: '¿El Comparador de Textos funciona en mi teléfono?',
        answer:
          'Sí. Funciona en cualquier navegador móvil moderno con la misma comparación lado a lado y el mismo resaltado.',
      },
    ],
  },
  'whitespace-remover': {
    slug: 'eliminador-de-espacios-en-blanco',
    name: 'Eliminador de Espacios en Blanco y Saltos de Línea',
    shortDescription:
      'Elimina espacios extra, tabulaciones, líneas en blanco y saltos de línea no deseados de texto copiado de PDF o web.',
    keywords: [
      'eliminador de espacios en blanco',
      'eliminar espacios extra',
      'eliminador de saltos de línea',
      'eliminar líneas en blanco',
      'limpiar texto copiado de pdf',
      'eliminar espacios finales',
      'corregir saltos de línea de pdf',
      'colapsar varios espacios',
      'limpiar texto online',
    ],
    seo: {
      title: 'Eliminador de Espacios en Blanco Online | UtilityFlow',
      description:
        'Elimina espacios extra, tabulaciones, espacios finales, líneas en blanco y saltos de línea rotos de PDF en tu navegador: rápido, gratis y privado, sin registro.',
      primaryKeyword: 'eliminador de espacios en blanco',
      secondaryKeywords: ['eliminar espacios extra', 'eliminar saltos de línea', 'limpiar espacios en blanco de texto', 'eliminar líneas en blanco'],
      longTailKeywords: ['eliminar espacios extra y líneas en blanco online', 'corregir saltos de línea al copiar de un pdf', 'convertir tabulaciones y varios espacios en un solo espacio', 'eliminar espacios finales del texto copiado'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Limpia el texto desordenado copiado de PDF, correos, hojas de cálculo o páginas web colapsando los espacios repetidos, convirtiendo las tabulaciones, recortando los bordes de las líneas y normalizando los saltos de línea.',
    instructions: [
      {
        title: 'Pega texto sin formato',
        description:
          'Coloca en Texto de entrada el texto que tenga espacios dobles, tabulaciones sueltas o saltos de línea rotos.',
      },
      {
        title: 'Elige cómo se manejan los espacios y las tabulaciones',
        description:
          'Colapsa las series de varios espacios en uno, convierte las tabulaciones en espacios simples y recorta los espacios iniciales y finales de cada línea.',
      },
      {
        title: 'Elige una opción de salto de línea',
        description:
          'Conserva los saltos de párrafo, elimina solo las líneas en blanco, reemplaza los saltos de línea con espacios para volver a unir oraciones cortadas o elimina todos los saltos para formar una sola línea continua.',
      },
      {
        title: 'Revisa el resultado limpio',
        description:
          'Verifica el resultado en el panel de salida y el conteo de caracteres que muestra exactamente cuántos caracteres se eliminaron durante la limpieza.',
      },
      {
        title: 'Copia el texto limpio',
        description:
          'Usa el botón de copiar para copiar el resultado normalizado y luego pégalo en tu documento, formulario o campo de CMS.',
      },
      {
        title: 'Corrige oraciones que se juntan',
        description:
          'Si las palabras de líneas separadas se unen sin espacio, cambia a "Reemplazar con espacios". Si los párrafos se fusionaron en un solo bloque, vuelve a "Eliminar líneas en blanco".',
      },
    ],
    examples: [
      {
        title: 'Limpieza de texto copiado de un PDF',
        input: '   Primera   línea con   espacios extra.\n\n\nSegunda   línea   aquí.   ',
        output: 'Primera línea con espacios extra.\nSegunda línea aquí.',
        explanation: 'Colapsa los espacios dobles, recorta los márgenes y elimina las líneas vacías de separación.',
      },
      {
        title: 'Unir líneas cortadas en una oración',
        input: 'Hola    mundo.\n\n\n¿Cómo   estás?',
        output: 'Hola mundo.\n¿Cómo estás?',
        explanation: 'Normaliza los espacios repetidos y quita las líneas en blanco entre oraciones.',
      },
    ],
    benefits: [
      'Corrige el ajuste de línea roto de documentos PDF en un clic',
      'Cuenta los caracteres exactos eliminados durante la limpieza',
      'Permite conservar los párrafos mientras elimina solo el espaciado excesivo',
      'Procesa todo localmente en el navegador',
    ],
    useCases: [
      'Reparar texto roto copiado de PDF de varias columnas',
      'Eliminar espacios finales antes de pegar en campos de CMS',
      'Aplanar direcciones o fragmentos de varias líneas en una sola línea',
      'Normalizar notas con sangría de tabulaciones en texto limpio de un solo espacio',
    ],
    faqs: [
      {
        question: '¿Qué opción de salto de línea debo elegir para el texto copiado de un PDF?',
        answer:
          'Elige "Reemplazar con espacios" cuando los saltos de línea duros cortaron las oraciones a mitad de línea, o "Eliminar líneas en blanco" si cada línea ya es un párrafo o elemento de lista distinto.',
      },
      {
        question: '¿Colapsar los espacios afecta los espacios simples entre palabras?',
        answer:
          'No. Solo las series de dos o más espacios consecutivos se colapsan en un solo espacio.',
      },
      {
        question: '¿Esto también elimina las tabulaciones?',
        answer:
          'Sí, cuando "Convertir tabulaciones a espacios" está activado, los caracteres de tabulación se convierten en espacios simples y se fusionan con los espacios en blanco adyacentes.',
      },
      {
        question: '¿El Eliminador de Espacios en Blanco es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, sin cuenta y sin límites de cuántas veces limpias texto.',
      },
      {
        question: '¿Mi texto sale de mi navegador cuando uso el Eliminador de Espacios en Blanco?',
        answer:
          'No. Toda la limpieza ocurre localmente en tu navegador, así que tu texto nunca se sube a un servidor.',
      },
      {
        question: '¿Qué hace la opción "Eliminar líneas en blanco"?',
        answer:
          'Elimina las líneas vacías de tu texto mientras conserva cada línea que tiene contenido, así que los párrafos y los elementos de lista se mantienen en orden.',
      },
      {
        question: '¿Puedo conservar los saltos de párrafo mientras elimino los espacios extra?',
        answer:
          'Sí. Elige la opción que conserva los saltos de línea y solo colapsa los espacios extra, para que tus párrafos se mantengan separados mientras se corrige el espaciado dentro de ellos.',
      },
      {
        question: '¿Cuál es la diferencia entre "Reemplazar con espacios" y eliminar todos los saltos de línea?',
        answer:
          '"Reemplazar con espacios" une las líneas con un solo espacio para que las oraciones cortadas se lean correctamente, mientras que eliminar todos los saltos une las líneas directamente sin espacio entre ellas.',
      },
      {
        question: '¿El Eliminador de Espacios en Blanco elimina los espacios finales al final de las líneas?',
        answer:
          'Sí. Los espacios y las tabulaciones al final de cada línea se recortan, lo cual es útil antes de pegar texto en formularios o campos de código.',
      },
      {
        question: '¿Elimina los espacios iniciales y la sangría al inicio de las líneas?',
        answer:
          'Sí. Los espacios en blanco iniciales al inicio de cada línea se recortan, así que el texto pegado con sangría o desalineado queda alineado sin problemas.',
      },
      {
        question: '¿Puedo limpiar con el Eliminador de Espacios en Blanco el texto copiado de una hoja de cálculo?',
        answer:
          'Sí. Las tabulaciones entre celdas de la hoja de cálculo se convierten en espacios simples y se eliminan las líneas en blanco extra de los rangos copiados.',
      },
      {
        question: '¿Cómo convierto texto de varias líneas en una sola línea?',
        answer:
          'Pega tu texto, luego elige la opción que reemplaza los saltos de línea con espacios o elimina todos los saltos, y copia la salida resultante de una sola línea.',
      },
      {
        question: '¿El Eliminador de Espacios en Blanco cambia la puntuación, las letras o los números?',
        answer:
          'No. Solo cambia los caracteres de espacio en blanco como espacios, tabulaciones y saltos de línea; tus palabras, puntuación y números quedan exactamente como estaban.',
      },
      {
        question: '¿Puedo usar el Eliminador de Espacios en Blanco para limpiar texto antes de pegarlo en un formulario?',
        answer:
          'Sí. Es ideal para eliminar espacios finales y saltos de línea sueltos de direcciones, nombres o descripciones antes de que entren en un formulario web o campo de CMS.',
      },
      {
        question: '¿Qué significa el conteo de caracteres que se muestra después de la limpieza?',
        answer:
          'Muestra cuántos caracteres se eliminaron durante la limpieza, para que puedas ver exactamente cuánto espacio en blanco extra eliminó la herramienta de tu texto.',
      },
      {
        question: '¿El Eliminador de Espacios en Blanco funciona con documentos muy largos?',
        answer:
          'Sí. Como se ejecuta localmente en tu navegador, puedes pegar documentos largos, aunque los bloques de texto extremadamente grandes pueden tardar un momento en procesarse.',
      },
      {
        question: '¿Puedo deshacer una limpieza si elijo la opción incorrecta?',
        answer:
          'Tu texto original se mantiene en el campo de entrada, así que simplemente puedes elegir una opción diferente y la salida se actualiza sin perder tu texto pegado.',
      },
      {
        question: '¿El Eliminador de Espacios en Blanco elimina los espacios dentro de las palabras?',
        answer:
          'No. Los espacios dentro de las palabras son espacios simples, así que se dejan intactos; solo las series de dos o más espacios se colapsan.',
      },
      {
        question: '¿Qué tipos de espacios en blanco limpia la herramienta?',
        answer:
          'Limpia espacios regulares, caracteres de tabulación, espacios en blanco finales e iniciales en las líneas, líneas en blanco y saltos de línea no deseados.',
      },
      {
        question: '¿Puedo usar el Eliminador de Espacios en Blanco en código?',
        answer:
          'Funciona para prosa, pero ten cuidado con el código sensible a la sangría como Python, porque recortar los espacios iniciales puede cambiar cómo se comporta el código.',
      },
    ],
  },
  'sort-lines': {
    slug: 'ordenar-lineas-alfabeticamente',
    name: 'Ordenar Líneas Alfabéticamente',
    shortDescription:
      'Ordena listas de la A a la Z, de la Z a la A, de forma natural (1, 2, 10), por longitud de caracteres, al revés o mezcladas al azar.',
    keywords: [
      'ordenar líneas alfabéticamente',
      'alfabetizar lista online',
      'herramienta de orden natural',
      'ordenar texto por longitud',
      'ordenar lista de la a a la z',
      'herramienta de orden alfabético',
      'mezclar líneas online',
      'ordenar líneas de la z a la a',
      'invertir orden de líneas',
    ],
    seo: {
      title: 'Ordenar Líneas Alfabéticamente Online | UtilityFlow',
      description:
        'Ordena líneas de la A a la Z, de la Z a la A, en orden numérico natural, por longitud, al revés o mezcladas, con duplicados y líneas en blanco eliminados.',
      primaryKeyword: 'ordenar líneas alfabéticamente',
      secondaryKeywords: ['alfabetizar lista', 'ordenador de líneas de texto', 'orden natural online', 'ordenar líneas de la a a la z'],
      longTailKeywords: ['ordenar lista alfabéticamente con números en orden natural', 'ordenar líneas por longitud de menor a mayor', 'alfabetizar y eliminar líneas duplicadas', 'invertir orden de líneas online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organiza listas, bibliografías, SKU de inventario o importaciones de código alfabéticamente, numéricamente con orden natural, por longitud de caracteres o en orden inverso.',
    instructions: [
      {
        title: 'Escribe un elemento por línea',
        description:
          'Pega tu lista en el campo de Líneas de entrada, con cada elemento en su propia línea.',
      },
      {
        title: 'Elige un orden',
        description:
          'Elige A → Z, Z → A, Natural (1, 2, 10), Más corto / Más largo primero, Orden inverso o Mezclar.',
      },
      {
        title: 'Configura la distinción de mayúsculas',
        description:
          'Activa la comparación que distingue mayúsculas y minúsculas si las letras mayúsculas y minúsculas deben ordenarse por separado; de lo contrario, "manzana" y "Manzana" se tratan igual.',
      },
      {
        title: 'Activa las opciones de limpieza',
        description:
          'Opcionalmente elimina las líneas en blanco o los duplicados en la misma pasada para que tu lista ordenada salga limpia.',
      },
      {
        title: 'Revisa y copia la lista ordenada',
        description:
          'Verifica la salida ordenada en orden y luego cópiala con un clic para pegarla en tu documento, hoja de cálculo o archivo de código.',
      },
      {
        title: 'Corrige elementos numerados que se ordenan mal',
        description:
          'Si "Elemento 10" aparece antes que "Elemento 2", cambia de A → Z a orden Natural, que compara los números dentro de cada línea numéricamente.',
      },
    ],
    examples: [
      {
        title: 'Orden numérico natural frente a orden de texto estándar',
        input: 'Elemento 10\nElemento 2\nElemento 1',
        output: 'Elemento 1\nElemento 2\nElemento 10',
        explanation:
          'El modo natural compara los números incrustados numéricamente, así que Elemento 2 va antes que Elemento 10.',
      },
      {
        title: 'Orden de la Z a la A',
        input: 'banana\nManzana\ncereza',
        output: 'Manzana\ncereza\nbanana',
        explanation:
          'El orden Z → A invierte el orden alfabético, de la última letra a la primera.',
      },
    ],
    benefits: [
      'Incluye comparador con reconocimiento de configuración regional y orden numérico natural',
      'Combina el orden con la eliminación de líneas en blanco y la eliminación de duplicados',
      'Admite orden por longitud para tablas de interfaz y verificaciones de texto',
      'Copia instantánea del resultado ordenado en un clic',
    ],
    useCases: [
      'Alfabetizar bibliografías, glosarios y listas de referencia',
      'Ordenar archivos numerados o casos de prueba de forma natural (Elemento 1, 2, 10)',
      'Ordenar propiedades CSS, importaciones o claves de entorno',
      'Mezclar entradas de sorteos o preguntas de cuestionarios con Mezclar',
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre A → Z y el orden Natural?',
        answer:
          'El orden alfabético estándar coloca "Elemento 10" antes que "Elemento 2" porque "1" viene antes que "2". El orden natural analiza los números dentro de las cadenas para que "Elemento 2" venga antes que "Elemento 10".',
      },
      {
        question: '¿Puedo eliminar entradas duplicadas mientras ordeno?',
        answer:
          'Sí. Marca la opción "Eliminar duplicados" para eliminar duplicados y ordenar tu lista al mismo tiempo.',
      },
      {
        question: '¿En qué se diferencia el Orden inverso de Z → A?',
        answer:
          'Z → A ordena alfabéticamente en orden descendente, mientras que el Orden inverso invierte tu secuencia de líneas existente de abajo hacia arriba sin alfabetizar.',
      },
      {
        question: '¿La herramienta Ordenar Líneas es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, sin cuenta y sin límite de cuántas listas ordenas.',
      },
      {
        question: '¿Mi lista sale de mi navegador cuando la ordeno?',
        answer:
          'No. El orden ocurre localmente en tu navegador, así que tu lista nunca se sube a un servidor.',
      },
      {
        question: '¿Qué es el orden natural y cuándo debo usarlo?',
        answer:
          'El orden natural compara los números dentro del texto numéricamente, así que úsalo para elementos numerados como "Capítulo 2" y "Capítulo 10" para mantenerlos en verdadero orden numérico.',
      },
      {
        question: '¿Puedo ordenar una lista de la Z a la A?',
        answer:
          'Sí. Elige la opción Z → A para ordenar tus líneas en orden alfabético inverso.',
      },
      {
        question: '¿Puedo ordenar líneas por longitud en lugar de alfabéticamente?',
        answer:
          'Sí. Elige Más corto primero o Más largo primero para ordenar las líneas por longitud de caracteres, lo cual es útil para revisar tablas de interfaz o alinear texto.',
      },
      {
        question: '¿Qué hace la opción Mezclar en la herramienta Ordenar Líneas?',
        answer:
          'Mezclar ordena tus líneas al azar, lo cual es útil para entradas de sorteos, preguntas de cuestionarios o cualquier lista que quieras en orden aleatorio.',
      },
      {
        question: '¿La herramienta Ordenar Líneas elimina las líneas en blanco?',
        answer:
          'Sí, si activas la opción de líneas en blanco. De lo contrario, las líneas vacías se conservan en la salida.',
      },
      {
        question: '¿Puedo ordenar distinguiendo mayúsculas y minúsculas con la herramienta Ordenar Líneas?',
        answer:
          'Sí. Activa la comparación que distingue mayúsculas y minúsculas para ordenar las letras mayúsculas y minúsculas por separado; con ella desactivada, "manzana" y "Manzana" se tratan igual.',
      },
      {
        question: '¿La herramienta Ordenar Líneas funciona con números y fechas?',
        answer:
          'Sí. El orden natural ordena correctamente los números incrustados, y las fechas se ordenan correctamente cuando se escriben en formato AAAA-MM-DD; otros formatos de fecha se ordenan como texto plano.',
      },
      {
        question: '¿Puedo ordenar columnas dentro de una línea, como valores CSV?',
        answer:
          'No. La herramienta ordena líneas completas, así que cada línea se mueve como una unidad; no reordena los valores separados por comas dentro de una sola línea.',
      },
      {
        question: '¿Qué pasa con las líneas duplicadas cuando ordeno?',
        answer:
          'Los duplicados permanecen en la lista a menos que actives "Eliminar duplicados", que conserva solo la primera aparición de cada línea antes de ordenar.',
      },
      {
        question: '¿Puedo invertir una lista sin ordenarla alfabéticamente?',
        answer:
          'Sí. Usa Orden inverso para voltear tu lista de abajo hacia arriba mientras mantienes el texto dentro de cada línea sin cambios.',
      },
      {
        question: '¿La herramienta Ordenar Líneas maneja letras acentuadas y otros idiomas?',
        answer:
          'Sí. Usa un comparador con reconocimiento de configuración regional, así que los caracteres acentuados y las letras de otros idiomas se ordenan de forma sensata en lugar de por códigos de caracteres sin procesar.',
      },
      {
        question: '¿Puedo ordenar una lista numerada como "1. Manzana, 2. Banana, 10. Cereza"?',
        answer:
          'Sí. El orden natural lee los números al inicio de cada línea, así que "2. Banana" va correctamente antes que "10. Cereza".',
      },
      {
        question: '¿Qué tan grande puede ser una lista que maneje la herramienta Ordenar Líneas?',
        answer:
          'Se ejecuta localmente en tu navegador y maneja listas largas con facilidad, aunque los pegados extremadamente grandes con decenas de miles de líneas pueden tardar un momento.',
      },
      {
        question: '¿El orden cambia el texto dentro de cada línea?',
        answer:
          'No. El orden solo cambia el orden de las líneas; las palabras, los números y la puntuación dentro de cada línea se mantienen exactamente iguales.',
      },
      {
        question: '¿Puedo deshacer un orden si elijo el orden incorrecto?',
        answer:
          'Tu lista original se mantiene en el campo de entrada, así que puedes elegir un orden diferente y la salida se actualiza sin perder tu lista pegada.',
      },
    ],
  },
  'find-and-replace': {
    slug: 'buscar-y-reemplazar-texto',
    name: 'Buscar y Reemplazar Texto',
    shortDescription:
      'Busca y reemplaza cadenas en el texto con distinción de mayúsculas y minúsculas, coincidencia de palabra completa y soporte de RegExp.',
    keywords: [
      'buscar y reemplazar texto',
      'reemplazo masivo de texto',
      'buscar y reemplazar con regex',
      'buscar y reemplazar online',
      'reemplazar texto online',
      'buscar reemplazar palabras',
      'reemplazo regex online',
      'reemplazar todas las ocurrencias',
      'herramienta de reemplazo de texto',
    ],
    seo: {
      title: 'Buscar y Reemplazar Texto Masivo Online | UtilityFlow',
      description:
        'Busca y reemplaza texto en tu navegador con conteo de coincidencias, distinción de mayúsculas, palabra completa y grupos de captura RegExp, sin registro.',
      primaryKeyword: 'buscar y reemplazar texto',
      secondaryKeywords: ['buscar y reemplazar online', 'herramienta de reemplazo regex', 'reemplazo masivo de texto', 'reemplazar texto online'],
      longTailKeywords: ['buscar y reemplazar solo palabras completas online', 'buscar y reemplazar con regex y grupos de captura', 'reemplazo masivo de cadenas de texto en el navegador', 'reemplazar todas las ocurrencias en texto online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Realiza ediciones rápidas de búsqueda y reemplazo en masa en prosa, fragmentos CSV o bloques de código usando coincidencia de texto exacta, límites de palabra completa o grupos de captura de expresiones regulares.',
    instructions: [
      {
        title: 'Escribe los términos de Buscar y Reemplazar',
        description:
          'Escribe el texto o patrón que quieres buscar en Buscar, y la cadena de destino en Reemplazar con.',
      },
      {
        title: 'Configura las opciones de coincidencia',
        description:
          'Activa Distingue mayúsculas y minúsculas, Solo palabra completa o Usar expresión regular (RegExp) para la coincidencia de patrones.',
      },
      {
        title: 'Pega el texto a editar',
        description:
          'Pega el documento completo, el fragmento CSV o el bloque de código en el campo de texto fuente para que cada ocurrencia quede cubierta en una sola pasada.',
      },
      {
        title: 'Consulta el conteo de coincidencias en vivo',
        description:
          'Observa el conteo en vivo de ocurrencias reemplazadas para confirmar que la coincidencia afecta exactamente los lugares que esperas antes de copiar.',
      },
      {
        title: 'Revisa la salida y copia',
        description:
          'Explora el texto actualizado en busca de cambios no deseados y luego cópialo con un clic para pegarlo de nuevo en tu documento o editor.',
      },
      {
        title: 'Corrige una coincidencia que no reemplaza nada',
        description:
          'Si el conteo es cero, revisa la distinción de mayúsculas y minúsculas, desactiva Solo palabra completa o escapa los caracteres especiales como . y ( en modo RegExp; los patrones no válidos muestran un mensaje de error de sintaxis.',
      },
    ],
    examples: [
      {
        title: 'Reformateo con grupo de captura regex',
        input: 'Buscar: Pedido #(\\d+)  |  Reemplazar: Ref-$1\nOrigen: Pedido n.º 1042 enviado.',
        output: 'Ref-1042 enviado.',
        explanation: 'Usa un grupo de captura RegExp ($1) para conservar el ID numérico del pedido mientras cambia el prefijo.',
      },
      {
        title: 'Reemplazo simple de una palabra',
        input: 'Buscar: gris  |  Reemplazar: azul\nOrigen: El cielo gris es bonito.',
        output: 'El cielo azul es bonito.',
        explanation: 'Reemplaza todas las ocurrencias de la palabra buscada por el texto nuevo en una sola pasada.',
      },
    ],
    benefits: [
      'Muestra el conteo de coincidencias en vivo y mensajes claros de error de sintaxis para patrones RegExp no válidos',
      'La opción de palabra completa evita coincidencias parciales accidentales dentro de palabras más largas',
      'Admite grupos de captura RegExp ($1, $2) para reescrituras de texto estructurado',
      'Se ejecuta localmente para que los fragmentos privados y las credenciales se mantengan en tu dispositivo',
    ],
    useCases: [
      'Cambiar nombres de marcas, URL o fechas en documentos largos',
      'Reformatear ID o fechas con grupos de captura de expresiones regulares',
      'Actualizar delimitadores o variables de marcador en plantillas',
      'Limpiar errores tipográficos repetidos antes de publicar',
    ],
    faqs: [
      {
        question: '¿Puedo usar grupos de captura como $1 en modo RegExp?',
        answer:
          'Sí. Cuando "Usar expresión regular (RegExp)" está marcado, los grupos entre paréntesis en Buscar pueden referenciarse como $1, $2, etc., en el campo Reemplazar.',
      },
      {
        question: '¿Por qué "Solo palabra completa" está desactivado en modo RegExp?',
        answer:
          'En modo RegExp tienes control directo sobre los límites de palabra usando \\b dentro de tu patrón.',
      },
      {
        question: '¿Dejar "Reemplazar con" vacío elimina el texto coincidente?',
        answer:
          'Sí. Dejar el campo Reemplazar en blanco elimina cada ocurrencia coincidente de forma limpia.',
      },
      {
        question: '¿La herramienta Buscar y Reemplazar es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, sin cuenta y sin límite de cuántos reemplazos haces.',
      },
      {
        question: '¿Mi texto sale de mi navegador cuando uso Buscar y Reemplazar?',
        answer:
          'No. Todo se ejecuta localmente en tu navegador, así que los fragmentos privados, los documentos y el código se mantienen en tu dispositivo.',
      },
      {
        question: '¿Qué muestra el conteo de coincidencias en vivo?',
        answer:
          'Muestra cuántas ocurrencias de tu término de Buscar se reemplazaron, para que puedas confirmar que el reemplazo afectó exactamente los lugares que esperabas.',
      },
      {
        question: '¿Puedo reemplazar solo palabras completas y no partes de palabras más largas?',
        answer:
          'Sí. Activa "Solo palabra completa" para que "gato" se reemplace pero "catálogo" quede intacto; en modo RegExp, usa los límites de palabra \\b en su lugar.',
      },
      {
        question: '¿Buscar y Reemplazar distingue mayúsculas y minúsculas?',
        answer:
          'Solo si activas la opción Distingue mayúsculas y minúsculas. Con ella desactivada, "Manzana" y "manzana" se tratan como la misma coincidencia.',
      },
      {
        question: '¿Puedo reemplazar texto en varias líneas a la vez?',
        answer:
          'Sí. La herramienta procesa todo tu texto pegado en una sola pasada, así que las coincidencias de cada línea se reemplazan juntas.',
      },
      {
        question: '¿Qué pasa si mi expresión regular no es válida?',
        answer:
          'La herramienta muestra un mensaje claro de error de sintaxis en lugar de producir una salida incorrecta, para que puedas corregir el patrón antes de copiar nada.',
      },
      {
        question: '¿Puedo buscar caracteres especiales como saltos de línea o tabulaciones en Buscar y Reemplazar?',
        answer:
          'Sí, en modo RegExp puedes usar escapes como \\n para un salto de línea y \\t para una tabulación dentro de tu patrón.',
      },
      {
        question: '¿Puedo intercambiar dos palabras usando grupos de captura?',
        answer:
          'Sí. Por ejemplo, busca (\\w+) (\\w+) y reemplaza con $2 $1 para convertir "Juan Pérez" en "Pérez Juan".',
      },
      {
        question: '¿Puedo insertar todo el texto coincidente en el reemplazo?',
        answer:
          'Sí. En modo RegExp, $& en el campo Reemplazar inserta todo el texto coincidente, lo cual es útil para envolver las coincidencias entre comillas o etiquetas.',
      },
      {
        question: '¿Puedo reemplazar URL o fechas en todo un documento?',
        answer:
          'Sí. Pega el documento completo y usa una sola pasada de Buscar y Reemplazar para cambiar cada URL antigua, nombre de marca o fecha a la vez.',
      },
      {
        question: '¿Buscar y Reemplazar cambia solo la primera ocurrencia o todas?',
        answer:
          'Reemplaza todas las coincidencias del texto pegado a la vez; para cambiar solo una ocurrencia, edita ese punto manualmente después de copiar el resultado.',
      },
      {
        question: '¿Buscar y Reemplazar funciona con código?',
        answer:
          'Sí. Funciona con bloques de código, plantillas y fragmentos de configuración, así que puedes cambiar nombres de variables, actualizar marcadores o cambiar delimitadores en masa.',
      },
      {
        question: '¿Puedo corregir un error tipográfico repetido con Buscar y Reemplazar?',
        answer:
          'Sí. Escribe la palabra mal escrita en Buscar y la ortografía correcta en Reemplazar, luego revisa el conteo de coincidencias para ver cuántos errores se corrigieron.',
      },
      {
        question: '¿Qué tipo de expresión regular usa la herramienta?',
        answer:
          'Usa RegExp de JavaScript, la misma sintaxis de patrones que usan los navegadores, con grupos de captura, clases de caracteres y cuantificadores.',
      },
      {
        question: '¿Puedo deshacer un reemplazo si cometo un error?',
        answer:
          'Tu texto original se mantiene en el campo de entrada, así que puedes cambiar los términos de Buscar o Reemplazar y la salida se actualiza sin perder tu texto fuente.',
      },
      {
        question: '¿Hay un límite de cuánto texto puedo procesar con Buscar y Reemplazar?',
        answer:
          'No hay un límite establecido. Se ejecuta localmente en tu navegador y maneja documentos largos, aunque los pegados extremadamente grandes pueden tardar un momento en procesarse.',
      },
    ],
  },
  'text-reverser': {
    slug: 'inversor-de-texto',
    name: 'Inversor de Texto',
    shortDescription:
      'Invierte cadenas de texto completas, invierte el orden de las palabras, voltea las letras de cada palabra o invierte la secuencia de líneas.',
    keywords: [
      'inversor de texto',
      'invertir cadena online',
      'invertir palabras',
      'invertir líneas',
      'invertir caracteres de texto',
      'voltear texto online',
      'generador de texto espejo',
      'invertir orden de oraciones',
      'generador de texto al revés',
    ],
    seo: {
      title: 'Inversor de Texto: Invierte Palabras | UtilityFlow',
      description:
        'Invierte caracteres, cambia el orden de las palabras, refleja cada palabra o invierte el orden de las líneas al instante: seguro con Unicode, gratis y privado.',
      primaryKeyword: 'inversor de texto',
      secondaryKeywords: ['invertir texto online', 'invertir orden de palabras', 'invertir líneas', 'voltear texto online'],
      longTailKeywords: ['invertir cada palabra de una oración online', 'invertir orden de líneas en archivo de texto', 'inversor de cadenas seguro con unicode', 'invertir caracteres de texto online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Voltea secuencias de caracteres, invierte el orden de las palabras por línea, refleja las letras dentro de cada palabra o invierte listas de varias líneas de abajo hacia arriba con manejo compatible con Unicode.',
    instructions: [
      {
        title: 'Elige un modo de inversión',
        description:
          'Selecciona Invertir caracteres, Invertir orden de palabras, Invertir cada palabra o Invertir orden de líneas.',
      },
      {
        title: 'Escribe tu texto',
        description:
          'Escribe o pega texto en Texto original para ver la salida invertida de inmediato.',
      },
      {
        title: 'Revisa la vista previa en vivo',
        description:
          'La salida se actualiza mientras escribes, así que puedes ver al instante cómo el modo elegido transforma tu texto.',
      },
      {
        title: 'Compara los modos lado a lado',
        description:
          'Cambia entre modos con la misma entrada para comparar la inversión de caracteres, la inversión del orden de palabras y la inversión de líneas antes de decidirte por uno.',
      },
      {
        title: 'Copia la salida',
        description:
          'Usa el botón Copiar para copiar el texto transformado y luego pégalo en tu documento, acertijo o mensaje.',
      },
      {
        title: 'Corrige líneas que se invirtieron mal',
        description:
          'Si las palabras dentro de cada línea se voltearon cuando solo querías voltear la lista, cambia a Invertir orden de líneas, que mueve las líneas sin tocar el texto dentro de ellas.',
      },
    ],
    examples: [
      {
        title: 'Comparación de los modos de inversión',
        input: 'Hola Mundo',
        output: 'Caracteres: odnuM aloH · Orden de palabras: Mundo Hola · Cada palabra: aloH odnuM',
        explanation: 'Muestra cómo cada modo altera la posición de los caracteres frente a la de los tokens.',
      },
      {
        title: 'Invertir caracteres de una frase corta',
        input: 'Hola Mundo',
        output: 'odnuM aloH',
        explanation: 'El modo Invertir caracteres voltea toda la cadena, incluidos los espacios, para leerla al revés.',
      },
    ],
    benefits: [
      'La división de caracteres segura con Unicode conserva los emojis y los pares sustitutos',
      'Cuatro modos distintos cubren tanto el volteo de cadenas como la inversión de listas',
      'Vista previa en vivo sin clics mientras escribes',
      'Ejecución ligera en el navegador',
    ],
    useCases: [
      'Invertir registros o listas cronológicas de más antiguo primero a más reciente primero',
      'Probar cadenas palíndromas y casos límite de caracteres de derecha a izquierda',
      'Invertir listas de nombres "Nombre Apellido" o secuencias de palabras',
      'Crear acertijos, cifrados y juegos de palabras',
    ],
    faqs: [
      {
        question: '¿Invertir caracteres rompe los emojis o los caracteres Unicode acentuados?',
        answer:
          'La herramienta usa la iteración por puntos de código de Array.from() en lugar de la indexación ingenua UTF-16, así que los caracteres multibyte y los emojis estándar se mantienen intactos.',
      },
      {
        question: '¿Cómo volteo una lista de líneas sin invertir las palabras?',
        answer:
          'Selecciona "Invertir orden de líneas" para mover la línea inferior a la parte superior mientras mantienes el texto dentro de cada línea sin cambios.',
      },
      {
        question: '¿Cuál es la diferencia entre "Invertir orden de palabras" e "Invertir cada palabra"?',
        answer:
          '"Invertir orden de palabras" convierte "uno dos tres" en "tres dos uno", mientras que "Invertir cada palabra" mantiene las posiciones de las palabras y voltea las letras a "onu sod sert".',
      },
      {
        question: '¿El Inversor de Texto es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, sin cuenta y sin límite de cuánto texto inviertes.',
      },
      {
        question: '¿Mi texto sale de mi navegador cuando uso el Inversor de Texto?',
        answer:
          'No. La inversión ocurre localmente en tu navegador, así que tu texto nunca se sube ni se almacena en ningún lugar.',
      },
      {
        question: '¿Cuáles son los cuatro modos de inversión del Inversor de Texto?',
        answer:
          'Invertir caracteres voltea cada carácter, Invertir orden de palabras voltea el orden de las palabras, Invertir cada palabra refleja las letras dentro de cada palabra e Invertir orden de líneas invierte la secuencia de líneas.',
      },
      {
        question: '¿Puedo invertir un párrafo completo con el Inversor de Texto?',
        answer:
          'Sí. Pega el párrafo y elige Invertir caracteres para voltear todo el bloque, o Invertir orden de líneas para voltear el texto de varias líneas línea por línea.',
      },
      {
        question: '¿Puedo usar el Inversor de Texto para crear un efecto espejo?',
        answer:
          'Sí. Invertir caracteres produce texto con aspecto de espejo que se lee al revés, lo cual funciona bien para acertijos, cifrados y mensajes divertidos.',
      },
      {
        question: '¿El Inversor de Texto funciona con letras acentuadas?',
        answer:
          'Sí. Maneja los caracteres Unicode por punto de código, así que las letras acentuadas como é y ü se invierten correctamente sin romperse.',
      },
      {
        question: '¿El Inversor de Texto funciona con texto en otros idiomas?',
        answer:
          'Sí. Funciona con cualquier texto Unicode, incluidas las escrituras no latinas, porque la inversión se hace carácter por carácter en lugar de por reglas de idioma.',
      },
      {
        question: '¿Qué es un palíndromo y puede el Inversor de Texto ayudar a verificarlo?',
        answer:
          'Un palíndromo se lee igual hacia adelante y hacia atrás, como "reconocer". Invierte tu texto y compáralo con el original para verificarlo.',
      },
      {
        question: '¿Puedo usar el Inversor de Texto para acertijos y juegos de palabras?',
        answer:
          'Sí. Las palabras y oraciones invertidas son un formato clásico de acertijo, y la vista previa en vivo facilita crear pistas y respuestas rápidamente.',
      },
      {
        question: '¿Invertir el texto agrega o elimina espacios?',
        answer:
          'Invertir caracteres invierte todo, incluidos los espacios, mientras que los modos basados en palabras mantienen espacios simples entre palabras para que la salida siga siendo legible.',
      },
      {
        question: '¿Puedo invertir un bloque de texto muy largo?',
        answer:
          'Sí. Se ejecuta localmente en tu navegador y maneja pegados largos, aunque los bloques extremadamente grandes pueden tardar un momento en actualizarse en la vista previa en vivo.',
      },
      {
        question: '¿El Inversor de Texto guarda o almacena mi texto?',
        answer:
          'No. Nada se guarda ni se envía a un servidor; tu texto existe solo en la pestaña de tu navegador mientras usas la herramienta.',
      },
      {
        question: '¿Cómo invierto nombres "Nombre Apellido" a "Apellido Nombre"?',
        answer:
          'Usa Invertir orden de palabras, que convierte "Juan Pérez" en "Pérez Juan" mientras mantiene cada nombre escrito correctamente.',
      },
      {
        question: '¿El Inversor de Texto puede invertir números?',
        answer:
          'Sí. En el modo Invertir caracteres, "12345" se convierte en "54321", lo cual es útil para probar cadenas numéricas y códigos.',
      },
      {
        question: '¿Qué pasa con los saltos de línea cuando invierto caracteres?',
        answer:
          'Los saltos de línea se invierten junto con el resto del texto, así que las líneas también terminan en orden opuesto; usa Invertir orden de líneas si quieres las líneas volteadas pero el texto dentro de ellas intacto.',
      },
      {
        question: '¿Puedo deshacer una inversión?',
        answer:
          'Sí. Tu texto original se mantiene en el campo de entrada, e invertir la salida una segunda vez con el mismo modo restaura el texto original.',
      },
      {
        question: '¿El texto invertido es legible?',
        answer:
          'No, el texto invertido se lee al revés por diseño. Pégalo de nuevo en la herramienta e inviértelo otra vez para restaurar la redacción original.',
      },
    ],
  },
  'lorem-ipsum-generator': {
    slug: 'generador-de-lorem-ipsum',
    name: 'Generador de Lorem Ipsum',
    shortDescription:
      'Genera párrafos, oraciones o cantidades de palabras personalizados como texto de relleno, con etiquetas HTML <p> opcionales.',
    keywords: [
      'generador de lorem ipsum',
      'generador de texto de relleno',
      'texto ficticio',
      'lorem ipsum html',
      'texto lorem ipsum',
      'generador de texto ficticio',
      'párrafos de relleno',
      'palabras lorem ipsum',
      'generador de texto de relleno',
    ],
    seo: {
      title: 'Generador de Lorem Ipsum para Diseños | UtilityFlow',
      description:
        'Genera texto de relleno Lorem Ipsum por párrafos, oraciones o cantidad exacta de palabras, con etiquetas de párrafo HTML opcionales para maquetas, sin registro.',
      primaryKeyword: 'generador de lorem ipsum',
      secondaryKeywords: ['texto de relleno', 'generador de texto ficticio', 'párrafos lorem ipsum', 'generador de texto de relleno'],
      longTailKeywords: ['generar lorem ipsum por cantidad de palabras', 'generador de lorem ipsum con etiquetas html p', 'texto de relleno limpio para maquetas de interfaz', 'generador de lorem ipsum para maqueta de sitio web'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Crea texto de relleno limpio adaptado a cantidades exactas de párrafos, oraciones o palabras para wireframes, pruebas de tipografía y prototipos de diseño, con etiquetas de párrafo HTML opcionales.',
    instructions: [
      {
        title: 'Elige la unidad y la cantidad',
        description:
          'Elige Párrafos, Oraciones o Palabras e ingresa la cantidad deseada.',
      },
      {
        title: 'Personaliza el formato',
        description:
          'Elige si comenzar con la oración clásica "Lorem ipsum dolor sit amet..." y si envolver los párrafos en etiquetas HTML <p>.',
      },
      {
        title: 'Genera el texto de relleno',
        description:
          'El texto se genera al instante en tu navegador, sin esperas y sin llamadas de red.',
      },
      {
        title: 'Revisa el conteo de palabras y caracteres',
        description:
          'Usa el contador de palabras y caracteres en vivo para verificar que el texto generado cabe en tu diseño antes de pegarlo.',
      },
      {
        title: 'Regenera o copia',
        description:
          'Haz clic en Regenerar para obtener una variación nueva de oraciones o en Copiar texto de relleno para pegarlo en tu diseño.',
      },
      {
        title: 'Ajusta la longitud del texto a tu diseño',
        description:
          'Si una tarjeta se desborda o se ve vacía, cambia a la unidad Palabras y genera una cantidad exacta de palabras que coincida con el espacio, luego regenera hasta que el ajuste se vea bien.',
      },
    ],
    examples: [
      {
        title: 'Fragmento de maqueta HTML',
        input: 'Unidad: Párrafos · Cantidad: 1 · Envolver en etiquetas <p>: Marcado',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation: 'Listo para pegar directamente en plantillas HTML o vistas de código de CMS.',
      },
      {
        title: 'Cantidad exacta de palabras',
        input: 'Unidad: Palabras · Cantidad: 10',
        output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        explanation: 'Genera exactamente 10 palabras de texto de relleno para llenar un espacio preciso del diseño.',
      },
    ],
    benefits: [
      'Genera cantidades exactas de palabras, oraciones o párrafos bajo demanda',
      'La envoltura opcional con etiquetas <p> ahorra tiempo en prototipos front-end',
      'El contador de palabras y caracteres en vivo verifica el ajuste del diseño antes de pegar',
      'Regeneración instantánea sin llamadas de red externas',
    ],
    useCases: [
      'Probar la altura de tarjetas y el ajuste de línea en diseños de interfaz responsivos',
      'Obtener una vista previa de combinaciones de fuentes, alturas de línea y anchos de medida',
      'Llenar plantillas de wireframes y maquetas de páginas editoriales',
      'Probar el comportamiento de truncamiento y desbordamiento en componentes CSS',
    ],
    faqs: [
      {
        question: '¿Puedo generar un número exacto de palabras en lugar de párrafos?',
        answer:
          'Sí. Cambia el selector de unidad a "Palabras" e ingresa cualquier número hasta 500 palabras.',
      },
      {
        question: '¿Por qué usar Lorem Ipsum en lugar de repetir una frase?',
        answer:
          'El texto clásico de relleno en latín se aproxima a la distribución natural de longitud de palabra y ritmo de letras del inglés sin distraer a los interesados con texto legible.',
      },
      {
        question: '¿La opción de etiquetas <p> funciona con los modos Oraciones y Palabras?',
        answer:
          'Sí. En el modo Párrafos, cada párrafo recibe su propio envoltorio <p>...</p>, mientras que Oraciones y Palabras envuelven el bloque generado en un solo elemento <p>.',
      },
      {
        question: '¿El Generador de Lorem Ipsum es gratis?',
        answer:
          'Sí. Es completamente gratis, sin registro, sin cuenta y sin límite de cuánto texto de relleno generas.',
      },
      {
        question: '¿Necesito una cuenta o conexión a internet para generar Lorem Ipsum?',
        answer:
          'No. El generador se ejecuta por completo en tu navegador, sin registro y sin llamadas de red, así que funciona al instante cuando la página está cargada.',
      },
      {
        question: '¿Qué es Lorem Ipsum?',
        answer:
          'Lorem Ipsum es texto de relleno pseudo-latino revuelto que los diseñadores usan desde los días de la composición tipográfica impresa para llenar diseños antes de que el texto real esté listo.',
      },
      {
        question: '¿Puedo generar una sola oración de Lorem Ipsum?',
        answer:
          'Sí. Elige la unidad Oraciones, ingresa 1 y el generador produce una oración de relleno.',
      },
      {
        question: '¿Puedo comenzar mi texto con la oración clásica "Lorem ipsum dolor sit amet..."?',
        answer:
          'Sí. Activa la opción de apertura clásica y tu texto generado comenzará con la conocida oración "Lorem ipsum dolor sit amet...".',
      },
      {
        question: '¿Puedo pegar el texto generado directamente en HTML?',
        answer:
          'Sí. Activa la opción de etiquetas <p> y la salida quedará envuelta en etiquetas de párrafo HTML, lista para pegar en plantillas o en una vista de código de CMS.',
      },
      {
        question: '¿Puedo generar exactamente 100 palabras de Lorem Ipsum?',
        answer:
          'Sí. Selecciona la unidad Palabras, ingresa 100 y el generador produce exactamente 100 palabras de texto de relleno.',
      },
      {
        question: '¿El texto Lorem Ipsum generado siempre es el mismo?',
        answer:
          'No. Haz clic en Regenerar para producir una variación nueva con diferentes estructuras de oraciones, para que los bloques repetidos no se vean idénticos.',
      },
      {
        question: '¿Lorem Ipsum es latín real?',
        answer:
          'No. Es pseudo-latín revuelto formado por palabras parecidas al latín; parece un idioma real pero no tiene significado real.',
      },
      {
        question: '¿Puedo usar Lorem Ipsum en un sitio web publicado?',
        answer:
          'Está pensado como texto de relleno temporal, así que reemplázalo con contenido real antes de publicar, de lo contrario los visitantes verán texto ficticio.',
      },
      {
        question: '¿Para qué se usa Lorem Ipsum?',
        answer:
          'Llena wireframes, maquetas y prototipos para que los diseñadores puedan probar tipografía, espaciado y diseño sin esperar el texto final.',
      },
      {
        question: '¿Puedo controlar la longitud de las oraciones individuales?',
        answer:
          'No. Controlas el conteo total en párrafos, oraciones o palabras, mientras el generador varía las longitudes de las oraciones de forma natural; regenera si el ritmo no se adapta a tu diseño.',
      },
      {
        question: '¿El Generador de Lorem Ipsum también funciona para diseño impreso?',
        answer:
          'Sí. Copia el texto generado en herramientas de impresión, presentaciones o software de diseño de páginas para ver cómo fluirá el texto real en el diseño.',
      },
      {
        question: '¿Cómo pruebo el truncamiento de texto con Lorem Ipsum?',
        answer:
          'Genera una cantidad exacta de palabras que coincida con tu espacio, pégala en el componente y observa si el texto se trunca o se desborda en diferentes tamaños de pantalla.',
      },
      {
        question: '¿Puedo generar Lorem Ipsum en otro idioma?',
        answer:
          'No. La herramienta genera solo el clásico texto de relleno pseudo-latino; para texto legible en otro idioma, escribe o traduce texto real.',
      },
      {
        question: '¿El Generador de Lorem Ipsum guarda mi texto generado?',
        answer:
          'No. Todo se ejecuta localmente en tu navegador y nada se almacena ni se envía a un servidor.',
      },
      {
        question: '¿Por qué el texto de relleno ayuda a los clientes a centrarse en el diseño?',
        answer:
          'El texto borrador legible atrae la atención hacia las palabras mismas, mientras que el Lorem Ipsum neutral mantiene a los revisores enfocados en el diseño, la tipografía y el espaciado.',
      },
    ],
  },
  'readability-checker': {
    slug: 'verificador-de-legibilidad',
    name: 'Verificador de Legibilidad',
    shortDescription:
      'Calcula los puntajes de legibilidad Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog y SMOG.',
    keywords: [
      'verificador de legibilidad',
      'flesch reading ease',
      'nivel de grado flesch kincaid',
      'calculadora gunning fog',
      'índice de legibilidad smog',
      'verificador de nivel de lectura',
      'verificador de puntaje de legibilidad',
      'legibilidad por nivel de grado',
      'verificar legibilidad de texto online',
    ],
    seo: {
      title: 'Verificador de Legibilidad Flesch-Kincaid | UtilityFlow',
      description:
        'Verifica los puntajes Flesch Reading Ease, Flesch-Kincaid, Gunning Fog y SMOG con nuestro verificador de legibilidad: gratis, privado, en tu navegador.',
      primaryKeyword: 'verificador de legibilidad',
      secondaryKeywords: ['calculadora de flesch reading ease', 'verificador de nivel de grado', 'herramienta de nivel de lectura', 'calculadora de índice gunning fog'],
      longTailKeywords: ['verificar nivel de grado flesch kincaid online', 'calcular índice gunning fog y smog de legibilidad', 'mejorar puntaje de legibilidad de artículo en el navegador', 'qué es un buen puntaje flesch reading ease'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Evalúa qué tan fácil es entender tu escritura con cuatro fórmulas establecidas de legibilidad: Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog y SMOG, junto con la detección de palabras complejas.',
    instructions: [
      {
        title: 'Pega tu artículo o pasaje',
        description:
          'Escribe al menos una oración completa en el editor o haz clic en Cargar ejemplo para probarlo con texto de ejemplo.',
      },
      {
        title: 'Revisa las cuatro tarjetas de puntaje',
        description:
          'Revisa Flesch Reading Ease (0–100, más alto es más fácil) junto con las estimaciones de nivel de grado de Flesch-Kincaid, Gunning Fog y SMOG lado a lado.',
      },
      {
        title: 'Lee el desglose de oraciones y sílabas',
        description:
          'Inspecciona el promedio de palabras por oración, las sílabas por palabra y el conteo de palabras largas o complejas detrás de cada puntaje.',
      },
      {
        title: 'Encuentra las palabras complejas',
        description:
          'Explora la lista de palabras de 3 o más sílabas que marca la herramienta y anota cuáles puedes reemplazar con términos cotidianos más simples.',
      },
      {
        title: 'Acorta las oraciones largas y vuelve a verificar',
        description:
          'Divide las oraciones densas de varias cláusulas, pega el texto revisado de nuevo y observa cómo los puntajes se actualizan al instante.',
      },
      {
        title: 'Soluciona resultados extraños',
        description:
          'Si un puntaje se ve mal, revisa si faltan puntos, abreviaturas o fragmentos de viñetas, ya que las fórmulas cuentan oraciones y sílabas a partir de la puntuación.',
      },
    ],
    examples: [
      {
        title: 'Guía en lenguaje sencillo',
        input: 'Las oraciones cortas mantienen las instrucciones claras. Usa palabras simples al explicar los pasos.',
        output: 'Facilidad Flesch ~78 (bastante fácil) · Nivel ~5,2',
        explanation:
          'Una longitud promedio de oración más corta y menos palabras polisilábicas producen una mayor facilidad de lectura.',
      },
      {
        title: 'Texto técnico denso',
        input: 'La fotosíntesis es el proceso bioquímico mediante el cual las plantas convierten la luz solar en energía química.',
        output: 'Facilidad Flesch ~45 (difícil) · Nivel ~10',
        explanation:
          'Las oraciones largas y las palabras polisilábicas bajan la puntuación de facilidad de lectura.',
      },
    ],
    benefits: [
      'Calcula cuatro índices de legibilidad muy usados al mismo tiempo',
      'Enumera ejemplos de palabras de 3 o más sílabas encontradas en tu pasaje',
      'Muestra el promedio exacto de palabras por oración y de sílabas por palabra',
      'Se ejecuta por completo sin conexión en la memoria del navegador para borradores no publicados',
    ],
    useCases: [
      'Editar documentación, textos de UX y artículos del centro de ayuda para mayor claridad',
      'Verificar materiales educativos frente a los niveles de grado objetivo de los estudiantes',
      'Simplificar comunicaciones legales, de salud o financieras para los clientes',
      'Mejorar la capacidad de escaneo de publicaciones de blog y páginas de destino',
    ],
    faqs: [
      {
        question: '¿Cuál es un buen puntaje de Flesch Reading Ease para artículos web?',
        answer:
          'La mayoría del contenido web para público general apunta a un puntaje de Flesch Reading Ease entre 60 y 75, que corresponde aproximadamente a un nivel de lectura de 7.º a 9.º grado.',
      },
      {
        question: '¿Cómo puedo subir un puntaje de legibilidad bajo?',
        answer:
          'Divide las oraciones largas de varias cláusulas en afirmaciones más cortas y reemplaza la jerga innecesaria de 3 o más sílabas con palabras concretas y cotidianas.',
      },
      {
        question: '¿Por qué la herramienta menciona el conteo de oraciones para SMOG?',
        answer:
          'La fórmula estándar de SMOG depende de muestras de varias oraciones, así que los fragmentos cortos de 1 o 2 oraciones usan una estimación escalada hasta que se proporcionan 3 o más oraciones.',
      },
      {
        question: '¿Para qué se usa el Verificador de Legibilidad?',
        answer:
          'Mide qué tan fácil es entender un pasaje calculando cuatro fórmulas estándar de legibilidad y mostrando estadísticas de oraciones y sílabas.',
      },
      {
        question: '¿El Verificador de Legibilidad es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta en tu navegador para que tu texto nunca salga de tu dispositivo.',
      },
      {
        question: '¿Qué es el nivel de grado Flesch-Kincaid?',
        answer:
          'Estima el grado escolar de EE. UU. necesario para entender un texto; por ejemplo, un puntaje de 8,0 significa que un estudiante de octavo grado debería poder leerlo cómodamente.',
      },
      {
        question: '¿Qué mide el índice Gunning Fog?',
        answer:
          'Estima los años de educación formal necesarios para entender un pasaje en la primera lectura, según la longitud de las oraciones y la proporción de palabras complejas.',
      },
      {
        question: '¿Qué es el índice SMOG?',
        answer:
          'El índice SMOG estima los años de educación necesarios para comprender por completo un texto, contando las palabras polisilábicas en una muestra de oraciones.',
      },
      {
        question: '¿Qué puntaje de Flesch Reading Ease debería buscar?',
        answer:
          'El público general suele apuntar a 60–70, mientras que el contenido público en lenguaje sencillo a menudo apunta a 70 o más; la escritura técnica para especialistas puede puntuar más bajo.',
      },
      {
        question: '¿Cuántas palabras necesito para puntajes de legibilidad precisos?',
        answer:
          'Las muestras más largas de al menos 100 palabras dan resultados más confiables, aunque la herramienta funciona en pasajes más cortos con una estimación SMOG escalada.',
      },
      {
        question: '¿El Verificador de Legibilidad almacena o sube mi texto?',
        answer:
          'No. Todos los cálculos ocurren localmente en tu navegador, así que los borradores, los artículos no publicados y los documentos privados se quedan en tu dispositivo.',
      },
      {
        question: '¿Por qué los cuatro puntajes no coinciden entre sí?',
        answer:
          'Cada fórmula pondera la longitud de las oraciones y los conteos de sílabas de forma diferente, así que trátalos como estimaciones complementarias en lugar de un solo grado exacto.',
      },
      {
        question: '¿Cómo se cuentan las sílabas en el Verificador de Legibilidad?',
        answer:
          'La herramienta estima las sílabas a partir de las letras de cada palabra, lo cual es preciso para la mayoría de las palabras comunes en inglés, pero puede contar mal nombres inusuales, abreviaturas o términos técnicos.',
      },
      {
        question: '¿Puedo verificar la legibilidad de texto en otros idiomas?',
        answer:
          'Las cuatro fórmulas se diseñaron para el inglés, así que los puntajes para otros idiomas pueden ser engañosos, aunque la herramienta igual los calculará.',
      },
      {
        question: '¿Qué cuenta como palabra compleja?',
        answer:
          'Una palabra compleja es generalmente una con tres o más sílabas, excluyendo sufijos comunes y nombres propios, y la herramienta enumera ejemplos que encuentra en tu pasaje.',
      },
      {
        question: '¿La puntuación afecta mi puntaje de legibilidad?',
        answer:
          'Sí. Los límites de las oraciones provienen de puntos, signos de interrogación y signos de exclamación, así que la puntuación faltante puede fusionar oraciones y sesgar los resultados.',
      },
      {
        question: '¿El Verificador de Legibilidad puede ayudar con el SEO?',
        answer:
          'El contenido más claro y fácil de leer mantiene a los visitantes interesados por más tiempo, lo cual apoya el SEO de forma indirecta, aunque la legibilidad es solo uno de muchos factores de clasificación.',
      },
      {
        question: '¿Un puntaje de Flesch Reading Ease más alto siempre es mejor?',
        answer:
          'No siempre. Ajusta el puntaje a tu audiencia: las instrucciones simples deben puntuar alto, mientras que los lectores académicos o legales especialistas pueden esperar un lenguaje más denso.',
      },
      {
        question: '¿Por qué cambia mi puntaje cuando agrego un título?',
        answer:
          'Los puntajes se calculan a partir de todo el texto que pegas, así que incluir títulos, etiquetas de navegación o fragmentos de código puede cambiar los promedios; verifica solo el texto del cuerpo para obtener el resultado más consistente.',
      },
      {
        question: '¿Puedo usar el Verificador de Legibilidad para ensayos de estudiantes?',
        answer:
          'Sí. Los docentes y estudiantes pueden usarlo para verificar si un ensayo coincide con el nivel de grado previsto antes de entregarlo.',
      },
    ],
  },
  'word-frequency-counter': {
    slug: 'contador-de-frecuencia-de-palabras',
    name: 'Contador de Frecuencia de Palabras y Densidad de Palabras Clave',
    shortDescription:
      'Analiza frecuencias de frases de 1, 2 y 3 palabras y porcentajes de densidad con exportación a CSV.',
    keywords: [
      'contador de frecuencia de palabras',
      'verificador de densidad de palabras clave',
      'contador de ngramas',
      'analizador de repetición de palabras',
      'analizador de frecuencia de frases',
      'calculadora de densidad de palabras clave',
      'contar palabras repetidas online',
      'contador de ocurrencias de palabras',
      'análisis de frecuencia de texto',
    ],
    seo: {
      title: 'Contador de Frecuencia de Palabras Online | UtilityFlow',
      description:
        'Analiza la frecuencia de palabras y la densidad de frases de 1, 2 y 3 palabras con porcentajes, filtro de palabras vacías y exportación CSV, gratis y privado.',
      primaryKeyword: 'contador de frecuencia de palabras',
      secondaryKeywords: ['verificador de densidad de palabras clave', 'analizador de frecuencia de frases', 'herramienta de ocurrencia de palabras', 'contador de frecuencia de ngramas'],
      longTailKeywords: ['contar frecuencia de palabras y porcentaje de densidad online', 'analizar frases de 2 y 3 palabras en texto', 'exportar tabla de frecuencia de palabras a csv', 'verificar relleno de palabras clave en borrador de artículo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audita borradores de contenido para el equilibrio de palabras clave, la fraseología sobreusada y los patrones de n-gramas de varias palabras con tablas de frecuencia instantáneas, filtrado de palabras vacías e informes CSV descargables.',
    instructions: [
      {
        title: 'Pega tu contenido',
        description:
          'Inserta un borrador de artículo, una transcripción, texto de producto o respuestas de encuesta en el cuadro de texto.',
      },
      {
        title: 'Elige frases de 1, 2 o 3 palabras',
        description:
          'Cambia entre palabras individuales y n-gramas de varias palabras para ver términos individuales o frases recurrentes.',
      },
      {
        title: 'Filtra palabras vacías y establece una longitud mínima',
        description:
          'Activa la exclusión de palabras vacías para ocultar palabras de relleno como "el" y "y", y aumenta la longitud mínima de palabra para centrarte en términos significativos.',
      },
      {
        title: 'Revisa los conteos y los porcentajes de densidad',
        description:
          'Ordena la tabla para ver qué palabras y frases aparecen con más frecuencia y qué parte del texto representa cada una.',
      },
      {
        title: 'Detecta el sobreuso o el relleno de palabras clave',
        description:
          'Compara tus términos principales con tus palabras clave objetivo y reescribe los pasajes donde un término domina el texto.',
      },
      {
        title: 'Copia o exporta los resultados como CSV',
        description:
          'Haz clic en Exportar CSV para descargar la tabla para una hoja de cálculo, o en Copiar CSV para pegarla directamente en un informe.',
      },
    ],
    examples: [
      {
        title: 'Verificación de densidad de frases',
        input: 'Las páginas rápidas mejoran la velocidad de página y la experiencia de página.',
        output: 'página: 2 · velocidad de página: 1 · experiencia de página: 1',
        explanation:
          'Muestra tanto la frecuencia de términos individuales como las frases temáticas de varias palabras.',
      },
      {
        title: 'Detección de una palabra sobreusada',
        input: 'El diseño es simple. Un diseño simple ayuda a los usuarios. El diseño simple vende.',
        output: 'diseño: 3 · simple: 3 · el diseño: 2',
        explanation:
          'Revela de inmediato qué términos dominan un texto corto para poder variar el vocabulario.',
      },
    ],
    benefits: [
      'Admite análisis de n-gramas de 1, 2 y 3 palabras',
      'El filtro opcional de palabras vacías elimina palabras de relleno como "el" y "y"',
      'Umbral ajustable de longitud mínima de palabra',
      'Exporta tablas CSV limpias listas para hojas de cálculo',
    ],
    useCases: [
      'Revisar borradores de artículos para evitar el relleno de palabras clave no intencional',
      'Detectar tics verbales repetitivos en discursos o transcripciones',
      'Identificar temas recurrentes en comentarios de clientes o respuestas de encuestas',
      'Comparar el equilibrio de frases de varias palabras en el texto de páginas de destino',
    ],
    faqs: [
      {
        question: '¿Cómo se calcula el porcentaje de densidad de palabras clave?',
        answer:
          'La densidad es igual a (ocurrencias del término × palabras de la frase ÷ total de palabras del texto) × 100, lo que da una parte precisa del documento.',
      },
      {
        question: '¿Qué son las palabras vacías?',
        answer:
          'Las palabras vacías son palabras gramaticales de alta frecuencia como "el", "y", "de", "en" y "a" que generalmente tienen poco significado temático en las auditorías de frecuencia.',
      },
      {
        question: '¿Puedo exportar los resultados de frecuencia a Excel o Google Sheets?',
        answer:
          'Sí. Haz clic en "Exportar CSV" para descargar un archivo estándar separado por comas o en "Copiar CSV" para pegarlo directamente.',
      },
      {
        question: '¿Para qué se usa un Contador de Frecuencia de Palabras?',
        answer:
          'Cuenta cuántas veces aparece cada palabra o frase en un texto para que puedas detectar repeticiones, verificar el equilibrio de palabras clave y encontrar temas recurrentes.',
      },
      {
        question: '¿El Contador de Frecuencia de Palabras es gratis?',
        answer:
          'Sí, es gratis, sin registro, y se ejecuta por completo en tu navegador para que tu texto nunca se suba.',
      },
      {
        question: '¿Qué es la densidad de palabras clave y por qué importa?',
        answer:
          'La densidad de palabras clave es el porcentaje de un texto compuesto por un término dado; una densidad natural ayuda a los motores de búsqueda a entender un tema, mientras que una densidad anormalmente alta parece relleno.',
      },
      {
        question: '¿Cuál es un buen porcentaje de densidad de palabras clave?',
        answer:
          'No hay un objetivo oficial, pero la mayoría de los editores apunta a un 1–2% natural para una palabra clave principal y se centra en una escritura legible y útil en lugar de alcanzar un número.',
      },
      {
        question: '¿Qué son los n-gramas en el Contador de Frecuencia de Palabras?',
        answer:
          'Los n-gramas son secuencias de una, dos o tres palabras consecutivas, como "velocidad de página" o "interacción del usuario", contadas como frases únicas.',
      },
      {
        question: '¿Por qué debería analizar frases de 2 y 3 palabras?',
        answer:
          'Las palabras individuales pueden ser engañosas, mientras que las frases de varias palabras revelan los temas reales y las expresiones repetidas de tu contenido.',
      },
      {
        question: '¿Cómo funciona el filtro de palabras vacías?',
        answer:
          'Cuando está activado, elimina palabras gramaticales comunes como "el", "y" y "de" para que la tabla destaque las palabras temáticas en lugar del relleno.',
      },
      {
        question: '¿Puedo cambiar qué palabras cuentan como palabras vacías?',
        answer:
          'La herramienta usa una lista integrada de palabras vacías comunes en inglés, y puedes activar o desactivar el filtro cuando quieras ver la tabla completa.',
      },
      {
        question: '¿Qué hace la configuración de longitud mínima de palabra?',
        answer:
          'Excluye las palabras más cortas que la longitud que elijas, lo que ayuda a ocultar abreviaturas y letras sueltas de la tabla de frecuencia.',
      },
      {
        question: '¿El Contador de Frecuencia de Palabras sube mi texto?',
        answer:
          'No. Todo el conteo ocurre localmente en tu navegador, así que los borradores privados y las transcripciones se quedan en tu dispositivo.',
      },
      {
        question: '¿Puedo contar la frecuencia de palabras en un documento largo?',
        answer:
          'Sí. Pega artículos largos o transcripciones y la herramienta cuenta cada ocurrencia, aunque los textos muy grandes pueden tardar un momento en procesarse.',
      },
      {
        question: '¿Cómo se calcula el porcentaje de densidad para las frases?',
        answer:
          'La densidad es igual a las ocurrencias de la frase multiplicadas por las palabras de la frase, divididas por el total de palabras del texto y luego multiplicadas por 100.',
      },
      {
        question: '¿El Contador de Frecuencia de Palabras puede encontrar frases repetidas en una transcripción?',
        answer:
          'Sí. Cambia al modo de 2 o 3 palabras para revelar tics verbales y frases que un orador repite sin darse cuenta.',
      },
      {
        question: '¿La puntuación afecta los conteos de palabras?',
        answer:
          'La herramienta elimina la puntuación antes de contar, así que "velocidad," y "velocidad" se cuentan como la misma palabra.',
      },
      {
        question: '¿Las palabras en mayúsculas y minúsculas se cuentan juntas?',
        answer:
          'Sí. Las palabras se pasan a minúsculas antes de contar, así que "Página" y "página" cuentan como un solo término.',
      },
      {
        question: '¿Puedo exportar la tabla de frecuencia a Excel?',
        answer:
          'Sí. Usa Exportar CSV para descargar un archivo que se abre directamente en Excel o Google Sheets, o Copiar CSV para pegar la tabla en cualquier lugar.',
      },
      {
        question: '¿Cómo puedo usar la frecuencia de palabras para mejorar mi escritura?',
        answer:
          'Busca palabras que repites sin querer, reemplázalas con sinónimos variados y verifica que tus palabras clave principales aparezcan de forma consistente pero natural.',
      },
    ],
  },
  'text-to-slug': {
    slug: 'convertidor-de-texto-a-slug',
    name: 'Convertidor de Texto a Slug',
    shortDescription:
      'Convierte títulos y encabezados en slugs de URL limpios y optimizados para SEO, con transliteración de acentos y modo por lotes.',
    keywords: [
      'texto a slug',
      'generador de slug de url',
      'slugify online',
      'formateador de url seo',
      'convertidor de slug',
      'crear slug de url',
      'convertidor de título a slug',
      'creador de slug de url limpio',
      'generador de slug por lotes',
    ],
    seo: {
      title: 'Convertidor de Texto a Slug para SEO | UtilityFlow',
      description:
        'Convierte títulos y encabezados en slugs de URL limpios y optimizados para SEO, con transliteración de acentos, separadores y modo por lotes, sin registro.',
      primaryKeyword: 'convertidor de texto a slug',
      secondaryKeywords: ['generador de slug de url', 'slugify de texto', 'generador de url limpia', 'herramienta de título a slug'],
      longTailKeywords: ['convertir título de artículo a slug de url optimizado para seo', 'convertir varios encabezados a slugs por lotes', 'convertir caracteres acentuados a ascii para slug online', 'separador de slug con guion o guion bajo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Convierte títulos de blog, nombres de productos y calendarios de contenido de varias líneas en slugs ASCII limpios y seguros para URL, con transliteración automática de acentos, controles de delimitador y eliminación opcional de palabras vacías.',
    instructions: [
      {
        title: 'Escribe uno o más títulos',
        description:
          'Escribe un solo título o pega varias líneas para generar un slug para cada una en modo por lotes.',
      },
      {
        title: 'Elige un separador',
        description:
          'Elige guiones (-) para URL optimizadas para SEO o guiones bajos (_) para nombres de archivos y claves de bases de datos.',
      },
      {
        title: 'Ajusta las minúsculas y las palabras vacías',
        description:
          'Mantén las minúsculas forzadas para URL limpias y, opcionalmente, elimina palabras vacías comunes como "el" y "y" para slugs más cortos.',
      },
      {
        title: 'Revisa los slugs generados',
        description:
          'Verifica que cada slug se lea con claridad, conserve sus palabras clave y no contenga puntuación suelta ni separadores dobles.',
      },
      {
        title: 'Copia los slugs en tu CMS o código',
        description:
          'Copia slugs individuales o todo el lote en tu sistema de contenido, tabla de rutas o nombres de archivos.',
      },
      {
        title: 'Corrige un slug que se ve mal',
        description:
          'Si un carácter quedó de forma extraña, revisa si hay símbolos inusuales o escritura no latina en el título original y simplifícalo antes de convertirlo de nuevo.',
      },
    ],
    examples: [
      {
        title: 'Normalización de un título acentuado',
        input: 'Café & Crème: Guide for 2026!',
        output: 'cafe-and-creme-guide-for-2026',
        explanation:
          'Translitera las letras latinas acentuadas, expande "&" a "and" y elimina la puntuación.',
      },
      {
        title: 'Slug de un título de blog en español',
        input: 'Guía Completa de Marketing Digital 2026',
        output: 'guia-completa-de-marketing-digital-2026',
        explanation:
          'Convierte un título en español en un slug ASCII limpio en minúsculas, con los acentos transliterados y las palabras unidas por guiones.',
      },
    ],
    benefits: [
      'Normaliza los caracteres acentuados (é, ñ, ü) en equivalentes ASCII limpios',
      'Admite conversión por lotes de varias líneas en una sola pasada',
      'Ofrece eliminación opcional de palabras vacías para URL más cortas',
      'Reemplaza "&" limpiamente con "and" en lugar de eliminar el significado',
    ],
    useCases: [
      'Generar URL legibles para publicaciones de blog y documentación',
      'Crear nombres de archivo consistentes para recursos e imágenes descargables',
      'Preparar por lotes slugs de ruta para sitios estáticos y catálogos de comercio electrónico',
      'Estandarizar identificadores de categorías o etiquetas en bases de datos',
    ],
    faqs: [
      {
        question: '¿Debo usar guiones o guiones bajos en los slugs de URL?',
        answer:
          'Los motores de búsqueda generalmente recomiendan guiones (-) como separadores de palabras en las URL, mientras que los guiones bajos (_) son comunes para nombres de archivos o claves de bases de datos.',
      },
      {
        question: '¿Cómo maneja la herramienta los caracteres acentuados como "café"?',
        answer:
          'Aplica la normalización Unicode NFD para separar las marcas diacríticas y eliminarlas limpiamente, convirtiendo "café" en "cafe" en lugar de eliminar la letra.',
      },
      {
        question: '¿Puedo convertir 50 títulos a la vez?',
        answer:
          'Sí. Pega un título por línea y cada línea se convertirá en su propio slug correspondiente a la derecha.',
      },
      {
        question: '¿Qué es un Convertidor de Texto a Slug?',
        answer:
          'Convierte un título o frase en un slug limpio y seguro para URL poniéndolo en minúsculas, eliminando la puntuación y reemplazando los espacios con guiones o guiones bajos.',
      },
      {
        question: '¿El Convertidor de Texto a Slug es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta en tu navegador para que tus títulos nunca salgan de tu dispositivo.',
      },
      {
        question: '¿Qué hace que un slug sea optimizado para SEO?',
        answer:
          'Un buen slug es corto, legible, en minúsculas y está formado por palabras reales que describen la página, con guiones que separan las palabras.',
      },
      {
        question: '¿Qué tan largo debe ser un slug de URL?',
        answer:
          'Apunta a tres a cinco palabras significativas; los slugs más largos se truncan en los resultados de búsqueda y son más difíciles de recordar para los lectores.',
      },
      {
        question: '¿Por qué los slugs están en minúsculas?',
        answer:
          'Las URL en minúsculas evitan problemas de contenido duplicado, ya que algunos servidores tratan "/Guia" y "/guia" como páginas diferentes.',
      },
      {
        question: '¿Qué pasa con los números en un slug?',
        answer:
          'Los números se conservan tal cual, así que un título como "Guía para 2026" se convierte en "guia-para-2026".',
      },
      {
        question: '¿Cómo se manejan los caracteres especiales en los slugs?',
        answer:
          'La puntuación y los símbolos se eliminan, "&" se convierte en "and" y las letras acentuadas como é se transliteran a equivalentes ASCII simples.',
      },
      {
        question: '¿El Convertidor de Texto a Slug puede manejar títulos en otros idiomas?',
        answer:
          'Los caracteres acentuados de base latina se transliteran limpiamente, pero las escrituras no latinas pueden eliminarse, así que revisa la salida antes de publicar.',
      },
      {
        question: '¿Qué son las palabras vacías en un slug?',
        answer:
          'Las palabras vacías son palabras comunes como "un", "el" y "de" que agregan longitud sin significado; eliminarlas produce URL más cortas y limpias.',
      },
      {
        question: '¿Debo eliminar las palabras vacías de cada slug?',
        answer:
          'No siempre. Consérvalas cuando sean necesarias para la claridad, como en las guías de "cómo hacer", y elimínalas solo cuando el slug se mantenga legible sin ellas.',
      },
      {
        question: '¿Puedo convertir muchos títulos a la vez?',
        answer:
          'Sí. Pega un título por línea y la herramienta genera un slug correspondiente para cada línea en una sola pasada.',
      },
      {
        question: '¿El Convertidor de Texto a Slug sube mis títulos?',
        answer:
          'No. Toda la conversión ocurre localmente en tu navegador, así que los títulos y nombres de productos no publicados se mantienen privados.',
      },
      {
        question: '¿Por qué mis slugs tienen guiones dobles?',
        answer:
          'Los guiones dobles generalmente provienen de puntuación o espacios consecutivos en el título original; limpia el título o elimina la puntuación extra y conviértelo de nuevo.',
      },
      {
        question: '¿Puedo usar slugs también para nombres de archivos?',
        answer:
          'Sí. Los slugs forman nombres de archivo seguros y legibles, y la opción de separador con guion bajo es adecuada para sistemas de archivos y claves de bases de datos.',
      },
      {
        question: '¿Cuál es la diferencia entre un slug y una URL?',
        answer:
          'Un slug es la parte final legible de una URL, como "guia-de-compresion-de-imagenes" en ejemplo.com/guia-de-compresion-de-imagenes.',
      },
      {
        question: '¿Los slugs afectan las clasificaciones de búsqueda?',
        answer:
          'Un slug claro ayuda a los motores de búsqueda y a los lectores a entender una página de un vistazo, aunque es solo una pequeña parte del SEO.',
      },
      {
        question: '¿Puedo cambiar un slug después de publicar una página?',
        answer:
          'Sí, pero configura una redirección de la URL antigua a la nueva para que los enlaces existentes y los listados de búsqueda no se rompan.',
      },
    ],
  },
  'markdown-previewer': {
    slug: 'visor-de-markdown',
    name: 'Visor de Markdown y Exportador de HTML',
    shortDescription:
      'Escribe Markdown en un editor dividido en vivo, inspecciona el formato renderizado de forma segura y copia o exporta HTML limpio.',
    keywords: [
      'visor de markdown',
      'markdown a html',
      'editor de markdown online',
      'visor de markdown en vivo',
      'editor markdown online',
      'renderizar markdown online',
      'convertidor de markdown a html',
      'vista previa de readme markdown',
      'exportador de html markdown',
    ],
    seo: {
      title: 'Visor de Markdown: Vista Previa y HTML | UtilityFlow',
      description:
        'Escribe Markdown y míralo renderizarse en vivo, inspecciona el código HTML compilado y copia o descarga un documento HTML independiente y limpio, gratis.',
      primaryKeyword: 'visor de markdown',
      secondaryKeywords: ['convertidor de markdown a html', 'editor de markdown online', 'vista previa de markdown online', 'editor de markdown en vivo'],
      longTailKeywords: ['visor de markdown en vivo con exportación html', 'convertir readme de markdown a html online', 'editor de markdown en el navegador sin subir archivos', 'vista previa de readme de github antes de confirmar'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Redacta archivos README, documentación y notas con formato en un editor de Markdown responsivo con vista previa renderizada en vivo, escape seguro de HTML, inspección de HTML sin procesar y exportación de HTML en un clic.',
    instructions: [
      {
        title: 'Escribe o pega Markdown',
        description:
          'Usa la sintaxis estándar (# títulos, **negrita**, *cursiva*, listas, citas, enlaces y bloques de código cercados) en el panel izquierdo.',
      },
      {
        title: 'Observa la vista previa en vivo',
        description:
          'El panel derecho renderiza tu formato al instante mientras escribes, para que puedas verificar títulos, listas y enlaces sin actualizar.',
      },
      {
        title: 'Cambia a la pestaña de HTML sin procesar',
        description:
          'Alterna sobre el panel derecho para inspeccionar el marcado HTML compilado del que está construida la vista previa.',
      },
      {
        title: 'Revisa los bloques de código y los enlaces',
        description:
          'Desplázate por la vista previa para confirmar que los bloques de código cercados se renderizan correctamente y que los enlaces apuntan a donde esperas.',
      },
      {
        title: 'Copia el HTML o exporta un archivo',
        description:
          'Haz clic en Copiar HTML para obtener un fragmento para pegar en un CMS o correo, o en Exportar HTML para descargar un documento HTML5 independiente.',
      },
      {
        title: 'Corrige el formato que se ve mal',
        description:
          'Si una lista o un bloque de código no se renderiza, revisa si falta una línea en blanco antes o una cerca de comillas invertidas sin cerrar, luego vuelve a verificar la vista previa.',
      },
    ],
    examples: [
      {
        title: 'Conversión de título y lista',
        input: '## Lista de verificación\n- **Verificar** enlaces\n- Publicar borrador',
        output: '<h2>Lista de verificación</h2><ul><li><strong>Verificar</strong> enlaces</li><li>Publicar borrador</li></ul>',
        explanation: 'Convierte la sintaxis Markdown limpia directamente en elementos HTML semánticos.',
      },
      {
        title: 'Negrita y cursiva en línea',
        input: '**Negrita** y *cursiva*',
        output: '<p><strong>Negrita</strong> y <em>cursiva</em></p>',
        explanation: 'El formato en línea se convierte en las etiquetas HTML correspondientes dentro de un párrafo.',
      },
    ],
    benefits: [
      'Escapa el HTML sin procesar y desinfecta los esquemas de enlace para evitar marcado de vista previa no seguro',
      'Admite títulos, negrita/cursiva, tachado, citas, listas, enlaces y bloques de código',
      'Cambia sin esfuerzo entre la vista previa visual y el código HTML sin procesar',
      'Descarga un archivo .html independiente completo en un clic',
    ],
    useCases: [
      'Obtener una vista previa de archivos README.md de GitHub antes de confirmarlos',
      'Convertir notas Markdown en HTML limpio para correo o bloques de CMS',
      'Redactar tutoriales técnicos y notas de lanzamiento sin conexión',
      'Verificar rápidamente el formato de enlaces y cercas de código',
    ],
    faqs: [
      {
        question: '¿El Visor de Markdown ejecuta JavaScript incrustado?',
        answer:
          'No. Las etiquetas HTML sin procesar de la entrada se escapan y los protocolos de enlace se restringen a esquemas seguros web, relativos, de ancla y mailto.',
      },
      {
        question: '¿Puedo copiar solo el fragmento HTML compilado sin el código estándar de <html>?',
        answer:
          'Sí. El botón "Copiar HTML" copia el marcado HTML del cuerpo compilado, mientras que "Exportar HTML" lo envuelve en un documento HTML5 independiente.',
      },
      {
        question: '¿Se admiten los bloques de código cercados?',
        answer:
          'Sí. Envuelve los fragmentos de código de varias líneas en triples comillas invertidas (```) para renderizar bloques <pre><code> con formato.',
      },
      {
        question: '¿Qué es un Visor de Markdown?',
        answer:
          'Renderiza texto Markdown en HTML con formato en tiempo real para que puedas ver exactamente cómo se verán los títulos, las listas, los enlaces y el código antes de publicar.',
      },
      {
        question: '¿El Visor de Markdown es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta en tu navegador para que tus borradores nunca se suban.',
      },
      {
        question: '¿Qué sintaxis Markdown admite el visor?',
        answer:
          'Admite títulos, negrita, cursiva, tachado, citas, listas ordenadas y desordenadas, enlaces, imágenes y bloques de código cercados.',
      },
      {
        question: '¿Puedo obtener una vista previa de un README de GitHub con esta herramienta?',
        answer:
          'Sí. Pega el contenido de tu README.md en el editor para verificar cómo se renderizará en GitHub antes de confirmarlo.',
      },
      {
        question: '¿El Visor de Markdown admite tablas?',
        answer:
          'La compatibilidad con tablas depende del tipo de Markdown; revisa la vista previa para ver si tus tablas con tuberías se renderizan y simplifícalas si no lo hacen.',
      },
      {
        question: '¿Cuál es la diferencia entre Copiar HTML y Exportar HTML?',
        answer:
          'Copiar HTML copia solo el marcado del cuerpo compilado para pegarlo en otro lugar, mientras que Exportar HTML descarga un documento HTML5 independiente completo.',
      },
      {
        question: '¿El HTML exportado es una página web completa?',
        answer:
          'Sí. La exportación envuelve tu contenido en un documento HTML5 completo con etiquetas head y body, listo para abrir en cualquier navegador.',
      },
      {
        question: '¿El Visor de Markdown ejecuta JavaScript de mi entrada?',
        answer:
          'No. Las etiquetas HTML sin procesar se escapan y los protocolos de enlace se restringen a esquemas seguros web, relativos, de ancla y mailto.',
      },
      {
        question: '¿Puedo usar el Visor de Markdown sin conexión?',
        answer:
          'El editor y la vista previa se ejecutan por completo en tu navegador sin subidas, así que tus borradores se quedan en tu dispositivo mientras trabajas.',
      },
      {
        question: '¿El Visor de Markdown guarda mi trabajo?',
        answer:
          'La herramienta no almacena tu texto en ningún servidor, así que copia o exporta todo lo importante antes de cerrar la pestaña.',
      },
      {
        question: '¿Cómo agrego una imagen en Markdown?',
        answer:
          'Usa la sintaxis ![texto alternativo](url-de-imagen) y la imagen se renderizará en la vista previa cuando la URL sea accesible.',
      },
      {
        question: '¿Por qué mi bloque de código no se renderiza?',
        answer:
          'Asegúrate de que las cercas de apertura y cierre usen tres comillas invertidas en sus propias líneas, con una línea en blanco antes de la cerca de apertura.',
      },
      {
        question: '¿Puedo convertir Markdown a HTML para un correo?',
        answer:
          'Sí. Copia el fragmento HTML compilado y pégalo en un editor de correo que acepte HTML, o exporta primero el documento completo.',
      },
      {
        question: '¿Puedo escribir bloques de código con una etiqueta de lenguaje?',
        answer:
          'Sí. Agrega el nombre del lenguaje después de las comillas invertidas de apertura, por ejemplo ```js, y el bloque se renderiza como código con formato.',
      },
      {
        question: '¿Puedo pegar Markdown copiado de otro editor?',
        answer:
          'Sí. Pega Markdown de cualquier editor o aplicación de notas y la vista previa se actualiza de inmediato.',
      },
      {
        question: '¿Qué pasa con los enlaces en la vista previa?',
        answer:
          'Los enlaces se renderizan como anclas clicables en la vista previa, y solo se permiten protocolos seguros como https, rutas relativas, anclas y mailto.',
      },
      {
        question: '¿Puedo imprimir la vista previa renderizada?',
        answer:
          'Sí. Exporta el archivo HTML y ábrelo en tu navegador, luego usa la función de impresión del navegador para imprimirlo o guardarlo como PDF.',
      },
    ],
  },
  'line-prefix-suffix': {
    slug: 'agregar-prefijo-sufijo-y-numeros-a-lineas',
    name: 'Agregar Números de Línea y Prefijo/Sufijo',
    shortDescription:
      'Agrega números de línea, prefijos personalizados y sufijos a cada línea para listas, cláusulas SQL y código.',
    keywords: [
      'agregar prefijo y sufijo a líneas',
      'agregar números de línea a texto',
      'envolver líneas entre comillas',
      'formateador de líneas por lotes',
      'anteponer texto a cada línea',
      'agregar texto a líneas',
      'generador de números de línea',
      'formateador de cláusula in sql',
      'agregar coma a cada línea',
    ],
    seo: {
      title: 'Agregar Prefijo, Sufijo y Números a Líneas | UtilityFlow',
      description:
        'Agrega números de línea, prefijos y sufijos personalizados a cada línea de texto para listas, consultas SQL y arreglos de código al instante, gratis y privado.',
      primaryKeyword: 'agregar prefijo y sufijo a líneas',
      secondaryKeywords: ['agregar números de línea online', 'herramienta de prefijo y sufijo de línea', 'envolver líneas entre comillas', 'formateador de líneas por lotes'],
      longTailKeywords: ['envolver cada línea entre comillas simples y coma para sql', 'agregar prefijo de lista numerada a líneas de texto', 'anteponer y agregar texto a cada línea por lotes', 'agregar números de línea empezando desde cero'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Antepone números de línea secuenciales, caracteres de viñeta o comillas de apertura y agrega comas, puntos y coma o etiquetas de cierre en cada línea de una lista en segundos.',
    instructions: [
      {
        title: 'Configura tu prefijo y sufijo',
        description:
          'Escribe cualquier texto para agregar antes o después de cada línea, como una comilla de apertura, una viñeta o una etiqueta de cierre.',
      },
      {
        title: 'Activa los números de línea si los necesitas',
        description:
          'Activa Agregar números de línea y configura el número inicial y el separador, por ejemplo "1. " o "01: ".',
      },
      {
        title: 'Pega tus líneas',
        description:
          'Escribe un elemento por fila en Líneas de entrada, o haz clic en Cargar ejemplo para ver el entrecomillado estilo SQL en acción.',
      },
      {
        title: 'Elige cómo se manejan las líneas en blanco',
        description:
          'Mantén Omitir líneas vacías marcado para que las líneas en blanco de separación se conserven sin numeración ni caracteres extra.',
      },
      {
        title: 'Revisa la salida formateada',
        description:
          'Verifica que las comillas, las comas y los números se alineen en cada línea antes de usar el resultado.',
      },
      {
        title: 'Copia las líneas formateadas',
        description:
          'Copia todo el bloque a tu portapapeles y pégalo en tu consulta SQL, archivo de código o documento.',
      },
    ],
    examples: [
      {
        title: 'Formato de valores para una cláusula IN de SQL',
        input: 'Prefijo: \'  |  Sufijo: \',  |  Líneas: tokyo / london',
        output: "'tokyo',\n'london',",
        explanation: 'Envuelve elementos de texto plano entre comillas simples y comas finales al instante.',
      },
      {
        title: 'Pasos numerados con ceros a la izquierda',
        input: 'Números de línea: Activado · Rellenar con ceros: Activado · Separador: ": "',
        output: '01: Paso uno\n02: Paso dos',
        explanation: 'Crea listas numeradas alineadas para esquemas o documentación.',
      },
    ],
    benefits: [
      'Combina prefijo, sufijo y numeración de línea secuencial en una sola herramienta',
      'El relleno opcional con ceros mantiene alineadas las listas de varios dígitos',
      'Omite automáticamente las líneas en blanco cuando está activado para que los contadores se mantengan precisos',
      'Sin subidas al servidor para ID sensibles o valores de consulta',
    ],
    useCases: [
      'Envolver ID de hojas de cálculo entre comillas y comas para consultas SQL IN (...)',
      'Convertir elementos de texto plano en viñetas Markdown o etiquetas HTML <li>',
      'Agregar números de paso secuenciales a listas de verificación y esquemas',
      'Crear arreglos de cadenas para JavaScript, Python o JSON',
    ],
    faqs: [
      {
        question: '¿Puedo agregar solo números de línea sin prefijo ni sufijo?',
        answer:
          'Sí. Limpia las entradas de Prefijo de línea y Sufijo de línea, activa "Agregar números de línea" y configura tu número inicial y separador preferidos.',
      },
      {
        question: '¿Cómo omito numerar las líneas en blanco de separación?',
        answer:
          'Mantén "Omitir líneas vacías" marcado para que las líneas en blanco se conserven sin incrementar el contador de líneas ni recibir prefijos o sufijos.',
      },
      {
        question: '¿Puedo comenzar la numeración desde 0 o cualquier número personalizado?',
        answer:
          'Sí. Ingresa cualquier número entero en el campo Número inicial para comenzar a contar desde 0, 1, 100 u otro desplazamiento.',
      },
      {
        question: '¿Qué es la herramienta Agregar Números de Línea y Prefijo/Sufijo?',
        answer:
          'Agrega un prefijo personalizado, un sufijo o un número de línea secuencial a cada línea de una lista, para que puedas formatear texto en masa en lugar de editar cada línea a mano.',
      },
      {
        question: '¿La herramienta de prefijo y sufijo de línea es gratis?',
        answer:
          'Sí, es completamente gratis, sin registro, y se ejecuta en tu navegador para que tu texto nunca salga de tu dispositivo.',
      },
      {
        question: '¿Puedo agregar un prefijo sin sufijo?',
        answer:
          'Sí. Completa solo el campo Prefijo de línea y deja el sufijo vacío, o al revés, y solo se aplicará la parte que ingresaste.',
      },
      {
        question: '¿Cómo envuelvo líneas entre comillas para una cláusula IN de SQL?',
        answer:
          'Escribe una comilla simple como prefijo y "\'," como sufijo, y cada línea se convierte en un valor entre comillas seguido de una coma.',
      },
      {
        question: '¿Puedo agregar una coma al final de cada línea?',
        answer:
          'Sí. Pon una coma en el campo Sufijo de línea y cada línea no vacía terminará con una.',
      },
      {
        question: '¿Cómo funciona el relleno con ceros para los números de línea?',
        answer:
          'Cuando el relleno con ceros está activado, los números se rellenan al mismo ancho, así que una lista de 100 líneas muestra 001, 002, etc., en lugar de 1, 2 y 100.',
      },
      {
        question: '¿Qué separador debo usar para las líneas numeradas?',
        answer:
          'Las opciones comunes son ". " para listas numeradas simples, ": " para pasos etiquetados y ") " para numeración estilo esquema.',
      },
      {
        question: '¿Puedo numerar líneas empezando desde un número distinto de 1?',
        answer:
          'Sí. Ingresa cualquier número entero en el campo Número inicial para comenzar desde 0, 100 o cualquier otro desplazamiento que necesites.',
      },
      {
        question: '¿Qué pasa con las líneas en blanco de mi lista?',
        answer:
          'Con Omitir líneas vacías activado, las líneas en blanco se mantienen tal cual sin números ni afijos; con él desactivado, se tratan como cualquier otra línea.',
      },
      {
        question: '¿Puedo usar la herramienta para crear una lista con viñetas Markdown?',
        answer:
          'Sí. Escribe "- " como prefijo y cada línea se convierte en un punto de viñeta Markdown.',
      },
      {
        question: '¿Puedo convertir líneas en elementos de lista HTML?',
        answer:
          'Sí. Usa "<li>" como prefijo y "</li>" como sufijo para envolver cada línea en etiquetas de elemento de lista.',
      },
      {
        question: '¿La herramienta sube mi texto a un servidor?',
        answer:
          'No. Todo el formato ocurre localmente en tu navegador, lo que mantiene privados los ID sensibles, los valores de consulta y el código.',
      },
      {
        question: '¿Puedo formatear líneas para un arreglo de JavaScript o Python?',
        answer:
          'Sí. Envuelve las líneas entre comillas con una coma final y pega el resultado directamente en un literal de arreglo.',
      },
      {
        question: '¿Hay un límite de cuántas líneas puedo formatear?',
        answer:
          'La herramienta maneja listas largas cómodamente, aunque los pegados extremadamente grandes pueden tardar un momento en procesarse en el navegador.',
      },
      {
        question: '¿Por qué algunas líneas no se están numerando?',
        answer:
          'Verifica si Omitir líneas vacías está activado, ya que las líneas en blanco se omiten por diseño y no recibirán un número.',
      },
      {
        question: '¿Puedo agregar prefijos diferentes a líneas diferentes?',
        answer:
          'No. La herramienta aplica el mismo prefijo y sufijo a cada línea; para formato mixto, pasa cada grupo por la herramienta por separado.',
      },
      {
        question: '¿Cómo elimino un prefijo que agregué por error?',
        answer:
          'Pega el texto formateado en la herramienta Buscar y Reemplazar o vuelve a pasar la lista original con la configuración correcta, ya que esta herramienta solo agrega texto y no lo elimina.',
      },
    ],
  },
};
