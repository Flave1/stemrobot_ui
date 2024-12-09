import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveGradient: {
          "0%": { backgroundPosition: "200% 0%" },
          "50%": { backgroundPosition: "50% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
      },
      animation: {
        "moving-gradient": "moveGradient 10s ease infinite",
      },
      fontFamily: {
        // mont: ["Space Grotesk", "sans-serif"],
        mont: ["Source Code Pro", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        xxl: "1600px", //  my screen size
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
