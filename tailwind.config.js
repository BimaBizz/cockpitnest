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
    themes: ["light", "dark", {
      store: {
        "primary": "#000000",
        "secondary": "#007aa8",
        "accent": "#b9a300",
        "neutral": "#272419",
        "base-100": "#fcfcfc",
        "info": "#0098ff",
        "success": "#b8e200",
        "warning": "#ee9600",   
        "error": "#ff7a7b",
        },
      },],
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
