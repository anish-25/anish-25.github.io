/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background : '#3E3E3E',
        headerBg: 'rgba(80, 80, 80, 0.89)',
        buttonBg:'#0F6E83',
        },
    },
  },
  plugins: [],
}