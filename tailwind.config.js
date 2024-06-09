/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1300px"
        // => @media (min-width: 1300px) { ... }
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0fcfec",
          secondary: "#19d3ae",
          accent: "#3a4256",
          neutral: "#3d4451",
          "base-100": "#ffffff"
        }
      }
    ]
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")]
};
