<template>
  <main>
    <div style="padding: 20px; display: flex">
      <div class="inputForm">
        <div class="inputRow">
          <label class="niceLabel" ref="X">X</label>
          <input id="X" class="niceInput" v-model="frame.x" type="number" label="x" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="y">Y</label>
          <input id="y" class="niceInput" v-model="frame.y" type="number" label="y" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="Width">Width</label
          ><input
            id="Width"
            class="niceInput"
            v-model="frame.w"
            type="number"
            label="w"
          />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="height">Height</label
          ><input
            id="height"
            class="niceInput"
            v-model="frame.h"
            type="number"
            label="h"
          />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="XOffset">X-Offset</label
          ><input
            id="XOffset"
            class="niceInput"
            v-model="frame.xo"
            type="number"
            label="xo"
          />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="YOffset">Y-Offset</label
          ><input
            id="YOffset"
            class="niceInput"
            v-model="frame.yo"
            type="number"
            label="yo"
          />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="filter">Filter</label
          ><input id="filter" class="niceInput" v-model="frame.filter" label="filter" />
        </div>
        <div class="inputRow">
          <button class="niceButton" @click="saveFrame" v-if="!selectedFrame">
            Add New Frame
          </button>
        </div>
      </div>
      <div class="frameContainer">
        <div
          class="frameview sharp"
          :class="{ flip: char?.reverse }"
          :id="`frame${char?.pos}`"
          :style="{
            background: `url(./sprites/${char?.name}/${char?.name}.png)  no-repeat`,
            zoom: char?.offset ? char?.offset : 4,
            backgroundPosition: `-${frame.x}px -${frame.y}px`,
            width: frame.w + 'px',
            height: frame.h + 'px',
            right: frame.xo + 20 + 'px',
            top: frame.yo + 20 + 'px',
            filter: frame.filter ? frame.filter : '',
          }"
        ></div>
      </div>
      <div class="exportContainer">
        <textarea class="full" v-model="importJSONdata" id="export"></textarea>
        <button class="niceButton" @click="importJSON">Import/Overwrite</button>
      </div>
    </div>
    <div class="row" style="display: flex">
      <div v-for="(newFrame, index) in frames" :key="index">
        <div
          v-if="char?.name"
          class="frame sharp"
          :class="{ flip: char?.reverse, selected: index === selectedFrame }"
          :id="`fr${char?.pos}`"
          @click="selectFrame(index)"
          :style="{
            marginRight: newFrame.xo + 'px',
            marginTop: newFrame.yo + 'px',
            background: `url(./sprites/${char?.name}/${char?.name}.png)  no-repeat`,
            zoom: char?.offset ? char?.offset : 4,
            backgroundPosition: `-${newFrame.x}px -${newFrame.y}px`,
            width: newFrame.w + 'px',
            height: newFrame.h + 'px',
            filter: newFrame.filter ? newFrame.filter : '',
          }"
        ></div>
        <br />
        <button v-if="index === selectedFrame" class="niceButton" @click="deleteFrame">
          Delete
        </button>
        <button v-if="index === selectedFrame" class="niceButton" @click="copyFrame">
          Copy
        </button>
      </div>
    </div>
    <div class="row" v-if="frames.length > 1">
      <div class="frameContainer">
        <div
          class="frameview sharp"
          :class="{ flip: char?.reverse }"
          :id="`pos${char?.pos}`"
        ></div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useGlobalStore } from "../stores/global";

export default defineComponent({
  name: "animationCreator",
  setup: () => {
    const game = useGlobalStore();
    const char = ref(game.characters[0]);
    const selectedFrame = ref(0);
    const frames = ref([]);
    const frame = ref({
      x: 229,
      y: 228,
      w: 25,
      h: 30,
      xo: 0,
      yo: 0,
      filter: null,
      repeat: true,
    });
    const importJSONdata = ref("");

    function framesExpanded() {
      this.importJSONdata = JSON.stringify(this.frames);
    }

    function importJSON() {
      if (this.importJSONdata) {
        let data = JSON.parse(this.importJSONdata.replace(" ", ""));
        this.frames = [];
        data.map((m) => {
          this.frames.push({ ...m });
        });
        this.animateSprite(this.char, this.frames);
      }
    }

    function saveFrame() {
      this.frames.push({ ...this.frame });
      this.animateSprite(this.char, this.frames);
      this.framesExpanded();
    }

    function deleteFrame() {
      this.frames.splice(this.selectedFrame, 1);
      this.framesExpanded();
    }

    function copyFrame() {
      this.frames.push({ ...this.frame });
      this.framesExpanded();
    }

    function selectFrame(index) {
      this.selectedFrame = index;
      this.frame = this.frames[index];
      this.framesExpanded();
    }

    function animateSprite(char, frames) {
      let index = 0;
      var anim = setInterval(() => {
        let el = document.getElementById("pos" + char.pos);
        let fr = frames[index];
        if (el) {
          el.style.background = `url(./sprites/${char?.name}/${char?.name}.png)  no-repeat`;
          el.style.zoom = char?.offset ? char?.offset : 4;
          el.style.backgroundPosition = `-${fr.x}px -${fr.y}px`;
          el.style.width = fr.w + "px";
          el.style.height = fr.h + "px";
          el.style.right = fr.xo + 20 + "px";
          el.style.top = fr.yo + 20 + "px";
          el.style.filter = fr?.filter ? fr.filter : "";
        }
        if (index < frames.length - 1) {
          index++;
        } else {
          if (fr?.repeat) {
            index = 0;
          } else {
            clearInterval(anim);
          }
        }
      }, 150);
    }

    return {
      game,
      char,
      selectedFrame,
      frames,
      framesExpanded,
      frame,
      saveFrame,
      deleteFrame,
      selectFrame,
      copyFrame,
      animateSprite,
      importJSON,
      importJSONdata,
    };
  },
});
</script>

<style scoped>
.frameContainer {
  width: 600px;
  height: 243px;
  border: 2px solid white;
  position: relative;
}

.exportContainer {
  width: 600px;
  height: 243px;
  border: 2px solid white;
  position: relative;
}
.full {
  width: 100%;
  height: 100%;
  color: black;
}
.selected {
  border: 1px solid black;
}
.inputForm {
  padding: 15px;
  border: 3px solid white;
  border-radius: 5px;
  max-width: 170px;
  background-color: darkgrey;
}
.inputRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.niceLabel {
  width: 80px;
  display: block;
  margin-right: 10px;
}
.niceInput {
  border-radius: 4px;
  margin: 3px;
  max-width: 50px;
}
main {
  background-color: lightgray;
  margin: 20px;
}

.frameview {
  border: 1px solid black;
  position: absolute;
}

.row {
  width: 100%;
  display: block;
  border-top: 1px solid black;
  padding: 10px;
  margin-top: 10px;
}
</style>
