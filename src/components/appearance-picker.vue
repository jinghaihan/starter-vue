<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'
import AppearanceDrawer from './appearance/appearance-drawer.vue'
import AppearancePopover from './appearance/appearance-popover.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')
</script>

<template>
  <component
    :is="isMobile ? AppearanceDrawer : AppearancePopover"
    :title="$t('appearance.title')"
    :sub-title="$t('appearance.sub-title')"
  />
</template>
