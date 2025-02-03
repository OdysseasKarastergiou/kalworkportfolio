<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import KalSiteLogo from './assets/KalSiteLogo.png'
import MobileMenu from './components/common/MobileMenu.vue'
import DesktopMenu from './components/common/DesktopMenu.vue'

const isMenuOpen = ref(false)
const isMobile = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <header
    :class="[
      'header',
      { 'header-open': isMenuOpen },
      'flex',
      'flex-row',
      'items-center',
      'justify-between',
    ]"
  >
    <img class="logo" :src="KalSiteLogo" />

    <!-- Render Mobile Menu if on mobile, Desktop Menu otherwise -->
    <MobileMenu v-if="isMobile" @toggle="toggleMenu" />
    <DesktopMenu v-else />

    <!-- The mobile menu navigation -->
    <nav v-show="isMobile && isMenuOpen" :class="['navigator', { open: isMenuOpen }]">
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
  transition: background-color 1s ease;
}

.header-open {
  background-color: #070707;
}

.logo {
  height: 150px;
  display: block;
  margin: 0 auto 2rem;
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

@media (max-width: 767px) {
  .header {
    position: relative;
    margin: 0;
    z-index: 20;
  }

  .navigator {
    position: absolute;
    top: 100%;
    right: 0;
    left: auto;
    width: 50%;
    height: calc(100vh - 100%);
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
}
</style>
