<script lang="ts" setup>

import { useWpApi } from '~/composables/useWpApi';

const isHover = ref('');
const isCat = ref('');

console.log('object' + isCat)

const activateLink = (brand) => {
    brand.isClicked = true;

    // Delay before enabling the link (adjust the delay duration as needed)
    setTimeout(() => {
      brand.isLinkEnabled = true;
    }, 300); // 300 milliseconds delay (adjust as needed)

    // Perform any other desired actions on click
    // ...
  };

const updateValue = (title) => {
  isHover.value = title;
};

const updateCat = (cat) => {
    isCat.value = cat;
};

useHead({
  title: "Overview",
  meta: [
    {
      name: "description",
      content: "Overview",
    },
  ],
  titleTemplate: "Louis - %s",
});

const { data: blogs, refresh, error } = await useWpApi().getPosts();

const { data: categories} = await useWpApi().getCatgories();
console.log(blogs);
console.log(categories);
console.log(blogs.value)

const hover = false

const brands = ref(
blogs.value
);
const filterBrands = ref([]);

function resetFilter() {
    filterBrands.value = [];
}
</script>
<template>
     <div>
        <div class="fixed md:top-0 md:bottom-auto md:w-auto  bottom-0 content-center md:bg-transparent bg-white p-4 w-full flex justify-between z-50">
        <div class="form-control md:ml-[8.1rem] flex md:justify-start justify-center w-full" >
            <div class="outer flex f-row mr-4" v-for="category in categories" >
                <label class="cursor-pointer flex items-center filter">
                    <input :value="category.id" v-model="filterBrands" type="checkbox"
                        class="checked:border-blue checked:color-blue checkbox-xs checkbox-primary" />
                    <span :class="{ active: category.id === isCat }"  class="capitalize">{{ category.slug }}</span>
                </label>
            </div>
        </div>

            <div class="indicator capitalize fixed top-1/2 left-1/2 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2

">{{ isHover }}</div>
    
         
     <!--
            <button @click="resetFilter()"
                class="my-6 px-4 w-fit btn bg-transparent border-white border-2 text-white hover:bg-primary hover:border-white rounded-full">
                Reset Filter
            </button>-->
         
        </div>
            <div class="grid grid-cols-14 gap-4 p-4 md:pt-4 mt-4 items-center justify-center gallery__grid">
        
                <div  v-if="filterBrands.length > 0" v-bind:class="{ 'pointer-events-none': !filterBrands.includes(brand.categories[0]) && filterBrands.length > 0 }"  class="outer" v-for="brand in brands">

                  <div class="a-over" v-on:mouseover="updateValue(title = brand.title.rendered)">
                  <NuxtLink  v-bind:class="{ 'pointer-events-none': !filterBrands.includes(brand.categories[0]) && filterBrands.length > 0 }" :to="`projects/${brand.slug}`">
          
             <img loading="lazy" v-on:mouseover="updateValue(title = brand.title.rendered)" :src="brand._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url" v-if="filterBrands.includes(brand.categories[0]) && filterBrands.length > 0">
         
             <img loading="lazy " :src="brand._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url" v-else style="opacity:0.3">
            </Nuxtlink>
            </div>

                </div>
           

            
    
                <div v-else class="outer" v-for="brand in brands">
                   
                  <div class="a-over" v-on:click="activateLink(brand)"  v-on:mouseout="updateValue(title = '')"    v-on:mouseover="updateValue(title = brand.title.rendered)">
                  <NuxtLink :class="{ 'pointer-events-no': !brand.isClicked }" v-on:mouseout="updateCat(cat = '')" v-on:mouseover="updateCat(cat = brand.categories[0])" :to="`projects/${brand.slug}`">
                               
                          <img loading="lazy"  :src="brand._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url">
                  </Nuxtlink>
                </div>
    
                </div>
      
       
            </div>
    </div>
</template>

<style>

/* "page" is hardcoded in nuxt3 page transitions atm */





.filter input {
    opacity: 0;
    width: 0;
}


.grid {
  grid-template-columns: repeat(14, 1fr);
  align-items: flex-start;
}


@media only screen and (max-width: 768px) {

  .pointer-events-no {
  pointer-events: none;

  }






  .hide-mobile {
    display: none;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

input[type="checkbox"]:checked + span {
  color: blue;
  font-style: italic;
}

/* "page" is hardcoded in nuxt3 page transitions atm */
.page-enter-from {
  opacity: 0;
}


.active {
  color: blue;
  font-style: italic;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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

.grid {
  margin: 2.5rem 0;
}

img {
    transition: all 0.5s ease-in-out;
}


.gallery__grid { visibility: hidden; }
/* Prevents :hover from triggering in the gaps between items */

.gallery__grid > * { visibility: visible; }
/* Brings the child items back in, even though the parent is `hidden` */

.gallery__grid > * { transition: opacity 150ms linear 100ms }
/* Makes the fades smooth with a slight delay to prevent jumps as the mouse moves between items */


.gallery__grid img > *:hover {
  opacity: 1 !important;
}

.gallery__grid img {
  transition: opacity 0.3s ease-in-out;
}

.gallery__grid:hover > * img { opacity: 0.1; }
/* Fade out all items when the parent is hovered */

.gallery__grid > *:hover img { opacity: 1 !important; transition-delay: 0ms, 0ms; }


  .blur {
  opacity: 0.1;
}

</style>
