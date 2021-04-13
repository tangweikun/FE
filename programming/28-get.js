function get(object, keys = '', defaultValue) {
  if (object === null || typeof object !== 'object') {
    return undefined;
  }

  const arrKeys = Array.isArray(keys) ? keys : keys.split('.');
  if (arrKeys.length === 0) {
    return undefined;
  }

  let res = object;

  try {
    for (let ele of arrKeys) {
      res = res[ele];
    }
  } catch (err) {
    res = undefined;
  }

  return res == undefined ? defaultValue : res;
}

const data = { a: 1, b: { b1: 2 } };
console.log(get(data, 'b2.b1.2'));
console.log(get(data, []));
