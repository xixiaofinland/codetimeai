import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://codetimeai.com',
  integrations: [tailwind()],
  vite: {
    server: {
      watch: {
        ignored: ['**/.direnv/**'],
      },
    },
  },
})
