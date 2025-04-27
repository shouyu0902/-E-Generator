const letters = {
  A: [
    "    E    ",
    "   E E   ",
    "  E   E  ",
    " EEEEEEE ",
    " E     E ",
    "E       E"
  ],
  B: [
    "EEEEEEE  ",
    "E      E ",
    "EEEEEEE  ",
    "E      E ",
    "E      E ",
    "EEEEEEE  "
  ],
  C: [
    " EEEEE ",
    "E      ",
    "E      ",
    "E      ",
    "E      ",
    " EEEEE "
  ],
  D: [
    "EEEEEE  ",
    "E     E ",
    "E      E",
    "E      E",
    "E     E ",
    "EEEEEE  "
  ],
  E: [
    "EEEEEEE ",
    "E       ",
    "EEEEEE  ",
    "E       ",
    "E       ",
    "EEEEEEE "
  ],
  F: [
    "EEEEEEE ",
    "E       ",
    "EEEEEE  ",
    "E       ",
    "E       ",
    "E       "
  ],
  G: [
    " EEEEE  ",
    "E       ",
    "E       ",
    "E   EEE ",
    "E     E ",
    " EEEEE  "
  ],
  H: [
    "E     E ",
    "E     E ",
    "EEEEEEE ",
    "E     E ",
    "E     E ",
    "E     E "
  ],
  I: [
    " EEEEE ",
    "   E   ",
    "   E   ",
    "   E   ",
    "   E   ",
    " EEEEE "
  ],
  J: [
    "  EEEEE ",
    "    E   ",
    "    E   ",
    "    E   ",
    "E   E   ",
    " EEEE   "
  ],
  K: [
    "E    E ",
    "E   E  ",
    "E  E   ",
    "EEE    ",
    "E  E   ",
    "E   E  "
  ],
  L: [
    "E       ",
    "E       ",
    "E       ",
    "E       ",
    "E       ",
    "EEEEEEE "
  ],
  M: [
    "E       E",
    "EE     EE",
    "E E   E E",
    "E  E E  E",
    "E   E   E",
    "E       E"
  ],
  N: [
    "E       E",
    "EE      E",
    "E E     E",
    "E  E    E",
    "E   E   E",
    "E    E  E"
  ],
  O: [
    " EEEEE ",
    "E     E",
    "E     E",
    "E     E",
    "E     E",
    " EEEEE "
  ],
  P: [
    "EEEEEE ",
    "E     E",
    "E     E",
    "EEEEEE ",
    "E      ",
    "E      "
  ],
  Q: [
    " EEEEE  ",
    "E     E ",
    "E     E ",
    "E   E E ",
    "E    E  ",
    " EEEE E "
  ],
  R: [
    "EEEEEE  ",
    "E     E ",
    "E     E ",
    "EEEEEE  ",
    "E   E   ",
    "E    E  "
  ],
  S: [
    " EEEEE ",
    "E      ",
    " EEEEE ",
    "      E",
    "      E",
    "EEEEE  "
  ],
  T: [
    "EEEEEEE",
    "   E   ",
    "   E   ",
    "   E   ",
    "   E   ",
    "   E   "
  ],
  U: [
    "E     E",
    "E     E",
    "E     E",
    "E     E",
    "E     E",
    " EEEEE "
  ],
  V: [
    "E     E",
    "E     E",
    "E     E",
    " E   E ",
    "  E E  ",
    "   E   "
  ],
  W: [
    "E       E",
    "E       E",
    "E   E   E",
    "E  E E  E",
    "E E   E E",
    "E       E"
  ],
  X: [
    "E     E",
    " E   E ",
    "  E E  ",
    "  E E  ",
    " E   E ",
    "E     E"
  ],
  Y: [
    "E     E",
    " E   E ",
    "  E E  ",
    "   E   ",
    "   E   ",
    "   E   "
  ],
  Z: [
    "EEEEEEE",
    "     E ",
    "    E  ",
    "   E   ",
    "  E    ",
    "EEEEEEE"
  ],
  a: [
    "        ",
    " EEEE   ",
    "     E  ",
    " EEEEE  ",
    "E    E  ",
    " EEEE E "
  ],
  b: [
    "E       ",
    "E       ",
    "EEEEE   ",
    "E    E  ",
    "E    E  ",
    "EEEEE   "
  ],
  c: [
    "       ",
    " EEEE  ",
    "E      ",
    "E      ",
    "E      ",
    " EEEE  "
  ],
  d: [
    "     E ",
    "     E ",
    " EEEE E",
    "E    E ",
    "E    E ",
    " EEEE E"
  ],
  e: [
    "       ",
    " EEEE  ",
    "E    E ",
    "EEEEEE ",
    "E      ",
    " EEEE  "
  ],
  f: [
    "  EEEE ",
    " E     ",
    "EEEEE  ",
    " E     ",
    " E     ",
    " E     "
  ],
  g: [
    " EEEE E ",
    "E    E  ",
    "E    E  ",
    " EEEE   ",
    "     E  ",
    " EEEE   "
  ],
  h: [
    "E       ",
    "E       ",
    "EEEEE   ",
    "E    E  ",
    "E    E  ",
    "E    E  "
  ],
  i: [
    "   ",
    " E ",
    "   ",
    "E  ",
    "E  ",
    "E  "
  ],
  j: [
    "    ",
    "  E ",
    "    ",
    "  E ",
    "  E ",
    "EE  "
  ],
  k: [
    "E     ",
    "E    E",
    "E  E  ",
    "EEE   ",
    "E  E  ",
    "E   E "
  ],
  l: [
    "E  ",
    "E  ",
    "E  ",
    "E  ",
    "E  ",
    "EEE"
  ],
  m: [
    "         ",
    "EEEEE EE ",
    "E  E  E  ",
    "E  E  E  ",
    "E  E  E  ",
    "E  E  E  "
  ],
  n: [
    "      ",
    "EEEEE ",
    "E    E",
    "E    E",
    "E    E",
    "E    E"
  ],
  o: [
    "       ",
    " EEEE  ",
    "E    E ",
    "E    E ",
    "E    E ",
    " EEEE  "
  ],
  p: [
    "       ",
    "EEEEE  ",
    "E    E ",
    "E    E ",
    "EEEEE  ",
    "E      "
  ],
  q: [
    "       ",
    " EEEE E",
    "E    E ",
    "E    E ",
    " EEEE E",
    "     E "
  ],
  r: [
    "      ",
    "EEE   ",
    "E     ",
    "E     ",
    "E     ",
    "E     "
  ],
  s: [
    "      ",
    " EEEE ",
    "E     ",
    " EEEE ",
    "     E",
    "EEEE  "
  ],
  t: [
    " E    ",
    "EEE   ",
    " E    ",
    " E    ",
    " E    ",
    "  EE  "
  ],
  u: [
    "      ",
    "E    E",
    "E    E",
    "E    E",
    "E    E",
    " EEEE "
  ],
  v: [
    "       ",
    "E     E",
    "E     E",
    " E   E ",
    "  E E  ",
    "   E   "
  ],
  w: [
    "         ",
    "E       E",
    "E   E   E",
    "E  E E  E",
    "E E   E E",
    "E       E"
  ],
  x: [
    "      ",
    "E    E",
    " E  E ",
    "  EE  ",
    " E  E ",
    "E    E"
  ],
  y: [
    "      ",
    "E    E",
    "E    E",
    " EEEE ",
    "     E",
    " EEEE "
  ],
  z: [
    "      ",
    "EEEEE ",
    "    E ",
    "   E  ",
    "  E   ",
    "EEEEE "
  ]
};



