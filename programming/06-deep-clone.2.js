function deepClone(obj) {
  // 如果参数是 null 或者不是对象类型就返回结果
  if (typeof obj !== "object" || obj === null) return obj;

  const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  const res = {
    object: {},
    array: [],
  }[type];

  for (let key in obj) {
    res[key] = typeof obj[key] !== "object" ? obj[key] : deepClone(obj[key]);
  }

  return res;
}

const foo = { a: 1, b: 2, c: { c1: 3 } };
const bar = [1, 2, 3, 4];
const foobar = { a: 1, b: [2, 3, { c: 4 }] };
console.log(deepClone(foo));
console.log(deepClone(bar));
console.log(deepClone(foobar));
