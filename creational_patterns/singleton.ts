class Singleton {
  private static instance: Singleton;
  private static count: number;

  private constructor() {
    Singleton.count = 0;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public increaseCounter() {
    return Singleton.count++;
  }

  public getCounter() {
    return Singleton.count;
  }
}

// usage

const firstInstance = Singleton.getInstance();
const secondInstance = Singleton.getInstance();

if (firstInstance === secondInstance) {
  console.log('References to instance are the same');
}

firstInstance.increaseCounter();
secondInstance.increaseCounter();

if (firstInstance.getCounter() === secondInstance.getCounter()) {
  console.log('Values are the same');
}


