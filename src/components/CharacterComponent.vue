<template>
  <div
    v-if="char?.name"
    class="character-sprite sharp"
    :class="{ flip: char?.reverse }"
    :id="`pos${char?.pos}`"
    :style="{
      right: char?.isBackrow ? '10px' : '40px',
      top: char?.pos * 20 + 85 + 'px',
      background: `url(./sprites/${char?.fileName}/${char?.fileName}.png)  no-repeat`,
      zoom: char?.offset ? char?.offset : 4,
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
