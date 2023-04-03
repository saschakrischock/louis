<template>
  <div >
    <MenuTop />
    <NuxtPage />
  </div>
</template>

<script>
export default {
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

#__nuxt {
  widows: 100vw;
  overflow-x: hidden;
}
</style>