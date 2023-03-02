import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Applications/MAMP/htdocs/nuxt3_wp_yt/nuxt3-wp-blog/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}