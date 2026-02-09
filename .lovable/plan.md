

# LeeTech - Neon Orange Rebrand + Layout Restructure

## Overview
Replacing all copper/bronze tones with vibrant Neon Orange (#FF5500 / #FF6B00), enlarging and centering the logo, and moving the video player into the Hero section.

---

## Changes

### 1. Color System Update (`src/index.css`)
- Replace all copper HSL values with Neon Orange equivalents:
  - `--primary`: change from copper `30 60% 46%` to neon orange `18 100% 50%` (#FF5500)
  - `--accent`: same update
  - `--copper-start`: `18 100% 50%` (#FF5500)
  - `--copper-end`: `24 100% 53%` (#FF6B00)
  - `--border` and `--glass-border`: update to orange-tinted values (`18 60% 25%`)
  - `--ring`: update to match new orange

### 2. Header Logo (`src/components/Header.tsx`)
- Increase logo height from `h-10` to `h-14` (30% larger)
- Add more vertical padding (`py-4`) for breathing room

### 3. Hero Section Restructure (`src/components/HeroSection.tsx`)
- Reorder content to: Headline -> Sub-headline -> Video Player -> CTA Button
- Import and embed the video (`video-project.mp4`) in a 16:9 container with glowing orange border/shadow
- Remove the standalone `VideoSection` import from `Index.tsx`

### 4. Remove Standalone Video Section (`src/pages/Index.tsx`)
- Remove `VideoSection` import and usage since the video now lives in the Hero

### 5. Tailwind Config (`tailwind.config.ts`)
- Update `copper` color references to use the new orange HSL values

---

## Technical Details

### CSS Variable Changes (index.css)
| Variable | Old Value | New Value |
|----------|-----------|-----------|
| `--primary` | `30 60% 46%` | `18 100% 50%` |
| `--accent` | `30 60% 46%` | `18 100% 50%` |
| `--copper-start` | `30 60% 46%` | `18 100% 50%` |
| `--copper-end` | `36 100% 80%` | `24 100% 53%` |
| `--border` | `30 30% 25%` | `18 50% 25%` |
| `--glass-border` | `30 30% 25%` | `18 50% 25%` |
| `--ring` | `30 60% 46%` | `18 100% 50%` |

### Files Modified
- `src/index.css` - Color variables
- `tailwind.config.ts` - Copper color tokens
- `src/components/Header.tsx` - Logo size + padding
- `src/components/HeroSection.tsx` - Add video embed, reorder layout
- `src/pages/Index.tsx` - Remove VideoSection

### File Potentially Deleted
- `src/components/VideoSection.tsx` - No longer needed (video moves to Hero)

