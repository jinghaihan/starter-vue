<script lang="ts" setup>
interface Props {
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <div
    :class="
      cn(
        'relative cursor-pointer rounded-md p-2 outline-1 outline-border outline',
        {
          'outline-primary outline-2': active,
        },
      )
    "
  >
    <slot />
  </div>
</template>
