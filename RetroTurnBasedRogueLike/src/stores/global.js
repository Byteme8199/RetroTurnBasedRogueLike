import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    characters: [
      {
        name: "Locke",
        isRecruited: true,
        isBackrow: true,
        pos: 0,
        nextTurn: 100,
        speed: 219,
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
        abilities: ["Fight", "Convert", "Rage", "Darkness"],
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
        abilities: ["Fight", "Convert", "Rage", "Darkness"],
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
        pos: 2,
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
        abilities: ["Fight", "Summon", "Black Magic"],
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
        pos: 3,
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
        abilities: ["Fight"],
        levelUp: [
          [1, 1, 1, 3, 100],
          [2, 1, 1, 5, 250],
          [3, 2, 2, 6, 600],
        ],
      },
    ],
    selectedCharacter: null,
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
    moment: 0,
  }),
  getters: {
    getAvailableCharacters: (state) => {
      return state.characters.filter((c) => c.isRecruited);
    },
    getActiveCharacters: (state) => {
      let activeField = [{}, {}, {}, {}];
      state.characters.map((c) => (activeField[c.pos] = c));
      return activeField;
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
    getMoment: (state) => state.moment,
  },
  actions: {
    getCharacter(name) {
      this.characters.filter((c) => {
        return c.name === name;
      });
    },
    incrementMoment() {
      this.moment++;
    },
    updateGame() {
      // increment game timer
      this.incrementMoment();
      // decrease nextTurn counters
      function speedFunc(c) {
        //  speed reduces nextTurn # by this formula.
        let speedReduction = Math.log(c.speed) / Math.log(255);
        let speedReductionSane = speedReduction <= 0.1 ? 0.1 : speedReduction;
        c.nextTurn =
          c.nextTurn - speedReductionSane.toFixed(2) - Math.random() / 2;
      }

      this.characters.map((c) => (c.nextTurn > 0 ? speedFunc(c) : 0));

      // go over each enemy, if nextTurn === 0, then have them do stuff
      this.enemies.map((c) => {
        c.nextTurn > 0 ? speedFunc(c) : 0;
        if (c.nextTurn <= 0) {
          console.log(`${c.name} ATTACKS!`);
          c.nextTurn = 100;
        }
      });
    },
  },
});
