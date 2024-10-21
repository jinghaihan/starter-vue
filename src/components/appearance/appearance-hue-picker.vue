<script lang="ts" setup>
import type { HueChangeEvent } from 'simple-hue-picker'
import 'simple-hue-picker'

interface Props {
  defaultValue?: number
}

const props = withDefaults(defineProps<Props>(), {})
const emits = defineEmits(['change'])

const modelValue = ref(props.defaultValue ?? 0)
function onChange(e: HueChangeEvent) {
  modelValue.value = e.detail
  emits('change', modelValue.value)
}
</script>

<template>
  <hue-picker w-full :value="modelValue" @input="onChange" />
</template>
