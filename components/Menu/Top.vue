<script>

export default {

  onBeforeRouteLeave(to, from, next) {
    alert("test");
  },

  onBeforeRouteUpdate(to, from, next) {
    alert("test");
  },


methods: {
    menuToggle() {
      document.querySelector('.nav-mobile').classList.toggle('active-nav');
    },
  },
}

</script>
<template>
  <nav class="bg-white text-black z-50 fixed top-0 top-bar">
    <div
      class="container-full p-4 fixed w-full  top-0 top-bar flex flex-row  justify-between gap-3 sm:gap-0 sm:justify-between items-center"
    >
      <NuxtLink to="/" class="black">LG</NuxtLink>


      <div @click="menuToggle" class="menu__trigger hide-on-desktop"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_716" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"> <rect width="24" height="24" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_1_716)"> <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="black"></path> </g> </svg></div>
      <ul class="nav uppercase hide-on-mobile">
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
    </div>
  </nav>

</template>

<style>

.hide-on-desktop {
  display: none;
}

@media only screen and (max-width: 768px) {

  .top-bar {
    background-color: transparent;
  }

  .hide-on-desktop {
    display: flex;
  }
  .hide-on-mobile {
    display: none !important;
  }

}

nav {
  z-index: 100;
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
