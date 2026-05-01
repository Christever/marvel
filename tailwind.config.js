/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
       red: {
        marvel: "#ec1424"
       },
       black: {
        marvel: "#202020"
       }
      }
    },
  },
  plugins: [],
}

