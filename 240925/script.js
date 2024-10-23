/* 
구구단 화면에 출력
*/

const table = document.querySelector("table");

for (let a = 2; a <= 9; a++) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = `${a}단`;
  tr.appendChild(th);

  for (let b = 1; b <= 9; b++) {
    const td = document.createElement("td");

    td.innerText = `${a} * ${b} = ${a * b}`;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
