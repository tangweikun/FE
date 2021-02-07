Array.prototype._reduce = function (fn, initialValue) {
  const arr = [...this];
  let [res, i] = initialValue === undefined ? [arr[0], 1] : [initialValue, 0];

  while (i < arr.length) {
    if (arr.hasOwnProperty(i)) {
      res = fn.call(null, res, arr[i], i, arr);
    }
    i++;
  }

  return res;
};

console.log([1, 2, 3].reduce((acc, n) => acc * n, 1));
console.log([1, 2, 3].reduce((acc, n) => acc * n));
