/*
 Memento is a behavioral design pattern that lets you save and restore the previous state
 of an object without revealing the details of its implementation.

  The Memento pattern suggests that you separate the object state into two classes: the
  Originator and the Memento. The Originator is the object whose state needs to be saved
  and restored, and it uses the Memento to store the state of the Originator.

  The Caretaker is an object that is responsible for the actual saving and restoring of
  the Originator state. In addition to that, the Caretaker never operates on or examines
  the contents of the Memento.
 */

class Memento {
  readonly state: string;

  constructor(state: string) {
    this.state = state;
  }
}

class Caretaker {
  values: Memento[] = [];

  constructor() {
    this.values = [];
  }

  addMemento(memento: Memento) {
    this.values.push(memento);
  }

  getMemento(index: number): Memento {
    return this.values[index];
  }
}

class Originator {
  state: string;

  constructor(state: string) {
    this.state = state;
  }

  setState(newState: string) {
    this.state = newState;
  }

  createMemento(): Memento {
    return new Memento(this.state);
  }

  restoreMemento(memento: Memento) {
    this.state = memento.state;
  }
}

const caretaker = new Caretaker();
const originator = new Originator('state 1');
console.log(originator.state); // state 1

caretaker.addMemento(originator.createMemento()); // save state 1
originator.setState('state 2'); // change state to state 2
console.log(originator.state); // state 2

originator.restoreMemento(caretaker.getMemento(0)); // restore state 1
console.log(originator.state); // state 1
