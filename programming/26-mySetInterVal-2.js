function mySetInterVal(fn, a, b) {
  let timeCount = 0;
  let timer;
  const loop = () => {
    timer = setTimeout(() => {
      fn();
      timeCount++;
      loop();
    }, a + timeCount * b);
  };

  loop();

  return () => {
    clearTimeout(timer);
  };
}

// 测试
const myClear = mySetInterVal(
  () => {
    console.log('test');
  },
  1000,
  500
);
// 清除定时器
myClear();
