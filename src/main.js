import "./assets/main.css";
import { isMobileUse } from "./utils/utils";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faVolumeUp,
  faVolumeMute,
  faPlay,
  faPause,
  faClose,
  faCaretLeft,
  faCaretRight,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faLocationDot,
  faXmark,
  faTriangleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faArrowLeft,
  faArrowRight,
  faVolumeUp,
  faVolumeMute,
  faPlay,
  faPause,
  faClose,
  faCaretLeft,
  faCaretRight,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faLocationDot,
  faXmark,
  faTriangleExclamation,
  faCircleCheck
);

const app = createApp(App);

app.provide("isMobile", isMobileUse());
app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
