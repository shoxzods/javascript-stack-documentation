/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary:"red",
        myPortfolio:"green"
      },

      fontSize: {
        solo:"100px",
      },

      screens: {
        mobile:"640px"
      }
    },
  },
  plugins: [
    function({addUtilities , addComponents , addBase}) {
      addUtilities({
        ".fonts": {
            fontSize:"100px"
         }
      }),

      addComponents({
        ".myButton": {
            background:"gray",
            border:"1px solid silver",
            color:"red",
            padding:"15px"
          }
      }),

      addBase({
        "html": {
          fontSize:"400px",
          scrollbarWidth:"thin"
        }
      })
    }
  ],
}