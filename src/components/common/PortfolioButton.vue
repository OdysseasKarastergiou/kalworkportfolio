<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    v-bind="to ? { to } : {}"
    :class="['portfolio-button', { 'default-active': defaultActive }]"
  >
    {{ name }}
  </component>
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
    default: null,
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
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  overflow: hidden;
}

.portfolio-button::before {
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

.portfolio-button:hover::before,
.portfolio-button.default-active:hover::before {
  width: 100%;
}

.portfolio-button.default-active::before {
  width: 50%;
}

.portfolio-button.router-link-exact-active::before {
  width: 50%;
}

.portfolio-button.router-link-exact-active:hover::before {
  width: 100%;
}
</style>
