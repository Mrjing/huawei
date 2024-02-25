/**
 * 在一个销售团队中，每个销售员在完成销售后都需要支付一部分利润给他们的上级，这种结构类似于
 * 金字塔。当一个销售员赚取100元时，他需要支付15元给他的直接上级。现在，给定每个销售员的销售额和他们的直接上级，你的任务是计算金字塔顶部的Boss的总收入。
 */
const calcArrSum = (arr) => {
  return arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
};

const calcSalerIncome = (curSalerId, salerArr) => {
  // 当前员工个人销售额
  const curSaler = salerArr.find((item) => item[0] === curSalerId);
  let selfIncom = 0;
  if (curSaler) {
    selfIncom = curSaler[2];
  }

  const underIds = salerArr
    .filter((item) => item[1] === curSalerId)
    .map((item) => item[0]);
  return (
    calcArrSum(underIds.map((id) => calcSalerIncome(id, salerArr))) * 0.15 +
    selfIncom
  );
};

console.log(
  calcSalerIncome(0, [
    [1, 0, 223],
    [2, 0, 323],
    [3, 2, 1203],
  ])
);
