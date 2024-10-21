<script lang="ts" setup>
import { Button } from '@/components/ui/button'

interface Props {
  active?: boolean
  text?: string
  icon?: string
}

withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <Button
    variant="outline"
    :class="
      cn(
        'justify-start h-8 px-3 outline-1 outline duration-0 outline-border',
        {
          'outline-primary outline-2': active,
        },
      )
    "
    :disabled="active"
  >
    <div flex items-center gap-2>
      <div v-if="icon" :class="icon" size-4 shrink-0 />
      <span text-xs capitalize>{{ text }}</span>
    </div>
  </Button>
</template>
