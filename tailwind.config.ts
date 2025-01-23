import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse-slow": "spin-reverse 12s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgb(34, 197, 94)",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "rgb(16, 185, 129)",
          foreground: "#000000",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config