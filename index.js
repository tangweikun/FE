function flatten(arr) {
  const res = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      res = res.concat(flatten(ele));
    } else {
      res.push(ele);
    }
  }

  return res;
}
