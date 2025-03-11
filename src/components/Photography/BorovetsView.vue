<template>
  <div class="gallery">
    <div
      v-for="(photo, index) in photos"
      :key="index"
      class="gallery-item"
      @click="openModal(index)"
    >
      <img :src="photo" alt="Photo" loading="lazy" />
    </div>
    <div v-if="showModal" class="modal" @click="closeModal">
      <img :src="photos[selectedIndex]" class="modal-content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
      showModal: false,
      selectedIndex: null,
    }
  },
  async created() {
    const images = import.meta.glob('/src/assets/photographyImages/BorovetsThumbnails/*.jpg')

    this.photos = await Promise.all(
      Object.values(images).map((importFn) => importFn().then((mod) => mod.default)),
    )
  },
  methods: {
    openModal(index) {
      this.selectedIndex = index
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style scoped>
.gallery {
  column-count: 4;
  gap: 10px;
  padding: 20px;
}
.gallery-item img {
  display: inline-block;
  width: 100%;
  margin-bottom: 10px; /* Prevents sticking */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
.gallery-item img:hover {
  transform: scale(1.05);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
}
.modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
</style>
