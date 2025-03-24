import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePageView.vue";
import AboutMe from "../components/AboutMe.vue";
import PhotographyView from "../components/PhotographyView.vue";
import OutdoorActivitiesView from "../components/Photography/OutdoorActivitiesView.vue";
import PodcastView from "../components/Photography/PodcastView.vue";
import MountOlympusView from "../components/Photography/MountOlympusView.vue";
import BorovetsView from "../components/Photography/BorovetsView.vue";
import GreeceU21View from "../components/Photography/GreeceU21View.vue";
import DolomitesView from "../components/Photography/DolomitesView.vue";
import ContactMe from "../components/ContactMe.vue";
import VideographyView from "../components/Videography/VideographyView.vue";
import DroneView from "../components/Videography/DroneView.vue";
import CinematicView from "../components/Videography/CinematicView.vue";
import SnowboardView from "../components/Videography/SnowboardView.vue";
import GraphicsView from "../components/GraphicsView.vue";
import ExplosivoView from "../components/Graphics/ExplosivoView.vue";
import SportsView from "../components/Graphics/SportsView.vue";
import PodcastVideoView from "../components/Videography/PodcastVideoView.vue";
import ReelsView from "../components/Videography/ReelsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomePage,
    },
    {
      path: "/aboutMe",
      name: "aboutMe",
      component: AboutMe,
    },
    {
      path: "/photography",
      name: "photographyView",
      component: PhotographyView,
    },
    {
      path: "/photography/outdoor",
      name: "outdoor",
      component: OutdoorActivitiesView,
    },
    {
      path: "/photography/podcast",
      name: "podcast",
      component: PodcastView,
    },
    {
      path: "/photography/mountolympus",
      name: "mountolympus",
      component: MountOlympusView,
    },
    {
      path: "/photography/borovets",
      name: "borovets",
      component: BorovetsView,
    },
    {
      path: "/photography/greeceU21",
      name: "GreeceU21",
      component: GreeceU21View,
    },
    {
      path: "/photography/dolomites",
      name: "dolomites",
      component: DolomitesView,
    },
    {
      path: "/graphics",
      name: "Graphics",
      component: GraphicsView,
    },
    {
      path: "/graphics/explosivo",
      name: "Explosivo",
      component: ExplosivoView,
    },
    {
      path: "/graphics/sports",
      name: "Sports",
      component: SportsView,
    },
    {
      path: "/contact",
      name: "contactMe",
      component: ContactMe,
    },
    {
      path: "/videography/all",
      name: "VideographyView",
      component: VideographyView,
    },
    {
      path: "/videography/drone",
      name: "drone",
      component: DroneView,
    },
    {
      path: "/videography/cinematic",
      name: "cinematic",
      component: CinematicView,
    },
    {
      path: "/videography/snowboard",
      name: "snowboard",
      component: SnowboardView,
    },
    {
      path: "/videography/podcast",
      name: "PodcastVideo",
      component: PodcastVideoView,
    },
    {
      path: "/videography/reels",
      name: "Reels",
      component: ReelsView,
    },
  ],
});

export default router;
