<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import KalSiteLogo from './assets/KalSiteLogo.png'
import MobileMenu from './components/common/MobileMenu.vue'
import DesktopMenu from './components/common/DesktopMenu.vue'
import PortfolioButton from './components/common/PortfolioButton.vue'

const isMenuOpen = ref(false)
const isMobile = ref(window.innerWidth < 768)
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

    <MobileMenu v-if="isMobile" :isOpen="isMenuOpen" @toggle="toggleMenu" />
    <DesktopMenu v-else />
    <span />
    <!-- Add Transition wrapper here -->
    <Transition name="slide">
      <nav v-show="isMobile && isMenuOpen" :class="['navigator', { open: isMenuOpen }]">
        <PortfolioButton class="navigator__links" to="/" name="Home" @click="isMenuOpen = false" />
        <PortfolioButton
          class="navigator__links"
          to="/aboutMe"
          name="About Me"
          @click="isMenuOpen = false"
        />
        <PortfolioButton class="navigator__links" name="Videography" hasSubcategories>
          <PortfolioButton to="/videography/all" name="All" @click="isMenuOpen = false" />
          <PortfolioButton
            to="/videography/cinematic"
            name="Cinematic"
            @click="isMenuOpen = false"
          />
          <PortfolioButton to="/videography/drone" name="Drone" @click="isMenuOpen = false" />
          <PortfolioButton
            to="/videography/snowboard"
            name="Snowboard"
            @click="isMenuOpen = false"
          />
          <PortfolioButton to="/videography/podcast" name="Podcast" @click="isMenuOpen = false" />
        </PortfolioButton>
        <PortfolioButton
          class="navigator__links"
          to="/photography"
          name="Photography"
          @click="isMenuOpen = false"
        />
        <PortfolioButton
          class="navigator__links"
          to="/graphics"
          name="Graphics"
          @click="isMenuOpen = false"
        />
        <PortfolioButton
          class="navigator__links"
          to="/contact"
          name="Contact Me"
          @click="isMenuOpen = false"
        />
      </nav>
    </Transition>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
/* Add these styles for the slide transition */
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

.header {
  margin-top: 0;
  margin-left: 5em;
  margin-right: 10em;
  margin-bottom: 0;
  transition: background-color 1s ease;
}

.header-open {
  background-color: #070707;
}

.logo {
  height: 85px;
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
  .navigator a {
    font-size: 1.5em;
    margin-top: 1em;
    margin-left: 2em;
  }
}
</style>
