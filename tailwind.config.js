/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        carDoctorTheme: {
          primary: "#1C1C22",
          secondary: "#00FF00",
          accent: "#FFFFFF",
          neutral: "#E0E0E0",
          "base-100": "#F5F5F5", // Updated background color
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
