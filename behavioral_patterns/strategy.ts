/*
 Strategy is a behavioral design pattern that lets you define a family of algorithms,
 put each of them into a separate class, and make their objects interchangeable.

 The context delegates the work to a linked strategy object instead of executing it on its own.

 The context isn’t responsible for selecting an appropriate algorithm for the job.
 Instead, the client passes the desired strategy to the context. In fact, the context
 doesn’t know much about strategies. It works with all strategies through the same
 generic interface, which only exposes a single method for triggering the algorithm
 encapsulated within the selected strategy.

 This way the context becomes independent of concrete strategies, so you can add new
 algorithms or modify existing ones without changing the code of the context or other
 strategies.
 */

interface Strategy {
  doSomething(): void;
}

// The Context defines the interface of interest to clients.
class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public doSomething(): void {
    return this.strategy.doSomething();
  }
}

// usage

class StrategyA implements Strategy {
  public doSomething(): void {
    console.log('Strategy A');
  }
}

class StrategyB implements Strategy {
  public doSomething(): void {
    console.log('Strategy B');
  }
}

const contextA = new Context(new StrategyA());
const contextB = new Context(new StrategyB());
contextA.doSomething();
contextB.doSomething();
