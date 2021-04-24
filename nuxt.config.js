export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  router: {
    base: "/nuxt-website/",
    middleware: 'trailingSlashRedirect',
    trailingSlash: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pranshu Gaba",
    titleTemplate: "%s | Pranshu Gaba",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/pwa"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  telemetry: true,
  content: {
    markdown: {
      remarkPlugins: ["remark-math"],
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
    hostname: "https://pranshugaba.com/nuxt-website",
    routes: ["/puzzles/1", "/puzzles/2"]
  }
};
