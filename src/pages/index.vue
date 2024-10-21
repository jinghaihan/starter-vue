<script lang="ts" setup>
import { Button } from '@/components/ui/button'

definePage({
  name: 'home',
  meta: {
    keepAlive: true,
  },
})

const router = useRouter()
</script>

<template>
  <div size-full flex-center gap-2>
    <Button>
      Primary
    </Button>

    <Button variant="destructive" @click="router.push({ path: '/404' })">
      Destructive
    </Button>
  </div>
</template>
