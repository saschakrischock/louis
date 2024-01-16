<script  lang="ts" setup>
import { useWpApi } from '~/composables/useWpApi';

const isHover = ref('');

console.log('object' + isHover)

const updateValue = (title) => {
  const img = document.querySelector(`img`);
  if (img) {
    const imgRect = img.getBoundingClientRect();
    const margin = 50;
    const maxBottom = window.innerHeight - imgRect.height;
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

  isHover.value = title;
};


const { data: blogs, refresh, error } = await useWpApi().getPosts();

const { data: cl } = await useWpApi().getClients();

</script>


<template>
<div>
  <div v-for="client in cl[0].acf.clients" :key="client.client">
    
</div>
  <img class="absolute" 
        :src=" isHover " data-not-lazy>
        <div class="text-center w-full list flex justify-center block mt-8 mb-8 flex-col">
          <div v-for="client in cl[0].acf.clients" :key="client.client">
                <a target="_blank"  v-on:mouseout="updateValue(title = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%3E%3C%2Fsvg%3E')"  v-on:mouseover="updateValue(title = client.client_image.sizes.medium_large)"
                class="mr-0  relative" 
                :href="client.client_link
                ">
                {{client.client}}
       

          </a>
            

             
            </div>
    </div>
   <!-- <div class="text-center w-full list flex justify-center block mt-8 mb-8 flex-col">
            <div v-for="blog in blogs" :key="blog.id">
                <NuxtLink v-if="!blog.acf.showclient"  v-on:mouseout="updateValue(title = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%3E%3C%2Fsvg%3E')"  v-on:mouseover="updateValue(title = blog._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url)"
                class="mr-0  relative" 
                :to="`projects/${blog.slug}`
                ">
                <div v-html="blog.title.rendered">
             </div>

                </NuxtLink>
            

             
            </div>
    </div>-->
</div>
</template>
  

  
  <style scoped>
  .image {
    font-size: 1rem;
    margin: 0 10px;
  }

  .list {
    min-height: calc(100vh - 4rem);
  }

  
  img[src=""] {
background-color: red;
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
    font-size: 1rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  </style>