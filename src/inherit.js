// function Dog(name, bread, weight) {
//   this.name = name;
//   this.bread = bread;
//   this.weight = weight;
// }

function Dog(name, bread, weight) {
  this.name = name;
  this.bread = bread;
  this.weight = weight;
}

Dog.prototype.species = "Cannie";
Dog.prototype.bark = function () {
  if (this.weight < 25) {
    console.log(this.name + " says Woof!");
  } else {
    console.log(this.name + " say Yips");
  }
};

Dog.prototype.run = function () {
  console.log("Run!");
};

Dog.prototype.wag = function () {
  console.log("Wag!");
};

Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(`${this.name} is already sitting`);
  } else {
    this.sitting = true;
    console.log(`${this.name} is now sitting`);
  }
};

function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}

ShowDog.prototype = new Dog();

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
spot.bark = function () {
  console.log(this.name + " says WOOF!");
};

scotty.sit();
scotty.sit();

console.log(scotty);
