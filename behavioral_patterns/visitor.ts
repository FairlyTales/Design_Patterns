/*
 Visitor is a behavioral design pattern that lets you separate algorithms from the
 objects on which they operate.

  The Visitor pattern suggests that you place the new behavior into a separate class
  called visitor, instead of trying to integrate it into existing classes. The original
  object that had to perform the behavior is now passed to one of the visitor’s methods
  as an argument, providing the method access to all necessary data contained within
  the object.

  The Visitor pattern is handy when you need to add some functionality to a class, but
  you can’t put it in there directly because it belongs to a different layer of the
  program or because it will require making changes to a lot of existing classes and
  retesting them.
 */

interface IVisitor {
  // An interface that custom Visitors should implement
  visit(visitable: any): void;
}

interface IVisitable {
  // An interface the concrete objects should implement that allows
  // the visitor to traverse a hierarchical structure of objects
  accept(visitor: IVisitor): void;
}

class Visitable implements IVisitable {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  accept(visitor: IVisitor) {
    visitor.visit(this);
  }
}

class Visitor implements IVisitor {
  visit(visitable: Visitable) {
    console.log(visitable.value);
  }
}

// Usage

const visitable = new Visitable(1);
const visitor = new Visitor();

visitable.accept(visitor);
