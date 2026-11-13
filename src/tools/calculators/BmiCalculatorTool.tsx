import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    underweight: 'Underweight',
    normalWeight: 'Normal weight',
    overweight: 'Overweight',
    obesity: 'Obesity',
    errorHeightMetric: 'Enter height between 50 cm and 280 cm.',
    errorWeightMetric: 'Enter weight between 15 kg and 500 kg.',
    errorHeightImperial: 'Enter a valid height between 2 ft and 9 ft.',
    errorWeightImperial: 'Enter weight between 30 lbs and 1100 lbs.',
    metricTab: 'Metric (cm / kg)',
    imperialTab: 'Imperial (ft, in / lbs)',
    heightCmLabel: 'Height (cm)',
    weightKgLabel: 'Weight (kg)',
    heightFtLabel: 'Height (ft)',
    heightInLabel: 'Height (in)',
    weightLbsLabel: 'Weight (lbs)',
    bmiLabel: 'Body Mass Index (BMI)',
    whoCategory: 'WHO Category',
    healthyRange: 'Healthy BMI Weight Range (18.5–24.9)',
    disclaimer:
      'BMI is a general screening ratio and does not distinguish muscle mass from body fat.',
  },
  es: {
    underweight: 'Bajo peso',
    normalWeight: 'Peso normal',
    overweight: 'Sobrepeso',
    obesity: 'Obesidad',
    errorHeightMetric: 'Ingresa una altura entre 50 cm y 280 cm.',
    errorWeightMetric: 'Ingresa un peso entre 15 kg y 500 kg.',
    errorHeightImperial: 'Ingresa una altura válida entre 2 ft y 9 ft.',
    errorWeightImperial: 'Ingresa un peso entre 30 lbs y 1100 lbs.',
    metricTab: 'Métrico (cm / kg)',
    imperialTab: 'Imperial (ft, in / lbs)',
    heightCmLabel: 'Altura (cm)',
    weightKgLabel: 'Peso (kg)',
    heightFtLabel: 'Altura (ft)',
    heightInLabel: 'Altura (in)',
    weightLbsLabel: 'Peso (lbs)',
    bmiLabel: 'Índice de masa corporal (IMC)',
    whoCategory: 'Categoría de la OMS',
    healthyRange: 'Rango de peso saludable según el IMC (18.5–24.9)',
    disclaimer:
      'El IMC es un índice general de detección y no distingue la masa muscular de la grasa corporal.',
  },
  pt: {
    underweight: 'Abaixo do peso',
    normalWeight: 'Peso normal',
    overweight: 'Sobrepeso',
    obesity: 'Obesidade',
    errorHeightMetric: 'Insira uma altura entre 50 cm e 280 cm.',
    errorWeightMetric: 'Insira um peso entre 15 kg e 500 kg.',
    errorHeightImperial: 'Insira uma altura válida entre 2 ft e 9 ft.',
    errorWeightImperial: 'Insira um peso entre 30 lbs e 1100 lbs.',
    metricTab: 'Métrico (cm / kg)',
    imperialTab: 'Imperial (ft, in / lbs)',
    heightCmLabel: 'Altura (cm)',
    weightKgLabel: 'Peso (kg)',
    heightFtLabel: 'Altura (ft)',
    heightInLabel: 'Altura (in)',
    weightLbsLabel: 'Peso (lbs)',
    bmiLabel: 'Índice de Massa Corporal (IMC)',
    whoCategory: 'Categoria da OMS',
    healthyRange: 'Faixa de peso saudável pelo IMC (18.5–24.9)',
    disclaimer:
      'O IMC é um índice geral de triagem e não distingue massa muscular de gordura corporal.',
  },
  fr: {
    underweight: 'Insuffisance pondérale',
    normalWeight: 'Poids normal',
    overweight: 'Surpoids',
    obesity: 'Obésité',
    errorHeightMetric: 'Saisissez une taille entre 50 cm et 280 cm.',
    errorWeightMetric: 'Saisissez un poids entre 15 kg et 500 kg.',
    errorHeightImperial: 'Saisissez une taille valide entre 2 pi et 9 pi.',
    errorWeightImperial: 'Saisissez un poids entre 30 lb et 1100 lb.',
    metricTab: 'Métrique (cm / kg)',
    imperialTab: 'Impérial (pi, po / lb)',
    heightCmLabel: 'Taille (cm)',
    weightKgLabel: 'Poids (kg)',
    heightFtLabel: 'Taille (pi)',
    heightInLabel: 'Taille (po)',
    weightLbsLabel: 'Poids (lb)',
    bmiLabel: 'Indice de masse corporelle (IMC)',
    whoCategory: 'Catégorie OMS',
    healthyRange: 'Plage de poids santé selon l’IMC (18.5–24.9)',
    disclaimer:
      'L’IMC est un indice général de dépistage qui ne distingue pas la masse musculaire de la masse grasse.',
  },
  de: {
    underweight: 'Untergewicht',
    normalWeight: 'Normalgewicht',
    overweight: 'Übergewicht',
    obesity: 'Adipositas',
    errorHeightMetric: 'Geben Sie eine Größe zwischen 50 cm und 280 cm ein.',
    errorWeightMetric: 'Geben Sie ein Gewicht zwischen 15 kg und 500 kg ein.',
    errorHeightImperial: 'Geben Sie eine gültige Größe zwischen 2 ft und 9 ft ein.',
    errorWeightImperial: 'Geben Sie ein Gewicht zwischen 30 lbs und 1100 lbs ein.',
    metricTab: 'Metrisch (cm / kg)',
    imperialTab: 'Imperial (ft, in / lbs)',
    heightCmLabel: 'Größe (cm)',
    weightKgLabel: 'Gewicht (kg)',
    heightFtLabel: 'Größe (ft)',
    heightInLabel: 'Größe (in)',
    weightLbsLabel: 'Gewicht (lbs)',
    bmiLabel: 'Body-Mass-Index (BMI)',
    whoCategory: 'WHO-Kategorie',
    healthyRange: 'Gesunder Gewichtsbereich nach BMI (18.5–24.9)',
    disclaimer:
      'Der BMI ist ein allgemeiner Screening-Wert und unterscheidet nicht zwischen Muskelmasse und Körperfett.',
  },
  it: {
    underweight: 'Sottopeso',
    normalWeight: 'Peso normale',
    overweight: 'Sovrappeso',
    obesity: 'Obesità',
    errorHeightMetric: 'Inserisci un’altezza tra 50 cm e 280 cm.',
    errorWeightMetric: 'Inserisci un peso tra 15 kg e 500 kg.',
    errorHeightImperial: 'Inserisci un’altezza valida tra 2 ft e 9 ft.',
    errorWeightImperial: 'Inserisci un peso tra 30 lbs e 1100 lbs.',
    metricTab: 'Metrico (cm / kg)',
    imperialTab: 'Imperiale (ft, in / lbs)',
    heightCmLabel: 'Altezza (cm)',
    weightKgLabel: 'Peso (kg)',
    heightFtLabel: 'Altezza (ft)',
    heightInLabel: 'Altezza (in)',
    weightLbsLabel: 'Peso (lbs)',
    bmiLabel: 'Indice di massa corporea (IMC)',
    whoCategory: 'Categoria OMS',
    healthyRange: 'Intervallo di peso sano secondo l’IMC (18.5–24.9)',
    disclaimer:
      'L’IMC è un indice generale di screening e non distingue la massa muscolare dal grasso corporeo.',
  },
  id: {
    underweight: 'Kekurangan berat badan',
    normalWeight: 'Berat normal',
    overweight: 'Kelebihan berat badan',
    obesity: 'Obesitas',
    errorHeightMetric: 'Masukkan tinggi antara 50 cm dan 280 cm.',
    errorWeightMetric: 'Masukkan berat antara 15 kg dan 500 kg.',
    errorHeightImperial: 'Masukkan tinggi yang valid antara 2 ft dan 9 ft.',
    errorWeightImperial: 'Masukkan berat antara 30 lbs dan 1100 lbs.',
    metricTab: 'Metrik (cm / kg)',
    imperialTab: 'Imperial (ft, in / lbs)',
    heightCmLabel: 'Tinggi (cm)',
    weightKgLabel: 'Berat (kg)',
    heightFtLabel: 'Tinggi (ft)',
    heightInLabel: 'Tinggi (in)',
    weightLbsLabel: 'Berat (lbs)',
    bmiLabel: 'Indeks Massa Tubuh (IMT)',
    whoCategory: 'Kategori WHO',
    healthyRange: 'Rentang Berat IMT Sehat (18,5–24,9)',
    disclaimer:
      'IMT adalah rasio skrining umum dan tidak membedakan massa otot dari lemak tubuh.',
  },
  ru: {
    underweight: 'Недостаточный вес',
    normalWeight: 'Нормальный вес',
    overweight: 'Избыточный вес',
    obesity: 'Ожирение',
    errorHeightMetric: 'Введите рост от 50 до 280 см.',
    errorWeightMetric: 'Введите вес от 15 до 500 кг.',
    errorHeightImperial: 'Введите корректный рост от 2 до 9 футов.',
    errorWeightImperial: 'Введите вес от 30 до 1100 фунтов.',
    metricTab: 'Метрическая (см / кг)',
    imperialTab: 'Имперская (футы, дюймы / фунты)',
    heightCmLabel: 'Рост (см)',
    weightKgLabel: 'Вес (кг)',
    heightFtLabel: 'Рост (футы)',
    heightInLabel: 'Рост (дюймы)',
    weightLbsLabel: 'Вес (фунты)',
    bmiLabel: 'Индекс массы тела (ИМТ)',
    whoCategory: 'Категория по ВОЗ',
    healthyRange: 'Здоровый диапазон веса по ИМТ (18,5–24,9)',
    disclaimer:
      'ИМТ — это общий скрининговый показатель, который не отличает мышечную массу от жировой.',
  },
};

