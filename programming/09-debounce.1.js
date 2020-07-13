// 2020/7/13

// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

function debounce(fn, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn.bind(this, ...arguments), delay);
  };
}

const f = debounce(function (a, b) {
  console.log(a, b);
}, 2000);

f(3, 4);
