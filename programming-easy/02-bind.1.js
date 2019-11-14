Function.prototype._bind = function(...args) {
  return () => this.apply(args[0], args.slice(1));
};
