/** @type {import('tailwindcss').Config} */
module.exports = {
  
 
plugins: [
    require('flowbite/plugin')
],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],  theme: {
    extend: {},
  },
}
