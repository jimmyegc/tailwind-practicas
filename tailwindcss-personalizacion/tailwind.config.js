/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /*colors: {
      "color-primario": "#0a1045",
      "color-blanco": "#fff",
      rojo: {
        100: "#b57676",
        500: "#CA6161",
        900: "FF2D2D",
      },
      transparent: "transparent",
      current: "currentColor",
    }, */
    extend: {
      backgroundImage: {
        "bg-image-001": "url('../bg-image-001.jpg')",
        "bg-image-002": "url('../bg-image-002.jpg')",
      },
      screens: {
        tablet: { max: "800px" },
        celular: { max: "500px" },
      },
      colors: {
        "color-primario": "#0a1045",
        "color-blanco": "#fff",
        rojo: {
          100: "#b57676",
          500: "#CA6161",
          900: "FF2D2D",
        },
        transparent: "transparent",
        current: "currentColor",
      },
      spacing: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
