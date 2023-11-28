// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }
  console.log("生成した数値: " + scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log("合計: " +sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  // 　平均値（average = 合計 / 配列の長さ）
  average = sum / scores.length
  console.log("平均値: " + average);
 
  largest = 0;
  for(let i = 0; i < scores.length; i++){
     if (scores[i] > largest) {
      largest = scores[i];
    }          // 今までの最大値 largest と scores[i] を比較する
  }
   console.log("最大値: " + largest);

     // 最小値を求める
  smallest = scores[0]; 
  for(let i = 0; i < scores.length; i++){
    if (scores[i] < smallest) {
      smallest = scores[i];
    }
  }
  console.log("最小値: " + smallest);

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    // 条件分岐を使って色を変更します
    if (scores[i] === largest) {
      fill(255, 0, 0); // 最大値の棒は赤色
    } else if (scores[i] === smallest) {
      fill(0, 0, 255); // 最小値の棒は青色
    } else {
      fill(0); // その他の棒は黒色
    }

    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }

  // BLANK[5] 平均点の線を引きます
 // 平均点の線を引きます
 const h2 = height * average / 100;
  stroke(0, 206, 209); // 線の色を赤に設定
  strokeWeight(4);
  line(0, height - h2, width,  height - h2);
}