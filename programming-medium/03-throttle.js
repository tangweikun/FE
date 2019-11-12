const throttle = (fn, wait) => {
  let inThrottle, timeId, lastTime;

  return function() {
    const context = this;
    const args = [...arguments];

    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(timeId);
      timeId = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, wait - (Date.now() - lastTime));
    }
  };
};
