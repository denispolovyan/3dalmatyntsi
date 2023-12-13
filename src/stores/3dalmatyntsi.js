import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('3dalmatyntsi', () => {
  const liked = ref([])
  const getLiked = computed(() => liked.value)
  const getLength = computed(() => liked.value.length)

  function addLiked(item) {
    liked.value.push(item)
  }

  function deleteLiked(item) {
    liked.value = liked.value.filter(t => t.id != item.id)
  }

  return {liked, getLiked, addLiked, deleteLiked, getLength }
})
