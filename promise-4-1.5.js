const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';

class _Promise {
  constructor(_handler) {
    // Promise的参数必须是一个函数
    if (typeof _handler !== 'function') {
      throw new TypeError('Promise must accept a function as a parameter');
    }

    this.value = undefined;
    this.status = PENDING;

    try {
      _handler(this.onFulfilled.bind(this), this.onRejected.bind(this));
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

  then(_onFulfilled, _onRejected) {
    if (this.status === FULFILLED) {
      return setTimeout(() => {
        _onFulfilled(this.value);
      }, 0);
    }

    if (this.status === REJECTED) {
      return setTimeout(() => {
        _onRejected(this.value);
      }, 0);
    }
  }
}

console.log('start');
new _Promise((resolve, reject) => {
  // resolve(1);
  reject(2);
}).then(
  (res) => console.log(res),
  (res) => console.log(res)
);
console.log('end');
