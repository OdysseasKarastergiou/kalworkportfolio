<template>
  <div class="portfolio-view">
    <p class="side__title">Portfolio</p>
    <div class="flex flex-col">
      <div>categories Category1 Category2 Category3 Category4</div>
      <div class="flex flex-col">
        <p class="portfolio-view__title">Something Something Title About stuff</p>
        <p>desc</p>
      </div>
      <div>
        <p>Up next</p>
      </div>
      <swiper
        class="portfolio-swiper"
        :slidesPerView="3"
        :speed="800"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(video, index) in videos" :key="index"> {{ index + 1 }} </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  name: 'PortfolioView',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      videos: [
        {
          id: 1,
          thumbnail: 'https://img.youtube.com/vi/85hMoQWRNZg/0.jpg',
          duration: '3:45',
          videoUrl: 'https://www.youtube.com/embed/85hMoQWRNZg',
        },
        {
          id: 2,
          thumbnail: 'https://img.youtube.com/vi/D0CqVmD571E/0.jpg',
          duration: '5:20',
          videoUrl: 'https://www.youtube.com/embed/D0CqVmD571E',
        },
        {
          id: 3,
          thumbnail: 'https://img.youtube.com/vi/64UVKQ98Jp4/0.jpg',
          duration: '5:20',
          videoUrl: 'https://www.youtube.com/embed/64UVKQ98Jp4',
        },
        {
          id: 4,
          thumbnail: 'https://img.youtube.com/vi/ba4JqGa-9xU/0.jpg',
          duration: '5:20',
          videoUrl: 'https://www.youtube.com/embed/ba4JqGa-9xU',
        },
      ],
      selectedVideo: null,
    }
  },
  methods: {
    openVideo(videoId) {
      this.selectedVideo = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    },
    closeVideo() {
      this.selectedVideo = null
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-view {
  &__title {
    font-size: 1.6em;
    color: white;
  }
}
.side__title {
  transform: rotate(270deg);
  position: absolute;
  top: 50%;
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
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 40vh !important;
}
</style>
