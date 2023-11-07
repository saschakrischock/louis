<script>

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
    },
  },
  data() {
    return {
      scroll: null,
      rellax: null,
      slugsimple: this.slug.replace(/[0-9-]/g, ""),
    };
  },
  mounted() {
    if (window.innerWidth >= 1024) {
      /*this.createRellax();*/
    }
  },
  beforeUnmount() {
    /*this.destroyRellax();*/
  },
  methods: {
    logTitle() {
      console.log(this.title);
      document.querySelector(".title-fixed-title").innerHTML = this.title;
      document.querySelector(".title-fixed-subtitle").innerHTML =
        this.subtitle;
    },
    hideTitle() {
      console.log(this.title);
      document.querySelector(".title-fixed-title").innerHTML = "";
      document.querySelector(".title-fixed-subtitle").innerHTML = "";
    },
    /*
    createRellax() {
      setTimeout(() => {
        const slugs = this.slug.replace(/[0-9-]/g, "");
        const speed = Math.floor(Math.random() * 5) - 2;
        this.rellax = new Rellax("." + slugs, { speed: speed, center: true });
      }, 250);
    },
    destroyRellax() {
      if (this.rellax) {
        this.rellax.destroy();
        this.rellax = null;
      }
    },*/
  },
};
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
    <div class="grid__content mt-2 pointer-events-none">
      <p
        class="grid__content-excerpt flex flex-col text-sm text-clip  overflow-hidden ..."
      >
        <span v-if="title" class=" font-black">{{ title }}</span>        <span  v-if="subtitle" class="">{{ subtitle }}</span>
      </p>
    </div>
      </NuxtLink>
    </div>

</template>

<style scoped>


.squigglechairtwo {
  height: 70vh;
  margin-bottom: 70vh;
}

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


.sandroglobalstorewindows a, .youngthugspiderpopupstoreevent a, .harpersbazaarusamiumiu a {
  margin-left: -3vw !important;
  margin-bottom: 0 !important;
}



.sandroglobalstorewindows a .grid__content, .youngthugspiderpopupstoreevent a .grid__content, .harpersbazaarusamiumiu a .grid__content {

}

.menmagazinepradaeditorial img, .yinchair img {
  margin-left: 5vw !important;
}

.menmagazinepradaeditorial .grid__content, .yinchair .grid__content {
  margin-left: 5vw !important;
}


.pamxpumacampaign img, .byredofragrancecampaign img {
  margin-left: -10vw !important;
}

.pamxpumacampaign .grid__content, .byredofragrancecampaign .grid__content {
  margin-left: -10vw !important;
}

.flowerstogetherpartmetzracine {
  width: 25vw !important;
}


.sandroglobalstorewindows {
  margin-bottom: 40rem !important;
  margin-top: 10vh;
}


@media screen and (min-width: 1025px) {
.gallery__grid img > *:hover {
  filter: none !important;
}

.gallery__grid img:hover > * img { filter: blur(10px); }
/* Fade out all items when the parent is hovered */

.gallery__grid img > img:hover img { filter: none !important; transition-delay: 0ms, 0ms; }
/* Fade in the currently hovered item */

 .grid__content {
opacity: 0;
}

.grid__item:hover .grid__content {
opacity: 1;
}
}

.grid__item {

  float: left;
}


/*
.gallery__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}*/


.grid__item__inner:nth-child(2n) {
  padding: 2rem;
}

.grid__item__inner:nth-child(2n) .grid__content {
  padding-left: 2rem;
  left:0;
  bottom:0;
}

.grid__item__inner:nth-child(7n) {
  padding: 4rem;
  /*margin-left: 20vw;*/
    margin-bottom: 30vw;
}

.grid__item__inner:nth-child(7n) .grid__content {
  padding-left: 4rem;
  bottom: 1rem;
    left: 0;
}

.grid__item__inner:nth-child(4n) {
  padding: 3rem;
}

.grid__item__inner:nth-child(4n) .grid__content {
  padding-left: 3rem;
  bottom: 1rem !important;
}

.grid__item__inner:nth-child(5n) {
  padding: 3rem;
}

.grid__item__inner:nth-child(5n) .grid__content {
  padding-left: 2rem;
    bottom: 1rem;
}


.acrylicpanelchair {
  margin-bottom: 20rem;
}

.grid__item__inner:nth-child(6n) {
  margin-left: 10vw;
}

.grid__item__inner:nth-child(7n) {
  padding: 3rem;
}

.grid__item__inner:nth-child(7n) .grid__content {
  padding-left: 3rem;
}









@media screen and (max-width: 1024px) {

  #__nuxt .grid__content {
    opacity: 1 !important;
    font-size: 12px;
    bottom: inherit !important;
    padding-left: 0 !important;
    margin-top: 0.5rem !important;
    margin-left: 0 !important;
    justify-content: flex-start !important;
    text-align: left !important;
    transform: none !important;
    position: relative !important;
    left: auto !important;
  }

  .grid__item__inner {
    width: 90vw !important;
    height: auto !important;
    display: block !important;
    margin-bottom: 0!important;
    padding: 1rem;
  }

  .grid__item__inner:nth-child(even) {
    margin-right: 0 !important;
    margin-left: auto !important;
  }



  .grid__item__inner a {
    float: none !important;
  }

  .grid__item__inner img {
    margin: 0 !important;
    position: relative !important;
  }
}


.grid__item__inner {
 /* width: 40vw;*/
 width: 20vw;

 /*height: 70vh;*/

 /*margin-bottom: 70vh;*/
  display: inline-block;
}

.grid__item__inner:nth-child(even) {
  margin-right: 0;
  width: 30vw;
 /* height: 30vh; */
  margin-bottom: 30vh;
  /*  margin-left: auto;*/
}

.grid__item__inner:nth-child(even) img {
  /*margin-left: -5vw;*/
}

.gallery__grid {
  float:left;
  display: inline-block;
}

.grid__item img {
  width: 100%;
  height: auto;
  /*position: absolute;*/
}
</style>
