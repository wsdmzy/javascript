/**
 * 
 * 被忽略的this
 */
function foo(a,b) {
  console.log("a:"+ a, "b:" + b)
}

var empty = Object.create(null)

foo.apply(empty, [2,3])

var bar = foo.bind(empty, 2)
bar(3)