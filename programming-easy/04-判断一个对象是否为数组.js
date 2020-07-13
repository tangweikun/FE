// 2020/07/10

function _isArray(arr) {
  if (typeof arr === 'object') {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }

  return false;
}

function _isArray2(arr) {
  return Array.isArray(arr);
}

function _isArray3(arr) {
  return arr instanceof Array;
}
