<template>
  <span
    class="timelineItem"
    :style="{
      left: left,
      top: char?.isRecruited ? '5px' : '45px',
    }"
    align="center"
  >
    <font-awesome-icon
      icon="fa-solid fa-location-pin"
      :size="'2x'"
      v-if="char?.isRecruited"
    />
    <font-awesome-icon
      icon="fa-solid fa-location-pin"
      :rotation="180"
      :size="'2x'"
      v-if="!char?.isRecruited"
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
      :class="{
        'timeline-portrait': char?.isRecruited,
        'timeline-portrait-enemy': !char?.isRecruited,
      }"
      :src="`./timelines/${char?.name}.png`"
      width="16"
      height="16"
    />
  </span>
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
<style scoped>
.timelineItem {
  position: absolute;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 42, 0.45));
}
.timeline-portrait {
  position: absolute;
  top: 5px;
  left: 3px;
}
.timeline-portrait-enemy {
  position: absolute;
  top: 10px;
  left: 4px;
}
</style>
