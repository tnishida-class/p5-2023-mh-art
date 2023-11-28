// ギリシャ国旗
function setup() {
  const blue = color(13, 94, 175);
  createCanvas(270, 180);
  background(255);
  noStroke();

  let d = height / 9; // 縞1本の太さ

  for (let i = 0; i < 9; i++) {
    if (i % 2 === 0) {
      fill(blue); // 偶数行は青
    } else {
      fill(255); // 奇数行は白
    }
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  let crossWidth = d * 1;
  let crossHeight = d * 1;
  rect(0, d * 2, size, crossWidth); // 横のビーム
  rect(d * 2, 0, crossHeight, size); // 縦のビーム
}
