/**
 * Heat Index Calculator — pure calculation engine.
 *
 * Implements the National Weather Service (NWS) Rothfusz regression method
 * for apparent ("feels like") temperature, exactly as published on
 * https://www.weather.gov/ctp/heat and https://www.weather.gov/safety/heat-index.
 *
 * Pure TypeScript: no React, no imports. All temperatures are Fahrenheit
 * inside the engine; Celsius inputs are converted to Fahrenheit first and
 * results are converted back — there is no independent Celsius approximation.
 *
 * Method (NWS-canonical):
 *  1. Compute the simple approximation HI_simple and average it with the
 *     air temperature: HI_avg = (HI_simple + T) / 2.
 *  2. If HI_avg < 80°F, use HI_avg (do NOT run the regression).
 *  3. If HI_avg >= 80°F, run the full Rothfusz regression plus the
 *     low-humidity / high-humidity adjustments.
 *  The check in step 2 is on the AVERAGED value, not on HI_simple — this is
 *  what the NWS page specifies ("If this heat index value is 80 degrees F
 *  or higher, the full regression equation… is applied"). Consequence:
 *  82°F / 0% gives HI_simple 79.90, avg 80.95 >= 80, so the regression runs
 *  and returns 78.09°F — BELOW the input temperature. That is the NWS
 *  method, not a bug; the test suite pins it.
 *
 * Applicability ceiling (documented choice):
 *  The NWS heat-index chart tops out at 110°F air temperature, and the
 *  raw regression returns physically absurd values at extreme T+RH
 *  (110°F/80% -> 218.76°F). So a result is OUT OF RANGE when either:
 *   - the input air temperature is above 110°F, or
 *   - the computed heat index exceeds 180°F (above the highest heat index
 *     ever recorded, ~178°F in Dhahran, Saudi Arabia, 2003).
 *  Out-of-range inputs never produce a bare number; the caller must show
 *  the "outside the standard applicability range" state instead.
 */

/** Temperature unit selected by the user. */
export type TemperatureUnit = 'F' | 'C';

/** Which NWS method produced the result. */
export type HeatIndexMethod = 'simple' | 'regression';

/** Risk-band id. 'below-scale' means the heat index is under 80°F, where the NWS risk scale does not apply. */
export type HeatIndexBandId =
  | 'below-scale'
  | 'caution'
  | 'extreme-caution'
  | 'danger'
  | 'extreme-danger';

/** A risk band: label, safety text (prompt §7, verbatim) and a UI tone. */
export interface HeatIndexBand {
  id: HeatIndexBandId;
  label: string;
  safetyText: string;
  tone: 'none' | 'amber' | 'orange' | 'red' | 'darkred';
}

/** Why a calculation is out of range. */
export type OutOfRangeReason = 'temperature-above-range' | 'heat-index-beyond-range';

/** Full result of a heat-index calculation. */
export interface HeatIndexResult {
  /** Input air temperature normalised to Fahrenheit. */
  tempF: number;
  /** Relative humidity in percent (0–100). */
  rh: number;
  /** Heat index in Fahrenheit, or null when out of range. */
  heatIndexF: number | null;
  /** Heat index in Celsius, or null when out of range. */
  heatIndexC: number | null;
  /** Heat index minus actual temperature, °F (null when out of range). */
  differenceF: number | null;
  /** Heat index minus actual temperature, °C (null when outOfRange). */
  differenceC: number | null;
  /** Which NWS method produced the value (null when out of range). */
  method: HeatIndexMethod | null;
  /** True when the input is outside the standard applicability range. */
  outOfRange: boolean;
  /** Set when outOfRange is true. */
  outOfRangeReason?: OutOfRangeReason;
  /** Risk band for the computed heat index (null when out of range for temperature-above-range; Extreme Danger when out of range for heat-index-beyond-range). */
  band: HeatIndexBand | null;
}

/** Highest air temperature the NWS heat-index chart covers (°F). */
export const MAX_APPLICABLE_TEMP_F = 110;

/**
 * Highest heat index we will ever display (°F). Above the highest heat
 * index ever recorded (~178°F, Dhahran 2003); the raw regression exceeds
 * this at extreme T+RH (110°F/80% -> 218.76°F) and such values are not
 * shippable as bare numbers.
 */
export const MAX_PLAUSIBLE_HEAT_INDEX_F = 180;

/** Absolute zero in Fahrenheit (below this a temperature is impossible). */
export const ABSOLUTE_ZERO_F = -459.67;

/** Absolute zero in Celsius (below this a temperature is impossible). */
export const ABSOLUTE_ZERO_C = -273.15;

/** Convert Celsius to Fahrenheit. */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

/** Convert Fahrenheit to Celsius. */
export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * The NWS simple (preliminary) heat-index approximation.
 * HI_simple = 0.5 × (T + 61.0 + ((T − 68.0) × 1.2) + (RH × 0.094))
 */
