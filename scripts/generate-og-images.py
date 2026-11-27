#!/usr/bin/env python3
"""Regenerate UtilityFlow OG (link preview) images in the MINIMALIST
redesign theme (2026-11-21).

Usage:
    python3 scripts/generate-og-images.py

Output: 102 JPEG files (1200x630, quality 88) written over the existing
files at identical paths, so og:image URLs do not change:
  - public/og-image.jpg                 (default / homepage card)
  - public/og/<tool>.jpg                (all 87 tools)
  - public/og/<category>.jpg            (7 categories)
  - public/og/tools.jpg                 (all-tools directory)
  - public/og/de/<tool>.jpg             (3 localized, German)
  - public/og/es/<tool>.jpg             (3 localized, Spanish)

Visual language (reused from scripts/generate-blog-images.py, the
approved minimalist theme): flat warm off-white #F8F5F0 background,
thin green (#0E8A66) line-art icons, centred dark title, muted subline,
green domain. No gradients, no blobs, no purple. Pillow only; no
Chromium, no downloads (Inter is NOT installed — Noto Sans, as in the
blog script).

Titles are sourced from the repo, never guessed: the script parses
src/registry/batches/**/*.ts at run time and reads each tool's
TOOLS_REGISTRY `name` field (plus `shortDescription` and
`categoryId`). It aborts unless it finds exactly EXPECTED_TOOL_COUNT
tools with unique ids, so a registry change can never silently
produce a wrong or partial set.
  - EN category names: src/registry/categories.ts (`name` field)
  - de/es tool names: src/locales/<lang>/tools/batch*.ts
    (`<lang>_BATCH_*_OVERRIDES` `name` field)
  - de/es sublines: the established localized sublines from the
    previous OG cards (the repo locale files carry no shared subline
    string for these cards).

Sublines: a tool's own `shortDescription` is used only when it fits
on one line at the card's 26px subline size (max 1020px wide);
otherwise the established generic subline is used. No description is
ever truncated or reworded, so no claim is invented. (As of
2026-11-24 none of the 86 descriptions fits on one line, so every
tool card currently uses the generic subline; the fit check stays in
place so a shorter future description is picked up automatically.)

Icon mapping reuses the blog script's ICON_RULES, matched against the
FULL tool slug (the blog script strips a trailing "-<type>" segment,
which would drop "pdf" from "merge-pdf"). Where no rule matches, the
tool's CATEGORY line-art icon is used (never a hand-drawn per-tool
icon). Category icons are explicit:
text-writing->document, calculators->calculator, image-file->image,
pdf->image, developer->grid (brand mark), social-media->image,
seo->document.
"""

import glob
import importlib.util
import os
import re
import sys

from PIL import Image, ImageDraw, ImageFont

_HERE = os.path.dirname(os.path.abspath(__file__))
_BLOG = os.path.join(_HERE, "generate-blog-images.py")
_spec = importlib.util.spec_from_file_location("generate_blog_images", _BLOG)
gb = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(gb)

W, H = 1200, 630
SS = gb.SS  # 2x supersampling, as in the blog script
BG = gb.BG
GREEN = gb.GREEN
GREEN_SOFT = gb.GREEN_SOFT
GREY = gb.GREY
DARK = gb.DARK
MUTED = gb.MUTED
DOMAIN = gb.DOMAIN

FONT_BOLD = gb.FONT_BOLD
FONT_REGULAR = gb.FONT_REGULAR

TOOL_SUBLINE = "Free online tool \u00b7 No sign-up \u00b7 Runs in your browser"
CATEGORY_SUBLINE = "Free online tools \u00b7 No sign-up \u00b7 Runs in your browser"
DE_SUBLINE = "Kostenloses Online-Tool \u00b7 Keine Anmeldung \u00b7 L\u00e4uft in Ihrem Browser"
ES_SUBLINE = "Herramienta en l\u00ednea gratuita \u00b7 Sin registro \u00b7 Funciona en tu navegador"

