module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      light: {
        bg: "#d1d5db",
        text: "#374151",
        card: "#f3f4f6",
      },
      dark: {
        bg: "#1f2937",
        text: "#e2e8f0",
        card: "#334155",
      },
      black: "#000",
      white: "#fff",
      pink: "#fca5a5",
      deepPink: "#f87171",
      blue: "#3b82f6",
      deepBlue: "#1d4ed8",
      lightGray: "#d1d5db",
      gray: "#f3f4f6",
      deepGray: "#64748b",
      base: "#1e293b",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
