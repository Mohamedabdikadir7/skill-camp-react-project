// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif'],
      },
    },
    colors: {
      'blue-500': '#007BFF',
      'blue-700': '#0056b3',
      'green-500': '#28A745',
      'green-700': '#218838',
      'dark-gray': '#343A40',
      'gray-800': '#333333',
      // 'white': '#FFFFFF',
      
    },
  },
  plugins: [],
}
