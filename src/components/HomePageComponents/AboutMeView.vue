<template>
  <div class="flex">
    <p class="side__title">About me</p>
    <div class="about-me">
      <p class="about-me__title">Hello & Welcome</p>
      <p class="about-me__tag">
        My Name is George Kalogiannidis, Greece Based Filmmaker & Video Editor
      </p>
      <p class="about-me__desc">
        George is a video editor, and filmmaker based in Thessaloniki, Greece. Has been working as a
        video editor for the past three years and has recently expanded into filmmaking, which has
        become his primary professional focus. His work in video production includes editing,
        storytelling, and visual content creation, showcasing his creativity and technical
        expertise. Passionate about both health sciences and visual arts, George continuously seeks
        opportunities to enhance his skills in both fields. He remains committed to lifelong
        learning, professional development, and creative storytelling through film. In his free
        time, he enjoys outdoor activities, fitness, and exploring new filmmaking techniques.
      </p>
    </div>
    <img class="about-me__img" :src="aboutMePic" alt="img" />
  </div>
</template>
<script>
import AboutMePic from '../../assets/AboutMePic.webp'
export default {
  name: 'AboutMeView',
  data() {
    return {
      aboutMePic: AboutMePic,
    }
  },
}
</script>
<style lang="scss" scoped>
.about-me {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 5em;
  &__title {
    color: #c48f56;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  &__tag {
    font-size: 1.6em;
    margin-bottom: 1em;
    color: white;
  }
  &__desc {
    font-size: 0.9em;
    color: #9f9f9f;
  }
  &__img {
    margin-left: 10em;
    height: auto;
    max-width: 30%;
    object-fit: contain;
  }
}
.side__title {
  transform: rotate(270deg);
  position: absolute;
  top: 50%;
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
</style>
