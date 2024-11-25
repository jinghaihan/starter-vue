<script lang="ts" setup>
definePage({
  name: 'not-found',
  meta: {
    keepAlive: true,
  },
})
</script>

<template>
  <div size-full flex-center>
    {{ $t('page.not-found') }}
  </div>
</template>
