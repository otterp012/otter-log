module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      pink: "#fca5a5",
      deepPink: "#f87171",
      blue: "#3b82f6",
      deepBlue: "#1d4ed8",
      lightGray: "#d1d5db",
      deepGray: "#64748b",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
