import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1080px" } },
    extend: {
      colors: {
        canvas: "#EDEEF0",
        ink: { DEFAULT: "#1C1C22", soft: "#52525E" },
        lav: { DEFAULT: "#E7E4FF", ink: "#4B36C9" },
        peach: { DEFAULT: "#FFE6D6", ink: "#C0501F" },
        sky: { DEFAULT: "#DCEBFF", ink: "#13386B" },
        mint: { DEFAULT: "#D9F5E7", ink: "#176647" },
        butter: { DEFAULT: "#FFF3C9", ink: "#5E4B0A" },
        grape: { DEFAULT: "#6C5CE7", soft: "#D8D3FF" },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { tile: "24px", lg: "var(--radius)", md: "calc(var(--radius) - 2px)" },
      keyframes: { "pulse-dot": { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.35" } } },
      animation: { "pulse-dot": "pulse-dot 2s ease-in-out infinite" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
