<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router"

onBeforeRouteLeave(() => {
    setTimeout(() => {
      document.querySelector('.nav-mobile').classList.remove('active-nav');
    }, 2000) // adjust the delay as needed
})



  /*watch: {
    $route(to, from) {
      
      document.querySelector('.nav-mobile').classList.remove('active');
    },
  },*/
</script>
<template>
  <nav class=" text-black z-30 fixed top-0 w-full h-full flex flex-col justify-center nav-mobile">

      <ul class="nav uppercase flex flex-col">
        <li>
          <NuxtLink to="/">Gallery</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/overview">Overview</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/clients">Clients</NuxtLink>
        </li>
        <li>
          <a href="mailto:contact@louisgibson.co.uk" >Contact</a>
        </li>
      </ul>
  </nav>

</template>

<style>

nav {
  position: fixed;
  z-index: 100;
}

.nav-mobile {
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(0);
}

.nav-mobile.active-nav {
  opacity: 1;
  display: flex !important;
  pointer-events: inherit;
 /* backdrop-filter: blur(10px);*/
 background-color: #ffffffdb;
}

.black {
  color: black !important;
}

ul.nav {
  @apply flex gap-5 items-center justify-end;
}
ul.nav > li > a {
}
ul.nav > li > a.router-link-active {
}
</style>
