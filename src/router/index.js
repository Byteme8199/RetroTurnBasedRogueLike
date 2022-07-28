import { createRouter, createWebHistory } from "vue-router";
import GameView from "../views/GameView.vue";
import AnimView from "../views/AnimView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "game",
      component: GameView,
    },
    {
      path: "/RetroTurnBasedRogueLike/anims",
      name: "anims",
      component: AnimView,
    },
  ],
});

export default router;
