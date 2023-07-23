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
        projectHeader:
          "radial-gradient(165.95% 184.69% at 6.15% -14.24%, rgba(81, 176, 217, 0.60) 0%, rgba(60, 36, 136, 0.72) 56.77%);",
        projectHeaderBack:
          "linear-gradient(315deg, rgba(114, 26, 98, 0.80) 0%, rgba(41, 34, 86, 0.80) 56.77%);",
      },
      backgroundColor: {
        bgDefault: "#1E1F43",
      },
    },
  },
  plugins: [],
};
