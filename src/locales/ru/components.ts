import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the ru locale.
 * GENERATED — assembled from .restructure-work fragments (group1/group2 JSON
 * + group2-ts TypeScript for function-valued entries). Do not hand-edit;
 * the source of truth is the per-component STRINGS_EN tables plus these
 * per-language fragments. Loaded only when the ru locale is selected.
 */
export const ruComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "Текст для изменения регистра",
      "placeholder": "Введите или вставьте текст, затем нажмите любую кнопку преобразования регистра ниже...",
      "copyResult": "Копировать результат"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Пишите чёткий и лаконичный текст, который укладывается в ограничения символов платформ и не обрывается неловко в результатах поиска или лентах соцсетей.",
      "withSpaces": "С пробелами",
      "withoutSpaces": "Без пробелов",
      "words": "Слова",
      "letters": "Буквы",
      "digits": "Цифры",
      "utf8Bytes": "Байты UTF-8",
      "copyText": "Копировать текст",
      "textToMeasure": "Текст для измерения длины в символах",
      "placeholder": "Введите или вставьте текст, чтобы узнать точное число символов, размер в байтах и лимиты платформ...",
      "whitespaceChars": "Пробельные символы",
      "lines": "Строки",
      "platformLimitsTitle": "Лимиты символов платформ и SEO",
      "over": "превышение",
      "left": "осталось",
      "platformLimits": [
        {
          "name": "SEO-заголовок Meta",
          "note": "Рекомендуемая длина заголовка в выдаче Google"
        },
        {
          "name": "SEO-описание Meta",
          "note": "Стандартный порог сниппета на компьютере"
        },
        {
          "name": "Сегмент SMS",
          "note": "Одно SMS-сообщение GSM-7"
        },
        {
          "name": "Пост X / Twitter",
          "note": "Стандартная длина поста"
        },
        {
          "name": "Предпросмотр подписи Instagram",
          "note": "Видно до обрезки «Ещё»"
        },
        {
          "name": "Пост LinkedIn",
          "note": "Максимальное стандартное обновление ленты"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Найти",
      "replaceWith": "Заменить на",
      "findPlaceholder": "Текст для поиска...",
      "replacePlaceholder": "Текст для замены...",
      "caseSensitive": "С учётом регистра",
      "wholeWordOnly": "Только целое слово",
      "useRegex": "Использовать регулярное выражение (RegExp)",
      "regexError": "Ошибка регулярного выражения:",
      "invalidRegex": "Недопустимое регулярное выражение.",
      "sourceText": "Исходный текст",
      "updatedOutput": "Обновлённый результат",
      "match": "совпадение",
      "matches": "совпадений",
      "replaced": "заменено",
      "sourcePlaceholder": "Вставьте текст для поиска и замены...",
      "outputPlaceholder": "Здесь появится предпросмотр заменённого текста...",
      "copyResult": "Копировать результат"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Префикс строки",
      "lineSuffix": "Суффикс строки",
      "startNumber": "Начальный номер",
      "numberSeparator": "Разделитель номера",
      "addLineNumbers": "Добавить номера строк",
      "zeroPad": "Дополнять числа нулём (01, 02)",
      "skipEmptyLines": "Пропускать пустые строки",
      "inputLines": "Входные строки",
      "formattedLines": "Отформатированные строки",
      "copyResult": "Копировать результат",
      "inputPlaceholder": "Вставьте по одному значению или строке в ряду...",
      "outputPlaceholder": "Здесь появятся пронумерованные или обёрнутые строки..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Количество",
      "unit": "Единица",
      "unitLabels": {
        "paragraphs": "абзацев",
        "sentences": "предложений",
        "words": "слов"
      },
      "startClassic": "Начать с «Lorem ipsum»",
      "wrapHtml": "Обернуть в теги <p>",
      "words": "слов",
      "characters": "символов",
      "regenerate": "Сгенерировать заново",
      "copyPlaceholder": "Копировать текст-заполнитель",
      "generatedText": "Сгенерированный текст-заполнитель"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# Заметки о выпуске UtilityFlow\n\nДобро пожаловать в **Markdown Previewer** — быстрый редактор на стороне клиента с живым экспортом в *HTML*.\n\n## Основные возможности\n\n- Мгновенное форматирование заголовков, списков и ссылок\n- Безопасное экранирование HTML без загрузки на сервер\n- Копирование и скачивание исходного HTML в один клик\n\n> Держите документацию рядом с работой и проверяйте структуру перед публикацией.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nПодробнее — на [UtilityFlow](/tools/).",
      "renderedPreview": "Отрендеренный предпросмотр",
      "rawHtml": "Исходный HTML",
      "exportHtml": "Экспорт HTML",
      "copyHtml": "Копировать HTML",
      "markdownSource": "Исходник Markdown",
      "livePreview": "Живой предпросмотр",
      "compiledHtml": "Скомпилированный HTML",
      "compiledHtmlAria": "Исходный код скомпилированного HTML",
      "inputPlaceholder": "Напишите Markdown (# Заголовок, **жирный**, - список, [ссылка](https://...))...",
      "emptyPreview": "Предпросмотр появится, когда вы начнёте вводить Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "Понятный технический текст уважает время читателя. Используйте конкретные существительные и активные глаголы, когда это возможно, чтобы сложные инструкции было легко выполнять.\n\nДлинные предложения, перегруженные вложенными придаточными, заставляют читателей перечитывать абзацы. Разбивка плотных объяснений на более короткие шаги делает документацию быстрее для просмотра и проще в применении.",
      "level": "Уровень:",
      "textToCheck": "Текст для проверки читаемости",
      "placeholder": "Вставьте статью, эссе или текст лендинга, чтобы вычислить показатель лёгкости чтения Флеша и оценки уровня класса...",
      "fleschEase": "Лёгкость чтения по Флешу",
      "fleschKincaid": "Класс по Флешу — Кинкейду",
      "usGrade": "Уровень класса школы США",
      "gunningFog": "Индекс туманности Ганнинга",
      "yearsEducation": "Лет образования",
      "smog": "Индекс SMOG",
      "polysyllable": "Сложность многосложных слов",
      "structuralBreakdown": "Структурный разбор",
      "wordsSentences": "Слова / предложения",
      "avgSentenceLength": "Средняя длина предложения",
      "words": "слов",
      "avgSyllablesPerWord": "Среднее число слогов в слове",
      "complexWords": "Сложные слова (3+ слога)",
      "longWordsDetected": "Обнаружены длинные слова (3+ слога)",
      "noLongWords": "В этом отрывке не найдено слов из 3+ слогов.",
      "emptyState": "Введите хотя бы одно предложение выше, чтобы увидеть формулы читаемости и структурные соотношения.",
      "levels": [
        {
          "level": "Очень легко",
          "audience": "5-й класс (10–11 лет)"
        },
        {
          "level": "Легко",
          "audience": "6-й класс (11–12 лет)"
        },
        {
          "level": "Довольно легко",
          "audience": "7-й класс (12–13 лет)"
        },
        {
          "level": "Стандартно",
          "audience": "8–9-й класс (13–15 лет)"
        },
        {
          "level": "Довольно сложно",
          "audience": "10–12-й класс"
        },
        {
          "level": "Сложно",
          "audience": "Уровень колледжа"
        },
        {
          "level": "Очень сложно",
          "audience": "Выпускник колледжа / специалист"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "С учётом регистра",
      "trimWhitespace": "Обрезать пробелы",
      "removeEmptyLines": "Удалять пустые строки",
      "sortAlphabetically": "Сортировать по алфавиту",
      "originalLines": "Исходные строки",
      "lines": "строк",
      "uniqueLines": "Уникальные строки",
      "unique": "уникальных",
      "removed": "удалено",
      "inputPlaceholder": "Вставьте список — по одному элементу в строке...",
      "outputPlaceholder": "Здесь появится результат без дубликатов..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "С учётом регистра",
      "ignoreBlankLines": "Игнорировать пустые строки",
      "removeDuplicates": "Удалять дубликаты",
      "inputLines": "Входные строки",
      "sortedLines": "Отсортированные строки",
      "copySorted": "Копировать отсортированное",
      "inputPlaceholder": "Введите по одному элементу в строке...",
      "outputPlaceholder": "Здесь появится отсортированный результат...",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "А → Я"
        },
        {
          "id": "alpha-desc",
          "label": "Я → А"
        },
        {
          "id": "natural",
          "label": "Естественная (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Сначала короткие"
        },
        {
          "id": "length-desc",
          "label": "Сначала длинные"
        },
        {
          "id": "reverse-order",
          "label": "Обратный порядок"
        },
        {
          "id": "shuffle",
          "label": "Перемешать"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Игнорировать пробелы",
      "ignoreCase": "Игнорировать регистр",
      "originalText": "Исходный текст",
      "modifiedText": "Изменённый текст",
      "originalPlaceholder": "Вставьте исходный текст...",
      "modifiedPlaceholder": "Вставьте обновлённый текст...",
      "lineComparison": "Сравнение строк",
      "added": "добавлено",
      "removed": "удалено",
      "unchanged": "без изменений",
      "emptyState": "Введите текст в оба поля выше, чтобы сравнить добавленные и удалённые строки."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Первая строка текста\nВторая строка текста\nТретья строка текста",
      "originalText": "Исходный текст",
      "reversedOutput": "Перевёрнутый результат",
      "inputPlaceholder": "Введите текст или строки для переворота...",
      "outputPlaceholder": "Здесь появится перевёрнутый текст...",
      "modes": [
        {
          "id": "characters",
          "label": "Перевернуть символы"
        },
        {
          "id": "words",
          "label": "Перевернуть порядок слов"
        },
        {
          "id": "each-word",
          "label": "Перевернуть каждое слово"
        },
        {
          "id": "lines",
          "label": "Перевернуть порядок строк"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 лучших способов форматировать JSON онлайн!\nCafé & Crème: руководство на 2026 год\nКак создать быстрый статический сайт на Cloudflare Pages",
      "hyphen": "Дефис (-)",
      "underscore": "Подчёркивание (_)",
      "forceLowercase": "Принудительно в нижний регистр",
      "stripStopWords": "Удалять общие стоп-слова",
      "titlesLabel": "Заголовки или фразы (по одному в строке для пакетного режима)",
      "inputPlaceholder": "Введите заголовок блога, название продукта или список заголовков...",
      "generatedSlugs": "Сгенерированные URL-слаги",
      "copySlugs": "Копировать слаги",
      "outputPlaceholder": "чистые-url-слаги-появятся-здесь"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Первая   строка с   лишними   пробелами.   \n\n   Вторая строка   с   табуляцией\tи   пробелами.\n\n\nТретья   строка здесь.   ",
      "collapseSpaces": "Схлопывать несколько пробелов",
      "trimEdges": "Обрезать края строк",
      "tabsToSpaces": "Преобразовывать табуляцию в пробелы",
      "lineBreaks": "Переносы строк:",
      "keepBreaks": "Сохранять переносы строк",
      "removeBlankLines": "Удалять пустые строки",
      "replaceWithSpaces": "Заменить пробелами",
      "removeAllBreaks": "Удалить все переносы",
      "inputText": "Входной текст",
      "chars": "симв.",
      "cleanedText": "Очищенный текст",
      "removed": "удалено",
      "inputPlaceholder": "Вставьте неаккуратный текст с лишними пробелами, табуляцией или пустыми строками...",
      "outputPlaceholder": "Очищенный результат появится автоматически..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow выполняет все подсчёты текста прямо в вашем браузере. Составляете ли вы статью для блога, дорабатываете анонс продукта или проверяете научное эссе на соответствие строгому лимиту слов — мгновенные подсчёты помогут вам чётко выстроить сообщение.\n\nКороткие предложения легче читать. Разная длина предложений делает длинные руководства интересными для читателей на экранах компьютеров и мобильных устройств.",
      "words": "Слова",
      "characters": "Символы",
      "noSpaces": "Без пробелов",
      "sentences": "Предложения",
      "paragraphs": "Абзацы",
      "readingTime": "Время чтения",
      "downloadTxt": "Скачать .txt",
      "copyText": "Копировать текст",
      "textToCount": "Текст для подсчёта",
      "placeholder": "Вставьте или введите текст, чтобы подсчитать слова, символы, предложения и время чтения...",
      "deliveryTimingLines": "Время произнесения и строки",
      "speakingTime": "Время произнесения (130 слов/мин)",
      "totalLines": "Всего строк",
      "avgWordLength": "Средняя длина слова",
      "chars": "симв.",
      "mostFrequentWords": "Самые частые слова",
      "emptyKeywords": "Введите текст выше, чтобы увидеть самые повторяющиеся слова."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Технические SEO-аудиты проверяют сканируемость, внутренние ссылки и скорость страниц. Быстрые страницы улучшают вовлечённость пользователей и сигналы скорости в мобильном поиске. Внутренние ссылки связывают связанные руководства и укрепляют структуру технического SEO.",
      "ngramLabels": {
        "1": "1 слово",
        "2": "Фразы из 2 слов",
        "3": "Фразы из 3 слов"
      },
      "excludeStopWords": "Исключать общие стоп-слова",
      "minLength": "Мин. длина:",
      "textForAnalysis": "Текст для анализа частотности",
      "placeholder": "Вставьте текст статьи, описания товаров или заметки, чтобы подсчитать повторяющиеся термины и плотность ключевых слов...",
      "totalWords": "Всего слов:",
      "uniqueTerms": "Уникальных терминов:",
      "exportCsv": "Экспорт CSV",
      "copyCsv": "Копировать CSV",
      "rank": "#",
      "termPhrase": "Термин / фраза",
      "count": "Количество",
      "density": "Плотность",
      "emptyState": "Введите текст выше, чтобы увидеть подсчёт слов и процент плотности ключевых слов."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Введите корректные даты календаря.",
      "errorDobAfterTarget": "Дата рождения не может быть позже целевой даты.",
      "dobLabel": "Дата рождения",
      "targetLabel": "Возраст на дату",
      "exactAge": "Точный хронологический возраст",
      "yearsWord": "лет",
      "monthsWord": "месяцев",
      "daysWord": "дней",
      "nextBirthday": "Следующий день рождения",
      "turning": "исполнится",
      "inWord": "через",
      "totalMonths": "Всего месяцев",
      "totalWeeks": "Всего недель",
      "totalDays": "Всего дней",
      "totalHours": "Всего часов (прибл.)",
      "monthsAbbr": "мес",
      "weeksAbbr": "нед",
      "daysAbbr": "д",
      "hoursAbbr": "ч"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Недостаточный вес",
      "normalWeight": "Нормальный вес",
      "overweight": "Избыточный вес",
      "obesity": "Ожирение",
      "errorHeightMetric": "Введите рост от 50 до 280 см.",
      "errorWeightMetric": "Введите вес от 15 до 500 кг.",
      "errorHeightImperial": "Введите корректный рост от 2 до 9 футов.",
      "errorWeightImperial": "Введите вес от 30 до 1100 фунтов.",
      "metricTab": "Метрическая (см / кг)",
      "imperialTab": "Имперская (футы, дюймы / фунты)",
      "heightCmLabel": "Рост (см)",
      "weightKgLabel": "Вес (кг)",
      "heightFtLabel": "Рост (футы)",
      "heightInLabel": "Рост (дюймы)",
      "weightLbsLabel": "Вес (фунты)",
      "bmiLabel": "Индекс массы тела (ИМТ)",
      "whoCategory": "Категория по ВОЗ",
      "healthyRange": "Здоровый диапазон веса по ИМТ (18,5–24,9)",
      "disclaimer": "ИМТ — это общий скрининговый показатель, который не отличает мышечную массу от жировой."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Введите возраст от 15 до 100 лет.",
      "errorHeightMetric": "Введите рост от 100 до 250 см.",
      "errorWeightMetric": "Введите вес от 30 до 350 кг.",
      "errorHeightImperial": "Введите рост от 3 футов 4 дюймов до 8 футов 2 дюймов.",
      "errorWeightImperial": "Введите вес от 66 до 770 фунтов.",
      "metricTab": "Метрическая (см / кг)",
      "imperialTab": "Имперская (футы, дюймы / фунты)",
      "maleTab": "Мужской",
      "femaleTab": "Женский",
      "ageLabel": "Возраст (лет)",
      "heightCmLabel": "Рост (см)",
      "weightKgLabel": "Вес (кг)",
      "heightFtLabel": "Рост (футы)",
      "heightInLabel": "Рост (дюймы)",
      "weightLbsLabel": "Вес (фунты)",
      "activityLabel": "Уровень активности",
      "activitySedentary": "Сидячий (1,2×)",
      "activitySedentaryDetail": "Офисная работа, мало упражнений или без них",
      "activityLight": "Низкая активность (1,375×)",
      "activityLightDetail": "Лёгкие упражнения 1–3 дня в неделю",
      "activityModerate": "Умеренно активный (1,55×)",
      "activityModerateDetail": "Умеренные упражнения 3–5 дней в неделю",
      "activityVery": "Очень активный (1,725×)",
      "activityVeryDetail": "Интенсивные упражнения 6–7 дней в неделю",
      "activityExtra": "Сверхактивный (1,9×)",
      "activityExtraDetail": "Физическая работа или тренировки дважды в день",
      "maintenance": "Калории для поддержания (TDEE)",
      "mildLoss": "Лёгкое снижение веса (−0,25 кг/нед)",
      "mildLossNote": "~250 ккал суточного дефицита",
      "weightLoss": "Снижение веса (−0,5 кг/нед)",
      "weightLossNote": "~500 ккал суточного дефицита",
      "leanGain": "Прирост сухой массы",
      "leanGainNote": "+250 ккал суточного профицита",
      "macroHeading": "Ориентировочное распределение макронутриентов для поддержания (30% белок · 40% углеводы · 30% жиры)",
      "protein": "Белок",
      "carbs": "Углеводы",
      "fat": "Пищевые жиры",
      "gramsPerDay": "г/день",
      "disclaimer": "Рассчитано по уравнению основного обмена Миффлина — Сан Жеора. Индивидуальные потребности в энергии зависят от состава тела и медицинских особенностей; проконсультируйтесь с квалифицированным врачом перед началом ограничительных диет."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "Начальный вклад не может быть отрицательным.",
      "errorMonthly": "Ежемесячный взнос не может быть отрицательным.",
      "errorRate": "Годовая доходность должна быть от 0% до 100%.",
      "errorYears": "Срок должен быть от 1 до 100 лет.",
      "initialLabel": "Начальная сумма ($)",
      "monthlyLabel": "Ежемесячное пополнение ($)",
      "rateLabel": "Годовая доходность (%)",
      "yearsLabel": "Годы",
      "compoundingLabel": "Капитализация",
      "dailyOption": "Ежедневно (365/год)",
      "monthlyOption": "Ежемесячно (12/год)",
      "quarterlyOption": "Ежеквартально (4/год)",
      "annualOption": "Ежегодно (1/год)",
      "futureBalance": "Будущий баланс",
      "totalContributed": "Всего внесено (сумма + пополнения)",
      "totalInterest": "Всего сложных процентов",
      "yearHeader": "Год",
      "totalContributedHeader": "Всего внесено",
      "cumulativeInterestHeader": "Накопленные проценты",
      "endingBalanceHeader": "Итоговый баланс",
      "yearPrefix": "Год"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "Введите сумму 0 или больше.",
      "errorRate": "Введите положительный обменный курс больше 0.",
      "errorFee": "Введите комиссию за конвертацию от 0% до 50%.",
      "fetchErrorWithMessage": "Не удалось получить внешний курс ({message}). Продолжите, введя курс вручную выше.",
      "fetchErrorGeneric": "Не удалось связаться с внешним API курсов. Введите курс вручную выше.",
      "fetchErrorNoPair": "Выбранная валютная пара не была возвращена справочным API.",
      "currencyNames": {
        "USD": "Доллар США",
        "EUR": "Евро",
        "GBP": "Британский фунт",
        "JPY": "Японская иена",
        "CAD": "Канадский доллар",
        "AUD": "Австралийский доллар",
        "CHF": "Швейцарский франк",
        "INR": "Индийская рупия",
        "SGD": "Сингапурский доллар",
        "NZD": "Новозеландский доллар",
        "MXN": "Мексиканское песо",
        "CNY": "Китайский юань"
      },
      "rateSourceManualDefault": "Курс, введённый вручную (офлайн по умолчанию)",
      "rateSourceManual": "Курс, введённый вручную",
      "rateSourceIdentity": "Тождественный курс (1,0000) для совпадающих валют",
      "rateSourceEcb": "Внешний справочный курс ЕЦБ через API Frankfurter (дата: {date})",
      "rateSourceInverted": "Инвертирован из предыдущего курса",
      "disclosureTitle": "Раскрытие источника курса:",
      "disclosureBody": "Живые рыночные курсы никогда не выдумываются офлайн. Введите точный котируемый курс вручную или нажмите",
      "disclosureBodyAfter": ", чтобы запросить справочный курс из внешнего API Frankfurter.",
      "activeRateSource": "Активный источник курса:",
      "amountLabel": "Сумма",
      "fromLabel": "Исходная валюта",
      "toLabel": "Целевая валюта",
      "swapAria": "Поменять валюты местами",
      "swapTitle": "Поменять валюты и инвертировать курс",
      "rateLabel": "Обменный курс",
      "feeLabel": "Комиссия банка / карты за обмен (%)",
      "fetchButton": "Получить справочный курс ЕЦБ",
      "fetchingButton": "Получение курса ЕЦБ...",
      "netConverted": "Чистая сконвертированная сумма",
      "grossBeforeFee": "Сумма до комиссии",
      "feeLabelShort": "Комиссия",
      "inverseRate": "Обратный курс",
      "perOne": "за 1",
      "amountHeaderSuffix": "Сумма",
      "netHeaderPrefix": "Чистая",
      "netHeaderSuffix": "(по введённому курсу и комиссии)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Выберите корректные начальную и конечную даты календаря.",
      "errorInvalidBase": "Введите корректную начальную дату календаря.",
      "errorNonNegative": "Введите неотрицательные целые числа для лет, месяцев и дней.",
      "differenceTab": "Разница между датами",
      "addSubtractTab": "Прибавить / вычесть время",
      "startLabel": "Начальная дата",
      "endLabel": "Конечная дата",
      "swapTitle": "Поменять даты местами",
      "swapAria": "Поменять начальную и конечную даты",
      "includeEnd": "Включать конечную дату в подсчёт (+1 календарный день)",
      "calendarDuration": "Длительность по календарю",
      "reversedRange": "(Обратный диапазон)",
      "totalSpan": "Общий промежуток:",
      "calendarDays": "календарных дней",
      "weeksDays": "Недели и дни",
      "weekdays": "Будни (пн–пт)",
      "weekendDays": "Выходные (сб–вс)",
      "totalHours": "Всего часов",
      "yearsWord": "лет",
      "monthsWord": "месяцев",
      "daysWord": "дней",
      "weeksAbbr": "нед",
      "daysAbbr": "д",
      "hoursAbbr": "ч",
      "referenceLabel": "Опорная дата",
      "operationLabel": "Операция",
      "addOption": "Прибавить (+)",
      "subtractOption": "Вычесть (−)",
      "yearsLabel": "Годы",
      "monthsLabel": "Месяцы",
      "daysLabel": "Дни",
      "resultingDate": "Итоговая дата календаря",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "Исходная цена не может быть отрицательной.",
      "errorDiscount": "Скидка должна быть от 0% до 100%.",
      "errorTax": "Налог с продаж должен быть от 0% до 100%.",
      "errorCost": "Себестоимость не может быть отрицательной.",
      "errorSelling": "Цена продажи должна быть больше 0.",
      "discountTab": "Скидка на распродаже",
      "marginTab": "Маржа прибыли и наценка",
      "originalPriceLabel": "Исходная цена ($)",
      "discountLabel": "Скидка (%)",
      "salesTaxLabel": "Налог с продаж (%)",
      "costLabel": "Себестоимость единицы ($)",
      "sellingLabel": "Цена продажи ($)",
      "finalPrice": "Итоговая цена",
      "beforeTax": "До налога:",
      "youSave": "Вы экономите",
      "taxAdded": "Налог добавлен",
      "grossProfit": "Валовая прибыль",
      "profitMargin": "Маржа прибыли",
      "profitDivSelling": "(Прибыль ÷ цена продажи)",
      "markup": "Наценка",
      "profitDivCost": "(Прибыль ÷ себестоимость)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Введите сумму кредита больше 0.",
      "errorRate": "Введите годовую процентную ставку от 0% до 100%.",
      "errorDuration": "Срок кредита должен быть от 1 до 600 месяцев.",
      "principalLabel": "Сумма кредита ($)",
      "rateLabel": "Годовая процентная ставка (% годовых)",
      "termLabel": "Срок кредита",
      "termUnitAria": "Единица срока кредита",
      "yearsOption": "Годы",
      "monthsOption": "Месяцы",
      "monthlyPayment": "Ежемесячный платёж (EMI)",
      "forPrefix": "на",
      "monthlyPayments": "ежемесячных платежей",
      "totalInterest": "Всего процентов",
      "ofTotalCost": "от общей стоимости",
      "totalRepayment": "Общая сумма выплат",
      "principalWord": "основного долга",
      "principalLabelShort": "Основной долг",
      "interestLabelShort": "Проценты",
      "showSchedule": "Показать график погашения",
      "hideSchedule": "Скрыть график погашения",
      "monthHeader": "Месяц",
      "paymentHeader": "Платёж",
      "principalHeader": "Основной долг",
      "interestHeader": "Проценты",
      "balanceHeader": "Остаток"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "Цена дома должна быть больше 0.",
      "errorDownPayment": "Процент первоначального взноса должен быть от 0% до 99,9%.",
      "errorRate": "Процентная ставка должна быть от 0% до 50%.",
      "errorTerm": "Срок кредита должен быть от 1 до 50 лет.",
      "homePriceLabel": "Цена дома ($)",
      "downPaymentLabel": "Первоначальный взнос (%)",
      "rateLabel": "Процентная ставка (% годовых)",
      "termLabel": "Срок кредита (лет)",
      "yearsWord": "Лет",
      "taxLabel": "Налог на недвижимость ($ / год)",
      "insuranceLabel": "Страхование дома ($ / год)",
      "hoaLabel": "Взносы ТСЖ ($ / месяц)",
      "estimatedMonthly": "Примерный ежемесячный платёж",
      "loanAmount": "Сумма кредита",
      "downPayment": "Первоначальный взнос",
      "lifetimeInterest": "Проценты за весь срок",
      "breakdownHeading": "Структура ежемесячного платежа",
      "principalInterest": "Основной долг и проценты (P&I)",
      "propertyTaxes": "Налог на недвижимость",
      "homeownersInsurance": "Страхование жилья",
      "hoaDues": "Взносы ТСЖ",
      "pmiLabel": "Прибл. PMI (0,5%/год при взносе < 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Введите корректные числа.",
      "errorTotalZero": "Итого (Y) не может быть 0.",
      "errorStartZero": "Начальное значение не может быть 0.",
      "heading1": "1. Процент от числа",
      "heading2": "2. Часть как процент от целого",
      "heading3": "3. Процентное увеличение или уменьшение",
      "whatIs": "Сколько составляет",
      "percentOf": "% от",
      "isWhatPercentOf": "составляет сколько % от",
      "fromWord": "От",
      "toWord": "до",
      "result": "Результат:",
      "change": "Изменение:",
      "formula": "Формула",
      "difference": "Разница",
      "ariaPctX": "Процент X",
      "ariaBaseY": "Базовое число Y",
      "ariaPartX": "Значение части X",
      "ariaWholeY": "Значение целого Y",
      "ariaInitialA": "Начальное значение A",
      "ariaFinalB": "Конечное значение B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "Сумма компенсации не может быть отрицательной.",
      "errorHours": "Часов в неделю должно быть от 1 до 168.",
      "errorWeeks": "Недель в году должно быть от 1 до 52.",
      "errorTax": "Эффективная ставка налога должна быть от 0% до 99%.",
      "amountLabel": "Сумма оплаты ($)",
      "frequencyLabel": "Периодичность",
      "hourlyOption": "Почасовая",
      "dailyOption": "Дневная",
      "weeklyOption": "Еженедельная",
      "biweeklyOption": "Раз в две недели",
      "monthlyOption": "Ежемесячная",
      "annualOption": "Годовая",
      "hoursLabel": "Часов / неделя",
      "weeksLabel": "Недель / год",
      "taxLabel": "Прибл. ставка налога (%)",
      "rowHourly": "Почасовая",
      "rowDaily": "Дневная (5-дневная неделя)",
      "rowWeekly": "Еженедельная",
      "rowBiweekly": "Раз в две недели",
      "rowMonthly": "Ежемесячная",
      "rowAnnual": "Годовая",
      "payPeriodHeader": "Период оплаты",
      "grossPayHeader": "Оплата брутто",
      "estNetPay": "Прибл. чистая оплата",
      "taxWord": "налог"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Введите корректные время начала и окончания.",
      "errorBreakRange": "Введите вычет перерыва от 0 до 1440 минут.",
      "errorEndEarlier": "Время окончания раньше времени начала. Включите переход на следующий день, если смена проходит через полночь.",
      "errorBreakExceeds": "Вычет перерыва превышает общее прошедшее время.",
      "errorSumFields": "Все поля длительности должны быть неотрицательными числами.",
      "betweenTab": "Прошедшее время между часами",
      "sumTab": "Сложить длительности табеля",
      "startLabel": "Время начала",
      "endLabel": "Время окончания",
      "breakLabel": "Неоплачиваемый перерыв (мин)",
      "overnightLabel": "Считать время окончания раньше времени начала следующим днём (ночная смена)",
      "netDuration": "Чистая длительность",
      "overnightTag": "(Ночная)",
      "decimalHours": "Часы в десятичном виде",
      "totalMinutes": "Всего минут",
      "totalSeconds": "Всего секунд",
      "hoursAbbr": "ч",
      "minutesAbbr": "мин",
      "secondsAbbr": "с",
      "labelHeader": "Метка",
      "hoursHeader": "Часы",
      "minutesHeader": "Минуты",
      "secondsHeader": "Секунды",
      "removeButton": "Удалить",
      "removeAria": "Удалить",
      "addRowButton": "Добавить строку длительности",
      "morningSession": "Утренняя сессия",
      "afternoonSession": "Дневная сессия",
      "segmentPrefix": "Сегмент",
      "combinedTime": "Суммарное время (ЧЧ:ММ:СС)",
      "dayEquivalent": "24-часовых дней",
      "daysAbbr": "д"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "Сумма счёта не может быть отрицательной.",
      "errorTip": "Процент чаевых должен быть от 0% до 200%.",
      "errorPeople": "Число людей должно быть от 1 до 100.",
      "billLabel": "Сумма счёта без чаевых ($)",
      "tipLabel": "Процент чаевых (%)",
      "peopleLabel": "Разделить на (человек)",
      "presetsLabel": "Готовые значения чаевых:",
      "roundingLabel": "Округление:",
      "exactOption": "Точные центы",
      "totalUpOption": "Округлить итог вверх ($)",
      "perPersonUpOption": "Округлить сумму с человека вверх ($)",
      "perPersonTotal": "Итого с человека",
      "includes": "Включает",
      "tipEach": "чаевых с каждого",
      "totalTip": "Всего чаевых",
      "effectiveRate": "Эффективная ставка:",
      "totalBill": "Итого по счёту"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Введите корректное числовое значение для конвертации.",
      "errorAbsoluteZero": "Температура не может быть ниже абсолютного нуля (−273,15 °C / 0 K).",
      "categoryNames": {
        "length": "Длина",
        "weight": "Вес и масса",
        "temperature": "Температура",
        "area": "Площадь",
        "volume": "Объём",
        "speed": "Скорость",
        "storage": "Цифровое хранилище"
      },
      "unitLabels": {
        "mm": "Миллиметр",
        "cm": "Сантиметр",
        "m": "Метр",
        "km": "Километр",
        "in": "Дюйм",
        "ft": "Фут",
        "yd": "Ярд",
        "mi": "Миля",
        "mg": "Миллиграмм",
        "g": "Грамм",
        "kg": "Килограмм",
        "t": "Метрическая тонна",
        "oz": "Унция",
        "lb": "Фунт",
        "st": "Стоун",
        "C": "Цельсий",
        "F": "Фаренгейт",
        "K": "Кельвин",
        "cm2": "Квадратный сантиметр",
        "m2": "Квадратный метр",
        "ha": "Гектар",
        "km2": "Квадратный километр",
        "ft2": "Квадратный фут",
        "yd2": "Квадратный ярд",
        "acre": "Акр",
        "mi2": "Квадратная миля",
        "mL": "Миллилитр",
        "L": "Литр",
        "m3": "Кубический метр",
        "floz": "Жидкая унция (США)",
        "cup": "Чашка (США)",
        "pt": "Пинта (США)",
        "qt": "Кварта (США)",
        "gal": "Галлон (США)",
        "ms": "Метров / секунда",
        "kmh": "Километров / час",
        "mph": "Миль / час",
        "knot": "Узел",
        "fts": "Футов / секунда",
        "B": "Байт",
        "KB": "Килобайт (10³)",
        "MB": "Мегабайт (10⁶)",
        "GB": "Гигабайт (10⁹)",
        "TB": "Терабайт (10¹²)",
        "KiB": "Кибибайт (2¹⁰)",
        "MiB": "Мебибайт (2²⁰)",
        "GiB": "Гибибайт (2³⁰)"
      },
      "valueLabel": "Значение",
      "fromLabel": "Исходная единица",
      "toLabel": "Целевая единица",
      "swapAria": "Поменять единицы местами",
      "swapTitle": "Поменять единицы местами",
      "toWord": "в",
      "copyResult": "Копировать результат",
      "unitHeader": "Единица",
      "symbolHeader": "Символ",
      "equivalentHeader": "Эквивалентное значение"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "Сумма не может быть отрицательной.",
      "errorRate": "Ставка налога должна быть от 0% до 100%.",
      "addTab": "Добавить налог (нетто → брутто)",
      "removeTab": "Выделить налог (брутто → нетто)",
      "commonRates": "Распространённые ставки:",
      "netAmountLabel": "Сумма нетто (без налога) ($)",
      "grossAmountLabel": "Сумма брутто (с налогом) ($)",
      "rateLabel": "Ставка НДС / налога с продаж (%)",
      "netPrice": "Цена нетто (без налога)",
      "taxAmount": "Сумма налога",
      "grossPrice": "Цена брутто (с налогом)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Кодировать в Base64",
      "decodeTab": "Декодировать Base64",
      "urlSafe": "URL-safe (- и _)",
      "omitPadding": "Убирать конечный padding =",
      "swap": "Поменять местами",
      "decodeError": "Ошибка декодирования:",
      "inputLabelEncode": "Обычный текст (UTF-8)",
      "inputLabelDecode": "Строка Base64",
      "inputPlaceholderEncode": "Введите текст или JSON для кодирования...",
      "inputPlaceholderDecode": "Вставьте стандартную или URL-safe строку Base64...",
      "outputLabelEncode": "Вывод Base64",
      "outputLabelDecode": "Декодированный текст",
      "outputPlaceholder": "Здесь появится преобразованный результат...",
      "copyOutput": "Копировать результат",
      "invalidLength": "Недопустимая длина строки Base64.",
      "invalidInput": "Недопустимый ввод Base64 или повреждённая последовательность байтов UTF-8."
    },
    "tables": {
      "samplePlain": "UtilityFlow: безопасное кодирование Base64 с UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Выбрать цвет",
      "colorPickerAria": "Выбор цвета",
      "copyHex": "Копировать HEX",
      "copyRgb": "Копировать RGB",
      "copyHsl": "Копировать HSL",
      "contrastTitle": "Проверка коэффициента контрастности WCAG 2.1",
      "contrastDesc": "Предпросмотр переднего плана ({color}) на любом цвете фона.",
      "backgroundLabel": "Фон:",
      "bgAria": "Цвет фона для контраста",
      "sampleTitle": "Образец основного текста и текста интерфейса",
      "sampleSentence": "Съешь ещё этих мягких французских булок, да выпей чаю.",
      "aaNormal": "AA обычный текст (≥ 4,5:1)",
      "aaaNormal": "AAA обычный текст (≥ 7,0:1)",
      "aaLarge": "AA крупный текст (≥ 3,0:1)",
      "pass": "Пройдено",
      "fail": "Не пройдено"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Cron-выражение из 5 полей",
      "copyCron": "Копировать cron",
      "humanTitle": "Расписание понятным языком",
      "breakdownTitle": "Разбор полей",
      "fieldMinute": "Минута (0–59)",
      "fieldHour": "Час (0–23)",
      "fieldDom": "День месяца (1–31)",
      "fieldMonth": "Месяц (1–12)",
      "fieldDow": "День недели (0–6)",
      "nextRuns": "Следующие {count} запусков (местное время)",
      "noRuns": "Подходящих запусков не найдено в ближайшие 366 дней.",
      "fieldsError": "Стандартный cron ожидает 5 полей (минута час день-месяца месяц день-недели). Найдено: {count}.",
      "emptySegment": "Пустой сегмент в «{token}»",
      "invalidStep": "Недопустимый шаг «{step}» в «{token}»",
      "outOfRange": "Значение вне диапазона ({min}–{max}) в «{token}»",
      "invalidCron": "Недопустимое cron-выражение.",
      "everyMinutes": "Каждые {n} минут",
      "minuteZeroHour": "В 0 минут каждого часа",
      "atTime": "В {time}",
      "atFields": "В {a}, {b}",
      "dayEveryDay": "каждый день",
      "dayWeekdays": "по будням (понедельник–пятница)",
      "dayOfMonth": "в {day}-й день месяца",
      "dayDow": "в {dow}",
      "dayBoth": "в день {day} или {dow}",
      "monthIn": " в {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "Каждые 5 минут",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Каждый час",
          "expr": "0 * * * *"
        },
        {
          "label": "Ежедневно в полночь",
          "expr": "0 0 * * *"
        },
        {
          "label": "По будням в 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "1-го числа месяца в 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота"
      ],
      "monthLabels": [
        "",
        "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь"
      ],
      "unitWords": {
        "minute": "минута",
        "hour": "час",
        "day": "день",
        "month": "месяц",
        "weekday": "будний день"
      },
      "unitPlurals": {
        "minute": "минуты",
        "hour": "часы",
        "day": "дни",
        "month": "месяцы",
        "weekday": "будние дни"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "Минифицировать CSS",
      "beautifyTab": "Форматировать CSS",
      "inputLabel": "Входной CSS",
      "bytesLabel": "байт",
      "inputPlaceholder": "Вставьте правила CSS или таблицы стилей...",
      "outputLabelMinify": "Минифицированный CSS",
      "outputLabelBeautify": "Отформатированный CSS",
      "outputPlaceholder": "Здесь появится обработанный CSS...",
      "copyCss": "Копировать CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Ввод текста",
      "fileTab": "Контрольная сумма локального файла",
      "uppercaseHex": "Hex в верхнем регистре",
      "inputLabel": "Входная строка (UTF-8)",
      "inputPlaceholder": "Введите текст для вычисления хешей SHA-1, SHA-256, SHA-384 и SHA-512...",
      "chooseFileLabel": "Выберите локальный файл для хеширования",
      "fileNoteDefault": "Файл читается локально в памяти браузера и никогда не загружается.",
      "bytesLabel": "байт",
      "cryptoUnavailable": "Хеширование Web Crypto недоступно.",
      "sampleText": "Привет, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Кодировать сущности",
      "decodeTab": "Декодировать сущности",
      "encodeNonAscii": "Кодировать не-ASCII символы (&#...;)",
      "swap": "Поменять местами",
      "inputLabelEncode": "Исходный HTML / текст",
      "inputLabelDecode": "HTML-кодированная строка",
      "inputPlaceholderEncode": "<p>Введите HTML-теги или специальные символы...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Вставьте закодированные сущности...&lt;/p&gt;",
      "outputLabelEncode": "Закодированные сущности",
      "outputLabelDecode": "Декодированный текст",
      "outputPlaceholder": "Здесь появятся преобразованные сущности..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "Минифицировать JS",
      "beautifyTab": "Форматировать JS",
      "indentLabel": "Отступ:",
      "indent2": "2 пробела",
      "indent4": "4 пробела",
      "inputLabel": "Входной JavaScript / TypeScript",
      "bytesLabel": "байт",
      "inputPlaceholder": "Вставьте фрагмент JavaScript или TypeScript...",
      "outputLabelMinify": "Минифицированный вывод",
      "outputLabelBeautify": "Отформатированный вывод",
      "outputPlaceholder": "Здесь появится отформатированный JavaScript...",
      "copyCode": "Копировать код"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Разделитель:",
      "commaOpt": "Запятая (,)",
      "semicolonOpt": "Точка с запятой (;)",
      "tabOpt": "Табуляция (TSV)",
      "conversionError": "Ошибка конвертации:",
      "inputLabelJson": "Входной JSON",
      "inputLabelCsv": "Входной CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "Вывод CSV",
      "outputLabelJson": "Вывод JSON",
      "outputPlaceholder": "Здесь появятся преобразованные данные...",
      "parseFallback": "Не удаётся разобрать формат ввода."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 пробела",
      "indent4": "4 пробела",
      "indentTab": "Табуляция",
      "indentMinify": "Минифицировать",
      "sortKeys": "Сортировать ключи А–Я",
      "validJson": "Корректный JSON",
      "keysLabel": "ключей",
      "depthLabel": "глубина",
      "bytesLabel": "байт",
      "invalidJson": "Недопустимый JSON:",
      "invalidJsonSyntax": "Недопустимый синтаксис JSON",
      "lineCol": "Строка {line}, столбец {col}",
      "inputLabel": "Исходный JSON",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "Отформатированный вывод",
      "outputPlaceholder": "Здесь появится отформатированный и проверенный JSON...",
      "copyJson": "Копировать JSON"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Декодирует заголовок и полезную нагрузку Base64Url локально в памяти браузера. Не проверяет криптографические подписи.",
      "loadSampleJwt": "Загрузить пример JWT",
      "inputLabel": "Закодированный JWT-токен",
      "inputPlaceholder": "Вставьте JWT-токен (eyJhbGciOi...), чтобы проверить его заголовок и утверждения...",
      "invalidJwt": "Недопустимый JWT:",
      "headerLabel": "Заголовок (алгоритм и тип)",
      "payloadLabel": "Полезная нагрузка (утверждения)",
      "copyHeader": "Копировать заголовок",
      "copyPayload": "Копировать полезную нагрузку",
      "timestampTitle": "Утверждения с метками времени",
      "iatLabel": "Выдан (iat)",
      "nbfLabel": "Действителен с (nbf)",
      "expLabel": "Истекает (exp)",
      "expired": "Истёк",
      "active": "Активен (ещё не истёк)",
      "signatureLabel": "Сегмент подписи (Base64Url)",
      "invalidB64Url": "Недопустимая длина сегмента Base64Url.",
      "segmentCount": "Ожидалось 3 JWT-сегмента, разделённых точками (header.payload.signature), найдено: {count}.",
      "parseFallback": "Не удаётся разобрать JSON-сегменты Base64Url JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Шаблон регулярного выражения",
      "patternPlaceholder": "Введите шаблон регулярного выражения...",
      "flagsLabel": "Флаги:",
      "syntaxError": "Ошибка синтаксиса:",
      "testStringLabel": "Тестовая строка",
      "testPlaceholder": "Вставьте пример текста для проверки по вашему шаблону...",
      "highlightedMatches": "Подсвеченные совпадения",
      "matchSingular": "совпадение",
      "matchPlural": "совпадений",
      "highlightEmpty": "Совпадения будут подсвечиваться здесь в реальном времени...",
      "capturedTitle": "Захваченные совпадения",
      "matchLabel": "Совпадение",
      "indexLabel": "индекс",
      "groupsLabel": "Группы:",
      "noMatches": "Совпадений не найдено.",
      "replaceLabel": "Предпросмотр шаблона замены",
      "replacePlaceholder": "напр. $1 [at] $2",
      "invalidRegex": "Недопустимое регулярное выражение."
    },
    "tables": {
      "sampleText": "Основной контакт: support@utilityflow.online\nКоманда биллинга: billing@example.org\nНеверный email: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (global)"
        },
        {
          "flag": "i",
          "label": "i (без учёта регистра)"
        },
        {
          "flag": "m",
          "label": "m (многострочный)"
        },
        {
          "flag": "s",
          "label": "s (dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "Форматировать",
      "minify": "Минифицировать",
      "uppercaseKw": "Ключевые слова ЗАГЛАВНЫМИ",
      "lowercaseKw": "строчные",
      "indentLabel": "Отступ:",
      "indent2": "2 пробела",
      "indent4": "4 пробела",
      "inputLabel": "Исходный SQL-запрос",
      "inputPlaceholder": "Вставьте SQL-запрос (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "Отформатированный SQL",
      "outputPlaceholder": "Здесь появится отформатированный SQL...",
      "copySql": "Копировать SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Текущая Unix-метка (секунды)",
      "useCurrent": "Использовать текущее время",
      "copyEpoch": "Копировать epoch",
      "converter1Label": "Unix-метка → дата для человека",
      "epochPlaceholder": "напр. 1794544800",
      "unitAuto": "авто",
      "unitSeconds": "секунды",
      "unitMilliseconds": "миллисекунды",
      "errorNotNumeric": "Введите корректную числовую Unix-метку.",
      "errorOutOfRange": "Метка времени вне допустимого диапазона JavaScript Date.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Местный часовой пояс",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Относительное",
      "converter2Label": "Местная дата и время → Unix-метка",
      "secondsLabel": "Секунды",
      "millisecondsLabel": "Миллисекунды",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Кодировать",
      "decode": "Декодировать",
      "encodeUriPreserve": "encodeURI (сохранить ://?&)",
      "swap": "Поменять местами",
      "urlError": "Ошибка URL:",
      "inputLabel": "Входная строка или URL",
      "inputPlaceholder": "Вставьте URL, строку запроса или значение параметра...",
      "outputLabelEncode": "Закодированный вывод",
      "outputLabelDecode": "Декодированный вывод",
      "outputPlaceholder": "Здесь появится закодированный или декодированный URL...",
      "parsedTitle": "Разбор URL",
      "protocol": "Протокол",
      "host": "Хост",
      "pathname": "Путь",
      "hash": "Хеш",
      "noneValue": "(нет)",
      "queryParam": "Параметр запроса",
      "decodedValue": "Декодированное значение",
      "malformed": "Повреждённая последовательность процентного кодирования."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "Версия UUID",
      "v4": "v4 (случайный)",
      "v7": "v7 (упорядоченный по времени)",
      "quantity": "Количество (1–100)",
      "generate": "Сгенерировать UUID",
      "uppercase": "Верхний регистр",
      "includeHyphens": "Включать дефисы",
      "wrapBraces": "Обернуть в {braces}",
      "generatedLabel": "Сгенерированные UUID",
      "copyAll": "Копировать все"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Индиго на белом",
      "presetSlate": "Сланцевые чернила",
      "presetEmerald": "Изумрудный значок",
      "presetDark": "Тёмный режим",
      "swapColors": "Поменять цвета местами",
      "fgTitle": "Цвет переднего плана / текста",
      "bgTitle": "Цвет фона",
      "copyHex": "Копировать HEX",
      "pickerSuffix": "выбор цвета",
      "hexInputSuffix": "поле ввода HEX",
      "contrastRatioLabel": "Коэффициент контрастности WCAG 2.1",
      "checkAaNormal": "WCAG AA обычный текст",
      "checkAaLarge": "WCAG AA крупный текст / интерфейс",
      "checkAaaNormal": "WCAG AAA обычный текст",
      "checkAaaLarge": "WCAG AAA крупный текст",
      "pass": "ПРОЙДЕНО",
      "fail": "НЕ ПРОЙДЕНО",
      "livePreviewLabel": "Живой предпросмотр доступности",
      "previewHeading": "Чёткая типографика остаётся легко читаемой при любом размере окна.",
      "previewBody": "Обычный основной текст (14–16 px) требует коэффициента контрастности не менее 4,5:1 для уровня WCAG AA и 7,0:1 для уровня AAA. Крупные заголовки (18 пт+ или жирные 14 пт+) требуют не менее 3,0:1.",
      "outlinedControl": "Контурный элемент интерфейса",
      "hexOnHex": "{fg} на {bg}",
      "extractTitle": "Извлечь цветовую палитру из изображения",
      "extractBody": "Загрузите скриншот, логотип или фото, чтобы перенести доминирующие HEX-образцы прямо в проверку контраста.",
      "appliesToLabel": "Клик по образцу применяется к:",
      "foregroundBtn": "Передний план",
      "backgroundBtn": "Фон",
      "selectImage": "Выберите изображение для извлечения образцов",
      "loadedReplace": "Загружено: {name} (загрузить другое)",
      "selectImageError": "Выберите изображение PNG, JPG, WebP или GIF.",
      "unableToRead": "Не удаётся прочитать «{name}».",
      "canvasUnavailable": "Контекст Canvas 2D недоступен.",
      "transparentImage": "Изображение выглядит полностью прозрачным.",
      "unableToExtract": "Не удаётся извлечь палитру.",
      "areaPercent": "~{n}% площади"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 вкладка браузера",
        "taskbar": "32×32 панель задач / HiDPI",
        "desktopShortcut": "48×48 ярлык рабочего стола",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 заставка PWA"
      },
      "monogramMode": "Конструктор значка-монограммы",
      "imageMode": "Загрузить изображение логотипа",
      "lettersLabel": "Текст / инициалы (1–3 символа)",
      "cornerShapeLabel": "Форма углов",
      "roundedSquare": "Скруглённый квадрат",
      "circle": "Круг",
      "sharpSquare": "Острый квадрат",
      "square": "Квадрат",
      "bgColorLabel": "Цвет фона",
      "textColorLabel": "Цвет текста",
      "chooseLogo": "Выберите логотип PNG, JPG, WebP или SVG",
      "loadedReplace": "Загружено: {name} (нажмите, чтобы заменить)",
      "cropMaskLabel": "Маска обрезки",
      "unableToRead": "Не удаётся прочитать «{name}».",
      "canvasUnavailable": "Контекст Canvas 2D недоступен.",
      "failedEncode": "Не удалось закодировать PNG-фавикон.",
      "unableToGenerate": "Не удаётся сгенерировать фавиконы.",
      "icoBundleTitle": "Мультиразмерный набор favicon.ico (16px + 32px + 48px)",
      "icoBundleBody": "Стандартный бинарный файл .ico, готовый для корневой папки /public/ вашего сайта",
      "downloadIco": "Скачать favicon.ico",
      "faviconPreviewAlt": "Предпросмотр фавикона 32x32",
      "iconAlt": "Значок {size}x{size}",
      "htmlTagsLabel": "HTML-теги ссылок в <head>",
      "copyHtml": "Копировать HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Выберите любой файл для вычисления криптографических контрольных сумм",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Хешировано локально через Web Crypto API · Без загрузки файла (рекомендуется до 500 МБ)",
      "cryptoUnavailable": "API Web Crypto SubtleCrypto недоступен в этом контексте браузера.",
      "hashFailed": "Не удалось хешировать файл в памяти браузера (файлы больше нескольких сотен МБ могут превышать лимиты ОЗУ).",
      "computing": "Локальное вычисление контрольных сумм SHA-1, SHA-256, SHA-384 и SHA-512...",
      "fileLabel": "Файл:",
      "sizeLabel": "Размер:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Изменён:",
      "bytesSuffix": "{n} байт",
      "downloadSha256": "Скачать .sha256",
      "sha256Label": "SHA-256 (рекомендуется)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (только для обратной совместимости)",
      "verifyLabel": "Проверить по ожидаемой контрольной сумме",
      "expectedPlaceholder": "Вставьте опубликованную контрольную сумму SHA-256, SHA-512, SHA-384 или SHA-1 (или строку .sha256sum)...",
      "verified": "Контрольная сумма подтверждена! Файл точно соответствует ожидаемому дайджесту {algorithm}.",
      "mismatch": "Несовпадение контрольной суммы! Ни один из вычисленных дайджестов не совпадает с ожидаемым значением."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Выберите изображение для сжатия (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Обрабатывается локально через HTML5 Canvas · Никогда не загружается на удалённые серверы",
      "uploadImageError": "Загрузите файл изображения PNG, JPG, WebP или GIF.",
      "unableToDecode": "Не удаётся декодировать «{name}».",
      "canvasUnavailable": "Контекст Canvas 2D недоступен.",
      "compressionFailed": "Сжатие не удалось в canvas браузера.",
      "unableToCompress": "Не удаётся сжать изображение.",
      "unableToRead": "Не удаётся прочитать «{name}».",
      "invalidImage": "Недопустимый файл изображения.",
      "outputFormatLabel": "Формат вывода",
      "webpOption": "WebP (самый маленький размер для современного веба)",
      "jpgOption": "JPG (максимальная совместимость)",
      "pngOption": "PNG (прозрачность без потерь)",
      "maxWidthLabel": "Максимальная ширина",
      "keepOriginalWidth": "Сохранить исходную ширину",
      "max1920": "Макс. 1920 px (Full HD)",
      "max1280": "Макс. 1280 px (блог / hero)",
      "max800": "Макс. 800 px (миниатюры)",
      "qualityLabel": "Качество: ",
      "losslessPng": "PNG без потерь",
      "originalLabel": "Оригинал",
      "compressedLabel": "Сжатое",
      "changeLabel": "Изменение",
      "outputSummary": "Вывод: {w} × {h} px · {ext}",
      "compressing": "Сжатие...",
      "downloadExt": "Скачать .{ext}",
      "previewAlt": "Предпросмотр сжатого изображения"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Выберите одно или несколько изображений для конвертации",
      "imagesLoaded": "Загружено изображений: {n} — нажмите, чтобы добавить или заменить",
      "batchNote": "Пакетная конвертация PNG, JPG, WebP, SVG или GIF в PNG, JPG или WebP локально",
      "convertToLabel": "Преобразовать в формат",
      "pngOption": "PNG (.png — сохраняет прозрачность)",
      "qualityLabel": "Качество с потерями: ",
      "lossless": "Без потерь",
      "alphaFillLabel": "Заливка альфа-канала",
      "converting": "Конвертация...",
      "reconvert": "Конвертировать снова",
      "selectFilesError": "Выберите один или несколько файлов изображений (PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "Не удаётся декодировать «{name}».",
      "canvasUnavailable": "Canvas 2D недоступен.",
      "conversionFailed": "Конвертация не удалась для «{name}».",
      "batchFailed": "Пакетная конвертация изображений не удалась.",
      "downloadExt": "Скачать .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Выберите изображение для изменения размера или обрезки по готовым размерам",
      "fileWithDims": "{name} (оригинал: {w} × {h} px)",
      "supportsNote": "Поддерживает изменение размера в пикселях, фиксацию пропорций и социальные пресеты с центральной обрезкой",
      "selectImageError": "Выберите изображение PNG, JPG, WebP или GIF.",
      "unableToDecode": "Не удаётся декодировать «{name}».",
      "unableToRead": "Не удаётся прочитать изображение.",
      "failedLoading": "Не удалось загрузить изображение для изменения размера.",
      "canvasUnavailable": "Canvas 2D недоступен.",
      "failedGenerating": "Не удалось создать изменённое изображение.",
      "resizeFailed": "Изменение размера не удалось.",
      "quickPresets": "Быстрые пресеты:",
      "presetOg": "OG Share (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Квадрат (1080×1080)",
      "presetAvatar": "Аватар (512×512)",
      "widthLabel": "Ширина (px)",
      "heightLabel": "Высота (px)",
      "fitModeLabel": "Режим подгонки пропорций",
      "coverCropOption": "Центральная обрезка cover (без растяжения)",
      "exactOption": "Масштабировать до точных размеров",
      "outputFormatLabel": "Формат вывода",
      "lockAspect": "Сохранять исходные пропорции при вводе размеров",
      "resizeButton": "Изменить размер на {w} × {h} px",
      "readySummary": "Готово: {w} × {h} px ({ext})",
      "downloadResized": "Скачать изменённое .{ext}",
      "previewAlt": "Вывод изменённого изображения"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Выберите изображение для поворота, отражения или фильтра",
      "loadedReplace": "{name} (нажмите, чтобы заменить)",
      "previewNote": "Предпросмотр HTML5 Canvas в реальном времени и экспорт пикселей",
      "selectImageError": "Выберите изображение PNG, JPG, WebP или GIF.",
      "failedLoading": "Не удалось загрузить «{name}».",
      "rotateLeft": "Повернуть на 90° влево",
      "rotateRight": "Повернуть на 90° вправо",
      "flipHorizontal": "Отразить горизонтально",
      "flipVertical": "Отразить вертикально",
      "brightnessLabel": "Яркость: ",
      "contrastLabel": "Контраст: ",
      "grayscaleLabel": "Чёрно-белое (оттенки серого)",
      "resetAll": "Сбросить всё",
      "exportFormatLabel": "Формат экспорта",
      "livePreview": "Живой предпросмотр Canvas"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Изображение → Base64 Data URI",
      "decodeMode": "Base64 → предпросмотр изображения",
      "selectImageError": "Выберите файл изображения (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "Не удаётся прочитать «{name}».",
      "chooseImage": "Выберите файл изображения для кодирования",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Создаёт Data URI, исходный Base64, фрагменты HTML <img> и фона CSS",
      "binarySizeLabel": "Размер бинарного файла",
      "base64SizeLabel": "Размер Base64 URI (~на 33% больше)",
      "fullDataUriLabel": "Полный Data URI",
      "copyDataUri": "Копировать Data URI",
      "copyRawBase64": "Копировать исходный Base64",
      "copyImg": "Копировать <img>",
      "copyCss": "Копировать CSS",
      "encodedAria": "Закодированный Base64 Data URI",
      "encodedAlt": "Закодированный предпросмотр",
      "pasteLabel": "Вставьте строку изображения Base64 или Data URI",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... или исходная строка base64",
      "invalidPayload": "Вставленный текст Base64 не является допустимой закодированной полезной нагрузкой изображения.",
      "decodedAlt": "Предпросмотр декодированного Base64",
      "downloadExt": "Скачать .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Очень высокая",
        "strong": "Высокая",
        "moderate": "Средняя",
        "weak": "Слабая"
      },
      "randomPasswordMode": "Случайный пароль",
      "passphraseMode": "Diceware-парольная фраза",
      "regenerate": "Сгенерировать заново",
      "passwordLengthLabel": "Длина пароля: ",
      "charsSuffix": " симв.",
      "batchCountLabel": "Количество в партии: ",
      "uppercaseLabel": "Заглавные (A–Z)",
      "lowercaseLabel": "Строчные (a–z)",
      "numbersLabel": "Цифры (0–9)",
      "symbolsLabel": "Символы (!@#$%...)",
      "excludeAmbiguousLabel": "Исключать неоднозначные (0, O, 1, l, I)",
      "wordCountLabel": "Количество слов: ",
      "wordSeparatorLabel": "Разделитель слов",
      "hyphenOption": "Дефис (-)",
      "underscoreOption": "Подчёркивание (_)",
      "periodOption": "Точка (.)",
      "spaceOption": "Пробел ( )",
      "capitalizeWordsLabel": "С заглавных букв",
      "appendDigitLabel": "Добавить 2-значное число",
      "selectGroupWarning": "Выберите хотя бы одну группу символов для генерации паролей.",
      "entropyBits": "~{n} бит энтропии",
      "poolSizeSuffix": " · размер алфавита {n}",
      "wordListSuffix": " · список из {n} слов",
      "copyAll": "Копировать все"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "URL сайта",
        "text": "Текст",
        "wifi": "Конфигурация Wi-Fi",
        "vcard": "Контакт vCard",
        "email": "Адрес электронной почты",
        "phone": "Номер телефона",
        "plainText": "Обычный текст"
      },
      "liveCameraCapture": "Захват с живой камеры",
      "scanMode": "Сканировать / декодировать QR-изображение",
      "vcardMode": "Конструктор QR для контакта vCard",
      "uploadQr": "Загрузить изображение QR-кода",
      "uploadQrNote": "Скриншот PNG, JPG, WebP или SVG · 100% на стороне клиента",
      "liveCameraTitle": "Живое сканирование камерой устройства",
      "liveCameraNote": "Использует только локальный видеопоток камеры при наличии разрешения",
      "startCamera": "Запустить сканер камеры",
      "stopCamera": "Остановить камеру",
      "cameraHint": "Наведите камеру на QR-код — захват остановится автоматически сразу после декодирования.",
      "uploadImageError": "Загрузите изображение PNG, JPG, WebP или SVG, содержащее QR-код.",
      "unableToLoad": "Не удаётся загрузить «{name}».",
      "noQrDetected": "В этом изображении не удалось обнаружить QR-код. Убедитесь в резком фокусе, чётких полях тихой зоны и высоком контрасте.",
      "unableToScan": "Не удаётся отсканировать изображение.",
      "cameraUnsupported": "Сканирование камерой не поддерживается в этой среде браузера.",
      "cameraDenied": "Доступ к камере запрещён или камера недоступна. Загрузите изображение QR-кода вместо этого.",
      "decodedPayload": "Декодированная полезная нагрузка · {kind}",
      "sourceLabel": "Источник: ",
      "copyPayload": "Копировать полезную нагрузку",
      "decodedAria": "Декодированный QR-текст",
      "detectedLink": "Обнаружена веб-ссылка: ",
      "uploadedPreviewAlt": "Предпросмотр загруженного QR-кода",
      "firstNameLabel": "Имя",
      "lastNameLabel": "Фамилия",
      "orgLabel": "Организация",
      "jobTitleLabel": "Должность",
      "defaultJobTitle": "Продуктовый дизайнер",
      "phoneLabel": "Номер телефона",
      "emailLabel": "Адрес электронной почты",
      "websiteLabel": "URL сайта",
      "rawVcardLabel": "Исходная полезная нагрузка vCard 3.0",
      "copyVcard": "Копировать vCard",
      "vcardQrAlt": "Сгенерированный QR-код vCard",
      "downloadPng": "Скачать PNG",
      "downloadSvg": "Скачать SVG"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "Краткое",
          "ratio": "~10–20% длины"
        },
        "medium": {
          "label": "Среднее",
          "ratio": "~30–40% длины"
        },
        "detailed": {
          "label": "Длинное (подробное)",
          "ratio": "~50–60% длины"
        }
      },
      "loadingLengthLabels": {
        "short": "краткое",
        "medium": "среднее",
        "detailed": "длинное"
      },
      "formatOptions": {
        "paragraph": {
          "label": "Резюме абзацем",
          "hint": "Связный гладкий текст"
        },
        "bullets": {
          "label": "Резюме списком",
          "hint": "Чёткие легко читаемые пункты"
        },
        "key-points": {
          "label": "Извлечение ключевых пунктов",
          "hint": "Пронумерованные выводы"
        },
        "simple": {
          "label": "Простой язык",
          "hint": "Простые повседневные формулировки"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "абзац",
        "bullets": "маркированный список",
        "key-points": "ключевые пункты",
        "simple": "простой язык"
      },
      "languageLabels": {
        "Same as original language": "Тот же язык, что и в оригинале",
        "English (US)": "Английский (США)",
        "English (UK)": "Английский (Великобритания)",
        "Spanish": "Испанский",
        "French": "Французский",
        "German": "Немецкий",
        "Portuguese": "Португальский",
        "Italian": "Итальянский",
        "Dutch": "Нидерландский",
        "Arabic": "Арабский",
        "Hindi": "Хинди",
        "Urdu": "Урду",
        "Turkish": "Турецкий",
        "Japanese": "Японский",
        "Korean": "Корейский",
        "Chinese (Simplified)": "Китайский (упрощённый)"
      },
      "sampleArticle": "В 2026 году распределённые команды инженеров-продуктовиков всё чаще полагаются на асинхронные письменные обновления вместо ежедневных статус-встреч, чтобы защитить время глубокой сосредоточенной разработки. В ходе шестимесячного внутреннего исследования 140 инженеров, работающих в Лондоне, Берлине и Торонто, команды, заменившие три еженедельных синхронных звонка структурированными письменными дайджестами по вторникам и четвергам, сообщили о снижении фрагментации календаря на 28% и выполняли спринт-задачи на 14% быстрее. Что особенно важно, исследование показало, что письменные обновления работают, только когда инженеры следуют трём неизменным правилам: указывать конкретные блокеры в начале, давать прямые ссылки на пул-реквесты или ID задач и записывать точные целевые даты вместо расплывчатых фраз вроде «скоро». Менеджеры по-прежнему проводили одну живую 25-минутную еженедельную сессию, полностью посвящённую открытым архитектурным компромиссам и проверке состояния команды, сохраняя межличностные отношения, не прерывая блоки программирования.",
      "secUnit": "с",
      "minUnit": "мин",
      "title": "Бесплатный ИИ-суммаризатор текста",
      "noAccount": "Без аккаунта, кредитов и входа",
      "allowanceBefore": "Дневной бесплатный лимит:",
      "allowanceAfter": "осталось на сегодня",
      "allowanceFallback": "До 5 бесплатных резюме в день",
      "backendTitle": "Ключ бэкенда ИИ пока не активен в этой среде.",
      "backendEnsureBefore": "Убедитесь, что ",
      "backendEnsureAfter": " настроен для живой ИИ-суммаризации.",
      "stepLength": "1. Длина резюме",
      "stepFormat": "2. Формат резюме",
      "stepLanguage": "3. Язык вывода",
      "stepText": "4. Исходный текст для резюмирования",
      "lengthAria": "Длина резюме",
      "paste": "Вставить",
      "clipboardUnavailable": "Чтение буфера обмена в браузере здесь недоступно — используйте Ctrl/Cmd + V в редакторе.",
      "clipboardEmpty": "В буфере обмена сейчас нет текста.",
      "clipboardBlocked": "Доступ к буферу обмена заблокирован — вставьте напрямую с помощью Ctrl/Cmd + V.",
      "placeholder": "Вставьте статью, исследовательские заметки, стенограмму встречи или эссе (минимум 25 слов / 120 символов, до 25 000 символов)...",
      "word": "слово",
      "words": "слов",
      "chars": "симв.",
      "estRead": "Примерное время чтения: ",
      "stop": "Стоп",
      "summarizing": "Резюмирование...",
      "summarizeButton": "Резюмировать текст",
      "addMoreBefore": "Добавьте ещё ",
      "addMoreMiddle": " слов (минимум ",
      "addMoreAnd": " слова и ",
      "addMoreAfter": " символов), чтобы ИИ мог извлечь содержательное резюме.",
      "generatingSummary": "Создание резюме: {length} (формат: {format})...",
      "errorDailyLimit": "Достигнут дневной лимит бесплатных резюме",
      "errorRateLimited": "Пожалуйста, немного замедлитесь",
      "errorGlobal": "Достигнута дневная мощность платформы",
      "errorGeneric": "Не удаётся резюмировать прямо сейчас",
      "retry": "Повторить",
      "emptyError": "Вставьте или введите статью, отчёт или заметки перед резюмированием.",
      "tooShortErrorBefore": "Ваш текст слишком короткий для содержательного резюме (",
      "tooShortErrorMiddle": " слов). Введите не менее ",
      "tooShortErrorAnd": " слова и ",
      "tooShortErrorAfter": " символов.",
      "overLimitBefore": "Ввод превышает лимит в ",
      "overLimitMiddle": " символов. Сократите текст на ",
      "overLimitAfter": " символов и попробуйте снова.",
      "connectionError": "Временная проблема с подключением при резюмировании. Попробуйте снова.",
      "resultTitle": "Результат резюме",
      "shorterSuffix": "% короче",
      "copySummary": "Копировать резюме",
      "downloadTxt": "Скачать TXT",
      "originalRead": "Чтение оригинала",
      "summaryRead": "Чтение резюме",
      "compressionSaved": "Сжатие и сэкономленное время",
      "savesPrefix": "экономит ~",
      "tabCompare": "Оригинал и резюме",
      "tabSummary": "Только резюме",
      "resultAria": "Сгенерированное резюме и сравнение",
      "originalText": "Исходный текст",
      "summaryOutput": "Вывод резюме",
      "summarizedWith": "Резюмировано бесплатной моделью Groq",
      "fallbackNote": " (автоматический переход на резервную модель)",
      "preservedNote": ". Ключевые имена, даты и цифры строго сохранены из вашего ввода."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "Уменьшить изображение до 100 КБ",
          "query": "Я хочу уменьшить размер изображения до 100 КБ.",
          "categoryId": "image-file"
        },
        {
          "label": "Преобразовать PDF в изображения",
          "query": "Мне нужно преобразовать PDF в изображения.",
          "categoryId": "pdf"
        },
        {
          "label": "Посчитать слова в эссе",
          "query": "Я хочу посчитать слова в своём эссе.",
          "categoryId": "text-writing"
        },
        {
          "label": "Создать QR-код",
          "query": "Мне нужно создать QR-код.",
          "categoryId": "social-media"
        },
        {
          "label": "Изменить размеры изображения",
          "query": "Я хочу изменить размеры изображения.",
          "categoryId": "image-file"
        },
        {
          "label": "Исправить грамматику и переписать письмо",
          "query": "Я хочу, чтобы ИИ исправил грамматические ошибки и профессионально переписал письмо.",
          "categoryId": "text-writing"
        },
        {
          "label": "Резюмировать длинную статью",
          "query": "Мне нужно резюмировать длинную статью в ключевые пункты.",
          "categoryId": "text-writing"
        },
        {
          "label": "Проверка PDF в Word",
          "query": "Мне нужно преобразовать PDF в Word.",
          "categoryId": "all"
        }
      ],
      "title": "Умный поиск инструментов ИИ",
      "searchesLine": "Ищет среди {count} настоящих инструментов UtilityFlow (85 браузерных + 2 ИИ)",
      "aiSearchesToday": "Поисков ИИ сегодня:",
      "leftUnlimited": "осталось · Мгновенный локальный поиск без ограничений",
      "quotaFallback": "До 10 бесплатных ИИ-поисков в день · Локальный поиск без ограничений",
      "backendBefore": "Для семантического ранжирования ИИ требуется ",
      "backendAfter": " на сервере, а мгновенный локальный поиск по ключевым словам среди всех {count} инструментов работает сразу.",
      "queryLabel": "Опишите, что вы хотите сделать (простым языком или ключевыми словами)",
      "queryPlaceholder": "напр. «Я хочу уменьшить размер изображения до 100 КБ» или «преобразовать PDF в PNG»",
      "categoryLabel": "Необязательная категория задачи",
      "allCategories": "Все категории ({count} инструментов)",
      "characters": "символов",
      "findButton": "Найти подходящий инструмент",
      "findingButton": "Поиск лучшего инструмента...",
      "tryTask": "Попробуйте реальную задачу или выберите частый вопрос",
      "loadingLine": "Сопоставляем ваш запрос с {count} проверенными инструментами UtilityFlow...",
      "errorTitle": "Семантическое ранжирование ИИ недоступно",
      "retryAi": "Повторить ИИ",
      "describeError": "Опишите задачу или проблему, которую хотите решить (минимум 2 символа).",
      "queryTooLongBefore": "Запрос превышает ",
      "queryTooLongAfter": " символов. Пожалуйста, описывайте кратко.",
      "unexpectedFormat": "ИИ вернул неожиданный формат. Ниже показаны быстрые совпадения по ключевым словам из нашего реального каталога.",
      "contactError": "Временная проблема при обращении к ИИ-ранжированию. Результаты поиска по ключевым словам остаются активными ниже.",
      "bestTool": "Лучший рекомендуемый инструмент",
      "noExact": "Точного подходящего инструмента сейчас нет",
      "noMatchFallback": "В UtilityFlow сейчас нет специального инструмента, который напрямую выполняет «{query}». Мы никогда не придумываем фальшивые инструменты или ссылки.",
      "relevantAlt": "Подходящие альтернативы",
      "relatedTools": "Связанные существующие инструменты (только частичные сценарии)",
      "supportedPrefix": "Поддерживается: ",
      "openName": "Открыть {name}",
      "matchedWith": "Сопоставлено по проверенному каталогу UtilityFlow с помощью бесплатной модели Groq",
      "fallbackNote": " (автоматический переход на резервную модель)",
      "instantMatches": "Мгновенные совпадения по ключевым словам ({count})",
      "matchedLocally": "Сопоставлено локально среди {count} инструментов",
      "matchedPrefix": "Совпадение: ",
      "suggestionsTitle": "Умные предложения",
      "suggestionsAll": "По популярным задачам",
      "suggestionsCategory": "в выбранной категории",
      "clickOpen": "Нажмите на любой инструмент, чтобы открыть его",
      "openToolArrow": "Открыть инструмент →",
      "recommendationsAria": "Рекомендации ИИ-инструментов",
      "instantAria": "Мгновенные совпадения по ключевым словам",
      "suggestionsAria": "Умные предложения инструментов при загрузке страницы"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "Исправить грамматику",
          "hint": "Исправление грамматики и пунктуации"
        },
        "rewrite-text": {
          "label": "Переписать текст",
          "hint": "Плавность и естественные формулировки"
        },
        "improve-writing": {
          "label": "Улучшить текст",
          "hint": "Улучшение ясности и выбора слов"
        },
        "make-professional": {
          "label": "Сделать профессиональным",
          "hint": "Деловая и управленческая ясность"
        },
        "make-casual": {
          "label": "Сделать неформальным",
          "hint": "Расслабленный повседневный стиль"
        },
        "simplify-text": {
          "label": "Упростить текст",
          "hint": "Ясные, легко читаемые предложения"
        },
        "expand-text": {
          "label": "Расширить текст",
          "hint": "Дополнительные полезные детали на основе ввода"
        },
        "paraphrase": {
          "label": "Перефразировать",
          "hint": "Новые формулировки, тот же смысл"
        },
        "fix-spelling": {
          "label": "Исправить орфографию",
          "hint": "Только опечатки и заглавные буквы"
        },
        "write-email": {
          "label": "Написать письмо",
          "hint": "Структурированное письмо с темой"
        }
      },
      "tones": {
        "professional": "Профессиональный",
        "friendly": "Дружелюбный",
        "formal": "Формальный",
        "casual": "Неформальный",
        "academic": "Академический",
        "persuasive": "Убедительный",
        "simple": "Простой"
      },
      "languageLabels": {
        "English (US)": "Английский (США)",
        "English (UK)": "Английский (Великобритания)",
        "Spanish": "Испанский",
        "French": "Французский",
        "German": "Немецкий",
        "Portuguese": "Португальский",
        "Italian": "Итальянский",
        "Dutch": "Нидерландский",
        "Arabic": "Арабский",
        "Hindi": "Хинди",
        "Urdu": "Урду",
        "Turkish": "Турецкий",
        "Japanese": "Японский",
        "Korean": "Корейский",
        "Chinese (Simplified)": "Китайский (упрощённый)",
        "Same as original language": "Тот же язык, что и в оригинале"
      },
      "samples": {
        "default": "Привет, команда, я хотел подвести итог вчерашней встрече и поделиться обновлённым таймлайном запуска нашего продукта в Q4. Осталось ещё два пункта, которые нам нужно проверить до пятницы, поэтому дайте знать, если возникнут блокеры.",
        "write-email": "нужно обновить клиента Даниэля о запуске мобильного приложения. тестирование завершилось сегодня, осталось исправить 2 небольших UI-бага завтра утром, готовы к отправке в App Store в пятницу днём. спросите, подходит ли понедельник в 10 утра для звонка по передаче.",
        "fix-spelling": "Мы рады саобщить, что ежеквартальное окно обслуживания прошло гладко без незапланированных простоев на всех серверах.",
        "expand-text": "Удалённые асинхронные стендапы экономят время инженеров и позволяют коллегам по всему миру глубоко сосредоточиться без постоянных прерываний в календаре."
      },
      "title": "Бесплатный ИИ-ассистент по письму",
      "noLogin": "Без входа и карты",
      "allowanceBefore": "Дневной бесплатный лимит:",
      "allowanceAfter": "осталось на сегодня",
      "allowanceFallback": "До 5 бесплатных запросов в день",
      "backendTitle": "Ключ бэкенда ИИ пока не активен в этой среде.",
      "backendSet": "Настройте",
      "backendRest": " на сервере или в Worker, чтобы включить живую ИИ-генерацию текстов.",
      "stepTask": "1. Выберите задачу (10 режимов)",
      "stepTone": "2. Тон",
      "stepLanguage": "3. Язык вывода",
      "stepText": "4. Ваш исходный текст",
      "taskSelectorAria": "Выбор задачи письма",
      "placeholder": "Введите или вставьте абзац, сообщение, заметки или черновик письма (до 12 000 символов)...",
      "word": "слово",
      "words": "слов",
      "characters": "символов",
      "chars": "симв.",
      "tip": "Совет: нажмите Ctrl + Enter для генерации",
      "stop": "Стоп",
      "generating": "Генерация...",
      "applying": "Применение",
      "tonePhrase": "тона {tone}",
      "applyingIn": "на языке",
      "errorDailyLimit": "Достигнут дневной бесплатный лимит",
      "errorRateLimited": "Пожалуйста, немного замедлитесь",
      "errorGlobal": "Достигнута дневная мощность платформы",
      "errorGeneric": "Не удаётся выполнить запрос на написание",
      "retry": "Повторить",
      "emptyError": "Введите или вставьте текст перед нажатием «Создать».",
      "overLimitBefore": "Ввод превышает лимит в ",
      "overLimitMiddle": " символов. Сократите черновик на ",
      "overLimitAfter": " символов и попробуйте снова.",
      "connectionError": "Временная проблема с подключением при генерации. Попробуйте снова.",
      "resultTitle": "Улучшенный результат",
      "copyResult": "Копировать результат",
      "downloadTxt": "Скачать TXT",
      "editOutput": "Редактировать результат дальше",
      "tabCompare": "Оригинал и улучшенный вариант",
      "tabDiff": "Подсветить изменения",
      "tabResult": "Только результат",
      "resultAria": "Улучшенный результат письма и сравнение",
      "originalText": "Исходный текст",
      "improvedText": "Улучшенный текст",
      "removed": "Удалено",
      "added": "Добавлено / обновлено",
      "processedWith": "Обработано бесплатной моделью Groq",
      "fallbackNote": " (автоматический переход на резервную модель)",
      "reviewNote": ". Всегда проверяйте итоговый текст перед отправкой."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Теги Canonical и Hreflang",
      "redirectsMode": "Генератор правил 301-редиректа",
      "canonicalLabel": "Самоссылочный канонический URL",
      "alternatesLabel": "Языковые и региональные альтернативы",
      "addLocale": "Добавить локаль",
      "langCodeAria": "Код языка",
      "alternateUrlAria": "Альтернативный URL",
      "removeLocaleAria": "Удалить строку локали",
      "htmlTagsLabel": "HTML-теги ссылок в <head>",
      "copyHtml": "Копировать HTML",
      "xmlSnippetLabel": "Фрагмент <xhtml:link> XML-карты сайта",
      "copyXml": "Копировать XML",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (блок server)",
      "copyRules": "Копировать правил: {n}",
      "pairsLabel": "Пары «источник → назначение» (через запятую, табуляцию или « -> »)",
      "generatedConfigLabel": "Сгенерированная конфигурация 301-редиректов",
      "skippedInvalid": "Пропущено строк без целевого назначения: {n}."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "Техническое SEO начинается с чистых сканируемых URL, точных канонических тегов и структурированных XML-карт сайта. Когда издатели пишут полезный контент, ориентированный на намерения пользователей, а не на набивку ключевых слов, поисковые системы естественно понимают глубину темы. Регулярно проверяйте заголовки, метаописания и внутренние ссылки.",
      "defaultTargetKeyword": "техническое seo",
      "guidanceTitle": "Редакционные рекомендации:",
      "guidanceBody": "Современные поисковые системы не вознаграждают за достижение фиксированной нормы плотности ключевых слов. Используйте этот аудит распределения, чтобы заметить случайные повторы или убедиться, что основные понятия ясно представлены в вашем тексте.",
      "targetLabel": "Целевое ключевое слово / фраза (необязательно)",
      "targetPlaceholder": "напр. техническое seo",
      "phraseLengthLabel": "Длина фразы",
      "oneWord": "1 слово",
      "twoWord": "Фразы из 2 слов",
      "threeWord": "Фразы из 3 слов",
      "stripHtml": "Удалять HTML-теги",
      "ignoreStopWords": "Игнорировать стоп-слова",
      "textLabel": "Черновик статьи или вставленный HTML-текст",
      "totalWords": "Всего слов",
      "uniqueVocabulary": "Уникальная лексика",
      "readingTime": "Прибл. время чтения",
      "targetPrefix": "Цель: ",
      "hits": "{n} вхождений ({d}%)",
      "rankHeader": "Ранг",
      "termHeader": "Термин / N-грамма",
      "occurrencesHeader": "Вхождения",
      "shareHeader": "Доля (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow — быстрые браузерные онлайн-инструменты",
      "defaultDescription": "Изучите 85 быстрых браузерных инструментов с приоритетом приватности: редактирование текста, кодирование для разработчиков, финансовые калькуляторы, PDF-процессы и SEO.",
      "pageTitleLabel": "Заголовок страницы (<title> / og:title)",
      "titleChars": "{n} симв. (идеально 30–60)",
      "metaDescriptionLabel": "Метаописание",
      "descChars": "{n} симв. (идеально 120–160)",
      "canonicalUrlLabel": "Канонический URL",
      "ogImageLabel": "URL изображения Open Graph (рекомендуется 1200×630)",
      "siteNameLabel": "Название сайта (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter Card",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Директива follow для роботов",
      "includeViewportLabel": "Включать теги charset и viewport",
      "generatedTagsLabel": "Сгенерированные HTML-теги <head>",
      "copyHtml": "Копировать HTML",
      "downloadHtml": "Скачать .html",
      "socialPreviewLabel": "Предпросмотр карточки для соцсетей",
      "socialPreviewFallback": "Предпросмотр карточки для соцсетей",
      "untitledPage": "Страница без названия",
      "metaSnippetFallback": "Здесь появится фрагмент метаописания."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Аудит исходного HTML на стороне клиента:",
      "auditBody": "Браузеры блокируют межсайтовый скрапинг (CORS) произвольных сторонних сайтов и не имеют доступа к приватной поисковой аналитике. Вставьте исходный HTML-код страницы ниже (Просмотр кода страницы), чтобы локально проверить DOM-теги.",
      "pastedHtmlLabel": "Вставленный исходный HTML",
      "loadSampleHtml": "Загрузить пример HTML",
      "htmlPlaceholder": "Вставьте исходный код <html>...</html>...",
      "scoreLabel": "Оценка DOM-аудита",
      "checksPassed": "Пройдено проверок: {passed} / {total}",
      "linksSummary": "Ссылки: {total} ({internal} внутр. / {external} внешн.)",
      "robotsMetaLabel": "Мета robots: ",
      "robotsDefault": "По умолчанию (index, follow)",
      "headingOutline": "Структура заголовков (H1–H4)",
      "emptyState": "Вставьте исходный HTML слева, чтобы проверить заголовок, описание, заголовки, канонические ссылки и alt-теги.",
      "checkTitle": "Тег заголовка (<title>)",
      "checkMetaDesc": "Метаописание",
      "checkH1": "Ровно один заголовок <h1>",
      "checkCanonical": "Канонический URL (<link rel=\"canonical\">)",
      "checkAlt": "Атрибуты alt изображений",
      "checkOgJsonLd": "Open Graph и структурированные данные JSON-LD",
      "titleDetail": "{n} симв.: «{title}»",
      "titleMissing": "Тег <title> отсутствует в <head>.",
      "descDetail": "{n} симв. (цель 120–160).",
      "descMissing": "Отсутствует <meta name=\"description\">.",
      "h1Detail": "Найдено элементов <h1>: {n}.",
      "canonicalMissing": "Канонический тег не объявлен.",
      "noImages": "В разметке нет элементов <img>.",
      "altDetail": "{with}/{total} изображений содержат описательный alt-текст.",
      "ogDetail": "og:title {presence} · блоков JSON-LD: {n}.",
      "present": "присутствует",
      "missing": "отсутствует"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Директива индексации",
      "indexOption": "index (разрешить индексацию)",
      "noindexOption": "noindex (исключить из выдачи)",
      "linkCrawlingLabel": "Обход ссылок",
      "followOption": "follow (передавать сигналы ссылок)",
      "nofollowOption": "nofollow (не переходить по ссылкам)",
      "largeOption": "large (обнаруживать подходящие)",
      "htmlTagLabel": "HTML-метатег в <head>",
      "copyHtmlTag": "Копировать HTML-тег",
      "httpHeaderLabel": "HTTP-заголовок ответа (PDF / не-HTML)",
      "copyHeader": "Копировать заголовок",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Шаблон пути Cloudflare _headers",
      "copyBlock": "Копировать блок"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Стартовые шаблоны:",
      "allowAll": "Разрешить всех краулеров",
      "standardWebApp": "Стандартное веб-приложение / SaaS",
      "wordpressClean": "Чистый WordPress",
      "stagingBlockAll": "Staging (заблокировать всё)",
      "crawlerRules": "Правила путей краулера",
      "addRule": "Добавить правило",
      "directiveAria": "Директива",
      "pathAria": "Путь",
      "deleteRuleAria": "Удалить правило",
      "crawlDelayLabel": "Crawl-delay (секунды, необязательно)",
      "crawlDelayPlaceholder": "Нет",
      "sitemapUrlsLabel": "URL карт сайта (по одному в строке)",
      "generatedLabel": "Сгенерированный robots.txt"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Как создавать быстрые браузерные утилиты",
      "defaultFaqQ1": "Выполняет ли UtilityFlow инструменты локально в браузере?",
      "defaultFaqA1": "Да. Почти все утилиты выполняются прямо в памяти браузера, не отправляя вводимые данные на внешние серверы.",
      "defaultFaqQ2": "Полезен ли структурированный JSON-LD для SEO?",
      "defaultFaqA2": "Да. Корректный JSON-LD Schema.org проясняет контекст сущностей для поисковых краулеров и право на расширенные результаты.",
      "defaultProductName": "Профессиональная эргономичная механическая клавиатура",
      "defaultProductDesc": "Низкопрофильная беспроводная клавиатура, созданная для разработчиков ПО.",
      "defaultCrumbHome": "Главная",
      "defaultCrumbSeo": "SEO-инструменты",
      "defaultCrumbSchema": "Генератор разметки Schema",
      "headlineLabel": "Заголовок",
      "authorNameLabel": "Имя автора",
      "publisherNameLabel": "Имя издателя",
      "datePublishedLabel": "Дата публикации",
      "articleUrlLabel": "URL статьи",
      "featuredImageLabel": "URL главного изображения",
      "questionLabel": "Вопрос №{n}",
      "removeQuestionAria": "Удалить вопрос {n}",
      "questionPlaceholder": "Вопрос",
      "acceptedAnswerPlaceholder": "Принятый ответ",
      "addFaqRow": "Добавить строку FAQ",
      "productNameLabel": "Название продукта",
      "descriptionLabel": "Описание",
      "priceLabel": "Цена",
      "currencyLabel": "Валюта",
      "availabilityLabel": "Наличие",
      "orgNameLabel": "Название организации",
      "websiteUrlLabel": "URL сайта",
      "logoUrlLabel": "URL логотипа",
      "breadcrumbLabelAria": "Метка хлебных крошек {n}",
      "breadcrumbUrlAria": "URL хлебных крошек {n}",
      "labelPlaceholder": "Метка",
      "addLevel": "Добавить уровень",
      "jsonLdOutputLabel": "Вывод <script> JSON-LD",
      "copyScriptTag": "Копировать тег Script"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "Форматировщик и валидатор JSON — красивая печать и минификация | UtilityFlow",
      "defaultDescription": "Форматируйте, проверяйте, минифицируйте и сортируйте ключи в JSON-данных мгновенно в браузере, с деталями синтаксических ошибок по строкам и столбцам.",
      "desktopSerp": "SERP на компьютере (~580px заголовок)",
      "mobileSerp": "Мобильный SERP (~120 симв. описания)",
      "copyTitleMeta": "Копировать заголовок и мета",
      "seoTitleLabel": "SEO-заголовок",
      "titleMetrics": "{chars} симв. · ~{px} px / макс. 580 px",
      "metaDescriptionLabel": "Метаописание",
      "descMetrics": "{chars} симв. · ~{px} px",
      "pageUrlLabel": "URL страницы (для предпросмотра хлебных крошек)",
      "siteNameLabel": "Название сайта",
      "boldKeywordLabel": "Жирное ключевое слово",
      "optionalPlaceholder": "Необязательно",
      "datePrefixLabel": "Префикс даты",
      "datePlaceholder": "напр. 12 ноя 2025",
      "desktopSimulation": "Симуляция поискового сниппета на компьютере",
      "mobileSimulation": "Симуляция поискового сниппета на мобильном",
      "titleFallback": "Здесь появится ваш SEO-заголовок",
      "descFallback": "Здесь появится предпросмотр вашего метаописания."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "Как создать чистый URL-слаг для технического SEO!\n10 лучших инструментов Café и продуктивности в 2026 году\nПолный чек-лист XML Sitemap и Robots.txt",
      "domainLabel": "Базовый домен / подпапка (для предпросмотра полного URL)",
      "separatorLabel": "Разделитель слов",
      "hyphenOption": "Дефис (-) — рекомендуется Google",
      "underscoreOption": "Подчёркивание (_)",
      "maxLengthLabel": "Макс. длина слага ({n} симв.)",
      "stripStopWords": "Удалять необязательные английские стоп-слова (a, the, and, of, in, to)",
      "trailingSlash": "Включать завершающий слеш (/)",
      "titlesLabel": "Заголовки страниц (по одному в строке для пакетной генерации)",
      "generatedLabel": "Сгенерированные SEO-слаги ({n})",
      "copyAllSlugs": "Копировать все слаги",
      "copyAllUrls": "Копировать все полные URL",
      "originalTitleHeader": "Исходный заголовок",
      "slugUrlHeader": "SEO-слаг и полный URL",
      "copyHeader": "Копировать"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "Дата <lastmod> (необязательно)",
      "changefreqLabel": "Подсказка <changefreq>",
      "priorityLabel": "<priority> по умолчанию",
      "omitTag": "Пропустить тег",
      "deduplicateLabel": "Удалять дубликаты точных URL",
      "urlsLabel": "Канонические URL (по одному полному https:// URL в строке)",
      "skippedInvalid": "Пропущено неверных строк URL ({n}): ",
      "generatedLabel": "Сгенерированный sitemap.xml ({n} URL)",
      "copyXml": "Копировать XML",
      "downloadXml": "Скачать .xml",
      "generatedAria": "Сгенерированная XML-карта сайта"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Создаём быстрые браузерные инструменты для авторов и команд.   \n\nНовые еженедельные рабочие процессы — каждый вторник.\n\nПопробуйте бесплатные утилиты по ссылке ниже!",
      "modeBraille": "Невидимый разделитель (⠀ U+2800)",
      "modeDot": "Минимальный разделитель-точка (.)",
      "modeClean": "Только чистые пробелы в конце",
      "collapse": "Убирать случайные двойные пробелы",
      "labelRaw": "Черновик подписи или био",
      "phRaw": "Напишите подпись с пустыми строками там, где нужны разрывы абзацев...",
      "tip": "Совет: соцсети часто схлопывают пустые абзацы, когда в конце строки выше стоят пробелы.",
      "labelOut": "Готовый результат для вставки",
      "copyFormatted": "Копировать отформатированную подпись",
      "charsLabel": "Символов:",
      "linesLabel": "Строк:",
      "blankLabel": "Сохранено пустых разрывов:",
      "fitsBio": "Подходит для био Instagram на 150 символов",
      "captionLength": "Длина подписи (> лимита био 150)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Проблема → Обострение → Решение (PAS)",
        "tutorial": "Практичный разбор в 3 шага",
        "bab": "До → После → Мост",
        "checklist": "Чек-лист запуска / аудита",
        "myth": "Распространённый миф и практическая реальность"
      },
      "frameworkDescriptions": {
        "pas": "Выделяет конкретную боль, прежде чем предложить исправление рабочего процесса.",
        "tutorial": "Пронумерованная структура инструкций, подходящая для каруселей LinkedIn и сохранений.",
        "bab": "Сопоставляет старые трудности с оптимизированным результатом.",
        "checklist": "Чёткий контрольный список, который авторы могут сохранить в закладки.",
        "myth": "Оспаривает устаревшие советы прямыми и краткими альтернативами."
      },
      "frameworkLabels": {
        "fixesHeading": "Что на самом деле исправляет это:",
        "beforeLabel": "До: ",
        "afterLabel": "После: ",
        "bridgeHeading": "Мост:",
        "mythLabel": "Распространённый миф: ",
        "worksHeading": "Что работает на практике:"
      },
      "sampleHook": "Хватит терять часы на ручное форматирование ссылок кампаний.",
      "sampleContext": "Несогласованные UTM-параметры и сломанные пробелы в био незаметно искажают аналитические отчёты.",
      "samplePoints": "Стандартизируйте теги utm_source и utm_medium в нижнем регистре\nПроверяйте свёртывание символов перед публикацией\nСохраняйте чистые разрывы абзацев без пробелов в конце",
      "sampleCta": "Сохраните этот чек-лист для следующего запуска продукта.",
      "infoTitle": "Детерминированная сборка шаблонов:",
      "infoBody": "Этот инструмент использует структурированные копирайтерские фреймворки прямо в вашем браузере — без ИИ-модели или внешнего API.",
      "labelHook": "Вступительный хук (первые 1–2 строки)",
      "labelContext": "Контекст / постановка проблемы",
      "labelPoints": "Ключевые выводы (по одному в строке)",
      "labelCta": "Призыв к действию (CTA)",
      "labelTags": "Хештеги",
      "previewTitle": "Предпросмотр отформатированной подписи",
      "copyCaption": "Копировать подпись",
      "charsLabel": "Символов:",
      "wordsLabel": "Слов:",
      "fits": "Подходит",
      "threadNeeded": "Нужен тред",
      "tooLong": "Слишком длинно"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Регистр форматирования и доступности",
      "optCamel": "PascalCase (#CamelCase — удобно для скринридеров)",
      "optLower": "все строчные (#lowercase)",
      "optPreserve": "Сохранять исходный регистр",
      "outLabel": "Формат вывода",
      "optInline": "Одна строка (через пробел)",
      "optNewline": "По одному хештегу в строке",
      "optDots": "Разделитель свёртки подписи (.\\n.\\n.)",
      "dedupe": "Удалять дублирующиеся хештеги",
      "labelRaw": "Ключевые слова или неупорядоченные хештеги (через запятую, пробел или строку)",
      "labelResult": "Чистая группа хештегов",
      "copyHashtags": "Копировать хештеги",
      "statClean": "Чистых хештегов",
      "statDupes": "Дубликатов удалено",
      "statIgMax": "Максимум Instagram (30)",
      "statWithin": "В пределах лимита IG в 30",
      "statExceeds": "Превышает лимит в 30 тегов",
      "statChars": "Символов на выходе"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 симв. · буквы, цифры, подчёркивания",
        "instagram": "1–30 симв. · буквы, цифры, точки, подчёркивания",
        "tiktok": "2–24 симв. · буквы, цифры, подчёркивания, точки",
        "youtube": "3–30 симв. · буквы, цифры, _, -, .",
        "threads": "1–30 симв. · общее пространство имён Instagram",
        "github": "1–39 симв. · буквы, цифры и одиночные дефисы"
      },
      "infoTitle": "Проверка правил и прямые ссылки для проверки:",
      "infoBodyBefore": "Проверяет синтаксис и ограничения длины хендла офлайн, не угадывая доступность. Нажмите на ссылку ",
      "infoEm": "Открыть URL профиля",
      "infoBodyAfter": ", чтобы проверить статус занятости напрямую.",
      "labelBrand": "Имя бренда, проекта или автора",
      "phBrand": "напр. Utility Hub",
      "labelActive": "Активный хендл для проверки",
      "copyAt": "Копировать @",
      "variationsTitle": "Согласованные варианты хендлов:",
      "thPlatform": "Платформа",
      "thRules": "Правила формата",
      "thStatus": "Статус синтаксиса",
      "thCheck": "Ручная проверка",
      "valid": "Допустимый формат",
      "invalid": "Недопустимый синтаксис/длина",
      "checkUrl": "Проверить URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Жирный (без засечек)",
        "sans-italic": "Курсив (без засечек)",
        "sans-bold-italic": "Жирный курсив (без засечек)",
        "serif-bold": "Жирный (с засечками)",
        "monospace": "Моноширинный",
        "double-struck": "Двойной штрих (доска)",
        "script-bold": "Жирный рукописный",
        "fraktur-bold": "Жирный фрактур",
        "small-caps": "Малые прописные",
        "fullwidth": "Полноширинная эстетика"
      },
      "styleNotes": {
        "sans-bold": "Высокая читаемость для заголовков био и хуков постов",
        "sans-italic": "Мягкий акцент внутри подписей",
        "sans-bold-italic": "Сильные акценты и разделители секций",
        "serif-bold": "Акцент в редакционном стиле",
        "monospace": "Кодовые хендлы, даты и технические теги",
        "double-struck": "Акценты оформления",
        "script-bold": "Декоративные подписи в био",
        "fraktur-bold": "Готическое начертание",
        "small-caps": "Чистые метки профиля в виде прописных",
        "fullwidth": "Широкие ретро-заголовки для соцсетей"
      },
      "sampleText": "Новый набор инструментов автора 2025",
      "accessibilityTitle": "Примечание о доступности:",
      "accessibilityBody": "Стилизованные символы Unicode относятся к блокам математических символов, поэтому скринридеры могут читать их по буквам или пропускать, а некоторые поисковые индексы их игнорируют. Используйте их умеренно для коротких акцентов, а не для целых абзацев.",
      "labelInput": "Текст для стилизации",
      "placeholder": "Введите короткий заголовок, строку био или CTA...",
      "previewEmpty": "Предпросмотр"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Био Instagram",
        "linkedinPost": "Пост LinkedIn",
        "newsletter": "Рассылка",
        "youtubeDescription": "Описание YouTube"
      },
      "presetsLabel": "Быстрые пресеты каналов:",
      "errorEmpty": "Введите URL целевого сайта.",
      "errorInvalid": "Введите корректный целевой URL (например, https://example.com/landing).",
      "labelUrl": "URL целевого сайта *",
      "labelSource": "Источник кампании (utm_source) *",
      "phSource": "напр. instagram, newsletter, google",
      "labelMedium": "Канал кампании (utm_medium) *",
      "phMedium": "напр. social, cpc, email, video",
      "labelCampaign": "Название кампании (utm_campaign)",
      "phCampaign": "напр. spring_launch",
      "labelContent": "Содержание кампании (utm_content)",
      "phContent": "напр. hero_banner, bio_button",
      "labelTerm": "Термин кампании (utm_term)",
      "phTerm": "Необязательное платное ключевое слово или тег аудитории",
      "normalizeLabel": "Принудительно в нижний регистр и заменять пробелы на подчёркивания (`_`)",
      "generatedTitle": "Сгенерированный URL кампании",
      "copyUtm": "Копировать UTM-URL",
      "thParam": "Параметр запроса",
      "thValue": "Нормализованное значение"
    }
  },
