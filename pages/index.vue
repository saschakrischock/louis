<script setup lang="ts">

import { useWpApi } from '~~/composables/useWpApi';
 

const { data: blogs, refresh, error } = await useWpApi().getPosts();
console.log(blogs);
</script>



<template>
  <main>


    <!-- Blog Section Starts -->
    <div class="blogs">


    <div class="title-fixed text-center">
      <div class="title-fixed-title uppercase"></div>
      <div class="title-fixed-subtitle capitalize"></div>
    </div>
   

      <div class=" p-4">
        <div class="gallery__grid rellax">
          <BlogGrid 
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title.rendered"
            :width="blog._embedded['wp:featuredmedia'][0]?.media_details.width.toString()"
            :height="blog._embedded['wp:featuredmedia'][0]?.media_details.height.toString()"
            :image="blog._embedded['wp:featuredmedia'][0]?.source_url"
            :slug="blog.slug"
            :subtitle="blog.acf.subtitle"
          ></BlogGrid>

        </div>
      </div>
    </div>
    <!-- Blog Section Ends  -->
  </main>
</template>

<style>

/* "page" is hardcoded in nuxt3 page transitions atm */



/* "page" is hardcoded in nuxt3 page transitions atm */
.page-enter-from {
  opacity: 0;
}

.example:hover ~ .example-title { background: red;}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.grid__item {
  position: inherit;
}

.title-fixed {
  left: 50%;
  position: fixed;
  text-align: center;
  top: 50%;
  z-index: 100;
  transform: translate(-50%,-50%);
}


.grid__content {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.gallery__grid { visibility: hidden; }
/* Prevents :hover from triggering in the gaps between items */

.gallery__grid > * { visibility: visible; }
/* Brings the child items back in, even though the parent is `hidden` */

.gallery__grid > * { transition: filt 150ms linear 100ms, transform 150ms ease-in-out 100ms; }
/* Makes the fades smooth with a slight delay to prevent jumps as the mouse moves between items */



  .blur {
  filter: blur(5px);
}

</style>
