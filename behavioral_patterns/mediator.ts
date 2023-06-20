interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component2 = c2;

    this.component1.setMediator(this);
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator: reacts on operation A and triggers operation C:');
      this.component2.doC();
    }

    if (event === 'D') {
      console.log('Mediator: reacts on operation D and triggers operations B and C:');
      this.component1.doB();
      this.component2.doC();
    }
  }
}

/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */
class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator?: Mediator) {
    this.mediator = mediator!;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 */
class Component1 extends BaseComponent {
  public doA(): void {
    console.log('Component 1: does operation A.');
    this.mediator.notify(this, 'A');
  }

  public doB(): void {
    console.log('Component 1 does operation B.');
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  public doC(): void {
    console.log('Component 2 does operation C.');
    this.mediator.notify(this, 'C');
  }

  public doD(): void {
    console.log('Component 2 does operation D.');
    this.mediator.notify(this, 'D');
  }
}

// usage

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Component 1 triggers operation A.');
c1.doA();
