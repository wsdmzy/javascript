function curry(fn, ...args) {
  // 判断参数长度,,
  // return fn.length <= args.length ? fn(...args) : curry.bind(null,fn,...args)
  return args.length >= fn.length ? fn(...args) : curry.bind(null,fn,...args)
}

function sum(a,b,c) {
  return a+b+c
}

// 分段传递参数,,,返回函数    
let c1 = curry(sum,1)
let c2 = c1(2)
console.log(c2(3))