# ---------------------------------------------------------------------------
# Tools. Loaded from the registry at run time (see module docstring) —
# no hardcoded titles. Verified against the live registry on
# 2026-11-27: 87 tools, unique ids, id == slug for all.
# ---------------------------------------------------------------------------

EXPECTED_TOOL_COUNT = 87

# One ToolDefinition object literal: id, slug, name, shortDescription,
# categoryId, in that order. String values are single-quoted TS literals
# (may span lines; only \' escapes occur in the registry today).
_TOOL_RE = re.compile(
    r"id:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*name:\s*'((?:[^'\\]|\\.)*)',"
    r"\s*shortDescription:\s*'((?:[^'\\]|\\.)*)',\s*categoryId:\s*'([^']+)'",
    re.DOTALL,
)


def _unescape_ts(s):
    """Undo TS single-quote escapes (only \\' occurs in the registry)."""
    return s.replace("\\'", "'").replace("\\\\", "\\")


def load_tools_from_registry():
    """(tool id, name, shortDescription, categoryId) for every tool in
    src/registry/batches/**/*.ts, sorted by id. Aborts unless the
    registry yields exactly EXPECTED_TOOL_COUNT unique tools."""
    registry_dir = os.path.join(_HERE, "..", "src", "registry", "batches")
    tools = []
    for path in sorted(glob.glob(os.path.join(registry_dir, "**", "*.ts"),
                                 recursive=True)):
        with open(path, encoding="utf-8") as f:
            src = f.read()
        for m in _TOOL_RE.finditer(src):
            tool_id, slug, name, short, category = (
                m.group(1), m.group(2), _unescape_ts(m.group(3)),
                _unescape_ts(m.group(4)), m.group(5),
            )
            if tool_id != slug:
                sys.exit(f"registry id/slug mismatch: {tool_id!r} != {slug!r}")
            tools.append((tool_id, name, short, category))
    ids = [t[0] for t in tools]
    if len(ids) != len(set(ids)):
        sys.exit(f"duplicate tool ids in registry: {len(ids)} rows, "
                 f"{len(set(ids))} unique")
    if len(tools) != EXPECTED_TOOL_COUNT:
        sys.exit(f"registry has {len(tools)} tools, expected "
                 f"{EXPECTED_TOOL_COUNT} — update EXPECTED_TOOL_COUNT "
                 f"and src/config/ogImages.ts together")
    return sorted(tools)

# (category id, EN display name, icon key) — categories.ts `name` field.
CATEGORIES = [
    ("text-writing", "Text & Writing Tools", "document"),
    ("developer", "Developer Tools", "grid"),
    ("calculators", "Calculators", "calculator"),
    ("social-media", "Social Media Tools", "image"),
    ("pdf", "PDF Tools", "image"),
    ("seo", "SEO Tools", "document"),
    ("image-file", "Image & File Tools", "image"),
]

# (lang, tool id, localized display name, localized subline)
LOCALIZED = [
    ("de", "word-counter", "W\u00f6rterz\u00e4hler", DE_SUBLINE),
    ("de", "merge-pdf", "PDF zusammenf\u00fcgen", DE_SUBLINE),
    ("de", "image-compressor", "Bild-Kompressor", DE_SUBLINE),
    ("es", "word-counter", "Contador de Palabras", ES_SUBLINE),
    ("es", "merge-pdf", "Combinar PDF", ES_SUBLINE),
    ("es", "image-compressor", "Compresor de Im\u00e1genes", ES_SUBLINE),
]

_ICON_BY_KEY = {
    "shield-key": gb.icon_shield_key,
    "qr": gb.icon_qr,
    "image": gb.icon_image,
    "calculator": gb.icon_calculator,
    "document": gb.icon_document,
    "grid": gb.icon_grid,
}


_CATEGORY_ICON = {
    cat_id: _ICON_BY_KEY[icon_key] for cat_id, _title, icon_key in CATEGORIES
}


def icon_for_tool(slug, category_id=None):
    """Blog-script icon rules, matched against the FULL slug; where no
    rule matches, the tool's category line-art icon (never grid by
    default — developer tools keep grid because that IS their
    category icon)."""
    for keywords, fn in gb.ICON_RULES:
        if any(k in slug for k in keywords):
            return fn
    if category_id and category_id in _CATEGORY_ICON:
        return _CATEGORY_ICON[category_id]
    return gb.icon_grid


