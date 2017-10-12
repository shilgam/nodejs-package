/*  >>>>>  EX  <<<<<
Реализуйте ленивую версию Enumerable. Интерфейс включает в себя следующие методы:
select, where, orderBy, toArray.

    ПОДСКАЗКИ:
Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray,
вместо этого необходимо формировать коллекцию из отложенных вычислений.
*/

class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    const selected = this.collection.map(fn);
    return new Enumerable(selected);
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
    const sorted = this.collection.slice().sort(comparator);
    return new Enumerable(sorted);
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
  // END
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
//
// const coll = new Enumerable(cars);
//
// // // Test EX1: select
// console.log('>>> select:');
// const selected = coll.select(car => car.model);
// putsArray(selected.toArray()); // ['m5', 'm4', 'sorento', 'rio', 'sportage']);
// // Test EX2: OrderBy
// console.log('>>> orderBy:');
// const sorted = coll.orderBy(car => car.model).select(car => car.model);
// putsArray(sorted.toArray()); // ["m4", "m5", "rio", "sorento", "sportage"]
