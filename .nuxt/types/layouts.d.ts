import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/alicedarondeau/Documents/Ada/Practice/atelier_portfolio/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}