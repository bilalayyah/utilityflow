#!/usr/bin/env python3
"""Generate branded per-article OG images for the UtilityFlow blog —
MINIMALIST redesign theme (2026-11-20).

Usage:
    python3 scripts/generate-blog-images.py --jobs /tmp/jobs.json --out public/blog-images

Jobs JSON: a list of {"id": <article id>, "lang": <lang>, "title": <localized title>}.
Output: 1200x630 PNG files named <id>-<lang>.png (identical names, size and
format to the previous pipeline, so og:image URLs do not change).
Deterministic: same input -> byte-identical output (PNG, no timestamps).
$0 — uses only Pillow + system fonts (Noto Sans; Inter is NOT installed on
this machine, see FONT note below).

Style (matches the approved mockup uf-06-blog-article.png):
  - flat warm off-white background #F8F5F0, no gradients, no blobs, no pill
  - one thin green (#0E8A66) line-art icon, centred, drawn for the article's
    topic (shield+key for password/security, document for text tools,
    calculator, QR grid, image frame, clock, swap arrows, dice, droplet,
    waveform, 4-square grid as the generic fallback)
  - minimal centred typography: dark title, muted subline, green domain
  - icons are drawn at 2x supersampling and downscaled (LANCZOS) so the
    thin strokes stay smooth

Title extraction driver: scripts/extract-blog-image-titles.ts (EN titles from
src/registry/blogArticleIndex.ts, localized titles from
src/locales/<lang>/blog.ts). Bulk regeneration:
  ./node_modules/.bin/tsx scripts/extract-blog-image-titles.ts --all --out /tmp/uf-blog-image-jobs-all.json
  python3 scripts/generate-blog-images.py --jobs /tmp/uf-blog-image-jobs-all.json --out public/blog-images
"""

import argparse
import json
import math
import os
import sys

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
SS = 2  # supersampling factor for smooth thin line art
# Minimalist theme colours (from the approved redesign mockups).
BG = (248, 245, 240)       # #F8F5F0 warm off-white
GREEN = (14, 138, 102)     # #0E8A66 brand green (icon + domain)
GREEN_SOFT = (127, 191, 169)  # #7FBFA9 light green accent (inner detail)
GREY = (154, 163, 160)     # #9AA3A0 muted grey-green (inner shield line)
DARK = (31, 41, 55)         # #1F2937 title ink
MUTED = (107, 114, 128)     # #6B7280 subline
SUBLINE = "Free guide \u00b7 No sign-up \u00b7 Read instantly"
DOMAIN = "utilityflow.online"

# FONT: Inter is NOT installed on this machine (fc-list shows no Inter).
# Noto Sans is the closest clean sans available; the site's web font is
# Inter, but for the PIL pipeline Noto Sans Bold/Regular is the best
# available option without downloading fonts.
FONT_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
FONT_REGULAR = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
# CJK fallback for ja/ko/zh titles (Noto Sans CJK if present, else Serif CJK).
CJK_BOLD_CANDIDATES = [
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc",
]


# Devanagari (Hindi) — WARNING: this machine's Noto Sans Devanagari has
# NO Latin glyphs (272 glyphs, Devanagari only) and Noto Sans has no
# Devanagari. Mixed titles like "PDF में पेज नंबर..." must be rendered
# run-by-run via _run_font / draw_mixed_text — never with a single font.
# Arabic — same mixed-run problem as Hindi: this machine's
# Noto Sans Arabic Bold covers only 16/95 Latin glyphs, and Noto Sans
# has no Arabic. Mixed titles like "PDF في..." must be rendered
# run-by-run via _run_font / draw_mixed_text — never with a single font.
# Arabic runs are laid out right-to-left (draw_mixed_text, rtl=True).
ARABIC_BOLD = "/usr/share/fonts/truetype/noto/NotoSansArabic-Bold.ttf"

# Bengali — same mixed-run problem as Hindi: Noto Sans Bengali Bold
# covers Bengali only, Noto Sans has no Bengali. Mixed titles like
# "PDF দিয়ে..." must be rendered run-by-run via _run_font /
# draw_mixed_text — never with a single font. Bengali is LTR like Hindi.
BENGALI_BOLD = "/usr/share/fonts/truetype/noto/NotoSansBengali-Bold.ttf"

