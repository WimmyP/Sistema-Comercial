/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#303F33',
        'secondary': '#4A5F4E',
        'background': '#E1E1E1'
      }
    }
  },
  plugins: []
}

