<script  lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
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
        :src=" isHover ">
    <div class="fixed bottom-4">
        <Vue3Marquee :clone="true" :duration="200" direction="reverse">
            <div v-for="blog in blogs" :key="blog.id"><span>–</span>
                <NuxtLink v-on:mouseout="updateValue(title = '')"  v-on:mouseover="updateValue(title = blog._embedded['wp:featuredmedia'][0]?.media_details.sizes.large.source_url)"
                class="mr-0 uppercase relative" 
                :to="`projects/${blog.slug}`
                ">
                {{ blog.title.rendered }}
                </NuxtLink>
            </div>
        </Vue3Marquee>
    </div>
</div>
</template>
  

  
  <style scoped>
  .image {
    font-size: 1rem;
    margin: 0 10px;
  }

  img {
    width: 20vw;
    transition: none;
  }

  span {
    font-size: 1rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  </style>