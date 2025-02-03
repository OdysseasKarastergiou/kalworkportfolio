<template>
  <nav class="navigator">
    <PortfolioButton to="/" name="Home" />
    <PortfolioButton to="/aboutMe" name="About Me" />
    <PortfolioButton to="/portfolio" name="Portfolio" />
    <PortfolioButton to="/contact" name="Contact Me" />
  </nav>
</template>

<script setup>
import PortfolioButton from './PortfolioButton.vue'
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
</style>
