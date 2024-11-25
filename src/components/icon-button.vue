<script lang="ts" setup>
import type { PrimitiveProps, TooltipContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Button } from '@/components/ui/button'

interface Props extends PrimitiveProps {
  buttonClass?: HTMLAttributes['class']
  icon: string
  tooltip?: string
  tooltipSide?: TooltipContentProps['side']
  onClick?: (e: MouseEvent) => void
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  tooltipSide: 'top',
})

const showTooltip = computed(() => !!props.tooltip)
</script>

<template>
  <Tooltip
    v-if="showTooltip"
    :key="icon"
    :title="props.tooltip"
    :side="tooltipSide"
  >
    <Button
      v-bind="{ ...$attrs, ...props }"
      variant="ghost"
      size="icon"
      :class="cn('rounded-full', props.buttonClass)"
      class="!rounded-full"
      @click="onClick"
    >
      <div :class="props.icon" />
    </Button>
  </Tooltip>

  <Button
    v-else
    v-bind="{ ...$attrs, ...props }"
    variant="ghost"
    size="icon"
    :class="cn('rounded-full', props.buttonClass)"
    @click="onClick"
  >
    <div :class="props.icon" />
  </Button>
</template>
