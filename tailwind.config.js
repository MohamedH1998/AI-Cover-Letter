/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',

    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-metal': '#050505',
        'ice-cold-stare': '#B6CCFE',
        'smart-white': '#F5F3EC',
        'greek-blue': '#06A2BF',
        'decore-splash': '#00819D'
      },
      fontFamily: {
        primary: 'Sora',
        secondary: 'Paytone One'
      },
      dropShadow: {
        'mobile-hero': ' 0px 23px 15px rgba(0, 0, 0, 0.8)',
        'vibe': ['rgba(86, 87, 89, 0.9) 0px 1px 3px', 'rgba(86, 87, 89, 0.9) 0px 1px 2px'],
      }
      
    }
  },
  plugins: [],
}
