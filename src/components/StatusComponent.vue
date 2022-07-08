<template>
  <div class="status" :class="{ bb: index !== 3 }">
    <div v-if="char.name">
      {{ char?.name }}<br />
      <div class="light-grey round-xlarge">
        <div
          class="container red round-xlarge"
          :style="{ width: `${(char?.hpCurrent / char?.hpMax) * 100}%` }"
        ></div>
      </div>
      <div class="light-grey round-xlarge">
        <div
          class="container blue round-xlarge"
          :style="{ width: `${(char?.mpCurrent / char?.mpMax) * 100}%` }"
        ></div>
      </div>
      <div class="light-grey round-xlarge">
        <div
          class="container green round-xlarge"
          :style="{ width: `${(char?.nextTurn / 100) * 100}%` }"
        ></div>
      </div>
    </div>
    <div v-else>Empty</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    char: { type: Object },
    index: Number,
  },
  methods: {},
});
</script>
<style scoped>
.bb {
  border-bottom: 1px solid white;
}
.light-grey {
  color: #dedede !important;
  background-color: #f1f1f1 !important;
  height: 6px;
  width: 100%;
  margin: 6px 0px;
}
.round-xlarge {
  border-radius: 6px;
}
.container {
  height: 6px;
  box-shadow: inset 0px 0px 0px 1px white;
  border-radius: 6px;
}
.blue,
.hover-blue:hover {
  color: #fff !important;
  background-color: #0000ff !important;
}

.red,
.hover-red:hover {
  color: #fff !important;
  background-color: #ff0000 !important;
}

.green,
.hover-green:hover {
  color: #fff !important;
  background-color: #0f0 !important;
}
.status {
  height: 126px;
  width: 78px;
  padding: 10px;
  border-left: 1px solid white;
  border-right: 1px solid white;
  background: linear-gradient(0deg, rgba(0, 0, 42, 1) 0%, rgba(110, 108, 202, 1) 100%);
}
</style>
