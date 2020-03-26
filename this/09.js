/**
 * 软绑定
 */

 function foo() {
   console.log(this.name)
 }

 var obj1 = {name: "obj1"}
 var obj2 = {name: "obj2"}
 var obj3 = {name: "obj3"}

 //softBind
 var fooObj = foo.softBind(obj1)
 fooObj();