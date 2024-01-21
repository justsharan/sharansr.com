/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../content/*.md', '../layouts/**/*.html'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        scheme: {
          css: {
            '--tw-prose-invert-body': theme('colors.text'),
            '--tw-prose-invert-links': theme('colors.primary')
          }
        }
      })
    },   
    colors: {
      'text': '#f1f2ec',
      'background': '#0b0b08',
      'primary': '#6ee7b7',
      'secondary': '#77a08a',
      'accent': '#789b9f',
     },     
  },
  plugins: [require("@tailwindcss/typography")],
}