export function heatIndexSimple(tempF: number, rh: number): number {
  return 0.5 * (tempF + 61.0 + (tempF - 68.0) * 1.2 + rh * 0.094);
}

/**
 * The raw Rothfusz regression plus the NWS low- and high-humidity
 * adjustments. This is the pure polynomial — it does NOT apply the
 * 80°F method switch or the applicability ceiling; use
 * `calculateHeatIndex` for the full NWS procedure.
 *
 * Low-humidity adjustment (RH < 13%, 80°F ≤ T ≤ 112°F) — SUBTRACT:
 *   ((13 − RH) / 4) × SQRT((17 − |T − 95|) / 17)
 * High-humidity adjustment (RH > 85%, 80°F ≤ T ≤ 87°F) — ADD:
 *   ((RH − 85) / 10) × ((87 − T) / 5)
 */
export function heatIndexRegression(tempF: number, rh: number): number {
  const t = tempF;
  const t2 = t * t;
  const rh2 = rh * rh;
  let hi =
    -42.379 +
    2.04901523 * t +
    10.14333127 * rh -
    0.22475541 * t * rh -
    0.00683783 * t2 -
    0.05481717 * rh2 +
    0.00122874 * t2 * rh +
    0.00085282 * t * rh2 -
    0.00000199 * t2 * rh2;

  if (rh < 13 && t >= 80 && t <= 112) {
    hi -= ((13 - rh) / 4) * Math.sqrt((17 - Math.abs(t - 95)) / 17);
  }
  if (rh > 85 && t >= 80 && t <= 87) {
    hi += ((rh - 85) / 10) * ((87 - t) / 5);
  }
  return hi;
}

/** Risk bands (NWS), in Fahrenheit, with the prompt §7 safety text verbatim. */
export const HEAT_INDEX_BANDS: ReadonlyArray<{
  id: HeatIndexBandId;
  label: string;
  minF: number;
  maxF: number;
  safetyText: string;
  tone: HeatIndexBand['tone'];
}> = [
  {
    id: 'below-scale',
    label: 'Below the heat-index risk scale',
    minF: -Infinity,
    maxF: 80,
    safetyText:
      'The heat index is below 80°F, so the National Weather Service heat-risk scale does not apply. The value is still a useful apparent-temperature estimate.',
    tone: 'none',
  },
  {
    id: 'caution',
    label: 'Caution',
    minF: 80,
    maxF: 90,
    safetyText: 'Fatigue may be possible with prolonged exposure or physical activity.',
    tone: 'amber',
  },
  {
    id: 'extreme-caution',
    label: 'Extreme Caution',
    minF: 90,
    maxF: 103,
    safetyText:
      'Heat-related illness becomes more concerning with prolonged exposure or physical activity.',
    tone: 'orange',
  },
  {
    id: 'danger',
    label: 'Danger',
    minF: 103,
    maxF: 125,
    safetyText:
      'The likelihood of heat-related illness increases significantly, especially during prolonged exposure or strenuous activity.',
    tone: 'red',
  },
  {
    id: 'extreme-danger',
    label: 'Extreme Danger',
    minF: 125,
    maxF: Infinity,
    safetyText: 'The risk of severe heat-related illness is very high.',
    tone: 'darkred',
  },
];

/**
 * Classify a computed heat index into its NWS risk band. Classification is
 * strictly by the COMPUTED heat index, never by the input temperature
 * (90.7°F is Extreme Caution, not Caution).
 */
export function classifyHeatIndex(heatIndexF: number): HeatIndexBand {
  for (const band of HEAT_INDEX_BANDS) {
    if (heatIndexF >= band.minF && heatIndexF < band.maxF) {
      return { id: band.id, label: band.label, safetyText: band.safetyText, tone: band.tone };
    }
  }
  // Unreachable (the bands cover -Infinity..Infinity), but keep tsc happy.
  return {
    id: 'extreme-danger',
    label: 'Extreme Danger',
    safetyText: 'The risk of severe heat-related illness is very high.',
    tone: 'darkred',
  };
}

/** Exact °C equivalents of the NWS risk-band thresholds (converted, not rounded inconsistently). */
export const HEAT_INDEX_BANDS_C: ReadonlyArray<{ id: HeatIndexBandId; label: string; minC: number; maxC: number }> = [
  { id: 'below-scale', label: 'Below the heat-index risk scale', minC: -Infinity, maxC: 26.67 },
  { id: 'caution', label: 'Caution', minC: 26.67, maxC: 32.22 },
  { id: 'extreme-caution', label: 'Extreme Caution', minC: 32.22, maxC: 39.44 },
  { id: 'danger', label: 'Danger', minC: 39.44, maxC: 51.67 },
  { id: 'extreme-danger', label: 'Extreme Danger', minC: 51.67, maxC: Infinity },
];

