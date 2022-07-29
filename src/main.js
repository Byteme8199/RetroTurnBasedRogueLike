import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAngleRight,
  faAngleLeft,
  faCopy,
  faTrash,
  faHandPointRight,
  faLocationPin,
  faPlay,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faLocationPin);
library.add(faHandPointRight);
library.add(faTrash);
library.add(faCopy);
library.add(faAngleLeft);
library.add(faAngleRight);
library.add(faPlay);
library.add(faStop);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
