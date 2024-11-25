<script lang="ts" setup>
import type { TooltipContentProps } from 'radix-vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface Props {
  title?: string
  delayDuration?: number
  side?: TooltipContentProps['side']
}

withDefaults(defineProps<Props>(), {
  title: '',
  delayDuration: 100,
  side: 'top',
})

const slots = useSlots()
</script>

<template>
  <TooltipProvider :delay-duration="delayDuration">
    <Tooltip>
      <TooltipTrigger as-child tabindex="-1">
        <slot />
      </TooltipTrigger>
      <TooltipContent :side="side">
        <slot v-if="slots.title" name="title" />
        <template v-if="!slots.title">
          {{ title }}
        </template>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
