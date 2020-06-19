// 2.2 then方法
// promise必须提供一个then方法，来访问最终的结果
// promise的then方法接收两个参数
// promise.then(onFulfilled, onRejected)

// 2.2.1 onFulfilled 和 onRejected 都是可选参数
// 2.2.1.1 onFulfilled 必须是函数类型
// 2.2.1.2 onRejected 必须是函数类型

// 2.2.2 如果 onFulfilled 是函数:
// 2.2.2.1 必须在promise变成 fulfilled 时，调用 onFulfilled，参数是promise的value
// 2.2.2.2 在promise的状态不是 fulfilled 之前，不能调用
// 2.2.2.3 onFulfilled 只能被调用一次

// 2.2.3 如果 onRejected 是函数
// 2.2.3.1 必须在promise变成 rejected 时，调用 onRejected，参数是promise的reason
// 2.2.3.2 在promise的状态不是 rejected 之前，不能调用
// 2.2.3.3 onRejected 只能被调用一次

// 2.2.4 onFulfilled 和 onRejected 应该是微任务

// 2.2.5 onFulfilled 和 onRejected 必须作为函数被调用

// 2.2.6 then方法可能被多次调用
// 2.2.6.1 如果promise变成了 fulfilled态，所有的onFulfilled回调都需要按照then的顺序执行
// 2.2.6.2 如果promise变成了 rejected态，所有的onRejected回调都需要按照then的顺序执行

// 2.2.7 then必须返回一个promise
// promise2 = promise1.then(onFulfilled, onRejected);
// 2.2.7.1 onFulfilled 或 onRejected 执行的结果为x,调用 resolvePromise
// 2.2.7.2 如果 onFulfilled 或者 onRejected 执行时抛出异常e,promise2需要被reject
// 2.2.7.3 如果 onFulfilled 不是一个函数，promise2 以promise1的值fulfilled
// 2.2.7.4 如果 onRejected 不是一个函数，promise2 以promise1的reason rejected
// ------------------------------------------------------------------

const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
const ADOPTED = "ADOPTED";

function noop() {}

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
  this._fulfilledQueues = [];
  this._rejectedQueues = [];

  try {
    fn(resolve.bind(this), reject.bind(this));
  } catch (err) {
    reject(err);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== "function") {
    onFulfilled = (value) => value;
  }
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw new Error(reason);
    };
  }

  const self = this;
  const promise2 = new Promise((resolve, reject) => {
    if (self._status === FULFILLED) {
      setTimeout(() => {
        try {
          let x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }

    if (self._status === REJECTED) {
      setTimeout(() => {
        try {
          let x = onRejected(self.reason);
        } catch (e) {
          reject(e);
        }
      });
    }

    if (self._status === PENDING) {
      self._fulfilledQueues.push(() => {
        setTimeout(() => {
          try {
            let x = onFulfilled(self.value);
          } catch (e) {
            reject(e);
          }
        });
      });

      self._fulfilledQueues.push(() => {
        setTimeout(() => {
          try {
            let x = onRejected(self.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
    }
  });

  return promise2;
};

function resolvePromise(promise2, x, resolve, reject) {
  let self = this;
  if (promise2 === x) {
    reject(new TypeError("Chaining cycle"));
  }

  if ((x && typeof x === "object") || typeof x === "function") {
    let used;
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (used) return;
            used = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            if (used) return;
            used = true;
            reject(err);
          }
        );
      } else {
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (e) {
      if (used) return;
      used = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.promise = promise;
}

function handle(self, deferred) {}

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
}).then(
  (x) => console.log(x, 2),
  (y) => console.log(y)
);
