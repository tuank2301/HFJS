const Cars = () => {
  function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
      make: makes[rand1],
      model: models[rand2],
      year: years[rand3],
      color: colors[rand4],
      passengers: rand5,
      convertible: convertible[rand6],
      mileage: 0,
    };
    return car;
  }

  function displayCar(car) {
    console.log(`Your new car is a ${car.year} ${car.make} ${car.model}`);
  }

  var carToSell = makeCar();
  var carToSell1 = makeCar();
  displayCar(carToSell);
  displayCar(carToSell1);

  var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passenger: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function () {
      if (this.fuel <= 0) {
        alert("The car is on empty, fill up before starting!");
      } else {
        this.started = true;
      }
    },
    stop: function () {
      this.started = false;
    },
    drive: function () {
      if (this.started) {
        if (this.fuel > 0) {
          alert(`${this.make} ${this.model} goes zoom zoom!`);
          this.fuel -= 1;
        } else {
          alert("Uh oh, out of fuel.");
        }
      } else {
        alert("You need to start the engine first.");
      }
    },
    addFuel: function (amount) {
      this.fuel = this.fuel + amount;
    },
  };

  // var cadi = {
  //   make: "GM",
  //   model: "Cadillac",
  //   year: 1955,
  //   color: "tan",
  //   passenger: 5,
  //   convertible: false,
  //   mileage: 12892,
  //   started: false,
  //   start: function () {
  //     this.started = true;
  //   },
  //   stop: function () {
  //     this.started = false;
  //   },
  //   drive: function () {
  //     if (this.started) {
  //       alert(`${this.make} ${this.model} goes zoom zoom!`);
  //     } else {
  //       alert("You need to start the engine first.");
  //     }
  //   },
  // };

  // var chevy = {
  //   make: "Chevy",
  //   model: "Bel Air",
  //   year: 1957,
  //   color: "red",
  //   passenger: 2,
  //   convertible: false,
  //   mileage: 1021,
  //   started: false,
  //   start: function () {
  //     this.started = true;
  //   },
  //   stop: function () {
  //     this.started = false;
  //   },
  //   drive: function () {
  //     if (this.started) {
  //       alert(`${this.make} ${this.model} goes zoom zoom!`);
  //     } else {
  //       alert("You need to start the engine first.");
  //     }
  //   },
  // };

  // var taxi = {
  //   make: "Webville Motors",
  //   model: "Taxi",
  //   year: 1955,
  //   color: "yellow",
  //   passenger: 4,
  //   convertible: false,
  //   mileage: 281341,
  //   started: false,
  //   start: function () {
  //     this.started = true;
  //   },
  //   stop: function () {
  //     this.started = false;
  //   },
  //   drive: function () {
  //     if (this.started) {
  //       alert(`${this.make} ${this.model} goes zoom zoom!`);
  //     } else {
  //       alert("You need to start the engine first.");
  //     }
  //   },
  // };
  fiat.start();
  fiat.drive();
  fiat.addFuel(2);
  fiat.start();
  fiat.drive();
  fiat.drive();
  fiat.drive();
  fiat.stop();
};

export default Cars;
