Array.prototype._filter = function (fn, context) {
  const arr = [...this];
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;

    if (fn.call(context, arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }

  return res;
};
