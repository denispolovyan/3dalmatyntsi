<template>
  <div class="flex items-center px-2 h-16 items-center w-full justify-between bg-stone-200 fixed top-0">
    <div><magnifying-glass-icon class="h-8" @click="$router.push({ name: 'Search' })" /></div>
    <img
      src="../assets/img/3dalmatyntsi.png"
      class="h-4"
      alt="logo"
      @click="$router.push({ name: 'Home' })"
    />
    <div class="flex gap-3 items-center">
      <heart-icon class="h-8" @click="$router.push({ name: 'Favourite' })" />
      <bars-3-icon class="h-10" @click="$router.push({ name: 'Navbar' })" />
    </div>
  </div>
  <div class="px-2 border-b mt-16"><the-secondary-navbar /></div>
</template>

<script setup>
import { MagnifyingGlassIcon, HeartIcon, Bars3Icon } from '@heroicons/vue/24/outline'
import TheSecondaryNavbar from './TheSecondaryNavbar.vue'
import { usePortfolioStore } from '../stores/3dalmatyntsi'

const store = usePortfolioStore()

</script>