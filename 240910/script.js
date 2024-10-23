/*
숫자 a와 b를 받고
alert로 두수를 비교하여 a가 b보다 큽니다를 출력해주세요
삼항연산자
*/

const numA = Number(prompt("숫자를 입력해주세요"));
const numB = Number(prompt("숫자를 입력해주세요"));

numA > numB
  ? alert(`${numA}가 ${numB}보다 큽니다.`)
  : alert(`${numA}가 ${numB}보다 작습니다.`);
