/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Paleta editorial 2026 ──
        graphite: {
          DEFAULT: "#101828", // principal (grafito oscuro)
          light: "#1B2436",
          soft: "#283248",
        },
        cream: {
          DEFAULT: "#F5F5F3", // apoyo (blanco cálido)
          dark: "#ECEBE7",
        },
        orange: {
          DEFAULT: "#E8732A", // secundario (naranja elegante)
          hover: "#C75F1E",
          soft: "#F0A172",
        },
        gold: {
          DEFAULT: "#D4AF37", // detalles (dorado suave)
          soft: "#E6CE7B",
        },
        line: {
          DEFAULT: "#E8E8E8", // bordes de cards en claro
          dark: "#2A3346", // bordes en secciones oscuras
        },

        // ── Alias legacy remapeados al nuevo sistema ──
        // (mantienen compatibilidad con clases existentes y adoptan la nueva estética)
        navy: {
          DEFAULT: "#F5F5F3", // sección base clara (crema)
          light: "#FFFFFF", // sección alterna clara (blanco)
        },
        slate: {
          card: "#ECEBE7", // chips / divisores en claro
        },
        brand: {
          blue: "#E8732A", // acentos → naranja
          "blue-hover": "#C75F1E",
          orange: "#E8732A",
          "orange-hover": "#C75F1E",
          green: "#22C55E", // WhatsApp (sin cambios)
        },
        text: {
          primary: "#101828", // texto sobre fondo claro
          secondary: "#5B6170", // texto secundario sobre claro
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
