/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
        },
        center: true,
      },

      fontSize: {
        xxs: "0.65rem",
        xxxs: "0.55rem",
      },

      colors: {
        dark: "#101010",
        border: "#db970f",
        borderLight: "#ffcc66",
        borderDark: "#855f24",
        bg: "#4b4f74",
        body: "#610008",
      },

      fontFamily: {
        body: ["VT323"],
      },

      gridTemplateColumns: {
        auto: "1fr auto",
      },
    },
    screens: {
      xs: "500px",
      sm: "650px",
      md: "800px",
      mdx: "1000px",
      lg: "1200px",
      xl: "1400px",
    },

    container: {
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1400px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
