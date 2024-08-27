const i = Number(prompt("숫자를 입력해주세요."));
let j = Number(prompt("숫자를 입력해주세요."));

console.log(
  `현재 i : ${i}, j : ${j} \n두수를 더한 결과를 j에 넣으면 j의 값은  ${(j +=
    i)} 입니다.`
);

console.log(
  `현재 i : ${i}, j : ${j} \n두수를 뺀 결과를 j에 넣으면 j의 값은  ${(j -=
    i)} 입니다.`
);

console.log(
  `현재 i : ${i}, j : ${j} \n두수를 곱한 결과를 j에 넣으면 j의 값은  ${(j *=
    i)} 입니다.`
);

console.log(
  `현재 i : ${i}, j : ${j} \n두수를 나눈 결과를 j에 넣으면 j의 값은  ${(j /=
    i)} 입니다.`
);

console.log(
  `현재 i : ${i}, j : ${j} \n두수를 나누고 나머지 값을 j에 넣으면 j의 값은  ${(j %=
    i)} 입니다.`
);
