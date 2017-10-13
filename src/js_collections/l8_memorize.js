/*  >>>>>  EX  <<<<<
* Реализуйте свойство `length`, используя `getter`.
* Реализуйте мемоизацию в методе toArray. Используйте свойство `memo` для
хранения результата вычислений.
*/

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  // BEGIN (write your solution here)
  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      const newOps = this.operations;
      this.memo = newOps.reduce((accum, operation) => operation(accum), this.collection);
    }
    return this.memo;
  }
  // END
}

export default Enumerable;

// /* TESTING: */
// const putsArray = arr => arr.forEach(el => console.log(el));
//
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
//
// const coll = new Enumerable(cars);
//
// /* SELECT */ console.log('> > > > EX1: SELECT');
// const selected = coll.select(car => car.model);
// putsArray(selected.toArray()); // ['m5', 'm4', 'sorento', 'rio', 'sportage']);
// console.log('---------');
//
// /* ORDER BY */ console.log('> > > > EX2: ORDER BY');
// const sorted = coll.orderBy(car => car.model).select(car => car.model);
// putsArray(sorted.toArray()); // ["m4", "m5", "rio", "sorento", "sportage"]
// console.log('---------');
//
// /* IMMUTABLE */ console.log('> > > > EX3: SHOULD BE IMMUTABLE #2');
// const result = coll
//   .where(car => car.brand === 'kia')
//   .where(car => car.year > 2011);
//
// const result2 = coll
//   .orderBy(car => car.year, 'asc')
//   .where(car => car.model === 'sorento');
//
// putsArray(result2.toArray()); // length .toBe(1);
// console.log('---------');
// putsArray(result2.toArray()); // length .toBe(1);
// console.log('---------');
// console.log(`>>> result.length: ${result2.length}`); // 1
