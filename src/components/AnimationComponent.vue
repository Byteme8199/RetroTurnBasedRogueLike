<template>
  <div class="anim-bg">
    <div style="padding: 20px; display: flex">
      <div>
        <div class="inputForm">
          <div class="inputRow">
            <label class="inputLabel" ref="char">Character</label>
            <select id="char" class="inputInput" v-model="state.char">
              <option v-for="c in game.characters" :key="c.name" :value="c">
                {{ c.name }}
              </option>
            </select>
          </div>
          <div>
            <div class="inputRow">
              <label class="inputLabel" ref="preload">Preload</label>
              <select
                id="preload"
                class="inputInput"
                v-model="state.preload"
                @change="changeAnim()"
              >
                <option v-for="pl in state.char?.animations" :key="pl.name" :value="pl">
                  {{ pl.name }}
                </option>
              </select>
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="X">X</label>
              <input
                id="X"
                class="inputInput"
                v-model="state.frame.x"
                type="number"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="y">Y</label>
              <input
                id="y"
                class="inputInput"
                v-model="state.frame.y"
                type="number"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="Width">Width</label
              ><input
                id="Width"
                class="inputInput"
                v-model="state.frame.w"
                type="number"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="height">Height</label
              ><input
                id="height"
                class="inputInput"
                v-model="state.frame.h"
                type="number"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="XOffset">X-Offset</label
              ><input
                id="XOffset"
                class="inputInput"
                v-model="state.frame.xo"
                type="number"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="YOffset">Y-Offset</label
              ><input
                id="YOffset"
                class="inputInput"
                v-model="state.frame.yo"
                type="number"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="filter">Filter</label
              ><input
                id="filter"
                class="inputInput"
                @change="stringifyFrames"
                v-model="state.frame.filter"
              />
            </div>
            <div class="inputRow">
              <label class="inputLabel" ref="effectAnim">Effect</label>
              <select
                id="effectAnim"
                class="inputInput"
                @change="stringifyFrames"
                v-model="state.frame.effectAnim"
              >
                <option value="">- None -</option>
                <option v-for="effect in state.effects" :key="effect">
                  {{ effect }}
                </option>
              </select>
            </div>
            <div class="inputRow" v-if="state.frame.effectAnim">
              <label class="inputLabel" ref="effectAnimX">Effect X</label
              ><input
                id="effectAnimX"
                class="inputInput"
                v-model="state.frame.effectAnimX"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow" v-if="state.frame.effectAnim">
              <label class="inputLabel" ref="effectAnimY">Effect Y</label
              ><input
                id="effectAnimY"
                class="inputInput"
                v-model="state.frame.effectAnimY"
                @change="stringifyFrames"
              />
            </div>

            <div class="inputRow">
              <label class="inputLabel" ref="playSound">Sound</label>
              <select
                id="playSound"
                class="inputInput"
                v-model="state.frame.playSound"
                @change="stringifyFrames"
              >
                <option value="">- None -</option>
                <option v-for="sound in state.sounds" :key="sound">
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
                v-model="state.frame.repeat"
                @change="stringifyFrames"
              />
            </div>
            <div class="inputRow">
              <button class="btn" @click="saveFrame">Add New Frame</button>
            </div>
            <div class="exportContainer">
              <textarea
                class="full"
                v-model="state.importJSONdata"
                id="export"
              ></textarea>
              <button class="btn" @click="importJSON">Import/Overwrite</button>
            </div>
            <div class="exportContainer">
              <div class="flex-center">
                <label class="inputLabel" ref="Speed">Delay</label
                ><input
                  id="Speed"
                  class="inputInput"
                  v-model="state.speed"
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
      <div>
        <div class="frameContainer">
          <div
            class="frameview sharp"
            :class="{ flip: state.char?.reverse }"
            :id="`frame${state.char?.pos}`"
            :style="{
              background: `url(./sprites/${state.char?.fileName}/${state.char?.fileName}.png)  no-repeat`,
              zoom: state.char?.offset ? state.char?.offset : 4,
              backgroundPosition: `-${state.frame.x}px -${state.frame.y}px`,
              width: state.frame.w + 'px',
              height: state.frame.h + 'px',
              right: state.frame.xo + 20 + 'px',
              top: state.frame.yo + 20 + 'px',
              filter: state.frame.filter ? state.frame.filter : '',
            }"
          ></div>
        </div>
        <div
          class="frameContainer"
          style="overflow-x: auto; display: flex; align-items: center; padding: 0px 10px"
        >
          <div v-for="(f, index) in state.frames" :key="index">
            <div
              class="frame sharp"
              :class="{
                flip: state.char?.reverse,
              }"
              :id="`fr${state.char?.pos}`"
              @click="selectFrame(index)"
              :style="{
                marginRight: f?.xo + 'px',
                marginTop: f?.yo + 'px',
                background: `url(./sprites/${state.char?.fileName}/${state.char?.fileName}.png)  no-repeat`,
                zoom: state.char?.offset ? state.char?.offset : 4,
                backgroundPosition: `-${f?.x}px -${f?.y}px`,
                width: f?.w + 'px',
                height: f?.h + 'px',
                filter: f?.filter ? f?.filter : '',
              }"
            ></div>
            <br />
            <div class="iconBtnContainer">
              <div
                v-if="index === state.selectedFrame"
                class="iconBtn"
                @click="moveFrameLeft"
              >
                <font-awesome-icon icon="fa-solid fa-angle-left" class="icon" />
              </div>
              <div
                v-if="index === state.selectedFrame"
                class="iconBtn"
                @click="deleteFrame"
              >
                <font-awesome-icon icon="fa-solid fa-trash" class="icon" />
              </div>
              <div
                v-if="index === state.selectedFrame"
                class="iconBtn"
                @click="copyFrame"
              >
                <font-awesome-icon icon="fa-solid fa-copy" class="icon" />
              </div>
              <div
                v-if="index === state.selectedFrame"
                class="iconBtn"
                @click="moveFrameRight"
              >
                <font-awesome-icon icon="fa-solid fa-angle-right" class="icon" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="frameContainer">
            <div
              class="sharp"
              :class="{ flip: state.char?.reverse }"
              :id="`anim_pos${state.char?.pos}`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useGlobalStore } from "../stores/global";

