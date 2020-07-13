function throttle(fn, wait) {
  let inThrottle = false;
  let timeoutId = null;
  let lastTime = Date.now();

  return function (...args) {
    const that = this;

    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
      return fn.apply(that, args);
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      if (Date.now() - lastTime >= wait) {
        fn.apply(that, args);
        lastTime = Date.now();
      }
    }, wait - (Date.now() - lastTime));
  };
}
