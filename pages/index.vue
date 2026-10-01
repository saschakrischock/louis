<script setup lang="ts">

import { useWpApi } from '~~/composables/useWpApi';
 


const { data: blogs, refresh, error } = await useWpApi().getPosts();
console.log(blogs);

const { data: settings } = await useWpApi().getSettings();
const makeLatestProjectMorePresent = computed(() => !!settings.value?.make_latest_project_more_present);

// Resolve the featured image for a grid tile. Prefer the generated
// "full" or "large" size, but fall back to the original upload (and
// its own dimensions) when WordPress hasn't generated any sizes, e.g.
// when the server's PHP image library (GD/Imagick) is missing so
// media_details.sizes comes back empty. Without this fallback such a
// post renders as an empty tile.
const featuredImage = (blog: any) => {
  const media = blog?._embedded?.['wp:featuredmedia']?.[0];
  const details = media?.media_details;
  const size = details?.sizes?.full || details?.sizes?.large;
  return {
    src: size?.source_url || media?.source_url,
    width: size?.width || details?.width,
    height: size?.height || details?.height,
  };
};
</script>



<template>
  <main>


    <!-- Blog Section Starts -->
    <div class="blogs mt-12">


    <div class="title-fixed text-center hidden lg:block hidden">
      <div class="title-fixed-title uppercase hidden"></div>
      <div class="title-fixed-subtitle hidden capitalize"></div>
    </div>
   

      <div>
        <div class="gallery__grid__off rellax">
          <BlogGrid class="p-4"
            v-for="(blog, index) in blogs"
            :key="blog.id"
            :title="blog.title.rendered"
            :width="featuredImage(blog).width"
            :height="featuredImage(blog).height"
            :image="featuredImage(blog).src"
            :slug="blog.slug"
            :subtitle="blog.acf.subtitle"
            :featured="index === 0 && makeLatestProjectMorePresent"
          ></BlogGrid>



        </div>
      </div>
    </div>
    
    <div class="footer p-4 relative bottom-0 w-full bg-white flex justify-between">
         <div class="footer-left">
          Louis Gibson {{ new Date().getFullYear() }}©
         </div>

         <div class="footer-right">
          <a class="m-4" target="_blank" href="https://katieling.net/">Designed by Katie Ling</a>
          <a target="_blank" href="https://www.saschakrischock.com/">Developed by Sascha Krischock</a>
         </div>
          </div>
    <!-- Blog Section Ends  -->
  </main>
</template>

<style>

/* "page" is hardcoded in nuxt3 page transitions atm */

.footer {

}

.p-4 {
  padding-bottom: 0.9rem;
}


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



.lazyLoad img {
  opacity: 0;
  transition: none;
}

.isLoaded {
    opacity: 1;
}


.grid__content {
  padding: 0 !important;
  /*position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);*/
}

.gallery__grid { visibility: hidden; }
/* Prevents :hover from triggering in the gaps between items */

.gallery__grid > * { visibility: visible; }
/* Brings the child items back in, even though the parent is `hidden` */

.gallery__grid > * { transition: filt 150ms linear 100ms; }
/* Makes the fades smooth with a slight delay to prevent jumps as the mouse moves between items */



  .blur {
  filter: blur(5px);
}

</style>
