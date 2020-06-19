// 2.1.1 如果promise在pending状态
// 2.1.1.1 可以变成 fulfilled 或者是 rejected

// 2.1.2 如果promise在fulfilled状态
// 2.1.2.1 不会变成其它状态
// 2.1.2.2 必须有一个value值

// 2.1.3 如果promise在rejected状态
// 2.1.3.1 不会变成其它状态
// 2.1.3.2 必须有一个promise被reject的reason

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

  try {
    fn(resolve.bind(this), reject.bind(this));
  } catch (err) {
    reject(err);
  }
}

function resolve(val) {
  if (this._status !== PENDING) return;
  this._status = FULFILLED;
  this._value = val;
}

function reject(err) {
  if (this._status !== PENDING) return;
  this._status = REJECTED;
  this._value = err;
}

// ------------------------------------------------------------------
const t1 = new Promise((resolve, reject) => {
  resolve(1);
});

const t2 = new Promise((resolve, reject) => {
  reject(2);
});

const t3 = new Promise((resolve, reject) => {
  resolve(3);
  reject(4);
});

const t4 = new Promise((resolve, reject) => {
  reject(5);
  resolve(6);
});

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
