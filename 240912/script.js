// 교통비 3,000
// 식비 6,000
// 음료비 3,000

const pay1 = 3000;
const pay2 = 6000;
const pay3 = 3000;

const todayPay = 10000;

pay1 + pay2 + pay3 <= todayPay
  ? console.log("돈 관리 잘했어요!")
  : console.log(`${pay1 + pay2 + pay3 - todayPay}원 초과`);
