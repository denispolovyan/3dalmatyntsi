<template>
    <div class="p-2 flex flex-col gap-4 divide-y"> 
        <div v-for="good in goods" :key="good" class="flex flex-col gap-2">
        <div class="font-semibold text-xl pt-4">{{ good.name }}</div>
        <div class="w-72 mx-auto"><img :src="good.photo" alt="good" class="object-cover"></div>
        <div class="flex justify-between items-center">
            <div class="tracking-wide">{{ good.price }} грн</div>
            <div class="flex gap-1">
            <div class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500" :class="{
                'bg-red-500': good.condition >= 1
            }"></div>
            <div class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500" :class="{
                'bg-orange-500': good.condition >= 2
            }"></div>
            <div class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
                'bg-yellow-500': good.condition >= 3
            }"></div>
            <div class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
                'bg-green-300': good.condition >= 4
            }"></div>
            <div class="h-4 w-4 bg-stone-100 rounded-full border-2 border-stone-500"
            :class="{
                'bg-green-500': good.condition >= 5
            }"></div>
        </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { items } from '@/items';
import {ref, onMounted} from 'vue'

const goods = ref([])


onMounted(() => {
    goods.value = items
})

</script>