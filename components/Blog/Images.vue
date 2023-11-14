<script lang="ts" setup>


import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'







    // same as beforeRouteLeave option with no access to `this`
    onBeforeRouteLeave((to, from) => {
     // const answer = window.confirm(
    //    'Do you really want to leave? you have unsaved changes!'
   //   )
      // cancel the navigation and stay on the same page
      //if (!answer) return false
    })

    const userData = ref()

    // same as beforeRouteUpdate option with no access to `this`
    onBeforeRouteUpdate(async (to, from) => {
      // only fetch the user if the id changed as maybe only the query or the hash changed
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })

const params = useRoute().params;



useHead({
  title: `${params.slug}`,
  meta: [
    {
      name: "description",
      content: `${params.slug}`,
    },
  ],
});






const goToNext = () => {
  if (window.innerWidth < 1025) {
    document.querySelector('.swiper-button-next').click();
  }

}

const { data: posts } = await useWpApi().getPost(params.slug as string);
console.log(posts)
const post = posts.value[0];

// Computed property for counting slides
const slideCount = computed(() => post.acf.gallery.length);

// Computed property for determining the class
const swiperWrapperClass = computed(() => {
  return slideCount.value === 1 ? 'single-slide' : '';
});


</script>
<template>

<div :class="swiperWrapperClass">
<Swiper @swiper="swiper" @click="goToNext" 
    :modules="[SwiperMousewheel, SwiperNavigation, SwiperFreeMode]"
    :slides-per-view="1"
    :loop="false"
    :speed="1000"
    :space-between="20"
    :navigation="true"
    :mousewheel="true"
    :centeredSlides="true"
  :breakpoints="{
    768: {
      freeMode: true,
      slidesPerView: 'auto',
      centeredSlides: false,
    },
    }"
  >
    <SwiperSlide v-for="image in post.acf.gallery" :key="image.gallery_item">
      <div class="video-wrapper" v-if="image.gallery_vimeo" v-html="image.gallery_vimeo"></div>

      <img v-else  class="still-loading" loading="lazy" :height="image.gallery_item.height" :width="image.gallery_item.width" :src="image.gallery_item.sizes.large" :alt="image.alt">
    </SwiperSlide>
  </Swiper>




      <!-- Blog Title  -->

      <!-- Blog Meta  -->

      <!-- Blog Image  -->


    </div>
</template>

<style>

@media screen and (max-width: 768px) {

.single-project-top {
  background-color: #fff !important;
}
}

.single-slide .swiper-slide {
  width: 100vw !important;
}

.video-wrapper {
  height: 100%;
    display: flex;
    align-items: center;
}

.single-slide .swiper-slide img{
  object-fit: contain;
}

iframe {
  width: 100%;
    aspect-ratio: 16/9;
    height: 100%;
}


/* "page" is hardcoded in nuxt3 page transitions atm */
.page-enter-from {
  opacity: 0;
}



.isLoading {
  background-color: #ddd;
}

section {
  width: max-content;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  img {
    height: calc(100% - 6.8rem);
    margin-top: -0.5rem;
    width: auto;
    object-fit: cover;
  }
}

@media screen and (max-width: 768px) {

section {
  display: inline-block;
  width: max-content;
  margin-top: 51px;
    height: calc(100% - 96px);
}

section img {
  width: 100vw;
  object-fit: contain;
    height: calc(100%);
}
}


.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.blog__content {
  @apply sm:px-10;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6,
.blog__content p {
  @apply my-5;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6 {
  @apply font-bold;
}

.blog__content h1 {
  @apply text-2xl sm:text-4xl;
}

.blog__content h2 {
  @apply text-xl sm:text-3xl;
}

.blog__content h3 {
  @apply text-lg sm:text-2xl;
}

.blog__content h4 {
  @apply sm:text-xl;
}

.blog__content h5 {
  @apply text-sm sm:text-lg;
}
</style>
