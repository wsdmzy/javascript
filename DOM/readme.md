# 阮一峰JavaScript  https://javascript.ruanyifeng.com/
## DOM
DOM是JavaScript操作网页的接口，全称为"文档对象模型"(Document Object Model)
作用是将网页转为一个JavaScript对象，从而可以用脚本进行各种操作（比如增删内容）。

浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。

DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。


1. 节点
  DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。
  节点类型7种
  Document：整个文档树的顶层节点
  DocumentType：doctype标签（比如<!DOCTYPE html>）
  Element：网页的各种HTML标签（比如<body>、<a>等）  *
  Attribute：网页元素的属性（比如class="right"） *
  Text：标签之间或标签包含的文本  *
  Comment：注释
  DocumentFragment：文档的片段

2. 节点树
  所以节点构成树状结构

  父节点关系（parentNode）：直接的那个上级节点
  子节点关系（childNodes）：直接的下级节点
  同级节点关系（sibling）：拥有同一个父节点的节点
  操作接口  firstChild  lastChild   nextSibling  previousSibling


3. 常用的Node接口属性
  1. nodeType属性返回一个整数值，表示节点的类型。
    1 元素节点 2 属性节点 3 文本节点 8 注释节点 9 文档节点

  2. nodeName属性返回节点的名称
    元素节点-> 大写的标签名  
    属性节点-> 属性的名称  
    文本节点-> #text 
    注释节点-> #comment  
    文档节点-> #document  

  3. nodeValue属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。
  只有文本节点（text）和注释节点（comment）有文本值，因此这两类节点的nodeValue可以返回结果，其他类型的节点一律返回null。

  4. textContent属性返回当前节点和它的所有后代节点的文本内容。

  5. baseURI属性返回一个字符串，表示当前网页的绝对路径。浏览器根据这个属性，计算网页上的相对路径的 URL。该属性为只读。

  6. parentNode属性返回当前节点的父节点。对于一个节点来说，它的父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentfragment）。

  7. parentElement属性返回当前节点的父元素节点。如果当前节点没有父节点，或者父节点类型不是元素节点，则返回null。

  8. childNodes属性返回一个类似数组的对象（NodeList集合），成员包括当前节点的所有子节点。

4. 常用的Node接口方法
  1. appendChild方法接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。该方法的返回值就是插入文档的子节点。

  2. cloneNode方法用于克隆一个节点。它接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是一个克隆出来的新节点。
   注意： 克隆出来的节点会丢失监听方法和on-属性  该方法返回的节点不在文档之中，即没有任何父节点

  3. removeChild方法接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点。

  4. replaceChild方法用于将一个新的节点，替换当前节点的某一个子节点。


5. NodeList 接口 和 HTMLCollection 接口
  节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。DOM 提供两种节点集合，用于容纳多个节点：NodeList和HTMLCollection。操作和数组类似

6. ParentNode 接口
  节点对象除了继承 Node 接口以外，还会继承其他接口。ParentNode接口表示当前节点是一个父节点，提供一些处理子节点的方法。ChildNode接口表示当前节点是一个子节点，提供一些相关方法。

7. ChildNode 接口
  如果一个节点有父节点，那么该节点就继承了ChildNode接口。


document 对象。。
ELement 对象。。



### 事件模型

1. EventTarget 接口
  DOM 的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。
  主要三个实例方法
  1. addEventListener：绑定事件的监听函数
    第三个参数可选默认false  冒泡  为true 捕获
  2. removeEventListener：移除事件的监听函数
  3. dispatchEvent：触发事件
    var event = new Event('click');
    para.dispatchEvent(event);   触发click事件

2. 事件的传播
  第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
  第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
  第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）

3. 事件的代理
  由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

4. Event 对象概述
  事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个Event对象，所有的事件都是这个对象的实例，或者说继承了Event.prototype对象。
  event = new Event(type, options);

  Event.eventPhase  0(没有发生) 1(捕获阶段) 2(目标节点) 3(冒泡阶段)

  Event.currentTarget属性返回事件当前所在的节点，即正在执行的监听函数所绑定的那个节点。

  Event.target属性返回原始触发事件的那个节点，即事件最初发生的节点。

  Event.preventDefault方法取消浏览器对当前事件的默认行为。

  stopPropagation方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。

5. 事件
  鼠标事件
  键盘事件
  进度事件
  拖拉事件
  触摸事件
  表单事件
