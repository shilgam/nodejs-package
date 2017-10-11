/*  >>>>>  EX 1 <<<<< Select
Реализуйте метод select, который отображает (принцип работы как у функции map)
коллекцию, другими словами, извлекает из элементов коллекции нужные данные и
возвращает объект с новой (отображенной) коллекцией из этих данных.

> const cars = [
>   { brand: 'bmw', model: 'm5', year: 2014 },
>   { brand: 'bmw', model: 'm4', year: 2013 },
>   { brand: 'kia', model: 'sorento', year: 2014 },
>   { brand: 'kia', model: 'rio', year: 2010 },
>   { brand: 'kia', model: 'sportage', year: 2012 },
> ];
> coll = new Enumerable(cars);

> // [car] => [model]
> const result = coll.select(car => car.model);

> assert.deepEqual(result.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);

    >>>>>  EX 2 <<<<<  OrderBy
Реализуйте метод orderBy, который сортирует коллекцию на основе переданных данных.

Принимаемые параметры:
1) Функция, возвращающая значение, по которому будет происходить сортировка.
2) Направление сортировки: asc - по возрастанию, desc - по убыванию (по умолчанию - asc).

> coll = new Enumerable(cars);

> const result = coll.orderBy(car => car.year, 'desc')
>   .where(car => car.brand === 'bmw')
>   .select(car => car.model);

> assert.deepEqual(result.toArray(), ['m5', 'm4']);

    ПОДСКАЗКИ
Для выполнения сортировки воспользуйтесь встроенной функцией: sort.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(fn, message = 'asc') {
    const comparator = (a, b) => {
      const elA = fn(a);
      const elB = fn(b);
      const compareResult = message === 'asc' ? 1 : -1;

      if (elA > elB) {
        return compareResult;
      } else if (elA < elB) {
        return -compareResult;
      }

      return 0;
    };

    this.collection.sort(comparator);
    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
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
