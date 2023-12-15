<template>
  <div >
    <h1>Under Construction</h1>
    <!--
    <RouterView>
    <MenuTop  />
    <MenuTopMobile class="hide-on-desktop" />
  </RouterView>
    <NuxtPage />-->
  </div>
</template>

<script>
export default {
  onBeforeRouteLeave(to, from, next) {
    alert("test");
  },

  onBeforeRouteUpdate(to, from, next) {
    alert("test");
  },

  setup () {
    useHead({
      bodyAttrs: {
        class: 'overflow-x-hidden w-screen'
      }
    })
  }
}
</script>

<style scoped>
html, body {
  widows: 100vw;
  overflow-x: hidden;
}

.hide-on-desktop {
  display: none;
}

h1 {
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media only screen and (max-width: 768px) {

  .hide-on-desktop {
    display: flex;
  }
  .hide-on-mobile {
    display: none;
  }

}




#__nuxt {
  widows: 100vw;
  overflow-x: hidden;
}
</style>