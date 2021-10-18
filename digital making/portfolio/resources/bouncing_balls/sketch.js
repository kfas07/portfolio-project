// global variables 
let ballCount = 500;
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let g = [];
let b = [];

// canvas setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < ballCount; i++) {
    x[i] = width/2;
    y[i] = height/2;
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(-5, 5);
    size[i] = random(10, 50);
    r[i] = random(0, 256);
    g[i] = random(0, 256);
    b[i] = random(0, 256);
  }
}

function draw() {
  background(0, 50);
//makes balls
  for(let i = 0; i < ballCount; i++) {
  // makes balls move
    x[i] += xSpeed[i];
    y[i] += ySpeed[i];
  // makes balls bounce left and right
  if (x[i] < 0 || x[i] > width) {
    xSpeed[i] *= -1;
  }
// makes balls bounce up and down
  if (y[i] < 0 || y[i] > height) {
    ySpeed[i] *= -1;
  }
  // colors balls
  fill(r[i], g[i], b[i]);
  //erases circle borders 
  noStroke();
  // makes circles
    ellipse(x[i], y[i], size[i], size[i]);
  }
}