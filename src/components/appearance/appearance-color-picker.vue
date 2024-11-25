<script lang="ts" setup>
import type { Payload } from '@ckpack/vue-color'
import { Slider } from '@ckpack/vue-color'

interface Props {
  defaultValue: string
}

const props = withDefaults(defineProps<Props>(), {
  defaultValue: '#000000',
})

const emits = defineEmits(['change'])

const color = ref<string>(props.defaultValue)

watch(
  () => color.value,
  () => {
    emits('change', (color.value as unknown as Payload).hex8)
  },
)
</script>

<template>
  <Slider v-model:model-value="color" w-full />
</template>
