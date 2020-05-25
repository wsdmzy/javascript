Function.prototype.myCall = function(context, ...args) {
  context = context || window   //不能用let
  context.fn = this  //获取调用call的函数

  // let result = eval('context.fn(...args)')  //欺骗词法作用域
  let result = context.fn(...args)

  delete context.fn

  return result
}

function func(c) {
  return this.a+this.b + c
}

const obj = {
  a: 1,
  b: 2
}

console.log(func.myCall(obj,3))