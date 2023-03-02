<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
  width?: string;
  height?: string;
}>();
</script>

<template>

    <NuxtLink
        v-if="slug"
        class="grid__item"
        :to="`/${slug}`"
        >
  
      <img loading="lazy"
        :src="image"
        :alt="title"
        :width="width"
        :height="height"
        class="object-cover w-full h-full "
      />
    <div class="grid__content">
      <h3 class="grid__content-title uppercase mb-2">
        {{ title }}
      </h3>
      <p
        v-if="excerpt"
        class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden ..."
      >
        {{ excerpt }}
      </p>
    </div>
      </NuxtLink>

</template>

<style scoped>
.grid__item {
  width: 40vw;
  display: block
}

h3 {
  margin-top: 1rem;
  opacity: 0;
}

.grid__item:hover h3 {
  opacity: 1;
}


.gallery__grid:hover > * { filter: blur(10px); }
/* Fade out all items when the parent is hovered */

.gallery__grid > *:hover { filter: blur(0); transition-delay: 0ms, 0ms; }
/* Fade in the currently hovered item */




.grid__item:nth-child(even) {
  margin-right: 0;
    margin-left: auto;
    margin-top: -15vw;
}

.grid__item img {
  width: 100%;
}
</style>
