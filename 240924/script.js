/* 
구구단 화면에 출력
*/

for (let a = 2; a <= 9; a++) {
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} * ${b} = ${a * b} / `);
  }
  document.write(`<br>`);
}
