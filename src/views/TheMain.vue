<template>
  <div class="flex p-2 flex-wrap justify-between gap-y-6">
    <div v-for="good in goods" :key="good" class="flex flex-col w-1/2 px-4 gap-2">
      <div class="font-semibold text-xl pt-4 px-2 text-center">{{ good.name }}</div>
      <div class="w-72 mx-auto w-full">
        <img :src="good.photo" alt="good" class="cursor-pointer" />
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="tracking-wide text-xl">{{ good.price }} грн</div>
          <div>
            <heart-icon
              class="p-1 h-10 hover:bg-red-600 hover:text-white rounded-md duration-500 cursor-pointer"
              @click="handleLikedItem(good)"
            />
          </div>
        </div>
        <div class="flex gap-1">
          <div
            class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
              'bg-red-400': good.condition >= 1
            }"
          ></div>
          <div
            class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
              'bg-orange-400': good.condition >= 2
            }"
          ></div>
          <div
            class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
              'bg-yellow-300': good.condition >= 3
            }"
          ></div>
          <div
            class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
              'bg-emerald-300': good.condition >= 4
            }"
          ></div>
          <div
            class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
              'bg-green-400': good.condition >= 5
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { items } from '@/items'
import { ref, onMounted } from 'vue'
import { usePortfolioStore } from '../stores/3dalmatyntsi'
import { HeartIcon } from '@heroicons/vue/24/outline'

const store = usePortfolioStore()

const goods = ref([])

function handleLikedItem(item) {
  const coincidence = store.getLiked.filter((t) => t.id == item.id)

  if (!coincidence.length) {
    store.addLiked(item)
  } else {
    store.deleteLiked(item)
  }
}

onMounted(() => {
  goods.value = items
})
</script>