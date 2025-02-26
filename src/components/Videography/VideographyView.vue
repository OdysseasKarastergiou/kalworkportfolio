<template>
  <div class="videography-view">
    <div
      v-for="(video, index) in videos"
      :key="index"
      class="videography-view__videos"
      @click="openVideo(video.videoUrl)"
    >
      <img class="videography-view__videos-image" :src="video.thumbnail" alt="Video" />
      <div class="videography-view__videos-text flex flex-col">
        <div>{{ video.category }} • {{ video.date }}</div>
        <div class="videography-view__videos-text--title">{{ video.title }}</div>
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
  name: 'VideographyView',
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
        },
        {
          id: 2,
          thumbnail: 'https://img.youtube.com/vi/HSR3cpVChRI/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/HSR3cpVChRI?autoplay=1',
          time: '1:38',
          title: 'Drone Footage Numfaio',
          desc: 'Extra stuff about the video',
          category: 'DRONE',
        },
        {
          id: 3,
          thumbnail: 'https://img.youtube.com/vi/My_rKhSQZbU/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/My_rKhSQZbU?autoplay=1',
          time: '0:41',
          title: 'Cinematic Thessaloniki | SONY FX30',
          desc: 'Extra stuff about the video',
          category: 'CINEMATIC',
        },
        {
          id: 4,
          thumbnail: 'https://img.youtube.com/vi/ba4JqGa-9xU/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/ba4JqGa-9xU?autoplay=1',
          time: '2:08',
          title: 'Escape Into The Sky',
          desc: 'Extra stuff about the video',
          category: 'CINEMATIC',
        },
        {
          id: 5,
          thumbnail: 'https://img.youtube.com/vi/64UVKQ98Jp4/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/64UVKQ98Jp4?autoplay=1',
          time: '2:46',
          title: 'Snowboarding | Leave your Worries Under the Mountain',
          desc: 'Extra stuff about the video',
          category: 'SNOWBOARD',
        },
        {
          id: 6,
          thumbnail: 'https://img.youtube.com/vi/D0CqVmD571E/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/D0CqVmD571E?autoplay=1',
          time: '2:21',
          title: '3-5 Pigadia Chilling Vibes with Crew',
          desc: 'Extra stuff about the video',
          category: 'SNOWBOARD',
        },
        {
          id: 7,
          thumbnail: 'https://img.youtube.com/vi/85hMoQWRNZg/maxresdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/85hMoQWRNZg?autoplay=1',
          time: '0:30',
          title: 'Short Cinematic Story FX30',
          desc: 'Extra stuff about the video',
          category: 'CINEMATIC',
        },
        {
          id: 8,
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
.videography-view {
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
