import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bioblack : '#1a1a1a',
        biowhite : '#f5f5f5',
        biogray : '#e0e0e0',
      },
    },
  },
  plugins: [],
};
export default config;
