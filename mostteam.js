/**
 * 用数组代表每个人的能力，一个比赛活动要求参赛团队的最低能力值为N，每个团队可以由1人或者2人组成，且1个人只能参加1个团队，计算出最多可以派出多少只符合要求的团队。
 * 1. 数组从低到高排序
 * 2. 先挑选出大于等于N的1人团
 * 3. 再挑选出相加大于等于N的2人团（低能力指针，高能力指针向中间移动）
 **/

const calcMostTeamNum = (abilityArr, N) => {
  const sortedArr = abilityArr.sort();
  const findSingleGreaterToN = sortedArr.findIndex((item) => item >= N);
  let lowAbiIndex = 0;
  let highAbiIndex = abilityArr.length - 1;
  let firstSingleIndex;
  if (findSingleGreaterToN >= 0) {
    firstSingleIndex = findSingleGreaterToN;
  }

  // 单人团数量
  let singleTeam = 0;
  if (firstSingleIndex >= 0) {
    singleTeam += abilityArr.length - firstSingleIndex;
  }

  // 双人团数量
  let twoTeam = 0;
  highAbiIndex = firstSingleIndex - 1;
  if (highAbiIndex <= 0) {
    return singleTeam + twoTeam;
  } else {
    while (lowAbiIndex < highAbiIndex) {
      if (abilityArr[lowAbiIndex] + abilityArr[highAbiIndex] >= N) {
        twoTeam += 1;
        lowAbiIndex++;
        highAbiIndex--;
      } else {
        lowAbiIndex++;
      }
    }
    return twoTeam + singleTeam;
  }
};

console.log(calcMostTeamNum([3, 1, 5, 7, 9, 2, 6], 8));
