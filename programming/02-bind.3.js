// 2021-01-05

//  Yes, it does work with `new (funcA.bind(thisArg, args))`
Function.prototype._bind = function (oThis) {
  if (typeof this !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      'Function.prototype.bind - what is trying to be bound is not callable'
    );
  }

  var aArgs = Array.prototype.slice.call(arguments, 1);
  var fToBind = this;
  var fNOP = function () {};
  var fBound = function () {
    return fToBind.apply(
      this instanceof fNOP ? this : oThis,
      aArgs.concat(Array.prototype.slice.call(arguments))
    );
  };

  if (this.prototype) {
    // Function.prototype doesn't have a prototype property
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new fNOP();

  return fBound;
};

var module = {
  x: 42,
  getX: function (a, b) {
    return this.x + a + b;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX._bind(module, 2);
console.log(boundGetX(2));
// expected output: 42
