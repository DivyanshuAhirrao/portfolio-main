# Bug Fix & Change Log — ai-fixes/overall

> **Purpose:** Quick reference for every change made in this branch. If a fix causes a regression, use the commit hash to identify exactly what changed and revert it with `git revert <hash>` without undoing unrelated work.

---

## How to revert a single fix

```bash
git revert <commit-hash>
# Opens an editor for the revert message — save and close.
# Then push the revert commit normally.
```

To revert multiple related commits at once:
```bash
git revert <hash1> <hash2>
```

---

## Fix Index

| # | Commit | Area | Files changed |
|---|--------|------|---------------|
| 0 | `4020fcc` | Click trap | `EntranceAnimation.jsx` |
| 1 | `3d03459` | Accessibility | `Home.jsx`, `ProjectTile.jsx`, `NavAvatar.jsx`, `SocialLinks.jsx`, `Sidebar.jsx` |
| 2 | `d110239` | Accessibility | `Layout.jsx`, `Menu.jsx`, `Footer.jsx` |
| 3 | `dd6ad38` | Mobile layout | `HorizontalScrollSection.jsx` |
| 4 | `6dc79bc` | Click trap | `ParallexWrapper.jsx`, `EnhancedScrollAnimation.jsx` |
| 5 | `ffb29e7` | Dead code | `Form.jsx`, `RotatingTitle.jsx`, `ViewButton.jsx`, `Subscribe.jsx` |
| 6 | `144dc3c` | Performance | `Home.jsx`, `Projects.jsx`, `Contact.jsx`, `ScrollProgressBar.jsx` |
| 7 | `89d48a3` | Routing/deps | `vercel.json` (new), `package.json` |
| 8 | `2852fca` | Lint | `tailwind.config.js`, `ThemeContext.jsx`, `Subscribe.jsx` |

---

## Detailed change notes

---

### Fix 0 — Entrance overlay blocked clicks for 2–3 s
**Commit:** `4020fcc`  
**File:** `src/components/animation/entrance/EntranceAnimation.jsx`

**Problem:** After the entrance panel slid off-screen, a 2-second opacity fade played on the container. `pointer-events: none` was only applied in the `onComplete` of that fade — so the invisible overlay blocked all hero-section clicks (Hire Me, Download CV, nav links) for the full 2 seconds.

**Fix:** Moved `containerRef.current.style.pointerEvents = 'none'` to the `onComplete` of the `yPercent: -100` slide-up tween. Clicks pass through the instant the panel leaves the viewport; the fade continues visually but no longer blocks input.

**Revert risk:** Low. Revert restores the original 2–3 s click-dead window but breaks nothing else.

---

### Fix 1 — Vague image alt text and missing aria-labels
**Commit:** `3d03459`  
**Files:** `Home.jsx`, `ProjectTile.jsx`, `NavAvatar.jsx`, `SocialLinks.jsx`, `Sidebar.jsx`

**Problems fixed:**
- `alt="img"` / `alt="imgs"` on profile picture — meaningless to screen readers.
- `alt="thumnail+${key}"` on project images — typo, exposes internal key, not descriptive.
- `alt="Remy Sharp"` on the nav avatar — a copied MUI placeholder that was never updated.
- Social icon links (`<FaGithub />` etc.) had no `aria-label` — screen readers announced nothing.
- Hamburger button had no `aria-label`.

**Fix:**
- All profile images → `alt="Divyanshu Ahirrao"`.
- Project images → `alt="${title} project screenshot"`.
- Nav avatar → `alt="Divyanshu Ahirrao"`.
- Added `label` field to `socialData` array; `aria-label={link.label}` on each `<a>`.
- Added `aria-hidden="true"` to the icon components (decorative inside a labelled link).
- Hamburger → `aria-label="Open navigation menu"`.
- Removed dead `key` prop from `ProjectTile` destructuring (`key` is reserved in React, always `undefined` when accessed as a prop).
- Removed unused `eslint-disable react/prop-types` directive from `ProjectTile`.

**Revert risk:** Low. Visual output unchanged. Revert loses screen-reader labels only.

---

### Fix 2 — No semantic landmarks, unclickable nav/footer links, no skip link
**Commit:** `d110239`  
**Files:** `Layout.jsx`, `Menu.jsx`, `Footer.jsx`

