// テキスト「キーボード操作に反応する」
let x, y, vy;
let increment = 0;
const g = 1; // Gravity
const jump = 20; // Jump power
const ground = 404;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vy = 0;
  textSize(32);
}



function draw(){
  background(160, 192, 255);// 背景をある色で設定する
  fill(128,0,128);// この文より下の図形は、ある色で設定する
  ellipse(x, y, 50);// 半径50の円を描く
  fill(128,128,0);// この文より下の図形は、ある色で設定する
  rect(0,404,1500,1000)// 左上の点を規準に、横幅と縦幅のある長方形を描く
  if (keyIsPressed) {// もし、その人がキーボードを触っていたら、
    if (keyCode !== LEFT_ARROW) {// そのキーが左矢印ではない時、
      incrementL = 5;// 左定数を５をする
    }
  else {
   incrementL = 0;// 左定数を0をする
    }
  if (keyIsPressed) {
      // 特定のキーのキーコードを確認
    if (keyCode !== RIGHT_ARROW) {
        incrementR = 5;
      }
  else {
     incrementR= 0;
      }
  if(keyIsDown(LEFT_ARROW)){ x -= incrementL+5; }
  if(keyIsDown(RIGHT_ARROW)){ x += incrementR+5; }  
}
}
if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
text("獲加多支鹵大王の旅", 100, 200);

y += vy;
if(y >404)
   vy += g;
else{
  vy = 0;
}
function mousePressed(){
  if(y < 404){ // 地面にいるときだけジャンプできる（この条件をなくせば空中ジャンプが可能になります）
    vy = -jump;     
  }
}
}
