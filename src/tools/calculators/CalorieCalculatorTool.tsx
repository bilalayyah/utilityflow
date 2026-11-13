import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errorAge: 'Enter an age between 15 and 100 years.',
    errorHeightMetric: 'Enter height between 100 cm and 250 cm.',
    errorWeightMetric: 'Enter weight between 30 kg and 350 kg.',
    errorHeightImperial: 'Enter height between 3 ft 4 in and 8 ft 2 in.',
    errorWeightImperial: 'Enter weight between 66 lbs and 770 lbs.',
    metricTab: 'Metric (cm / kg)',
    imperialTab: 'Imperial (ft, in / lbs)',
    maleTab: 'Male',
    femaleTab: 'Female',
    ageLabel: 'Age (years)',
    heightCmLabel: 'Height (cm)',
    weightKgLabel: 'Weight (kg)',
    heightFtLabel: 'Height (ft)',
    heightInLabel: 'Height (in)',
    weightLbsLabel: 'Weight (lbs)',
    activityLabel: 'Activity Level',
    activitySedentary: 'Sedentary (1.2×)',
    activitySedentaryDetail: 'Desk job, little or no exercise',
    activityLight: 'Lightly active (1.375×)',
    activityLightDetail: 'Light exercise 1–3 days/week',
    activityModerate: 'Moderately active (1.55×)',
    activityModerateDetail: 'Moderate exercise 3–5 days/week',
    activityVery: 'Very active (1.725×)',
    activityVeryDetail: 'Hard exercise 6–7 days/week',
    activityExtra: 'Extra active (1.9×)',
    activityExtraDetail: 'Physical job or twice-daily training',
    maintenance: 'Maintenance Calories (TDEE)',
    mildLoss: 'Mild Weight Loss (-0.25 kg/wk)',
    mildLossNote: '~250 kcal daily deficit',
    weightLoss: 'Weight Loss (-0.5 kg/wk)',
    weightLossNote: '~500 kcal daily deficit',
    leanGain: 'Lean Weight Gain',
    leanGainNote: '+250 kcal daily surplus',
    macroHeading: 'Reference Maintenance Macro Split (30% Protein · 40% Carbs · 30% Fat)',
    protein: 'Protein',
    carbs: 'Carbohydrates',
    fat: 'Dietary Fat',
    gramsPerDay: 'g/day',
    disclaimer:
      'Calculated via the Mifflin-St Jeor BMR equation. Individual energy needs vary by body composition and medical context; consult a qualified healthcare professional before starting restrictive diets.',
  },
  es: {
    errorAge: 'Ingresa una edad entre 15 y 100 años.',
    errorHeightMetric: 'Ingresa una altura entre 100 cm y 250 cm.',
    errorWeightMetric: 'Ingresa un peso entre 30 kg y 350 kg.',
    errorHeightImperial: 'Ingresa una altura entre 3 ft 4 in y 8 ft 2 in.',
    errorWeightImperial: 'Ingresa un peso entre 66 lbs y 770 lbs.',
    metricTab: 'Métrico (cm / kg)',
    imperialTab: 'Imperial (ft, in / lbs)',
    maleTab: 'Hombre',
    femaleTab: 'Mujer',
    ageLabel: 'Edad (años)',
    heightCmLabel: 'Altura (cm)',
    weightKgLabel: 'Peso (kg)',
    heightFtLabel: 'Altura (ft)',
    heightInLabel: 'Altura (in)',
    weightLbsLabel: 'Peso (lbs)',
    activityLabel: 'Nivel de actividad',
    activitySedentary: 'Sedentario (1.2×)',
    activitySedentaryDetail: 'Trabajo de oficina, poco o nada de ejercicio',
    activityLight: 'Ligeramente activo (1.375×)',
    activityLightDetail: 'Ejercicio ligero 1–3 días/semana',
    activityModerate: 'Moderadamente activo (1.55×)',
    activityModerateDetail: 'Ejercicio moderado 3–5 días/semana',
    activityVery: 'Muy activo (1.725×)',
    activityVeryDetail: 'Ejercicio intenso 6–7 días/semana',
    activityExtra: 'Extremadamente activo (1.9×)',
    activityExtraDetail: 'Trabajo físico o entrenamiento dos veces al día',
    maintenance: 'Calorías de mantenimiento (TDEE)',
    mildLoss: 'Pérdida de peso leve (-0.25 kg/sem)',
    mildLossNote: 'Déficit diario de ~250 kcal',
    weightLoss: 'Pérdida de peso (-0.5 kg/sem)',
    weightLossNote: 'Déficit diario de ~500 kcal',
    leanGain: 'Ganancia de peso magro',
    leanGainNote: 'Superávit diario de +250 kcal',
    macroHeading: 'Distribución de macronutrientes de referencia para mantenimiento (30% proteína · 40% carbohidratos · 30% grasa)',
    protein: 'Proteína',
    carbs: 'Carbohidratos',
    fat: 'Grasa alimentaria',
    gramsPerDay: 'g/día',
    disclaimer:
      'Calculado con la ecuación de Mifflin-St Jeor para la TMB. Las necesidades energéticas individuales varían según la composición corporal y el contexto médico; consulta a un profesional de la salud calificado antes de iniciar dietas restrictivas.',
  },
};

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very' | 'extra';

