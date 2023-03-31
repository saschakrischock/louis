<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
  width?: number;
  height?: number;
}>();


</script>

<template>

<div class="grid__item__inner">


    <NuxtLink
        v-if="slug"
        class="grid__item"
        :to="`projects/${slug}`"
        >
  
      <img loading="lazy"
        :src="image"
        :alt="title"
        :width="width"
        :height="height"
        class="object-cover w-full h-full "
      />
    <div class="grid__content pointer-events-none">
      <h3 class="grid__content-title uppercase mb-2 pointer-events-none" v-html="title">
      </h3>
      <p
        v-if="excerpt"
        class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden ..."
      >
        {{ excerpt }}
      </p>
    </div>
      </NuxtLink>
    </div>

</template>

<style scoped>
.grid__item__inner {
  width: 40vw;
  display: block
}

.title {
  left: 50%;
}

h3 {
  margin-top: 1rem;
  opacity: 0;
}

.grid__item:hover h3 {
  opacity: 1;
}

.grid__item__inner {
  position: inherit;
}


.gallery__grid > *:hover {
  filter: none !important;
}

.gallery__grid:hover > * img { filter: blur(10px); }
/* Fade out all items when the parent is hovered */

.gallery__grid > *:hover img { filter: none !important; transition-delay: 0ms, 0ms; }
/* Fade in the currently hovered item */



.grid__item__inner:nth-child(even) {
  margin-right: 0;
    margin-left: auto;
    margin-top: -15vw;
}

.grid__item img {
  width: 100%;
}
</style>
