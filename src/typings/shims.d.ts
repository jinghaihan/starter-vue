import 'vue-router'

declare interface Window {
  // extend the window
}

declare module 'vue-router' {
  interface RouteMeta {
    keepAlive?: boolean
  }
}
