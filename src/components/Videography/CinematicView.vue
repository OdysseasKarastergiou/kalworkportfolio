<template>
  <div class="cinematic-view">
    <div
      v-for="(video, index) in videos"
      :key="index"
      class="cinematic-view__videos"
      @click="openVideo(video.videoUrl)"
    >
      <img class="cinematic-view__videos-image" :src="video.thumbnail" alt="Video" />
      <div class="cinematic-view__videos-text flex flex-col">
        <div>{{ video.category }} • {{ video.date }}</div>
        <div class="cinematic-view__videos-text--title">{{ video.title }}</div>
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
export default {
  name: 'CinematicView',
  data() {
    return {
      videos: [
        {
          id: 1,
          thumbnail: 'https://img.youtube.com/vi/My_rKhSQZbU/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/My_rKhSQZbU?autoplay=1',
          time: '0:41',
          title: 'Cinematic Thessaloniki | SONY FX30',
          desc: 'Extra stuff about the video',
          category: 'CINEMATIC',
        },
        {
          id: 2,
          thumbnail: 'https://img.youtube.com/vi/ba4JqGa-9xU/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/ba4JqGa-9xU?autoplay=1',
          time: '2:08',
          title: 'Escape Into The Sky',
          desc: 'Extra stuff about the video',
          category: 'CINEMATIC',
        },
        {
          id: 3,
          thumbnail: 'https://img.youtube.com/vi/85hMoQWRNZg/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/85hMoQWRNZg?autoplay=1',
          time: '0:30',
          title: 'Short Cinematic Story FX30',
          desc: 'Extra stuff about the video',
          category: 'CINEMATIC',
        },
      ],
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
.cinematic-view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 60px;
  margin-left: 2em;
  width: 95%;
  &__videos {
    &-image {
      cursor: pointer;
    }

    &-text {
      padding: 10px;
      color: white;

      &--title {
        margin-top: 0.5em;
        font-size: 1.5em;
        font-weight: 500;
      }
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
</style>
