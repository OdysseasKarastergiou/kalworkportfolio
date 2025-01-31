<template>
  <div class="contact-me">
    <p class="side__title">Contact me</p>
    <div class="">
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
          <p class="contact-me__info-text">Souroti, Spiti mama mpampa</p>
        </div>
      </div>
      <div class="contact-me__links flex">
        <div class="contact-me__links-info">
          <img class="contact-me__links-icon" :src="facebookIcon" />
          <p class="contact-me__links-text">facebook</p>
        </div>
        <div class="contact-me__links-info">
          <img class="contact-me__links-icon" :src="instagramIcon" />
          <p class="contact-me__links-text">instagram</p>
        </div>
        <div class="contact-me__links-info">
          <img class="contact-me__links-icon" :src="youtubeIcon" />
          <p class="contact-me__links-text">youtube</p>
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
import LeafletMap from '../LeafletMAp.vue'
export default {
  name: 'ContactMeView',
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
  justify-content: center;
  &__title {
    font-size: 1.6em;
    color: white;
    margin-bottom: 1em;
  }
  &__map {
    margin-left: 2em;
    min-width: 100%;
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
    gap: 1em;
    &-info {
      display: flex;
      align-items: center;
      gap: 0.5em;

      &::before {
        content: '';
        top: 50%;
        left: 0;
        width: 10px;
        height: 0.5px;
        background: #c48f56;
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
    top: 50%;
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
