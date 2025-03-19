<template>
  <div class="flex" :class="{ container: isMobile }">
    <p v-if="!isMobile" class="side__title">ABOUT ME</p>
    <div class="about-me">
      <p class="about-me__title">HELLO & WELCOME</p>
      <p class="about-me__tag">
        My name is George Kalogiannidis,2h SEIRA Videographer & Video editor, Based in Greece
      </p>

      <p class="about-me__desc">
        I have been working as a video editor for the past three years and have recently expanded
        into filmmaking, which is now my primary professional focus. My work in video production
        includes editing, storytelling, and visual content creation, allowing me to blend creativity
        with technical expertise. I am always looking for opportunities to grow and refine my skills
        and I am committed to lifelong learning, professional development and telling compelling
        stories through film. In my free time, I enjoy outdoor activities, fitness, and
        experimenting with new filmmaking techniques.
      </p>
      <div class="about-me__flex">
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="videoCameraIcon" alt="videoIcon" />
          <div>
            <p class="about-me__flex-item--title">Filmmaking</p>
            <p class="about-me__flex-item--desc">
              At Kre8tive Films, I bring stories to life with cinematic visuals and compelling
              storytelling.
            </p>
          </div>
        </div>
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="shutterCamera" alt="shutterIcon" />
          <div>
            <p class="about-me__flex-item--title">Project Management</p>
            <p class="about-me__flex-item--desc">
              From concept to execution, I ensure every production runs smoothly, on time, and on
              budget with precision and creativity.
            </p>
          </div>
        </div>
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="micIcon" alt="micIcon" />
          <div>
            <p class="about-me__flex-item--title">Camera Crew</p>
            <p class="about-me__flex-item--desc">
              My skilled camera team captures stunning visuals, delivering high-quality content for
              any production need.
            </p>
          </div>
        </div>
        <div class="about-me__flex-item">
          <img class="about-me__flex-icon" :src="countdownIcon" alt="countdownIcon" />
          <div>
            <p class="about-me__flex-item--title">Creative Direction</p>
            <p class="about-me__flex-item--desc">
              I shape ideas into powerful visual narratives, making sure your brand’s vision is
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
import AboutMePic from '../../assets/AboutMePic.webp'
import VideoCameraIcon from '../../assets/videoCameraIcon.png'
import ShutterCamera from '../../assets/shutterCamera.png'
import CountdownIcon from '../../assets/countdownIcon.png'
import MicIcon from '../../assets/micIcon.png'
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
  display: flex;
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  width: 75%;
  margin: 0 auto;
  height: 100vh; /* Make sure it fills the screen */
  position: relative; /* Keep the side title positioned properly */
}

.about-me {
  display: flex;
  flex-direction: column;
  font-size: 1em;
  text-align: left;

  @media (max-width: 1280px) {
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
    width: 95%;
    font-size: 0.8em;
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

    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }

  &__desc {
    font-size: 1.4em;
    line-height: 1.5em;
    color: #9f9f9f;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  &__flex {
    display: flex;
    flex-wrap: wrap;
    color: white;
    margin-top: 4em;
    gap: 20px; /* Space between items */
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }

    &-item {
      width: 45%;
      height: auto; /* Let height adjust dynamically */
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
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
      max-width: 50px;
      font-size: 2em;
      margin-right: 0.5em;
    }
  }
}

.about-me__img {
  max-width: 25%;
  height: 100%; /* Matches height of .about-me */
  object-fit: cover; /* Ensures proper image scaling */
  align-self: stretch; /* Matches height of flex container */
  margin-left: 3em;

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 80%;
    height: auto; /* Prevents stretching on small screens */
  }
}

.side__title {
  transform: rotate(270deg);
  position: absolute;
  left: 2%;
  top: 50%;
  color: white;
  white-space: nowrap;

  &::after {
    content: '';
    width: 40%;
    height: 1px;
    background: #c48f56;
    position: absolute;
    top: 50%;
    left: 6em;
  }
}
</style>
