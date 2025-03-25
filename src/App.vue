<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import KalSiteLogo from './assets/KalSiteLogo.png'
import MobileMenu from './components/common/MobileMenu.vue'
import DesktopMenu from './components/common/DesktopMenu.vue'
import PortfolioButton from './components/common/PortfolioButton.vue'

const isMenuOpen = ref(false)
const isMobile = ref(window.innerWidth < 768)
const route = useRoute()
let previousWidth = window.innerWidth

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const checkScreenSize = () => {
  const currentWidth = window.innerWidth
  const wasDesktop = previousWidth >= 768
  const isNowMobile = currentWidth < 768
  const wasMobile = previousWidth < 768
  const isNowDesktop = currentWidth >= 768

  if ((wasDesktop && isNowMobile) || (wasMobile && isNowDesktop)) {
    location.reload() // Refresh only when crossing 768px
  }

  previousWidth = currentWidth
  isMobile.value = currentWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <header :class="[
    'header',
    { 'header-open': isMenuOpen },
    { 'header-fixed': route.path === '/' },
    'flex',
    'flex-row',
    'items-center',
    'justify-between',
  ]">
    <router-link class="logo" to="/">
      <img class="logo" :src="KalSiteLogo" />
    </router-link>

    <MobileMenu v-if="isMobile" :isOpen="isMenuOpen" @toggle="toggleMenu" />
    <DesktopMenu v-else />
    <span />
    <!-- Add Transition wrapper here -->
    <Transition name="slide">
      <nav v-show="isMobile && isMenuOpen" :class="['navigator', { open: isMenuOpen }]">
        <PortfolioButton class="navigator__links" to="/" name="HOME" @click="isMenuOpen = false" />
        <PortfolioButton class="navigator__links" to="/aboutMe" name="ABOUT ME" @click="isMenuOpen = false" />
        <PortfolioButton class="navigator__links" name="VIDEOGRAPHY" hasSubcategories>
          <PortfolioButton to="/videography/all" name="ALL" @click="isMenuOpen = false" />
          <PortfolioButton to="/videography/cinematic" name="CINEMATIC" @click="isMenuOpen = false" />
          <PortfolioButton to="/videography/drone" name="DRONE" @click="isMenuOpen = false" />
          <PortfolioButton to="/videography/snowboard" name="SNOWBOARD" @click="isMenuOpen = false" />
          <PortfolioButton to="/videography/reels" name="REELS" @click="isMenuOpen = false" />
          <PortfolioButton to="/videography/podcast" name="PODCAST" @click="isMenuOpen = false" />
        </PortfolioButton>
        <PortfolioButton class="navigator__links" to="/photography" name="PHOTOGRAPHY" @click="isMenuOpen = false" />
        <PortfolioButton class="navigator__links" to="/graphics" name="GRAPHICS" @click="isMenuOpen = false" />
        <PortfolioButton class="navigator__links" to="/contact" name="CONTACT ME" @click="isMenuOpen = false" />
      </nav>
    </Transition>
  </header>

  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 0;
  margin-left: 5em;
  margin-right: 10em;
  margin-bottom: 0;
  transition: background-color 1s ease;
  z-index: 1000;
}

.header {
  width: 90%;

  margin-top: 0;
  margin-left: 0;
  margin-right: 10em;
  margin-bottom: 0;
  transition: background-color 1s ease;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    /* Vertically center the elements */
    width: 100%;
    /* Ensure the header takes the full width */
    position: relative;
  }
}

.header-open {
  background-color: #070707;
}

.logo {
  height: 105px;
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 80px;
    margin-left: 3em;
    margin-top: 0.25em;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
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
    gap: 2em;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 10;

    &__links {
      margin-left: 2em;
      margin-top: 1em;
    }
  }
}
</style>
