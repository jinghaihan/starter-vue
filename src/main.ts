import type { UserModule } from './types'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/assets/main.css'

function bootstrap() {
  const app = createApp(App)

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  app.use(router)

  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.({ app, router }))

  app.mount('#app')
}
bootstrap()
