/*  >>>>>  EX  <<<<<
Реализуйте ленивую версию Enumerable. Интерфейс включает в себя следующие методы:
select, where, orderBy, toArray.

    ПОДСКАЗКИ:
Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray,
вместо этого необходимо формировать коллекцию из отложенных вычислений.
*/

class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    const newColl = this.collection.slice();
    const newOps = this.operations.concat(fn);
    return new Enumerable(newColl, newOps);
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
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

    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  toArray() {
    return this.operations.reduce((accum, operation) => operation(accum), this.collection);
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
// /* IMMUTABLE */ console.log('> > > > EX3: SHOULD BE IMMUTABLE');
// const result = coll.where(car => car.brand === 'kia')
//   .where(car => car.year > 2011).select(car => car.model);
// putsArray(result.toArray()); // ['sorento', 'sportage']
// console.log('- - - - -');
// coll.collection.push({ brand: 'kia', model: 'optima', year: 2013 });
// putsArray(result.toArray()); // ['sorento', 'sportage']
