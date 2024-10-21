<script lang="ts" setup>
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <IconButton
    :icon="isFullscreen ? 'i-radix-icons-exit-full-screen' : 'i-radix-icons-enter-full-screen'"
    :tooltip="$t('widget.fullscreen-toggle')"
    @click="toggle"
  />
</template>
