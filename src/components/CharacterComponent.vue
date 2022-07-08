<template>
  <div
    v-if="char?.name"
    class="character-sprite"
    :style="{
      right: char?.isBackrow ? '20px' : '80px',
      top: (char?.pos + 1) * 80 + 160 + 'px',
    }"
  >
    <img
      :src="`./sprites/${char?.name}/${char?.name}.png`"
      :class="{ flip: char?.reverse }"
      :style="{ zoom: char?.offset ? char?.offset : 4 }"
      class="sharp"
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
