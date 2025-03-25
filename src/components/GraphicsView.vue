<template>
  <div class="graphics-view">
    <div v-for="(category, index) in categories" :key="index" class="graphics-view__category">
      <router-link :to="category.route">
        <img class="graphics-view__category--images" :src="category.image" loading="lazy" />
        <div class="graphics-view__category--label">{{ category.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import ExplosivoCat from '../assets/photographyCategories/Explosivo.webp'
import SportsCat from '../assets/photographyCategories/Sports.webp'
export default {
  name: 'graphicsView',
  data() {
    return {
      categories: [
        { id: 1, name: 'Explosivo', image: ExplosivoCat, route: 'graphics/explosivo' },
        { id: 2, name: 'Sports', image: SportsCat, route: 'graphics/sports' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.graphics-view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  width: 100%;
  margin-top: 2em;

  @media (width < 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.6em;
  }

  &__category {
    position: relative;
    overflow: hidden;

    &--images {
      width: 100%; // Ensure the image fills the container
      height: 100%; // Ensure the image fills the container
      object-fit: cover; // Maintain aspect ratio
      cursor: pointer;
      transition: filter 0.3s ease-in-out;
    }

    &--overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.3s ease-in-out;
    }

    &--label {
      position: absolute;
      top: 5%;
      left: calc(5% + 1em);
      transform: translateX(0);
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 2em;
      font-weight: 800;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;

      @media (max-width: 768px) {
        opacity: 1;
      }
    }

    &:hover &--images {
      filter: brightness(0.5);
    }

    &:hover &--overlay {
      background-color: rgba(0, 0, 0, 0.3);
    }

    &:hover &--label {
      opacity: 1;
    }
  }
}
</style>
