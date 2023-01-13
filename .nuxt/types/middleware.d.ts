import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/alicedarondeau/Documents/Ada/Practice/atelier_portfolio/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}