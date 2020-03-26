var a = 2
function foo() {
  // "use strict"
  
  console.log(this.a)
}


// foo()


var obj1 = { a: 2, foo: foo}

obj1.foo()

// var obj2 = { a: 42, obj1: obj1}

// obj2.obj1.foo()





