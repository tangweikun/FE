// 2020/7/13

const throttle = (fn, wait) => {
  let inThrottle, timeId, lastTime;

  return function (...args) {
    const context = this;

    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
      return fn.apply(context, args);
    }

    clearTimeout(timeId);
    timeId = setTimeout(function () {
      if (Date.now() - lastTime >= wait) {
        fn.apply(context, args);
        lastTime = Date.now();
      }
    }, wait - (Date.now() - lastTime));
  };
};
