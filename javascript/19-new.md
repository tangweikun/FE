### `new`操作符具体干了什么

[构造函数与`new`命令](http://javascript.ruanyifeng.com/oop/basic.html)

```js
var fn = function() {};
var fnObj = new fn();
```

创建了一个空对象: var obj = new object()
设置原型链: obj._proto_ = fn.prototype
让 fn 的 this 指向 obj
执行 fn 的函数体: var result = fn.call(obj)
