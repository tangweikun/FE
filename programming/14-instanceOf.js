// 2021-1-12

// 思路：右边变量的原型存在于左边变量的原型链上
function instanceOf(left, right) {
  const leftValue = left.__proto__;
  const rightValue = right.prototype;

  while (true) {
    if (leftValue === null) {
      return false;
    }
    if (leftValue === rightValue) {
      return true;
    }

    leftValue = leftValue.__proto__;
  }
}
