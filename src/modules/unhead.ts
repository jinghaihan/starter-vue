import type { UserModule } from '@/types'
import { createHead } from '@unhead/vue/client'
import { description, name } from '../../package.json'

export const install: UserModule = ({ app }) => {
  const head = createHead({
    init: [
      {
        title: name,
        titleTemplate: title => `${title} - ${name}`,
        meta: [
          {
            name: 'description',
            content: description,
          },
        ],
        link: [
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
          },
        ],
      },
    ],
  })
  app.use(head)
}
