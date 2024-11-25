import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const username = ref<string>('')

    function $reset() {
      username.value = ''
    }

    return {
      $reset,
    }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['username'],
    },
  },
)
