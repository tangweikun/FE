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

[加深对 JavaScript This 的理解](http://huang-jerryc.com/2017/07/15/understand-this-of-javascript/)

[This 实战](https://gist.github.com/tangweikun/95e77ccc069188f1b06d7cc1cc1029bd)

> `this`是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。`this`就是函数运行时所在的环境对象。只有函数执行的时候才能确定`this`到底指向谁，实际上`this`的最终指向的是那个调用它的对象
