<template>
    <div class="flex h-16 items-center px-2 justify-between bg-stone-200">
        <div><magnifying-glass-icon class="h-8"  @click="$router.push({name: 'Search'})"/></div>
        <img src="../assets/img/3dalmatyntsi.png" class="h-4" alt="logo" @click="$router.push({name: 'Home'})">
        <div class="flex gap-2">
            <heart-icon class="h-8" @click="$router.push({name: 'Favourite'})"/>
            <bars-3-icon class="h-8" @click="$router.push({name: 'Navbar'})"/> 
        </div>
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon, HeartIcon, Bars3Icon } from '@heroicons/vue/24/outline'
</script>