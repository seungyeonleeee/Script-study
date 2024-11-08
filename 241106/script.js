/*
const numbers = [1, 2, 3, 4, 5];
첫번째로 배열의 값을 모두 더 해주는 함수를 만들어보세요 결과는 15
두번째로 배열 값을 제곱해주는 함수를 만들어보세요
결과는 [1, 4, 9, 16, 25] 나와야해요
*/

const numbers = [1, 2, 3, 4, 5];

const fnc01 = (arr) => {
  console.log(
    arr.reduce((a, b) => {
      return a + b;
    })
  );
};
fnc01(numbers);

const fnc02 = (arr) => {
  console.log(arr.map((num) => num * num));
};
fnc02(numbers);
