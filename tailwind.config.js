/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "btn-navbar":
          "linear-gradient(176deg, rgba(255, 255, 255, 0.26) 25.06%, rgba(235, 169, 229, 0.25) 100%)",
        section1:
          "linear-gradient(180deg, #3E1AD2 18.35%, #7142C7 65.81%, #9152FB 100%);",
      },
    },
  },
  plugins: [],
};
