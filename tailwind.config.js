/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1300px',
        // => @media (min-width: 1300px) { ... }
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0fcfec",
          "secondary": "#19d3ae",
          "accent": "#3a4256",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

