<template>
  <div
    v-if="char?.name"
    class="character-sprite sharp"
    :id="`pos${char?.pos}`"
    :style="{
      right: char?.isBackrow ? '40px' : '120px',
      top: char?.pos * 65 + 300 + 'px',
      background: `url(./sprites/${char?.fileName}/${char?.fileName}.png)`,
      transform: `scale(${char?.offset})`,
    }"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    char: { type: Object },
  },
  methods: {
    focus() {
      this.$refs.button?.focus();
    },
  },
});
</script>
<style scoped>
.character-sprite {
  position: absolute;
}
</style>
