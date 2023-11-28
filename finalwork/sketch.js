let obstructions = [];
let score = 0;
let gameClear = false;
let gameStarted = false;
let startButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(89, 78, 82);
  noLoop(); // 最初はゲームが開始されていないので、ループを停止します

 // 木目の床を描画
for (let i = 0; i < windowWidth; i += 120) {
  for (let j = 0; j < windowHeight; j += 40) {
    // 偶数行と奇数行で開始位置をずらす
    let offset = (j / 40) % 2 == 0 ? 0 : -60;
    fill(130,69,50);
    rect(i + offset, j, 120, 40);
  }
}

  // ルール説明を表示
  textSize(24);
  fill(255);
  textAlign(CENTER);
  text("ルール: マウスの左ボタンでお邪魔キャラクターを消して、20個以上のお邪魔キャラクターを全て消しましょう!\nこのゲームは子ども達の学習に活かすことができます\n最初はリラックス用お掃除ゲームのつもりでしたが\n最後までやり切る力を育てることができます！", width / 2, height / 2 -80);

  // スタートボタンを表示
  startButton = createButton('スタート');
  startButton.position(width / 2 - 50, height / 2 + 90);
  startButton.mousePressed(startGame);
}

function draw() {
  if (gameStarted) {
    // ゲームのロジックと描画
    if (mouseIsPressed) {
      let hitObstruction = false;

      for (let i = obstructions.length - 1; i >= 0; i--) {
        let ob = obstructions[i];
        let d = dist(mouseX, mouseY, ob.x, ob.y);
        if (d < 15) {
          obstructions.splice(i, 1);
          hitObstruction = true;
          score++;
        }
      }

      if (!hitObstruction) {
        fill(255, 255, 249);
        noStroke();
        ellipse(mouseX, mouseY, 120, 120);
      }
    }

    if (score < 20 && random() < 0.07) {
      let ob = {
        x: random(width),
        y: random(height),
        size: random(30,60)
      };
      obstructions.push(ob);
    }

    if (!gameClear && score >= 20) {
      gameClear = true;
    }

    if (gameClear && obstructions.length === 0) {
      textSize(32);
      fill(106, 25, 23);
      textAlign(CENTER, CENTER);
      text("ゲームクリア きれいになったね！", width / 2, height / 2);
    }

    for (let ob of obstructions) {
      fill(89, 78, 82);
      ellipse(ob.x, ob.y, ob.size, ob.size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function startGame() {
  startButton.remove(); // スタートボタンを削除
  gameStarted = true;
  loop(); // ゲームループを開始
}