type BmiCategories = {
  underweight: string;
  normalWeight: string;
  overweight: string;
  obesity: string;
};

function classifyBmi(bmi: number, cats: BmiCategories): { category: string; tone: string } {
  if (bmi < 18.5) return { category: cats.underweight, tone: 'text-amber-700' };
  if (bmi < 25) return { category: cats.normalWeight, tone: 'text-emerald-700' };
  if (bmi < 30) return { category: cats.overweight, tone: 'text-amber-700' };
  return { category: cats.obesity, tone: 'text-red-700' };
}

export default function BmiCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState('175');
  const [weightKg, setWeightKg] = useState('70');
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('9');
  const [weightLbs, setWeightLbs] = useState('154');

  const result = useMemo(() => {
    let meters = 0;
    let kg = 0;

    if (unitSystem === 'metric') {
      const cm = Number(heightCm);
      const w = Number(weightKg);
      if (!Number.isFinite(cm) || cm < 50 || cm > 280) {
        return { error: s.errorHeightMetric, data: null };
      }
      if (!Number.isFinite(w) || w < 15 || w > 500) {
        return { error: s.errorWeightMetric, data: null };
      }
      meters = cm / 100;
      kg = w;
    } else {
      const ft = Number(heightFt) || 0;
      const inches = Number(heightIn) || 0;
      const totalInches = ft * 12 + inches;
      const lbs = Number(weightLbs);
      if (!Number.isFinite(totalInches) || totalInches < 20 || totalInches > 110) {
        return { error: s.errorHeightImperial, data: null };
      }
      if (!Number.isFinite(lbs) || lbs < 30 || lbs > 1100) {
        return { error: s.errorWeightImperial, data: null };
      }
      meters = totalInches * 0.0254;
      kg = lbs * 0.45359237;
    }

    const bmi = kg / (meters * meters);
    const minHealthyKg = 18.5 * meters * meters;
    const maxHealthyKg = 24.9 * meters * meters;
    const band = classifyBmi(bmi, s);

    return {
      error: '',
      data: {
        bmi,
        band,
        minHealthyKg,
        maxHealthyKg,
        minHealthyLbs: minHealthyKg / 0.45359237,
        maxHealthyLbs: maxHealthyKg / 0.45359237,
      },
    };
  }, [unitSystem, heightCm, weightKg, heightFt, heightIn, weightLbs, s]);

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setUnitSystem('metric')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            unitSystem === 'metric' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          {s.metricTab}
        </button>
        <button
          type="button"
          onClick={() => setUnitSystem('imperial')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            unitSystem === 'imperial' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          {s.imperialTab}
        </button>
      </div>

      {unitSystem === 'metric' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bmi-cm" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.heightCmLabel}
            </label>
            <input
              id="bmi-cm"
              type="number"
              min={50}
              max={280}
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
            />
          </div>
          <div>
            <label htmlFor="bmi-kg" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.weightKgLabel}
            </label>
            <input
              id="bmi-kg"
              type="number"
              min={15}
              max={500}
              step="0.5"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="bmi-ft" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.heightFtLabel}
            </label>
            <input
              id="bmi-ft"
              type="number"
              min={2}
              max={8}
              value={heightFt}
              onChange={(e) => setHeightFt(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
            />
          </div>
          <div>
            <label htmlFor="bmi-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.heightInLabel}
            </label>
            <input
              id="bmi-in"
              type="number"
              min={0}
              max={11}
              value={heightIn}
              onChange={(e) => setHeightIn(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
            />
          </div>
          <div>
            <label htmlFor="bmi-lbs" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.weightLbsLabel}
            </label>
            <input
              id="bmi-lbs"
              type="number"
              min={30}
              max={1100}
              value={weightLbs}
              onChange={(e) => setWeightLbs(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
            />
          </div>
        </div>
      )}

      {result.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {result.error}
        </div>
      )}

      {result.data && (
        <div className="space-y-4">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-5">
              <dt className="text-xs font-medium text-indigo-700">{s.bmiLabel}</dt>
              <dd className="mt-1 text-3xl font-bold font-mono text-slate-900 tabular-nums">
                {result.data.bmi.toFixed(1)} <span className="text-sm font-normal">kg/m²</span>
              </dd>
              <dd className={`mt-1 text-sm font-semibold ${result.data.band.tone}`}>
                {s.whoCategory}: {result.data.band.category}
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <dt className="text-xs font-medium text-slate-500">{s.healthyRange}</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {unitSystem === 'metric'
                  ? `${result.data.minHealthyKg.toFixed(1)} – ${result.data.maxHealthyKg.toFixed(1)} kg`
                  : `${result.data.minHealthyLbs.toFixed(0)} – ${result.data.maxHealthyLbs.toFixed(0)} lbs`}
              </dd>
              <dd className="mt-1 text-xs text-slate-500">{s.disclaimer}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}
