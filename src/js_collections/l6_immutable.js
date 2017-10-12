/*  >>>>>  EX  <<<<<
Реализуйте функции select, orderBy используя подход без мутации состояния.
*/

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)

    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)

    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
