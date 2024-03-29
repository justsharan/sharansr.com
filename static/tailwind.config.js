/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../content/*.md', '../layouts/**/*.html'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        scheme: {
          css: {
            '--tw-prose-invert-body': theme('colors.text'),
            '--tw-prose-invert-links': theme('colors.primary'),
            '--tw-prose-invert-headings': theme('colors.offwhite'),
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
      'offwhite': '#d1d5db',
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

