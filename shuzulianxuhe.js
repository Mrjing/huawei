/**
 * 给定一个含有N个正整数的数组, 求出有多少个连续区间（包括单个正整数）, 它们的和大于等于x。
 * 
 * 1. 针对含N个正整数的数组，生成一个N+1长度的前缀和数组prefixSum，prefixSum[i] 表示正整数数组中前i个数之和
 * 2. 针对prefixSum[i]，要在0-i范围内找到索引j，使得j是第一个满足prefixSum[i] - prefixSum[j] > x的索引，此时，i 到 n 之间的值均满足prefixSum[i] - prefixSum[j] > x，加入最终统计数量 
 */

const calcPrefixSumArr = (inputNNum, n) => {
  let prefixSumArr = [0] // 0索引对应前0个数之和为0
  let prefixSum = 0
  for(let i = 1;i <= n;i++) {
    prefixSum += inputNNum[i-1]
    prefixSumArr[i] = prefixSum
  }
  return prefixSumArr
}

const calcContinueSegments = (inputNNum, n, x) => {
  const prefixSumArr = calcPrefixSumArr(inputNNum, n)
  let l = 0;
  let r = l + 1;
  let result = 0
  while(r <= n) {
    if(prefixSumArr[r] - prefixSumArr[l] >= x) {
      result += n - r + 1
      l++
      r = l + 1
    } else {
      r++
    }
  }
  return result
}

// console.log(calcContinueSegments([3,4,7], 3, 7))
console.log(calcContinueSegments([3,4,7,5,6], 5, 70))