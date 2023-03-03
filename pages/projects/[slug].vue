<script lang="ts" setup>

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)






function goToPrev() {
  window.history.length > 1 ? useRouter().go(-1) : useRouter().push('/')
}


    // same as beforeRouteLeave option with no access to `this`
    onBeforeRouteLeave((to, from) => {
     // const answer = window.confirm(
       // 'Do you really want to leave? you have unsaved changes!'
    //  )
      // cancel the navigation and stay on the same page
    //  if (!answer) return false
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
  bodyAttrs: {
        class: 'single-project'
      },
  meta: [
    {
      name: "description",
      content: `${params.slug}`,
    },
  ],
});

const { data: posts } = await useWpApi().getPost(params.slug as string);
console.log(posts)
const post = posts.value[0];
</script>
<template>


<div>
  <div class="single-project-top">
    <div @click="goToPrev">LG</div>

    <div @click="goToPrev">CLOSE</div>
  </div>
  



      <!-- Blog Title  -->

      <!-- Blog Meta  -->

      <!-- Blog Image  -->

      <BlogGallery/>


      <div class="single-project-bottom">
        <div>{{ post.title.rendered }}</div>
        <div class="scroll">Scroll
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_31_247" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_31_247)">
<path d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z" fill="#1C1B1F"/>
</g>
</svg>

        </div>
      </div>
    </div>
</template>

<style>

/* "page" is hardcoded in nuxt3 page transitions atm */
.page-enter-from {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.scroll {
display: flex
}

.scroll svg {
  margin-left: 0.5rem;
}

.single-project-top{
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.single-project-bottom {
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