export default defineComponent({
  name: "animationCreator",
  setup: () => {
    const state = reactive({
      selectedFrame: 0,
      speed: 150,
      frames: [],
      char: {
        animations: [],
      },
      charIndex: -1,
      preload: {
        frames: [],
      },
      frame: {
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
      },
      sounds: [
        "MMX - Alert 1.wav",
        "MMX - Alert 2.wav",
        "MMX - Armadillo Charge.wav",
        "MMX - Armadillo Laser.wav",
        "MMX - Beam Pulse.wav",
        "MMX - Beep (1).wav",
        "MMX - Beep (2).wav",
        "MMX - Beep (3).wav",
        "MMX - Beep (4).wav",
        "MMX - Beep (5).wav",
        "MMX - Big Hit.wav",
        "MMX - Boomer Kuwanger Teleport.wav",
        "MMX - Boss Door Close.wav",
        "MMX - Bulldozer.wav",
        "MMX - Can't Exit.wav",
        "MMX - Chill Penguin Breath.wav",
        "MMX - Door Open.wav",
        "MMX - Eagle's Tornado.wav",
        "MMX - Electric Bolt.wav",
        "MMX - Enemy Die (1).wav",
        "MMX - Enemy Die (2).wav",
        "MMX - Enemy Die (3).wav",
        "MMX - Enemy Die (4).wav",
        "MMX - Enemy Helmet Hit.wav",
        "MMX - Enemy Missle Fire.wav",
        "MMX - Enemy Motor 1.wav",
        "MMX - Enemy Motor 2.wav",
        "MMX - Enemy Motor 3.wav",
        "MMX - Enemy Sound (01).wav",
        "MMX - Enemy Sound (02).wav",
        "MMX - Enemy Sound (03).wav",
        "MMX - Enemy Sound (04).wav",
        "MMX - Enemy Sound (05).wav",
        "MMX - Enemy Sound (06).wav",
        "MMX - Enemy Sound (07).wav",
        "MMX - Enemy Sound (08).wav",
        "MMX - Enemy Sound (09).wav",
        "MMX - Enemy Sound (10).wav",
        "MMX - Enemy Sound (11).wav",
        "MMX - Enemy Sound (12).wav",
        "MMX - Energy Tank Full.wav",
        "MMX - Energy Tank Health.wav",
        "MMX - Flame Mammoth.wav",
        "MMX - Heavy Machine (1).wav",
        "MMX - Heavy Machine (2).wav",
        "MMX - Heavy Machine (3).wav",
        "MMX - Heavy Machine (4).wav",
        "MMX - Heavy Machine (5).wav",
        "MMX - Heavy Machine (6).wav",
        "MMX - Heavy Machine (7).wav",
        "MMX - Heavy Machine (8).wav",
        "MMX - Ice Break.wav",
        "MMX - Ice Freeze.wav",
        "MMX - Ice.wav",
        "MMX - Intro Data Screen.wav",
        "MMX - Mechanical Hum 1.wav",
        "MMX - Mechanical Hum 2.wav",
        "MMX - Mechanical Hum 3.wav",
        "MMX - Misc. dash, jump, move (1).wav",
        "MMX - Misc. dash, jump, move (2).wav",
        "MMX - Misc. dash, jump, move (3).wav",
        "MMX - Misc. dash, jump, move (4).wav",
        "MMX - Misc. dash, jump, move (5).wav",
        "MMX - Misc. dash, jump, move (6).wav",
        "MMX - Misc. dash, jump, move (7).wav",
        "MMX - Octopus Drain.wav",
        "MMX - Robot Suit (1).wav",
        "MMX - Robot Suit (2).wav",
        "MMX - Robot Suit (3).wav",
        "MMX - Robot Suit (4).wav",
        "MMX - Robot Suit (5).wav",
        "MMX - Robot Suit (6).wav",
        "MMX - Robot Suit (7).wav",
        "MMX - Rocks (1).wav",
        "MMX - Rocks (2).wav",
        "MMX - Rocks (3).wav",
        "MMX - Sigma Dog.wav",
        "MMX - Sigma Teleport.wav",
        "MMX - Small Hit.wav",
        "MMX - Spark Mandrill Punch.wav",
        "MMX - Spring 1.wav",
        "MMX - Spring 2.wav",
        "MMX - Stage Cursor Move.wav",
        "MMX - Submarine 1.wav",
        "MMX - Submarine 2.wav",
        "MMX - Text Letter.wav",
        "MMX - Underwater Bubble.wav",
        "MMX - Underwater Sound.wav",
        "MMX - Unknown (1).wav",
        "MMX - Unknown (2).wav",
        "MMX - Unknown (3).wav",
        "MMX - Wing Flap (1).wav",
        "MMX - Wing Flap (2).wav",
        "MMX - Wing Flap (3).wav",
        "MMX - Wing Flap (4).wav",
        "MMX - Wing Flap (5).wav",
        "MMX - X Boomerang Cutter 1.wav",
        "MMX - X Boomerang Cutter 2.wav",
        "MMX - X Chameleon Sting (Charged).wav",
        "MMX - X Chameleon Sting.wav",
        "MMX - X Charge + Shot.wav",
        "MMX - X Charge + Super Shot.wav",
        "MMX - X Charge Shot.wav",
        "MMX - X Charge.wav",
        "MMX - X Dash.wav",
        "MMX - X Die.wav",
        "MMX - X Electric Spark.wav",
        "MMX - X Extra Life.wav",
        "MMX - X Fade In.wav",
        "MMX - X Fade Out.wav",
        "MMX - X Fire Wave.wav",
        "MMX - X Homing Torpedo.wav",
        "MMX - X Hurt.wav",
        "MMX - X Jump.wav",
        "MMX - X Land.wav",
        "MMX - X Life Gain.wav",
        "MMX - X Powerup Infuse.wav",
        "MMX - X Regular Shot.wav",
        "MMX - X Rolling Shield.wav",
        "MMX - X Rolling Shiled (Charged).wav",
        "MMX - X Storm Tornado.wav",
        "MMX - X Sub Tank-Heart Powerup.wav",
        "MMX - X Super Charge Shot.wav",
        "MMX - X Upgrade Complete.wav",
        "MMX - unknown (4).wav",
        "ct-alarm.ogg",
        "ct-alert.ogg",
        "ct-attack.ogg",
        "ct-attack_alt.ogg",
        "ct-aura_glow.ogg",
        "ct-bats.ogg",
        "ct-battleStart.ogg",
        "ct-battleTurn.ogg",
        "ct-bekklerLose.ogg",
        "ct-bigWin.ogg",
        "ct-burning.ogg",
        "ct-burst.ogg",
        "ct-chant.ogg",
        "ct-charm1.ogg",
        "ct-charm2.ogg",
        "ct-confuseTech.ogg",
        "ct-continum.ogg",
        "ct-croak.ogg",
        "ct-crushingSlash.ogg",
        "ct-cureMagic.ogg",
        "ct-cursor.ogg",
        "ct-deltaForce.ogg",
        "ct-deltaStorm.ogg",
        "ct-draw.ogg",
        "ct-drip.ogg",
        "ct-electricArc.ogg",
        "ct-enemyDie.ogg",
        "ct-epochLaunch.ogg",
        "ct-exhaust.ogg",
        "ct-explosion.ogg",
        "ct-fall.ogg",
        "ct-fireMagic.ogg",
        "ct-flap_once.ogg",
        "ct-flapping.ogg",
        "ct-flapping_loop.ogg",
        "ct-gainHp.ogg",
        "ct-gainMp.ogg",
        "ct-gateActivate.ogg",
        "ct-getItem.ogg",
        "ct-grunt.ogg",
        "ct-gulls.ogg",
        "ct-heckran.ogg",
        "ct-iceMagic.ogg",
        "ct-jumpTech.ogg",
        "ct-lavos music clip.ogg",
        "ct-lavos.ogg",
        "ct-lavosHeart.ogg",
        "ct-lavosRain.ogg",
        "ct-leeneBell.ogg",
        "ct-lightning.ogg",
        "ct-lightningMagic.ogg",
        "ct-loseMusic.ogg",
        "ct-magicBlast.ogg",
        "ct-megaBomb.ogg",
        "ct-miss.ogg",
        "ct-monsterRoar1.ogg",
        "ct-monsterRoar2.ogg",
        "ct-onscreen.ogg",
        "ct-organ.ogg",
        "ct-ozzie.ogg",
        "ct-pat.ogg",
        "ct-pat_3x (padded).ogg",
        "ct-pat_3x.ogg",
        "ct-portal reverb.ogg",
        "ct-portal.ogg",
        "ct-roboReady.ogg",
        "ct-roboTech.ogg",
        "ct-robo_talk.ogg",
        "ct-rumble.ogg",
        "ct-rustle.ogg",
        "ct-sad music clip.ogg",
        "ct-savePoint.ogg",
        "ct-sealedBoxMusic.ogg",
        "ct-shadowMagic.ogg",
        "ct-shot.ogg",
        "ct-slash1.ogg",
        "ct-slash2.ogg",
        "ct-slash3.ogg",
        "ct-sleepMusic.ogg",
        "ct-spinout.ogg",
        "ct-squeak.ogg",
        "ct-step.ogg",
        "ct-swish.ogg",
        "ct-thump1.ogg",
        "ct-thump2.ogg",
        "ct-type.ogg",
        "ct-tyrano.ogg",
        "ct-useHealingItem.ogg",
        "ct-waterMagic.ogg",
        "ct-wrong.ogg",
      ],
      effects: ["magic_water_heal"],
      importJSONdata: "",
      animTimer: null,
    });

    const game = useGlobalStore();

    function stringifyFrames() {
      this.state.importJSONdata = JSON.stringify(this.state.frames);
    }

    function importJSON() {
      if (this.state.importJSONdata) {
        let data = JSON.parse(this.state.importJSONdata.replace(" ", ""));
        this.state.frames = [];
        data.map((m) => {
          this.state.frames.push({ ...m });
        });
        this.stringifyFrames();
      }
    }

    function playAnim() {
      this.animateSprite(this.state.char, this.state.frames);
    }

    function stopAnim() {
      clearInterval(this.state.animTimer);
    }

    function saveFrame() {
      this.state.frames.push({ ...this.state.frame });
      this.stringifyFrames();
    }

    function deleteFrame() {
      this.state.frames.splice(this.state.selectedFrame, 1);
      this.stringifyFrames();
    }

    function copyFrame() {
      this.state.frames.splice(this.state.selectedFrame, 0, {
        ...this.state.frames[this.state.selectedFrame],
      });
      this.stringifyFrames();
    }

    function moveFrameLeft() {
      let rightFrame =
        this.state.selectedFrame - 1 <= 0 ? 0 : this.state.selectedFrame - 1;
      arrayMove(this.state.frames, this.state.selectedFrame, rightFrame);
      this.state.selectedFrame = rightFrame;
      this.stringifyFrames();
    }

    function moveFrameRight() {
      let rightFrame =
        this.state.selectedFrame + 1 >= this.state.frames.length
          ? this.state.frames.length
          : this.state.selectedFrame + 1;
      arrayMove(this.state.frames, this.state.selectedFrame, rightFrame);
      this.state.selectedFrame = rightFrame;
      this.stringifyFrames();
    }

    function arrayMove(arr, fromIndex, toIndex) {
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    }

    function selectFrame(index) {
      this.state.selectedFrame = index;
      this.state.frame = this.state.frames[index];
      this.stringifyFrames();
    }

    function animateSprite(char, frames) {
      if (frames.length > 0) {
        let index = 0;
        clearInterval(this.state.animTimer);
        this.state.animTimer = setInterval(() => {
          let el = document.getElementById("anim_pos" + char.pos);
          let fr = frames[index];
          if (el) {
            el.style.background = `url(./sprites/${this.state.char?.fileName}/${this.state.char?.fileName}.png)  no-repeat`;
            el.style.zoom = this.state.char?.offset ? this.state.char?.offset : 4;
            el.style.backgroundPosition = `-${fr.x}px -${fr.y}px`;
            el.style.width = fr.w + "px";
            el.style.height = fr.h + "px";
            el.style.right = fr.xo + 20 + "px";
            el.style.top = fr.yo + 20 + "px";
            el.style.filter = fr?.filter ? fr.filter : "";
            el.style.position = "absolute";
          }
          if (fr.playSound) {
            var audio = new Audio(`sounds/${fr.playSound}`);
            audio.play();
          }
          if (index < frames.length - 1) {
            index++;
          } else {
            if (fr?.repeat) {
              index = 0;
            } else {
              clearInterval(this.state.animTimer);
            }
          }
        }, this.state.speed);
      }
    }

    function changeAnim() {
      let newFrames = state.preload.frames;
      this.state.importJSONdata = JSON.stringify(newFrames);
      this.state.frames = [...newFrames];
    }

    return {
      state,
      game,
      stringifyFrames,
      importJSON,
      playAnim,
      stopAnim,
      saveFrame,
      deleteFrame,
      copyFrame,
      moveFrameLeft,
      moveFrameRight,
      selectFrame,
      animateSprite,
      changeAnim,
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
