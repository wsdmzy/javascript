## 状态机

KMP

词法分析  语法分析  dom  css  layout render

配对  栈



## 跨域
  1. CORS
    响应头   6种
     - Access-Control-Allow-Origin   
     - Access-COntrol-expose-Headers   (一些自定义的前端拿不到的响应头)
     - Access-Control-Max-Age  preflight请求能够缓存多久
      - 简单请求 (GET,POST,HEAD,请求头限制，Accept，Content-Type(form标签的类型)等)
      - 非简单请求 1. 预检请求(preflight: OPTIONS)，试探跨域允不允许，2. 真实的请求
    - Access-Control-Allow-Credentials  校验  cookie·
    - Access-Control-Allow-Methods
    - Access-Control-Allow-Headers  
  2. JSONP
    1. 流程
    2. 封装成Promise
    3. JSONP 后端返回的是什么