// HELP:

Function.prototype._bind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  var _this = this;
  var args = [...arguments].slice(1);

  return function F() {
    // we can use `new F()` because it returns a function, so we need to determine
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};
