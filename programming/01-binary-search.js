// 2020/07/10
// 2020/10/23
// 2021/01/05

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let current = Math.floor((start + end) / 2);
    if (arr[current] === target) return current;
    if (arr[current] < target) {
      start++;
    } else {
      end--;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 8], 8));
