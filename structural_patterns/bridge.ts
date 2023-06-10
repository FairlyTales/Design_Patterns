/**
 * The Implementation defines the interface for all implementation classes. It
 * doesn't have to match the Abstraction's interface. In fact, the two
 * interfaces can be entirely different. Typically the Implementation interface
 * provides only primitive operations, while the Abstraction defines higher-
 * level operations based on those primitives.
 */
interface Implementation {
  operationImplementation(): string;
}

interface Abstraction {
  operation(): string;
}

/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
class AbstractionA implements Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction A: Base operation with:\n${result}`;
  }
}

class AbstractionB implements Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction B: Base operation with:\n${result}`;
  }
}

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */
class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}

// usage

const implementationA = new ConcreteImplementationA();
const implementationB = new ConcreteImplementationB();

// creating 4 separate abstractions with different implementations
// note that abstractions are not coupled to implementations, and they
// can be changed independently
const abstractionAImplementationA = new AbstractionA(implementationA);
const abstractionAImplementationB = new AbstractionA(implementationB);
const abstractionBImplementationA = new AbstractionB(implementationA);
const abstractionBImplementationB = new AbstractionB(implementationB);

console.log(abstractionAImplementationA.operation());
console.log(abstractionAImplementationB.operation());
console.log(abstractionBImplementationA.operation());
console.log(abstractionBImplementationB.operation());
