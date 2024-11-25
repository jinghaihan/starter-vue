<script lang="ts" setup>
import type { PopoverContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface Props {
  contentClass?: HTMLAttributes['class']
  contentProps?: PopoverContentProps
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <Popover v-bind="props">
    <PopoverTrigger as-child>
      <slot />
    </PopoverTrigger>
    <PopoverContent :class="props.contentClass">
      <slot name="content" />
    </PopoverContent>
  </Popover>
</template>
