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
        sans: ['Cardo', 'system-ui', 'serif'],
        heading: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#ffffff",
        foreground: "#2B2B2B",
        navy: "#101585",
        primary: {
          DEFAULT: "#007BFF",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#101585",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#007BFF",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#ffffff",
          foreground: "#2B2B2B",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #ffffff 0%, #007BFF 100%)',
        'gradient-hero': 'linear-gradient(135deg, #007BFF 0%, #2B2B2B 100%)',
        'gradient-electric': 'linear-gradient(135deg, #007BFF 0%, #2B2B2B 100%)',
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;