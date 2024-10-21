<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { Label } from '@/components/ui/label'

interface Props {
  label?: string
  contentClass?: HTMLAttributes['class']
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="pt-2">
    <Label for="color" class="text-xs">{{ label }}</Label>
    <div :class="cn('grid gap-2 py-1.5', contentClass)">
      <slot />
    </div>
  </div>
</template>
