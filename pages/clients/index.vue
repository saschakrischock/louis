<script  lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'


const isHover = ref('');

console.log('object' + isHover)

const updateValue = (title) => {
  isHover.value = title;
};

const { data: blogs, refresh, error } = await useWpApi().getPosts();

</script>


<template>
<div>
    <div class v-for="blog in blogs" :key="blog.id">
        <img class="absolute right-4 bottom-16" 
        :src=" isHover ">
    </div>
    <div class="fixed bottom-4">
        <Vue3Marquee :clone="true" :duration="50" direction="reverse">
            <div v-for="blog in blogs" :key="blog.id">
                <NuxtLink v-on:mouseout="updateValue(title = '')" v-on:mouseover="updateValue(title = blog._embedded['wp:featuredmedia'][0]?.source_url)"
                class="mr-8 uppercase relative" 
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
    font-size: 30px;
    margin: 0 10px;
  }

  img {
    width: 30rem;
  }
  </style>