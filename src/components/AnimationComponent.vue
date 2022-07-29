<template>
  <div class="anim-bg">
    <div style="padding: 20px; display: flex">
      <div class="inputForm">
        <div class="inputRow">
          <label class="niceLabel" ref="X">X</label>
          <input id="X" class="niceInput" v-model="frame.x" type="number" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="y">Y</label>
          <input id="y" class="niceInput" v-model="frame.y" type="number" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="Width">Width</label
          ><input id="Width" class="niceInput" v-model="frame.w" type="number" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="height">Height</label
          ><input id="height" class="niceInput" v-model="frame.h" type="number" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="XOffset">X-Offset</label
          ><input id="XOffset" class="niceInput" v-model="frame.xo" type="number" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="YOffset">Y-Offset</label
          ><input id="YOffset" class="niceInput" v-model="frame.yo" type="number" />
        </div>
        <div class="inputRow">
          <label class="niceLabel" ref="filter">Filter</label
          ><input id="filter" class="niceInput" v-model="frame.filter" />
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
            background: `url(./sprites/${char?.name.toLowerCase()}/${char?.name.toLowerCase()}.png)  no-repeat`,
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
            background: `url(./sprites/${char?.name.toLowerCase()}/${char?.name.toLowerCase()}.png)  no-repeat`,
            zoom: char?.offset ? char?.offset : 4,
            backgroundPosition: `-${newFrame.x}px -${newFrame.y}px`,
            width: newFrame.w + 'px',
            height: newFrame.h + 'px',
            filter: newFrame.filter ? newFrame.filter : '',
          }"
        ></div>
        <br />
        <button v-if="index === selectedFrame" class="niceButton" @click="moveFrameLeft">
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </button>
        <button v-if="index === selectedFrame" class="niceButton" @click="deleteFrame">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
        <button v-if="index === selectedFrame" class="niceButton" @click="copyFrame">
          <font-awesome-icon icon="fa-solid fa-copy" />
        </button>
        <button v-if="index === selectedFrame" class="niceButton" @click="moveFrameRight">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
    <div class="row" v-if="frames.length > 1">
      <div class="frameContainer">
        <div class="sharp" :class="{ flip: char?.reverse }" :id="`pos${char?.pos}`"></div>
      </div>
      <label class="niceLabel" ref="Speed">Speed</label
      ><input
        id="Speed"
        class="niceInput"
        v-model="speed"
        type="number"
        min="100"
        max="1000"
      />
      <button class="niceButton" @click="stopAnim">
        <font-awesome-icon icon="fa-solid fa-stop" />
      </button>
      <button class="niceButton" @click="playAnim">
        <font-awesome-icon icon="fa-solid fa-play" />
      </button>
    </div>
  </div>
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
    const speed = ref(150);
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

    let anim = "";

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
        this.framesExpanded();
      }
    }

    function playAnim() {
      this.animateSprite(this.char, this.frames);
    }

    function stopAnim() {
      clearInterval(this.anim);
    }

    function saveFrame() {
      this.frames.push({ ...this.frame });
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

    function moveFrameLeft() {
      let rightFrame = this.selectedFrame - 1 <= 0 ? 0 : this.selectedFrame - 1;
      arraymove(this.frames, this.selectedFrame, rightFrame);
      this.selectedFrame = rightFrame;
    }

    function moveFrameRight() {
      let rightFrame =
        this.selectedFrame + 1 >= this.frames.length
          ? this.frames.length
          : this.selectedFrame + 1;
      arraymove(this.frames, this.selectedFrame, rightFrame);
      this.selectedFrame = rightFrame;
    }

    function arraymove(arr, fromIndex, toIndex) {
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    }

    function selectFrame(index) {
      this.selectedFrame = index;
      this.frame = this.frames[index];
      this.framesExpanded();
    }

    function animateSprite(char, frames) {
      let index = 0;
      this.anim = setInterval(() => {
        let el = document.getElementById("pos" + char.pos);
        let fr = frames[index];
        if (el) {
          el.style.background = `url(./sprites/${char?.name.toLowerCase()}/${char?.name.toLowerCase()}.png)  no-repeat`;
          el.style.zoom = char?.offset ? char?.offset : 4;
          el.style.backgroundPosition = `-${fr.x}px -${fr.y}px`;
          el.style.width = fr.w + "px";
          el.style.height = fr.h + "px";
          el.style.right = fr.xo + 20 + "px";
          el.style.top = fr.yo + 20 + "px";
          el.style.filter = fr?.filter ? fr.filter : "";
          el.style.position = "absolute";
        }
        if (index < frames.length - 1) {
          index++;
        } else {
          if (fr?.repeat) {
            index = 0;
          } else {
            clearInterval(this.anim);
          }
        }
      }, this.speed);
    }

    return {
      game,
      char,
      selectedFrame,
      frames,
      framesExpanded,
      frame,
      speed,
      saveFrame,
      deleteFrame,
      selectFrame,
      moveFrameRight,
      moveFrameLeft,
      copyFrame,
      animateSprite,
      importJSON,
      importJSONdata,
      playAnim,
      stopAnim,
    };
  },
});
</script>

<style scoped>
.abs {
  position: "absolute";
}
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
