/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      typography: {
        invert: {
          css: {
            '--tw-prose-links': '#fb923c',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
