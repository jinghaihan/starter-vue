<script lang="ts" setup>
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import AppearanceContent from './appearance-content.vue'

interface Props {
  title?: string
  subTitle?: string
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <IconButton icon="i-lucide-paintbrush" :tooltip="title ?? $t('appearance.title')" />
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto max-w-100 w-full">
        <DrawerHeader>
          <DrawerTitle>
            {{ title ?? $t('appearance.title') }}
          </DrawerTitle>
          <DrawerDescription>
            {{ subTitle ?? $t('appearance.sub-title') }}
          </DrawerDescription>
        </DrawerHeader>
        <AppearanceContent />
      </div>
    </DrawerContent>
  </Drawer>
</template>
