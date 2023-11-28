// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 1; i < 11; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 1; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    for (let i = 0; i < scores.length; i++) {
      ellipse(i * dx, scores[i], 5, 5); // 点を描画
      if (i > 0) {
        line(px, py, i * dx, scores[i]); // 線を引く
      }
      px = i * dx;
      py = scores[i];
    }
  }
}
