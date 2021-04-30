import getRoutes from "./utils/getRoutes";

const baseDir = "/nuxt-website";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  router: {
    base: baseDir + "/"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pranshu Gaba",
    titleTemplate: "%s | Pranshu Gaba",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: "bg-gray-50 dark:bg-gray-900 transition-colors"
    },
    base: {
      target: "_blank" // open external links in new tabs
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: baseDir + "/favicon.ico" }
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
    "@nuxtjs/svg",
    "@nuxt/postcss8",
    "@nuxt/typescript-build",
    "@nuxtjs/pwa"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    corejs: 3,
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  },
  telemetry: true,
  colorMode: {
    preference: "dark",
    classSuffix: ""
  },
  content: {
    markdown: {
      remarkPlugins: [
        "remark-math",
        "remark-emoji",
        ["@silvenon/remark-smartypants", { dashes: "oldschool" }]
      ],
      rehypePlugins: ["rehype-katex"]
    }
  },
  pwa: {
    meta: {
      name: "PG",
      author: "Pranshu Gaba",
      description: "Pranshu Gaba's website",
      theme_color: "#0077ff"
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
