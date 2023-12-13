<template>
  <div>
    <div v-for="item in store.getLiked" :key="item">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { usePortfolioStore } from '../stores/3dalmatyntsi'
const store = usePortfolioStore()
</script>