// Array.isArray          //static
// Array.prototype.push   //原型

function isAnimal(target) {
  // 1. 原始的
  console.log(target)
  // 2. 增加
  target.isAnimal = function() {
    console.log("yes")
  }
  return target
}
function isThing(target) {
  console.log(target)
  target.isThing = function() {
    console.log("yes")
  }
  return target
}
function listenCall(target, name, descriptor) {
  // 1. 拿到原始的work
  const origin = descriptor.value
  // 2. 修改
  descriptor.value = function() {
    console.log("我监听了")
    // 3. 调用原来的
    origin()
  }
}
// 没有@isAnimal   想要增加isAnimal的方法  也得加入一个静态方法，而且侵入式修改
@isThing
@isAnimal
class Man {
  static isMan() {
    console.log('yes')
  }
  say() {
    console.log("say")
  }
  // 监听work有没有调用
  @listenCall
  work() {
    console.log('work')
  }
}
// 类  方法
//实例化
let boy = new Man()
// boy.isMan()
Man.isMan()
boy.say()
Man.isAnimal()
Man.isThing()
boy.work()