import { ArrowLeftRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errorInvalidValue: 'Enter a valid numeric value to convert.',
    errorAbsoluteZero: 'Temperature cannot be below absolute zero (-273.15 °C / 0 K).',
    categoryNames: {
      length: 'Length',
      weight: 'Weight & Mass',
      temperature: 'Temperature',
      area: 'Area',
      volume: 'Volume',
      speed: 'Speed',
      storage: 'Digital Storage',
    },
    unitLabels: {
      mm: 'Millimeter',
      cm: 'Centimeter',
      m: 'Meter',
      km: 'Kilometer',
      in: 'Inch',
      ft: 'Foot',
      yd: 'Yard',
      mi: 'Mile',
      mg: 'Milligram',
      g: 'Gram',
      kg: 'Kilogram',
      t: 'Metric Tonne',
      oz: 'Ounce',
      lb: 'Pound',
      st: 'Stone',
      C: 'Celsius',
      F: 'Fahrenheit',
      K: 'Kelvin',
      cm2: 'Square Centimeter',
      m2: 'Square Meter',
      ha: 'Hectare',
      km2: 'Square Kilometer',
      ft2: 'Square Foot',
      yd2: 'Square Yard',
      acre: 'Acre',
      mi2: 'Square Mile',
      mL: 'Milliliter',
      L: 'Liter',
      m3: 'Cubic Meter',
      floz: 'Fluid Ounce (US)',
      cup: 'Cup (US)',
      pt: 'Pint (US)',
      qt: 'Quart (US)',
      gal: 'Gallon (US)',
      ms: 'Meters / second',
      kmh: 'Kilometers / hour',
      mph: 'Miles / hour',
      knot: 'Knot',
      fts: 'Feet / second',
      B: 'Byte',
      KB: 'Kilobyte (10³)',
      MB: 'Megabyte (10⁶)',
      GB: 'Gigabyte (10⁹)',
      TB: 'Terabyte (10¹²)',
      KiB: 'Kibibyte (2¹⁰)',
      MiB: 'Mebibyte (2²⁰)',
      GiB: 'Gibibyte (2³⁰)',
    },
    valueLabel: 'Value',
    fromLabel: 'From Unit',
    toLabel: 'To Unit',
    swapAria: 'Swap units',
    swapTitle: 'Swap units',
    toWord: 'to',
    copyResult: 'Copy Result',
    unitHeader: 'Unit',
    symbolHeader: 'Symbol',
    equivalentHeader: 'Equivalent Value',
  },
  es: {
    errorInvalidValue: 'Ingresa un valor numérico válido para convertir.',
    errorAbsoluteZero: 'La temperatura no puede estar por debajo del cero absoluto (-273.15 °C / 0 K).',
    categoryNames: {
      length: 'Longitud',
      weight: 'Peso y masa',
      temperature: 'Temperatura',
      area: 'Área',
      volume: 'Volumen',
      speed: 'Velocidad',
      storage: 'Almacenamiento digital',
    },
    unitLabels: {
      mm: 'Milímetro',
      cm: 'Centímetro',
      m: 'Metro',
      km: 'Kilómetro',
      in: 'Pulgada',
      ft: 'Pie',
      yd: 'Yarda',
      mi: 'Milla',
      mg: 'Miligramo',
      g: 'Gramo',
      kg: 'Kilogramo',
      t: 'Tonelada métrica',
      oz: 'Onza',
      lb: 'Libra',
      st: 'Stone',
      C: 'Celsius',
      F: 'Fahrenheit',
      K: 'Kelvin',
      cm2: 'Centímetro cuadrado',
      m2: 'Metro cuadrado',
      ha: 'Hectárea',
      km2: 'Kilómetro cuadrado',
      ft2: 'Pie cuadrado',
      yd2: 'Yarda cuadrada',
      acre: 'Acre',
      mi2: 'Milla cuadrada',
      mL: 'Mililitro',
      L: 'Litro',
      m3: 'Metro cúbico',
      floz: 'Onza líquida (EE. UU.)',
      cup: 'Taza (EE. UU.)',
      pt: 'Pinta (EE. UU.)',
      qt: 'Cuarto (EE. UU.)',
      gal: 'Galón (EE. UU.)',
      ms: 'Metros / segundo',
      kmh: 'Kilómetros / hora',
      mph: 'Millas / hora',
      knot: 'Nudo',
      fts: 'Pies / segundo',
      B: 'Byte',
      KB: 'Kilobyte (10³)',
      MB: 'Megabyte (10⁶)',
      GB: 'Gigabyte (10⁹)',
      TB: 'Terabyte (10¹²)',
      KiB: 'Kibibyte (2¹⁰)',
      MiB: 'Mebibyte (2²⁰)',
      GiB: 'Gibibyte (2³⁰)',
    },
    valueLabel: 'Valor',
    fromLabel: 'Unidad de origen',
    toLabel: 'Unidad de destino',
    swapAria: 'Intercambiar unidades',
    swapTitle: 'Intercambiar unidades',
    toWord: 'a',
    copyResult: 'Copiar resultado',
    unitHeader: 'Unidad',
    symbolHeader: 'Símbolo',
    equivalentHeader: 'Valor equivalente',
  },
  pt: {
    errorInvalidValue: 'Insira um valor numérico válido para converter.',
    errorAbsoluteZero: 'A temperatura não pode estar abaixo do zero absoluto (-273.15 °C / 0 K).',
    categoryNames: {
      length: 'Comprimento',
      weight: 'Peso e massa',
      temperature: 'Temperatura',
      area: 'Área',
      volume: 'Volume',
      speed: 'Velocidade',
      storage: 'Armazenamento digital',
    },
    unitLabels: {
      mm: 'Milímetro',
      cm: 'Centímetro',
      m: 'Metro',
      km: 'Quilômetro',
      in: 'Polegada',
      ft: 'Pé',
      yd: 'Jarda',
      mi: 'Milha',
      mg: 'Miligrama',
      g: 'Grama',
      kg: 'Quilograma',
      t: 'Tonelada métrica',
      oz: 'Onça',
      lb: 'Libra',
      st: 'Stone',
      C: 'Celsius',
      F: 'Fahrenheit',
      K: 'Kelvin',
      cm2: 'Centímetro quadrado',
      m2: 'Metro quadrado',
      ha: 'Hectare',
      km2: 'Quilômetro quadrado',
      ft2: 'Pé quadrado',
      yd2: 'Jarda quadrada',
      acre: 'Acre',
      mi2: 'Milha quadrada',
      mL: 'Mililitro',
      L: 'Litro',
      m3: 'Metro cúbico',
      floz: 'Onça líquida (EUA)',
      cup: 'Xícara (EUA)',
      pt: 'Pinta (EUA)',
      qt: 'Quarto (EUA)',
      gal: 'Galão (EUA)',
      ms: 'Metros / segundo',
      kmh: 'Quilômetros / hora',
      mph: 'Milhas / hora',
      knot: 'Nó',
      fts: 'Pés / segundo',
      B: 'Byte',
      KB: 'Kilobyte (10³)',
      MB: 'Megabyte (10⁶)',
      GB: 'Gigabyte (10⁹)',
      TB: 'Terabyte (10¹²)',
      KiB: 'Kibibyte (2¹⁰)',
      MiB: 'Mebibyte (2²⁰)',
      GiB: 'Gibibyte (2³⁰)',
    },
    valueLabel: 'Valor',
    fromLabel: 'Unidade de origem',
    toLabel: 'Unidade de destino',
    swapAria: 'Trocar unidades',
    swapTitle: 'Trocar unidades',
    toWord: 'para',
    copyResult: 'Copiar resultado',
    unitHeader: 'Unidade',
    symbolHeader: 'Símbolo',
    equivalentHeader: 'Valor equivalente',
  },
  fr: {
    errorInvalidValue: 'Saisissez une valeur numérique valide à convertir.',
    errorAbsoluteZero: 'La température ne peut pas être inférieure au zéro absolu (-273.15 °C / 0 K).',
    categoryNames: {
      length: 'Longueur',
      weight: 'Poids et masse',
      temperature: 'Température',
      area: 'Surface',
      volume: 'Volume',
      speed: 'Vitesse',
      storage: 'Stockage numérique',
    },
    unitLabels: {
      mm: 'Millimètre',
      cm: 'Centimètre',
      m: 'Mètre',
      km: 'Kilomètre',
      in: 'Pouce',
      ft: 'Pied',
      yd: 'Yard',
      mi: 'Mile',
      mg: 'Milligramme',
      g: 'Gramme',
      kg: 'Kilogramme',
      t: 'Tonne métrique',
      oz: 'Once',
      lb: 'Livre',
      st: 'Stone',
      C: 'Celsius',
      F: 'Fahrenheit',
      K: 'Kelvin',
      cm2: 'Centimètre carré',
      m2: 'Mètre carré',
      ha: 'Hectare',
      km2: 'Kilomètre carré',
      ft2: 'Pied carré',
      yd2: 'Yard carré',
      acre: 'Acre',
      mi2: 'Mile carré',
      mL: 'Millilitre',
      L: 'Litre',
      m3: 'Mètre cube',
      floz: 'Once liquide (É.-U.)',
      cup: 'Tasse (É.-U.)',
      pt: 'Pinte (É.-U.)',
      qt: 'Quart (É.-U.)',
      gal: 'Gallon (É.-U.)',
      ms: 'Mètres / seconde',
      kmh: 'Kilomètres / heure',
      mph: 'Miles / heure',
      knot: 'Nœud',
      fts: 'Pieds / seconde',
      B: 'Octet',
      KB: 'Kilooctet (10³)',
      MB: 'Mégaoctet (10⁶)',
      GB: 'Gigaoctet (10⁹)',
      TB: 'Téraoctet (10¹²)',
      KiB: 'Kibioctet (2¹⁰)',
      MiB: 'Mébioctet (2²⁰)',
      GiB: 'Gibioctet (2³⁰)',
    },
    valueLabel: 'Valeur',
    fromLabel: 'Unité source',
    toLabel: 'Unité cible',
    swapAria: 'Échanger les unités',
    swapTitle: 'Échanger les unités',
    toWord: 'en',
    copyResult: 'Copier le résultat',
    unitHeader: 'Unité',
    symbolHeader: 'Symbole',
    equivalentHeader: 'Valeur équivalente',
  },
  de: {
    errorInvalidValue: 'Geben Sie einen gültigen Zahlenwert zur Umrechnung ein.',
    errorAbsoluteZero: 'Die Temperatur kann nicht unter dem absoluten Nullpunkt liegen (-273.15 °C / 0 K).',
    categoryNames: {
      length: 'Länge',
      weight: 'Gewicht & Masse',
      temperature: 'Temperatur',
      area: 'Fläche',
      volume: 'Volumen',
      speed: 'Geschwindigkeit',
      storage: 'Digitaler Speicher',
    },
    unitLabels: {
      mm: 'Millimeter',
      cm: 'Zentimeter',
      m: 'Meter',
      km: 'Kilometer',
      in: 'Zoll',
      ft: 'Fuß',
      yd: 'Yard',
      mi: 'Meile',
      mg: 'Milligramm',
      g: 'Gramm',
      kg: 'Kilogramm',
      t: 'Tonne',
      oz: 'Unze',
      lb: 'Pfund',
      st: 'Stone',
      C: 'Celsius',
      F: 'Fahrenheit',
      K: 'Kelvin',
      cm2: 'Quadratzentimeter',
      m2: 'Quadratmeter',
      ha: 'Hektar',
      km2: 'Quadratkilometer',
      ft2: 'Quadratfuß',
      yd2: 'Quadratyard',
      acre: 'Acre',
      mi2: 'Quadratmeile',
      mL: 'Milliliter',
      L: 'Liter',
      m3: 'Kubikmeter',
      floz: 'Flüssigunze (US)',
      cup: 'Tasse (US)',
      pt: 'Pint (US)',
      qt: 'Quart (US)',
      gal: 'Gallone (US)',
      ms: 'Meter / Sekunde',
      kmh: 'Kilometer / Stunde',
      mph: 'Meilen / Stunde',
      knot: 'Knoten',
      fts: 'Fuß / Sekunde',
      B: 'Byte',
      KB: 'Kilobyte (10³)',
      MB: 'Megabyte (10⁶)',
      GB: 'Gigabyte (10⁹)',
      TB: 'Terabyte (10¹²)',
      KiB: 'Kibibyte (2¹⁰)',
      MiB: 'Mebibyte (2²⁰)',
      GiB: 'Gibibyte (2³⁰)',
    },
    valueLabel: 'Wert',
    fromLabel: 'Von Einheit',
    toLabel: 'Zu Einheit',
    swapAria: 'Einheiten tauschen',
    swapTitle: 'Einheiten tauschen',
    toWord: 'in',
    copyResult: 'Ergebnis kopieren',
    unitHeader: 'Einheit',
    symbolHeader: 'Symbol',
    equivalentHeader: 'Entsprechender Wert',
  },
  it: {
    errorInvalidValue: 'Inserisci un valore numerico valido da convertire.',
    errorAbsoluteZero: 'La temperatura non può scendere sotto lo zero assoluto (-273.15 °C / 0 K).',
    categoryNames: {
      length: 'Lunghezza',
      weight: 'Peso e massa',
      temperature: 'Temperatura',
      area: 'Area',
      volume: 'Volume',
      speed: 'Velocità',
      storage: 'Memoria digitale',
    },
    unitLabels: {
      mm: 'Millimetro',
      cm: 'Centimetro',
      m: 'Metro',
      km: 'Chilometro',
      in: 'Pollice',
      ft: 'Piede',
      yd: 'Iarda',
      mi: 'Miglio',
      mg: 'Milligrammo',
      g: 'Grammo',
      kg: 'Chilogrammo',
      t: 'Tonnellata',
      oz: 'Oncia',
      lb: 'Libbra',
      st: 'Stone',
      C: 'Celsius',
      F: 'Fahrenheit',
      K: 'Kelvin',
      cm2: 'Centimetro quadrato',
      m2: 'Metro quadrato',
      ha: 'Ettaro',
      km2: 'Chilometro quadrato',
      ft2: 'Piede quadrato',
      yd2: 'Iarda quadrata',
      acre: 'Acro',
      mi2: 'Miglio quadrato',
      mL: 'Millilitro',
      L: 'Litro',
      m3: 'Metro cubo',
      floz: 'Oncia fluida (USA)',
      cup: 'Tazza (USA)',
      pt: 'Pinta (USA)',
      qt: 'Quarto (USA)',
      gal: 'Gallone (USA)',
      ms: 'Metri / secondo',
      kmh: 'Chilometri / ora',
      mph: 'Miglia / ora',
      knot: 'Nodo',
      fts: 'Piedi / secondo',
      B: 'Byte',
      KB: 'Kilobyte (10³)',
      MB: 'Megabyte (10⁶)',
      GB: 'Gigabyte (10⁹)',
      TB: 'Terabyte (10¹²)',
      KiB: 'Kibibyte (2¹⁰)',
      MiB: 'Mebibyte (2²⁰)',
      GiB: 'Gibibyte (2³⁰)',
    },
    valueLabel: 'Valore',
    fromLabel: 'Da unità',
    toLabel: 'A unità',
    swapAria: 'Inverti le unità',
    swapTitle: 'Inverti le unità',
    toWord: 'in',
    copyResult: 'Copia risultato',
    unitHeader: 'Unità',
    symbolHeader: 'Simbolo',
    equivalentHeader: 'Valore equivalente',
  },
  id: {
    errorInvalidValue: 'Masukkan nilai numerik yang valid untuk dikonversi.',
    errorAbsoluteZero: 'Suhu tidak boleh di bawah nol absolut (-273,15 °C / 0 K).',
    categoryNames: {
      length: 'Panjang',
      weight: 'Berat & Massa',
      temperature: 'Suhu',
      area: 'Luas',
      volume: 'Volume',
      speed: 'Kecepatan',
      storage: 'Penyimpanan Digital',
    },
    unitLabels: {
      mm: 'Milimeter',
      cm: 'Sentimeter',
      m: 'Meter',
      km: 'Kilometer',
      in: 'Inci',
      ft: 'Kaki',
      yd: 'Yard',
      mi: 'Mil',
      mg: 'Miligram',
      g: 'Gram',
      kg: 'Kilogram',
      t: 'Ton Metrik',
      oz: 'Ons',
      lb: 'Pound',
      st: 'Stone',
      C: 'Celcius',
      F: 'Fahrenheit',
      K: 'Kelvin',
      cm2: 'Sentimeter Persegi',
      m2: 'Meter Persegi',
      ha: 'Hektare',
      km2: 'Kilometer Persegi',
      ft2: 'Kaki Persegi',
      yd2: 'Yard Persegi',
      acre: 'Acre',
      mi2: 'Mil Persegi',
      mL: 'Mililiter',
      L: 'Liter',
      m3: 'Meter Kubik',
      floz: 'Fluid Ounce (AS)',
      cup: 'Cangkir (AS)',
      pt: 'Pint (AS)',
      qt: 'Quart (AS)',
      gal: 'Galon (AS)',
      ms: 'Meter / detik',
      kmh: 'Kilometer / jam',
      mph: 'Mil / jam',
      knot: 'Knot',
      fts: 'Kaki / detik',
      B: 'Byte',
      KB: 'Kilobyte (10³)',
      MB: 'Megabyte (10⁶)',
      GB: 'Gigabyte (10⁹)',
      TB: 'Terabyte (10¹²)',
      KiB: 'Kibibyte (2¹⁰)',
      MiB: 'Mebibyte (2²⁰)',
      GiB: 'Gibibyte (2³⁰)',
    },
    valueLabel: 'Nilai',
    fromLabel: 'Dari Satuan',
    toLabel: 'Ke Satuan',
    swapAria: 'Tukar satuan',
    swapTitle: 'Tukar satuan',
    toWord: 'ke',
    copyResult: 'Salin Hasil',
    unitHeader: 'Satuan',
    symbolHeader: 'Simbol',
    equivalentHeader: 'Nilai Setara',
  },
  ru: {
    errorInvalidValue: 'Введите корректное числовое значение для конвертации.',
    errorAbsoluteZero: 'Температура не может быть ниже абсолютного нуля (−273,15 °C / 0 K).',
    categoryNames: {
      length: 'Длина',
      weight: 'Вес и масса',
      temperature: 'Температура',
      area: 'Площадь',
      volume: 'Объём',
      speed: 'Скорость',
      storage: 'Цифровое хранилище',
    },
    unitLabels: {
      mm: 'Миллиметр',
      cm: 'Сантиметр',
      m: 'Метр',
      km: 'Километр',
      in: 'Дюйм',
      ft: 'Фут',
      yd: 'Ярд',
      mi: 'Миля',
      mg: 'Миллиграмм',
      g: 'Грамм',
      kg: 'Килограмм',
      t: 'Метрическая тонна',
      oz: 'Унция',
      lb: 'Фунт',
      st: 'Стоун',
      C: 'Цельсий',
      F: 'Фаренгейт',
      K: 'Кельвин',
      cm2: 'Квадратный сантиметр',
      m2: 'Квадратный метр',
      ha: 'Гектар',
      km2: 'Квадратный километр',
      ft2: 'Квадратный фут',
      yd2: 'Квадратный ярд',
      acre: 'Акр',
      mi2: 'Квадратная миля',
      mL: 'Миллилитр',
      L: 'Литр',
      m3: 'Кубический метр',
      floz: 'Жидкая унция (США)',
      cup: 'Чашка (США)',
      pt: 'Пинта (США)',
      qt: 'Кварта (США)',
      gal: 'Галлон (США)',
      ms: 'Метров / секунда',
      kmh: 'Километров / час',
      mph: 'Миль / час',
      knot: 'Узел',
      fts: 'Футов / секунда',
      B: 'Байт',
      KB: 'Килобайт (10³)',
      MB: 'Мегабайт (10⁶)',
      GB: 'Гигабайт (10⁹)',
      TB: 'Терабайт (10¹²)',
      KiB: 'Кибибайт (2¹⁰)',
      MiB: 'Мебибайт (2²⁰)',
      GiB: 'Гибибайт (2³⁰)',
    },
    valueLabel: 'Значение',
    fromLabel: 'Исходная единица',
    toLabel: 'Целевая единица',
    swapAria: 'Поменять единицы местами',
    swapTitle: 'Поменять единицы местами',
    toWord: 'в',
    copyResult: 'Копировать результат',
    unitHeader: 'Единица',
    symbolHeader: 'Символ',
    equivalentHeader: 'Эквивалентное значение',
  },
};

