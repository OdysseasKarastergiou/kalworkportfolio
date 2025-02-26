<template>
  <div class="snowboard-view">
    <div
      v-for="(video, index) in videos"
      :key="index"
      class="snowboard-view__videos"
      @click="openVideo(video.videoUrl)"
    >
      <img class="snowboard-view__videos-image" :src="video.thumbnail" alt="Video" />
      <div class="snowboard-view__videos-text flex flex-col">
        <div>{{ video.category }} • {{ video.date }}</div>
        <div class="snowboard-view__videos-text--title">{{ video.title }}</div>
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
  name: 'SnowboardView',
  data() {
    return {
      videos: [
        {
          id: 1,
          thumbnail: 'https://img.youtube.com/vi/64UVKQ98Jp4/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/64UVKQ98Jp4?autoplay=1',
          time: '2:46',
          title: 'Snowboarding | Leave your Worries Under the Mountain',
          desc: 'Extra stuff about the video',
          category: 'SNOWBOARD',
        },
        {
          id: 2,
          thumbnail: 'https://img.youtube.com/vi/D0CqVmD571E/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/D0CqVmD571E?autoplay=1',
          time: '2:21',
          title: '3-5 Pigadia Chilling Vibes with Crew',
          desc: 'Extra stuff about the video',
          category: 'SNOWBOARD',
        },
        {
          id: 3,
          thumbnail: 'https://img.youtube.com/vi/1CuMfKWDj4Q/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/1CuMfKWDj4Q?autoplay=1',
          time: '3:12',
          title: 'Explosivo Teen Team Cruising',
          desc: 'Extra Stuff About the video',
          category: 'SNOWBOARD',
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
.snowboard-view {
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
