/**
 * 区间交集
给定一组闭区间，其中部分区间存在交集。任意两个给定区间的交集，称为公共区间（如：[1,2],[2,3]的公共区间为[2,2]，[3,5],[3,6]的公共区间为[3,5])。公共区间之间若存在交集，则需要合并(如:[1,3],[3,5]区间存在交集[3,3]，需合并为[1,5])。按升序排列输出合并后的区间列表。
 * 
 */

const traverseMaxSegmentAfter = (curIndex, sortedSegementsArr, segNum) => {
  const curSegmentEnd = sortedSegementsArr[curIndex][1]
  let startIndex = curIndex + 1
  let maxSegmentIndex = -1
  let maxSegmentEnd = -1
  if(curIndex === segNum - 1) {
    return maxSegmentIndex
  }

  for(let i = startIndex;i < segNum;i++) {
    if(sortedSegementsArr[i][0] <= curSegmentEnd && (sortedSegementsArr[i][1] > maxSegmentEnd)) {
      maxSegmentIndex = i;
      maxSegmentEnd = sortedSegementsArr[i][1]
    }
  }
  return maxSegmentIndex
}

const calSegmentsArrRange = (sortedSegementsArr, finalSegmentsArrIndex) => {
  return sortedSegementsArr[finalSegmentsArrIndex[finalSegmentsArrIndex.length - 1]][1] - sortedSegementsArr[finalSegmentsArrIndex[0]][0]
}

const findMiniestSegments = (segementsArr) => {
  // 1. 将所有线段按起点值从小到大排序  
  const sortedSegementsArr = segementsArr.sort((a, b) => {
    return a[0] - b[0]
  })
  console.log('sortedSegementsArr',sortedSegementsArr)
  // 2. 获取最大的区间范围
  const maxSegmentsRange = sortedSegementsArr[sortedSegementsArr.length - 1][1] - sortedSegementsArr[0][0]
  console.log('maxSegmentsRange', maxSegmentsRange)
  // 3. 依次遍历每条线段，将该线段后的线段中，起点大于当前遍历线段终点的，最长的线段取出，继续遍历
  let i = 0
  let finalSegmentsArrIndex = [0]
  while(i < sortedSegementsArr.length - 1 && calSegmentsArrRange(sortedSegementsArr, finalSegmentsArrIndex) < maxSegmentsRange) {
    i = traverseMaxSegmentAfter(i, sortedSegementsArr, segementsArr.length)
    console.log('traverseMaxSegmentAfter',i)
    if(i > -1) {  
      finalSegmentsArrIndex.push(i)
    } else {
      break
    }
  }

  let finalObj = {}
  if(calSegmentsArrRange(sortedSegementsArr, finalSegmentsArrIndex) >= maxSegmentsRange) {
    return (new Set(finalSegmentsArrIndex.map(item => sortedSegementsArr[item][0]))).size
  }
}

console.log(findMiniestSegments([[1,4],[2,5],[3,6], [0,7]]))