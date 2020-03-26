
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}

var a = 10

setTimeout(obj.foo, 100)  //10   隐式绑定丢失