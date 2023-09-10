/*
 Observer is a behavioral design pattern that lets you define a subscription mechanism
 to notify multiple objects about any events that happen to the object they’re observing.
 */

interface IObservable {
  subscribe(observer: IObserver): void;

  unsubscribe(observer: IObserver): void;

  someBusinessLogic(): void;

  notify(update: string): void;
}

interface IObserver {
  update(update: string): void;
}

// Class which is observed by observers
class Subject implements IObservable {
  observers: Set<IObserver>;

  constructor() {
    this.observers = new Set();
  }

  subscribe(observer: IObserver) {
    this.observers.add(observer);
  }

  unsubscribe(observer: IObserver) {
    this.observers.delete(observer);
  }

  notify(update: string) {
    this.observers.forEach((observer) => {
      observer.update(update);
    });
  }

  someBusinessLogic() {
    this.notify('Some business logic');
  }
}

class Observer implements IObserver {
  constructor(observable: IObservable) {
    observable.subscribe(this);
  }

  update(update: string) {
    console.log(`Observer received the following update: ${update}`);
  }
}

// Usage

const subject = new Subject();
const observer1 = new Observer(subject);

subject.someBusinessLogic();
