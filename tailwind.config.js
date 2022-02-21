module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"'],
        cabin: ["Cabin"],
      },
      colors: {
        "tl-yellow": "#F3B42A",
      },
      letterSpacing: {
        "tl-wide": "0.25em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
