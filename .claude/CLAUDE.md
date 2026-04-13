CodeTime AI — Chinese-language podcast site about programming and AI.

Tech: Astro 4, Tailwind CSS 3, TypeScript
Build: `npm run build`
Dev: `npm run dev`
Check: `npm run check`

## Architecture

- `src/content/episodes/` — one markdown file per episode (frontmatter schema in `src/content/config.ts`)
- `src/layouts/Base.astro` — root HTML shell with Header/Footer
- `src/pages/` — index, episodes/index, episodes/[slug], about, feed.xml
- `public/CNAME` — sets custom domain for GitHub Pages
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to main

## Episodes

Each episode is a markdown file with frontmatter:

- `isLegacy: true` = migrated from Himalaya; `false` = new Pinecast episode
- `audioUrl` = direct link to MP3 on Pinecast
- Slug becomes the URL path: `ep001-pilot` → `/episodes/ep001-pilot`

## Conventions

- UI text is Chinese (zh-CN)
- Orange (`orange-500`) is the primary accent color
- No client-side JS — fully static

## Validation

`npm run build` must pass before committing.
