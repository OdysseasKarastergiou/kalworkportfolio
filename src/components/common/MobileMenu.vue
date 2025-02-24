<template>
  <div class="mobile-menu" @click="toggleMenu">
    <span
      :class="['bar', isOpen ? 'translate-y-2.5 rotate-45' : '', 'transition duration-[1s]']"
    ></span>
    <span :class="['bar', isOpen ? 'scale-x-0' : '', 'transition duration-[1s]']"></span>
    <span
      :class="['bar', isOpen ? '-rotate-45 -translate-y-2.5' : '', 'transition duration-[1s]']"
    ></span>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean, // Accept `isMenuOpen` as a prop from the parent
})

const emit = defineEmits(['toggle'])

const toggleMenu = () => {
  emit('toggle') // Emit the 'toggle' event to update parent state
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
