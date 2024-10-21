<script lang="ts" setup>
import AppearanceContent from './appearance-content.vue'

interface Props {
  title?: string
  subTitle?: string
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <Popover content-class="w-100">
    <IconButton icon="i-lucide-paintbrush" :tooltip="title ?? $t('appearance.title')" />
    <template #content>
      <div py-2>
        <h1 text-md text-foreground font-semibold>
          {{ title ?? $t('appearance.title') }}
        </h1>
        <p mt-2 text-xs text-muted-foreground>
          {{ subTitle ?? $t('appearance.sub-title') }}
        </p>
      </div>
      <AppearanceContent />
    </template>
  </Popover>
</template>
