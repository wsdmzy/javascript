function foo() {
  console.log(this.a)
}

var a = 2
var o = { a: 3, foo}
var p = { a: 4}
o.foo()
// p.foo = o.foo
// p.foo()
(p.foo = o.foo)()
