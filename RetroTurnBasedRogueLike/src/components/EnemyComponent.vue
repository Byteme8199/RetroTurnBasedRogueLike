<template>
  <div
    v-if="char?.pos !== null"
    class="character-sprite"
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
    :style="{
      left:
        char?.pos % 2
          ? `${150 + (char?.pos + 1) * 20}px`
          : `${0 + (char?.pos + 1) * 20}px`,
      top:
        char?.pos % 2
          ? (char?.pos / 2 + 1) * 75 + 40 + 'px'
          : (char?.pos / 2 + 1) * 75 + 130 + 'px',
    }"
  >
    <img :src="`./timelines/${char?.name}.png`" style="zoom: 4" class="sharp" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    char: { type: Object },
  },
  methods: {},
});
</script>
<style scoped>
.character-sprite {
  position: absolute;
}
</style>
