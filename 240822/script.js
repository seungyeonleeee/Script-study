const a = 10;
const b = 20;
const m = 30;
const n = 40;
let result;

// result = a > b || b >= m || m > n;
// 10 > 20 || 20 >= 30 || 30 > 40
// false || false || false
// console.log(result);
// false

// result = a > b || b >= m || m <= n;
// 10 > 20 || 20 >= 30 || 30 <= 40
// false || false || true
// console.log(result);
// true

// result = a <= b && b >= m && m <= n;
// 10 <= 20 && 20 >= 30 && 30 <= 40
// true && false && true
// console.log(result);
// false

// result = a <= b && b <= m && m <= n;
// 10 <= 20 && 20 <= 30 && 30 <= 40
// true && true && true
// true

// result = !(a > b);
// !(10 > 20)
// console.log(result);
// true
