<template>
  <div class="gallery">
    <div v-if="isLoading" class="loading-indicator">
      <span>Loading...</span>
    </div>
    <div
      v-for="(photo, index) in photos"
      :key="index"
      class="gallery-item"
      @click="openModal(index)"
    >
      <img :src="photo" alt="Photo" loading="lazy" />
    </div>
    <div
      v-if="showModal"
      class="modal"
      @click.self="closeModal"
      @touchstart="startSwipe"
      @touchmove="onSwipeMove"
      @touchend="endSwipe"
    >
      <!-- Only show buttons on larger screens -->
      <button v-if="!isMobile" class="nav prev" @click.stop="prevImage">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <img :src="photos[selectedIndex]" class="modal-content" />
      <button v-if="!isMobile" class="nav next" @click.stop="nextImage">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
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
      isLoading: true,
      isMobile: false,
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      touchEndY: 0,
    }
  },
  async created() {
    const images = import.meta.glob('/src/assets/photographyImages/BorovetsThumbnails/*.webp')
    this.photos = await Promise.all(
      Object.values(images).map((importFn) => importFn().then((mod) => mod.default)),
    )
    this.isLoading = false

    // Check if the user is on a mobile device
    this.isMobile = window.innerWidth <= 768

    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    openModal(index) {
      this.selectedIndex = index
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    nextImage() {
      this.selectedIndex = (this.selectedIndex + 1) % this.photos.length
    },
    prevImage() {
      this.selectedIndex = (this.selectedIndex - 1 + this.photos.length) % this.photos.length
    },
    handleKeydown(event) {
      if (!this.showModal) return

      switch (event.key) {
        case 'ArrowRight':
          this.nextImage()
          break
        case 'ArrowLeft':
          this.prevImage()
          break
        case 'Escape':
          this.closeModal()
          break
      }
    },

    // Swipe functionality for mobile users (Left/Right for image navigation)
    startSwipe(event) {
      this.touchStartX = event.changedTouches[0].screenX
      this.touchStartY = event.changedTouches[0].screenY
    },
    onSwipeMove(event) {
      this.touchEndX = event.changedTouches[0].screenX
      this.touchEndY = event.changedTouches[0].screenY
    },
    endSwipe() {
      // Detect horizontal swipe (Left/Right) for navigation
      if (
        Math.abs(this.touchEndX - this.touchStartX) > Math.abs(this.touchEndY - this.touchStartY)
      ) {
        if (this.touchEndX - this.touchStartX > 50) {
          this.nextImage() // Swipe Right
        } else if (this.touchStartX - this.touchEndX > 50) {
          this.prevImage() // Swipe Left
        }
      }
      // Detect vertical swipe (Up/Down) to close modal
      else if (Math.abs(this.touchEndY - this.touchStartY) > 50) {
        if (this.touchStartY - this.touchEndY > 50) {
          this.closeModalWithAnimation() // Swipe Down to close
        } else if (this.touchEndY - this.touchStartY > 50) {
          this.closeModalWithAnimation() // Swipe Up to close
        }
      }
    },

    // Close modal with fade-out animation
    closeModalWithAnimation() {
      const modal = document.querySelector('.modal')
      if (modal) {
        modal.classList.add('closing')
        setTimeout(() => {
          this.closeModal()
        }, 300) // Delay to match the animation duration
      }
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
.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
}
.gallery-item img {
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
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
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20px;
  outline: none;
  border-radius: 50%;
}
.nav:hover {
  scale: 1.3;
}
.prev {
  left: 20px;
}
.next {
  right: 20px;
}

/* Hides navigation buttons on mobile */
@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>