**Problems fixed:**
- No `<main>` element — screen readers couldn't jump to page content.
- No skip link — keyboard users had to Tab through the entire Navbar on every load.
- `Menu.jsx` used `<li onClick>` — not reachable by Tab; no focus styles.
- `Footer.jsx` nav items were `<span>` elements — looked like links but clicking did nothing.
- Footer had an unescaped `'` apostrophe failing ESLint.

**Fix:**
- `Layout.jsx`: Added `<a href="#main-content">` skip link (sr-only, reveals on focus). Converted `<div className="pt-[11vh]">` to `<main id="main-content">`.
- `Menu.jsx`: Converted `<li onClick>` to `<a href="#id">` with smooth-scroll `onClick` for progressive enhancement. Added `focus-visible:ring-2` focus indicator. Mapped "Services" → `#horizontal-section`.
- `Footer.jsx`: Converted `<span>` items to `<a href>` with correct section IDs. Fixed apostrophe to `&apos;`.

**Revert risk:** Low for visual. The `<div>` → `<main>` swap is the most structural change; revert if any downstream CSS selects on the `main` tag unexpectedly. Menu href changes should not affect mouse users at all (onClick still handles smooth scroll).

---

### Fix 3 — Mobile horizontal scroll broken + invisible heading
**Commit:** `dd6ad38`  
**File:** `src/components/sections/HorizontalScrollSection.jsx`

**Problems fixed:**
- `if (window.innerWidth <= 678) { setItemWidth(948) }` — set card width to 948 px on a phone (wider than the screen), causing all cards to overflow off-screen.
- `<h2 className="... bg-clip-text text-transparent">` with no `bg-gradient-*` class — text was literally invisible (transparent colour on transparent background).

**Fix:**
- Mobile `itemWidth`: `948` → `320` (fits comfortably in a 375 px viewport with padding).
- Heading: removed `bg-clip-text text-transparent`; text colour falls through to the existing `text-black dark:text-white` classes.

**Revert risk:** Low. Reverting restores broken mobile layout and invisible heading. No other components depend on these values.

---

### Fix 4 — Decorative elements intercepting clicks
**Commit:** `6dc79bc`  
**Files:** `ParallexWrapper.jsx`, `EnhancedScrollAnimation.jsx`

**Problems fixed:**
- `#moving-element` in `ParallexWrapper.jsx`: `position: fixed`, `z-index: 10`, no `pointer-events: none`. The decorative pulsing dot floated over the entire page and could intercept clicks on whatever was beneath it.
- Three gradient blobs in `EnhancedScrollAnimation.jsx`: `position: fixed`, no z-index set, no `pointer-events: none`. Theoretically interactable; low risk but defensive fix needed.

**Fix:** Added `pointerEvents: 'none'` and `aria-hidden="true"` to all four elements.

**Revert risk:** Near-zero. These are purely decorative; the change only affects pointer event routing.

---

### Fix 5 — Dead code, console.log in production, broken hover class
**Commit:** `ffb29e7`  
**Files:** `Form.jsx`, `RotatingTitle.jsx`, `ViewButton.jsx`, `Subscribe.jsx`

**Problems fixed:**
- `Form.jsx` line 121: `console.log("Form submitted:", formData)` — leaked user-typed contact form data to DevTools in production.
- `RotatingTitle.jsx`: `color:" #888"` — leading space before `#` made this an invalid CSS value; the rotating job title text had no colour applied.
- `ViewButton.jsx`: `hover:outline-double` — not a Tailwind CSS utility class; hover state was silently broken on the "View Demo" button.
- `Subscribe.jsx`: `formJson.email;` — a lone expression statement with no effect (dead code from an incomplete implementation).

**Fix:**
- Removed the `console.log`.
- Fixed style typo: `color:" #888"` → `color: "#888"`.
- Replaced `hover:outline-double hover:border-purple-700` with `hover:ring-2 hover:ring-purple-700`.
- Removed the dead `formJson`/`formData` variables entirely.

**Revert risk:** Very low. Revert brings back the console log, the silent hover state, and the malformed colour value — no visual or functional regression otherwise.

---

### Fix 6 — Duplicate AOS.init() calls and unthrottled scroll state updates
**Commit:** `144dc3c`  
**Files:** `Home.jsx`, `Projects.jsx`, `Contact.jsx`, `ScrollProgressBar.jsx`

