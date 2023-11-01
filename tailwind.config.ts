import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'royalblue': '#001327',
        'skyblue': '#0666E5',
        'lightgrey': '#F2F7FB',
        'spacegrey': '#455F7C'
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],

      }
    },
  },
  plugins: [],
}
export default config
