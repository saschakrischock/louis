<script>
import Rellax from "rellax";

export default {

  props: {
  title: {
    type: String,
  },
  excerpt: {
    type: String,
  },
  image: {
    type: String,
  },
  slug: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  subtitle: {
    type: String,
  }
},

 


  data() {
    return {
      scroll: null,
      rellax: null,
      slugsimple: this.slug.replace(/[0-9-]/g, '')
    };
  },
  mounted() {
    this.createRellax();
  },
  afterUnmount() {
    this.destroyRellax();
  },
  methods: {
    logTitle() {
      console.log(this.title)
      document.querySelector('.title-fixed-title').innerHTML = this.title
      document.querySelector('.title-fixed-subtitle').innerHTML = this.subtitle
    },
    hideTitle() {
      console.log(this.title)
      document.querySelector('.title-fixed-title').innerHTML = ''
      document.querySelector('.title-fixed-subtitle').innerHTML = ''
    },
    createRellax() {
        setTimeout(() => {
          const slugs = this.slug.replace(/[0-9-]/g, '')
          const speed = Math.floor(Math.random() * 5) - 2; // generates a random integer between -5 and 5
      this.rellax = new Rellax('.' +slugs, { speed: speed, center: true });
    }, "250")
    },
    destroyRellax() {
      if (this.rellax) {
        this.rellax.destroy();
        this.rellax = null;
      }
    }
  },


}





</script>


<template>



<div    @mouseover="logTitle"  @mouseleave="hideTitle" :class="slugsimple"  class="grid__item__inner rellax" >



    <NuxtLink data-scroll
        v-if="slug" 
        class="grid__item"
        :to="`projects/${slug}`"
        >

      <img loading="lazy"
        :src="image"
        :alt="title"
        :width="width"
        :height="height"
        class="object-cover w-full h-full "
      />
    <div class="grid__content pointer-events-none">
      <p
        v-if="excerpt"
        class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden ..."
      >
        {{ excerpt }}
      </p>
    </div>
      </NuxtLink>
    </div>

</template>

<style scoped>

.jarallax {
  position: relative;
  z-index: 0;
}
.jarallax > .jarallax-img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}


.title {
  left: 50%;
}

h3 {
  margin-top: 1rem;
  opacity: 0;
}

.grid__item:hover h3 {
  opacity: 1;
}

.grid__item__inner {
  position: inherit;
}


.gallery__grid > *:hover {
  filter: none !important;
}

.gallery__grid:hover > * img { filter: blur(10px); }
/* Fade out all items when the parent is hovered */

.gallery__grid > *:hover img { filter: none !important; transition-delay: 0ms, 0ms; }
/* Fade in the currently hovered item */

.grid__item__inner:nth-child(even) {
  margin-right: 0;
    margin-left: auto;
    margin-top: -15vw;
}


.grid__item__inner:nth-child(2n) {
  padding: 2rem;
}

.grid__item__inner:nth-child(7n) {
  padding: 4rem;
  margin-left: 20vw;
    margin-bottom: 30vw;
}

.grid__item__inner:nth-child(4n) {
  padding: 3rem;
}

.grid__item__inner:nth-child(5n) {
  padding: 3rem;
}


.grid__item__inner:nth-child(7n) {
  padding: 3rem;
}

.teethmagazineissuecoverstory {
  margin-top: 10vw !important;
}

.carharrtwipxliamhodgesxlawmagazinefutureproof {
  margin-top:10vw;
  widows: 30vw;
  margin-left: 2rem;
}


.grid__item__inner {
  width: 40vw;
  display: block
}



.grid__item img {
  width: 100%;
}
</style>