'add-pdf-page-numbers': {
    strings: {
      errStart: 'Начальный номер страницы должен быть целым числом от 1 и выше.',
      stampedSuccess: (n: number, size: string) => `Номера страниц проставлены на ${n} стр. (${size}).`,
      pageOfLabel: (cur: number, total: number) => `Страница ${cur} из ${total}`,
      dropTitleEmpty: 'Выберите PDF-файл для добавления номеров страниц',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} стр.)`,
      dropSub: 'Вставляет чёткие векторные подписи страниц в отчёты, договоры и пакеты',
      labelPos: 'Положение',
      optBottomCenter: 'Внизу по центру',
      optBottomRight: 'Внизу справа',
      optBottomLeft: 'Внизу слева',
      optTopRight: 'Вверху справа',
      labelFmt: 'Формат подписи',
      optPageOf: 'Страница 1 из N',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: 'Начальный номер',
      labelSize: 'Размер шрифта (пт)',
      opt9: '9 пт (незаметный)',
      opt11: '11 пт (стандартный)',
      opt14: '14 пт (крупный)',
      skipCover: 'Пропустить обложку (начать нумерацию со страницы 2)',
      numbering: 'Нумерация страниц...',
      addBtn: 'Добавить номера страниц и скачать',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `Не удаётся декодировать изображение «${name}».`,
      errCanvas: 'Контекст Canvas 2D недоступен.',
      errConvert: (name: string) => `Не удалось преобразовать «${name}» в PNG.`,
      errNotImage: (name: string) => `«${name}» — неподдерживаемый файл изображения (PNG, JPG, WebP).`,
      errRead: (name: string) => `Не удаётся прочитать «${name}».`,
      errLoad: 'Не удаётся загрузить изображение.',
      errEmpty: 'Сначала добавьте хотя бы одно изображение.',
      errBuild: 'Не удалось преобразовать изображения в PDF.',
      createdSuccess: (n: number, size: string) => `PDF на ${n} стр. (${size}) успешно создан.`,
      dropTitle: 'Выберите изображения PNG, JPG или WebP',
      dropSub: 'Преобразуйте скриншоты, сканы или фото в один PDF локально',
      labelSize: 'Размер страницы PDF',
      optA4: 'A4 книжная (210 × 297 мм)',
      optLetter: 'US Letter (8,5 × 11 дюймов)',
      optFit: 'Точные размеры изображения',
      labelMargin: 'Поля страницы',
      optMargin0: 'Без полей (0 пт)',
      optMargin24: 'Стандартные поля (24 пт)',
      optMargin48: 'Широкие поля (48 пт)',
      labelOut: 'Имя выходного файла',
      moveUp: (name: string) => `Переместить ${name} вверх`,
      moveDown: (name: string) => `Переместить ${name} вниз`,
      removeFile: (name: string) => `Удалить ${name}`,
      building: 'Создание PDF...',
      convertBtn: (n: number) => `Преобразовать ${n} изображений в PDF`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: 'Не удаётся прочитать выбранные PDF-файлы.',
      errMin2: 'Добавьте не менее двух PDF-файлов для слияния.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n} PDF (${pages} стр., ${size}) успешно объединены.`,
      dropValidating: 'Проверка PDF-файлов...',
      dropTitle: 'Выберите или перетащите несколько PDF-файлов',
      dropSub: 'Слияние на 100% в браузере через pdf-lib · Только незашифрованные PDF · Никогда не загружается',
      filesQueued: 'файлов в очереди',
      totalPagesLabel: 'всего страниц',
      combinedSize: 'общий размер входных файлов',
      clearQueue: 'Очистить очередь',
      pageSingular: 'страница',
      pagePlural: 'страниц',
      moveUp: (name: string) => `Переместить ${name} вверх`,
      moveDown: (name: string) => `Переместить ${name} вниз`,
      removeFile: (name: string) => `Удалить ${name}`,
      outName: 'Имя выходного файла',
      merging: 'Слияние PDF...',
      mergeBtn: (n: number) => `Объединить ${n} PDF и скачать`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: 'Редактируемые поля метаданных очищены. Нажмите «Сохранить и скачать PDF», чтобы применить.',
      savedSuccess: (size: string) => `Обновлённые метаданные PDF сохранены (${size}).`,
      dropTitleEmpty: 'Выберите PDF-файл для просмотра или редактирования метаданных',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} стр. · ${size})`,
      dropSub: 'Проверяйте свойства документа, очищайте теги автора/ПО или задавайте чистые SEO-заголовки',
      labelTitle: 'Название документа',
      labelAuthor: 'Автор',
      labelSubject: 'Тема / краткое описание',
      labelKeywords: 'Ключевые слова (через запятую)',
      labelCreator: 'Приложение-создатель',
      labelProducer: 'Производитель PDF',
      saving: 'Сохранение PDF...',
      saveBtn: 'Сохранить метаданные и скачать PDF',
      stripBtn: 'Удалить все поля метаданных',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: 'Подходящих страниц для поворота не найдено.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `Повёрнуто страниц: ${a} из ${b} на ${deg}° по часовой стрелке (${size}).`,
      dropTitleEmpty: 'Выберите PDF-файл для поворота страниц',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} стр.)`,
      dropSub: 'Поворачивайте все страницы или отдельные диапазоны локально, без загрузки на сервер',
      labelAngle: 'Угол поворота',
      opt90: '90° по часовой стрелке (вправо)',
      opt270: '90° против часовой стрелки (влево / 270°)',
      opt180: '180° вверх ногами',
      labelScope: 'Применить к',
      optAll: (n: number) => `Все страницы (${n})`,
      optRange: 'Конкретные диапазоны страниц',
      optOdd: 'Только нечётные страницы',
      optEven: 'Только чётные страницы',
      labelRangeInput: (n: number) => `Номера / диапазоны страниц (1–${n})`,
      phRange: 'напр. 1, 3-5',
      rotating: 'Поворот страниц...',
      rotateBtn: 'Применить поворот и скачать PDF',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- Страница ${n} ---`,
      dropExtracting: 'Извлечение текстового слоя PDF...',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} стр.)`,
      dropTitleEmpty: 'Выберите текстовый PDF для извлечения текста',
      dropSub: 'Извлекает встроенный текст Unicode локально через PDF.js · Без загрузки на сервер',
      noTextTitle: 'Выбираемый текстовый слой не найден:',
      noTextBody:
        'Похоже, этот PDF содержит отсканированные изображения или векторные контуры, а не встроенный текстовый слой. Оптическое распознавание символов (OCR) на стороне клиента офлайн не выполняется.',
      markersLabelBefore: 'Включать маркеры заголовков страниц (',
      markersCode: '--- Страница N ---',
      markersLabelAfter: ')',
      copyText: 'Копировать текст',
      downloadTxt: 'Скачать .txt',
      outputAria: 'Вывод извлечённого текста PDF',
      pagesScanned: 'Отсканировано страниц:',
      wordsExtracted: 'Извлечено слов:',
      textSize: 'Размер текста:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'Рендерите до 20 страниц за раз, чтобы память canvas браузера оставалась быстрой и отзывчивой.',
      errCanvas: 'Контекст Canvas 2D недоступен.',
      dropTitleEmpty: 'Выберите PDF для рендеринга в изображения',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} стр. · ${size})`,
      dropSub: 'Рендерится локально через canvas PDF.js · Вывод PNG или JPG',
      labelRange: 'Страницы («все» или диапазон, например 1-4, 6)',
      labelFormat: 'Формат изображения',
      optPng: 'PNG (без потерь / чёткий текст)',
      optJpg: 'JPG (компактный, для фото)',
      labelScale: 'Разрешение рендеринга',
      optScale1: '1,0× (быстрый предпросмотр 72 DPI)',
      optScale15: '1,5× (стандарт 108 DPI)',
      optScale2: '2,0× (чёткий 144 DPI)',
      rendering: 'Рендеринг страниц PDF...',
      renderBtn: 'Отрендерить страницы PDF в изображения',
      pageAlt: (n: number) => `Предпросмотр страницы ${n}`,
      pageLabel: (n: number, w: number, h: number) => `Страница ${n} · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'Нейтральный серый',
        indigo: 'Фирменный индиго',
        red: 'Красный штамп',
      },
      defaultWatermark: 'КОНФИДЕНЦИАЛЬНО',
      errEmpty: 'Введите текст водяного знака перед созданием PDF.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `Водяной знак «${text}» применён к ${n} стр. (${size}).`,
      dropTitleEmpty: 'Выберите PDF-файл для нанесения водяного знака',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} стр.)`,
      dropSub: 'Встраивает чёткие векторные текстовые штампы локально через pdf-lib',
      labelText: 'Текст водяного знака',
      phText: 'КОНФИДЕНЦИАЛЬНО / ЧЕРНОВИК / ТОЛЬКО ДЛЯ ВНУТРЕННЕГО ИСПОЛЬЗОВАНИЯ',
      labelColor: 'Цвет штампа',
      firstPageOnly: 'Только первая страница',
      labelSize: 'Размер шрифта:',
      ptSuffix: (n: number) => `${n} пт`,
      labelOpacity: 'Непрозрачность:',
      labelAngle: 'Поворот:',
      applying: 'Нанесение водяного знака на PDF...',
      applyBtn: 'Применить водяной знак и скачать',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'В PDF должна остаться хотя бы 1 страница.',
      savedSuccess: (n: number, size: string) => `Обновлённый PDF сохранён: ${n} стр. (${size}).`,
      loading: 'Загрузка страниц и предпросмотров PDF...',
      dropTitleFile: (name: string, n: number) => `${name} (активных страниц: ${n})`,
      dropTitleEmpty: 'Выберите PDF-файл для переупорядочивания или удаления страниц',
      dropSub: 'Перемещайте страницы, дублируйте листы или удаляйте ненужные страницы локально',
      outCount: 'Количество страниц на выходе:',
      saving: 'Сохранение PDF...',
      saveBtn: 'Сохранить переупорядоченный PDF',
      thumbAlt: (n: number) => `Исходная страница ${n}`,
      thumbFallback: (n: number) => `Ориг. с.${n}`,
      posLabel: (n: number) => `Поз. #${n}`,
      origLabel: (n: number) => `(ориг. ${n})`,
      moveEarlierTitle: 'Переместить раньше',
      moveEarlierAria: (n: number) => `Переместить позицию ${n} раньше`,
      moveLaterTitle: 'Переместить позже',
      moveLaterAria: (n: number) => `Переместить позицию ${n} позже`,
      dupTitle: 'Дублировать страницу',
      dupAria: (n: number) => `Дублировать страницу на позиции ${n}`,
      delTitle: 'Удалить страницу',
      delAria: (n: number) => `Удалить страницу на позиции ${n}`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `При разделении на отдельные страницы скачивается по одному файлу на страницу. Для документов больше 25 страниц (здесь ${n} страниц) извлекайте диапазоны, чтобы браузер не заблокировал массовые скачивания.`,
      exportedAll: (n: number) => `Экспортировано ${n} одностраничных PDF-файлов.`,
      errNoMatch: 'Подходящих страниц не найдено (например, для чётных страниц нужно 2+ страницы).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `Извлечено страниц: ${a} из ${b} (${size}).`,
      dropTitleEmpty: 'Выберите PDF-файл для разделения или извлечения',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} стр. · ${size})`,
      dropSub: 'Обрабатывается локально в памяти · Нажмите, чтобы заменить документ',
      modeRange: 'Извлечь диапазоны страниц',
      modeOdd: 'Только нечётные страницы',
      modeEven: 'Только чётные страницы',
      modeBurst: 'Разделить на все отдельные страницы',
      labelRange: (n: number) => `Страницы для извлечения (1–${n})`,
      phRange: 'напр. 1-3, 5, 8-10',
      rangeHintBefore: 'Используйте запятые и дефисы (например, ',
      rangeHintAfter: ').',
      extracting: 'Извлечение PDF...',
      splitBtn: 'Разделить и скачать PDF',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'URL сайта',
      tabText: 'Обычный текст',
      tabWifi: 'Сеть Wi-Fi',
      tabEmail: 'Ссылка на email',
      tabPhone: 'Номер телефона',
      labelUrl: 'Целевой URL',
      labelText: 'Текстовое содержимое',
      labelSsid: 'Имя сети (SSID)',
      labelSecurity: 'Тип безопасности',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'Открытая (без пароля)',
      labelWifiPass: 'Пароль Wi-Fi',
      hiddenSsid: 'Скрытая сеть SSID',
      labelEmailTo: 'Email получателя',
      labelEmailSubject: 'Тема (необязательно)',
      labelPhone: 'Номер телефона (рекомендуется формат E.164)',
      sizeLabel: (size: number) => `Размер (${size}px)`,
      labelEc: 'Коррекция ошибок',
      labelFg: 'Передний план',
      labelBg: 'Фон',
      quietZone: 'Поля тихой зоны:',
      modulesLabel: (margin: number) => `${margin} модулей`,
      encodedPayload: 'Закодированная строка полезной нагрузки',
      copyPayload: 'Копировать полезную нагрузку',
      emptyError: 'Введите содержимое выше, чтобы создать сканируемый QR-код.',
      encodeError: 'Не удаётся закодировать QR-полезную нагрузку.',
      qrAlt: 'Сгенерированный сканируемый QR-код',
      downloadPng: 'Скачать PNG',
      downloadSvg: 'Скачать SVG',
      copySvg: 'Копировать SVG',
      sampleText: 'Добро пожаловать в UtilityFlow!',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: 'Стандартный пост',
        profileBio: 'Био профиля',
        caption: 'Подпись',
        feedPost: 'Пост в ленте',
        videoCaption: 'Подпись к видео',
        post: 'Пост',
        videoTitle: 'Название видео',
        description: 'Описание',
      },
      sampleText:
        'Быстрая доставка начинается с небольших ежедневных улучшений.\n\nПопробуйте наши браузерные инструменты для авторов на https://utilityflow.online/tools/ — без регистрации.\n\n#CreatorTools #Workflow',
      labelInput: 'Черновик поста / био для соцсетей',
      copyDraft: 'Копировать черновик',
      placeholder: 'Напишите или вставьте подпись, пост, био или заголовок YouTube...',
      charsLabel: 'Символов:',
      wordsLabel: 'Слов:',
      hashtagsLabel: 'Хештегов:',
      mentionsLabel: 'Упоминаний:',
      urlsLabel: 'Обнаружено URL:',
      urlsWeighted: '(считается как 23 символа в X)',
      overLimit: (n: number, loc: string) => `превышение лимита: ${n.toLocaleString(loc)}`,
      left: (n: number, loc: string) => `осталось: ${n.toLocaleString(loc)}`,
      foldLabel: (n: number) => `Свёртка ~${n} симв.`,
      foldTitle: 'Предпросмотр обрезки ленты / свёртки «Показать ещё»',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `Предпросмотр того, что читатели видят перед нажатием «Показать ещё» (${limit} символов для ${platform} ${surface}).`,
      selectAria: 'Выбрать платформу для предпросмотра обрезки',
      previewEmpty: 'Здесь появится предпросмотр...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'Как мы создали 85 быстрых браузерных утилит без отслеживания',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '24 тыс. просмотров · 2 дня назад',
      errNotImage: 'Выберите файл изображения PNG, JPG или WebP.',
      errDecode: 'Не удаётся декодировать этот файл изображения в браузере.',
      previewEyebrow: 'ПРЕДПРОСМОТР 1280 × 720',
      emptyThumb: 'Загрузите миниатюру, чтобы проверить читаемость в ленте',
      thumbAlt: 'Предпросмотр загруженной миниатюры',
      safeZoneTitle: 'Зона перекрытия значка времени',
      chooseThumb: 'Выбрать локальную миниатюру (PNG / JPG / WebP)',
      replaceThumb: (name: string) => `Заменить: ${name}`,
      recommended: 'Рекомендуется 1280×720 (16:9), до 2 МБ · Никогда не загружается',
      diagTitle: 'Диагностика характеристик изображения',
      dimLabel: 'Размеры',
      dimHdOk: '(HD OK)',
      dimUnder: '(<1280px)',
      aspectLabel: 'Соотношение сторон',
      aspectMatch: 'Соответствует 16:9',
      aspectNo: 'Не 16:9 (может обрезаться / letterbox)',
      sizeLabel: 'Размер файла',
      sizeOk: '(<2 МБ OK)',
      sizeOver: '(> лимита 2 МБ)',
      titleLabel: (len: number) => `Название видео (${len}/100 симв. · ~60 видно на мобильном)`,
      channelLabel: 'Название канала',
      durationLabel: 'Длительность',
      darkMode: 'Предпросмотр ленты в тёмном режиме',
      safeZone: 'Подсветить угловую зону штампа времени',
      desktopCard: 'Карточка домашней ленты на компьютере',
      sidebar: 'Боковая панель просмотра на компьютере (рекомендуется компактная)',
      untitled: 'Видео без названия',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'Введение и обзор' },
        { id: 2, time: '01:15', title: 'Настройка основной архитектуры' },
        { id: 3, time: '04:40', title: 'Живая демонстрация и частые ошибки' },
        { id: 4, time: '08:20', title: 'Итоги и следующие шаги' },
      ],
      newChapter: (n: number) => `Глава ${n}`,
      defaultChapterTitle: 'Глава',
      warnInvalid: 'Одна или несколько меток времени имеют неверный формат (используйте ММ:СС или ЧЧ:ММ:СС).',
      warnMin3: 'Для включения глав видео YouTube требует не менее 3 меток времени в порядке возрастания.',
      warnFirst: 'Первая глава должна начинаться с 00:00, чтобы YouTube распознал главы.',
      warnOrder: 'Главы не в хронологическом порядке (нажмите «Сортировать хронологически»).',
      warnShort: (title: string) =>
        `Глава «${title}» короче 10 секунд после предыдущей главы (минимум YouTube — 10 с).`,
      labelUrl: 'URL видео YouTube или ID видео (для прямых deep-ссылок `?t=`)',
      heading: 'Главы видео',
      sortBtn: 'Сортировать хронологически',
      addBtn: 'Добавить главу',
      tsAria: (n: number) => `Метка времени главы ${n}`,
      titleAria: (n: number) => `Название главы ${n}`,
      phTitle: 'Название главы',
      removeAria: (n: number) => `Удалить главу ${n}`,
      specTitle: 'Проверка спецификации глав YouTube:',
      descBlock: 'Блок глав описания',
      copyChapters: 'Копировать главы',
      emptyChapters: 'Добавьте главы выше, чтобы сгенерировать блок описания.',
      shareTitle: 'Ссылки для шаринга с метками времени',
      videoIdLabel: (id: string) => `(ID видео: ${id})`,
      noVideoId: '(Введите корректный URL YouTube выше)',
      noVideoHint: 'Вставьте корректный URL youtube.com или youtu.be, чтобы создать кликабельные ссылки-переходы `?t=` для каждой главы.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'Файл не выбран.',
      notPdf: (name: string) => `«${name}», по-видимому, не является PDF-файлом.`,
      empty: (name: string) => `«${name}» пуст или обрезан.`,
      noHeader: (name: string) =>
        `В «${name}» отсутствует допустимый заголовок %PDF, обработка невозможна.`,
      enterRanges: 'Введите номера страниц или диапазоны, например «1-3, 5».',
      rangeOutside: (token: string, total: number) =>
        `Диапазон «${token}» выходит за границы страниц документа 1–${total}.`,
      rangeReversed: (token: string) =>
        `У диапазона «${token}» начальная страница больше конечной.`,
      pageMissing: (page: number, total: number) =>
        `Страница ${page} не существует (в документе ${total} страниц).`,
      invalidSyntax: (token: string) =>
        `Недопустимый синтаксис страниц «${token}». Используйте числа и диапазоны, например «1-3, 5».`,
      encrypted:
        'Этот PDF зашифрован или защищён паролем. Разблокируйте его перед локальной обработкой.',
      unable: 'Не удаётся обработать PDF-файл.',
      allKeywords: ['all'],
    },
  },
};
