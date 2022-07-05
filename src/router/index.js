import { createRouter, createWebHistory } from "vue-router";
import GameComponent from "../views/GameComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "game",
      component: GameComponent,
    },
  ],
});

export default router;
