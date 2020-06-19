// promise 是一个有then方法的对象或者是函数，行为遵循本规范
// thenable 是一个有then方法的对象或者是函数
// value 是promise状态成功时的值，包括 undefined/thenable或者是 promise
// exception 是一个使用throw抛出的异常值
// reason 是promise状态失败时的值

// ------------------------------------------------------------------

const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function Promise(fn) {
  // 参数如果不是函数就抛出类型错误
  if (typeof fn !== "function") {
    throw new TypeError("Promise constructor's argument is not a function");
  }

  // FIXME: 需要核对该方法
  if (!this instanceof Promise) {
    throw new TypeError("Promise 必须通过new来调用");
  }

  this._status = PENDING;
  this._value = undefined;
}

// ------------------------------------------------------------------

console.log(new Promise(() => {}));
