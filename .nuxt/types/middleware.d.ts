import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/saschakrischock/Desktop/Web/Dev/2026/lg/louis/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}