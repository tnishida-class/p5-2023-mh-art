function setup(){
  createCanvas(400, 400);
  background(0, 51, 153);
  noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = width/2 + cos(theta) * width/4;
    let y = height/2 + sin(theta) * height/4;
    fill(255, 204, 0);
    star(x, y, width/20);
    }
  }
  
  function star(cx, cy, r){
    beginShape();
    for (let i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  