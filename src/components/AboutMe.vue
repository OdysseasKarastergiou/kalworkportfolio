<template>
  <div class="container flex" :class="{ container: isMobile }">
    <div class="about-me">
      <p class="about-me__title">HELLO & WELCOME</p>
      <p class="about-me__tag">
        My Name is George Kalogiannidis, Greece Based Videographer & Video Editor
      </p>
      <p class="about-me__desc">
        George is a video editor, and videographer based in Thessaloniki, Greece. He has been
        working as a video editor for the past three years and has recently expanded into
        filmmaking, which has become his primary professional focus. His work in video production
        includes editing, storytelling, and visual content creation, showcasing his creativity and
        technical expertise. Passionate about both health sciences and visual arts, George
        continuously seeks opportunities to enhance his skills in both fields. He remains committed
        to lifelong learning, professional development, and creative storytelling through film. In
        his free time, he enjoys outdoor activities, fitness, and exploring new filmmaking
        techniques.
      </p>
      <div class="about-me__flex">
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="videoCameraIcon" alt="videoIcon" />
          <div>
            <p class="about-me__flex-item--title">Filmmaking</p>
            <p class="about-me__flex-item--desc">
              Kre8tive Films, led by George Kalogiannidis, brings stories to life with cinematic
              visuals and compelling storytelling.
            </p>
          </div>
        </div>
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="shutterCamera" alt="shutterIcon" />
          <div>
            <p class="about-me__flex-item--title">Project Management</p>
            <p class="about-me__flex-item--desc">
              From concept to execution, we ensure every production runs smoothly, on time, and on
              budget with precision and creativity.
            </p>
          </div>
        </div>
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="micIcon" alt="micIcon" />
          <div>
            <p class="about-me__flex-item--title">Camera Crews</p>
            <p class="about-me__flex-item--desc">
              Our skilled camera teams capture stunning visuals, delivering high-quality content for
              any production need.
            </p>
          </div>
        </div>
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="countdownIcon" alt="countdownIcon" />
          <div>
            <p class="about-me__flex-item--title">Creative Direction</p>
            <p class="about-me__flex-item--desc">
              We shape ideas into powerful visual narratives, ensuring your brand’s vision is
              executed with creativity and impact.
            </p>
          </div>
        </div>
      </div>
    </div>
    <img class="about-me__img" :src="aboutMePic" alt="img" />
  </div>
</template>
<script>
import AboutMePic from '../assets/AboutMePic.webp'
import VideoCameraIcon from '../assets/videoCameraIcon.png'
import ShutterCamera from '../assets/shutterCamera.png'
import CountdownIcon from '../assets/countdownIcon.png'
import MicIcon from '../assets/micIcon.png'
import { isMobileUse } from '@/utils/utils'
export default {
  name: 'AboutMeView',
  setup() {
    const isMobile = isMobileUse().value

    return {
      isMobile,
    }
  },
  data() {
    return {
      aboutMePic: AboutMePic,
      videoCameraIcon: VideoCameraIcon,
      shutterCamera: ShutterCamera,
      countdownIcon: CountdownIcon,
      micIcon: MicIcon,
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 8em;
  display: flex;
  justify-content: center;
  @media (width < 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
  }
}
.about-me {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 10em;
  font-size: 1em;
  @media (width < 1280px) {
    font-size: 0.8em;
  }
  @media (width < 768px) {
    margin-left: 0;
    font-size: 0.8em;
    width: 95%;
  }
  &__title {
    color: #c48f56;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  &__tag {
    font-size: 2.4em;
    margin-bottom: 1em;
    color: white;
    @media (width < 768px) {
      font-size: 1.8em;
    }
  }
  &__desc {
    font-size: 1em;
    line-height: 1.5em;
    color: #9f9f9f;
    @media (width < 768px) {
      font-size: 1.2em;
    }
  }
  &__img {
    margin-left: 3em;
    height: auto;
    max-width: 25%;
    object-fit: contain;
    @media (width < 768px) {
      margin-left: 0;
      max-width: 80%;
    }
  }
  &__flex {
    display: flex;
    flex-wrap: wrap;
    color: white;
    margin-top: 1.5em;
    gap: 10px;
    @media (width < 768px) {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    &-item {
      width: 45%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      @media (width < 768px) {
        width: 95%;
      }
      &--title {
        font-size: 1.7em;
      }
      &--desc {
        margin-top: 1em;
      }
    }
    &-icon {
      color: #c48f56;
      max-width: 8%;
      font-size: 2em;
      margin-right: 0.5em;
    }
  }
}
</style>
