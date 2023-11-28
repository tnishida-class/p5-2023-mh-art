function setup() {
  createCanvas(400, 400);
  background(255);
  // balloon 関数に必要な情報を引数として渡します
  balloon("I love keyakizaka46", 50, 50, color(255, 0, 0)); // テキスト、x座標、y座標、背景色
}

function balloon(t, x, y, bgColor) {
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10; // パディングのサイズを変更
  let tailHeight = 20; // しっぽの高さ

  // 背景色を指定
  fill(bgColor);
  // 吹き出しの四角形を描画
  rect(x, y + tailHeight, w + p * 2, h + p * 2);

  fill(255);
  // テキストを描画
  text(t, x + p, y + h + p + tailHeight);

  // 吹き出しのしっぽを描画
  triangle(x + w / 2, y + tailHeight, x + w / 2 - 10, y, x + w / 2 + 10, y);
}