# Urdu — same mixed-run problem as Hindi: this machine's
# Noto Sans Urdu Bold covers only 16/95 Latin glyphs, and Noto Sans
# has no Urdu. Mixed titles like "PDF في..." must be rendered
# run-by-run via _run_font / draw_mixed_text — never with a single font.
# Urdu runs are laid out right-to-left (draw_mixed_text, rtl=True).
URDU_BOLD = "/usr/share/fonts/truetype/noto/NotoNastaliqUrdu-Bold.ttf"


def font_for(lang, size, bold=True):
    """Pick a font that can render the language; CJK needs a CJK font."""
    if lang == "hi":
        # Bold (titles) needs Devanagari glyphs; regular weight is only
        # ever used for Latin-only strings (subline), so Noto Sans
        # Regular is correct there — this machine's Devanagari fonts
        # have no Latin glyphs (see _run_font).
        if bold:
            path = DEVA_BOLD
        else:
            return ImageFont.truetype(FONT_REGULAR, size)
        if not os.path.exists(path):
            raise RuntimeError(
                f"No Devanagari font found for lang=hi; refusing to render. "
                f"Checked: {path}"
            )
        return ImageFont.truetype(path, size)
    if lang == "ar":
        # Bold (titles) needs Arabic glyphs; regular weight is only
        # ever used for Latin-only strings (subline), so Noto Sans
        # Regular is correct there.
        if bold:
            path = ARABIC_BOLD
        else:
            return ImageFont.truetype(FONT_REGULAR, size)
        if not os.path.exists(path):
            raise RuntimeError(
                f"No Arabic font found for lang=ar; refusing to render. "
                f"Checked: {path}"
            )
        return ImageFont.truetype(path, size)
    if lang == "ur":
        # Bold (titles) needs Urdu glyphs; regular weight is only
        # ever used for Latin-only strings (subline), so Noto Sans
        # Regular is correct there.
        if bold:
            path = URDU_BOLD
        else:
            return ImageFont.truetype(FONT_REGULAR, size)
        if not os.path.exists(path):
            raise RuntimeError(
                f"No Urdu font found for lang=ur; refusing to render. "
                f"Checked: {path}"
            )
        return ImageFont.truetype(path, size)
    if lang == "bn":
        # Bold (titles) needs Bengali glyphs; regular weight is only
        # ever used for Latin-only strings (subline), so Noto Sans
        # Regular is correct there.
        if bold:
            path = BENGALI_BOLD
        else:
            return ImageFont.truetype(FONT_REGULAR, size)
        if not os.path.exists(path):
            raise RuntimeError(
                f"No Bengali font found for lang=bn; refusing to render. "
                f"Checked: {path}"
            )
        return ImageFont.truetype(path, size)
    if lang in ("ja", "ko", "zh"):
        if bold:
            for path in CJK_BOLD_CANDIDATES:
                if os.path.exists(path):
                    return ImageFont.truetype(path, size)
            # Fall through to Noto Sans: it lacks CJK glyphs (tofu boxes).
            # The full-batch driver must fail loudly here instead of shipping tofu.
            raise RuntimeError(
                f"No CJK bold font found for lang={lang}; refusing to render. "
                f"Checked: {CJK_BOLD_CANDIDATES}"
            )
        # Regular weight is only ever used for Latin-only strings (the
        # subline and domain), so Noto Sans Regular is correct here.
        return ImageFont.truetype(FONT_REGULAR, size)
    path = FONT_BOLD if bold else FONT_REGULAR
    return ImageFont.truetype(path, size)


def _is_deva(ch):
    """Devanagari codepoint (incl. ZWJ/ZWNJ joiners used in conjuncts)."""
    return '\u0900' <= ch <= '\u097f' or ch in ('\u200c', '\u200d')


