<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '@/modules/i18n'

const { locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div i-lucide:languages cursor-pointer @click="toggleLocales" />
</template>
