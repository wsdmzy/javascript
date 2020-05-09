## SPA 
  1. <div id="app"></div>
  2. js请求 app构造
  3. 看到页面

  FMP: 第一次有意义内容绘制   很晚，等待很长时间
  TTI: time to interacive

  * -router: 切换页面友好，不用整个页面都刷新

## SSR
  jsp ejs

  next nust nest
  1. <div id="app">内容</div>
  
  FMP，TTI 早
  
  切换页面造成页面重新刷新

## 同构

SPA + SSR
第一次访问：SSR服务端构造html返回的
之后用户的交互，通过SPA *-router 来切换页面

门面
移动端，高性能地方

## MPA multiple-page-appliction
多页应用 多个html

后台管理系统： 全公司前端

商品
价格
广告
促销
物流
供应链

每个html 天然解耦， 每个部门业务互不相关

不同的html

促销：react
<script src="react.js"></script>
<script></script>

支付：vue
<script src="vue.js"></script>
<script></script>