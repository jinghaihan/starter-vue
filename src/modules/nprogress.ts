import type { UserModule } from '@/types'
import progress from 'nprogress'

export const install: UserModule = ({ router }) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path)
      progress.start()
  })
  router.afterEach(() => {
    progress.done()
  })
}
