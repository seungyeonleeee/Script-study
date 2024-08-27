let a = 20;
let b = 22;
let c = 19;
let d = 30;
let result;

// result = b >= c || c < d || b <= d;
//  22 >= 19 || 19 < 30 || 22 <= 30
//  true || true || true
// console.log(result);
// result = true

// result = a < b || b > c || a > d;
//  20 < 22 || 22 > 19 || 20 > 30
//  true || true || false
// console.log(result);
// result = true

// result = a > d || b < c || a > d;
//  20 > 30 || 22 < 19 || 20 > 30
//  false || false || false
// console.log(result);
// result = false

// result = b >= c && c < d && b <= d;
//  22 >= 19 && 19 < 30 && 22 <= 30
//  true && true && true
// console.log(result);
// result = true

// result = a < b && b > c && a > d;
// 20 < 22 && 22 > 19 && 20 > 30
//  true && true && false
// console.log(result);
// result = false

// result = a > d && b < c && a > d;
// 20 > 30 && 22 < 19 && 20 > 30
// false && false && false
// console.log(result);
// result = false

// result = (--a > c && a < b) || (++c > a && d > c);
// (19 > 19 && 20 < 22) || (20 > 20 && 30 > 19)
// (false && true) || (false && true)
// console.log(result);
// result = false

// result = (--b > c++ || d <= 40) && a > b;
// (21 > 19 || 30 <= 40) && 20 > 22
// (true || true) && false
// console.log(result);
// result = true

// d -= 10;
// d = 20
// c = 20
// result = ++a >= d && b <= c && c < d;
// 21 >= 20 && 22 <= 20 && 20 < 20
// true && false && false
// console.log(result);
// result = false
