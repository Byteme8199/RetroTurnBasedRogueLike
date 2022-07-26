<template>
  <div
    class="timelineItem"
    :style="{
      left: left,
      top: '42px',
    }"
    align="center"
    v-if="char?.name"
  >
    <font-awesome-icon
      icon="fa-solid fa-location-pin"
      :rotation="180"
      :size="'3x'"
      :class="{
        blink: char?.nextTurn >= 100,
        pos0: char?.pos === 0,
        pos1: char?.pos === 1,
        pos2: char?.pos === 2,
        pos3: char?.pos === 3,
        pos4: char?.pos === 4,
        pos5: char?.pos === 5,
        pos6: char?.pos === 6,
        pos7: char?.pos === 7,
      }"
    />
    <img
      class="timeline-portrait-enemy"
      :src="`./timelines/${char?.sprite}.png`"
      width="16"
      height="16"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    char: { type: Object },
  },
  computed: {
    left() {
      let left = this.char?.nextTurn < 0 ? 0 : this.char?.nextTurn;
      left = left >= 98 ? 98 : left;
      return left + "%";
    },
  },
});
</script>
