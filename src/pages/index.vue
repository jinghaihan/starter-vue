<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('home') })
</script>

<template>
  <div flex-col-center gap-2 size-full>
    <div capitalize>
      {{ t('home') }}
    </div>
    <div flex gap-2>
      <DarkToggle />
      <LanguageToggle />
    </div>
  </div>
</template>
