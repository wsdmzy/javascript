## 标准库的学习

###  错误处理机制
  JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供Error构造函数，所有抛出的错误都是这个构造函数的实例。
  1. 原生错误类型
    1. SyntaxError对象是解析代码时发生的语法错误。
    2. ReferenceError对象是引用一个不存在的变量时发生的错误
    3. RangeError对象是一个值超出有效范围时发生的错误。
    4. TypeError对象是变量或参数不是预期类型时发生的错误。
    5. URIError对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
    6. eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。
  
  2. throw语句
    throw语句的作用是手动中断程序执行，抛出一个错误。

  3. try...catch 结构 
    一旦发生错误，程序就中止执行了。JavaScript 提供了try...catch结构，允许对错误进行处理，选择是否往下执行。

  4. finally 代码块
    try...catch结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必需在最后运行的语句。

### Object对象
  JavaScript 的所有其他对象都继承自Object对象，即那些对象都是Object的实例。
  1. 静态方法
    Object.keys方法和Object.getOwnPropertyNames方法都用来遍历对象的属性。
    两者的区别涉及不可枚举属性时，第一个只返回可枚举，第二个还可返回不可枚举

  判断数据类型
    1. typeof
    2. instanceof
    3. toString()
      Object.prototype.toString.call(2) // "[object Number]"


### 属性描述对象
  JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。
  ```
  {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false,
    get: undefined,
    set: undefined
  }
  ```
  1. Object.getOwnPropertyDescriptor()方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。
  
  2. Object.getOwnPropertyNames方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。

  3. Object.defineProperty()方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象，

### Array对象
  静态方法。。。
  https://wangdoc.com/javascript/stdlib/array.html

### String 
slice == substring 开始位置，结束位置
substr  开始位置 长度

split方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。
