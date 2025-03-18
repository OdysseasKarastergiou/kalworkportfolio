<template>
  <div class="swiper-container">
    <swiper
      ref="swiperRef"
      v-bind="swiperOptions"
      @swiper="setSwiperInstance"
      @slideChange="onSlideChange"
      class="swiper"
    >
      <swiper-slide v-for="(video, index) in reels" :key="index" @click="goToSlide(index)">
        <div class="swiper-slide-content">
          <iframe
            v-bind:src="getIframeSrc(video.id)"
            :style="iframeStyle(index)"
            frameborder="0"
            allow="encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </swiper-slide>
    </swiper>
    <div v-if="!isMobile" class="swiper-button-prev" @click="goPrev"></div>
    <div v-if="!isMobile" class="swiper-button-next" @click="goNext"></div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import reels from '../../assets/youtubeVideos/reelsVideos'
import { isMobileUse } from '@/utils/utils'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reels,
      swiperInstance: null,
      activeSlideIndex: 0, // Initial active slide
    }
  },
  methods: {
    setSwiperInstance(swiper) {
      this.swiperInstance = swiper
    },
    getIframeSrc(videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    },
    goPrev() {
      if (this.swiperInstance) this.swiperInstance.slidePrev()
    },
    goNext() {
      if (this.swiperInstance) this.swiperInstance.slideNext()
    },
    goToSlide(index) {
      // Move to the clicked slide
      if (this.swiperInstance) this.swiperInstance.slideTo(index)
    },
    onSlideChange() {
      // Update the active slide index when the slide changes
      this.activeSlideIndex = this.swiperInstance.activeIndex
    },
    iframeStyle(index) {
      // Disable pointer events on non-active slides (so iframe is not clickable)
      return this.activeSlideIndex === index ? {} : { pointerEvents: 'none' }
    },
  },
  setup() {
    const isMobile = isMobileUse().value

    const swiperOptions = {
      loop: false,
      speed: 1000,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 0,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }

    const swiperOptionsMobile = {}

    const swiperOptionsToBind = computed(() => (isMobile ? swiperOptionsMobile : swiperOptions))

    return {
      modules: [Navigation],
      isMobile,
      swiperOptions: swiperOptionsToBind,
    }
  },
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100vh; /* Full viewport height */
  position: relative;
  overflow: hidden; /* Prevent page scrolling */
}

.swiper-slide {
  height: 80vh !important;
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
}

.swiper-slide-content {
  width: 80%;
  height: auto;
  position: relative;
  margin: 0 15px;
}

.swiper-slide-content iframe {
  width: 100%;
  height: 550px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Apply scale effect to non-center items */
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.5);
}

/* Navigation buttons */
.swiper-button-prev,
.swiper-button-next {
  color: white;
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

/* Hide navigation buttons on mobile */
@media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
