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
        <swiper
          :direction="'vertical'"
          :slidesPerView="1"
          :spaceBetween="0"
          :loop="true"
          :cssMode="false"
          class="home-swiper"
        >
          <swiper-slide v-for="video in videos" :key="video.id" @click="openVideo(video.videoId)">
            <div class="video-slide">
              <img
                :src="`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`"
                alt="Video Thumbnail"
                class="thumbnail"
              />
              <span class="duration">{{ video.duration }}</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Video Modal -->
    <div v-if="selectedVideo" class="video-modal" @click="closeVideo">
      <div class="video-container">
        <iframe :src="selectedVideo" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

export default {
  name: 'PortfolioView',
  components: { Swiper, SwiperSlide },
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

.video-slide {
  position: relative;
  cursor: pointer;
}
.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-container {
  width: 80%;
  max-width: 800px;
}
iframe {
  width: 100%;
  height: 450px;
}
</style>
