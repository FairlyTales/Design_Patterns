// abstract class Component class declares common operations for both simple
// and complex objects of a composition
abstract class Component {
  protected parent!: Component | null;
  public name?: string;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Component): void {
  }

  public remove(component: Component): void {
  }

  // method that lets the client code figure out whether a component can bear children
  public isComposite(): boolean {
    return false;
  }

  // some business logic method
  public abstract operation(): string;
}

// Leaf is the end object of a composition and can't have any children
class Leaf extends Component {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public operation(): string {
    return this.name;
  }
}

// Composite is a complex object of a composition and can have both children and other composites
// these components usually delegate actual work to their children (leaves)
class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);

    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  /**
   * The Composite executes its primary logic in a particular way. It
   * traverses recursively through all its children, collecting and summing
   * their results. Since the composite's children pass these calls to their
   * children and so forth, the whole object tree is traversed as a result.
   */
  public operation(): string {
    const results = [];

    for(const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join(', ')})`;
  }
}

// usage

// creating composite with 2 leaves
const leaf1 = new Leaf('leaf1');
const leaf2 = new Leaf('leaf2');
const composite1 = new Composite();

composite1.add(leaf1);
composite1.add(leaf2);

console.log(composite1.operation());


// creating composite with 1 leaf and 1 composite
const leaf3 = new Leaf('leaf3');
const composite2 = new Composite();

composite2.add(leaf3);
composite2.add(composite1);

console.log(composite2.operation());
