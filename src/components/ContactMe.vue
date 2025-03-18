<template>
  <div class="contact-me">
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
          <p class="contact-me__info-text">kre8tivefilmstudio@gmail.com</p>
        </div>
      </div>
      <div class="contact-me__info flex">
        <img class="contact-me__info-icon" :src="locationIcon" />
        <div>
          <p>Address:</p>
          <p class="contact-me__info-text">Thessaloniki, Greece</p>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <div class="form">
            <input type="text" name="name" autocomplete="off" placeholder="Your Name" required />
            <label for="name" class="label-name"> </label>
          </div>
          <div class="form">
            <input type="email" name="email" autocomplete="off" placeholder="Your Email" required />
            <label for="email" class="label-name"> </label>
          </div>
        </div>
        <div class="form">
          <input
            type="message"
            name="message"
            autocomplete="off"
            placeholder="Your Message"
            required
          />
          <label for="message" class="label-name"> </label>
        </div>
      </div>
      <PortfolioButton class="mt-10" name="SEND ->" :defaultActive="true" />
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
import MobileIcon from '../assets/mobileIcon.svg'
import EmailIcon from '../assets/emailIcon.svg'
import LocationIcon from '../assets/locationIcon.svg'
import FacebookIcon from '../assets/facebookIcon.svg'
import InstagramIcon from '../assets/instagramIcon.svg'
import YoutubeIcon from '../assets/youtubeIcon.svg'
import LeafletMap from './LeafletMap.vue'
import PortfolioButton from './common/PortfolioButton.vue'
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
    PortfolioButton,
  },
}
</script>
<style lang="scss" scoped>
.contact-me {
  display: flex;
  align-items: center;
  gap: 5em;
  width: 100%;
  max-width: 50rem;
  margin: 8em auto;
  justify-content: center;
  @media (width < 768px) {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-top: 2em;
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
    width: 50%;
    min-width: 450px;
    margin: 0 auto;
    display: block;
    z-index: 0;
    @media (width < 768px) {
      min-width: 300px;
    }
  }

  .form {
    width: 100%;
    position: relative;
    height: 60px;
    overflow: hidden;
  }

  .form input {
    width: 100%;
    height: 100%;
    color: #fff;
    padding-top: 20px;
    border: none;
  }
  .form label {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid white;
  }
  .form label::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #c48f56;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  .content-name {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-bottom: 5px;
    transition: all 0.3s ease;
  }
  .form input:focus {
    outline: none;
  }
  .form input:focus + .label-name::after,
  .form input:valid + .label-name::after {
    transform: translateX(0%);
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
        @media (width < 768px) {
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
}
</style>
