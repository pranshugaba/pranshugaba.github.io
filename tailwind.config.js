module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",

    "./layouts/**/*.vue",

    "./pages/**/*.vue",

    "./plugins/**/*.{js,ts}",

    "./nuxt.config.{js,ts}",

    "./dist/**/*.html"
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
        DEFAULT: "250ms"
      }
    }
  },
  variants: {
    extend: {
      textColor: ["active"],
      scale: ["group-hover"]
    }
  },
  plugins: []
};
