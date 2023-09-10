/*
 Command is a behavioral design pattern that turns a request into a stand-alone object
 that contains all information about the request. This transformation lets you pass
 requests as a method arguments, delay or queue a request’s execution, and support
 undoable operations.
 */

interface ICommand {
  execute(): void;
}

interface IReceiver {
  doSomething(a: string): void;
}

/*
 Command class contains the actual logic for all commands. Commands aren’t limited to
 performing some action and returning a result. A command can be used to delegate
 any kind of action.
 */
class Command implements ICommand {
  private receiver: IReceiver;
  private readonly value: string;

  constructor(receiver: IReceiver, value: string) {
    this.receiver = receiver;
    this.value = value;
  }

  public execute(): void {
    console.log('Command method executed');
    this.receiver.doSomething(this.value);
    console.log('Receiver method executed');
  }
}

/*
 The Receiver classes contain some important business logic. They know how to
 perform all kinds of operations, associated with carrying out a request. In
 fact, any class may serve as a Receiver.
 */
class Receiver implements IReceiver {
  public doSomething(value: string): void {
    console.log(`Receiver method received ${value}`);
  }
}

// Invoker is associated with one or several commands. It sends a request to the command.
class Invoker {
  private command: ICommand;

  constructor(command: ICommand) {
    this.command = command;
  }

  public executeCommand(): void {
    this.command.execute();
  }
}

// Usage

const receiver = new Receiver();
const command = new Command(receiver, 'I\'m a value passed to the command by client');
const invoker = new Invoker(command);

invoker.executeCommand();
