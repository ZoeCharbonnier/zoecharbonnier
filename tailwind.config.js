const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: "Lato, sans-serif",
      roboto: "Roboto, sans-serif",
      urbanist: "Urbanist, sans-serif",
    },
    extend: {
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/5": "20%",
        "2/5": "40%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