// 入力に反応する
const input = document.getElementById('letterInput');
const output = document.getElementById('output');

input.addEventListener('input', () => {
  let text = input.value;
  let rows = text.split('\n'); // 手動改行も考慮して行ごとに分ける
  const outputRows = [];

  // 各行の文字をEアートに変換
  for (const row of rows) {
    const rowArt = [];
    
    for (const ch of row) {
      const drawing = letters[ch];
      if (drawing) {
        // 各行を `rowArt` に追加
        for (let i = 0; i < drawing.length; i++) {
          if (!rowArt[i]) rowArt[i] = '';
          rowArt[i] += drawing[i] + '  '; // 文字の間にスペースを追加して横並びに
        }
      } else {
        // 未登録の文字は `行` として空白を追加
        for (let i = 0; i < 5; i++) { // 5行分空白を入れる（E文字絵の最大行数に合わせて）
          if (!rowArt[i]) rowArt[i] = '';
          rowArt[i] += '[ ]  '; // 見つからなかった文字の代わりにスペースを入れる
        }
      }
    }
    // 1行分の文字絵をoutputRowsに追加
    outputRows.push(rowArt.join('\n'));
  }

  // 結果をコードブロック形式で表示
  output.textContent = '```\n' + outputRows.join('\n') + '\n```';
});

// コピーする
function copyOutput() {
  navigator.clipboard.writeText(output.textContent)
    .then(() => {
      alert('コピーしました！');
    })
    .catch(err => {
      alert('コピー失敗: ' + err);
    });
}
