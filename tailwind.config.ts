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
        darkTheme: "#0B0B0F",
        darkHover: "#1F1F25",
        textDark: "#F3F4F6",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // 👈 default sans-serif font
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};

export default config;
