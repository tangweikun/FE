function curry(fn, args = []) {
  return function () {
    const rest = [...args, ...arguments];
    if (rest.length < fn.length) {
      return curry(fn, rest);
    }

    return fn.apply(null, rest);
  };
}

// test
function sum(a, b, c) {
  return a + b + c;
}
let sumFn = curry(sum);
console.log(sumFn(1)(2)(3)); //6
console.log(sumFn(1)(2, 3)); //6
