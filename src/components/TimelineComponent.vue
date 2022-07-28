<template>
  <div
    class="timelineItem"
    :style="{
      left: left,
      top: '3px',
    }"
    align="center"
    v-if="char?.name && char?.hpCurrent > 0"
  >
    <font-awesome-icon icon="fa-solid fa-location-pin" :size="'3x'" />
    <img
      class="timeline-portrait"
      :src="`./timelines/${char?.name.toLowerCase()}.png`"
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
