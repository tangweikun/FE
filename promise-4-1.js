const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';

class _Promise {
  constructor(handler) {
    // Promise的参数必须是一个函数
    if (typeof handler !== 'function') {
      throw new TypeError('Promise must accept a function as a parameter');
    }

    this.value = undefined;
    this.status = PENDING;

    try {
      handler(this.onFulfilled.bind(this), this.onRejected.bind(this));
    } catch (err) {
      console.log(err);
    }
  }

  onFulfilled(value) {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
  }

  onRejected(err) {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.value = err;
  }
}

new _Promise((resolve, reject) => {
  resolve(1);
  reject();
});
