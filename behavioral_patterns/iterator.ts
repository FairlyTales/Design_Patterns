interface IAggregate {
  method(): void;
}

interface IIterator {
  next(): IAggregate;

  hasNext(): boolean;
}

class Iterator implements IIterator {
  index: number;
  aggregates: IAggregate[];

  constructor(aggregates: IAggregate[]) {
    this.index = 0;
    this.aggregates = aggregates;
  }

  next(): IAggregate {
    return this.aggregates[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.aggregates.length;
  }
}

// usage

const aggregates: IAggregate[] = [
  { method: () => console.log('aggregate 1') },
  { method: () => console.log('aggregate 2') },
  { method: () => console.log('aggregate 3') },
];

const iterator = new Iterator(aggregates);

while (iterator.hasNext()) {
  iterator.next().method();
}
