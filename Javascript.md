# Javascript Questions

## Questions

1.  [js 的基本数据类型](#js-1)
1.  [js 的内置对象](#js-2)
1.  [`eval` 是做什么的](#js-3)
1.  [javascript 创建对象的方式](#js-4)
1.  [Event Loop](#js-5)
1.  [为何通常会认为保留网站现有的全局作用域不去改变它，是较好的选择?](#js-6)
1.  [`["1", "2", "3"].map(parseInt)`输出结果是什么?](#js-7)
1.  [对`this`的理解](#js-8)
1.  [函数声明 VS 函数表达式](#js-9)
1.  [Ajax](#js-10)
1.  [JSONP](#js-11)
1.  [Scoping and Hosting](#js-12)
1.  [new 操作符具体干了什么?](#js-13)
1.  [闭包](#js-14)
1.  [原型和原型链](#js-15)
1.  [event delegation](#js-16)
1.  [继承](#js-17)
1.  [继 JavaScript 中的相等性判断承](#js-18)
1.  [`+`运算符工作流程](#js-19)
1.  [js 延迟加载的方式有哪些](#js-20)
1.  [如何解决跨域问题](#js-21)

## Answers

### JS-1

>     undefined、null、number、string、boolean、symbol

### JS-2

>      Object、Array、Boolean、Number、String、Function、Arguments、Math、Date、RegExp、Error

### JS-3

    它的功能是把对应的字符串解析成JS代码并运行；
    应该避免使用eval，不安全，非常耗性能（运行2次，一次解析成js语句，一次执行）。

### JS-4

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

### JS-5

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

[Event Loop Practice](https://gist.github.com/tangweikun/b7bce8ad1978b0bd5576fecb60e71c25)

![Event Loop](https://pic3.zhimg.com/v2-fdd9322a0cabafa7d3461e5d25718586_1200x500.jpg)

### JS-6

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

### JS-8

[Javascript 的 this 用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

[The many faces of `this` in javascript](https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e)

[加深对 JavaScript This 的理解](http://huang-jerryc.com/2017/07/15/understand-this-of-javascript/)

[This 实战](https://gist.github.com/tangweikun/95e77ccc069188f1b06d7cc1cc1029bd)

> `this`是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。`this`就是函数运行时所在的环境对象。只有函数执行的时候才能确定`this`到底指向谁，实际上`this`的最终指向的是那个调用它的对象

### JS-9

```js
function foo() {} // 方法一：函数声明

var foo = function() {} // 方法二：函数表达式
```

> 函数声明会使函数体提升（具有与变量相同的提升行为），但函数表达式的函数体不能

### JS-10

[AJAX](http://javascript.ruanyifeng.com/bom/ajax.html)

> Ajax（Asynchronous JavaScript and XML）是一种异步请求数据的 web 开发技术，对于改善用户的体验和页面性能很有帮助。简单地说，在不需要重新刷新页面的情况下，Ajax 通过异步请求加载后台数据，并在网页上呈现出来。常见运用场景有表单验证是否登入成功、百度搜索下拉框提示和快递单号查询等等。

> AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容

> AJAX 包括以下几个步骤

        创建 XMLHttpRequest 实例
        发出 HTTP 请求
        接收服务器传回的数据
        更新网页数据

### JS-11

<!-- TODO: 实现JSONP-->

[How to use JSON padding to bypass the Same Origin Policy](https://medium.freecodecamp.org/use-jsonp-and-other-alternatives-to-bypass-the-same-origin-policy-17114a5f2016)

> jsonp 是一种跨域通信的手段，它的原理其实很简单。首先是利用 script 标签的 src 属性来实现跨域。通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信。由于使用 script 标签的 src 属性，因此只支持 get 方法。

### JS-12

[JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

[Scoping and Hoisting](https://gist.github.com/tangweikun/86a85cb13d7a76f1584eb1d01c9e73fd)

### JS-13

```js
var fn = function() {}
var fnObj = new fn()
```

        创建了一个空对象: var obj = new object()
        设置原型链: obj._proto_ = fn.prototype
        让 fn 的 this 指向 obj，并执行fn的函数体: var result = fn.call(obj)

### JS-14

<!-- TODO: Learn More -->

[学习 Javascript 闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

[Let’s Learn JavaScript Closures](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)

[I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

> <h4>概念</h4> 闭包就是能够读取其他函数内部变量的函数(定义在一个函数内部的函数，闭包就是将函数内部和函数外部连接起来的一座桥梁)

> <h4>用途</h4> 读取函数内部的变量，让这些变量的值始终保持在内存中

### JS-15

[Javascript 原型中的哲学思想](http://huang-jerryc.com/2016/06/28/JavaScript%E5%8E%9F%E5%9E%8B%E4%B8%AD%E7%9A%84%E5%93%B2%E5%AD%A6%E6%80%9D%E6%83%B3/)

[JavaScript 深入之原型到原型链](https://segmentfault.com/a/1190000008959943)

### JS-16

[JS 中的事件绑定、事件监听、事件委托是什么？](https://juejin.im/entry/57ea329e67f3560057ad41a6)

[JavaScript 事件代理和委托](https://my.oschina.net/u/3152390/blog/849505)

### JS-17

[JavaScript 深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)

### JS-18

[JavaScript 中的相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

[JavaScript tutorial: Comparison operators](http://www.c-point.com/javascript_tutorial/jsgrpComparison.htm)

### JS-19

1. 如果有操作数是对象，转换为原始值
1. 如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接
1. 所有操作数都转换为数字并执行加法

### JS-20

- 将 js 文件放在 body 底部
- setTimeout 延时加载
- defer 和 async

### JS-21

> <h4>CORS(Cross-Origin Resource Sharing)</h4> 定义了必须在访问跨域资源时，浏览器与服务器应该如何沟通。CORS 背后的基本思想就是使用自定义的 HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。

> <h4>JSONP(JSON with Padding)</h4> JSONP由两部分组成：回调函数和数据。回调函数是当响应到来时应该在页面中调用的函数，而数据就是传入回调函数中的JSON数据。

> <h4>通过修改 `document.domain` 来跨子域</h4>

> <h4>使用 `window.name` 来进行跨域</h4>