const ACTIVITY_OPTIONS: { id: ActivityLevel; factor: number }[] = [
  { id: 'sedentary', factor: 1.2 },
  { id: 'light', factor: 1.375 },
  { id: 'moderate', factor: 1.55 },
  { id: 'very', factor: 1.725 },
  { id: 'extra', factor: 1.9 },
];

export default function CalorieCalculatorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [sex, setSex] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('30');
  const [heightCm, setHeightCm] = useState('175');
  const [weightKg, setWeightKg] = useState('72');
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('9');
  const [weightLbs, setWeightLbs] = useState('159');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');

  const activityLabels: Record<ActivityLevel, { label: string; detail: string }> = {
    sedentary: { label: s.activitySedentary, detail: s.activitySedentaryDetail },
    light: { label: s.activityLight, detail: s.activityLightDetail },
    moderate: { label: s.activityModerate, detail: s.activityModerateDetail },
    very: { label: s.activityVery, detail: s.activityVeryDetail },
    extra: { label: s.activityExtra, detail: s.activityExtraDetail },
  };

  const result = useMemo(() => {
    const years = Number(age);
    if (!Number.isFinite(years) || years < 15 || years > 100) {
      return { error: s.errorAge, data: null };
    }

    let cm = 0;
    let kg = 0;

    if (unitSystem === 'metric') {
      cm = Number(heightCm);
      kg = Number(weightKg);
      if (!Number.isFinite(cm) || cm < 100 || cm > 250) {
        return { error: s.errorHeightMetric, data: null };
      }
      if (!Number.isFinite(kg) || kg < 30 || kg > 350) {
        return { error: s.errorWeightMetric, data: null };
      }
    } else {
      const ft = Number(heightFt) || 0;
      const inches = Number(heightIn) || 0;
      const totalInches = ft * 12 + inches;
      const lbs = Number(weightLbs);
      if (!Number.isFinite(totalInches) || totalInches < 40 || totalInches > 98) {
        return { error: s.errorHeightImperial, data: null };
      }
      if (!Number.isFinite(lbs) || lbs < 66 || lbs > 770) {
        return { error: s.errorWeightImperial, data: null };
      }
      cm = totalInches * 2.54;
      kg = lbs * 0.45359237;
    }

    // Mifflin-St Jeor Equation
    const baseBmr = 10 * kg + 6.25 * cm - 5 * years + (sex === 'male' ? 5 : -161);
    const activePreset = ACTIVITY_OPTIONS.find((opt) => opt.id === activity) ?? ACTIVITY_OPTIONS[2];
    const tdee = baseBmr * activePreset.factor;

    const mildLoss = Math.max(1200, tdee - 250);
    const weightLoss = Math.max(1200, tdee - 500);
    const leanGain = tdee + 250;

    // Balanced macro guideline at maintenance (30% Protein, 40% Carbs, 30% Fat)
    const proteinGrams = (tdee * 0.3) / 4;
    const carbsGrams = (tdee * 0.4) / 4;
    const fatGrams = (tdee * 0.3) / 9;

    return {
      error: '',
      data: {
        bmr: baseBmr,
        tdee,
        mildLoss,
        weightLoss,
        leanGain,
        proteinGrams,
        carbsGrams,
        fatGrams,
        factor: activePreset.factor,
      },
    };
  }, [unitSystem, sex, age, heightCm, weightKg, heightFt, heightIn, weightLbs, activity, s]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
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

        <div className="inline-flex rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setSex('male')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              sex === 'male' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {s.maleTab}
          </button>
          <button
            type="button"
            onClick={() => setSex('female')}
            className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
              sex === 'female' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            {s.femaleTab}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="cal-age" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.ageLabel}
          </label>
          <input
            id="cal-age"
            type="number"
            min={15}
            max={100}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
          />
        </div>

        {unitSystem === 'metric' ? (
          <>
            <div>
              <label htmlFor="cal-cm" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.heightCmLabel}
              </label>
              <input
                id="cal-cm"
                type="number"
                min={100}
                max={250}
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="cal-kg" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.weightKgLabel}
              </label>
              <input
                id="cal-kg"
                type="number"
                min={30}
                max={350}
                step="0.5"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="cal-ft" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.heightFtLabel}
                </label>
                <input
                  id="cal-ft"
                  type="number"
                  min={3}
                  max={8}
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono text-sm tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="cal-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  {s.heightInLabel}
                </label>
                <input
                  id="cal-in"
                  type="number"
                  min={0}
                  max={11}
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono text-sm tabular-nums"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cal-lbs" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.weightLbsLabel}
              </label>
              <input
                id="cal-lbs"
                type="number"
                min={66}
                max={770}
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm tabular-nums"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="cal-activity" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.activityLabel}
          </label>
          <select
            id="cal-activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value as ActivityLevel)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            {ACTIVITY_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {activityLabels[opt.id].label}
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
        <div className="space-y-4">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
              <dt className="text-xs font-medium text-indigo-700">{s.maintenance}</dt>
              <dd className="mt-1 text-2xl font-bold font-mono text-slate-900 tabular-nums">
                {Math.round(result.data.tdee).toLocaleString(locale)} kcal
              </dd>
              <dd className="mt-1 text-xs text-slate-600 tabular-nums">
                BMR {Math.round(result.data.bmr).toLocaleString(locale)} × {result.data.factor}
              </dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">{s.mildLoss}</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {Math.round(result.data.mildLoss).toLocaleString(locale)} kcal/day
              </dd>
              <dd className="mt-1 text-xs text-slate-500">{s.mildLossNote}</dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">{s.weightLoss}</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {Math.round(result.data.weightLoss).toLocaleString(locale)} kcal/day
              </dd>
              <dd className="mt-1 text-xs text-slate-500">{s.weightLossNote}</dd>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-medium text-slate-500">{s.leanGain}</dt>
              <dd className="mt-1 text-xl font-bold font-mono text-slate-900 tabular-nums">
                {Math.round(result.data.leanGain).toLocaleString(locale)} kcal/day
              </dd>
              <dd className="mt-1 text-xs text-slate-500">{s.leanGainNote}</dd>
            </div>
          </dl>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold text-slate-700 mb-2">{s.macroHeading}</div>
            <div className="grid grid-cols-3 gap-3 text-sm tabular-nums">
              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <div className="text-xs text-slate-500">{s.protein}</div>
                <div className="font-mono font-bold text-slate-900">
                  {Math.round(result.data.proteinGrams)} {s.gramsPerDay}
                </div>
              </div>
              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <div className="text-xs text-slate-500">{s.carbs}</div>
                <div className="font-mono font-bold text-slate-900">
                  {Math.round(result.data.carbsGrams)} {s.gramsPerDay}
                </div>
              </div>
              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <div className="text-xs text-slate-500">{s.fat}</div>
                <div className="font-mono font-bold text-slate-900">
                  {Math.round(result.data.fatGrams)} {s.gramsPerDay}
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">{s.disclaimer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
