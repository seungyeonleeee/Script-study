let num1 = 31;
let num2 = 6;
let result = 0;

result = --num1 * ++num2;
// 210 = 30 * 7
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// console.log(`num1= 30, num2= 7, result= 210`)

result = num1-- - num2--;
// 23 = 30 - 7
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// console.log(`num1= 29, num2= 6, result= 23`)

result = num1-- - --num2;
// 24 = 29 - 5
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// console.log(`num1= 28, num2= 5, result= 24`)

result = ++num1 * num2++;
// 145 = 29 * 5
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// console.log(`num1= 29, num2= 6, result= 145`)

result = num1++ % ++num2;
// 1 = 29 % 7
console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
// console.log(`num1= 30, num2= 7, result= 1`)
