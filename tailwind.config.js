/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
       center: true,
      //  screens:{
      //   lg:"1440px",
      //   xl:"1440px",
      //   "2xl":"1440px",
      //  }
      }
    },
  },
  plugins: [],
}