# Skooli Website Demo

## Design system notes

### Brand palette
- **Emerald** `#009877`
- **Gold** `#FFD700`
- **Skooli Cream** `#FCE6AE`
- **White** `#FFFFFF`

Tokens are defined in [`src/App.css`](src/App.css) and exposed through CSS variables (for example `var(--brand-emerald)`). Use Tailwind arbitrary values such as `text-[var(--brand-emerald)]` and utility helpers (`text-brand-emerald`, `bg-brand-emerald`, etc.) to stay on palette. Accent and hover states should default to gold, with emerald used for focus rings and primary actions.

### Tone of voice
Keep UI copy warm, invitational, and rooted in lived impact. Lead with facts and proof points, avoid hype, and speak about families and educators before features. Aim for confident verbs, people-first nouns, and short declarative sentences.

### Asset library
Vector-based illustration and texture assets are versioned inside [`src/assets/branding/`](src/assets/branding/) so they travel with the codebase:

| Asset | Purpose | Notes |
| --- | --- | --- |
| `skooli-expansion-map.svg` | Animated/interactive map base | Optimised SVG with gradient fills. Pair with the PNG fallback for environments that do not render SVG. |
| `emerald-gradient-texture.svg` | Background wash overlays | Apply as a CSS background image to panels that need depth without extra DOM nodes. |
| `gold-line-accents.svg` | Section dividers or pull-quote underlines | Works best inside `<picture>` or as mask images for wide layouts. |
| `skooli-icon-set.svg` | Supplementary iconography (book, logistics, partnerships) | Stroke-weight tuned to lucide-react defaults; export individual glyphs via `<symbol>` slicing if needed. |

#### Manual upload checklist
Only the large binary imagery needs to be added manually—color tokens already live in [`src/App.css`](src/App.css) and do **not** require uploading anything. Place the provided classroom hero photos and Africa expansion map into `public/assets/branding/` **before** running `pnpm build` locally so the UI can load the real assets:

| File name | Recommended source | Target path |
| --- | --- | --- |
| `skooli-classroom-hero-2000.webp` | Provided classroom hero image | `public/assets/branding/skooli-classroom-hero-2000.webp` |
| `skooli-classroom-hero-1200.webp` | Provided classroom hero image | `public/assets/branding/skooli-classroom-hero-1200.webp` |
| `skooli-classroom-hero-768.webp` | Provided classroom hero image | `public/assets/branding/skooli-classroom-hero-768.webp` |
| `skooli-classroom-hero-2000.jpg` | Provided classroom hero image | `public/assets/branding/skooli-classroom-hero-2000.jpg` |
| `skooli-classroom-hero-1200.jpg` | Provided classroom hero image | `public/assets/branding/skooli-classroom-hero-1200.jpg` |
| `skooli-classroom-hero-768.jpg` | Provided classroom hero image | `public/assets/branding/skooli-classroom-hero-768.jpg` |
| `skooli-expansion-map.png` | Map fallback for legacy clients | `public/assets/branding/skooli-expansion-map.png` |

The UI automatically falls back to branded SVG placeholders when any of the above files are missing, so development can continue without them. Replace the placeholders by uploading the production assets listed here.

## Development

1. Install dependencies with `pnpm install`.
2. Run the local server with `pnpm dev`.
3. Build for production with `pnpm build`.
