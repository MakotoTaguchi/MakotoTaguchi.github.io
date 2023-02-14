q = new Array();
q[0] = [
  "唾液の成分と働きの組み合わせで正しいのはどれか。一つ選べ。",
  "唾液アミラーゼ --------- 消化作用",
  "ムチン --------- 抗菌作用",
  "リゾチーム --------- 細胞膜分解作用",
  "スタテリン --------- 潤滑作用",
  1,
  "<br/><br/>1: 唾液アミラーゼは消化作用<br/>2: ムチンは潤滑作用と歯質保護作用<br/>3: リゾチームは抗菌作用<br/>4: スタテリンは再石灰化作用",
];
q[1] = [
  "唾液の成分の中で、抗菌作用では無いものはどれか。一つ選べ。",
  "分泌型IgA",
  "リゾチーム",
  "ムチン",
  "ラクトフェリン",
  3,
  "<br/><br/>1: 分泌型IgAは抗菌作用<br/>2: リゾチームは抗菌作用<br/>3: ムチンは潤滑作用と歯質保護作用<br/>4: ラクトフェリンは抗菌作用",
];
q[2] = [
  "唾液の成分と働きの組み合わせで正しいのはどれか。一つ選べ。",
  "重炭酸塩 --------- 消化作用",
  "バロチン --------- 歯質保護作用",
  "ベリクル --------- 清浄作用",
  "ラクトフェリン --------- 抗菌作用",
  4,
  "<br/><br/>1: 重炭酸塩は緩衝作用<br/>2: バロチンは内分泌作用<br/>3: ベリクルは抗脱灰作用<br/>4: ラクトフェリンは抗菌作用",
];
q[3] = [
  "唾液の成分の中で、抗菌作用では無いものはどれか。一つ選べ。",
  "重炭酸塩",
  "チオシアン酸塩",
  "ヒスタチン",
  "ディフェンシン",
  1,
  "<br/><br/>1: 重炭酸塩は緩衝作用<br/>2: チオシアン酸塩は抗菌作用<br/>3: ヒスタチンは抗菌作用<br/>4: ディフェンシンは抗菌作用",
];
q[4] = [
  "唾液の成分と働きの組み合わせで正しいのはどれか。一つ選べ。",
  "ディフェンシン --------- 歯質保護作用",
  "チオシアン酸塩 --------- 消化作用",
  "ムチン --------- 清浄作用",
  "スタテリン --------- 再石灰化作用",
  4,
  "<br/><br/>1: ディフェンシンは抗菌作用<br/>2: チオシアン酸塩は抗菌作用<br/>3: ムチンは潤滑作用と歯質保護作用<br/>4: スタテリンは再石灰化作用",
];

q_sel = 4;

setReady();

function setReady() {
  count = 0;
  answers = new Array();

  quiz();
}

function quiz() {
  let s, n;
  document.getElementById("text_q").innerHTML =
    count + 1 + "問目 " + q[count][0];

  s = "";
  for (n = 1; n <= q_sel; n++) {
    s +=
      "<div>【<a href='javascript:answer(" +
      n +
      ")'>" +
      n +
      ": " +
      q[count][n] +
      "</a>】</div>" +
      "<br/>";
  }
  document.getElementById("text_s").innerHTML = s;
}

function answer(num) {
  let s;
  s = count + 1 + "問目: ";

  if (num == q[count][q_sel + 1]) {
    s += "○" + q[count][num] + q[count][6];
    answers[count] = "○";
  } else {
    s += "×" + q[count][num] + q[count][6];
    answers[count] = "×";
  }
  document.getElementById("text_a").innerHTML = s;

  count++;
  if (count < q.length) {
    quiz();
  } else {
    s = "<table border='2'><caption>成績発表</caption>";

    s += "<tr><th>問題</th>";
    for (n = 0; n < q.length; n++) {
      s += "<th>" + (n + 1) + "</th>";
    }
    s += "</tr>";

    s += "<tr><th>成績</th>";
    for (n = 0; n < q.length; n++) {
      s += "<td>" + answers[n] + "</td>";
    }
    s += "</tr>";
    s += "</table>";
    document.getElementById("text_q").innerHTML = s;

    s = "【<a href='javascript:history.back()'>前のページに戻る</a>】";
    s += "【<a href='javascript:setReady()'>同じ問題を最初から</a>】";
    // s += "【<a href=''>次の問題に進む</a>】";

    document.getElementById("text_s").innerHTML = "";
  }
}
