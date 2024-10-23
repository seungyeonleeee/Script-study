/*
사용자로부터 이름, 키, 체중을 입력 받은 후 적정 평균 체중을 구합니다. 적정 평균 체중 오차는 플러스, 마이너스 5이며 사용자가 입력한 체중이 적정 체중일 경우에는 'xxx님은 적정 체중입니다.'를 , 아닐 경우에는 'xxx님은 적정 체중이 아닙니다'를 출력해주세요

적정 체중 구하는 공식은 키에서 100 뺀 후 0.9를 곱해주면 됩니다
삼항연산자로 alert 찍어보죠
result라는 변수에 결과를 삼항연산자로 넣은다음 그걸 alert로 출력!
*/

const userName = prompt("이름을 입력하세요.");
const userHeight = Number(prompt("키를 입력하세요."));
const userWeight = Number(prompt("몸무게를 입력하세요."));

const weight = (userHeight - 100) * 0.9;

const result =
  weight - 5 < userWeight && weight + 5 > userWeight
    ? alert(`${userName}님은 적정 체중입니다.`)
    : alert(`${userName}님은 적정 체중 아닙니다.`);
