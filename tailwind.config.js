/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'sm': '600px',
        'md': '900px',
        'lg': '1280px',
        'xl': '1920px',
        'xsm':'370px'
      },
    },
  },
  plugins: [],
}
