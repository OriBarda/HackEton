/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: 1,
        2: 2,
        5: 5,
        6: 6,
      },
      width: {
        100: "200rem",
        98: "30rem",
        5.4: "120%",
      },
      height: {
        100: "400rem",
        1000: "100vw",
        98: "40rem",
        97: "29rem",
        0: "50vh",
      },
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      contect: {
        evolveText: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/abstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circlesL: "url('./assets/CirclesL.png')",
      },
      screens: {
        s: "584px",
        xs: "480px",
        sm: "768px",
        md: "1060px",
        smd: "800px",
      },
      gridTemplateColumns: {
        "15-85": "15% 85%",
      },
      borderWidth: {
        1: "1px",
      },
      // backgroundSize: {
      //  25 : "25rem",
      // }
    },
  },
  plugins: [],
};
