<template>
  <div class="mobile-menu" @click="toggleMenu">
    <span
      :class="['bar', isMenuOpen ? 'translate-y-2.5 rotate-45' : '', 'transition duration-[1s]']"
    ></span>
    <span :class="['bar', isMenuOpen ? 'scale-x-0' : '', 'transition duration-[1s]']"></span>
    <span
      :class="['bar', isMenuOpen ? '-rotate-45 -translate-y-2.5' : '', 'transition duration-[1s]']"
    ></span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle'])
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  emit('toggle') // Emit the 'toggle' event to the parent component
}
</script>

<style scoped>
.mobile-menu {
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}

.bar {
  width: 2rem;
  height: 0.25rem;
  background-color: #333;
}
</style>
