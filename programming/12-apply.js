// HELP:

Function.prototype._apply = function(context) {
  var context = context || window;
  context.fn = this;

  var result;
  // There's a need to determine whether to store the second parameter
  // If the second parameter exists, spread it
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
};

// Using apply to append an array to another
const array = ["a", "b"];
Array.prototype.push._apply(array, [0, 1, 2]);
console.log(array); // ["a", "b", 0, 1, 2]

var pokemon = {
  firstName: "Pika",
  lastName: "Chu ",
  getPokeName: function() {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
};

var pokemonName = function(snack, hobby) {
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

pokemonName._apply(pokemon, ["sushi", "algorithms"]); // Pika Chu  loves sushi and algorithms
