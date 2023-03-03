<script lang="ts" setup></script>
<template>
  <nav class="bg-white text-black z-50 fixed top-0">
    <div
      class="container-full p-4 fixed w-full bg-white top-0 flex flex-col sm:flex-row justify-center gap-3 sm:gap-0 sm:justify-between items-center"
    >
      <NuxtLink to="/" class="black">LG</NuxtLink>
      <ul class="nav uppercase">
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
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>

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
