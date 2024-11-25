<template>
  <IconButton
    :icon="isDark ? 'i-radix-icons-moon' : 'i-radix-icons-sun'"
    :tooltip="$t('widget.dark-toggle')"
    @click="toggleDark"
  />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 2147483646;
}
.dark::view-transition-old(root) {
  z-index: 2147483646;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
