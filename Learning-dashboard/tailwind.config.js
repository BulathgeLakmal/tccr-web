/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT ({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': '#3E065F',
        'white':'#FFFFFF',
        'purple':'#f8f4ff',
      },
      fontFamily:{
        'filson':"Filson Soft W03 Regular"
      }
    },
  },
  plugins: [],
})

