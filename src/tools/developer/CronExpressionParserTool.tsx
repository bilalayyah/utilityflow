import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import type { LocaleCode } from '../../locales/config';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    inputLabel: '5-Field Cron Expression',
    copyCron: 'Copy cron',
    humanTitle: 'Human-Readable Schedule',
    breakdownTitle: 'Field Breakdown',
    fieldMinute: 'Minute (0–59)',
    fieldHour: 'Hour (0–23)',
    fieldDom: 'Day of Month (1–31)',
    fieldMonth: 'Month (1–12)',
    fieldDow: 'Day of Week (0–6)',
    nextRuns: 'Next {count} Scheduled Runs (Local Time)',
    noRuns: 'No matching run found within the next 366 days.',
    fieldsError: 'Standard cron expects 5 fields (minute hour day-of-month month day-of-week). Found {count}.',
    emptySegment: 'Empty segment in "{token}"',
    invalidStep: 'Invalid step "{step}" in "{token}"',
    outOfRange: 'Value out of range ({min}–{max}) in "{token}"',
    invalidCron: 'Invalid cron expression.',
    everyMinutes: 'Every {n} minutes',
    minuteZeroHour: 'At minute 0 of every hour',
    atTime: 'At {time}',
    atFields: 'At {a}, {b}',
    dayEveryDay: 'every day',
    dayWeekdays: 'on weekdays (Monday–Friday)',
    dayOfMonth: 'on day {day} of the month',
    dayDow: 'on {dow}',
    dayBoth: 'on day {day} or {dow}',
    monthIn: ' in {months}',
  },
  es: {
    inputLabel: 'Expresión cron de 5 campos',
    copyCron: 'Copiar cron',
    humanTitle: 'Horario en lenguaje sencillo',
    breakdownTitle: 'Desglose por campo',
    fieldMinute: 'Minuto (0–59)',
    fieldHour: 'Hora (0–23)',
    fieldDom: 'Día del mes (1–31)',
    fieldMonth: 'Mes (1–12)',
    fieldDow: 'Día de la semana (0–6)',
    nextRuns: 'Próximas {count} ejecuciones programadas (hora local)',
    noRuns: 'No se encontró ninguna ejecución coincidente en los próximos 366 días.',
    fieldsError: 'El cron estándar espera 5 campos (minuto hora día-del-mes mes día-de-la-semana). Se encontraron {count}.',
    emptySegment: 'Segmento vacío en "{token}"',
    invalidStep: 'Paso no válido "{step}" en "{token}"',
    outOfRange: 'Valor fuera de rango ({min}–{max}) en "{token}"',
    invalidCron: 'Expresión cron no válida.',
    everyMinutes: 'Cada {n} minutos',
    minuteZeroHour: 'En el minuto 0 de cada hora',
    atTime: 'A las {time}',
    atFields: 'En {a}, {b}',
    dayEveryDay: 'todos los días',
    dayWeekdays: 'entre semana (lunes a viernes)',
    dayOfMonth: 'el día {day} del mes',
    dayDow: 'los {dow}',
    dayBoth: 'el día {day} o {dow}',
    monthIn: ' en {months}',
  },
  pt: {
    inputLabel: 'Expressão cron de 5 campos',
    copyCron: 'Copiar cron',
    humanTitle: 'Agenda em linguagem simples',
    breakdownTitle: 'Detalhamento por campo',
    fieldMinute: 'Minuto (0–59)',
    fieldHour: 'Hora (0–23)',
    fieldDom: 'Dia do mês (1–31)',
    fieldMonth: 'Mês (1–12)',
    fieldDow: 'Dia da semana (0–6)',
    nextRuns: 'Próximas {count} execuções agendadas (hora local)',
    noRuns: 'Nenhuma execução correspondente encontrada nos próximos 366 dias.',
    fieldsError: 'O cron padrão espera 5 campos (minuto hora dia-do-mês mês dia-da-semana). Encontrados {count}.',
    emptySegment: 'Segmento vazio em "{token}"',
    invalidStep: 'Passo inválido "{step}" em "{token}"',
    outOfRange: 'Valor fora do intervalo ({min}–{max}) em "{token}"',
    invalidCron: 'Expressão cron inválida.',
    everyMinutes: 'A cada {n} minutos',
    minuteZeroHour: 'No minuto 0 de cada hora',
    atTime: 'Às {time}',
    atFields: 'Em {a}, {b}',
    dayEveryDay: 'todos os dias',
    dayWeekdays: 'em dias úteis (segunda a sexta)',
    dayOfMonth: 'no dia {day} do mês',
    dayDow: 'em {dow}',
    dayBoth: 'no dia {day} ou {dow}',
    monthIn: ' em {months}',
  },
  fr: {
    inputLabel: 'Expression cron à 5 champs',
    copyCron: 'Copier le cron',
    humanTitle: 'Planning en langage clair',
    breakdownTitle: 'Détail par champ',
    fieldMinute: 'Minute (0–59)',
    fieldHour: 'Heure (0–23)',
    fieldDom: 'Jour du mois (1–31)',
    fieldMonth: 'Mois (1–12)',
    fieldDow: 'Jour de la semaine (0–6)',
    nextRuns: 'Prochaines {count} exécutions planifiées (heure locale)',
    noRuns: 'Aucune exécution correspondante trouvée dans les 366 prochains jours.',
    fieldsError: 'Le cron standard attend 5 champs (minute heure jour-du-mois mois jour-de-la-semaine). {count} trouvés.',
    emptySegment: 'Segment vide dans « {token} »',
    invalidStep: 'Pas invalide « {step} » dans « {token} »',
    outOfRange: 'Valeur hors limites ({min}–{max}) dans « {token} »',
    invalidCron: 'Expression cron invalide.',
    everyMinutes: 'Toutes les {n} minutes',
    minuteZeroHour: 'À la minute 0 de chaque heure',
    atTime: 'À {time}',
    atFields: 'À {a}, {b}',
    dayEveryDay: 'tous les jours',
    dayWeekdays: 'en semaine (lundi–vendredi)',
    dayOfMonth: 'le {day} du mois',
    dayDow: 'le {dow}',
    dayBoth: 'le {day} ou {dow}',
    monthIn: ' en {months}',
  },
  de: {
    inputLabel: 'Cron-Ausdruck mit 5 Feldern',
    copyCron: 'Cron kopieren',
    humanTitle: 'Zeitplan in verständlicher Sprache',
    breakdownTitle: 'Aufschlüsselung nach Feldern',
    fieldMinute: 'Minute (0–59)',
    fieldHour: 'Stunde (0–23)',
    fieldDom: 'Tag des Monats (1–31)',
    fieldMonth: 'Monat (1–12)',
    fieldDow: 'Wochentag (0–6)',
    nextRuns: 'Nächste {count} geplante Ausführungen (Ortszeit)',
    noRuns: 'Keine passende Ausführung in den nächsten 366 Tagen gefunden.',
    fieldsError: 'Standard-Cron erwartet 5 Felder (Minute Stunde Tag-des-Monats Monat Wochentag). Gefunden: {count}.',
    emptySegment: 'Leeres Segment in „{token}“',
    invalidStep: 'Ungültiger Schritt „{step}“ in „{token}“',
    outOfRange: 'Wert außerhalb des Bereichs ({min}–{max}) in „{token}“',
    invalidCron: 'Ungültiger Cron-Ausdruck.',
    everyMinutes: 'Alle {n} Minuten',
    minuteZeroHour: 'Zur Minute 0 jeder Stunde',
    atTime: 'Um {time}',
    atFields: 'Um {a}, {b}',
    dayEveryDay: 'jeden Tag',
    dayWeekdays: 'werktags (Montag–Freitag)',
    dayOfMonth: 'am {day}. Tag des Monats',
    dayDow: 'am {dow}',
    dayBoth: 'am {day}. oder {dow}',
    monthIn: ' im {months}',
  },
  it: {
    inputLabel: 'Espressione cron a 5 campi',
    copyCron: 'Copia cron',
    humanTitle: 'Pianificazione in linguaggio semplice',
    breakdownTitle: 'Dettaglio per campo',
    fieldMinute: 'Minuto (0–59)',
    fieldHour: 'Ora (0–23)',
    fieldDom: 'Giorno del mese (1–31)',
    fieldMonth: 'Mese (1–12)',
    fieldDow: 'Giorno della settimana (0–6)',
    nextRuns: 'Prossime {count} esecuzioni programmate (ora locale)',
    noRuns: 'Nessuna esecuzione corrispondente trovata nei prossimi 366 giorni.',
    fieldsError: 'Il cron standard prevede 5 campi (minuto ora giorno-del-mese mese giorno-della-settimana). Trovati: {count}.',
    emptySegment: 'Segmento vuoto in "{token}"',
    invalidStep: 'Passo non valido "{step}" in "{token}"',
    outOfRange: 'Valore fuori intervallo ({min}–{max}) in "{token}"',
    invalidCron: 'Espressione cron non valida.',
    everyMinutes: 'Ogni {n} minuti',
    minuteZeroHour: 'Al minuto 0 di ogni ora',
    atTime: 'Alle {time}',
    atFields: 'Alle {a}, {b}',
    dayEveryDay: 'ogni giorno',
    dayWeekdays: 'nei giorni feriali (lunedì–venerdì)',
    dayOfMonth: 'il giorno {day} del mese',
    dayDow: 'il {dow}',
    dayBoth: 'il giorno {day} o il {dow}',
    monthIn: ' in {months}',
  },
  id: {
    inputLabel: 'Ekspresi Cron 5 Bidang',
    copyCron: 'Salin cron',
    humanTitle: 'Jadwal yang Mudah Dibaca Manusia',
    breakdownTitle: 'Rincian Bidang',
    fieldMinute: 'Menit (0–59)',
    fieldHour: 'Jam (0–23)',
    fieldDom: 'Hari dalam Bulan (1–31)',
    fieldMonth: 'Bulan (1–12)',
    fieldDow: 'Hari dalam Minggu (0–6)',
    nextRuns: '{count} Jadwal Berikutnya (Waktu Lokal)',
    noRuns: 'Tidak ditemukan jadwal yang cocok dalam 366 hari ke depan.',
    fieldsError: 'Cron standar membutuhkan 5 bidang (menit jam hari-dalam-bulan bulan hari-dalam-minggu). Ditemukan {count}.',
    emptySegment: 'Segmen kosong dalam "{token}"',
    invalidStep: 'Langkah "{step}" tidak valid dalam "{token}"',
    outOfRange: 'Nilai di luar rentang ({min}–{max}) dalam "{token}"',
    invalidCron: 'Ekspresi cron tidak valid.',
    everyMinutes: 'Setiap {n} menit',
    minuteZeroHour: 'Pada menit 0 setiap jam',
    atTime: 'Pada {time}',
    atFields: 'Pada {a}, {b}',
    dayEveryDay: 'setiap hari',
    dayWeekdays: 'pada hari kerja (Senin–Jumat)',
    dayOfMonth: 'pada hari {day} dalam sebulan',
    dayDow: 'pada {dow}',
    dayBoth: 'pada hari {day} atau {dow}',
    monthIn: ' pada {months}',
  },
  ru: {
    inputLabel: 'Cron-выражение из 5 полей',
    copyCron: 'Копировать cron',
    humanTitle: 'Расписание понятным языком',
    breakdownTitle: 'Разбор полей',
    fieldMinute: 'Минута (0–59)',
    fieldHour: 'Час (0–23)',
    fieldDom: 'День месяца (1–31)',
    fieldMonth: 'Месяц (1–12)',
    fieldDow: 'День недели (0–6)',
    nextRuns: 'Следующие {count} запусков (местное время)',
    noRuns: 'Подходящих запусков не найдено в ближайшие 366 дней.',
    fieldsError: 'Стандартный cron ожидает 5 полей (минута час день-месяца месяц день-недели). Найдено: {count}.',
    emptySegment: 'Пустой сегмент в «{token}»',
    invalidStep: 'Недопустимый шаг «{step}» в «{token}»',
    outOfRange: 'Значение вне диапазона ({min}–{max}) в «{token}»',
    invalidCron: 'Недопустимое cron-выражение.',
    everyMinutes: 'Каждые {n} минут',
    minuteZeroHour: 'В 0 минут каждого часа',
    atTime: 'В {time}',
    atFields: 'В {a}, {b}',
    dayEveryDay: 'каждый день',
    dayWeekdays: 'по будням (понедельник–пятница)',
    dayOfMonth: 'в {day}-й день месяца',
    dayDow: 'в {dow}',
    dayBoth: 'в день {day} или {dow}',
    monthIn: ' в {months}',
  },
};

