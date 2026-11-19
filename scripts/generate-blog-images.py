#!/usr/bin/env python3
"""Generate branded per-article OG images for the UtilityFlow blog.

Usage:
    python3 scripts/generate-blog-images.py --jobs /tmp/jobs.json --out public/blog-images

Jobs JSON: a list of {"id": <article id>, "lang": <lang>, "title": <localized title>}.
Output: 1200x630 PNG files named <id>-<lang>.png, matching the house style of
the existing per-tool cards in public/og/*.jpg (pastel lavender gradient,
soft circles, violet "UtilityFlow" pill with yellow dot, bold left-aligned
article title, slate subline, violet utilityflow.online). Deterministic:
same input -> byte-identical output (PNG, no timestamps). $0 — uses only
Pillow + system fonts (Noto Sans).

Title extraction driver: scripts/extract-blog-image-titles.ts (EN titles from
src/registry/blogArticleIndex.ts, localized titles from
src/locales/<lang>/blog.ts). See ~/workspace/utilityflow/article-images-plan.md.
"""

import argparse
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
# Brand colours from src/index.css (:root tokens) + the public/og/*.jpg cards.
GRAD_TOP = (235, 232, 253)     # #EBE8FD lavender
GRAD_BOTTOM = (222, 214, 253)  # #DED6FD
VIOLET = (124, 58, 237)        # #7c3aed brand violet
INDIGO = (79, 70, 229)         # #4f46e5 accent
DARK = (15, 23, 42)            # #0f172a title ink (slate-900)
MUTED = (71, 85, 105)          # #475569 subline (slate-600)
YELLOW = (250, 204, 21)        # #FACC15 pill dot
CIRCLES = [
    # (cx, cy, r, rgb) — soft pastel blobs, partly off-canvas (as on the og cards)
    (980, 150, 170, (247, 210, 230)),   # pink, top-right
    (1240, 300, 330, (238, 233, 254)),  # pale lavender, right edge
    (80, 640, 230, (221, 214, 254)),    # violet, bottom-left
]
SUBLINE = "Free guide \u00b7 No sign-up \u00b7 Read instantly"
DOMAIN = "utilityflow.online"

FONT_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
FONT_REGULAR = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
# CJK fallback for ja/ko/zh titles (Noto Sans CJK if present, else Serif CJK).
CJK_BOLD_CANDIDATES = [
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc",
]


def font_for(lang, size, bold=True):
    """Pick a font that can render the language; CJK needs a CJK font."""
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


def wrap_text(draw, text, font, max_width):
    """Greedy word wrap by pixel width; returns list of lines.
    A word wider than max_width is split by character — required for
    spaceless CJK titles (Japanese has no spaces, so the whole title is
    a single 'word'); CJK breaks anywhere without hyphenation."""
    words = text.split()
    lines, cur = [], ""
    for word in words:
        while draw.textlength(word, font=font) > max_width:
            # Largest fitting character prefix (binary search).
            lo, hi = 1, len(word)
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if draw.textlength(word[:mid], font=font) <= max_width:
                    lo = mid
                else:
                    hi = mid - 1
            chunk, word = word[:lo], word[lo:]
            if cur:
                lines.append(cur)
                cur = ""
            lines.append(chunk)
        trial = f"{cur} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def fit_title(draw, title, lang, max_width, max_lines=3):
    """Largest bold size (76..44) whose wrapped title fits in max_lines."""
    for size in range(76, 43, -4):
        font = font_for(lang, size, bold=True)
        lines = wrap_text(draw, title, font, max_width)
        if len(lines) <= max_lines and all(
            draw.textlength(line, font=font) <= max_width for line in lines
        ):
            return font, lines
    # Fallback: smallest size, allow overflow lines (should not happen for
    # real titles, which are <=60 chars after the metadata fix).
    font = font_for(lang, 44, bold=True)
    lines = wrap_text(draw, title, font, max_width)
    if len(lines) > max_lines or any(
        draw.textlength(line, font=font) > max_width for line in lines
    ):
        print(f"OVERFLOW title needs {len(lines)} lines at 44px: {title!r}", file=sys.stderr)
    return font, lines


def render_card(title, lang):
    # Vertical lavender gradient background.
    grad = Image.new("RGB", (1, H))
    px = grad.load()
    for y in range(H):
        t = y / (H - 1)
        px[0, y] = tuple(
            int(GRAD_TOP[i] + (GRAD_BOTTOM[i] - GRAD_TOP[i]) * t) for i in range(3)
        )
    img = grad.resize((W, H))
    draw = ImageDraw.Draw(img, "RGBA")
    # soft circles (solid pastel; edges are off-canvas so no halo needed)
    for cx, cy, r, rgb in CIRCLES:
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=rgb + (255,))
    draw = ImageDraw.Draw(img, "RGB")

    # violet pill with yellow dot + "UtilityFlow", top-left (as on og cards)
    pill_font = font_for(lang, 40, bold=True)
    pill_text = "UtilityFlow"
    pill_tw = draw.textlength(pill_text, font=pill_font)
    pill_x, pill_y, pill_h = 60, 56, 76
    pill_w = int(28 + 22 + 12 + pill_tw + 28)
    draw.rounded_rectangle(
        [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h],
        radius=pill_h // 2,
        fill=VIOLET,
    )
    dot_cx, dot_cy, dot_r = pill_x + 28 + 11, pill_y + pill_h // 2, 11
    draw.ellipse(
        [dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r],
        fill=YELLOW,
    )
    draw.text(
        (pill_x + 28 + 22 + 12, pill_y + (pill_h - 40) // 2 - 2),
        pill_text,
        font=pill_font,
        fill=(255, 255, 255),
    )

    # title, left-aligned, auto-fit, max 3 lines.
    # The whole block (title + subline + domain) is vertically centred in
    # the region below the pill (y 170..606) so 1-, 2- and 3-line titles
    # all fit with the subline + domain visible — a fixed title y would
    # push the subline off-canvas for 3-line titles.
    title_font, lines = fit_title(draw, title, lang, max_width=1080, max_lines=3)
    line_h = int(title_font.size * 1.18)
    total_h = line_h * len(lines)
    block_h = total_h + 22 + 26 + 44 + 28
    y = 170 + (436 - block_h) // 2
    title_top = y
    for line in lines:
        draw.text((60, y), line, font=title_font, fill=DARK)
        y += line_h

    # subline below title
    sub_font = font_for(lang, 26, bold=False)
    draw.text((60, title_top + total_h + 22), SUBLINE, font=sub_font, fill=MUTED)

    # domain below subline
    dom_font = font_for(lang, 28, bold=True)
    draw.text(
        (60, title_top + total_h + 22 + 44),
        DOMAIN,
        font=dom_font,
        fill=VIOLET,
    )
    return img


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--jobs", required=True, help="JSON list of {id, lang, title}")
    ap.add_argument("--out", required=True, help="output directory")
    args = ap.parse_args()

    with open(args.jobs, encoding="utf-8") as f:
        jobs = json.load(f)
    os.makedirs(args.out, exist_ok=True)

    for job in jobs:
        img = render_card(job["title"], job["lang"])
        name = f"{job['id']}-{job['lang']}.png"
        path = os.path.join(args.out, name)
        img.save(path, format="PNG", optimize=True)
        print(f"{name}: {os.path.getsize(path)} bytes")
    print(f"done: {len(jobs)} images -> {args.out}")


if __name__ == "__main__":
    main()
