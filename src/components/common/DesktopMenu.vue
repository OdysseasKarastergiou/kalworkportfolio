<template>
  <nav class="navigator">
    <div class="navigator-wrapper">
      <PortfolioButton to="/" name="Home" />
    </div>
    <div class="navigator-wrapper">
      <PortfolioButton to="/aboutMe" name="About Me" />
    </div>
    <div class="dropdown navigator-wrapper">
      <PortfolioButton
        class="dropdown-btn"
        name="Videography"
        :defaultActive="isVideographyActive"
      />
      <div class="dropdown-menu">
        <PortfolioButton to="/videography/all" name="All" />
        <PortfolioButton to="/videography/drone" name="Drone" />
        <PortfolioButton to="/videography/cinematic" name="Cinematic" />
        <PortfolioButton to="/videography/snowboard" name="Snowboard" />
      </div>
    </div>
    <div class="navigator-wrapper">
      <PortfolioButton to="/photography" name="Photography" :defaultActive="isPhotographyActive" />
    </div>
    <div class="navigator-wrapper">
      <PortfolioButton to="/contact" name="Contact Me" />
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

<style scoped>
.navigator {
  display: flex;
  gap: 1em;
  font-size: 1rem;
  text-align: left;
  padding: 1rem 0;
  margin-top: 1rem;
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
  font-size: 1rem;
  color: white;
  cursor: pointer;
  padding: 0 1rem;
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
