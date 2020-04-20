//YAY!
let apeshit;
let dino1;
let dino2;
let dino3;
let dino4;
let dino5;
let DINO;
let DINOO;
let DINOOO;
let DINOOOO;

function preload() {
  soundFormats('mp3', 'wav');
  apeshit = loadSound("Stupid Love.mp3");
  dino1 = loadModel("empty.obj");
  dino2 = loadModel("dino2.obj");
  dino3 = loadModel("dino3.obj");
  dino4 = loadModel("dino4.obj");
  dino5 = loadModel("dino5.obj");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  DINO = dino1;
  DINOO = dino1;
  DINOOO = dino1;
  DINOOOO = dino1;
}

function draw() {
  let x = map(mouseX, 0, width, 0, 255);
  let y = map(mouseY, 0, height, 0, 255);
  background(x, y, 100);
  colorMode(RGB, 1);
  // set light
  ambientLight(0.2);
  specularColor(1, 1, 1);
  directionalLight(1, 1, 1, 0, 0, -1);
  // Ld and Ls
  // let mouse X control rotation
  let r = map(mouseX, 0, width, -radians(180), radians(180));
  rotateY(r);
  let h = map(mouseY, 0, height, 0, 360);
  colorMode(HSB, 360, 100, 100, 100);
  // material setting
  fill(h, 100, 100, 60);
  // display a glass box
  stroke(0, 0, 100);
  box(380, 380, 380);
  //dino2
  scale(200.0);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  translate(0.3, 0, 0);
  model(DINO);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  translate(-0.3, 0.1, 0);
  model(DINOO);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  translate(0.2, 0.2, 0);
  model(DINOOO);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  translate(-0.4, 0.2, 0);
  model(DINOOOO);
}

function mousePressed() {
  if (apeshit.isPlaying()) {
    apeshit.stop();
  } else {
    apeshit.play();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (DINO == dino2) {
      DINO = dino1;
    } else {
      DINO = dino2;
    }
  } else if (keyCode === DOWN_ARROW) {
    if (DINOO == dino3) {
      DINOO = dino1;
    } else {
      DINOO = dino3;
    }

  } else if (keyCode === LEFT_ARROW) {
    if (DINOOO == dino4) {
      DINOOO = dino1;
    } else {
      DINOOO = dino4;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (DINOOOO == dino5) {
      DINOOOO = dino1;
    } else {
      DINOOOO = dino5;
    }
  }
  return false; // prevent default
}
