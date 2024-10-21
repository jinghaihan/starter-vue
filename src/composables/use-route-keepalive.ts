import type { VNode } from 'vue'

export function useRouteKeepalive() {
  const router = useRouter()

  const keepaliveRoutes = computed(() =>
    router.getRoutes()
      .filter(route => route.meta?.keepalive)
      .map(route => route.name as string),
  )

  function resolveRouteComponent(component: VNode) {
    const routeName = router.currentRoute.value.name
    if (!component || !routeName)
      return component

    const componentName = (component.type as any).name
    if (componentName || componentName === routeName) {
      return component
    }

    (component.type as any).name = routeName
    return component
  }

  return {
    keepaliveRoutes,
    resolveRouteComponent,
  }
}
