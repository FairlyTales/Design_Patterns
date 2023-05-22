interface Prototype {
  clone(): this;
}

type Primitive = number | string | boolean | symbol | bigint | undefined | null;

class PrototypeClass implements Prototype {
  public primitive: Primitive;
  public object: object;

  constructor(primitive: Primitive, object: object) {
    this.primitive = primitive;
    this.object = object;
  }

  public clone(): this {
    const clone = Object.assign({}, this);
    clone.object = Object.assign({}, this.object);

    return clone;

    // we can also use the following line for a deep copying:
    // return JSON.parse(JSON.stringify(this));

    // or use deep cloning functions in i.e. lodash, or implement our own
  }
}

const prototype = new PrototypeClass('primitive', { key: 'value' });

const firstClone = prototype.clone();
const secondClone = prototype.clone();

console.log(prototype);
console.log(firstClone);
console.log(secondClone);
