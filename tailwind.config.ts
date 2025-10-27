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
        lightTheme: "#FFFFFF",
        lightHover: "#F3F4F6",
        textLight: "#1F2937",
        accentLight: "#2563EB",
        darkTheme: "#0B0B0F",
        darkHover: "#1F1F25",
        textDark: "#F3F4F6",
        accentDark: "#3B82F6",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
export default config;
