/*  >>>>>  EX  <<<<<
Реализуйте и экспортируйте функцию по-умолчанию, которая принимает на вход два
множества и возвращает множество, составленное из таких элементов, которые есть
в первом множестве, но нет во втором.

> difference(new Set([2, 1]), new Set([2, 3]));   // → [1]
*/

const difference = (setA, setB) =>
  new Set([...setA].filter(elem => !setB.has(elem)));

export default difference;

// // Testing
// const diffSet = difference(new Set([2, 1]), new Set([2, 3])); // new Set([1])
// diffSet.forEach((key, value) => console.log(`>> key: ${key},   val: ${value}`));
