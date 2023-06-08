<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      items: [], // Your gallery items data
      innerWidth: 0, // The width of your gallery inner container
      windowHeight: 0,
      fullHeight: 0,
      scrollPosition: 0,
      scrollProgress: 0, // Added scrollProgress variable
      scrollInterval: null, // Added scrollInterval variable
      scrolling: false, // Added scrolling variable
      scrollBackInterval: null, // Added scrollBackInterval variable
      scrollingBack: false // Added scrollingBack variable
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  onAfterLeave() {
    console.log('Page transition is over');
  },

  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      console.log(this.windowHeight)
      console.log(this.scrollPosition)
      console.log(this.fullHeight)

      if (this.scrollPosition == this.fullHeight) {
        window.history.length > 1 ? useRouter().go(-1) : useRouter().push('/')
      }

      // Calculate scroll progress as a percentage
      this.scrollProgress = (this.scrollPosition / this.fullHeight) * 100;
    },

    startScroll() {
      this.scrolling = true;
      this.scrollInterval = setInterval(this.scrollPage, 15);
    },

    stopScroll() {
      this.scrolling = false;
      clearInterval(this.scrollInterval);
    },

    scrollPage() {
      if (this.scrolling) {
        window.scrollBy(0, 10); // Adjust the scrolling speed by changing the second parameter
      }
    },

    startScrollBack() {
      this.scrollingBack = true;
      this.scrollBackInterval = setInterval(this.scrollPageBack, 15);
    },

    stopScrollBack() {
      this.scrollingBack = false;
      clearInterval(this.scrollBackInterval);
    },

    scrollPageBack() {
      if (this.scrollingBack) {
        window.scrollBy(0, -10); // Adjust the scrolling speed by changing the second parameter
      }
    }
  },

  mounted() {
    setTimeout(() => {
      this.windowHeight = window.innerHeight || document.documentElement.clientHeight;
      this.fullHeight = this.$refs.gallery.offsetWidth;
      this.scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      if (window.screen.width > 768) {
        window.addEventListener('scroll', this.handleScroll);
      }

      this.$nextTick(() => {
        const mastheadWidth = this.$refs.gallery.offsetWidth;

        if (window.screen.width > 768) {
          const scroller = ScrollTrigger.create({
            animation: gsap.to(this.$refs.gallery, {
              x: function () {
                return -(mastheadWidth - window.innerWidth);
              },
              ease: 'none',
            }),
            trigger: this.$refs.gallery,
            end: function () {
              console.log("stranger")
              return mastheadWidth;
            },
            scrub: true,
            pin: true,
            //markers: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          });
        }
      });
    }, 250);
  }
}
</script>


<template>
  <div>
  <div class="gallery" ref="gallery">
    <div class="scroll-indicator top-0 fixed h-2 bg-black" :style="{ width: scrollProgress + '%' }"></div> <!-- Updated width binding -->
    <BlogImages/>  
    </div>
    <div class="bottom-3 fixed left-2 z-50 cursor-pointer hide-mobile">
    <button id="scrollBackButton" @mousedown="startScrollBack" @mouseup="stopScrollBack" @mouseout="stopScrollBack">
      <svg style="transform: rotate(-180deg)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_31_247" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_31_247)">
<path d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z" fill="#1C1B1F"/>
</g>
</svg>
</button> <!-- Added scroll back button -->

    <button id="scrollButton" @mousedown="startScroll" @mouseup="stopScroll" @mouseout="stopScroll">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_31_247" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_31_247)">
<path d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z" fill="#1C1B1F"/>
</g>
</svg>
    </button> <!-- Added button element -->
  </div>
    </div>
</template>


<style scoped>
.logo__text {
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
}


.scroll-indicator {
  z-index: 101;
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

  .single-project-top {
    background-color: #fff !important;
  }

  .gallery {
    display: block;
    overflow-y:hidden;
  overflow-x: scroll;
  white-space: nowrap;
  position: relative;
}


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
