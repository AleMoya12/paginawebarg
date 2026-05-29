/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0F1E",
          light: "#111827",
        },
        slate: {
          card: "#1E293B",
        },
        brand: {
          blue: "#3B82F6",
          "blue-hover": "#60A5FA",
          orange: "#F97316",
          "orange-hover": "#EA580C",
          green: "#22C55E",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
