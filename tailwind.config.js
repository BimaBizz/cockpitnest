/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  safelist: [
    "lg:grid-cols-1",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "w-auto",
    "w-1/2",
    "w-1/3",
    "w-1/4",
    "w-2/3",
    "w-3/4",
  ],
};
