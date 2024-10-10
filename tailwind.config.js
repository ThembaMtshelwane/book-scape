/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        1111: "repeat(auto-fit, minmax(17.8rem,1fr))",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
        secondary: ["Merriweather", "serif"],
      },
      colors: {
        backgroundColour: "var(--primary-colour)",
        textColour: "var(--secondary-colour)",
        blueGray: "var(--tertiary-colour)",
        yellowGreen: "var(--accent-colour)",
      },
    },
  },
  plugins: [],
};
