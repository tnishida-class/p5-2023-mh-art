// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2023, 11);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){             //Leapは日本語でうるう年という意味
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);   //DOW means the first letters of  Day of Week
  for(let d = 1; d <= daysInMonth(y, m); d++){
    let day = dayOfWeekAsString(dow);
    console.log(y + "年" + m + "月" + d + "日は" + day + "曜日");
    dow = (dow + 1) % 7;
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);  //4年に一度うるう年である
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;    //もしうるう年なら366,そうでないなら365日
}

function daysInMonth(y, m){
  if(m == 2){           //もしｍ（月）が2月なら
    return isLeapYear(y) ? 29 : 28;     
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){     //もしｍ（月）が30日ある月なら
    return 30;           //30という数を出力する
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;     //30×ｎ月＋5日なら５日　
}

function dayOfWeek(y, m, d){
   const dayscount = dayOfYear(y, m, d) - dayOfYear(1970, 1, 1);
  return (dayscount) % 7;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
