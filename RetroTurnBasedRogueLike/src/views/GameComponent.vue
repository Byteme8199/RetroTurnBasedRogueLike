<template>
  <main>
    <div class="timeline">
      <span class="timeline-line"></span>
      <span v-for="(char, index) in game.getTimeline" :key="index">
        <timeline-component :char="char" />
      </span>
    </div>
    <div class="battlefield">
      <span v-for="(enemy, index) in game.getActiveEnemies" :key="index">
        <enemy-component :char="enemy" />
      </span>
      <span v-for="(char, index) in game.getActiveCharacters" :key="index">
        <character-component :char="char" />
      </span>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useGlobalStore } from "../stores/global";
import CharacterComponent from "../components/CharacterComponent.vue";
import EnemyComponent from "../components/EnemyComponent.vue";
import TimelineComponent from "../components/TimelineComponent.vue";

export default defineComponent({
  components: {
    CharacterComponent,
    EnemyComponent,
    TimelineComponent,
  },
  setup() {
    const game = useGlobalStore();
    const gameName = ref("");

    // @ts-ignore
    window.stores = { game };

    setInterval(game.updateGame, 100);

    return {
      game,
      gameName,
    };
  },
});
</script>

<style scoped>
.timeline {
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid;
  background: rgb(0, 0, 42);
  background: linear-gradient(0deg, rgba(0, 0, 42, 1) 0%, rgba(110, 108, 202, 1) 100%);
}
.timeline-line {
  height: 1px;
  background-color: white;
  display: block;
  margin: 20px 5px;
}
.battlefield {
  width: 960px;
  height: 590px;
  background-image: url(../battlefields/ff6.png);
  background-position: -2112px -5184px;
  position: absolute;
}
</style>
