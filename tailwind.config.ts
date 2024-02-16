import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      backgroundImage: {
        hero_bg: 'url("/assets/bg-sidebar-desktop.svg")',
      },
      colors: {
        primary: "#4b40f1",
        bgColor: "#ecf3fb",
        textColorPrimary:"#163963",
        textColorSecondary:"#a3a3aa"
      },

      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
        "600px": "600px",
        "1290px": "1290px",
      },
    },
  },
};
export default config;
