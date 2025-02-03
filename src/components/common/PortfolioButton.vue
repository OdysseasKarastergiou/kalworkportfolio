<template>
  <RouterLink :to="to" :class="['portfolio-button', { 'default-active': defaultActive }]">
    <a class="portfolio-link">{{ name }}</a>
  </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: '/',
  },
  defaultActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.portfolio-button {
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
}

.portfolio-link {
  display: inline-block;
  overflow: hidden;
  padding: 0 1rem;
  color: white;
  text-decoration: none;
  position: relative;
}

.portfolio-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #c48f56;
  z-index: -1;
  transition: width 0.4s ease;
}

.portfolio-button:hover .portfolio-link::before,
.portfolio-button.default-active .portfolio-link:hover::before {
  width: 100%;
}

.portfolio-button.default-active .portfolio-link::before {
  width: 50%;
}

.portfolio-button.router-link-exact-active .portfolio-link::before {
  width: 50%;
}

.portfolio-button.router-link-exact-active .portfolio-link:hover::before {
  width: 100%;
}
</style>
