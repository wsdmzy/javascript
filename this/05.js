function foo(a,b) {
  console.log(this.num + a+ b)
}

obj = {num: 10}

// foo.call(obj, 2, 3)  //15

// foo.apply(obj, [2,3])  //15

var bar = foo.bind(obj,2)
// console.log(bar)
bar(3) //15