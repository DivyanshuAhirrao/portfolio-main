# Portfolio Project — Conventions

## Stack
- React 19 + Vite + Tailwind CSS, JS / JSX, ESLint configured.

## Git rules (strict)
- NEVER commit directly to main. Always work on a feature branch.
- Branch naming: fix/<short-desc> or feat/<short-desc>
- Commit format: conventional commits (fix:, feat:, refactor:, chore:). One logical change per commit.
- After any code change, run `npm run build` and `npm run lint` and confirm both pass before committing.
- When work is complete, open a PR against main with a structured description (Summary, Changes grouped by category, Testing checklist). DO NOT merge — leave it for me to review.

## Code rules
- Preserve all existing content, copy, links, images, and personal info. Only change structure, styling, and behavior.
- Keep the site fully responsive and accessible (keyboard nav, focus states, aria labels, AA contrast).
- Don't add heavy dependencies without justifying bundle-size impact.
