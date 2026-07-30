<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
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
    // .gallery/.swiper both collapse to 0 width (their children are
    // position:absolute, which takes them out of the flow that would
    // otherwise let a parent shrink-wrap around them), so measuring
    // *them* for the pin distance always produced ~0. The actual
    // total width of all slides side-by-side lives on Swiper's own
    // wrapper element, via scrollWidth (which reflects real rendered
    // content extent regardless of the collapsed ancestor boxes).
    //
    // Swiper itself finishes sizing that wrapper asynchronously (its
    // own post-mount layout pass), on a timeline that isn't tied to
    // Vue's $nextTick or to image load events — waiting on either of
    // those still raced it. requestAnimationFrame and ResizeObserver
    // both don't work either: their callback delivery is tied to the
    // browser's paint/rendering cycle, which is throttled or paused
    // for backgrounded/non-visible tabs — a user who opens a project
    // in a background tab could wait on either forever. Plain
    // setTimeout polling runs on the JS timer queue instead, which
    // keeps ticking regardless of tab visibility, with a hard attempt
    // cap so this can never hang indefinitely either way.
    const waitForStableWidth = () => new Promise((resolve) => {
      const wrapper = this.$refs.gallery.querySelector('.swiper-wrapper');
      if (!wrapper) {
        resolve(this.$refs.gallery.offsetWidth);
        return;
      }

      let lastWidth = -1;
      let stableChecks = 0;
      let attempts = 0;
      const check = () => {
        attempts++;
        const width = wrapper.scrollWidth;
        stableChecks = (width > 0 && width === lastWidth) ? stableChecks + 1 : 0;
        lastWidth = width;
        if (stableChecks >= 2 || attempts > 50) {
          resolve(width);
        } else {
          setTimeout(check, 100);
        }
      };
      setTimeout(check, 100);
    });

    this.windowHeight = window.innerHeight || document.documentElement.clientHeight;
    this.scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (window.screen.width > 768) {
      window.addEventListener('scroll', this.handleScroll);
    }

    waitForStableWidth().then((mastheadWidth) => {
      this.fullHeight = mastheadWidth;

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
  }
}
</script>





<template>
  <div ref="gallery" class="gallery">


    <BlogImages :post="post"/>


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
  /* relative (not absolute): still gives .swiper's position:absolute;
     height:100% a definite containing block to resolve against, but
     keeps .gallery itself in normal document flow. With `absolute`
     here, GSAP's pin-spacer (which mirrors the pinned element's own
     position type) also became `absolute`, taking it out of flow
     entirely so its height never actually made the page scrollable. */
  position: relative;
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

  .hide-mobile {
    display: none !important;
  }

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
