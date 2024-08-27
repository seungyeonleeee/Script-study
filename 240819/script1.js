let num1 = 30;
let num2 = 6;
let num3 = 11;
let result = 0;

// result = ++num1 + num2++ * num3--;
// 97 = 31 + 6 * 11
// 1) num1은? 31
// 2) num2는? 6
// 3) num3은? 11
// 4) result? 97
// console.log(++num1, num2++, num3--);
console.log((result = ++num1 + num2++ * num3--));

num1 -= 7;
// 31 - 7 = 24
// result = (num1-- / --num2) * ++num3;
// 44 = (24 / 6) * 11
// 5) num1은? 24
// 6) num2는? 6
// 7) num3은? 11
// 8) result? 44
// console.log(num1--, --num2, ++num3);
console.log((result = (num1-- / --num2) * ++num3));

// num1 += num2++ * --num3;
// 23 + 6 * 10 = 83
// 9) num1은? 23
// 10) num2는? 6
// 11) num3은? 10
// 12) result? 84
// console.log(num1, num2++, --num3);
console.log((num1 += num2++ * --num3));
