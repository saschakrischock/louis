<script setup lang="ts">
import { onBeforeRouteLeave, useRoute } from "vue-router";
import { onMounted, watch } from 'vue';

// This function ensures safe DOM manipulation
const removeActiveNav = () => {
  const navElement = document.querySelector('.nav-mobile');
  if (navElement) {
    navElement.classList.remove('active-nav');
  }
}

onMounted(() => {
  // Now we are sure it's client-side
  const route = useRoute();
  watch(route, () => {
    setTimeout(() => {
      removeActiveNav();
    }, 700);
  });

  onBeforeRouteLeave(() => {
    // Add any additional logic for route leave here
  });
});
</script>


<template>
  <nav class=" text-black z-30 fixed top-0 w-full h-full flex flex-col justify-center nav-mobile">

      <ul class="nav  flex flex-col">
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
