import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        // Placeholder palette, tuned to read like a modern private-tour site.
        // Real visual identity pass happens once the brand is locked.
        //
        // `sand`  - near-white papers and light section bands
        // `dune`  - neutral charcoal for text and dark panels
        // `accent`- teal, the primary brand colour (buttons, links)
        // `gold`  - warm amber, for ratings-style highlights and small labels
        sand: {
          50: "#fbfbfa",
          100: "#f4f4f2",
          200: "#e7e7e3",
          300: "#d4d4ce",
          400: "#b0b0a7",
          500: "#8a8a80",
          600: "#6b6b62",
          700: "#52524b",
          800: "#3a3a35",
          900: "#26261f",
        },
        dune: {
          50: "#f6f6f5",
          100: "#e8e8e6",
          200: "#d0d0cc",
          300: "#a8a8a2",
          400: "#7c7c76",
          500: "#5b5b55",
          600: "#454541",
          700: "#343430",
          800: "#232320",
          900: "#161613",
        },
        accent: {
          50: "#effbf9",
          100: "#d7f4ef",
          200: "#b0e8e0",
          300: "#7dd6cc",
          400: "#46bcb1",
          500: "#26a094",
          600: "#1a8078",
          700: "#186661",
          800: "#17514e",
          900: "#164441",
        },
        gold: {
          50: "#fdf7e9",
          100: "#f9ecc7",
          200: "#f2d98d",
          300: "#eac257",
          400: "#e0a92f",
          500: "#c78d1f",
          600: "#a06d1a",
          700: "#7c531a",
          800: "#66431b",
          900: "#57391b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
