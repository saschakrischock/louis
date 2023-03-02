// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  app: {
    
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Elon's Blog",
      titleTemplate: "%s - Elon's Blog",
      meta: [{ name: "description", content: "Elon's awesome blog" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});

