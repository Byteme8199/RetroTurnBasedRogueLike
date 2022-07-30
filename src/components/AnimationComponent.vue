<template>
  <div class="anim-bg">
    <div style="padding: 20px; display: flex">
      <div>
        <div class="inputForm">
          <div class="inputRow">
            <label class="inputLabel" ref="effectAnim">Character</label>
            <select id="effectAnim" class="inputInput" v-model="char">
              <option v-for="char in chars" :key="char.name" :value="char">
                {{ char.name }}
              </option>
            </select>
          </div>
          <div v-if="char !== null">
            <div class="inputRow">
              <label class="inputLabel" ref="X">X</label>
              <input id="X" class="inputInput" v-model="frame.x" type="number" />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="y">Y</label>
              <input id="y" class="inputInput" v-model="frame.y" type="number" />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="Width">Width</label
              ><input id="Width" class="inputInput" v-model="frame.w" type="number" />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="height">Height</label
              ><input id="height" class="inputInput" v-model="frame.h" type="number" />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="XOffset">X-Offset</label
              ><input id="XOffset" class="inputInput" v-model="frame.xo" type="number" />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="YOffset">Y-Offset</label
              ><input id="YOffset" class="inputInput" v-model="frame.yo" type="number" />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="filter">Filter</label
              ><input id="filter" class="inputInput" v-model="frame.filter" />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="effectAnim">Effect</label>
              <select id="effectAnim" class="inputInput" v-model="frame.effectAnim">
                <option value="">- None -</option>
                <option v-for="effect in effects" :key="effect">
                  {{ effect }}
                </option>
              </select>
            </div>
            <div class="inputRow" v-if="frame.effectAnim">
              <label class="inputLabel" ref="effectAnimX">Effect X</label
              ><input id="effectAnimX" class="inputInput" v-model="frame.effectAnimX" />
            </div>
            <div class="inputRow" v-if="frame.effectAnim">
              <label class="inputLabel" ref="effectAnimY">Effect Y</label
              ><input id="effectAnimY" class="inputInput" v-model="frame.effectAnimY" />
            </div>

            <div class="inputRow">
              <label class="inputLabel" ref="playSound">Sound</label>
              <select id="playSound" class="inputInput" v-model="frame.playSound">
                <option value="">- None -</option>
                <option v-for="sound in sounds" :key="sound">
                  {{ sound }}
                </option>
              </select>
            </div>

            <div class="inputRow">
              <label class="inputLabel" ref="repeat">Repeat</label
              ><input
                type="checkbox"
                id="repeat"
                class="inputInput"
                v-model="frame.repeat"
              />
            </div>
            <div class="inputRow">
              <button class="btn" @click="saveFrame">Add New Frame</button>
            </div>
            <div class="exportContainer">
              <textarea class="full" v-model="importJSONdata" id="export"></textarea>
              <button class="btn" @click="importJSON">Import/Overwrite</button>
            </div>
            <div class="exportContainer">
              <div class="flex-center">
                <label class="inputLabel" ref="Speed">Delay</label
                ><input
                  id="Speed"
                  class="inputInput"
                  v-model="speed"
                  type="number"
                  min="100"
                  max="1000"
                />
                <button class="btn" @click="stopAnim">
                  <font-awesome-icon icon="fa-solid fa-stop" />
                </button>
                <button class="btn" @click="playAnim">
                  <font-awesome-icon icon="fa-solid fa-play" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="char !== null">
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
        <div
          class="frameContainer"
          style="overflow-x: auto; display: flex; align-items: center; padding: 0px 10px"
        >
          <div v-for="(f, index) in frames" :key="index">
            <div
              class="frame sharp"
              :class="{
                flip: char?.reverse,
              }"
              :id="`fr${char?.pos}`"
              @click="selectFrame(index)"
              :style="{
                marginRight: f?.xo + 'px',
                marginTop: f?.yo + 'px',
                background: `url(./sprites/${char?.name.toLowerCase()}/${char?.name.toLowerCase()}.png)  no-repeat`,
                zoom: char?.offset ? char?.offset : 4,
                backgroundPosition: `-${f?.x}px -${f?.y}px`,
                width: f?.w + 'px',
                height: f?.h + 'px',
                filter: f?.filter ? f?.filter : '',
              }"
            ></div>
            <br />
            <div class="iconBtnContainer">
              <div v-if="index === selectedFrame" class="iconBtn" @click="moveFrameLeft">
                <font-awesome-icon icon="fa-solid fa-angle-left" class="icon" />
              </div>
              <div v-if="index === selectedFrame" class="iconBtn" @click="deleteFrame">
                <font-awesome-icon icon="fa-solid fa-trash" class="icon" />
              </div>
              <div v-if="index === selectedFrame" class="iconBtn" @click="copyFrame">
                <font-awesome-icon icon="fa-solid fa-copy" class="icon" />
              </div>
              <div v-if="index === selectedFrame" class="iconBtn" @click="moveFrameRight">
                <font-awesome-icon icon="fa-solid fa-angle-right" class="icon" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="frameContainer">
            <div
              class="sharp"
              :class="{ flip: char?.reverse }"
              :id="`pos${char?.pos}`"
            ></div>
          </div>
        </div>
      </div>
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
    const selectedFrame = ref(0);
    const speed = ref(150);
    const frames = ref([]);
    const chars = ref(game.characters);
    const char = ref(null);
    const frame = ref({
      x: 0,
      y: 0,
      w: 40,
      h: 40,
      xo: 0,
      yo: 0,
      filter: null,
      repeat: true,
      effectAnim: null,
      effectAnimX: null,
      effectAnimY: null,
      playSound: null,
    });
    const importJSONdata = ref("");
    const sounds = ref(["frog_jump", "frog_slash"]);
    const effects = ref(["magic_water_heal"]);

    const anim = ref("");

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
      this.frames.splice(this.selectedFrame, 0, {
        ...this.frames[this.selectedFrame],
      });
    }

    function moveFrameLeft() {
      let rightFrame = this.selectedFrame - 1 <= 0 ? 0 : this.selectedFrame - 1;
      arrayMove(this.frames, this.selectedFrame, rightFrame);
      this.selectedFrame = rightFrame;
      this.framesExpanded();
    }

    function moveFrameRight() {
      let rightFrame =
        this.selectedFrame + 1 >= this.frames.length
          ? this.frames.length
          : this.selectedFrame + 1;
      arrayMove(this.frames, this.selectedFrame, rightFrame);
      this.selectedFrame = rightFrame;
      this.framesExpanded();
    }

    function arrayMove(arr, fromIndex, toIndex) {
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
      clearInterval(this.anim);
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
      selectedFrame,
      frames,
      framesExpanded,
      frame,
      anim,
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
      sounds,
      effects,
      char,
      chars,
    };
  },
});
</script>

<style scoped>
.abs {
  position: "absolute";
}
.frameContainer {
  width: 1220px;
  height: 243px;
  border-top: 2px solid white;
  position: relative;
}
.exportContainer {
  width: 290px;
  height: 200px;
  position: relative;
  border-top: 1px solid #ddd;
  margin-top: 10px;
  padding-top: 15px;
}
.full {
  width: 100%;
  height: 120px;
}
.inputForm {
  padding: 15px;
  border: 3px solid white;
  border-radius: 5px;
  width: 300px;
  background-color: midnightblue;
}
.inputRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inputLabel {
  width: 80px;
  display: block;
  margin-right: 10px;
}
.inputInput {
  border-radius: 4px;
  margin: 3px;
  max-width: 200px;
}
.frameview {
  border: 1px solid black;
  position: absolute;
}
.flex-left {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.iconBtnContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
}
.iconBtn {
  margin-right: 10px;
}

.iconBtn .icon {
  font-size: 14px;
}

.btn {
  margin: 8px 0px;
}
</style>
