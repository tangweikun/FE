const TOTAL_MONTH = 12; // 总期数
const MONTH_PAY = 1000; // 月付
const TOTAL_PROFIT = 0; // 总会息
const MONTH_LOSS = 0; // 月息
const DEAL_MONTH = 1; // 成交期数

function foo(TOTAL_MONTH, MONTH_PAY, TOTAL_PROFIT, MONTH_LOSS, DEAL_MONTH) {
  const TOTAL_LOSS = MONTH_LOSS * (TOTAL_MONTH - DEAL_MONTH - 1); // 需支付的总利息

  const TOTAL_OUTCOME_MONTH = ((1 + TOTAL_MONTH) * TOTAL_MONTH) / 2; // 总借出有效月数
  const TOTAL_OUTCOME_IN_MONTH = MONTH_PAY * TOTAL_OUTCOME_MONTH; // 借出额以月计

  const TOTAL_INCOME_MONTH = TOTAL_MONTH - DEAL_MONTH; // 总借入有效月数
  const TOTAL_INCOME_IN_MONTH =
    (MONTH_PAY * TOTAL_MONTH + TOTAL_PROFIT) * TOTAL_INCOME_MONTH; // 借入额以月计

  // 借出额 > 借入额 投资行为
  if (TOTAL_OUTCOME_IN_MONTH > TOTAL_INCOME_IN_MONTH) {
    const amount = TOTAL_OUTCOME_IN_MONTH - TOTAL_INCOME_IN_MONTH;

    return {
      amount,
      type: 'INVEST',
      profit: TOTAL_PROFIT - TOTAL_LOSS,
      ratio: (TOTAL_PROFIT - TOTAL_LOSS) / amount,
    };
  }

  // 借出额 <= 借入额 借贷行为
  const amount = TOTAL_INCOME_IN_MONTH - TOTAL_OUTCOME_IN_MONTH;
  return {
    amount,
    type: 'LOAD',
    profit: TOTAL_PROFIT - TOTAL_LOSS,
    ratio: (TOTAL_LOSS - TOTAL_PROFIT) / amount,
  };
}

// 汤小玲18号
console.log(foo(30, 2000, 5380, 240, 18));
// console.log(foo(30, 2000, 2680, 230, 8));

// // 汤小玲15号
// console.log(foo(27, 2000, 920, 270, 4));

// // 汤小玲20号
console.log(foo(38, 1000, 5600, 120, 29));

//
// console.log(foo(38, 1000, 5500, 140, 25));
