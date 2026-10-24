import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          charcoal: "#151515",
          dark: "#1A1A1A",
          red: "#E01823",
          redHover: "#C4141E",
          redSubtle: "rgba(224, 24, 35, 0.12)",
          white: "#FFFFFF",
          light: "#F8F9FA",
          border: "#E5E7EB",
          borderDark: "#262626",
          borderDarker: "#1F1F1F",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        display: [
          "Manrope",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.18em",
      },
      boxShadow: {
        'brand-glow': '0 0 25px rgba(224, 24, 35, 0.35)',
        'subtle-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
