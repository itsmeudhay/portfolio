/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8F70",
        secondary: "#FF8F70",
        textPrimary: "#ffffff",
        textSecondary: "#ffffff",
        accent: "#FFAC59",
        hoverSecondary: "#FFC659",
        hoverPrimary: "#FFC659",
        divider: "rgba(238, 238, 238, 0.10)",
        icons: "#393E46",
        overlay: "rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "390px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};