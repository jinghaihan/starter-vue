<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('not-found') })
</script>

<template>
  <div flex-col-center gap-2 size-full>
    <div capitalize>
      {{ t('not-found') }}
    </div>
  </div>
</template>
