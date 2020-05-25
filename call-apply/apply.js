Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  // let result = eval('context.fn(...args)');
  let result = context.fn(...args)

  delete context.fn
  return result;
}



function func(c) {
  return this.a+this.b + c
}

const obj = {
  a: 1,
  b: 2
}

console.log(func.myApply(obj,[3]))