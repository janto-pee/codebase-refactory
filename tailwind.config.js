/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101820',
        secondary: '#E0DDAA',
        text: '#e5e7eb',
        secondary2: '#F87474',
        slide2bg : '#FBFCFF'
      }
    },
  },
  plugins: [],
}
