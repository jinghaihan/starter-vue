import { $t } from '@/modules/i18n'
import { head } from '@/modules/unhead'

export function useUnhead() {
  const router = useRouter()

  useHead({
    titleTemplate: (title?: string) => title ? `${title} - Starter Vue` : `Starter Vue`,
    meta: [
      {
        name: 'description',
        content: 'Opinionated Vite Starter Template',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
      },
    ],
  })

  watch(
    () => [
      router.currentRoute.value,
      lang.value,
    ],
    () => {
      const name = router.currentRoute.value.name
      if (name) {
        head.push({
          title: $t(`page.${name}`),
        })
      }
    },
    { immediate: true },
  )
}
