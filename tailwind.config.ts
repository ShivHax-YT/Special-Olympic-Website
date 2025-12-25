import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F766E",
          light: "#14B8A6",
          dark: "#0C4A43",
        },
        accent: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
        },
        surface: "#0B1721",
      },
      boxShadow: {
        card: "0 10px 40px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
