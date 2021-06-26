const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["PT Serif", ...defaultTheme.fontFamily.serif],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.green,
        lime: colors.lime,
        sky: colors.sky,
        primary: {
          light: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-primary), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-primary), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-primary))`;
          },
          dark: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-primary-dark), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-primary-dark), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-primary-dark))`;
          },
          100: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-primary-100), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-primary-100), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-primary-100))`;
          },
          900: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-primary-900), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-primary-900), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-primary-900))`;
          }
        }
      },
      // textColor: {
      //   primary: {
      //     light: "var(--color-primary)",
      //     dark: "var(--color-primary-dark)"
      //   },
      //   base: {
      //     light: "var(--color-text-base)",
      //     dark: "var(--color-text-base)"
      //   },
      //   muted: {
      //     light: "var(--color-text-muted)",
      //     dark: "var(--color-text-muted)"
      //   }
      // },
      // borderColor: {
      //   primary: {
      //     light: "var(--color-primary)",
      //     dark: "var(--color-primary-dark)"
      //   }
      // },
      // backgroundColor: {
      //   primary: {
      //     light: "var(--color-primary)",
      //     dark: "var(--color-primary-dark)"
      //   }
      // },
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
