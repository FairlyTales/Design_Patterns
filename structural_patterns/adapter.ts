interface ITarget {
  request(): void;
}

interface IAdaptee {
  specificRequest(): void;
}

class Target implements ITarget {
  public request(): void {
    console.log('Target: Handling default request...');
  }
}

class Adaptee implements IAdaptee {
  public specificRequest(): void {
    console.log('Adaptee: Handling specific request...');
  }
}

class Adapter implements ITarget {
  private adaptee: IAdaptee;

  constructor(adaptee: IAdaptee) {
    this.adaptee = adaptee;
  }

  public request(): void {
    this.adaptee.specificRequest();
  }
}

// usage

const target = new Target();
const adaptee = new Adaptee();

// we can call request() on both the target, but on the adaptee, it will resul in an error
target.request();
// adaptee.request(); // error

// but we can wrap the adaptee in an adapter and call request() on it
const adapted = new Adapter(adaptee);
adapted.request();
