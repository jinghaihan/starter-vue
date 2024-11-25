<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SUPPORTED_LANGUAGE_OPTIONS } from '@/modules/i18n'

const lang = ref(preference.value.lang)

watch(
  () => lang.value,
  (language) => {
    updatePreference({ lang: language })
  },
)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <IconButton icon="i-lucide-languages" :tooltip="$t('widget.language-toggle')" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuRadioGroup v-model:model-value="lang">
        <DropdownMenuRadioItem
          v-for="item in SUPPORTED_LANGUAGE_OPTIONS"
          :key="item.value"
          :value="item.value"
        >
          {{ item.label }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
