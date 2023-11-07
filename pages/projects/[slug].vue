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
  <div class="single-project-top p-4 bg-transparent">


    <div class="hide-mobile"><span class="capitalize font-black mr-2">{{ post.title.rendered }}</span> <span v-if="post.acf.subtitle"> {{ post.acf.subtitle }}</span></div>

    <!--<div class="click" @click="goToPrev">CLOSE</div>-->
  </div>
  



      <!-- Blog Title  -->

      <!-- Blog Meta  -->

      <!-- Blog Image  -->

      <BlogGallery/>


      <div class="single-project-bottom p-4">
        <div class="hide-desktop"><span class="capitalize font-black mr-2">{{ post.title.rendered }}</span> <soan v-if="post.acf.subtitle"> {{ post.acf.subtitle }}</soan></div>
        <div class="scroll">


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
display: flex;
align-items: center;
}

.click {
  cursor: pointer;
}

.scroll svg {
  margin-left: 0.5rem;
}

.single-project-top{
  position: fixed;
  width: auto;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.single-project-bottom {
  position: fixed;
  width: 100vw;
  display: none !important;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 768px) {
.single-project-bottom {
display: flex !important;
}
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
