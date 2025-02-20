<template>
  <div class="featured-view flex justify-center">
    <p v-if="!isMobile" class="side__title">Featured Work</p>
    <div class="featured-view__container flex flex-col items-center">
      <swiper
        :slidesPerView="1"
        :speed="800"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="featured-swiper"
      >
        <swiper-slide v-for="(video, index) in videos" :key="index">
          <div class="video-container">
            <video ref="videoPlayers" autoplay loop muted @click="togglePlayPause(index)">
              <source :src="video.src" type="video/mp4" />
            </video>

            <div class="video-controls">
              <button @click.stop="toggleMute(index)">
                <font-awesome-icon
                  :icon="isMuted[index] ? ['fas', 'volume-mute'] : ['fas', 'volume-up']"
                />
              </button>
              <button @click.stop="togglePlayPause(index)">
                <font-awesome-icon :icon="isPlaying[index] ? ['fas', 'pause'] : ['fas', 'play']" />
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="flex items-center" :class="{ 'mt-6': isMobile }">
        <div class="featured-view__title">
          <span class="featured-view__title--index">{{ videoIndex }}</span>
          <div class="featured-view__title--box flex flex-col">
            <span class="featured-view__title--box-feature">FEATURING</span>
            <span class="featured-view__title--box-name">{{ activeTitle }}</span>
          </div>
        </div>
        <PortfolioButton
          :class="isMobile ? 'featured-view__button--mobile' : 'featured-view__button'"
          to="/videography"
          name="VIEW FILM ->"
          :defaultActive="true"
        />
        <div v-if="!isMobile" class="featured-view__navigation flex items-center gap-3">
          <span @click="prevSlide" class="arrow"
            ><font-awesome-icon :icon="['fas', 'arrow-left']"
          /></span>

          <span
            v-for="(video, index) in videos"
            :key="index"
            @click="goToSlide(index)"
            :class="{ active: activeIndex === index }"
          >
            0{{ index + 1 }}
          </span>

          <span @click="nextSlide" class="arrow"
            ><font-awesome-icon :icon="['fas', 'arrow-right']"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Carousel1 from '../../assets/carouselVideos/Carousel1.mp4'
import Carousel2 from '../../assets/carouselVideos/Carousel2.mp4'
import Carousel3 from '../../assets/carouselVideos/Carousel3.mp4'
import Carousel1Image from '../../assets/carouselImages/Carousel1.png'
import Carousel2Image from '../../assets/carouselImages/Carousel2.png'
import Carousel3Image from '../../assets/carouselImages/Carousel3.png'
import PortfolioButton from '../common/PortfolioButton.vue'
import { isMobileUse } from '@/utils/utils'

export default {
  name: 'FeaturedView',
  components: {
    PortfolioButton,
    Swiper,
    SwiperSlide,
  },
  setup(_, { emit }) {
    const videos = ref([
      { src: Carousel1, title: 'Carousel1', bkgImage: Carousel1Image },
      { src: Carousel2, title: 'Carousel2', bkgImage: Carousel2Image },
      { src: Carousel3, title: 'Carousel3', bkgImage: Carousel3Image },
    ])
    const videoPlayers = ref([])
    const isPlaying = ref([])
    const isMuted = ref([])
    const activeTitle = computed(() => videos.value[activeIndex.value]?.title || '')
    const videoIndex = computed(() => (activeIndex.value + 1).toString().padStart(2, '0'))
    const activeBackground = computed(() => videos.value[activeIndex.value]?.bkgImage || '')
    const isMobile = isMobileUse().value

    onMounted(async () => {
      isPlaying.value = videos.value.map(() => true)
      isMuted.value = videos.value.map(() => true)
      await nextTick()
      emit('update-background', activeBackground.value)
    })
    const activeIndex = ref(0)
    let swiperInstance = null

    const togglePlayPause = (index) => {
      const video = videoPlayers.value[index]
      if (!video) return

      if (video.paused) {
        video.play()
        isPlaying.value[index] = true
      } else {
        video.pause()
        isPlaying.value[index] = false
      }
    }

    const toggleMute = (index) => {
      const video = videoPlayers.value[index]
      if (!video) return

      video.muted = !video.muted
      isMuted.value[index] = video.muted
    }

    const onSwiper = (swiper) => {
      swiperInstance = swiper
    }

    const onSlideChange = async (swiper) => {
      activeIndex.value = swiper.realIndex

      await nextTick()
      emit('update-background', activeBackground.value)

      videoPlayers.value.forEach((video, index) => {
        if (video && index !== activeIndex.value) {
          video.pause()
          video.currentTime = 0
        }
      })

      const activeVideo = videoPlayers.value[activeIndex.value]
      if (activeVideo) {
        activeVideo.play()
      }
    }

    const goToSlide = (index) => {
      if (swiperInstance) {
        swiperInstance.slideToLoop(index)
        activeIndex.value = index
      }
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
      videos,
      onSwiper,
      onSlideChange,
      goToSlide,
      prevSlide,
      nextSlide,
      videoPlayers,
      isPlaying,
      isMuted,
      togglePlayPause,
      toggleMute,
      activeTitle,
      activeIndex,
      videoIndex,
      isMobile,
    }
  },
}
</script>

<style lang="scss" scoped>
.featured-view {
  &__container {
    position: fixed;
    top: 0;
  }
  &__video {
    width: 65%;
  }
  &__button {
    margin-top: 1em;
    &--mobile {
      position: absolute;
      right: 0;
    }
  }
  &__title {
    position: absolute;
    left: 0;
    margin-top: 2em;
    &--index {
      position: absolute;
      color: rgba(255, 255, 255, 0.2);
      font-size: 5.5em;
    }

    &--box {
      margin-left: 2em;
      &-feature {
        margin-top: 4em;
        font-size: 0.7em;
      }
      &-name {
        color: white;
        font-size: 1.6em;
      }
    }
  }
  &__navigation {
    position: absolute;
    gap: 1em;
    right: 0;
    color: white;

    span {
      cursor: pointer;
      &:hover {
        scale: 1.2;
      }
    }
  }
}
.video-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container video {
  width: 100%;
  height: 90%;
  object-fit: cover;
}

.video-controls {
  position: absolute;
  bottom: 27%;
  left: 2%;
  padding: 8px 12px;
  display: flex;
  gap: 1.5em;
}

.video-controls button {
  background: transparent;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
}
.featured-swiper {
  width: 90vw;
  height: 75vh;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  height: 95vh !important;
}
.side__title {
  transform: rotate(270deg);
  position: absolute;
  top: 40%;
  left: 0;
  color: white;
  &::after {
    content: '';
    width: 40%;
    height: 1px;
    background: #c48f56;
    position: absolute;
    top: 50%;
    left: 6.5em;
  }
}
</style>
