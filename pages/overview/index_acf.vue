<script lang="ts" setup>

import { useWpApi } from '~/composables/useWpApi';

const isHover = ref('test');

console.log('object' + isHover)

const updateValue = (title) => {
  isHover.value = title;
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

const { data: blogs, refresh, error } = await useWpApi().getACF();

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
        <div class="fixed bottom-0 bg-white p-4 w-full flex justify-between z-50">
        <div class="form-control flex justify-center" >
            <div class="outer flex f-row mr-4" v-for="category in categories">
                <label class="cursor-pointer flex items-center filter">
                    <input :value="category.slug" v-model="filterBrands" type="checkbox"
                        class="checked:border-blue checked:color-blue checkbox-xs checkbox-primary" />
                    <span class="uppercase">{{ category.slug }}</span>
                </label>
            </div>
        </div>

            <div class="indicator uppercase">{{ isHover }}</div>
    
         
     <!--
            <button @click="resetFilter()"
                class="my-6 px-4 w-fit btn bg-transparent border-white border-2 text-white hover:bg-primary hover:border-white rounded-full">
                Reset Filter
            </button>-->
         
        </div>
            <div class="grid grid-cols-14 gap-4 p-4 mt-4 items-center justify-center">
        
                <template  v-if="filterBrands.length > 0"  class="outer test" v-for="brand in brands">
                    <template class="outer-2" v-for="brandinner in brand.acf">
                        <template v-if="filterBrands.length > 0"  class="outer-3 test" v-for="brandimage in brandinner">
             
                      
             <img loading="lazy" v-on:mouseover="updateValue(title = brandimage.gallery_title)" :src=" brandimage.gallery_item.sizes.medium" v-if="filterBrands.includes(brandimage.gallery_category.slug) && filterBrands.length > 0">
             <img loading="lazy" :src=" brandimage.gallery_item.sizes.medium" v-else style="opacity:0.3">


                        </template>
           
            </template>
            </template>
            
    
                <template v-else class="outer" v-for="brand in brands">
                    <template class="outer-2" v-for="brandinner in brand.acf">
                            <template class="outer-3" v-for="brandimage in brandinner">
             
                       
                               
                          <img loading="lazy"    v-on:mouseover="updateValue(title = brandimage.gallery_title)" :src=" brandimage.gallery_item.sizes.medium">
                      
    
                            </template>
                    </template>

            </template>
       
            </div>
    </div>
</template>

<style>

/* "page" is hardcoded in nuxt3 page transitions atm */





.filter input {
    opacity: 0;
    width: 0;
}



input[type="checkbox"]:checked + span {
  color: blue;
  border-bottom: 1px solid blue;
}

/* "page" is hardcoded in nuxt3 page transitions atm */
.page-enter-from {
  opacity: 0;
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

.gallery__grid > * { transition: filter 150ms linear 100ms }
/* Makes the fades smooth with a slight delay to prevent jumps as the mouse moves between items */



  .blur {
  filter: blur(5px);
}

</style>
