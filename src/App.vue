<script lang="ts" setup>
useUnhead()
const { keepaliveRoutes, resolveRouteComponent } = useRouteKeepalive()
</script>

<template>
  <Layout>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="preference.pageTransition" appear mode="out-in">
        <KeepAlive :include="keepaliveRoutes">
          <component :is="resolveRouteComponent(Component)" :key="route.fullPath" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </Layout>
</template>
