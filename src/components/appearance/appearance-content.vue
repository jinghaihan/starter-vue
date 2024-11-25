<script lang="ts" setup>
import {
  BUILTIN_RADIUS_OPTIONS,
  COLOR_SCHEMA_OPTIONS,
  PAGE_TRANSITION_OPTIONS,
} from '@/composables/use-preference'
import AppearanceBlock from './appearance-block.vue'
import AppearanceColorPicker from './appearance-color-picker.vue'
import AppearanceOutlineBox from './appearance-outline-box.vue'
import AppearanceOutlineButton from './appearance-outline-button.vue'
</script>

<template>
  <AppearanceBlock :label="$t('appearance.color-scheme')" content-class="grid-cols-3">
    <AppearanceOutlineButton
      v-for="item in COLOR_SCHEMA_OPTIONS"
      :key="item.type"
      :active="item.type === preference.colorSchema"
      :icon="item.icon"
      :text="$t(`appearance.color-scheme-${item.type}`)"
      @click="updatePreference({ colorSchema: item.type })"
    />
  </AppearanceBlock>
  <AppearanceBlock :label="$t('appearance.primary-color')">
    <AppearanceColorPicker
      :default-value="preference.primaryColor"
      @change="(primaryColor) => updatePreference({ primaryColor })"
    />
  </AppearanceBlock>
  <AppearanceBlock :label="$t('appearance.radius')" content-class="grid-cols-5">
    <AppearanceOutlineButton
      v-for="r in BUILTIN_RADIUS_OPTIONS"
      :key="r"
      :active="r === preference.radius"
      :text="`${r}`"
      @click="updatePreference({ radius: r })"
    />
  </AppearanceBlock>
  <AppearanceBlock :label="$t('appearance.page-transition')" content-class="grid-cols-4">
    <AppearanceOutlineBox
      v-for="transition in PAGE_TRANSITION_OPTIONS"
      :key="transition"
      :active="transition === preference.pageTransition"
      @click="updatePreference({ pageTransition: transition })"
    >
      <div h-10 w-12 rounded-md bg-accent :class="`${transition}-slow`" />
    </AppearanceOutlineBox>
  </AppearanceBlock>
</template>
