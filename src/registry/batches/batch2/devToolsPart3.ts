import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const DEV_TOOLS_PART_3: ToolDefinition[] = [
  {
    id: 'sql-formatter',
    slug: 'sql-formatter',
    name: 'SQL Formatter',
    shortDescription:
      'Format, indent, and standardize SQL queries with uppercase/lowercase keywords or minify queries to one line.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'sql formatter',
      'sql beautifier',
      'format sql query',
      'sql minifier',
      'format sql online',
      'sql query beautifier',
      'pretty print sql',
      'sql formatter online',
      'indent sql query',
      'sql code formatter',
    ],
    seo: {
      title: 'SQL Formatter – Beautify & Minify SQL Queries | UtilityFlow',
      description:
        'Format messy SQL queries with clean clause breaks, keyword casing and 2/4-space indentation, or minify them to one line — no sign-up, free, in your browser.',
      primaryKeyword: 'sql formatter',
      secondaryKeywords: ['sql beautifier online', 'pretty print sql', 'sql minifier', 'format sql query online', 'sql query formatter'],
      longTailKeywords: [
        'format select join group by sql query online',
        'convert sql keywords to uppercase cleanly',
        'minify sql query preserving string literals',
        'indent sql query with 2 or 4 spaces online',
        'beautify sql query without uploading it',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Turn dense single-line SQL queries into readable, structured statements with clear `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY`, and `ORDER BY` alignment while preserving quoted strings and comments.',
    instructions: [
      {
        title: 'Paste your SQL query',
        description:
          'Insert any SELECT, INSERT, UPDATE, DELETE, or DDL query into Raw SQL Query, including multi-line or single-line statements.',
      },
      {
        title: 'Choose Beautify or Minify mode',
        description:
          'Select Beautify to expand the query into readable indented clauses, or Minify to collapse it into a single line for logs and code.',
      },
      {
        title: 'Set keyword casing and indentation',
        description:
          'Pick UPPERCASE or lowercase SQL keywords and choose 2-space or 4-space indentation to match your team style guide.',
      },
      {
        title: 'Review the formatted output',
        description:
          'Check that clause breaks, JOINs, and subqueries are aligned as expected and that strings and comments are untouched.',
      },
      {
        title: 'Copy or reuse the formatted SQL',
        description:
          'Use Copy SQL to transfer the standardized query back into your editor, migration file, or pull request.',
      },
      {
        title: 'Fix formatting issues',
        description:
          'If output looks wrong, check for unbalanced quotes or a missing semicolon in your input, then re-paste and format again.',
      },
    ],
    examples: [
      {
        title: 'Formatting a multi-join query',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: 'Breaks major SQL clauses onto dedicated lines and normalizes keyword casing.',
      },
    ],
    benefits: [
      'Preserves single-quoted string literals and SQL comments untouched',
      'Supports multi-word clauses like LEFT OUTER JOIN, GROUP BY, and ORDER BY',
      'Switches effortlessly between Beautify and Minify modes',
      'Runs locally so proprietary table and schema names stay private',
    ],
    useCases: [
      'Cleaning ORM-generated SQL logs for performance debugging',
      'Standardizing SQL scripts before pull-request reviews',
      'Compacting multi-line queries into single-line strings for CLI scripts',
      'Aligning keyword casing across team SQL style guides',
    ],
    faqs: [
      {
        question: 'Will SQL Formatter alter table names or text inside quotes?',
        answer:
          'No. The tokenizer isolates string literals and comments so uppercase/lowercase keyword formatting only applies to recognized SQL keywords.',
      },
      {
        question: 'Which SQL dialects are supported?',
        answer:
          'Standard ANSI SQL clauses (PostgreSQL, MySQL, SQLite, SQL Server) including SELECT, JOINs, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE, and DELETE are supported.',
      },
      {
        question: 'Can I minify a formatted query back into one line?',
        answer:
          'Yes. Switch the mode toggle to Minify to strip comments and collapse extra whitespace safely.',
      },
      {
        question: 'Is the SQL Formatter free to use?',
        answer:
          'Yes. The SQL Formatter is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the SQL Formatter send my queries to a server?',
        answer:
          'No. All formatting happens locally in your browser, so table names, schema details, and data values in your queries never leave your device.',
      },
      {
        question: 'Can I format SQL with subqueries and CTEs?',
        answer:
          'Yes. Nested SELECT statements and common table expressions (WITH ... AS) are formatted with their own indentation levels so the structure stays readable.',
      },
      {
        question: 'Does the SQL Formatter handle INSERT, UPDATE, and DELETE statements?',
        answer:
          'Yes. INSERT, UPDATE, and DELETE statements are formatted alongside SELECT queries, with their clauses broken onto separate lines.',
      },
      {
        question: 'Can I format DDL statements like CREATE TABLE?',
        answer:
          'Yes. DDL statements such as CREATE TABLE, ALTER TABLE, and DROP TABLE can be pasted in and formatted with the same keyword casing and indentation rules.',
      },
      {
        question: 'What indentation options does the SQL Formatter offer?',
        answer:
          'You can choose 2-space or 4-space indentation for beautified queries, so the output matches your editor or team style guide.',
      },
      {
        question: 'Does formatting change what my SQL query does?',
        answer:
          'No. Formatting only changes whitespace and keyword casing; it does not add, remove, or reorder any part of the query logic.',
      },
      {
        question: 'Can I format multiple SQL queries at once?',
        answer:
          'Yes. You can paste several statements separated by semicolons and format them together in one pass.',
      },
      {
        question: 'Does the SQL Formatter work with MySQL, PostgreSQL, and SQL Server syntax?',
        answer:
          'Yes. It handles standard ANSI SQL used by MySQL, PostgreSQL, SQLite, and SQL Server, including their common clause keywords.',
      },
      {
        question: 'Will comments in my SQL be preserved when formatting?',
        answer:
          'Yes. Single-line and block comments are preserved by the tokenizer, although Minify mode strips comments to produce the smallest output.',
      },
      {
        question: 'What happens if my SQL has a syntax error?',
        answer:
          'The formatter still processes the text as best it can, since it works on tokens rather than executing the query, but you should fix the error before running the SQL in your database.',
      },
      {
        question: 'Can I minify SQL for use in application code or logs?',
        answer:
          'Yes. Minify mode collapses a query to one line while preserving string literals, which is ideal for embedding SQL in code or logging it compactly.',
      },
      {
        question: 'Does the SQL Formatter support window functions?',
        answer:
          'Yes. Window functions such as ROW_NUMBER() OVER (PARTITION BY ...) are formatted as part of the SELECT list with their OVER clauses kept intact.',
      },
      {
        question: 'Is there a size limit on the SQL I can format?',
        answer:
          'There is no fixed character limit in the tool, since it runs in your browser, though very long queries may take a moment on slower devices.',
      },
      {
        question: 'Can I use the SQL Formatter on my phone?',
        answer:
          'Yes. It works in any modern mobile browser, so you can paste and format SQL on your phone or tablet without installing anything.',
      },
      {
        question: 'Does the SQL Formatter preserve line breaks inside string literals?',
        answer:
          'Yes. Text inside single-quoted string literals is left untouched, so multi-line strings keep their original line breaks.',
      },
      {
        question: 'How can I standardize keyword casing across my team with the SQL Formatter?',
        answer:
          'Agree on one casing style, such as UPPERCASE keywords, and run every query through the formatter with that setting before committing it to your repository.',
      },
    ],
    relatedToolSlugs: [
      'json-csv-converter',
      'json-formatter',
      'line-prefix-suffix',
      'js-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/SqlFormatterTool')),
  },
  {
    id: 'css-minifier',
    slug: 'css-minifier',
    name: 'CSS Minifier & Beautifier',
    shortDescription:
      'Minify CSS stylesheets to reduce bundle size or beautify compressed CSS rules with clean indentation.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'css minifier',
      'css beautifier',
      'compress css online',
      'format css',
      'css compressor',
      'minify css online',
      'unminify css',
      'css formatter',
      'reduce css file size',
      'css beautifier online',
    ],
    seo: {
      title: 'CSS Minifier & Beautifier – Compress CSS Fast | UtilityFlow',
      description:
        'Minify CSS by stripping comments and extra whitespace, with live byte-savings stats, or beautify minified stylesheets into clean rules — free, in your browser.',
      primaryKeyword: 'css minifier',
      secondaryKeywords: ['css beautifier', 'compress css', 'css formatter online', 'minify css online', 'css compressor'],
      longTailKeywords: [
        'minify css preserving quoted strings and media queries',
        'unminify compressed css stylesheet online',
        'calculate css compression percentage in browser',
        'reduce css file size before deployment',
        'beautify css with proper indentation online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compress CSS stylesheets by removing comments, redundant whitespace, and trailing semicolons before closing braces—or expand one-line minified CSS back into readable indented blocks.',
    instructions: [
      {
        title: 'Select Minify or Beautify',
        description:
          'Choose Minify CSS to shrink file weight for production or Beautify CSS to restore indentation to a compressed stylesheet.',
      },
      {
        title: 'Paste your stylesheet',
        description:
          'Enter CSS rules, custom properties, or `@media` blocks into Input CSS, including full stylesheets or single snippets.',
      },
      {
        title: 'Run the tool and check the stats',
        description:
          'The output updates as you type; in Minify mode, check the exact input bytes, output bytes, and percentage saved.',
      },
      {
        title: 'Review the output carefully',
        description:
          'Confirm that @media blocks, quoted strings, and url(...) values survived intact and that nested rules are indented correctly in Beautify mode.',
      },
      {
        title: 'Copy or download the CSS',
        description:
          'Click Copy CSS to paste the result into your stylesheet, inline <style> block, or deployment build step.',
      },
      {
        title: 'Fix flat or broken output',
        description:
          'If Beautify output looks flat or rules merge together, check for a missing closing brace in your input and add it before retrying.',
      },
    ],
    examples: [
      {
        title: 'Compressing a card rule',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: 'Removes newlines, spaces around punctuation, and final semicolon inside the block.',
      },
    ],
    benefits: [
      'Tokenizer preserves quoted strings (such as content: "..." or url(...))',
      'Strips /* ... */ comments and unnecessary whitespace safely',
      'Displays exact input bytes, output bytes, and percentage saved',
      'Includes Beautify mode to inspect third-party minified CSS',
    ],
    useCases: [
      'Compressing inline <style> snippets for HTML emails and landing pages',
      'Unminifying production CSS bundles during visual debugging',
      'Checking stylesheet weight savings before deployment',
      'Cleaning spacing inconsistencies in legacy stylesheets',
    ],
    faqs: [
      {
        question: 'Does CSS minification break spaces inside content: "..." strings?',
        answer:
          'No. Single- and double-quoted string literals are preserved verbatim by the tokenizer.',
      },
      {
        question: 'Why does Minify remove the last semicolon before "}"?',
        answer:
          'In CSS syntax, the final declaration before a closing curly brace does not require a trailing semicolon, saving 1 byte per rule block.',
      },
      {
        question: 'Does it support nested @media blocks in Beautify mode?',
        answer:
          'Yes. Brace depth is tracked across @media and @supports blocks so inner rules indent properly.',
      },
      {
        question: 'Is the CSS Minifier free to use?',
        answer:
          'Yes. The CSS Minifier is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the CSS Minifier upload my stylesheet anywhere?',
        answer:
          'No. All minification and beautifying happens locally in your browser, so your CSS never leaves your device.',
      },
      {
        question: 'How much smaller will my CSS get after minifying?',
        answer:
          'It depends on how many comments and extra spaces your stylesheet contains; the tool shows the exact byte count and percentage saved for your input.',
      },
      {
        question: 'Does CSS minification remove @media queries?',
        answer:
          'No. @media queries and their conditions are preserved exactly, since removing them would change how your page responds to screen sizes.',
      },
      {
        question: 'Can I minify CSS that uses custom properties (variables)?',
        answer:
          'Yes. Custom properties such as --brand-color and their var() references are treated as normal declarations and kept intact.',
      },
      {
        question: 'Does the CSS Minifier preserve url(...) and content strings?',
        answer:
          'Yes. Quoted strings inside url(...) and content properties are preserved verbatim, so image paths and generated text stay correct.',
      },
      {
        question: 'Will minified CSS still work in all browsers?',
        answer:
          'Yes. Minification only removes comments and unnecessary whitespace, which browsers ignore anyway, so the rendered result is identical.',
      },
      {
        question: 'Can I beautify CSS from a production bundle?',
        answer:
          'Yes. Paste any minified stylesheet into Beautify mode to expand it into indented, readable rules for debugging.',
      },
      {
        question: 'Does the CSS Minifier handle @keyframes and @font-face?',
        answer:
          'Yes. At-rules such as @keyframes, @font-face, and @import are preserved, with their inner blocks indented correctly in Beautify mode.',
      },
      {
        question: 'What is the difference between minify and beautify in the CSS Minifier?',
        answer:
          'Minify shrinks CSS by removing comments and whitespace for production, while Beautify expands compressed CSS into readable indented rules for editing and debugging.',
      },
      {
        question: 'Can I minify multiple stylesheets at once?',
        answer:
          'Yes. You can paste several stylesheets together into one input, though keeping related files separate makes the output easier to manage.',
      },
      {
        question: 'Does the CSS Minifier remove unused CSS rules?',
        answer:
          'No. It only removes comments and whitespace; it does not analyze which selectors your HTML uses, so unused rules stay in the output.',
      },
      {
        question: 'Is the byte-savings percentage shown by the CSS Minifier exact?',
        answer:
          'Yes. It is calculated from the actual byte counts of your input and output, so the percentage reflects your real savings.',
      },
      {
        question: 'Can I use the CSS Minifier for inline <style> snippets?',
        answer:
          'Yes. Small snippets minify the same way as full stylesheets, which is useful for HTML emails and landing pages with inline styles.',
      },
      {
        question: 'Does the CSS Minifier support modern CSS like grid and nesting?',
        answer:
          'Yes. Modern properties such as grid and flexbox pass through unchanged, and nested rules are indented by brace depth in Beautify mode.',
      },
      {
        question: 'What happens if my CSS has a syntax error?',
        answer:
          'The tool still processes the text, but a missing brace or unclosed string can confuse the output, so fix syntax errors before minifying for production.',
      },
      {
        question: 'Can I minify CSS on my phone?',
        answer:
          'Yes. The CSS Minifier works in any modern mobile browser, so you can paste and minify stylesheets without installing anything.',
      },
    ],
    relatedToolSlugs: [
      'js-formatter',
      'color-converter',
      'html-entity-encoder',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/CssMinifierTool')),
  },
  {
    id: 'js-formatter',
    slug: 'js-formatter',
    name: 'JavaScript / TypeScript Minifier & Formatter',
    shortDescription:
      'Minify JavaScript snippets by stripping comments and excess whitespace or beautify compact code blocks.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'javascript minifier',
      'js formatter',
      'js beautifier',
      'compress javascript online',
      'javascript formatter',
      'js minifier online',
      'beautify javascript',
      'typescript minifier',
      'js code formatter',
      'unminify javascript',
    ],
    seo: {
      title: 'JavaScript Minifier & Formatter – Compress JS | UtilityFlow',
      description:
        'Minify JavaScript and TypeScript by stripping comments and extra spaces safely, or beautify compact code with 2/4-space indents — free, in your browser.',
      primaryKeyword: 'javascript minifier',
      secondaryKeywords: ['js beautifier', 'format javascript online', 'js compressor', 'javascript formatter', 'typescript minifier'],
      longTailKeywords: [
        'minify javascript snippet preserving strings and template literals',
        'unminify compact javascript code with indentation',
        'client side js formatter and minifier',
        'beautify javascript code with 2 or 4 space indent',
        'strip comments from javascript snippet online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compact JavaScript snippets for bookmarklets and inline scripts by removing comments and excess spacing—while keeping string literals intact—or re-indent compressed code cleanly.',
    instructions: [
      {
        title: 'Choose Minify JS or Beautify JS',
        description:
          'Pick Minify JS to strip comments and whitespace for compact output, or Beautify JS with 2 or 4 spaces to restore readable indentation.',
      },
      {
        title: 'Paste your code snippet',
        description:
          'Insert JavaScript or TypeScript code into the left editor, from a single function to a full script block.',
      },
      {
        title: 'Set indentation for Beautify mode',
        description:
          'Choose 2-space or 4-space indentation so the beautified code matches your editor or project style.',
      },
      {
        title: 'Review byte savings and output',
        description:
          'Verify the byte reduction in Minify mode and scan the output to confirm strings, template literals, and regex patterns are intact.',
      },
      {
        title: 'Copy the processed code',
        description:
          'Use the copy button to move the minified or beautified code into your editor, bookmarklet, or inline script.',
      },
      {
        title: 'Fix minification issues',
        description:
          'If minified code behaves oddly, add missing semicolons to your input first, since automatic semicolon insertion can be ambiguous after whitespace is removed.',
      },
    ],
    examples: [
      {
        title: 'Stripping comments and whitespace',
        input: '// Helper\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: 'Removes comments and whitespace around braces without touching logic.',
      },
    ],
    benefits: [
      'Lexical tokenizer protects single, double, and backtick template strings',
      'Strips both // single-line and /* */ block comments in Minify mode',
      'Reports live byte reduction percentage',
      'Fast browser-only execution with zero code sent externally',
    ],
    useCases: [
      'Preparing compact inline scripts or bookmarklets',
      'Unpacking compressed single-line snippets for readability',
      'Removing developer comments before sharing code samples',
      'Quickly re-indenting pasted JS functions',
    ],
    faqs: [
      {
        question: 'Does this tool rename variables (mangle) like Terser or esbuild?',
        answer:
          'No. It performs safe whitespace and comment minification without renaming identifiers or altering AST semantics, making the output easy to inspect.',
      },
      {
        question: 'Are string literals containing "//" (like URLs) safe?',
        answer:
          'Yes. Quoted strings and template literals are tokenized before comment detection so URLs inside quotes are never treated as comments.',
      },
      {
        question: 'Should I use semicolons when minifying multi-statement JS?',
        answer:
          'Including standard semicolons is recommended before minifying any JavaScript snippet to avoid ASI (Automatic Semicolon Insertion) ambiguities.',
      },
      {
        question: 'Is the JavaScript Minifier free to use?',
        answer:
          'Yes. The JavaScript Minifier is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the JavaScript Minifier upload my code to a server?',
        answer:
          'No. All minification and formatting happens locally in your browser, so your code never leaves your device.',
      },
      {
        question: 'Does the JavaScript Minifier work with TypeScript code?',
        answer:
          'Yes. TypeScript snippets can be pasted in and minified or beautified the same way, since the tokenizer handles standard JS and TS syntax.',
      },
      {
        question: 'Will minifying break my JavaScript?',
        answer:
          'No, as long as your code uses standard semicolons. Only comments and extra whitespace are removed, so the logic stays identical.',
      },
      {
        question: 'Does the JavaScript Minifier remove console.log statements?',
        answer:
          'No. It only strips comments and whitespace, so console.log calls and other statements remain in the output.',
      },
      {
        question: 'Can I beautify minified code from a production bundle?',
        answer:
          'Yes. Paste compact single-line code into Beautify mode to re-indent it into readable lines for debugging.',
      },
      {
        question: 'Does the JavaScript Minifier handle template literals with ${} expressions?',
        answer:
          'Yes. Backtick template literals, including ${} interpolations, are tokenized as strings and preserved exactly.',
      },
      {
        question: 'What is the difference between minify and beautify in the JavaScript Minifier?',
        answer:
          'Minify removes comments and whitespace to shrink code for inline use, while Beautify re-indents compact code into readable lines for editing.',
      },
      {
        question: 'Can I minify ES6 code with arrow functions and classes?',
        answer:
          'Yes. Arrow functions, classes, destructuring, and other modern ES6 syntax are handled by the tokenizer without changing the code.',
      },
      {
        question: 'Does the JavaScript Minifier support JSX or React code?',
        answer:
          'JSX is not specifically supported, since angle brackets in JSX can be misread by the tokenizer. Use it for plain JavaScript or TypeScript and a dedicated formatter for JSX.',
      },
      {
        question: 'How much smaller will my JavaScript get after minifying?',
        answer:
          'It depends on how many comments and line breaks your code has; the tool shows the exact byte count and percentage saved for your snippet.',
      },
      {
        question: 'Can I minify multiple JavaScript files at once?',
        answer:
          'The tool processes one snippet at a time, so paste each file separately. For whole projects, use a bundler such as esbuild or Terser instead.',
      },
      {
        question: 'Does the JavaScript Minifier preserve regular expressions?',
        answer:
          'Yes. Regular expression literals are recognized by the tokenizer and kept intact, including any // characters inside the pattern.',
      },
      {
        question: 'What happens if my JavaScript has a syntax error?',
        answer:
          'The tool still processes the text, but unbalanced braces or unclosed strings can produce odd output, so fix syntax errors before minifying.',
      },
      {
        question: 'Can I use the JavaScript Minifier for bookmarklets?',
        answer:
          'Yes. Minify mode is ideal for bookmarklets, since it collapses a snippet into a compact single line you can paste into a bookmark URL.',
      },
      {
        question: 'Is the minified output safe to paste into an HTML script tag?',
        answer:
          'Generally yes, but avoid a literal "</script>" sequence inside your strings, since the browser would treat it as the end of the script block.',
      },
      {
        question: 'Can I format JavaScript on my phone?',
        answer:
          'Yes. The JavaScript Minifier works in any modern mobile browser, so you can paste and format code without installing anything.',
      },
    ],
    relatedToolSlugs: [
      'css-minifier',
      'json-formatter',
      'regex-tester',
      'sql-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/JsFormatterTool')),
  },
  {
    id: 'cron-expression-parser',
    slug: 'cron-expression-parser',
    name: 'Cron Expression Parser & Schedule Preview',
    shortDescription:
      'Translate 5-field cron expressions into plain English, explore presets, and preview the next 8 run times.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'cron expression parser',
      'crontab generator',
      'cron schedule tester',
      'next cron run times',
      'crontab parser',
      'cron expression tester',
      'cron schedule preview',
      'cron to plain english',
      'cron job scheduler',
      'crontab schedule checker',
    ],
    seo: {
      title: 'Cron Expression Parser – Plain English & Runs | UtilityFlow',
      description:
        'Parse 5-field cron expressions into plain-English schedules, inspect every field, try common presets, and preview the next 8 run times — free, in your browser.',
      primaryKeyword: 'cron expression parser',
      secondaryKeywords: ['crontab guru alternative', 'cron schedule preview', 'cron builder', 'cron expression tester', 'crontab parser'],
      longTailKeywords: [
        'translate 5 field cron expression to plain english',
        'calculate next 8 cron execution timestamps',
        'test weekday and step cron expressions online',
        'cron expression every weekday at 9am example',
        'explain cron expression in plain english online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decode 5-field Unix crontab expressions (`minute hour day-of-month month day-of-week`) into clear human-readable summaries, verify field ranges, and inspect the next 8 scheduled run timestamps.',
    instructions: [
      {
        title: 'Enter a 5-field cron expression or pick a preset',
        description:
          'Type any cron expression such as `0 9 * * 1-5` or click a common schedule preset button to start from a known pattern.',
      },
      {
        title: 'Check the plain-English summary and field breakdown',
        description:
          'Verify that minute, hour, day-of-month, month, and day-of-week fields match your intent before trusting the schedule.',
      },
      {
        title: 'Verify the next 8 run times',
        description:
          'Review the calculated upcoming local execution timestamps to confirm the job runs when you expect it to.',
      },
      {
        title: 'Adjust fields with steps, ranges, and lists',
        description:
          'Refine the schedule using step values like */15, ranges like 1-5, or lists like 1,15, then re-check the summary and run times.',
      },
      {
        title: 'Copy the expression for your scheduler',
        description:
          'Copy the verified expression into your crontab, GitHub Actions workflow, or Cloudflare Worker cron trigger.',
      },
      {
        title: 'Watch out for day-of-month vs day-of-week',
        description:
          'If both day fields are restricted, standard cron runs when either matches. Use * in one of them if you only want one condition to apply.',
      },
    ],
    examples: [
      {
        title: 'Business-hours morning job',
        input: '0 9 * * 1-5',
        output: 'At 09:00, on weekday 1-5 (Monday–Friday).',
        explanation: 'Runs at 09:00 AM every Monday through Friday.',
      },
    ],
    benefits: [
      'Supports wildcards (*), steps (*/5), ranges (1-5), lists (1,15), and names (MON-FRI)',
      'Computes the next 8 concrete execution timestamps in your local timezone',
      'Flags out-of-range values or missing fields immediately',
      'Includes one-click presets for common intervals',
    ],
    useCases: [
      'Verifying GitHub Actions `schedule.cron` and Cloudflare Workers Cron Triggers',
      'Debugging Linux crontab backup or cleanup schedules',
      'Double-checking day-of-week (0–6) vs day-of-month (1–31) logic',
      'Documenting recurring job schedules for operations runbooks',
    ],
    faqs: [
      {
        question: 'Does this parser support 6-field cron expressions with seconds?',
        answer:
          'This tool parses standard 5-field Unix crontab expressions (minute, hour, day of month, month, day of week), used by Linux cron, GitHub Actions, and Cloudflare Workers.',
      },
      {
        question: 'What happens if both Day of Month and Day of Week are non-wildcard?',
        answer:
          'Following standard Vixie/Unix cron behavior, when both day fields are restricted, a run triggers if either Day of Month OR Day of Week matches.',
      },
      {
        question: 'Are MON–FRI and JAN–DEC names supported?',
        answer:
          'Yes. Standard 3-letter English month and weekday abbreviations as well as numeric 0 or 7 for Sunday are supported.',
      },
      {
        question: 'Is the Cron Expression Parser free to use?',
        answer:
          'Yes. The Cron Expression Parser is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'What is a cron expression?',
        answer:
          'A cron expression is a compact 5-field schedule string that tells a system when to run a job automatically, such as every hour or every weekday at 9 AM.',
      },
      {
        question: 'What do the 5 fields in a cron expression mean?',
        answer:
          'From left to right they are minute (0-59), hour (0-23), day of month (1-31), month (1-12), and day of week (0-7, where both 0 and 7 mean Sunday).',
      },
      {
        question: 'How do I run a cron job every 5 minutes?',
        answer:
          'Use the step syntax in the minute field: */5 * * * * runs the job every 5 minutes, at :00, :05, :10, and so on.',
      },
      {
        question: 'How do I schedule a cron job at 9 AM on weekdays?',
        answer:
          'Use 0 9 * * 1-5, which means minute 0, hour 9, any day of the month, any month, and weekdays Monday through Friday.',
      },
      {
        question: 'What does */15 mean in a cron expression?',
        answer:
          'The */15 step syntax means every 15 units of that field, so */15 in the minute field runs a job every 15 minutes.',
      },
      {
        question: 'What is the difference between 0 and 7 for Sunday in cron?',
        answer:
          'There is no difference; both 0 and 7 represent Sunday in the day-of-week field, so you can use whichever you prefer.',
      },
      {
        question: 'Can I use this Cron Expression Parser for GitHub Actions schedules?',
        answer:
          'Yes. GitHub Actions uses the same 5-field cron syntax, so you can verify a schedule here before pasting it into your workflow file.',
      },
      {
        question: 'Does the Cron Expression Parser account for my timezone?',
        answer:
          'The next 8 run times are shown in your local browser timezone, but remember that cron itself runs in the server timezone, so check your server settings too.',
      },
      {
        question: 'What happens if I enter an invalid cron expression?',
        answer:
          'The parser flags out-of-range values or missing fields immediately, so you can correct the expression before deploying it.',
      },
      {
        question: 'Can I schedule a cron job for the last day of the month?',
        answer:
          'Standard 5-field cron has no last-day syntax. A common workaround is to schedule on days 28-31 and let the job itself check whether it is the last day.',
      },
      {
        question: 'What do L and W mean in a cron expression?',
        answer:
          'L (last) and W (weekday) are Quartz-style extensions, not part of standard Unix cron, so they are not supported by this parser.',
      },
      {
        question: 'How do I run a cron job twice a day?',
        answer:
          'List both hours in the hour field, for example 0 6,18 * * * runs the job at 6 AM and 6 PM every day.',
      },
      {
        question: 'Does the Cron Expression Parser support seconds or 6-field expressions?',
        answer:
          'No. It supports only standard 5-field Unix expressions; schedulers that need seconds use a different 6-field format.',
      },
      {
        question: 'Can I preview cron runs for a specific date range?',
        answer:
          'The tool previews the next 8 upcoming run times from now. It does not offer a custom date-range view, but the next 8 runs usually reveal scheduling mistakes.',
      },
      {
        question: 'Why does my cron job run on unexpected days?',
        answer:
          'The most common cause is restricting both day-of-month and day-of-week, which triggers a run when either matches. Set one of them to * to fix it.',
      },
      {
        question: 'Can I use cron presets for common schedules?',
        answer:
          'Yes. The tool includes one-click presets for common intervals such as every hour, daily, weekly, and monthly, which you can then customize.',
      },
    ],
    relatedToolSlugs: [
      'unix-timestamp-converter',
      'regex-tester',
      'json-formatter',
      'uuid-generator',
    ],
    component: lazy(() => import('../../../tools/developer/CronExpressionParserTool')),
  },
  {
    id: 'color-converter',
    slug: 'color-converter',
    name: 'Color Converter (HEX / RGB / HSL & WCAG Contrast)',
    shortDescription:
      'Convert colors between HEX, RGB, and HSL with live color picker and WCAG 2.1 AA/AAA contrast checking.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'color converter',
      'hex to rgb',
      'rgb to hsl',
      'wcag contrast checker',
      'hex to hsl',
      'rgb to hex',
      'color picker online',
      'hex color converter',
      'hsl to rgb',
      'color code converter',
    ],
    seo: {
      title: 'Color Converter – HEX, RGB, HSL & WCAG Check | UtilityFlow',
      description:
        'Convert colors between HEX, RGB and HSL instantly, then test foreground and background contrast ratios for WCAG 2.1 AA and AAA compliance — free, in browser.',
      primaryKeyword: 'color converter',
      secondaryKeywords: ['hex to rgb converter', 'hsl color picker', 'wcag contrast checker', 'rgb to hex converter', 'hex color picker'],
      longTailKeywords: [
        'convert hex color to rgb and hsl css values',
        'check wcag 2.1 aa and aaa text contrast ratio',
        'interactive hex rgb hsl color tool for developers',
        'convert hex to hsl for css variables',
        'find accessible text color for background',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Translate colors seamlessly between HEX, RGB, and HSL CSS notations with a live swatch and built-in WCAG 2.1 contrast ratio checker for accessible UI design.',
    instructions: [
      {
        title: 'Pick or type a color',
        description:
          'Use the color picker, enter a 3- or 6-digit HEX code, or adjust individual R/G/B or H/S/L channels to set your foreground color.',
      },
      {
        title: 'Review HEX, RGB, and HSL values',
        description:
          'Check the synchronized values in all three notations and confirm the live swatch matches the color you intended.',
      },
      {
        title: 'Copy CSS color values',
        description:
          'Click Copy HEX, Copy RGB, or Copy HSL to grab ready-to-use CSS strings for your stylesheet or design tokens.',
      },
      {
        title: 'Select a background color',
        description:
          'Choose a background color below to compare it against your foreground color for the contrast check.',
      },
      {
        title: 'Check WCAG contrast results',
        description:
          'Read the exact contrast ratio and Pass/Fail status for AA Normal, AAA Normal, and AA Large text before shipping the pairing.',
      },
      {
        title: 'Fix a failing contrast pair',
        description:
          'If the pair fails, lower the Lightness in HSL to darken the text (or lighten the background) until the ratio reaches at least 4.5:1 for normal text.',
      },
    ],
    examples: [
      {
        title: 'Accessible cobalt blue on white',
        input: 'Foreground: #2563EB · Background: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Contrast: 5.17:1 (AA Pass)',
        explanation: 'Meets the 4.5:1 WCAG AA requirement for standard body text.',
      },
    ],
    benefits: [
      'Synchronizes HEX, RGB, and HSL channels bidirectionally in real time',
      'Built-in WCAG 2.1 relative luminance contrast calculator',
      'Tests AA Normal (4.5:1), AAA Normal (7.0:1), and AA Large (3.0:1) thresholds',
      'One-click copy for valid CSS color strings',
    ],
    useCases: [
      'Verifying button and link text contrast during UI implementation',
      'Converting brand HEX palettes into HSL for Tailwind or CSS variables',
      'Fine-tuning lightness and saturation without leaving the browser',
      'Auditing accessibility compliance before design handoff',
    ],
    faqs: [
      {
        question: 'What contrast ratio is required for WCAG 2.1 AA body text?',
        answer:
          'WCAG 2.1 AA requires at least 4.5:1 for normal text and 3.0:1 for large text (18pt / 24px regular or 14pt / 18.66px bold).',
      },
      {
        question: 'Can I enter 3-digit shorthand HEX codes like #09f?',
        answer:
          'Yes. Three-character HEX codes expand automatically to their 6-character equivalents, so #09f becomes #0099ff and converts exactly like a full code.',
      },
      {
        question: 'Why does HSL make adjusting themes easier than RGB?',
        answer:
          'HSL separates Hue, Saturation, and Lightness, allowing you to darken or lighten a brand color by changing only the Lightness percentage.',
      },
      {
        question: 'Is the Color Converter free to use?',
        answer:
          'Yes. The Color Converter is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the Color Converter store my colors?',
        answer:
          'No. Conversions and contrast checks happen locally in your browser, so your palette choices are never uploaded or stored.',
      },
      {
        question: 'How do I convert HEX to RGB with the Color Converter?',
        answer:
          'Enter a HEX code such as #2563EB and the RGB value appears instantly, ready to copy as a CSS rgb() string.',
      },
      {
        question: 'How do I convert RGB to HSL?',
        answer:
          'Enter the RGB values or adjust the R, G, and B channels, and the matching HSL value updates live in the same panel.',
      },
      {
        question: 'What is the difference between HEX, RGB, and HSL?',
        answer:
          'HEX is a compact code for a color, RGB defines it by red, green, and blue amounts, and HSL defines it by hue, saturation, and lightness. They describe the same color in different notations.',
      },
      {
        question: 'What contrast ratio do I need for WCAG AAA?',
        answer:
          'WCAG AAA requires at least 7.0:1 for normal text and 4.5:1 for large text, which is stricter than the AA level.',
      },
      {
        question: 'What counts as large text for WCAG contrast?',
        answer:
          'Large text is 18pt (24px) or larger in regular weight, or 14pt (18.66px) or larger in bold weight. Large text only needs a 3.0:1 ratio for AA.',
      },
      {
        question: 'Can I convert a color with transparency (alpha) in the Color Converter?',
        answer:
          'This converter handles solid colors without an alpha channel. For transparency, take the converted RGB values and use them inside an rgba() function.',
      },
      {
        question: 'Does the Color Converter support 8-digit HEX codes with alpha?',
        answer:
          'No. The converter accepts standard 3- and 6-digit HEX codes; for transparency, use the RGB output with an alpha value in rgba().',
      },
      {
        question: 'Can I pick a color from an image with the Color Converter?',
        answer:
          'No. The tool does not sample images; enter the HEX value of the color you want or choose it with the built-in color picker.',
      },
      {
        question: 'How is the WCAG contrast ratio calculated?',
        answer:
          'It is calculated from the relative luminance of the foreground and background colors using the formula defined in the WCAG 2.1 specification.',
      },
      {
        question: 'Why does my brand color fail AA contrast on white?',
        answer:
          'Light or mid-tone brand colors often fall below the 4.5:1 threshold against white. Darken the color or use it only for large text and decorative elements.',
      },
      {
        question: 'Can I copy colors as CSS variables from the Color Converter?',
        answer:
          'Yes. Copy the HEX, RGB, or HSL value and paste it into a CSS custom property, for example --brand: #2563EB, then reference it with var(--brand).',
      },
      {
        question: 'What is the difference between HSL and HSV?',
        answer:
          'HSL describes a color by hue, saturation, and lightness, while HSV uses hue, saturation, and value (brightness). HSL is generally easier for creating accessible light and dark theme variants.',
      },
      {
        question: 'Can I convert named CSS colors like "red" in the Color Converter?',
        answer:
          'Enter the HEX value for the named color instead, for example red is #FF0000. The tool accepts HEX, RGB, and HSL input.',
      },
      {
        question: 'How do I find a darker shade of my brand color?',
        answer:
          'Convert the color to HSL, keep the hue and saturation the same, and lower the Lightness percentage until you reach the shade you want.',
      },
      {
        question: 'Can I use the Color Converter on my phone?',
        answer:
          'Yes. The Color Converter works in any modern mobile browser, so you can convert colors and check contrast without installing anything.',
      },
    ],
    relatedToolSlugs: [
      'css-minifier',
      'html-entity-encoder',
      'js-formatter',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/ColorConverterTool')),
  },
];
