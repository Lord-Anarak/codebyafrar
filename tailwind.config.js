/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9DCDF",
      },
      fontFamily: {
        kenyanCoffee: ["var(--font-kenyanCoffee)"],
      },
      fontSize: {
        bigTitle: "max(9em, 19vw)",
      },
    },
  },
  plugins: [],
};
