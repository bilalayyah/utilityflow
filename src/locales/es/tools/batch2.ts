import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Filled by Phase 1 translation. See batch1.ts for the required shape.
 */
export const ES_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'json-formatter': {
    slug: 'formateador-json',
    name: 'Formateador y Validador JSON',
    shortDescription:
      'Formatea, minimiza, ordena claves y valida la sintaxis JSON con errores señalados por línea y columna.',
    keywords: [
      'formateador json',
      'validador json',
      'embellecedor json',
      'minificador json',
      'imprimir json bonito',
      'formatear json en linea',
      'verificador de sintaxis json',
      'json lint',
      'analizador json',
    ],
    seo: {
      title: 'Formateador JSON y Validador en Línea | UtilityFlow',
      description:
        'Formatea, valida, minimiza y ordena claves JSON al instante en tu navegador, con errores de sintaxis precisos por línea y columna para depurar rápido.',
      primaryKeyword: 'formateador json',
      secondaryKeywords: [
        'validador json',
        'embellecedor json',
        'minificador json',
        'imprimir json bonito',
      ],
      longTailKeywords: [
        'validar e imprimir json en linea gratis',
        'ordenar claves json alfabeticamente en el navegador',
        'minimizar json sin subirlo al servidor',
        'formatear json anidado con indentacion en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Valida cargas JSON con formato incorrecto con comentarios por línea y columna, formatea estructuras anidadas con indentación de 2 espacios, 4 espacios o tabulación, ordena las claves alfabéticamente o minimiza para el transporte en producción.',
    instructions: [
      {
        title: 'Pega el JSON sin procesar',
        description:
          'Inserta cualquier objeto o arreglo JSON en la entrada de JSON sin procesar, o haz clic en Cargar ejemplo para revisar una carga de muestra.',
      },
      {
        title: 'Selecciona el modo de formato',
        description:
          'Cambia entre 2 espacios, 4 espacios, Tabulación o Minimizar, y activa opcionalmente Ordenar claves de la A a la Z.',
      },
      {
        title: 'Corrige errores de sintaxis con pistas de línea y columna',
        description:
          'Si el validador reporta un error, lee la línea y la columna exactas que se muestran, corrige la coma, la comilla o el corchete problemático en tu entrada y el aviso de estado se actualiza al instante.',
      },
      {
        title: 'Revisa el resultado formateado y las estadísticas',
        description:
          'Confirma el aviso de estado JSON válido que muestra el total de claves, la profundidad de anidado y el tamaño en bytes, y luego revisa el resultado formateado para comprobar que las estructuras anidadas se vean bien.',
      },
      {
        title: 'Copia o descarga el resultado',
        description:
          'Haz clic en Copiar para colocar el JSON formateado en tu portapapeles, o en Descargar para guardarlo como un archivo .json para tu proyecto.',
      },
      {
        title: 'Consejo: compara tamaños y limpia las diferencias',
        description:
          'Pega la misma carga otra vez después de minimizarla para comparar los tamaños en bytes, o activa Ordenar claves de la A a la Z antes de una diferencia en git para que solo se muestren los cambios reales.',
      },
    ],
    examples: [
      {
        title: 'Formato de una respuesta de API minimizada',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation: 'Expande cargas de API compactas de una sola línea en JSON legible con indentación.',
      },
      {
        title: 'Ordenación alfabética de claves',
        input: '{"b": 2, "a": 1}',
        output: '{\n  "a": 1,\n  "b": 2\n}',
        explanation: 'Ordena las claves de los objetos alfabéticamente para que las diferencias en git sean limpias.',
      },
    ],
    benefits: [
      'Reporta la posición de los errores de sintaxis con contexto de línea y columna',
      'Ordena de forma recursiva las claves de los objetos anidados alfabéticamente para diferencias limpias',
      'Calcula el total de claves, la profundidad máxima de anidado y el tamaño de salida en bytes',
      'Mantiene las respuestas privadas de API y los tokens estrictamente en la memoria del navegador',
    ],
    useCases: [
      'Depurar cargas de API REST y GraphQL durante el desarrollo',
      'Normalizar archivos package.json o de configuración antes de compararlos en git',
      'Minimizar archivos JSON de prueba y conjuntos de datos estáticos',
      'Validar cuerpos de webhooks antes de escribir analizadores',
    ],
    faqs: [
      {
        question: '¿La ordenación de claves altera el orden de los elementos del arreglo?',
        answer:
          'No. Ordenar claves de la A a la Z solo reordena las claves dentro de los objetos JSON y conserva la secuencia exacta de los elementos del arreglo.',
      },
      {
        question: '¿Por qué el JSON con comas finales muestra un error de sintaxis?',
        answer:
          'El JSON estricto de la norma RFC 8259 no permite comas finales ni claves entre comillas simples. El validador señala la línea y la columna exactas para que puedas corregirlo antes de desplegar.',
      },
      {
        question: '¿Mi carga JSON queda registrada en algún lugar?',
        answer:
          'Nunca. El análisis y el formato se ejecutan por completo con JavaScript en la pestaña de tu navegador.',
      },
      {
        question: '¿El Formateador JSON es gratis?',
        answer:
          'Sí, el Formateador JSON es completamente gratis, sin registro, sin límites de uso y sin marca de agua en el resultado.',
      },
      {
        question: '¿Cuál es la diferencia entre formatear y minimizar JSON?',
        answer:
          'Formatear agrega indentación y saltos de línea para que el JSON sea fácil de leer, mientras que minimizar elimina todo el espacio en blanco innecesario para que la carga sea lo más pequeña posible para el transporte.',
      },
      {
        question: '¿El Formateador JSON puede manejar archivos JSON grandes?',
        answer:
          'Sí. Como todo el procesamiento ocurre localmente en tu navegador, no hay límite de subida al servidor, aunque las cargas muy grandes dependen de la memoria de tu navegador.',
      },
      {
        question: '¿Qué opciones de indentación ofrece el Formateador JSON?',
        answer:
          'Puedes formatear con 2 espacios, 4 espacios o un carácter de tabulación, para que el resultado coincida con el estilo de tu código.',
      },
      {
        question: '¿El Formateador JSON admite arreglos JSON en el nivel superior?',
        answer:
          'Sí. Un arreglo en el nivel superior es JSON válido, así que puedes pegar y formatear arreglos igual que los objetos.',
      },
      {
        question: '¿Cómo corrijo un error "Unexpected token" en mi JSON?',
        answer:
          'Revisa la línea y la columna que indica el validador. Las causas más comunes son una coma faltante, un corchete sin cerrar o una comilla simple donde se requiere una comilla doble.',
      },
      {
        question: '¿Puedo formatear JSON con comentarios o comas finales?',
        answer:
          'No. Los comentarios y las comas finales no forman parte del JSON estricto, así que elimínalos primero y el formateador aceptará la entrada limpia.',
      },
      {
        question: '¿Qué significa la estadística de profundidad de anidado en el Formateador JSON?',
        answer:
          'La profundidad de anidado cuenta cuántos niveles de profundidad tiene el valor más anidado dentro de objetos y arreglos, lo que ayuda a juzgar qué tan compleja es una carga.',
      },
      {
        question: '¿El Formateador JSON conserva el orden de las claves de los objetos?',
        answer:
          'Sí, a menos que actives Ordenar claves de la A a la Z. Por defecto, el formateador mantiene el orden original de tus claves exactamente como lo pegaste.',
      },
      {
        question: '¿Puedo ordenar las claves en objetos JSON anidados también?',
        answer:
          'Sí. La ordenación se aplica de forma recursiva, así que las claves dentro de cada objeto anidado se reordenan alfabéticamente mientras el orden de los arreglos queda intacto.',
      },
      {
        question: '¿Qué formato de archivo produce la descarga del Formateador JSON?',
        answer:
          'La descarga guarda tu resultado formateado o minimizado como un archivo de texto .json estándar que puedes abrir en cualquier editor.',
      },
      {
        question: '¿El Formateador JSON funciona sin conexión?',
        answer:
          'Sí. Una vez que la página ha cargado, el formato y la validación se ejecutan por completo en tu navegador sin solicitudes de red.',
      },
      {
        question: '¿Por qué se rechaza como JSON mi objeto JavaScript válido?',
        answer:
          'JSON es más estricto que JavaScript: las claves deben usar comillas dobles, los valores no pueden ser undefined ni funciones, y las comas finales no están permitidas.',
      },
      {
        question: '¿El Formateador JSON puede validar JSON de una respuesta de API?',
        answer:
          'Sí. Pega el cuerpo sin procesar de la respuesta en la entrada y el validador confirmará si es JSON válido y señalará cualquier error de sintaxis.',
      },
      {
        question: '¿Cuál es el tamaño máximo de JSON que puedo pegar en el Formateador JSON?',
        answer:
          'No hay un límite fijo de tamaño porque nada se sube a un servidor. Los límites prácticos dependen solo de la memoria de tu navegador y de qué tan grande sea el cuadro de texto que puede manejar sin problemas.',
      },
      {
        question: '¿Minimizar JSON cambia su significado?',
        answer:
          'No. Minimizar solo elimina el espacio en blanco, así que los datos, las claves y los valores se mantienen exactamente iguales mientras el archivo se hace más pequeño.',
      },
      {
        question: '¿Cómo copio JSON formateado sin espacio en blanco extra?',
        answer:
          'Cambia primero al modo Minimizar y luego haz clic en Copiar. El portapapeles contendrá el JSON compacto en una sola línea, sin espacios ni saltos de línea extra.',
      },
    ],
  },
  'base64-encoder-decoder': {
    slug: 'codificador-decodificador-base64',
    name: 'Codificador / Decodificador Base64',
    shortDescription:
      'Codifica texto a Base64 estándar o URL-safe y decodifica cadenas Base64 UTF-8 de forma segura en la memoria del navegador.',
    keywords: [
      'codificador base64',
      'decodificador base64',
      'base64 utf8',
      'base64 url safe',
      'codificar base64 en linea',
      'decodificar base64 en linea',
      'codificar texto a base64',
      'decodificar base64 a texto',
      'convertidor base64',
    ],
    seo: {
      title: 'Codificador y Decodificador Base64 Online | UtilityFlow',
      description:
        'Codifica texto UTF-8 a Base64 en línea o decodifica Base64 a texto legible, con opciones URL-safe y sin relleno, todo procesado localmente en tu navegador.',
      primaryKeyword: 'codificador decodificador base64',
      secondaryKeywords: [
        'decodificar base64 en linea',
        'codificar base64 utf8',
        'base64 url safe',
        'base64 a texto',
      ],
      longTailKeywords: [
        'codificar emojis utf8 a base64 en linea',
        'decodificar base64 url safe sin relleno',
        'convertidor base64 en el navegador',
        'decodificar cadena base64 con emojis en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierte cadenas UTF-8, incluidos caracteres acentuados y emojis, a Base64 estándar o Base64 URL-safe según RFC 4648, o decodifica cadenas Base64 de vuelta a texto plano con validación instantánea.',
    instructions: [
      {
        title: 'Elige Codificar o Decodificar',
        description:
          'Selecciona Codificar a Base64 o Decodificar Base64 en la parte superior del espacio de trabajo.',
      },
      {
        title: 'Pega tu texto o tu cadena Base64',
        description:
          'Escribe el texto UTF-8 que quieres codificar, o la cadena Base64 que quieres decodificar, en el cuadro de entrada.',
      },
      {
        title: 'Configura las opciones de Base64',
        description:
          'En el modo Codificar, activa opcionalmente la salida URL-safe (- y _) o quita los caracteres = de relleno al final.',
      },
      {
        title: 'Revisa el resultado y la validación',
        description:
          'Revisa el resultado convertido al instante. Si una decodificación falla, busca relleno faltante o caracteres fuera del alfabeto Base64.',
      },
      {
        title: 'Copia o intercambia',
        description:
          'Copia el resultado a tu portapapeles o haz clic en Intercambiar para invertir la dirección usando tu resultado actual.',
      },
      {
        title: 'Consejo: cómo manejar tokens URL-safe',
        description:
          'Cuando pegues tokens de una URL, usa el modo URL-safe para que - y _ se manejen correctamente. Recuerda que Base64 es codificación, no cifrado, así que nunca lo trates como almacenamiento seguro.',
      },
    ],
    examples: [
      {
        title: 'Codificación de una cadena UTF-8',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation: 'Usa serialización de bytes UTF-8 con TextEncoder antes de la conversión a Base64.',
      },
      {
        title: 'Codificación de texto en español',
        input: 'Hola, mundo',
        output: 'SG9sYSwgbXVuZG8=',
        explanation: 'Codifica texto con caracteres acentuados sin perder información, gracias a la codificación UTF-8.',
      },
    ],
    benefits: [
      'La codificación y decodificación seguras en UTF-8 evitan los fallos de Unicode del btoa/atob clásico',
      'Admite el alfabeto URL-safe de RFC 4648 (- y _) y la decodificación sin relleno',
      'El botón Intercambiar mueve el resultado a la entrada e invierte el modo con un clic',
      'Ejecución local segura para claves de API y encabezados de autenticación básica',
    ],
    useCases: [
      'Codificar credenciales de autenticación básica HTTP de forma local',
      'Inspeccionar cargas JSON codificadas en Base64 o URIs de datos',
      'Preparar tokens Base64 URL-safe para parámetros de consulta',
      'Decodificar fragmentos de cuerpos de correo o de webhooks en Base64',
    ],
    faqs: [
      {
        question: '¿Por qué el btoa() estándar falla con caracteres Unicode?',
        answer:
          'El btoa() nativo solo acepta puntos de código Latin-1 de un solo byte. Esta herramienta convierte primero el texto a bytes UTF-8 con TextEncoder, así que todos los alfabetos internacionales y los emojis se codifican sin problemas.',
      },
      {
        question: '¿El decodificador puede manejar Base64 URL-safe sin relleno "="?',
        answer:
          'Sí. El decodificador normaliza automáticamente "-" y "_" de vuelta a "+" y "/" y restaura el relleno "=" faltante antes de decodificar.',
      },
      {
        question: '¿Base64 es cifrado?',
        answer:
          'No. Base64 es un formato de codificación para representar datos binarios o de texto en ASCII, no un cifrado criptográfico.',
      },
      {
        question: '¿El Codificador Base64 es gratis?',
        answer:
          'Sí, el Codificador Base64 es completamente gratis, sin registro y sin límites en la cantidad de cadenas que conviertes.',
      },
      {
        question: '¿Qué caracteres están permitidos en una cadena Base64?',
        answer:
          'El Base64 estándar usa A–Z, a–z, 0–9, además de + y /, con = para el relleno. La variante URL-safe reemplaza + y / por - y _.',
      },
      {
        question: '¿Por qué mi resultado Base64 es más largo que mi entrada?',
        answer:
          'Base64 representa cada 3 bytes de entrada como 4 caracteres ASCII, así que el resultado codificado es aproximadamente un tercio más largo que el texto original.',
      },
      {
        question: '¿Puedo codificar emojis y texto en otros idiomas a Base64?',
        answer:
          'Sí. La herramienta codifica primero el texto como bytes UTF-8, así que los emojis, las letras acentuadas y los alfabetos no latinos se codifican y decodifican correctamente.',
      },
      {
        question: '¿Qué es el Base64 URL-safe y cuándo debería usarlo?',
        answer:
          'El Base64 URL-safe reemplaza + y / por - y _, para que la cadena codificada pueda ir dentro de una URL o un nombre de archivo sin codificación por porcentaje. Úsalo para tokens que se pasan en parámetros de consulta.',
      },
      {
        question: '¿Cómo decodifico una cadena Base64 sin relleno?',
        answer:
          'Pégala directamente. El decodificador detecta el relleno = faltante y lo restaura automáticamente antes de decodificar.',
      },
      {
        question: '¿El Codificador Base64 puede manejar archivos binarios?',
        answer:
          'No, esta herramienta solo codifica texto. Para codificar un archivo habría que leer primero sus bytes, algo que esta herramienta basada en texto no hace.',
      },
      {
        question: '¿Cuál es la diferencia entre Base64 y Base64URL?',
        answer:
          'Base64URL es la variante URL-safe de Base64: cambia + por - y / por _, y normalmente elimina el relleno =, para que el resultado sea seguro en URLs y nombres de archivo.',
      },
      {
        question: '¿Por qué mi texto decodificado de Base64 muestra caracteres extraños?',
        answer:
          'Probablemente el texto original se codificó con una codificación de bytes distinta a UTF-8, o la cadena Base64 está dañada. Intenta volver a codificar la fuente como UTF-8 y compara.',
      },
      {
        question: '¿Puedo codificar una contraseña o un secreto con Base64?',
        answer:
          'Puedes, pero no deberías confiar en eso para la seguridad. Base64 se puede revertir con total facilidad, así que cualquiera que vea la cadena codificada puede decodificarla al instante.',
      },
      {
        question: '¿Cómo codifico texto para un encabezado de autenticación básica?',
        answer:
          'Combina el nombre de usuario y la contraseña como usuario:contraseña, codifica esa cadena a Base64 y úsala como Authorization: Basic <valor codificado> en tu solicitud.',
      },
      {
        question: '¿El Codificador Base64 funciona sin conexión?',
        answer:
          'Sí. Una vez que la página ha cargado, la codificación y la decodificación se ejecutan por completo en tu navegador sin solicitudes de red.',
      },
      {
        question: '¿Qué pasa si pego una cadena Base64 no válida en el decodificador?',
        answer:
          'El decodificador reporta un error en lugar de adivinar. Revisa si hay caracteres fuera del alfabeto Base64, relleno faltante o espacios en blanco y saltos de línea perdidos.',
      },
      {
        question: '¿Puedo decodificar una URI de datos Base64 con esta herramienta?',
        answer:
          'Sí, si pegas solo la parte Base64 después de la coma. Quita primero el prefijo data:...;base64, ya que no forma parte de los datos codificados.',
      },
      {
        question: '¿Por qué algunas cadenas Base64 terminan con signos "="?',
        answer:
          'Los signos = son relleno que se agrega cuando la longitud de la entrada no es múltiplo de tres bytes. Le indican al decodificador exactamente cuántos bytes representa el último grupo.',
      },
      {
        question: '¿Mi texto se sube a un servidor cuando lo codifico?',
        answer:
          'No. La codificación y la decodificación se ejecutan localmente en tu navegador, así que las cadenas sensibles como las claves de API nunca salen de tu dispositivo.',
      },
      {
        question: '¿Cómo convierto Base64 de vuelta al texto original?',
        answer:
          'Cambia al modo Decodificar, pega la cadena Base64 y la herramienta devuelve el texto UTF-8 original, que luego puedes copiar.',
      },
    ],
  },
  'url-encoder-decoder': {
    slug: 'codificador-decodificador-url',
    name: 'Codificador / Decodificador de URL',
    shortDescription:
      'Codifica por porcentaje valores de consulta o URLs completas e inspecciona el host, la ruta y los parámetros de consulta analizados.',
    keywords: [
      'codificador url',
      'decodificador url',
      'codificacion por porcentaje',
      'analizador de url',
      'codificar url en linea',
      'decodificar url en linea',
      'herramienta codificar url',
      'encodeuricomponent',
      'codificador de cadena de consulta',
    ],
    seo: {
      title: 'Codificador y Decodificador de URL Online | UtilityFlow',
      description:
        'Codifica o decodifica URLs en línea con los modos encodeURIComponent y encodeURI mientras revisas el protocolo, el host, la ruta y los parámetros de consulta.',
      primaryKeyword: 'codificador decodificador url',
      secondaryKeywords: [
        'codificacion por porcentaje en linea',
        'herramienta decodificar url',
        'analizador de cadena de consulta',
        'encodeuricomponent en linea',
      ],
      longTailKeywords: [
        'diferencia entre encodeuri y encodeuricomponent',
        'decodificar parametros de consulta de url en linea',
        'codificar por porcentaje caracteres especiales para urls',
        'codificar valor de consulta url sin romper el ampersand',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Codifica de forma segura valores de parámetros de consulta o URLs completas, decodifica cadenas con codificación por porcentaje (%20, %3A, +) e inspecciona un desglose en vivo de cada parámetro de consulta en una tabla.',
    instructions: [
      {
        title: 'Elige Codificar o Decodificar',
        description:
          'Cambia entre Codificar y Decodificar, y luego selecciona encodeURIComponent (para un solo valor de parámetro) o encodeURI (para conservar los delimitadores ://?&).',
      },
      {
        title: 'Pega una URL o una cadena de parámetros',
        description:
          'Escribe cualquier URL o fragmento con codificación por porcentaje en Entrada de cadena o URL.',
      },
      {
        title: 'Revisa el resultado codificado o decodificado',
        description:
          'Revisa el cuadro de salida para confirmar que los caracteres especiales como espacios, & e = se codificaron o decodificaron exactamente como esperabas.',
      },
      {
        title: 'Inspecciona los parámetros analizados',
        description:
          'Cuando se detecta una URL completa válida, revisa la tabla de desglose de URL analizada que aparece abajo para ver los pares clave-valor de consulta decodificados.',
      },
      {
        title: 'Copia el resultado',
        description:
          'Haz clic en Copiar para usar la URL codificada en tu código, enlace o solicitud de API sin volver a escribirla.',
      },
      {
        title: 'Solución de problemas: secuencias % con formato incorrecto',
        description:
          'Si ves un error sobre una secuencia % con formato incorrecto, busca un % solo que no esté seguido de dos dígitos hexadecimales, como %2, y corrígelo antes de decodificar otra vez.',
      },
    ],
    examples: [
      {
        title: 'Codificación de un valor de consulta',
        input: 'json formatter & validator',
        output: 'json%20formatter%20%26%20validator',
        explanation: 'Usar encodeURIComponent escapa "&" para que no divida tu cadena de consulta.',
      },
      {
        title: 'Decodificación de un valor de consulta',
        input: 'json%20formatter%20%26%20validator',
        output: 'json formatter & validator',
        explanation: 'Decodifica %20 como espacios y %26 como el carácter &.',
      },
    ],
    benefits: [
      'Aclara el comportamiento de encodeURIComponent frente a encodeURI lado a lado',
      'Analiza automáticamente las URLs válidas en filas de protocolo, host, ruta, hash y consulta',
      'Maneja sin problemas la codificación de espacios con "+" al decodificar cadenas de consulta de formularios',
      'Reporta con claridad las secuencias % con formato incorrecto',
    ],
    useCases: [
      'Depurar URIs de redirección de OAuth y parámetros de devolución de llamada',
      'Escapar consultas de búsqueda o cadenas JSON que se pasan en parámetros de consulta',
      'Auditar enlaces de campañas UTM con varios parámetros de seguimiento',
      'Decodificar URLs de registros de acceso del servidor para revisión humana',
    ],
    faqs: [
      {
        question: '¿Cuándo debería usar encodeURIComponent en lugar de encodeURI?',
        answer:
          'Usa encodeURIComponent cuando codifiques un solo valor de parámetro de consulta (para que caracteres como & e = queden escapados). Usa encodeURI cuando codifiques una URL completa y quieras mantener intactos https://, /, ? y &.',
      },
      {
        question: '¿Por qué una URL decodificada convirtió "+" en un espacio?',
        answer:
          'En las cadenas de consulta application/x-www-form-urlencoded, "+" representa un espacio. La decodificación de componentes normaliza "+" a espacios automáticamente.',
      },
      {
        question: '¿El analizador de URL valida si un dominio es accesible?',
        answer:
          'No. El análisis usa la API de URL del navegador de forma local sin enviar ninguna solicitud de red al host de destino.',
      },
      {
        question: '¿El Codificador de URL es gratis?',
        answer:
          'Sí, el Codificador de URL es completamente gratis, sin registro y sin límites en la cantidad de URLs que codificas o decodificas.',
      },
      {
        question: '¿Qué caracteres cambia la codificación de URL?',
        answer:
          'La codificación de URL convierte caracteres reservados e inseguros, como espacios, &, =, ?, # y letras no ASCII, en % seguido de dos dígitos hexadecimales.',
      },
      {
        question: '¿Cuál es la diferencia entre %20 y + para los espacios en una URL?',
        answer:
          'Ambos pueden representar un espacio en una cadena de consulta, pero %20 es la codificación por porcentaje estándar, mientras que + solo significa espacio en cadenas de consulta codificadas de formulario, no en rutas.',
      },
      {
        question: '¿El Codificador de URL puede codificar una URL completa manteniendo https:// intacto?',
        answer:
          'Sí. Elige el modo encodeURI y el esquema, las barras y los delimitadores quedan intactos mientras solo se codifican los caracteres inseguros.',
      },
      {
        question: '¿Cómo codifico un ampersand en un valor de consulta?',
        answer:
          'Usa el modo encodeURIComponent solo sobre el valor. Convierte & en %26 para que el ampersand se trate como dato en lugar de dividir tu cadena de consulta.',
      },
      {
        question: '¿Por qué mi URL decodificada todavía contiene signos %?',
        answer:
          'Un % seguido de dos dígitos hexadecimales se decodifica una vez, así que un valor doblemente codificado como %2520 se convierte en %20 después de una decodificación. Ejecuta la decodificación otra vez si necesitas la forma totalmente decodificada.',
      },
      {
        question: '¿Puedo decodificar una URL con varios parámetros de consulta?',
        answer:
          'Sí. El decodificador maneja toda la cadena de consulta, y la tabla de desglose analizado muestra cada par clave-valor por separado para inspeccionarlo con facilidad.',
      },
      {
        question: '¿El Codificador de URL maneja caracteres Unicode?',
        answer:
          'Sí. Los caracteres no ASCII primero se convierten a bytes UTF-8 y luego se codifican por porcentaje, así que las letras acentuadas y otros alfabetos se codifican correctamente.',
      },
      {
        question: '¿Qué es la codificación por porcentaje en una URL?',
        answer:
          'La codificación por porcentaje reemplaza un carácter por un signo % seguido de su valor hexadecimal de dos dígitos, lo que mantiene las URLs válidas cuando contienen espacios o símbolos especiales.',
      },
      {
        question: '¿Cómo codifico una URL para usarla en un correo o un documento?',
        answer:
          'Pega la URL, elige el modo encodeURI y copia el resultado. El enlace codificado sigue siendo clicable y no se romperá al dividirse en líneas en texto plano.',
      },
      {
        question: '¿El Decodificador de URL valida la URL?',
        answer:
          'Comprueba que la entrada sea una URL bien formada y que cada secuencia % sea válida, pero no verifica si el dominio existe o si la página carga.',
      },
      {
        question: '¿Puedo codificar espacios como %20 en lugar de +?',
        answer:
          'Sí. El codificador siempre usa %20 para los espacios. La forma + solo aparece al decodificar entrada codificada de formulario, donde + ya significa un espacio.',
      },
      {
        question: '¿Qué pasa si codifico una URL que ya estaba codificada?',
        answer:
          'Los signos % mismos se codifican a %25, lo que produce doble codificación como %2520. Decodifica una vez para volver a la forma codificada una sola vez.',
      },
      {
        question: '¿Mi URL se sube a un servidor cuando la codifico?',
        answer:
          'No. La codificación, la decodificación y el análisis se ejecutan localmente en tu navegador, así que los enlaces privados y los tokens nunca salen de tu dispositivo.',
      },
      {
        question: '¿Cómo codifico un fragmento o hash de URL?',
        answer:
          'Codifica solo el valor del fragmento con encodeURIComponent y luego agrégalo tú mismo después del #, para que el delimitador de hash no se codifique.',
      },
      {
        question: '¿Por qué algunas URLs codificadas se ven mucho más largas?',
        answer:
          'Cada carácter especial o no ASCII se convierte en tres caracteres (% más dos dígitos hexadecimales), así que las URLs con muchos espacios o caracteres Unicode crecen notablemente.',
      },
      {
        question: '¿El Codificador de URL puede manejar URLs muy largas?',
        answer:
          'Sí. El procesamiento se ejecuta localmente sin límite de subida al servidor, así que las URLs largas se codifican y decodifican en tu navegador mientras tu navegador pueda contener el texto.',
      },
    ],
  },
  'uuid-generator': {
    slug: 'generador-uuid',
    name: 'Generador de UUID (v4 y v7)',
    shortDescription:
      'Genera identificadores UUID v4 criptográficamente aleatorios y UUID v7 ordenados por tiempo según RFC 9562, en lotes.',
    keywords: [
      'generador uuid',
      'generador guid',
      'uuid v4',
      'generador uuid v7',
      'generador uuid v4 en linea',
      'generar uuid en linea',
      'generador uuid aleatorio',
      'generador uuid en lote',
      'generador uuid gratis',
    ],
    seo: {
      title: 'Generador de UUID v4 y v7 Gratis Online | UtilityFlow',
      description:
        'Genera hasta 100 identificadores UUID v4 criptográficamente aleatorios o UUID v7 ordenados por tiempo según RFC 9562, con mayúsculas, guiones y llaves.',
      primaryKeyword: 'generador uuid',
      secondaryKeywords: [
        'generador guid en linea',
        'generador uuid v4',
        'generador uuid v7',
        'generador uuid en lote',
      ],
      longTailKeywords: [
        'generar uuid v4 y v7 en lote en linea',
        'generador uuid v7 ordenado por tiempo rfc 9562',
        'generador uuid sin guiones en mayusculas',
        'generar 100 uuid a la vez en linea gratis',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crea lotes individuales o en masa de identificadores UUID v4 criptográficamente aleatorios y UUID v7 ordenados por marca de tiempo según RFC 9562, directamente con las API de Web Crypto, con interruptores de formato.',
    instructions: [
      {
        title: 'Elige UUID v4 o v7',
        description:
          'Elige v4 para identificadores aleatorios estándar o v7 para claves primarias de base de datos ordenables con prefijo de marca de tiempo.',
      },
      {
        title: 'Configura la cantidad y el formato',
        description:
          'Escribe entre 1 y 100 identificadores y activa Mayúsculas, Incluir guiones o Envolver entre {llaves}.',
      },
      {
        title: 'Genera un lote nuevo',
        description:
          'Haz clic en Generar UUID para crear un lote nuevo. Cada clic produce un conjunto completamente nuevo de identificadores aleatorios.',
      },
      {
        title: 'Revisa los identificadores generados',
        description:
          'Revisa la lista para confirmar que la versión, el uso de mayúsculas y el formato de guiones coinciden con lo que espera tu base de datos o tu código.',
      },
      {
        title: 'Copia o descarga la lista',
        description:
          'Haz clic en Copiar todo para colocar cada identificador en tu portapapeles, o descarga el lote como un archivo .txt para sembrar registros o archivos de prueba.',
      },
      {
        title: 'Consejo: elige v7 para bases de datos',
        description:
          'Si guardas identificadores como claves primarias, prefiere v7 para que las filas nuevas se ordenen cronológicamente y tu índice se mantenga eficiente. Usa v4 cuando el orden no importe.',
      },
    ],
    examples: [
      {
        title: 'UUID v4 estándar en minúsculas',
        input: 'Versión: v4 · Guiones: activados · Mayúsculas: desactivadas',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation: 'Identificador de 128 bits según RFC 4122, adecuado para claves primarias distribuidas.',
      },
      {
        title: 'UUID v4 en mayúsculas',
        input: 'Versión: v4 · Guiones: activados · Mayúsculas: activadas',
        output: '550E8400-E29B-41D4-A716-446655440000',
        explanation: 'El mismo identificador con las letras hexadecimales A–F en mayúsculas.',
      },
    ],
    benefits: [
      'Usa crypto.randomUUID y crypto.getRandomValues del navegador (CSPRNG)',
      'Admite el moderno UUID v7 de RFC 9562 con prefijo de marca de tiempo de 48 bits en milisegundos',
      'Genera hasta 100 identificadores únicos a la vez en lote',
      'Formatea en mayúsculas, hex compacto sin guiones o cadenas GUID entre llaves',
    ],
    useCases: [
      'Sembrar archivos de prueba y registros de prueba para migraciones de base de datos',
      'Generar identificadores de correlación, claves de API e identificadores de prueba de webhooks',
      'Comparar UUID v7, amigable con índices B-tree, frente a UUID v4 aleatorio',
      'Crear constantes GUID entre llaves para Windows y C#',
    ],
    faqs: [
      {
        question: '¿Cuál es la ventaja de UUID v7 sobre UUID v4?',
        answer:
          'UUID v7 codifica una marca de tiempo Unix en milisegundos en sus bits más significativos, lo que hace que los identificadores se puedan ordenar cronológicamente y reduce la fragmentación del índice B-tree en bases de datos SQL.',
      },
      {
        question: '¿Estos UUID se generan con Math.random()?',
        answer:
          'No. Cada UUID usa aleatoriedad criptográficamente fuerte de la API Web Crypto.',
      },
      {
        question: '¿Cómo obtengo un identificador hex de 32 caracteres sin guiones?',
        answer:
          'Desmarca "Incluir guiones" para quitar los guiones de inmediato en todo el lote generado.',
      },
      {
        question: '¿El Generador de UUID es gratis?',
        answer:
          'Sí, el Generador de UUID es completamente gratis, sin registro, y puedes generar todos los lotes que necesites.',
      },
      {
        question: '¿Qué es un UUID y para qué se usa?',
        answer:
          'Un UUID es un identificador único de 128 bits, normalmente escrito como 32 dígitos hexadecimales en cinco grupos. Se usa para claves primarias de base de datos, identificadores de correlación, tokens de sesión y nombres de archivo.',
      },
      {
        question: '¿Dos UUID generados pueden ser alguna vez iguales?',
        answer:
          'En la práctica, no. Con 122 bits aleatorios en un UUID v4, una colisión es tan improbable que puedes tratar los identificadores generados como únicos.',
      },
      {
        question: '¿Cuál es la diferencia entre UUID v4 y UUID v7?',
        answer:
          'UUID v4 es totalmente aleatorio, mientras que UUID v7 comienza con una marca de tiempo en milisegundos, así que los identificadores más nuevos se ordenan después de los más viejos. Ambos son identificadores de 128 bits.',
      },
      {
        question: '¿Cuántos UUID puedo generar a la vez?',
        answer:
          'Puedes generar entre 1 y 100 UUID en un solo lote. Haz clic en Generar otra vez para obtener otro lote nuevo del mismo tamaño.',
      },
      {
        question: '¿Qué significa "ordenado por tiempo" para UUID v7?',
        answer:
          'Ordenado por tiempo significa que la primera parte del UUID es una marca de tiempo Unix en milisegundos, así que ordenar los identificadores alfabéticamente también los ordena por hora de creación.',
      },
      {
        question: '¿Puedo generar UUID sin guiones?',
        answer:
          'Sí. Desactiva Incluir guiones y cada UUID del lote se muestra como una cadena hex compacta de 32 caracteres.',
      },
      {
        question: '¿Qué son los GUID entre llaves y cuándo los necesito?',
        answer:
          'Los GUID entre llaves envuelven el UUID en llaves, como {550e8400-...}. Algunas herramientas de Microsoft y código C# esperan este formato para las constantes GUID.',
      },
      {
        question: '¿Los UUID generados aquí son seguros para uso en producción?',
        answer:
          'Sí. Usan la API Web Crypto del navegador, que proporciona aleatoriedad criptográficamente fuerte, adecuada para identificadores de producción.',
      },
      {
        question: '¿Puedo generar UUID en mayúsculas?',
        answer:
          'Sí. Activa el interruptor Mayúsculas y todo el lote se muestra con las letras hex A–F en mayúsculas.',
      },
      {
        question: '¿Necesito conexión a internet para generar UUID?',
        answer:
          'Solo para cargar la página. Una vez cargada, la generación se ejecuta por completo en tu navegador sin solicitudes de red.',
      },
      {
        question: '¿Mi lista de UUID generados se guarda o se sube a algún lugar?',
        answer:
          'No. La generación ocurre localmente en tu navegador, así que tus identificadores nunca se envían a un servidor ni se guardan en ningún lugar.',
      },
      {
        question: '¿Puedo usar un UUID como clave de API?',
        answer:
          'Puedes usarlo como un token opaco, pero un UUID es un identificador, no un secreto diseñado para autenticación. Para claves de API reales, usa un sistema adecuado de secretos con rotación.',
      },
      {
        question: '¿Cuál es la diferencia entre un UUID y un GUID?',
        answer:
          'Son el mismo formato de 128 bits. GUID es el nombre que usa Microsoft, mientras que UUID es el nombre del estándar abierto que se usa en todas partes.',
      },
      {
        question: '¿Por qué elegiría UUID v7 como clave primaria de una base de datos?',
        answer:
          'Como los identificadores v7 se ordenan por hora de creación, las filas nuevas caen cerca unas de otras en un índice B-tree, lo que mantiene las inserciones rápidas y reduce la fragmentación del índice en comparación con los identificadores v4 aleatorios.',
      },
      {
        question: '¿Puedo regenerar el mismo UUID dos veces?',
        answer:
          'No. Cada generación usa aleatoriedad criptográfica nueva, así que nunca obtendrás el mismo UUID otra vez. Guarda cualquier identificador que necesites reutilizar.',
      },
      {
        question: '¿Cómo copio todos los UUID generados a la vez?',
        answer:
          'Haz clic en Copiar todo para colocar todo el lote en tu portapapeles, un UUID por línea, listo para pegar en tu código, hoja de cálculo o script SQL.',
      },
    ],
  },
  'regex-tester': {
    slug: 'probador-regex',
    name: 'Probador de Regex',
    shortDescription:
      'Prueba expresiones regulares de JavaScript con resaltado de coincidencias en vivo, grupos de captura, banderas y salida de reemplazo.',
    keywords: [
      'probador regex',
      'probador de expresiones regulares',
      'regex javascript',
      'resaltador de coincidencias regex',
      'probador regex en linea',
      'probar regex en linea',
      'depurador regex',
      'probador de coincidencias regex',
      'probador regex javascript',
    ],
    seo: {
      title: 'Probador de Regex JavaScript en Línea | UtilityFlow',
      description:
        'Prueba expresiones regulares en vivo con las banderas g, i, m y s, resaltado de coincidencias, inspección de grupos de captura y vista previa de reemplazo.',
      primaryKeyword: 'probador regex',
      secondaryKeywords: [
        'probador de expresiones regulares',
        'depurador regex js',
        'grupos de captura regex',
        'probador de reemplazo regex',
      ],
      longTailKeywords: [
        'probar grupos de captura regex javascript en linea',
        'resaltador de coincidencias de expresiones regulares en vivo',
        'vista previa de reemplazo regex con grupo de captura $1',
        'depurar regex javascript con resaltado en vivo en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Depura expresiones regulares de JavaScript de forma interactiva con coincidencias resaltadas en vivo, posiciones de índice de coincidencia, inspección numerada de grupos de captura, interruptores de banderas y vistas previas de reemplazo.',
    instructions: [
      {
        title: 'Escribe tu patrón y tus banderas',
        description:
          'Escribe un patrón RegExp entre las barras y activa las banderas g, i, m o s.',
      },
      {
        title: 'Proporciona texto de muestra',
        description:
          'Pega cadenas de prueba en Cadena de prueba para ver las subcadenas coincidentes resaltadas a la derecha.',
      },
      {
        title: 'Revisa las coincidencias resaltadas',
        description:
          'Revisa las subcadenas resaltadas y el conteo de coincidencias para confirmar que tu patrón encuentra exactamente lo que esperas, y nada más.',
      },
      {
        title: 'Inspecciona grupos y reemplazos',
        description:
          'Revisa los índices exactos de coincidencia y los grupos de captura $1 y $2, o prueba una plantilla de reemplazo abajo.',
      },
      {
        title: 'Corrige errores de patrón',
        description:
          'Si aparece un error de sintaxis, lee el mensaje, revisa si hay corchetes o paréntesis sin cerrar y ajusta el patrón hasta que aparezcan coincidencias.',
      },
      {
        title: 'Consejo: prueba casos extremos antes de publicar',
        description:
          'Prueba cadenas vacías, caracteres inusuales y entrada de varias líneas antes de usar un patrón en producción, y activa la bandera i para comprobar la sensibilidad a mayúsculas.',
      },
    ],
    examples: [
      {
        title: 'Extracción de la parte local y el dominio de un correo',
        input: 'Patrón: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Texto: support@utilityflow.online',
        output: 'Coincidencia n.º 1 · $1="support" · $2="utilityflow.online"',
        explanation: 'Los grupos entre paréntesis exponen las subcadenas capturadas de forma individual.',
      },
      {
        title: 'Reordenamiento de una fecha con grupos de captura',
        input: 'Patrón: (\\d{4})-(\\d{2})-(\\d{2}) · Texto: 2026-11-13 · Reemplazo: $3/$2/$1',
        output: '13/11/2026',
        explanation: 'La plantilla de reemplazo sustituye cada $n por el texto capturado por ese grupo numerado.',
      },
    ],
    benefits: [
      'Protege automáticamente contra bucles infinitos en coincidencias de longitud cero',
      'Muestra el índice exacto de caracteres y los valores de los grupos capturados por coincidencia',
      'Incluye vista previa de plantilla de reemplazo en vivo con $1, $2 y $&',
      'Reporta los errores de sintaxis de RegExp con claridad sin fallar',
    ],
    useCases: [
      'Validar patrones de correo, slug o entrada de formularios antes de publicar',
      'Extraer tokens estructurados de líneas de registro o fragmentos HTML',
      'Probar plantillas de búsqueda y reemplazo con capturas',
      'Verificar el comportamiento de las banderas de varias líneas (^ / $) y de insensibilidad a mayúsculas',
    ],
    faqs: [
      {
        question: '¿Qué motor de regex usa este probador?',
        answer:
          'Usa el motor RegExp nativo ECMAScript (JavaScript) de tu navegador, así que el comportamiento coincide exactamente con el código JS del lado del cliente y de Node.js.',
      },
      {
        question: '¿Por qué importa el modo global ("g")?',
        answer:
          'Sin la bandera "g", RegExp se detiene después de la primera coincidencia. Al activar "g", encuentra y resalta cada coincidencia en toda la cadena de prueba.',
      },
      {
        question: '¿Cómo hago coincidir saltos de línea con "."?',
        answer:
          'Activa la bandera "s" (dotAll) para que el metacarácter punto "." también coincida con los caracteres de salto de línea.',
      },
      {
        question: '¿El Probador de Regex es gratis?',
        answer:
          'Sí, el Probador de Regex es completamente gratis, sin registro y sin límites en la cantidad de patrones o cadenas de prueba que pruebes.',
      },
      {
        question: '¿Qué variante de regex usa el Probador de Regex?',
        answer:
          'Usa la variante JavaScript (ECMAScript) de regex, el mismo motor que se ejecuta en los navegadores y en Node.js, así que los patrones se comportan igual en tu código.',
      },
      {
        question: '¿Cómo pruebo un regex para validar correos?',
        answer:
          'Pega un patrón como ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) y prueba direcciones válidas e inválidas en la cadena de prueba para ver cuáles coinciden.',
      },
      {
        question: '¿Qué hacen las banderas g, i, m y s en el Probador de Regex?',
        answer:
          'La bandera g encuentra todas las coincidencias, i hace que la coincidencia no distinga mayúsculas de minúsculas, m permite que ^ y $ coincidan en los límites de línea, y s permite que . coincida con saltos de línea.',
      },
      {
        question: '¿Cómo funcionan los grupos de captura en el Probador de Regex?',
        answer:
          'El texto dentro de paréntesis forma un grupo de captura numerado. Después de una coincidencia, cada grupo aparece como $1, $2, y así sucesivamente, con la subcadena exacta que capturó.',
      },
      {
        question: '¿Cuál es la diferencia entre .* y .*? en regex?',
        answer:
          'El cuantificador .* es codicioso y coincide con la mayor cantidad posible, mientras que .*? es perezoso y coincide con la menor cantidad posible. Usa la forma perezosa cuando quieras la coincidencia más corta.',
      },
      {
        question: '¿Cómo hago coincidir un punto o un paréntesis literal en regex?',
        answer:
          'Escápalo con una barra invertida, como \\. para un punto o \\( para un paréntesis, para que el carácter se trate como texto literal en lugar de un metacarácter.',
      },
      {
        question: '¿Por qué mi regex coincide con demasiado texto?',
        answer:
          'Probablemente estás usando un cuantificador codicioso como .* que absorbe todo hasta la última coincidencia posible. Cambia a un cuantificador perezoso como .*? o reduce la clase de caracteres.',
      },
      {
        question: '¿Cómo uso $1 y $2 en un reemplazo?',
        answer:
          'Escribe una plantilla de reemplazo como $2@$1 y el probador sustituye cada $n por el texto capturado por ese grupo numerado en cada coincidencia.',
      },
      {
        question: '¿El Probador de Regex puede coincidir en varias líneas?',
        answer:
          'Sí. Activa la bandera m para que ^ y $ funcionen por línea, y la bandera s si necesitas que . cruce los saltos de línea.',
      },
      {
        question: '¿Qué es un lookahead en regex?',
        answer:
          'Un lookahead como (?=...) comprueba que un patrón sigue a la posición actual sin consumirlo, así que puedes exigir una condición, como un dígito adelante, sin incluirla en la coincidencia.',
      },
      {
        question: '¿Por qué mi patrón no muestra coincidencias?',
        answer:
          'Revisa si hay un error de sintaxis, un carácter especial sin escapar o una clase de caracteres que excluye tu entrada. Intenta simplificar el patrón y agregar una pieza a la vez.',
      },
      {
        question: '¿Cómo pruebo un regex con muchas líneas a la vez?',
        answer:
          'Pega toda la muestra de varias líneas en la cadena de prueba y activa la bandera g. Cada línea coincidente se resalta y se muestra con su índice.',
      },
      {
        question: '¿El Probador de Regex admite caracteres Unicode?',
        answer:
          'Sí. El regex de JavaScript maneja texto Unicode, y puedes usar escapes como \\u{1F600} o la bandera u para coincidencias totalmente compatibles con Unicode.',
      },
      {
        question: '¿Mi regex o mi texto de prueba se sube a algún lugar?',
        answer:
          'No. Las pruebas se ejecutan por completo en tu navegador, así que tus patrones y datos de muestra nunca salen de tu dispositivo.',
      },
      {
        question: '¿Qué es el backtracking catastrófico y cómo lo evito?',
        answer:
          'Ocurre cuando cuantificadores anidados como (a+)+ obligan al motor a probar una cantidad enorme de combinaciones. Evita los cuantificadores superpuestos y usa patrones de estilo atómico o clases de caracteres más simples.',
      },
      {
        question: '¿Puedo guardar o compartir mi patrón regex?',
        answer:
          'No hay una función integrada para guardar, así que copia tu patrón y tu cadena de prueba en un archivo de fragmentos o un comentario de código. También puedes pegar el patrón directamente en tu código fuente.',
      },
    ],
  },
  'jwt-decoder': {
    slug: 'decodificador-jwt',
    name: 'Decodificador JWT',
    shortDescription:
      'Decodifica encabezados, reclamos de payload y marcas de expiración de JSON Web Tokens de forma segura dentro de tu navegador.',
    keywords: [
      'decodificador jwt',
      'decodificar json web token',
      'inspector jwt',
      'marca exp jwt',
      'decodificador de token jwt',
      'decodificar payload jwt',
      'verificador de expiracion jwt',
      'visor de reclamos jwt',
      'revisar expiracion jwt',
    ],
    seo: {
      title: 'Decodificador JWT: Revisa Tokens y Expiración | UtilityFlow',
      description:
        'Decodifica encabezados y reclamos de payload de JWT en tu navegador y revisa las marcas iat, nbf y exp como fechas UTC claras. Gratis, privado y sin subidas.',
      primaryKeyword: 'decodificador jwt',
      secondaryKeywords: [
        'decodificar jwt en linea',
        'visor de payload jwt',
        'inspector de json web token',
        'verificador de expiracion jwt',
      ],
      longTailKeywords: [
        'decodificar token jwt localmente sin subirlo al servidor',
        'revisar marca exp de expiracion jwt en linea',
        'inspeccionar encabezado y reclamos jwt base64url',
        'leer reclamos de payload jwt en el navegador',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Inspecciona JSON Web Tokens (JWT) de forma segura en la memoria local del navegador: mira los objetos JSON formateados de Encabezado y Payload y revisa el estado de expiración legible de `iat`, `nbf` y `exp`.',
    instructions: [
      {
        title: 'Pega tu cadena JWT',
        description:
          'Pega un token estándar de tres segmentos (encabezado.payload.firma) en el cuadro de entrada, o haz clic en Cargar JWT de ejemplo para probar un token de demostración.',
      },
      {
        title: 'Revisa el JSON de Encabezado y Payload',
        description:
          'Inspecciona los metadatos de algoritmo (`alg`, `typ`) y los campos de reclamo decodificados en paneles JSON formateados.',
      },
      {
        title: 'Revisa los reclamos de marca de tiempo',
        description:
          'Verifica las conversiones a fecha UTC de `iat`, `nbf` y `exp`, además del estado activo o expirado.',
      },
      {
        title: 'Inspecciona reclamos como sub, roles y scopes',
        description:
          'Busca reclamos de identidad y permisos como sub, iss, aud, roles y scope para confirmar que el token lleva lo que tu API espera.',
      },
      {
        title: 'Copia el JSON decodificado o un solo reclamo',
        description:
          'Copia el JSON formateado completo del encabezado o del payload, o copia un valor de reclamo individual para pegarlo en tu código, pruebas o ticket de soporte.',
      },
      {
        title: 'Soluciona un token que no se decodifica',
        description:
          'Quita espacios extra, saltos de línea o comillas alrededor del token. Un token de cinco segmentos es un JWE cifrado, no un JWT, y no se puede decodificar sin su clave de descifrado.',
      },
    ],
    examples: [
      {
        title: 'Revisión de la expiración de un token',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Encabezado: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation: 'Decodifica los segmentos Base64Url y traduce los reclamos numéricos de época a fechas UTC.',
      },
      {
        title: 'Detección de un token ya expirado',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTcwMDAwMDAwMH0.sig',
        output: 'exp: 14 de noviembre de 2023, 22:13:20 UTC · Estado: expirado',
        explanation: 'La marca exp se convierte a una fecha UTC legible y se marca como expirada cuando ya pasó.',
      },
    ],
    benefits: [
      'Cero transmisión de red: los tokens nunca salen de la pestaña de tu navegador',
      'Traduce los reclamos numéricos iat, nbf y exp a fechas UTC legibles',
      'Resalta si la marca de expiración del token ya pasó',
      'Aclara que la verificación criptográfica de la firma requiere tu clave de firma',
    ],
    useCases: [
      'Depurar tokens de acceso e identificación de OAuth2 y OIDC durante la integración de API',
      'Verificar reclamos de rol, scope y tenant emitidos por proveedores de autenticación',
      'Revisar por qué una API rechazó un token bearer expirado',
      'Validar la estructura de JWT en pruebas de integración',
    ],
    faqs: [
      {
        question: '¿Este Decodificador JWT verifica si la firma de un token es auténtica?',
        answer:
          'No. Decodificar un JWT solo analiza sus segmentos Base64Url de encabezado y payload. Verificar una firma requiere el secreto de tu servidor o la clave pública JWKS y siempre debe hacerse en tu backend.',
      },
      {
        question: '¿Es seguro pegar tokens de autenticación aquí?',
        answer:
          'Toda la decodificación se ejecuta localmente en JavaScript del lado del cliente, sin registrar ni transmitir tokens. Aun así, evita pegar credenciales de producción en computadoras compartidas que no sean de confianza.',
      },
      {
        question: '¿Por qué falla mi token si tiene 5 segmentos en lugar de 3?',
        answer:
          'Un token de 5 segmentos es un JWE cifrado (JSON Web Encryption) en lugar de un JWT firmado (JWS/JWT), así que su payload no se puede decodificar sin la clave de descifrado.',
      },
      {
        question: '¿Qué es un JWT y qué muestra este decodificador?',
        answer:
          'Un JSON Web Token es una cadena compacta con tres segmentos Base64Url: encabezado, payload y firma. Este decodificador muestra el JSON del encabezado, los reclamos del payload y fechas legibles para los reclamos de marca de tiempo.',
      },
      {
        question: '¿El Decodificador JWT es gratis?',
        answer:
          'Sí. El Decodificador JWT es completamente gratis, sin registro, sin límites de uso y sin necesidad de cuenta. Se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Puedo decodificar un JWT sin el secreto de firma?',
        answer:
          'Sí. Decodificar solo lee el encabezado y el payload en Base64Url, que no están cifrados. El secreto de firma solo se necesita para verificar que la firma es auténtica.',
      },
      {
        question: '¿Qué significan los campos de encabezado alg y typ en un JWT?',
        answer:
          'El campo alg nombra el algoritmo de firma, como HS256 o RS256, y typ normalmente dice JWT para identificar el tipo de token. Ambos campos viven en el segmento del encabezado.',
      },
      {
        question: '¿Qué reclamos suelen estar en el payload de un JWT?',
        answer:
          'Los reclamos comunes del payload incluyen sub para el sujeto o id de usuario, iss para el emisor, aud para la audiencia, iat para la hora de emisión, nbf para la hora de inicio de validez y exp para la hora de expiración, además de reclamos personalizados como roles o scopes.',
      },
      {
        question: '¿Cómo sé si mi JWT expiró?',
        answer:
          'Compara el reclamo exp con la hora actual. Este decodificador convierte exp en una fecha UTC clara y señala si el token sigue activo o ya expiró.',
      },
      {
        question: '¿Cuál es la diferencia entre iat, nbf y exp en un JWT?',
        answer:
          'El reclamo iat registra cuándo se emitió el token, nbf registra la hora más temprana en que el token se vuelve válido, y exp registra cuándo deja de ser válido. Los tres son marcas de tiempo Unix en segundos.',
      },
      {
        question: '¿Por qué mi payload JWT decodificado se ve diferente del JSON original?',
        answer:
          'Decodificar solo revierte la codificación Base64Url, así que el payload debería coincidir con los reclamos originales. Si se ve confuso, el token puede estar truncado, dividido en varias líneas o copiado con caracteres extra.',
      },
      {
        question: '¿Puedo decodificar un JWT que no tiene firma?',
        answer:
          'Sí. Un token sin firmar usa alg none y tiene un tercer segmento vacío, y su encabezado y payload se decodifican con normalidad. Los tokens sin firmar nunca deben ser de confianza en producción.',
      },
      {
        question: '¿Qué significa si mi token tiene solo dos segmentos?',
        answer:
          'Un token de dos segmentos está mal formado o incompleto, normalmente porque parte de él se cortó al copiarlo. Un JWT firmado válido siempre tiene tres segmentos separados por puntos.',
      },
      {
        question: '¿El Decodificador JWT guarda o envía mi token a algún lugar?',
        answer:
          'No. La decodificación ocurre por completo en la pestaña de tu navegador y nada se sube, registra o guarda en un servidor. Cerrar la pestaña elimina el token de la memoria.',
      },
      {
        question: '¿Por qué mi JWT no se decodifica en absoluto?',
        answer:
          'Revisa si hay espacios extra, saltos de línea o comillas alrededor del token, y confirma que tenga exactamente tres segmentos separados por puntos. Los tokens copiados de registros suelen incluir puntuación final que rompe la decodificación.',
      },
      {
        question: '¿Puedo usar este Decodificador JWT para tokens de acceso OAuth2?',
        answer:
          'Sí, siempre que el token de acceso sea un JWT. Muchos proveedores de OAuth2 y OpenID Connect emiten tokens de acceso e identificación JWT, y esta herramienta decodifica sus reclamos de la misma manera.',
      },
      {
        question: '¿Qué es un JWE y por qué no puedo decodificarlo aquí?',
        answer:
          'Un JWE es un token cifrado JSON Web Encryption con cinco segmentos. Su payload está cifrado, así que solo se puede leer con la clave de descifrado que tiene el destinatario previsto.',
      },
      {
        question: '¿Cómo reviso reclamos JWT como roles y scopes?',
        answer:
          'Pega el token y lee el panel de payload decodificado. Los roles, scopes, permisos y reclamos de tenant aparecen allí como campos JSON normales que puedes inspeccionar o copiar.',
      },
      {
        question: '¿Decodificar un JWT prueba que el token es válido?',
        answer:
          'No. Decodificar solo muestra lo que contiene el token. Cualquiera puede crear un token con cualquier reclamo, así que la validez debe confirmarse revisando la firma y el reclamo exp en tu servidor.',
      },
      {
        question: '¿Puedo decodificar un JWT en una computadora compartida o pública?',
        answer:
          'Puedes, porque la decodificación es local y nada se sube, pero aun así es mejor evitar pegar tokens de producción activos en una computadora que no controlas.',
      },
    ],
  },
  'hash-generator': {
    slug: 'generador-hash',
    name: 'Generador de Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Calcula hashes criptográficos SHA-1, SHA-256, SHA-384 y SHA-512 para texto o archivos locales con Web Crypto.',
    keywords: [
      'generador hash',
      'generador sha256',
      'hash sha512',
      'checksum sha256 de archivo',
      'generador hash sha1',
      'hash sha384 en linea',
      'calculadora de checksum',
      'verificar checksum de archivo',
      'generador de hash seguro en linea',
    ],
    seo: {
      title: 'Generador de Hash SHA-256 y SHA-512 Online | UtilityFlow',
      description:
        'Genera resúmenes SHA-1, SHA-256, SHA-384 y SHA-512 en hexadecimal o Base64 para texto y archivos locales, directamente en tu navegador. Gratis y privado.',
      primaryKeyword: 'generador hash',
      secondaryKeywords: [
        'hash sha256 en linea',
        'verificador de checksum de archivo',
        'generador sha512',
        'calculadora de checksum',
      ],
      longTailKeywords: [
        'calcular checksum sha256 de archivo local en el navegador',
        'generar hash sha256 en hexadecimal y base64',
        'generador de hash con web crypto api en linea',
        'verificar checksum sha256 de archivo descargado',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Calcula resúmenes SHA-1, SHA-256, SHA-384 y SHA-512 al mismo tiempo con la API Web Crypto nativa del navegador (`crypto.subtle.digest`), tanto para texto UTF-8 como para checksums de archivos locales.',
    instructions: [
      {
        title: 'Elige Entrada de texto o Checksum de archivo local',
        description:
          'Selecciona Entrada de texto para aplicar hash a cadenas o Checksum de archivo local para verificar binarios descargados sin subirlos.',
      },
      {
        title: 'Escribe texto o elige un archivo local',
        description:
          'Escribe o pega tu texto en el cuadro de entrada, o elige un archivo de tu dispositivo. El archivo solo se lee dentro de tu navegador y nunca se sube.',
      },
      {
        title: 'Selecciona la codificación de salida',
        description:
          'Cambia entre el formato de resumen Hex (minúsculas o mayúsculas) y Base64.',
      },
      {
        title: 'Revisa los cuatro resúmenes a la vez',
        description:
          'SHA-1, SHA-256, SHA-384 y SHA-512 se calculan al mismo tiempo, así que compara los algoritmos lado a lado sin volver a ejecutar la herramienta.',
      },
      {
        title: 'Copia cualquier resumen',
        description:
          'Haz clic en Copiar junto a SHA-1, SHA-256, SHA-384 o SHA-512 para copiar el hash calculado.',
      },
      {
        title: 'Soluciona un checksum que no coincide',
        description:
          'Si el checksum de un archivo difiere del valor publicado, vuelve a descargar el archivo y revisa si hay saltos de línea o espacios en blanco al final en la entrada de texto, ya que incluso un carácter extra cambia el hash por completo.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 de "UtilityFlow"',
        input: 'UtilityFlow',
        output: 'Se calcula de forma determinista en 64 caracteres hexadecimales (256 bits)',
        explanation: 'Incluso un cambio de un solo carácter produce un resumen completamente diferente.',
      },
      {
        title: 'SHA-256 de "Hola"',
        input: 'Hola',
        output: 'Se calcula de forma determinista en 64 caracteres hexadecimales (256 bits)',
        explanation: 'La misma entrada siempre produce el mismo resumen, lo que permite verificar archivos y detectar cambios.',
      },
    ],
    benefits: [
      'Usa la API Web Crypto SubtleCrypto nativa, acelerada por hardware',
      'Verifica checksums SHA-256 de archivos locales sin subir archivos',
      'Genera formatos Hex (mayúsculas y minúsculas) y Base64',
      'Calcula los cuatro algoritmos SHA al mismo tiempo',
    ],
    useCases: [
      'Verificar checksums SHA-256 de instaladores de software o archivos descargados',
      'Generar hashes Base64 de Integridad de Subrecursos (SRI) para scripts y estilos',
      'Probar expectativas de HMAC de webhooks o de resúmenes de cargas',
      'Crear huellas de contenido deterministas',
    ],
    faqs: [
      {
        question: '¿Puedo revertir un hash SHA-256 al texto original?',
        answer:
          'No. Las funciones hash criptográficas son resúmenes matemáticos de un solo sentido, diseñados para que la entrada original no se pueda derivar del hash.',
      },
      {
        question: '¿Por qué se prefieren SHA-256 y SHA-512 sobre SHA-1?',
        answer:
          'SHA-1 tiene debilidades conocidas de colisión y está obsoleto para firmas de seguridad; SHA-256 y SHA-512 pertenecen a la familia SHA-2, más fuerte.',
      },
      {
        question: '¿Los archivos subidos se transmiten a un servidor?',
        answer:
          'No. Los archivos seleccionados se leen en un ArrayBuffer dentro de la pestaña de tu navegador y se procesan localmente.',
      },
      {
        question: '¿Para qué se usa un generador de hash?',
        answer:
          'Un generador de hash convierte texto o un archivo en una huella de longitud fija llamada resumen. Los desarrolladores usan resúmenes para verificar descargas, comprobar la integridad de datos y crear valores de Integridad de Subrecursos.',
      },
      {
        question: '¿El Generador de Hash es gratis?',
        answer:
          'Sí. El Generador de Hash es completamente gratis, sin registro y sin límites de uso. Todo el hash se ejecuta localmente en tu navegador.',
      },
      {
        question: '¿Cuál es la diferencia entre SHA-1, SHA-256, SHA-384 y SHA-512?',
        answer:
          'Son miembros de la familia SHA con diferentes longitudes de resumen: SHA-1 produce 160 bits, SHA-256 produce 256 bits, SHA-384 produce 384 bits y SHA-512 produce 512 bits. Los resúmenes más largos suelen ser más fuertes.',
      },
      {
        question: '¿Cómo verifico el checksum de un archivo descargado con esta herramienta?',
        answer:
          'Cambia al modo Checksum de archivo local, selecciona el archivo descargado y compara el valor SHA-256 calculado con el checksum publicado por el proveedor del software. Los valores iguales significan que el archivo está intacto.',
      },
      {
        question: '¿Qué debería hacer si el checksum de mi archivo no coincide?',
        answer:
          'No instales ni ejecutes el archivo. Vuelve a descargarlo desde la fuente oficial y aplica el hash otra vez, ya que una diferencia puede significar una descarga dañada o manipulada.',
      },
      {
        question: '¿Cuál es la diferencia entre la salida hash en hex y en Base64?',
        answer:
          'La salida hex muestra el resumen como caracteres hexadecimales, mientras que la salida Base64 muestra el mismo resumen en una cadena Base64 más corta. Ambas representan exactamente los mismos bytes del hash.',
      },
      {
        question: '¿Cambiar un carácter realmente cambia todo el hash?',
        answer:
          'Sí. Las funciones hash tienen efecto avalancha, así que cambiar una sola letra, espacio o salto de línea produce un resumen completamente diferente sin ningún patrón visible.',
      },
      {
        question: '¿Dos archivos diferentes pueden producir el mismo hash SHA-256?',
        answer:
          'En teoría, una colisión es posible, pero con SHA-256 es tan improbable en la práctica que los hashes iguales se tratan como prueba de que los archivos son idénticos.',
      },
      {
        question: '¿Puedo aplicar hash a un archivo sin subirlo?',
        answer:
          'Sí. Esta herramienta lee el archivo en la memoria de tu navegador y le aplica hash con la API Web Crypto. El archivo nunca sale de tu dispositivo.',
      },
      {
        question: '¿Qué es un hash de Integridad de Subrecursos y cómo creo uno?',
        answer:
          'Un hash de Integridad de Subrecursos (SRI) es un resumen SHA en Base64 que se agrega a una etiqueta de script o enlace para que los navegadores rechacen archivos manipulados. Selecciona la salida Base64 aquí y copia el resumen SHA-256 o SHA-384 en tu atributo integrity.',
      },
      {
        question: '¿Por qué el mismo texto siempre produce el mismo hash?',
        answer:
          'Las funciones hash son deterministas: una entrada idéntica siempre produce el resumen idéntico. Eso es lo que hace que los hashes sean útiles para verificar archivos y detectar cambios.',
      },
      {
        question: '¿SHA-1 sigue siendo seguro?',
        answer:
          'SHA-1 está bien para checksums simples de datos no sensibles, pero no debería usarse para firmas de seguridad o certificados porque existen ataques prácticos de colisión contra él.',
      },
      {
        question: '¿Qué longitud tiene un hash SHA-256 en caracteres hexadecimales?',
        answer:
          'Un resumen SHA-256 tiene 256 bits, que aparecen como 64 caracteres hexadecimales. SHA-1 muestra 40 caracteres hex, SHA-384 muestra 96 y SHA-512 muestra 128.',
      },
      {
        question: '¿El Generador de Hash funciona sin conexión?',
        answer:
          'Sí, una vez que la página ha cargado. El hash usa la API Web Crypto integrada en tu navegador, así que no se necesita conexión de red mientras aplicas hash a texto o archivos.',
      },
      {
        question: '¿Puedo aplicar hash a texto con caracteres especiales o emojis?',
        answer:
          'Sí. El texto se codifica como UTF-8 antes del hash, así que las letras acentuadas, los símbolos y los emojis se manejan de forma consistente.',
      },
      {
        question: '¿Cuál es la diferencia entre un hash y el cifrado?',
        answer:
          'El cifrado es reversible con una clave, mientras que el hash es un resumen de un solo sentido que no se puede revertir. Los hashes verifican la integridad; el cifrado protege la confidencialidad.',
      },
      {
        question: '¿Puedo usar el Generador de Hash para verificar una contraseña?',
        answer:
          'Puedes aplicar hash a una contraseña para compararla con un resumen guardado, pero en aplicaciones reales las contraseñas deben procesarse con un algoritmo lento para contraseñas como bcrypt o Argon2, no con SHA-256 simple.',
      },
    ],
  },
  'html-entity-encoder': {
    slug: 'codificador-entidades-html',
    name: 'Codificador y Decodificador de Entidades HTML',
    shortDescription:
      'Escapa caracteres HTML reservados (<, >, &, comillas) y símbolos no ASCII, o decodifica entidades HTML sin problemas.',
    keywords: [
      'codificador de entidades html',
      'decodificador html',
      'escapar html en linea',
      'desescapar entidades html',
      'codificar caracteres html',
      'herramienta de escape html',
      'convertir a entidades html',
      'decodificar entidades html en linea',
      'escapar caracteres especiales html',
    ],
    seo: {
      title: 'Codificador de Entidades HTML en Línea | UtilityFlow',
      description:
        'Codifica caracteres HTML reservados y símbolos no ASCII en entidades, o decodifica entidades nombradas y numéricas a texto plano. Gratis, local e instantáneo.',
      primaryKeyword: 'codificador de entidades html',
      secondaryKeywords: [
        'herramienta de escape html',
        'decodificador de entidades html',
        'desescapar html',
        'codificar caracteres html',
      ],
      longTailKeywords: [
        'escapar etiquetas html para fragmentos de codigo en linea',
        'decodificar entidades html nombradas y numericas',
        'convertir caracteres especiales a entidades html',
        'escapar comillas y ampersands html en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Escapa de forma segura `<`, `>`, `&`, comillas y símbolos Unicode internacionales en entidades HTML para insertar fragmentos de código en páginas web, o decodifica cadenas con escape HTML de vuelta a texto legible.',
    instructions: [
      {
        title: 'Elige Codificar o Decodificar',
        description:
          'Elige Codificar entidades para escapar marcado HTML o Decodificar entidades para desescapar entidades existentes.',
      },
      {
        title: 'Pega tu HTML o texto',
        description:
          'Pega el fragmento, el valor de atributo o la cadena escapada en el cuadro de entrada. Los bloques grandes de código se pegan tal como son.',
      },
      {
        title: 'Activa la codificación no ASCII',
        description:
          'En el modo Codificar, decide si los caracteres por encima de ASCII 127 también deben convertirse en entidades numéricas &#...;.',
      },
      {
        title: 'Revisa el resultado convertido',
        description:
          'Comprueba que las etiquetas, las comillas y los símbolos se convirtieron como esperabas, y confirma que nada de tu fragmento se alteró o se perdió.',
      },
      {
        title: 'Copia o intercambia',
        description:
          'Copia el texto convertido o haz clic en Intercambiar para invertir tu flujo de trabajo.',
      },
      {
        title: 'Soluciona entidades doblemente codificadas',
        description:
          'Si ves &amp;lt; en tu resultado, el texto se codificó dos veces. Decodifica una vez para devolverlo a entidades normales y luego codifica una sola vez.',
      },
    ],
    examples: [
      {
        title: 'Escape de un fragmento HTML para documentación',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation: 'Evita que el navegador interprete las etiquetas de ejemplo como elementos DOM activos.',
      },
      {
        title: 'Decodificación de un fragmento HTML escapado',
        input: '&lt;p&gt;Hola &amp; adiós&lt;/p&gt;',
        output: '<p>Hola & adiós</p>',
        explanation: 'Convierte las entidades nombradas de vuelta a caracteres reales para recuperar texto legible.',
      },
    ],
    benefits: [
      'Escapa los cinco caracteres reservados de XML y HTML (&, <, >, ", \')',
      'Codificación opcional de entidades numéricas para símbolos internacionales y puntuación',
      'Decodifica entidades nombradas (&mdash;, &copy;) y numéricas (&#8212;, &#x2014;)',
      'Usa extracción segura de texto con DOMParser al decodificar',
    ],
    useCases: [
      'Preparar ejemplos de código HTML para artículos de blog y documentación',
      'Limpiar texto codificado en HTML extraído de feeds RSS o API XML',
      'Escapar valores de atributos en plantillas HTML estáticas',
      'Revisar cómo los símbolos especiales se muestran de forma segura en páginas UTF-8 o ASCII',
    ],
    faqs: [
      {
        question: '¿Qué cinco caracteres siempre deben escaparse en texto y atributos HTML?',
        answer:
          'El ampersand (&), menor que (<), mayor que (>), comilla doble (") y comilla simple (\') deben escaparse para evitar ambigüedad en el marcado o problemas de XSS.',
      },
      {
        question: '¿Cuándo debería desactivar la codificación no ASCII?',
        answer:
          'Si tu página web usa <meta charset="UTF-8">, los caracteres internacionales y símbolos estándar se muestran directamente sin necesidad de entidades numéricas &#...;.',
      },
      {
        question: '¿El decodificador maneja entidades hexadecimales como &#x27;?',
        answer:
          'Sí. Tanto las entidades decimales (&#39;) como las hexadecimales (&#x27;), así como las entidades nombradas estándar (&amp;, &nbsp;, &copy;), se decodifican correctamente.',
      },
      {
        question: '¿Qué es una entidad HTML?',
        answer:
          'Una entidad HTML es un código de texto que representa un carácter especial, como &lt; para < o &amp; para &. Las entidades permiten mostrar caracteres reservados sin que el navegador los trate como marcado.',
      },
      {
        question: '¿El Codificador de Entidades HTML es gratis?',
        answer:
          'Sí. El Codificador de Entidades HTML es completamente gratis, sin registro y sin límites de uso. Toda la codificación y decodificación se ejecuta localmente en tu navegador.',
      },
      {
        question: '¿Por qué necesito escapar caracteres HTML?',
        answer:
          'Los navegadores interpretan <, > y & como marcado. Escaparlos muestra los caracteres como texto visible, lo que es esencial para ejemplos de código, contenido de usuarios y plantillas seguras.',
      },
      {
        question: '¿Cuál es la diferencia entre entidades HTML nombradas y numéricas?',
        answer:
          'Las entidades nombradas usan un nombre legible como &copy; para el símbolo de copyright, mientras que las entidades numéricas usan un punto de código como &#169; o &#xA9;. Ambas muestran el mismo carácter.',
      },
      {
        question: '¿Cuándo debería codificar caracteres no ASCII como entidades?',
        answer:
          'Codifícalos cuando una página o un sistema de correo no admita UTF-8 de forma confiable, o cuando necesites salida ASCII pura. En páginas modernas UTF-8, las letras acentuadas y los símbolos pueden quedar como caracteres simples.',
      },
      {
        question: '¿Cómo se ve el HTML doblemente codificado?',
        answer:
          'La doble codificación convierte &lt; en &amp;lt;, así que el navegador muestra el texto literal &lt; en lugar de <. Decodifica una vez para corregirlo y luego codifica solo una vez.',
      },
      {
        question: '¿Puedo decodificar entidades HTML de páginas web extraídas?',
        answer:
          'Sí. Pega el texto escapado de un feed RSS, una API XML o una página extraída y decodifícalo para recuperar texto plano legible con caracteres reales.',
      },
      {
        question: '¿Codificar entidades HTML previene ataques XSS?',
        answer:
          'Escapar la entrada de usuarios es una capa importante de defensa contra XSS, pero no es una solución completa por sí sola. Combínala siempre con codificación de salida adecuada, validación y una política de seguridad de contenido.',
      },
      {
        question: '¿Cuál es la entidad HTML para un espacio sin ruptura?',
        answer:
          'El espacio sin ruptura es &nbsp; o &#160;. Mantiene dos palabras en la misma línea y se usa comúnmente para conservar el espaciado en diseños HTML.',
      },
      {
        question: '¿Cómo escapo comillas dentro de un atributo HTML?',
        answer:
          'Usa &quot; para comillas dobles y &#39; o &apos; para comillas simples. Escapar las comillas evita que un valor de atributo termine antes de tiempo y rompa tu marcado.',
      },
      {
        question: '¿Esta herramienta puede codificar emojis y otros símbolos Unicode?',
        answer:
          'Sí. Con la codificación no ASCII activada, los emojis y símbolos internacionales se convierten en entidades numéricas como &#128512;. Con ella desactivada, quedan como caracteres Unicode simples.',
      },
      {
        question: '¿Cuál es la diferencia entre escapar HTML y codificar una URL?',
        answer:
          'El escape HTML convierte caracteres reservados de marcado en entidades para mostrarlos en páginas, mientras que la codificación de URL convierte caracteres en códigos por porcentaje como %20 para usarlos dentro de enlaces y cadenas de consulta.',
      },
      {
        question: '¿El codificador cambia letras y números normales?',
        answer:
          'No. Las letras simples, los dígitos y la mayoría de la puntuación pasan sin cambios. Solo se convierten los caracteres reservados y, opcionalmente, los símbolos no ASCII.',
      },
      {
        question: '¿Por qué mi texto decodificado muestra caracteres extraños?',
        answer:
          'Probablemente la fuente se codificó con un conjunto de caracteres diferente, o una entidad estaba mal formada. Intenta decodificar otra vez desde el texto escapado original y revisa que la página declare UTF-8.',
      },
      {
        question: '¿Puedo codificar un documento HTML completo con esta herramienta?',
        answer:
          'Sí. Puedes pegar un documento completo y codificarlo, pero el resultado está pensado para mostrarse como muestra de código, no para guardarse como una página web funcional.',
      },
      {
        question: '¿Mi HTML pegado se envía a un servidor?',
        answer:
          'No. La codificación y la decodificación ocurren por completo en tu navegador, así que tu código y tu texto nunca salen de tu dispositivo.',
      },
      {
        question: '¿Cuál es la entidad HTML para el carácter ampersand?',
        answer:
          'El ampersand mismo es &amp; o &#38;. Codifica siempre primero un & literal, porque un ampersand sin codificar puede hacer que el navegador interprete mal las entidades que le siguen.',
      },
    ],
  },
  'json-csv-converter': {
    slug: 'convertidor-json-csv',
    name: 'Convertidor de JSON a CSV y CSV a JSON',
    shortDescription:
      'Convierte arreglos JSON a hojas de cálculo CSV según RFC 4180 y analiza archivos CSV entre comillas de vuelta a JSON limpio.',
    keywords: [
      'json a csv',
      'csv a json',
      'convertidor json csv',
      'convertir arreglo json a csv',
      'exportar json a csv',
      'json a csv en linea gratis',
      'convertidor csv a json',
      'convertidor json a tsv',
      'convertir csv a arreglo json',
    ],
    seo: {
      title: 'Convertidor JSON a CSV y CSV a JSON Online | UtilityFlow',
      description:
        'Convierte arreglos JSON en hojas CSV limpias con aplanado de objetos anidados, o analiza archivos CSV y TSV para volver a JSON estructurado. Gratis y local.',
      primaryKeyword: 'convertidor json a csv',
      secondaryKeywords: [
        'convertidor csv a json',
        'exportar json como csv',
        'tsv a json',
        'json a csv en linea gratis',
      ],
      longTailKeywords: [
        'convertir objetos json anidados a columnas csv en linea',
        'analizar csv entre comillas con comas a arreglo json',
        'descargador json a csv en el navegador',
        'convertir arreglo json a hoja csv gratis',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transforma arreglos JSON de API en hojas de cálculo CSV limpias, aplanando automáticamente las claves de objetos anidados, o analiza archivos CSV y TSV delimitados con comas entre comillas de vuelta a JSON formateado.',
    instructions: [
      {
        title: 'Elige la dirección de conversión',
        description:
          'Selecciona JSON → CSV o CSV → JSON y elige Coma (,), Punto y coma (;) o Tabulación (TSV) como tu delimitador.',
      },
      {
        title: 'Pega tus datos JSON o CSV',
        description:
          'Inserta datos en el editor de la izquierda o haz clic en Cargar ejemplo para probar campos entre comillas.',
      },
      {
        title: 'Revisa los encabezados de columna',
        description:
          'Revisa los encabezados generados antes de convertir. Los objetos anidados se convierten en columnas separadas por puntos como address.city, y las claves faltantes dejan celdas vacías.',
      },
      {
        title: 'Convierte tus datos',
        description:
          'Ejecuta la conversión e inspecciona la vista previa. Las comas entre comillas, las comillas incrustadas y los saltos de línea dentro de las celdas se conservan exactamente como exige RFC 4180.',
      },
      {
        title: 'Copia o descarga el resultado',
        description:
          'Copia el resultado convertido o descárgalo directamente como un archivo .csv o .json.',
      },
      {
        title: 'Soluciona un error de conversión',
        description:
          'Si la conversión falla, valida primero tu sintaxis JSON: revisa comas finales, comillas faltantes y corchetes sin coincidencia. Para CSV, confirma que elegiste el delimitador que tu archivo realmente usa.',
      },
    ],
    examples: [
      {
        title: 'Manejo de comas dentro de valores CSV',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation: 'Pone entre comillas automáticamente los campos que contienen delimitadores o comillas dobles según RFC 4180.',
      },
      {
        title: 'Conversión de CSV a JSON',
        input: 'id,name\n1,Ana',
        output: '[\n  {\n    "id": 1,\n    "name": "Ana"\n  }\n]',
        explanation: 'La primera fila se convierte en las claves de los objetos y cada fila siguiente en un objeto JSON.',
      },
    ],
    benefits: [
      'Conversión bidireccional JSON ↔ CSV en un solo espacio de trabajo',
      'Aplana objetos JSON anidados con encabezados de columna en notación de puntos',
      'El analizador RFC 4180 conserva comas entre comillas y saltos de línea incrustados',
      'Admite delimitadores de coma, punto y coma (Excel europeo) y tabulación',
    ],
    useCases: [
      'Exportar listas JSON de API REST a Excel o Google Sheets',
      'Convertir exportaciones de datos de hojas de cálculo en archivos semilla JSON para apps web',
      'Preparar conjuntos de datos TSV para ciencia de datos o importaciones SQL',
      'Inspeccionar exportaciones CSV delimitadas por punto y coma sin problemas',
    ],
    faqs: [
      {
        question: '¿Cómo maneja JSON a CSV los objetos con propiedades anidadas?',
        answer:
          'Los objetos anidados se aplanan en nombres de columna separados por puntos (por ejemplo, address.city), y los arreglos se serializan como cadenas JSON compactas.',
      },
      {
        question: '¿Qué pasa si diferentes objetos JSON tienen claves ligeramente distintas?',
        answer:
          'El convertidor revisa todos los objetos del arreglo para crear una unión de encabezados de columna y deja celdas vacías donde falta una clave.',
      },
      {
        question: '¿El analizador CSV se rompe si una celda contiene una coma entre comillas?',
        answer:
          'No. El analizador de máquina de estados rastrea con precisión las celdas entre comillas dobles y las comillas "" escapadas.',
      },
      {
        question: '¿Para qué se usa el Convertidor de JSON a CSV?',
        answer:
          'Convierte datos JSON de API y apps en hojas de cálculo CSV que puedes abrir en Excel o Google Sheets, y convierte archivos CSV de vuelta a JSON para código y bases de datos.',
      },
      {
        question: '¿El Convertidor de JSON a CSV es gratis?',
        answer:
          'Sí. El Convertidor de JSON a CSV es completamente gratis, sin registro y sin límites de uso. Toda la conversión se ejecuta localmente en tu navegador.',
      },
      {
        question: '¿Puedo convertir un solo objeto JSON en lugar de un arreglo?',
        answer:
          'Sí. Un solo objeto se trata como una fila con sus claves como encabezados de columna, así que igual obtienes un archivo CSV válido con una fila de datos.',
      },
      {
        question: '¿Cómo se convierten a CSV los arreglos JSON dentro de objetos?',
        answer:
          'Los valores de arreglo se serializan como cadenas JSON compactas dentro de una sola celda, así que los datos se conservan y se pueden analizar de vuelta a un arreglo más tarde.',
      },
      {
        question: '¿Qué delimitador debería elegir para mi archivo CSV?',
        answer:
          'Usa una coma para CSV estándar, un punto y coma para exportaciones europeas de Excel donde las comas son separadores decimales, y una tabulación para archivos TSV usados en herramientas de datos.',
      },
      {
        question: '¿El convertidor conserva números y booleanos correctamente?',
        answer:
          'Sí. Los números y booleanos se escriben como valores simples en CSV. Al convertir de vuelta a JSON, los valores que parecen números o booleanos se analizan en sus tipos JSON correspondientes.',
      },
      {
        question: '¿Qué pasa con los valores vacíos o nulos en JSON a CSV?',
        answer:
          'Las cadenas vacías, los valores nulos y las claves faltantes se convierten en celdas vacías en el CSV, lo que mantiene las filas alineadas con los encabezados de columna.',
      },
      {
        question: '¿Puedo convertir CSV de vuelta a JSON con esta herramienta?',
        answer:
          'Sí. Cambia al modo CSV a JSON, pega tus datos CSV o TSV y elige el delimitador. La primera fila se convierte en las claves de los objetos y cada fila siguiente en un objeto JSON.',
      },
      {
        question: '¿Por qué mi CSV se abre con todos los datos en una columna de Excel?',
        answer:
          'Es posible que Excel espere un delimitador diferente al que usa tu archivo. Vuelve a exportar con delimitador de coma, o usa la opción de punto y coma para configuraciones regionales europeas.',
      },
      {
        question: '¿El Convertidor de JSON a CSV maneja archivos grandes?',
        answer:
          'Sí, dentro de los límites de memoria del navegador. La conversión se ejecuta localmente, así que los conjuntos de datos muy grandes pueden tardar unos segundos, pero tus datos nunca se suben a un servidor.',
      },
      {
        question: '¿Mis datos JSON o CSV se envían a un servidor?',
        answer:
          'No. La conversión ocurre por completo en la pestaña de tu navegador, así que tus datos se quedan en tu dispositivo y se eliminan cuando cierras la pestaña.',
      },
      {
        question: '¿Qué es RFC 4180 y por qué importa para CSV?',
        answer:
          'RFC 4180 es el formato estándar para archivos CSV. Define cómo los campos con comas, comillas o saltos de línea deben ir entre comillas dobles, lo que permite que las apps de hojas de cálculo lean tu archivo correctamente.',
      },
      {
        question: '¿Puedo convertir archivos TSV a JSON?',
        answer:
          'Sí. Elige el delimitador Tabulación (TSV) en el modo CSV a JSON y pega tus datos separados por tabulaciones. Las tabulaciones son comunes en exportaciones de datos y funcionan igual que las comas.',
      },
      {
        question: '¿Por qué falló mi conversión de JSON a CSV?',
        answer:
          'Las causas más comunes son JSON no válido, como comas finales o comillas faltantes, y pegar un objeto JSON que no es un arreglo de objetos. Corrige la sintaxis e inténtalo otra vez.',
      },
      {
        question: '¿Cómo exporto datos JSON de una API a Excel?',
        answer:
          'Copia el arreglo JSON de la respuesta de tu API, pégalo aquí, conviértelo a CSV y descarga el archivo. Abre el CSV descargado directamente en Excel o impórtalo a Google Sheets.',
      },
      {
        question: '¿El convertidor mantiene el orden original de mis claves JSON?',
        answer:
          'El orden de las columnas sigue el orden en que las claves aparecen por primera vez en tus objetos. El primer objeto establece el orden inicial y las claves nuevas de objetos posteriores se agregan al final.',
      },
      {
        question: '¿Puedo descargar el archivo convertido en lugar de copiarlo?',
        answer:
          'Sí. Usa el botón de descarga para guardar el resultado como un archivo .csv o .json en tu dispositivo, listo para abrir en una hoja de cálculo o importar a tu app.',
      },
    ],
  },
  'unix-timestamp-converter': {
    slug: 'convertidor-marca-tiempo-unix',
    name: 'Convertidor de Marcas de Tiempo Unix',
    shortDescription:
      'Convierte segundos o milisegundos de época Unix a fechas ISO 8601, UTC y locales, y viceversa.',
    keywords: [
      'convertidor de marca de tiempo unix',
      'convertidor epoch',
      'epoch a fecha',
      'marca de tiempo a iso 8601',
      'convertidor de tiempo unix',
      'convertir epoch a fecha',
      'fecha a marca de tiempo unix',
      'tiempo unix actual',
      'convertidor epoch milisegundos',
    ],
    seo: {
      title: 'Convertidor de Tiempo Unix a Fecha Online | UtilityFlow',
      description:
        'Convierte marcas de tiempo Unix en segundos o milisegundos a ISO 8601, UTC, RFC 2822 y hora local, o convierte cualquier fecha a tiempo Unix. Gratis y rápido.',
      primaryKeyword: 'convertidor de marca de tiempo unix',
      secondaryKeywords: [
        'convertidor epoch',
        'tiempo unix a fecha',
        'fecha a marca de tiempo unix',
        'convertidor epoch milisegundos',
      ],
      longTailKeywords: [
        'convertir epoch milisegundos a fecha iso 8601',
        'tiempo unix actual en vivo en segundos',
        'convertir fecha y hora local a epoch unix',
        'marca de tiempo unix a fecha utc en linea gratis',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierte enteros de época Unix (segundos o milisegundos) en cadenas ISO 8601, UTC y de zona horaria local con desplazamientos relativos, o convierte cualquier fecha y hora del calendario de vuelta a una marca de tiempo de época.',
    instructions: [
      {
        title: 'Mira o copia la hora Unix actual',
        description:
          'Usa el contador en vivo que avanza en la parte superior para obtener la época Unix actual en segundos.',
      },
      {
        title: 'Convierte marca de tiempo Unix → fecha legible',
        description:
          'Escribe cualquier número de época; el modo Automático detecta segundos frente a milisegundos por sí solo, o fuerza una unidad.',
      },
      {
        title: 'Revisa los formatos ISO, UTC y local',
        description:
          'Compara los resultados ISO 8601, UTC, RFC 2822 y de hora local lado a lado, además del tiempo relativo como hace 2 horas, para elegir el formato que necesitas.',
      },
      {
        title: 'Convierte fecha y hora local → marca de tiempo Unix',
        description:
          'Elige una fecha y hora en el panel inferior para obtener segundos exactos, milisegundos y salida ISO 8601.',
      },
      {
        title: 'Copia la marca de tiempo que necesitas',
        description:
          'Copia el valor en segundos para API y bases de datos, el valor en milisegundos para objetos Date de JavaScript, o la cadena ISO para registros y JSON.',
      },
      {
        title: 'Soluciona una fecha que se ve incorrecta',
        description:
          'Si la fecha cae en 1970 o en el año 5000, probablemente mezclaste segundos y milisegundos. Cambia el selector de unidad de Automático a la unidad correcta y convierte otra vez.',
      },
    ],
    examples: [
      {
        title: 'Detección de segundos frente a milisegundos',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (segundos)',
        explanation: 'Los números de 10 dígitos se interpretan como segundos; los de 13 dígitos, como milisegundos.',
      },
      {
        title: 'Conversión de una fecha a marca de tiempo Unix',
        input: '2026-11-13 04:40 UTC',
        output: '1794544800 segundos',
        explanation: 'El selector de fecha y hora devuelve los segundos Unix exactos para la fecha elegida.',
      },
    ],
    benefits: [
      'Reloj Unix en vivo que avanza, sincronizado con la hora de tu sistema',
      'Detección automática de segundos frente a milisegundos con anulación manual',
      'Muestra juntos ISO 8601, hora local, GMT RFC 2822 y tiempo relativo',
      'Incluye conversor bidireccional de selector de fecha a segundos y milisegundos Unix',
    ],
    useCases: [
      'Inspeccionar reclamos `iat` y `exp` de JWT y marcas created_at de API',
      'Depurar marcas de tiempo enteras de bases de datos en PostgreSQL o SQLite',
      'Generar marcas de tiempo de época futuras para TTL de caché o pruebas',
      'Convertir marcadores de época de archivos de registro en horas locales legibles',
    ],
    faqs: [
      {
        question: '¿Cómo distingue el modo Automático segundos de milisegundos?',
        answer:
          'Los valores con magnitud ≥ 100 000 000 000 (1e11, alrededor de 1973 en milisegundos o el año 5138 en segundos) se tratan como milisegundos; los valores menores se tratan como segundos.',
      },
      {
        question: '¿El tiempo Unix se ve afectado por las zonas horarias?',
        answer:
          'No. El tiempo de época Unix siempre mide los segundos transcurridos desde 1970-01-01T00:00:00Z (UTC), sin importar tu zona horaria local.',
      },
      {
        question: '¿Puedo convertir marcas de tiempo anteriores a 1970?',
        answer:
          'Sí. Escribe una marca de tiempo Unix negativa (como -86400 para el 31 de diciembre de 1969) para inspeccionar fechas anteriores a 1970.',
      },
      {
        question: '¿Qué es una marca de tiempo Unix?',
        answer:
          'Una marca de tiempo Unix, también llamada tiempo de época, es el número de segundos que han pasado desde el 1 de enero de 1970 a las 00:00:00 UTC. Es una forma sencilla de que las computadoras guarden fechas como un solo número.',
      },
      {
        question: '¿El Convertidor de Marcas de Tiempo Unix es gratis?',
        answer:
          'Sí. El Convertidor de Marcas de Tiempo Unix es completamente gratis, sin registro y sin límites de uso. Toda la conversión se ejecuta localmente en tu navegador.',
      },
      {
        question: '¿Cuál es la diferencia entre segundos y milisegundos Unix?',
        answer:
          'Los segundos Unix cuentan segundos completos desde 1970 y suelen tener 10 dígitos, mientras que los milisegundos cuentan milésimas de segundo y suelen tener 13 dígitos. Los objetos Date de JavaScript usan milisegundos.',
      },
      {
        question: '¿Cuál es la marca de tiempo Unix actual ahora mismo?',
        answer:
          'El contador en vivo en la parte superior de esta herramienta avanza cada segundo y muestra la hora Unix actual en segundos. Cópialo cuando necesites el valor exacto para pruebas o registros.',
      },
      {
        question: '¿Cómo convierto una marca de tiempo Unix a una fecha legible?',
        answer:
          'Pega el número de época en el convertidor y muestra la fecha correspondiente en ISO 8601, UTC, RFC 2822 y tu zona horaria local, además de un tiempo relativo como hace 3 días.',
      },
      {
        question: '¿Cómo convierto una fecha a una marca de tiempo Unix?',
        answer:
          'Usa el selector de fecha y hora en el panel inferior y luego lee los segundos y milisegundos Unix exactos para la fecha que seleccionaste en tu zona horaria local.',
      },
      {
        question: '¿Por qué mi marca de tiempo muestra una fecha en 1970?',
        answer:
          'Probablemente escribiste un valor en milisegundos mientras la herramienta esperaba segundos, o un número muy pequeño. Un valor pequeño significa solo unos segundos después del inicio de la época en 1970.',
      },
      {
        question: '¿Por qué mi marca de tiempo muestra una fecha en el año 5000?',
        answer:
          'Probablemente escribiste un valor en segundos mientras la herramienta lo trataba como milisegundos, o escribiste milisegundos en un campo de segundos. Cambia el selector de unidad a la unidad correcta y convierte otra vez.',
      },
      {
        question: '¿Cuál es el formato ISO 8601 para una marca de tiempo Unix?',
        answer:
          'ISO 8601 escribe una fecha como AAAA-MM-DDTHH:MM:SS, por ejemplo 2026-11-13T04:40:00.000Z. La Z final significa que la hora está en UTC.',
      },
      {
        question: '¿Las marcas de tiempo Unix incluyen segundos bisiestos?',
        answer:
          'No. El tiempo Unix cuenta cada día como exactamente 86 400 segundos e ignora los segundos bisiestos, así que se desvía ligeramente del tiempo astronómico real en períodos largos.',
      },
      {
        question: '¿Puedo usar marcas de tiempo Unix para fechas futuras?',
        answer:
          'Sí. Escribe una fecha futura en el selector de fecha para obtener su marca de tiempo Unix, lo que es útil para establecer tiempos de expiración de caché, trabajos programados y datos de prueba.',
      },
      {
        question: '¿Cuál es la marca de tiempo Unix máxima?',
        answer:
          'En sistemas de 32 bits, el límite clásico es 2 147 483 647 segundos, que es el 19 de enero de 2038. Los sistemas modernos de 64 bits manejan valores mucho mayores, y esta herramienta los acepta.',
      },
      {
        question: '¿Cómo reviso una marca de expiración de JWT con este convertidor?',
        answer:
          'Copia el reclamo exp de tu JWT decodificado y pégalo aquí. El convertidor muestra la fecha y hora UTC exactas en que expira el token.',
      },
      {
        question: '¿El Convertidor de Marcas de Tiempo Unix funciona sin conexión?',
        answer:
          'Sí, una vez que la página ha cargado. La conversión es aritmética simple en tu navegador, y el reloj en vivo lee la hora de tu sistema, así que no se necesita conexión de red.',
      },
      {
        question: '¿Cuál es la diferencia entre UTC y hora local en los resultados?',
        answer:
          'UTC es la hora de referencia universal sin desplazamiento, mientras que la hora local aplica tu desplazamiento de zona horaria. Ambas describen el mismo instante, solo mostrado en zonas diferentes.',
      },
      {
        question: '¿Puedo convertir una marca de tiempo Unix de una base de datos o un archivo de registro?',
        answer:
          'Sí. Copia la marca de tiempo entera de tu fila de base de datos o línea de registro y pégala aquí para ver la fecha legible, lo que hace la depuración mucho más rápida.',
      },
      {
        question: '¿Mis datos de marca de tiempo se envían a un servidor?',
        answer:
          'No. La conversión ocurre por completo en tu navegador, así que las marcas de tiempo y fechas que escribes nunca salen de tu dispositivo.',
      },
    ],
  },
  'sql-formatter': {
    slug: 'formateador-sql',
    name: 'Formateador SQL',
    shortDescription:
      'Formatea, indenta y estandariza consultas SQL con palabras clave en mayúsculas o minúsculas, o minimiza consultas a una línea.',
    keywords: [
      'formateador sql',
      'embellecedor sql',
      'formatear consulta sql',
      'minificador sql',
      'formatear sql en linea',
      'embellecedor de consultas sql',
      'imprimir sql bonito',
      'formateador sql en linea',
      'indentar consulta sql',
    ],
    seo: {
      title: 'Formateador SQL: Embellece Consultas Online | UtilityFlow',
      description:
        'Formatea consultas SQL con saltos de cláusula limpios, mayúsculas o minúsculas en palabras clave e indentación de 2 o 4 espacios, o minifícalas a una línea.',
      primaryKeyword: 'formateador sql',
      secondaryKeywords: [
        'embellecedor sql en linea',
        'imprimir sql bonito',
        'minificador sql',
        'formatear consulta sql en linea',
      ],
      longTailKeywords: [
        'formatear consulta sql select join group by en linea',
        'convertir palabras clave sql a mayusculas sin errores',
        'minimizar consulta sql conservando literales de cadena',
        'indentar consulta sql con 2 o 4 espacios en linea',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convierte consultas SQL densas de una sola línea en sentencias legibles y estructuradas con alineación clara de `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` y `ORDER BY`, mientras conserva las cadenas entre comillas y los comentarios.',
    instructions: [
      {
        title: 'Pega tu consulta SQL',
        description:
          'Inserta cualquier consulta SELECT, INSERT, UPDATE, DELETE o DDL en Consulta SQL sin procesar, incluidas sentencias de varias líneas o de una sola línea.',
      },
      {
        title: 'Elige el modo Embellecer o Minimizar',
        description:
          'Selecciona Embellecer para expandir la consulta en cláusulas indentadas legibles, o Minimizar para colapsarla en una sola línea para registros y código.',
      },
      {
        title: 'Configura el uso de mayúsculas y la indentación',
        description:
          'Elige palabras clave SQL en MAYÚSCULAS o minúsculas y selecciona indentación de 2 o 4 espacios para que coincida con la guía de estilo de tu equipo.',
      },
      {
        title: 'Revisa el resultado formateado',
        description:
          'Comprueba que los saltos de cláusula, los JOIN y las subconsultas estén alineados como esperabas y que las cadenas y los comentarios no se hayan tocado.',
      },
      {
        title: 'Copia o reutiliza el SQL formateado',
        description:
          'Usa Copiar SQL para transferir la consulta estandarizada de vuelta a tu editor, archivo de migración o pull request.',
      },
      {
        title: 'Corrige problemas de formato',
        description:
          'Si el resultado se ve mal, revisa si hay comillas sin balancear o un punto y coma faltante en tu entrada, y luego vuelve a pegar y formatear otra vez.',
      },
    ],
    examples: [
      {
        title: 'Formato de una consulta con varios joins',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: 'Divide las cláusulas SQL principales en líneas dedicadas y normaliza el uso de mayúsculas en las palabras clave.',
      },
      {
        title: 'Minimización de una consulta de varias líneas',
        input: 'SELECT id,\n  name\nFROM users\nWHERE active = 1;',
        output: 'SELECT id, name FROM users WHERE active = 1;',
        explanation: 'Colapsa una consulta de varias líneas en una sola línea y conserva intactos los literales de cadena.',
      },
    ],
    benefits: [
      'Conserva intactos los literales de cadena entre comillas simples y los comentarios SQL',
      'Admite cláusulas de varias palabras como LEFT OUTER JOIN, GROUP BY y ORDER BY',
      'Cambia sin esfuerzo entre los modos Embellecer y Minimizar',
      'Se ejecuta localmente, así que los nombres de tablas y esquemas privados se mantienen privados',
    ],
    useCases: [
      'Limpiar registros SQL generados por ORM para depurar rendimiento',
      'Estandarizar scripts SQL antes de revisiones de pull requests',
      'Compactar consultas de varias líneas en cadenas de una sola línea para scripts CLI',
      'Alinear el uso de mayúsculas en palabras clave en las guías de estilo SQL del equipo',
    ],
    faqs: [
      {
        question: '¿El Formateador SQL alterará los nombres de tablas o el texto entre comillas?',
        answer:
          'No. El tokenizador aísla los literales de cadena y los comentarios, así que el formato de mayúsculas o minúsculas solo se aplica a las palabras clave SQL reconocidas.',
      },
      {
        question: '¿Qué dialectos SQL son compatibles?',
        answer:
          'Se admiten cláusulas SQL ANSI estándar (PostgreSQL, MySQL, SQLite, SQL Server), incluidos SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE y DELETE.',
      },
      {
        question: '¿Puedo minimizar una consulta formateada de vuelta a una línea?',
        answer:
          'Sí. Cambia el interruptor de modo a Minimizar para eliminar comentarios y colapsar el espacio en blanco extra de forma segura.',
      },
      {
        question: '¿El Formateador SQL es gratis?',
        answer:
          'Sí. El Formateador SQL es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿El Formateador SQL envía mis consultas a un servidor?',
        answer:
          'No. Todo el formato ocurre localmente en tu navegador, así que los nombres de tablas, los detalles de esquema y los valores de datos de tus consultas nunca salen de tu dispositivo.',
      },
      {
        question: '¿Puedo formatear SQL con subconsultas y CTE?',
        answer:
          'Sí. Las sentencias SELECT anidadas y las expresiones de tabla comunes (WITH ... AS) se formatean con sus propios niveles de indentación para que la estructura se mantenga legible.',
      },
      {
        question: '¿El Formateador SQL maneja sentencias INSERT, UPDATE y DELETE?',
        answer:
          'Sí. Las sentencias INSERT, UPDATE y DELETE se formatean junto con las consultas SELECT, con sus cláusulas divididas en líneas separadas.',
      },
      {
        question: '¿Puedo formatear sentencias DDL como CREATE TABLE?',
        answer:
          'Sí. Las sentencias DDL como CREATE TABLE, ALTER TABLE y DROP TABLE se pueden pegar y formatear con las mismas reglas de mayúsculas e indentación.',
      },
      {
        question: '¿Qué opciones de indentación ofrece el Formateador SQL?',
        answer:
          'Puedes elegir indentación de 2 o 4 espacios para consultas embellecidas, para que el resultado coincida con tu editor o la guía de estilo de tu equipo.',
      },
      {
        question: '¿El formato cambia lo que hace mi consulta SQL?',
        answer:
          'No. El formato solo cambia el espacio en blanco y el uso de mayúsculas en las palabras clave; no agrega, elimina ni reordena ninguna parte de la lógica de la consulta.',
      },
      {
        question: '¿Puedo formatear varias consultas SQL a la vez?',
        answer:
          'Sí. Puedes pegar varias sentencias separadas por punto y coma y formatearlas juntas en una sola pasada.',
      },
      {
        question: '¿El Formateador SQL funciona con sintaxis de MySQL, PostgreSQL y SQL Server?',
        answer:
          'Sí. Maneja SQL ANSI estándar usado por MySQL, PostgreSQL, SQLite y SQL Server, incluidas sus palabras clave de cláusula comunes.',
      },
      {
        question: '¿Los comentarios de mi SQL se conservarán al formatear?',
        answer:
          'Sí. Los comentarios de una sola línea y de bloque se conservan gracias al tokenizador, aunque el modo Minimizar elimina los comentarios para producir el resultado más pequeño.',
      },
      {
        question: '¿Qué pasa si mi SQL tiene un error de sintaxis?',
        answer:
          'El formateador igual procesa el texto lo mejor que puede, ya que trabaja con tokens en lugar de ejecutar la consulta, pero deberías corregir el error antes de ejecutar el SQL en tu base de datos.',
      },
      {
        question: '¿Puedo minimizar SQL para usarlo en código de aplicación o registros?',
        answer:
          'Sí. El modo Minimizar colapsa una consulta a una línea mientras conserva los literales de cadena, lo que es ideal para insertar SQL en código o registrarlo de forma compacta.',
      },
      {
        question: '¿El Formateador SQL admite funciones de ventana?',
        answer:
          'Sí. Las funciones de ventana como ROW_NUMBER() OVER (PARTITION BY ...) se formatean como parte de la lista SELECT con sus cláusulas OVER intactas.',
      },
      {
        question: '¿Hay un límite de tamaño para el SQL que puedo formatear?',
        answer:
          'No hay un límite fijo de caracteres en la herramienta, ya que se ejecuta en tu navegador, aunque las consultas muy largas pueden tardar un momento en dispositivos más lentos.',
      },
      {
        question: '¿Puedo usar el Formateador SQL en mi teléfono?',
        answer:
          'Sí. Funciona en cualquier navegador móvil moderno, así que puedes pegar y formatear SQL en tu teléfono o tableta sin instalar nada.',
      },
      {
        question: '¿El Formateador SQL conserva los saltos de línea dentro de literales de cadena?',
        answer:
          'Sí. El texto dentro de literales de cadena entre comillas simples se deja intacto, así que las cadenas de varias líneas mantienen sus saltos de línea originales.',
      },
      {
        question: '¿Cómo puedo estandarizar el uso de mayúsculas en palabras clave en mi equipo con el Formateador SQL?',
        answer:
          'Acuerden un estilo de mayúsculas, como palabras clave en MAYÚSCULAS, y pasen cada consulta por el formateador con esa configuración antes de subirla a su repositorio.',
      },
    ],
  },
  'css-minifier': {
    slug: 'minificador-css',
    name: 'Minificador y Embellecedor de CSS',
    shortDescription:
      'Minimiza hojas de estilo CSS para reducir el tamaño del paquete o embellece reglas CSS comprimidas con indentación limpia.',
    keywords: [
      'minificador css',
      'embellecedor css',
      'comprimir css en linea',
      'formatear css',
      'compresor css',
      'minificar css en linea',
      'desminificar css',
      'formateador css',
      'reducir tamaño de archivo css',
    ],
    seo: {
      title: 'Minificador y Embellecedor de CSS Online | UtilityFlow',
      description:
        'Minimiza CSS eliminando comentarios y espacios extra, con estadísticas de ahorro en bytes en vivo, o embellece hojas minificadas en reglas limpias, gratis.',
      primaryKeyword: 'minificador css',
      secondaryKeywords: [
        'embellecedor css',
        'comprimir css',
        'formateador css en linea',
        'minificar css en linea',
      ],
      longTailKeywords: [
        'minificar css conservando cadenas entre comillas y media queries',
        'desminificar hoja css comprimida en linea',
        'calcular porcentaje de compresion css en el navegador',
        'reducir tamaño de archivo css antes de desplegar',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Comprime hojas de estilo CSS eliminando comentarios, espacios en blanco redundantes y puntos y coma finales antes de las llaves de cierre, o expande CSS minificado de una línea de vuelta a bloques indentados legibles.',
    instructions: [
      {
        title: 'Selecciona Minimizar o Embellecer',
        description:
          'Elige Minimizar CSS para reducir el peso del archivo para producción o Embellecer CSS para restaurar la indentación de una hoja de estilo comprimida.',
      },
      {
        title: 'Pega tu hoja de estilo',
        description:
          'Escribe reglas CSS, propiedades personalizadas o bloques `@media` en CSS de entrada, incluidas hojas de estilo completas o fragmentos individuales.',
      },
      {
        title: 'Ejecuta la herramienta y revisa las estadísticas',
        description:
          'El resultado se actualiza mientras escribes; en el modo Minimizar, revisa los bytes exactos de entrada, los bytes de salida y el porcentaje ahorrado.',
      },
      {
        title: 'Revisa el resultado con cuidado',
        description:
          'Confirma que los bloques @media, las cadenas entre comillas y los valores url(...) sobrevivieron intactos y que las reglas anidadas están indentadas correctamente en el modo Embellecer.',
      },
      {
        title: 'Copia o descarga el CSS',
        description:
          'Haz clic en Copiar CSS para pegar el resultado en tu hoja de estilo, bloque <style> en línea o paso de construcción de despliegue.',
      },
      {
        title: 'Corrige un resultado plano o roto',
        description:
          'Si el resultado de Embellecer se ve plano o las reglas se fusionan, revisa si falta una llave de cierre en tu entrada y agrégala antes de intentarlo otra vez.',
      },
    ],
    examples: [
      {
        title: 'Compresión de una regla de tarjeta',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: 'Elimina saltos de línea, espacios alrededor de la puntuación y el punto y coma final dentro del bloque.',
      },
      {
        title: 'Embellecimiento de una regla comprimida',
        input: '.card{padding:16px;margin:0}',
        output: '.card {\n  padding: 16px;\n  margin: 0;\n}',
        explanation: 'Expande una regla minificada de una línea en un bloque indentado y legible.',
      },
    ],
    benefits: [
      'El tokenizador conserva las cadenas entre comillas (como content: "..." o url(...))',
      'Elimina comentarios /* ... */ y espacio en blanco innecesario de forma segura',
      'Muestra los bytes exactos de entrada, los bytes de salida y el porcentaje ahorrado',
      'Incluye el modo Embellecer para inspeccionar CSS minificado de terceros',
    ],
    useCases: [
      'Comprimir fragmentos <style> en línea para correos HTML y páginas de destino',
      'Desminificar paquetes CSS de producción durante la depuración visual',
      'Revisar el ahorro de peso de la hoja de estilo antes del despliegue',
      'Limpiar inconsistencias de espaciado en hojas de estilo antiguas',
    ],
    faqs: [
      {
        question: '¿La minimización de CSS rompe los espacios dentro de cadenas content: "..."?',
        answer:
          'No. Los literales de cadena entre comillas simples y dobles se conservan textualmente gracias al tokenizador.',
      },
      {
        question: '¿Por qué Minimizar elimina el último punto y coma antes de "}"?',
        answer:
          'En la sintaxis CSS, la última declaración antes de una llave de cierre no requiere un punto y coma final, lo que ahorra 1 byte por bloque de regla.',
      },
      {
        question: '¿Admite bloques @media anidados en el modo Embellecer?',
        answer:
          'Sí. La profundidad de llaves se rastrea en bloques @media y @supports para que las reglas internas se indentan correctamente.',
      },
      {
        question: '¿El Minificador de CSS es gratis?',
        answer:
          'Sí. El Minificador de CSS es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿El Minificador de CSS sube mi hoja de estilo a algún lugar?',
        answer:
          'No. Toda la minimización y el embellecimiento ocurren localmente en tu navegador, así que tu CSS nunca sale de tu dispositivo.',
      },
      {
        question: '¿Cuánto más pequeño quedará mi CSS después de minimizarlo?',
        answer:
          'Depende de cuántos comentarios y espacios extra contenga tu hoja de estilo; la herramienta muestra el conteo exacto de bytes y el porcentaje ahorrado para tu entrada.',
      },
      {
        question: '¿La minimización de CSS elimina las consultas @media?',
        answer:
          'No. Las consultas @media y sus condiciones se conservan exactamente, ya que eliminarlas cambiaría cómo responde tu página a los tamaños de pantalla.',
      },
      {
        question: '¿Puedo minimizar CSS que usa propiedades personalizadas (variables)?',
        answer:
          'Sí. Las propiedades personalizadas como --brand-color y sus referencias var() se tratan como declaraciones normales y se mantienen intactas.',
      },
      {
        question: '¿El Minificador de CSS conserva url(...) y cadenas de content?',
        answer:
          'Sí. Las cadenas entre comillas dentro de url(...) y las propiedades content se conservan textualmente, así que las rutas de imágenes y el texto generado se mantienen correctos.',
      },
      {
        question: '¿El CSS minificado seguirá funcionando en todos los navegadores?',
        answer:
          'Sí. La minimización solo elimina comentarios y espacio en blanco innecesario, que los navegadores ignoran de todos modos, así que el resultado mostrado es idéntico.',
      },
      {
        question: '¿Puedo embellecer CSS de un paquete de producción?',
        answer:
          'Sí. Pega cualquier hoja de estilo minificada en el modo Embellecer para expandirla en reglas indentadas y legibles para depuración.',
      },
      {
        question: '¿El Minificador de CSS maneja @keyframes y @font-face?',
        answer:
          'Sí. Las reglas at como @keyframes, @font-face y @import se conservan, con sus bloques internos indentados correctamente en el modo Embellecer.',
      },
      {
        question: '¿Cuál es la diferencia entre minimizar y embellecer en el Minificador de CSS?',
        answer:
          'Minimizar reduce el CSS eliminando comentarios y espacio en blanco para producción, mientras que Embellecer expande el CSS comprimido en reglas indentadas legibles para editar y depurar.',
      },
      {
        question: '¿Puedo minimizar varias hojas de estilo a la vez?',
        answer:
          'Sí. Puedes pegar varias hojas de estilo juntas en una entrada, aunque mantener los archivos relacionados por separado hace que el resultado sea más fácil de manejar.',
      },
      {
        question: '¿El Minificador de CSS elimina reglas CSS sin usar?',
        answer:
          'No. Solo elimina comentarios y espacio en blanco; no analiza qué selectores usa tu HTML, así que las reglas sin usar quedan en el resultado.',
      },
      {
        question: '¿El porcentaje de ahorro en bytes que muestra el Minificador de CSS es exacto?',
        answer:
          'Sí. Se calcula a partir de los conteos reales de bytes de tu entrada y salida, así que el porcentaje refleja tu ahorro real.',
      },
      {
        question: '¿Puedo usar el Minificador de CSS para fragmentos <style> en línea?',
        answer:
          'Sí. Los fragmentos pequeños se minimizan igual que las hojas de estilo completas, lo que es útil para correos HTML y páginas de destino con estilos en línea.',
      },
      {
        question: '¿El Minificador de CSS admite CSS moderno como grid y anidado?',
        answer:
          'Sí. Las propiedades modernas como grid y flexbox pasan sin cambios, y las reglas anidadas se indentan por profundidad de llaves en el modo Embellecer.',
      },
      {
        question: '¿Qué pasa si mi CSS tiene un error de sintaxis?',
        answer:
          'La herramienta igual procesa el texto, pero una llave faltante o una cadena sin cerrar puede confundir el resultado, así que corrige los errores de sintaxis antes de minimizar para producción.',
      },
      {
        question: '¿Puedo minimizar CSS en mi teléfono?',
        answer:
          'Sí. El Minificador de CSS funciona en cualquier navegador móvil moderno, así que puedes pegar y minimizar hojas de estilo sin instalar nada.',
      },
    ],
  },
  'js-formatter': {
    slug: 'formateador-javascript',
    name: 'Minificador y Formateador de JavaScript / TypeScript',
    shortDescription:
      'Minimiza fragmentos de JavaScript eliminando comentarios y espacio en blanco en exceso, o embellece bloques de código compactos.',
    keywords: [
      'minificador javascript',
      'formateador js',
      'embellecedor js',
      'comprimir javascript en linea',
      'formateador javascript',
      'minificador js en linea',
      'embellecer javascript',
      'minificador typescript',
      'formateador de codigo js',
    ],
    seo: {
      title: 'Minificador y Formateador JavaScript Online | UtilityFlow',
      description:
        'Minimiza JavaScript y TypeScript eliminando comentarios y espacios extra de forma segura, o embellece código compacto con indentación de 2 o 4 espacios, gratis.',
      primaryKeyword: 'minificador javascript',
      secondaryKeywords: [
        'embellecedor js',
        'formatear javascript en linea',
        'compresor js',
        'formateador javascript',
      ],
      longTailKeywords: [
        'minificar javascript conservando cadenas y template literals',
        'desminificar codigo javascript compacto con indentacion',
        'formateador y minificador js en el navegador',
        'embellecer codigo javascript con indentacion de 2 o 4 espacios',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compacta fragmentos de JavaScript para bookmarklets y scripts en línea eliminando comentarios y espaciado en exceso, mientras mantiene intactos los literales de cadena, o vuelve a indentar código comprimido sin problemas.',
    instructions: [
      {
        title: 'Elige Minimizar JS o Embellecer JS',
        description:
          'Elige Minimizar JS para eliminar comentarios y espacio en blanco y obtener un resultado compacto, o Embellecer JS con 2 o 4 espacios para restaurar una indentación legible.',
      },
      {
        title: 'Pega tu fragmento de código',
        description:
          'Inserta código JavaScript o TypeScript en el editor de la izquierda, desde una sola función hasta un bloque de script completo.',
      },
      {
        title: 'Configura la indentación para el modo Embellecer',
        description:
          'Elige indentación de 2 o 4 espacios para que el código embellecido coincida con tu editor o el estilo de tu proyecto.',
      },
      {
        title: 'Revisa el ahorro en bytes y el resultado',
        description:
          'Verifica la reducción en bytes en el modo Minimizar y revisa el resultado para confirmar que las cadenas, los template literals y los patrones regex están intactos.',
      },
      {
        title: 'Copia el código procesado',
        description:
          'Usa el botón de copiar para mover el código minimizado o embellecido a tu editor, bookmarklet o script en línea.',
      },
      {
        title: 'Corrige problemas de minimización',
        description:
          'Si el código minimizado se comporta de forma extraña, agrega primero los puntos y coma faltantes a tu entrada, ya que la inserción automática de punto y coma puede ser ambigua después de eliminar el espacio en blanco.',
      },
    ],
    examples: [
      {
        title: 'Eliminación de comentarios y espacio en blanco',
        input: '// Helper\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: 'Elimina comentarios y espacio en blanco alrededor de las llaves sin tocar la lógica.',
      },
      {
        title: 'Embellecimiento de código compacto',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation: 'Vuelve a indentar código de una sola línea en líneas legibles con indentación de 2 espacios.',
      },
    ],
    benefits: [
      'El tokenizador léxico protege cadenas simples, dobles y template literals con backticks',
      'Elimina comentarios // de una sola línea y /* */ de bloque en el modo Minimizar',
      'Reporta el porcentaje de reducción en bytes en vivo',
      'Ejecución rápida solo en el navegador, sin código enviado a externos',
    ],
    useCases: [
      'Preparar scripts en línea compactos o bookmarklets',
      'Desempaquetar fragmentos comprimidos de una sola línea para leerlos',
      'Eliminar comentarios de desarrollador antes de compartir muestras de código',
      'Volver a indentar rápidamente funciones JS pegadas',
    ],
    faqs: [
      {
        question: '¿Esta herramienta renombra variables (mangling) como Terser o esbuild?',
        answer:
          'No. Realiza una minimización segura de espacio en blanco y comentarios sin renombrar identificadores ni alterar la semántica del AST, lo que hace que el resultado sea fácil de inspeccionar.',
      },
      {
        question: '¿Los literales de cadena que contienen "//" (como URLs) están seguros?',
        answer:
          'Sí. Las cadenas entre comillas y los template literals se tokenizan antes de la detección de comentarios, así que las URLs dentro de comillas nunca se tratan como comentarios.',
      },
      {
        question: '¿Debería usar punto y coma al minimizar JS con varias sentencias?',
        answer:
          'Se recomienda incluir puntos y coma estándar antes de minimizar cualquier fragmento de JavaScript para evitar ambigüedades de ASI (inserción automática de punto y coma).',
      },
      {
        question: '¿El Minificador de JavaScript es gratis?',
        answer:
          'Sí. El Minificador de JavaScript es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿El Minificador de JavaScript sube mi código a un servidor?',
        answer:
          'No. Toda la minimización y el formato ocurren localmente en tu navegador, así que tu código nunca sale de tu dispositivo.',
      },
      {
        question: '¿El Minificador de JavaScript funciona con código TypeScript?',
        answer:
          'Sí. Los fragmentos TypeScript se pueden pegar y minimizar o embellecer de la misma manera, ya que el tokenizador maneja la sintaxis estándar de JS y TS.',
      },
      {
        question: '¿Minimizar romperá mi JavaScript?',
        answer:
          'No, siempre que tu código use puntos y coma estándar. Solo se eliminan comentarios y espacio en blanco extra, así que la lógica se mantiene idéntica.',
      },
      {
        question: '¿El Minificador de JavaScript elimina sentencias console.log?',
        answer:
          'No. Solo elimina comentarios y espacio en blanco, así que las llamadas console.log y otras sentencias quedan en el resultado.',
      },
      {
        question: '¿Puedo embellecer código minificado de un paquete de producción?',
        answer:
          'Sí. Pega código compacto de una sola línea en el modo Embellecer para volver a indentarlo en líneas legibles para depuración.',
      },
      {
        question: '¿El Minificador de JavaScript maneja template literals con expresiones ${}?',
        answer:
          'Sí. Los template literals con backticks, incluidas las interpolaciones ${}, se tokenizan como cadenas y se conservan exactamente.',
      },
      {
        question: '¿Cuál es la diferencia entre minimizar y embellecer en el Minificador de JavaScript?',
        answer:
          'Minimizar elimina comentarios y espacio en blanco para reducir el código para uso en línea, mientras que Embellecer vuelve a indentar el código compacto en líneas legibles para editar.',
      },
      {
        question: '¿Puedo minimizar código ES6 con funciones flecha y clases?',
        answer:
          'Sí. Las funciones flecha, las clases, la desestructuración y otra sintaxis moderna de ES6 son manejadas por el tokenizador sin cambiar el código.',
      },
      {
        question: '¿El Minificador de JavaScript admite código JSX o React?',
        answer:
          'JSX no es compatible de forma específica, ya que los corchetes angulares en JSX pueden ser malinterpretados por el tokenizador. Úsalo para JavaScript o TypeScript simple y un formateador dedicado para JSX.',
      },
      {
        question: '¿Cuánto más pequeño quedará mi JavaScript después de minimizarlo?',
        answer:
          'Depende de cuántos comentarios y saltos de línea tenga tu código; la herramienta muestra el conteo exacto de bytes y el porcentaje ahorrado para tu fragmento.',
      },
      {
        question: '¿Puedo minimizar varios archivos JavaScript a la vez?',
        answer:
          'La herramienta procesa un fragmento a la vez, así que pega cada archivo por separado. Para proyectos completos, usa un empaquetador como esbuild o Terser.',
      },
      {
        question: '¿El Minificador de JavaScript conserva las expresiones regulares?',
        answer:
          'Sí. Los literales de expresiones regulares son reconocidos por el tokenizador y se mantienen intactos, incluidos los caracteres // dentro del patrón.',
      },
      {
        question: '¿Qué pasa si mi JavaScript tiene un error de sintaxis?',
        answer:
          'La herramienta igual procesa el texto, pero las llaves sin balancear o las cadenas sin cerrar pueden producir un resultado extraño, así que corrige los errores de sintaxis antes de minimizar.',
      },
      {
        question: '¿Puedo usar el Minificador de JavaScript para bookmarklets?',
        answer:
          'Sí. El modo Minimizar es ideal para bookmarklets, ya que colapsa un fragmento en una sola línea compacta que puedes pegar en la URL de un marcador.',
      },
      {
        question: '¿El resultado minimizado es seguro para pegarlo en una etiqueta script de HTML?',
        answer:
          'En general sí, pero evita una secuencia literal "</script>" dentro de tus cadenas, ya que el navegador la trataría como el final del bloque de script.',
      },
      {
        question: '¿Puedo formatear JavaScript en mi teléfono?',
        answer:
          'Sí. El Minificador de JavaScript funciona en cualquier navegador móvil moderno, así que puedes pegar y formatear código sin instalar nada.',
      },
    ],
  },
  'cron-expression-parser': {
    slug: 'analizador-expresiones-cron',
    name: 'Analizador de Expresiones Cron y Vista Previa de Horario',
    shortDescription:
      'Traduce expresiones cron de 5 campos a lenguaje claro, explora ajustes preestablecidos y mira las próximas 8 ejecuciones.',
    keywords: [
      'analizador de expresiones cron',
      'generador crontab',
      'probador de horario cron',
      'proximas ejecuciones cron',
      'analizador crontab',
      'probador de expresiones cron',
      'vista previa de horario cron',
      'cron a lenguaje claro',
      'programador de tareas cron',
    ],
    seo: {
      title: 'Analizador de Expresiones Cron en Línea | UtilityFlow',
      description:
        'Analiza expresiones cron de 5 campos en horarios en lenguaje claro, revisa cada campo, prueba ajustes preestablecidos comunes y mira las próximas 8 ejecuciones.',
      primaryKeyword: 'analizador de expresiones cron',
      secondaryKeywords: [
        'alternativa a crontab guru',
        'vista previa de horario cron',
        'constructor cron',
        'probador de expresiones cron',
      ],
      longTailKeywords: [
        'traducir expresion cron de 5 campos a lenguaje claro',
        'calcular proximas 8 marcas de ejecucion cron',
        'probar expresiones cron de dias de semana y pasos en linea',
        'expresion cron cada dia de semana a las 9am ejemplo',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decodifica expresiones crontab Unix de 5 campos (`minuto hora día-del-mes mes día-de-la-semana`) en resúmenes claros y legibles, verifica los rangos de los campos e inspecciona las próximas 8 marcas de ejecución programadas.',
    instructions: [
      {
        title: 'Escribe una expresión cron de 5 campos o elige un ajuste preestablecido',
        description:
          'Escribe cualquier expresión cron como `0 9 * * 1-5` o haz clic en un botón de horario común preestablecido para comenzar desde un patrón conocido.',
      },
      {
        title: 'Revisa el resumen en lenguaje claro y el desglose de campos',
        description:
          'Verifica que los campos de minuto, hora, día del mes, mes y día de la semana coincidan con tu intención antes de confiar en el horario.',
      },
      {
        title: 'Verifica las próximas 8 ejecuciones',
        description:
          'Revisa las próximas marcas de ejecución locales calculadas para confirmar que el trabajo se ejecuta cuando esperas.',
      },
      {
        title: 'Ajusta campos con pasos, rangos y listas',
        description:
          'Refina el horario con valores de paso como */15, rangos como 1-5 o listas como 1,15, y luego vuelve a revisar el resumen y las ejecuciones.',
      },
      {
        title: 'Copia la expresión para tu programador',
        description:
          'Copia la expresión verificada en tu crontab, flujo de trabajo de GitHub Actions o activador cron de Cloudflare Worker.',
      },
      {
        title: 'Cuidado con día del mes frente a día de la semana',
        description:
          'Si ambos campos de día están restringidos, el cron estándar se ejecuta cuando cualquiera de los dos coincide. Usa * en uno de ellos si solo quieres que se aplique una condición.',
      },
    ],
    examples: [
      {
        title: 'Trabajo matutino en horario laboral',
        input: '0 9 * * 1-5',
        output: 'A las 09:00, de lunes a viernes.',
        explanation: 'Se ejecuta a las 09:00 cada lunes a viernes.',
      },
      {
        title: 'Trabajo cada 15 minutos',
        input: '*/15 * * * *',
        output: 'Cada 15 minutos.',
        explanation: 'El paso */15 en el campo de minutos ejecuta el trabajo a las :00, :15, :30 y :45 de cada hora.',
      },
    ],
    benefits: [
      'Admite comodines (*), pasos (*/5), rangos (1-5), listas (1,15) y nombres (LUN-VIE)',
      'Calcula las próximas 8 marcas de ejecución concretas en tu zona horaria local',
      'Señala de inmediato valores fuera de rango o campos faltantes',
      'Incluye ajustes preestablecidos de un clic para intervalos comunes',
    ],
    useCases: [
      'Verificar `schedule.cron` de GitHub Actions y activadores cron de Cloudflare Workers',
      'Depurar horarios crontab de Linux para respaldos o limpieza',
      'Verificar la lógica de día de la semana (0–6) frente a día del mes (1–31)',
      'Documentar horarios de trabajos recurrentes para manuales de operaciones',
    ],
    faqs: [
      {
        question: '¿Este analizador admite expresiones cron de 6 campos con segundos?',
        answer:
          'Esta herramienta analiza expresiones crontab Unix estándar de 5 campos (minuto, hora, día del mes, mes, día de la semana), usadas por cron de Linux, GitHub Actions y Cloudflare Workers.',
      },
      {
        question: '¿Qué pasa si tanto el día del mes como el día de la semana no son comodines?',
        answer:
          'Siguiendo el comportamiento estándar de cron Vixie/Unix, cuando ambos campos de día están restringidos, una ejecución se activa si coincide el día del mes O el día de la semana.',
      },
      {
        question: '¿Se admiten los nombres LUN–VIE y ENE–DIC?',
        answer:
          'Sí. Se admiten las abreviaturas estándar en inglés de 3 letras para meses y días de semana, así como 0 o 7 numéricos para domingo.',
      },
      {
        question: '¿El Analizador de Expresiones Cron es gratis?',
        answer:
          'Sí. El Analizador de Expresiones Cron es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿Qué es una expresión cron?',
        answer:
          'Una expresión cron es una cadena compacta de horario de 5 campos que le dice a un sistema cuándo ejecutar un trabajo automáticamente, como cada hora o cada día de semana a las 9 a. m.',
      },
      {
        question: '¿Qué significan los 5 campos de una expresión cron?',
        answer:
          'De izquierda a derecha son minuto (0-59), hora (0-23), día del mes (1-31), mes (1-12) y día de la semana (0-7, donde tanto 0 como 7 significan domingo).',
      },
      {
        question: '¿Cómo ejecuto un trabajo cron cada 5 minutos?',
        answer:
          'Usa la sintaxis de paso en el campo de minutos: */5 * * * * ejecuta el trabajo cada 5 minutos, a las :00, :05, :10, y así sucesivamente.',
      },
      {
        question: '¿Cómo programo un trabajo cron a las 9 a. m. en días de semana?',
        answer:
          'Usa 0 9 * * 1-5, que significa minuto 0, hora 9, cualquier día del mes, cualquier mes y días de semana de lunes a viernes.',
      },
      {
        question: '¿Qué significa */15 en una expresión cron?',
        answer:
          'La sintaxis de paso */15 significa cada 15 unidades de ese campo, así que */15 en el campo de minutos ejecuta un trabajo cada 15 minutos.',
      },
      {
        question: '¿Cuál es la diferencia entre 0 y 7 para domingo en cron?',
        answer:
          'No hay diferencia; tanto 0 como 7 representan domingo en el campo de día de la semana, así que puedes usar el que prefieras.',
      },
      {
        question: '¿Puedo usar este Analizador de Expresiones Cron para horarios de GitHub Actions?',
        answer:
          'Sí. GitHub Actions usa la misma sintaxis cron de 5 campos, así que puedes verificar un horario aquí antes de pegarlo en tu archivo de flujo de trabajo.',
      },
      {
        question: '¿El Analizador de Expresiones Cron toma en cuenta mi zona horaria?',
        answer:
          'Las próximas 8 ejecuciones se muestran en la zona horaria local de tu navegador, pero recuerda que cron se ejecuta en la zona horaria del servidor, así que revisa también la configuración de tu servidor.',
      },
      {
        question: '¿Qué pasa si escribo una expresión cron no válida?',
        answer:
          'El analizador señala de inmediato valores fuera de rango o campos faltantes, para que puedas corregir la expresión antes de desplegarla.',
      },
      {
        question: '¿Puedo programar un trabajo cron para el último día del mes?',
        answer:
          'El cron estándar de 5 campos no tiene sintaxis de último día. Una solución común es programar los días 28-31 y dejar que el trabajo mismo compruebe si es el último día.',
      },
      {
        question: '¿Qué significan L y W en una expresión cron?',
        answer:
          'L (último) y W (día de semana) son extensiones de estilo Quartz, no parte del cron Unix estándar, así que este analizador no las admite.',
      },
      {
        question: '¿Cómo ejecuto un trabajo cron dos veces al día?',
        answer:
          'Enumera ambas horas en el campo de hora, por ejemplo 0 6,18 * * * ejecuta el trabajo a las 6 a. m. y 6 p. m. todos los días.',
      },
      {
        question: '¿El Analizador de Expresiones Cron admite segundos o expresiones de 6 campos?',
        answer:
          'No. Solo admite expresiones Unix estándar de 5 campos; los programadores que necesitan segundos usan un formato diferente de 6 campos.',
      },
      {
        question: '¿Puedo ver ejecuciones cron para un rango de fechas específico?',
        answer:
          'La herramienta muestra las próximas 8 ejecuciones a partir de ahora. No ofrece una vista de rango de fechas personalizado, pero las próximas 8 ejecuciones suelen revelar errores de horario.',
      },
      {
        question: '¿Por qué mi trabajo cron se ejecuta en días inesperados?',
        answer:
          'La causa más común es restringir tanto el día del mes como el día de la semana, lo que activa una ejecución cuando cualquiera de los dos coincide. Configura uno de ellos en * para corregirlo.',
      },
      {
        question: '¿Puedo usar ajustes preestablecidos de cron para horarios comunes?',
        answer:
          'Sí. La herramienta incluye ajustes preestablecidos de un clic para intervalos comunes como cada hora, diario, semanal y mensual, que luego puedes personalizar.',
      },
    ],
  },
  'color-converter': {
    slug: 'convertidor-colores',
    name: 'Convertidor de Colores (HEX / RGB / HSL y Contraste WCAG)',
    shortDescription:
      'Convierte colores entre HEX, RGB y HSL con selector de color en vivo y verificación de contraste WCAG 2.1 AA/AAA.',
    keywords: [
      'convertidor de colores',
      'hex a rgb',
      'rgb a hsl',
      'verificador de contraste wcag',
      'hex a hsl',
      'rgb a hex',
      'selector de color en linea',
      'convertidor de color hex',
      'hsl a rgb',
    ],
    seo: {
      title: 'Convertidor de Colores HEX, RGB y HSL | UtilityFlow',
      description:
        'Convierte colores entre HEX, RGB y HSL al instante, y luego prueba el contraste entre texto y fondo para cumplir WCAG 2.1 AA y AAA, gratis en tu navegador.',
      primaryKeyword: 'convertidor de colores',
      secondaryKeywords: [
        'convertidor hex a rgb',
        'selector de color hsl',
        'verificador de contraste wcag',
        'convertidor rgb a hex',
      ],
      longTailKeywords: [
        'convertir color hex a valores css rgb y hsl',
        'revisar contraste de texto wcag 2.1 aa y aaa',
        'herramienta interactiva de color hex rgb hsl para desarrolladores',
        'convertir hex a hsl para variables css',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Traduce colores sin problemas entre las notaciones CSS HEX, RGB y HSL con una muestra en vivo y un verificador integrado de relación de contraste WCAG 2.1 para diseño de interfaz accesible.',
    instructions: [
      {
        title: 'Elige o escribe un color',
        description:
          'Usa el selector de color, escribe un código HEX de 3 o 6 dígitos, o ajusta los canales individuales R/G/B o H/S/L para establecer tu color de texto.',
      },
      {
        title: 'Revisa los valores HEX, RGB y HSL',
        description:
          'Revisa los valores sincronizados en las tres notaciones y confirma que la muestra en vivo coincida con el color que querías.',
      },
      {
        title: 'Copia los valores de color CSS',
        description:
          'Haz clic en Copiar HEX, Copiar RGB o Copiar HSL para obtener cadenas CSS listas para usar en tu hoja de estilo o tokens de diseño.',
      },
      {
        title: 'Selecciona un color de fondo',
        description:
          'Elige un color de fondo abajo para compararlo con tu color de texto en la verificación de contraste.',
      },
      {
        title: 'Revisa los resultados de contraste WCAG',
        description:
          'Lee la relación de contraste exacta y el estado Aprobado o Reprobado para texto normal AA, texto normal AAA y texto grande AA antes de publicar la combinación.',
      },
      {
        title: 'Corrige una combinación de contraste que falla',
        description:
          'Si la combinación falla, baja la Luminosidad en HSL para oscurecer el texto (o aclara el fondo) hasta que la relación llegue al menos a 4.5:1 para texto normal.',
      },
    ],
    examples: [
      {
        title: 'Azul cobalto accesible sobre blanco',
        input: 'Texto: #2563EB · Fondo: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Contraste: 5.17:1 (AA aprobado)',
        explanation: 'Cumple el requisito WCAG AA de 4.5:1 para texto estándar del cuerpo.',
      },
      {
        title: 'Conversión de HEX a RGB y HSL',
        input: '#FF0000',
        output: 'RGB: rgb(255, 0, 0) · HSL: hsl(0, 100%, 50%)',
        explanation: 'El mismo rojo se muestra en las tres notaciones CSS, sincronizadas en tiempo real.',
      },
    ],
    benefits: [
      'Sincroniza los canales HEX, RGB y HSL de forma bidireccional en tiempo real',
      'Calculadora integrada de contraste por luminancia relativa según WCAG 2.1',
      'Prueba los umbrales AA normal (4.5:1), AAA normal (7.0:1) y AA grande (3.0:1)',
      'Copia con un clic para cadenas válidas de color CSS',
    ],
    useCases: [
      'Verificar el contraste del texto de botones y enlaces durante la implementación de la interfaz',
      'Convertir paletas HEX de marca a HSL para Tailwind o variables CSS',
      'Ajustar la luminosidad y saturación sin salir del navegador',
      'Auditar el cumplimiento de accesibilidad antes de la entrega de diseño',
    ],
    faqs: [
      {
        question: '¿Qué relación de contraste se requiere para texto de cuerpo WCAG 2.1 AA?',
        answer:
          'WCAG 2.1 AA requiere al menos 4.5:1 para texto normal y 3.0:1 para texto grande (18pt / 24px normal o 14pt / 18.66px en negrita).',
      },
      {
        question: '¿Puedo escribir códigos HEX abreviados de 3 dígitos como #09f?',
        answer:
          'Sí. Los códigos HEX de tres caracteres se expanden automáticamente a sus equivalentes de 6 caracteres.',
      },
      {
        question: '¿Por qué HSL facilita ajustar temas más que RGB?',
        answer:
          'HSL separa Tono, Saturación y Luminosidad, lo que permite oscurecer o aclarar un color de marca cambiando solo el porcentaje de Luminosidad.',
      },
      {
        question: '¿El Convertidor de Colores es gratis?',
        answer:
          'Sí. El Convertidor de Colores es completamente gratis, sin registro, y se ejecuta por completo en tu navegador.',
      },
      {
        question: '¿El Convertidor de Colores guarda mis colores?',
        answer:
          'No. Las conversiones y verificaciones de contraste ocurren localmente en tu navegador, así que tus elecciones de paleta nunca se suben ni se guardan.',
      },
      {
        question: '¿Cómo convierto HEX a RGB con el Convertidor de Colores?',
        answer:
          'Escribe un código HEX como #2563EB y el valor RGB aparece al instante, listo para copiar como una cadena CSS rgb().',
      },
      {
        question: '¿Cómo convierto RGB a HSL?',
        answer:
          'Escribe los valores RGB o ajusta los canales R, G y B, y el valor HSL correspondiente se actualiza en vivo en el mismo panel.',
      },
      {
        question: '¿Cuál es la diferencia entre HEX, RGB y HSL?',
        answer:
          'HEX es un código compacto para un color, RGB lo define por cantidades de rojo, verde y azul, y HSL lo define por tono, saturación y luminosidad. Describen el mismo color en notaciones diferentes.',
      },
      {
        question: '¿Qué relación de contraste necesito para WCAG AAA?',
        answer:
          'WCAG AAA requiere al menos 7.0:1 para texto normal y 4.5:1 para texto grande, lo que es más estricto que el nivel AA.',
      },
      {
        question: '¿Qué cuenta como texto grande para el contraste WCAG?',
        answer:
          'El texto grande es de 18pt (24px) o más en peso normal, o de 14pt (18.66px) o más en peso negrita. El texto grande solo necesita una relación de 3.0:1 para AA.',
      },
      {
        question: '¿Puedo convertir un color con transparencia (alfa) en el Convertidor de Colores?',
        answer:
          'Este convertidor maneja colores sólidos sin canal alfa. Para transparencia, toma los valores RGB convertidos y úsalos dentro de una función rgba().',
      },
      {
        question: '¿El Convertidor de Colores admite códigos HEX de 8 dígitos con alfa?',
        answer:
          'No. El convertidor acepta códigos HEX estándar de 3 y 6 dígitos; para transparencia, usa el resultado RGB con un valor alfa en rgba().',
      },
      {
        question: '¿Puedo elegir un color de una imagen con el Convertidor de Colores?',
        answer:
          'No. La herramienta no toma muestras de imágenes; escribe el valor HEX del color que quieres o elígelo con el selector de color integrado.',
      },
      {
        question: '¿Cómo se calcula la relación de contraste WCAG?',
        answer:
          'Se calcula a partir de la luminancia relativa de los colores de texto y fondo con la fórmula definida en la especificación WCAG 2.1.',
      },
      {
        question: '¿Por qué mi color de marca falla el contraste AA sobre blanco?',
        answer:
          'Los colores de marca claros o de tono medio suelen quedar por debajo del umbral de 4.5:1 contra blanco. Oscurece el color o úsalo solo para texto grande y elementos decorativos.',
      },
      {
        question: '¿Puedo copiar colores como variables CSS desde el Convertidor de Colores?',
        answer:
          'Sí. Copia el valor HEX, RGB o HSL y pégalo en una propiedad personalizada CSS, por ejemplo --brand: #2563EB, y luego haz referencia con var(--brand).',
      },
      {
        question: '¿Cuál es la diferencia entre HSL y HSV?',
        answer:
          'HSL describe un color por tono, saturación y luminosidad, mientras que HSV usa tono, saturación y valor (brillo). HSL suele ser más fácil para crear variantes accesibles de temas claros y oscuros.',
      },
      {
        question: '¿Puedo convertir colores CSS con nombre como "red" en el Convertidor de Colores?',
        answer:
          'Escribe el valor HEX del color con nombre, por ejemplo red es #FF0000. La herramienta acepta entrada HEX, RGB y HSL.',
      },
      {
        question: '¿Cómo encuentro un tono más oscuro de mi color de marca?',
        answer:
          'Convierte el color a HSL, mantén el tono y la saturación iguales, y baja el porcentaje de Luminosidad hasta llegar al tono que quieres.',
      },
      {
        question: '¿Puedo usar el Convertidor de Colores en mi teléfono?',
        answer:
          'Sí. El Convertidor de Colores funciona en cualquier navegador móvil moderno, así que puedes convertir colores y revisar el contraste sin instalar nada.',
      },
    ],
  },
};
