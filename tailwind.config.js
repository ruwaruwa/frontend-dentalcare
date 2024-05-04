/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        den:'#009046',
        blue:'#3E4194'
      }
    },
  },
  plugins: [],
}

