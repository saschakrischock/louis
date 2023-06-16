<script>
    import Rellax from "rellax";

export default {
  data() {
    return {
      scroll: null,
      rellax: null
    };
  },

    

  mounted() {

    let timeoutId;

    const startTimer = () => {
      timeoutId = window.setTimeout(() => {
        // Slowly scroll down the page
        scrollDown();
      }, 5000);
    };

    const resetTimer = () => {
      window.clearTimeout(timeoutId);
      startTimer();
    };

    const scrollDown = () => {
      const currentPosition = window.pageYOffset;
      const targetPosition = document.body.offsetHeight;
      const distance = targetPosition - currentPosition;
      const step = Math.ceil(distance / 100); // Adjust scroll speed here

      const scrollAnimation = () => {
        if (window.pageYOffset < targetPosition) {
          window.scrollBy(0, step);

          // Request next animation frame
          window.requestAnimationFrame(scrollAnimation);
        }
      };

      // Start the scroll animation
      window.requestAnimationFrame(scrollAnimation);
    };

    // Listen for various events to reset the timer and stop scrolling
    window.addEventListener('scroll', resetTimer);
    window.addEventListener('mousemove', stopScrolling);
    window.addEventListener('keypress', stopScrolling);

    const stopScrolling = () => {
      window.removeEventListener('mousemove', stopScrolling);
      window.removeEventListener('keypress', stopScrolling);
    };

    // Start the timer initially
    startTimer();

    this.createRellax();
  },
  beforeUnmount() {
    this.destroyRellax();
  },
  methods: {
    createRellax() {
        setTimeout(() => {
      this.rellax = new Rellax(".rellax", { speed: -10 });
    }, "250")
    },
    destroyRellax() {
      if (this.rellax) {
        this.rellax.destroy();
        this.rellax = null;
      }
    }
  }
};
</script>


<template>
    <div class="rellax" ref="rellax">
        hello
    </div>
</template>

<style scoped>
.rellax {
    margin-top:
}
</style>