def _is_arabic(ch):
    """Arabic codepoint (Arabic, Supplement, Extended-A, presentation
    forms A/B, incl. ZWJ/ZWNJ joiners). Western digits 0-9 and Latin
    punctuation are NOT Arabic — they ride in Latin runs, as in RTL
    text. Arabic-Indic digits (U+0660-0669, U+06F0-06F9) ARE Arabic."""
    return (
        '\u0600' <= ch <= '\u06ff'
        or '\u0750' <= ch <= '\u077f'
        or '\u08a0' <= ch <= '\u08ff'
        or '\ufb50' <= ch <= '\ufdff'
        or '\ufe70' <= ch <= '\ufeff'
        or ch in ('\u200c', '\u200d')
    )


def _is_urdu(ch):
    """Urdu codepoint (Urdu, Supplement, Extended-A, presentation
    forms A/B, incl. ZWJ/ZWNJ joiners). Western digits 0-9 and Latin
    punctuation are NOT Urdu — they ride in Latin runs, as in RTL
    text. Urdu-Indic digits (U+0660-0669, U+06F0-06F9) ARE Urdu."""
    return (
        '\u0600' <= ch <= '\u06ff'
        or '\u0750' <= ch <= '\u077f'
        or '\u08a0' <= ch <= '\u08ff'
        or '\ufb50' <= ch <= '\ufdff'
        or '\ufe70' <= ch <= '\ufeff'
        or ch in ('\u200c', '\u200d')
    )


def _is_bengali(ch):
    """Bengali codepoint (U+0980–U+09FF, incl. ZWJ/ZWNJ joiners used in
    conjuncts). Western digits 0-9 and Latin punctuation are NOT Bengali
    — they ride in Latin runs. Bengali digits (U+09E6–U+09EF) ARE Bengali."""
    return '\u0980' <= ch <= '\u09ff' or ch in ('\u200c', '\u200d')


def _is_native(ch, lang):
    """True when ch belongs to the locale's native script (vs Latin)."""
    if lang == "ar":
        return _is_arabic(ch)
    if lang == "bn":
        return _is_bengali(ch)
    if lang == "ur":
        return _is_urdu(ch)
    return _is_deva(ch)


def _split_runs(text, lang="hi"):
    """Split mixed-script text into (is_native, substring) runs.
    Spaces are neutral: they ride with the preceding run (or the next run
    if the text starts with a space), so inter-word spacing is measured
    with a font that actually has a space glyph."""
    runs = []
    pending_space = ''
    for ch in text:
        if ch == ' ':
            pending_space += ch
            continue
        is_native = _is_native(ch, lang)
        piece = pending_space + ch
        pending_space = ''
        if runs and runs[-1][0] == is_native:
            runs[-1] = (is_native, runs[-1][1] + piece)
        else:
            runs.append((is_native, piece))
    if pending_space:
        if runs:
            runs[-1] = (runs[-1][0], runs[-1][1] + pending_space)
        else:
            runs.append((False, pending_space))
    return runs


def _run_font(is_native, size, lang="hi"):
    """Bold font for one script run of a Hindi/Arabic/Bengali/Urdu title. This machine's
    Noto Sans Devanagari has NO Latin glyphs (272 glyphs, Devanagari
    only) and Noto Sans Arabic Bold covers only 16/95 Latin glyphs,
    while Noto Sans has neither Devanagari nor Arabic nor Bengali nor Urdu — a single font
    cannot render mixed titles like 'PDF में पेज नंबर...' or
    'PDF في...' or 'PDF দিয়ে...', so each run gets its own."""
    if is_native:
        if lang == "ar":
            path = ARABIC_BOLD
        elif lang == "bn":
            path = BENGALI_BOLD
        elif lang == "ur":
            path = URDU_BOLD
        else:
            path = DEVA_BOLD
        return ImageFont.truetype(path, size)
    return ImageFont.truetype(FONT_BOLD, size)


def mixed_textlength(draw, text, size, lang="hi"):
    """Pixel width of a mixed-script Hindi/Arabic/Bengali/Urdu title line (sum of run widths)."""
    return sum(
        draw.textlength(run, font=_run_font(is_native, size, lang))
        for is_native, run in _split_runs(text, lang)
    )


