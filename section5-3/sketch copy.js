function setup() {
  createCanvas(400, 400);
  calendar(2023, 11);
}

function draw() {
  background(220); // キャンバスの背景色を設定
  let cellSize = 50; // カレンダーセルのサイズ
  let x = 0;
  let y = 100;

  // カレンダーの上部に年月を表示
  textSize(20);
  textAlign(CENTER);
  fill(0); // テキストの色を黒に設定
  text("2023年11月", width / 2, 50); // カレンダーの上部中央に表示

  for (let d = 1; d <= daysInMonth(2023, 11); d++) {
    // 日付セルの描画
    let cellTextColor = 0; // セルの文字の色を黒に初期化

    if (dayOfWeek(2023, 11, d) === 0) {
      // 日曜日の場合、セルの文字の色を赤に変更
      cellTextColor = color(255, 0, 0);
    } else if (dayOfWeek(2023, 11, d) === 6) {
      // 土曜日の場合、セルの文字の色を青に変更
      cellTextColor = color(0, 0, 255);
    }

    fill(255); // セルの背景色を白に設定
    stroke(0); // セルの境界線を黒に設定
    rect(x, y, cellSize, cellSize);
    
    // 日付の描画
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(cellTextColor); // セルの文字の色を設定
    text(d, x + cellSize / 2, y + cellSize / 2);

    // 曜日の描画
    textSize(12);
    fill(0); // 曜日のテキストの色を黒に設定
    text(dayOfWeekAsString(dayOfWeek(2023, 11, d)), x + cellSize / 2, y + cellSize - 10);

    x += cellSize;

    if (dayOfWeek(2023, 11, d) === 6) {
      // 土曜日の後は改行
      x = 0;
      y += cellSize;
    }
  }
}

function calendar(y, m) {
  // カレンダーの描画
  // 以前のコードと同じです
}

function isLeapYear(y) {
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y) {
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m) {
  if (m == 2) {
    return isLeapYear(y) ? 29 : 28;
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    return 30;
  } else {
    return 31;
  }
}

function dayOfYear(y, m, d) {
  let count = 0;
  for (let i = 1; i < m; i++) {
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d) {
  const dayscount = dayOfYear(y, m, d) - dayOfYear(1970, 1, 1);
  return (dayscount) % 7;
}

function dayOfWeekAsString(dow) {
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
