// function foo(num) {
//   console.log("foo:" + num)

//   this.count++
//   // foo.count++
// }

// foo.count = 0

// for (let i = 0; i < 5; i++) {
//   foo(i)
//   // foo.call(foo,i)
// }

// console.log(foo.count)


function foo() {
  var a = 2
  console.log(this.bar())
  // this.bar()
  // bar()
}

function bar() {
  console.log(this.a)
}

foo()


