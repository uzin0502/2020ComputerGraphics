let building_sl = 1;
let framerate_sl;
let fr;
let rotate_sl;
let CITY_SIZE = 800;
let BUILDING_MAX_SIZE = 40;
let gridSz = CITY_SIZE / BUILDING_MAX_SIZE;
let map = [];
let img;
let img2;
let clicksound;
let bbsound;
let delay;

function resetMap() {
  for (let i = 0; i < gridSz; i++)
    for (let j = 0; j < gridSz; j++) {
      map[i][j] = false;
    }
}


function preload() {
  img = loadImage('gameover.png');
  img2 = loadImage('ajoshi.png');
  soundFormats('mp3', 'wav');
  clicksound = loadSound('sonotcoool.mp3');
  bbsound = loadSound('bbodk.wav');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  // init map
  for (let i = 0; i < gridSz; i++) {
    map[i] = [];
    for (let j = 0; j < gridSz; j++) {
      map[i][j] = false;
    }
  }
  resetMap();
  //building_sl = createSlider(1, 300, 3);
  //building_sl.position(10, 30);
  rotate_sl = createSlider(0, 180, 0);
  rotate_sl.position(10, 50);
  framerate_sl = createSlider(1, 600, 0);
  framerate_sl.position(10,30);
  frameRate(fr);
  delay = new p5.Delay();
}

function draw() {
  background(0);
  cursor('ajoshi.png');
  randomSeed(0);
  lights();
  directionalLight(1, 0, 0, 1, 0, 0);
  rotateX(radians(rotate_sl.value()));
  fill(0.2);
  plane(1000, 1000); // draw ground
  fill(0.5);
  noStroke();
  let nBuildings = building_sl;
  translate(-CITY_SIZE / 2, -CITY_SIZE / 2);
  for (let i = 0; i < nBuildings; i++) {
    let foundEmptySpot = false;
    let x = 0,
      y = 0;
    // loop until it finds an empty spot
    while (foundEmptySpot == false) {
      x = floor(random(0, gridSz));
      y = floor(random(0, gridSz));
      if (map[x][y] == false) {
        foundEmptySpot = true;
        map[x][y] = true;
      }
    }
    // randomly determine building dimensions
    let w = random(10, BUILDING_MAX_SIZE);
    let h = random(10, BUILDING_MAX_SIZE);
    let d = random(10, 100); // building height
    // render a building
    push();
    translate(x * BUILDING_MAX_SIZE, y * BUILDING_MAX_SIZE, d / 2);
    box(w, h, d);
    pop();
  }
  resetMap();
  building_sl = building_sl + deltaTime / 50;
  if (building_sl > 300) {
    noLoop();
    background(0);
    image(img, 50,200);
  }
fr=framerate_sl.value(); 
frameRate(fr);
}

function mousePressed() {
  bbsound.play();
  delay.delayTime(10);
  clicksound.play();
}