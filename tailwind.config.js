/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        small: '15px'
      },
      colors: {
        'primary': '#19d5be',
        'secondary': '#F7F7F7',
        'dark': '#20252d',
        'muted': '#a5a8aa'
      },
      borderRadius: {
        DEFAULT: '5px'
      },
      fontFamily: {
        nitti: 'Nitti, sans-serif',
        roboto: 'Roboto, Nitti, sans-serif'
      },
      boxShadow: {
        'custom': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'custom1': '0 3px 50px 0 rgba(0, 0, 0, 0.08)',
        'custom3': '0 3px 20px 0 rgba(0, 0, 0, 0.16)',
        'custom4': '0 3px 50px 0 rgba(0, 0, 0, 0.1)',
        'custom5': '0 3px 20px 0 rgba(0, 0, 0, 0.06)'
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fill, minmax(100, 1fr))'
      }
    },
  },
  plugins: [],
}