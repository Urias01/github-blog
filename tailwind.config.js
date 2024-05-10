/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#3294F8",
        baseTitle: "#E7EDF4",
        baseSubtitle: "#C4D4E3",
        baseText: "#AFC2D4",
        baseSpan: "#7B96B2",
        baseLabel: "#3A536B",
        baseBorder: "#1C2F41",
        basePost: "#112131",
        baseProfile: "#0B1B2B",
        baseBackground: "#071422",
        baseInput: "#040F1A"
      },
      fontFamily: {
        nunito: 'Nunito'
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}