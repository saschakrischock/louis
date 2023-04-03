// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  mounted() {
    // Perform any actions that need to be done after the new page is loaded
    console.log('New page has finished loading...')
  },
  components: true,
  app: {

    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Louis",
      titleTemplate: "%s - Louis",
      meta: [{ name: "description", content: "Louis" }],
    },
  },





  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});

