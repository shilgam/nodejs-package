/*  >>>>>  EX  <<<<<
Реализуйте функции select, orderBy используя подход без мутации состояния.
*/

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    this.collection = this.collection.map(fn);
    return this;
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const comparator = (a, b) => {
      const elA = fn(a);
      const elB = fn(b);
      const compareResult = direction === 'asc' ? 1 : -1;

      if (elA > elB) {
        return compareResult;
      } else if (elA < elB) {
        return -compareResult;
      }

      return 0;
    };

    this.collection.sort(comparator);
    return this;
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

// // TESTING
// const putsArray = arr => arr.forEach(el => console.log(el));
//
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
// // putsArray(cars);
//
// const coll = new Enumerable(cars);
//
// // // Test EX1: select
// // const models = coll.select(car => car.model);
// // putsArray(models.toArray()); // ['m5', 'm4', 'sorento', 'rio', 'sportage']);
//
// // Test EX2: OrderBy
// const ordItems = coll.orderBy(car => car.model).select(car => car.model);
// putsArray(ordItems.toArray()); // ["m4", "m5", "rio", "sorento", "sportage"]
