import type { ToolLocaleOverride } from '../../types';

/**
 * Spanish overrides — Free AI tools (3 tools).
 * Source: src/registry/aiTools.ts.
 * Filled by Phase 1 translation. See batch1.ts for the required shape.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 */
export const ES_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'asistente-de-escritura-ia',
    name: 'Asistente de Escritura con IA',
    shortDescription:
      'Corrija gramática, reescriba oraciones, ajuste el tono, parafrasee, amplíe ideas y redacte correos claros gratis y sin registro.',
    keywords: [
      'asistente de escritura con ia',
      'corrector de gramatica gratis',
      'reescritor de oraciones',
      'parafraseador de texto',
      'convertidor de tono',
      'asistente de redaccion de correos',
      'correccion de ortografia',
      'simplificador de oraciones',
      'corrector de texto con ia',
    ],
    seo: {
      title: 'Asistente de Escritura con IA: Gramática | UtilityFlow',
      description:
        'Corrija gramática, reescriba oraciones, ajuste el tono, simplifique o amplíe párrafos, parafrasee texto y escriba correos claros gratis, sin registro ni cuenta.',
      primaryKeyword: 'asistente de escritura con ia',
      secondaryKeywords: [
        'corrector de gramatica gratis con ia',
        'reescritor de oraciones con ia',
        'parafraseador de texto con ia',
        'asistente de escritura de correos con ia',
      ],
      longTailKeywords: [
        'asistente de escritura con ia gratis sin registro',
        'hacer texto mas profesional con herramienta de ia',
        'reescribir parrafo conservando significado gratis',
        'corregir gramatica y ortografia en linea gratis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis sin inicio de sesión, suscripción ni créditos. Límite gratuito: hasta 5 solicitudes de escritura por día por visitante (máximo 12.000 caracteres), impulsado por inferencia de nivel gratuito de Groq sin almacenar su texto.',
    intro:
      'Refine borradores limpiamente en segundos sin crear una cuenta. Elija entre 10 tareas de escritura, incluida la corrección de gramática, el parafraseo, el cambio de tono, la simplificación de oraciones y la redacción de correos, preservando estrictamente su significado y datos originales.',
    instructions: [
      {
        title: 'Pegue o escriba su texto',
        description:
          'Ingrese hasta 12.000 caracteres en el editor. Use los contadores en vivo de palabras y caracteres para verificar la longitud del borrador antes de generar.',
      },
      {
        title: 'Elija una tarea de escritura, tono e idioma',
        description:
          'Seleccione una de las 10 tareas de escritura (como Corregir gramática, Hacer profesional, Parafrasear o Escribir un correo), combine un tono de Profesional a Simple y elija su idioma de salida objetivo.',
      },
      {
        title: 'Haga clic en Generar para procesar su solicitud',
        description:
          'Presione Generar y espere unos segundos mientras la solicitud se envía a Groq para inferencia. Un indicador de progreso muestra mientras se produce su texto mejorado.',
      },
      {
        title: 'Revise y compare el texto original con el mejorado',
        description:
          'Inspeccione la vista lado a lado o los cambios resaltados a nivel de palabra para ver exactamente qué cambió, y confirme que los nombres, números y fechas se mantuvieron intactos.',
      },
      {
        title: 'Copie o descargue el resultado',
        description:
          'Use el botón Copiar para mover el texto mejorado a su portapapeles, o descárguelo como archivo TXT para usarlo en su documento o cliente de correo.',
      },
      {
        title: 'Pruebe otra tarea o tono si es necesario',
        description:
          'Si el resultado no es del todo correcto, cambie la tarea o el tono y genere de nuevo; por ejemplo, pruebe Hacer simple después de Hacer profesional, teniendo en cuenta el límite diario gratuito de solicitudes.',
      },
    ],
    examples: [
      {
        title: 'Limpieza de gramática y ortografía',
        input:
          'Hola equipo, queria dar seguimiento a la reunion de ayer y compartir el cronograma actualizado para el lanzamiento del cuarto trimestre.',
        output:
          'Hola equipo, quería dar seguimiento a la reunión de ayer y compartir el cronograma actualizado para el lanzamiento del cuarto trimestre.',
        explanation:
          'Tarea: Corregir gramática · Tono: Profesional. Corrige acentuación y ortografía mientras mantiene su voz exacta.',
      },
      {
        title: 'Notas sueltas convertidas en correo listo',
        input:
          'preguntale a la clienta sara si el jueves a las 2pm le sirve para la revision de diseno, menciona que el mockup v2 esta listo y el enlace adjunto',
        output:
          'Asunto: Llamada de revisión de diseño y Mockup v2\n\nHola Sara,\n\nQuería avisarte que el Mockup v2 está listo y adjunto para tu revisión. ¿Te serviría el jueves a las 2:00 p. m. para una breve llamada de revisión de diseño?\n\nSaludos cordiales,',
        explanation:
          'Tarea: Escribir un correo · Tono: Amable. Estructura notas con viñetas en un correo cortés y factual sin inventar detalles.',
      },
    ],
    benefits: [
      'Acceso 100% gratis sin registro, inicio de sesión ni muros de pago de suscripción',
      '10 modos de escritura especializados más 7 ajustes de tono y salida en varios idiomas',
      'Preserva nombres, números, fechas y significado sin fabricar datos',
      'Comparación lado a lado y seguimiento de cambios resaltados a nivel de palabra',
    ],
    useCases: [
      'Pulir correos, propuestas y actualizaciones de estado de clientes antes de enviarlos',
      'Corregir errores de gramática, puntuación y ortografía en ensayos o informes',
      'Simplificar párrafos técnicos densos para audiencias más amplias',
      'Convertir borradores de chat casuales en comunicación formal de trabajo',
    ],
    faqs: [
      {
        question: '¿El Asistente de Escritura con IA es completamente gratis sin registrarse?',
        answer:
          'Sí. No necesita crear una cuenta, ingresar una dirección de correo ni agregar una tarjeta de pago. Los visitantes reciben hasta 5 solicitudes de escritura gratuitas por día UTC.',
      },
      {
        question: '¿La IA inventa datos nuevos al reescribir o ampliar texto?',
        answer:
          'No. Nuestra indicación del sistema instruye al modelo a preservar estrictamente todos los datos, nombres, fechas y números originales y evitar fabricar estadísticas o afirmaciones.',
      },
      {
        question: '¿UtilityFlow almacena o registra mi escritura?',
        answer:
          'UtilityFlow no almacena, registra ni vende su texto. Las solicitudes se envían de forma segura a través de nuestro backend a Groq para inferencia, y el seguimiento de la cuota de visitantes usa solo un hash SHA-256 diario con sal.',
      },
      {
        question: '¿Qué pasa si alcanzo el límite diario gratuito de solicitudes?',
        answer:
          'Los límites diarios se restablecen automáticamente a la medianoche UTC. Mientras tanto, las más de 85 utilidades locales del navegador, incluidos el Contador de Palabras, el Verificador de Legibilidad y el Verificador de Diferencias de Texto, funcionan sin límites.',
      },
      {
        question: '¿Qué tareas de escritura puede manejar el Asistente de Escritura con IA?',
        answer:
          'Ofrece 10 tareas, incluidas Corregir gramática, Hacer profesional, Parafrasear, Simplificar, Ampliar, Resumir, Escribir un correo, Mejorar claridad, Cambiar tono y Corregir ortografía.',
      },
      {
        question: '¿Qué tan largo puede ser mi texto en el Asistente de Escritura con IA?',
        answer:
          'Cada solicitud acepta hasta 12.000 caracteres. Para documentos más largos, divida el texto en secciones y procéselas una a la vez.',
      },
      {
        question: '¿Qué tonos puedo elegir para mi texto reescrito?',
        answer:
          'Puede elegir entre 7 ajustes de tono, incluidos Profesional, Amable, Formal, Casual, Simple, Seguro y Conciso, según su audiencia.',
      },
      {
        question: '¿El Asistente de Escritura con IA envía mi texto a un servicio externo?',
        answer:
          'Sí. Su texto se envía de forma segura a Groq para inferencia de IA a través de nuestro worker de backend, porque las tareas de escritura necesitan un modelo de lenguaje. UtilityFlow no lo almacena ni lo registra.',
      },
      {
        question: '¿El Asistente de Escritura con IA puede escribir un correo completo a partir de notas sueltas?',
        answer:
          'Sí. Elija la tarea Escribir un correo, pegue sus viñetas o notas sueltas, y las estructurará en un correo cortés con asunto y saludo.',
      },
      {
        question: '¿El Asistente de Escritura con IA cambiará el significado de mi texto?',
        answer:
          'Está instruido a preservar su significado original, datos, nombres, fechas y números. Siempre revise la comparación lado a lado antes de usar el resultado.',
      },
      {
        question: '¿Puedo usar el Asistente de Escritura con IA para ensayos académicos?',
        answer:
          'Sí, puede corregir la gramática y mejorar la claridad en ensayos e informes. Revise primero las reglas de su institución, ya que algunas escuelas restringen la escritura asistida por IA.',
      },
      {
        question: '¿El Asistente de Escritura con IA funciona en idiomas distintos al inglés?',
        answer:
          'Sí. Puede elegir un idioma de salida objetivo, y la herramienta producirá el texto mejorado en ese idioma manteniendo sus datos sin cambios.',
      },
      {
        question: '¿Cómo veo exactamente qué cambió la IA en mi texto?',
        answer:
          'La vista de resultados resalta los cambios a nivel de palabra y muestra su texto original y el mejorado lado a lado, para que pueda aceptar o rechazar cada edición mentalmente antes de copiar.',
      },
      {
        question: '¿El Asistente de Escritura con IA puede parafrasear texto para evitar repetición?',
        answer:
          'Sí. La tarea Parafrasear reescribe oraciones con palabras diferentes manteniendo el mismo significado, lo que es útil para borradores variados y resúmenes.',
      },
      {
        question: '¿Qué debo hacer si el texto generado tiene un error?',
        answer:
          'Edite el resultado directamente, o ejecute el texto de nuevo con una tarea o tono diferente. La salida de IA puede contener errores, así que revise el texto importante antes de enviarlo.',
      },
      {
        question: '¿Hay un límite de palabras por solicitud en el Asistente de Escritura con IA?',
        answer:
          'El límite es de 12.000 caracteres por solicitud, lo que cubre aproximadamente 1.800 a 2.000 palabras en inglés. Los textos más cortos suelen producir resultados más rápidos y precisos.',
      },
      {
        question: '¿En qué se diferencia el Asistente de Escritura con IA del Contador de Palabras?',
        answer:
          'El Contador de Palabras solo mide palabras, caracteres y tiempo de lectura localmente, mientras que el Asistente de Escritura con IA reescribe y mejora su texto usando el modelo de lenguaje de Groq.',
      },
      {
        question: '¿El Asistente de Escritura con IA puede hacer mi texto más corto o más largo?',
        answer:
          'Sí. Use la tarea Simplificar para acortar párrafos densos, o la tarea Ampliar para agregar detalle y explicación manteniendo intactos sus datos originales.',
      },
      {
        question: '¿Puedo descargar mi texto mejorado como archivo?',
        answer:
          'Sí. Después de generar, haga clic en la opción de descarga para guardar el texto mejorado como archivo TXT en su dispositivo.',
      },
      {
        question: '¿Qué pasa si mi solicitud falla o se agota el tiempo?',
        answer:
          'Revise su conexión a internet e inténtelo de nuevo. Si se alcanzó el límite diario gratuito, la herramienta se lo indicará, y el límite se restablece a la medianoche UTC.',
      },
    ],
  },
  'ai-text-summarizer': {
    slug: 'resumidor-de-texto-ia',
    name: 'Resumidor de Texto con IA',
    shortDescription:
      'Condense artículos, informes y notas en resúmenes cortos, medianos o largos con viñetas y puntos clave gratis.',
    keywords: [
      'resumidor de texto con ia',
      'resumidor de articulos gratis',
      'resumen con viñetas',
      'extractor de puntos clave',
      'resumidor de parrafos',
      'resumen en lenguaje simple',
      'calculadora de tiempo de lectura',
      'resumir texto largo en linea',
      'generador de resumen con ia gratis',
    ],
    seo: {
      title: 'Resumidor de Texto con IA: Resúmenes Cortos | UtilityFlow',
      description:
        'Resuma artículos largos, notas de investigación e informes en párrafos cortos, viñetas o puntos clave, gratis, rápido y en línea, sin necesidad de registrarse.',
      primaryKeyword: 'resumidor de texto con ia',
      secondaryKeywords: [
        'resumidor de articulos gratis',
        'resumidor de texto con viñetas',
        'extraer puntos clave con ia',
        'generador de resumen de parrafo',
      ],
      longTailKeywords: [
        'resumidor de texto con ia gratis sin registro',
        'resumir articulo largo conservando numeros y datos',
        'resumidor de texto corto mediano y largo en linea',
        'resumir trabajo de investigacion en viñetas',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis sin inicio de sesión, suscripción ni créditos. Límite gratuito: hasta 5 resúmenes por día por visitante (hasta 25.000 caracteres por solicitud), impulsado por inferencia de nivel gratuito de Groq sin almacenar su texto.',
    intro:
      'Destile artículos largos, informes, ensayos y transcripciones de reuniones en resúmenes nítidos sin crear una cuenta. Elija longitudes Corta (10–20%), Mediana (30–40%) o Larga (50–60%) en formatos de párrafo, viñetas, puntos clave y lenguaje simple, preservando nombres, números y fechas.',
    instructions: [
      {
        title: 'Pegue o escriba su texto de origen',
        description:
          'Ingrese al menos 25 palabras (120+ caracteres) hasta 25.000 caracteres. Revise el conteo de palabras en vivo y el tiempo estimado de lectura debajo del editor.',
      },
      {
        title: 'Elija longitud, formato e idioma del resumen',
        description:
          'Seleccione compresión Corta, Mediana o Larga (Detallada), elija el formato Párrafo, Viñetas, Puntos clave o Lenguaje simple, y elija un idioma de salida.',
      },
      {
        title: 'Haga clic en Resumir para generar el resumen',
        description:
          'Presione Resumir texto y espere unos segundos mientras su texto se envía a Groq para inferencia de IA. Un indicador de progreso muestra mientras se produce el resumen.',
      },
      {
        title: 'Compare el tiempo de lectura y revise el resultado',
        description:
          'Revise el tiempo de lectura ahorrado, compare el resumen junto con el texto original y verifique que los nombres, números y fechas clave sigan correctos.',
      },
      {
        title: 'Copie o descargue el resumen',
        description:
          'Use el botón Copiar para mover el resumen a su portapapeles, o descárguelo como archivo TXT para sus notas, informe o material de estudio.',
      },
      {
        title: 'Pruebe otra longitud o formato si es necesario',
        description:
          'Si el resumen es demasiado corto o demasiado detallado, cambie la longitud o el formato y resuma de nuevo; por ejemplo, pruebe Viñetas después de un resumen en Párrafo.',
      },
    ],
    examples: [
      {
        title: 'Resumen ejecutivo con viñetas',
        input:
          'Un estudio de ingeniería de 160 palabras que compara actualizaciones escritas dos veces por semana con reuniones diarias entre 140 ingenieros.',
        output:
          '- Estudio de 140 ingenieros en Londres, Berlín y Toronto durante seis meses.\n- Reemplazar tres sincronizaciones semanales por resúmenes dos veces por semana redujo la fragmentación del calendario en 28% e impulsó la entrega de sprints en 14%.\n- El éxito dependió de bloqueos anticipados, enlaces de PR y fechas exactas.',
        explanation:
          'Longitud: Corta · Formato: Resumen con viñetas. Preserva el tamaño de la muestra, las ubicaciones y los porcentajes exactos.',
      },
      {
        title: 'Resumen largo de un informe de investigación',
        input:
          'Informe de investigación de 3.000 palabras sobre hábitos de estudio y rendimiento académico.',
        output:
          'Resumen largo (50–60%) en párrafos que conserva la metodología, los hallazgos principales y las cifras clave.',
        explanation:
          'Longitud: Larga · Formato: Párrafo. Mantiene los detalles de metodología y los hallazgos para una revisión completa.',
      },
    ],
    benefits: [
      'Acceso anónimo gratuito sin cuentas, suscripciones ni créditos',
      'Controles de resumen Corto (10–20%), Mediano (30–40%) y Largo (50–60%)',
      'Modos de Párrafo, Viñetas, Extracción de puntos clave y Lenguaje simple',
      'Preserva nombres, estadísticas, fechas y datos sin inventar detalles',
    ],
    useCases: [
      'Convertir artículos largos o informes de investigación en notas rápidas con viñetas',
      'Resumir transcripciones de reuniones y extraer puntos de acción numerados',
      'Traducir y condensar documentos de varios párrafos en conclusiones claras',
      'Estimar el ahorro de tiempo de lectura antes de compartir resúmenes ejecutivos',
    ],
    faqs: [
      {
        question: '¿Por qué el Resumidor de Texto con IA requiere al menos 25 palabras?',
        answer:
          'Los textos de menos de 25 palabras o 120 caracteres son demasiado breves para comprimirlos significativamente sin perder contexto esencial, por lo que la herramienta le pide agregar más texto de origen primero.',
      },
      {
        question: '¿El resumidor cambia nombres, números o fechas?',
        answer:
          'No. Nuestras instrucciones de resumen exigen estrictamente mantener intactas las cifras, fechas, nombres y relaciones de datos originales sin agregar afirmaciones externas.',
      },
      {
        question: '¿Cómo se calcula el tiempo estimado de lectura?',
        answer:
          'El tiempo estimado de lectura usa una velocidad promedio de lectura silenciosa de 200 palabras por minuto tanto para su texto original como para el resumen generado, para que pueda ver el tiempo ahorrado de un vistazo.',
      },
      {
        question: '¿Hay algún límite o cargo por usar el Resumidor de Texto con IA?',
        answer:
          'La herramienta es completamente gratis sin facturación ni registro. Los visitantes reciben hasta 5 resúmenes gratuitos por día UTC, y las 85 herramientas locales del navegador siguen siendo ilimitadas.',
      },
      {
        question: '¿Qué longitudes de resumen ofrece el Resumidor de Texto con IA?',
        answer:
          'Puede elegir resúmenes Corto (10–20% del original), Mediano (30–40%) o Largo (50–60%), según cuánto detalle quiera conservar.',
      },
      {
        question: '¿Qué formatos de resumen puedo elegir?',
        answer:
          'La herramienta ofrece formatos de Párrafo, Viñetas, Extracción de puntos clave y Lenguaje simple, para que pueda adaptar el resumen a notas, informes o material de estudio.',
      },
      {
        question: '¿Qué tan largo puede ser el texto que resumo?',
        answer:
          'Cada solicitud acepta entre 25 palabras y 25.000 caracteres. Para documentos más largos, divídalos en secciones y resuma cada parte por separado.',
      },
      {
        question: '¿El Resumidor de Texto con IA envía mi texto a un servicio externo?',
        answer:
          'Sí. Su texto se envía de forma segura a Groq para inferencia de IA a través de nuestro worker de backend, porque el resumen necesita un modelo de lenguaje. UtilityFlow no lo almacena ni lo registra.',
      },
      {
        question: '¿El Resumidor de Texto con IA puede resumir transcripciones de reuniones?',
        answer:
          'Sí. Pegue la transcripción y elija el formato Puntos clave o Viñetas para extraer decisiones, puntos de acción y puntos principales de discusión rápidamente.',
      },
      {
        question: '¿El resumen mantendrá los datos y cifras originales?',
        answer:
          'El resumidor está instruido a preservar nombres, estadísticas, fechas y relaciones de datos. Aun así, revise el resumen contra el original para documentos importantes.',
      },
      {
        question: '¿Puedo resumir trabajos de investigación con el Resumidor de Texto con IA?',
        answer:
          'Sí. Pegue el resumen o el texto completo y use el formato Largo para mantener detalles de metodología y hallazgos, o el formato Corto para una visión general rápida.',
      },
      {
        question: '¿El Resumidor de Texto con IA funciona en idiomas distintos al inglés?',
        answer:
          'Sí. Puede seleccionar un idioma de salida, y el resumen se producirá en ese idioma manteniendo los datos originales sin cambios.',
      },
      {
        question: '¿Cómo se calcula el tiempo de lectura ahorrado en el Resumidor de Texto con IA?',
        answer:
          'La herramienta compara el tiempo estimado de lectura de su texto original con el del resumen, usando una velocidad promedio de lectura silenciosa de 200 palabras por minuto.',
      },
      {
        question: '¿El Resumidor de Texto con IA puede crear una versión en lenguaje simple de un texto?',
        answer:
          'Sí. Elija el formato Lenguaje simple para obtener una versión sencilla y fácil de leer de escritura compleja o técnica, útil para estudiantes y no expertos.',
      },
      {
        question: '¿Qué debo hacer si el resumen omite un punto importante?',
        answer:
          'Pruebe el formato Largo o el formato Puntos clave, que mantienen más detalle. También puede dividir el texto y resumir la sección omitida por separado.',
      },
      {
        question: '¿El Resumidor de Texto con IA es bueno para estudiar y repasar exámenes?',
        answer:
          'Sí. Resuma capítulos o apuntes de clase en viñetas y puntos clave, luego revise la versión corta antes de los exámenes para refrescar las ideas principales.',
      },
      {
        question: '¿En qué se diferencia el Resumidor de Texto con IA del Asistente de Escritura con IA?',
        answer:
          'El Resumidor condensa texto largo en versiones más cortas, mientras que el Asistente de Escritura corrige gramática, reescribe oraciones y cambia el tono sin acortar el texto.',
      },
      {
        question: '¿Qué pasa cuando alcanzo el límite diario de resúmenes?',
        answer:
          'El límite se restablece automáticamente a la medianoche UTC. Hasta entonces, puede usar las herramientas locales del navegador, como el Contador de Palabras y el Verificador de Densidad de Palabras Clave, sin límites.',
      },
      {
        question: '¿El Resumidor de Texto con IA puede manejar PDF o páginas web directamente?',
        answer:
          'No. Pegue el texto mismo en el editor. Para PDF, use primero el Extractor de Texto de PDF para copiar el texto, luego péguelo en el resumidor.',
      },
      {
        question: '¿El Resumidor de Texto con IA agrega información nueva a mi resumen?',
        answer:
          'No. Está instruido a resumir solo lo que hay en su texto y no agregar afirmaciones externas, pero aun así debe revisar el resultado para verificar su precisión.',
      },
    ],
  },
  'ai-tool-finder': {
    slug: 'buscador-de-herramientas-ia',
    name: 'Buscador Inteligente de Herramientas con IA',
    shortDescription:
      'Describa su tarea en lenguaje simple, con errores tipográficos o redacción natural, para encontrar al instante la mejor herramienta de UtilityFlow que coincida.',
    keywords: [
      'buscador de herramientas con ia',
      'busqueda inteligente de herramientas',
      'encontrar herramienta de utilidad',
      'recomendar herramienta en linea',
      'busqueda de herramientas en lenguaje natural',
      'encontrar herramienta gratis en linea',
      'recomendador de herramientas de utilidad',
      'buscar herramientas por tarea',
      'buscador de utilidades en linea',
    ],
    seo: {
      title: 'Buscador Inteligente de Herramientas con IA | UtilityFlow',
      description:
        'Describa lo que necesita en lenguaje simple para descubrir la herramienta adecuada entre las 88 de UtilityFlow, rápido, gratis y sin enlaces inventados.',
      primaryKeyword: 'buscador de herramientas con ia',
      secondaryKeywords: [
        'buscador de herramientas en linea',
        'encontrar la herramienta de utilidad adecuada',
        'recomendador de herramientas con ia',
        'busqueda de herramientas de utilityflow',
      ],
      longTailKeywords: [
        'encontrar herramienta en linea gratis para mi tarea',
        'buscar herramientas de utilidad por problema en lenguaje simple',
        'descubrimiento de herramientas con ia sin registro',
        'que herramienta en linea necesito para pdf',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% gratis sin inicio de sesión, suscripción ni créditos. Busca en nuestro inventario verificado de 85 herramientas de navegador + 2 herramientas de IA (hasta 10 búsquedas de IA por día + coincidencia instantánea de palabras clave ilimitada).',
    intro:
      '¿No está seguro de qué herramienta maneja su tarea? Describa su objetivo en lenguaje simple, incluso con errores de ortografía o redacción informal, y nuestro comparador híbrido de palabras clave + IA de Groq recomienda herramientas verificadas del catálogo en vivo de UtilityFlow con justificaciones claras.',
    instructions: [
      {
        title: 'Describa su tarea o seleccione una sugerencia rápida',
        description:
          'Escriba una solicitud en lenguaje simple como "Quiero reducir el tamaño de mi imagen a 100 KB" o "convertir PDF a PNG", o haga clic en cualquier ajuste preestablecido de tarea rápida.',
      },
      {
        title: 'Filtre por categoría si es necesario',
        description:
          'Reduzca las recomendaciones a herramientas de Texto y escritura, Desarrollador, Calculadoras, Redes sociales, PDF, SEO o Imagen y archivo, o busque en las 87 herramientas a la vez.',
      },
      {
        title: 'Ejecute la búsqueda y revise las coincidencias',
        description:
          'Envíe su solicitud para obtener coincidencias instantáneas de palabras clave, o use una búsqueda asistida por IA para coincidencia semántica. Los resultados se clasifican por relevancia para su tarea.',
      },
      {
        title: 'Inspeccione las justificaciones y alternativas',
        description:
          'Lea la justificación de una oración para cada recomendación y revise la lista de alternativas para comparar herramientas similares antes de elegir una.',
      },
      {
        title: 'Abra la herramienta verificada',
        description:
          'Haga clic en Abrir herramienta para lanzar la herramienta recomendada de inmediato. Cada enlace se verifica contra el registro en vivo, por lo que siempre abre una herramienta real.',
      },
      {
        title: 'Pruebe otra redacción si no hay coincidencia',
        description:
          'Si el buscador informa que no hay coincidencia exacta, reformule su tarea con palabras más simples o un filtro de categoría diferente, y revise la nota honesta de sin coincidencia para la opción más cercana.',
      },
    ],
    examples: [
      {
        title: 'Comprimir una imagen a 100 KB',
        input: 'Quiero reducir el tamaño de mi imagen a 100 KB.',
        output: 'Recomendado: Compresor de Imágenes (/es/compresor-de-imagenes/)',
        explanation:
          'Coincide con el Compresor de Imágenes del lado del cliente y sugiere el Redimensionador y Recortador de Imágenes o el Conversor de Formato de Imagen como alternativas.',
      },
      {
        title: 'Manejo honesto de sin coincidencia',
        input: 'Necesito convertir un PDF a Word.',
        output: 'No hay un convertidor exacto de PDF a DOCX disponible; se sugiere el Extractor de texto de PDF para el texto sin procesar.',
        explanation:
          'Nunca inventa herramientas faltantes ni finge que una herramienta admite formatos que no admite.',
      },
    ],
    benefits: [
      'Búsqueda gratuita en lenguaje natural en las 85 herramientas de navegador y 2 herramientas de IA',
      'Coincidencia instantánea local de palabras clave tolerante a errores tipográficos más clasificación semántica de IA de Groq',
      'La verificación estricta del inventario garantiza cero herramientas fabricadas o enlaces rotos',
      'Muestra una justificación clara de una oración y hasta 3 alternativas',
    ],
    useCases: [
      'Encontrar la utilidad adecuada de PDF, imagen o texto sin navegar por cada categoría',
      'Relacionar objetivos en lenguaje simple con herramientas de navegador exactas con formatos admitidos',
      'Verificar honestamente si UtilityFlow actualmente admite un formato de archivo especializado',
      'Comparar varias herramientas similares antes de decidir cuál usar para una tarea',
    ],
    faqs: [
      {
        question: '¿El Buscador Inteligente de Herramientas con IA alguna vez recomienda herramientas que no existen?',
        answer:
          'No. Cada recomendación devuelta por la IA se verifica estrictamente contra nuestro registro de herramientas en vivo antes de mostrarse. Si no existe una herramienta coincidente, el buscador se lo dice honestamente.',
      },
      {
        question: '¿Qué pasa si cometo errores de ortografía en mi búsqueda?',
        answer:
          'Nuestro clasificador local de palabras clave incluye tolerancia a errores tipográficos por distancia de edición y sinónimos de tareas, y el clasificador de IA de Groq interpreta automáticamente la redacción natural y los errores de ortografía.',
      },
      {
        question: '¿Cuántas búsquedas puedo ejecutar gratis?',
        answer:
          'La coincidencia instantánea local de palabras clave es ilimitada, y los visitantes reciben hasta 10 búsquedas gratuitas asistidas por IA por día UTC sin registro ni pago.',
      },
      {
        question: '¿Cómo entiende el Buscador Inteligente de Herramientas con IA mi solicitud?',
        answer:
          'Combina la coincidencia instantánea local de palabras clave con la clasificación semántica de IA de Groq, por lo que entiende objetivos en lenguaje simple, sinónimos y redacción natural, no solo nombres exactos de herramientas.',
      },
      {
        question: '¿Qué herramientas puede recomendar el Buscador Inteligente de Herramientas con IA?',
        answer:
          'Busca en el catálogo completo de UtilityFlow de 88 herramientas: 85 herramientas de navegador en las categorías de texto, desarrollador, calculadora, redes sociales, PDF, SEO e imagen, más el Asistente de Escritura con IA y el Resumidor de Texto con IA.',
      },
      {
        question: '¿El Buscador Inteligente de Herramientas con IA envía mi búsqueda a un servicio externo?',
        answer:
          'Las búsquedas asistidas por IA envían el texto de su solicitud a Groq para coincidencia semántica a través de nuestro worker de backend. La coincidencia instantánea de palabras clave se ejecuta localmente en su navegador y no envía nada.',
      },
      {
        question: '¿Puedo buscar una herramienta por formato de archivo, como PDF o PNG?',
        answer:
          'Sí. Mencione el formato en su solicitud, por ejemplo "convertir PDF a PNG", y el buscador recomendará herramientas que admitan ese formato, como PDF a Imágenes.',
      },
      {
        question: '¿Qué hace el Buscador Inteligente de Herramientas con IA si ninguna herramienta coincide con mi tarea?',
        answer:
          'Le dice honestamente que no existe una coincidencia exacta y sugiere la herramienta disponible más cercana, en lugar de inventar una herramienta o un enlace roto.',
      },
      {
        question: '¿Puedo filtrar las recomendaciones de herramientas por categoría?',
        answer:
          'Sí. Use el filtro de categoría para limitar los resultados a herramientas de Texto y escritura, Desarrollador, Calculadoras, Redes sociales, PDF, SEO o Imagen y archivo antes de buscar.',
      },
      {
        question: '¿Cómo funcionan las sugerencias rápidas de tareas en el Buscador Inteligente de Herramientas con IA?',
        answer:
          'Las sugerencias rápidas son solicitudes de ejemplo con un clic, como reducir una imagen a 100 KB, que muestran cómo formular una tarea y devuelven al instante la herramienta coincidente.',
      },
      {
        question: '¿Por qué cada recomendación incluye una justificación?',
        answer:
          'Cada resultado muestra una explicación de una oración de por qué la herramienta coincide con su objetivo, incluidos los formatos admitidos, para que pueda juzgar la adecuación antes de abrirla.',
      },
      {
        question: '¿El Buscador Inteligente de Herramientas con IA también puede recomendar herramientas de IA?',
        answer:
          'Sí. Puede recomendar el Asistente de Escritura con IA para gramática y reescritura, y el Resumidor de Texto con IA para condensar texto largo, cuando su tarea se ajusta a esas herramientas.',
      },
      {
        question: '¿El Buscador Inteligente de Herramientas con IA es gratis?',
        answer:
          'Sí. La coincidencia de palabras clave es ilimitada y gratuita, y las búsquedas asistidas por IA son gratuitas hasta 10 por día por visitante, sin cuenta, inicio de sesión ni pago.',
      },
      {
        question: '¿Qué debo hacer si la recomendación principal no es del todo correcta?',
        answer:
          'Revise la lista de alternativas debajo del resultado principal, o reformule su solicitud con más detalle; por ejemplo, nombre el formato de archivo o la salida exacta que necesita.',
      },
      {
        question: '¿Puedo usar el Buscador Inteligente de Herramientas con IA para encontrar una calculadora?',
        answer:
          'Sí. Describa el cálculo en palabras simples, como "calcular mi pago mensual de préstamo", y recomendará la Calculadora de Préstamo EMI o una calculadora relacionada.',
      },
      {
        question: '¿En qué se diferencia el Buscador Inteligente de Herramientas con IA de la página de directorio de Herramientas?',
        answer:
          'El directorio de Herramientas lista las 88 herramientas por categoría para navegar, mientras que el Buscador de Herramientas relaciona su tarea en lenguaje simple con la mejor herramienta y explica por qué se ajusta.',
      },
      {
        question: '¿El Buscador Inteligente de Herramientas con IA puede ayudar con tareas de SEO?',
        answer:
          'Sí. Pida cosas como "revisar la longitud de mi meta descripción" o "generar un sitemap", y le indicará el Generador de Meta Etiquetas, el Generador de Sitemap XML o el Verificador de SEO On-Page.',
      },
      {
        question: '¿Qué pasa cuando alcanzo el límite diario de búsqueda de IA?',
        answer:
          'El límite de búsqueda de IA se restablece a la medianoche UTC. Hasta entonces, la coincidencia instantánea de palabras clave sigue funcionando sin límites, por lo que aún puede encontrar herramientas por palabras clave.',
      },
      {
        question: '¿El Buscador Inteligente de Herramientas con IA puede recomendar herramientas para edición de imágenes?',
        answer:
          'Sí. Describa su tarea de imagen, como "comprimir esta foto" o "redimensionar una imagen", y recomendará el Compresor de Imágenes, el Redimensionador de Imágenes o el Conversor de Formato de Imagen.',
      },
      {
        question: '¿Los enlaces del Buscador Inteligente de Herramientas con IA siempre funcionan?',
        answer:
          'Sí. Cada recomendación se verifica contra el registro de herramientas en vivo antes de mostrarse, por lo que los enlaces siempre abren una página de herramienta real y funcional de UtilityFlow.',
      },
    ],
  },
};
