const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class MyPromise {
  constructor(handle) {
    if (Object.prototype.toString.call(handle) !== "[object Function]") {
      throw new Error("MyPromise must accept a function as a parameter");
    }

    this.status = PENDING;
    this.value = undefined;

    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve(val) {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = val;
  }

  _reject(err) {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.value = err;
  }
}

const foo = new MyPromise(function (resolve, reject) {
  resolve(1);
});
console.log(foo);
