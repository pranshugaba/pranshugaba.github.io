import getRoutes from "./utils/getRoutes";

const siteDescription =
  "Personal website of Pranshu Gaba. Here I share photos, poems, puzzles, and more!";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pranshu Gaba",
    titleTemplate: "%s | Pranshu Gaba",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: "bg-white dark:bg-gray-900 transition-colors"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: siteDescription }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/svg",
    "@nuxt/postcss8",
    "@nuxt/typescript-build",
    "@nuxtjs/pwa"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: [],

  env: {
    buildTime: process.env.NUXT_ENV_BUILD_TIME
  },

  generate: {
    fallback: true
  },

  telemetry: true,
  colorMode: {
    preference: "system",
    classSuffix: ""
  },
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-night-owl.css"
      },
      remarkPlugins: [
        "remark-math",
        "remark-emoji",
        ["@silvenon/remark-smartypants", { dashes: "oldschool" }]
      ],
      rehypePlugins: ["rehype-katex"]
    }
  },
  googleFonts: {
    families: {
      Inter: true,
      "Pt+Serif": true,
      "JetBrains+Mono": true
    },
    display: "swap"
  },
  loading: {
    color: "#3B82F6",
    height: "3px"
  },
  pwa: {
    meta: {
      name: "Pranshu Gaba",
      author: "Pranshu Gaba",
      description: siteDescription,
      theme_color: "#3B82F6"
    },
    manifest: {
      name: "Pranshu's website",
      short_name: "Pranshu Gaba",
      description: siteDescription
    }
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://pranshugaba.com/",
    routes() {
      return getRoutes();
    }
  },
  tailwindcss: {
    cssPath: "~/assets/styles/tailwind.css"
  }
};
