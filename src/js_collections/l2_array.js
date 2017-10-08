/*  >>>>>  EX  <<<<<
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив
и возвращает новый массив, полученный из исходного удалением повторяющихся элементов.

>>> uniq([2, 1, 2, 3]); // [2, 1, 3]

    ПОДСКАЗКИ
Для формирования новой коллекции (другой конфигурации) из старой подходит reduce.
Метод arr.includes(value) проверяет, входит ли элемент в коллекцию.
Метод arr.concat(value) объединяет исходный массив (на котором вызван метод) с
другими массивами и/или значениями (переданными в качестве аргументов). Метод
иммутабелен, возвращает новый массив. Примеры и подробности использования см. в
документации:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/

const uniq = (array) => {
  const callbackFunc = (acc, elem) =>
    acc.includes(elem) ? acc : acc.concat(elem);

  return array.reduce(callbackFunc, []);
};

export default uniq;

// // testing
// const arr1 = [1, 2, 3, 2, 5, 5, 7];
// const newArr = uniq(arr1);
// console.log(newArr);
