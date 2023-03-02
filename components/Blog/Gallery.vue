<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      items: [], // Your gallery items data
      innerWidth: 0 // The width of your gallery inner container
    }
  },

  computed() {
       // this.innerWidth = this.$refs.inner.offsetWidth;
       const mastheadWidth = this.$refs.gallery.offsetWidth

console.log(this.$refs.gallery.offsetWidth);
console.log(mastheadWidth);

  },

  onAfterLeave() {
      console.log('Page transition is over');
    },

  mounted() {

 
  
    setTimeout(() => {

      this.$nextTick(function () {
    console.log('isthere');
    // Get the width of the gallery inner container
   // this.innerWidth = this.$refs.inner.offsetWidth;
    const mastheadWidth = this.$refs.gallery.offsetWidth
    console.log(this.$refs.gallery.offsetWidth);
    console.log(mastheadWidth);

    ScrollTrigger.create({
  animation: gsap.to(this.$refs.gallery, {
    x: function () {
      return -(mastheadWidth - window.innerWidth);
    },
    ease: 'none',
  }),
  trigger: this.$refs.gallery,
  end: function () {
    return mastheadWidth;
  },
  scrub: true,
  pin: true,
 // markers: true,
  anticipatePin: 1,
  invalidateOnRefresh: true
});
    })

}, "250")

  }
}
</script>


<template>
  <div class="gallery" ref="gallery">
    <BlogImages/>
      </div>
</template>


<style scoped>
.logo__text {
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
}

.gallery {
  position: absolute;
  display: flex;
  top: 0;
  height: 100vh;
}

.masthead {
  display: flex;
}


section:nth-child(2) {
  background-color: green;
}

.logo-real {
  top: 1.25rem;
  height: auto;
  transform-origin: left top;
  transition: all 0.3s ease-in;
}

/*.logo-big {
  transition-delay: 0.3s;
}*/

.logo__small {
  opacity: 0;
  filter: blur(3px);
  width: 14rem !important;
  transition: opacity 0.3s ease-in, filter 0.3s ease-in;
}

.show-small {
  opacity: 1;
  filter: blur(0);
}

.logo-holder {
  transition: none !important;
}

.mobile__nav {
  display: none;
}

@media screen and (min-width: 769px) {
  .shrink {
    transition: none;
  }
}

@media screen and (max-width: 768px) {
  .logo-real {
    position: relative;
    transition: none !important;
  }

  .mobile__nav {
    display: flex;
    justify-content: space-between;
  }

  .logo-svg {
    top: 0;
  }
}
</style>
