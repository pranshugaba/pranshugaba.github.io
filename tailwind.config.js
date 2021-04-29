module.exports = {
  purge: [
    "./components/**/*.{vue,js}",

    "./layouts/**/*.vue",

    "./pages/**/*.vue",

    "./plugins/**/*.{js,ts}",

    "./nuxt.config.{js,ts}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%"
      },
      transitionDuration: {
        DEFAULT: "500ms"
      }
    }
  },
  variants: {
    extend: {
      textColor: ["active"]
    }
  },
  plugins: []
};
