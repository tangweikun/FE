function deepClone(obj, hash = new WeakMap()) {
  // 如果参数是 null 或者不是对象类型就返回结果
  if (typeof obj !== 'object' || obj === null) return obj;

  const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  const res = {
    object: {},
    array: [],
  }[type];

  // 处理循环引用
  if (hash.get(obj)) {
    return hash.get(obj);
  }
  hash.set(obj, res);

  for (let key in obj) {
    res[key] =
      typeof obj[key] !== 'object' ? obj[key] : deepClone(obj[key], hash);
  }

  return res;
}

const foo = { a: 1, b: 2, c: { c1: 3 } };
foo.foo = foo;
console.log(deepClone(foo));
