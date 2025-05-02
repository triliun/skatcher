/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontSize: {
        xss: ["0.5rem", { lineHeight: "0.75rem" }],
      },
      colors: {
        charcoal: "#252525",
        amberDark: "#A85C01",
        gray: {
          350: "#E2E2E2",
          450: "#8A8A8A",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // default font
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
