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
    this.fulfilledQueues = [];
    this.rejectedQueues = [];

    try {
      _handler(this.onFulfilled.bind(this), this.onRejected.bind(this));
    } catch (err) {
      console.log(err);
    }
  }

  onFulfilled(value) {
    const run = () => {
      if (this.status !== PENDING) return;
      this.status = FULFILLED;
      this.value = value;

      let cb;
      while ((cb = this.fulfilledQueues.shift())) {
        cb(value);
      }
    };

    setTimeout(run, 0);
  }

  onRejected(value) {
    const run = () => {
      if (this.status !== PENDING) return;
      this.status = REJECTED;
      this.value = value;

      let cb;
      while ((cb = this.rejectedQueues.shift())) {
        cb(value);
      }
    };

    setTimeout(run, 0);
  }

  then(_onFulfilled, _onRejected) {
    const { fulfilledQueues, rejectedQueues, status, value } = this;

    if (status === FULFILLED) {
      return _onFulfilled(value);
    }

    if (status === REJECTED) {
      return _onRejected(value);
    }

    if (status === PENDING) {
      fulfilledQueues.push(_onFulfilled);
      rejectedQueues.push(_onRejected);
    }
  }
}

console.log('start');
new _Promise((resolve, reject) => {
  // resolve(1);
  reject(2);
}).then(
  (res) => console.log(res, 'fulfilled'),
  (res) => console.log(res, 'reject')
);
console.log('end');
