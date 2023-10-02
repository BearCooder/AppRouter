import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFFDFA",
      yellow: "#F0A500",
      grey: "#e0e0e0",
      beige: "#E6D5B8",
      mediumGrey: "#a8a8a8",
      darkgrey: "#7d7d7d",
      charcoal: "#333333",
      primary: "#5c90d2",
      secondary: "#2c689c",
      tertiary: "#212a37",
      danger: "#b7433f",
      success: "#559554",
      warning: "#e8db05",
      default: "#ececec",
    },
  },
  plugins: [],
};
export default config;
