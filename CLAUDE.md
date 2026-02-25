# Whiskey Proof Calculator — Crowded Barrel Eleanor A/B Release

## Project Overview

A public-facing single-page web app for Crowded Barrel Whiskey Co's YouTube channel audience. Visitors use it during an A/B tasting event to calculate how much water to add to their pour of Eleanor Straight Bourbon to reach their preferred proof.

**GitHub:** https://github.com/Brandondaymdr/whiskey-proof-calculator (currently empty)
**Vercel:** https://vercel.com/brandon-days-projects-1446c92e/whiskey-proof-calculator (connected to GitHub, no deployment yet)
**Live URL:** Will be available at the Vercel-assigned domain after first push to `main`

## The Two Whiskeys

| Batch      | Starting Proof | Seal Color |
| ---------- | -------------- | ---------- |
| Eleanor 19A | 114.8          | Purple     |
| Eleanor 19B | 116.4          | Gold/Green |

## Core Formula

From the distillery's proofing spreadsheet (`Second Copy of Proofing Calculator.xlsx`):

```
Water to Add (oz) = (PourSize × (StartProof - DesiredProof)) / DesiredProof
```

This is the industry-standard dilution formula. Proof is directly proportional to alcohol concentration, so the ratio of proofs equals the ratio of volumes.

### Measurement Conversions (for display)

Since pour sizes are small (0.5–1.5 oz), water amounts will be fractions of an ounce. Display results in multiple units:

- **Ounces** (to 2 decimal places)
- **Teaspoons** (1 tsp = 0.1667 oz)
- **Milliliters** (1 oz = 29.5735 mL)
- **Drops** (1 drop ≈ 0.0017 oz / 0.05 mL) — for very small amounts

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploy from GitHub `main` branch)
- **No backend/database needed** — all calculations are client-side

## Project Structure

```
whiskey-proof-calculator/
├── CLAUDE.md                          # This file
├── public/
│   ├── eleanor-19a.jpg                # Bottle photo (purple seal)
│   └── eleanor-19b.jpg                # Bottle photo (gold seal)
├── src/
│   └── app/
│       ├── layout.tsx                 # Root layout with fonts, metadata
│       ├── page.tsx                   # Main page — two-column calculator layout
│       ├── globals.css                # Global styles + Tailwind
│       └── components/
│           ├── ProofCalculator.tsx     # Single calculator card component
│           └── WaterResult.tsx         # Result display with unit conversions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Page Layout & Design

### Visual Design

- **Dark theme** — dark charcoal/black background to complement the whiskey aesthetic
- **Warm amber/gold accent colors** matching bourbon tones
- **Clean typography** — modern, readable sans-serif for the calculator; can use a decorative serif for "Eleanor" header
- **Mobile-first responsive** — stacks to single column on phones

### Layout (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│                  CROWDED BARREL WHISKEY CO.                      │
│              Eleanor Straight Bourbon Whiskey                    │
│                  Proof Calculator                                │
├───────────────────────────┬─────────────────────────────────────┤
│                           │                                     │
│     [Bottle 19A Photo]    │      [Bottle 19B Photo]             │
│                           │                                     │
│    ── Batch 19A ──        │     ── Batch 19B ──                 │
│                           │                                     │
│  Starting Proof: 114.8    │   Starting Proof: 116.4             │
│  (read-only, pre-filled)  │   (read-only, pre-filled)           │
│                           │                                     │
│  Pour Size: [▼ dropdown]  │   Pour Size: [▼ dropdown]           │
│   ½ oz | 1 oz | 1½ oz    │    ½ oz | 1 oz | 1½ oz             │
│                           │                                     │
│  Desired Proof:           │   Desired Proof:                    │
│  [====●=========] 100     │   [====●=========] 100              │
│  (slider: 80 → max)       │   (slider: 80 → max)               │
│                           │                                     │
│  ┌─────────────────────┐  │   ┌─────────────────────────────┐   │
│  │ ADD: 0.15 oz water  │  │   │ ADD: 0.16 oz water          │   │
│  │ (≈ ⅞ tsp)           │  │   │ (≈ 1 tsp)                   │   │
│  │ Final volume: 1.15oz│  │   │ Final volume: 1.16 oz       │   │
│  └─────────────────────┘  │   └─────────────────────────────┘   │
├───────────────────────────┴─────────────────────────────────────┤
│            Crowded Barrel Whiskey Co. — YouTube link             │
└─────────────────────────────────────────────────────────────────┘
```

