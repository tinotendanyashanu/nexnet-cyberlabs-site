import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

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
          slate: "#1F2937",
          "teal-light": "#33C9BC",
          "teal-dark": "#008F84"
        }
      },
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(0, 179, 164, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 179, 164, 0.4)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-cyber": "linear-gradient(135deg, #0B1220 0%, #1F2937 50%, #0B1220 100%)",
        "gradient-teal": "linear-gradient(135deg, #008F84 0%, #00B3A4 50%, #33C9BC 100%)",
        "noise": "url('/images/noise.png')"
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 179, 164, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 179, 164, 0.5)" }
        }
      }
    }
  },
  plugins: [
    typography,
    plugin(function({ addUtilities, addComponents }) {
      addUtilities({
        ".glass": {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        },
        ".glass-strong": {
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.15)"
        },
        ".noise-overlay": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
            opacity: "0.05",
            pointerEvents: "none"
          }
        },
        ".glow-ring": {
          "&:hover": {
            boxShadow: "0 0 20px rgba(0, 179, 164, 0.4), inset 0 0 20px rgba(0, 179, 164, 0.1)"
          }
        }
      });

      addComponents({
        ".section-wrapper": {
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "5rem",
          paddingBottom: "5rem"
        },
        ".gradient-border": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            borderRadius: "inherit",
            padding: "1px",
            background: "linear-gradient(135deg, #00B3A4, #0B1220)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude"
          }
        }
      });
    })
  ]
};
export default config;

