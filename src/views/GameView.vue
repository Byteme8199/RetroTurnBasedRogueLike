<template>
  <main>
    <div v-if="game.getMode === 'game'">
      <div class="timeline">
        <span class="timeline-line"></span>
        <timeline-component
          v-for="(char, index) in game.getActiveCharacters"
          :key="index"
          :char="char"
        />
        <enemy-timeline-component
          v-for="(char, index) in game.getActiveEnemies"
          :key="index"
          :char="char"
        />
      </div>
      <div class="battlefield">
        <enemy-component
          :enemy="enemy"
          v-for="(enemy, index) in game.getActiveEnemies"
          :key="index"
          :index="index"
        />
        <character-component
          :char="char"
          v-for="(char, index) in game.getActiveCharacters"
          :key="index"
        />
      </div>
      <div class="statusbar">
        <status-component
          :char="char"
          v-for="(char, index) in game.getActiveCharacters"
          :key="index"
          :index="index"
        />
      </div>
      <div class="menu">
        <div class="actions">
          <div v-for="action in game.getActions" :key="action.label" class="action">
            <font-awesome-icon
              icon="fas fa-hand-point-right"
              class="pointer"
              v-if="action?.label === game.getSelectedAction?.label"
            />
            {{ action.label }}
          </div>
        </div>
        <div class="characterSelect">
          <div
            v-for="(char, index) in game.getAvailableCharacters"
            :key="index"
            class="charSelect-portrait"
            :style="{
              borderColor: game.act.selectedCharacter === char ? 'red' : 'white',
            }"
          >
            <img
              :class="{ disabled: !char?.pos && char?.pos !== 0 }"
              class="sharp"
              :src="`./timelines/${char?.name.toLowerCase()}.png`"
              width="64"
              height="64"
            />
          </div>
        </div>
      </div>
      <div id="debug">
        <div v-for="(log, index) in game.getLogs" :key="index">
          <div class="debugLog">
            <span
              :class="{
                redText: log.level === 'Error',
                greenText: log.level === 'Game',
                yellowText: log.level === 'Log',
              }"
              >{{ log.level }}</span
            >
            {{ log.text }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="game.getMode === 'anim'">
      <animation-component />
    </div>
  </main>
</template>

<script lang="ts">
import { useKeypress } from "vue3-keypress";
import { defineComponent, ref, onMounted } from "vue";
import { useGlobalStore } from "../stores/global";
import CharacterComponent from "../components/CharacterComponent.vue";
import EnemyComponent from "../components/EnemyComponent.vue";
import TimelineComponent from "../components/TimelineComponent.vue";
import EnemyTimelineComponent from "../components/EnemyTimelineComponent.vue";
import StatusComponent from "../components/StatusComponent.vue";
import AnimationComponent from "../components/AnimationComponent.vue";

export default defineComponent({
  components: {
    CharacterComponent,
    EnemyComponent,
    TimelineComponent,
    EnemyTimelineComponent,
    StatusComponent,
    AnimationComponent,
  },
  setup() {
    const game = useGlobalStore();
    const gameName = ref("");

    // @ts-ignore
    window.stores = { game };

    useKeypress({
      keyEvent: "keydown",
      keyBinds: [
        {
          keyCode: "space",
          success: game.pause,
        },
      ],
    });

    useKeypress({
      keyEvent: "keydown",
      keyBinds: [
        {
          keyCode: "down",
          success: game.selectNextAction,
        },
      ],
    });

    useKeypress({
      keyEvent: "keydown",
      keyBinds: [
        {
          keyCode: "up",
          success: game.selectPreviousAction,
        },
      ],
    });

    useKeypress({
      keyEvent: "keydown",
      keyBinds: [
        {
          keyCode: "enter",
          success: game.engageAction,
        },
      ],
    });

    useKeypress({
      keyEvent: "keydown",
      keyBinds: [
        {
          keyCode: 113,
          success: game.setModeAnim,
        },
      ],
    });

    useKeypress({
      keyEvent: "keydown",
      keyBinds: [
        {
          keyCode: 112,
          success: game.setModeGame,
        },
      ],
    });

    onMounted(() => {
      game.initGame();
    });

    return {
      game,
      gameName,
    };
  },
});
</script>
