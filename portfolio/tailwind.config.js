// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            secondary: '#f5741c',
            darkBg: '#131424',
        },

      backgroundImage: {
        "gradient-cover":
            "linear-gradient(90.21deg, rgba(170,54,124,0.5)-5.91%, rgba(74,47189,0.5) 111.58%)",
      }
    },
  },
  plugins: [],
}
