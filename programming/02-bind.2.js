// 2021-01-05

// 不支持使用new调用新创建的构造函数
Function.prototype._bind = function () {
  var that = this;
  var thatArg = arguments[0];
  var args = slice.call(arguments, 1);

  if (typeof that !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      'Function.prototype.bind - ' +
        'what is trying to be bound is not callable'
    );
  }

  return function () {
    var funcArgs = args.concat(slice.call(arguments));
    return that.apply(thatArg, funcArgs);
  };
};

const bar = {
  x: 42,
  getX: function (a, b) {
    return this.x + a + b;
  },
};

console.log(bar.getX._bind({ x: 9 })(5, 6, 7));

function foo() {
  this.a = 8;
  console.log(this.a);
}

foo._bind({ a: 4 })();
