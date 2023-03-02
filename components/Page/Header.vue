<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>
<template>
  <section class="hero">
    <div class="container">
      <h1 v-if="title" class="">{{ title }}</h1>
      <slot />
    </div>
  </section>
</template>

<style>
.hero {
  @apply py-16 bg-gray-100;
}
</style>
