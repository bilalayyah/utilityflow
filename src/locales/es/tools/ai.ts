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
      '100% gratis sin inicio de sesión, suscripción ni créditos. Busca en nuestro inventario verificado de 84 herramientas de navegador + 2 herramientas de IA (hasta 10 búsquedas de IA por día + coincidencia instantánea de palabras clave ilimitada).',
    intro:
      '¿No está seguro de qué herramienta maneja su tarea? Describa su objetivo en lenguaje simple, incluso con errores de ortografía o redacción informal, y nuestro comparador híbrido de palabras clave + IA de Groq recomienda herramientas verificadas del catálogo en vivo de UtilityFlow con justificaciones claras.',
  },
};
