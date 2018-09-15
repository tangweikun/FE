# Javascript

[What will be the output of the following code?](https://gist.github.com/tangweikun/4a2d480e8ff4dc6cbdba643b81efb782)

## Table of Contents

1.  [Generator](#generator)
1.  [Comma Operator](#comma-operator)
1.  [operator overloading](#operator-overloading)
1.  [typeof](#typeof)
1.  [Automatic Semicolon Insertion](#asi)
1.  [Primitives](#primitives)
1.  [严格模式](#严格模式)
1.  [`js`的内置对象](#js的内置对象)
1.  [`eval`是做什么的](#eval是做什么的)
1.  [`javascript`创建对象的方式](#javascript创建对象的方式)
1.  [Event Loop](#event-loop)
1.  [为何通常会认为保留网站现有的全局作用域不去改变它,是较好的选择?](#为何通常会认为保留网站现有的全局作用域不去改变它是较好的选择)
1.  [`["1", "2", "3"].map(parseInt)`输出结果是什么?](#js-7)
1.  [对`this`的理解](#对this的理解)
1.  [函数声明 VS 函数表达式](#函数声明-vs-函数表达式)
1.  [Ajax](#ajax)
1.  [JSONP](#jsonp)
1.  [Scoping and Hosting](#scoping-and-hosting)
1.  [`new`操作符具体干了什么](#new操作符具体干了什么)
1.  [闭包](#闭包)
1.  [原型和原型链](#原型和原型链)
1.  [event delegation](#event-delegation)
1.  [继承](#继承)
1.  [`JavaScript`中的相等性判断承](#javascript中的相等性判断承)
1.  [`+`运算符工作流程](#+运算符工作流程)
1.  [`js`延迟加载的方式有哪些](#js延迟加载的方式有哪些)
1.  [如何解决跨域问题](#如何解决跨域问题)
1.  [哪些操作会造成内存泄漏](#哪些操作会造成内存泄漏)
1.  [变量声明提升](#变量声明提升)
1.  [函数声明的方法](#函数声明的方法)
1.  [Write a log function which will add prefix (your message) to every message you log using `console.log`](#write-a-log-function-which-will-add-prefix-your-message-to-every-message-you-log-using-consolelog)
1.  [对象转基本类型](#对象转基本类型)
1.  [As `[]` is `true`, `[]==true` should also be `true`. right?](#js-27)
1.  [How could you write a method on instance of a date which will give you next day?](#how-could-you-write-a-method-on-instance-of-a-date-which-will-give-you-next-day)
1.  [How could you cache execution of any function?](#how-could-you-cache-execution-of-any-function)

### Generator

[ES6 generators in depth](http://2ality.com/2015/03/es6-generators.html)

### Comma Operator

[The JavaScript Comma Operator](https://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/)

### operator overloading

[Fake operator overloading in JavaScript](http://2ality.com/2011/12/fake-operator-overloading.html)

### typeof

[Fixing the JavaScript typeof operator](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/)

### ASI

[Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)

### 严格模式

[严格模式](http://javascript.ruanyifeng.com/advanced/strict.html)

### Primitives

[JavaScript values: not everything is an object](http://2ality.com/2011/03/javascript-values-not-everything-is.html)

[The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

>     undefined、null、number、string、boolean、symbol

### `js`的内置对象

>      Object、Array、Boolean、Number、String、Function、Arguments、Math、Date、RegExp、Error

### `eval`是做什么的

    它的功能是把对应的字符串解析成JS代码并运行；
    应该避免使用eval，不安全，非常耗性能（运行2次，一次解析成js语句，一次执行）。

### `javascript`创建对象的方式

[JavaScript 创建对象的 7 种方法](https://juejin.im/entry/58291447128fe1005cd41c52)

[JavaScript 深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15)

> <h4>工厂模式</h4>

```js
function createPerson(name, job) {
  var o = new Object()
  o.name = name
  o.job = job
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}
var person1 = createPerson('Jiang', 'student')
var person2 = createPerson('X', 'Doctor')
```

> <h4>构造函数模式</h4>

```js
function Person(name, job) {
  this.name = name
  this.job = job
  this.sayName = function() {
    console.log(this.name)
  }
}
var person1 = new Person('Jiang', 'student')
var person2 = new Person('X', 'Doctor')
```

> <h4>原型模式</h4>

```js
function Person() {}
Person.prototype.name = 'Jiang'
Person.prototype.job = 'student'
Person.prototype.sayName = function() {
  console.log(this.name)
}
var person1 = new Person()
```

> <h4>构造函数和原型组合模式</h4>

```js
function Person(name) {
  this.name = name
  this.friends = ['lilei']
}
Person.prototype.say = function() {
  console.log(this.name)
}
var person1 = new Person('hanmeimei')
person1.say() //hanmeimei
```

> <h4>动态原型模式</h4>

```js
function Person(name) {
  this.name = name
  if(typeof this.say != 'function') {
    Person.prototype.say = function(
    alert(this.name)
  }
}
```

> <h4>寄生构造函数模式</h4>

```js
function Person(name) {
  var o = new Object()
  o.name = name
  o.say = function() {
    alert(this.name)
  }
  return o
}
var peron1 = new Person('hanmeimei')
```

> <h4>稳妥构造模式</h4>

```js
function Person(name) {
  var o = new Object()
  o.say = function() {
    alert(name)
  }
}
var person1 = new Person('hanmeimei')
person1.name // undefined
person1.say() //hanmeimei
```

### Event Loop

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

[Node 定时器详解](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)

[Event Loop Practice](https://gist.github.com/tangweikun/b7bce8ad1978b0bd5576fecb60e71c25)

![Event Loop](https://pic3.zhimg.com/v2-fdd9322a0cabafa7d3461e5d25718586_1200x500.jpg)

### 为何通常会认为保留网站现有的全局作用域不去改变它,是较好的选择?

>     它的意思是: 尽量少在全局作用域定义变量。目的: 减少名称冲突；利于模块化

### JS-7

>     [1, NaN, NaN]

> callback 函数自动传入三个参数：currentValue；index；array。map 方法的 callback 函数——parseInt 方法，在没有指定传入的参数的情况下，将自动接收三个参数。在遍历过程中，parseInt 的调用情况如下：

        parseInt("1", 0, ["1", "2", "3"])
        parseInt("2", 1, ["1", "2", "3"])
        parseInt("3", 2, ["1", "2", "3"])

> parseInt 方法接收两个参数。第三个参数["1", "2", "3"]将被忽略。parseInt 方法将会通过以下方式被调用：

        parseInt("1", 0)
        parseInt("2", 1)
        parseInt("3", 2)

> parseInt 的第二个参数 radix 为 0 时，ECMAScript5 将 string 作为十进制数字的字符串解析；
> parseInt 的第二个参数 radix 为 1 时，解析结果为 NaN；
> parseInt 的第二个参数 radix 在 2—36 之间时，如果 string 参数的第一个字符（除空白以外），不属于 radix 指定进制下的字符，解析结果为 NaN

### 对`this`的理解

[this 关键字](http://javascript.ruanyifeng.com/oop/this.html)

[Javascript 的 this 用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

[The many faces of `this` in javascript](https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e)

[加深对 JavaScript This 的理解](http://huang-jerryc.com/2017/07/15/understand-this-of-javascript/)

[This 实战](https://gist.github.com/tangweikun/95e77ccc069188f1b06d7cc1cc1029bd)

> `this`是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。`this`就是函数运行时所在的环境对象。只有函数执行的时候才能确定`this`到底指向谁，实际上`this`的最终指向的是那个调用它的对象

### 函数声明 VS 函数表达式

```js
function foo() {} // 方法一：函数声明

var foo = function() {} // 方法二：函数表达式
```

> 函数声明会使函数体提升（具有与变量相同的提升行为），但函数表达式的函数体不能

### Ajax

[AJAX](http://javascript.ruanyifeng.com/bom/ajax.html)

> Ajax（Asynchronous JavaScript and XML）是一种异步请求数据的 web 开发技术，对于改善用户的体验和页面性能很有帮助。简单地说，在不需要重新刷新页面的情况下，Ajax 通过异步请求加载后台数据，并在网页上呈现出来。常见运用场景有表单验证是否登入成功、百度搜索下拉框提示和快递单号查询等等。

> AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容

> AJAX 包括以下几个步骤

        创建 XMLHttpRequest 实例
        发出 HTTP 请求
        接收服务器传回的数据
        更新网页数据

### JSONP

<!-- TODO: 实现JSONP-->

[How to use JSON padding to bypass the Same Origin Policy](https://medium.freecodecamp.org/use-jsonp-and-other-alternatives-to-bypass-the-same-origin-policy-17114a5f2016)

> jsonp 是一种跨域通信的手段，它的原理其实很简单。首先是利用 script 标签的 src 属性来实现跨域。通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信。由于使用 script 标签的 src 属性，因此只支持 get 方法。

### Scoping and Hosting

[JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

[Scoping and Hoisting](https://gist.github.com/tangweikun/86a85cb13d7a76f1584eb1d01c9e73fd)

### `new`操作符具体干了什么

[构造函数与`new`命令](http://javascript.ruanyifeng.com/oop/basic.html)

```js
var fn = function() {}
var fnObj = new fn()
```

        创建了一个空对象: var obj = new object()
        设置原型链: obj._proto_ = fn.prototype
        让 fn 的 this 指向 obj，并执行fn的函数体: var result = fn.call(obj)

### 闭包

<!-- TODO: Learn More -->

[学习 Javascript 闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

[Let’s Learn JavaScript Closures](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)

[I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

> <h4>概念</h4> 闭包就是能够读取其他函数内部变量的函数(定义在一个函数内部的函数，闭包就是将函数内部和函数外部连接起来的一座桥梁)

> <h4>用途</h4> 读取函数内部的变量，让这些变量的值始终保持在内存中

### 原型和原型链

[prototype 对象](http://javascript.ruanyifeng.com/oop/prototype.html)

[Javascript 原型中的哲学思想](http://huang-jerryc.com/2016/06/28/JavaScript%E5%8E%9F%E5%9E%8B%E4%B8%AD%E7%9A%84%E5%93%B2%E5%AD%A6%E6%80%9D%E6%83%B3/)

[JavaScript 深入之原型到原型链](https://segmentfault.com/a/1190000008959943)

[prototype && `__proto__`](https://gist.github.com/tangweikun/43dcfe74c58a1f4960ca3563a51f645a)

### event delegation

[JS 中的事件绑定、事件监听、事件委托是什么？](https://juejin.im/entry/57ea329e67f3560057ad41a6)

[JavaScript 事件代理和委托](https://my.oschina.net/u/3152390/blog/849505)

### 继承

[JavaScript 深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)

### `JavaScript`中的相等性判断承

[JavaScript 中的相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

[JavaScript tutorial: Comparison operators](http://www.c-point.com/javascript_tutorial/jsgrpComparison.htm)

### `+`运算符工作流程

1. 如果有操作数是对象，转换为原始值
1. 如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接
1. 所有操作数都转换为数字并执行加法

### `js`延迟加载的方式有哪些

- 将 js 文件放在 body 底部
- setTimeout 延时加载
- defer 和 async

### 如何解决跨域问题

<h4>CORS(Cross-Origin Resource Sharing)</h4>

> 定义了必须在访问跨域资源时，浏览器与服务器应该如何沟通。

> CORS 背后的基本思想就是使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。

> 服务器端对于 CORS 的支持，主要就是通过设置 Access-Control-Allow-Origin 来进行的。如果浏览器检测到相应的设置，就可以允许 Ajax 进行跨域的访问。

<h4>JSONP(JSON with Padding)</h4>

> JSONP 的原理很简单，就是利用`script` 标签没有跨域限制的漏洞。

> 通过 `script` 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。

> JSONP 由两部分组成：回调函数和数据。回调函数是当响应到来时应该在页面中调用的函数，而数据就是传入回调函数中的 JSON 数据。

> JSONP 使用简单且兼容性不错，但是只限于 get 请求。

```js
    <script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
    <script>
      function jsonp(data) {
        console.log(data)
      }
    </script>


    // 在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP，以下是简单实现
    function jsonp(url, jsonpCallback, success) {
      let script = document.createElement('script')
      script.src = url
      script.async = true
      script.type = 'text/javascript'
      window[jsonpCallback] = function(data) {
        success && success(data)
      }
      document.body.appendChild(script)
    }
    jsonp('http://xxx', 'callback', function(value) {
      console.log(value)
    })
```

<h4>通过修改 `document.domain` 来跨子域</h4>

> 该方式只能用于二级域名相同的情况下，比如 `a.test.com`和 `b.test.com` 适用于该方式。

> 只需要给页面添加 `document.domain = 'test.com'` 表示二级域名都相同就可以实现跨域

<h4>使用 `window.name` 来进行跨域</h4>

<h4>postMessage</h4>

> 这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息

```js
// 发送消息端
window.parent.postMessage('message', 'http://test.com')
// 接收消息端
var mc = new MessageChannel()
mc.addEventListener('message', event => {
  var origin = event.origin || event.originalEvent.origin
  if (origin === 'http://test.com') {
    console.log('验证通过')
  }
})
```

### 哪些操作会造成内存泄漏

[4 种 JavaScript 内存泄漏浅析](https://github.com/wengjq/Blog/issues/1)

[JavaScript 内存泄漏教程](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)

[如何处理 JavaScript 内存泄露](http://web.jobbole.com/92652/)

### 变量声明提升

[JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

[ES6 变量作用域与提升：变量的生命周期详解](https://juejin.im/post/59905bea6fb9a03c34192c51)

### 函数声明的方法

- `function` 命令

  ```js
  function print(s) {
    console.log(s)
  }
  ```

- 函数表达式

  ```js
  var print = function(s) {
    console.log(s)
  }
  ```

- `Function` 构造函数

  ```js
  var add = new Function('x', 'y', 'return x + y')
  ```

### Write a log function which will add prefix (your message) to every message you log using `console.log`

```js
function appLog() {
  var args = Array.prototype.slice.call(arguments)
  args.unshift('your app name')
  console.log.apply(console, args)
}

console.log(appLog('Some error message'))
```

### 对象转基本类型

对象在转换基本类型时，首先会调用 `valueOf` 然后调用 `toString`。并且这两个方法你是可以重写的。

```js
let a = {
  valueOf() {
    return 0
  },
}
```

当然你也可以重写 `Symbol.toPrimitive`，该方法在转基本类型时调用优先级最高。

```js
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  },
}
1 + a // => 3
'1' + a // => '12'
```

### JS-27

[JavaScript 中的相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

[JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table/)

> Since left and right side of the equality are two different types, JavaScript can't compare them directly . Hence, under the hood, JavaScript will convert them to compare. first right side of the equality will be cooereced to a number and number of true would be `1`.

> After that, JavaScript implementation will try to convert `[]` by usingtoPrimitive (of JavaScript implementation). since `[].valueOf` is not primitive will use toString and will get `""`

> Now you are comparing `"" == 1` and still left and right is not same type. Hence left side will be converted again to a number and empty string will be `0`.

> Finally, they are of same type, you are comparing `0 === 1` which will be `false`.

### How could you write a method on instance of a date which will give you next day?

```js
Date.prototype.nextDay = function() {
  var currentDate = this.getDate()
  return new Date(this.setDate(currentDate + 1))
}

var date = new Date()
date.nextDay()
```

### How could you cache execution of any function?

```js
function cacheFn(fn) {
  var cache = {}

  return function(arg) {
    if (cache[arg]) {
      return cache[arg]
    } else {
      cache[arg] = fn(arg)
      return cache[arg]
    }
  }
}

// What if you are passing more than one argument?
function cacheFn(fn) {
  var cache = {}

  return function() {
    var args = arguments
    var key = [].slice.call(args).join('')
    if (cache[key]) {
      return cache[key]
    } else {
      cache[key] = fn.apply(thi, args)
      return cache[key]
    }
  }
}
```

<br>[⬆ Back to top](#)
