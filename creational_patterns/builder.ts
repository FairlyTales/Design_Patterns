// some complex product which requires a lot of configuration
class Car {
  parktronic: boolean;
  powerfulEngine: boolean;

  constructor() {
    this.parktronic = false;
    this.powerfulEngine = false;
  }
}

// Builder provides specific implementations of the building steps. Our program may have several
// variations of Builders, implemented differently to allow even more configurability
class CarBuilder {
  car: Car;

  constructor() {
    this.car = new Car();
  }

  addParktronic() {
    this.car.parktronic = true;

    return this;
  }

  addPowerfulEngine() {
    this.car.powerfulEngine = true;

    return this;
  }

  build() {
    return this.car;
  }
}

// The Director is only responsible for executing the building steps in a particular
// sequence according to configuration in order to make builder easier to use. But strictly
// speaking, the Director is optional, since the client can control builders directly
class Director {
  static buildCheapCar() {
    return new CarBuilder()
      .build();
  }

  static buildMediumCar() {
    return new CarBuilder()
      .addParktronic()
      .build();
  }

  static buildPriceyCar() {
    return new CarBuilder()
      .addParktronic()
      .addPowerfulEngine()
      .build();
  }
}

console.log(Director.buildCheapCar());
console.log(Director.buildMediumCar());
console.log(Director.buildPriceyCar());
