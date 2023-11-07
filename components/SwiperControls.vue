<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
    <div class="controls">
  <button @click="swiper.slideNext()">Next</button>
  <button @click="swiper.slidePrev()">Previous</button>
</div>
</template>
