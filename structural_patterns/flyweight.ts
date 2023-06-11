/*
 * Flyweight is a structural design pattern that lets us fit more objects into
 * the available amount of RAM by sharing common parts of state between multiple
 * objects instead of keeping all the data in each object.
 */

/**
 * The Flyweight stores a common portion of the state (also called intrinsic
 * state) that belongs to multiple real business entities. The Flyweight accepts
 * the rest of the state (extrinsic state, unique for each entity) via its
 * method parameters.
 */
class Flyweight {
  private readonly sharedState: any;

  constructor(sharedState: any) {
    this.sharedState = sharedState;
  }
}

/**
 * The Flyweight Factory creates and manages the Flyweight objects. It ensures
 * that flyweights are shared correctly. When the client requests a flyweight,
 * the factory either returns an existing instance or creates a new one if it
 * doesn't exist yet.
 */
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  constructor(initialFlyweights: string[][]) {
    for(const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  // Returns a Flyweight's string hash for a given state.
  private getKey(state: string[]): string {
    return state.join('_');
  }

  // Returns an existing Flyweight with a given state or creates a new one.
  public getFlyweight(sharedState: string[]): Flyweight {
    const key = sharedState.join('_');

    if (!(key in this.flyweights)) {
      // create new flyweight if not exist
      this.flyweights[key] = new Flyweight(sharedState);

      console.log('New flyweight created:');
    } else {
      console.log('Reusing existing flyweight:');
    }

    console.log(this.flyweights[key]);

    return this.flyweights[key];
  }

  public listFlyweights(): void {
    const numberOfFlyweights = Object.keys(this.flyweights).length;
    console.log(`Total flyweights: ${numberOfFlyweights}`);

    for(const key in this.flyweights) {
      console.log(key);
    }
  }
}

// usage

const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['BMW', 'M5', 'red'],
]);

factory.listFlyweights();

const newCar1 = factory.getFlyweight(['Toyota', 'Camry 3.5', 'black']);
const newCar2 = factory.getFlyweight(['BMW', 'X3', 'black']);