/**
 * Full NWS heat-index procedure for an air temperature (°F) and relative
 * humidity (%). Applies the simple/regression method switch on the
 * AVERAGED value and the applicability ceiling. Never returns a misleading
 * bare number for out-of-range inputs — check `outOfRange` first.
 */
export function calculateHeatIndex(tempF: number, rh: number): HeatIndexResult {
  const base: Omit<HeatIndexResult, 'heatIndexF' | 'heatIndexC' | 'differenceF' | 'differenceC' | 'method' | 'outOfRange' | 'band'> = {
    tempF,
    rh,
  };

  if (tempF > MAX_APPLICABLE_TEMP_F) {
    return {
      ...base,
      heatIndexF: null,
      heatIndexC: null,
      differenceF: null,
      differenceC: null,
      method: null,
      outOfRange: true,
      outOfRangeReason: 'temperature-above-range',
      band: null,
    };
  }

  const simple = heatIndexSimple(tempF, rh);
  const avg = (simple + tempF) / 2;
  let heatIndexF: number;
  let method: HeatIndexMethod;
  if (avg < 80) {
    heatIndexF = avg;
    method = 'simple';
  } else {
    heatIndexF = heatIndexRegression(tempF, rh);
    method = 'regression';
  }

  if (heatIndexF > MAX_PLAUSIBLE_HEAT_INDEX_F) {
    return {
      ...base,
      heatIndexF: null,
      heatIndexC: null,
      differenceF: null,
      differenceC: null,
      method: null,
      outOfRange: true,
      outOfRangeReason: 'heat-index-beyond-range',
      band: classifyHeatIndex(MAX_PLAUSIBLE_HEAT_INDEX_F + 1),
    };
  }

  const heatIndexC = fahrenheitToCelsius(heatIndexF);
  return {
    ...base,
    heatIndexF,
    heatIndexC,
    differenceF: heatIndexF - tempF,
    differenceC: heatIndexC - fahrenheitToCelsius(tempF),
    method,
    outOfRange: false,
    band: classifyHeatIndex(heatIndexF),
  };
}

/** Result of validating the raw string inputs. */
export interface HeatIndexValidation {
  /** True when both inputs are present, numeric and physically possible. */
  ok: boolean;
  /** Human-readable error when ok is false. */
  error?: string;
  /** Air temperature normalised to Fahrenheit (set when ok is true). */
  tempF?: number;
  /** Relative humidity in percent (set when ok is true). */
  rh?: number;
}

/**
 * Validate the raw temperature + humidity strings. This checks INPUT sanity
 * only (missing, non-numeric, impossible, humidity outside 0–100%).
 * Applicability (temperature above the 110°F ceiling, computed heat index
 * beyond the plausible range) is decided by `calculateHeatIndex`, not here.
 */
export function validateHeatIndexInput(
  tempRaw: string,
  rhRaw: string,
  unit: TemperatureUnit,
): HeatIndexValidation {
  const tempText = tempRaw.trim();
  const rhText = rhRaw.trim();
  if (tempText === '') {
    return { ok: false, error: 'Enter the air temperature.' };
  }
  if (rhText === '') {
    return { ok: false, error: 'Enter the relative humidity.' };
  }
  const temp = Number(tempText);
  if (!Number.isFinite(temp)) {
    return { ok: false, error: 'Enter a valid number for the air temperature.' };
  }
  const rh = Number(rhText);
  if (!Number.isFinite(rh)) {
    return { ok: false, error: 'Enter a valid number for the relative humidity.' };
  }
  const absoluteZero = unit === 'F' ? ABSOLUTE_ZERO_F : ABSOLUTE_ZERO_C;
  if (temp < absoluteZero) {
    return {
      ok: false,
      error:
        unit === 'F'
          ? 'Temperature cannot be below absolute zero (−459.67°F).'
          : 'Temperature cannot be below absolute zero (−273.15°C).',
    };
  }
  if (rh < 0 || rh > 100) {
    return { ok: false, error: 'Relative humidity must be between 0% and 100%.' };
  }
  const tempF = unit === 'F' ? temp : celsiusToFahrenheit(temp);
  return { ok: true, tempF, rh };
}

/**
 * Convert a displayed temperature value when the user switches units.
 * 100°F switched to °C becomes 37.8°C — the VALUE is converted, never
 * re-interpreted as the same number in the new unit (the bug that shipped
 * on the ToolPlatform build of this same tool).
 */
export function convertTemperatureValue(value: number, from: TemperatureUnit, to: TemperatureUnit): number {
  if (from === to) return value;
  return from === 'F' ? fahrenheitToCelsius(value) : celsiusToFahrenheit(value);
}
