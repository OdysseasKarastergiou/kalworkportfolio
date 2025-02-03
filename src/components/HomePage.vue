<template>
  <swiper
    :direction="'vertical'"
    :pagination="{
      clickable: true,
      el: '.swiper-pagination',
      bulletClass: 'custom-bullet',
      bulletActiveClass: 'custom-bullet-active',
    }"
    :mousewheel="{
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: false,
    }"
    :speed="800"
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="false"
    :cssMode="false"
    class="home-swiper"
    :modules="modules"
  >
    <swiper-slide>
      <FeaturedView />
    </swiper-slide>
    <swiper-slide>
      <AboutMeView />
    </swiper-slide>
    <swiper-slide>
      <PortfolioView />
    </swiper-slide>
    <swiper-slide>
      <ContactMeView />
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

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
    return {
      modules: [Mousewheel, Pagination],
    }
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.home-swiper {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh !important;
}

.swiper-pagination {
  position: absolute;
  right: 20px;
  top: 35% !important;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.custom-bullet {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  margin: 10px 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.custom-bullet-active {
  background: #c48f56;
  transform: scale(1.2);
}
</style>
