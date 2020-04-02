## 浏览器模型 BOM
  JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。一旦网页内嵌了 JavaScript 脚本，浏览器加载网页，就会去执行脚本，从而达到操作浏览器的目的，实现网页的各种动态效果。

1. 代码嵌入网页的方法
  <script>元素直接嵌入代码。
  <script>标签加载外部脚本
  事件属性
  URL 协议  `<a href="javascript:console.log('Hello')">点击</a>`

2. script元素
  1. 工作原理
    1. 下载HTML网页和解析网页是同步进行的
    2. 解析过程遇到<script>元素就暂停解析，把网页渲染的控制权转交给JavaScript引擎。
    3. 如果<script>元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
    4. JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。
  2. defer属性(dom解析完在执行脚本)
    为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对<script>元素加入defer属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。`<script src="a.js" defer></script>`
  3. async属性(哪个脚本先下载结束，就先执行那个脚本)
    解决“阻塞效应”的另一个方法是对<script>元素加入async属性。 `<script src="a.js" async></script>`

    * defer属性和async属性到底应该使用哪一个？
    一般来说，如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，就使用defer属性。如果同时使用async和defer属性，后者不起作用，浏览器行为由async属性决定。

  3. 浏览器的组成
    浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）。
    1. 渲染引擎
      渲染引擎处理网页，通常分成四个阶段。 四步并非严格按顺序执行
      1. 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
      2. 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
      3. 布局：计算出渲染树的布局（layout）。
      4. 绘制：将渲染树绘制到屏幕。

    2. 重流和重绘
      渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，称为“绘制”（paint）。它们都具有阻塞效应，并且会耗费很多时间和计算资源。
      优化技巧：动低不同高，减少重绘table布局和flex布局
        1. 读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，然后立刻写入，接着再读取一个 DOM 节点。
        2. 缓存 DOM 信息。
        3. 不要一项一项地改变样式，而是使用 CSS class 一次性改变样式
        4. 动画使用absolute定位或fixed定位，这样可以减少对其他元素的影响。
        5. 使用虚拟DOM（virtual DOM）库。

    3. JavaScript 引擎
      JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。


1. window对象
  浏览器里面，window对象（注意，w为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。


1. cookie
  Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。
  常用:
    1. 对话（session）管理：保存登录、购物车等需要记录的信息。
    2. 个性化：保存用户的偏好，比如网页的字体大小、背景色等等。
    3. 追踪：记录和分析用户行为。

  Cookie 由 HTTP 协议生成，也主要是供 HTTP 协议使用。
  服务器如果希望在浏览器保存 Cookie，就要在 HTTP 回应的头信息里面，放置一个Set-Cookie字段。
  Cookie 的属性
    Expires，Max-Age 设置时间
    document.cookie属性用于读写当前网页的 Cookie


1. Ajax
  1. 创建 XMLHttpRequest 实例
  2. 发出 HTTP 请求
  3. 接收服务器传回的数据
  4. 更新网页数据


1. 同源
  1. 同源限制
    协议，域名，端口都必须相同
  同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。
  非同源
  （1） 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。
  （2） 无法接触非同源网页的 DOM。
  （3） 无法向非同源地址发送 AJAX 请 求（可以发送，但浏览器会拒绝接受响应）。

  2. Ajax处理同源
    1. JSONP   通过script标签
    2. WebSocket  WebSocket协议不实行同源政策
    3. CORS   属于跨源 AJAX 请求的根本解决方法。
    4. 反向代理(nginx)



1. CORS(Cross-origin resource sharing)
   CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。因此，实现 CORS 通信的关键是服务器。

   CORS 请求分成两类：简单请求（simple request）和非简单请求(多了个预检步骤)（not-so-simple request）。

1. Web Storage：浏览器端数据储存机制
  1. window.sessionStorage(会话关闭就清空)和window.localStorage。
  

  