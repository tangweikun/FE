const PENDING = 'PENDING';
const REJECT = 'REJECT';
const RESOLVE = 'RESOLVE';

class _Promise {
  constructor(handler) {
    // Promise的参数必须是一个函数
    if (typeof handler !== 'function') {
      throw new TypeError('Promise must accept a function as a parameter');
    }

    this.value = undefined;
    this.status = PENDING;

    try {
      handler(this.onFullfilled.bind(this), this.onRejected.bind(this));
    } catch (err) {
      console.log(err);
    }
  }

  onFullfilled(value) {
    if (this.status !== PENDING) return;
    this.status = RESOLVE;
    this.value = value;
  }

  onRejected(err) {
    if (this.status !== PENDING) return;
    this.status = REJECT;
    this.value = err;
  }
}

new _Promise((resolve, reject) => {
  resolve(1);
  reject();
});
