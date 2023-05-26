class SubsystemA {
  // method with some business logic
  public operationA(): string {
    return 'SubsystemA';
  }
}

class SubsystemB {
  // method with some business logic
  public operationB(): string {
    return 'SubsystemB';
  }
}

class Facade {
  protected subsystemA: SubsystemA;
  protected subsystemB: SubsystemB;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
  }

  // facade method that calls complex methods of the subsystems
  // to perform some complex business logic
  public operation(): string {
    let result = ''

    result += this.subsystemA.operationA();
    result += ' ';
    result += this.subsystemB.operationB();

    return result;
  }
}

// client code

// now instead of this:
const subsystemA = new SubsystemA();
const subsystemB = new SubsystemB();

const operationAResult = subsystemA.operationA();
const operationBResult = subsystemB.operationB();

const finalResult = operationAResult + ' ' + operationBResult;
console.log(finalResult);

// we can just do this:
const facade = new Facade();
console.log(facade.operation());
