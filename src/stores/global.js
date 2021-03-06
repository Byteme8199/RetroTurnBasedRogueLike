import { defineStore } from "pinia";
import { characters } from "./characters";
import { sounds } from "./sounds";
import { waves } from "./waves";
import { formations } from "./waves";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    characters: characters,
    enemies: waves[0].formations[0].enemies,
    sounds: sounds,
    act: {
      selectedCharacter: null,
      selectedAction: {
        label: "Fight",
        hasSub: false,
        availableTargets: ["1e"],
      },
    },
    game: {
      mode: "menu",
      moment: 0,
      wave: 0,
      round: 0,
      waveObj: null,
      formationObj: null,
      gameState: null,
      timerStateVal: null,
      logs: [{ text: "", level: "Log" }],
    },
    music_Battle: [
      "CT-Battle.mp3",
      "CT-Magus.mp3",
      "DKC-Boss.mp3",
      "FF4-4fiends.mp3",
      "FF4-battle.mp3",
      "FF5-BigBridge.mp3",
      "FF6-DancingMad.mp3",
      "MegaMan-Wily1.mp3",
      "SMW-Koopa.mp3",
      "SOTN-EndToccata.mp3",
      "SoM-BossBattle.mp3",
    ],
    music_Victory: ["FF-Victory.mp3", "SoM-BossDefeat.mp3"],
  }),
  getters: {
    getMoment: (state) => {
      return state.game.moment;
    },
    getLogs: (state) => {
      return state.game.logs;
    },
    getMode: (state) => {
      return state.game.mode;
    },
    getCharacter(name) {
      this.characters.filter((c) => {
        return c.name === name;
      });
    },
    getAvailableCharacters: (state) => {
      return state.characters
        .filter((c) => c.isRecruited)
        .sort((a, b) => a?.pos + 1 - (b?.pos + 1));
    },
    getActiveCharacters: (state) => {
      let activeField = [{}, {}, {}, {}];
      state.characters.map((c) => (activeField[c.pos] = c));
      return activeField;
    },
    getValidCharacterTargets: (state) => {
      return state.characters.filter((c) => c.hpCurrent > 0 && c.pos !== null);
    },
    getValidCharactersInReserve: (state) => {
      return state.characters.filter((c) => c.pos === null);
    },
    getActiveEnemies: (state) => {
      let activeEnemyField = state.enemies.filter((c, index) => {
        if (c && c.hpCurrent > 0) {
          c.pos = index;
          return c;
        }
      });
      activeEnemyField.filter((c) => c);
      return activeEnemyField;
    },
    getValidEnemyTargets: (state) => {
      let enemies = state.enemies.filter((c) => c);
      return enemies.filter((c) => {
        return c.hpCurrent > 0;
      });
    },
    getActions(state) {
      let actions = [];
      state.act.selectedCharacter?.abilities.map((a) => {
        actions.push(a);
      });
      if (state.act.selectedCharacter?.abilities) {
        actions.unshift({
          label: "Fight",
          hasSub: false,
          availableTargets: ["1e"],
        });
        actions.push({
          label: "Defend",
          hasSub: false,
          availableTargets: [],
        });
        actions.push({
          label: "Change Row",
          hasSub: false,
          availableTargets: [],
        });
        actions.push({
          label: "Switch",
          hasSub: true,
          availableTargets: [state.characters.filter((c) => c.pos === null)],
        });
      }
      if (state.act.selectedAction === null) {
        state.act.selectedAction = actions[0];
      }
      return actions;
    },
    getSelectedCharacter(state) {
      return state.act.selectedCharacter;
    },
    getSelectedAction(state) {
      return state.act.selectedAction;
    },
  },
  actions: {
    log(log, type) {
      this.game.logs.unshift({ text: log, level: type });
    },
    setEnemies(wave, round) {
      this.enemies = formations[round].enemies;
      this.game.wave = wave;
      this.game.round = round;
    },
    setModeMenu() {
      this.log("Menu Start", "Log");
      this.game.mode = "menu";
      this.reset();
    },
    setModeAnim() {
      this.log("Animation Mode Start", "Log");
      this.game.mode = "anim";
      this.reset();
    },
    setModeGame() {
      this.game.mode = "game";
      this.log("Game Mode Start", "Log");
      this.initGame();
    },
    initGame() {
      this.log("Game Init", "Log");
      this.reset();
      this.start();
      this.getValidCharacterTargets.map((c) => {
        this.animate(c, "walk_in");
      });
    },
    playSound(sound) {
      var audio = new Audio(`sounds/${sound}`);
      audio.play();
    },
    start() {
      this.log("Game Start", "Log");
      this.game.gameState = true;
      this.game.timerStateVal = setInterval(this.updateGame, 100);
      ///  Play Random Battle Music
      var musicTrack = document.getElementById("audio");
      musicTrack.setAttribute(
        "src",
        `music/${this.music_Battle[Math.floor(Math.random() * this.music_Battle.length)]}`
      );
      musicTrack.play();
    },
    reset() {
      // Get a reference to the last interval + 1
      const interval_id = window.setInterval(function () {},
      Number.MAX_SAFE_INTEGER);

      // Clear any timeout/interval up to that id
      for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
      }

      this.getValidCharacterTargets.map((c) => {
        c.nextTurn = 100;
      });

      // go over each enemy, if nextTurn === 0, then have them do stuff
      this.getActiveEnemies.map((c) => {
        c.nextTurn = 100;
      });
      this.audioStop();
    },
    audioStop() {
      var musicTrack = document.getElementById("audio");
      musicTrack.pause();
    },
    pause() {
      if (this.game.gameState) {
        this.log("Game Paused", "Log");
        this.game.gameState = false;
        clearInterval(this.game.timerStateVal);
        this.audioStop();
      } else {
        this.start();
      }
    },
    gameOver() {
      this.log("GAME OVER", "Log");
      this.act.selectedCharacter = null;
      this.act.selectedAction = null;
      this.game.wave = 0;
      this.game.round = 0;
      this.pause();
      // TODO: show some kind of info about game over
      // TODO: reset HP/MP/Speed?  Anything else?
    },
    nextWave() {
      this.setEnemies(this.game.wave + 1, 0);
      this.log("Next Wave Start", "Log");
      this.clearInputs();
    },
    nextRound() {
      this.setEnemies(this.game.wave, this.game.round + 1);
      this.log("Next Round Start", "Log");
      this.clearInputs();
    },
    clearInputs() {
      this.act.selectedCharacter = null;
      this.act.selectedAction = null;
    },
    getAnimationByName(char, name) {
      const index = char.animations.findIndex((anim) => {
        return anim.name === name;
      });
      return char.animations[index].frames;
    },
    animate(char, anim_name) {
      let anim = this.getAnimationByName(char, anim_name);
      this.animateSprite(char, anim);
    },
    animateSprite(char, frames) {
      let index = 0;
      //const startPosition = `-${frames[0].x}px ${frames[0].y}px`;

      var anim = setInterval(() => {
        let el = document.getElementById("pos" + char.pos);
        let fr = frames[index];
        el.style.backgroundPosition = `-${fr.x}px -${fr.y}px`;
        el.style.width = fr.w + "px";
        el.style.height = fr.h + "px";
        el.style.right = char?.isBackrow ? 40 + fr.xo + "px" : 120 + fr.xo + "px";
        el.style.top = char?.pos * 65 + 300 + fr.yo + "px";
        el.style.filter = fr?.filter ? fr.filter : "";
        if (fr.playSound) {
          this.playSound(fr.playSound);
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
    },
    updateGame() {
      //  Are all characters dead??
      let allCharactersDead =
        this.getValidCharacterTargets.length > 0 ? false : true;

      let allEnemiesDead = this.getActiveEnemies.length > 0 ? false : true;

      if (allEnemiesDead) {
        if (this.game.round === waves[this.game.wave].formations.length) {
          this.nextWave();
        } else {
          this.nextRound();
        }
      }

      if (allCharactersDead) {
        this.gameOver();
      }

      // increment game timer for characters
      this.getValidCharacterTargets.map((c) => {
        c.nextTurn > 0 ? speedFunc(c) : 0;
        //  auto select the character if no characters have been selected before
        if (this.act.selectedCharacter === null && c.nextTurn <= 0) {
          this.selectCharacter(c);
        }
      });

      // go over each enemy, if nextTurn === 0, then have them do stuff
      this.getActiveEnemies.map((c) => {
        c.nextTurn > 0 ? speedFunc(c) : 0;
        if (c.nextTurn <= 0) {
          c.nextTurn = 100; // reset init

          // Let's attack a random character
          let rnd = Math.floor(
            Math.random() * this.getValidCharacterTargets.length
          );
          let target = this.getValidCharacterTargets[rnd];
          this.log(`${c.name} ATTACKS ${target.name}`, "Game");

          // TODO: Create actual math for dodging, blocking, etc.. then animate those things...
          target.hpCurrent =
            target.hpCurrent - 10 <= 0 ? 0 : target.hpCurrent - 1;

          if (target.hpCurrent <= 0 && target.state !== "dead") {
            target.state = "dead";
            this.animate(target, "death");
            this.log(`${target.name} Dies!`, "Game");
          } else {
            this.animate(target, "damage");
          }

          // If the character gets killed before they act and they are currently selecting, remove options
          if (
            this.act.selectedCharacter?.name === target?.name &&
            target.hpCurrent <= 0
          ) {
            this.act.selectedAction = null;
            this.act.selectedCharacter = null;
          }
        }
      });

      this.game.moment++;
    },
    selectCharacter(c) {
      this.act.selectedCharacter = c;
      this.act.selectedAction = c.abilities[0];
      // this.animateSprite(0, 150, 100, 50, false, c?.pos);
    },
    selectNextAction() {
      let current = this.getActions.findIndex(
        (p) => p.label === this.act.selectedAction.label
      );
      if (current === this.getActions.length - 1) {
        this.act.selectedAction = this.getActions[0];
      } else {
        this.act.selectedAction = this.getActions[current + 1];
      }
    },
    selectPreviousAction() {
      let current = this.getActions.findIndex(
        (p) => p.label === this.act.selectedAction.label
      );
      if (current === 0) {
        this.act.selectedAction = this.getActions[this.getActions.length - 1];
      } else {
        this.act.selectedAction = this.getActions[current - 1];
      }
    },
    engageAction() {
      let act = this.act.selectedAction;
      let char = this.act.selectedCharacter;
      if (act && char && this.game.gameState && char.hpCurrent > 0) {
        if (act.label === "Change Row") {
          char.isBackrow = !char.isBackrow;
          this.animate(char, "idle");
        }
        if (act.label === "Fight") {
          // Let's attack a random enemy
          let rnd = Math.floor(
            Math.random() * this.getValidEnemyTargets.length
          );
          let target = this.getValidEnemyTargets[rnd];
          target.hpCurrent = Math.floor(
            target.hpCurrent - physFunc(char, target)
          );
          this.animate(char, "fight");
          this.log(
            `${char.name} ATTACKS ${target.name} and is at ${target.hpCurrent}`,
            "Game"
          );
        }

        //  Start the character over again and change the selected Character.
        char.nextTurn = 100;
        this.act.selectedCharacter = null;
        this.act.selectedAction = {
          label: "Fight",
          hasSub: false,
          availableTargets: ["1e"],
        };
      }
    },
  },
});

// decrease nextTurn counters
function speedFunc(c) {
  //  speed reduces nextTurn # by this formula.
  let speedReduction = Math.log(c.speed) / Math.log(255);
  let speedReductionSane = speedReduction <= 0.1 ? 0.1 : speedReduction;
  c.nextTurn = c.nextTurn - speedReductionSane - Math.random() / 2;
  c.nextTurn = c.nextTurn.toFixed(2) <= 0 ? 0 : c.nextTurn.toFixed(2);
}

function physFunc(c) {
  //  phy damage func.
  let hpReduction =
    Math.log(c.phys) * Math.log(255) + (Math.random() * Math.log(c.phys)) / 2;
  let hpReductionSane = hpReduction <= 1 ? 1 : hpReduction;
  return hpReductionSane;
}
