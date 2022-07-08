import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    characters: [
      {
        name: "Locke",
        isRecruited: true,
        isBackrow: true,
        pos: null,
        nextTurn: 100,
        speed: 219,
        phys: 20,
        mag: 10,
        level: 1,
        exp: 0,
        hpMax: 100,
        hpCurrent: 0,
        mpMax: 0,
        mpCurrent: 0,
        wpn: null,
        head: null,
        armor: null,
        relic: null,
        relic2: null,
        abilities: ["Steal", "Sap", "Exploit"],
        levelUp: [
          [1, 1, 3, 1, 100],
          [2, 1, 4, 2, 250],
          [3, 2, 5, 3, 600],
        ],
      },
      {
        name: "Cecil",
        isRecruited: true,
        isBackrow: false,
        pos: 1,
        nextTurn: 100,
        speed: 5,
        phys: 20,
        mag: 10,
        level: 1,
        exp: 0,
        hpMax: 100,
        hpCurrent: 100,
        mpMax: 0,
        mpCurrent: 0,
        wpn: null,
        head: null,
        armor: null,
        relic: null,
        relic2: null,
        abilities: ["Rage", "Darkness"],
        levelUp: [
          [1, 1, 3, 1, 100],
          [2, 1, 4, 2, 250],
          [3, 2, 5, 3, 600],
        ],
      },
      {
        name: "Rydia",
        isRecruited: true,
        isBackrow: true,
        pos: null,
        nextTurn: 100,
        speed: 3,
        phys: 2,
        mag: 30,
        level: 1,
        exp: 0,
        hpMax: 60,
        hpCurrent: 60,
        mpMax: 100,
        mpCurrent: 100,
        wpn: null,
        head: null,
        armor: null,
        relic: null,
        relic2: null,
        abilities: ["Summon", "Magic"],
        levelUp: [
          [1, 1, 1, 3, 100],
          [2, 1, 1, 5, 250],
          [3, 2, 2, 6, 600],
        ],
      },
      {
        name: "X",
        isRecruited: true,
        isBackrow: false,
        reverse: true,
        offset: 3,
        pos: 2,
        nextTurn: 50,
        speed: 28,
        phys: 28,
        mag: 28,
        level: 1,
        exp: 0,
        hpMax: 60,
        hpCurrent: 60,
        mpMax: 100,
        mpCurrent: 100,
        wpn: null,
        head: null,
        armor: null,
        relic: null,
        relic2: null,
        abilities: ["Examine", "Charge", "Mimetic Wpn"],
        levelUp: [
          [1, 1, 1, 3, 100],
          [2, 1, 1, 5, 250],
          [3, 2, 2, 6, 600],
        ],
      },
      {
        name: "Frog",
        isRecruited: true,
        isBackrow: true,
        reverse: false,
        offset: 3.3,
        pos: 0,
        nextTurn: 100,
        speed: 28,
        phys: 28,
        mag: 28,
        level: 1,
        exp: 0,
        hpMax: 60,
        hpCurrent: 60,
        mpMax: 100,
        mpCurrent: 100,
        wpn: null,
        head: null,
        armor: null,
        relic: null,
        relic2: null,
        abilities: ["Jump", "Magic", "Reserve Attk"],
        levelUp: [
          [1, 1, 1, 3, 100],
          [2, 1, 1, 5, 250],
          [3, 2, 2, 6, 600],
        ],
      },
    ],
    enemies: [
      {
        name: "Goblin",
        pos: 0,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
      {
        name: "Bat",
        pos: 1,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
      {
        name: "Goblin",
        pos: 2,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
      {
        name: "Bat",
        pos: 3,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
      {
        name: "Goblin",
        pos: 4,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
      {
        name: "Bat",
        pos: 5,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
      {
        name: "Goblin",
        pos: 6,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
      {
        name: "Bat",
        pos: 7,
        nextTurn: 100,
        speed: 50,
        phys: 1,
        mag: 1,
        level: 1,
        exp: 2,
        hpMax: 20,
        hpCurrent: 20,
        mpMax: 0,
        mpCurrent: 0,
        abilities: ["Fight"],
      },
    ],
    act: {
      selectedCharacter: null,
      selectedAction: "Fight",
    },
    game: {
      phase: 0,
      gameState: null,
      timerStateVal: null,
      logs: [{ text: "", level: "Log" }],
    },
  }),
  getters: {
    getTimerState: (state) => {
      return state.game.timerStateVal;
    },
    getLogs: (state) => {
      return state.game.logs;
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
    getActiveEnemies: (state) => {
      let activeEnemyField = [{}, {}, {}, {}, {}, {}, {}, {}];
      state.enemies.map((c) => {
        if (c.pos !== null) {
          activeEnemyField[c.pos] = c;
        }
      });
      return activeEnemyField;
    },
    getTimeline: (state) => {
      let activeField = [{}, {}, {}, {}];
      state.characters.map((c) => (activeField[c.pos] = c));

      let activeEnemyField = [{}, {}, {}, {}, {}, {}, {}, {}];
      state.enemies.map((c) => {
        if (c.pos !== null) {
          activeEnemyField[c.pos] = c;
        }
      });

      let timeline = activeField.concat(activeEnemyField);
      timeline.sort((a, b) => {
        a.pos - b.pos;
      });
      return timeline;
    },
    getActions(state) {
      let actions = [];
      state.act.selectedCharacter?.abilities.map((a) => {
        actions.push(a);
      });
      if (state.act.selectedCharacter?.abilities) {
        actions.unshift("Fight");
        actions.push("Defend");
        actions.push("Switch");
      }
      return actions;
    },
    getSelectedAction(state) {
      return state.act.selectedAction;
    },
  },
  actions: {
    log(log, type) {
      this.game.logs.unshift({ text: log, level: type });
    },
    start() {
      this.log("Game Start", "Log");
      this.game.gameState = true;
      this.game.timerStateVal = setInterval(this.updateGame, 100);
    },
    pause() {
      if (this.game.gameState) {
        this.log("Game Paused", "Log");
        this.game.gameState = false;
        clearInterval(this.game.timerStateVal);
      } else {
        this.start();
      }
    },
    gameOver() {
      this.log("GAME OVER", "Log");
      this.pause();
      this.nextPhase();
      // TODO: show some kind of info about game over
      // TODO: reset HP/MP/Speed?  Anything else?
    },
    nextPhase() {
      this.game.phase++;
      this.log("Next Phase Start", "Log");
    },
    updateGame() {
      //  Are all characters dead??
      let allCharactersDead =
        this.getValidCharacterTargets.length > 0 ? false : true;

      if (allCharactersDead) {
        this.gameover();
        return false;
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
          target.hpCurrent = target.hpCurrent - 10;
        }
      });
    },
    selectCharacter(c) {
      this.act.selectedCharacter = c;
    },
    selectAction(a) {
      this.act.selectedAction = a;
    },
    selectNextAction() {
      let current = this.getActions.indexOf(this.act.selectedAction);
      if (current === this.getActions.length - 1) {
        this.act.selectedAction = this.getActions[0];
      } else {
        this.act.selectedAction = this.getActions[current + 1];
      }
    },
    selectPreviousAction() {
      let current = this.getActions.indexOf(this.act.selectedAction);
      if (current === 0) {
        this.act.selectedAction = this.getActions[this.getActions.length - 1];
      } else {
        this.act.selectedAction = this.getActions[current - 1];
      }
    },
    engageAction() {
      this.log(this.act.selectedAction, "Game");
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