def draw_mixed_text(draw, x, y, text, size, fill, lang="hi", rtl=False):
    """Draw a mixed-script Hindi/Arabic/Bengali/Urdu title line starting at x, run by run.
    For rtl=True (Arabic/Urdu) runs are laid out right-to-left: x is the LEFT
    edge of the centred line and runs are placed in logical order from
    the right edge, so the first logical run sits rightmost. Within each
    run Pillow+raqm shapes the script correctly (Arabic/Urdu contextual forms,
    ligatures)."""
    runs = _split_runs(text, lang)
    if rtl:
        # anchor='lt': with the default 'la' anchor the Arabic/Urdu ink sits
        # ~0.53x below the anchor (Noto Sans Arabic/Urdu's ascender metric is
        # far above the actual glyph tops) and overflows the line slot
        # into the subline. 'lt' anchors at the ink top, so glyphs fill
        # the slot exactly (measured: 0..156 of a 169 slot at size 72).
        x_right = x + mixed_textlength(draw, text, size, lang)
        for is_native, run in runs:
            f = _run_font(is_native, size, lang)
            w = draw.textlength(run, font=f)
            draw.text((x_right - w, y), run, font=f, fill=fill, anchor='lt')
            x_right -= w
        return
    for is_native, run in runs:
        f = _run_font(is_native, size, lang)
        draw.text((x, y), run, font=f, fill=fill)
        x += draw.textlength(run, font=f)


def wrap_text(draw, text, font, max_width, lang=None):
    """Greedy word wrap by pixel width; returns list of lines.
    A word wider than max_width is split by character — required for
    spaceless CJK titles (Japanese has no spaces, so the whole title is
    a single 'word'); CJK breaks anywhere without hyphenation.
    For lang='hi'/'ar'/'bn'/'ur', widths are measured per script run (mixed_textlength):
    a Devanagari/Arabic/Bengali/Urdu word measured with the Latin font (or vice versa) would
    use .notdef widths and wrap wrongly."""
    size = font.size

    def wlen(s):
        if lang in ('hi', 'ar', 'bn', 'ur'):
            return mixed_textlength(draw, s, size, lang)
        return draw.textlength(s, font=font)

    words = text.split()
    lines, cur = [], ""
    for word in words:
        while wlen(word) > max_width:
            # Largest fitting character prefix (binary search).
            lo, hi = 1, len(word)
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if wlen(word[:mid]) <= max_width:
                    lo = mid
                else:
                    hi = mid - 1
            chunk, word = word[:lo], word[lo:]
            if cur:
                lines.append(cur)
                cur = ""
            lines.append(chunk)
        trial = f"{cur} {word}".strip()
        if wlen(trial) <= max_width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def fit_title(draw, title, lang, max_width, max_lines=3):
    """Largest bold size (72..40, 1x units) whose wrapped title fits in max_lines.
    Sizes are scaled by SS: the draw surface is supersampled."""
    for size in range(72 * SS, 39 * SS, -4 * SS):
        font = font_for(lang, size, bold=True)
        lines = wrap_text(draw, title, font, max_width, lang=lang)
        if len(lines) <= max_lines and all(
            (mixed_textlength(draw, line, size, lang) if lang in ('hi', 'ar', 'bn', 'ur')
             else draw.textlength(line, font=font)) <= max_width for line in lines
        ):
            return font, lines
    # Fallback: smallest size, allow overflow lines (should not happen for
    # real titles, which are <=60 chars after the metadata fix).
    font = font_for(lang, 40 * SS, bold=True)
    lines = wrap_text(draw, title, font, max_width, lang=lang)
    if len(lines) > max_lines or any(
        (mixed_textlength(draw, line, 40 * SS, lang) if lang in ('hi', 'ar', 'bn', 'ur')
         else draw.textlength(line, font=font)) > max_width for line in lines
    ):
        print(f"OVERFLOW title needs {len(lines)} lines at 40px: {title!r}", file=sys.stderr)
    return font, lines


# ---------------------------------------------------------------------------
# Thin line-art icons. All coordinates are in a local box centred on (0, 0)
# with half-size ~120 (1x units); the caller scales by SS and translates to
# the icon centre. `w` is the stroke width in final (1x) pixels.
# ---------------------------------------------------------------------------

def _quad(p0, p1, p2, n=24):
    """Sample a quadratic Bezier curve; returns a list of (x, y)."""
    pts = []
    for i in range(n + 1):
        t = i / n
        x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0]
        y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1]
        pts.append((x, y))
    return pts


