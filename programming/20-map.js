Array.prototype._map = function (fn, context) {
  const arr = [...this];
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    res[i] = fn.call(context, arr[i], i, this);
  }

  return res;
};

const foo = [1, 2, 3];

console.log(
  foo._map(
    function (x, i, m) {
      return { a: x * this.c, b: m };
    },
    { c: 9 }
  )
);
console.log(
  foo.map(
    function (x, i, m) {
      return { a: x * this.c, b: m };
    },
    { c: 9 }
  )
);
