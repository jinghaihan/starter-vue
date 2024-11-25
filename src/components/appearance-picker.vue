<script lang="ts" setup>
import AppearanceDrawer from './appearance/appearance-drawer.vue'
import AppearancePopover from './appearance/appearance-popover.vue'
</script>

<template>
  <component
    :is="isMobile ? AppearanceDrawer : AppearancePopover"
    :title="$t('appearance.title')"
    :sub-title="$t('appearance.sub-title')"
  />
</template>
