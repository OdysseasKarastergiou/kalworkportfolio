import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePageView.vue'
import AboutMe from '../components/AboutMe.vue'
import Videography from '../components/VideographyCategory.vue'
import Photography from '../components/PhotographyCategory.vue'
import ContactMe from '../components/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe,
    },
    {
      path: '/videography',
      name: 'videography',
      component: Videography,
    },
    {
      path: '/photography',
      name: 'photography',
      component: Photography,
    },
    {
      path: '/contact',
      name: 'contactMe',
      component: ContactMe,
    },
  ],
})

export default router
