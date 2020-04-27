const CACHE_NAME = 'sw-' + 0

// self相当于window  全局便利
self.addEventListener('install', (event) => {
  // 等着 我把要缓存的都缓存好才进入下一个阶段
  // cache-storage
  // 1. 打开
  let cacheComplete = caches.open(CACHE_NAME).then(cache => {
    return cache.addAll([
      './',   //localhost:8080/  整个html
      './ziogie.top.png'
    ])
  })
  event.waitUntil(cacheComplete)
})
// 激活
self.addEventListener('activate', () => {})
// 监听浏览器发出的请求
// 判断  如果在我们缓存的空间里面，那么我们直接取出缓存里面内容返回
// 没有 sw 帮让浏览器发出这个请求  请求完事后再放到缓存里 供下一次使用
self.addEventListener('fetch', (event) => {
  // 用什么返回
  // promise 返回值 就是then回调里面的返回值  请求的结果
  let thisReqRes = caches.match(event.request)
    .then(res => {
      if (res) {
        // 1. 缓存有 return
        return res
      } else {
        return fetch(event.request)
          .then(response => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, response.clone())
              // res 流 
              // 2. 缓存没有 把请求完的结果 return
              return response
            })
          })
      }
    })
  event.respondWith(thisReqRes)
})