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