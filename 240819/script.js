let num1 = 10;
let num2 = 5;
let result = 0;

// result = num1++ + --num2;
// 1) num1의 값은? 10
// 2) num2의 값은? 4
// 3) result의 값은? 14
// result = --num1 - num2++;
// 4) num1의 값은? 9
// 5) num2의 값은? 5
// 6) result의 값은? 4
// result = num1++ * num2++;
// 7) num1의 값은? 10
// 8) num2의 값은? 5
// 9) result의 값은? 50

// num1 = 10
// num2 = 4
// result = 14
// console.log(num1++, --num2);
console.log((result = num1++ + --num2));

// num1 = 11 - 1 = 10
// num2 = 4
// result = 6
// console.log(--num1, num2++);
console.log((result = --num1 - num2++));

// num1 = 10
// num2 = 4 + 1 = 5
// result = 50
// console.log(num1++, num2++);
console.log((result = num1++ * num2++));
