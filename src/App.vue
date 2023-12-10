<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

</script>

<template>
<div class="flex flex-col h-full">
  <the-header></the-header>
  <div class="grow"><router-view/></div>
<the-footer></the-footer>
</div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
