import { ArrowLeftRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

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
  const [category, setCategory] = useState<CategoryKey>('length');
  const [fromId, setFromId] = useState('km');
  const [toId, setToId] = useState('mi');
  const [inputValue, setInputValue] = useState('10');

  const activeCategory = CATEGORIES_UNITS[category];

  const handleCategoryChange = (next: CategoryKey) => {
    setCategory(next);
    setFromId(CATEGORIES_UNITS[next].defaultFrom);
    setToId(CATEGORIES_UNITS[next].defaultTo);
  };

  const result = useMemo(() => {
    const val = Number(inputValue);
    if (!Number.isFinite(val)) {
      return { error: 'Enter a valid numeric value to convert.', data: null };
    }

    const fromUnit = activeCategory.units.find((u) => u.id === fromId) ?? activeCategory.units[0];
    const toUnit = activeCategory.units.find((u) => u.id === toId) ?? activeCategory.units[1];
    const baseVal = fromUnit.toBase(val);

    if (category === 'temperature' && fromUnit.toBase(val) < -273.15) {
      return { error: 'Temperature cannot be below absolute zero (-273.15 °C / 0 K).', data: null };
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
  }, [activeCategory, category, fromId, toId, inputValue]);

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
            {CATEGORIES_UNITS[key].name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_1fr] gap-3 items-end">
        <div>
          <label htmlFor="uc-val" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Value
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
            From Unit
          </label>
          <select
            id="uc-from"
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
          >
            {activeCategory.units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label} ({u.symbol})
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
          aria-label="Swap units"
          title="Swap units"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700 hover:bg-slate-50 cursor-pointer"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>

        <div>
          <label htmlFor="uc-to" className="block text-sm font-semibold text-slate-900 mb-1.5">
            To Unit
          </label>
          <select
            id="uc-to"
            value={toId}
            onChange={(e) => setToId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
          >
            {activeCategory.units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label} ({u.symbol})
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
                {result.data.fromUnit.label} to {result.data.toUnit.label}
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
                {inputValue || 0} {result.data.fromUnit.symbol} = {result.data.formatted}{' '}
                {result.data.toUnit.symbol}
              </div>
            </div>
            <CopyButton text={`${result.data.formatted} ${result.data.toUnit.symbol}`} label="Copy Result" />
          </div>

          <div className="rounded-xl border border-slate-200 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">Unit</th>
                  <th className="py-2.5 px-4 font-semibold">Symbol</th>
                  <th className="py-2.5 px-4 font-semibold text-right">Equivalent Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 tabular-nums">
                {result.data.allUnits.map((u) => (
                  <tr key={u.id} className={u.id === toId ? 'bg-indigo-50/50' : ''}>
                    <td className="py-2 px-4 text-slate-800 font-medium">{u.label}</td>
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
