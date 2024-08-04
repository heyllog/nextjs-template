import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: 'rgb(256 256 256 / <alpha-value>)',
      black: 'rgb(0 0 0 / <alpha-value>)',
      transparent: 'transparent',

      // https://tailwindcss.com/docs/customizing-colors#using-css-variables
      // css variables in src/app/styles/global.css
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      text: 'rgb(var(--color-text) / <alpha-value>)',
      error: 'rgb(var(--color-error) / <alpha-value>)',
      success: 'rgb(var(--color-success) / <alpha-value>)',
    },
    extend: {
      height: {
        // check public/scripts/calculate-height.js
        screen: 'calc(var(--vh) * 100)',
      },
    },
  },
  plugins: [],
}

export default config