const PRESETS = {
  en: [
    { label: 'Every 5 minutes', expr: '*/5 * * * *' },
    { label: 'Every hour', expr: '0 * * * *' },
    { label: 'Daily at midnight', expr: '0 0 * * *' },
    { label: 'Weekdays at 9:00 AM', expr: '0 9 * * 1-5' },
    { label: '1st of month at 08:30', expr: '30 8 1 * *' },
  ],
  es: [
    { label: 'Cada 5 minutos', expr: '*/5 * * * *' },
    { label: 'Cada hora', expr: '0 * * * *' },
    { label: 'Diario a medianoche', expr: '0 0 * * *' },
    { label: 'Entre semana a las 9:00', expr: '0 9 * * 1-5' },
    { label: 'El 1 del mes a las 08:30', expr: '30 8 1 * *' },
  ],
  pt: [
    { label: 'A cada 5 minutos', expr: '*/5 * * * *' },
    { label: 'A cada hora', expr: '0 * * * *' },
    { label: 'Diariamente à meia-noite', expr: '0 0 * * *' },
    { label: 'Dias úteis às 9:00', expr: '0 9 * * 1-5' },
    { label: 'Dia 1 do mês às 08:30', expr: '30 8 1 * *' },
  ],
  fr: [
    { label: 'Toutes les 5 minutes', expr: '*/5 * * * *' },
    { label: 'Toutes les heures', expr: '0 * * * *' },
    { label: 'Tous les jours à minuit', expr: '0 0 * * *' },
    { label: 'En semaine à 9:00', expr: '0 9 * * 1-5' },
    { label: 'Le 1er du mois à 08:30', expr: '30 8 1 * *' },
  ],
  de: [
    { label: 'Alle 5 Minuten', expr: '*/5 * * * *' },
    { label: 'Jede Stunde', expr: '0 * * * *' },
    { label: 'Täglich um Mitternacht', expr: '0 0 * * *' },
    { label: 'Werktags um 9:00 Uhr', expr: '0 9 * * 1-5' },
    { label: 'Am 1. des Monats um 08:30', expr: '30 8 1 * *' },
  ],
  it: [
    { label: 'Ogni 5 minuti', expr: '*/5 * * * *' },
    { label: 'Ogni ora', expr: '0 * * * *' },
    { label: 'Ogni giorno a mezzanotte', expr: '0 0 * * *' },
    { label: 'Nei giorni feriali alle 9:00', expr: '0 9 * * 1-5' },
    { label: 'Il 1° del mese alle 08:30', expr: '30 8 1 * *' },
  ],
  id: [
    { label: 'Setiap 5 menit', expr: '*/5 * * * *' },
    { label: 'Setiap jam', expr: '0 * * * *' },
    { label: 'Setiap hari tengah malam', expr: '0 0 * * *' },
    { label: 'Hari kerja pukul 9:00', expr: '0 9 * * 1-5' },
    { label: 'Tanggal 1 setiap bulan pukul 08:30', expr: '30 8 1 * *' },
  ],
  ru: [
    { label: 'Каждые 5 минут', expr: '*/5 * * * *' },
    { label: 'Каждый час', expr: '0 * * * *' },
    { label: 'Ежедневно в полночь', expr: '0 0 * * *' },
    { label: 'По будням в 9:00', expr: '0 9 * * 1-5' },
    { label: '1-го числа месяца в 08:30', expr: '30 8 1 * *' },
  ],
} as const;

