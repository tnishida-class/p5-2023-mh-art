//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(116, 83, 153);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(230,180,34)
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
    // ランダムな確率でボールを生成
    if (random(1) < 0.05) {  // ボール生成確率を調整
      const b = { x: random(width), y: random(height), size: random(10, 70), vx: random(-5, 5), vy: random(-5, 5) };
      balls.push(b);
    }
    
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      ellipse(b.x, b.y, b.size);
      b.x += b.vx;
      b.y += b.vy;
    }
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      ellipse(b.x, b.y, b.size);
      b.x += b.vx;
      b.y += b.vy;
      
      // ボール同士の衝突判定
      for (let j = 0; j < balls.length; j++) {
        if (i !== j) {
          const other = balls[j];
          const d = dist(b.x, b.y, other.x, other.y);
          
          if (d < b.size / 2 + other.size / 2) {
            // ボール同士が衝突した場合、速度を反転させる
            const tempVx = b.vx;
            const tempVy = b.vy;
            b.vx = other.vx;
            b.vy = other.vy;
            other.vx = tempVx;
            other.vy = tempVy;
          }
        }
      }
    }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(10, 70), vx: dx, vy: dy };
    balls.push(b);
  }
}

