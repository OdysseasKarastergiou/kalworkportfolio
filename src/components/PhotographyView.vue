<template>
  <div class="photography-view">
    <div v-for="(category, index) in categories" :key="index" class="photography-view__category">
      <router-link :to="category.route">
        <img class="photography-view__category--images" :src="category.image" loading="lazy" />
        <div class="photography-view__category--label">{{ category.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import OutdoorCat from '../assets/photographyCategories/Outdoor.webp'
import PodcastCat from '../assets/photographyCategories/Podcast.webp'
import MountOlympusCat from '../assets/photographyCategories/MountOlympus.webp'
import BorovetsCat from '../assets/photographyCategories/Borovets.webp'
import DolomitesCat from '../assets/photographyCategories/Dolomites.webp'
export default {
  name: 'PhotographyView',
  data() {
    return {
      categories: [
        { id: 1, name: 'Outdoor', image: OutdoorCat, route: 'photography/outdoor' },
        { id: 2, name: 'Dolomites', image: DolomitesCat, route: 'photography/dolomites' },
        { id: 3, name: 'Mount Olympus', image: MountOlympusCat, route: 'photography/mountolympus' },
        { id: 4, name: 'Borovets', image: BorovetsCat, route: 'photography/borovets' },
        { id: 5, name: 'Podcast', image: PodcastCat, route: 'photography/podcast' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.photography-view {
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
      width: 100%;
      object-fit: cover;
      height: 100%;
      cursor: pointer;
      transition: filter 0.3s ease-in-out;

      &:hover {
        filter: brightness(0.5);
      }
    }

    &--label {
      position: absolute;
      top: 5%;
      left: 5%; // Adjusted to 10% from the left edge
      transform: translateX(0); // Removed vertical translation
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
