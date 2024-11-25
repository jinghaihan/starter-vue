<script lang="ts" setup>
import { $t } from '@/modules/i18n'
import AppearanceContent from './appearance-content.vue'

interface Props {
  title?: string
  subTitle?: string
}

withDefaults(defineProps<Props>(), {
  title: $t('appearance.title'),
  subTitle: $t('appearance.sub-title'),
})
</script>

<template>
  <Popover content-class="w-100">
    <IconButton icon="i-lucide-paintbrush" :tooltip="title" />
    <template #content>
      <div py-2>
        <h1 text-md text-foreground font-semibold>
          {{ title }}
        </h1>
        <p mt-2 text-xs text-muted-foreground>
          {{ subTitle }}
        </p>
      </div>
      <AppearanceContent />
    </template>
  </Popover>
</template>
