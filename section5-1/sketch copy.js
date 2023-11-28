function setup() {
  createCanvas(400, 400);
  background(240, 144, 141);
  noStroke();

  // 正n角形を描画
  const n = int(random(3,15)); // nの値（任意の数）
  const Xcentral = width / 2;
  const Ycentral = height / 2;
  const radius = width / 4;
  const fillColor = color(232, 236, 239);

  regularPolygon(n, Xcentral, Ycentral, radius, fillColor);
}

function regularPolygon(n, cx, cy, r, fillColor) {
  fill(fillColor);
  beginShape();
  for (let i = 0; i < n; i++) {
    let theta = (TWO_PI * i + HALF_PI) / n ;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
