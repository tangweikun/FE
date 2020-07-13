class LazyMan {
  constructor(name) {
    this.name = name;
    this.sayName = this.sayName.bind(this);
    this.next = this.next.bind(this);
    this.queue = [this.sayName];
    setTimeout(this.next, 0);
  }

  next() {
    const currTask = this.queue.shift();
    currTask && currTask();
  }

  sayName() {
    console.log(`Hi! this is ${this.name}!`);
    this.next();
  }

  sleep(time) {
    this.queue.push(this.holdOn(time));
    return this;
  }

  eat(meal) {
    this.queue.push(() => {
      console.log(`eat ${meal}~`);
      this.next();
    });
    return this;
  }

  sleepFirst(time) {
    this.queue.unshift(this.holdOn(time));
    return this;
  }

  holdOn(time) {
    setTimeout(() => {
      console.log(`Wake up after ${time} second`);
      this.next();
    }, time * 1000);
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
  .eat('dinner')
  .sleep(3)
  .eat('supper');

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
