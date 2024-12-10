/*
1번 문제 const numbers1 = [1, 2, 3, 4, 5, 6]; 짝수를 추출하는 함수를 만들어주세요
2번 문제 const numbers2 = [3, 5, 7, 2, 8]; 가장 큰 값 추출하는 함수를 만들어주세요
*/

// 1번
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers1Fnc = numbers1.filter((number) => number % 2 === 0);
console.log(numbers1Fnc);

// 2번
const numbers2 = [3, 5, 7, 2, 8];
console.log(Math.max(...numbers2));

/*
답
const numbers1 = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers(numbers1));
const numbers2 = [3, 5, 7, 2, 8];
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax(numbers2));
*/
