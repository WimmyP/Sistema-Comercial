/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts,css}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Playfair Display"]
      },
      colors: {
        primary: "#FFE6A7",
      }
    },
  },
  plugins: [],
}

