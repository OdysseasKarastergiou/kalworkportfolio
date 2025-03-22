<template>
  <div>
    <component :is="to ? 'RouterLink' : 'button'" v-bind="to ? { to } : {}"
      :class="['portfolio-button', { 'default-active': defaultActive }]" @click="handleClick">
      {{ name }}
      <span v-if="hasSubcategories" class="chevron">
        <FontAwesomeIcon :icon="isOpen ? 'chevron-down' : 'chevron-right'" />
      </span>
      <span class="arrow" v-if="isOperation">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </span>
    </component>
    <transition name="slide">
      <div v-if="hasSubcategories && isOpen" class="subcategories">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
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
  hasSubcategories: {
    type: Boolean,
    default: false,
  },
  isOperation: {
    type: Boolean,
    default: false,
  },
})

const isOpen = ref(false)

const handleClick = () => {
  if (props.hasSubcategories) {
    isOpen.value = !isOpen.value
  }
}
</script>

<style lang="scss" scoped>
.portfolio-button {
  display: inline-block;
  font-size: 0.8em;
  cursor: pointer;
  position: relative;
  color: white;
  text-decoration: none;
  padding: 0.5em;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.chevron {
  margin-left: 3em;
  font-size: 0.8em;
}

.arrow {
  margin-left: 0.75em;
  margin-top: 0.25em;
  font-size: 0.9em;
}

.subcategories {
  padding-left: 2em;
  border-left: 2px solid #c48f56;
  /* Add a border to the left of subcategories */
  margin-left: 1em;
  /* Add some margin to separate the border from the text */
  margin-top: 1em;
}

/* Transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