### Layout (Mobile)

Same content but stacked vertically: Header → 19A bottle + calc → 19B bottle + calc → Footer.

## Component Specifications

### `ProofCalculator.tsx`

Props:
- `batchName: string` — e.g. "Batch 19A"
- `startingProof: number` — e.g. 114.8
- `bottleImage: string` — path to bottle JPG
- `accentColor: string` — "purple" for 19A, "gold" for 19B

State:
- `pourSize: number` — selected from dropdown (0.5, 1.0, 1.5)
- `desiredProof: number` — from slider (range: 80 to startingProof, step 0.1)

Calculated:
- `waterToAdd = (pourSize * (startingProof - desiredProof)) / desiredProof`
- `finalVolume = pourSize + waterToAdd`

### `WaterResult.tsx`

Props:
- `waterOz: number`
- `finalVolumeOz: number`

Displays:
- Water to add in oz (2 decimal places)
- Water to add in tsp (1 tsp = 0.1667 oz)
- Water to add in mL (1 oz = 29.5735 mL)
- Final total volume in oz
- If water amount < 0.05 oz, show "just a few drops" helper text
- If desired proof equals starting proof, show "No water needed — enjoy it at barrel proof!"

### Validation Rules

- Desired proof must be > 0 and < startingProof
- Desired proof should have a sensible minimum (80 proof / 40% ABV is standard minimum)
- Pour size is constrained to dropdown options only
- Starting proof is read-only (cannot be edited by user)

## Build & Deploy Commands

```bash
npm install          # Install dependencies
npm run dev          # Local dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server locally
```

Vercel auto-deploys from `main` branch pushes.

## Git / GitHub Setup

The GitHub repo is currently empty. First deployment steps:

```bash
# 1. Initialize git in the project directory
git init
git remote add origin https://github.com/Brandondaymdr/whiskey-proof-calculator.git

# 2. After scaffolding the Next.js app and building components:
git add .
git commit -m "Initial commit: Eleanor proof calculator"
git branch -M main
git push -u origin main
# Vercel will auto-deploy from main branch
```

- **Repo:** https://github.com/Brandondaymdr/whiskey-proof-calculator
- **Vercel project:** https://vercel.com/brandon-days-projects-1446c92e/whiskey-proof-calculator
- **Branch:** `main` (auto-deploys to Vercel on push)
- Copy bottle images to `public/` directory during setup (rename to `eleanor-19a.jpg` and `eleanor-19b.jpg`)

## Important Notes

- This is a **consumer-facing** tool — keep the UI dead simple. No jargon.
- The slider for desired proof is the main interaction — make it large and touch-friendly
- Results should update **instantly** as the slider moves (no submit button)
- Pour size buttons should look like segmented controls (not a standard dropdown) for easy tapping
- Add a brief one-liner explanation: "Slide to your desired proof and we'll tell you how much water to add"
- The Excel file (`Second Copy of Proofing Calculator.xlsx`) is the source of truth for the formula — do not modify it
- Bottle images are high-resolution JPGs — optimize them for web (Next.js Image component handles this)

## Assets

- `Eleanor Batch 19A.jpg` — Bottle photo with purple Crowded Barrel seal
- `Eleanor Batch 19B.jpg` — Bottle photo with gold/green Crowded Barrel seal
- `Second Copy of Proofing Calculator.xlsx` — Original distillery proofing calculator (reference only)
