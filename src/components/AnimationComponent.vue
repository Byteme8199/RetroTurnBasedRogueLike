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
              <font-awesome-icon
                class="btn"
                @click="playSoundNow"
                icon="fa-solid fa-play"
              />
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
        "ff6-00BlueMagic.wav",
        "ff6-01BlackMagic.wav",
        "ff6-02WhiteMagic.wav",
        "ff6-03BlackMagic2.wav",
        "ff6-04RunAway.wav",
        "ff6-05Ultima.wav",
        "ff6-06InFerno.wav",
        "ff6-07Haste.wav",
        "ff6-08DragonEsper.wav",
        "ff6-09Scan.wav",
        "ff6-0ARasp.wav",
        "ff6-0BRasp2.wav",
        "ff6-0CLaserAtk.wav",
        "ff6-0DMiss.wav",
        "ff6-0EDragonAttack.wav",
        "ff6-0FEerie.wav",
        "ff6-10CanonExplosion.wav",
        "ff6-11idk.wav",
        "ff6-12InfernoShort.wav",
        "ff6-13Explosion.wav",
        "ff6-14EsperAttack.wav",
        "ff6-15Bolt3.wav",
        "ff6-16Fire1.wav",
        "ff6-17Ting.wav",
        "ff6-18Ice1.wav",
        "ff6-19Fire3.wav",
        "ff6-1AMeteor.wav",
        "ff6-1BItemMenuItng.wav",
        "ff6-1CIdk.wav",
        "ff6-1DImpSecondPart.wav",
        "ff6-1EPhoenixDown.wav",
        "ff6-1FDemiShort.wav",
        "ff6-20Poison.wav",
        "ff6-21ConstantPunching.wav",
        "ff6-22Bio.wav",
        "ff6-25MeteorShorter.wav",
        "ff6-26Idk.wav",
        "ff6-27EerieShort.wav",
        "ff6-28Thief.wav",
        "ff6-29SaveTingEcho.wav",
        "ff6-2AHealingSpellFirstPart.wav",
        "ff6-2BWindlike.wav",
        "ff6-2CDoorOpen.wav",
        "ff6-2DMonsterDeath.wav",
        "ff6-2ESwordSlashLong.wav",
        "ff6-2fElixir.wav",
        "ff6-30TempestLike.wav",
        "ff6-31FlarePart1.wav",
        "ff6-32Mecha.wav",
        "ff6-33HitFist.wav",
        "ff6-34CurativeItem.wav",
        "ff6-35BreakSpell.wav",
        "ff6-36Ice2Part1.wav",
        "ff6-37Ice2Part2.wav",
        "ff6-38ImpSpellPart1.wav",
        "ff6-39Muddle.wav",
        "ff6-3AHugeSpell.wav",
        "ff6-3Cidk.wav",
        "ff6-3DBolt2.wav",
        "ff6-3EPeral.wav",
        "ff6-3FBigInferno.wav",
        "ff6-3bBuffProtect.wav",
        "ff6-40CyanSwdtechActivation.wav",
        "ff6-41MultipleTing.wav",
        "ff6-42Fire2.wav",
        "ff6-43Bolt1.wav",
        "ff6-44Ting.wav",
        "ff6-45Shell.wav",
        "ff6-46EsperPartyDisappear.wav",
        "ff6-47Ting.wav",
        "ff6-4BDrill.wav",
        "ff6-4CLife.wav",
        "ff6-4DIce3.wav",
        "ff6-4EDeathSpell.wav",
        "ff6-4FLagomorph.wav",
        "ff6-50Idk.wav",
        "ff6-51Machine.wav",
        "ff6-52SwdTechStunner.wav",
        "ff6-53Idk.wav",
        "ff6-54Idk.wav",
        "ff6-55Idk.wav",
        "ff6-56Boomerang.wav",
        "ff6-57Idk.wav",
        "ff6-58Vanish.wav",
        "ff6-59greenCherry.wav",
        "ff6-5ASaveTing.wav",
        "ff6-5BThiefSteal.wav",
        "ff6-64HighSwdtech.wav",
        "ff6-65SwordSlash.wav",
        "ff6-66Bioblaster.wav",
        "ff6-66CureSpellPart1.wav",
        "ff6-67EsperShining.wav",
        "ff6-68Snare.wav",
        "ff6-69Osmose.wav",
        "ff6-6AJumpDragonboots.wav",
        "ff6-6BBlaster.wav",
        "ff6-6CEsperRoar.wav",
        "ff6-6DThamasian.wav",
        "ff6-6EWind.wav",
        "ff6-6FRetort.wav",
        "ff6-70Weird.wav",
        "ff6-71EerieWave.wav",
        "ff6-72BigWind.wav",
        "ff6-73NarsheWind.wav",
        "ff6-74KefkaAttack.wav",
        "ff6-75MechanicWalk.wav",
        "ff6-76Harvester.wav",
        "ff6-77Beat.wav",
        "ff6-78Closing.wav",
        "ff6-79Aquarake.wav",
        "ff6-7APossess.wav",
        "ff6-7BMechanic.wav",
        "ff6-7CBoom.wav",
        "ff6-7DHealingSound.wav",
        "ff6-7EEarthquakeLow.wav",
        "ff6-7FMechDispatch.wav",
        "ff6-80LongFireball.wav",
        "ff6-81ZapAqua.wav",
        "ff6-82Drill.wav",
        "ff6-87WallChange.wav",
        "ff6-88.wav",
        "ff6-89Exploder.wav",
        "ff6-8ADirkSlash.wav",
        "ff6-8BClawSlash.wav",
        "ff6-8BSaveTing.wav",
        "ff6-8CRodHit.wav",
        "ff6-8DIdk.wav",
        "ff6-8FDemi.wav",
        "ff6-90AirAnchor.wav",
        "ff6-91Idk.wav",
        "ff6-92TrainHorn.wav",
        "ff6-97Bark.wav",
        "ff6-98DoorEcho.wav",
        "ff6-99DoorDistant.wav",
        "ff6-9AMoveLove.wav",
        "ff6-9BScratch.wav",
        "ff6-9CMsleSky.wav",
        "ff6-9DGrow.wav",
        "ff6-9EPhoenixDown.wav",
        "ff6-9FBlockSword.wav",
        "ff6-A0BlockShield.wav",
        "ff6-A1CurativeItem.wav",
        "ff6-A2Flare.wav",
        "ff6-A3Zap.wav",
        "ff6-A4SwordSlash.wav",
        "ff6-A5Earthquake.wav",
        "ff6-A6Switch.wav",
        "ff6-A7WeirdBeat.wav",
        "ff6-A8SwordSlash.wav",
        "ff6-A9ObjectMove.wav",
        "ff6-AAHealingWind.wav",
        "ff6-ABExploder.wav",
        "ff6-ACQuadraSlice.wav",
        "ff6-ADDemiShort.wav",
        "ff6-AECinema.wav",
        "ff6-AFTentacle.wav",
        "ff6-B0MachinePowerUp.wav",
        "ff6-B1HealingWind.wav",
        "ff6-B2Cinema.wav",
        "ff6-B3dk.wav",
        "ff6-B4Explosion.wav",
        "ff6-B5LilHit.wav",
        "ff6-B6ElfFire.wav",
        "ff6-B7Explosio.wav",
        "ff6-B8Whistle.wav",
        "ff6-B9TerraScream.wav",
        "ff6-BAFallingDown.wav",
        "ff6-BBBigClose.wav",
        "ff6-BCLilPummel.wav",
        "ff6-BDMachineRay.wav",
        "ff6-BEDeathToll.wav",
        "ff6-BFBuyingSelling.wav",
        "ff6-C0Bird.wav",
        "ff6-C1Encounter.wav",
        "ff6-C2Ting.wav",
        "ff6-C3GauRoar.wav",
        "ff6-C4MachineRayShort.wav",
        "ff6-C5Cure1Part2.wav",
        "ff6-C6SAVETING.wav",
        "ff6-C7ChestClose.wav",
        "ff6-C8idk.wav",
        "ff6-C9SwdTech.wav",
        "ff6-CBCureSpellPart2.wav",
        "ff6-CCHitEcho.wav",
        "ff6-CDKefkaLaugh.wav",
        "ff6-CEWaterSplash.wav",
        "ff6-CFMachineBoomerang.wav",
        "ff6-CineGiveObject.wav",
        "ff6-D0OperaWhite.wav",
        "ff6-D0idk.wav",
        "ff6-D1Ting.wav",
        "ff6-D2FireCine.wav",
        "ff6-D3Zap.wav",
        "ff6-D4NoiseBlaster.wav",
        "ff6-D5idk.wav",
        "ff6-D6LongWind.wav",
        "ff6-D8Bubble.wav",
        "ff6-D8NoiseBlaster.wav",
        "ff6-D9Chocobo.wav",
        "ff6-DAFlailHit.wav",
        "ff6-DBClose.wav",
        "ff6-DCMenuTing.wav",
        "ff6-DDAlarm.wav",
        "ff6-DFCharge.wav",
        "ff6-DFTrainstoppinMaybe.wav",
        "ff6-E3OpenHuge.wav",
        "ff6-EBRainSpell.wav",
        "ff6-ECHeartBeat.wav",
        "ff6-EDTrainStrarting.wav",
        "ff6-EECureInMenu.wav",
        "ff6-EFBossAppearingEscaping.wav",
        "ff6-F0DistantBoom.wav",
        "ff6-F1ZapCharge.wav",
        "ff6-F2BossDeath.wav",
        "ff6-F3DiceThrown.wav",
        "ff6-F4WindCharge.wav",
        "ff6-F5FightTing.wav",
        "ff6-F6BigEarthQuake.wav",
        "ff6-F7CloseBigNear.wav",
        "ff6-F8DemiFlare.wav",
        "ff6-F9Mog.wav",
        "ff6-FADice2.wav",
        "ff6-FBGhostMusic.wav",
        "ff6-FCMenuTing2.wav",
        "ff6-Runic.wav",
        "ff6-SafeProtect.wav",
        "ff6-esperCry.wav",
        "ff6-hugeAttack.wav",
        "ff6-idk13.wav",
        "ff6-idk14.wav",
        "ff6-idk15.wav",
        "ff6-idk16.wav",
        "ff6-idk17.wav",
        "ff6-idk18.wav",
        "ff6-idk20.wav",
        "ff6-idkAfterlagomorph.wav",
        "ff6-littleinferno.wav",
        "ff6-runaway.wav",
        "ff6-smallEsplosion.wav",
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
            el.style.backgroundPosition = `-${fr.x}px -${fr.y}px`;
            el.style.transform = `scale(${this.state.char?.offset})`;
            el.style.width = fr.w + "px";
            el.style.height = fr.h + "px";
            el.style.right = fr.xo + 20 + "px";
            el.style.top = fr.yo + 20 + "px";
            el.style.filter = fr?.filter ? fr.filter : "";
            el.style.position = "absolute";
          }
          if (fr.playSound) {
            game.playSound(fr.playSound);
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

    function playSoundNow() {
      game.playSound(state.frame.playSound);
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
      playSoundNow,
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
