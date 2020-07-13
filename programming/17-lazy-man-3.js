class LazyMan {
  constructor(name) {
    this.name = name;
    this.sayName = this.sayName.bind(this);
    this.queue = [this.sayName];
    setTimeout(async () => {
      for (let todo of this.queue) {
        await todo();
      }
    }, 0);
  }

  sayName() {
    return new Promise(resolve => {
      console.log(`Hi! this is ${this.name}!`);
      resolve();
    });
  }

  holdOn(time) {
    return () =>
      new Promise(resolve => {
        setTimeout(() => {
          console.log(`Wake up after ${time} second`);
          resolve();
        }, time * 1000);
      });
  }

  sleep(time) {
    this.queue.push(this.holdOn(time));
    return this;
  }

  eat(meal) {
    this.queue.push(() => {
      console.log(`eat ${meal}`);
    });
    return this;
  }

  sleepFirst(time) {
    this.queue.unshift(this.holdOn(time));
    return this;
  }
}

function lazyMan(name) {
  return new LazyMan(name);
}

// Hi! This is Hank!
lazyMan('Hank');

// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~
lazyMan('Hank')
  .sleep(1)
  .eat('dinner');

// Hi This is Hank!
// Eat dinner~
// Eat supper~
lazyMan('Hank')
  .eat('dinner')
  .eat('supper');

// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
lazyMan('Hank')
  .sleepFirst(2)
  .eat('supper');
