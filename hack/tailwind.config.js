/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#0e141b',
        'background': '#e7f4fe',
        'primary': '#055a85',
        'secondary': '#a792c8',
        'accent': '#9d57a8',
       },       
    },
  },
  plugins: [],
};
