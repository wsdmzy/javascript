let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})

// promise2 = promise1.then(res => {
//   return("这里返回一个普通的值")
// })

// promise2 = promise1.then(res => {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve("这里返回一个Promise对象")
//    },1000)
//  })
// })

// promise2.then(res => {
//   console.log(res)
// })

// promise2 = promise1.then(res => {
//   console.log(res)
//   throw new Error("这里抛出了一个错误")
// })

promise2 = promise1.then("promise2返回的值")   //promise2.then(res) res为promise1返回的值

promise2.then(res => {
  console.log(res)
}, err => {
  console.error(err);
})