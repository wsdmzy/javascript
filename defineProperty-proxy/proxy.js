// var proxy = new Proxy({}, {
//   get: function(obj,prop) {
//     console.log('设置get操作')
//     return obj[prop]
//   },
//   set: function(obj, prop, value) {
//     console.log('设置set操作')
//     obj[prop] = value
//   }
// })

// proxy.time = 35

// console.log(proxy.time)

var handler = {
  has (target, key) {
    if (key[0] === '_') {
      return false
    }
    return key in target
  }
}

var target = { _prop: 'foo', prop: 'foo'}
var proxy = new Proxy(target, handler)
console.log("prop" in proxy)
console.log("_prop" in proxy)