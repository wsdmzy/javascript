## ajax fetch

原生的向后端请求的方式

- ajax 步骤
  1. 创建一个xmlhttprequest实例
  2. 发出http请求
  3. 接受服务器返回的数据
  4. 更新网页上面的数据


- fetch  无论成功或失败都会返回数据 (promise -> pending fuilled rejected)
  fetch(url).then(res => res.json()).then(clg(myjson))


  
  http://47.115.19.254:8090/archives/ajax%E5%92%8Cfetch