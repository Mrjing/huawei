/**
 * 绘图机器的绘图笔初始位置在原点(0,0)机器启动后按照以下规则来进行绘制直线。
 * 1. 尝试沿着横线坐标正向绘制直线直到给定的终点E
 * 2. 期间可以通过指令在纵坐标轴方向进行偏移，offsetY为正数表示正向偏移,为负数表示负向偏移
 */

const calcArea = (commandArr, E) => {
  let leftX = 0;
  let leftY = 0;
  let rightX = 0;
  let rightY = 0;
  let areaSum = 0;
  for (let i = 0; i < commandArr.length; i++) {
    rightX = commandArr[i][0];
    // 计算当前面积和
    areaSum += (rightX - leftX) * Math.abs(rightY);
    rightY += commandArr[i][1];
    // 赋值下一次面积计算的左边坐标
    leftX = rightX;
    leftY = rightY;
  }
  // 计算最后一个指令坐标到E的面积
  areaSum += (E - leftX) * Math.abs(rightY);
  return areaSum;
};

console.log(
  calcArea(
    [
      [1, 1],
      [2, 1],
      [3, 1],
      [4, -2],
    ],
    10
  )
);

console.log(
  calcArea(
    [
      [0, 1],
      [2, -2],
    ],
    4
  )
);
