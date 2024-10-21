import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFAD60",
        secondary: "#257180",
        accent: "#CB6040",
        light: "#F2E5BF",
        dark: "#131D2B",
        success: "#B7E5B4",
        info: "#79B8D1",
        danger: "#FF8A8A",
        warning: "#FFFC9B",
      },
      keyframes: {
        bounce_slow: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            AnimationTimeline: "linear",
          },
          "50%": { transform: "translateY(5%)", AnimationTimeline: "linear" },
        },
      },
    },
    animation: {
      "bounce-slow": "bounce_slow 5s infinite",
    },
  },
  rippleui: {
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#FFAD60",
          secondary: "#257180",
          accent: "#CB6040",
          light: "#F2E5BF",
          dark: "#131D2B",
          success: "#B7E5B4",
          info: "#79B8D1",
          danger: "#FF8A8A",
          warning: "#FFFC9B",
        },
      },
      {
        themeName: "dark",
        colorScheme: "dark",
        colors: {
          primary: "#FFAD60",
          secondary: "#257180",
          accent: "#CB6040",
          light: "#F2E5BF",
          dark: "#131D2B",
          success: "#B7E5B4",
          info: "#79B8D1",
          danger: "#FF8A8A",
          warning: "#FFFC9B",
        },
      },
    ],
  },
  plugins: [
    require("rippleui"),
    plugin(function ({
      addBase,
      theme,
    }: {
      addBase: (base: any) => void;
      theme: (path: string) => any;
    }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
        },
        h4: {
          fontSize: theme("fontSize.md"),
          fontWeight: theme("fontWeight.bold")
        }
      });
    }),
  ],
};
export default config;