def subline_for(short_description, probe_draw):
    """The tool's own shortDescription when it fits one subline
    (26px, max 1020px wide); otherwise the established generic
    subline. Never truncated, never reworded."""
    sub_font = gb.font_for("en", 26 * SS, bold=False)
    if probe_draw.textlength(short_description, font=sub_font) <= 1020 * SS:
        return short_description
    return TOOL_SUBLINE


def _paste_icon(img, icon_fn):
    """Draw the 1x line-art icon on a layer, upscale, paste centred."""
    layer = Image.new("RGBA", (480, 480), (0, 0, 0, 0))
    icon_draw = ImageDraw.Draw(layer)
    icon_fn(icon_draw, 240, 240, w=5)
    layer = layer.resize((480 * SS, 480 * SS), Image.LANCZOS)
    img.paste(layer, ((W * SS - 480 * SS) // 2, int(178 * SS) - 240 * SS), layer)


def render_card(title, lang, icon_fn, subline):
    """Tool / category / localized card — the blog card's layout exactly:
    centred line-art icon, centred title block, muted subline, green domain."""
    img = Image.new("RGB", (W * SS, H * SS), BG)
    _paste_icon(img, icon_fn)
    draw = ImageDraw.Draw(img)

    title_font, lines = gb.fit_title(
        draw, title, lang, max_width=1020 * SS, max_lines=3
    )
    line_h = int(title_font.size * 1.18)
    total_h = line_h * len(lines)
    sub_font = gb.font_for(lang, 26 * SS, bold=False)
    dom_font = gb.font_for(lang, 28 * SS, bold=True)
    block_h = total_h + 20 * SS + 26 * SS + 14 * SS + 28 * SS
    y = int(300 * SS + (306 * SS - block_h) // 2)
    for line in lines:
        tw = draw.textlength(line, font=title_font)
        draw.text(((W * SS - tw) // 2, y), line, font=title_font, fill=DARK)
        y += line_h
    y += 20 * SS
    sw = draw.textlength(subline, font=sub_font)
    draw.text(((W * SS - sw) // 2, y), subline, font=sub_font, fill=MUTED)
    y += 26 * SS + 14 * SS
    dw = draw.textlength(DOMAIN, font=dom_font)
    draw.text(((W * SS - dw) // 2, y), DOMAIN, font=dom_font, fill=GREEN)
    return img.resize((W, H), Image.LANCZOS)


def _draw_logo_mark(draw, x, y, size):
    """Filled green rounded-square logo mark with 4 white squares —
    exactly the header logo / public/favicon.svg proportions (32x32
    viewBox: rounded rect, four 8x8 squares at (7,7), (17,7), (7,17),
    (17,17)), scaled to `size`."""
    draw.rounded_rectangle(
        [x, y, x + size, y + size], radius=size * 7 // 32, fill=GREEN
    )
    sq = size * 8 // 32
    margin = size * 7 // 32
    gap = size * 2 // 32
    for dx in (margin, margin + sq + gap):
        for dy in (margin, margin + sq + gap):
            draw.rounded_rectangle(
                [x + dx, y + dy, x + dx + sq, y + dy + sq],
                radius=max(2, size // 32),
                fill=(255, 255, 255),
            )


def _fit_fixed_lines(draw, lines, max_width, size_hi=72, size_lo=44):
    """Largest bold size at which every fixed line fits max_width."""
    for size in range(size_hi * SS, (size_lo - 1) * SS, -2 * SS):
        font = gb.font_for("en", size, bold=True)
        if all(draw.textlength(line, font=font) <= max_width for line in lines):
            return font
    return gb.font_for("en", size_lo * SS, bold=True)


def render_default_card():
    """Homepage / default card — brand-led: logo mark + UtilityFlow
    wordmark, two-line headline (dark + green), categories line, domain."""
    img = Image.new("RGB", (W * SS, H * SS), BG)
    draw = ImageDraw.Draw(img)

    # Brand row: logo mark + wordmark, centred as one row.
    logo = 88 * SS
    word_font = gb.font_for("en", 68 * SS, bold=True)
    wordmark = "UtilityFlow"
    ww = draw.textlength(wordmark, font=word_font)
    row_w = logo + 20 * SS + ww
    row_x = (W * SS - row_w) // 2
    row_y = 104 * SS
    _draw_logo_mark(draw, row_x, row_y, logo)
    draw.text(
        (row_x + logo + 20 * SS, row_y + (logo - word_font.size) // 2 - 4 * SS),
        wordmark, font=word_font, fill=DARK,
    )

    # Headline: two fixed lines, dark then green.
    head_lines = ["86 free online tools.", "Fast. Private. No sign-up."]
    head_font = _fit_fixed_lines(draw, head_lines, max_width=1020 * SS)
    line_h = int(head_font.size * 1.18)
    y = 268 * SS
    for line, color in zip(head_lines, (DARK, GREEN)):
        tw = draw.textlength(line, font=head_font)
        draw.text(((W * SS - tw) // 2, y), line, font=head_font, fill=color)
        y += line_h

    # Categories line.
    cat_font = gb.font_for("en", 28 * SS, bold=False)
    cats = "Text \u00b7 Developer \u00b7 Calculators \u00b7 PDF \u00b7 SEO \u00b7 Images \u00b7 Social"
    cw = draw.textlength(cats, font=cat_font)
    draw.text(((W * SS - cw) // 2, 478 * SS), cats, font=cat_font, fill=MUTED)

    # Domain.
    dom_font = gb.font_for("en", 30 * SS, bold=True)
    dw = draw.textlength(DOMAIN, font=dom_font)
    draw.text(((W * SS - dw) // 2, 528 * SS), DOMAIN, font=dom_font, fill=GREEN)
    return img.resize((W, H), Image.LANCZOS)


def save_jpeg(img, path):
    img.save(path, format="JPEG", quality=88, optimize=True)
    print(f"{path}: {os.path.getsize(path)} bytes")


def main():
    root = os.path.join(_HERE, "..", "public")
    tools = load_tools_from_registry()
    out = []

    # Probe draw for the one-line subline fit check (26px subline font).
    probe = ImageDraw.Draw(Image.new("RGB", (W, H), BG))

    # 1. Default / homepage card.
    p = os.path.join(root, "og-image.jpg")
    save_jpeg(render_default_card(), p)
    out.append(p)

    # 2. All tools (registry order, sorted by id).
    used_short = []
    for tool_id, title, short, category_id in tools:
        subline = subline_for(short, probe)
        if subline != TOOL_SUBLINE:
            used_short.append(tool_id)
        p = os.path.join(root, "og", f"{tool_id}.jpg")
        save_jpeg(
            render_card(title, "en", icon_for_tool(tool_id, category_id),
                        subline),
            p,
        )
        out.append(p)
    print(f"tools: {len(tools)} cards, "
          f"{len(used_short)} using their own shortDescription as subline"
          + (f" ({', '.join(used_short)})" if used_short else
             " (all use the generic subline)"))

    # 3. Categories (+ all-tools directory card, "All 86 Tools").
    for cat_id, title, icon_key in CATEGORIES:
        p = os.path.join(root, "og", f"{cat_id}.jpg")
        save_jpeg(
            render_card(title, "en", _ICON_BY_KEY[icon_key], CATEGORY_SUBLINE), p
        )
        out.append(p)
    p = os.path.join(root, "og", "tools.jpg")
    save_jpeg(
        render_card("All 86 Tools", "en", gb.icon_grid, CATEGORY_SUBLINE), p
    )
    out.append(p)

    # 4. Localized tool cards (de, es).
    for lang, tool_id, title, subline in LOCALIZED:
        p = os.path.join(root, "og", lang, f"{tool_id}.jpg")
        save_jpeg(render_card(title, lang, icon_for_tool(tool_id), subline), p)
        out.append(p)

    print(f"done: {len(out)} images")
    return out


if __name__ == "__main__":
    main()
