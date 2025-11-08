import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1220",
          teal: "#00B3A4",
          slate: "#1F2937"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.12)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};
export default config;
