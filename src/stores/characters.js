export let characters = [
  {
    name: "Locke",
    fileName: "locke",
    isRecruited: true,
    isBackrow: true,
    pos: 1,
    offset: 3.7,
    nextTurn: 100,
    speed: 290,
    phys: 20,
    mag: 10,
    level: 1,
    exp: 0,
    hpMax: 100,
    hpCurrent: 100,
    mpMax: 20,
    mpCurrent: 10,
    wpn: null,
    head: null,
    armor: null,
    relic: null,
    relic2: null,
    abilities: [
      { label: "Steal", hasSub: false },
      { label: "Sap", hasSub: false },
      { label: "Exploit", hasSub: false },
    ],
    levelUp: [
      [1, 1, 3, 1, 100],
      [2, 1, 4, 2, 250],
      [3, 2, 5, 3, 600],
    ],
    animations: [
      {
        name: "idle",
        frames: [{"x":26,"y":67,"w":15,"h":23,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null}],
      },
      {
        name: "walk_in",
        frames: [{"x":7,"y":67,"w":16,"h":23,"xo":-60,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":26,"y":67,"w":15,"h":23,"xo":-50,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":45,"y":67,"w":15,"h":23,"xo":-40,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":26,"y":67,"w":15,"h":23,"xo":-30,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":7,"y":67,"w":16,"h":23,"xo":-20,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":26,"y":67,"w":15,"h":23,"xo":-10,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":45,"y":67,"w":15,"h":23,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":26,"y":67,"w":15,"h":23,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null}],
      },
      {
        name: "damage",
        frames: [{ x: 229, y: 228, w: 25, h: 30, xo: 0, yo: 0 }],
      },
      {
        name: "fight",
        frames: [{ x: 229, y: 228, w: 25, h: 30, xo: 0, yo: 0 }],
      },
      {
        name: "death",
        frames: [{ x: 229, y: 228, w: 25, h: 30, xo: 0, yo: 0 }],
      },
    ],
  },
  {
    name: "Cecil",
    fileName: "cecil",
    isRecruited: true,
    isBackrow: false,
    pos: null,
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
    abilities: [
      { label: "Rage", hasSub: false },
      { label: "Darkness", hasSub: false },
    ],
    levelUp: [
      [1, 1, 3, 1, 100],
      [2, 1, 4, 2, 250],
      [3, 2, 5, 3, 600],
    ],
  },
  {
    name: "Rydia",
    fileName: "rydia",
    isRecruited: true,
    isBackrow: true,
    pos: 3,
    offset: 3.2,
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
    abilities: [
      { label: "Summon", hasSub: false },
      { label: "Magic", hasSub: false },
    ],
    levelUp: [
      [1, 1, 1, 3, 100],
      [2, 1, 1, 5, 250],
      [3, 2, 2, 6, 600],
    ],
    animations: [
      {
        name: "idle",
        frames: [{"x":26,"y":70,"w":15,"h":24,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null}],
      },
      {
        name: "walk_in",
        frames: [{"x":7,"y":70,"w":16,"h":24,"xo":-60,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":26,"y":70,"w":15,"h":24,"xo":-50,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":45,"y":70,"w":15,"h":24,"xo":-40,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":26,"y":70,"w":15,"h":24,"xo":-30,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":7,"y":70,"w":16,"h":24,"xo":-20,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":26,"y":70,"w":15,"h":24,"xo":-10,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":45,"y":70,"w":15,"h":24,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":7,"y":70,"w":16,"h":24,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null}],
      },
      {
        name: "damage",
        frames: [{ x: 229, y: 228, w: 25, h: 30, xo: 0, yo: 0 }],
      },
      {
        name: "fight",
        frames: [{ x: 229, y: 228, w: 25, h: 30, xo: 0, yo: 0 }],
      },
      {
        name: "death",
        frames: [{ x: 229, y: 228, w: 25, h: 30, xo: 0, yo: 0 }],
      },
    ],
  },
  {
    name: "X",
    fileName: "x",
    isRecruited: true,
    isBackrow: false,
    offset: 2.7,
    pos: 0,
    nextTurn: 100,
    speed: 280,
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
    state: null,
    abilities: [
      { label: "Examine", hasSub: false, targets: ["1e"] },
      { label: "Charge", hasSub: false },
      { label: "Mimetic", hasSub: false },
    ],
    levelUp: [
      [1, 1, 1, 3, 100],
      [2, 1, 1, 5, 250],
      [3, 2, 2, 6, 600],
    ],
    animations: [
      {
        name: "idle",
        frames: [{"x":2408,"y":29,"w":30,"h":34,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null}],
      },
      {
        name: "walk_in",
        frames: [{"x":2825,"y":14,"w":12,"h":50,"xo":9,"yo":-17,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":"MMX - X Fade In.wav"},{"x":2798,"y":33,"w":24,"h":31,"xo":2,"yo":2,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2764,"y":21,"w":31,"h":42,"xo":0,"yo":-4,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2690,"y":24,"w":31,"h":39,"xo":0,"yo":-3,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2653,"y":27,"w":31,"h":36,"xo":0,"yo":-2,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2619,"y":29,"w":31,"h":34,"xo":0,"yo":-1,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2584,"y":29,"w":30,"h":34,"xo":0,"yo":0,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2549,"y":29,"w":30,"h":34,"xo":0,"yo":0,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2516,"y":29,"w":29,"h":34,"xo":0,"yo":0,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2480,"y":29,"w":30,"h":34,"xo":0,"yo":0,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2445,"y":29,"w":30,"h":34,"xo":0,"yo":0,"filter":null,"repeat":true,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null},{"x":2408,"y":29,"w":30,"h":34,"xo":0,"yo":0,"filter":null,"repeat":false,"effectAnim":null,"effectAnimX":null,"effectAnimY":null,"playSound":null}],
      },
      {
        name: "damage",
        frames: [{"x":401,"y":26,"w":33,"h":37,"xo":0,"yo":0},{"x":260,"y":329,"w":33,"h":37,"xo":0,"yo":0},{"x":292,"y":329,"w":33,"h":37,"xo":0,"yo":0},{"x":324,"y":329,"w":32,"h":37,"xo":0,"yo":0,"filter":"brightness(200%)","playSound":"MMX - X Hurt.wav","repeat":false},{"x":353,"y":329,"w":32,"h":37,"xo":0,"yo":0},{"x":353,"y":329,"w":32,"h":37,"xo":0,"yo":0},{"x":324,"y":329,"w":32,"h":37,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":324,"y":329,"w":32,"h":37,"xo":0,"yo":0},{"x":292,"y":329,"w":33,"h":37,"xo":0,"yo":0},{"x":260,"y":329,"w":33,"h":37,"xo":0,"yo":0},{"x":224,"y":26,"w":33,"h":37,"xo":0,"yo":0},{"x":364,"y":26,"w":33,"h":37,"xo":0,"yo":0},{"x":401,"y":26,"w":33,"h":37,"xo":0,"yo":0}],
      },
      {
        name: "fight",
        frames: [{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(120%)","playSound":"MMX - X Charge + Shot.wav"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(140%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(160%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(180%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(220%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(240%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(250%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(250%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(250%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(250%)"},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":402,"y":27,"w":31,"h":36,"xo":0,"yo":0,"repeat":false,"filter":"brightness(150%"},{"x":402,"y":27,"w":31,"h":36,"xo":0,"yo":0,"repeat":false,"filter":"brightness(120%"},{"x":402,"y":27,"w":31,"h":36,"xo":0,"yo":0,"repeat":false},{"x":365,"y":27,"w":31,"h":36,"xo":0,"yo":0}],
      },
      {
        name: "death",
        frames: [{ x: 229, y: 228, w: 25, h: 30, xo: 0, yo: 0 }],
      },
    ],
  },
  {
    name: "Frog",
    fileName: "frog",
    isRecruited: true,
    isBackrow: false,
    offset: 3,
    pos: 2,
    nextTurn: 10,
    speed: 28,
    phys: 28,
    mag: 28,
    level: 1,
    exp: 0,
    hpMax: 150,
    hpCurrent: 150,
    mpMax: 100,
    mpCurrent: 100,
    wpn: null,
    head: null,
    armor: null,
    relic: null,
    relic2: null,
    state: null,
    abilities: [
      { label: "Jump", hasSub: false, targets: ["1e"] },
      { label: "Magic", hasSub: true, targets: ["1e"] },
      {
        label: "Reserve",
        hasSub: false,
        targets: ["reserve"],
      },
    ],
    levelUp: [
      [1, 1, 1, 3, 100],
      [2, 1, 1, 5, 250],
      [3, 2, 2, 6, 600],
    ],
    animations: [
      {
        name: "idle",
        frames: [{"x":241,"y":59,"w":24,"h":24,"xo":0,"yo":0,"repeat":false}],
      },
      {
        name: "walk_in",
        frames: [{"x":7,"y":59,"w":13,"h":24,"xo":-60,"yo":0},{"x":23,"y":59,"w":15,"h":24,"xo":-50,"yo":0},{"x":41,"y":59,"w":21,"h":24,"xo":-40,"yo":0},{"x":65,"y":59,"w":16,"h":24,"xo":-30,"yo":0},{"x":84,"y":59,"w":14,"h":24,"xo":-20,"yo":0},{"x":102,"y":59,"w":19,"h":24,"xo":-10,"yo":0},{"x":127,"y":59,"w":14,"h":24,"xo":0,"yo":0},{"x":156,"y":59,"w":23,"h":24,"xo":-6,"yo":-1},{"x":183,"y":59,"w":22,"h":24,"xo":-3,"yo":0},{"x":206,"y":59,"w":31,"h":24,"xo":2,"yo":0,"playSound":"ct-draw.ogg"},{"x":241,"y":59,"w":24,"h":24,"xo":0,"yo":0,"repeat":false}],
      },
      {
        name: "damage",
        frames: [{"x":229,"y":228,"w":25,"h":30,"xo":0,"yo":0},{"x":262,"y":228,"w":20,"h":25,"xo":0,"yo":0,"playSound":"ct-thump1.ogg"},{"x":262,"y":228,"w":20,"h":25,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":262,"y":228,"w":20,"h":25,"xo":0,"yo":0},{"x":262,"y":228,"w":20,"h":25,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":229,"y":228,"w":25,"h":30,"xo":0,"yo":0,"repeat":false}],
      },
      {
        name: "fight",
        frames: [{"x":229,"y":228,"w":25,"h":30,"xo":20,"yo":0},{"x":16,"y":403,"w":32,"h":32,"xo":40,"yo":3},{"x":144,"y":405,"w":34,"h":27,"xo":80,"yo":-1,"playSound":"ct-slash2.ogg"},{"x":237,"y":442,"w":23,"h":36,"xo":120,"yo":-20},{"x":237,"y":442,"w":23,"h":36,"xo":120,"yo":-20},{"x":237,"y":442,"w":23,"h":36,"xo":120,"yo":-20},{"x":144,"y":405,"w":34,"h":27,"xo":80,"yo":-1},{"x":229,"y":228,"w":25,"h":30,"xo":0,"yo":0,"repeat":false}],
      },
      {
        name: "death",
        frames: [{"x":229,"y":228,"w":25,"h":30,"xo":0,"yo":0},{"x":258,"y":228,"w":25,"h":25,"xo":0,"yo":0,"playSound":"ct-thump1.ogg"},{"x":258,"y":228,"w":25,"h":25,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":258,"y":228,"w":25,"h":25,"xo":0,"yo":0},{"x":258,"y":228,"w":25,"h":25,"xo":0,"yo":0,"filter":"brightness(200%)"},{"x":320,"y":60,"w":13,"h":23,"xo":0,"yo":0},{"x":338,"y":60,"w":20,"h":23,"xo":3,"yo":0,"playSound":"ct-croak.ogg"},{"x":361,"y":70,"w":25,"h":14,"xo":7,"yo":10,"repeat":false}],
      },
    ],
  },
];
