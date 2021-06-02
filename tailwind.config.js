function decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding =
    typeof padding === "undefined" || padding === null
      ? (padding = 2)
      : padding;

  while (hex.length < padding) {
    hex = "0" + hex;
  }

  return hex;
}

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `var(${variableName}${decimalToHex(opacityValue)})`;
    }
    return `var(variableName)`;
  };
}

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
      // fontFamily: {
      //   sans: ["Inter", "Roboto"]
      // },
      textColor: {
        primary: {
          light: "var(--color-primary)",
          dark: "var(--color-primary-dark)"
        },
        base: {
          light: "var(--color-text-base)",
          dark: "var(--color-text-base)"
        },
        muted: {
          light: "var(--color-text-muted)",
          dark: "var(--color-text-muted)"
        }
      },
      borderColor: {
        primary: {
          light: "var(--color-primary)",
          dark: "var(--color-primary-dark)"
        }
      },
      backgroundColor: {
        primary: {
          light: "var(--color-primary)",
          dark: "var(--color-primary-dark)"
        }
      },
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
