var ksum = function(data,n,sum) {
  let list = []
  backtrack(data,n,sum)
  return list

  
function backtrack(data,n,sum,temp = [], start = 0) {
  if (temp.length === n) { //递归退出条件
    if (temp.reduce((a,b) => a+b,0) === sum)  //满足条件
      list.push(temp)
    return
  }

  for (let i = start; i < data.length; i++) {
    // 选择每一项
    temp.push(data[i])
    // 之后的步骤   temp 深拷贝 
    backtrack(data,n,sum,temp.slice(0),i+1)
    // 撤销上一步选择
    temp.pop()
  }

}

}

console.log(ksum([1, 2, 3, 4, 5, 7], 3, 10))





/**
 * if {
 *  退出
 * }
 * for {
 *  进
 *  递归
 *  出
 * }
 */

 /**
 * backtrack() {
 *  if () {
 *   中止条件。
 *  }
 *  for {
 *   // 选择
 *   backtrack()
 *   // 撤销掉
 *  }
 * }
 */