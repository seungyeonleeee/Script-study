/* 
구구단 화면에 세로 출력
*/

// const table = document.querySelector("table");

// for (let a = 0; a <= 9; a++) {
//   const tr = document.createElement("tr");

//   for (let b = 2; b <= 9; b++) {
//     const th = document.createElement("th");
//     const td = document.createElement("td");

//     if (a === 0) {
//       th.innerText = `${b}단`;
//       tr.appendChild(th);
//     } else {
//       td.innerText = `${b} * ${a} = ${a * b}`;

//       tr.appendChild(td);
//     }
//   }

//   table.appendChild(tr);
// }

// 답안
// const gugudan = document.querySelector("#gugudan");
// for (let i = 0; i <= 9; i++) {
//   const tr = document.createElement("tr");
//   for (let j = 2; j <= 9; j++) {
//     const td = document.createElement("td");
//     td.innerText = i === 0 ? `${j}단` : `${j} * ${i} = ${i * j}`;
//     tr.appendChild(td);
//   }
//   gugudan.appendChild(tr);
// }

// 미니미션
/*
for (let i = 11; i <= 17; i++) {
  for (let j = 50; j >= 46; j--) {
    document.write(`${i}+${j}=${i + j} / `);
  }
  document.write("<br />");
}
*/
/*
11+50=61 / 11+49=60 / 11+48=59 / 11+47=58 / / 11+46=57
12+50=62 / 12+49=61 / 12+48=60 / 12+47=59 / / 12+46=58
13+50=63 / 13+49=62 / 13+48=61 / 13+47=60 / / 13+46=59
14+50=64 / 14+49=63 / 14+48=62 / 14+47=61 / / 14+46=60
15+50=65 / 15+49=64 / 15+48=63 / 15+47=62 / / 15+46=61
16+50=66 / 16+49=65 / 16+48=64 / 16+47=63 / / 16+46=62
17+50=67 / 17+49=66 / 17+48=65 / 17+47=64 / / 17+46=63
*/