**Problems fixed:**
- `AOS.init()` was called in `Layout.jsx`, `Home.jsx`, `Projects.jsx`, and `Contact.jsx` — four times per page load. Each call re-queries the full DOM for `[data-aos]` elements.
- `ScrollProgressBar` called `setState` on every scroll event (up to 60+ times/s) with no throttle, scheduling a React re-render on every tick.

**Fix:**
- Removed `AOS` import and `useEffect` init from `Home.jsx`, `Projects.jsx`, `Contact.jsx`. `Layout.jsx` remains the single initialiser (it already had the most complete options: `duration`, `easing`, `once`, `mirror`).
- Wrapped the `ScrollProgressBar` scroll handler in a `requestAnimationFrame` gate: if a frame is already pending, the handler returns immediately; the frame callback updates state and clears the ref. Added `cancelAnimationFrame` cleanup on unmount.

**Revert risk:** Low for AOS — data-aos attributes on `ProjectTile` and `Contact` still work because `Layout.jsx` init runs first. If you see AOS animations stop working after reverting Layout separately, re-add one `AOS.init()` call anywhere that mounts before the animated sections.

**Dependency note:** Fix 6 (`Home.jsx` changes) and Fix 1 (`Home.jsx` changes) touch the same file. If reverting Fix 1, the AOS removal in Fix 6 is unaffected (different lines). If reverting both, revert in reverse order (Fix 6 first, then Fix 1).

---

### Fix 7 — No SPA fallback config; dead react-router-dom dependency
**Commit:** `89d48a3`  
**Files:** `vercel.json` (new), `package.json`

**Problems fixed:**
- No `vercel.json` in the repo — SPA fallback was relying on Vercel's implicit detection. If the project is ever redeployed or cloned to a different host (Netlify, Apache, Nginx) it would serve a blank page for any URL other than `/`.
- `react-router-dom` v7.14.1 was listed in `package.json` and installed in `node_modules` but was never imported anywhere in the codebase (the site uses anchor/hash navigation).

**Fix:**
- Added `vercel.json` with a single rewrite rule: all paths → `/index.html`.
- Removed `react-router-dom` from `dependencies` in `package.json`.

**Revert risk:** Very low. Reverting `vercel.json` re-exposes the implicit-detection dependency (currently fine on Vercel, risk only if host changes). Reverting `package.json` re-adds the unused package.

---

### Fix 8 — Pre-existing lint errors (tailwind.config.js, ThemeContext.jsx, Subscribe.jsx)
**Commit:** `2852fca`  
**Files:** `tailwind.config.js`, `src/components/context/ThemeContext.jsx`, `src/components/navbar/Subscribe.jsx`

**Problems fixed:**
- `tailwind.config.js`: `require('flowbite/plugin')` used CommonJS `require()` in a file ESLint treated as ESM (`"type": "module"` in package.json). ESLint flagged `require` as undefined.
- `ThemeContext.jsx`: File exports both a component (`ThemeProvider`) and a hook (`useTheme`) from the same file. The `react-refresh/only-export-components` rule warned this breaks HMR fast-refresh.
- `Subscribe.jsx`: Removing the `formJson.email` dead statement in Fix 5 left `formData` also assigned but unused.

**Fix:**
- `tailwind.config.js`: Added `/* global require */` at the top (tells ESLint `require` is a known global in this file; it is, because Tailwind's config loader processes it in a CJS context regardless of project type).
- `ThemeContext.jsx`: Added `// eslint-disable-next-line react-refresh/only-export-components` directly above the `useTheme` export. The co-location is intentional.
- `Subscribe.jsx`: Removed now-unused `formData` variable from the submit handler.

**Revert risk:** Near-zero. These are lint-only changes; no runtime behaviour changed.

---

## Dependency map between fixes

The table below shows which fixes touch the same files — useful when selectively reverting.

| File | Fixes that touch it |
|------|-------------------|
| `Home.jsx` | Fix 1 (alt text), Fix 6 (AOS removal) |
| `ProjectTile.jsx` | Fix 1 (alt text, dead key prop) — also adds `loading="lazy"` |
| `SocialLinks.jsx` | Fix 1 (aria-labels) |
| `Subscribe.jsx` | Fix 5 (dead statement), Fix 8 (unused var follow-up) |
| `HorizontalScrollSection.jsx` | Fix 3 only |
| `Layout.jsx` | Fix 2 only |
| `EnhancedScrollAnimation.jsx` | Fix 4 only |

Fixes 1 and 6 both modify `Home.jsx` but on different, non-overlapping lines. Reverting one does not conflict with the other.
