/**
 * 1. 数组增序排序，计算数组中位数
 * 2. 遍历数组，找到使 x[i] - x[i+1] - ... -x[i + k - 1] 的值与中位数最接近的 i
 */

const calcMiddleValue = (arr) => {
  const sortedArr = [...arr].sort();
  const length = arr.length;
  if (length % 2 === 0) {
    return (sortedArr[length / 2 - 1] + sortedArr[length / 2]) / 2;
  }
  return sortedArr[Math.round(length / 2 - 1)];
};

const calcNearestIndex = (arr, K) => {
  const middleValue = calcMiddleValue(arr);
  let i = 0;
  let diff;
  let finalIndex;
  while (i + K - 1 < arr.length) {
    let tempValue = arr[i];
    for (let j = i + 1; j <= i + K - 1; j++) {
      tempValue -= arr[j];
    }
    const curDiff = Math.abs(middleValue - tempValue);
    if (diff === undefined) {
      diff = curDiff;
    } else {
      if (curDiff <= diff) {
        finalIndex = i;
        diff = curDiff;
      }
    }
    i++;
  }
  return finalIndex;
};

console.log(calcNearestIndex([50, 50, 2, 3], 2));
