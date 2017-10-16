/*  >>>>>  EX  <<<<<
Это упражнение рассчитано на максимальное использование знаний последних уроков.
К сожалению, невозможно тестами убедиться в том, что ваше решение будет
содержать деструктивное присваивание или rest оператор, поэтому вам нужно
самостоятельно прикладывать усилия для их использования.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
список машин (в виде обычного js массива с объектами), а возвращает объект, в
котором свойство - это год выпуска, а значение - это количество машин для
соответствующего года.

Порядок свойств в результирующем объекте не важен.

// Примеры использования (перенесены в раздел TESTING).

Решите эту задачу, используя итеративный процесс.
Он хорош тем, что позволяeт задействовать сразу все, что нужно.

    ПОДСКАЗКИ: Вам понадобятся:
1)  const [first, ...rest] = arr
2)  const { propertyName } = obj
3)  { ...acc, [propertyName]: value }
*/

// BEGIN (write your solution here)
const getCarsCountByYear = cars => cars.reduce((accum, currCar) => {
  const quantity = cars.filter(car => car.year === currCar.year).length;
  return { ...accum, [currCar.year]: quantity };
},
0);

export default getCarsCountByYear;

// END

/* TESTING */
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
//
// console.log(getCarsCountByYear(cars));
/*  {
      2010: 1,
      2012: 1,
      2013: 1,
      2014: 2,
    }; */
