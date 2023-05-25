interface IComponent {
  operation(): string;
}

class Component implements IComponent {
  public operation(): string {
    return 'Hello, world!';
  }
}

// The Decorator wraps an object and can extend its behavior in a certain way.
class Decorator implements IComponent {
  protected component: Component;

  constructor(component: IComponent) {
    this.component = component;
  }

  // decorator extends the wrapped component's method
  public operation(): string {
    return `This line was added by a decorator. And this was the original method result: ${this.component.operation()}`;
  }
}

const component = new Component();
const decoratedComponent = new Decorator(component);

console.log(component.operation());
console.log(decoratedComponent.operation());
