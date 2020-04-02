## JavaScript的面向对象

1. new命令的原理
  1. 创建一个空对象，作为将要返回的对象实例。
  2. 将这个空对象的原型，指向构造函数的prototype属性。
  3. 将这个空对象赋值给函数内部的this关键字。
  4. 开始执行构造函数内部的代码。
  就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。
  如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

### 对象的继承
  JavaScript 语言的继承不通过 class，而是通过“原型对象”（prototype）实现，
  ES6 引入了 class 语法。

  1. 构造函数的缺点
    同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。
    解决： 原型对象prototype

  2. prototype 属性的作用 
    原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，而实例对象可以视作从原型对象衍生出来的子对象。

  3. 原型链
    如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype
    Object.prototype的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。

  4. constructor 属性
    prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。
    constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。

  5. 构造函数的继承 
    第一种方法
      1. 第一步是在子类的构造函数中，调用父类的构造函数。` Super.call(this);`
      2. 第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型。`Sub.prototype = Object.create(Super.prototype);`
    第二种
      Sub.prototype = new Super();这样子类会具有父类实例的方法。不推荐

      