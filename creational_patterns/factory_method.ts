interface Product {
  name: string;
}

// class that provides an abstraction for all concrete product classes
abstract class ConcreteProduct implements Product {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductB';
  }
}

// Factory class. Declares the Factory method that will return the object requested from it
// by using the concrete creators classes to create it
class Creator {
  // the factory method
  static createObject(someProperty?: string): Product {
    switch (someProperty) {
      case 'a':
        return new ConcreteProductA();
      case 'b':
        return new ConcreteProductB();
    }
  }
}

// The Client
const productA = Creator.createObject('a');
console.log(productA.name);

const productB = Creator.createObject('b');
console.log(productB.name);

const productDefault = Creator.createObject();
console.log(productDefault.name);
