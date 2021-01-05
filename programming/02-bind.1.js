// 2020/07/10
// 2021/01/05

// 不支持使用new调用新创建的构造函数
Function.prototype._bind = function (...context) {
  return (...args) => this.call(...context, ...args);
};

const bar = {
  x: 42,
  getX: function (a, b) {
    return this.x + a + b;
  },
};

console.log(bar.getX._bind({ x: 9 }, 1, 1)(5, 6));
