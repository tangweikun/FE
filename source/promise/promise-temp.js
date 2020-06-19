const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function Promise(fn) {
  this.status = PENDING;
  this._fulfilledQueues = []; // 成功的回调
  this._rejectedQueues = []; // 失败的回调

  // PromiseA+ 2.1
  function resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;

      // 2.2.6.1 如果promise变成了fulfilled态，所有的onFulfilled回调都需要按照then的顺序执行
      this._fulfilledQueues.forEach((f) => f());
    }
  }

  function reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;

      // 2.2.6.2 如果promise变成了rejected态，所有的onRejected回调都需要按照then的顺序执行
      this._rejectedQueues.forEach((f) => f());
    }
  }

  // FIXME: try是否可以去除
  try {
    fn(resolve.bind(this), reject.bind(this));
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  // PromiseA+ 2.2.5 / PromiseA+ 2.2.7.3 / PromiseA+ 2.2.7.4

  // 2.2.1.1 onFulfilled 必须是函数类型
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;

  // 2.2.1.2 onRejected 必须是函数类型
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };

  // 2.2.7 then必须返回一个promise
  const promise2 = new Promise((resolve, reject) => {
    if (this.status === FULFILLED) {
      // PromiseA+ 2.2.2 如果 onFulfilled 是函数
      // PromiseA+ 2.2.4 onFulfilled 和 onRejected 应该是微任务
      setTimeout(() => {
        try {
          // PromiseA+ 2.2.7.1 onFulfilled 或 onRejected 执行的结果为x,调用 resolvePromise
          const x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          // PromiseA+ 2.2.7.2 如果 onFulfilled 或者 onRejected 执行时抛出异常e,promise2需要被reject
          reject(e);
        }
      });
    }

    if (this.status === REJECTED) {
      // PromiseA+ 2.2.3 如果 onRejected 是函数
      setTimeout(() => {
        try {
          const x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }

    if (this.status === PENDING) {
      this._fulfilledQueues.push(() => {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
      this._rejectedQueues.push(() => {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
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
  // PromiseA+ 2.3.1 如果 promise2 和 x 相等，那么 reject promise with a TypeError
  if (promise2 === x) {
    reject(new TypeError("Chaining cycle"));
  }

  // PromiseA+2.3.3 如果 x 是一个 object 或者 是一个 function
  if ((x && typeof x === "object") || typeof x === "function") {
    let used; // PromiseA+2.3.3.3.3 如果 resolvePromise 和 rejectPromise 都调用了，那么第一个调用优先，后面的调用忽略

    try {
      const then = x.then; // PromiseA+2.3.3.1 let then = x.then
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (used) return;
            used = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            // PromiseA+2.3.3.2 如果 x.then 这步出错，那么 reject promise with e as the reason
            if (used) return;
            used = true;
            reject(err);
          }
        );
      } else {
        // PromiseA+2.3.3.4 如果 then 不是一个function. fulfill promise with x.
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (e) {
      // PromiseA+ 2.3.3.2 如果 x.then 这步出错，那么 reject promise with e as the reason
      if (used) return;
      used = true;
      reject(e);
    }
  } else {
    // PromiseA+ 2.3.3.4 如果 then 不是一个function. fulfill promise with x
    resolve(x);
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = Promise;
