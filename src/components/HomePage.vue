<template>
  <swiper v-bind="swiperOptions" class="home-swiper" :modules="modules">
    <swiper-slide class="home-swiper__featured-view">
      <div
        class="blurred-background"
        :style="{
          backgroundImage: 'url(' + backgroundImage + ')',
        }"
      ></div>
      <FeaturedView @update-background="updateBackground" />
    </swiper-slide>
    <swiper-slide class="home-swiper__about-me-view">
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

import FeaturedView from './HomePageComponents/FeaturedView.vue'
import AboutMeView from './HomePageComponents/AboutMeView.vue'
import PortfolioView from './HomePageComponents/PortfolioView.vue'
import ContactMeView from './HomePageComponents/ContactMeView.vue'
import { isMobileUse } from '@/utils/utils'

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
    const isMobile = isMobileUse().value
    const backgroundImage = ref('')
    const swiperOptions = ref({
      direction: 'vertical',
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
      },
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: false,
      },
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      cssMode: false,
    })

    const swiperOptionsMobile = ref({
      direction: 'vertical',
      slidesPerView: 1,
      freeMode: true,
    })

    const swiperOptionsToBind = computed(() =>
      isMobile ? swiperOptionsMobile.value : swiperOptions.value,
    )

    const updateBackground = (bkg) => {
      backgroundImage.value = bkg
    }

    onMounted(() => {
      document.body.style.overflow = 'hidden'
    })

    onUnmounted(() => {
      document.body.style.overflow = ''
    })

    return {
      modules: [FreeMode, Mousewheel, Pagination],
      backgroundImage,
      updateBackground,
      swiperOptionsMobile,
      swiperOptions: swiperOptionsToBind,
      isMobile,
    }
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.home-swiper {
  width: 100vw;
  height: 100vh;
}

.home-swiper__featured-view {
  position: relative;
  overflow: hidden;
}

.home-swiper__about-me-view {
  overflow: visible !important;
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
  @media (width<768px) {
    height: 90%;
  }
}

.blurred-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh !important;
  overflow: hidden;
  @media (width<768px) {
    height: 100vh !important;
  }
}

.swiper-pagination {
  @media (max-width: 768px) {
    display: none !important;
  }
  position: absolute;
  right: 20px;
  top: 40% !important;
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
