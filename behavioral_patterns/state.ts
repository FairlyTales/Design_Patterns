/*
 State is a behavioral design pattern that lets an object alter its behavior when its
 internal state changes. It appears as if the object changed its class.

 Not to be confused with object state, i.e., one of more attributes that can be copied as
 a snapshot, the State Pattern is more concerned about changing the handle of an object's
 method dynamically. This makes an object itself more dynamic and may reduce the need of
 many conditional statements.

 Instead of storing a value in an attribute, and then using conditional statements within
 an objects' method to produce different output, a subclass is assigned as a handle
 instead. The object/context doesn't need to know about the inner working of the assign
 subclass that the task was delegated to.

 In the state pattern, the behavior of an objects state is encapsulated within the
 subclasses that are dynamically assigned to handle it.
 */

abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

class Context {
  private state: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
    this.state.handle2();
  }
}

class ConcreteStateA extends State {
  public handle1(): void {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context to ConcreteStateB.');
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log('ConcreteStateA handles request2.');
  }
}

class ConcreteStateB extends State {
  public handle1(): void {
    console.log('ConcreteStateB handles request1.');
  }

  public handle2(): void {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context to ConcreteStateA.');
    this.context.transitionTo(new ConcreteStateA());
  }
}

// Usage

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
