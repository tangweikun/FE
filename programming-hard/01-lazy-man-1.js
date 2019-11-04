class Lazy {
  constructor(name) {
    this.sleepFirstTime = 0;
    this.promise = Promise.resolve()
      .then(() => this.sleepFirstTime && this._sleep(this.sleepFirstTime))
      .then(() => {
        console.log(`Hi! This is ${name}!`);
      });
  }

  sleepFirst(time) {
    return (this.sleepFirstTime = time), this;
  }

  eat(food) {
    this.promise = this.promise.then(() => {
      console.log(`Eat ${food}~`);
    });

    return this;
  }

  sleep(time) {
    this.promise = this.promise.then(() => this._sleep(time));

    return this;
  }

  _sleep(time) {
    return new Promise(next => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        next();
      }, time * 1000);
    });
  }
}

function lazyMan(name) {
  return new Lazy(name);
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
