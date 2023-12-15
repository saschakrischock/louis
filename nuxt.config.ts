// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  components: true,
  app: {

    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: "utf-16",
      viewport: 'width=device-width, initial-scale=1',
      title: "Louis",
      titleTemplate: "%s",
      meta: [{ name: "description", content: "Louis" }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // Replace 'favicon.ico' with the actual filename of your favicon if it's different
      ]
    },
    
  },




  modules: ["@nuxtjs/tailwindcss", "nuxt3-lazy-load", "nuxt-swiper"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});

