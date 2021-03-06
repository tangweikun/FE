const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';
const isFunction = (variable) => typeof variable === 'function';

class _Promise {
  constructor(_handler) {
    if (!isFunction(_handler)) {
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

    return new _Promise((onFulfilledNext, onRejectedNext) => {
      let fulfilled = (value) => {
        try {
          if (!isFunction(_onFulfilled)) {
            return onFulfilledNext(value);
          }

          const res = _onFulfilled(value);
          if (res instanceof _Promise) {
            return res.then(onFulfilledNext, onRejectedNext);
          }

          onFulfilledNext(res);
        } catch (err) {
          onRejectedNext(err);
        }
      };

      let rejected = (value) => {
        try {
          if (!isFunction(_onRejected)) {
            return onRejectedNext(value);
          }

          const res = _onRejected(value);
          if (res instanceof _Promise) {
            return res.then(onFulfilledNext, onRejectedNext);
          }

          return onFulfilledNext(res);
        } catch (err) {
          onRejectedNext(err);
        }
      };

      if (status === FULFILLED) {
        return fulfilled(value);
      }

      if (status === REJECTED) {
        return rejected(value);
      }

      if (status === PENDING) {
        fulfilledQueues.push(fulfilled);
        rejectedQueues.push(rejected);
      }
    });
  }
}

console.log('start');
new _Promise((resolve, reject) => {
  resolve(1);
  reject(2);
})
  .then(
    (res) => {
      console.log(res, 'fulfilled');
      return new _Promise((resolve) => resolve('f'));
    },
    (res) => console.log(res, 'reject')
  )
  .then(5)
  .then((res) => console.log(res, 'lolo'));
console.log('end');
