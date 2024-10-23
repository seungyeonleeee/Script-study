// const userScore = prompt("점수를 입력하세요", "75");

// if (userScore !== null && userScore !== "") {
//   if (userScore >= 90) alert("A등급");
//   else if (userScore >= 80) alert("B등급");
//   else if (userScore >= 70) alert("C등급");
//   else if (userScore >= 60) alert("D등급");
//   else alert("F등급");
// }

// if (userScore !== null && userScore !== "") {
//   switch (true) {
//     case userScore >= 90:
//       alert("A등급");
//       break;
//     case userScore >= 80:
//       alert("B등급");
//       break;
//     case userScore >= 70:
//       alert("C등급");
//       break;
//     case userScore >= 60:
//       alert("D등급");
//       break;
//     default:
//       alert("F등급");
//       break;
//   }
// }

const score = Number(prompt("점수를 입력해주세요"));
let grade = "";
switch (parseInt(score / 10)) {
  case 10:
  case 9:
    grade = "A등급";
    break;
  case 8:
    grade = "B등급";
    break;
  case 7:
    grade = "C등급";
    break;
  case 6:
    grade = "D등급";
    break;
  default:
    grade = "F등급";
}
alert(`당신의 학점은 ${grade}입니다!`);
