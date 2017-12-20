import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail, toString as listToString, length, map, filter, get } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  // Реализуйте функцию getMethod, которая производит поиск конкретной реализации
  // функции для переданного типа.

  const getTag = row => car(row);

  const getMethodName = row => car(cdr(row));

  const getMethodBody = row => cdr(cdr(row));

  const filterFunct = (tag, methodName) =>
    row => (getTag(row) === tag) && (getMethodName(row) === methodName);

  const filteredList = filter(filterFunct(car(obj), methodName), methods);

  if (isEmpty(filteredList)) {
    return null;
  }
  const myRow = get(0, filteredList);
  const findMethod = getMethodBody(myRow);
  return findMethod;
  // END
};