def _shield_points(scale=1.0):
    """Shield outline points (right half mirrored to the left)."""
    right = []
    right += _quad((0, -112), (70, -102), (106, -56))
    right += _quad((106, -56), (110, 18), (62, 82))
    right += _quad((62, 82), (32, 106), (0, 118))
    left = [(-x, y) for (x, y) in reversed(right[1:-1])]
    pts = right + [(0, 118)] + left
    return [(x * scale, y * scale) for (x, y) in pts]


def icon_shield_key(d, cx, cy, w):
    """Shield + key (password / security) — as in the approved mockup."""
    pts = [(cx + x, cy + y) for (x, y) in _shield_points()]
    d.line(pts, fill=GREEN, width=w, joint="curve")
    inner = [(cx + x, cy + y) for (x, y) in _shield_points(scale=0.80)]
    d.line(inner, fill=GREY, width=max(2, w - 2), joint="curve")
    # Key overlapping the shield's lower right, angled 45 degrees.
    kx, ky, kr = cx + 78, cy - 8, 32  # bow centre + radius
    d.ellipse([kx - kr, ky - kr, kx + kr, ky + kr], outline=GREEN, width=w)
    d.line([kx - 12, ky - 12, kx + 12, ky + 12], fill=GREEN, width=max(2, w - 2))
    # Shaft from the bow edge down-right, with two teeth.
    ux, uy = 0.7071, 0.7071  # unit vector along the shaft
    sx, sy = kx + kr * ux, ky + kr * uy  # shaft start (on the bow)
    ex, ey = sx + 62 * ux, sy + 62 * uy  # shaft end
    d.line([sx, sy, ex, ey], fill=GREEN, width=w)
    for t in (30, 48):  # teeth, perpendicular to the shaft
        tx, ty = sx + t * ux, sy + t * uy
        d.line([tx, ty, tx - 16 * uy, ty + 16 * ux], fill=GREEN, width=max(2, w - 2))


