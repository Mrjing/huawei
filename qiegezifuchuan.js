const calcArrPrefixSum = (arr) => {
  let prefixSumArr = [0];
  let i = 0,
    sum = 0;
  while (i < arr.length) {
    sum += arr[i];
    prefixSumArr.push(sum);
    i++;
  }
  return prefixSumArr;
};

const calcTwoSplitIndex = (arr) => {
  if (arr.length < 5) {
    return [0, 0];
  }
  const prefixSumArr = calcArrPrefixSum(arr);
  for (let i = 1; i < arr.length; i++) {
    const firstPartSum = prefixSumArr[i];
    for (let j = i + 2; j < arr.length; j++) {
      const secondPartSum = prefixSumArr[j] - prefixSumArr[i + 1];
      if (firstPartSum === secondPartSum && j + 1 < arr.length) {
        const thirdPartSum = prefixSumArr[arr.length] - prefixSumArr[j + 1];
        if (secondPartSum === thirdPartSum) {
          return [i, j];
        }
      }
    }
  }
  return [0, 0];
};

console.log(
  calcTwoSplitIndex("acdbbbca".split("").map((item) => item.charCodeAt()))
);
