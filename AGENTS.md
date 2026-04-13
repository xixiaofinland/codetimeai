# Agent Guidelines for codetimeai

# Agent Guidelines for codetimeai

Chinese-language podcast site about programming and AI, hosted on GitHub Pages.

Tech: Astro 4, Tailwind CSS 3, TypeScript
Build: `npm run build`
Dev: `npm run dev`
Check: `npm run check`

## Architecture

- `src/content/episodes/` — one markdown file per episode; schema in `src/content/config.ts`
- `src/layouts/Base.astro` — root HTML shell with Header/Footer
- `src/pages/` — home, /episodes, /episodes/[slug], /about, /feed.xml (RSS)
- `public/CNAME` — sets custom domain (`codetimeai.com`)
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to main

## Adding an episode

Create `src/content/episodes/<slug>.md` with frontmatter:

```yaml
title: "第N期：..."
date: YYYY-MM-DD
description: "..."
audioUrl: "https://pinecast.com/listen/..."
duration: "HH:MM"
guest: "嘉宾姓名"
episodeNumber: N
isLegacy: false # true = migrated from Himalaya
tags: ["AI", "编程"]
```

## Conventions

- UI text is Chinese (zh-CN)
- Orange (`orange-500`) is the primary accent colour
- No client-side JS — fully static output

## Validation

`npm run build` must pass before committing.
