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
  apeshit = loadSound("APESHIT.mp3");
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
  background(mouseX, mouseY, 100);
  colorMode(RGB, 1);
  // set light
  ambientLight(0.2); //La
  specularColor(1, 1, 1); // Ks
  directionalLight(1, 1, 1, 0, 0, -1);
  // Ld and Ls
  // let mouse X control rotation
  let r = map(mouseX, 0, width, -radians(180), radians(180));
  rotateY(r);
  // display mona lisa
  //noStroke();
  //beginShape();
  //texture(mona);
  //plane(457, 600, 100, 100);
  //endShape();
  // let mouse Y control color hue
  let h = map(mouseY, 0, height, 0, 360);
  colorMode(HSB, 360, 100, 100, 100);
  // material setting
  fill(h, 100, 100, 60);
  // lambert only model, Kd
  // try the following blinn-phong model and see how it changes
  // specularMaterial(h,100,100, 60);
  // parameters set both Ka and Kd
  // shininess(10);
  // shininess of specular region, ns
  // display a glass box
  stroke(0, 0, 100);
  box(305, 455, 200);
  //dino2
  scale(200.0);
  //rotateY(frameCount * 0.1);
  //rotateZ(frameCount * 0.3);
  translate(0.3,0,0);
  model(DINO);
  translate(-0.3,0.1,0);
  model(DINOO);
  translate(0.2,0.2,0);
  model(DINOOO);
  translate(-0.4,0.2,0);
  model(DINOOOO);
}

/*function mousePressed() {
  if (apeshit.isPlaying()) {
    apeshit.stop();
  } else {
    apeshit.play();
  }
  apeshit.play();
}*/

function keyPressed() {
  if (keyCode === UP_ARROW) {
  DINO = dino2;
    if (DINO == dino2){
      DINO = dino1;
    }
  } else if (keyCode === DOWN_ARROW) {
  DINOO = dino3;
  }else if (keyCode === LEFT_ARROW) {
  DINOOO = dino4;
  }else if (keyCode === RIGHT_ARROW) {
  DINOOOO = dino5;
  }
  return false; // prevent default
}