function flatten(arr) {
  let res = [];
  for (let elm of arr) {
    if (Array.isArray(elm)) {
      res = res.concat(flatten(elm));
    } else {
      res.push(elm);
    }
  }

  return res;
}

console.log(flatten([1, 2, [4, 5, [9, 9]]]));
