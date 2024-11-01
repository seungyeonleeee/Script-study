/* 
const animals = ["ant", "bison", "camel", "duck", "elephant"];
// 1, ["ant", "bison", "camel", "duck", "elephant"]
// 1-1. undefined 사용
// 1-2. 양수 사용
// 1-3. 음수사용
// 2, ["duck", "elephant"]
// 2-1. 양수 사용
// 2-2. 음수 사용
// 3, ["camel", "duck", "elephant"]
// 3-1. 양수 사용
// 3-2. 음수 사용
// 4, ["camel", "duck"]
// 4-1. 양수 사용
// 4-2. 음수 사용
// 5, []
// 6, ["elephant"]
// 6-1. 양수 사용
// 6-2. 음수 사용
// 7, ["ant"]
// 7-1.undefined 사용
// 7-2. 양수 사용
// 7-3. 음수 사용
slice 사용
1,2,3,4,5,6,7번이 답이고 1-1,1-2 같은거는 푸는 방식입니다
*/

const animals = ["ant", "bison", "camel", "duck", "elephant"];
// 1, ["ant", "bison", "camel", "duck", "elephant"]
// 1-1. undefined 사용
console.log(animals.slice(undefined));
// 1-2. 양수 사용
console.log(animals.slice(0, 5));
// 1-3. 음수사용
console.log(animals.slice(-5));
// 2, ["duck", "elephant"]
// 2-1. 양수 사용
console.log(animals.slice(3, 5));
// 2-2. 음수 사용
console.log(animals.slice(-2));
// 3, ["camel", "duck", "elephant"]
// 3-1. 양수 사용
console.log(animals.slice(2, 5));
// 3-2. 음수 사용
console.log(animals.slice(-3));
// 4, ["camel", "duck"]
// 4-1. 양수 사용
console.log(animals.slice(2, 4));
// 4-2. 음수 사용
console.log(animals.slice(-3, 4));
// 5, []
console.log(animals.slice(5));
// 6, ["elephant"]
// 6-1. 양수 사용
console.log(animals.slice(4));
// 6-2. 음수 사용
console.log(animals.slice(-1));
// 7, ["ant"]
// 7-1.undefined 사용
console.log(animals.slice(undefined, 1));
// 7-2. 양수 사용
console.log(animals.slice(0, 1));
// 7-3. 음수 사용
console.log(animals.slice(-5, 1));
