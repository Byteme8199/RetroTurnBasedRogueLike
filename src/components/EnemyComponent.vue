<template>
  <div
    v-if="enemy?.pos !== null"
    class="enemy-sprite"
    :class="{
      blink: enemy?.nextTurn >= 100,
      pos0: enemy?.pos === 0,
      pos1: enemy?.pos === 1,
      pos2: enemy?.pos === 2,
      pos3: enemy?.pos === 3,
      pos4: enemy?.pos === 4,
      pos5: enemy?.pos === 5,
      pos6: enemy?.pos === 6,
      pos7: enemy?.pos === 7,
    }"
    :style="{
      left:
        enemy?.pos % 2
          ? `${150 + (enemy?.pos + 1) * 20}px`
          : `${0 + (enemy?.pos + 1) * 20}px`,
      top:
        enemy?.pos % 2
          ? (enemy?.pos / 2 + 1) * 75 + 40 + 'px'
          : (enemy?.pos / 2 + 1) * 75 + 130 + 'px',
    }"
  >
    <img
      :src="`./timelines/${enemy?.sprite}.png`"
      style="zoom: 4"
      class="sharp"
      :class="enemy?.filter"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    enemy: Object,
    index: Number,
  },
  methods: {},
});
</script>
<style scoped>
.enemy-sprite {
  position: absolute;
}
.redShift {
  filter: hue-rotate(80deg);
}
</style>