def icon_document(d, cx, cy, w):
    """Document with text lines (word / text tools)."""
    d.rounded_rectangle(
        [cx - 78, cy - 108, cx + 78, cy + 108], radius=18,
        outline=GREEN, width=w,
    )
    for i, (y, ln) in enumerate([(-52, 96), (-8, 96), (36, 64)]):
        d.line(
            [cx - ln // 2, cy + y, cx + ln // 2, cy + y],
            fill=GREEN_SOFT if i == 2 else GREEN,
            width=max(2, w - 2),
        )


def icon_calculator(d, cx, cy, w):
    """Calculator (calculator tools)."""
    d.rounded_rectangle(
        [cx - 72, cy - 112, cx + 72, cy + 112], radius=18,
        outline=GREEN, width=w,
    )
    d.rounded_rectangle(
        [cx - 50, cy - 88, cx + 50, cy - 40], radius=8,
        outline=GREEN, width=max(2, w - 2),
    )
    for row in range(3):
        for col in range(3):
            x0 = cx - 50 + col * 38
            y0 = cy - 12 + row * 38
            d.rectangle(
                [x0, y0, x0 + 24, y0 + 24], outline=GREEN, width=max(2, w - 2)
            )


def icon_qr(d, cx, cy, w):
    """QR code (QR generator / scanner)."""
    def finder(fx, fy):
        d.rectangle([fx, fy, fx + 66, fy + 66], outline=GREEN, width=w)
        d.rectangle([fx + 20, fy + 20, fx + 46, fy + 46], fill=GREEN)
    finder(cx - 108, cy - 108)
    finder(cx + 42, cy - 108)
    finder(cx - 108, cy + 42)
    # Deterministic data modules (bottom-right area).
    for mx, my in [(48, 48), (78, 48), (48, 78), (96, 78), (66, 96),
                   (48, 108), (96, 108), (78, 96)]:
        d.rectangle([cx + mx, cy + my, cx + mx + 16, cy + my + 16], fill=GREEN)


def icon_image(d, cx, cy, w):
    """Image frame with sun + mountains (image / photo / PDF tools)."""
    d.rounded_rectangle(
        [cx - 100, cy - 74, cx + 100, cy + 74], radius=12,
        outline=GREEN, width=w,
    )
    d.ellipse(
        [cx + 42, cy - 52, cx + 70, cy - 24], outline=GREEN, width=max(2, w - 2)
    )
    d.line(
        [(cx - 100, cy + 74), (cx - 38, cy - 6), (cx + 2, cy + 34),
         (cx + 44, cy - 18), (cx + 100, cy + 74)],
        fill=GREEN, width=w, joint="curve",
    )


def icon_clock(d, cx, cy, w):
    """Clock (timer / date / calendar tools)."""
    d.ellipse([cx - 100, cy - 100, cx + 100, cy + 100], outline=GREEN, width=w)
    d.line([cx, cy, cx, cy - 62], fill=GREEN, width=w)
    d.line([cx, cy, cx + 44, cy + 32], fill=GREEN, width=w)
    d.ellipse([cx - 6, cy - 6, cx + 6, cy + 6], fill=GREEN)


def icon_swap(d, cx, cy, w):
    """Two opposing arrows (unit / currency converters)."""
    # Top arrow pointing right.
    d.line([cx - 92, cy - 38, cx + 62, cy - 38], fill=GREEN, width=w)
    d.line([cx + 62, cy - 38, cx + 34, cy - 58], fill=GREEN, width=w)
    d.line([cx + 62, cy - 38, cx + 34, cy - 18], fill=GREEN, width=w)
    # Bottom arrow pointing left.
    d.line([cx + 92, cy + 38, cx - 62, cy + 38], fill=GREEN, width=w)
    d.line([cx - 62, cy + 38, cx - 34, cy + 18], fill=GREEN, width=w)
    d.line([cx - 62, cy + 38, cx - 34, cy + 58], fill=GREEN, width=w)


def icon_dice(d, cx, cy, w):
    """Die (random / picker tools)."""
    d.rounded_rectangle(
        [cx - 84, cy - 84, cx + 84, cy + 84], radius=20,
        outline=GREEN, width=w,
    )
    for px, py in [(-46, -46), (46, -46), (0, 0), (-46, 46), (46, 46)]:
        d.ellipse(
            [cx + px - 11, cy + py - 11, cx + px + 11, cy + py + 11],
            fill=GREEN,
        )


def icon_droplet(d, cx, cy, w):
    """Droplet (colour / palette tools)."""
    d.line([cx, cy - 108, cx - 72, cy + 8], fill=GREEN, width=w)
    d.line([cx, cy - 108, cx + 72, cy + 8], fill=GREEN, width=w)
    d.arc([cx - 72, cy - 8, cx + 72, cy + 136], 0, 180, fill=GREEN, width=w)
    d.arc(
        [cx - 40, cy + 28, cx + 40, cy + 108], 90, 180,
        fill=GREEN_SOFT, width=max(2, w - 2),
    )


def icon_waveform(d, cx, cy, w):
    """Audio waveform bars (audio / video / speech tools)."""
    for i, h in enumerate([-58, -92, -34, -108, -66, -96, -44]):
        x = cx - 84 + i * 28
        d.line([x, cy + h, x, cy - h], fill=GREEN, width=w)


def icon_grid(d, cx, cy, w):
    """4-square grid — the UtilityFlow logo motif (generic fallback)."""
    for gx in (-52, 10):
        for gy in (-52, 10):
            d.rounded_rectangle(
                [cx + gx, cy + gy, cx + gx + 42, cy + gy + 42], radius=10,
                outline=GREEN, width=w,
            )


# Ordered keyword -> icon. Article ids are "<toolId>-<type>" (type is
# guide/howto/advanced), so the tool slug is the id minus its last segment.
ICON_RULES = [
    (("password", "security", "otp", "authenticator", "2fa"), icon_shield_key),
    (("qr",), icon_qr),
    (("image", "photo", "picture", "pdf", "compress", "resize", "rotate",
      "background", "watermark"), icon_image),
    (("calculator", "age", "loan", "bmi", "percent", "mortgage", "emi",
      "tip", "discount", "salary", "tax", "currency", "compound",
      "interest"), icon_calculator),
    (("word", "text", "case", "character", "lorem", "json", "csv",
      "markdown", "regex", "base64", "url", "hash", "slug", "paraphrase",
      "summar", "translat", "grammar", "plagiarism"), icon_document),
    (("color", "colour", "palette", "gradient"), icon_droplet),
    (("timer", "stopwatch", "countdown", "date", "calendar", "clock",
      "alarm"), icon_clock),
    (("random", "dice", "coin", "picker", "lottery", "name-generator"), icon_dice),
    (("unit", "length", "weight", "temperature", "speed", "time-zone",
      "convert"), icon_swap),
    (("audio", "video", "speech", "voice", "music"), icon_waveform),
]


def icon_for(article_id):
    """Pick the line-art icon for an article id; grid is the fallback."""
    tool = article_id.rsplit("-", 1)[0] if "-" in article_id else article_id
    for keywords, fn in ICON_RULES:
        if any(k in tool for k in keywords):
            return fn
    return icon_grid


def render_card(title, lang, article_id):
    # Flat off-white background, drawn at 2x then downscaled for smooth lines.
    img = Image.new("RGB", (W * SS, H * SS), BG)
    # The icon is drawn on its own 1x layer (local coords are 1x units)
    # and upscaled to the 2x canvas, so the icon is exactly the designed
    # ~240px tall. (Drawing the 1x coords straight onto the 2x canvas
    # rendered every icon at half size.)
    icon_fn = icon_for(article_id)
    layer = Image.new("RGBA", (480, 480), (0, 0, 0, 0))
    icon_draw = ImageDraw.Draw(layer)
    icon_fn(icon_draw, 240, 240, w=5)
    layer = layer.resize((480 * SS, 480 * SS), Image.LANCZOS)
    img.paste(layer, ((W * SS - 480 * SS) // 2, int(178 * SS) - 240 * SS), layer)
    draw = ImageDraw.Draw(img)

    # Centred title block: title + subline + domain, vertically centred in
    # the region below the icon (y 300..606) so 1-, 2- and 3-line titles
    # all sit evenly.
    title_font, lines = fit_title(draw, title, lang, max_width=1020 * SS, max_lines=3)
    line_h = int(title_font.size * 1.18)
    total_h = line_h * len(lines)
    # Subline + domain are Latin-only constants: always the Latin fonts,
    # never a locale font (a Devanagari/CJK font would render them as tofu).
    sub_font = ImageFont.truetype(FONT_REGULAR, 26 * SS)
    dom_font = ImageFont.truetype(FONT_BOLD, 28 * SS)
    block_h = total_h + 20 * SS + 26 * SS + 14 * SS + 28 * SS
    y = int(300 * SS + (306 * SS - block_h) // 2)
    for line in lines:
        if lang in ('hi', 'ar', 'bn', 'ur'):
            tw = mixed_textlength(draw, line, title_font.size, lang)
            draw_mixed_text(draw, (W * SS - tw) // 2, y, line, title_font.size, DARK, lang=lang, rtl=(lang in ('ar', 'ur')))
        else:
            tw = draw.textlength(line, font=title_font)
            draw.text(((W * SS - tw) // 2, y), line, font=title_font, fill=DARK)
        y += line_h
    y += 20 * SS
    sw = draw.textlength(SUBLINE, font=sub_font)
    draw.text(((W * SS - sw) // 2, y), SUBLINE, font=sub_font, fill=MUTED)
    y += 26 * SS + 14 * SS
    dw = draw.textlength(DOMAIN, font=dom_font)
    draw.text(((W * SS - dw) // 2, y), DOMAIN, font=dom_font, fill=GREEN)
    return img.resize((W, H), Image.LANCZOS)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--jobs", required=True, help="JSON list of {id, lang, title}")
    ap.add_argument("--out", required=True, help="output directory")
    args = ap.parse_args()

    with open(args.jobs, encoding="utf-8") as f:
        jobs = json.load(f)
    os.makedirs(args.out, exist_ok=True)

    for job in jobs:
        img = render_card(job["title"], job["lang"], job["id"])
        name = f"{job['id']}-{job['lang']}.png"
        path = os.path.join(args.out, name)
        img.save(path, format="PNG", optimize=True)
        print(f"{name}: {os.path.getsize(path)} bytes")
    print(f"done: {len(jobs)} images -> {args.out}")


if __name__ == "__main__":
    main()
