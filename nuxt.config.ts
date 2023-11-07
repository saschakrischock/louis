// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  components: true,
  app: {

    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: "utf-16",
      viewport: 'width=device-width, initial-scale=1',
      title: "Louis",
      titleTemplate: "%s - Louis",
      meta: [{ name: "description", content: "Louis" }],
    },
    
  },




  modules: ["@nuxtjs/tailwindcss", "nuxt3-lazy-load", "nuxt-swiper"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});

