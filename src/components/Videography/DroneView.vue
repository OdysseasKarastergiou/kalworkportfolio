<template>
  <div class="drone-view">
    <div
      v-for="(video, index) in videos"
      :key="index"
      class="drone-view__videos"
      @click="openVideo(video.videoUrl)"
    >
      <img class="drone-view__videos-image" :src="video.thumbnail" alt="Video" />
      <div class="drone-view__videos-text flex flex-col">
        <div>{{ video.category }} • {{ video.date }}</div>
        <div class="drone-view__videos-text--title">{{ video.title }}</div>
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
  name: 'DroneView',
  data() {
    return {
      videos: [
        {
          id: 1,
          thumbnail: 'https://img.youtube.com/vi/c7egr0K82Uo/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/c7egr0K82Uo?autoplay=1',
          time: '1:01',
          title: 'Drone Footage Vermio',
          desc: 'Extra stuff about the video',
          category: 'DRONE',
          date: '15/5/24',
        },
        {
          id: 2,
          thumbnail: 'https://img.youtube.com/vi/HSR3cpVChRI/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/HSR3cpVChRI?autoplay=1',
          time: '1:38',
          title: 'Drone Footage Numfaio',
          desc: 'Extra stuff about the video',
          category: 'DRONE',
          date: '15/5/24',
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
.drone-view {
  margin-left: 2em;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 60px;

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
