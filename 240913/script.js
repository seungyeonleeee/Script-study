/*
1부터 100까지의 수를 받고 alert으로 홀수 짝수 출력해주세요 만약 받은 숫자가 1보다 작고 100보다 크면 “1에서 100사이의 숫자를 입력해주세요”라고 출력해주세요
*/

const userNum = prompt("1부터 100까지의 수를 입력하세요.");

const evenNum = userNum % 2 === 0 ? "짝수" : "홀수";

if (userNum !== "" && userNum !== null) {
  userNum >= 1 && userNum <= 100
    ? alert(`${userNum}은 ${evenNum} 입니다`)
    : alert("1에서 100사이의 숫자를 입력해주세요");
} else {
  alert("숫자를 입력해주세요");
  location.reload();
}

// 정답
// const num = Number(prompt("1부터 100사이의 수를 입력해주세요"));

// if (num >= 1 && num <= 100) {
//   if (num % 2 === 0) alert("짝수");
//   else alert("홀수");
// } else {
//   alert("숫자의 범위가 잘못됐습니다!\n1부터 100사이의 수를 입력해주세요!!!");
//   location.reload();
// }