type CategoryKey =
  | 'length'
  | 'weight'
  | 'temperature'
  | 'area'
  | 'volume'
  | 'speed'
  | 'storage';

interface UnitDef {
  id: string;
  label: string;
  symbol: string;
  toBase: (v: number) => number;
  fromBase: (v: number) => number;
}

const linear = (id: string, label: string, symbol: string, factorToBase: number): UnitDef => ({
  id,
  label,
  symbol,
  toBase: (v) => v * factorToBase,
  fromBase: (v) => v / factorToBase,
});

const CATEGORIES_UNITS: Record<
  CategoryKey,
  { name: string; defaultFrom: string; defaultTo: string; units: UnitDef[] }
> = {
  length: {
    name: 'Length',
    defaultFrom: 'km',
    defaultTo: 'mi',
    units: [
      linear('mm', 'Millimeter', 'mm', 0.001),
      linear('cm', 'Centimeter', 'cm', 0.01),
      linear('m', 'Meter', 'm', 1),
      linear('km', 'Kilometer', 'km', 1000),
      linear('in', 'Inch', 'in', 0.0254),
      linear('ft', 'Foot', 'ft', 0.3048),
      linear('yd', 'Yard', 'yd', 0.9144),
      linear('mi', 'Mile', 'mi', 1609.344),
    ],
  },
  weight: {
    name: 'Weight & Mass',
    defaultFrom: 'kg',
    defaultTo: 'lb',
    units: [
      linear('mg', 'Milligram', 'mg', 1e-6),
      linear('g', 'Gram', 'g', 0.001),
      linear('kg', 'Kilogram', 'kg', 1),
      linear('t', 'Metric Tonne', 't', 1000),
      linear('oz', 'Ounce', 'oz', 0.028349523125),
      linear('lb', 'Pound', 'lb', 0.45359237),
      linear('st', 'Stone', 'st', 6.35029318),
    ],
  },
  temperature: {
    name: 'Temperature',
    defaultFrom: 'C',
    defaultTo: 'F',
    units: [
      { id: 'C', label: 'Celsius', symbol: '°C', toBase: (v) => v, fromBase: (v) => v },
      {
        id: 'F',
        label: 'Fahrenheit',
        symbol: '°F',
        toBase: (v) => ((v - 32) * 5) / 9,
        fromBase: (v) => (v * 9) / 5 + 32,
      },
      {
        id: 'K',
        label: 'Kelvin',
        symbol: 'K',
        toBase: (v) => v - 273.15,
        fromBase: (v) => v + 273.15,
      },
    ],
  },
  area: {
    name: 'Area',
    defaultFrom: 'm2',
    defaultTo: 'ft2',
    units: [
      linear('cm2', 'Square Centimeter', 'cm²', 0.0001),
      linear('m2', 'Square Meter', 'm²', 1),
      linear('ha', 'Hectare', 'ha', 10000),
      linear('km2', 'Square Kilometer', 'km²', 1_000_000),
      linear('ft2', 'Square Foot', 'ft²', 0.09290304),
      linear('yd2', 'Square Yard', 'yd²', 0.83612736),
      linear('acre', 'Acre', 'acre', 4046.8564224),
      linear('mi2', 'Square Mile', 'mi²', 2_589_988.110336),
    ],
  },
  volume: {
    name: 'Volume',
    defaultFrom: 'L',
    defaultTo: 'gal',
    units: [
      linear('mL', 'Milliliter', 'mL', 0.001),
      linear('L', 'Liter', 'L', 1),
      linear('m3', 'Cubic Meter', 'm³', 1000),
      linear('floz', 'Fluid Ounce (US)', 'fl oz', 0.0295735295625),
      linear('cup', 'Cup (US)', 'cup', 0.2365882365),
      linear('pt', 'Pint (US)', 'pt', 0.473176473),
      linear('qt', 'Quart (US)', 'qt', 0.946352946),
      linear('gal', 'Gallon (US)', 'gal', 3.785411784),
    ],
  },
  speed: {
    name: 'Speed',
    defaultFrom: 'kmh',
    defaultTo: 'mph',
    units: [
      linear('ms', 'Meters / second', 'm/s', 1),
      linear('kmh', 'Kilometers / hour', 'km/h', 1 / 3.6),
      linear('mph', 'Miles / hour', 'mph', 0.44704),
      linear('knot', 'Knot', 'kn', 1852 / 3600),
      linear('fts', 'Feet / second', 'ft/s', 0.3048),
    ],
  },
  storage: {
    name: 'Digital Storage',
    defaultFrom: 'GB',
    defaultTo: 'GiB',
    units: [
      linear('B', 'Byte', 'B', 1),
      linear('KB', 'Kilobyte (10³)', 'KB', 1000),
      linear('MB', 'Megabyte (10⁶)', 'MB', 1e6),
      linear('GB', 'Gigabyte (10⁹)', 'GB', 1e9),
      linear('TB', 'Terabyte (10¹²)', 'TB', 1e12),
      linear('KiB', 'Kibibyte (2¹⁰)', 'KiB', 1024),
      linear('MiB', 'Mebibyte (2²⁰)', 'MiB', 1024 ** 2),
      linear('GiB', 'Gibibyte (2³⁰)', 'GiB', 1024 ** 3),
    ],
  },
};

