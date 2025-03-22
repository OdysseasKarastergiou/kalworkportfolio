<template>
  <div class="homepage-mobile">
    <swiper>
      <swiper-slide class="mobile-swiper__featured-view">
        <div class="blurred-background" :style="{
          backgroundImage: 'url(' + backgroundImage + ')',
        }"></div>
        <FeaturedView class="homepage-mobile__featured-view" @update-background="updateBackground" />
      </swiper-slide>
      <AboutMeView class="homepage-mobile__about-me" />
      <div class="homepage-mobile__portfolio">
        <PortfolioView />
      </div>
      <ContactMeView class="homepage-mobile__contact-me" />
    </swiper>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import FeaturedView from './HomePageComponents/FeaturedView.vue'
import AboutMeView from './HomePageComponents/AboutMeView.vue'
import PortfolioView from './HomePageComponents/PortfolioView.vue'
import ContactMeView from './HomePageComponents/ContactMeView.vue'

export default {
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide,
    FeaturedView,
    AboutMeView,
    PortfolioView,
    ContactMeView,
  },
  setup() {
    const backgroundImage = ref('')
    const updateBackground = (bkg) => {
      backgroundImage.value = bkg
      console.log(backgroundImage.value)
    }
    return {
      updateBackground,
      backgroundImage,
    }
  },
}
</script>

<style lang="scss" scoped>
.homepage-mobile {
  .homepage-mobile {
    &__featured-view {
      position: absolute;
      top: 0;
    }

    &__about-me {
      margin-top: 2em;
    }

    &__portfolio {
      margin-top: 2em;
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    &__contact-me {
      margin-top: 2em;
    }
  }
}

.mobile-swiper__featured-view {
  position: relative;
  overflow: hidden;
}

.blurred-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  z-index: -1;
}

.blurred-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
</style>