const MONTH_NAMES: Record<string, number> = {
  JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6,
  JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12,
};

const DOW_NAMES: Record<string, number> = {
  SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6,
};

const DOW_LABELS = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  es: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  pt: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  it: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
  id: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
} as const;
const MONTH_LABELS = {
  en: [
    '', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
  es: [
    '', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ],
  pt: [
    '', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
  ],
  fr: [
    '', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
  ],
  de: [
    '', 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
  ],
  it: [
    '', 'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
    'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',
  ],
  id: [
    '', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
  ],
  ru: [
    '', 'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',
  ],
} as const;

const UNIT_WORDS = {
  en: { minute: 'minute', hour: 'hour', day: 'day', month: 'month', weekday: 'weekday' },
  es: { minute: 'minuto', hour: 'hora', day: 'día', month: 'mes', weekday: 'día de la semana' },
  pt: { minute: 'minuto', hour: 'hora', day: 'dia', month: 'mês', weekday: 'dia da semana' },
  fr: { minute: 'minute', hour: 'heure', day: 'jour', month: 'mois', weekday: 'jour de la semaine' },
  de: { minute: 'Minute', hour: 'Stunde', day: 'Tag', month: 'Monat', weekday: 'Wochentag' },
  it: { minute: 'minuto', hour: 'ora', day: 'giorno', month: 'mese', weekday: 'giorno della settimana' },
  id: { minute: 'menit', hour: 'jam', day: 'hari', month: 'bulan', weekday: 'hari kerja' },
  ru: { minute: 'минута', hour: 'час', day: 'день', month: 'месяц', weekday: 'будний день' },
} as const;
const UNIT_PLURALS = {
  en: { minute: 'minutes', hour: 'hours', day: 'days', month: 'months', weekday: 'weekdays' },
  es: { minute: 'minutos', hour: 'horas', day: 'días', month: 'meses', weekday: 'días de la semana' },
  pt: { minute: 'minutos', hour: 'horas', day: 'dias', month: 'meses', weekday: 'dias da semana' },
  fr: { minute: 'minutes', hour: 'heures', day: 'jours', month: 'mois', weekday: 'jours de la semaine' },
  de: { minute: 'Minuten', hour: 'Stunden', day: 'Tage', month: 'Monate', weekday: 'Wochentage' },
  it: { minute: 'minuti', hour: 'ore', day: 'giorni', month: 'mesi', weekday: 'giorni della settimana' },
  id: { minute: 'menit', hour: 'jam', day: 'hari', month: 'bulan', weekday: 'hari kerja' },
  ru: { minute: 'минуты', hour: 'часы', day: 'дни', month: 'месяцы', weekday: 'будние дни' },
} as const;
type CronUnit = keyof typeof UNIT_WORDS.en;

function parseFieldToken(
  token: string,
  min: number,
  max: number,
  locale: LocaleCode,
  nameMap?: Record<string, number>
): number[] {
  const s = STRINGS[locale];
  const replaceNames = (raw: string) => {
    const upper = raw.toUpperCase();
    if (nameMap && upper in nameMap) return String(nameMap[upper]);
    return upper;
  };

  const values = new Set<number>();
  const parts = token.split(',');

  for (const part of parts) {
    if (!part) throw new Error(s.emptySegment.replace('{token}', token));
    const [rangePart, stepPart] = part.split('/');
    const step = stepPart !== undefined ? Number(stepPart) : 1;
    if (!Number.isInteger(step) || step < 1) {
      throw new Error(s.invalidStep.replace('{step}', String(stepPart)).replace('{token}', token));
    }

    let start = min;
    let end = max;

    if (rangePart === '*') {
      start = min;
      end = max;
    } else if (rangePart.includes('-')) {
      const [sRaw, eRaw] = rangePart.split('-');
      start = Number(replaceNames(sRaw));
      end = Number(replaceNames(eRaw));
    } else {
      const single = Number(replaceNames(rangePart));
      start = single;
      end = stepPart !== undefined ? max : single;
    }

    if (
      !Number.isInteger(start) ||
      !Number.isInteger(end) ||
      start < min ||
      end > max ||
      start > end
    ) {
      throw new Error(
        s.outOfRange.replace('{min}', String(min)).replace('{max}', String(max)).replace('{token}', token)
      );
    }

    for (let v = start; v <= end; v += step) {
      values.add(v);
    }
  }

  return Array.from(values).sort((a, b) => a - b);
}

function describeField(
  raw: string,
  unit: CronUnit,
  locale: LocaleCode,
  formatter?: (n: number) => string
): string {
  const u = UNIT_WORDS[locale][unit];
  if (raw === '*') {
    if (locale === 'id') return `setiap ${u}`;
    if (locale === 'ru') return unit === 'minute' ? 'каждая минута' : `каждый ${u}`;
    return locale === 'es' || locale === 'pt' ? `cada ${u}` : locale === 'fr' ? `chaque ${u}` : locale === 'de' ? `alle ${UNIT_PLURALS[locale][unit]}` : locale === 'it' ? `ogni ${u}` : `every ${u}`;
  }
  if (raw.startsWith('*/')) {
    const prefix = locale === 'es' || locale === 'pt' ? 'cada' : locale === 'fr' ? 'chaque' : locale === 'de' ? 'alle' : locale === 'it' ? 'ogni' : locale === 'id' ? 'setiap' : locale === 'ru' ? 'каждые' : 'every';
    return `${prefix} ${raw.slice(2)} ${UNIT_PLURALS[locale][unit]}`;
  }
  if (formatter) {
    return raw
      .split(',')
      .map((chunk) => {
        if (/^\d+$/.test(chunk)) return formatter(Number(chunk));
        return chunk;
      })
      .join(', ');
  }
  return `${u} ${raw}`;
}

export default function CronExpressionParserTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [expression, setExpression] = useState('0 9 * * 1-5');

  const analysis = useMemo(() => {
    const trimmed = expression.trim().replace(/\s+/g, ' ');
    const fields = trimmed.split(' ');
    if (fields.length !== 5) {
      return {
        error: s.fieldsError.replace('{count}', String(fields.length)),
        summary: '',
        breakdown: [] as Array<{ label: string; raw: string; meaning: string }>,
        nextRuns: [] as Date[],
      };
    }

    try {
      const [minF, hourF, domF, monF, dowF] = fields;
      const mins = parseFieldToken(minF, 0, 59, locale);
      const hours = parseFieldToken(hourF, 0, 23, locale);
      const doms = parseFieldToken(domF, 1, 31, locale);
      const months = parseFieldToken(monF, 1, 12, locale, MONTH_NAMES);
      const dows = parseFieldToken(dowF.replace(/\b7\b/g, '0'), 0, 6, locale, DOW_NAMES);

      const minSet = new Set(mins);
      const hourSet = new Set(hours);
      const domSet = new Set(doms);
      const monthSet = new Set(months);
      const dowSet = new Set(dows);

      const domWildcard = domF === '*';
      const dowWildcard = dowF === '*';

      const nextRuns: Date[] = [];
      const cursor = new Date();
      cursor.setSeconds(0, 0);
      cursor.setMinutes(cursor.getMinutes() + 1);

      // Search up to 366 days (527,040 minutes) efficiently by skipping days
      let checkedDays = 0;
      while (nextRuns.length < 8 && checkedDays < 366) {
        const month = cursor.getMonth() + 1;
        const dom = cursor.getDate();
        const dow = cursor.getDay();

        const dayMatches =
          domWildcard && dowWildcard
            ? true
            : domWildcard
            ? dowSet.has(dow)
            : dowWildcard
            ? domSet.has(dom)
            : domSet.has(dom) || dowSet.has(dow);

        if (monthSet.has(month) && dayMatches) {
          for (const h of hours) {
            if (h < cursor.getHours()) continue;
            for (const m of mins) {
              if (h === cursor.getHours() && m < cursor.getMinutes()) continue;
              const candidate = new Date(
                cursor.getFullYear(),
                cursor.getMonth(),
                cursor.getDate(),
                h,
                m,
                0,
                0
              );
              nextRuns.push(candidate);
              if (nextRuns.length >= 8) break;
            }
            if (nextRuns.length >= 8) break;
          }
        }

        cursor.setDate(cursor.getDate() + 1);
        cursor.setHours(0, 0, 0, 0);
        checkedDays += 1;
      }

      const timeSummary =
        minF.startsWith('*/') && hourF === '*'
          ? s.everyMinutes.replace('{n}', minF.slice(2))
          : minF === '0' && hourF === '*'
          ? s.minuteZeroHour
          : minF !== '*' && hourF !== '*' && !minF.includes('/') && !hourF.includes('/')
          ? s.atTime.replace('{time}', `${String(hours[0]).padStart(2, '0')}:${String(mins[0]).padStart(2, '0')}`)
          : s.atFields.replace('{a}', describeField(minF, 'minute', locale)).replace('{b}', describeField(hourF, 'hour', locale));

      const daySummary =
        domF === '*' && dowF === '*'
          ? s.dayEveryDay
          : dowF === '1-5' && domF === '*'
          ? s.dayWeekdays
          : domF !== '*' && dowF === '*'
          ? s.dayOfMonth.replace('{day}', domF)
          : domF === '*' && dowF !== '*'
          ? s.dayDow.replace('{dow}', describeField(dowF, 'weekday', locale, (n) => DOW_LABELS[locale][n] ?? String(n)))
          : s.dayBoth.replace('{day}', domF).replace('{dow}', describeField(dowF, 'weekday', locale, (n) => DOW_LABELS[locale][n] ?? String(n)));

      const monthSummary =
        monF === '*' ? '' : s.monthIn.replace('{months}', describeField(monF, 'month', locale, (n) => MONTH_LABELS[locale][n] ?? String(n)));

      return {
        error: '',
        summary: `${timeSummary}, ${daySummary}${monthSummary}.`,
        breakdown: [
          { label: s.fieldMinute, raw: minF, meaning: describeField(minF, 'minute', locale) },
          { label: s.fieldHour, raw: hourF, meaning: describeField(hourF, 'hour', locale) },
          { label: s.fieldDom, raw: domF, meaning: describeField(domF, 'day', locale) },
          {
            label: s.fieldMonth,
            raw: monF,
            meaning: describeField(monF, 'month', locale, (n) => MONTH_LABELS[locale][n] ?? String(n)),
          },
          {
            label: s.fieldDow,
            raw: dowF,
            meaning: describeField(dowF, 'weekday', locale, (n) => DOW_LABELS[locale][n] ?? String(n)),
          },
        ],
        nextRuns,
        // keep unused sets referenced cleanly
        _validCount: minSet.size + hourSet.size,
      };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : s.invalidCron,
        summary: '',
        breakdown: [],
        nextRuns: [],
      };
    }
  }, [expression, locale, s]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex-1 min-w-[260px]">
          <label htmlFor="cron-expr" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.inputLabel}
          </label>
          <input
            id="cron-expr"
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="* * * * *"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-mono text-base text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
        <CopyButton text={expression.trim()} label={s.copyCron} copiedLabel={t.common.copied} />
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS[locale].map((preset) => (
          <button
            key={preset.expr}
            type="button"
            onClick={() => setExpression(preset.expr)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              expression.trim() === preset.expr
                ? 'bg-indigo-600 text-white'
                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {analysis.error ? (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {analysis.error}
        </div>
      ) : (
        <>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
            <div className="text-xs font-semibold text-indigo-700 mb-1">{s.humanTitle}</div>
            <p className="text-base sm:text-lg font-semibold text-slate-900">{analysis.summary}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">{s.breakdownTitle}</h3>
              <dl className="divide-y divide-slate-100 text-xs sm:text-sm">
                {analysis.breakdown.map((item) => (
                  <div key={item.label} className="py-2 flex items-center justify-between gap-3">
                    <dt className="text-slate-600">{item.label}</dt>
                    <dd className="text-right">
                      <span className="font-mono font-semibold text-slate-900 mr-2">{item.raw}</span>
                      <span className="text-slate-500">({item.meaning})</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                {s.nextRuns.replace('{count}', String(analysis.nextRuns.length))}
              </h3>
              {analysis.nextRuns.length > 0 ? (
                <ol className="space-y-1.5 font-mono text-xs sm:text-sm text-slate-800 tabular-nums">
                  {analysis.nextRuns.map((dt, idx) => (
                    <li key={dt.toISOString()} className="flex items-center justify-between">
                      <span className="text-slate-400">#{idx + 1}</span>
                      <span>{dt.toLocaleString(locale)}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-sm text-slate-500">
                  {s.noRuns}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