function formatConverted(val: number): string {
  if (!Number.isFinite(val)) return '—';
  if (val === 0) return '0';
  const abs = Math.abs(val);
  if (abs >= 1e9 || abs < 1e-6) {
    return val.toExponential(6);
  }
  return Number(val.toPrecision(8)).toString();
}

export default function UnitConverterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [category, setCategory] = useState<CategoryKey>('length');
  const [fromId, setFromId] = useState('km');
  const [toId, setToId] = useState('mi');
  const [inputValue, setInputValue] = useState('10');

  const activeCategory = CATEGORIES_UNITS[category];

  const unitLabel = (id: string): string =>
    (s.unitLabels as Record<string, string>)[id] ?? id;

  const handleCategoryChange = (next: CategoryKey) => {
    setCategory(next);
    setFromId(CATEGORIES_UNITS[next].defaultFrom);
    setToId(CATEGORIES_UNITS[next].defaultTo);
  };

  const result = useMemo(() => {
    const val = Number(inputValue);
    if (!Number.isFinite(val)) {
      return { error: s.errorInvalidValue, data: null };
    }

    const fromUnit = activeCategory.units.find((u) => u.id === fromId) ?? activeCategory.units[0];
    const toUnit = activeCategory.units.find((u) => u.id === toId) ?? activeCategory.units[1];
    const baseVal = fromUnit.toBase(val);

    if (category === 'temperature' && fromUnit.toBase(val) < -273.15) {
      return { error: s.errorAbsoluteZero, data: null };
    }

    const converted = toUnit.fromBase(baseVal);
    const allUnits = activeCategory.units.map((u) => ({
      id: u.id,
      label: u.label,
      symbol: u.symbol,
      formatted: formatConverted(u.fromBase(baseVal)),
    }));

    return {
      error: '',
      data: {
        fromUnit,
        toUnit,
        converted,
        formatted: formatConverted(converted),
        allUnits,
      },
    };
  }, [activeCategory, category, fromId, toId, inputValue, s]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
        {(Object.keys(CATEGORIES_UNITS) as CategoryKey[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => handleCategoryChange(key)}
            className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              category === key ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {s.categoryNames[key]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_1fr] gap-3 items-end">
        <div>
          <label htmlFor="uc-val" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.valueLabel}
          </label>
          <input
            id="uc-val"
            type="number"
            step="any"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        <div>
          <label htmlFor="uc-from" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.fromLabel}
          </label>
          <select
            id="uc-from"
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
          >
            {activeCategory.units.map((u) => (
              <option key={u.id} value={u.id}>
                {unitLabel(u.id)} ({u.symbol})
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            setFromId(toId);
            setToId(fromId);
          }}
          aria-label={s.swapAria}
          title={s.swapTitle}
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700 hover:bg-slate-50 cursor-pointer"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>

        <div>
          <label htmlFor="uc-to" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.toLabel}
          </label>
          <select
            id="uc-to"
            value={toId}
            onChange={(e) => setToId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
          >
            {activeCategory.units.map((u) => (
              <option key={u.id} value={u.id}>
                {unitLabel(u.id)} ({u.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      {result.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {result.error}
        </div>
      )}

      {result.data && (
        <>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-indigo-700 mb-1">
                {unitLabel(result.data.fromUnit.id)} {s.toWord} {unitLabel(result.data.toUnit.id)}
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
                {inputValue || 0} {result.data.fromUnit.symbol} = {result.data.formatted}{' '}
                {result.data.toUnit.symbol}
              </div>
            </div>
            <CopyButton
              text={`${result.data.formatted} ${result.data.toUnit.symbol}`}
              label={s.copyResult}
              copiedLabel={t.common.copied}
            />
          </div>

          <div className="rounded-xl border border-slate-200 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">{s.unitHeader}</th>
                  <th className="py-2.5 px-4 font-semibold">{s.symbolHeader}</th>
                  <th className="py-2.5 px-4 font-semibold text-right">{s.equivalentHeader}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 tabular-nums">
                {result.data.allUnits.map((u) => (
                  <tr key={u.id} className={u.id === toId ? 'bg-indigo-50/50' : ''}>
                    <td className="py-2 px-4 text-slate-800 font-medium">{unitLabel(u.id)}</td>
                    <td className="py-2 px-4 font-mono text-slate-500">{u.symbol}</td>
                    <td className="py-2 px-4 font-mono font-semibold text-slate-900 text-right">
                      {u.formatted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
