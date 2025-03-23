<template>
  <div class="podcast-view">
    <span v-if="isMobile" class="podcast-view__label">CATEGORY: PODCAST</span>
    <div v-for="(video, index) in videos" :key="index" class="podcast-view__videos" @click="openVideo(video.videoUrl)">
      <img class="podcast-view__videos-image" :src="video.thumbnail" alt="Video" />
      <div class="flex flex-col podcast-view__videos-text">
        <div class="podcast-view__videos-text--title">{{ video.title }}</div>
      </div>
    </div>

    <div v-if="selectedVideo" class="video-modal" @click="closeVideo">
      <div class="video-modal__content" @click.stop>
        <iframe :src="selectedVideo" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import videos from '../../assets/youtubeVideos/videos'
import { isMobileUse } from '@/utils/utils'
export default {
  name: 'PodcastVideoView',
  setup() {
    const isMobile = isMobileUse().value
    return {
      isMobile,
    }
  },
  data() {
    return {
      videos: videos.filter((video) => video.category === 'PODCAST'),
      selectedVideo: null,
    }
  },
  methods: {
    openVideo(videoUrl) {
      this.selectedVideo = videoUrl
    },
    closeVideo() {
      this.selectedVideo = null
    },
  },
}
</script>
<style lang="scss" scoped>
.podcast-view {
  margin-left: 2em;
  margin-top: 2em;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 60px;

  @media (width < 768px) {
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
  }

  &__label {
    color: white;
    font-size: 1.5em;
  }

  &__videos {
    &-image {
      cursor: pointer;

      @media (width < 768px) {
        max-width: 85%;
      }
    }

    &-text {
      padding: 10px;
      color: white;
      cursor: pointer;

      &--title {
        max-width: 85%;
        margin-top: 0.5em;
        font-size: 1.5em;
        font-weight: 600;
      }
    }
  }
}

.video-modal {
  position: fixed;
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
</style>
