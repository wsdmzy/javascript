// let p = Promise.resolve(1)
let p = 1
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234)
  }, 2000)
})



function* test() {
  console.log('start')
  let a = yield p 
  console.log(a)
  let b = yield p2
  console.log(b)
}
// 简单版本的实现
// 1.执行generate  2.而且保证顺序 3. 值
function asyncTogenerate(gen) {
  let g = gen()
  function step(value) {
    let info = g.next(value)
    if (info.done) {
      return
    } else {
      //  info.value
      Promise.resolve(info.value).then((res) => {
        // 下一个yield
        step(res)
      })
    } 
  }
  step()
}

asyncTogenerate(test)