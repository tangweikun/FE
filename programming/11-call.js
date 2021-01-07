// HELP:
// 改变 this 指向
// 借用别的对象的方法
// 调用函数

Function.prototype._call = function (context) {
  var context = context || window;

  // Add an property to the `context`
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  // this 指向的是当前的函数(Function的实例)
  context.fn = this;

  // 获取除了 this 指向对象以外的参数, 空数组slice后返回的仍然是空数组
  // take out the rest parameters of `context`
  var args = [...arguments].slice(1);

  // 隐式绑定,当前函数的 this 指向了context
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args);

  // delete fn
  delete context.fn;
  return result;
};

/*******************************   Test Case    *******************************/

// Using call to chain constructors for an object
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product._call(this, name, price);
  this.category = 'FOOD';
}
function Toy(name, price) {
  Product._call(this, name, price);
  this.category = 'TOY';
}
console.log(new Food('cheese', 5).name); // cheese
console.log(new Toy('doll', 5).category); // TOY

// Using call to invoke an anonymous function
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' },
];
for (let i = 0; i < animals.length; i++) {
  (function (i, tag) {
    this.print = function () {
      console.log(tag + i + ' ' + this.species + ': ' + this.name);
    };
    this.print();
  }._call(animals[i], i, '#'));
}

// Using call to invoke a function and specifying the context for 'this'
function greet() {
  const reply = [
    this.animal,
    'typically sleep between',
    this.sleepDuration,
  ].join(' ');
  console.log(reply);
}
const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours',
};
greet._call(obj); // cats typically sleep between 12 and 16 hours

// 借用别的对象的方法
var Person1 = function () {
  this.name = 'linxin';
};
var Person2 = function () {
  this.getname = function () {
    console.log(this.name);
  };
  Person1._call(this);
};
var person = new Person2();
person.getname(); // linxin

function func() {
  console.log('linxin');
}
