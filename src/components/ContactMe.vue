<template>
  <div class="contact-me">
    <div class="contact-me__container">
      <p class="contact-me__title">Contact Me</p>
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
      <div class="mt-10">
        <span class="contact-me__title mt-2">Mail Me</span>
        <div class="flex gap-4">
          <div class="form">
            <input v-model="name" type="text" name="name" autocomplete="off" placeholder="Your Name" required
              @input="validateName" />
            <label for="name" class="label-name"> </label>
          </div>
          <WarningModal :message="'Name must be between 3 and 20 characters'" :isOpen="showNameWarning"
            @close="showNameWarning = false" />
          <div class="form">
            <input v-model="email" type="email" name="email" autocomplete="off" placeholder="Your Email" required
              @input="validateEmail" />
            <label for="email" class="label-name"> </label>
          </div>
        </div>
        <WarningModal :message="'Invalid email address'" :isOpen="showEmailWarning" @close="showEmailWarning = false" />
        <div class="form">
          <input v-model="message" type="message" name="message" autocomplete="off" placeholder="Your Message"
            required />
          <label for="message" class="label-name"> </label>
        </div>
      </div>
      <WarningModal :message="'Invalid name and email inputs'" :isOpen="showWarning" @close="showWarning = false" />
      <SuccessModal :message="'Success'" :isOpen="showSuccess" @close="showSuccess = false" />
      <PortfolioButton class="mt-10" name="SEND" :isOperation="true" :defaultActive="true" @click="handleSubmit" />
      <div class="contact-me__links flex">
        <div>
          <a class="contact-me__links-info" href="https://www.facebook.com/profile.php?id=100000326287497"
            target="_blank">
            <img class="contact-me__links-icon" :src="facebookIcon" />
            <span class="contact-me__links-text">Facebook</span>
          </a>
        </div>
        <div>
          <a class="contact-me__links-info" href="https://www.instagram.com/george_kalogiannidis/" target="_blank">
            <img class="contact-me__links-icon" :src="instagramIcon" />
            <span class="contact-me__links-text">Instagram</span>
          </a>
        </div>
        <div>
          <a class="contact-me__links-info" href="https://www.youtube.com/@georgekalogiannidis" target="_blank">
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
import WarningModal from './common/WarningModal.vue'
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
      name: '',
      email: '',
      message: '',
      showNameWarning: false,
      showEmailWarning: false,
      showWarning: false,
      showSuccess: false,
    }
  },
  methods: {
    validateName() {
      const isValid = this.name.length <= 20 && this.name.length > 2;
      return isValid;
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(this.email);
      return isValid;
    },
    handleSubmit() {
      const isNameValid = this.validateName();
      const isEmailValid = this.validateEmail();

      this.showNameWarning = !isNameValid;
      this.showEmailWarning = !isEmailValid;

      if (!isNameValid && !isEmailValid) {
        this.showWarning = true;
        this.showNameWarning = false;
        this.showEmailWarning = false;
        return;
      }

      if (!isNameValid || !isEmailValid) {
        return;
      }

      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      fetch('https://formspree.io/f/mwplvljl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          this.showSuccess = true;
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch((error) => {
          alert('Error sending message, please try again later.');
          console.error('Error:', error);
        });
    },
  },
  components: {
    LeafletMap,
    PortfolioButton,
    WarningModal,
  },
}
</script>
<style lang="scss" scoped>
.contact-me {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: 0.8em;
  height: 86svh;



  @media (width < 768px) {
    display: flex;
    align-items: center;
    height: 100%;
    width: 85%;
    margin-top: 2em;
    font-size: 1em;
  }

  &__container {
    font-size: 1.5em;

    @media(max-width: 1024px) {
      font-size: 0.8em;
    }

    @media (max-width: 1279px) {
      font-size: 1.1em;
    }

    @media(width < 857px) {
      font-size: 0.75em;
    }

    @media (width < 768px) {
      font-size: 1em;
      margin-left: 1.5em;
    }
  }

  &__title {
    font-size: 1.6em;
    font-weight: 600;
    color: white;
    margin-bottom: 1em;
  }

  &__map {
    margin-left: 2em;
    z-index: 0;
    max-width: 500px;

    @media(max-width:768px) {
      margin-left: 4em;
      margin-top: 2em;
    }

    @media(max-width: 1024px) {
      min-width: 40%;
    }

    @media (min-width:768px) {
      height: auto;
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

  .form input:focus+.label-name::after,
  .form input:valid+.label-name::after {
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
        right: 6em;
        width: 10px;
        height: 0.5px;
        background: #c48f56;

        @media (width < 768px) {
          right: 5.5em;
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
