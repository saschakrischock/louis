import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/saschakrischock/Desktop/Web/Dev/2026/lg/louis/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}