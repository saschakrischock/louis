<script  lang="ts" setup>
import { useWpApi } from '~/composables/useWpApi';

const isHover = ref('');

console.log('object' + isHover)

const updateValue = (title) => {
  isHover.value = title;
  const img = document.querySelector(`img`);
  if (img) {
    const imgRect = img.getBoundingClientRect();
    const margin = 50;
    const maxBottom = window.innerHeight/2 - imgRect.height;
    const maxRight = window.innerWidth - imgRect.width;
    let bottom = Math.floor(Math.random() * maxBottom);
    let right = Math.floor(Math.random() * maxRight);

    if (bottom < margin) {
      bottom = margin;
    } else if (bottom > maxBottom - margin) {
      bottom = maxBottom - margin;
    }

    if (right < margin) {
      right = margin;
    } else if (right > maxRight - margin) {
      right = maxRight - margin;
    }

    img.style.bottom = `${bottom}px`;
    img.style.right = `${right}px`;
  }
};

const { data: blogs, refresh, error } = await useWpApi().getPosts();

</script>


<template>
<div>
  <img class="absolute" 
        :src=" isHover " data-not-lazy>
    <div class="text-center w-full list flex justify-center block mt-8 mb-8 flex-col">
            <div v-for="blog in blogs" :key="blog.id">
                <NuxtLink v-on:mouseout="updateValue(title = '')"  v-on:mouseover="updateValue(title = blog._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url)"
                class="mr-0  relative" 
                :to="`projects/${blog.slug}`
                ">
                <div v-html="blog.title.rendered"></div>
                </NuxtLink>
            </div>
    </div>
</div>
</template>
  

  
  <style scoped>
  .image {
    font-size: 30px;
    margin: 0 10px;
  }

  .list {
    min-height: calc(100vh - 4rem);
  }

  .list a:hover {
    color: blue;
  }

  img {
    opacity: 1 !important;
  }

  img {
    width: 20vw;
    transition: none;
  }

  span {
    font-size: 1.2rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  </style>