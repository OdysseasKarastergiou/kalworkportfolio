<template>
  <nav class="navigator">
    <div class="navigator-wrapper">
      <PortfolioButton to="/" name="HOME" />
    </div>
    <div class="navigator-wrapper">
      <PortfolioButton to="/aboutMe" name="ABOUT ME" />
    </div>
    <div class="dropdown navigator-wrapper">
      <PortfolioButton class=" dropdown-btn" name="VIDEOGRAPHY" :defaultActive="isVideographyActive" />
      <div class="dropdown-menu">
        <PortfolioButton class="dropdown-menu__portfolio-button" to="/videography/all" name="ALL" />
        <PortfolioButton to="/videography/cinematic" name="CINEMATIC" />
        <PortfolioButton to="/videography/drone" name="DRONE" />
        <PortfolioButton to="/videography/snowboard" name="SNOWBOARD" />
        <PortfolioButton to="/videography/reels" name="REELS" />
        <PortfolioButton to="/videography/podcast" name="PODCAST" />
      </div>
    </div>
    <div class="navigator-wrapper">
      <PortfolioButton to="/photography" name="PHOTOGRAPHY" :defaultActive="isPhotographyActive" />
    </div>
    <div class="navigator-wrapper">
      <PortfolioButton to="/graphics" name="GRAPHICS" />
    </div>
    <div class="navigator-wrapper">
      <PortfolioButton to="/contact" name="CONTACT ME" />
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PortfolioButton from './PortfolioButton.vue'

const route = useRoute()

const isVideographyActive = computed(() => {
  return route.path.startsWith('/videography')
})

const isPhotographyActive = computed(() => {
  return route.path.startsWith('/photography')
})
</script>

<style lang="scss" scoped>
.navigator {
  display: flex;
  gap: 1em;
  font-size: 1.3em;
  font-weight: 500;
  margin-right: 3em;
  text-align: left;
  padding: 1rem 0;
  margin-top: 1rem;

  @media(max-width:1280px) {
    font-size: 1.05em;
  }

  @media(max-width:1024px) {
    font-size: 0.8em;
    margin-right: 2em;
  }
}

/* Dropdown Styling */
.dropdown {
  position: relative;
  display: inline-block;
}

.navigator-wrapper {
  height: 40px;
}

.dropdown-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: black;
  display: none;
  flex-direction: column;
  min-width: 150px;
  border: 1px solid #333;
  padding: 0.5em;
  z-index: 10;
  gap: 0.5em;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-menu a {
  color: white;
  padding: 10px;
  margin-bottom: 1em;
  text-decoration: none;
  display: block;
}
</style>
