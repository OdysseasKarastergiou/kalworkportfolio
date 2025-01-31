<script setup>
import { RouterLink, RouterView } from 'vue-router'
import KalSiteLogo from './assets/KalSiteLogo.png'
</script>

<template>
  <header class="header flex flex-row items-center justify-between">
    <img class="logo" :src="KalSiteLogo" />
    <nav class="navigator">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/aboutMe">About Me</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/contact">Contact Me</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 10em;
}
.logo {
  height: 150px;
  display: block;
  margin: 0 auto 2rem;
}
.navigator {
  display: flex;
  gap: 1em;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
