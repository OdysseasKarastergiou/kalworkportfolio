<template>
  <div class="contact-me">
    <p v-if="!isMobile" class="side__title">Contact me</p>
    <div class="contact-me__container">
      <p class="contact-me__title">CONTACT ME</p>
      <div class="contact-me__info flex">
        <img class="contact-me__info-icon" :src="mobileIcon" />
        <div>
          <p>Phone:</p>
          <p class="contact-me__info-text">+30 6974 203701</p>
        </div>
      </div>
      <div class="contact-me__info flex">
        <img class="contact-me__info-icon" :src="emailIcon" />
        <div>
          <p>E-mail:</p>
          <p class="contact-me__info-text">gkal@mail.com</p>
        </div>
      </div>
      <div class="contact-me__info flex">
        <img class="contact-me__info-icon" :src="locationIcon" />
        <div>
          <p>Address:</p>
          <p class="contact-me__info-text">Thessaloniki, Greece</p>
        </div>
      </div>
      <div class="contact-me__links flex">
        <div>
          <a
            class="contact-me__links-info"
            href="https://www.facebook.com/profile.php?id=100000326287497"
            target="_blank"
          >
            <img class="contact-me__links-icon" :src="facebookIcon" />
            <span class="contact-me__links-text">Facebook</span>
          </a>
        </div>
        <div>
          <a
            class="contact-me__links-info"
            href="https://www.instagram.com/george_kalogiannidis/"
            target="_blank"
          >
            <img class="contact-me__links-icon" :src="instagramIcon" />
            <span class="contact-me__links-text">Instagram</span>
          </a>
        </div>
        <div>
          <a
            class="contact-me__links-info"
            href="https://www.youtube.com/@georgekalogiannidis"
            target="_blank"
          >
            <img class="contact-me__links-icon" :src="youtubeIcon" />
            <span class="contact-me__links-text">Youtube</span>
          </a>
        </div>
      </div>
    </div>
    <LeafletMap class="contact-me__map" />
  </div>
</template>
<script>
import MobileIcon from '../../assets/mobileIcon.svg'
import EmailIcon from '../../assets/emailIcon.svg'
import LocationIcon from '../../assets/locationIcon.svg'
import FacebookIcon from '../../assets/facebookIcon.svg'
import InstagramIcon from '../../assets/instagramIcon.svg'
import YoutubeIcon from '../../assets/youtubeIcon.svg'
import LeafletMap from '../LeafletMap.vue'
import { isMobileUse } from '@/utils/utils'
export default {
  name: 'ContactMeView',
  setup() {
    const isMobile = isMobileUse().value

    return {
      isMobile,
    }
  },
  data() {
    return {
      mobileIcon: MobileIcon,
      emailIcon: EmailIcon,
      locationIcon: LocationIcon,
      facebookIcon: FacebookIcon,
      youtubeIcon: YoutubeIcon,
      instagramIcon: InstagramIcon,
    }
  },
  components: {
    LeafletMap,
  },
}
</script>
<style lang="scss" scoped>
.contact-me {
  display: flex;
  gap: 2em;
  justify-content: center;
  @media (width < 768px) {
    display: flex;
    flex-direction: column;
  }
  &__container {
    font-size: 1.5em;
    @media (width < 768px) {
      font-size: 1em;
    }
  }
  &__title {
    font-size: 1.6em;
    color: white;
    margin-bottom: 1em;
  }
  &__map {
    margin-left: 2em;
    min-width: 100%;
    @media (width < 768px) {
      margin-left: 0;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;
    &-text {
      color: white;
    }
    &-icon {
      margin-right: 1em;
      padding-left: 2px;
      color: #c48f56;
      width: 26px;
      height: 26px;
    }
  }
  &__links {
    margin-top: 2em;
    gap: 4em;
    &-info {
      display: flex;
      align-items: center;
      gap: 0.5em;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 5em;
        width: 10px;
        height: 0.5px;
        background: #c48f56;
        @media (width< 768px) {
          right: 6em;
        }
      }
    }
    &-text {
      color: white;
    }
    &-icon {
      width: 15px;
      height: 15px;
    }
  }
  .side__title {
    transform: rotate(270deg);
    position: absolute;
    top: 58%;
    left: 0;
    color: white;
    &::after {
      content: '';
      width: 40%;
      height: 1px;
      background: #c48f56;
      position: absolute;
      top: 50%;
      left: 5.5em;
    }
  }
}
</style>
