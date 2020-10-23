function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const current = Math.pow((left + right) / 2);
    if (target === arr[current]) return current;
    if (target < arr[current]) {
      right--;
    } else {
      left++;
    }
  }

  return -1;
}
