import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Applications/MAMP/htdocs/nuxt3_wp_yt/nuxt3-wp-blog/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}