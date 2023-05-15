interface Product {
  name: string;
}

interface Factory {
  createProduct(someProperty?: number): Product;
}

// Factory A (family of products A)

interface ProductA extends Product {
  propertyA: string;
}

abstract class ConcreteProductA implements ProductA {
  name = '';
  propertyA = '';
}

class ConcreteProductA_1 extends ConcreteProductA {
  constructor() {
    super();
    this.name = 'ConcreteProductA_1';
    this.propertyA = 'A_1';
  }
}

class ConcreteProductA_2 extends ConcreteProductA {
  constructor() {
    super();
    this.name = 'ConcreteProductA_2';
    this.propertyA = 'A_2';
  }
}

class Factory_A implements Factory {
  public createProduct(someProperty?: number): ProductA {
    switch (someProperty) {
      case 1:
        return new ConcreteProductA_1();
      case 2:
        return new ConcreteProductA_2();
    }
  }
}

//
// --------------------------------------------------------
//

// Factory B (family of products B)

interface ProductB extends Product {
  propertyB: string;
}

abstract class ConcreteProductB implements ProductB {
  name = '';
  propertyB = '';
}

class ConcreteProductB_1 extends ConcreteProductB {
  constructor() {
    super();
    this.name = 'ConcreteProductB_1';
    this.propertyB = 'B_1';
  }
}

class ConcreteProductB_2 extends ConcreteProductB {
  constructor() {
    super();
    this.name = 'ConcreteProductB_2';
    this.propertyB = 'B_2';
  }
}

class Factory_B implements Factory {
  public createProduct(someProperty?: number): ProductB {
    switch (someProperty) {
      case 1:
        return new ConcreteProductB_1();
      case 2:
        return new ConcreteProductB_2();
    }
  }
}

//
// --------------------------------------------------------
//

// Abstract Factory

class AbstractFactory {
  static getFactory(factoryName: string): Factory {
    switch (factoryName) {
      case 'A':
        return new Factory_A();
      case 'B':
        return new Factory_B();
    }
  }
}

// The Client

const factoryA = AbstractFactory.getFactory('A')
const productA_1 = factoryA.createProduct(1);
console.log(productA_1);

const factoryB = AbstractFactory.getFactory('B')
const productB_2 = factoryB.createProduct(2);
console.log(productB_2);


