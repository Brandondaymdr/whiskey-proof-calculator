# Whiskey Proof Calculator — Crowded Barrel Eleanor A/B Release

## Project Overview

A public-facing single-page web app for Crowded Barrel Whiskey Co's YouTube channel audience. Visitors use it during an A/B tasting event to calculate how much water to add to their pour of Eleanor Straight Bourbon Whiskey to reach their preferred proof.

**GitHub:** https://github.com/Brandondaymdr/whiskey-proof-calculator
**Vercel:** https://vercel.com/brandon-days-projects-1446c92e/whiskey-proof-calculator
**Branch:** `main` (auto-deploys to Vercel on push)

## The Two Whiskeys

| Batch       | Starting Proof | Seal Color | Accent Color |
| ----------- | -------------- | ---------- | ------------ |
| Eleanor 19A | 114.8          | Purple     | Purple       |
| Eleanor 19B | 116.4          | Gold/Green | Gold/Yellow  |

## Core Formula

From the distillery's proofing spreadsheet (`Second Copy of Proofing Calculator.xlsx`):

```
Water to Add (oz) = (PourSize × (StartProof - DesiredProof)) / DesiredProof
```

### Measurement Conversions (for display)

- **Ounces** (to 2 decimal places)
- **Teaspoons** (1 tsp = 0.1667 oz)
- **Milliliters** (1 oz = 29.5735 mL)
- **Drops** (1 drop ≈ 0.0017 oz / 0.05 mL) — shown when water amount < 0.05 oz

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Montserrat (body), UnifrakturMaguntia (Eleanor blackletter title)
- **Deployment:** Vercel (auto-deploy from GitHub `main` branch)
- **No backend/database needed** — all calculations are client-side

## Design System

### Brand Colors

- **Primary Red:** `#BE1E2D` (Crowded Barrel brand red, used for top bar, slider thumb, dividers)
- **Dark Red:** `#9a1824`
- **Dark Background:** `#0a0a0a` (page background)
- **Card Dark:** `#1f1d1d` (calculator cards, footer)
- **Purple accent:** Batch 19A (purple seal)
- **Gold/Yellow accent:** Batch 19B (gold seal)

### Typography

- **Montserrat** — Primary sans-serif for all UI text (weights 400–900)
- **UnifrakturMaguntia** — Blackletter display font for "Eleanor" title only

### Visual Design

- Dark theme with warm whiskey-adjacent tones
- Crowded Barrel round logo (cream/white on dark) as header hero
- "Eleanor" in blackletter below the logo
- "Straight Bourbon Whiskey" subtitle
- Red divider line accent
- Mobile-first responsive — stacks to single column on phones

## Project Structure

```
whiskey-proof-calculator/
├── CLAUDE.md                          # This file
├── public/
│   ├── crowded-barrel-round.png       # Round CB logo (cream on transparent)
│   ├── crowded-barrel-logo.jpg        # CB text wordmark (unused, kept for reference)
│   ├── eleanor-19a.jpg                # Bottle photo (purple seal)
│   ├── eleanor-19b.jpg                # Bottle photo (gold seal)
│   ├── eleanor-wordmark.jpg           # Eleanor label art (unused, kept for reference)
│   └── eleanor-wordmark.png           # Processed Eleanor text (unused, kept for reference)
├── src/
│   └── app/
│       ├── layout.tsx                 # Root layout — Montserrat + UnifrakturMaguntia fonts, metadata
│       ├── page.tsx                   # Main page — header with CB logo, two-column calculator layout
│       ├── globals.css                # Global styles — CSS variables, Tailwind theme, slider styling
│       └── components/
│           ├── ProofCalculator.tsx     # Calculator card — bottle image, pour size, proof slider, results
│           └── WaterResult.tsx         # Result display — oz, tsp, mL conversions, drops helper
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── postcss.config.mjs
```

## Page Layout

### Header (top to bottom)

1. Red top bar: "ELEANOR BATCH 19 A/B RELEASE"
2. Crowded Barrel round logo (cream/white, `crowded-barrel-round.png`)
3. "Eleanor" in blackletter (UnifrakturMaguntia, `text-5xl md:text-7xl`)
4. "STRAIGHT BOURBON WHISKEY" subtitle
5. Red divider line
6. Instruction text: "Slide to your desired proof..."

### Calculator Grid

Two-column on desktop (side by side), stacked on mobile:
- Each column: bottle photo → batch name → seal label → proof badge → calculator card
- Calculator card: pour size buttons (segmented control) → proof slider → water result

### Footer

"Crowded Barrel Whiskey Co." + "Eleanor Batch 19 A/B Release"

## Component Specifications

### `ProofCalculator.tsx`

Props: `batchName`, `startingProof`, `bottleImage`, `accentColor` ("purple" | "gold")

State: `pourSize` (0.5, 1.0, 1.5), `desiredProof` (80 to startingProof, step 1)

Calculated: `waterToAdd`, `finalVolume`

Accent styles per batch: purple (19A) or gold (19B) for selected buttons, proof badges, headers.

### `WaterResult.tsx`

Props: `waterOz`, `finalVolumeOz`, `desiredProof`, `startingProof`

Displays: water in oz/tsp/mL, final volume, "just a few drops" helper, "no water needed" at barrel proof.

## Build & Deploy

```bash
npm install          # Install dependencies
npm run dev          # Local dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server locally
```

Vercel auto-deploys from `main` branch pushes.

## Assets in Project Root (not deployed)

- `Eleanor Batch 19A.jpg` — Source bottle photo (purple seal)
- `Eleanor Batch 19B.jpg` — Source bottle photo (gold seal)
- `Eleanor.jpg` — Eleanor label artwork
- `CB Text.jpg` — Crowded Barrel text wordmark
- `cb_1.png` — Crowded Barrel round logo source
- `Second Copy of Proofing Calculator.xlsx` — Original distillery proofing calculator (reference only)
