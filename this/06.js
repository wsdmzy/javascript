function foo(a) {
  this.a = a
}

var bar  = new foo(2)
console.log(bar.a)



// function foo(arg) {
//   this.a = arg
//   return this
// }

// var a = foo(1)
// var b = foo(10)
// console.log(a.a)
// console.log(b.a)