/** @type {import('tailwindcss').Config} */
export default {
content: [""],
  theme: {
    extend: {
      keyframes: {
         changeColor: {
            from:{
                color:"red"
            },

            to: {
              color:"green"
            }
         }
      },

      animation: {
        changeColor: "changeColor 1s infinite ease-in",
      }
    },
  },
  plugins: [],
}