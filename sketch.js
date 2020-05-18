//YAY!
let charlie;
let dino1;
let dino2;
let dino3;
let dino4;
let dino5;
let DINO;
let DINOO;
let DINOOO;
let DINOOOO;
let city;
let rock0;
let rock1;
let rock2;
let rock3;
let rock4;
let rock5;
let rock6;
let rock7;
let loveAngle = 0;

function preload() {
  soundFormats('mp3', 'm4a');
  charlie = loadSound("Voice 004.m4a");
  dino1 = loadModel("empty.obj");
  dino2 = loadModel("dino2.obj");
  dino3 = loadModel("dino3.obj");
  dino4 = loadModel("dino4.obj");
  dino5 = loadModel("dino5.obj");
  city = loadModel("Space Station Scene.obj");
  rock0 = loadModel("Rock0.obj");
  rock1 = loadModel("Rock1.obj");
  rock2 = loadModel("Rock4.obj");
  rock3 = loadModel("Rock5.obj");
  rock4 = loadModel("Rock8.obj");
  rock5 = loadModel("Rock6.obj");
  rock6 = loadModel("Rock7.obj");
  rock7 = loadModel("Rock9.obj");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  DINO = dino2;
  DINOO = dino3;
  DINOOO = dino4;
  DINOOOO = dino5;
  angleMode(DEGREES);
}

function draw() {

  let banjireum = 700;
  loveAngle++;
  camera(banjireum * sin(loveAngle), 0, (banjireum+4) * cos(loveAngle), 0, 0, 0, 0, 1, 0);
  let x = map(mouseX, 0, width, 0, 255);
  let y = map(mouseY, 0, height, 0, 255);
  background(x, y, 100);
  colorMode(RGB, 1);
  // set light
  ambientLight(0.2);
  specularColor(1, 1, 1);
  directionalLight(1, 1, 1, 0, 0, -1);
  let r = map(mouseX, 0, width, -radians(180), radians(180));
  rotateY(r);
  let h = map(mouseY, 0, height, 0, 360);
  colorMode(HSB, 360, 100, 100, 100);
  fill(h, 100, 100, 60);
  stroke(0, 0, 100);
  translate(0,140,0);
  normalMaterial();
  scale(5);
  model(city);
  scale(90);
  rotateY(frameCount);
  rotateZ(frameCount);
  translate(0.3, 0, 0);
  model(DINO);
  rotateY(frameCount);
  rotateZ(frameCount);
  translate(-0.3, 0.1, 0);
  model(DINOO);
  rotateY(frameCount);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  translate(0.2, 0.2, 0);
  model(DINOOO);
  rotateY(frameCount);
  rotateZ(frameCount);
  translate(-4, 2, 0);
  model(DINOOOO);
  scale(0.0005);
  translate(10, 5, 2);
  model(rock0);
  translate(-1000, -1000, -500);
  model(rock1);
  translate(1000, 4000, 1000);
  model(rock2);
  translate(-3000, 13000, 4000);
  model(rock3);
  translate(18000, -5000, 5000);
  model(rock4);
  translate(600, -400, 2000);
  model(rock5);
  translate(-1100, 1000, -1000);
  model(rock6);
  translate(-4000, 12000, 300);
  model(rock7);

}

function mousePressed() {
  if (charlie.isPlaying()) {
    charlie.stop();
  } else {
    charlie.play();
  }
}