// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  components: true,
  app: {

    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Louis Gibson",
      titleTemplate: "%s",
      meta: [{ name: "description", content: "Louis Gibson" }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
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

  // Serve these pages from cache instantly, refreshing the cache in
  // the background once it's older than the given TTL (seconds).
  // Visitors never wait on a fresh WP API round-trip; new content
  // just takes up to the TTL to show up.
  routeRules: {
    '/': { swr: 3600 },
    '/projects/**': { swr: 3600 },
    '/overview': { swr: 3600 },
    '/categories/**': { swr: 3600 },
    '/clients': { swr: 3600 },
  },
});

