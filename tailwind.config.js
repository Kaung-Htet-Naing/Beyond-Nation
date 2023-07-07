/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./core/**/*.js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BCBCBC",
        "secondary-gray": "#F5F5F5",
        "secondary-green": "#9BCB46",
        "primary-gray": "#D9D9D9",
        accent: "#D9D9D9",
        "primary-color": "#2D2D2D",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
  important: true,
}
