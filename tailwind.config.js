/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // 👈 add this line

  // Optional DaisyUI configuration (themes, dark mode, etc.)
  daisyui: {
    themes: ["light", "dark", "cupcake", "emerald", "synthwave", "corporate"],
  },
}
