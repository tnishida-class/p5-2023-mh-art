function setup() {
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for (let i = 0; i < 10; i++) {
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  let startAngle = 0;
  for (let i = 0; i < scores.length; i++) {
    let angle = (scores[i] / total) * TWO_PI; // 各スコアの割合を計算
    let endAngle = startAngle + angle;

    fill(255); // 塗りつぶしを白に設定
    stroke(0); // 枠線の色を黒に設定
    strokeWeight(1); // 枠線の太さを設定
    arc(width / 2, height / 2, 200, 200, startAngle, endAngle); // 円弧を描画

    // 直線を描画して境界線を表現
    let x1 = width / 2;
    let y1 = height / 2;
    let x2 = x1 + cos(startAngle) * 100;
    let y2 = y1 + sin(startAngle) * 100;
    strokeWeight(1);
    line(x1, y1, x2, y2);

    // 円弧の中に数値を表示
    let labelAngle = startAngle + angle / 2; // 数値を表示する位置を計算
    let labelX = x1 + cos(labelAngle) * 80; // 数値のX座標
    let labelY = y1 + sin(labelAngle) * 80; // 数値のY座標
    textAlign(CENTER, CENTER); // テキストを中央揃えに設定
    fill(0); // 数値の色を黒に設定
    text(scores[i].toFixed(1), labelX, labelY); // 数値を表示

    startAngle = endAngle; // 次のセクションの開始角度
  }
}
