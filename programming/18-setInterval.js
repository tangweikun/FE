const timeMap = {};
let id = 0;

function _setInterval(cb, time) {
  let timeId = id++;

  if (typeof cb !== 'function') return timeId;

  const fn = () => {
    cb();
    timeMap[timeId] = setTimeout(() => fn(), time);
  };

  timeMap[timeId] = setTimeout(fn, time);

  return timeId;
}

function _clearInterval(id) {
  clearTimeout(timeMap[id]);
  delete timeMap[id];
}

_setInterval(console.log(229), 2000);
