import { defineConfig } from '@octohash/vite-config'
import Unocss from 'unocss/vite'

export default defineConfig({
  vue: {
    i18n: true,
  },
  vite: {
    plugins: [
      // https://github.com/antfu/unocss
      Unocss(),
    ],
  },
})
