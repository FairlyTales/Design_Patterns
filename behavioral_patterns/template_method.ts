/*
 Template Method is a behavioral design pattern that defines the skeleton of an algorithm
 in the superclass but lets subclasses override specific steps of the algorithm without
 changing its structure.



 Factory Method is a specialization of Template Method. At the same time, a Factory
 Method may serve as a step in a large Template Method.

 Template Method is based on inheritance: it lets you alter parts of an algorithm by
 extending those parts in subclasses. Strategy is based on composition: you can alter
 parts of the object’s behavior by supplying it with different strategies that correspond
 to that behavior. Template Method works at the class level, so it’s static. Strategy
 works on the object level, letting you switch behaviors at runtime.
 */

abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.requiredOperation2();
  }

  protected abstract requiredOperation1(): void;

  protected abstract requiredOperation2(): void;

  protected baseOperation1(): void {
    console.log('Base operation 1');
  }

  protected baseOperation2(): void {
    console.log('Base operation 2');
  }
}

// usage

class ConcreteClass1 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log('Concrete operation 1');
  }

  protected requiredOperation2(): void {
    console.log('Concrete operation 1');
  }
}

const concreteClass1 = new ConcreteClass1();
concreteClass1.templateMethod();
