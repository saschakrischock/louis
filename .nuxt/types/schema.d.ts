import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["lazyLoad"]?: typeof import("nuxt3-lazy-load").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("/Users/saschakrischock/.nvm/versions/node/v18.15.0/lib/node_modules/@nuxt/devtools/module.cjs").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },
  }
  interface PublicRuntimeConfig {
     wpUri: string,
  }
}