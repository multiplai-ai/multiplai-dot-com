# MultiplAI Website Rebuild — Handoff

## Status: Pages built, needs visual QA and polish

Two pages rebuilt from scratch to match Pencil.ai designs. User has opened both in browser but hasn't reviewed yet.

---

## Files

| File | What | Status |
|------|------|--------|
| `brands/multiplai/landing-page/index.html` | Main page — agency-focused | Built, needs QA |
| `brands/multiplai/landing-page/for-marketing-leaders.html` | Secondary page — fractional CMO | Built, needs QA |
| `brands/multiplai/landing-page/.vercel/project.json` | Vercel deployment config | Existing, untouched |

## Source of Truth

| Reference | Location |
|-----------|----------|
| Brand profile | `creative-director-main/brands/multiplai.md` |
| Pencil designs | `pencil-new.pen` (two full-page layouts at IDs `2py4C` and `kc1od`) |
| HTML mood board | `.tmp/figma-exports/multiplai-moodboard.html` |
| Design tokens CSS | `brands/multiplai/strategy/design-tokens.css` |
| Brand redesign style guide | `brands/multiplai/strategy/brand-redesign-style-guide.md` |

## Architecture

- **Single-file HTML** — all CSS is embedded in each page (no external stylesheet)
- **No build tools** — vanilla HTML/CSS/JS, deployed to Vercel as static files
- **Shared CSS** — both pages have identical CSS, only content differs
- **Google Fonts loaded:** PT Sans Narrow, IBM Plex Mono, Playfair Display, Inter

## Brand System Applied

- **Colors:** Blush Paper `#F7F2F0` bg, Deep Eggplant `#31263B` text, Obsidian `#14141C` dark sections, Rose Quartz `rgba(245,192,192,0.4)` CTAs, Mist `#E8E3E1` borders
- **Typography:** Cinetype (falls back to Playfair Display) for headlines/buttons, PT Sans Narrow for body, IBM Plex Mono for labels/badges
- **Buttons:** 2px border-radius, Rose Quartz 40% opacity fill, Cinetype Medium Italic 500, 14px/32px padding
- **Textures:** SVG feTurbulence paper speckle on body and all card/section surfaces
- **Cards:** 4px radius, 1px Mist border, subtle paper texture overlay

## Page Sections (both pages)

1. **Nav** — Fixed, logo left, audience links + utility links + Book a Call CTA
2. **Hero** — Centered, badge + headline + subhead + 2 CTAs
3. **Services** — 3 cards in a grid (icons, titles, descriptions)
4. **Platform Demo** — Integration logos + Slack mockup (dark UI with AI teammates chatting) + skills grid
5. **Proof** — 3 stats + 3 testimonial cards
6. **Process** — 4-step cards (01-04 with durations)
7. **Contact Form** — Dark Obsidian background, 2-column: copy left + form right
8. **Footer** — Dark, 4-column: brand + Solutions + Company + Resources

## Known Issues / Remaining Work

### Must Fix
- **Cinetype font not loading** — falls back to Playfair Display. Need to either self-host Cinetype woff2 files or accept the fallback.
- **Form has no backend** — `onsubmit="return false;"` placeholder. Needs Formspree, Netlify Forms, or custom endpoint.
- **Visual QA not done** — user needs to compare rendered pages against Pencil screenshots and flag mismatches.
- **Vercel routing** — need `vercel.json` to serve `for-marketing-leaders.html` at `/for-marketing-leaders` path.

### May Need Adjustment
- **Slack mockup on mobile** — sidebar hides, only chat shows. May need refinement.
- **Service card icons** — using inline SVG approximations of Lucide icons.
- **Nav links** — `#about`, `#process`, `#proof` are anchor links. Blog, About, Newsletter etc. link to `#` placeholder.
- **Integration logos** — text-only placeholders. Could replace with actual SVG logos.

### Nice to Have
- Extract shared CSS into `styles.css` to avoid duplication across pages
- Add OG/social meta tags for sharing previews
- Add favicon
- Wire up Calendly link on "Book a strategy call instead" alt CTA
- Analytics/tracking (no scripts currently)
