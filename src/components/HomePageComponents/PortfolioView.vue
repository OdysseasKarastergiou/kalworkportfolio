<template>
  <div class="portfolio-view">
    <video autoplay muted loop class="portfolio-view__background-video">
      <source :src="PortfolioBackground" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p v-if="!isMobile" class="side__title">Portfolio</p>
    <div class="flex flex-col">
      <div v-if="!isMobile" class="portfolio-view__categories">
        <button
          class="portfolio-view__categories--button"
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="setCategory(category)"
        >
          {{ category }}
        </button>
      </div>
      <div class="flex flex-col">
        <p class="portfolio-view__title">{{ currentVideo.title }}</p>
        <p>{{ currentVideo.desc }}</p>
      </div>
      <div class="portfolio-view__next flex flex-row justify-between">
        <p class="portfolio-view__next--title">Up next</p>
        <div class="portfolio-view__navigation flex items-center gap-1">
          <span @click="prevSlide" class="arrow"
            ><font-awesome-icon :icon="['fas', 'caret-left']"
          /></span>
          <span @click="nextSlide" class="arrow"
            ><font-awesome-icon :icon="['fas', 'caret-right']"
          /></span>
        </div>
      </div>
      <swiper
        class="portfolio-swiper"
        :slidesPerView="isMobile ? 1.1 : 3"
        :space-between="20"
        :speed="800"
        :loop="false"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(video, index) in filteredVideos" :key="index">
          <div class="video-thumbnail-wrapper">
            <img
              :src="video.thumbnail"
              :alt="`Thumbnail for video ${index + 1}`"
              class="video-thumbnail"
              @click="openVideo(video.videoUrl)"
            />
            <span class="video-thumbnail__time">{{ video.time }}</span>
            <div class="video-overlay" @click="openVideo(video.videoUrl)">
              <p class="video-overlay__title">{{ video.title }} --</p>
              <font-awesome-icon class="video-overlay__title--icon" :icon="['fas', 'play']" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div v-if="selectedVideo" class="video-modal" @click="closeVideo">
      <div class="video-modal__content" @click.stop>
        <iframe :src="selectedVideo" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { isMobileUse } from '@/utils/utils'
import videos from '../../assets/youtubeVideos/videos'
import PortfolioBackground from '../../assets/backgroundVideos/PortfolioBackground.mp4'

export default {
  name: 'PortfolioView',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let swiperInstance = null
    const isMobile = isMobileUse().value

    const onSwiper = (swiper) => {
      swiperInstance = swiper
    }

    const prevSlide = () => {
      if (swiperInstance) {
        swiperInstance.slidePrev()
      }
    }

    const nextSlide = () => {
      if (swiperInstance) {
        swiperInstance.slideNext()
      }
    }

    return {
      modules: [Navigation],
      onSwiper,
      prevSlide,
      nextSlide,
      isMobile,
      PortfolioBackground,
    }
  },
  data() {
    return {
      categories: ['ALL', 'DRONE', 'CINEMATIC', 'SNOWBOARD', 'PODCAST'],
      selectedCategory: 'ALL',
      selectedVideo: null,
      featuredVideo: null,
      videos,
    }
  },
  computed: {
    filteredVideos() {
      if (this.selectedCategory === 'ALL') {
        return this.videos
      }
      return this.videos.filter((video) => video.category === this.selectedCategory)
    },
    currentVideo() {
      return this.featuredVideo || this.videos[0]
    },
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category
    },
    openVideo(videoUrl) {
      this.selectedVideo = videoUrl
      this.featuredVideo = this.videos.find((video) => video.videoUrl === videoUrl)
    },
    closeVideo() {
      this.selectedVideo = null
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-view {
  &__background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  &__title {
    font-size: 1.6em;
    color: white;
  }
  &__navigation {
    cursor: pointer;
    color: #b0b0b0;
    font-size: 2em;
    span {
      &:hover {
        color: #a0a0a0;
      }
    }
  }
  &__next {
    margin-top: 5em;
    &--title {
      font-size: 2em;
      color: white;
    }
  }
  &__categories {
    display: inline-flex;
    margin-bottom: 2em;
    gap: 2em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    width: max-content;
    &--button {
      position: relative;
      cursor: pointer;
      padding-bottom: 5px;
      color: white;
      transition: color 0.3s ease;

      &:hover {
        color: #c48f56;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 50%;
        width: 0%;
        height: 1px;
        background: #c48f56;
        transition:
          width 0.3s ease-in-out,
          left 0.3s ease-in-out,
          opacity 0.3s ease-in-out;
        opacity: 0;
      }

      &.active {
        color: #c48f56;

        &::after {
          width: 100%;
          left: 0;
          opacity: 1;
        }
      }
    }
  }
  @media (width < 768px) {
    height: 10%;
  }
}
.side__title {
  transform: rotate(270deg);
  position: absolute;
  top: 53%;
  left: 0;
  color: white;
  &::after {
    content: '';
    width: 40%;
    height: 1px;
    background: #c48f56;
    position: absolute;
    top: 50%;
    left: 4.5em;
  }
}
.portfolio-swiper {
  width: 65vw;
  height: 30vh;
}
.video-thumbnail {
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  &__time {
    background: black;
    padding: 0px 10px;
    position: absolute;
    color: white;
    top: 3%;
    left: 3%;
  }
}
.video-thumbnail-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (width < 768px) {
    margin-top: 2em;
  }
}
.video-thumbnail-wrapper:hover .video-overlay {
  height: 30%;
  transform: translateY(0);
}
.video-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  opacity: 1;
  transform: translateY(100%);
  transition:
    height 0.3s ease,
    transform 0.3s ease;
  &__title {
    &--icon {
      margin-left: 0.5em;
    }
  }
}
.video-modal {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-modal__content {
  position: relative;
  width: 80%;
  max-width: 800px;
}
.video-modal iframe {
  width: 100%;
  height: 450px;
  border-radius: 10px;
}
.swiper-slide {
  height: 75% !important;
  width: 40%;
}
</style>
