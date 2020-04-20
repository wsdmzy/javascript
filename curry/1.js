function curry(fn, args) {
  let len = fn.length
  console.log(len,'+++')
  args = args || []

  return function() {
    let subArgs = args.slice(0)

    // 拼接得到所有的参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i])
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= len) {
      // 满足
      return fn.apply(this,subArgs)
    } else {
      // 不满足,递归返回柯里化的函数,等待参数的传入
      return curry.call(this, fn, subArgs)
    }
  }
}

function sum(a,b,c) {
  return a+b+c
}

// 分段传递参数,,,返回函数
let c1 = curry(sum,[1])
let c2 = c1(2)
console.log(c2(3))
