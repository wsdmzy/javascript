let p = Promise.resolve(1)
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234)
  }, 2000)
})
// let p = function() {
//   setTimeout(() => {console.log(1)},2000) 
// }
// async function test() {
//   // 接 promise 才能保证 顺序
//   let c = await p
//   console.log(c)
//   let d = await p2
//   console.log(d)
// }

// test()

// 怎么保证p resolve后面的代码执行
// p.then(() => {})

// 都有Promise.resolve()  包一层



// 重点
(async function() {
  // await 后面 接 promise ？？？
  // 接 promise 才能够保证 顺序
  let c = await p;
  let d = await p2;
  let f = await 789
  console.log(c);
})()
// 异步 变 同步 ？？？ 只是写法
// 怎么 保证 p resolve 后面代码才会执行
// 都用 Promise.resolve 包装一层 不用判断 await、yield 后面 到底是 promise（有 then方法）还是非 promise（没有 then方法）
Promise.resolve(p).then(() => {
  Promise.resolve(p2).then(() => {
    Promise.resolve(789).then(() => {
      console.log(c);
    })
  })
})

// 下一个yield代码(g.next()) 怎么移到 then 回调里面
// promise.then(() => {g.next()})