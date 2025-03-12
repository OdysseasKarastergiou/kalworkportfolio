import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePageView.vue')
const AboutMe = () => import('../components/AboutMe.vue')
const Videography = () => import('../components/VideographyCategory.vue')
const PhotographyView = () => import('../components/PhotographyView.vue')

// Lazy load Photography subcategories
const OutdoorActivitiesView = () => import('../components/Photography/OutdoorActivitiesView.vue')
const PodcastView = () => import('../components/Photography/PodcastView.vue')
const ThessalonikiView = () => import('../components/Photography/ThessalonikiView.vue')
const BorovetsView = () => import('../components/Photography/BorovetsView.vue')
const DolomitesView = () => import('../components/Photography/DolomitesView.vue')

// Lazy load Graphics
const GraphicsView = () => import('../components/GraphicsView.vue')
const ExplosivoView = () => import('../components/Graphics/ExplosivoView.vue')
const SportsView = () => import('../components/Graphics/SportsView.vue')

// Lazy load Videography
const VideographyView = () => import('../components/Videography/VideographyView.vue')
const DroneView = () => import('../components/Videography/DroneView.vue')
const CinematicView = () => import('../components/Videography/CinematicView.vue')
const SnowboardView = () => import('../components/Videography/SnowboardView.vue')
const PodcastVideoView = () => import('../components/Videography/PodcastVideoView.vue')

const ContactMe = () => import('../components/ContactMe.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'homePage', component: HomePage },
    { path: '/aboutMe', name: 'aboutMe', component: AboutMe },
    { path: '/videography', name: 'videography', component: Videography },
    { path: '/photography', name: 'photographyView', component: PhotographyView },
    { path: '/photography/outdoor', name: 'outdoor', component: OutdoorActivitiesView },
    { path: '/photography/podcast', name: 'podcast', component: PodcastView },
    { path: '/photography/thessaloniki', name: 'thessaloniki', component: ThessalonikiView },
    { path: '/photography/borovets', name: 'borovets', component: BorovetsView },
    { path: '/photography/dolomites', name: 'dolomites', component: DolomitesView },
    { path: '/graphics', name: 'Graphics', component: GraphicsView },
    { path: '/graphics/explosivo', name: 'Explosivo', component: ExplosivoView },
    { path: '/graphics/sports', name: 'Sports', component: SportsView },
    { path: '/contact', name: 'contactMe', component: ContactMe },
    { path: '/videography/all', name: 'VideographyView', component: VideographyView },
    { path: '/videography/drone', name: 'drone', component: DroneView },
    { path: '/videography/cinematic', name: 'cinematic', component: CinematicView },
    { path: '/videography/snowboard', name: 'snowboard', component: SnowboardView },
    { path: '/videography/podcast', name: 'podcastVideo', component: PodcastVideoView },
  ],
})

export default router
