
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        border: "#333333",
        input: "#333333",
        ring: "#333333",
        background: "#ffffff",
        foreground: "#221F26",
        primary: {
          DEFAULT: "#221F26",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#555555",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F1F1F1",
          foreground: "#221F26",
        },
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(to top, rgba(0, 0, 0, 0.03) 0%, #FFFFFF 100%)',
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pingDot: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        pingDot: "pingDot 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
