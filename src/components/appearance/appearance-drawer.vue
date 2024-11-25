<script lang="ts" setup>
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { $t } from '@/modules/i18n'
import AppearanceContent from './appearance-content.vue'

interface Props {
  title?: string
  subTitle?: string
}

withDefaults(defineProps<Props>(), {
  title: $t('appearance.title'),
  subTitle: $t('appearance.sub-title'),
})
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <IconButton icon="i-lucide-paintbrush" :tooltip="title" />
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto max-w-100 w-full">
        <DrawerHeader>
          <DrawerTitle>
            {{ title }}
          </DrawerTitle>
          <DrawerDescription>
            {{ subTitle }}
          </DrawerDescription>
        </DrawerHeader>
        <AppearanceContent />
      </div>
    </DrawerContent>
  </Drawer>
</template>
