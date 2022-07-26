import { enemies } from "./enemies";

function getEnemyByName(name) {
  let enemy = structuredClone(enemies.find((o) => o.name === name));
  return enemy;
}

export let formations = [
  {
    enemies: [null, null, null, null, null, getEnemyByName("Goblin"), null, {}],
    cr: 1,
  },
  {
    enemies: [
      null,
      null,
      null,
      null,
      null,
      getEnemyByName("Goblin"),
      getEnemyByName("Goblin"),
      null,
    ],
    cr: 1.1,
  },
  {
    enemies: [
      null,
      null,
      getEnemyByName("Bat"),
      null,
      null,
      getEnemyByName("Goblin"),
      getEnemyByName("Goblin"),
      null,
    ],
    cr: 1.2,
  },
  {
    enemies: [
      null,
      getEnemyByName("Bat"),
      getEnemyByName("Bat"),
      null,
      getEnemyByName("Goblin"),
      getEnemyByName("Goblin"),
      getEnemyByName("Goblin"),
      getEnemyByName("Goblin"),
    ],
    cr: 2,
  },
  {
    enemies: [null, null, null, null, null, null, getEnemyByName("Goblin Commander"), {}],
    cr: 2,
  },
  {
    enemies: [
      null,
      getEnemyByName("Bat"),
      null,
      null,
      getEnemyByName("Goblin"),
      getEnemyByName("Goblin"),
      getEnemyByName("Goblin Commander"),
      null,
    ],
    cr: 4,
  },
];

export let waves = [
  {
    name: "Wave 1",
    formations: [
      formations[0],
      formations[1],
      formations[2],
      formations[3],
      formations[4],
      formations[5],
    ],
  },
  {
    name: "Wave 2",
    formations: [
      formations[0],
      formations[1],
      formations[2],
      formations[3],
      formations[4],
      formations[5],
    ],
  },
];
