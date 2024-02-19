/**
 * 计算数组中心位置
 * 
 * 给你一个整数数组nums，请计算数组的中心位置，数组的中心位置是数组的一个下标，其左侧所有元素相乘的积等于右侧所有元素相乘的积。数组第一个元素的左侧积为1，最后一个元素的右侧积为1。如果数组有多个中心位置，应该返回最靠近左边的那一个，如果数组不存在中心位置，返回-1。
 * 
 * 思路：左边累乘，右边累除，从左到右
 */


const getArrayCenter = (arr) => {
  let centerIndex = 0
  if(arr.length === 1) {
    return centerIndex
  }
  let initLeftProduct = 1
  let initRightProduct = arr.slice(1).reduce((acc, cur) => {
    return acc * cur
  }, 1)
  console.log('initRightProduct', initRightProduct)
  for(let i = 0;i < arr.length;i++) {
    if(initLeftProduct === initRightProduct) {
      centerIndex = i;
      break;
    }else {
      initLeftProduct *= arr[i];
      initRightProduct /= arr[i+1];
    }
  }
  return centerIndex
}

console.log(getArrayCenter([4,2,5,3,6,5,6,2,2]))