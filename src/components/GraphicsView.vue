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
import ExplosivoCat from '../assets/photographyCategories/OutdoorCat.jpg'
import SportsCat from '../assets/photographyCategories/PodcastCat.jpg'
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
  width: 80%;
  @media (width < 768px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 0.6em;
  }
  &__category {
    position: relative;
    overflow: hidden;
    &--images {
      width: auto;
      height: 100%;
      cursor: pointer;
      transition: filter 0.3s ease-in-out;

      &:hover {
        filter: brightness(0.5);
      }
    }
    &--label {
      position: absolute;
      top: 10%;
      left: 25%;
      transform: translate(-50%, -50%);
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 2em;
      font-weight: 800;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover &--label {
      opacity: 1;
    }
  }
}
</style>
