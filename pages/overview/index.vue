<script lang="ts" setup>


 

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home",
    },
  ],
  titleTemplate: "Elon's Blog - %s",
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
        <div class="form-control flex fixed bottom-0 bg-white p-4 w-full" >

            <div class="outer flex f-row mr-4" v-for="category in categories">
                <label class="cursor-pointer flex items-center filter">
                    <input :value="category.slug" v-model="filterBrands" type="checkbox"
                        class="checked:border-blue checked:color-blue checkbox-xs checkbox-primary" />
                    <span class="uppercase">{{ category.slug }}</span>
                </label>
            </div>
            <span v-if="hover">This is a secret message.</span>
         
     
            <button @click="resetFilter()"
                class="my-6 px-4 w-fit btn bg-transparent border-white border-2 text-white hover:bg-primary hover:border-white rounded-full">
                Reset Filter
            </button>
         
        </div>
            <div class="grid grid-cols-8 gap-4 p-4 items-center justify-center">
                <template  v-if="filterBrands.length > 0"  class="outer test" v-for="brand in brands">
                    <template class="outer-2" v-for="brandinner in brand.acf">
                        <template v-if="filterBrands.length > 0"  class="outer-3 test" v-for="brandimage in brandinner">
             
                      
             <img :src=" brandimage.gallery_item.url" v-if="filterBrands.includes(brandimage.gallery_category.slug) && filterBrands.length > 0">
             <img :src=" brandimage.gallery_item.url" v-else style="opacity:0.3">


                        </template>
           
            </template>
            </template>
                <template v-else class="outer" v-for="brand in brands">
                    <template class="outer-2" v-for="brandinner in brand.acf">
                            <template class="outer-3" v-for="brandimage in brandinner">
             
                               
                          <img    @mouseover="hover = true" @mouseleave="hover = false" :src=" brandimage.gallery_item.url">
                      
    
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

.example:hover ~ .example-title { background: red;}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}


.gallery__grid { visibility: hidden; }
/* Prevents :hover from triggering in the gaps between items */

.gallery__grid > * { visibility: visible; }
/* Brings the child items back in, even though the parent is `hidden` */

.gallery__grid > * { transition: filter 150ms linear 100ms, transform 150ms ease-in-out 100ms; }
/* Makes the fades smooth with a slight delay to prevent jumps as the mouse moves between items */



  .blur {
  filter: blur(5px);
}

</style>
