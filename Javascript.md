# Javascript

[ecma](https://www.ecma-international.org/ecma-262/6.0/)

[What will be the output of the following code?](https://gist.github.com/tangweikun/4a2d480e8ff4dc6cbdba643b81efb782)

[冴羽的博客](https://github.com/mqyqingfeng/Blog)

## Table of Contents

1.  [原型和原型链](#原型和原型链)
1.  [event delegation](#event-delegation)
1.  [继承](#继承)
1.  [`JavaScript`中的相等性判断承](#javascript中的相等性判断承)
1.  [`+`运算符工作流程](#+运算符工作流程)
1.  [`js`延迟加载的方式有哪些](#js延迟加载的方式有哪些)
1.  [如何解决跨域问题](#如何解决跨域问题)
1.  [哪些操作会造成内存泄漏](#哪些操作会造成内存泄漏)
1.  [函数声明的方法](#函数声明的方法)
1.  [Write a log function which will add prefix (your message) to every message you log using `console.log`](#write-a-log-function-which-will-add-prefix-your-message-to-every-message-you-log-using-consolelog)
1.  [对象转基本类型](#对象转基本类型)
1.  [As `[]` is `true`, `[]==true` should also be `true`. right?](#js-27)
1.  [How could you write a method on instance of a date which will give you next day?](#how-could-you-write-a-method-on-instance-of-a-date-which-will-give-you-next-day)
1.  [How could you cache execution of any function?](#how-could-you-cache-execution-of-any-function)

### 函数声明的方法

- `function` 命令

  ```js
  function print(s) {
    console.log(s);
  }
  ```

- 函数表达式

  ```js
  var print = function(s) {
    console.log(s);
  };
  ```

- `Function` 构造函数

  ```js
  var add = new Function('x', 'y', 'return x + y');
  ```

### Write a log function which will add prefix (your message) to every message you log using `console.log`

```js
function appLog() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('your app name');
  console.log.apply(console, args);
}

console.log(appLog('Some error message'));
```

### 对象转基本类型

对象在转换基本类型时，首先会调用 `valueOf` 然后调用 `toString`。并且这两个方法你是可以重写的。

```js
let a = {
  valueOf() {
    return 0;
  },
};
```

当然你也可以重写 `Symbol.toPrimitive`，该方法在转基本类型时调用优先级最高。

```js
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
  [Symbol.toPrimitive]() {
    return 2;
  },
};
1 + a; // => 3
'1' + a; // => '12'
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
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate + 1));
};

var date = new Date();
date.nextDay();
```

### How could you cache execution of any function?

```js
function cacheFn(fn) {
  var cache = {};

  return function(arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      cache[arg] = fn(arg);
      return cache[arg];
    }
  };
}

// What if you are passing more than one argument?
function cacheFn(fn) {
  var cache = {};

  return function() {
    var args = arguments;
    var key = [].slice.call(args).join('');
    if (cache[key]) {
      return cache[key];
    } else {
      cache[key] = fn.apply(thi, args);
      return cache[key];
    }
  };
}
```

<br>[⬆ Back to top](#)
