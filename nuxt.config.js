import getRoutes from "./utils/getRoutes";

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
      class: "bg-gray-100 dark:bg-gray-900 transition-colors"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Pranshu Gaba's personal website. Here I share photos, puzzles, poems, and more!" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
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
  loading: {
    color: "#3B82F6",
    height: "3px"
  },
  pwa: {
    meta: {
      name: "PG",
      author: "Pranshu Gaba",
      description: "Pranshu Gaba's website",
      theme_color: "#3B82F6"
    },
    manifest: {
      name: "Pranshu's website",
      short_name: "Pranshu Gaba",
      description: "Pranshu Gaba's website"
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
