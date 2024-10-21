<script lang="ts" setup>
import { Slider } from '@/components/ui/slider'

interface Props {
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  trackBackground?: string
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  step: 1,
})
const emits = defineEmits(['change'])

const modelValue = ref<number[]>(props.defaultValue ? [props.defaultValue] : [])
watch(
  () => modelValue.value,
  (value) => {
    emits('change', head(value))
  },
)
</script>

<template>
  <Slider
    v-model:model-value="modelValue"
    :min="min"
    :max="max"
    :step="step"
    :track-background="trackBackground"
  />
</template>
