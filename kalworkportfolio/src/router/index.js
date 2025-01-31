import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePageView.vue'
import AboutMe from '../components/AboutMe.vue'
import ProjectPortfolio from '../components/ProjectPortfolio.vue'
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
      path: '/portfolio',
      name: 'portfolio',
      component: ProjectPortfolio,
    },
    {
      path: '/contact',
      name: 'contactMe',
      component: ContactMe,
    },
  ],
})

export default router
