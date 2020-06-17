const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function MyPromise(handle) {
  if (Object.prototype.toString.call(handle) !== "[object Function]") {
    throw new Error("MyPromise must accept a function as a parameter");
  }

  this.value = undefined;
  this.status = PENDING;

  try {
    handle(_resolve.bind(this), _reject.bind(this));
  } catch (err) {
    _reject(err);
  }

  function _resolve(val) {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = val;
  }

  function _reject(err) {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.value = err;
  }
}

const foo = new MyPromise(function (resolve, reject) {
  resolve(2);
});
console.log(foo);
