// Simple jump: the circle jumps when the mouse button is pressed on the canvas.
const g = 1; // Gravity
const jump = 20; // Jump power
const ground = 20;
const size = 20;

let x, y, vy;

function setup() {
  createCanvas(400, 400);
  
  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
}

function draw() {
  background(220);
  
  let gy = height - ground;
  line(0, gy, width, gy);
  
  ellipse(x, y, size, size); 
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  y += vy;
  
  if(y < height - ground - size / 2){ // in the air
    vy += g;
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
}

function keyPressed(){
  if(y >= height - ground - size / 2 && key == ' '){ // on the ground
    vy = -jump;     
  }
}

